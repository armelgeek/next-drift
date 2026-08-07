---
name: cv-optimizer-2
status: backlog
created: 2026-08-07T00:00:00Z
progress: 0%
prd: .claude/prds/cv-optimizer-2.md
github: (will be set on sync)
---

# Epic: CV Optimizer 2.0

## Overview

Transform CV Optimizer into a complete job search companion: discover opportunities (SerpAPI + cache), optimize CVs per job (Claude scoring + interview prep), track applications, and convert via transparent credit-based pricing. Architecture: event-driven SaaS flow (discovery → optimization → tracker), guarded by credit gates at each monetization point.

**Scope**: 4 core pages, 5 new database tables, 3 Claude integrations, 1 payment flow, 1 background job (6h sync). Solo developer, Week 1 delivery, MVP-complete.

---

## Architecture Decisions

### Job Provider Abstraction (Day 1 Requirement)
**Rationale**: SerpAPI faces DMCA litigation (ongoing). Abstraction layer allows swap to Adzuna/Jooble without major refactor.

**Decision**: Unified `JobProvider` interface; SerpAPI concrete implementation; Adzuna stub for Phase 2.

### Mutualised Job Search Cache (Cost Lever)
**Rationale**: Uncontrolled SerpAPI calls per free-tier user make the free tier unsustainable. Sharing cache by query hash (title + location) across users reduces API load ~80% in typical usage.

**Decision**: `job_search_cache` table with `query_hash` PK (SHA256 of title+location), TTL 6–12h. Separate from user-specific match score cache (24h per user).

### User Credit Tracking (Not Subscriptions)
**Rationale**: No auto-renewal abonnements = market trust moat. One-time Stripe checkout for credit packs.

**Decision**: 
- `users.credits_balance` tracks spend
- Free tier (monthly reset): 1 optimization, unlimited browsing, 1 CV analysis/week, 3 follow-ups/month
- Actions that cost 1 credit: optimize CV, export CV analysis PDF
- 5 upsell moments hardcoded into flow (not dynamic; static copy per trigger)

### Claude for Deterministic Parsing (Not Creative Generation)
**Rationale**: Match scoring, interview Q&A, CV feedback are structured tasks. Claude Haiku is cost-efficient and sufficient for deterministic extraction.

**Decision**: 
- Haiku for match scoring (JSON: score 0–100, strengths, gaps, explanation)
- Haiku for interview questions (JSON: 5 questions + suggested answers)
- Haiku for CV feedback (structured text: formatting, ATS, keywords, gaps)
- Sonnet only if Haiku underperforms on quality (measure in Week 1)

### Event-Driven Paywall (Not Page-Level Guards)
**Rationale**: Users should see value before hitting friction. Paywalls trigger at action, not route.

**Decision**: Check quota before each `optimize`, `analyze`, `follow_up` action. Modal prompts to buy if exhausted. No 401 redirects.

---

## Technical Approach

### Frontend Components (Next.js App Router, React 19)
- **Offers Discovery Page** (`/offers`): Sidebar filters (search, job type, location), paginated job feed, score badge per card, "Optimize" button
- **Optimizer Page** (`/optimizer`, `/optimizer/[jobId]`): CV upload (reuse last or new), job posting textarea, parallel Claude generation, CV preview tabs, match score display, interview Q&A (collapsible), "Save & Download" button
- **Applications Tracker** (`/applications`): Table view (title, company, date, status, score), click-to-modal, status selector dropdown, "Generate Follow-up Email" button with copy-to-clipboard
- **CV Analysis Page** (`/cv-analysis`): Upload → analyze → feedback display, "Export PDF" button (1 credit), weekly limit check
- **Paywall Modal** (reused): Credit pack display, purchase button, "No auto-renewal" badge
- **5 Upsell Moment Triggers** (inline): After first optimization, free exhausted, browsing 5+ offers, 8+ apps in tracker, first purchase bonus

