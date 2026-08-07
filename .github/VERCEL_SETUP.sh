#!/bin/bash
# Add Vercel secrets to GitHub for CI/CD deployment

set -e

echo "🔐 Vercel GitHub Secrets Setup"
echo "=============================="
echo ""
echo "This script adds Vercel credentials to GitHub Secrets."
echo "Use after creating Vercel projects with: vercel --prod --cwd apps/[web|app|api]"
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
  echo "❌ GitHub CLI (gh) not installed"
  echo "   Install from: https://cli.github.com"
  exit 1
fi

# Prompt for credentials
echo "1️⃣  Get your VERCEL_TOKEN:"
echo "   https://vercel.com/account/tokens"
echo ""
read -p "Paste VERCEL_TOKEN: " VERCEL_TOKEN

if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ Token cannot be empty"
  exit 1
fi

echo ""
echo "2️⃣  Get Vercel credentials:"
echo "   - ORG_ID: From .vercel/project.json (orgId field) after deploying"
echo "   - PROJECT_IDs: From .vercel/project.json (projectId field) for each app"
echo ""
read -p "VERCEL_ORG_ID (team_...): " VERCEL_ORG_ID
read -p "VERCEL_PROJECT_ID_WEB (prj_...): " VERCEL_PROJECT_ID_WEB
read -p "VERCEL_PROJECT_ID_APP (prj_...): " VERCEL_PROJECT_ID_APP
read -p "VERCEL_PROJECT_ID_API (prj_...): " VERCEL_PROJECT_ID_API

# Validate
if [ -z "$VERCEL_ORG_ID" ] || [ -z "$VERCEL_PROJECT_ID_WEB" ] || [ -z "$VERCEL_PROJECT_ID_APP" ] || [ -z "$VERCEL_PROJECT_ID_API" ]; then
  echo "❌ All credentials required"
  exit 1
fi

# Add secrets
echo ""
echo "3️⃣  Adding secrets to GitHub..."
echo ""

gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN" 2>&1 | tail -1
gh secret set VERCEL_ORG_ID --body "$VERCEL_ORG_ID" 2>&1 | tail -1
gh secret set VERCEL_PROJECT_ID_WEB --body "$VERCEL_PROJECT_ID_WEB" 2>&1 | tail -1
gh secret set VERCEL_PROJECT_ID_APP --body "$VERCEL_PROJECT_ID_APP" 2>&1 | tail -1
gh secret set VERCEL_PROJECT_ID_API --body "$VERCEL_PROJECT_ID_API" 2>&1 | tail -1

echo ""
echo "✅ Secrets added!"
echo ""
echo "4️⃣  Add environment variables in Vercel console at vercel.com for each project"
echo ""
echo "🚀 Auto-deploy enabled! Push to main to trigger deployment"
