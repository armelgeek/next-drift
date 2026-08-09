# /vercel-setup — Configure Vercel + GitHub for Auto-Deploy

Fully automated CI/CD setup: creates Vercel projects, extracts credentials, adds GitHub Secrets, shows final instructions.

## Usage

```
/vercel-setup
```

## What it does

1. ✅ Detects Vercel projects (auto)
2. ✅ Extracts Project IDs & ORG ID (auto)
3. ✅ Prompts for VERCEL_TOKEN only
4. ✅ Adds all 5 GitHub Secrets (auto)
5. ✅ Shows environment variable setup (manual, 5 min)
6. ✅ Pipeline ready to deploy on push

## Example

```bash
$ /vercel-setup

📋 Extracting Vercel project information...
✅ Found:
   ORG_ID: team_wwl8joXyLSioTgwXOA0oZq6x
   WEB: prj_RTXjwo8xOJlIPaeJV2Ec5qEi1wtA
   APP: prj_HorISnu0MGK0BFTLDXO7Qtzf6WVY
   API: prj_ErcLqBT2XO0mMtzrlXx94apifZG8

🔑 Getting VERCEL_TOKEN...
Paste it below:
[user enters token]

🔐 Adding GitHub Secrets...
   ✅ VERCEL_TOKEN
   ✅ VERCEL_ORG_ID
   ✅ VERCEL_PROJECT_ID_WEB
   ✅ VERCEL_PROJECT_ID_APP
   ✅ VERCEL_PROJECT_ID_API

📌 Next: Add env vars in Vercel console (5 min)
```

## Prerequisites

- Vercel projects created: `vercel --prod --cwd apps/[web|app|api]`
- Vercel CLI installed: `npm i -g vercel`
- GitHub CLI installed: `brew install gh` (Mac) or `https://cli.github.com`
- Vercel account with teams access

## What gets configured

**GitHub Secrets** (automated):
- `VERCEL_TOKEN` — from vercel.com/account/tokens
- `VERCEL_ORG_ID` — auto-extracted
- `VERCEL_PROJECT_ID_WEB` — auto-extracted
- `VERCEL_PROJECT_ID_APP` — auto-extracted
- `VERCEL_PROJECT_ID_API` — auto-extracted

**Vercel Environment Variables** (manual, 5 min):
- Web project: NEXT_PUBLIC_* URLs
- App project: database, API keys (Anthropic, Stripe, etc.)
- API project: same as App, no NEXT_PUBLIC_*

See `.claude/VERCEL-DEPLOYMENT.md` for full env var list.

## Result

✨ **One-click auto-deploy pipeline:**

```
git push main → GitHub CI (lint/test/build) → Vercel Deploy (3 apps)
```

All 3 apps deploy in parallel to production.

## Troubleshooting

**"Vercel projects not found"**
→ Run first:
```bash
cd apps/web && vercel --prod
cd apps/app && vercel --prod
cd apps/api && vercel --prod
```

**"GitHub CLI not found"**
→ Install: `https://cli.github.com`

**"VERCEL_TOKEN invalid"**
→ Create new at: `https://vercel.com/account/tokens`

---

**After setup:** Push to main to trigger first deployment.
