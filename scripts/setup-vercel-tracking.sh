#!/bin/bash

# Setup script for Vercel deployment tracking and alerts
# This script helps configure the necessary secrets and settings

echo "🚀 Vercel Deployment Tracking Setup"
echo "======================================"
echo ""

echo "This setup requires:"
echo "1. Vercel account with projects deployed"
echo "2. GitHub repository access"
echo "3. Admin permissions on both platforms"
echo ""

# Check for GitHub CLI
if ! command -v gh &> /dev/null; then
  echo "❌ GitHub CLI (gh) not found"
  echo "Please install it: https://cli.github.com/"
  exit 1
fi

# Check if logged into GitHub
if ! gh auth status &> /dev/null; then
  echo "❌ Not logged into GitHub CLI"
  echo "Run: gh auth login"
  exit 1
fi

echo "✅ GitHub CLI authenticated"
echo ""

# Get repository info
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || echo "")

if [ -z "$REPO" ]; then
  echo "❌ Could not detect repository"
  echo "Make sure you're in a git repository with GitHub remote"
  exit 1
fi

echo "📦 Repository: $REPO"
echo ""

# Check for existing secrets
echo "🔍 Checking existing secrets..."
EXISTING_SECRETS=$(gh secret list 2>/dev/null | grep -E "VERCEL_" || echo "")

if [ -n "$EXISTING_SECRETS" ]; then
  echo "Found existing Vercel secrets:"
  echo "$EXISTING_SECRETS"
  echo ""
  read -p "Do you want to update them? (y/N): " UPDATE
  if [[ ! $UPDATE =~ ^[Yy]$ ]]; then
    echo "Skipping secret setup"
    exit 0
  fi
fi

echo ""
echo "📋 Steps to configure Vercel deployment tracking:"
echo ""

echo "1. Get Vercel API Token:"
echo "   - Go to: https://vercel.com/account/tokens"
echo "   - Create new token"
echo "   - Name: 'GitHub Actions Deployment Tracking'"
echo "   - Copy the token"
echo ""

read -s -p "Paste your Vercel token (hidden): " VERCEL_TOKEN
echo ""

if [ -n "$VERCEL_TOKEN" ]; then
  echo "Setting VERCEL_TOKEN..."
  gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN" 2>/dev/null || echo "Failed to set VERCEL_TOKEN"
fi

echo ""
echo "2. Get Vercel Organization ID:"
echo "   - Go to your Vercel team/organization"
echo "   - Look at the URL: vercel.com/{org-name}"
echo "   - Or check Settings → General"
echo ""

read -p "Paste your Vercel Organization ID: " VERCEL_ORG_ID
echo ""

if [ -n "$VERCEL_ORG_ID" ]; then
  echo "Setting VERCEL_ORG_ID..."
  gh secret set VERCEL_ORG_ID --body "$VERCEL_ORG_ID" 2>/dev/null || echo "Failed to set VERCEL_ORG_ID"
fi

echo ""
echo "3. Get Project IDs for each app:"
echo "   For each app (web, app, api, storybook):"
echo "   - Go to Project Settings → General"
echo "   - Copy 'Project ID'"
echo ""

APPS=("web" "app" "api" "storybook")

for app in "${APPS[@]}"; do
  read -p "Project ID for apps/$app (or press Enter to skip): " PROJECT_ID
  
  if [ -n "$PROJECT_ID" ]; then
    SECRET_NAME="VERCEL_PROJECT_ID_${app^^}"
    echo "Setting $SECRET_NAME..."
    gh secret set "$SECRET_NAME" --body "$PROJECT_ID" 2>/dev/null || echo "Failed to set $SECRET_NAME"
  fi
  echo ""
done

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Push to main branch to test the workflow"
echo "2. Check GitHub Actions tab for 'Vercel Deployment Tracking'"
echo "3. Verify deployment data appears in workflow summaries"
echo ""
echo "Optional: Set up Slack/Discord notifications:"
echo "- Add SLACK_WEBHOOK_URL or DISCORD_WEBHOOK_URL secret"
echo "- Workflow will send deployment notifications"
