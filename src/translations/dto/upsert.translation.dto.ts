import { z } from "zod";
import { TranslationSchema } from "./translation.schema.dto";
import { createZodDto } from "nestjs-zod";

const UpsertTranslationDtoSchema = z.object({
    projectId: z.number().int().min(1, { message: "ProjectId is required" }),
    translations: z.array(TranslationSchema),
});

export class UpsertTranslationDto extends createZodDto(UpsertTranslationDtoSchema) {}