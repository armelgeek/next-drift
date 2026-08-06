import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    server: {
      RESEND_FROM: z.union([z.literal(""), z.string().email()]).default(""),
      RESEND_TOKEN: z.union([z.literal(""), z.string().startsWith("re_")]).default(""),
    },
    runtimeEnv: {
      RESEND_FROM: process.env.RESEND_FROM,
      RESEND_TOKEN: process.env.RESEND_TOKEN,
    },
  });