**Reuse from Drift**:
- Shadcn v2 components (Button, Card, Table, Dialog, Tabs, Input, Textarea, Select)
- Base UI v2 (no `asChild` prop; compose directly)
- Tailwind CSS v4 for styling
- BetterAuth for session
- PostHog for analytics

### Backend Services (NestJS API + Server Actions)
- **Database Queries** (`packages/database/src/queries/`):
  - `job-cache.ts`: `getOrFetchJobs(query, location)`, `getCachedJobSearch(hash)`, `setCachedJobSearch(hash, data, ttl)`
  - `applications.ts`: `listApplications(userId)`, `saveApplication(...)`, `updateApplicationStatus(...)`
  - `cv-analyses.ts`: `analyzeCV(userId)`, `getLastAnalysis(userId)`
  - `users.ts`: `decrementFreeUses(userId)`, `checkFreeTierQuota(userId, action)`

- **Claude Integration** (`packages/claude-integration/src/`):
  - `score-match.ts`: `getMatchScore(cv, jobPosting) → {score, strengths, gaps, explanation}`
  - `interview-questions.ts`: `generateInterviewQuestions(jobPosting) → [{q, suggested_answer}]`
  - `cv-analysis.ts`: `analyzeCv(cvText) → {feedback}`
  - `follow-up-email.ts`: `generateFollowUpTemplate(application) → {template}`

- **Credit System** (`packages/credits/src/`):
  - `quota-tracker.ts`: `isActionAllowed(userId, action)`, `subtractCredit(userId, amount)`
  - `stripe-provider.ts`: `createCheckoutSession(userId, creditPack)`, `handleStripeWebhook(event)`

- **Job Provider Abstraction** (`packages/jobs-provider/src/`):
  - `types.ts`: `JobProvider` interface, `Job` shape
  - `providers/serpapi.ts`: `SerpAPIProvider` implementation
  - `providers/adzuna.ts`: Stub for Phase 2
  - `index.ts`: Factory `getJobProvider()`

- **Server Actions** (`apps/app/app/*/actions.ts`):
  - `offers/actions.ts`: `fetchOffers(query, location)`, `getMatchScore(jobId, cvText)`
  - `optimizer/actions.ts`: `generateOptimization(cv, jobPosting, jobId)`, `saveApplication(...)`, `downloadPdfCV(...)`
  - `applications/actions.ts`: `listApplications()`, `updateApplicationStatus(...)`, `generateFollowUpEmail(...)`
  - `cv-analysis/actions.ts`: `analyzeCv(cvText)`, `exportAnalysis(analysisId)`

- **API Webhooks** (`apps/api/routes/`):
  - `webhooks/stripe.ts`: Stripe checkout.session.completed → credit user
  - `cron/sync-jobs.ts`: 6-hourly fetch popular searches, upsert into `discovered_jobs` (Vercel Crons)

### Infrastructure & Integrations
- **Database**: PostgreSQL (Neon), 5 new tables (`discovered_jobs`, `applications`, `cv_analyses`, `job_search_cache`, users.modifications)
- **Job API**: SerpAPI (€75/month, 5k searches), cached by query hash, shared across users
- **AI**: Claude API (Haiku/Sonnet, €0.02–0.06/op), rate-limit queuing with placeholder UI
- **Payments**: Stripe one-time checkout (no subscriptions), webhook to credit user on payment_intent.succeeded
- **Cron**: Vercel background functions, 6-hourly job refresh (sync popular searches)
- **Analytics**: PostHog event tracking (optimize-start, optimize-complete, application-saved, purchase, etc.)
- **Hosting**: Vercel (apps/app, apps/api); Edge Runtime for fast job search, Node for background jobs

---

## Implementation Strategy

### Phase 1: Database & Integrations (Tasks 1–3)
1. Database schema + migrations (Drizzle)
2. Job provider abstraction (SerpAPI + cache layer)
3. Claude integration stubs (score, questions, CV feedback)

