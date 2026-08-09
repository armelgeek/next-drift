import Link from "next/link";
import { Button } from "@repo/design-system/components/ui/button";
import { ModeToggle } from "@repo/design-system/components/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span>⚡</span>
          <span>Drift</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Features
          </Link>
          <Link
            href="#stack"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Stack
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            GitHub
          </a>
          <a
            href="https://docs.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Docs
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/sign-in">
            <Button size="sm">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
