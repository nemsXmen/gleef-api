
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const CreateUserSchema = z.object({
    username: z.string({ required_error: "Username is required" }),
    password: z.string({ required_error: "Password is required" }),
});

export class CreateUserDto extends createZodDto(CreateUserSchema) {}