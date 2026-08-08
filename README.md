# Drift

**Production-grade Next.js starter for modern SaaS applications.**

Built for solo founders and small teams who want a fast, maintainable foundation without the enterprise complexity.

## Why Drift?

Most Next.js starters are either too basic or too complex. Drift hits the sweet spot:

- **Modern stack** — Latest stable tools that work well together
- **Simplified** — Removed enterprise features you don't need as a solo founder
- **Fast to ship** — Pre-configured auth, payments, database, and analytics
- **Easy to maintain** — Consolidated tooling, flat URLs
- **Production-ready** — Type-safe, secure, and scalable
- **AI-powered workflows** — 21 invocable Claude Code skills for automated development (feature shipping, bug fixes, code review, incident response)

## Stack

### Framework
- **Next.js 16.2** — React 19, latest features
- **TypeScript 5.9** — Strict mode, end-to-end type safety
- **Turborepo** + **pnpm** — Monorepo with fast, disk-space efficient installs
- **Tailwind CSS 4** — Latest syntax, no configuration needed

### Core Services
| Service | Purpose |
|---------|---------|
| **Better Auth** | Authentication — self-hosted, type-safe, works out of the box |
| **Drizzle ORM** | Database — type-safe, SQL-like, excellent performance |
| **Neon PostgreSQL** | Database hosting — serverless, scales with you |
| **Stripe** | Payments — modern SaaS billing with advanced features |
| **PostHog** | Analytics + Error tracking — one tool instead of three |
| **Resend** | Transactional email — simple API, great deliverability |
| **BaseHub** | CMS — type-safe content management |
| **Nosecone** | Security headers |

### UI Components
- **Base UI** — shadcn's next-generation component library (replacement for Radix)
- **Tailwind CSS v4** — Latest features, no config
- **Geist font** — Modern, readable typography

## Quick Start

