import type { CircuitBreaker } from "./circuit-breaker.js";

/**
 * Health check status for circuit breakers
 */
export interface CircuitBreakerHealth {
  status: "healthy" | "degraded" | "unhealthy";
  services: Record<
    string,
    {
      state: "CLOSED" | "OPEN" | "HALF_OPEN";
      healthy: boolean;
      failureRate: number;
      lastFailure: string | null;
    }
  >;
}

const circuitBreakers = new Map<string, CircuitBreaker>();

/**
 * Register a circuit breaker for health monitoring
 */
export function registerCircuitBreaker(
  name: string,
  breaker: CircuitBreaker
): void {
  circuitBreakers.set(name, breaker);
}

/**
 * Get health status of all registered circuit breakers
 */
export function getCircuitBreakerHealth(): CircuitBreakerHealth {
  const services: CircuitBreakerHealth["services"] = {};
  let healthyCount = 0;
  let openCount = 0;

  for (const [name, breaker] of circuitBreakers) {
    const metrics = breaker.getMetrics();
    const isHealthy = metrics.state === "CLOSED";
    const failureRate =
      metrics.totalRequests > 0
        ? (metrics.totalFailures / metrics.totalRequests) * 100
        : 0;

    services[name] = {
      state: metrics.state,
      healthy: isHealthy,
      failureRate: Math.round(failureRate * 100) / 100,
      lastFailure: metrics.lastFailureTime
        ? new Date(metrics.lastFailureTime).toISOString()
        : null,
    };

    if (isHealthy) {
      healthyCount++;
    } else if (metrics.state === "OPEN") {
      openCount++;
    }
  }

  const total = Object.keys(services).length;
  let status: CircuitBreakerHealth["status"] = "healthy";

  if (openCount > 0) {
    status = "degraded";
  }
  if (openCount === total && total > 0) {
    status = "unhealthy";
  }

  return {
    status,
    services,
  };
}

/**
 * Get metrics for all registered circuit breakers
 */
export function getAllCircuitBreakerMetrics(): Record<
  string,
  ReturnType<CircuitBreaker["getMetrics"]>
> {
  const metrics: Record<string, ReturnType<CircuitBreaker["getMetrics"]>> = {};

  for (const [name, breaker] of circuitBreakers) {
    metrics[name] = breaker.getMetrics();
  }

  return metrics;
}
