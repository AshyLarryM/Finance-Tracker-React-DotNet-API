import { z } from "zod";

export const loginSchema = z.object({
    userName: z.string().min(1, "Username is required"),
    password: z.string().min(12, "Passwords must be at least 12 characters."),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
    email: z.string().min(1, "Email is required"),
    userName: z.string().min(1, "Username is required"),
    password: z.string().min(12, "Passwords must be at least 12 characters."),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;