# Create Drift App

Bootstrap a new SaaS project from Drift in **2 minutes**.  
Architecture: independent repo + git submodules for shared code = **zero duplication**.

## Usage

```bash
./scripts/create-app.sh PROJECT_NAME [PORT_BASE]

# Examples:
./scripts/create-app.sh MOOZ 3000      # Ports: 3000, 3001, 3002
./scripts/create-app.sh Vola 4000      # Ports: 4000, 4001, 4002
./scripts/create-app.sh Visumode 5000  # Ports: 5000, 5001, 5002
```

This will:
1. ✅ Create independent git repo
2. ✅ Add Drift as git submodule (reference, don't copy)
3. ✅ Link shared packages via symlinks (database, auth, design-system)
4. ✅ Create turbo.json with automatic port management
5. ✅ Initialize .env with your ports
6. ✅ Create STATUS.md
7. ✅ Ready to code in 2 minutes

## Architecture

```
Hayzar/
├── drift/                           ← Boilerplate (shared reference)
│   ├── packages/                    ← Shared packages (@repo/*)
│   ├── .claude/skills/              ← Shared CLI skills
│   └── scripts/create-app.sh
│
├── MOOZ/                            ← Independent repo (git submodule + symlinks)
│   ├── drift/                       ← Git submodule (reference only)
│   ├── packages/                    ← Symlinks → drift/packages/
│   │   ├── database → ../drift/packages/database
│   │   ├── auth → ../drift/packages/auth
│   │   └── ...
│   ├── .claude/skills → ../drift/.claude/skills
│   ├── apps/
│   │   ├── app/                     ← Your main SaaS (port 3000)
│   │   ├── web/                     ← Marketing site (port 3001)
│   │   └── api/                     ← API server (port 3002)
│   ├── turbo.json                   ← Automatic port config
│   ├── pnpm-workspace.yaml
│   ├── .env.local                   ← Project-specific secrets
│   └── STATUS.md
│
├── Vola/                            ← Another independent repo
│   ├── drift/                       ← Git submodule
│   ├── packages/ (symlinks)
│   ├── apps/
│   │   ├── app/ (port 4000)
│   │   ├── web/ (port 4001)
│   │   └── api/ (port 4002)
│   └── STATUS.md
│
└── Visumode/                        ← And so on...
```

## Zero Duplication

- **Shared packages** (`@repo/database`, `@repo/auth`, etc) → symlinks to `drift/packages/`
- **Shared skills** (`/ship-feature`, `/scope-cutter`, etc) → symlinks to `drift/.claude/skills`
- **Drift reference** → git submodule (read-only, for tracking improvements)
- **Your code** → only in `apps/`

Edit something in `packages/`? You're editing the symlink, which updates Drift. Create a PR there.

## Port Management (Automatic)

**turbo.json** defines:
```json
{
  "globalEnv": ["PORT", "PORT_WEB", "PORT_API"]
}
```

**.env.local** per project:
```bash
PORT=3000          # MOOZ app
PORT_WEB=3001      # MOOZ marketing
PORT_API=3002      # MOOZ API

# In another terminal:
cd Vola
PORT=4000 PORT_WEB=4001 PORT_API=4002 pnpm dev
```

Or just read from `.env.local` (created by script):
```bash
cd MOOZ
pnpm dev  # Reads .env.local → runs on 3000/3001/3002

cd ../Vola
pnpm dev  # Reads .env.local → runs on 4000/4001/4002
```

## Workflow

### Create a new project

```bash
cd Hayzar
./drift/scripts/create-app.sh MOOZ 3000
cd MOOZ
pnpm install
pnpm db:push
pnpm dev
```

### Develop your features

Only touch `apps/`:
```
MOOZ/apps/app/      ← Your SaaS features
MOOZ/apps/web/      ← Your marketing
MOOZ/apps/api/      ← Your webhooks
```

**Never edit symlinked packages directly.**

### Improve something shared

1. You discover `@repo/auth` needs a fix
2. Check: `cd packages/auth` → you're in `drift/packages/auth`
3. Make the fix in Drift itself (via a separate `drift/` PR)
4. Your project automatically uses the improvement (it's a symlink)
5. Create PR to Drift: `git push origin feature/auth-fix`
6. Drift merges → all projects benefit

### Update Drift

When Drift gets new skills or improvements:

```bash
cd drift
git pull origin main  # Update submodule reference

# All projects automatically see the new skills
/scope-cutter "feature description"  # New skill available
```

## First Steps After create-app

```bash
cd PROJECT_NAME

# 1. Install everything
pnpm install

# 2. Update .env.local with real secrets
# DATABASE_URL, STRIPE_KEY, etc.

# 3. Initialize database
pnpm db:push

# 4. Start development
pnpm dev
# Opens http://localhost:PORT (from .env.local)

# 5. Ship your first feature
/ship-feature "your first feature"
```

## Git Submodules (Don't Panic)

The `drift/` directory is a git submodule. It's safe:

```bash
# See submodule status
git status

# Update submodule to latest Drift
git submodule update --remote

# Commit the submodule reference update
git add .gitmodules drift/
git commit -m "chore: Update Drift submodule"
```

**TL;DR:** Treat `drift/` as read-only. It's just a reference to the boilerplate.

## Key Rules

✅ **Do:**
- Customize `apps/` for your project
- Improve shared packages (they're in Drift)
- PR improvements back to Drift
- Use skills from Drift (they're symlinked)

🚫 **Don't:**
- Delete `drift/` submodule (it's your reference)
- Commit changes to symlinked packages (edit in Drift instead)
- Duplicate packages (they're shared)
- Ignore STATUS.md (context is valuable)

That's it. You have a production-ready SaaS template. Ship it.
