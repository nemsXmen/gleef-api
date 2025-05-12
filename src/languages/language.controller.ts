import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { LanguageService } from "./language.service";
import { LanguageCreateDto } from "./dto/language.create.dto";

@Controller("api/languages")
export class LanguageController {
    constructor(private readonly languageService: LanguageService) {}

    @Get()
    async findAll() {
        return this.languageService.languages({
            skip: 0,
            take: 100,
            orderBy: {
                name: "asc",
            },
        });
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.languageService.language({
            id: +id,
        });
    }

    @Post("")
    async create(@Body() createLanguageDto: LanguageCreateDto) {
        return this.languageService.createLanguage({
            code: createLanguageDto.code,
            name: createLanguageDto.name,
        });
    }
}