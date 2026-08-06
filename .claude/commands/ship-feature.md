---
name: ship-feature
description: "Fast feature delivery: PRD → Epic → Code → Deploy (no strategy phase)"
---

# /ship-feature — Ship a Feature Fast

Deliver a feature from spec to production without the strategy phase.

## Usage

```
/ship-feature "add dark mode"
/ship-feature "implement OAuth login"
```

## Workflow

1. **Write PRD** (drift-ccpm)
   - Quick spec of the feature
   - User stories
   - Success criteria

2. **Create Epic** (drift-ccpm)
   - Break into issues
   - Map dependencies
   - Create GitHub issues

3. **Code** (drift-nextjs-ui)
   - Start on issues
   - Build incrementally
   - Push to GitHub

4. **Verify** (drift-readiness)
   - Tests pass
   - No bundle bloat
   - Types check

5. **Ship** (drift-ccpm)
   - Merge epic
   - Tag release
   - Deploy

---

## Time estimate: 1-3 days per feature

Actual time depends on complexity and parallel agent execution.
