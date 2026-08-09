# Getting Started with Drift Brain

Your first 30 minutes with Drift.

## 1. Initialize (5 min)

```bash
cd your-project
sh .claude/init-brain.sh
```

Output:
```
✅ Brain initialization complete!
Tables created: decisions, learnings, hot_files, model_performance, tasks
```

Brain.db is ready.

## 2. Understand the Flow (5 min)

When you run `/ship feature "description"`:

```
1. AUTO-CLARIFY
   System asks: "Is this recurring? API versioning?"
   You answer once → locked forever (never ask again)

2. AUTO-SCENARIOS
   System finds: nominal path, alternatives, error cases, edges
   Generates: test matrix (15+ scenarios)

3. AUTO-SCOUT
   System finds: every relevant file in codebase
   Identifies: which files depend on each other

4. AUTO-ARCHITECT
   System creates: task list with exact files + verify commands
   Stored: in brain.db (your project's memory)

5. AUTO-EXECUTOR (NEW)
   System executes: each task in a loop until complete
   No pauses, no asks → just works
   Updates: brain.db with progress

6. AUTO-SCRIBE
   System learns: records decisions + patterns + conventions
   Never: forgets (stored in brain.db)

7. AUTO-DEPLOY
   System ships: to production with safety checks
   Monitors: for 5 minutes to catch errors

Result: Feature complete, brain smarter, zero manual work
```

## 3. Your First Feature (15 min)

Pick something simple (2-3 tasks):

```bash
/ship feature "add user preferences modal to settings page"
```

### What Happens Automatically

**Step 1: Clarify**
```
Q: "Database or localStorage?"
You: "Database (need sync across devices)"
→ Decision locked (confidence: 0.95)
```

**Step 2: Scenarios**
```
✓ Nominal: User opens modal, saves preference, it persists
✓ Alternative: User cancels modal (no changes)
✓ Error: Preference save fails (show error + retry)
✓ Edge: User changes preference while offline
→ Test matrix: 8 scenarios identified
```

**Step 3: Scout**
```
✓ Found files:
  - apps/app/src/app/settings/page.tsx
  - packages/database/schema.ts
  - apps/app/src/components/PreferencesModal.tsx
  - etc.
→ 7 relevant files found
```

**Step 4: Architect**
```
✓ Created tasks:
  1. Add preference to database schema
  2. Create PreferencesModal component
  3. Add API endpoint for saving
  4. Connect modal to page
  5. Add tests
→ 5 tasks, brain.db updated
```

**Step 5: Executor (AUTONOMOUS)**
```
[No pauses, just works]

Task 1: Add schema
  Iteration 1/20
    Edit schema.ts → add preference field
    Run tests → ✓ pass
  Update brain.db → task complete

Task 2: Create component
  Iteration 2/20
    Create PreferencesModal.tsx
    Run tests → ✓ pass
  Update brain.db → task complete

Task 3: API endpoint
  Iteration 3/20
    Create /api/preferences
    Run tests → ✓ pass
  Update brain.db → task complete

Task 4: Connect modal
  Iteration 4/20
    Wire modal to page
    Run tests → ✓ pass
  Update brain.db → task complete

Task 5: Add tests
  Iteration 5/20
    Write test cases
    Run tests → ✓ pass
  Update brain.db → task complete

✅ ALL COMPLETE
```

**Step 6: Scribe (Learning)**
```
✓ Records:
  DECISION: "Store in database (sync across devices)"
    Confidence: 0.95, Locked: true
  
  LEARNING: "Modal state must reset on cancel"
    Problem: User makes changes, cancels, then reopens → changes still there
    Solution: Clear state on close
    Confidence: 0.9

✓ Detects patterns (none yet on first feature)
```

**Step 7: Deploy**
```
✓ Pre-flight checks:
  Tests pass? ✓
  Type errors? 0
  Security clean? ✓

✓ Deploy staging → Smoke test → Deploy prod

✓ Monitor 5 min for errors → all clear

✅ SHIPPED
```

## 4. Verify It Worked

After `/ship feature` completes:

```bash
# Check brain learned
/drift:status

# See what was done
/drift:tasks

# Test the feature works
pnpm dev
# Open settings → toggle preference → refresh → still there ✓

# Verify tests
pnpm test
# All tests pass ✓
```

## 5. Try a Bug Fix (10 min)

Now try fixing a bug:

```bash
/ship bug "preferences not syncing across tabs"
```

System will:
1. Ask: "Where does it fail?"
2. Scout: Find all sync-related code
3. Architect: Create fix plan
4. Execute: Fix it
5. Scribe: Learn the pattern
6. Deploy: Ship the fix

Same autonomous flow, but optimized for bugs (smaller scope).

## 6. Understanding Brain.db

After your first feature:

```bash
sqlite3 .drift-brain.db

# See decisions (locked, never ask again)
SELECT question, answer, confidence FROM decisions;

# See learnings (patterns discovered)
SELECT pattern, solution, confidence FROM learnings;

# See tasks (what was done)
SELECT name, status, commit_sha FROM tasks;

# See hot files (changed together)
SELECT path, change_count FROM hot_files ORDER BY change_count DESC;
```

Brain now has memory of your feature. Next feature will be faster.

## 7. Key Concepts

### Auto-Routing
System detects "add feature" vs "fix bug" automatically.
Routes to right workflow.
No manual `/ship-feature` vs `/ship-bug` choice needed.

### Learning-Loop
Every session:
1. Captures decisions + patterns
2. Applies quality gates (not noise)
3. Routes to right destination
4. Never repeats (decisions locked)

### Autonomous Executor
New: Instead of step-by-step, loops until complete.
0 interruptions between architect and scribe.
Faster shipping.

### Three-Layer Coherence
GitHub (public) ↔ brain.db (private) ↔ git (history)
Everything traceable, nothing orphaned.

## 8. Common Next Steps

```bash
# Search past decisions
/brain-search decisions

# Check code quality
/drift-designer apps/app/src/app/settings/page.tsx

# Safe refactor
/ship-refactor "rename PreferencesModal to SettingsPreferencesModal"

# Run security audit
/drift-security

# Full system check
/drift-verify
```

## 9. FAQ

**Q: Do I need to run anything after init?**
A: No. SessionStart hook auto-runs, brain.db is ready.

**Q: Can I skip the executor?**
A: No (auto-invoked after architect). That's the point — no manual steps.

**Q: Where are my learnings stored?**
A: `.drift-brain.db` SQLite database. Never lost.

**Q: What if executor fails?**
A: Safety limits: max 20 iterations, 60s timeout per step. Falls back with full context.

**Q: Can I use this for bugs?**
A: Yes. `/ship bug "description"` uses same system, smaller scope.

## 10. You're Ready

You now know:
- ✅ How to initialize brain
- ✅ What happens in each phase
- ✅ How executor works (autonomous loop)
- ✅ Where learnings go
- ✅ How to verify it worked

Next: Try it yourself.

```bash
/ship feature "add something to your app"
```

Watch it execute, no interruptions. Brain learns automatically.

---

**Questions?** → See [docs/GUIDES/faq.md](faq.md)
**Troubleshooting?** → See [docs/GUIDES/troubleshooting.md](troubleshooting.md)
