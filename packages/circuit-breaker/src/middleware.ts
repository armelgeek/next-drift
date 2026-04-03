import {
  type CircuitBreaker,
  createCircuitBreaker,
} from "./circuit-breaker.js";

/**
 * Pre-configured circuit breakers for common external services
 */

/**
 * Circuit breaker for Clerk authentication service
 * - Lower threshold since auth is critical
 * - Faster reset since users need to log in
 */
export const clerkCircuitBreaker = createCircuitBreaker("clerk", {
  failureThreshold: 3,
  resetTimeout: 15_000, // 15 seconds
  successThreshold: 2,
});

/**
 * Circuit breaker for PostHog analytics
 * - Higher threshold since analytics can tolerate failures
 * - Longer reset time since not critical path
 */
export const posthogCircuitBreaker = createCircuitBreaker("posthog", {
  failureThreshold: 10,
  resetTimeout: 60_000, // 1 minute
  successThreshold: 3,
  isFailure: (error: unknown) => {
    // Analytics failures shouldn't break the app
    // Only count as failure if it's a server error (5xx)
    if (error instanceof Error) {
      const match = error.message.match(/\b(5\d{2})\b/);
      return !!match;
    }
    return false;
  },
});

/**
 * Circuit breaker for Polar payments
 * - Medium threshold for payment processing
 * - Careful with failures since money is involved
 */
export const polarCircuitBreaker = createCircuitBreaker("polar", {
  failureThreshold: 3,
  resetTimeout: 30_000, // 30 seconds
  successThreshold: 3,
});

/**
 * Circuit breaker for BaseHub CMS
 * - Higher threshold for content
 * - Can tolerate some failures for non-critical content
 */
export const basehubCircuitBreaker = createCircuitBreaker("basehub", {
  failureThreshold: 5,
  resetTimeout: 45_000, // 45 seconds
  successThreshold: 3,
});

/**
 * Generic middleware to wrap any function with circuit breaker
 */
export function withCircuitBreaker<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  breaker: CircuitBreaker
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  return async (...args: Parameters<T>): Promise<ReturnType<T>> =>
    breaker.execute(() => fn(...args));
}
