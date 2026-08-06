"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/design-system/components/ui/button";
import { signOut } from "../actions";
import { authClient } from "../client";

export function UserButton() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!session) {
    return null;
  }

  async function handleSignOut() {
    await signOut();
    router.push("/");
  }

  return (
    <div className="flex items-center gap-2">
      {session.user.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={session.user.image}
          alt={session.user.name || "User"}
          className="w-8 h-8 rounded-full"
        />
      )}
      <span className="text-sm font-medium">{session.user.email}</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </div>
  );
}
