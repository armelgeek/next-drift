#!/bin/bash

# create-drift-app: Bootstrap a new SaaS project from Drift boilerplate
# Usage: create-drift-app PROJECT_NAME

set -e

if [ -z "$1" ]; then
  echo "Usage: create-drift-app PROJECT_NAME"
  echo "Example: create-drift-app MOOZ"
  exit 1
fi

PROJECT_NAME=$1
PROJECT_SLUG=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]')

echo "🚀 Creating new Drift project: $PROJECT_NAME"

# 1. Clone Drift to new directory
echo "📦 Cloning Drift boilerplate..."
git clone --depth 1 https://github.com/hayzaar/drift.git ../$PROJECT_SLUG
cd ../$PROJECT_SLUG

# 2. Remove .git and initialize new repo
echo "🔄 Initializing git repo..."
rm -rf .git
git init
git config user.email "armelgeek5@gmail.com"
git config user.name "Armel Geek"

# 3. Update package.json with project name
echo "⚙️  Updating package.json..."
sed -i "s/\"name\": \"drift\"/\"name\": \"$PROJECT_SLUG\"/g" package.json
sed -i "s/\"description\": \".*\"/\"description\": \"$PROJECT_NAME SaaS\"/g" package.json

# 4. Create STATUS.md from template
echo "📋 Creating STATUS.md..."
cat > STATUS.md << EOF
# $PROJECT_NAME Status

**Last updated:** $(date +%Y-%m-%d)
**Project:** $PROJECT_NAME
**Stage:** Development

---

## ✅ Done

- ✨ Project initialized from Drift boilerplate

---

## 🔨 In Progress (WIP: 1 max)

- [Your first feature here]

---

## 🚧 Blocked

- None

---

## 📋 Next

1. Setup environment variables (.env)
2. Configure database (Drizzle)
3. Setup auth (Better Auth)
4. Build first feature

---

## 📊 Metrics

- Stage: Early development
- Users: 0

---

## 🔄 Rotation

- Last worked: Today
- Next session: [Schedule]

---

## Notes for next self

This project was bootstrapped from Drift boilerplate. All shared packages (design-system, auth, database) are inherited — customize only what's unique to $PROJECT_NAME.

Any improvements that could benefit other projects → create a PR back to Drift.
EOF

# 5. Install dependencies
echo "📥 Installing dependencies..."
pnpm install

# 6. Create initial commit
echo "💾 Creating initial commit..."
git add -A
git commit -m "chore: Initialize $PROJECT_NAME from Drift boilerplate

- Bootstrapped from Drift
- Ready for development
- All shared packages inherited"

echo ""
echo "✅ Project created: $PROJECT_SLUG"
echo ""
echo "Next steps:"
echo "  cd ../$PROJECT_SLUG"
echo "  cp .env.example .env.local  # Setup environment"
echo "  pnpm dev                    # Start development"
echo ""
echo "Remember:"
echo "  - All shared packages (design-system, auth, etc) come from Drift"
echo "  - Customize only your unique features"
echo "  - Share improvements back to Drift"
echo ""
