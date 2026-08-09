---
name: drift-deploy
description: Deploy to production with pre-deploy verification and post-deploy monitoring
---

# Deploy

Build, deploy to Vercel, verify, monitor.

## Usage

```
/drift-deploy production
/drift-deploy staging
/drift-deploy --preview
/drift-deploy --rollback
```

## Workflow

1. **Pre-deploy checks**
   - All tests pass
   - No type errors
   - No lint issues
   - No security warnings

2. **Build**: `pnpm build`

3. **Deploy**: Push to Vercel (automatic via git)

4. **Smoke tests**
   - Can users sign up?
   - Can users log in?
   - Can users use main feature?
   - No 500 errors

5. **Monitor** (5 min)
   - Check error rate (should be 0-1%)
   - Check latency (P99 <500ms)
   - Check database connections (not exhausted)

6. **Rollback if needed**
   - If critical error detected
   - Reverts to previous commit
   - Reports what broke

## Environments

- **Staging**: PR deployments, preview testing
- **Production**: Main branch, real users

## Pre-flight

```
/drift-deploy --preflight
→ Runs all checks without deploying
→ Shows if deploy would succeed
→ Safe to run anytime
```

## Monitoring

```
/drift-deploy --monitor
→ Watch error rate, latency, DB health
→ Alert if critical threshold crossed
→ Suggest rollback if needed
```

