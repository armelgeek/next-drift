import { stripe } from "@repo/payments";
import { keys } from "@repo/payments/keys";
import { analytics } from "@repo/analytics/server";
import { auth } from "@repo/auth/server";
import { parseError } from "@repo/observability/error";
import { logger } from "@repo/observability/logger.server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const getUserFromStripeCustomerId = async (customerId: string) => {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  // Get user from database where privateMetadata.stripeCustomerId matches
  // This would query your database directly
  // For now, returning null as placeholder
  return null;
};

const handleCustomerSubscriptionCreated = async (
  subscription: any
) => {
  const customerId = subscription.customer;

  logger.info(
    { customerId, subscriptionId: subscription.id },
    "Subscription created"
  );

  const user = await getUserFromStripeCustomerId(customerId);

  if (!user) {
    logger.warn(
      { customerId },
      "User not found for stripe customer"
    );
    return;
  }

  analytics.capture({
    event: "User Subscribed",
    distinctId: user.id,
    properties: {
      subscriptionId: subscription.id,
      status: subscription.status,
    },
  });
};

const handleCustomerSubscriptionUpdated = async (
  subscription: any
) => {
  logger.info(
    { subscriptionId: subscription.id },
    "Subscription updated"
  );

  const customerId = subscription.customer;
  const user = await getUserFromStripeCustomerId(customerId);

  if (!user) {
    return;
  }

  analytics.capture({
    event: "Subscription Updated",
    distinctId: user.id,
    properties: {
      subscriptionId: subscription.id,
      status: subscription.status,
    },
  });
};

const handleCustomerSubscriptionDeleted = async (
  subscription: any
) => {
  logger.info(
    { subscriptionId: subscription.id },
    "Subscription deleted"
  );

  const customerId = subscription.customer;
  const user = await getUserFromStripeCustomerId(customerId);

  if (!user) {
    return;
  }

  analytics.capture({
    event: "User Unsubscribed",
    distinctId: user.id,
    properties: {
      subscriptionId: subscription.id,
    },
  });
};

const handleInvoicePaid = async (invoice: any) => {
  logger.info({ invoiceId: invoice.id }, "Invoice paid");

  const customerId = invoice.customer;
  const user = await getUserFromStripeCustomerId(customerId);

  if (!user) {
    return;
  }

  analytics.capture({
    event: "Invoice Paid",
    distinctId: user.id,
    properties: {
      invoiceId: invoice.id,
      amount: invoice.total,
    },
  });
};

export const POST = async (request: Request): Promise<Response> => {
  const webhookSecret = keys().STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    logger.error({}, "Stripe webhook secret not configured");
    return NextResponse.json(
      { message: "Webhook not configured", ok: false },
      { status: 400 }
    );
  }

  try {
    const body = await request.text();
    const headerPayload = await headers();
    const sig = headerPayload.get("stripe-signature");

    if (!sig) {
      throw new Error("missing stripe-signature header");
    }

    // Verify Stripe webhook signature
    let event: any;

    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (error) {
      logger.error({ err: error }, "Webhook signature verification failed");
      return NextResponse.json(
        { message: "Invalid signature", ok: false },
        { status: 400 }
      );
    }

    logger.info({ eventType: event.type }, "Stripe webhook received");

    switch (event.type) {
      case "customer.subscription.created": {
        await handleCustomerSubscriptionCreated(event.data.object);
        break;
      }
      case "customer.subscription.updated": {
        await handleCustomerSubscriptionUpdated(event.data.object);
        break;
      }
      case "customer.subscription.deleted": {
        await handleCustomerSubscriptionDeleted(event.data.object);
        break;
      }
      case "invoice.paid": {
        await handleInvoicePaid(event.data.object);
        break;
      }
      default: {
        logger.debug(
          { eventType: event.type },
          "Unhandled webhook event type"
        );
      }
    }

    await analytics.shutdown();

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    const message = parseError(error);

    logger.error({ err: error, message }, "Stripe webhook processing failed");

    return NextResponse.json(
      {
        message: "something went wrong",
        ok: false,
      },
      { status: 500 }
    );
  }
};
