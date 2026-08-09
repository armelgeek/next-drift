import type { Metadata } from "next";
import { Button } from "@repo/design-system/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3, Code2 } from "lucide-react";
import Link from "next/link";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Drift — Production-Ready SaaS Starter Kit",
  description:
    "A comprehensive Next.js 15 SaaS starter kit with authentication, payments, database, and observability. Ship faster, focus on your product.",
});

const Home = async () => (
  <main className="min-h-screen">
    {/* Hero */}
    <section className="relative overflow-hidden px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 mb-8">
            <span>✨ Production-Ready SaaS Starter Kit</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Ship your SaaS in days, not weeks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Drift is a comprehensive Next.js 15 starter kit with authentication,
            payments, database, CMS, and observability built-in. Focus on your
            product, not boilerplate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-in">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="px-6 py-20 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">
          Everything You Need
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A complete suite of tools for building production SaaS applications
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <Feature
            icon={<Shield className="h-6 w-6" />}
            title="Authentication"
            description="Better Auth with OAuth, email, and magic links out of the box"
          />
          <Feature
            icon={<Zap className="h-6 w-6" />}
            title="Payments"
            description="Stripe integration for subscriptions, invoices, and webhooks"
          />
          <Feature
            icon={<BarChart3 className="h-6 w-6" />}
            title="Observability"
            description="PostHog analytics and error tracking built-in"
          />
          <Feature
            icon={<Code2 className="h-6 w-6" />}
            title="Database"
            description="Drizzle ORM with PostgreSQL and type-safe queries"
          />
        </div>
      </div>
    </section>

    {/* Stack */}
    <section className="px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-16">
          Modern Tech Stack
        </h2>
        <div className="grid sm:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Next.js 15 with App Router</li>
              <li>• React 19 Server Components</li>
              <li>• Tailwind CSS + shadcn/ui</li>
              <li>• TypeScript with strict mode</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Backend & Infrastructure</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Drizzle ORM + PostgreSQL</li>
              <li>• Server Actions & API routes</li>
              <li>• Zod validation</li>
              <li>• Vercel deployment ready</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-20 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to launch?</h2>
        <p className="text-muted-foreground mb-8">
          Drift includes everything you need to build production SaaS applications.
        </p>
        <Link href="/sign-in">
          <Button size="lg" className="gap-2">
            Start Building <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </main>
);

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-4 text-blue-600 dark:text-blue-400">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default Home;
