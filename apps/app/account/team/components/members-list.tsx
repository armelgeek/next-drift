"use client";

import { useState } from "react";
import { removeMember, updateMemberRole } from "../../actions";
import { Card } from "@repo/design-system/ui/card";
import { Button } from "@repo/design-system/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/design-system/ui/select";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Member {
  id: string;
  email: string;
  name: string;
  role: string;
  joinedAt: string;
  avatar?: string;
}

export function MembersList() {
  const [members, setMembers] = useState<Member[]>([
    {
      id: "1",
      email: "you@example.com",
      name: "You",
      role: "owner",
      joinedAt: new Date().toISOString(),
    },
    {
      id: "2",
      email: "member@example.com",
      name: "Team Member",
      role: "member",
      joinedAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ]);

  async function handleRoleChange(memberId: string, newRole: string) {
    try {
      const result = await updateMemberRole(memberId, newRole, "org-id");

      if (result.success) {
        setMembers((prev) =>
          prev.map((m) => (m.id === memberId ? { ...m, role: newRole } : m))
        );
        toast.success("Role updated");
      } else {
        toast.error("Failed to update role");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  }

  async function handleRemoveMember(memberId: string) {
    try {
      const result = await removeMember(memberId, "org-id");

      if (result.success) {
        setMembers((prev) => prev.filter((m) => m.id !== memberId));
        toast.success("Member removed");
      } else {
        toast.error("Failed to remove member");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Team Members</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {members.length} member{members.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="space-y-2">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{member.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {member.email}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Select
                  value={member.role}
                  onValueChange={(value) =>
                    handleRoleChange(member.id, value)
                  }
                >
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="owner">Owner</SelectItem>
                  </SelectContent>
                </Select>

                {member.role !== "owner" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveMember(member.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
