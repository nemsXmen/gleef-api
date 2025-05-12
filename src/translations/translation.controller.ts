import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { TranslationService } from './translation.service';
import { GetCurrentUserId } from 'src/commons/GetCurrentUserId';
import { UpsertTranslationDto } from './dto/upsert.translation.dto';
import { unflatten } from 'src/services/utils';
import { Response } from 'express';

@Controller('api/translations')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post('upsert')
  async upsertTranslation(
    @Body() upsertTranslationDto: UpsertTranslationDto,
    @GetCurrentUserId() userId: number,
  ) {
    console.log({ userId });

    return this.translationService.upsertTranslation(
      upsertTranslationDto,
      userId,
    );
  }

  @Get('project/:projectId')
  async getTranslations(@Param('projectId') projectId: string) {
    return this.translationService.getProjectTranslations({
      projectId: +projectId,
    });
  }

  @Get('download/:projectId/:lang')
  async downloadTranslationFile(
    @Param('lang') lang: string,
    @Param('projectId') projectId: number,
    @Res() res: Response,
  ): Promise<any> {
    const translations = await this.translationService.getTranslationsByLang({
      projectId: +projectId,
      lang,
    });

    const flatTranslations = translations.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {});

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="${lang}.json"`);
    res.send(unflatten(flatTranslations));
  }
}
