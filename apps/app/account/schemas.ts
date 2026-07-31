import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, "Name required"),
  bio: z.string().max(500).optional().or(z.literal("")),
  company: z.string().max(100).optional().or(z.literal("")),
  location: z.string().max(100).optional().or(z.literal("")),
});

export type ProfileInput = z.infer<typeof profileSchema>;

export const passwordSchema = z
  .object({
    currentPassword: z.string().min(8, "Min 8 characters"),
    newPassword: z.string().min(8, "Min 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.newPassword === d.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine((d) => d.newPassword !== d.currentPassword, {
    message: "New password must differ from current",
    path: ["newPassword"],
  });

export type PasswordInput = z.infer<typeof passwordSchema>;

export const preferencesSchema = z.object({
  emailNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  preferredTheme: z.enum(["light", "dark", "system"]),
  language: z.enum(["en", "fr"]),
});

export type PreferencesInput = z.infer<typeof preferencesSchema>;

export const inviteSchema = z.object({
  email: z.string().email("Invalid email"),
  role: z.enum(["member", "admin", "owner"]),
});

export type InviteInput = z.infer<typeof inviteSchema>;
