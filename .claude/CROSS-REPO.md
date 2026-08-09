# Cross-Repo Brain Linking

Link brains from multiple projects. Share decisions and learnings across repos.

## Concept

You have 3 projects:
1. **drift** (main SaaS app)
2. **drift-mobile** (React Native app)
3. **drift-infra** (infrastructure code)

Each has its own brain.db. Link them to:
- Share auth patterns across web + mobile
- Reuse deployment learnings
- Cross-project search for "how did we solve X?"

## Setup

### List Projects
```bash
/drift:config --list-projects
→ Shows linked projects + their brains
```

### Link Project
```bash
/drift:link-project /path/to/drift-mobile
→ Creates link to drift-mobile/.drift-brain.db
→ Stores path in drift/.drift-brain-links.json

/drift:link-project /path/to/drift-infra
→ Links 2nd project
```

### Links File
```json
{
  "linked_projects": [
    {
      "name": "drift-mobile",
      "path": "/home/user/projects/drift-mobile",
      "brain_path": "/home/user/projects/drift-mobile/.drift-brain.db",
      "status": "connected",
      "last_sync": "2026-08-09T14:30:00Z"
    },
    {
      "name": "drift-infra",
      "path": "/home/user/projects/drift-infra",
      "brain_path": "/home/user/projects/drift-infra/.drift-brain.db",
      "status": "connected",
      "last_sync": "2026-08-09T14:25:00Z"
    }
  ]
}
```

## Cross-Repo Queries

### Search All Brains
```bash
/brain-search --all decisions auth
→ Finds "auth" decisions in:
  - drift brain.db (local)
  - drift-mobile brain.db (linked)
  - drift-infra brain.db (linked)

Results tagged with source:
  [drift] Q: "JWT storage?" A: "httpOnly cookie"
  [drift-mobile] Q: "JWT storage?" A: "Secure storage + keychain"
  [drift-infra] Q: "JWT validation?" A: "OAuth2 middleware"
```

### Search Learnings Across Repos
```bash
/brain-search --all learnings database confidence:>0.8
→ High-confidence database patterns from all projects

[drift] Pattern: "migration-safety"
  Problem: "Schema changes without backfill"
  Solution: "2-step deploy: nullable → data backfill → NOT NULL"
  Confidence: 0.95

[drift-mobile] Pattern: "sqlite-concurrency"
  Problem: "SQLite DB locked errors"
  Solution: "Implement write queue + retry with exponential backoff"
  Confidence: 0.88
```

### Find Best Solution for Domain
```bash
/brain-search --all learnings payment confidence:>0.85
→ Show most reliable payment patterns across all projects

[drift] "webhook-retry" - 0.95 confidence
[drift-infra] "payment-idempotency" - 0.92 confidence
[drift-mobile] "offline-payment-queue" - 0.85 confidence
```

## Sync Strategy

### Periodic Sync
```bash
/drift:brain-sync --all
→ Merges recent decisions/learnings from linked projects
→ Resolves conflicts (prefer higher confidence)
→ Updates last_sync timestamps
```

### Conflict Resolution
If same decision exists in multiple brains:

```
Decision: "Use Stripe or Square for payments?"
  [drift] Answer: "Stripe" (confidence: 0.9, recorded: 2026-08-01)
  [drift-mobile] Answer: "Square" (confidence: 0.7, recorded: 2026-08-05)

Resolution: Keep "Stripe" (higher confidence, newer)
Status: MERGED

Option to review conflict:
  /brain-sync-review "drift:stripe-vs-square"
```

### Selective Sync
```bash
# Sync only from drift-infra
/drift:brain-sync drift-infra

# Sync only database learnings
/drift:brain-sync --domain=database

# Don't sync locked decisions (each project owns its own)
/drift:brain-sync --learning-only
```

## Use Cases

### Auth Shared Across Web + Mobile
```
Decision (locked): "JWT refresh token storage"
Answer: "Secure storage on device, httpOnly cookie on web"

Both drift (web) and drift-mobile can reference this decision:
  Web: /brain-search decisions auth → Uses httpOnly cookie logic
  Mobile: /brain-search decisions auth → Uses Keychain logic
```

### Infrastructure Learnings
```
drift-infra discovers: "Database connection pooling under high load"
Problem: "Connections exhaust, new requests timeout"
Solution: "Implement HikariCP with min/max pool settings"
Confidence: 0.95

When drift (web) hits same issue:
  /brain-search --all learnings database → Finds solution immediately
  Can implement exact same fix without RCA
```

### Testing Patterns
```
All projects share learnings on:
  - "mocking-database-in-tests" 
  - "e2e-test-flakiness"
  - "ci-timeout-prevention"

New project can learn from mistakes of prior projects.
```

## Limitations

- **No automatic sync** (manual trigger)
- **Read-only links** (can query, can't modify linked brains)
- **Local files only** (no cloud sync)
- **Conflicts manual** (show options, user decides)

## Best Practices

1. **Sync before shipping** — Check if linked projects solved this already
2. **Review synced decisions** — Locked decisions stay local, learnings sync
3. **Tag decisions by scope** — "drift-specific" vs "shared-across-projects"
4. **Keep links updated** — Remove links to archived projects

## Configuration

```json
{
  "drift": {
    "brain": {
      "cross_repo": {
        "enabled": true,
        "auto_sync": false,
        "sync_interval": 0,
        "conflict_resolution": "prefer_confidence"
      }
    }
  }
}
```

Enable cross-repo:
```bash
/drift:config cross-repo.enabled true
```

Auto-sync on startup (experimental):
```bash
/drift:config cross-repo.auto-sync true
/drift:config cross-repo.sync-interval 3600  # Every hour
```

## Example: Real Scenario

```
Scenario: New drift-partner (integrations) project needs to build Stripe
Timeline:

1. Create drift-partner brain
   /ship feature "add Stripe integration" 
   → Brain created for drift-partner

2. Link to main drift project
   /drift:link-project /path/to/drift-partner
   → drift brain now sees drift-partner brain

3. Before starting work
   /brain-search --all decisions payment
   → Finds drift's "Stripe webhook retry" decision
   → Finds drift's "Stripe idempotency" learning (confidence 0.95)

4. Build Stripe integration in drift-partner
   → Architect checks linked brains for patterns
   → Reuses high-confidence Stripe learnings
   → Saves 2-3 hours of R&D
   → Cost: 8K tokens instead of 30K

5. After shipping
   /drift:brain-sync drift-partner
   → Merges drift-partner's new learnings
   → Both projects benefit from each other
```

## Future: Cloud Sync

Potential future feature:
```bash
/drift:brain-cloud-sync  # Sync to cloud (requires auth)
/drift:brain-search --remote --all  # Search in cloud
```

Would enable:
- Sharing across team members
- Backup to managed storage
- Search across 20+ team projects
- Compliance-auditable decision trail

Current: Local only, manual sync via file system.

