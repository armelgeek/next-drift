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

interface LanguagePreferencesProps {
  language: string;
}

export function LanguagePreferences({ language }: LanguagePreferencesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState(language);

  async function handleSave() {
    try {
      setIsLoading(true);
      const result = await updatePreferences({
        emailNotifications: true,
        marketingEmails: false,
        preferredTheme: "system",
        language: selectedLang as "en" | "fr",
      });

      if (result.success) {
        toast.success("Language updated");
      } else {
        toast.error("Failed to update language");
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
        <label className="text-sm font-medium">Language</label>
        <Select value={selectedLang} onValueChange={setSelectedLang}>
          <SelectTrigger disabled={isLoading}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handleSave} disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Language"}
      </Button>
    </div>
  );
}
