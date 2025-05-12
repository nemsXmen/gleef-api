import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [],
  controllers: [LanguageController],
  providers: [LanguageService, PrismaService],
})
export class LanguageModule {}
