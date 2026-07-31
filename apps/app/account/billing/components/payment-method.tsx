"use client";

import { Card } from "@repo/design-system/ui/card";
import { Button } from "@repo/design-system/ui/button";
import { CreditCard } from "lucide-react";

interface PaymentMethodCardProps {
  stripeCustomerId: string;
}

export function PaymentMethodCard({
  stripeCustomerId,
}: PaymentMethodCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Payment Method</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your payment methods
          </p>
        </div>

        <div className="p-4 bg-muted rounded-lg flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">•••• •••• •••• 4242</p>
            <p className="text-xs text-muted-foreground">Expires 12/26</p>
          </div>
        </div>

        <Button variant="outline">Update Payment Method</Button>
      </div>
    </Card>
  );
}
