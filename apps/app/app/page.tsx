import type { Metadata } from "next";
import { Button } from "@repo/design-system/components/ui/button";
import { ArrowRight, Shield, Zap, Database, Code, Mail, LockKeyhole, Gauge } from "lucide-react";
import Link from "next/link";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Drift — Ship Your SaaS in Days, Not Weeks",
  description:
    "Production-ready Next.js 15 SaaS starter kit. Authentication, payments, database, and observability built-in. Launch faster, focus on growth.",
});

const Home = async () => (
  <main className="min-h-screen">
    {/* Hero */}
    <section className="relative overflow-hidden px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 mb-8">
            <span className="mr-2">🚀</span> The complete SaaS starter kit
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Ship your product in <span className="text-blue-600 dark:text-blue-400">days</span>, not weeks
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Drift combines modern tech with production-ready features. Authentication, payments, database, and observability pre-configured. Stop fighting boilerplate. Start building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-in">
              <Button size="lg" className="gap-2 px-8">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="https://github.com/armelgeek/drift">
              <Button size="lg" variant="outline" className="px-8">
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Tech Stack */}
    <section className="px-6 py-16 sm:py-20 border-y">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wide">Built with the best tools</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="text-sm font-medium">Next.js 16</div>
          <div className="text-sm font-medium">React 19</div>
          <div className="text-sm font-medium">TypeScript</div>
          <div className="text-sm font-medium">Tailwind CSS</div>
          <div className="text-sm font-medium">Drizzle ORM</div>
          <div className="text-sm font-medium">PostgreSQL</div>
          <div className="text-sm font-medium">Better Auth</div>
          <div className="text-sm font-medium">Stripe</div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything you need to ship
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-ready features that save you weeks of setup and configuration
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            icon={<Shield className="h-6 w-6" />}
            title="Authentication"
            description="Better Auth with OAuth, email, and session management"
          />
          <Feature
            icon={<Zap className="h-6 w-6" />}
            title="Payments"
            description="Stripe integration for subscriptions and one-time payments"
          />
          <Feature
            icon={<Database className="h-6 w-6" />}
            title="Database"
            description="Drizzle ORM with PostgreSQL and type-safe queries"
          />
          <Feature
            icon={<Mail className="h-6 w-6" />}
            title="Email"
            description="Resend for transactional emails with templates"
          />
          <Feature
            icon={<Gauge className="h-6 w-6" />}
            title="Analytics"
            description="PostHog for user tracking and insights (optional)"
          />
          <Feature
            icon={<Code className="h-6 w-6" />}
            title="UI Components"
            description="Base UI components with dark mode and animations"
          />
          <Feature
            icon={<LockKeyhole className="h-6 w-6" />}
            title="Security"
            description="Type-safe validation with Zod and secure headers"
          />
          <Feature
            icon={<ArrowRight className="h-6 w-6" />}
            title="And More"
            description="Server actions, API routes, Vercel deployment ready"
          />
        </div>
      </div>
    </section>

    {/* Why Drift */}
    <section className="px-6 py-20 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why choose Drift?
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">No Hallucinations</h3>
            <p className="text-muted-foreground">
              Built with real, production-tested code. No fake APIs or fake implementations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Fully Typed</h3>
            <p className="text-muted-foreground">
              End-to-end TypeScript with strict mode. Catch errors at compile time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Ship Fast</h3>
            <p className="text-muted-foreground">
              Everything pre-configured. No decisions to make. Focus on your product.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Stack Details */}
    <section className="px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Complete Tech Stack
        </h2>
        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Next.js 16</strong> with App Router and React Server Components</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>React 19</strong> with latest patterns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Tailwind CSS 4</strong> with zero configuration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Base UI</strong> for accessible components</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Backend & Infrastructure</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Drizzle ORM</strong> with PostgreSQL on Neon</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Better Auth</strong> for authentication</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Stripe</strong> for payments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Vercel</strong> for deployment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-20 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Your next product could launch tonight
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          Stop wasting weeks on boilerplate. Drift gives you everything production-ready. Focus on building what makes your product unique.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign-in">
            <Button size="lg" className="gap-2 px-8">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <a href="https://github.com/armelgeek/drift">
            <Button size="lg" variant="outline" className="px-8">
              Fork on GitHub
            </Button>
          </a>
        </div>
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
    <div className="rounded-lg border border-border bg-card p-6 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
      <div className="mb-3 text-blue-600 dark:text-blue-400">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default Home;
