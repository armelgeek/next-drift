# Drift

A production-ready Next.js 15 SaaS starter kit for solo founders and small teams.

---

## 🚀 Quick Drift Setup (GitHub-Native Workflow)

```bash
# One-command setup for Drift development workflow
.claude/setup-github.sh

# Or use Claude command
/setup
```

This enables:
- 📊 **Standups** → GitHub Discussions
- 📝 **PRDs** → GitHub Wiki  
- 📋 **Issues** → GitHub Issues
- 💬 **Team chat** → GitHub Discussions

Then use:
```bash
/ship-feature "feature name"    # Ship a feature
/ship-bug "bug description"     # Fix a bug
/postmortem "incident"          # Incident response
/standup                         # Daily status
```

**No Slack. No Notion. Just GitHub.** ✨

See `.claude/GITHUB-NATIVE.md` for details.

---

## Project Description
- Comprehensive starter kit for building production-ready SaaS applications
- Full-stack TypeScript monorepo with modern tooling and best practices
- Includes authentication, payments, database, CMS, analytics, and observability out of the box
- Designed for solo founders and small teams — simplified stack without enterprise complexity

## Quick Start Commands

```bash
# Setup
pnpm install
pnpm db:push  # Setup PostgreSQL (requires DATABASE_URL)

# Development (all apps in parallel)
pnpm dev

# Run a single app
pnpm --filter @repo/web dev      # Port 3001 (marketing site)
pnpm --filter @repo/app dev      # Port 3000 (main SaaS app)
pnpm --filter @repo/api dev      # Port 3002 (API server)

# Common tasks
pnpm check                        # Lint all files
pnpm test                         # Run all tests
pnpm test --filter @repo/auth    # Test specific package
pnpm build                        # Build all
pnpm db:studio                    # Open Drizzle Studio
```

## Tech Stack

### Frontend
- Next.js 16.2.1 (App Router, React Server Components)
- React 19.2.1
- TypeScript 5.9.3
- Tailwind CSS 4.1.17
- Radix UI primitives
- Lucide React icons
- Shadcn/ui components (via packages/design-system)
- Fumadocs for documentation

### Backend
- Next.js API routes (Edge & Node runtime support)
- Drizzle ORM 0.45.2 with PostgreSQL (Neon)
- Zod 4.1.13 for schema validation
- t3-oss/env-nextjs for environment variables
- Webhook handling (Svix)

### Monorepo
- pnpm 10.24.0 workspace
- Turbo 2.6.3 for build orchestration
- 6 apps (web, app, api, email, storybook, studio)
- 20+ shared packages (auth, payments, database, etc.)

### Development & Tooling
- Biome 2.3.8 with Ultracite presets (linting & formatting)
- Husky 9.1.7 pre-commit hooks with lint-staged
- Vitest 4.0.15 for testing
- Knip 6.1.1 for unused dependency detection
- TypeScript with strict mode enabled

### Infrastructure
- Neon PostgreSQL (serverless)
- Vercel for hosting
- PostHog for analytics & observability
- Stripe for payments (modern SaaS billing, webhooks via Svix)
- Basehub for CMS
- Better Auth for authentication

## AI Agent Role
- You are a senior full-stack TypeScript engineer specializing in Next.js 15 and React 19
- You have deep expertise in modern React patterns: Server Components, Server Actions, Suspense
- You understand monorepo architecture and workspace dependencies
- You are proficient with Drizzle ORM, PostgreSQL, and type-safe database patterns
- You follow strict TypeScript practices with comprehensive type safety

## Drift Brain (SQLite Knowledge Graph)

Drift maintains a SQLite knowledge graph at `.drift-brain.db` that learns from every development session.

### Components

**Decisions Table**  
Locked Q&A pairs (never ask the same question twice):
- Domain: ui, api, database, auth, infra, content
- Confidence: 0.0–1.0 (auto-adjusted on reuse)
- Locked: Once decided, never asked again across sessions

Example: `question: "Use Zustand or Context for theme state?" → answer: "Context (fewer dependencies)"` (domain: state, confidence: 0.9, locked: true)

