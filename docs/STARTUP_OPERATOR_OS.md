# Startup Operator OS

A comprehensive skill system for solo founders & developer-entrepreneurs to go from idea → product → revenue.

**Goal:** Transform vague ideas into launched, profitable SaaS products using Claude Code skills as a virtual co-founder.

---

## Core Philosophy

### For Solo Developers

Traditional approach (fails for solo):
```
Code → Launch → Hope people buy
```

Smart approach (for solo):
```
Validate → Plan → Code → Launch → Measure → Iterate
```

### Key Principle: Read Between Skills

Each skill reads outputs from previous skills, creating a **coherent chain** instead of isolated templates.

```
idea-clarifier
  ↓ (generates docs/product/)
  ↓
startup-validator
  ↓ (generates docs/validation/)
  ↓
solo-founder-strategy
  ↓ (generates docs/strategy/)
  ↓
saas-architect
  ↓ (generates docs/architecture/)
  ↓
project-manager
  ↓ (reads all above, creates dev plan)
  ↓
Code → Launch
```

---

## The 5 Core Skills (Vision)

### 1. idea-clarifier ✅ DONE
**What:** Turn vague idea into product spec
**Input:** Your idea
**Output:** `docs/product/` (14 files)
**Trigger:** `/idea-clarifier`

Generates:
- Product brief & goals
- User roles & journeys
- MVP scope (must/should/could)
- Functional requirements
- Business rules
- Data model
- Technical requirements

---

### 2. startup-validator 🔜 TODO
**What:** Validate idea BEFORE coding
**Input:** `docs/product/` (reads spec)
**Output:** `docs/validation/`
**Trigger:** `/startup-validator`

**Smart validation, not generic:**

Instead of:
```
❌ "Interview 20 people"
❌ "Create landing page"
❌ "Run ads"
```

Does:
```
✅ Analyzes product type from spec
✅ Proposes SPECIFIC tests for THIS product
✅ Creates realistic validation plan for solo dev
```

**Example: Ticket Marketplace**

Reads: `docs/product/06-functional-requirements.md`
- Feature: "Buy tickets online"
- Feature: "Vendor dashboard"

Recommends validation:
```
Phase 1 (Week 1):
- Test 1: Can vendor create event? (Form test)
- Test 2: Can buyer complete purchase? (Stripe test)
- Success metric: 3 complete end-to-end transactions

Phase 2 (Week 2):
- Interview 5 organizers about pain points
- Landing page waitlist
- Measure: 50+ emails

Phase 3 (Week 3):
- Pre-sales to 10 customers
- Measure: $500 committed revenue
```

