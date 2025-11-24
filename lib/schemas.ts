import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 chars"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 chars"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
