"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { authClient } from "../client";

export function OrganizationSwitcher() {
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Organization</span>
      <Button variant="outline" size="sm" disabled>
        Coming soon
      </Button>
    </div>
  );
}
