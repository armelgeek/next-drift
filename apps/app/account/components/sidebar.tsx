"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Lock, CreditCard, Users, Settings } from "lucide-react";

const navItems = [
  { href: "/account/profile", label: "Profile", icon: User },
  { href: "/account/security", label: "Security", icon: Lock },
  { href: "/account/billing", label: "Billing", icon: CreditCard },
  { href: "/account/team", label: "Team", icon: Users },
  { href: "/account/preferences", label: "Preferences", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
