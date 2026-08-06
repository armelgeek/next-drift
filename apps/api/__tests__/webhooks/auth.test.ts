import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextResponse } from "next/server";

// Mock Svix Webhook
vi.mock("svix", () => ({
  Webhook: vi.fn().mockImplementation(() => ({
    verify: vi.fn().mockImplementation((payload, headers) => {
      const hasId = headers["svix-id"] !== undefined;
      const hasTimestamp = headers["svix-timestamp"] !== undefined;
      const hasSignature = headers["svix-signature"] !== undefined;
      if (!hasId || !hasTimestamp || !hasSignature) {
        throw new Error("Missing headers");
      }
      return JSON.parse(payload);
    }),
  })),
}));

// Mock logger
vi.mock("@repo/observability/logger.server", () => ({
  logger: {
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
  },
}));

describe("Auth Webhook Handler", () => {
  it("should export POST handler", async () => {
    const route = await import("../../app/webhooks/auth/route");
    expect(route.POST).toBeDefined();
    expect(typeof route.POST).toBe("function");
  });

  it("should handle auth webhook events", async () => {
    const { POST } = await import("../../app/webhooks/auth/route");
    const request = new Request("http://localhost:3002/webhooks/auth", {
      method: "POST",
      body: JSON.stringify({ type: "user.created", data: { id: "123" } }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
  });
});
