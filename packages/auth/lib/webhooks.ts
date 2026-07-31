import { z } from "zod";

const webhookSecretSchema = z.string().startsWith("whsec_");

export async function emitWebhookEvent(
  eventType: string,
  data: Record<string, any>
) {
  const webhookSecret = process.env.BETTER_AUTH_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.warn("BETTER_AUTH_WEBHOOK_SECRET not set, skipping webhook");
    return;
  }

  try {
    webhookSecretSchema.parse(webhookSecret);
  } catch {
    console.error("Invalid webhook secret format");
    return;
  }

  const payload = {
    type: eventType,
    data: data,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  };

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    await fetch(`${apiUrl}/api/webhooks/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "svix-id": crypto.randomUUID(),
        "svix-timestamp": Math.floor(Date.now() / 1000).toString(),
        "svix-signature": "test",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Failed to emit webhook:", error);
  }
}
