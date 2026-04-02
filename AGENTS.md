# AGENTS.md

## Project Overview

This is **next-ship**, a production-grade Turborepo template for Next.js applications. It's a monorepo containing multiple apps and shared packages.

## AI Agent Guidelines

### Code Style
- Use TypeScript with strict typing
- Follow Biome formatting rules (enforced via pre-commit hooks)
- Prefer descriptive variable names with auxiliary verbs
- Write modular, reusable code

### Monorepo Structure
- `apps/` — Applications (web, app, api, docs, email, studio)
- `packages/` — Shared packages (analytics, auth, database, design-system, etc.)
- Uses pnpm workspaces and Turborepo for task orchestration

### Common Commands
- `pnpm dev` — Start development servers
- `pnpm build` — Build all apps and packages
- `pnpm format` — Format with Biome
- `pnpm lint` — Lint with Biome
- `pnpm check` — Run Biome check (format + lint)
- `pnpm test` — Run tests
- `pnpm migrate` — Run Prisma migrations
- `pnpm boundaries` — Check monorepo boundaries

### Environment Variables
- Copy `.env.example` to `.env` in each app/package
- Key variables: DATABASE_URL, POSTHOG_API_KEY, STRIPE_SECRET_KEY, etc.

### Database
- Uses Prisma with PostgreSQL
- Schema defined in `packages/database/prisma/schema.prisma`
- Studio available at `pnpm studio` (port 5555)

### Error Tracking
- PostHog configured for analytics and error tracking
- Use `captureError(error, context)` from `@repo/analytics`
- Global error boundaries in each app capture unhandled errors

### Design System
- Built on shadcn/ui components
- Tailwind CSS for styling
- Dark mode supported via next-themes

### Testing
- Vitest for unit tests
- Run `pnpm test` to execute

### Pre-commit Hooks
- Husky runs on every commit
- Biome format/lint on staged files
- Large file detection (>1MB blocks commit)

### Security
- CODEOWNERS configured for review requirements
- Secrets managed via environment variables
- Arcjet for application security (bot detection, rate limiting)

### Deployment
- Optimized for Vercel deployment
- Each app deploys independently
- Environment variables configured per project

## Working with AI Agents

When making changes:
1. Run `pnpm check` before committing
2. Ensure tests pass with `pnpm test`
3. Follow existing patterns in the codebase
4. Update documentation if changing APIs or setup
5. Respect monorepo boundaries (check with `pnpm boundaries`)
