"use client";

import { useState } from "react";
import { toggleTwoFactor } from "../../actions";
import { Button } from "@repo/design-system/ui/button";
import { toast } from "sonner";

export function TwoFactorToggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleToggle() {
    try {
      setIsLoading(true);
      const result = await toggleTwoFactor(!isEnabled);

      if (result.success) {
        setIsEnabled(!isEnabled);
        toast.success(
          !isEnabled
            ? "Two-factor authentication enabled"
            : "Two-factor authentication disabled"
        );
      } else {
        toast.error("Failed to update 2FA setting");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="p-4 bg-muted rounded-lg">
        <p className="text-sm">
          Two-factor authentication is currently{" "}
          <span className="font-medium">
            {isEnabled ? "enabled" : "disabled"}
          </span>
        </p>
      </div>
      <Button
        onClick={handleToggle}
        disabled={isLoading}
        variant={isEnabled ? "destructive" : "default"}
      >
        {isLoading
          ? "Updating..."
          : isEnabled
            ? "Disable 2FA"
            : "Enable 2FA"}
      </Button>
    </div>
  );
}
