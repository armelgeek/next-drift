# Autonomous Loops Patterns

Adapting `autonomous-loops` skill patterns into Drift for uninterrupted feature execution.

## The 6 Patterns (ECC)

From simplest to most sophisticated:

1. **Sequential Pipeline** (`claude -p`) — Chained steps
2. **NanoClaw REPL** — Persistent session
3. **Infinite Agentic Loop** — Parallel spec-driven generation
4. **Continuous Claude PR Loop** — Multi-day iterative projects
5. **De-Sloppify Pattern** — Cleanup pass after implementation
6. **Ralphinho / RFC-Driven DAG** — Large features with merge queue

## Drift's Adaptation

Drift implements patterns **1**, **4**, **5**, **6** natively:

### Pattern 1: Sequential Pipeline
```
/drift-executor reads brain.db tasks
  → Executes task 1 to completion
  → Executes task 2 to completion
  → Executes task 3 to completion
  → NO interruptions, NO pauses
```

**Tools**: drift-executor, AUTO-ORCHESTRATION

### Pattern 4: Continuous Claude PR Loop
```
drift-executor → Iterate until feature complete
Auto-commit after each task
Auto-run: tests, typecheck, linter
Auto-update: brain.db with progress

TASK_PROGRESS.md bridges iterations
(what was tried, what patterns emerged)
```

**Tools**: drift-executor, drift-task-notes, drift-feedback-loop

### Pattern 5: De-Sloppify Cleanup Pass
```
drift-executor implements (thorough)
  ↓
drift-sloppify cleanup pass
  - Remove language/framework tests
  - Remove redundant type guards
  - Remove dead code
  - Keep business logic tests
  ↓
Verify: tests pass, lint clean
  ↓
Commit (clean code)
```

**Tools**: drift-sloppify, drift-feedback-loop (auto-invokes)

### Pattern 6: Ralphinho / RFC-Driven DAG
```
RFC document
  ↓
drift-architect decomposes → work units with dependencies
  ↓
drift-executor runs each unit (parallelizable if independent)
  ↓
Each unit: research → plan → implement → test → review
  ↓
brain.db tracks: completion, merge conflicts, evictions
  ↓
Auto-merge when tests pass (single-threaded landing to avoid conflicts)
```

**Tools**: drift-architect, drift-executor, drift-feedback-loop, drift-sloppify

## Pattern 1: Sequential Pipeline (What Drift Does Now)

### Flow
```bash
# Start
/ship feature "add dark mode"

# Drift clarifies (if needed)
# Drift scouts files
# Drift architects tasks

# THEN: Auto-execute (no pauses)
BRAIN: Found 7 tasks for "dark mode"

Task 1/7: Add schema
  ✓ Complete
  BRAIN: task_001 → completed

Task 2/7: Create provider
  ✓ Complete
  BRAIN: task_002 → completed

[repeat until task 7]

ALL COMPLETE ✅
```

### Real-Time Optimization

During execution, **drift-feedback-loop** monitors and suggests:

```
Iteration 1: Baseline (type-check + lint + test = 25s)

[FEEDBACK-LOOP] "Similar to dark-mode from 2 weeks ago"
               "Type-check always passes for theme files (skip it)"
               "Tests are independent (parallelize)"

Iteration 2: Optimized (just tests in parallel = 8s)
             3x speedup
```

## Pattern 5: De-Sloppify (Cleanup Pass)

### Problem It Solves

When implementing with TDD, LLM is thorough but creates test slop:

```typescript
// BAD: Testing that TypeScript works
test("typeof check", () => {
  const x: string = "hello";
  expect(typeof x === 'string').toBe(true);  // ❌ Remove
});

// BAD: Redundant type guard (type system enforces)
function sum(a: number, b: number) {
  if (typeof a !== 'number') throw Error('a must be number');  // ❌
  return a + b;
}

// GOOD: Business logic test (keep)
test("dark mode persists after refresh", () => {
  setTheme('dark');
  reload();
  expect(getTheme()).toBe('dark');  // ✅ Keep
});
```

### When De-Sloppify Runs

Auto-triggered as part of drift-feedback-loop real-time optimization:

```
Implement code → De-sloppify (remove slop) → Run tests → Commit
                  (separate pass)
```

**Not a constraint** on implementation (LLM stays thorough), but a **cleanup pass** (remove waste after).

### Manual Invocation

```bash
# Review all changes, remove test/code slop
/drift-sloppify

# Output
✅ SLOPPIFY COMPLETE

Removed:
- 8 language/framework tests
- 3 redundant type guards
- 2 over-defensive error blocks
- 5 console.log statements
- 4 commented-out code blocks

Test suite: ✓ 52 tests pass (was 60, removed 8)
```

## Pattern 4 + 5: Continuous Executor with De-Sloppify

### Full Workflow

