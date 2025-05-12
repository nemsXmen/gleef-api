import { Module } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { TranslationKeyService } from "src/translation-key/translation.key.service";
import { TranslationService } from "./translation.service";
import { TranslationController } from "./translation.controller";
import { ProjectService } from "src/projects/project.service";
import { UsersService } from "src/users/user.service";

@Module({
    imports: [],
    controllers: [TranslationController],
    providers: [TranslationKeyService, PrismaService, TranslationService, ProjectService,UsersService],
    exports: [],
})
export class TranslationModule {}