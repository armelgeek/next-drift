"use server";

import { auth } from "@repo/auth/server";
import type {
  ProfileInput,
  PasswordInput,
  PreferencesInput,
  InviteInput,
} from "./schemas";

// Profile actions
export async function updateProfile(data: ProfileInput) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  const { db } = await import("@repo/database/drizzle");
  const { userProfiles, betterAuthUsers } = await import(
    "@repo/database/schema"
  );
  const { eq } = await import("drizzle-orm");

  try {
    const userId = session.user.id as any;

    const existing = await db.query.userProfiles.findFirst({
      where: eq(userProfiles.userId, userId),
    });

    if (existing) {
      await db
        .update(userProfiles)
        .set({
          bio: data.bio || null,
          company: data.company || null,
          location: data.location || null,
        })
        .where(eq(userProfiles.userId, userId));
    } else {
      await db.insert(userProfiles).values({
        userId,
        bio: data.bio || null,
        company: data.company || null,
        location: data.location || null,
      });
    }

    if (data.name !== session.user.name) {
      await db
        .update(betterAuthUsers)
        .set({ name: data.name })
        .where(eq(betterAuthUsers.id, userId));
    }

    return { success: true };
  } catch (error) {
    console.error("Profile update error:", error);
    return { success: false, error: "Failed to update profile" };
  }
}

// Security actions
export async function changePassword(data: PasswordInput) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement with Better Auth
  return { success: true };
}

export async function toggleTwoFactor(enabled: boolean) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement with Better Auth
  return { success: true };
}

export async function revokeSession(sessionId: string) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement with Better Auth
  return { success: true };
}

// Preferences actions
export async function updatePreferences(data: PreferencesInput) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement
  return { success: true };
}

// Team actions
export async function inviteMember(data: InviteInput, orgId: string) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement
  return { success: true };
}

export async function updateMemberRole(
  memberId: string,
  role: string,
  orgId: string
) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement
  return { success: true };
}

export async function removeMember(memberId: string, orgId: string) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement
  return { success: true };
}

// Billing actions
export async function getSubscription(stripeCustomerId: string) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  try {
    const stripe = (await import("@repo/payments")).stripe;

    const subscriptions = await stripe.subscriptions.list({
      customer: stripeCustomerId,
      limit: 1,
    });

    const subscription = subscriptions.data[0];

    if (!subscription) {
      return { subscription: null };
    }

    const product = await stripe.products.retrieve(
      subscription.items.data[0].price.product as string
    );

    return {
      subscription: {
        status: subscription.status,
        currentPeriodEnd: new Date(
          subscription.current_period_end * 1000
        ).toISOString(),
        plan: {
          name: product.name,
          amount: subscription.items.data[0].price.unit_amount
            ? subscription.items.data[0].price.unit_amount / 100
            : 0,
          interval: subscription.items.data[0].price.recurring?.interval || "",
        },
      },
    };
  } catch (error) {
    console.error("Failed to fetch subscription:", error);
    return { subscription: null };
  }
}

export async function getInvoices(stripeCustomerId: string) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  try {
    const stripe = (await import("@repo/payments")).stripe;

    const invoices = await stripe.invoices.list({
      customer: stripeCustomerId,
      limit: 10,
    });

    return {
      invoices: invoices.data.map((invoice) => ({
        id: invoice.id,
        number: invoice.number,
        date: new Date(invoice.created * 1000).toISOString(),
        amount: (invoice.total || 0) / 100,
        status: invoice.status,
        pdfUrl: invoice.pdf,
      })),
    };
  } catch (error) {
    console.error("Failed to fetch invoices:", error);
    return { invoices: [] };
  }
}

export async function downloadInvoice(invoiceId: string) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  try {
    const stripe = (await import("@repo/payments")).stripe;

    const invoice = await stripe.invoices.retrieve(invoiceId);

    if (!invoice.pdf) {
      throw new Error("PDF not available");
    }

    return { url: invoice.pdf };
  } catch (error) {
    console.error("Failed to download invoice:", error);
    throw new Error("Failed to download invoice");
  }
}
