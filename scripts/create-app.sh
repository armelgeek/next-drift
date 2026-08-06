#!/bin/bash

# create-drift-app: Bootstrap a new SaaS project from Drift boilerplate
# Architecture: independent repo + git submodules for shared packages
# Usage: create-drift-app PROJECT_NAME PORT_BASE

set -e

if [ -z "$1" ]; then
  echo "Usage: create-drift-app PROJECT_NAME [PORT_BASE]"
  echo "Example: create-drift-app MOOZ 3000"
  echo ""
  echo "Port base assigns dev ports:"
  echo "  PORT_BASE=3000 → app:3000, web:3001, api:3002"
  echo "  PORT_BASE=4000 → app:4000, web:4001, api:4002"
  exit 1
fi

PROJECT_NAME=$1
PORT_BASE=${2:-3000}
PROJECT_SLUG=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]')
DRIFT_PATH=$(cd "$(dirname "$0")/.." && pwd)

PORT_APP=$PORT_BASE
PORT_WEB=$((PORT_BASE + 1))
PORT_API=$((PORT_BASE + 2))

echo "🚀 Creating new Drift project: $PROJECT_NAME"
echo "   Ports: app=$PORT_APP, web=$PORT_WEB, api=$PORT_API"
echo ""

# 1. Create project directory
PROJECT_DIR="../$PROJECT_SLUG"
if [ -d "$PROJECT_DIR" ]; then
  echo "❌ Directory $PROJECT_DIR already exists"
  exit 1
fi

mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

# 2. Initialize git repo
echo "🔄 Initializing git repository..."
git init
git config user.email "armelgeek5@gmail.com"
git config user.name "Armel Geek"

# 3. Link to Drift (via symlink to the absolute path)
echo "📦 Linking to Drift boilerplate..."
ln -s "$DRIFT_PATH" drift

