# Polar → Stripe Migration Design

**Date:** 2026-08-01  
**Status:** Approved  
**Approach:** Wrapper-first gradual migration with Better Auth Stripe plugin

## Executive Summary

Migrate payments from Polar to Stripe to access advanced payment features (subscriptions, invoicing, Connect, etc.). Use wrapper-first approach: swap `@repo/payments` package while keeping public API identical. Better Auth Stripe plugin auto-creates Stripe customers on signup. No breaking changes to consuming apps.

---

## Context & Constraints

**Current state:**
- Using Polar SDK via `@repo/payments` wrapper
- No existing Polar customers (fresh start)
- Polar webhook handler in `apps/api`
- `polarCustomerId` stored in user.privateMetadata

**Requirements:**
- Access Stripe's advanced features (subscriptions, invoicing, Connect)
- Gradual, low-risk migration
- Zero downtime during rollout
- Leverage Better Auth Stripe plugin for customer sync

**Why Stripe:**
- Rich feature set vs Polar (subscriptions, invoicing, hosted invoices, etc.)
- Better Auth native integration via plugin
- Industry standard with mature SDK

---

## Architecture

### Current Flow
```
User signup → Store user in DB
Payment → Polar SDK → Checkout → Webhook → Handler
```

### Post-Migration Flow
```
User signup → Better Auth Stripe plugin creates Stripe customer → Store stripeCustomerId in user.privateMetadata
Payment → @repo/payments (Stripe SDK) → Checkout → Webhook → Handler
```

### Key Components

**1. Better Auth Stripe Plugin**
- Listens to `user.created` events
- Auto-creates Stripe customer with user email, name, metadata
- Stores `stripeCustomerId` in user.privateMetadata
- Keeps user ↔ Stripe customer in sync

**2. @repo/payments Wrapper**
- Exports Stripe client (same API shape as before)
- Provides helper functions: `createCheckoutSession()`, `getSubscription()`, etc.
- Used by apps for payment operations
- Consuming code doesn't change

**3. Webhook Handler**
- Listens to Stripe events (customer.subscription.created, invoice.paid, etc.)
- Routes to analytics/user management
- Same endpoint as Polar (but handles Stripe signature verification)

---

## Implementation Plan

### Phase 1: Setup Stripe (Days 1–2)

**Tasks:**
1. Add Stripe SDK to `@repo/payments/package.json`
2. Configure Better Auth Stripe plugin in auth setup
3. Add Stripe env vars to `.env.example` files
4. Create Stripe test account & API keys
5. Verify plugin creates Stripe customers on user signup (local testing)

**Deliverable:** Stripe configured locally, test customer created on signup.

---

### Phase 2: Swap @repo/payments (Days 3–4)

**File changes:**

#### `packages/payments/index.ts`
Replace Polar SDK with Stripe:
```typescript
import "server-only";
import Stripe from "stripe";
import { keys } from "./keys";

export const stripe = new Stripe(keys().STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export type { Stripe } from "stripe";
```

#### `packages/payments/keys.ts`
Replace Polar env vars with Stripe:
```typescript
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    server: {
      STRIPE_SECRET_KEY: z.string().startsWith("sk_"),
      STRIPE_WEBHOOK_SECRET: z.string().startsWith("whsec_"),
    },
    client: {
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().startsWith("pk_"),
    },
    runtimeEnv: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    },
  });
```

#### `apps/api/app/webhooks/payments/route.ts`
Update webhook handler:
- Replace Polar signature verification with Stripe verification
- Update event type handling (customer.subscription.created → same)
- Update user metadata queries: `polarCustomerId` → `stripeCustomerId`
- Keep same response format for analytics

#### `.env.example` files
Replace Polar vars with Stripe vars in:
- `apps/app/.env.example`
- `apps/web/.env.example`
- `apps/api/.env.example`

**Deliverable:** `@repo/payments` exports Stripe client, webhook handler routes Stripe events.

---

### Phase 3: App Testing (Days 5–7)

**Per-app verification:**

1. **App: web (marketing)**
   - Test checkout flow
   - Verify Stripe customer ID in DB
   - Test webhook delivery
   - Monitor logs for errors

2. **App: app (product)**
   - Test checkout + subscription creation
   - Test invoice generation
   - Verify subscription status updates
   - Test cancellation flow

3. **App: api (webhooks)**
   - Verify webhook signature verification works
   - Check event routing to analytics
   - Test error handling for failed events

