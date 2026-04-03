// Server-side observability utilities
// Sentry has been removed - using PostHog for error tracking instead

export const initializeServerObservability = (): void => {
  // Errors are now captured by PostHog via the client-side integration
  // Server errors are logged to console and can be viewed in Vercel logs
  console.log("Observability initialized (PostHog mode)");
};
