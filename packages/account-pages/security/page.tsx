import { auth } from "@repo/auth/server";
import { redirect } from "next/navigation";
import { PasswordChangeForm } from "./components/password-form";
import { TwoFactorToggle } from "./components/two-factor-toggle";
import { SessionsList } from "./components/sessions-list";

export default async function SecurityPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Security</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account security settings
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Password</h2>
            <p className="text-sm text-muted-foreground">
              Change your password regularly to keep your account secure
            </p>
          </div>
          <PasswordChangeForm />
        </section>

        <div className="border-t" />

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Two-Factor Authentication</h2>
            <p className="text-sm text-muted-foreground">
              Add an extra layer of security to your account
            </p>
          </div>
          <TwoFactorToggle />
        </section>

        <div className="border-t" />

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Active Sessions</h2>
            <p className="text-sm text-muted-foreground">
              Manage your login sessions across devices
            </p>
          </div>
          <SessionsList />
        </section>
      </div>
    </div>
  );
}
