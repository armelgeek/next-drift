# Clerk → Better Auth Migration Design

**Date:** 2026-08-01  
**Status:** Approved  
**Approach:** Wrapper-first gradual migration

## Executive Summary

Migrate from Clerk to Better Auth for self-hosted authentication. Better Auth is lightweight, self-hosted, and integrates well with the existing Postgres + Drizzle stack. The migration uses a gradual, low-risk approach: swap the `@repo/auth` package first, then migrate apps one by one. Zero breaking changes to consuming code during the process.

---

## Context & Constraints

**Current state:**
- Using `@clerk/nextjs` extensively across `web`, `app`, and `api`
- Dedicated `@repo/auth` wrapper package abstracts Clerk
- Postgres + Drizzle ORM for data layer
- Monorepo structure (Turbo)
- Multi-tenant organizations with webhooks syncing to analytics
- User/organization events flow through Svix webhooks

**Requirements:**
- Self-hosted authentication (no managed Clerk service)
- Maintain organization/multi-tenant support
- Preserve webhook-to-analytics flow
- Gradual, low-risk rollout
- No breaking changes to consuming apps during migration

**Why Better Auth:**
- Modern, lightweight alternative to Auth.js
- Self-hosted ✓
- Postgres support ✓
- Simpler API than NextAuth.js
- Good foundation for gradual migration

---

## Architecture

### Current Structure
```
Apps consume `@repo/auth` abstraction
  ├─ web/
  ├─ app/
  └─ api/

@repo/auth (wrapper)
  └─ exports Clerk APIs

Clerk → Svix webhooks → Analytics
```

### Post-Migration Structure
```
Apps consume `@repo/auth` abstraction (unchanged)
  ├─ web/
  ├─ app/
  └─ api/

@repo/auth (wrapper, same public API)
  └─ exports Better Auth APIs

Better Auth → Svix webhooks → Analytics
```

### Key Insight
The `@repo/auth` wrapper stays at the same abstraction level. Consuming code doesn't change until the final cleanup phase. This allows testing each app independently.

---

## Implementation Plan

### Phase 1: Setup Better Auth (Week 1)

**Tasks:**
1. Add `better-auth` dependency to `@repo/auth`
2. Create Drizzle migration for Better Auth schema:
   - `users`
   - `sessions`
   - `accounts`
   - `organizations`
   - `organizationMembers`
3. Configure Better Auth:
   - Database adapter (Drizzle)
   - OAuth providers (GitHub, Google, email, etc. — mirror Clerk config)
   - Session callbacks
   - Hooks for webhook emission
4. Verify schema in staging database
5. Write test suite for Better Auth initialization

**Deliverable:** Better Auth configured locally, tables exist, auth flow works in dev.

---

### Phase 2: Swap `@repo/auth` Package (Week 2)

**File-by-file changes:**

#### `@repo/auth/provider.tsx`
- Replace `ClerkProvider` → `BetterAuthProvider`
- Remove Clerk theme customization
- Re-implement with Better Auth theming (if needed)

#### `@repo/auth/client.ts`
- Replace `export * from "@clerk/nextjs"` → Better Auth client exports
- Maintain same API for consumers:
  - `useAuth()` → `useBetterAuthSession()` (aliased as `useAuth`)
  - `OrganizationSwitcher` → custom component using Better Auth org APIs
  - `UserButton` → custom component using Better Auth session APIs

#### `@repo/auth/server.ts`
- Replace `export * from "@clerk/nextjs/server"` → Better Auth server exports
- Maintain API:
  - `auth()` → `getSession()` (aliased as `auth`)
  - `currentUser()` → custom function wrapping `getSession().user`
  - `clerkClient()` → `betterAuthClient()` (for admin operations)

#### `@repo/auth/keys.ts`
- Update env var schema:
  - `CLERK_SECRET_KEY` → `BETTER_AUTH_SECRET`
  - `CLERK_WEBHOOK_SECRET` → `BETTER_AUTH_WEBHOOK_SECRET`
  - Keep public keys and sign-in/sign-up URLs

#### `@repo/auth/components/`
- Rebuild `SignIn.tsx` and `SignUp.tsx` using shadcn/ui + Better Auth client
- No longer use Clerk's pre-built components
- Maintain same visual/UX as before (shadcn/ui already available)

#### `@repo/auth/proxy.ts`
- Replace `clerkMiddleware` → `betterAuthMiddleware`
- Ensure protected routes still work

**Deliverable:** `@repo/auth` exports the same public API, but backed by Better Auth.

---

### Phase 3: Migrate Apps (Weeks 3–4)

**Per-app rollout (one at a time):**

1. **App: `web`** (lowest risk)
   - Deploy updated `@repo/auth`
   - Test sign-in, sign-up, org switching
   - Verify analytics webhooks fire
   - Monitor logs
   - Rollback plan: revert `@repo/auth` to Clerk version

2. **App: `app`** (medium risk, most active)
   - Same testing as `web`
   - Test org management, member invites
   - Verify user data integrity
   - Gradual rollout (10% → 50% → 100%)

3. **App: `api`** (medium risk, webhook handlers)
   - Verify webhook routes still receive events
   - Test analytics sync
   - Monitor webhook latency/errors

**Testing checklist per app:**
- [ ] Auth flow works (sign-in, sign-up, sign-out)
- [ ] Sessions persist correctly
- [ ] Organization switching works
- [ ] Member management works (add/remove members)
- [ ] Webhooks fire and reach analytics
- [ ] User data matches expectations (email, name, avatar)
- [ ] Error handling (invalid credentials, expired sessions)

**Deliverable:** All three apps running on Better Auth in production.

