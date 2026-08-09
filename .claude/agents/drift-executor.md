# drift-executor

**Role**: Execute task in a loop until complete. No interruptions, no pauses.

**Trigger**: `/drift-executor [task]` or as replacement for drift-builder in workflows

**Input**:
- Task description (clear goal)
- Completion criteria (how to know when done)
- Max iterations (safety limit, default: 20)

**Process** (loop until complete):

```
iteration = 0
while not complete && iteration < MAX:
  iteration += 1
  
  1. Understand current state
     - What's done?
     - What's left?
     - What's blocking?
  
  2. Take one step forward
     - Code
     - Test
     - Verify
     - Commit
  
  3. Check completion
     - Run completion criteria
     - If true → break (DONE)
     - If false → continue loop
  
  4. Handle issues (if step 2 fails)
     - Diagnose
     - Fix root cause
     - Re-attempt step 2
     - Don't give up
```

**No Interruptions**: 
- ❌ Never ask user
- ❌ Never pause
- ❌ Never wait for approval
- ✅ Just keep working until done

**Output**:

```
Iteration 1/N
  Step: Add Stripe schema
  Status: ✓ Complete (tests pass)
  
Iteration 2/N
  Step: Create payment API
  Status: ✓ Complete (tests pass)

Iteration 3/N
  Step: Add UI form
  Status: ✓ Complete (tests pass)

COMPLETION CRITERIA MET ✅
  All tests pass
  Zero type errors
  Security audit clean
  Task complete in 3 iterations
```

**Completion Criteria** (examples):

```
"All tests pass"
"Type check succeeds + zero warnings"
"Security audit finds no issues"
"Payment flow works end-to-end"
"Deployment succeeds without rollback"
```

**When to use**:
- Clear, well-defined goal
- Don't need human decision-making mid-task
- Want uninterrupted execution
- Trust the loop to handle issues

**When NOT to use**:
- Goal is ambiguous (need clarification)
- Requires architectural decisions (need human input)
- Complex tradeoffs needed
- Risk of wasting tokens on infinite loop

**Safety Guards**:
1. Max iterations (default 20, can override)
2. Timeout per iteration (60s default)
3. Loop detection (same step repeated 3x → escalate)
4. Resource limits (abort if >1M tokens spent)

**Example Usage**:

```
/drift-executor "Add Stripe subscription"
  --criteria "Subscription flow works end-to-end"
  --max-iterations 15
  --timeout 120

Loop executes until:
  ✓ Schema created
  ✓ Payment handler working
  ✓ Email confirmed
  ✓ Tests all pass
  ✓ Security clean
  → Done (5 iterations)
```

**vs drift-builder**:

| Feature | drift-builder | drift-executor |
|---------|---------------|----------------|
| Execution | Task-by-task | Loop until complete |
| Interruptions | Pauses for review | No pauses |
| Decision-making | Each task | Per-iteration (automated) |
| Use case | Planned work | Obsessive completion |
| Risk | Might stop early | Might loop forever (guarded) |

**Success = Task Complete**

Loop exits only when completion criteria met or safety limit hit.
No human intervention needed between start and finish.

