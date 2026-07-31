# Startup Operator OS - Complete Guide

A comprehensive system for solo founders to go from vague idea → validated product → profitable SaaS.

**Philosophy:** Validate before coding. Design based on data, not assumptions.

---

## The 5 Skills (Sequential Workflow)

### 1. `/idea-clarifier` ✅
**What:** Turn vague idea into product specification  
**Duration:** 1 hour  
**Output:** `docs/product/` (14 markdown files with complete spec)  

**How to use:**
```
/idea-clarifier

→ Answer questions about your idea
→ Get complete product specification
→ Review with co-founder/mentor
```

---

### 2. `/startup-validator` 🔜 NEW
**What:** Validate idea BEFORE coding (the critical part)  
**Duration:** 1 week  
**Prerequisite:** Run `/idea-clarifier` first  
**Output:** `docs/validation/` (test results + decision)

**Phases:**
```
Phase 1 (Days 2-4): Concept Validation
- Interview 5-10 target customers
- Show mockup, ask "would you pay?"
- Success metric: 70%+ say YES

Phase 2 (Days 5-7): MVP Validation
- Wizard of Oz (manual MVP)
- Can they complete key workflow?
- Get 2-3 real pre-sales

Phase 3 (Days 8-14, optional): Pre-sales
- Sell to 10 customers before building
- Get deposits
- Remove all doubt
```

**Decision after validation:**
```
✅ GO: Proceed to strategy + architecture
❌ NO-GO: Kill idea, move to next one
⚠️ PIVOT: Different customer or feature needed
```

---

### 3. `/solo-founder-strategy` 🔜 NEW
**What:** Design business model based on validation  
**Duration:** 2-3 days  
**Prerequisite:** Validation results (from `/startup-validator`)  
**Output:** `docs/strategy/` (pricing, ICP, GTM, metrics)

**Generates:**
- Pricing model (derived from willingness-to-pay)
- ICP (Ideal Customer Profile) based on real conversations
- Go-to-market channels (realistic for solo)
- Acquisition plan (direct outreach, communities, content)
- Metrics to track (MRR, CAC, churn, etc)
- Risk analysis

**Example output:**
```
Pricing: $100-300/month (from customer interviews)
ICP: Event organizers with 50-500 capacity
GTM: Direct outreach (50 targets) → Communities → Twitter
Year 1 goal: $1000-5000 MRR
```

---

### 4. `/saas-architect` 🔜 NEW
**What:** Design tech architecture proportional to scale  
**Duration:** 2-3 days  
**Prerequisite:** Strategy (from `/solo-founder-strategy`)  
**Output:** `docs/architecture/` (tech stack, DB schema, deployment)

**Intelligent recommendations:**
- Tech stack matched to your budget + scale
- Database schema for your features
- API design
- Deployment pipeline (zero ops)
- Security checklist

**Example stack (for $300-500/month budget):**
```
Frontend: Next.js on Vercel
Backend: Next.js API routes (monolith)
Database: PostgreSQL on Neon ($50-100/month)
Payments: Stripe
Storage: Vercel Blob
Deploy: Vercel (auto-scaling, free tier)
Monitoring: PostHog

Why: Scales from 100-10,000 users in year 1
No ops needed, just deploy
```

---

### 5. `/project-manager` ✅
**What:** Create development roadmap (reads all above)  
**Duration:** 1 day  
**Prerequisite:** Architecture + Strategy  
**Output:** 8-week development plan with phases

**Generates:**
- Phase 1: Foundation (auth, DB, payments)
- Phase 2: Core MVP features
- Phase 3: Polish + testing
- Phase 4: Launch preparation
- Realistic timeline + effort per phase

---

## Complete Timeline

```
DAY 1 (1 hour)
├─ /idea-clarifier
├─ You answer questions
└─ Get docs/product/ (spec)

🚨 CRITICAL: DON'T CODE YET

DAYS 2-8 (1 week)
├─ /startup-validator
├─ Phase 1: Concept test (Days 2-4)
│  └─ Interview customers, test mockup
│  └─ Decision: 70%+ interested?
│
├─ Phase 2: MVP test (Days 5-7)
│  └─ Manual MVP (no real code yet)
│  └─ Decision: Can they finish? Will they pay?
│
└─ DECISION POINT:
   ├─ ✅ GO: Amazing, proceed
   ├─ ❌ NO-GO: Kill idea (save 8 weeks!)
   └─ ⚠️ PIVOT: Adjust and retest

WEEK 2 (1-2 days)
├─ /solo-founder-strategy
├─ Claude analyzes validation results
├─ You review business model
└─ Get docs/strategy/ (pricing, GTM, metrics)

WEEK 3 (1-2 days)
├─ /saas-architect
├─ Claude designs tech stack
├─ You review & confirm
└─ Get docs/architecture/ (implementation plan)

WEEK 4 (1 day)
├─ /project-manager
├─ Claude creates roadmap
└─ You're ready to code with confidence

WEEKS 5-12 (8 weeks)
├─ Implement phases 1-4
├─ Track metrics from docs/strategy/
└─ Launch with customers waiting

WEEK 13+
├─ Measure MRR, churn, CAC
├─ Customer interviews
└─ Iterate or pivot based on data
```

---

## Why This Order?

### ❌ Traditional (fail for solo):
```
Week 1: Code MVP
Week 2-4: Code features
Week 5: Launch
Week 6: "Hmm, nobody wants this"
```
**Result:** 5 weeks wasted