### Phase 2: Core Pages UI (Tasks 4–7)
4. Offers discovery page + filters + SerpAPI integration
5. Optimizer page + CV upload + Claude generation + preview
6. Applications tracker + status mgmt + follow-up email gen
7. CV analysis page + feedback + weekly limit

### Phase 3: Credit System & Payment (Tasks 8–10)
8. Free tier quota logic + paywall modal
9. Stripe checkout + webhook → credit user
10. 5 upsell moment triggers (UI + event placement)

### Phase 4: Background & Polish (Tasks 11–12)
11. 6-hourly cron job (sync popular searches)
12. Manual testing + bug fixes + documentation

**Parallelization Opportunities**:
- Tasks 4–7 can run in parallel (independent page implementations)
- Tasks 1–3 are sequential (dependency: schema → queries → integrations)
- Tasks 8–10 can overlap with page dev once DB is ready
- Task 11 is parallel after cron infrastructure is understood

---

## Task Breakdown Preview

| # | Task | Effort | Dependencies | Parallelizable |
|---|------|--------|--------------|---|
| 1 | Database schema + migrations | 1h | None | No |
| 2 | Job provider abstraction (SerpAPI) | 1.5h | Task 1 | No |
| 3 | Claude integration stubs | 1h | None | Yes (parallel to 1–2) |
| 4 | Offers discovery page | 2h | Task 1, 2 | Yes (parallel to 5–7) |
| 5 | Optimizer page | 2.5h | Task 1, 3 | Yes |
| 6 | Applications tracker | 2h | Task 1 | Yes |
| 7 | CV analysis page | 1.5h | Task 1 | Yes |
| 8 | Free tier quota + paywall | 1.5h | Task 1 | No |
| 9 | Stripe integration + webhook | 1.5h | Task 8 | No |
| 10 | 5 upsell moments | 1h | Task 9 | No |
| 11 | Cron job (6h sync) | 1h | Task 1, 2 | No |
| 12 | Testing + polish | 2h | All | Sequential final pass |

**Total Effort**: ~18h solo developer (compressed to 1 week full-time with focus).

---

## Dependencies

### External Services (No Blocking Issues)
- SerpAPI (Google Jobs API, cost control via cache)
- Anthropic Claude API (Haiku/Sonnet)
- Stripe (one-time payments)
- Neon PostgreSQL (existing)
- Vercel (existing, Crons supported)
- PostHog (existing)

### Internal Code Reuse
- BetterAuth (`@repo/auth`)
- Drizzle ORM (`@repo/database`)
- Shadcn UI v2 (`@repo/design-system`)
- Next.js 16 App Router
- TypeScript strict mode

### Blocking Risks
- **SerpAPI DMCA**: Mitigated by provider abstraction from day 1
- **Claude rate-limit**: Mitigated by queue + placeholder UI
- **Free tier cost**: Mitigated by cache TTL strategy (monitor Week 1)
- **None expected to block launch**

---

## Success Criteria (Technical)

✅ All 4 pages live and integrated  
✅ SerpAPI cache working (mutualised, <1s query latency)  
✅ Claude scoring deterministic + correct (0–100 score, strengths/gaps parsed)  
✅ Credit system enforced (free tier quota blocking actions, payment completing)  
✅ Manual testing: discovery → optimizer → tracker → paywall flow works end-to-end  
✅ Type safety: full TypeScript coverage, no `any`  
✅ Deployment: migrations auto-run, env vars set, Stripe webhook live  

---

## Estimated Effort

- **Total**: ~18 hours solo developer
- **Schedule**: Week 1 (full-time, 5 working days @ 3.6h/day average)
- **Bottleneck**: Database schema + Claude integrations (sequential), then page parallelization
- **Risk buffer**: 2–3 hours for unexpected bugs + polish

---

