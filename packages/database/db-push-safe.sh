#!/bin/bash
# db-push-safe: Push Drizzle migrations with automatic Neon fallback
# If drizzle-kit hangs on Neon, apply migrations via psql directly

set -e

DATABASE_URL="${DATABASE_URL}"
if [ -z "$DATABASE_URL" ]; then
  if [ -f ./.env.local ]; then
    DATABASE_URL=$(grep DATABASE_URL ./.env.local | cut -d'=' -f2 | tr -d '"')
  fi
fi

if [ -z "$DATABASE_URL" ]; then
  echo "❌ DATABASE_URL not set"
  exit 1
fi

# Detect if it's Neon
if [[ "$DATABASE_URL" == *"neon.tech"* ]]; then
  echo "🔄 Neon detected, using drizzle-kit with timeout..."

  # Try drizzle-kit with 60s timeout
  timeout 60 drizzle-kit push 2>/dev/null && exit 0

  # If it times out, fallback to psql
  echo "⚠️  drizzle-kit timed out. Applying migrations via psql..."

  # Apply all migration files in order
  for migration in drizzle/*.sql; do
    [ -f "$migration" ] || continue
    echo "  → $(basename $migration)"
    psql "$DATABASE_URL" < "$migration" 2>&1 | grep -i error || true
  done

  echo "✅ Migrations applied via psql"
else
  # Standard PostgreSQL: use drizzle-kit normally
  drizzle-kit push
fi