**Learnings Table**  
Error→fix patterns with confidence scoring:
- Pattern: "drizzle-migration-timing"
- Problem: "Migrations run after deploy, schema not available"
- Solution: "Run `pnpm migrate` before `pnpm build`"
- Domains: database
- Confidence: 0.8 (increases on reuse)

**Hot Files Table**  
Frequently co-changed files from git history:
- Helps identify files that should be updated together
- Prevents breaking changes to related modules
- Example: `apps/app/src/app/feature/page.tsx` and `packages/database/services/feature.ts`

**Model Performance Table**  
Tracks which agent/model works best for each domain:
- Haiku for well-known domains (cheap)
- Sonnet for standard tasks (default)
- Opus for complex multi-area work (expensive)

### Auto-Routing

Every prompt triggers intelligent routing (enabled by default):
```
User: "add authentication"
→ /drift-clarifier (if ambiguous) → /drift-scout → /drift-architect → /ship-feature
```

Bypass rules (never routes):
- Starts with `/` (slash command)
- Starts with `!` (explicit escape)
- Ends with `?` (question)
- `<4 chars` (ack like "yes", "ok")

**Toggle**: Set `DRIFT_AUTO_ROUTING=off` to disable, or use `/drift:auto-routing off/on`

### Workflow Integration

Every `/ship-feature` or `/ship-bug` invocation:
1. **Clarify**: Ask domain-specific questions if ambiguous (0–10 questions, never repeated)
2. **Scout**: Find all relevant files across apps/packages (6-direction flow tracing)
3. **Architect**: Plan backward from goal → outcomes → tasks
4. **Execute**: Build per task with fresh context
5. **Review**: Critic agent checks for bugs/security/edge cases
6. **Record**: Scribe agent saves decisions and learnings to brain.db

Result: Faster execution, fewer tokens (70% cheaper on second occurrence), higher quality.

## Coding Style and Structure
- Prefer React Server Components by default; use 'use client' only when necessary
- Use Server Actions for mutations and form handling
- Implement proper error boundaries with next/error.tsx patterns
- Use Drizzle ORM with strict typing for all database operations
- Prefer early returns and modularization over nested conditionals
- Use descriptive variable names with auxiliary verbs (isLoading, hasError)
- Write concise, technical TypeScript code with accurate examples
- Follow the monorepo structure: apps for deployables, packages for shared code
- Use workspace:* for internal dependencies
- Import packages using @repo/ prefix (e.g., @repo/database, @repo/auth)

## Naming Conventions
- Components: PascalCase (e.g., UserProfile.tsx)
- Hooks: camelCase with 'use' prefix (e.g., useAuth.ts)
- Server Actions: camelCase in separate actions.ts files
- Database tables: snake_case in Drizzle schema
- Environment variables: UPPER_SNAKE_CASE with NEXT_PUBLIC_ prefix for client-side
- Use lowercase with dashes for directory names (e.g., components/auth-wizard)

## TypeScript & Type Safety
- Use strict TypeScript configuration
- Prefer type over interface for object shapes
- Use Zod for runtime validation and type inference
- Never use 'any' - use 'unknown' with proper type guards instead
- Leverage Drizzle's type inference for database operations
- Use satisfies keyword for configuration objects

## Error Handling
- Implement proper error boundaries in error.tsx files
- Use Server Actions with try/catch and return typed error responses
- Log errors appropriately via @repo/observability package
- Provide user-friendly error messages via toast notifications (Sonner)
- Never expose internal error details to users
- Use the 'use server' directive in Server Actions with proper error handling

## Testing
- Write unit tests with Vitest for utilities and shared packages
- Use @repo/testing package for test utilities and setup
- Test Server Actions with proper request/response mocking
- Implement integration tests for critical API flows
- Test across different environments (Edge vs Node runtime)
- Use test isolation with proper setup/teardown

## Database & ORM
- Use Drizzle ORM for all database operations
- Define schemas in packages/database/src/schema.ts
- Use migrations with drizzle-kit (db:migrate, db:generate, db:push)
- Prefer type-safe queries with Drizzle's query builder
- Use transactions for multi-step operations
- Never use raw SQL without proper parameterization

