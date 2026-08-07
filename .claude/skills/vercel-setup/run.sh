#!/bin/bash
# /vercel-setup skill — Automated Vercel + GitHub configuration

set -e

PROJECT_DIR=$(pwd)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Check dependencies
check_tools() {
  local missing=()

  if ! command -v vercel &> /dev/null; then
    missing+=("vercel")
  fi
  if ! command -v gh &> /dev/null; then
    missing+=("gh (GitHub CLI)")
  fi

  if [ ${#missing[@]} -gt 0 ]; then
    echo "❌ Missing required tools:"
    for tool in "${missing[@]}"; do
      echo "  - $tool"
    done
    echo ""
    echo "Install:"
    echo "  Vercel: npm i -g vercel"
    echo "  GitHub: https://cli.github.com"
    exit 1
  fi
}

# Extract credentials from .vercel/project.json
extract_vercel_info() {
  echo "📋 Extracting Vercel project information..."

  if [ ! -f "apps/web/.vercel/project.json" ]; then
    echo ""
    echo "❌ Vercel projects not found"
    echo ""
    echo "First, deploy each app to Vercel:"
    echo ""
    echo "  cd apps/web && vercel --prod"
    echo "  cd apps/app && vercel --prod"
    echo "  cd apps/api && vercel --prod"
    echo ""
    exit 1
  fi

  PROJECT_ID_WEB=$(cat apps/web/.vercel/project.json 2>/dev/null | grep -oP '(?<="projectId":").*?(?=")' || echo "")
  ORG_ID=$(cat apps/web/.vercel/project.json 2>/dev/null | grep -oP '(?<="orgId":").*?(?=")' || echo "")

  PROJECT_ID_APP=$(cat apps/app/.vercel/project.json 2>/dev/null | grep -oP '(?<="projectId":").*?(?=")' || echo "")
  PROJECT_ID_API=$(cat apps/api/.vercel/project.json 2>/dev/null | grep -oP '(?<="projectId":").*?(?=")' || echo "")

  if [ -z "$PROJECT_ID_WEB" ] || [ -z "$ORG_ID" ]; then
    echo "❌ Could not extract Vercel credentials"
    exit 1
  fi

  echo "✅ Found:"
  echo "   ORG_ID: $ORG_ID"
  echo "   WEB: $PROJECT_ID_WEB"
  echo "   APP: $PROJECT_ID_APP"
  echo "   API: $PROJECT_ID_API"
}

# Get VERCEL_TOKEN interactively
get_vercel_token() {
  echo ""
  echo "🔑 Getting VERCEL_TOKEN..."
  echo ""
  echo "Create one at: https://vercel.com/account/tokens"
  echo "Then paste it below:"
  echo ""

  read -s -p "VERCEL_TOKEN: " VERCEL_TOKEN
  echo ""

  if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Token required"
    exit 1
  fi
}

# Add GitHub secrets
add_github_secrets() {
  echo ""
  echo "🔐 Adding GitHub Secrets..."

  gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN" 2>&1 | tail -1
  echo "   ✅ VERCEL_TOKEN"

  gh secret set VERCEL_ORG_ID --body "$ORG_ID" 2>&1 | tail -1
  echo "   ✅ VERCEL_ORG_ID"

  gh secret set VERCEL_PROJECT_ID_WEB --body "$PROJECT_ID_WEB" 2>&1 | tail -1
  echo "   ✅ VERCEL_PROJECT_ID_WEB"

  gh secret set VERCEL_PROJECT_ID_APP --body "$PROJECT_ID_APP" 2>&1 | tail -1
  echo "   ✅ VERCEL_PROJECT_ID_APP"

  gh secret set VERCEL_PROJECT_ID_API --body "$PROJECT_ID_API" 2>&1 | tail -1
  echo "   ✅ VERCEL_PROJECT_ID_API"
}

# Show final instructions
show_instructions() {
  echo ""
  echo "════════════════════════════════════════════════════════════════"
  echo "✨ GitHub Secrets Configured!"
  echo "════════════════════════════════════════════════════════════════"
  echo ""
  echo "📌 Next Step: Add environment variables to Vercel"
  echo ""
  echo "   Go to: https://vercel.com/dashboard/projects"
  echo ""
  echo "   For each project (web, app, api):"
  echo "   1. Open project Settings"
  echo "   2. Go to Environment Variables"
  echo "   3. Add the required variables"
  echo ""
  echo "   See .claude/VERCEL-DEPLOYMENT.md for the full list"
  echo ""
  echo "════════════════════════════════════════════════════════════════"
  echo "🚀 CI/CD Pipeline Active!"
  echo "════════════════════════════════════════════════════════════════"
  echo ""
  echo "Your deployment workflow is ready:"
  echo ""
  echo "  git push main → GitHub CI → Vercel Deploy (all 3 apps parallel)"
  echo ""
  echo "Try it:"
  echo "  git push origin main"
  echo ""
  echo "Watch deployment at:"
  echo "  https://github.com/$(git remote get-url origin | grep -oP '(?<=github.com/)[^/]+/[^/]+(?=\.git)')/actions"
  echo ""
}

# Main
echo "🚀 Drift - Vercel + GitHub Auto Setup"
echo "======================================"
echo ""

check_tools
extract_vercel_info
get_vercel_token
add_github_secrets
show_instructions

echo "✅ Setup complete!"
