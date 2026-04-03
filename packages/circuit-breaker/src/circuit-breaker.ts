/**
 * Circuit Breaker State Machine
 *
 * CLOSED: Normal operation, requests pass through
 * OPEN: Failure threshold reached, requests fail fast
 * HALF_OPEN: Testing if service has recovered
 */
type CircuitState = "CLOSED" | "OPEN" | "HALF_OPEN";

interface CircuitBreakerOptions {
  /** Number of failures before opening circuit */
  failureThreshold: number;
  /** Time in ms before attempting reset ( Half-Open ) */
  resetTimeout: number;
  /** Number of successes in half-open state to close circuit */
  successThreshold: number;
  /** Function to determine if error counts as failure */
  isFailure: (error: unknown) => boolean;
  /** Callback when state changes */
  onStateChange?: (state: CircuitState, service: string) => void;
  /** Service name for logging/identification */
  serviceName: string;
}

interface CircuitBreakerMetrics {
  state: CircuitState;
  failureCount: number;
  successCount: number;
  lastFailureTime: number | null;
  totalRequests: number;
  totalFailures: number;
  totalSuccesses: number;
}

export type { CircuitBreakerOptions, CircuitBreakerMetrics };

/**
 * Circuit Breaker Pattern Implementation
 *
 * Prevents cascading failures by failing fast when a service is struggling.
 * Automatically recovers when the service comes back online.
 */
export class CircuitBreaker {
  private state: CircuitState = "CLOSED";
  private failureCount = 0;
  private successCount = 0;
  private lastFailureTime: number | null = null;
  private nextAttempt = 0;
  private totalRequests = 0;
  private totalFailures = 0;
  private totalSuccesses = 0;

  private readonly options: CircuitBreakerOptions;

  constructor(
    options: Partial<CircuitBreakerOptions> & { serviceName: string }
  ) {
    this.options = {
      failureThreshold: 5,
      resetTimeout: 30_000, // 30 seconds
      successThreshold: 3,
      isFailure: () => true,
      ...options,
    };
  }

  /**
   * Execute a function with circuit breaker protection
   */
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    this.totalRequests++;

    if (this.state === "OPEN") {
      if (Date.now() < this.nextAttempt) {
        console.warn(
          `[CircuitBreaker] ${this.options.serviceName}: Circuit OPEN, failing fast`,
          {
            service: this.options.serviceName,
            state: this.state,
            nextAttempt: new Date(this.nextAttempt).toISOString(),
          }
        );
        throw new CircuitBreakerOpenError(
          `Circuit breaker is OPEN for ${this.options.serviceName}. ` +
            `Retry after ${new Date(this.nextAttempt).toISOString()}`
        );
      }

      this.transitionTo("HALF_OPEN");
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure(error);
      throw error;
    }
  }

  /**
   * Get current metrics for monitoring
   */
  getMetrics(): CircuitBreakerMetrics {
    return {
      state: this.state,
      failureCount: this.failureCount,
      successCount: this.successCount,
      lastFailureTime: this.lastFailureTime,
      totalRequests: this.totalRequests,
      totalFailures: this.totalFailures,
      totalSuccesses: this.totalSuccesses,
    };
  }

  /**
   * Force circuit to specific state (for testing/emergencies)
   */
  forceState(state: CircuitState): void {
    console.warn(
      `[CircuitBreaker] ${this.options.serviceName}: Circuit state forcefully changed`,
      {
        service: this.options.serviceName,
        fromState: this.state,
        toState: state,
      }
    );
    this.transitionTo(state);
  }

  private onSuccess(): void {
    this.totalSuccesses++;
    this.lastFailureTime = null;

    if (this.state === "HALF_OPEN") {
      this.successCount++;

      if (this.successCount >= this.options.successThreshold) {
        this.transitionTo("CLOSED");
        this.failureCount = 0;
        this.successCount = 0;
      }
    } else if (this.state === "CLOSED") {
      // Reset failure count on success in closed state
      this.failureCount = 0;
    }
  }

  private onFailure(error: unknown): void {
    this.totalFailures++;
    this.lastFailureTime = Date.now();

    if (!this.options.isFailure(error)) {
      // Not a "circuit-worthy" failure, don't count it
      return;
    }

    this.failureCount++;

    if (this.state === "HALF_OPEN") {
      // Failed in half-open, go back to open
      this.transitionTo("OPEN");
    } else if (
      this.state === "CLOSED" &&
      this.failureCount >= this.options.failureThreshold
    ) {
      // Threshold reached, open the circuit
      this.transitionTo("OPEN");
    }

    console.error(
      `[CircuitBreaker] ${this.options.serviceName}: Request failed`,
      {
        service: this.options.serviceName,
        state: this.state,
        failureCount: this.failureCount,
        error: error instanceof Error ? error.message : String(error),
      }
    );
  }

  private transitionTo(newState: CircuitState): void {
    const oldState = this.state;
    this.state = newState;

    if (newState === "OPEN") {
      this.nextAttempt = Date.now() + this.options.resetTimeout;
      this.successCount = 0;
    } else if (newState === "CLOSED") {
      this.failureCount = 0;
      this.successCount = 0;
    }

    console.info(
      `[CircuitBreaker] ${this.options.serviceName}: Circuit state changed`,
      {
        service: this.options.serviceName,
        fromState: oldState,
        toState: newState,
        failureCount: this.failureCount,
      }
    );

    this.options.onStateChange?.(newState, this.options.serviceName);
  }
}

/**
 * Error thrown when circuit breaker is open
 */
export class CircuitBreakerOpenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CircuitBreakerOpenError";
  }
}

/**
 * Check if error is a circuit breaker open error
 */
export function isCircuitBreakerOpenError(
  error: unknown
): error is CircuitBreakerOpenError {
  return error instanceof CircuitBreakerOpenError;
}

/**
 * Create a circuit breaker with common configuration
 */
export function createCircuitBreaker(
  serviceName: string,
  options?: Partial<CircuitBreakerOptions>
): CircuitBreaker {
  return new CircuitBreaker({
    serviceName,
    failureThreshold: 5,
    resetTimeout: 30_000,
    successThreshold: 3,
    isFailure: (error: unknown) => {
      // Don't count client errors (4xx) as failures
      if (error instanceof Error) {
        const statusCode = extractStatusCode(error.message);
        if (statusCode && statusCode >= 400 && statusCode < 500) {
          return false;
        }
      }
      return true;
    },
    ...options,
  });
}

/**
 * Extract HTTP status code from error message
 */
function extractStatusCode(message: string): number | null {
  const match = message.match(/\b(\d{3})\b/);
  if (match) {
    const code = Number.parseInt(match[1], 10);
    if (code >= 100 && code < 600) {
      return code;
    }
  }
  return null;
}
