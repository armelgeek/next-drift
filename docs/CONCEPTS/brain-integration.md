# Brain.db Integration in Autonomous Loops

How brain.db (SQLite knowledge graph) connects all three new patterns.

## Brain Tables Used

```
decisions         → Locked Q&A pairs (reused across sessions)
learnings         → Error→fix patterns (suggestions for feedback-loop)
hot_files         → Co-changed files (predicts next edits)
model_performance → Agent/model success rates (routes tasks)
tasks             → Feature work units (read by executor, written after)
conventions       → Project patterns (avoid repeating questions)
```

## Pattern Integration

### 1. drift-executor + brain.db

```
/drift-executor "Add Stripe"
  ↓
1. READS brain.db
   SELECT * FROM tasks WHERE feature_id = 'feature_stripe' AND status IN ('pending', 'in_progress')
   → Returns: 3 tasks (schema, API, UI)
   
2. EXECUTES each task (loop until complete)
   For task_001_schema:
     - Code implementation
     - Test + verify
     - Commit
   
3. WRITES to brain.db after each step
   UPDATE tasks SET status='in_progress', commit_sha='abc123', tokens_used=15000
   WHERE task_id = 'task_001_schema'

4. REPEATS for task_002, task_003
   Each iteration:
     - Read task from brain
     - Execute
     - Update brain
     - Check: all done? No → next task

5. FINAL UPDATE
   UPDATE tasks SET status='completed' WHERE feature_id = 'feature_stripe'
```

**Brain role**: Source of truth for task state across iterations.

### 2. drift-feedback-loop + brain.db

```
While drift-executor runs:

[ITERATION 1]
  Detect: "This step always fails for webhook files"
  Write: INSERT INTO watch-list (pattern, first_seen, confidence)
  
[ITERATION 2]
  Same error in webhook code
  Read: SELECT * FROM watch-list WHERE pattern = 'webhook-error'
  Confidence: 0.7 (2nd occurrence)
  
  Suggest: "This error matches webhook incident (confidence: 70%)"
         "Try fix-X (85% success rate from learnings table)"
  
  If suggestion accepted:
    Write: UPDATE watch-list SET confidence = 0.85, accepted_count = 1

[ITERATION 3]
  Third similar error
  Read: watch-list, learnings
  Confidence now: 0.9 (3rd occurrence)
  Auto-suggest (less friction): "Apply fix-X"
  
  Write: UPDATE learnings SET confidence = 0.88 (fix worked)
```

**Brain role**: Tracks pattern confidence, stores fixes, enables real-time suggestions.

### 3. drift-task-notes + brain.db

```
TASK_PROGRESS.md (project root)
  ├─ Readable format (for executor, for humans)
  ├─ References brain.db IDs
  │  └─ feature_id: feature_stripe_payments_001
  │  └─ task IDs: task_001_schema, task_002_api, task_003_ui
  │
  └─ Local state (what was tried, patterns emerging)
     └─ Detected: payment + database files co-change
     └─ Blocker: webhook signature type mismatch
     └─ Decisions: use DB for state (not Redis)

When executor reads TASK_PROGRESS.md:
  - Knows what was tried before
  - Knows patterns that emerged
  - Knows current blocker
  - Can avoid redundant attempts
  
When executor updates brain.db:
  - TASK_PROGRESS.md stays in sync (same task IDs, feature ID)
  - Both have reference to same "feature_stripe_payments_001"
  - One file (TASK_PROGRESS) is human-readable
  - One database (brain.db) is machine-queryable
```

**Brain role**: Centralizes task IDs, feature IDs (TASK_PROGRESS.md references them).

### 4. drift-sloppify + brain.db (indirect)

```
drift-sloppify cleanup pass (auto-triggered by feedback-loop)
  ↓
Remove: language tests, redundant guards, dead code
  ↓
drift-feedback-loop records: "Removed 8 framework tests in iteration 5"
  ↓
Write to brain.db:
  INSERT INTO learnings (pattern, problem, solution, confidence)
  VALUES (
    'over_thorough_implementation',
    'LLM writes 15 tests when 8 would suffice',
    'Run de-sloppify pass after implement step',
    0.92
  )
  
  UPDATE tasks SET slop_removed = 8, final_test_count = 52 (was 60)
  WHERE task_id = 'task_002_api'
```

**Brain role**: Stores "over-thorough" pattern for future iterations (speeds up next feature).

## Three-Layer Coherence

```
GITHUB (Strategy)
  ├─ .claude/CLAUDE.md (project rules)
  ├─ .claude/AUTO-ORCHESTRATION.md (how tasks flow)
  └─ docs/ (documentation of all skills/agents)
  
BRAIN.DB (Execution)
  ├─ tasks table (what's being done)
  ├─ decisions table (what was decided)
  ├─ learnings table (what succeeded/failed)
  ├─ hot_files table (co-change patterns)
  └─ watch_list table (emerging patterns)
  
GIT (History)
  ├─ Commits (what code changed)
  ├─ Branches (feature isolation)
  └─ git log (chronological record)
```

