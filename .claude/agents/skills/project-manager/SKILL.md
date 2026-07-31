# Solo Builder Project Planning

Build focused, high-impact projects as a solo developer. Emphasizes shipping fast, iterating on feedback, and avoiding scope creep.

## When to Use This Skill

- Starting new features or projects
- Prioritizing work as a solo dev
- Estimating realistic timelines (for yourself)
- Breaking down work into shippable chunks
- Deciding what's MVP vs. "nice to have"
- Planning iterations based on feedback
- Avoiding burnout through sustainable pace

## Core Concepts

### 1. MVP-First Breakdown (Ship First, Polish Later)

```
Project: User Dashboard
├── MVP (Ship in 1 week)
│   ├── Core data fetch + display
│   ├── Basic filtering
│   └── Deploy to staging
│
├── V1.1 (Ship in 1-2 weeks)
│   ├── Search functionality
│   ├── Better error handling
│   └── Basic analytics
│
└── Nice-to-haves (Iterate on feedback)
    ├── Advanced filtering
    ├── Export to CSV
    └── Custom dashboards
```

Key: Ship MVP first. Get user feedback. Iterate.

### 2. Weekly Milestones (Pace Yourself)

```
This Week (3-4 days of coding)
├─ Mon-Tue: Core feature
├─ Wed: Polish + tests
├─ Thu: Deploy + gather feedback
└─ Fri: Buffer (meetings, reviews, etc.)

🎯 Weekly Goal: 1 complete, shippable feature
⏰ Sustainable pace: 4 focused days/week, not 7
```

**Why this works for solo:**
- You own the whole feature (no handoffs)
- Feedback loop is fast
- If you break something, you can fix it quickly
- Burnout kills startups — sustainable pace wins

### 3. Time Budget (Your Scarcest Resource)

```markdown
Available: ~20 hours/week of deep work

This month's allocation:
├─ User Dashboard (new feature)    [10h]
├─ Bug fixes + technical debt      [5h]
├─ Customer support / feedback     [3h]
└─ Buffer (unexpected issues)      [2h]

📊 Rule: Never commit more than 20h
⚠️  If a feature takes >20h, break it into 2-week chunks
```

**Your time is the constraint.** Everything else is negotiable.

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

## Example: Planning a Feature as a Solo Builder

**Feature:** Add user notifications

**Week 1 (4 days):**
```
Mon-Tue: Core feature
  ├─ Database schema (notifications table)
  ├─ Backend API (create/fetch/mark-read)
  └─ Basic UI (notification badge)

Wed: Polish + tests
  ├─ Edge cases (delete old notifications)
  ├─ Error handling
  └─ Unit tests for API

Thu: Deploy to staging + gather feedback
  ├─ Deploy to staging
  ├─ Ask 3 beta users for feedback
  └─ Document known issues

Fri: Buffer day (refine based on feedback or prep next week)
```

**What's NOT in MVP:**
- ❌ Email digest of notifications
- ❌ Complex filtering/search
- ❌ Notification preferences UI
- ❌ Real-time sync (WebSocket)

These go in "v1.1" based on user feedback.

---

## Tools for Solo Builders

- **GitHub Issues**: Backlog + sprint planning
- **Notion**: Roadmap + weekly review template
- **Linear**: If you want something lightweight between GitHub + Jira
- **Excalidraw**: Quick sketches of features
- **Your own notes**: Honestly, pen + paper works too

The tool matters less than the **discipline of shipping weekly**.
