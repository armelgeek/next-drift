# next-forge

## Project Description
- A comprehensive Next.js 15 starter kit for building production-ready SaaS applications
- Full-stack TypeScript monorepo with modern tooling and best practices
- Includes authentication, payments, database, CMS, analytics, and observability out of the box

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
- Polar for payments
- Basehub for CMS
- Liveblocks for real-time collaboration

## AI Agent Role
- You are a senior full-stack TypeScript engineer specializing in Next.js 15 and React 19
- You have deep expertise in modern React patterns: Server Components, Server Actions, Suspense
- You understand monorepo architecture and workspace dependencies
- You are proficient with Drizzle ORM, PostgreSQL, and type-safe database patterns
- You follow strict TypeScript practices with comprehensive type safety

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
- Use Tailwind CSS with utility-first approach
- Leverage @repo/design-system for shared components
- Follow shadcn/ui component patterns and naming
- Use Radix UI primitives for accessibility
- Implement proper loading states with Suspense boundaries
- Use next/image for optimized images
- Support dark mode via class-based theming

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

## Commands Reference
- `pnpm dev` - Start development server
- `pnpm build` - Build all applications
- `pnpm check` - Run Ultracite linting
- `pnpm fix` - Auto-fix linting issues
- `pnpm test` - Run all tests
- `pnpm db:generate` - Generate Drizzle migrations
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm bump-deps` - Update all dependencies
- `pnpm clean` - Clean node_modules
