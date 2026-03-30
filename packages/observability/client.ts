// Client-side observability utilities
// Sentry has been removed - using PostHog for error tracking instead

export const initializeClientObservability = (): void => {
  // Errors are now captured by PostHog
  // Console logs can be viewed in browser dev tools
  console.log("Client observability initialized (PostHog mode)");
};