**Testing checklist per app:**
- [ ] Create new subscription in staging
- [ ] Verify Stripe customer created + linked to user
- [ ] Verify webhook received and processed
- [ ] Verify analytics received event
- [ ] Test refund flow
- [ ] Test invoice download
- [ ] Monitor webhook latency/errors

**Deliverable:** All apps tested in staging, Stripe stable before prod.

---

### Phase 4: Cleanup (Day 8)

**Tasks:**
1. Remove `@polar-sh/sdk` from `@repo/payments/package.json`
2. Remove Polar env vars from all `.env.example` files
3. Update CI/CD secrets (remove Polar keys)
4. Update documentation (README, setup guides)
5. Archive Polar credentials

**Deliverable:** Polar fully removed, Stripe is sole payment provider.

---

## Data & Schema

**Better Auth Stripe Plugin Storage:**
- User.privateMetadata.stripeCustomerId (auto-set by plugin)
- No manual migration needed (plugin handles on user creation)

**Webhook Events Tracked:**
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.created`
- `invoice.paid`
- `invoice.payment_failed`
- `charge.refunded`

---

## Rollback Strategy

If critical issues:

1. **Phase 1:** No app impact (setup only)
2. **Phase 2:** Revert `@repo/payments`, webhook handler; apps fall back to Polar behavior
3. **Phase 3 (per-app):** Revert app deployment; users route to old payment flow

**Safe because:** Apps only depend on `@repo/payments` API, which stayed stable.

---

## Testing Strategy

### Unit Tests
- Stripe client initialization
- Checkout session creation
- Subscription management

### Integration Tests
- Full checkout flow (create session → customer → subscription)
- Webhook event parsing & routing
- Analytics event ingestion

### E2E Tests (Playwright)
- Complete purchase flow
- Subscription management (update, cancel)
- Invoice download
- Error scenarios (failed payment, etc.)

### Staging Validation
- Deploy to staging, run full suite
- Manual user testing (checkout to invoice)
- Monitor webhook deliverability (Stripe dashboard)
- Check analytics dashboard for new events
- Load test with simulated transactions

---

## Timeline & Effort

| Phase | Days | Effort | Risk |
|-------|------|--------|------|
| Setup Stripe | 1–2 | 1 day | Low (setup only) |
| Swap @repo/payments | 3–4 | 1.5 days | Low (wrapper abstraction) |
| App testing | 5–7 | 2 days | Medium (integration testing) |
| Cleanup | 8 | 0.5 day | Low (removal only) |
| **Total** | **~8 days** | **~5 days effort** | **Low–Medium** |

**Notes:**
- Can run phases in parallel (setup + swap simultaneously)
- Testing can overlap with implementation
- Better Auth plugin eliminates manual customer sync code

---

## Success Criteria

- [ ] Stripe SDK integrated into @repo/payments
- [ ] Better Auth Stripe plugin creates customers on signup
- [ ] All 3 apps tested with Stripe checkout
- [ ] Webhooks emit and analytics receives events
- [ ] No transaction data loss
- [ ] Zero downtime during rollout
- [ ] Performance equivalent or better than Polar
- [ ] Polar fully removed from codebase

---

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| Stripe API differences | Low | Medium | Wrapper abstraction shields apps |
| Webhook event mismatch | Low | Medium | Keep same event types; test analytics |
| Better Auth plugin bugs | Low | High | Test plugin thoroughly before prod |
| Performance regression | Low | Medium | Load test before prod; monitor metrics |
| Customer data sync issues | Low | High | Verify plugin syncs on every user creation |

---

## Open Questions & Future Work

1. **Stripe Connect:** Do we want marketplace/connect features? (Not in scope for now)
2. **Tax calculation:** Stripe Tax vs. manual? (Defer to implementation phase)
3. **Billing portal:** Self-serve subscription management? (Phase 2 enhancement)
4. **Usage metering:** Metered billing for consumption? (Future work)

---

## Appendix: Stripe Setup Checklist

- [ ] Create Stripe account (test + production)
- [ ] Generate API keys (secret + publishable)
- [ ] Setup webhook endpoint in Stripe dashboard
- [ ] Configure Better Auth Stripe plugin with API keys
- [ ] Create test products & prices in Stripe
- [ ] Test checkout session creation locally
- [ ] Verify customer auto-creation on signup
- [ ] Deploy to staging and run full test suite
