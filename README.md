# next-ship

**Modernized Next.js monorepo with Drizzle, Base UI, Polar.sh, and PostHog.**

A fork of [next-forge](https://github.com/vercel/next-forge) optimized for solo founders building for English-speaking markets.

## What's Different?

This is a **modernized, simplified version** of next-forge with several key upgrades:

### Stack Changes

| Original | Modernized |
|----------|------------|
| Prisma ORM | **Drizzle ORM** - Better performance, SQL-like syntax |
| Radix UI | **Base UI** - shadcn's next-gen component library |
| Stripe | **Polar.sh** - Modern payment infrastructure |
| Sentry + Logtail | **PostHog only** - Consolidated observability |
| i18n (Multi-language) | **English-only** - Flat URLs, simpler code |
| Next.js 16.0 | **Next.js 16.2** - Latest features |

### Key Benefits

- **Cleaner URLs** — `/contact` instead of `/en/contact`
- **Simpler codebase** — No i18n complexity, no multiple observability tools
- **Better performance** — Drizzle is faster than Prisma
- **Modern components** — Base UI is the future of shadcn
- **Unified observability** — One tool (PostHog) for analytics + errors
- **Easier payments** — Polar.sh has better DX than Stripe

## Stack Overview

### Framework
- **Next.js 16.2** with React 19
- **TypeScript 5.9** with strict mode
- **Turborepo** + **pnpm workspaces**
- **Tailwind CSS 4** with v4 syntax

### Core Infrastructure
- **Authentication** — [Clerk](https://clerk.com)
- **Database** — [Drizzle ORM](https://orm.drizzle.team) + [Neon PostgreSQL](https://neon.tech)
- **Payments** — [Polar.sh](https://polar.sh)
- **Email** — [Resend](https://resend.com) + React Email
- **Analytics** — [PostHog](https://posthog.com) (product analytics + error tracking)
- **Security** — [Arcjet](https://arcjet.com) (rate limiting, bot protection)
- **CMS** — [BaseHub](https://basehub.com)
- **Components** — [Base UI](https://base-ui.com) + shadcn/ui

### Apps

- **Web** — Marketing site with flat URLs (port 3001)
- **App** — Main application with auth (port 3000)
- **API** — RESTful API with webhooks (port 3002)
- **Docs** — Documentation site
- **Email** — Email preview server
- **Storybook** — Component library

### Packages

- `@repo/auth` — Clerk authentication
- `@repo/database` — Drizzle ORM with migrations
- `@repo/design-system` — Base UI components
- `@repo/payments` — Polar.sh integration
- `@repo/analytics` — PostHog client/server
- `@repo/observability` — Error handling (PostHog mode)
- `@repo/security` — Arcjet security
- `@repo/cms` — BaseHub integration
- `@repo/email` — React Email templates
- `@repo/ai` — Vercel AI SDK

## Quick Start

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io)
- Environment variables (see `.env.example` files)

### Installation

```bash
# Clone the repository
git clone https://github.com/oscardobsonbrown/next-ship.git
cd next-ship

# Install dependencies
pnpm install

# Set up environment variables
# Copy .env.example files to .env and fill in your values

# Run database migrations
pnpm --filter @repo/database db:push

# Start development
pnpm dev
```

### Environment Setup

Required environment variables:

- `DATABASE_URL` — Neon PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk public key
- `CLERK_SECRET_KEY` — Clerk secret key
- `POLAR_ACCESS_TOKEN` — Polar.sh access token
- `NEXT_PUBLIC_POSTHOG_KEY` — PostHog API key
- `RESEND_TOKEN` — Resend API key
- `ARCJET_KEY` — Arcjet API key

See individual package `.env.example` files for complete lists.

## Architecture

### URL Structure

Flat URLs (no locale prefixes):
- `/` — Home
- `/contact` — Contact page
- `/pricing` — Pricing page
- `/blog` — Blog listing
- `/blog/[slug]` — Blog post
- `/legal/[slug]` — Legal pages

### Database

Uses Drizzle ORM with Neon PostgreSQL:

```typescript
// packages/database/src/schema.ts
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});
```

Run migrations:
```bash
pnpm --filter @repo/database db:generate
pnpm --filter @repo-database db:push
```

### Payments

Polar.sh integration with webhook handling:

```typescript
// Webhook events: order.created, subscription.created, etc.
// Automatic customer tracking via PostHog
```

### Components

Base UI components (shadcn next-gen):

```typescript
import { Button } from "@repo/design-system/components/ui/button";
import { Dialog } from "@repo/design-system/components/ui/dialog";
```

No `asChild` prop — use composition instead:
```tsx
// ✅ Correct
<Link href="/contact"><Button>Contact</Button></Link>

// ❌ Old way (removed)
<Button asChild><Link href="/contact">Contact</Link></Button>
```

## Migration from next-forge

If you're coming from next-forge:

1. **Database** — Prisma schema → Drizzle schema (similar structure)
2. **UI Components** — Radix props → Base UI props (check component files)
3. **Payments** — Stripe SDK → Polar SDK (webhook events differ)
4. **URLs** — Add locale middleware or flatten structure
5. **Observability** — Remove Sentry, use PostHog only

See `/plans/modernization-migration.md` for detailed migration guide.

## Development

### Commands

```bash
# Type check all packages
pnpm typecheck

# Run tests
pnpm test

# Build all apps
pnpm build

# Lint and format
pnpm check
pnpm fix

# Update dependencies
pnpm bump-deps
```

### Adding Components

Use shadcn CLI with Base UI:

```bash
npx shadcn@latest add button -c packages/design-system
```

## Why This Stack?

Built for **solo founders** who:
- Target English-speaking markets
- Want simple, maintainable code
- Prefer consolidated tooling
- Need modern, performant foundations
- Don't want to manage multiple observability vendors

## Original Template

This is a fork of [next-forge](https://github.com/vercel/next-forge) by Vercel. The original is great for enterprise/multi-language use cases. This version is optimized for simplicity and speed.

## License

MIT (same as next-forge)