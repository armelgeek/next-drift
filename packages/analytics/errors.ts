import posthog from "posthog-js";
import { PostHog as PostHogNode } from "posthog-node";
import { keys } from "./keys";

/**
 * Error tracking with PostHog
 * Captures exceptions and errors for analysis
 */

// Client-side error capture
export const captureError = (
  error: unknown,
  context?: Record<string, unknown>
) => {
  const message = error instanceof Error ? error.message : String(error);

  posthog.capture("$exception", {
    $exception_message: message,
    ...context,
  });
};

export const captureMessage = (
  message: string,
  level: "error" | "warning" | "info" = "error"
) => {
  posthog.capture("$exception", {
    $exception_message: message,
    $exception_level: level,
  });
};

// Server-side error capture
export const serverCaptureError = async (
  error: unknown,
  distinctId?: string,
  context?: Record<string, unknown>
) => {
  const apiKey = keys().NEXT_PUBLIC_POSTHOG_KEY;

  if (!apiKey) {
    return;
  }

  const client = new PostHogNode(apiKey, {
    host: keys().NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
  });

  client.capture({
    event: "$exception",
    distinctId: distinctId || "server",
    properties: {
      $exception_message:
        error instanceof Error ? error.message : String(error),
      ...context,
    },
  });

  await client.shutdown();
};

// Error boundary handler for React
export const onError = (
  error: Error,
  errorInfo: { componentStack?: string }
) => {
  captureError(error, {
    componentStack: errorInfo.componentStack,
    $exception_type: "react_error_boundary",
  });
};
