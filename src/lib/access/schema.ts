import { z } from "zod";

export const accessSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Please enter your work email.")
    .max(254, "That email is too long.")
    .pipe(z.email("Please enter a valid email address.")),
});