## Security
- Use @repo/security for rate limiting and protection
- Validate all user inputs with Zod schemas
- Implement proper CSP headers via next.config
- Use 'use server' directive for sensitive operations
- Store secrets in environment variables, never in code
- Follow OWASP guidelines for web application security
- Use @t3-oss/env-nextjs for type-safe env validation

## UI & Styling
- Use Tailwind CSS v4 with utility-first approach
- Leverage @repo/design-system for shared components — Base UI v2 (shadcn next-gen)
- Base UI does NOT use `asChild` prop: compose directly instead
  - ✅ `<Link><Button>Click</Button></Link>`
  - ❌ `<Button asChild><Link>Click</Link></Button>` (breaks with Base UI)
- Implement proper loading states with Suspense boundaries
- Use next/image for optimized images
- Support dark mode via class-based theming
- Add new components via: `npx shadcn@latest add button -c packages/design-system`

## Performance
- Use React Server Components to minimize client-side JavaScript
- Implement proper caching strategies (fetch cache, unstable_cache)
- Use next/image with proper sizing and formats
- Minimize 'use client' directives
- Implement streaming with Suspense boundaries
- Use edge runtime where appropriate for API routes

## Package Management
- Use pnpm for all dependency management
- Pin dependencies in package.json
- Use workspace:* protocol for internal monorepo dependencies
- Run pnpm install from root for workspace-wide changes
- Use turbo build for efficient monorepo builds

## Pre-commit & CI
- Husky runs lint-staged on every commit
- Ultracite (Biome) checks all staged files
- Large file detection blocks files >10MB and warns on >500 lines
- CI runs typecheck, lint, and tests on PRs
- Never commit with --no-verify except for configuration changes

