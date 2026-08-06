# Create Drift App

Bootstrap a new SaaS project from Drift in **2 minutes**.

## Usage

```bash
./scripts/create-app.sh MOOZ
```

This will:
1. ✅ Clone Drift boilerplate
2. ✅ Rename configs (package.json, etc)
3. ✅ Initialize git repo
4. ✅ Create STATUS.md
5. ✅ Install dependencies
6. ✅ Ready to code

## What's included (from Drift)

**Packages (shared, don't fork):**
- `@repo/database` — Drizzle ORM, schema, migrations
- `@repo/auth` — Better Auth configuration
- `@repo/design-system` — shadcn/ui v2, Tailwind CSS
- `@repo/payments` — Stripe integration
- `@repo/observability` — PostHog, error handling
- `@repo/security` — Security headers, rate limiting

**Apps (clone & customize):**
- `apps/app` — Main SaaS product
- `apps/web` — Marketing site
- `apps/api` — API server

**Skills (shared, inherit from Drift):**
- `/ship-feature` — Ship features with auto-scope
- `/scope-cutter` — Force MVP breakdown
- `/churn-postmortem` — Investigate churn
- `/onboarding-audit` — Audit signup flow
- `/standup-cross-projects` — See all projects

## Architecture

```
drift/                    ← Boilerplate (stay up-to-date)
  ├── packages/           ← Shared (don't fork)
  ├── .claude/skills/     ← Shared (inherit)
  └── scripts/
      └── create-app.sh

MOOZ/                     ← Your project (independent repo)
  ├── apps/               ← Clone & customize
  ├── packages/           ← Link back to drift/packages
  └── STATUS.md           ← Track your progress
```

## Workflow

### Starting a new project

```bash
cd Hayzar
./drift/scripts/create-app.sh MOOZ
cd MOOZ
pnpm dev
```

### Using shared packages

All `@repo/*` packages come from Drift. Don't fork them.

**When you improve a shared package (auth, design-system, etc):**
1. Make the change in your project
2. Test it
3. Create a PR back to Drift
4. Drift merges
5. Your project pulls the update

### Customizing for your project

Only customize what's unique:
- `apps/app` — your SaaS features
- `apps/web` — your marketing copy, pricing
- `.env` — your API keys

**Don't customize:**
- `packages/*` — these are shared
- `.claude/skills` — inherit from Drift
- Core auth/payment flows — stay in Drift

## Keeping up with Drift

When Drift improves (new skills, better patterns):

```bash
git remote add drift https://github.com/hayzaar/drift.git
git pull drift main  # Merge improvements
```

(This is optional — you can stay on your own version too)

## First steps after create-app

1. Update `.env` with your API keys
2. `pnpm db:push` — setup database
3. `pnpm dev` — start development
4. `/ship-feature "your first feature"` — start building

That's it. You have a production-ready SaaS. Ship it.
