import { BadRequestException, Injectable } from '@nestjs/common';
import { ProjectService } from 'src/projects/project.service';
import { PrismaService } from 'src/services/prisma.service';
import { UsersService } from 'src/users/user.service';
import { UpsertTranslationDto } from './dto/upsert.translation.dto';
import { Prisma, Translation } from 'generated/prisma';
import { TranslationKeyService } from 'src/translation-key/translation.key.service';
import { connect } from 'http2';

@Injectable()
export class TranslationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projectService: ProjectService,
    private readonly userService: UsersService,
  ) {}

  async upsertTranslation(
    upsertTranslationDto: UpsertTranslationDto,
    userId: number,
  ): Promise<{ success: boolean; projectId: number }> {
    const { projectId, translations } = upsertTranslationDto;

    const [porject, user, allLangs] = await Promise.all([
      this.projectService.project({
        id: upsertTranslationDto.projectId,
      }),
      this.userService.user({
        id: userId,
      }),
      this.prisma.language.findMany(),
    ]);

    if (!user) {
      throw new BadRequestException({
        message: 'User not found',
      });
    }

    if (!porject) {
      throw new BadRequestException({
        message: 'Project not found',
      });
    }

    const langMap = new Map(allLangs.map((l) => [l.code, l.id]));
    const translationKeyMap = new Map<string, number>();

    for (const t of translations) {
      const translationKey = await this.prisma.translationKey.upsert({
        where: {
          projectId_key: {
            projectId: projectId,
            key: t.key,
          },
        },
        update: {
          description: t.description || undefined,
        },
        create: {
          projectId,
          key: t.key,
          description: t.description,
        },
      });

      const translationKeyId = translationKey.id;

      for (const lang in t.translations) {
        const languageId = langMap.get(lang);
        if (!languageId) throw new Error(`Langue "${lang}" non trouvée.`);

        const existing = await this.prisma.translation.findUnique({
          where: {
            translationKeyId_languageId: {
              languageId,
              translationKeyId,
            },
          },
        });

        if (existing) {
          if (existing.value !== t.translations[lang]) {
            // Mise à jour + historique
            await this.prisma.$transaction([
              this.prisma.translation.update({
                where: { id: existing.id },
                data: {
                  value: t.translations[lang],
                  editedBy: userId,
                },
              }),
              this.prisma.translationHistory.create({
                data: {
                  translationId: existing.id,
                  oldValue: existing.value,
                  newValue: t.translations[lang],
                  editedBy: userId,
                },
              }),
            ]);
          }
        } else {
          await this.prisma.translation.create({
            data: {
              translationKeyId: translationKeyId,
              languageId: languageId,
              value: t.translations[lang],
              editedBy: userId,
            },
          });
        }
      }

      translationKeyMap.set(t.key, translationKeyId);
    }

    await this.prisma.translationKey.deleteMany({
      where: {
        id: {
          notIn: Array.from(translationKeyMap.values()),
        },
        projectId
      },
    });

    return { success: true, projectId };
  }

  async getProjectTranslations(params: {
    projectId: number;
  }): Promise<{ translations: UpsertTranslationDto["translations"] }> {
    const { projectId } = params;
  
    const translations = await this.prisma.translation.findMany({
      where: {
        translationKey: {
          projectId,
        },
      },
      include: {
        translationKey: true,
        language: true,
      },
      orderBy: {
        language: {
          name: "asc",
        },
      },
    });
  
    const grouped = translations.reduce((acc, curr) => {
      const key = curr.translationKey.key;
  
      if (!acc[key]) {
        acc[key] = {
          key,
          description: curr.translationKey.description ?? undefined,
          translations: {} as Record<string, string>,
        };
      }
  
      acc[key].translations[curr.language.code] = curr.value;
  
      return acc;
    }, {} as Record<string, UpsertTranslationDto["translations"][0]>);
  
    return {
      translations: Object.values(grouped),
    };
  }

  async getTranslationsByLang(params: {
    projectId: number;
    lang: string;
  }): Promise<{ key: string; value: string }[]> {
    const { projectId, lang } = params;

    const translations = await this.prisma.translation.findMany({
      where: {
        translationKey: {
          projectId,
        },
        language: {
          code: lang,
        },
      },
      include: {
        translationKey: true,
      },
    });

    return translations.map((t) => ({
      key: t.translationKey.key,
      value: t.value,
    }));
  }
  
}
