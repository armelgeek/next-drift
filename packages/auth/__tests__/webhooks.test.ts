import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { emitWebhookEvent } from "../lib/webhooks";

describe("Webhook Emission", () => {
  beforeEach(() => {
    process.env.BETTER_AUTH_WEBHOOK_SECRET = "whsec_test_secret";
    process.env.NEXT_PUBLIC_API_URL = "http://localhost:3001";
  });

  afterEach(() => {
    delete process.env.BETTER_AUTH_WEBHOOK_SECRET;
    delete process.env.NEXT_PUBLIC_API_URL;
    vi.clearAllMocks();
  });

  it("should handle missing webhook secret gracefully", async () => {
    delete process.env.BETTER_AUTH_WEBHOOK_SECRET;
    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    await emitWebhookEvent("user.created", { id: "123" });

    expect(consoleSpy).toHaveBeenCalledWith(
      "BETTER_AUTH_WEBHOOK_SECRET not set, skipping webhook"
    );
    consoleSpy.mockRestore();
  });

  it("should handle invalid webhook secret format", async () => {
    process.env.BETTER_AUTH_WEBHOOK_SECRET = "invalid_secret";
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    await emitWebhookEvent("user.created", { id: "123" });

    expect(consoleSpy).toHaveBeenCalledWith("Invalid webhook secret format");
    consoleSpy.mockRestore();
  });
});
