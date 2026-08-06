'use client';

import { Button } from '@repo/design-system/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
            <p className="mb-6 text-lg text-muted-foreground">{error.message}</p>
            <Button onClick={() => reset()}>Try again</Button>
          </div>
        </main>
      </body>
    </html>
  );
}
