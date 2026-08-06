import crypto from "crypto";

export function createMockSignature(payload: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

export const checkoutCreatedEvent = {
  type: "checkout.created",
  data: {
    id: "checkout_test_123",
    customer_email: "test@example.com",
    amount: 1000,
  },
};

export const subscriptionCreatedEvent = {
  type: "subscription.created",
  data: {
    id: "sub_test_123",
    status: "active",
  },
};

export const subscriptionCancelledEvent = {
  type: "subscription.cancelled",
  data: {
    id: "sub_test_123",
    status: "cancelled",
    cancel_at_period_end: true,
  },
};

export const paymentSucceededEvent = {
  type: "payment.succeeded",
  data: {
    id: "pay_test_123",
    status: "succeeded",
  },
};

export const paymentFailedEvent = {
  type: "payment.failed",
  data: {
    id: "pay_test_456",
    status: "failed",
    error_message: "Card declined",
  },
};
