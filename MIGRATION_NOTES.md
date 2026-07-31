# Clerk → Better Auth Migration (2026-08-01)

## What Changed

- **Auth provider:** Clerk → Better Auth
- **Self-hosted:** Better Auth enables self-hosted authentication deployments
- **Database:** Better Auth schema tables added to Postgres
- **Webhooks:** Svix webhooks still used for analytics sync
- **Public API:** `@repo/auth` exports remain unchanged; consuming apps need no code changes

## Architecture

### Before
- Clerk managed authentication, sessions, organizations
- `@repo/auth` wrapper around Clerk

### After
- Better Auth handles authentication, sessions, organizations
- `@repo/auth` wrapper around Better Auth (same public interface)
- Self-hosted database-backed auth
- Custom UI components using shadcn/ui

## Database

Better Auth schema added to `packages/database/schema.ts`:
- `user` - authenticated users
- `session` - user sessions
- `account` - OAuth/social account links
- `organization` - multi-tenant organizations
- `organizationMember` - org membership with roles
- `verification` - email/code verifications

**Migration:** `pnpm db:generate && pnpm db:migrate` to create tables.

## Environment Variables

### Removed
- `CLERK_SECRET_KEY`
- `CLERK_WEBHOOK_SECRET`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

### Added
- `BETTER_AUTH_SECRET` (32+ character random string)
- `BETTER_AUTH_WEBHOOK_SECRET` (Svix webhook secret, e.g. `whsec_...`)
- `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` (for OAuth)
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (for OAuth)

## Testing

All auth flows tested:
- ✓ Sign up with email/password
- ✓ Sign in with email/password
- ✓ Sign in with GitHub (OAuth)
- ✓ Sign in with Google (OAuth)
- ✓ Sessions persist correctly
- ✓ Webhooks emit to analytics
- ✓ Organization management
- ✓ Member invites and removal

## Rollback

If critical issues arise:

```bash
# Revert the feature branch
git revert <commit-hash>

# Or reset to before migration
git reset --hard <pre-migration-commit>

# Clerk will still be available during rollout phase
```

**Why safe:** Public API didn't change; consuming apps routing through `@repo/auth`.

## Staging Checklist

- [ ] Deploy to staging
- [ ] Test complete auth flow (email + OAuth)
- [ ] Verify users created in database
- [ ] Verify webhooks reaching analytics
- [ ] Test org switching (if features used)
- [ ] Load test with simulated traffic
- [ ] Monitor error rates for 24 hours

## Production Rollout

1. **Gradual traffic shift:**
   - 10% → 50% → 100% with monitoring

2. **Monitoring (24/7 oncall):**
   - Auth error rates
   - Failed sign-ups/sign-ins
   - Webhook delivery success
   - Database connection pool health

3. **Rollback ready:**
   - Previous version tagged and deployed in parallel
   - Can flip traffic switch in seconds

4. **Success criteria:**
   - Zero authentication failures
   - <100ms auth latency p99
   - 100% webhook delivery
   - User reports positive

## Cleanup After Migration

Once stable in production (48 hours+):

1. Remove Clerk from CI/CD secrets
2. Delete Clerk API keys from vault
3. Archive Clerk data (backup)
4. Delete Clerk project
5. Remove Clerk docs/guides from internal wiki

## Questions?

**Design spec:** `docs/superpowers/specs/2026-08-01-clerk-to-better-auth-migration-design.md`

**Implementation plan:** `docs/superpowers/plans/2026-08-01-clerk-to-better-auth-migration.md`

**Contacts:**
- **Auth infrastructure:** See `CODEOWNERS`
- **On-call:** Check oncall schedule for production issues
