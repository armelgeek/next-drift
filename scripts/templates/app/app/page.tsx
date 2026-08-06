import { Button } from '@repo/design-system/components/ui/button';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to your SaaS</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Start building your product here
        </p>
        <Button size="lg">Get Started</Button>
      </div>
    </main>
  );
}