### ✅ Smart (for solo):
```
Day 1: Clarify (1h)
Week 1: Validate (1 week, $0 spent)
Week 2-3: Plan (based on real data)
Week 4-11: Code (knowing people want this)
```
**Result:** Confidence + market validation before launch

---

## What You're Validating

### Phase 1: Do They Care?

```
Test: Interviews + mockup

Success = 70%+ of target customers say:
"I have this problem"
"I'd use something like this"
"I'd pay $X/month for it"

Failure = Most don't care or won't pay

If failure → Kill idea, start next one (save 8 weeks!)
```

### Phase 2: Can They Actually Use It?

```
Test: Wizard of Oz MVP (manual process)

For marketplace:
- Can vendor create listing?
- Can buyer complete purchase?
- Does vendor get paid?

For SaaS:
- Can user see the core value?
- Does it solve their problem better than alternatives?
- Would they actually use it weekly?

Success = 2-3 customers complete end-to-end
         + Confirm it's valuable

Failure = Can't get customers to complete flow
         OR they use it but don't see value
```

### Phase 3: Will They Pay? (Optional)

```
Test: Pre-sales to 10 customers

Success = 10 customers commit payment
         (even if launch is 8 weeks away)

Failure = Nobody commits payment

Now you KNOW people will buy
You can code with confidence
```

---

## Real Examples

### Example 1: Ticket Marketplace

```
Day 1: /idea-clarifier
→ Get spec for event ticketing platform

Days 2-3: Interview 5 event organizers
- "How do you currently sell tickets?"
- "What's painful?"
- "Would you pay $100-200/month?"

Days 4-5: Wizard of Oz test
- Manually create event in system
- Use Stripe test mode
- Manually process payment
- Give them ticket/QR code

Day 6: Results
- All 5 completed end-to-end
- 3 said "I'd pay $150/month"
- 2 said "I'd use this"

Decision: GO
→ /solo-founder-strategy: Price at $150/month, target small orgs
→ /saas-architect: Monolith on Vercel, simple MVP
→ /project-manager: 8-week roadmap

Weeks 5-12: Build knowing you have customers
Week 13: Launch to the 3 people who committed
```

### Example 2: AI Content Generator

```
Day 1: /idea-clarifier
→ Get spec for AI social media content

Days 2-3: Landing page + email signup
- "AI generates your social content"
- 100+ people signup for waitlist

Days 4-5: Manual MVP for 5 beta users
- You manually generate content using AI
- They provide feedback
- 4/5 say "I'd pay for this"

Decision: GO
→ /solo-founder-strategy: Price $30-100/month, target content creators
→ /saas-architect: Next.js + OpenAI API, simple
→ /project-manager: 6-week roadmap (simpler)

Weeks 5-10: Build
Week 11: Launch to 100 waitlist people
```

---

## Key Principles

### 1. Validate Before Code
```
❌ "I'll code first, validate later"
   → 8 weeks coding, zero users at launch

✅ "Validate for 1 week, then code with confidence"
   → 1 week testing, 8 weeks building, customers waiting
```

### 2. Trust Real Data
```
❌ "My friends said they'd use this"
   → Friends are nice, won't be your customers

✅ "5 actual target customers pre-paid"
   → They have skin in the game, will give honest feedback
```

### 3. Kill Bad Ideas Fast
```
❌ "I'll code it anyway and see"
   → 8 weeks later: Useless product

✅ "Nobody interested? Kill it in 1 week, try next idea"
   → Save 7 weeks per failed idea
```

### 4. Business First, Tech Second
```
❌ "I'll build microservices, Kubernetes, AI"
   → Months of setup, zero revenue

✅ "Simple monolith, customer gets value, scale later"
   → Revenue in 12 weeks, tech scales as needed
```

---

## When to Skip Validation

**Almost never.** But if:
- You already have customers
- You already have pre-sales
- You already know the market exists

Then you can shorten validation to 2-3 days (confirm scope only).

---

## Success Metrics

### After 1 Week of Validation:

✅ **GO Signal:**
- 70%+ target customers interested
- 2-3 completed end-to-end MVP flow
- They understand the value
- Willing to pay your price

⚠️ **PIVOT Signal:**
- Interested, but different use case
- Would pay less than expected
- Need different customer segment

❌ **NO-GO Signal:**
- <50% interested
- Couldn't complete key workflow
- Wouldn't pay
- Competitors already solve it better

---

## Using These Skills

```bash
# Day 1: Clarify
/idea-clarifier

# Days 2-8: Validate
/startup-validator

# Week 2: Business Model
/solo-founder-strategy

# Week 3: Tech Stack
/saas-architect

# Week 4: Development Plan
/project-manager

# Weeks 5-12: Code
# (Use project-manager plan as roadmap)
```

---

## Bottom Line

**This system turns a vague idea into a profitable product in ~12 weeks:**
- 1 week: Validate (discover if people want this)
- 1 week: Plan (know how to make money + what to build)
- 8 weeks: Build (with confidence + customer validation)

**The difference:** Most founders code first (guessing), then find nobody wants it (8 weeks wasted).

You validate first (certainty), then code knowing people will pay.

---

## Next Steps

1. **Start with your idea**: `/idea-clarifier`
2. **Test it**: `/startup-validator` (the hard part, the important part)
3. **Plan to profit**: `/solo-founder-strategy`
4. **Design the tech**: `/saas-architect`
5. **Build the roadmap**: `/project-manager`
6. **Code for 8 weeks** with confidence
7. **Launch to waiting customers**

That's the Startup Operator OS. Good luck! 🚀