### Prerequisites
- Node.js 20+
- [pnpm](https://pnpm.io)

### Installation

```bash
# Clone the repository
git clone https://github.com/armelgeek/drift.git
cd drift

# Install dependencies
pnpm install

# Set up environment variables
# Copy .env.example files to .env in each app/package and fill in your API keys

# Run database migrations
pnpm --filter @repo/database db:push

# Start development
pnpm dev
```

### Required Environment Variables

Create `.env` files in each app directory:

**apps/web/.env:**
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_WEB_URL=http://localhost:3001
NEXT_PUBLIC_POSTHOG_KEY=phc_...
```

**apps/app/.env:**
```
BETTER_AUTH_SECRET=your-super-secret-key-min-32-chars
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_POSTHOG_KEY=phc_...
```

**apps/api/.env:**
```
DATABASE_URL=postgresql://...
BETTER_AUTH_SECRET=your-super-secret-key-min-32-chars
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
RESEND_TOKEN=re_...

NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_WEB_URL=http://localhost:3001
```

See individual `.env.example` files for complete lists.

## Architecture

### Apps

```
apps/
├── web/           # Marketing site (port 3001)
│   ├── /          # Homepage
│   ├── /contact   # Contact form
│   ├── /pricing   # Pricing page
│   └── /blog      # Blog with CMS integration
├── app/           # Main application (port 3000)
│   ├── /sign-in   # Authentication
│   ├── /sign-up
│   └── /dashboard # Main app dashboard
├── api/           # API server (port 3002)
│   └── /webhooks  # Payment webhooks, auth callbacks
├── docs/          # Documentation site
├── email/         # Email preview server
└── storybook/     # Component library
```

All apps are independently deployable.

### Packages

```
packages/
├── auth/           # Clerk configuration
├── database/       # Drizzle ORM, schema, migrations
├── design-system/  # Base UI components, Tailwind config
├── payments/       # Polar.sh integration
├── analytics/      # PostHog client/server
├── observability/  # Error handling, logging
├── security/       # Security headers configuration
├── cms/            # BaseHub integration
├── email/          # React Email templates
├── ai/             # Vercel AI SDK utilities
├── seo/            # Metadata, sitemaps, JSON-LD
└── typescript-config/  # Shared TypeScript settings
```

## Key Decisions

### Flat URLs

Clean URL structure without locale prefixes. `/contact` instead of `/en/contact`. Simpler routing, faster builds, no configuration needed.

### Consolidated Observability

One tool instead of three:
- **PostHog** for analytics, session replay, and error tracking
- No Sentry (replaced by PostHog error tracking)
- No Logtail (Vercel logs + PostHog capture are sufficient)

### Modern Database Layer

Drizzle ORM instead of Drizzle:
- Better query performance
- SQL-like syntax (you write actual SQL)
- Smaller bundle size
- Edge runtime compatible

### Modern Payments

Polar.sh for payments:
- Better developer experience
- Modern TypeScript SDK
- Webhook handling included
- Perfect for SaaS subscriptions

### Modern UI

Base UI instead of Radix:
- shadcn's next-generation component library
- Better accessibility
- No `asChild` prop complexity
- Cleaner composition patterns

## Database

Drizzle ORM with Neon PostgreSQL:

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
pnpm --filter @repo/database db:generate  # Generate migration files
pnpm --filter @repo/database db:push     # Push to database
pnpm --filter @repo/database db:studio     # Open Drizzle Studio
```

## Components

Base UI components via shadcn CLI:

```bash
# Add a component
npx shadcn@latest add button -c packages/design-system

# Use in your app
import { Button } from "@repo/design-system/components/ui/button";
```

Composition pattern (no `asChild`):
```tsx
// ✅ Correct
<Link href="/contact">
  <Button>Contact</Button>
</Link>

// ❌ Old pattern (doesn't work with Base UI)
<Button asChild>
  <Link href="/contact">Contact</Link>
</Button>
```

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

# Update all shadcn components
pnpm bump-ui
```

### Claude Code Automation

Drift includes 21 **invocable workflows** for automated development, integrated with Claude Code:

#### Core Workflows
| Command | Purpose | Time |
|---------|---------|------|
| `/ship` | Full delivery: strategy → PRD → epic → code → test → deploy | 1-3 days |
| `/ship-feature` | Fast feature: scope → PRD → epic → code → deploy | 1-2 days |
| `/ship-bug` | Bug fix: RCA → fix → test → deploy | 30min-2h |
| `/postmortem` | Incident response: RCA → hotfix → postmortem | 2-6h |
| `/standup` | Daily status: done ✅ / in progress 🔨 / blocked 🚧 | 5min |

#### Development Workflows
- `/feature` — New feature planning and implementation
- `/fix` — Bug diagnosis and repair with regression tests
- `/refactor` — Code cleanup without changing behavior
- `/test` — Run full test suite
- `/learn` — Extract patterns from codebase
- `/research` — Investigate technical questions
- `/lint` — Run all linters
- `/init` — Initialize CLAUDE.md project config
- `/setup` — Configure GitHub Discussions + Wiki
- `/api-route` — Create API endpoints with proper auth/validation

#### Specialized Workflows
- `/security-review` — Audit code for vulnerabilities
- `/onboard` — Session onboarding (light or deep)
- `/reset` — End session and start fresh
- `/wrap-up` — Structured handoff to next session
- `/retrospective` — Analyze mistakes and create gotcha rules
- `/metrics` — Show session metrics and trends

#### Specialized Agents
Available within workflows:
- **accessibility-reviewer** — WCAG 2.1 AA compliance audits
- **security-reviewer** — Security vulnerability detection
- **test-runner** — Test execution and failure fixes
- **researcher** — Technical research and codebase exploration

#### Auto-Executing Hooks
Run automatically on events:
- **capture-signal** — Save context on interruption
- **session-primer** — Load context at session start
- **verify-gate** — Pre-commit quality checks
- **habits-coach** — Development habit coaching

**Setup:**
```bash
.claude/setup-github.sh  # Enable GitHub Discussions + Wiki
/setup                   # Configure workflow
```

See `.claude/README.md` and `.claude/WORKFLOW.md` for full documentation.

### Database Changes

After modifying schema:
1. Edit `packages/database/src/schema.ts`
2. Run `pnpm --filter @repo/database db:generate`
3. Run `pnpm --filter @repo/database db:push`

### Adding a New App

1. Create directory in `apps/`
2. Add `package.json` with dependencies
3. Create `next.config.ts`
4. Add to `turbo.json` pipeline if needed

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

The monorepo is configured to deploy all apps independently via Turborepo.

### Environment Variables by App

Each app needs specific environment variables:
- **Web**: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `NEXT_PUBLIC_POSTHOG_KEY`, etc.
- **App**: All Clerk variables, PostHog key
- **API**: Database URL, all service API keys (Polar, Resend, etc.)

## Inspired By

Built on lessons learned from drift, with simplifications for solo founders:
- Removed complex routing patterns
- Consolidated observability tools
- Updated to latest stack (Drizzle, Base UI, Polar.sh)
- Flattened URL structure
- Simplified codebase

## License

MIT
