---
name: cv-optimizer-2
description: Complete job search companion platform with offer discovery, CV optimization, interview prep, and application tracking
status: backlog
created: 2026-08-07T00:00:00Z
---

# PRD: CV Optimizer 2.0

## Executive Summary

Transform CV Optimizer from a one-shot CV optimization tool into a **complete job search companion platform**. Users discover relevant job opportunities, adapt their CV for each one, prepare for interviews, and track all applications in a single cohesive interface. Differentiate through transparent credit-based pricing (no auto-renewal abonnements) and francophone-first positioning.

---

## Problem Statement

CV Optimizer generates traffic but converts poorly (<5%). Root cause: users encounter the paywall before experiencing product value. Competitors (MonCVParfait, CVcrea) suffer reputation damage from deceptive auto-renewal subscriptions. The market is saturated on "CV building" but undersaturated on the combination of **job discovery + CV tailoring + interview prep + tracking**—especially in French.

**Key market insight**: The main threat is not product competition but commoditization (LinkedIn, Indeed, France Travail deploy native AI) and infrastructure cost (SerpAPI dependency). Differentiation must be on workflow completeness and trust, not AI alone.

---

## User Stories

### Discovery & Matching
- **As a** job seeker, **I want to** browse job opportunities relevant to my profile with automatic compatibility scores, **so that** I can quickly identify promising leads without manual screening.
- **Acceptance**: User can search by title + location, see 10 jobs per page, view match score (0-100%) instantly cached, navigate to optimizer with one click.

### Optimization & Prep
- **As a** candidate, **I want to** upload my CV once and get an optimized version for each job plus 5 interview questions, **so that** I'm fully prepared and can apply strategically.
- **Acceptance**: Upload → auto-fetch last CV or select new one → collate job posting → see optimized CV side-by-side, match score + explanation, interview Q&A.

### Application Tracking
- **As a** active job seeker, **I want to** track all my applications in one place, update statuses, and generate follow-up emails with a click, **so that** I never lose momentum on a lead.
- **Acceptance**: Table of applications with title, company, date, status (Applied/Interview/Rejected/Offer/Archived), modal to update status, generate follow-up template (manual send, not auto).

### CV Health Check
- **As a** candidate, **I want to** get structured feedback on my CV (formatting, ATS compliance, missing keywords) once per week, **so that** I can improve my CV independently.
- **Acceptance**: Upload CV → receive actionable feedback (no export without credit purchase) → can re-upload after 7 days.

---

## Functional Requirements

### Page 1: "Offres pour moi" (Job Discovery Hub)
- **Sidebar filters**: Search (text), job type (CDI/Stage/Contract), location (text), salary range (optional)
- **Job feed**: ~10 results per page, each card shows: title, company, location, salary (if available), **match score 0-100%**, "Optimize" button
- **Data source**: Google Jobs via SerpAPI, cached by query hash (6–12h TTL), mutualised across users
- **Paywall**: Browse = free, view score = free (cached), click "Optimize" = 1 credit

### Page 2: Optimizer (Enriched)
- **Inputs**: CV (PDF, reuse last or upload new), job posting (manual paste OR auto-filled from discovery)
- **Process**: Parallel Claude generation: optimized CV + match score with explanation + 5 interview questions
- **Output**: Tabs (Original/Optimized CV), match score + strengths/gaps, collapsible interview Q&A section
- **Action**: "Save & Download" → saves to applications table, generates PDF, triggers first upsell if applicable
- **Paywall**: 1 credit per optimization; free tier limited to 1/month

### Page 3: Mes Applications (Tracker)
- **Table**: Columns = Job Title, Company, Date, Status, Match Score
- **Interaction**: Click row → modal with full posting text, optimized CV, interview questions, status selector, "Generate follow-up email" button
- **Follow-ups**: Free but capped at 3/month (user can copy template and send manually)
- **Paywall**: View tracker = free, generate follow-up = free (until 3/month limit)

### Page 4: Analyse CV (CV Health Check)
- **Input**: Upload CV
- **Process**: Claude analyzes structure, formatting, ATS compliance, keyword gaps, missing elements
- **Output**: Structured feedback (displayable as-is, exportable as PDF for 1 credit)
- **Frequency**: 1 free analysis per week per user; export = 1 credit
- **Paywall**: Analysis = free (1x/week), export PDF = 1 credit

### Credit System
**Free tier (monthly reset)**:
- 1 optimization/month
- Unlimited offer browsing + scoring
- 1 CV analysis/week (no free export)
- Max 3 follow-up email generations/month

