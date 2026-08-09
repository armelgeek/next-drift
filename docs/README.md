# Drift Brain Documentation

Complete reference for all agents, skills, and concepts.

## Quick Navigation

- **[AGENTS](AGENTS/)** — 11 specialized agents
- **[SKILLS](SKILLS/)** — 21 user-facing skills
- **[CONCEPTS](CONCEPTS/)** — Architecture, patterns, theories
- **[GUIDES](GUIDES/)** — How-to's, workflows, examples

## Quick Start

```bash
# 1. Initialize brain
sh .claude/init-brain.sh

# 2. Ship your first feature
/ship feature "add dark mode"

# 3. Watch it execute (automatic, zero interruptions)
```

## What is Drift Brain?

A self-learning AI development system:
- Reads your code structure
- Plans features step-by-step
- Executes autonomously
- Learns from every session
- Ships end-to-end

## Architecture

```
User: /ship feature "..."
    ↓
Auto-Router → detect intent
    ↓
Pipeline (auto-invoked):
  clarify → scenarios → scout → architect → executor → scribe
    ↓
Brain learns + feature ships
```

## 11 Agents

| Agent | Role |
|-------|------|
| **drift-scout** | Find all relevant files |
| **drift-clarify** | Ask clarifying questions |
| **drift-scenarios** | Analyze all paths |
| **drift-architect** | Create task plan |
| **drift-builder** | Implement tasks |
| **drift-guide** | Validate commits |
| **drift-designer** | Code architecture |
| **drift-refactor** | Safe refactoring |
| **drift-critic** | Code review |
| **drift-scribe** | Extract learnings |
| **drift-executor** | Loop until complete |

[See AGENTS/ for details](AGENTS/)

## 21 Skills

**Primary**:
- `/ship` — Feature, bug, chore, incident
- `/ship-feature` — New feature
- `/ship-bug` — Fix bug
- `/drift-verify` — Verify coherence

**Development**:
- `/drift-clarify`, `/drift-guide`, `/drift-scenarios`, `/drift-refactor`, `/drift-designer`, `/drift-executor`

**Quality**:
- `/drift-test`, `/drift-security`, `/drift-docs`

**Operations**:
- `/drift-migrate`, `/drift-deploy`, `/drift-debug`

[See SKILLS/ for details](SKILLS/)

## Core Concepts

- **[System Coherence](CONCEPTS/system-coherence.md)** — GitHub ↔ brain.db ↔ git
- **[Task Architecture](CONCEPTS/task-architecture.md)** — Three-layer storage
- **[Auto-Orchestration](CONCEPTS/auto-orchestration.md)** — Event-driven triggers
- **[Learning-Loop](CONCEPTS/learning-loop.md)** — Capture + improve
- **[Wave-Based Parallelism](CONCEPTS/waves.md)** — 2-3x speedup

[See CONCEPTS/ for details](CONCEPTS/)

## How to Use Docs

1. **New?** → [GUIDES/getting-started.md](GUIDES/getting-started.md)
2. **Learn skill?** → [SKILLS/](SKILLS/)
3. **Understand architecture?** → [CONCEPTS/](CONCEPTS/)
4. **Need help?** → [GUIDES/faq.md](GUIDES/faq.md)

---

**Ready?** → `sh .claude/init-brain.sh && /ship feature "your idea"`
