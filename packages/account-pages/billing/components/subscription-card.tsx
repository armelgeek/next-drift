"use client";

import { useEffect, useState } from "react";
import { getSubscription } from "@repo/account-pages";
import { Card } from "@repo/design-system/ui/card";
import { Badge } from "@repo/design-system/ui/badge";
import { Button } from "@repo/design-system/ui/button";
import { Loader2 } from "lucide-react";

interface Subscription {
  status: string;
  currentPeriodEnd?: string;
  plan?: {
    name: string;
    amount: number;
    interval: string;
  };
}

interface SubscriptionCardProps {
  stripeCustomerId: string;
}

export function SubscriptionCard({ stripeCustomerId }: SubscriptionCardProps) {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSubscription() {
      try {
        const result = await getSubscription(stripeCustomerId);
        setSubscription(result.subscription);
      } catch (error) {
        console.error("Failed to fetch subscription:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSubscription();
  }, [stripeCustomerId]);

  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      </Card>
    );
  }

  if (!subscription) {
    return (
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">No Active Subscription</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Upgrade to a paid plan to unlock premium features
            </p>
          </div>
          <Button>Upgrade Plan</Button>
        </div>
      </Card>
    );
  }

  const statusColor =
    subscription.status === "active"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{subscription.plan?.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              ${subscription.plan?.amount}/month
            </p>
          </div>
          <Badge className={statusColor}>
            {subscription.status.charAt(0).toUpperCase() +
              subscription.status.slice(1)}
          </Badge>
        </div>

        {subscription.currentPeriodEnd && (
          <div>
            <p className="text-xs text-muted-foreground">
              Renews on{" "}
              {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
            </p>
          </div>
        )}

        <Button variant="outline">Manage Subscription</Button>
      </div>
    </Card>
  );
}
