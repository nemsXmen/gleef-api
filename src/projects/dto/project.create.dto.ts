import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const CreateProjectSchema = z.object({
    name: z.string({ required_error: "Name is required" }),
    description: z.string().optional(),
});

export class CreateProjectDto  extends createZodDto(CreateProjectSchema) {}