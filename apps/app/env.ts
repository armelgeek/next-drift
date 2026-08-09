import { keys as auth } from "@repo/auth/keys";
import { keys as database } from "@repo/database/keys";
import { keys as email } from "@repo/email/keys";
import { keys as flags } from "@repo/feature-flags/keys";
import { keys as core } from "@repo/next-config/keys";
import { keys as notifications } from "@repo/notifications/keys";
import { keys as observability } from "@repo/observability/keys";
import { keys as rateLimit } from "@repo/rate-limit/keys";
import { keys as security } from "@repo/security/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [
    auth(),
    core(),
    database(),
    email(),
    flags(),
    notifications(),
    observability(),
    rateLimit(),
    security(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
