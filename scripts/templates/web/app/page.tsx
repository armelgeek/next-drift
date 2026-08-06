import { Button } from '@repo/design-system/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your SaaS</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Build something amazing
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
