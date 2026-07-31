import { auth } from "@repo/auth/server";
import { redirect } from "next/navigation";
import { db } from "@repo/database/drizzle";
import { userProfiles } from "@repo/database/schema";
import { eq } from "drizzle-orm";
import { ProfileForm } from "./components/profile-form";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const profile = await db.query.userProfiles.findFirst({
    where: eq(userProfiles.userId, session.user.id as any),
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-2">
          Update your profile information and bio
        </p>
      </div>

      <ProfileForm
        user={session.user}
        profile={profile}
      />
    </div>
  );
}
