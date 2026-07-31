"use client";

import { useSession } from "better-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@repo/design-system/button";
import { signOut } from "../actions";

export function UserButton() {
  const { data: session } = useSession();
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