**Paid packs** (no auto-renewal):
- 10 credits @ €6.99
- 30 credits @ €14.99 (recommended)
- 60 credits @ €24.99

**Upsell moments** (5 natural conversion triggers):
1. After first optimization: "You just created your tailored CV! Explore 50+ offers that match your profile."
2. Free tier exhausted: "Used your free trial this month. Ready to explore more?"
3. Browsing 5+ offers: "Interested in 3+ offers? Buy credits to optimize all of them."
4. 8+ applications in tracker: "You've applied to 8 offers. Optimize more to increase your chances."
5. First purchase bonus: "Buy 10 credits, get 12 free" (time-limited impulse offer).

---

## Non-Functional Requirements

### Performance & Caching
- SerpAPI results cached by `query_hash(title + location)`, TTL 6–12h, shared across all users
- Match score cached per user per job, TTL 24h
- Job search cache table (`job_search_cache`) mutualises API calls

### Cost Control (Critical)
- **SerpAPI**: ~€75/month budgeted for 5,000 searches; cache strategy is the main cost lever
- **Claude**: €0.02–0.06 per generation (Haiku/Sonnet); absorbed within credit margin
- **Monitor**: Track average SerpAPI calls per free-tier user before conversion/churn; adjust free tier or cache if unsustainable

### Reliability & Fallbacks
- SerpAPI failure → display cached results with "Last updated 2h ago" banner
- Claude rate-limit → queue with "Score calculation in progress..." placeholder
- Job provider abstraction → swap SerpAPI for Adzuna/Jooble without major refactor (SerpAPI faces DMCA litigation)

### Data & Compliance
- CVs are sensitive data (GDPR): clear privacy policy, explicit consent for AI analysis, user data deletion on request
- No auto-apply functionality (Phase 2 only, if at all): positions product as quality-first, not bulk-spam
- French-first UX: all user-facing copy in French; no hardcoded English

### Tech Stack Consistency
- TypeScript, Next.js 16, React 19, Drizzle ORM, PostgreSQL (Neon)
- UI: Shadcn v2 (Base UI, no `asChild`), Tailwind CSS v4
- Auth: BetterAuth session
- Payments: Stripe (one-time, not subscriptions)
- Jobs API: SerpAPI (with fallback plan)
- AI: Claude API (Haiku for speed, Sonnet for quality)

---

## Success Criteria

### Conversion & Engagement
- Conversion rate: gratuit → payant ≥10% (baseline market: 2–5% for freemium)
- Weekly return rate on "Offres pour moi": ≥30%
- Free tier utilization: ≥80% of users consume their monthly quota
- Avg credits per transaction: track and aim to increase via wider use cases

### Cost Efficiency
- SerpAPI spend per free-tier user ≤€0.50 before conversion/abandonment (via cache strategy)
- Claude cost per optimization ≤€0.05 (well within credit pricing margin)

### User Retention
- Day-7 retention: ≥40% (users return to check new offers)
- Application tracking: users with ≥3 saved applications show 2x higher repeat engagement

---

## Constraints & Assumptions

### Business Constraints
- **No auto-renewal abonnements**: Non-negotiable competitive moat vs. French incumbents. Pricing is trust-based.
- **Solo builder**: Tight timeline, one developer, emphasis on MVP completeness over perfection.
- **Monorepo architecture**: Reuse existing Drift patterns (NestJS, Drizzle, Shadcn), no new frameworks.

### Technical Constraints
- PostgreSQL only (no NoSQL); Drizzle ORM for type safety
- Edge runtime where appropriate for API routes; Node runtime for background jobs
- Job provider abstraction mandatory from day 1 (SerpAPI DMCA litigation ongoing)
- French localization built-in (i18n from start, not retrofit)

### Market Constraints
- SerpAPI cost risk if DMCA case resolved against them (plan fallback to Adzuna/Jooble)
- Commoditization risk from LinkedIn/Indeed native AI (differentiate on workflow, not just AI)
- French market focus (no international expansion in Phase 1)

### Assumed Behaviors
- Users will upload PDFs (not Word docs, text, etc.) — validation on upload
- Match score 0–100% is understood intuitively by users (no additional explainer needed)
- Follow-up emails sent manually by user (not auto-triggered) to avoid spam/list fatigue
- Users reset searches weekly, not daily (cache TTL 6–12h sufficient)

---

## Out of Scope