---

### Phase 4: Cleanup (Week 5)

**Tasks:**
1. Remove Clerk from `@repo/auth` entirely (no parallel running)
2. Remove Clerk env vars from CI/CD and deployment configs
3. Remove `@clerk/nextjs` and `@clerk/themes` dependencies
4. Update documentation (README, onboarding docs)
5. Archive Clerk data (backup before deletion)
6. Remove Clerk webhook endpoint configuration

**Deliverable:** Clerk fully removed, Better Auth is sole auth provider.

---

## Data Migration

### User Data
**Strategy:** New users sign in to Better Auth. Existing Clerk users stay on Clerk until app migration.

**At Phase 3, per-app:**
1. New sign-ups → Better Auth only
2. Existing users (Clerk) → redirect to Clerk's auth flow initially
3. After app fully migrates → users re-authenticate with Better Auth (or manual data transfer)

**Alternative (if needed):** Run a data migration script to copy Clerk users to Better Auth schema before app migration.

### Organizations & Members
Better Auth schema has `organizations` and `organizationMembers` tables.
- Copy org data from Clerk webhooks log (if available) or from app database if tracked
- Or: organizations are recreated as users go through re-auth flow

**Decision:** Delay org data migration to Phase 3 per-app, after auth is stable.

---

## Webhooks & Analytics

### Current Flow
Clerk → Svix → POST `/api/webhooks/auth` → analytics.identify/capture

### New Flow
Better Auth → Svix → POST `/api/webhooks/auth` → analytics.identify/capture

### Implementation
1. Configure Better Auth hooks in `@repo/auth` to emit Svix events
2. Keep the same webhook handler in `apps/api/app/webhooks/auth/route.ts`
3. Event types remain the same (`user.created`, `user.updated`, `organization.created`, etc.)

**Deliverable:** Analytics continues receiving events with no downtime or data loss.

---

## Rollback Strategy

If issues arise at any phase:

1. **Phase 1:** Delete Better Auth schema, no impact (Clerk still running)
2. **Phase 2:** Revert `@repo/auth` commit, apps fall back to Clerk
3. **Phase 3 (per-app):** Revert app deployment or flip feature flag, users route back to Clerk auth

Rollback is safe because consuming apps only depend on `@repo/auth` API, which stays stable.

---

## Testing Strategy

### Unit Tests
- Better Auth client initialization
- Session management (create, read, validate, refresh)
- Organization membership logic

### Integration Tests
- Full auth flow (sign-up → sign-in → sign-out)
- Webhook emission and format
- Analytics event ingestion

### E2E Tests (Playwright)
- Sign-in with email/OAuth
- Organization switching
- Member management (invite, remove)
- Session persistence across tabs/pages

### Staging Validation
- Deploy to staging, run full test suite
- Manual user testing (sign-up, org switching, etc.)
- Monitor webhook deliverability (Svix dashboard)
- Check analytics dashboard for new events

---

## Timeline & Effort

| Phase | Week | Effort | Risk |
|-------|------|--------|------|
| Setup Better Auth | 1 | 2–3 days | Low (parallel to Clerk) |
| Swap `@repo/auth` | 2 | 2–3 days | Low (wrapper abstraction) |
| Migrate apps | 3–4 | 4–5 days | Medium (per-app testing) |
| Cleanup | 5 | 1 day | Low (removal only) |
| **Total** | **~5 weeks** | **~2 weeks effort** | **Low–Medium** |

**Notes:**
- Effort estimate assumes developer familiar with Next.js and Drizzle
- Can run phases in parallel (setup + swap simultaneously)
- Each app migration can overlap; no strict ordering

---

## Success Criteria

- [ ] Better Auth schema exists in Postgres
- [ ] `@repo/auth` exports same API (no consumer code changes)
- [ ] All three apps auth flows work with Better Auth
- [ ] Webhooks emit and analytics receives events
- [ ] No user data loss
- [ ] Zero downtime during rollout
- [ ] Performance is equivalent or better than Clerk
- [ ] Clerk fully removed from codebase and infrastructure

---

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| Better Auth API differences | Medium | High | Wrapper abstraction shields apps |
| Data migration issues | Low | High | Test in staging first; rollback ready |
| Webhook event mismatch | Low | Medium | Keep same event types; test analytics |
| Performance regression | Low | Medium | Load test before prod; monitor metrics |
| User confusion (re-auth) | Medium | Low | Brief communication about updates |

---

## Open Questions & Future Work

1. **OAuth provider setup:** Do we keep GitHub/Google, or add email-only? (Assume same as Clerk for now)
2. **Session duration:** What TTLs? (Better Auth defaults are sensible, adjust if needed)
3. **Audit logging:** Do we log auth events beyond analytics? (Not in Clerk integration currently; skip for now)
4. **Rate limiting:** Better Auth has built-in; Clerk doesn't require explicit config. (Better Auth default is OK)

---

## Appendix: Better Auth Setup Checklist

- [ ] Add `better-auth` to `@repo/auth/package.json`
- [ ] Generate Drizzle schema for Better Auth
- [ ] Create `.env.local` with `BETTER_AUTH_SECRET`, OAuth keys, etc.
- [ ] Initialize Better Auth client with database adapter
- [ ] Configure OAuth providers
- [ ] Set up webhook callbacks (emit Svix events)
- [ ] Create `BetterAuthProvider` component
- [ ] Create alias exports (useAuth → useBetterAuthSession, etc.)
- [ ] Rebuild SignIn/SignUp components with shadcn/ui
- [ ] Write tests for all of the above
- [ ] Deploy to staging, test end-to-end
