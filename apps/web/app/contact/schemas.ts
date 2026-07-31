import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  date: z.date({ message: "Please select a date" }),
  resume: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Resume must be less than 5MB",
    })
    .refine((file) => ["application/pdf", "application/msword"].includes(file.type), {
      message: "Resume must be PDF or Word document",
    }),
});

export type ContactInput = z.infer<typeof contactSchema>;
