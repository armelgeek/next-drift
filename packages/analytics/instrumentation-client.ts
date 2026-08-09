import posthog from "posthog-js";
import { keys } from "./keys";

export const initializeAnalytics = () => {
  const { NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST } = keys();

  if (
    !NEXT_PUBLIC_POSTHOG_KEY ||
    !NEXT_PUBLIC_POSTHOG_HOST ||
    typeof NEXT_PUBLIC_POSTHOG_KEY !== "string" ||
    typeof NEXT_PUBLIC_POSTHOG_HOST !== "string"
  ) {
    return;
  }

  posthog.init(NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: NEXT_PUBLIC_POSTHOG_HOST as string,
    defaults: "2025-05-24",
  });
};