- **Auto-apply**: Structurally deferred to Phase 2+ (risk of spam perception, recruteur backlash)
- **Mobile native app**: Web-responsive only in Phase 1
- **Salary negotiation advice**: Possible Phase 2 add-on
- **Internationalization**: French-only in Phase 1
- **Email automation**: Manual follow-up only; auto-send in Phase 2 if needed
- **Advanced filtering**: Boolean search, multi-select tags (basic text + dropdowns only)
- **Candidate export/CSV**: Core tracking only; export in Phase 2
- **Notification subscriptions**: No email alerts for matching jobs in Phase 1

---

## Dependencies

### External Services
- **SerpAPI** (Google Jobs, €75/month plan) with documented fallback to Adzuna/Jooble
- **Anthropic Claude API** (Haiku, Sonnet; pay-as-you-go)
- **Stripe** (payment processing, no subscriptions)
- **Neon PostgreSQL** (serverless, existing)
- **Vercel** (hosting, existing)
- **PostHog** (analytics, existing)

### Internal Dependencies
- **BetterAuth** package (@repo/auth): session management
- **Drizzle ORM** (@repo/database): schema + migrations
- **Shadcn UI** (@repo/design-system): components
- **Next.js App Router**: framework
- **TypeScript**: strict mode

### Blocking Issues
- None known; all external services are available and documented.

---

## Estimated Effort

**Week 1** (Solo developer, full-time):
- [ ] Database schema + migrations (discovered_jobs, applications, cv_analyses, users updates, job_search_cache)
- [ ] Job provider abstraction (SerpAPI client + cache layer)
- [ ] 4 core pages UI + initial integration
- [ ] Free tier quota logic + paywall modal
- [ ] Claude integrations (match scoring, interview Q&A, CV feedback)
- [ ] Stripe payment flow
- [ ] Manual testing + polish

**Deliverable**: MVP launch candidate with all 4 pages, basic credit system, SerpAPI → cache flow, and 5 upsell moments.

---

## Marketing & Acquisition Strategy

### Positioning
**"The job search companion that doesn't trap you in a subscription."**

Directly attacks the main documented pain point in the French market (deceptive auto-renewals) and differentiates from anglophone tools.

### Key Channels (Priority Order)
1. **SEO / Comparison Content** (dominant channel for CV tools in French market): "CV Optimizer vs. Jobscan vs. MonCVParfait" guides, "Best free CV AI tool for France"
2. **Francophone Communities** (LinkedIn/Facebook job search groups, reconversion forums): Testimonials + "no subscription trap" messaging
3. **Partnerships** (schools, retraining orgs, employment nonprofits): Free access for members in exchange for referral
4. **Social Proof** (before/after CVs, match scores, interview outcomes): Indie hacker angle for tech/business audiences
5. **Product Hunt / Indie Maker Communities**: Credibility + early traction

### What NOT to Do
- No aggressive paid ads (costs are too high in saturated market, conversion unknown)
- No mass review-farming (reputation risk; competitor tactic observed)
- No "post to 100 jobs in one click" messaging (associates product with spam, damages trust)

---

## Success Metrics (Post-Launch)

- Conversion: % free → paid (target 10%+)
- Engagement: % weekly return to job discovery (target 30%+)
- Utilization: % of free users consuming full monthly quota (target 80%+)
- Retention: Day-7 active users (target 40%+)
- Cost: SerpAPI spend per free user (monitor; target ≤€0.50 pre-conversion)
- Revenue: Avg credits per transaction, total MRR
- Churn: % paid users who purchase again (track funnel)

---

## Open Questions & Decisions

1. **Pricing edge case**: Should first-time buyers get a bonus (10 credits → 12 free)? Or just show in messaging? **→ Recommend: Limit to first purchase, auto-apply on checkout, 30-day window.**
2. **CV re-use UX**: Should users automatically get last CV on optimizer load, or always choose? **→ Recommend: Auto-load with "Use different CV" option to override.**
3. **Match score caching**: Per-user or global? **→ Recommend: Per-user (24h) so scores feel "fresh" to each user; separate from search result cache (6–12h global).**
4. **Follow-up email limit**: 3/month hard cap, or suggest upgrade at 2? **→ Recommend: Hard cap at 3, soft upsell after 1st (to avoid fatigue).**
5. **Job expiry handling**: Show "expired" badge or hide entirely? **→ Recommend: Hide from feed; if already saved in tracker, show "This job is no longer listed" in modal.**

---

