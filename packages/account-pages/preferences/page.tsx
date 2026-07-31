import { auth } from "@repo/auth/server";
import { redirect } from "next/navigation";
import { db } from "@repo/database/drizzle";
import { userPreferences } from "@repo/database/schema";
import { eq } from "drizzle-orm";
import { NotificationPreferences } from "./components/notification-prefs";
import { ThemePreferences } from "./components/theme-prefs";
import { LanguagePreferences } from "./components/language-prefs";

export default async function PreferencesPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const prefs = await db.query.userPreferences.findFirst({
    where: eq(userPreferences.userId, session.user.id as any),
  });

  const preferences = prefs || {
    emailNotifications: true,
    marketingEmails: false,
    preferredTheme: "system" as const,
    language: "en" as const,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Preferences</h1>
        <p className="text-muted-foreground mt-2">
          Customize your account settings
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Notifications</h2>
            <p className="text-sm text-muted-foreground">
              Choose how you want to receive notifications
            </p>
          </div>
          <NotificationPreferences
            emailNotifications={preferences.emailNotifications}
            marketingEmails={preferences.marketingEmails}
          />
        </section>

        <div className="border-t" />

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Appearance</h2>
            <p className="text-sm text-muted-foreground">
              Customize how the application looks
            </p>
          </div>
          <ThemePreferences theme={preferences.preferredTheme} />
        </section>

        <div className="border-t" />

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Language</h2>
            <p className="text-sm text-muted-foreground">
              Choose your preferred language
            </p>
          </div>
          <LanguagePreferences language={preferences.language} />
        </section>
      </div>
    </div>
  );
}
