# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Full-stack monorepo: Next.js 15 (React 19, TypeScript, Tailwind CSS) frontend + Next.js API routes backend with Drizzle ORM / PostgreSQL database. Includes pnpm workspaces and Turborepo for monorepo orchestration. Decision: opinionated stack with all choices pre-made; no configuration required.

## Users

**Solo founders and indie hackers** building production-ready SaaS products. Their job: ship quickly without spending cycles on infrastructure decisions, authentication setup, payment processing, or database schema design. They are developers with full-stack capability but limited time to spend on boilerplate work.

## Product Purpose

Drift removes the time tax of building SaaS infrastructure so founders can focus on their unique product logic. Instead of starting from a bare Next.js app and wiring Stripe, auth, database, analytics, migrations, and error handling separately, a founder forks Drift and begins writing domain logic immediately. Success means shipping a production-grade SaaS application in days instead of weeks.

## Positioning

Complete opinionated stack with everything pre-integrated and production-ready, eliminating the paralysis of choice. Unlike minimal starters (Create T3) that leave infrastructure decisions to you, or flexible frameworks that require extensive customization (Wasp, metaframeworks), Drift provides one unified answer: modern Next.js, Drizzle ORM, PostgreSQL (Neon), Better Auth, Stripe, PostHog, Resend. Every tool is already wired, tested, and proven. The stack is opinionated by design—no decision fatigue.

## Operating Context

Developers clone the repo, install dependencies, set up a Neon database and Stripe account (credentials in `.env`), then run `pnpm dev` to start three apps in parallel (marketing site, authenticated product app, API). They develop features locally with hot reload, use Claude Code automation (`/ship-feature`, `/standup`) to manage work tracked in GitHub Discussions and Wiki, and deploy via Vercel. The entire workflow is GitHub-native with no external services required (Slack, Notion) for team coordination.

## Capabilities and Constraints

**Pre-integrated:** Next.js 15 App Router, React Server Components, TypeScript strict mode, Drizzle ORM with PostgreSQL, Better Auth (self-hosted, type-safe), Stripe payments, PostHog analytics + error tracking, Resend transactional email, BaseHub CMS, shadcn/ui v2 components via Base UI, Tailwind CSS v4, pre-commit hooks (Husky, lint-staged).

**Architectural:** Monorepo with 6+ apps (web, app, api, storybook, email, docs) and 20+ shared packages (database, auth, payments, design-system, observability, security). Apps independently deployable. Packages follow strict dependency direction: apps depend on packages, never reverse.

**Constraints (deliberate):** Full-stack TypeScript only—no JavaScript escape hatches. Drizzle ORM is the single source of database truth; no raw SQL. React Server Components by default; 'use client' only when necessary. Monorepo structure enforced; no "just add one off-the-shelf SaaS service" bypasses. Security-first: all user input validated with Zod, no hardcoded secrets, proper error handling and observability.

**Undecided:** UI visual identity/design tokens—awaits product-specific branding from the user.

## Brand Commitments

- **Name:** Drift (implies spec-driven, moving forward, foundational)
- **Tagline:** "Production-ready SaaS in days, not weeks"
- **Voice:** Technical, no-nonsense, pro-developer. Direct, confident, assumes the reader builds software. Avoids marketing fluff; substance over hype.
- **Personality:** Opinionated but respectful of developer autonomy. Provides sane defaults; respects "I want to do this differently" (though it requires forking and refactoring).

## Evidence on Hand

- Working GitHub repository with complete Next.js 15 monorepo
- Full production stack: auth (Better Auth), payments (Stripe with webhooks), database (Drizzle + Neon), analytics (PostHog), email (Resend), CMS (BaseHub), UI (shadcn/ui v2 via Base UI)
- Claude Code automation: 11 specialized skills + 6 custom commands for spec-driven development (`/ship-feature`, `/standup`, `/ship-bug`, `/postmortem`, `/ship`, `/setup`)
- Coding standards documented in `.claude/CLAUDE.md`: React Server Components, type-safe database, error handling, security practices
- Pre-commit hooks and CI configured (linting, typecheck, tests)
- Live dev environment runs 3 apps in parallel (web, app, api)
- Deployment strategy: Vercel with auto-migrations

## Product Principles

1. **Opinionated by default, flexible when it matters.** One unified answer to infrastructure; no decision fatigue. But the stack is open enough to be forked and remixed—not a SaaS platform that locks you in.

2. **Production-ready from day one.** Security (Zod validation, env-safety, CSP headers), observability (PostHog error tracking), error handling (proper boundaries and logging), and deployment (auto-migrations, edge-ready) are non-negotiable, not bolt-on checklist items.

3. **Type-safety is architecture, not ceremony.** TypeScript strict mode, Zod validation, Drizzle type inference, and React Server Components serve accuracy, not pedantry. A type catch prevents production bugs.

4. **Ship fast by removing decisions.** Fewer choices (one auth solution, one ORM, one UI library) means more speed. Founders focus on their unique value, not "should we use Lucia or NextAuth or Clerk?"

5. **GitHub-native workflow for solo developers.** No Slack, no Notion, no third-party tools. Everything version-controlled: standups in Discussions, PRDs in Wiki, issues tracking features. Scales from solo to small team without tooling overhead.

## Accessibility & Inclusion

- Base UI v2 (shadcn next-generation) enforces accessible component primitives by default
- Tailwind CSS with color contrast and semantic HTML as starting point
- TypeScript strict mode surfaces intent, making code more legible for all developers
- Documentation targets full-stack developers (no "beginner-only" simplifications)

