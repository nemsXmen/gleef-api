import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const LanguageCreateDtoSchema = z.object({
    code: z.string({ required_error: "Code is required" }).length(2, { message: "Code must be 2 characters long" }),
    name: z.string({ required_error: "Name is required" }),
});

export class LanguageCreateDto extends createZodDto(LanguageCreateDtoSchema) {}