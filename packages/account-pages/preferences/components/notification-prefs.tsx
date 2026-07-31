"use client";

import { useState } from "react";
import { updatePreferences } from "@repo/account-pages";
import { Button } from "@repo/design-system/ui/button";
import {
  Checkbox,
} from "@repo/design-system/ui/checkbox";
import { toast } from "sonner";

interface NotificationPreferencesProps {
  emailNotifications: boolean;
  marketingEmails: boolean;
}

export function NotificationPreferences({
  emailNotifications,
  marketingEmails,
}: NotificationPreferencesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications,
    marketingEmails,
    preferredTheme: "system" as const,
    language: "en" as const,
  });

  async function handleSave() {
    try {
      setIsLoading(true);
      const result = await updatePreferences(settings);

      if (result.success) {
        toast.success("Preferences updated");
      } else {
        toast.error("Failed to update preferences");
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
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Checkbox
            id="email-notif"
            checked={settings.emailNotifications}
            onCheckedChange={(checked) =>
              setSettings((s) => ({ ...s, emailNotifications: !!checked }))
            }
            disabled={isLoading}
          />
          <label
            htmlFor="email-notif"
            className="text-sm font-medium cursor-pointer"
          >
            Email notifications
          </label>
        </div>
        <p className="text-xs text-muted-foreground ml-6">
          Receive updates about your account activity
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Checkbox
            id="marketing"
            checked={settings.marketingEmails}
            onCheckedChange={(checked) =>
              setSettings((s) => ({ ...s, marketingEmails: !!checked }))
            }
            disabled={isLoading}
          />
          <label
            htmlFor="marketing"
            className="text-sm font-medium cursor-pointer"
          >
            Marketing emails
          </label>
        </div>
        <p className="text-xs text-muted-foreground ml-6">
          Receive news about new features and updates
        </p>
      </div>

      <Button onClick={handleSave} disabled={isLoading} className="mt-4">
        {isLoading ? "Saving..." : "Save Preferences"}
      </Button>
    </div>
  );
}
