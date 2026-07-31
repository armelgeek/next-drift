"use client";

import { useSession } from "better-auth/react";
import { Button } from "@repo/design-system/button";

export function OrganizationSwitcher() {
  const { data: session } = useSession();

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