## Git Conventions
- Conventional commits (feat:, fix:, chore:, refactor:)
- Branch naming: feature/*, fix/*, chore/*
- PRs require passing CI (typecheck, lint, test) before merge
- Squash merge to main; no direct commits to main
  
## Transactional Email
- Use packages/email (React Email) for all templates — booking confirmation, reminder, cancellation
- Never send email directly from Server Actions; queue via a dedicated service/job
- Test emails with a preview route before deploying (pnpm dev inside apps/email)

## Internationalization
- All user-facing strings go through the i18n package, no hardcoded text
- Default locale: fr, fallback: en
- Date/currency formatting via Intl API, locale-aware

## SEO
- Use generateMetadata for all public pages (web app)
- Structured data (JSON-LD) for business/service pages
- Sitemap and robots.txt generated at build time

## Environment & Deployment
- Never commit .env files; use .env.example with placeholder values
- Preview deployments on Vercel for every PR
- Migrations run automatically pre-deploy via db:migrate, never manually in prod

## Comments
- No comments that restate what the code already says (e.g. `// loop through users` above a for-loop, `// return result` above a return statement) — if the code needs that comment, rename the variable/function instead
- Only comment the "why", never the "what": business rules, workarounds for a library bug, non-obvious edge cases, regulatory/legal constraints
- No comment blocks separating sections of a function (`// --- validation ---`, `// --- processing ---`) — split into named functions instead
- No JSDoc on trivial internal functions (private helpers, one-liners) — reserve JSDoc for exported functions in packages/* only, as already stated
- Never leave commented-out code — delete it, git history keeps it
- No changelog-style comments in code (`// added by X on date`, `// fixed bug #123`) — that belongs in commit messages, not the file
- No comments explaining standard language/framework behavior (`// useState returns [value, setter]`) — assume the reader knows the stack

## Type system
- Use zod schemas for input validation in Server Actions
- Never cast directly to unknown or any without a zod guard
- Leverage @repo/database for type inference; avoid manual type declarations where inferring is possible
- Prefer type refinements (z.refine) over manual validation blocks
- Do not duplicate validation logic: if a Zod schema exists, use it instead of manual checks

## Type Definitions
- Never redefine a shape by hand in a component's props interface if it already exists as a Drizzle model or a Zod schema — derive it instead (`Pick<User, "id" | "name">`, or `z.infer<typeof schema>`)
- Component-local types (Props interfaces) are colocated with the route's schema.ts/types.ts, not declared inline inside the component file
- A type that mirrors a database model or a validation schema is a sign to import/derive, not to retype — two independent definitions of the same shape will silently drift apart when one is updated and the other isn't
- Shared types used across multiple routes go in packages/database or packages/types; route-specific types stay in that route's own types.ts

## Abstraction
- Don't abstract after one occurrence — duplicate code twice is fine, extract on the third occurrence (rule of three)
- A shared package (packages/*) is justified only when 2+ apps actually need it, not "might need it later"
- Prefer composition over inheritance; no class hierarchies for business logic
- Avoid premature generic types — write the concrete version first, generalize only when a second concrete use case appears


## Function & Component Size
- A function doing more than one thing gets split — if you need "and" to describe what it does, split it
- Server Actions stay thin: validate → call service → return; business logic lives in packages/*, not inline in actions.ts
- A component over ~150 lines is a signal to extract sub-components
- Props drilling beyond 2 levels → use context or restructure, don't just keep passing down

## State Management
- Server state (data from DB) stays server-side; don't duplicate it in client state unless optimistic UI requires it
- No global client state (Zustand/Context) unless 2+ unrelated components need the same data — otherwise lift state to the nearest common parent
- Form state via a form library (react-hook-form) + Zod resolver, never manual useState per field

## Forms & Validation
- Single Zod schema shared between client validation and Server Action — define once in a schema.ts, import both sides
- Client-side validation is UX only; server always re-validates, never trusts client
- Disable submit button during pending state (useFormStatus/useTransition), prevent double-submit

## Refactoring
- Never mix a refactor with a feature/fix in the same PR — separate commits/PRs
- Renaming a widely-used export is its own PR, not a side effect of another change
- If touching a file for one reason, don't opportunistically restructure unrelated code in the same pass

## Package Architecture
- packages/* never import from apps/* — dependency direction is one-way (apps depend on packages, never the reverse)
- No circular dependencies between packages — packages/database never imports packages/auth if auth imports database; extract a shared packages/types instead
- Each package has a single clear responsibility — resist merging unrelated concerns into one package for convenience (e.g. don't add email-sending helpers into packages/database)
- New shared logic only becomes a package once 2+ apps use it (rule of three applies at the monorepo level too — see Abstraction section)

## Layered Architecture
- Three layers, one direction: UI (components) → Server Actions/route handlers → services (business logic) → data access (Drizzle queries)
- Server Actions never contain raw Drizzle queries inline — call a service function in packages/database or a local services/ folder
- Business logic (booking rules, deposit calculation, availability checks) lives in pure functions independent of Next.js — testable without mocking the framework
- UI components never call the database directly, even in Server Components — always through a service layer

## Feature Organization
- Organize by domain/feature (bookings/, availability/, payments/) not by technical type (all-actions/, all-components/) — colocation over categorization
- Each domain folder owns its own components, actions, schema, and types; shared UI primitives stay in packages/design-system
- A feature's public API is exported via a single index.ts; internal files aren't imported directly from outside the folder

## App Boundaries
- apps/web (marketing/public) never talks directly to the database — goes through apps/api or shared packages only
- apps/app (authenticated product) owns the booking domain logic; apps/api exposes only what external consumers (webhooks, future integrations) need
- Shared auth session logic lives in packages/auth, consumed identically by web and app — no duplicated session-checking logic per app

## Component Design
- Props typed with explicit interfaces, never inferred from usage — no `any`, no implicit optional props
- Compound components (Card.Header, Card.Body) for related UI pieces instead of one component with 10 boolean flags
- No prop named `type`, `data`, or `config` without a more specific name — ambiguous names force the reader to trace usage
- Default export only for pages/layouts (Next.js convention); named exports for everything else in packages/design-system

## UI States
- Every data-fetching component handles four states explicitly: loading, empty, error, success — never assume success by default
- Loading states use Suspense + skeleton components matching the final layout shape, not a generic spinner
- Empty states are designed, not an afterthought (e.g. "No bookings yet" with a CTA, not a blank div)
- Error states show a retry action where feasible, not just an error message

## Styling
- Use design tokens (CSS variables from packages/design-system) for colors/spacing — never hardcode hex values or arbitrary Tailwind values like `mt-[13px]`
- No inline styles except for truly dynamic values (calculated positions, chart colors) that can't be a Tailwind class
- Component variants via cva (class-variance-authority) or shadcn patterns, not conditional string concatenation
- Consistent spacing scale — stick to the Tailwind default scale, don't introduce custom one-off spacing values

## Data Fetching
- Fetch data in Server Components as close to where it's used as possible — avoid prop-drilling fetched data through multiple client components
- Client-side fetching (useSWR/React Query if added) only for data that changes after initial load (real-time availability, live booking status)
- No waterfalls: parallel-fetch independent data with Promise.all in Server Components, don't await sequentially by habit

## Responsive Design
- Mobile-first: base styles target mobile, breakpoints (sm:, md:, lg:) add complexity upward, never the reverse
- Booking calendar and forms tested at 375px width minimum before considered done
- Touch targets minimum 44x44px on interactive elements (buttons, calendar day cells)

## Storybook
- Every component in packages/design-system gets a story before being considered done
- Stories cover default, loading, error, and edge-case states (long text, empty data) — not just the happy path
- Storybook is the source of truth for visual regression review, not a chore done after the fact


## Client Components
- 'use client' pushed as far down the tree as possible — a page can be a Server Component even if one small interactive widget inside it is a Client Component
- Never mark a whole layout or page 'use client' just because one child needs interactivity — extract that child instead
- Client Components don't import server-only code (database, secrets) — this fails at build time but catch it in review, not CI


## Testing
- All business logic in packages/* is unit-tested in isolation — no mocks for framework behavior, just inputs and outputs
- Integration tests only where needed (e.g. email templates), not for every function
- Server Actions tested via their public API, not by importing implementation details
- No snapshot testing — UI changes should be intentional and reviewed in diff, not blindly accepted


## Design Patterns

### Data Access
- Repository-lite pattern: each domain exposes typed query functions (getBookingById, listAvailableSlots) from packages/database — never raw Drizzle queries scattered across Server Actions
- Result/Either pattern for operations that can fail predictably (booking conflict, payment declined) — return a typed { success, data } | { success: false, error } shape instead of throwing for expected failures; reserve throw for truly exceptional cases

### Business Logic
- Strategy pattern for variable behavior: pricing/deposit calculation rules likely differ per service type — one function per strategy, selected by a lookup, not a growing if/else chain
- Factory function for constructing complex objects with defaults (e.g. createBooking(input) assembling status, timestamps, computed fields) instead of scattering object literals with the same shape across files

### State & Events
- Observer/pub-sub via PostHog events or a lightweight event emitter for cross-cutting concerns (booking confirmed → send email + update analytics + notify) — the booking service doesn't need to know about email or analytics directly
- State machine (even a simple typed union + transition map) for booking status (pending → confirmed → completed/cancelled) — prevents invalid transitions being coded ad hoc in multiple places

### Composition (React-specific)
- Compound component pattern for related UI (already noted for Card.Header/Body) — reach for it whenever a component family shares implicit state
- Render props / children-as-function only when composition truly needs it (e.g. a generic <DataTable> needing custom row rendering) — don't reach for it by default, prefer simple props first
- Higher-order components avoided in favor of hooks — no withAuth(Component) wrappers, use a useAuth() hook instead

### Anti-patterns to actively avoid
- God objects: a single "BookingService" that does validation + payment + email + analytics — split by responsibility instead
- Anemic domain model: booking data with getters/setters only and all logic living elsewhere in random utils files — business rules belong next to the data they govern
- Prop soup: components accepting 10+ props as an escape hatch instead of composing smaller pieces
- Singleton service instances holding mutable state across requests — Next.js server runtime reuses processes, so any module-level mutable state leaks between unrelated requests/users

## Key Directories & Files

| Path | Purpose |
|------|---------|
| `apps/app` | Main SaaS application (port 3000) — most development happens here |
| `apps/web` | Marketing site (port 3001) — public landing pages |
| `apps/api` | API server (port 3002) — webhook handlers, internal APIs |
| `packages/database` | Drizzle schema, migrations, query functions |
| `packages/design-system` | Shared UI components (Base UI v2, Tailwind) |
| `packages/auth` | Better Auth configuration (sessions, OAuth) |
| `packages/payments` | Stripe integration (invoices, subscriptions) |
| `packages/observability` | PostHog client setup, error handling |
| `.claude/` | Claude Code configuration (this CLAUDE.md, settings.json, skills) |
| `.github/workflows` | GitHub Actions CI/CD |
| `turbo.json` | Build graph for Turborepo |

## Packageable Infrastructure
- Before writing new infrastructure code (payment provider, email sending, auth logic, notification/event system), ask: "would this exact code work unchanged on a different client project?" If yes, it goes in packages/, never inline in apps/.
- Infrastructure code (Stripe, email, auth) is packaged even on first use if it's a known reusable concern — unlike business logic, don't wait for a 2nd occurrence here.
- Business/domain logic (booking rules, deposit calculation specifics) NEVER goes in a shared package — only the generic mechanism does. Example: packages/payments exposes createDeposit(amount, metadata), but the rule "deposit = 20% of price" stays in the app's domain layer.
- When creating a payment/email/auth integration, define the interface first (PaymentProvider, EmailSender) in the package, then the concrete implementation (StripeProvider, ResendSender) — never hardcode a provider's SDK calls directly in app code.
- Any metadata or config specific to one project (bookingId, project-specific email copy) is passed in as a parameter from the app layer — never hardcoded inside the package itself.
- Before extracting to a package, check packages/ for an existing one that already covers this concern — don't create packages/stripe-v2 next to an existing packages/payments.


## Common Development Patterns

### Environment Setup
- Never commit `.env*` files — they're in `.gitignore`
- Copy `.env.example` to `.env.local` in each app directory (`apps/app`, `apps/web`, `apps/api`)
- **Minimal setup**: only `DATABASE_URL` is required to start developing
- For a complete feature set, see `ENV_SETUP.md` for all services (Stripe, PostHog, Resend, etc.)
- Test keys work: use `sk_test_*` for Stripe, `phc_*` for PostHog, etc.

### Testing a Specific Feature
When adding a feature, test the whole flow:
```bash
# 1. Run the single app you're modifying
pnpm --filter @repo/app dev

# 2. In another terminal, run type-checking on changes
pnpm --filter @repo/app typecheck --watch

# 3. If tests exist for this package:
pnpm test --filter @repo/auth
```

### Database Schema Changes
```bash
# 1. Edit packages/database/src/schema.ts
# 2. Generate migration file (reads diffs)
pnpm db:generate

# 3. Push to your database
pnpm db:push

# 4. Open Drizzle Studio to verify
pnpm db:studio
```

### Adding a UI Component
```bash
# Add from shadcn v2 registry to design-system
pnpm --filter @repo/design-system shadcn add button

# Import in your app
import { Button } from "@repo/design-system/components/ui/button"

# Test it in Storybook
pnpm --filter @repo/storybook dev
```

## Command Reference

### Development
| Command | When to use |
|---------|------------|
| `pnpm dev` | Start all apps (web, app, api) in parallel |
| `pnpm --filter @repo/app dev` | Run only the SaaS app (faster for focused work) |
| `pnpm --filter @repo/web dev` | Run only marketing site |
| `pnpm --filter @repo/api dev` | Run only API server |

### Database
| Command | When to use |
|---------|------------|
| `pnpm db:generate` | After editing `packages/database/src/schema.ts` |
| `pnpm db:push` | Apply migrations to your database |
| `pnpm db:studio` | Visual database explorer — view/edit data, inspect schema |

### Testing & Quality
| Command | When to use |
|---------|------------|
| `pnpm test` | Run all tests in packages/* |
| `pnpm test --filter @repo/database` | Test only one package |
| `pnpm check` | Lint everything (pre-commit runs this) |
| `pnpm fix` | Auto-fix linting issues |
| `pnpm dead-code` | Find unused imports/exports |

### Build & Deploy
| Command | When to use |
|---------|------------|
| `pnpm build` | Build all apps for production |
| `pnpm typecheck` | Type-check all packages (faster than build) |
| `pnpm analyze` | Analyze bundle sizes |
| `pnpm bump-deps` | Update all dependencies (use carefully) |
| `pnpm clean` | Remove node_modules and .next caches |
| `pnpm migrate` | Generate + push database migrations (alias for db:generate + db:push) |