# 4. Create symlinks for shared packages and skills
echo "🔗 Linking shared packages..."
mkdir -p packages
for pkg in "$DRIFT_PATH"/packages/*; do
  if [ -d "$pkg" ]; then
    pkg_name=$(basename "$pkg")
    ln -s "../drift/packages/$pkg_name" "packages/$pkg_name"
  fi
done

mkdir -p .claude
ln -s ../drift/.claude/skills .claude/skills
ln -s ../drift/.claude/templates .claude/templates

# 5. Create apps directory and populate from templates
echo "📁 Creating apps structure..."
TEMPLATES_PATH="$DRIFT_PATH/scripts/templates"

mkdir -p apps
# Copy app template
cp -r "$TEMPLATES_PATH/app" apps/
# Copy web template
cp -r "$TEMPLATES_PATH/web" apps/
# Copy api template
cp -r "$TEMPLATES_PATH/api" apps/

# 6. Create root package.json (pnpm workspace)
echo "📦 Creating package.json..."
cat > package.json << EOF
{
  "name": "$PROJECT_SLUG",
  "version": "0.1.0",
  "description": "$PROJECT_NAME SaaS",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=9.0.0"
  },
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "test": "turbo test",
    "check": "turbo check",
    "clean": "turbo clean && rm -rf node_modules",
    "db:generate": "pnpm --filter @repo/database db:generate",
    "db:push": "pnpm --filter @repo/database db:push",
    "db:studio": "pnpm --filter @repo/database db:studio"
  },
  "dependencies": {},
  "devDependencies": {
    "turbo": "latest"
  },
  "pnpm": {
    "overrides": {}
  }
}
EOF

# 7. Create pnpm-workspace.yaml
echo "🏢 Creating pnpm workspace..."
cat > pnpm-workspace.yaml << EOF
packages:
  - 'apps/*'
  - 'packages/*'
EOF

# 8. Create turbo.json with port configuration
echo "⚙️  Creating turbo.json..."
cat > turbo.json << EOF
{
  "globalDependencies": [".env.local"],
  "globalEnv": ["PORT", "PORT_WEB", "PORT_API"],
  "pipeline": {
    "dev": {
      "cache": false,
      "env": ["PORT", "PORT_WEB", "PORT_API"],
      "outputs": [".next/**", "dist/**"]
    },
    "build": {
      "outputs": [".next/**", "dist/**", "build/**"],
      "cache": true
    },
    "test": {
      "cache": true
    },
    "check": {
      "cache": true
    }
  }
}
EOF

# 9. Create .env.example and .env.local
echo "🔐 Creating environment files..."
cat > .env.example << EOF
# Database
DATABASE_URL=postgresql://user:password@localhost/drift

# Auth (Better Auth)
BETTER_AUTH_SECRET=your-secret-key-min-32-chars
BETTER_AUTH_URL=http://localhost:\$PORT

# Payments (Stripe)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Resend)
RESEND_TOKEN=re_...

# Analytics (PostHog)
POSTHOG_API_KEY=phc_...

# Frontend URLs
NEXT_PUBLIC_APP_URL=http://localhost:\$PORT
NEXT_PUBLIC_WEB_URL=http://localhost:\$PORT_WEB
EOF

cat > .env.local << EOF
# Development ports
PORT=$PORT_APP
PORT_WEB=$PORT_WEB
PORT_API=$PORT_API

# TODO: Update with your actual credentials
DATABASE_URL=postgresql://user:password@localhost/$PROJECT_SLUG
BETTER_AUTH_SECRET=dev-secret-key-change-in-production-min32chars
BETTER_AUTH_URL=http://localhost:$PORT_APP

NEXT_PUBLIC_APP_URL=http://localhost:$PORT_APP
NEXT_PUBLIC_WEB_URL=http://localhost:$PORT_WEB
EOF

# 10. Create .gitignore
echo "🚫 Creating .gitignore..."
cat > .gitignore << EOF
node_modules/
.next/
dist/
build/
.env
.env.*.local
.DS_Store
*.log
.turbo/
EOF

# 11. Create STATUS.md
echo "📋 Creating STATUS.md..."
cat > STATUS.md << EOF
# $PROJECT_NAME Status

**Last updated:** $(date +%Y-%m-%d)
**Project:** $PROJECT_NAME
**Stage:** Development
**Dev Ports:** app=$PORT_APP, web=$PORT_WEB, api=$PORT_API

---

## ✅ Done

- ✨ Project initialized from Drift boilerplate
- 🔗 Linked to shared Drift packages (database, auth, design-system)

---

## 🔨 In Progress (WIP: 1 max)

- [Your first feature here]

---

## 🚧 Blocked

- None

---

## 📋 Next

1. \`pnpm install\` — Install dependencies
2. Update \`.env.local\` with your credentials
3. \`pnpm db:push\` — Initialize database
4. \`pnpm dev\` — Start development servers
5. Build your first feature

---

## 📊 Metrics

- Stage: Early development
- Users: 0
- MRR: \$0

---

## 🔄 Rotation

- Last worked: Today (init)
- Next session: [Schedule]

---

## Notes for next self

This project was bootstrapped from Drift via git submodules:
- **packages/\*** → linked to drift/packages/ (shared)
- **.claude/skills** → linked to drift/.claude/skills (shared)
- **apps/** → your custom features

Never edit symlinked packages directly. If you improve something in packages, do it in Drift and create a PR there.

### Architecture

- Submodule: drift/ (reference, don't delete)
- Apps: Customize these for $PROJECT_NAME
- Packages: Read-only links to drift/packages
- Skills: Inherited from Drift

EOF

# 12. Create initial git commit
echo "💾 Creating initial commit..."
git add .gitignore package.json pnpm-workspace.yaml turbo.json .env.example .env.local STATUS.md drift
git commit -m "chore: Initialize $PROJECT_NAME from Drift boilerplate

Architecture:
- Symlink: drift/ → $DRIFT_PATH (shared packages & skills)
- Apps: Custom features for $PROJECT_NAME
- Ports: $PORT_APP (app), $PORT_WEB (web), $PORT_API (api)

Never edit symlinked packages directly. Improvements → PR to Drift.

Next:
  pnpm install
  pnpm db:push
  pnpm dev"

echo ""
echo "✅ Project created: $PROJECT_SLUG"
echo ""
echo "📍 Location: $(pwd)"
echo "🔗 Drift reference: drift/ (git submodule)"
echo "🚀 Dev ports: app=$PORT_APP, web=$PORT_WEB, api=$PORT_API"
echo ""
echo "Next steps:"
echo "  pnpm install                    # Install dependencies"
echo "  cp .env.local .env.local       # Update with your secrets"
echo "  pnpm db:push                   # Initialize database"
echo "  pnpm dev                       # Start dev servers"
echo ""
echo "Remember:"
echo "  ✅ Customize: apps/ (your features)"
echo "  🚫 Don't edit: packages/ (symlinks to Drift)"
echo "  📤 Improvements → create PR to Drift"
echo ""
