# Polar → Stripe Migration (2026-08-01)

## What Changed

- **Payment provider:** Polar → Stripe
- **Features:** Now support subscriptions, invoicing, Connect, and more
- **Customer sync:** Better Auth Stripe plugin auto-creates Stripe customers on user signup
- **Database:** `user.privateMetadata.stripeCustomerId` instead of `polarCustomerId`
- **Public API:** `@repo/payments` exports unchanged; consuming apps unaffected
- **Webhooks:** Stripe webhooks instead of Polar (same endpoint, different signature verification)

## Environment Variables

### Removed
- `POLAR_ACCESS_TOKEN`
- `POLAR_WEBHOOK_SECRET`
- `POLAR_SERVER`

### Added
- `STRIPE_SECRET_KEY` (starts with `sk_`)
- `STRIPE_WEBHOOK_SECRET` (starts with `whsec_`)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (starts with `pk_`)

Update your `.env` files and secrets management with new Stripe keys.

## Customer Sync

Better Auth Stripe plugin automatically:
1. Listens to `user.created` events from Better Auth
2. Creates Stripe customer with email, name, and metadata
3. Stores `stripeCustomerId` in `user.privateMetadata`

**No manual data migration needed.** New users will have Stripe customers auto-created.

## Webhook Events

Stripe webhook handler now processes:
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`

Events are sent to analytics for tracking.

## Testing Checklist

Before deploying to production:

- [ ] Stripe test account created with API keys
- [ ] Better Auth Stripe plugin configured
- [ ] Create new user in staging, verify Stripe customer created
- [ ] Initiate checkout, verify Stripe session created
- [ ] Complete test payment, verify webhook received
- [ ] Verify analytics received payment events
- [ ] Test subscription creation/update/cancellation
- [ ] Test refund flow
- [ ] Load test with simulated traffic
- [ ] Monitor logs for 24 hours before prod

## Rollback

If critical issues arise:

1. Revert branch commits
2. Revert to Polar (still configured in parallel during rollout)
3. Zero user impact due to wrapper abstraction

Rollback process:
```bash
git revert <commit-hash>
# Or reset to before migration
git reset --hard <pre-migration-commit>
```

## Known Limitations

- `getUserFromStripeCustomerId()` in webhook handler is a placeholder
  - Implement proper database query to find user by Stripe customer ID
  - Currently logs warning if user not found

## Production Rollout

1. **Gradual traffic shift:** 10% → 50% → 100% with monitoring
2. **24/7 oncall monitoring:**
   - Auth error rates
   - Webhook delivery success
   - Payment processing latency
3. **Success metrics:**
   - Zero auth failures
   - <100ms checkout latency p99
   - 100% webhook delivery
   - Positive user reports

## Questions?

**Design spec:** `docs/superpowers/specs/2026-08-01-polar-to-stripe-migration-design.md`

**Implementation plan:** `docs/superpowers/plans/2026-08-01-polar-to-stripe-migration.md`

**Auth migration (dependency):** `MIGRATION_NOTES.md`
