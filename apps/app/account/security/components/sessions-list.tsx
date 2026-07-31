"use client";

import { useState } from "react";
import { revokeSession } from "../../actions";
import { Button } from "@repo/design-system/ui/button";
import { toast } from "sonner";
import { Trash2, Smartphone } from "lucide-react";

interface Session {
  id: string;
  userAgent?: string;
  createdAt?: Date;
  lastActiveAt?: Date;
  isCurrent?: boolean;
}

export function SessionsList() {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: "current",
      userAgent: "Chrome on macOS",
      createdAt: new Date(),
      isCurrent: true,
    },
    {
      id: "session-2",
      userAgent: "Safari on iPhone",
      createdAt: new Date(Date.now() - 86400000),
      lastActiveAt: new Date(Date.now() - 3600000),
    },
  ]);

  async function handleRevokeSession(sessionId: string) {
    try {
      const result = await revokeSession(sessionId);

      if (result.success) {
        setSessions((prev) => prev.filter((s) => s.id !== sessionId));
        toast.success("Session revoked");
      } else {
        toast.error("Failed to revoke session");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  }

  return (
    <div className="space-y-3">
      {sessions.length === 0 ? (
        <p className="text-sm text-muted-foreground">No active sessions</p>
      ) : (
        sessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Smartphone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{session.userAgent}</p>
                <p className="text-xs text-muted-foreground">
                  Active since{" "}
                  {session.createdAt?.toLocaleDateString() ||
                    "Unknown date"}
                </p>
              </div>
            </div>
            {session.isCurrent ? (
              <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                Current
              </span>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRevokeSession(session.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))
      )}
    </div>
  );
}
