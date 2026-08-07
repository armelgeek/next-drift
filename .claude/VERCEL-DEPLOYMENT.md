# Vercel Deployment Setup

## Overview

Drift deploys 3 separate apps to Vercel:
- **Web** (Marketing site, port 3001)
- **App** (Main SaaS, port 3000)
- **API** (Backend server, port 3002)

Each app has its own Vercel project and auto-deploys on push to `main`.

This is the **standard template for all projects** (Drift, CV Optimizer, MOOZ, etc).

## Setup (One-Time)

### 1. Create Vercel Projects

```bash
# For each app (web, app, api), run:
vercel --prod

# Or manually:
# 1. vercel.com → Add New → Project
# 2. Import GitHub → Select repo
# 3. Set Framework: Next.js
# 4. Set Working Directory: apps/web (or apps/app, apps/api)
# 5. Deploy
```

### 2. Get Project IDs

After creating each project:

```bash
vercel projects ls
```

Note the project IDs for web, app, and api.

### 3. Add GitHub Secrets

Go to repo settings → Secrets → New repository secret:

```
VERCEL_TOKEN          → vercel.com/account/tokens
VERCEL_ORG_ID         → From Vercel account URL
VERCEL_PROJECT_ID_WEB → Web project ID
VERCEL_PROJECT_ID_APP → App project ID
VERCEL_PROJECT_ID_API → API project ID
```

### 4. Environment Variables

For each Vercel project, add production environment variables.

**All projects need:**
```
NEXT_PUBLIC_APP_URL=https://your-app-domain
NEXT_PUBLIC_WEB_URL=https://your-web-domain
NEXT_PUBLIC_API_URL=https://your-api-domain
```

**App & API projects additionally need:**
```
DATABASE_URL=postgresql://...neon.tech/...
BETTER_AUTH_SECRET=min-32-chars
STRIPE_SECRET_KEY=sk_live_...
# ... other service keys
```

See `.env.example` for full list.

## Workflows

### CI/CD Pipeline

```
Push to main → GitHub Actions (lint/test) → Vercel Deploy
```

**CI** (`.github/workflows/ci.yml`):
- Lint & Typecheck
- Tests
- Build validation

**Deploy** (`.github/workflows/deploy.yml`):
- Auto-deploys web, app, api in parallel
- Triggered: Push to main/master only

### Manual Deploy

```bash
# Deploy specific app
vercel --prod --cwd apps/web
vercel --prod --cwd apps/app
vercel --prod --cwd apps/api
```

## Configuration Files

### `vercel.json`
- Build/install commands
- Runtime settings (Node.js version)
- Max function duration
- Deployment regions
- Environment variable schema

### `.vercelignore`
- Excludes unnecessary files from deployment
- Speeds up build, reduces bundle size

### `.github/workflows/ci.yml`
- Runs on every PR and push
- Validates build before deploy
- Does NOT trigger deployment

### `.github/workflows/deploy.yml`
- Runs ONLY on push to main
- Requires GitHub secrets configured
- Parallel deployment of all 3 apps

## Monitoring

### View Logs
```bash
vercel logs --follow
```

### Dashboard
- vercel.com → Project → Deployments
- Watch build time, errors, and performance

### Troubleshoot
1. Check GitHub Actions secrets: VERCEL_TOKEN, VERCEL_ORG_ID, IDs
2. View workflow logs: GitHub → Actions → Deploy
3. View Vercel logs: vercel.com → Deployments

## Adding to a New Project

When you create a new project with `create-app.sh`:

1. Copy `.github/workflows/ci.yml` and `deploy.yml` from Drift
2. Copy `vercel.json` and `.vercelignore`
3. Follow Setup steps above (Vercel projects, secrets)
4. Push to main → auto-deploy

---

**Last updated:** 2026-08-07
