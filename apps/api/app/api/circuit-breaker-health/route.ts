import { getCircuitBreakerHealth } from "@repo/circuit-breaker";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Circuit breaker health check endpoint
 * Returns status of all circuit breakers
 */
export async function GET() {
  const health = getCircuitBreakerHealth();

  // Return 503 if any circuits are open
  const status = health.status === "unhealthy" ? 503 : 200;

  return NextResponse.json(health, { status });
}
