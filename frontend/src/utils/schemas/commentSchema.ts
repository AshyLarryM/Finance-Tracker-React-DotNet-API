import { z } from "zod";

export const commentSchema = z.object({
    title: z.string().min(5, "Title Must be at least 5 characters").max(280, "Title Must not be more than 280 characters"),
    content: z.string().min(5, "Content must be at least 5 characters").max(280, "Content must not be more than 280 characters."),
})

export type CommentFormInputs = z.infer<typeof commentSchema>;