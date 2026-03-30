// Instrumentation for Next.js
// Sentry has been removed - using PostHog instead

export const initializeObservability = async () => {
  // No-op - observability is handled by PostHog
  console.log("Observability instrumentation initialized (PostHog mode)");
};