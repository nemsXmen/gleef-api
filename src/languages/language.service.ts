import { Injectable } from "@nestjs/common";
import { Language, Prisma } from "generated/prisma";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class LanguageService {
    constructor(private readonly prisma: PrismaService) {}

    async language(languageWhereUniqueInput: Prisma.LanguageWhereUniqueInput): Promise<Language | null> {
        return this.prisma.language.findUnique({
            where: languageWhereUniqueInput,
        });
    }

    async languages(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.LanguageWhereUniqueInput;
        where?: Prisma.LanguageWhereInput;
        orderBy?: Prisma.LanguageOrderByWithRelationInput;
    }): Promise<Language[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.language.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async countLanguages(where?: Prisma.LanguageWhereInput): Promise<number> {
        return this.prisma.language.count({
            where,
        });
    }

    async createLanguage(data: Prisma.LanguageCreateInput): Promise<Language> {
        return this.prisma.language.create({
            data,
        });
    }
}