# Solo Builder Project Planning

Build focused, high-impact projects as a solo developer. Reads specs from `docs/product/` (created by idea-clarifier) and converts them into actionable weekly plans.

**Prerequisite:** Run `/idea-clarifier` first to generate `docs/product/` specification.

## When to Use This Skill

- After running `/idea-clarifier` (reads the generated spec)
- Planning implementation phases
- Breaking down MVP into weekly sprints
- Estimating realistic timelines (4-5 hours/day)
- Creating a development roadmap
- Planning iterations based on feedback
- Avoiding burnout through sustainable pace

## How It Works

**Input:** `docs/product/` folder (from idea-clarifier)
- Reads: `03-mvp-scope.md` (must/should/could have)
- Reads: `05-user-journeys.md` (core workflows)
- Reads: `06-functional-requirements.md` (features)
- Reads: `07-business-rules.md` (constraints)
- Reads: `08-data-model.md` (entities)

**Output:** Weekly sprint plan + development roadmap

```
Input from idea-clarifier:
docs/product/03-mvp-scope.md
  ├── Must have: Auth, user profiles, basic dashboard
  ├── Should have: Email notifications
  └── Could have: Advanced analytics

↓ project-manager reads this ↓

Output: Implementation plan
  Week 1: Auth + user profiles
  Week 2: Dashboard
  Week 3: Email notifications
  Week 4: Testing + refinement
```

### 1. Extract MVP from Spec

Read `docs/product/03-mvp-scope.md`:
- **Must have** → Week 1-2 (foundation)
- **Should have** → Week 3-4 (polish)
- **Could have** → v1.1 (post-launch)

### 2. Weekly Sprint Structure

```
This Week (4 days coding, 1 day buffer)
├─ Mon-Tue: Core feature (from spec)
├─ Wed: Polish + tests
├─ Thu: Deploy staging + feedback
└─ Fri: Buffer/review

🎯 Weekly goal: 1 complete, shippable feature
⏰ Pace: 4-5 focused hours/day, not 8-10
```

### 3. From Spec to Code

Reading `docs/product/`:
- `06-functional-requirements.md` → Break into tasks
- `07-business-rules.md` → Implementation constraints
- `08-data-model.md` → Database schema
- `05-user-journeys.md` → Test scenarios

### 4. Time Budget (Your Scarcest Resource)

```markdown
Available: ~20-25 hours/week of deep work

This week's allocation:
├─ Core feature (from MVP scope)   [12h]
├─ Polish + tests                  [5h]
├─ Deploy + feedback               [3h]
└─ Buffer (unexpected issues)      [2h]

📊 Rule: Never commit more than 20h coding
⚠️  If a feature takes >20h, break it into 2-week chunks
```

**Your time is the constraint.** Everything else is negotiable.

---

## Reading docs/product/ Files

When planning, extract info from these spec files:

### From `03-mvp-scope.md`
- **Must have** → Priority 1 (weeks 1-2)
- **Should have** → Priority 2 (weeks 3-4)
- **Could have** → v1.1 backlog

### From `05-user-journeys.md`
- Break each journey into testable steps
- Each journey = ~3-4 day task

### From `06-functional-requirements.md`
- Features → Weekly themes
- Acceptance criteria → Definition of done

### From `07-business-rules.md`
- Rules → Test cases + validation code
- Constraints → Estimation multiplier (+25%)

### From `08-data-model.md`
- Entities → Database schema
- Relationships → Migration sequence

### From `11-technical-architecture.md`
- Tech stack → Setup week 1
- Architecture → Folder structure

## Best Practices for Solo Builders

1. **Ship MVP in 1 week** - Avoid perfectionism paralysis. Done > perfect.
2. **Break work into 3-4 day chunks** - If a task takes >4 days, split it.
3. **Estimate 2x what you think** - Tasks always take longer than expected.
4. **Say "no" to scope creep** - Features for "v2" go in a backlog, not this week.
5. **Deploy early, get feedback** - Iterate fast based on real usage.
6. **Protect deep work** - 4 focused days beats 7 scattered days.
7. **Budget 20% for surprises** - Bugs, refactoring, technical debt.
8. **Weekly review** - What shipped? What to prioritize next week?

### Anti-Patterns to Avoid

❌ **Perfect-first syndrome** - Waiting for the ideal design/arch before shipping
❌ **Scope creep** - "While I'm here, I'll also add..."
❌ **Burnout pace** - Working 60h/week for 3 months straight
❌ **No iteration** - Shipping once, then moving on without feedback
❌ **Feature bloat** - Building every idea instead of validating with users

## Example: Combining idea-clarifier + project-manager

**Workflow:**

```
Step 1: Run idea-clarifier
  /idea-clarifier
  ↓
  Generates docs/product/ with full spec

Step 2: Run project-manager
  /project-manager
  ↓
  Reads docs/product/03-mvp-scope.md
  ↓
  Creates weekly plan

Step 3: Execute
  pnpm dev → implement → test → deploy
```

**Example: Ticket Platform MVP**

From `docs/product/03-mvp-scope.md`:
```
Must have:
- Event creation & management
- Ticket purchase (no auth needed)
- Organizer dashboard
- Email confirmation

Should have:
- Search functionality
- Basic analytics

Could have:
- Team management
- Affiliate programs
```

Project-manager plan:
```
Week 1: Foundation
  ├─ Database schema (events, tickets, organizers)
  ├─ Auth (organizer login)
  └─ Deploy basic API

Week 2: Core MVP (Event creation)
  ├─ Event management UI
  ├─ CRUD operations
  └─ Organizer dashboard

Week 3: Ticket purchase flow
  ├─ Ticket listing
  ├─ Payment integration (from 10-integrations.md)
  ├─ Email confirmation

Week 4: Polish + testing
  ├─ Search (from should-have)
  ├─ Error handling
  ├─ User testing
  └─ v1 Launch
```

**Key:** Project-manager reads the spec, doesn't invent timelines.

---

## Integration with idea-clarifier

**These skills work together:**

1. **idea-clarifier** generates `docs/product/` spec (14 files)
2. **project-manager** reads that spec and creates the plan

**You should:**
- Run `/idea-clarifier` first (creates spec)
- Validate/approve the spec (make changes if needed)
- Run `/project-manager` second (creates roadmap)
- Start coding based on the plan

**Don't:**
- Skip idea-clarifier (no spec = vague plan)
- Modify the plan without updating the spec
- Add features outside the MVP scope without updating `03-mvp-scope.md`

---

## Weekly Review Process

Every Friday (buffer day):

1. **Review progress** against this week's plan
2. **Update `docs/product/`** if spec changed
3. **Reprioritize** for next week in `project-manager` plan
4. **Commit** changes to both docs and code

```bash
# If spec changed
git add docs/product/
git commit -m "docs: update spec based on week 1 feedback"

# Then replan
/project-manager  # Adjust weeks 2-4 based on progress
```

---

## Tools for Solo Builders

- **docs/product/** (generated by idea-clarifier) — Source of truth
- **GitHub Issues**: Backlog from spec
- **Notion**: Weekly review template
- **Your code**: Implementation matches the spec

The tool matters less than **maintaining alignment between spec and code**.
