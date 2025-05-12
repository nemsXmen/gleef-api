import { Module } from "@nestjs/common";
import { TranslationKeyService } from "./translation.key.service";

@Module({
    providers: [TranslationKeyService],
    exports: [TranslationKeyService],
})
export class TranslationKeyModule {}