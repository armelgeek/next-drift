# Full Pipeline End-to-End Test

Test the complete Drift Brain autonomous execution loop.

## Scenario: "Add Dark Mode to App"

**Goal**: Ship dark mode feature end-to-end without manual interruption.

## Test Steps

### 1. Initialize Brain
```bash
sh .claude/init-brain.sh
# Output: ✅ Brain initialization complete
```

### 2. Start Pipeline
```bash
/ship feature "add dark mode support to SaaS app"
```

Expected flow (should happen automatically):

#### Phase 1: Clarify (drift-clarify)
```
✓ Asks: 1-3 domain-specific questions
  Q: "Persist preference (localStorage)?"
  User: "yes, browser + account sync"
  → Decision locked in brain.db
  → Never ask again (confidence: 0.95)
```

#### Phase 2: Scenarios (drift-scenarios)
```
✓ Analyzes all paths:
  Nominal: User toggles theme → saved → persists
  Alternative: Mobile responsive, System preference detection
  Error: API fails when saving → show error + retry
  Edge: User changes pref while offline → queue it
  Security: CSS-in-JS, no XSS vectors
  
✓ Outputs: 15 test scenarios
✓ Records: High-risk items (CSS injection points)
```

#### Phase 3: Scout (drift-scout)
```
✓ Finds:
  - apps/app/src/components/ThemeToggle.tsx (new)
  - packages/design-system/styles/colors.css (modify)
  - packages/database/schema.ts (add theme column)
  - apps/app/src/app/layout.tsx (add theme context)
  - tests/** (add theme tests)
  
✓ Identifies consumers:
  - Every page using colors
  - Every styled component
  - PostHog tracking (theme event)
```

#### Phase 4: Architect (drift-architect)
```
✓ Creates task list:
  Task 1: Add theme schema to database (database domain)
  Task 2: Create ThemeProvider context (ui domain)
  Task 3: Add ThemeToggle component (ui domain)
  Task 4: Update colors.css with dark mode (ui domain)
  Task 5: Add theme persistence API (api domain)
  Task 6: Wire up theme to all pages (ui domain)
  Task 7: Add theme tests (test domain)

✓ Inserted into brain.db tasks table
✓ Shows: 7 tasks, estimated 4-6 hours
```

#### Phase 5: Auto-Executor (drift-executor) ← AUTONOMOUS LOOP
```
🔄 READS BRAIN: Found 7 tasks

Task 1/7: Add theme schema
  Iteration 1/20
    Step 1: Edit packages/database/schema.ts
      → Add: userTheme enum (light/dark/system)
      → Add: user.theme column
    ✓ Code complete
    Step 2: Run verification
      → pnpm test --filter @repo/database
      ✓ Tests pass (0 failures)
  BRAIN: Updated task_001 → in_progress, commit_sha=abc123
  ✓ Task complete, continue

Task 2/7: Create ThemeProvider
  Iteration 2/20
    Step 1: Create packages/design-system/providers/ThemeProvider.tsx
      → useTheme hook
      → ThemeProvider wrapper
    ✓ Code complete
    Step 2: Run verification
      → pnpm test --filter @repo/design-system
      ✓ Tests pass
  BRAIN: Updated task_002 → in_progress, commit_sha=def456
  ✓ Task complete, continue

Task 3/7: ThemeToggle component
  Iteration 3/20
    Step 1: Create components/ui/ThemeToggle.tsx
      → Button + dropdown
      → Light/Dark/System options
    ✓ Code complete
    Step 2: Run verification
      → pnpm test --filter @repo/design-system
      ✓ Tests pass
  BRAIN: Updated task_003 → in_progress, commit_sha=ghi789
  ✓ Task complete, continue

[Tasks 4-7 continue same pattern...]

ALL TASKS COMPLETE ✅
  7 tasks executed in 7 iterations
  BRAIN: All tasks → completed
  No interruptions, no human asks
  Total time: ~45 minutes (uninterrupted execution)
```

#### Phase 6: Auto-Scribe (drift-scribe)
```
✓ Consolidates learnings:
  DECISION: "Persist in localStorage + DB dual sync"
    confidence: 0.9, locked: true
  
  LEARNING: "Dark mode CSS needs !important for theme overrides"
    problem: "CSS specificity issues with Tailwind"
    solution: "Use CSS variables with :root selector"
    confidence: 0.85
    
  CONVENTION: "Theme context always at app layout level"
    scope: "project"

✓ Detects watch-list patterns:
  "CSS-in-JS XSS risk" (first occurrence)
  
✓ Records to brain.db (user verifies before storing)
```

#### Phase 7: Deploy (drift-deploy)
```
✓ Pre-flight checks:
  - All tests pass? YES
  - Type errors? 0
  - Security audit? CLEAN
  - No breaking changes? YES
  
✓ Deploy to staging
✓ Smoke tests:
  - Dark mode toggles? ✓
  - Theme persists refresh? ✓
  - Mobile responsive? ✓
  
✓ Deploy to production
✓ Monitor: 5-min error watch
  - No new errors? ✓
  - Performance impact? <5%
  
✅ SHIPPED
```

## Verification Checklist

After pipeline completes:

- [ ] brain.db populated:
  ```bash
  sqlite3 .drift-brain.db "SELECT COUNT(*) FROM tasks WHERE status='completed';"
  # Should show: 7 (all tasks complete)
  ```

- [ ] Git history shows commits:
  ```bash
  git log --oneline | grep -i "theme\|dark" | wc -l
  # Should show: ≥7 commits
  ```

- [ ] Feature works:
  ```bash
  pnpm dev
  # Open app, toggle theme, refresh → theme persists
  # Check localStorage: "theme" key present
  ```

- [ ] Tests pass:
  ```bash
  pnpm test
  # Should show: All tests pass, including new theme tests
  ```

- [ ] Type check clean:
  ```bash
  pnpm typecheck
  # Should show: 0 errors
  ```

- [ ] No regressions:
  ```bash
  pnpm test --run
  # Should show: Same pass rate as before feature
  ```

## Success Criteria

✅ **Full Pipeline Success** if all true:
1. Brain initialized (7 components exist)
2. Clarify locked decision without re-asking
3. Scenarios generated 15+ test cases
4. Scout found all relevant files
5. Architect created 7 tasks
6. Executor completed all 7 tasks without interruption
7. Scribe recorded decisions + learnings
8. Deploy succeeded to production
9. Feature works (dark mode toggles + persists)
10. Tests all pass, no regressions

**Expected timeline**: 45-60 minutes (uninterrupted, 0 manual inputs after `/ship feature`)

## Debug Commands

If something fails:

```bash
# Check brain health
/drift:status

# View current tasks
/drift:tasks

# Verify coherence
/drift-verify

# Check last error
/drift-debug

# View learnings
/brain-search learnings
```

## What This Tests

✅ Auto-routing (detects feature request)
✅ Multi-agent orchestration (11 agents working together)
✅ Brain integration (reads/writes throughout)
✅ Autonomous execution (executor loop)
✅ Learning capture (scribe consolidation)
✅ End-to-end shipping (deploy + monitoring)

This is the **real test** of the Drift Brain system.
If this works end-to-end with zero manual interruption, the system is ready.

