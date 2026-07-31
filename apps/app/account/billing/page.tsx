import { auth } from "@repo/auth/server";
import { redirect } from "next/navigation";
import { db } from "@repo/database/drizzle";
import { betterAuthUsers } from "@repo/database/schema";
import { eq } from "drizzle-orm";
import { SubscriptionCard } from "./components/subscription-card";
import { InvoicesList } from "./components/invoices-list";
import { PaymentMethodCard } from "./components/payment-method";

export default async function BillingPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const user = await db.query.betterAuthUsers.findFirst({
    where: eq(betterAuthUsers.id, session.user.id as any),
  });

  const stripeCustomerId = user?.stripeCustomerId as string | null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground mt-2">
          Manage your subscription and billing information
        </p>
      </div>

      <div className="space-y-6">
        {stripeCustomerId ? (
          <>
            <SubscriptionCard stripeCustomerId={stripeCustomerId} />
            <PaymentMethodCard stripeCustomerId={stripeCustomerId} />
            <InvoicesList stripeCustomerId={stripeCustomerId} />
          </>
        ) : (
          <div className="p-6 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              No billing information available. Please contact support.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