```
/drift-executor "Add Stripe integration"

Iteration 1: Implement schema
  Code → de-sloppify → tests ✓ → commit

Iteration 2: Implement API routes
  Code → de-sloppify → tests ✓ → commit
  
  [FEEDBACK-LOOP] "Detected: payments + database co-change"
                  "Next iteration: edit both together"

Iteration 3: Implement webhook
  Edit: payments API + database validation together
  → de-sloppify → tests ✓ → commit
  
  [FEEDBACK-LOOP] "Error matches incident from 3 days ago"
                  "Use fix-X (85% success rate)"
  
Iteration 4: Add retry logic
  Apply: suggested fix from feedback-loop
  → de-sloppify → tests ✓ → commit

[repeat until all 7 tasks complete, zero interruptions]

TASK_PROGRESS.md updated after each iteration
(patterns, blockers, decisions, next steps)
```

## Pattern 6: RFC-Driven DAG (Large Features)

### When to Use

- Multiple work units (3+)
- Units can be parallelized (independent)
- Spec/RFC already written
- Complex with many edge cases

### Process

```
1. RFC decomposition
   RFC → work units with dependencies

2. Quality pipeline (per unit)
   Each unit: research → plan → implement → test → review
   (complexity tier determines depth)

3. Merge queue
   Run tests → rebase onto main → fast-forward
   Conflicts? Capture context, re-run implement with conflict info

4. Iterate (up to 3 passes)
   Units that evicted get full context of what conflicted
   Re-run implement with that context
```

### Example

```
RFC: "Add multi-tenant support"

Decomposed units:
  Layer 0: [unit-tenant-schema, unit-auth-check] (no deps, parallel)
  Layer 1: [unit-api-routes] (depends on auth-check)
  Layer 2: [unit-ui] (depends on API routes)

Quality pipeline:
  - Trivial: schema test (simple)
  - Medium: auth changes (research → plan → implement → test → review)
  - Large: UI (research → plan → implement → test → PRD-review → code-review → final-review)

Merge: Schema lands → Auth lands → API routes land → UI lands
(each rebase + test, if conflict: re-run impl with conflict context)
```

**Drift supports this via**: drift-architect (decomposition) + drift-executor (parallel if no deps) + drift-feedback-loop (real-time optimization).

## Integrations

### Auto-Invocation

```
User: /ship feature "add Stripe"
  → Auto-invokes: drift-clarify (if ambiguous)
  → Auto-invokes: drift-scout
  → Auto-invokes: drift-architect (creates tasks)
  → AUTO-INVOKES: drift-executor (loop until complete)
     ├─ Runs drift-sloppify on each task
     ├─ Monitors with drift-feedback-loop
     ├─ Updates TASK_PROGRESS.md per iteration
     └─ NO PAUSES, NO ASKS
  → Auto-invokes: drift-scribe (consolidate learnings)
```

### Real-Time Context Bridge

```
TASK_PROGRESS.md lives in project root
  ↓
drift-executor reads at iteration start
  → Knows: what was tried, what worked, what patterns emerged
  ↓
drift-executor updates after each step
  → Records: completed step, next blocker, new patterns
  ↓
drift-feedback-loop reads at step N
  → Suggests optimizations based on pattern history
  ↓
If executor paused or crashed: resume session reads file
  → Continues from last blocker (not from task 1)
```

### Sequential vs Parallel Execution

```
Simple feature (1-2 files):
  /drift-executor "fix button styling"
  → Sequential (1 iteration)
  → De-sloppify → done

Complex feature (3+ domains):
  /drift-executor "add multi-tenant auth"
  → Architect creates task DAG
  → Independent units run in parallel (per-unit executor)
  → Dependent units run sequential (wait for deps)
  → Each unit: implement → de-sloppify → test
  → Merge with conflict recovery
```

## Key Differences from ECC

| Pattern | ECC | Drift |
|---------|-----|-------|
| Sequential | Manual `claude -p` pipeline | `/drift-executor` (auto-loop) |
| PR Loop | `continuous-claude` script | drift-executor + TASK_PROGRESS.md |
| De-Sloppify | Separate claude -p pass | Auto-triggered by drift-feedback-loop |
| Parallelization | Manual worktrees | drift-architect DAG + auto-parallel |
| Context bridge | SHARED_TASK_NOTES.md | TASK_PROGRESS.md in brain.db |
| Real-time feedback | Not in ECC | drift-feedback-loop (new) |

## Next Steps

1. **Try Pattern 1**: Run `/ship feature` and watch uninterrupted execution
2. **Enable De-Sloppify**: See cleanup pass reduce test count by 30%
3. **Use TASK_PROGRESS**: Resume a crashed session from the blocker (not from task 1)
4. **Scale to DAG**: For multi-domain features, use drift-architect for decomposition

## References

- [autonomous-loops skill (ECC)](https://github.com/affaan-m/ECC/blob/main/skills/autonomous-loops/SKILL.md)
- [drift-executor](../AGENTS/drift-executor.md)
- [drift-sloppify](../SKILLS/drift-sloppify.md)
- [drift-task-notes](../SKILLS/drift-task-notes.md)
- [drift-feedback-loop](../AGENTS/drift-feedback-loop.md)
- [AUTO-ORCHESTRATION](../AUTO-ORCHESTRATION.md)