**Never diverge**:
- brain.db reads from git (commit_sha, file history)
- brain.db informs git (decisions, learnings in commit messages)
- GitHub (documentation) describes how brain.db works
- brain.db validates against GitHub rules (conventions check)

## Execution Loop with Brain

### Start of Feature

```
User: /ship feature "add dark mode"

drift-router detects: feature keyword
Auto-invoke: drift-clarify
  → Ask: "Persist to localStorage or DB?"
  → Write: INSERT INTO decisions (question, answer, confidence, locked)
  → locked = true (never ask again this feature)

Auto-invoke: drift-scout
  → Find all relevant files
  → Write: Files touched count to tasks table

Auto-invoke: drift-architect
  → Create 7 tasks for dark mode
  → Write: INSERT INTO tasks (task_id, name, files, status='pending', feature_id=...)
  
Brain now has:
  ✓ decisions: 1 (localStorage vs DB)
  ✓ tasks: 7 (all pending)
  ✓ feature_id: feature_dark_mode_001
```

### During Execution

```
drift-executor reads brain.db:
  SELECT * FROM tasks WHERE feature_id='feature_dark_mode_001' AND status='pending'
  → Gets 7 tasks in order
  
Loop iteration 1:
  Execute task_001 (schema)
  If success:
    UPDATE tasks SET status='in_progress', commit_sha='abc123', iteration=1
    UPDATE brain.timestamp = now()  ← for metrics
    
Loop iteration 2:
  Execute task_002 (provider)
  drift-feedback-loop reads brain.db:
    SELECT * FROM watch_list WHERE confidence > 0.7
    → No patterns yet (first feature)
  
Loop iteration 3:
  Execute task_003
  drift-feedback-loop reads brain.db:
    SELECT * FROM learnings WHERE domain='ui'
    → Suggests: "Theme changes often need CSS variable cleanup"
  
Loop iteration N:
  All tasks complete
  UPDATE tasks SET status='completed' WHERE feature_id='feature_dark_mode_001'
  UPDATE decisions SET confidence=0.95  ← locked in, more confident
  INSERT INTO learnings (dark-mode patterns for next feature)
```

### Resume After Crash

```
Session 1: Got to iteration 5
  brain.db has:
    - tasks: 3 complete, 4 pending
    - task_003: commit_sha='def456'
    - decisions: locked
    - watch_list: 1 pattern

Session 2: Crashed session resumed
  drift-executor reads brain.db:
    SELECT * FROM tasks WHERE feature_id='feature_dark_mode_001' AND status!='completed'
    → Gets: task_004, task_005, task_006, task_007 (not already-done ones)
    
  Also reads TASK_PROGRESS.md:
    → Knows: webhook signature type was blocker
    → Knows: schema + database files co-change
    → Knows: 8 redundant tests were removed
    
  Continues from iteration 6 (task_004)
  WITHOUT redoing tasks 1-3
```

## Data Flow

```
                    ┌─────────────────┐
                    │  GitHub Files   │
                    │  .claude/,docs/ │
                    └────────┬────────┘
                             │
                             │ defines strategies
                             ▼
                    ┌─────────────────┐
                    │   brain.db      │
                    │  (SQLite)       │
                    └─────┬────────┬──┘
                          │        │
              ┌───────────┘        └──────────────┐
              │                                   │
              ▼                                   ▼
   ┌──────────────────────┐        ┌──────────────────────┐
   │ TASK_PROGRESS.md     │        │  Git repo (.git)     │
   │  (Human-readable)    │        │  (History + code)    │
   └──────────────────────┘        └──────────────────────┘
              │                             │
              └──────────────┬──────────────┘
                             │
                    Executor updates both
```

**Executor writes to**:
1. brain.db (queries, inserts, updates)
2. TASK_PROGRESS.md (progress, patterns, blockers)
3. git (commits code changes)

**Executor reads from**:
1. brain.db (tasks, decisions, learnings)
2. TASK_PROGRESS.md (what was tried before)
3. git (commit history, file state)

## Summary: Brain's Role in Autonomous Loops

| Component | Reads | Writes | Why |
|-----------|-------|--------|-----|
| drift-executor | tasks, decisions | tasks (progress) | Source of truth for work units |
| drift-feedback-loop | learnings, watch_list, hot_files | watch_list (confidence), learnings | Real-time pattern detection |
| drift-sloppify | (none) | learnings (indirectly via feedback) | De-slop impacts learnings |
| drift-task-notes | (none) | TASK_PROGRESS.md (not brain) | Local context bridge, references brain IDs |
| drift-architect | (none) | tasks (creates), decisions (if asked) | Task decomposition seeded to brain |
| drift-scribe | All | All | Final consolidation post-feature |

**Key insight**: brain.db is the **thread** that connects all agents. Every agent reads what others wrote, makes decisions, and updates brain. No divergence, no isolated state.