Output files:
- `validation/hypothesis.md` (what we're testing)
- `validation/tests.md` (specific experiments)
- `validation/results.md` (after running tests)
- `validation/learnings.md` (what we learned)
- `validation/decision.md` ("Should we build?" yes/no/pivot)

---

### 3. solo-founder-strategy 🔜 TODO
**What:** Design business model + GTM
**Input:** `docs/product/` + `docs/validation/`
**Output:** `docs/strategy/`
**Trigger:** `/solo-founder-strategy`

**Intelligent recommendations based on reality:**

Reads validation results:
- "Ok, we validated with 5 organizers"
- "They said pricing $10-20 per ticket is fair"
- "We have 3 pre-sales commitments"

Generates:
```
docs/strategy/
├── business-model.md
│   └── Recommended: Commission + fixed fee
│   └── Why: Aligns with validation feedback
│
├── pricing.md
│   └── Tier A: $100/month + 10% commission
│   └── Tier B: $300/month + 5% commission
│   └── Based on: Validated willingness-to-pay
│
├── ica-profile.md
│   └── Ideal customer: Event organizers 50-500 capacity
│   └── Why: Easiest to acquire (from validation)
│   └── Willingness to pay: $150-300/month
│
├── go-to-market.md
│   └── Channel 1: LinkedIn/Twitter to event orgs
│   └── Channel 2: Event management communities
│   └── Channel 3: Direct outreach (50 target organizers)
│   └── Why: Doable solo, based on ICP
│
├── acquisition-plan.md
│   └── Month 1: Direct outreach to 50 targets
│   └── Month 2: Twitter/blog posts
│   └── Month 3: ProductHunt
│   └── Goal: 10 customers by month 3
│
├── metrics.md
│   └── Track: MRR, churn, CAC, LTV
│   └── Targets: $1000 MRR by month 6
│
└── risks.md
    └── Risk 1: Competitors (Eventbrite)
    └── Mitigation: Focus on niche (small orgs)
    └── Risk 2: Payment processing complexity
    └── Mitigation: Use Stripe Connect
```

**Key Intelligence:**
- Pricing derived from validation, not guesses
- ICP based on who you actually talked to
- GTM channels realistic for solo dev (not "hire sales team")
- Metrics aligned with strategy

---

### 4. saas-architect 🔜 TODO
**What:** Design tech architecture
**Input:** `docs/product/` + `docs/strategy/`
**Output:** `docs/architecture/`
**Trigger:** `/saas-architect`

**Recommends PROPORTIONAL to scale:**

Reads strategy:
- "Target: 100-500 customers year 1"
- "Budget: $300-500/month infra"
- "Type: Marketplace with payments"

Recommends:
```
docs/architecture/
├── stack-recommendation.md
│   └── Frontend: Next.js (full-stack)
│   └── Backend: Node.js (integrated)
│   └── Database: PostgreSQL + Drizzle
│   └── Payments: Stripe Connect
│   └── Storage: Vercel Blob
│   └── Deploy: Vercel + Neon
│   └── Why: Solo-friendly, serverless, $0-300/month
│
├── database-design.md
│   └── (Generated from docs/product/08-data-model.md)
│   └── Tables: users, events, tickets, payments
│   └── Relationships & constraints
│
├── api-design.md
│   └── /api/events (CRUD)
│   └── /api/tickets (purchase flow)
│   └── /api/payments (Stripe webhook)
│   └── /api/analytics (for dashboard)
│
├── deployment-plan.md
│   └── Deploy: git push → Vercel → auto-deploy
│   └── Database: neon.tech (serverless)
│   └── Payments: Stripe (webhooks via Svix)
│   └── Monitoring: PostHog (free tier)
│
├── security.md
│   └── Auth: Better Auth (self-hosted)
│   └── Payments: Stripe Connect (PCI compliant)
│   └── Data: encrypted in transit
│
└── scaling-plan.md
    └── Current: 100 users (fits free tier)
    └── 1000 users: upgrade DB only
    └── 10k users: add caching layer
    └── (Don't build for scale you don't have)
```

---

### 5. project-manager ✅ ADAPTED
**What:** Create development plan (reads all above)
**Input:** All docs/ folders
**Output:** `docs/execution/`
**Trigger:** `/project-manager`

**Now reads the full context:**

```
Reads docs/strategy/:
- "Goal: $1000 MRR in 6 months"
- "Need 10 customers by month 3"

Reads docs/architecture/:
- "Tech stack: Next.js + Stripe Connect"
- "Infra cost: $300/month"

Creates execution plan:
├── Phase 1 (Week 1-2): Foundation
│   ├── Auth setup (Better Auth)
│   ├── Database (PostgreSQL + Drizzle)
│   ├── Stripe Connect integration
│   └── Deploy pipeline (Vercel)
│
├── Phase 2 (Week 3-4): MVP Core
│   ├── Event creation (vendor)
│   ├── Ticket purchase (buyer)
│   ├── Email confirmation
│   └── Basic dashboard
│
├── Phase 3 (Week 5-6): Polish
│   ├── Error handling
│   ├── Performance (images, etc)
│   ├── Mobile responsive
│   └── User testing
│
├── Phase 4 (Week 7-8): Launch Prep
│   ├── Landing page
│   ├── Twitter/LinkedIn content
│   ├── ProductHunt listing
│   └── Email outreach (50 targets)
│
└── Phase 5 (Ongoing): Post-Launch
    ├── Monitor metrics (MRR, churn)
    ├── Customer interviews (weekly)
    └── Iterate on feedback
```

---

## The Intelligent Chain

### Data Flow

```
idea-clarifier OUTPUT:
{
  "product_name": "TicketFlow",
  "type": "marketplace",
  "complexity": "medium",
  "payment_required": true,
  "multivendor": true
}
    ↓
startup-validator READS & VALIDATES:
{
  "hypothesis": "Event organizers want easier ticket sales",
  "test_results": {
    "organizers_interviewed": 5,
    "willingness_to_pay": "$10-20 per ticket",
    "pre_sales": 3
  },
  "validated": true
}
    ↓
solo-founder-strategy READS & RECOMMENDS:
{
  "pricing_model": "commission + fixed",
  "ica_tier": "small organizers (50-500 capacity)",
  "gtm_primary": "direct outreach + twitter",
  "year1_goal": "$12,000 MRR"
}
    ↓
saas-architect READS & DESIGNS:
{
  "stack": "Next.js + Stripe Connect",
  "infrastructure_cost": "$300/month",
  "deployment": "Vercel + Neon",
  "estimated_build_time": "8 weeks solo"
}
    ↓
project-manager READS ALL & CREATES PLAN:
{
  "total_effort": "8 weeks",
  "phases": 5,
  "critical_path": "Payment integration",
  "launch_target": "week 8",
  "post_launch": "measure MRR + iterate"
}
```

### Each Skill Validates Previous

```
startup-validator:
  "Your product has complexity X"
  "Pre-sales validation shows Y demand"
  → Passes to strategy

solo-founder-strategy:
  "Pricing model: $100/month + 10% commission"
  "ICP: Event organizers under 500 capacity"
  → Passes to architect

saas-architect:
  "Estimated infrastructure cost: $300/month"
  "Can handle 1000 concurrent users"
  → Passes to project-manager

project-manager:
  "8 weeks to MVP"
  "Phase 1: Foundation (2 weeks)"
  "Phase 2: Core feature (2 weeks)"
  → Ready to code
```

---

## Usage Flow (Ideal)

```
Day 1: /idea-clarifier
├─ Answer questions for 1 hour
├─ Get: docs/product/ (14 files)
└─ Review spec with co-founder/mentor

Day 2: /startup-validator
├─ Review proposed tests
├─ Run Week 1 tests (3 days)
├─ Get: docs/validation/ (results)
└─ Decision: Build? Pivot? Abandon?

Day 3: /solo-founder-strategy
├─ Review business model
├─ Adjust pricing based on learnings
├─ Get: docs/strategy/ (complete)
└─ Know your target & revenue model

Day 4: /saas-architect
├─ Review tech stack
├─ Confirm deployment plan
├─ Get: docs/architecture/ (complete)
└─ Know what to build

Day 5: /project-manager
├─ Review development roadmap
├─ Start coding with clarity
├─ Get: execution plan (phases & timeline)
└─ Launch with strategy

Weeks 2-8: Implement
├─ Follow the plan
├─ Measure against strategy
├─ Iterate based on docs/strategy/ goals
└─ Launch with confidence

Week 9+: Measure & Iterate
├─ Track: MRR, CAC, churn (from docs/strategy/metrics.md)
├─ Customer interviews (per docs/strategy/go-to-market.md)
├─ Pivot or double-down based on data
└─ Update docs/, replan
```

---

## Key Intelligence Principles

### 1. Context-Aware Recommendations

Not:
```
❌ "Use microservices"
❌ "Scale to 1M users"
❌ "Hire a team"
```

But:
```
✅ "Your scale (100-500 users year 1) + budget ($300/month)"
✅ "→ Monolith on Vercel is optimal"
```

### 2. Data-Driven Decisions

Not:
```
❌ "Interview 20 people" (generic)
```

But:
```
✅ "Your product type is marketplace"
✅ "→ Validate with 5 vendors + 10 buyers"
✅ "→ Success metric: 3 end-to-end transactions"
```

### 3. Solo-Specific Recommendations

Not:
```
❌ "Hire VP Sales"
❌ "Build admin dashboard first"
❌ "Optimize for scale"
```

But:
```
✅ "You're solo → focus on revenue first"
✅ "→ Direct outreach to 50 ICP customers"
✅ "→ Build only features that generate revenue"
```

### 4. Alignment Across Chain

Not:
```
❌ Strategy says "enterprise" but architecture for startup
❌ Validation says "B2B" but marketing for B2C
```

But:
```
✅ Each skill reads previous outputs
✅ Pricing based on validated willingness-to-pay
✅ GTM channels match validated buyer
✅ Tech stack matches strategy (not overbuilt)
```

---

## Summary

**Startup Operator OS** is a chain of intelligent skills that:
1. ✅ Validates ideas BEFORE coding
2. ✅ Designs business models based on reality
3. ✅ Recommends tech proportional to scale
4. ✅ Creates execution plans with confidence
5. ✅ Keeps business & tech aligned

**For solo founders:** This is your virtual co-founder, guiding you through the entire journey from vague idea to profitable SaaS.

**Next:** Create the 3 missing skills with this philosophy.
