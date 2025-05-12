import { z } from "zod";

export const TranslationSchema = z.object({
    key: z.string().min(1, { message: "Key is required" }),
    description: z.string().optional(),
    translations: z.record(z.string().length(2, { message: "Language code is required" }), z.string().min(1, { message: "Value is required" })),
});

export type TranslationSchemaType = z.infer<typeof TranslationSchema>;