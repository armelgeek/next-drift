import { initializeObservability } from "@repo/observability/instrumentation";
import { analytics as posthog } from "@repo/analytics/server";

export const register = async () => {
  await initializeObservability();

  // Initialize server-side analytics
  if (posthog) {
    // Analytics available for server-side tracking
    void posthog;
  }
};
