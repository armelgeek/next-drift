"use client";

import { useState } from "react";
import { updatePreferences } from "../../actions";
import { Button } from "@repo/design-system/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/design-system/ui/select";
import { toast } from "sonner";

interface ThemePreferencesProps {
  theme: string;
}

export function ThemePreferences({ theme }: ThemePreferencesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(theme);

  async function handleSave() {
    try {
      setIsLoading(true);
      const result = await updatePreferences({
        emailNotifications: true,
        marketingEmails: false,
        preferredTheme: selectedTheme as "light" | "dark" | "system",
        language: "en",
      });

      if (result.success) {
        toast.success("Theme updated");
      } else {
        toast.error("Failed to update theme");
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
      <div className="space-y-2">
        <label className="text-sm font-medium">Preferred Theme</label>
        <Select value={selectedTheme} onValueChange={setSelectedTheme}>
          <SelectTrigger disabled={isLoading}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handleSave} disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Theme"}
      </Button>
    </div>
  );
}
