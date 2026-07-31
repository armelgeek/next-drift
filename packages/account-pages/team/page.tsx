import { auth } from "@repo/auth/server";
import { redirect } from "next/navigation";
import { InviteMemberForm } from "./components/invite-form";
import { MembersList } from "./components/members-list";

export default async function TeamPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team</h1>
        <p className="text-muted-foreground mt-2">
          Manage team members and permissions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MembersList />
        </div>
        <div>
          <InviteMemberForm />
        </div>
      </div>
    </div>
  );
}
