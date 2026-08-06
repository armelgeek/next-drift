import { logger } from "@repo/observability/logger.server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = (await headers()).get("svix-id");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  try {
    const event = JSON.parse(body);
    
    logger.info(`Stripe webhook received: ${event.type}`);

    // Handle different Stripe events
    switch (event.type) {
      case "customer.subscription.created":
        logger.info(`Subscription created: ${event.data?.object?.id}`);
        break;
      case "customer.subscription.updated":
        logger.info(`Subscription updated: ${event.data?.object?.id}`);
        break;
      case "customer.subscription.deleted":
        logger.info(`Subscription deleted: ${event.data?.object?.id}`);
        break;
      case "invoice.payment_succeeded":
        logger.info(`Invoice paid: ${event.data?.object?.id}`);
        break;
      default:
        logger.info(`Unhandled stripe event: ${event.type}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Stripe webhook error");
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 400 });
  }
}
