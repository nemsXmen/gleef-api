import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { UsersModule } from './users/user.module';
import { ProjectModule } from './projects/project.module';
import { LanguageModule } from './languages/language.module';
import { AuthGuard } from './guards/auth.guard';
import { TranslationModule } from './translations/translation.module';

@Module({
  imports: [UsersModule, ProjectModule, LanguageModule, TranslationModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule {}
