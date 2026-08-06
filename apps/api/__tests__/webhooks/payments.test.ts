import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock Stripe
vi.mock("@repo/payments", () => ({
  stripe: {
    webhooks: {
      constructEventAsync: vi.fn(),
    },
  },
}));

// Mock logger
vi.mock("@repo/observability/logger.server", () => ({
  logger: {
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
  },
}));

describe("Payment Webhook Handler", () => {
  it("should export POST handler", async () => {
    const route = await import("../../app/webhooks/payments/route");
    expect(route.POST).toBeDefined();
    expect(typeof route.POST).toBe("function");
  });

  it("should handle stripe webhook events", async () => {
    const { POST } = await import("../../app/webhooks/payments/route");
    const request = new Request("http://localhost:3002/webhooks/payments", {
      method: "POST",
      body: JSON.stringify({ type: "customer.subscription.created" }),
      headers: {
        "svix-id": "test-id",
      },
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
  });
});
