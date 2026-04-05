# v0.0.7 (Sun Apr 05 2026)

#### ⚠️ Pushed to `main`

- Rename code-quality-metrics.yml to code-quality.yml ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

#### Authors: 1

- Oscar Dobson-Brown ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

---

# v0.0.6 (Sun Apr 05 2026)

#### ⚠️ Pushed to `main`

- Split code-quality-metrics into independent jobs for better visibility ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

#### Authors: 1

- Oscar Dobson-Brown ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

---

# v0.0.5 (Sun Apr 05 2026)

#### ⚠️ Pushed to `main`

- Remove redundant workflow jobs to streamline CI ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

#### Authors: 1

- Oscar Dobson-Brown ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

---

# v0.0.4 (Sun Apr 05 2026)

#### ⚠️ Pushed to `main`

- Merge branch 'main' of https://github.com/oscardobsonbrown/next-ship ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: Add all required environment variables to E2E workflow ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

#### Authors: 1

- Oscar Dobson-Brown ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

---

# v0.0.3 (Sun Apr 05 2026)

#### ⚠️ Pushed to `main`

- chore: bump all versions to 0.4.2 ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

#### Authors: 1

- Oscar Dobson-Brown ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

---

# v0.0.2 (Sun Apr 05 2026)

#### ⚠️ Pushed to `main`

- fix: resolve Build System Checks workflow issues ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

#### Authors: 1

- Oscar Dobson-Brown ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

---

# v0.0.1 (Sun Apr 05 2026)

#### 🐛 Bug Fix

- Add CODEOWNERS file defining code review ownership [#2](https://github.com/oscardobsonbrown/next-ship/pull/2) ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Add activity feed API [#1](https://github.com/oscardobsonbrown/next-ship/pull/1) ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

#### ⚠️ Pushed to `main`

- fix(workflows): resolve knip YAML parsing errors in GitHub Actions ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix(bundle-size): replace bc with awk, fix debug secrets step, add proper env vars ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: improve bundle size extraction with debug output and better pattern matching ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: bundle size workflow - replace bc with awk and add error handling ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: use git-tag plugin to avoid API rate limits ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: remove npm plugin to avoid API rate limits ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- chore: force rimraf@6.1.3 via pnpm override to eliminate deprecated rimraf@3 warnings ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- chore: remove @auto-it/first-time-contributor to eliminate deprecated dependency warnings ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- chore: test release workflow ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: correct .autorc config - use releaseType not type, remove noChangelog ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: replace deprecated skipReleaseLabels with new labels config format ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: remove duplicate closing brace in .autorc ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- debug: remove --quiet flag to see actual error output ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: restore correct email address in .autorc ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: remove first-time-contributor plugin to reduce API calls ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: further reduce Auto GitHub API calls and add PAT support ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: disable Auto 'released' plugin to prevent GitHub API rate limit errors ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: resolve basehub type inference issues and lint warnings ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: add documentation, homepage redesign, and npm package metadata ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: update drizzle config to support TEST_DATABASE_URL ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: ensure database schema is pushed before tests run ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: enable database tests when TEST_DATABASE_URL is available ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- chore: add tsx dependency lock file ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: add database seed script ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: add dist/** to build outputs for Turborepo caching ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: skip database tests in CI/VERCEL environments ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: add ^build dependency to test task to fix Vercel build ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat(boundaries): implement Turbo boundaries for monorepo governance ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix(web): add type assertion for BaseHub CMS data in hero component ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix(turbo): remove experimental boundaries to fix build compatibility ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: update turbo to v2.9.3 to support experimental boundaries feature ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: improve readiness analyzer detection for custom implementations ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- revert: remove circuit breaker implementation ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: add circuit breaker pattern for external API resilience ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: add N+1 query detection and code modularization infrastructure ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- revert: remove vercel deployment tracking (handled by vercel natively) ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: add Vercel deployment tracking and alerting infrastructure ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: add L4 observability, compliance, and runbook infrastructure ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: add L4 readiness capabilities - CodeQL, testing, and monitoring infrastructure ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Update owner and contributor details in .autorc ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Add biome.json symlink for tool compatibility ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Add .cursorrules and AGENTS.md with complete tech stack documentation ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Align large file detection thresholds: 500 lines, 10MB across local and CI ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Add CI workflow with large file detection and update pre-commit hooks ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Add pre-commit hooks (husky + lint-staged + ultracite) ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Refine Knip configuration for better accuracy ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Remove unused files and dependencies based on Knip analysis ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Add Knip for detecting unused dependencies and files ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Add comprehensive testing infrastructure with shared @repo/testing package ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- chore: update pnpm-lock.yaml with react-email update and Next.js patch ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: update react-email to 5.2.10 and patch Next.js for email preview compatibility ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Fix studio dev script to use pnpm exec for drizzle-kit ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Fix variable shadowing in sitemap.ts ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- fix: remove Status import from footer after BetterStack removal ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- refactor: remove Arcjet and all references ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- refactor: remove BetterStack observability service ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- refactor: remove Liveblocks collaboration features ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- docs: add comprehensive environment variables setup guide ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- config: replace all Stripe references with Polar.sh in .env.example files ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- docs: remove all language references from README ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- docs: remove English-speaking markets emphasis ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- docs: rewrite README as primary product, not a fork ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- docs: remove Vercel logo from README title ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- docs: update README with modernized stack ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- feat: major modernization sweep - Drizzle, Base UI, Polar.sh, PostHog consolidation ([@oscardobsonbrown](https://github.com/oscardobsonbrown))
- Update page.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Migrate from React-Markdown to Streamdown ([@haydenbleasel](https://github.com/haydenbleasel))
- Update meta.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix min-widths ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove redundant email component ([@haydenbleasel](https://github.com/haydenbleasel))
- Roll back Prisma updates ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #537 ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix broken links in code ([@haydenbleasel](https://github.com/haydenbleasel))
- Add link validation script ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #369 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update api.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #352 ([@haydenbleasel](https://github.com/haydenbleasel))
- Make webhook endpoint names provider agnostic ([@haydenbleasel](https://github.com/haydenbleasel))
- Skip CI builds ([@haydenbleasel](https://github.com/haydenbleasel))
- Build fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #516 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #527 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #543 ([@haydenbleasel](https://github.com/haydenbleasel))
- Revert Clerk keyless change (not ready for prod) ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #544 ([@haydenbleasel](https://github.com/haydenbleasel))
- Misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Update vercel.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Implement Clerk keyless mode ([@haydenbleasel](https://github.com/haydenbleasel))
- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove Prisma client from app ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps except Prisma ([@haydenbleasel](https://github.com/haydenbleasel))
- Update structure.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade shadcn/ui ([@haydenbleasel](https://github.com/haydenbleasel))
- Merge branch 'main' of https://github.com/haydenbleasel/next-forge ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #499 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update shadcn CSS, resolved #438 ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix typo ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #501 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #316 ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix languages ([@haydenbleasel](https://github.com/haydenbleasel))
- For #474 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update overview.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Update next-config.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix client-side posthog implementation ([@haydenbleasel](https://github.com/haydenbleasel))
- Update to pnpm 10 ([@haydenbleasel](https://github.com/haydenbleasel))
- For #367 ([@haydenbleasel](https://github.com/haydenbleasel))
- Compress images ([@haydenbleasel](https://github.com/haydenbleasel))
- Update hypertune.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps, fix lockfiles ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #411 ([@haydenbleasel](https://github.com/haydenbleasel))
- Create supportedPackageManagers const ([@haydenbleasel](https://github.com/haydenbleasel))
- Update initialize.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- For #394 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update website ([@haydenbleasel](https://github.com/haydenbleasel))
- Misc CLI fixes and improvements ([@haydenbleasel](https://github.com/haydenbleasel))
- Move search package to addon ([@haydenbleasel](https://github.com/haydenbleasel))
- Create basic search package ([@haydenbleasel](https://github.com/haydenbleasel))
- Update schema.prisma ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix button hydration issue ([@haydenbleasel](https://github.com/haydenbleasel))
- Redesign CLI with Ora, fix maxBuffer issue on diff ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #394 ([@haydenbleasel](https://github.com/haydenbleasel))
- Simplify run command ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix typo, update workspace config in root package.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove CLI defaults, update docs ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix exists import typo ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #402 ([@haydenbleasel](https://github.com/haydenbleasel))
- Restore notification count ([@haydenbleasel](https://github.com/haydenbleasel))
- Merge provider into models ([@haydenbleasel](https://github.com/haydenbleasel))
- Create models file ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #300 ([@haydenbleasel](https://github.com/haydenbleasel))
- For #389 ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove unused dep ([@haydenbleasel](https://github.com/haydenbleasel))
- Update shadcn/ui ([@haydenbleasel](https://github.com/haydenbleasel))
- for #389 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #390 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #381 ([@haydenbleasel](https://github.com/haydenbleasel))
- Merge commit from fork ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #386 ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove all-contributors ([@haydenbleasel](https://github.com/haydenbleasel))
- Update edgedb.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #378 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update Stripe API version ([@haydenbleasel](https://github.com/haydenbleasel))
- Use keys for DSN ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix vitest command ([@haydenbleasel](https://github.com/haydenbleasel))
- Build out stub doc files, update images ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix usage of VERCEL_PROJECT_PRODUCTION_URL ([@haydenbleasel](https://github.com/haydenbleasel))
- Disable git for create-next-app ([@haydenbleasel](https://github.com/haydenbleasel))
- For #359 ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix format and lint commands ([@haydenbleasel](https://github.com/haydenbleasel))
- Move metabase to addons ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix last typos ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix more typos ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix typos ([@haydenbleasel](https://github.com/haydenbleasel))
- Update better-auth.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Attempt to fix Mintlify image issue ([@haydenbleasel](https://github.com/haydenbleasel))
- Update rate-limiting.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- More images ([@haydenbleasel](https://github.com/haydenbleasel))
- Tailwind devDep needed for production dark mode ([@haydenbleasel](https://github.com/haydenbleasel))
- Update index.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Redesign splash page ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade to Next.js 15.1 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update README.md ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade postcss configurations ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #337 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #338 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #339 ([@haydenbleasel](https://github.com/haydenbleasel))
- Ultracite fixes, for #338 ([@haydenbleasel](https://github.com/haydenbleasel))
- Switch to TUI mode ([@haydenbleasel](https://github.com/haydenbleasel))
- For #333 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update mint.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Start adding documentation images ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix broken links ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix redirects ([@haydenbleasel](https://github.com/haydenbleasel))
- Make Vercel Toolbar optional, for #251 ([@haydenbleasel](https://github.com/haydenbleasel))
- Rename "Recommended Libraries" to "Addons" ([@haydenbleasel](https://github.com/haydenbleasel))
- Add BaseHub as co-author ([@haydenbleasel](https://github.com/haydenbleasel))
- Update ai-chatbot.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Update ai.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Export AI components ([@haydenbleasel](https://github.com/haydenbleasel))
- Update setup.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #322 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update docs ([@haydenbleasel](https://github.com/haydenbleasel))
- For #251 ([@haydenbleasel](https://github.com/haydenbleasel))
- Document CMS environment variable ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade to React 19 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update eslint.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Add bump-ui script and a doc on updates ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Netlify deployment doc ([@haydenbleasel](https://github.com/haydenbleasel))
- Redesign splash page hero ([@haydenbleasel](https://github.com/haydenbleasel))
- Update release.yml ([@haydenbleasel](https://github.com/haydenbleasel))
- Update fonts to match docs ([@haydenbleasel](https://github.com/haydenbleasel))
- Create new "Deploying" folder ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #290 ([@haydenbleasel](https://github.com/haydenbleasel))
- Temporarily revert symlinks due to prod build issue ([@haydenbleasel](https://github.com/haydenbleasel))
- Update svix.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix AI provider snippet ([@haydenbleasel](https://github.com/haydenbleasel))
- Improve AI docs ([@haydenbleasel](https://github.com/haydenbleasel))
- Update .gitignore ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #275 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #199 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #286, resolves #247 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #271 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #272 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #280 ([@haydenbleasel](https://github.com/haydenbleasel))
- Improve Storybook docs ([@haydenbleasel](https://github.com/haydenbleasel))
- Update authors.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Attempt to fix Mintlify images again ([@haydenbleasel](https://github.com/haydenbleasel))
- Temporary Mintlify fix ([@haydenbleasel](https://github.com/haydenbleasel))
- Document header security ([@haydenbleasel](https://github.com/haydenbleasel))
- For #272 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update formatting.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #267 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update faq.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Improve shadcn CLI updating ([@haydenbleasel](https://github.com/haydenbleasel))
- Update package.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #260 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #184 ([@haydenbleasel](https://github.com/haydenbleasel))
- Ultracite fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #139 ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps, simplify DS icons ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix SVIX_TOKEN deploy issue ([@haydenbleasel](https://github.com/haydenbleasel))
- Update deploying.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Vercel marketplace link ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Vercel deploy button ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #238, resolves #234 ([@haydenbleasel](https://github.com/haydenbleasel))
- For #234 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update vitest.config.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- Create pull_request_template.md ([@haydenbleasel](https://github.com/haydenbleasel))
- Update issue templates ([@haydenbleasel](https://github.com/haydenbleasel))
- Expose Clerk components from auth package ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix authors styling ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix author images ([@haydenbleasel](https://github.com/haydenbleasel))
- For #222 ([@haydenbleasel](https://github.com/haydenbleasel))
- Simplify authors data ([@haydenbleasel](https://github.com/haydenbleasel))
- Create CODE_OF_CONDUCT.md ([@haydenbleasel](https://github.com/haydenbleasel))
- Compress icons ([@haydenbleasel](https://github.com/haydenbleasel))
- Responsive fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Add X link ([@haydenbleasel](https://github.com/haydenbleasel))
- Update CONTRIBUTING.md ([@haydenbleasel](https://github.com/haydenbleasel))
- Move security file to github folder ([@haydenbleasel](https://github.com/haydenbleasel))
- Create CONTRIBUTING.md ([@haydenbleasel](https://github.com/haydenbleasel))
- Add socials to homepage ([@haydenbleasel](https://github.com/haydenbleasel))
- Update layout.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Load Geist from Google Fonts ([@haydenbleasel](https://github.com/haydenbleasel))
- Update prisma-postgres.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Create new SEO docs category ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #202 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #201 ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps, add clerk/next to web ([@haydenbleasel](https://github.com/haydenbleasel))
- Update packages.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Merge repo/status into repo/observability ([@haydenbleasel](https://github.com/haydenbleasel))
- Create "Observability" group ([@haydenbleasel](https://github.com/haydenbleasel))
- Break up structure pages ([@haydenbleasel](https://github.com/haydenbleasel))
- Shorten guide names ([@haydenbleasel](https://github.com/haydenbleasel))
- Misc cleanup ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #195 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #193 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update attribution.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Redesign hero ([@haydenbleasel](https://github.com/haydenbleasel))
- Update installer.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Add logo.dev attribution ([@haydenbleasel](https://github.com/haydenbleasel))
- Rework database / orm docs ([@haydenbleasel](https://github.com/haydenbleasel))
- Update security.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Windows support ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #180 ([@haydenbleasel](https://github.com/haydenbleasel))
- For #180 ([@haydenbleasel](https://github.com/haydenbleasel))
- Use latest create-next-app ([@haydenbleasel](https://github.com/haydenbleasel))
- Update setup.sh ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #175 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #185 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #186 ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Apple icons ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #183 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update github-button.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #169 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update index.js ([@haydenbleasel](https://github.com/haydenbleasel))
- Update debugging.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Create sitemap.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Misc fixes, add tooltip to installer copy button ([@haydenbleasel](https://github.com/haydenbleasel))
- Update global.css ([@haydenbleasel](https://github.com/haydenbleasel))
- Minor docs fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- More tiny fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix and update docs fonts ([@haydenbleasel](https://github.com/haydenbleasel))
- Update analytics.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Improve PostHog integration ([@haydenbleasel](https://github.com/haydenbleasel))
- Update flags.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Add package-install remark plugin ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix formatting of PostHog ([@haydenbleasel](https://github.com/haydenbleasel))
- Split error capture and monitoring ([@haydenbleasel](https://github.com/haydenbleasel))
- Add missing status component, improve docs ([@haydenbleasel](https://github.com/haydenbleasel))
- Add zoomable images, misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Run Ultracite ([@haydenbleasel](https://github.com/haydenbleasel))
- Update layout.config.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Update index.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove leftover pscale stuff ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Clerk as remote image pattern ([@haydenbleasel](https://github.com/haydenbleasel))
- Deprecate use of FC ([@haydenbleasel](https://github.com/haydenbleasel))
- Add missing LQIP props ([@haydenbleasel](https://github.com/haydenbleasel))
- Update opengraph images ([@haydenbleasel](https://github.com/haydenbleasel))
- Improve installer ([@haydenbleasel](https://github.com/haydenbleasel))
- Attempt installing auto deps ([@haydenbleasel](https://github.com/haydenbleasel))
- Create release.yml ([@haydenbleasel](https://github.com/haydenbleasel))
- Create .autorc ([@haydenbleasel](https://github.com/haydenbleasel))
- Add globalEnv ([@haydenbleasel](https://github.com/haydenbleasel))
- Update turbo ([@haydenbleasel](https://github.com/haydenbleasel))
- Add package manager ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #100 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #99 ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix ESLint working directories ([@haydenbleasel](https://github.com/haydenbleasel))
- Add custom Moonlight II theme ([@haydenbleasel](https://github.com/haydenbleasel))
- Switch from lqip-modern to sqip ([@haydenbleasel](https://github.com/haydenbleasel))
- Update content ([@haydenbleasel](https://github.com/haydenbleasel))
- Update Sentry implementation ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix dependencies ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade Ultracite ([@haydenbleasel](https://github.com/haydenbleasel))
- Update middleware.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix app and docs urls ([@haydenbleasel](https://github.com/haydenbleasel))
- Delete build.yml ([@haydenbleasel](https://github.com/haydenbleasel))
- Improve homepage, update readme ([@haydenbleasel](https://github.com/haydenbleasel))
- Scaffold docs ([@haydenbleasel](https://github.com/haydenbleasel))
- Create setup script ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove Clerk from web application ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix base url ([@haydenbleasel](https://github.com/haydenbleasel))
- Switch to VERCEL_PROJECT_PRODUCTION_URL ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove hidden and route groups from sitemap ([@haydenbleasel](https://github.com/haydenbleasel))
- Update sidebar.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Update opengraph-image.png ([@haydenbleasel](https://github.com/haydenbleasel))
- Update globals.css ([@haydenbleasel](https://github.com/haydenbleasel))
- Replace Loops with Resend Audiences ([@haydenbleasel](https://github.com/haydenbleasel))
- Add update command ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps, update shadcn/ui ([@haydenbleasel](https://github.com/haydenbleasel))
- Add local Stripe webhook forwarding ([@haydenbleasel](https://github.com/haydenbleasel))
- Add custom proxy for Segment client ([@haydenbleasel](https://github.com/haydenbleasel))
- Update next.config.mjs ([@haydenbleasel](https://github.com/haydenbleasel))
- Update data-security.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Misc legal fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Geist font patch ([@haydenbleasel](https://github.com/haydenbleasel))
- Create license.md ([@haydenbleasel](https://github.com/haydenbleasel))
- Update README ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix metadataBase implementation ([@haydenbleasel](https://github.com/haydenbleasel))
- Create global-error.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Add contentlayer content to sitemap ([@haydenbleasel](https://github.com/haydenbleasel))
- Switch back from Axiom to BetterStack logs ([@haydenbleasel](https://github.com/haydenbleasel))
- Replace Toaster with Sonner ([@haydenbleasel](https://github.com/haydenbleasel))
- Update shadcn/ui, replace Drawer ([@haydenbleasel](https://github.com/haydenbleasel))
- Update settings.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Update build.yml ([@haydenbleasel](https://github.com/haydenbleasel))
- Add missing Vaul exports ([@haydenbleasel](https://github.com/haydenbleasel))
- Implement Vaul, add example into Chat ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #8 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update mode-toggle.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix env vars for build ([@haydenbleasel](https://github.com/haydenbleasel))
- Create build.yml ([@haydenbleasel](https://github.com/haydenbleasel))
- Create dependabot.yml ([@haydenbleasel](https://github.com/haydenbleasel))
- Create FUNDING.yml ([@haydenbleasel](https://github.com/haydenbleasel))
- Create SECURITY.md ([@haydenbleasel](https://github.com/haydenbleasel))
- Update copy ([@haydenbleasel](https://github.com/haydenbleasel))
- Add server-only ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps, fix local builds ([@haydenbleasel](https://github.com/haydenbleasel))
- Update metadata.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- Replace fonts with Geist ([@haydenbleasel](https://github.com/haydenbleasel))
- Create vercel.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Move providers to new folder ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Segment env vars ([@haydenbleasel](https://github.com/haydenbleasel))
- Update README, add graphic ([@haydenbleasel](https://github.com/haydenbleasel))
- Scaffold Stripe webhooks ([@haydenbleasel](https://github.com/haydenbleasel))
- Start working on Clerk webhooks ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Segment packages ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix casing ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Google Analytics ([@haydenbleasel](https://github.com/haydenbleasel))
- Actually fix openGraph image issue ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix OpenGraph image when no custom image is provided ([@haydenbleasel](https://github.com/haydenbleasel))
- Update yarn.lock ([@haydenbleasel](https://github.com/haydenbleasel))
- Update email implementation ([@haydenbleasel](https://github.com/haydenbleasel))
- Update .env.example ([@haydenbleasel](https://github.com/haydenbleasel))
- Replace clsx with twMerge ([@haydenbleasel](https://github.com/haydenbleasel))
- Add postinstall script for Vercel ([@haydenbleasel](https://github.com/haydenbleasel))
- Update tailwind.config.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- Replace @next/font with next/font ([@haydenbleasel](https://github.com/haydenbleasel))
- Add nodemailer for next-auth ([@haydenbleasel](https://github.com/haydenbleasel))
- Add @heroicons/react ([@haydenbleasel](https://github.com/haydenbleasel))
- Update sitemap.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- Add analyze command ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Tailwind Typography ([@haydenbleasel](https://github.com/haydenbleasel))
- Add basic auth system ([@haydenbleasel](https://github.com/haydenbleasel))
- Scaffold next-auth ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Prisma ([@haydenbleasel](https://github.com/haydenbleasel))
- Update tsconfig.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Make font names generic ([@haydenbleasel](https://github.com/haydenbleasel))
- Add handleError function ([@haydenbleasel](https://github.com/haydenbleasel))
- Replace next-sitemap with Next.js metadata ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix deps ([@haydenbleasel](https://github.com/haydenbleasel))
- Add file-based metadata ([@haydenbleasel](https://github.com/haydenbleasel))
- Improve default page design ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Gravity ([@haydenbleasel](https://github.com/haydenbleasel))
- Update Tailwind config ([@haydenbleasel](https://github.com/haydenbleasel))
- Deprecate next-seo for Next.js metadata ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove unused analytics wrapper ([@haydenbleasel](https://github.com/haydenbleasel))
- Remove @vercel/og ([@haydenbleasel](https://github.com/haydenbleasel))
- Add "next.config.mjs" to tsconfig includes ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade to latest Harmony ([@haydenbleasel](https://github.com/haydenbleasel))
- Add next-sitemap ([@haydenbleasel](https://github.com/haydenbleasel))
- Add photo, improve description ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix readme, remove package.json meta ([@haydenbleasel](https://github.com/haydenbleasel))
- Create .env.example ([@haydenbleasel](https://github.com/haydenbleasel))
- Next codemod ([@haydenbleasel](https://github.com/haydenbleasel))
- Flatten directory to use as example app ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Vercel Analytics ([@haydenbleasel](https://github.com/haydenbleasel))
- Add @next/font ([@haydenbleasel](https://github.com/haydenbleasel))
- Add next secure headers ([@haydenbleasel](https://github.com/haydenbleasel))
- Delete scaffolding images ([@haydenbleasel](https://github.com/haydenbleasel))
- Add @vercel/og ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Next-SEO ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Tailwind ([@haydenbleasel](https://github.com/haydenbleasel))
- Scaffold page and head ([@haydenbleasel](https://github.com/haydenbleasel))
- Add tsconfig to root ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Harmony to generator ([@haydenbleasel](https://github.com/haydenbleasel))
- Switch to experimental app dir ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Harmony ([@haydenbleasel](https://github.com/haydenbleasel))
- Scaffold next app with typescript ([@haydenbleasel](https://github.com/haydenbleasel))
- Scaffold NPM module ([@haydenbleasel](https://github.com/haydenbleasel))
- Initial commit ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Oscar Dobson-Brown ([@oscardobsonbrown](https://github.com/oscardobsonbrown))

---

# v5.3.2 (Sat Dec 06 2025)

#### ⚠️ Pushed to `main`

- Update page.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.3.1 (Sat Dec 06 2025)

#### ⚠️ Pushed to `main`

- Update page.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.3.0 (Sat Dec 06 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Dmytro Pletenskyi ([@ph1losof](https://github.com/ph1losof)), for all your work!

#### 🚀 Enhancement

- Update dependencies [#670](https://github.com/vercel/next-ship/pull/670) ([@haydenbleasel](https://github.com/haydenbleasel))

#### 🐛 Bug Fix

- docs(migrations): fixes middleware configuration for better-auth [#667](https://github.com/vercel/next-ship/pull/667) ([@ph1losof](https://github.com/ph1losof) [@haydenbleasel](https://github.com/haydenbleasel))
- fix: update prisma to 7.0.0 and use prisma-client generator [#663](https://github.com/vercel/next-ship/pull/663) ([@ph1losof](https://github.com/ph1losof))

#### Authors: 2

- Dmytro Pletenskyi ([@ph1losof](https://github.com/ph1losof))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.2.4 (Fri Dec 05 2025)

#### 🐛 Bug Fix

- Update packages for React Flight RCE advisory [#669](https://github.com/vercel/next-ship/pull/669) ([@vercel[bot]](https://github.com/vercel[bot]))

#### Authors: 1

- [@vercel[bot]](https://github.com/vercel[bot])

---

# v5.2.3 (Tue Nov 25 2025)

#### 🐛 Bug Fix

- fix: email pkg tsconfig to encompass .ts(x) files [#660](https://github.com/vercel/next-ship/pull/660) ([@karelvuong](https://github.com/karelvuong))

#### Authors: 1

- Karel Vuong ([@karelvuong](https://github.com/karelvuong))

---

# v5.2.2 (Sun Nov 23 2025)

#### ⚠️ Pushed to `main`

- Migrate from React-Markdown to Streamdown ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.2.1 (Mon Oct 27 2025)

#### 🐛 Bug Fix

- Bump deps [#648](https://github.com/vercel/next-ship/pull/648) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.2.0 (Sat Oct 25 2025)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Kuizuo ([@kuizuo](https://github.com/kuizuo))

:heart: Ryan ([@rnwolfe](https://github.com/rnwolfe))

:heart: Lakshya Thakur ([@lakbychance](https://github.com/lakbychance))

#### 🚀 Enhancement

- Use improved colors and font for react-tweet [#599](https://github.com/vercel/next-ship/pull/599) ([@lakbychance](https://github.com/lakbychance) [@haydenbleasel](https://github.com/haydenbleasel))

#### 🐛 Bug Fix

- Update Storybook to the latest version [#645](https://github.com/vercel/next-ship/pull/645) ([@kuizuo](https://github.com/kuizuo))
- fix: Refactor PrismaNeon initialization to use PoolConfig instead of Pool directly [#644](https://github.com/vercel/next-ship/pull/644) ([@rnwolfe](https://github.com/rnwolfe))

#### Authors: 4

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Kuizuo ([@kuizuo](https://github.com/kuizuo))
- Lakshya Thakur ([@lakbychance](https://github.com/lakbychance))
- Ryan ([@rnwolfe](https://github.com/rnwolfe))

---

# v5.1.1 (Wed Oct 08 2025)

#### 🐛 Bug Fix

- Update Analytics package [#640](https://github.com/vercel/next-ship/pull/640) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.1.0 (Tue Oct 07 2025)

#### 🚀 Enhancement

- Update README.md [#639](https://github.com/vercel/next-ship/pull/639) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.0.7 (Tue Oct 07 2025)

#### 🐛 Bug Fix

- 5.1 [#637](https://github.com/vercel/next-ship/pull/637) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.0.6 (Mon Oct 06 2025)

#### 🐛 Bug Fix

- fix: knock provider theme [#566](https://github.com/vercel/next-ship/pull/566) ([@jpvalery](https://github.com/jpvalery) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Jp ([@jpvalery](https://github.com/jpvalery))

---

# v5.0.5 (Mon Oct 06 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, null[@jonathanagustin](https://github.com/jonathanagustin), for all your work!

#### 🐛 Bug Fix

- fix: better dark/light support on unauthenticated [#567](https://github.com/vercel/next-ship/pull/567) ([@jpvalery](https://github.com/jpvalery))
- Fix badge image in Metabase docs [#603](https://github.com/vercel/next-ship/pull/603) ([@matthewhefferon](https://github.com/matthewhefferon))
- fix: add missing --dir flag to email build and export scripts [#620](https://github.com/vercel/next-ship/pull/620) ([@jonathanagustin](https://github.com/jonathanagustin))
- upgrade basehub to v9 [#606](https://github.com/vercel/next-ship/pull/606) ([@julianbenegas](https://github.com/julianbenegas))

#### Authors: 4

- [@jonathanagustin](https://github.com/jonathanagustin)
- Jp ([@jpvalery](https://github.com/jpvalery))
- Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))
- Matthew Hefferon ([@matthewhefferon](https://github.com/matthewhefferon))

---

# v5.0.4 (Tue Jul 15 2025)

#### 🐛 Bug Fix

- Improve Metabase integration instructions [#601](https://github.com/vercel/next-ship/pull/601) ([@matthewhefferon](https://github.com/matthewhefferon))

#### Authors: 1

- Matthew Hefferon ([@matthewhefferon](https://github.com/matthewhefferon))

---

# v5.0.3 (Mon Jul 14 2025)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Karel Vuong ([@karelvuong](https://github.com/karelvuong))

:heart: Choco ([@chocochu](https://github.com/chocochu))

#### 🐛 Bug Fix

- fix: correct google analytics env [#600](https://github.com/vercel/next-ship/pull/600) ([@karelvuong](https://github.com/karelvuong))
- add mobile menu [#574](https://github.com/vercel/next-ship/pull/574) ([@chocochu](https://github.com/chocochu))

#### Authors: 2

- Choco ([@chocochu](https://github.com/chocochu))
- Karel Vuong ([@karelvuong](https://github.com/karelvuong))

---

# v5.0.2 (Thu Jun 05 2025)

#### ⚠️ Pushed to `main`

- Update meta.json ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.0.1 (Mon Jun 02 2025)

#### ⚠️ Pushed to `main`

- Fix min-widths ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v5.0.0 (Mon Jun 02 2025)

#### 💥 Breaking Change

- ▲ [#561](https://github.com/vercel/next-ship/pull/561) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.4.5 (Sun Jun 01 2025)

#### ⚠️ Pushed to `main`

- Remove redundant email component ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.4.4 (Mon May 26 2025)

#### ⚠️ Pushed to `main`

- Roll back Prisma updates ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.4.3 (Mon May 26 2025)

#### ⚠️ Pushed to `main`

- Resolves #537 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.4.2 (Sun May 25 2025)

#### ⚠️ Pushed to `main`

- Fix broken links in code ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.4.1 (Sun May 25 2025)

#### ⚠️ Pushed to `main`

- Add link validation script ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #369 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.4.0 (Sun May 25 2025)

#### 🚀 Enhancement

- Migrate docs and landing page to Fumadocs [#548](https://github.com/haydenbleasel/next-ship/pull/548) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.3.2 (Sun May 25 2025)

#### ⚠️ Pushed to `main`

- Update api.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.3.1 (Sun May 25 2025)

#### ⚠️ Pushed to `main`

- Resolves #352 ([@haydenbleasel](https://github.com/haydenbleasel))
- Make webhook endpoint names provider agnostic ([@haydenbleasel](https://github.com/haydenbleasel))
- Skip CI builds ([@haydenbleasel](https://github.com/haydenbleasel))
- Build fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.3.0 (Sun May 25 2025)

#### 🚀 Enhancement

- Bump @prisma/nextjs-monorepo-workaround-plugin from 6.6.0 to 6.7.0 [#534](https://github.com/haydenbleasel/next-ship/pull/534) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @liveblocks/react from 2.22.3 to 2.24.1 [#536](https://github.com/haydenbleasel/next-ship/pull/536) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🐛 Bug Fix

- Bump @next/third-parties from 15.3.0 to 15.3.1 [#530](https://github.com/haydenbleasel/next-ship/pull/530) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump recharts from 2.15.2 to 2.15.3 [#532](https://github.com/haydenbleasel/next-ship/pull/532) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @radix-ui/react-menubar from 1.1.7 to 1.1.12 [#535](https://github.com/haydenbleasel/next-ship/pull/535) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

# v4.2.16 (Tue May 20 2025)

#### ⚠️ Pushed to `main`

- Resolves #516 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #527 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #543 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.2.15 (Tue May 20 2025)

#### ⚠️ Pushed to `main`

- Revert Clerk keyless change (not ready for prod) ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #544 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.2.14 (Tue May 20 2025)

#### ⚠️ Pushed to `main`

- Misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.2.13 (Tue May 20 2025)

#### ⚠️ Pushed to `main`

- Update vercel.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Implement Clerk keyless mode ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.2.12 (Tue May 20 2025)

#### 🐛 Bug Fix

- fix(web): add missing 'mx-auto' on container in BlogPost page - fix #545 [#547](https://github.com/haydenbleasel/next-ship/pull/547) ([@QuentinFrc](https://github.com/QuentinFrc))

#### Authors: 1

- Quentin ([@QuentinFrc](https://github.com/QuentinFrc))

---

# v4.2.11 (Sun May 18 2025)

#### 🐛 Bug Fix

- fix: language switcher [#541](https://github.com/haydenbleasel/next-ship/pull/541) ([@jpvalery](https://github.com/jpvalery))

#### Authors: 1

- Jp ([@jpvalery](https://github.com/jpvalery))

---

# v4.2.10 (Sat May 10 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Quentin ([@QuentinFrc](https://github.com/QuentinFrc)), for all your work!

#### 🐛 Bug Fix

- Enhanced better-auth migration docs [#542](https://github.com/haydenbleasel/next-ship/pull/542) ([@QuentinFrc](https://github.com/QuentinFrc))

#### Authors: 1

- Quentin ([@QuentinFrc](https://github.com/QuentinFrc))

---

# v4.2.9 (Fri May 09 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Jp ([@jpvalery](https://github.com/jpvalery)), for all your work!

#### 🐛 Bug Fix

- fix: metadataBase [#540](https://github.com/haydenbleasel/next-ship/pull/540) ([@jpvalery](https://github.com/jpvalery) [@haydenbleasel](https://github.com/haydenbleasel))
- fix: add success color variable [#538](https://github.com/haydenbleasel/next-ship/pull/538) ([@jpvalery](https://github.com/jpvalery) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Jp ([@jpvalery](https://github.com/jpvalery))

---

# v4.2.8 (Wed Apr 23 2025)

#### 🐛 Bug Fix

- Update Turborepo documentation link. [#526](https://github.com/haydenbleasel/next-ship/pull/526) ([@anthonyshew](https://github.com/anthonyshew))

#### Authors: 1

- Anthony Shew ([@anthonyshew](https://github.com/anthonyshew))

---

# v4.2.7 (Tue Apr 22 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Uma Shankar ([@maverickdude](https://github.com/maverickdude)), for all your work!

#### 🐛 Bug Fix

- Fix a typo in debugging.mdx [#524](https://github.com/haydenbleasel/next-ship/pull/524) ([@maverickdude](https://github.com/maverickdude))

#### Authors: 1

- Uma Shankar ([@maverickdude](https://github.com/maverickdude))

---

# v4.2.6 (Tue Apr 15 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Jan Kuppens ([@JanKups](https://github.com/JanKups)), for all your work!

#### 🐛 Bug Fix

- Fixed Build fails (Storybook) - fresh install #517 [#520](https://github.com/haydenbleasel/next-ship/pull/520) ([@JanKups](https://github.com/JanKups))

#### Authors: 1

- Jan Kuppens ([@JanKups](https://github.com/JanKups))

---

# v4.2.5 (Mon Apr 14 2025)

#### ⚠️ Pushed to `main`

- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))
- Build fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.2.4 (Mon Apr 14 2025)

#### ⚠️ Pushed to `main`

- Remove Prisma client from app ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps except Prisma ([@haydenbleasel](https://github.com/haydenbleasel))
- Update structure.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade shadcn/ui ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.2.3 (Sun Apr 06 2025)

#### ⚠️ Pushed to `main`

- Merge branch 'main' of https://github.com/haydenbleasel/next-ship ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #499 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update shadcn CSS, resolved #438 ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix typo ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.2.2 (Sun Apr 06 2025)

#### ⚠️ Pushed to `main`

- Resolves #501 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v4.2.1 (Sun Apr 06 2025)

#### 🐛 Bug Fix

- Fixed Issue #500 [#513](https://github.com/haydenbleasel/next-ship/pull/513) ([@mathewlewallen](https://github.com/mathewlewallen) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- mathewlewallen ([@mathewlewallen](https://github.com/mathewlewallen))

---

# v4.2.0 (Wed Apr 02 2025)

#### 🚀 Enhancement

- Bump vitest from 3.0.7 to 3.1.1 [#503](https://github.com/haydenbleasel/next-ship/pull/503) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

# v4.1.0 (Tue Apr 01 2025)

#### 🚀 Enhancement

- Bump shiki from 3.1.0 to 3.2.1 [#504](https://github.com/haydenbleasel/next-ship/pull/504) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

# v4.0.0 (Tue Apr 01 2025)

#### 💥 Breaking Change

- Bump react-email from 3.0.7 to 4.0.2 [#507](https://github.com/haydenbleasel/next-ship/pull/507) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🚀 Enhancement

- Bump @liveblocks/node from 2.20.0 to 2.22.2 [#502](https://github.com/haydenbleasel/next-ship/pull/502) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump react-markdown from 10.0.1 to 10.1.0 [#505](https://github.com/haydenbleasel/next-ship/pull/505) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump fumadocs-core from 15.0.15 to 15.2.1 [#510](https://github.com/haydenbleasel/next-ship/pull/510) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### 🐛 Bug Fix

- Bump @types/node from 22.13.9 to 22.13.14 [#506](https://github.com/haydenbleasel/next-ship/pull/506) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @tailwindcss/postcss from 4.0.12 to 4.0.17 [#508](https://github.com/haydenbleasel/next-ship/pull/508) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @storybook/blocks from 8.6.4 to 8.6.11 [#509](https://github.com/haydenbleasel/next-ship/pull/509) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### ⚠️ Pushed to `main`

- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.3.9 (Tue Mar 25 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, mathewlewallen ([@mathewlewallen](https://github.com/mathewlewallen)), for all your work!

#### 🐛 Bug Fix

- feat: amend internationalization middleware and index. Still uses nex… [#491](https://github.com/haydenbleasel/next-ship/pull/491) ([@mathewlewallen](https://github.com/mathewlewallen) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- mathewlewallen ([@mathewlewallen](https://github.com/mathewlewallen))

---

# v3.3.8 (Wed Mar 19 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Buns Enchantress ([@BunsDev](https://github.com/BunsDev)), for all your work!

#### 🐛 Bug Fix

- fix error: build script in /packages/cms [#492](https://github.com/haydenbleasel/next-ship/pull/492) ([@BunsDev](https://github.com/BunsDev))

#### Authors: 1

- Buns Enchantress ([@BunsDev](https://github.com/BunsDev))

---

# v3.3.7 (Sat Mar 08 2025)

#### ⚠️ Pushed to `main`

- Resolves #316 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.3.6 (Sat Mar 08 2025)

#### 🐛 Bug Fix

- Tailwind 4 [#425](https://github.com/haydenbleasel/next-ship/pull/425) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.3.5 (Sat Mar 08 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, David Bonachera ([@davidbonachera](https://github.com/davidbonachera)), for all your work!

#### 🐛 Bug Fix

- docs: add link to Prisma Database Configuration Guide [#478](https://github.com/haydenbleasel/next-ship/pull/478) ([@haydenbleasel](https://github.com/haydenbleasel) [@davidbonachera](https://github.com/davidbonachera))

#### Authors: 2

- David Bonachera ([@davidbonachera](https://github.com/davidbonachera))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.3.4 (Thu Mar 06 2025)

#### ⚠️ Pushed to `main`

- Fix languages ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.3.3 (Thu Mar 06 2025)

#### 🐛 Bug Fix

- Add more Languine keys [#475](https://github.com/haydenbleasel/next-ship/pull/475) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.3.2 (Thu Mar 06 2025)

#### ⚠️ Pushed to `main`

- For #474 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.3.1 (Wed Mar 05 2025)

#### ⚠️ Pushed to `main`

- Update overview.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.3.0 (Wed Mar 05 2025)

#### 🚀 Enhancement

- Internationalization and Languine [#473](https://github.com/haydenbleasel/next-ship/pull/473) ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Dub [#455](https://github.com/haydenbleasel/next-ship/pull/455) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.28 (Mon Mar 03 2025)

#### 🐛 Bug Fix

- Upgrade deps [#470](https://github.com/haydenbleasel/next-ship/pull/470) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.27 (Wed Feb 26 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Andrés Filoso ([@andresfiloso](https://github.com/andresfiloso)), for all your work!

#### 🐛 Bug Fix

- Add Knock environment variables to .env.example [#457](https://github.com/haydenbleasel/next-ship/pull/457) ([@andresfiloso](https://github.com/andresfiloso))

#### Authors: 1

- Andrés Filoso ([@andresfiloso](https://github.com/andresfiloso))

---

# v3.2.26 (Mon Feb 17 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Justin Barsketis ([@barsketis](https://github.com/barsketis)), for all your work!

#### 🐛 Bug Fix

- Prisma fixes [#452](https://github.com/haydenbleasel/next-ship/pull/452) ([@haydenbleasel](https://github.com/haydenbleasel) [@barsketis](https://github.com/barsketis))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Justin Barsketis ([@barsketis](https://github.com/barsketis))

---

# v3.2.25 (Sun Feb 16 2025)

#### ⚠️ Pushed to `main`

- Update next-config.ts ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.24 (Fri Feb 14 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Dan Billson ([@danbillson](https://github.com/danbillson)), for all your work!

#### 🐛 Bug Fix

- Add 'Switch to Paddle Billing' migration guide [#450](https://github.com/haydenbleasel/next-ship/pull/450) ([@danbillson](https://github.com/danbillson) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Dan Billson ([@danbillson](https://github.com/danbillson))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.23 (Mon Feb 10 2025)

#### ⚠️ Pushed to `main`

- Fix client-side posthog implementation ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.22 (Mon Feb 10 2025)

#### 🐛 Bug Fix

- Upgrade [#447](https://github.com/haydenbleasel/next-ship/pull/447) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.21 (Sun Feb 09 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, YuCheng Chen ([@shamenchens](https://github.com/shamenchens)), for all your work!

#### 🐛 Bug Fix

- feat: Use Link component for sidebar links [#441](https://github.com/haydenbleasel/next-ship/pull/441) ([@shamenchens](https://github.com/shamenchens))

#### ⚠️ Pushed to `main`

- Update to pnpm 10 ([@haydenbleasel](https://github.com/haydenbleasel))

#### 🔩 Dependency Updates

- Bump @storybook/nextjs from 8.5.0 to 8.5.3 [#444](https://github.com/haydenbleasel/next-ship/pull/444) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @radix-ui/react-dropdown-menu from 2.1.5 to 2.1.6 [#445](https://github.com/haydenbleasel/next-ship/pull/445) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump the npm_and_yarn group with 2 updates [#446](https://github.com/haydenbleasel/next-ship/pull/446) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump recharts from 2.15.0 to 2.15.1 [#430](https://github.com/haydenbleasel/next-ship/pull/430) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump chromatic from 11.25.0 to 11.25.2 [#428](https://github.com/haydenbleasel/next-ship/pull/428) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @clerk/themes from 2.2.9 to 2.2.16 [#429](https://github.com/haydenbleasel/next-ship/pull/429) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump require-in-the-middle from 7.4.0 to 7.5.0 [#431](https://github.com/haydenbleasel/next-ship/pull/431) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump turbo from 2.3.3 to 2.4.0 [#432](https://github.com/haydenbleasel/next-ship/pull/432) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @next/bundle-analyzer from 15.1.5 to 15.1.6 [#433](https://github.com/haydenbleasel/next-ship/pull/433) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @radix-ui/react-dropdown-menu from 2.1.4 to 2.1.5 [#435](https://github.com/haydenbleasel/next-ship/pull/435) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump basehub from 8.1.1 to 8.1.9 [#436](https://github.com/haydenbleasel/next-ship/pull/436) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @prisma/client from 6.2.1 to 6.3.0 [#437](https://github.com/haydenbleasel/next-ship/pull/437) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- YuCheng Chen ([@shamenchens](https://github.com/shamenchens))

---

# v3.2.20 (Mon Feb 03 2025)

#### ⚠️ Pushed to `main`

- For #367 ([@haydenbleasel](https://github.com/haydenbleasel))

#### 🔩 Dependency Updates

- Bump the npm_and_yarn group with 2 updates [#423](https://github.com/haydenbleasel/next-ship/pull/423) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.19 (Tue Jan 28 2025)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Michal Bock ([@SpeedyCoder](https://github.com/SpeedyCoder))

:heart: Miraan Tabrez ([@miraan](https://github.com/miraan))

#### 🐛 Bug Fix

- Add 'Switch to Hypertune' migration guide [#422](https://github.com/haydenbleasel/next-ship/pull/422) ([@SpeedyCoder](https://github.com/SpeedyCoder) [@miraan](https://github.com/miraan))

#### ⚠️ Pushed to `main`

- Compress images ([@haydenbleasel](https://github.com/haydenbleasel))
- Update hypertune.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 3

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Michal Bock ([@SpeedyCoder](https://github.com/SpeedyCoder))
- Miraan Tabrez ([@miraan](https://github.com/miraan))

---

# v3.2.18 (Tue Jan 21 2025)

#### ⚠️ Pushed to `main`

- Bump deps, fix lockfiles ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.17 (Tue Jan 21 2025)

#### ⚠️ Pushed to `main`

- Resolves #411 ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.16 (Fri Jan 17 2025)

#### 🐛 Bug Fix

- Enhance CLI command - Update [#406](https://github.com/haydenbleasel/next-ship/pull/406) ([@carvillanueva](https://github.com/carvillanueva) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Carlos Villanueva ([@carvillanueva](https://github.com/carvillanueva))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.15 (Thu Jan 16 2025)

#### ⚠️ Pushed to `main`

- Create supportedPackageManagers const ([@haydenbleasel](https://github.com/haydenbleasel))
- Update initialize.ts ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.14 (Thu Jan 16 2025)

#### ⚠️ Pushed to `main`

- For #394 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.13 (Thu Jan 16 2025)

#### ⚠️ Pushed to `main`

- Update website ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.12 (Thu Jan 16 2025)

#### ⚠️ Pushed to `main`

- Misc CLI fixes and improvements ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.11 (Thu Jan 16 2025)

#### 🐛 Bug Fix

- Upgrade cli [#404](https://github.com/haydenbleasel/next-ship/pull/404) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.10 (Wed Jan 15 2025)

#### ⚠️ Pushed to `main`

- Move search package to addon ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.9 (Wed Jan 15 2025)

#### ⚠️ Pushed to `main`

- Merge branch 'main' of https://github.com/haydenbleasel/next-ship ([@haydenbleasel](https://github.com/haydenbleasel))
- Create basic search package ([@haydenbleasel](https://github.com/haydenbleasel))
- Update schema.prisma ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix button hydration issue ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.8 (Wed Jan 15 2025)

#### ⚠️ Pushed to `main`

- Redesign CLI with Ora, fix maxBuffer issue on diff ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.7 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Fix typo ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.6 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Resolves #394 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.5 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Simplify run command ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.4 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Fix typo, update workspace config in root package.json ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.3 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Remove CLI defaults, update docs ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.2 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Fix exists import typo ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.1 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Resolves #402 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.2.0 (Tue Jan 14 2025)

#### 🚀 Enhancement

- 240 setup cli [#344](https://github.com/haydenbleasel/next-ship/pull/344) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.13 (Tue Jan 14 2025)

#### 🐛 Bug Fix

- add basehub to turbo.json's build outputs, plus reorder toolbar [#401](https://github.com/haydenbleasel/next-ship/pull/401) ([@julianbenegas](https://github.com/julianbenegas) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))

---

# v3.1.12 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Restore notification count ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.11 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Merge provider into models ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.10 (Tue Jan 14 2025)

#### ⚠️ Pushed to `main`

- Create models file ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.9 (Tue Jan 14 2025)

#### 🐛 Bug Fix

- upgrade basehub + hook up legal pages [#400](https://github.com/haydenbleasel/next-ship/pull/400) ([@julianbenegas](https://github.com/julianbenegas))

#### Authors: 1

- Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))

---

# v3.1.8 (Mon Jan 13 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Kuizuo ([@kuizuo](https://github.com/kuizuo)), for all your work!

#### 🐛 Bug Fix

- Imporve document for ESLint configuration [#397](https://github.com/haydenbleasel/next-ship/pull/397) ([@kuizuo](https://github.com/kuizuo) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Kuizuo ([@kuizuo](https://github.com/kuizuo))

---

# v3.1.7 (Sun Jan 12 2025)

#### ⚠️ Pushed to `main`

- Resolves #300 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.6 (Sun Jan 12 2025)

#### ⚠️ Pushed to `main`

- For #389 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.5 (Sun Jan 12 2025)

#### ⚠️ Pushed to `main`

- For #394 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.4 (Sun Jan 12 2025)

#### ⚠️ Pushed to `main`

- For #394 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.3 (Sun Jan 12 2025)

#### 🐛 Bug Fix

- Fix installation for non-pnpm package managers [#395](https://github.com/haydenbleasel/next-ship/pull/395) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.2 (Sun Jan 12 2025)

#### ⚠️ Pushed to `main`

- Fix typo ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.1 (Sun Jan 12 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Carlos Villanueva ([@carvillanueva](https://github.com/carvillanueva)), for all your work!

#### 🐛 Bug Fix

- Adding AI Agent Rules (Cursor + Copilot) [#371](https://github.com/haydenbleasel/next-ship/pull/371) ([@carvillanueva](https://github.com/carvillanueva) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Carlos Villanueva ([@carvillanueva](https://github.com/carvillanueva))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.1.0 (Sun Jan 12 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Jeff Everhart ([@JEverhart383](https://github.com/JEverhart383)), for all your work!

#### 🚀 Enhancement

- Add Notifications [#161](https://github.com/haydenbleasel/next-ship/pull/161) ([@haydenbleasel](https://github.com/haydenbleasel) [@JEverhart383](https://github.com/JEverhart383))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Jeff Everhart ([@JEverhart383](https://github.com/JEverhart383))

---

# v3.0.19 (Thu Jan 09 2025)

#### ⚠️ Pushed to `main`

- Remove unused dep ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.18 (Thu Jan 09 2025)

#### ⚠️ Pushed to `main`

- Update shadcn/ui ([@haydenbleasel](https://github.com/haydenbleasel))

#### 🔩 Dependency Updates

- Bump next from 15.1.3 to 15.1.4 in the npm_and_yarn group [#392](https://github.com/haydenbleasel/next-ship/pull/392) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.17 (Thu Jan 09 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Trevor Pfizenmaier ([@trevorpfiz](https://github.com/trevorpfiz)), for all your work!

#### 🐛 Bug Fix

- Fix: cron jobs must use GET on Vercel [#391](https://github.com/haydenbleasel/next-ship/pull/391) ([@trevorpfiz](https://github.com/trevorpfiz))

#### Authors: 1

- Trevor Pfizenmaier ([@trevorpfiz](https://github.com/trevorpfiz))

---

# v3.0.16 (Thu Jan 09 2025)

#### ⚠️ Pushed to `main`

- for #389 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.15 (Thu Jan 09 2025)

#### ⚠️ Pushed to `main`

- Resolves #390 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.14 (Mon Jan 06 2025)

#### ⚠️ Pushed to `main`

- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.13 (Sun Jan 05 2025)

#### ⚠️ Pushed to `main`

- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.12 (Sat Jan 04 2025)

#### ⚠️ Pushed to `main`

- Resolves #381 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.11 (Sat Jan 04 2025)

#### ⚠️ Pushed to `main`

- Merge commit from fork ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.10 (Sat Jan 04 2025)

#### ⚠️ Pushed to `main`

- Resolves #386 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.9 (Fri Jan 03 2025)

#### ⚠️ Pushed to `main`

- Remove all-contributors ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.8 (Thu Jan 02 2025)

#### ⚠️ Pushed to `main`

- Update edgedb.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.7 (Thu Jan 02 2025)

:tada: This release contains work from a new contributor! :tada:

Thank you, Aleksandra ([@beerose](https://github.com/beerose)), for all your work!

#### 🐛 Bug Fix

- Add EdgeDB migration guide [#383](https://github.com/haydenbleasel/next-ship/pull/383) ([@beerose](https://github.com/beerose) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Aleksandra ([@beerose](https://github.com/beerose))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.5 (Thu Jan 02 2025)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #378 ([@haydenbleasel](https://github.com/haydenbleasel))

#### 🔩 Dependency Updates

- Bump @types/node from 22.9.4 to 22.10.3 [#380](https://github.com/haydenbleasel/next-ship/pull/380) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.4 (Wed Jan 01 2025)

#### ⚠️ Pushed to `main`

- Update Stripe API version ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.3 (Wed Jan 01 2025)

#### ⚠️ Pushed to `main`

- Use keys for DSN ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix vitest command ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.2 (Tue Dec 31 2024)

#### ⚠️ Pushed to `main`

- Build out stub doc files, update images ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.1 (Tue Dec 31 2024)

#### ⚠️ Pushed to `main`

- Fix usage of VERCEL_PROJECT_PRODUCTION_URL ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v3.0.0 (Tue Dec 31 2024)

#### 💥 Breaking Change

- Composable environment variables [#332](https://github.com/haydenbleasel/next-ship/pull/332) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.21.11 (Tue Dec 17 2024)

#### ⚠️ Pushed to `main`

- Disable git for create-next-app ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.21.10 (Tue Dec 17 2024)

#### 🐛 Bug Fix

- Docs - next safe action Addon [#348](https://github.com/haydenbleasel/next-ship/pull/348) ([@pedrocarlo](https://github.com/pedrocarlo) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Pedro Muniz ([@pedrocarlo](https://github.com/pedrocarlo))

---

# v2.21.9 (Tue Dec 17 2024)

#### 🐛 Bug Fix

- add info about getting basehub set up in the intstallation doc [#361](https://github.com/haydenbleasel/next-ship/pull/361) ([@julianbenegas](https://github.com/julianbenegas))

#### Authors: 1

- Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))

---

# v2.21.8 (Sun Dec 15 2024)

#### ⚠️ Pushed to `main`

- For #359 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.21.7 (Fri Dec 13 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Donovan Dikaio ([@dikaio](https://github.com/dikaio)), for all your work!

#### 🐛 Bug Fix

- Fix: This fixes the bun install failure when opting for bun [#355](https://github.com/haydenbleasel/next-ship/pull/355) ([@dikaio](https://github.com/dikaio))

#### Authors: 1

- Donovan Dikaio ([@dikaio](https://github.com/dikaio))

---

# v2.21.6 (Fri Dec 13 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Mike Keating ([@mikerkeating](https://github.com/mikerkeating)), for all your work!

#### 🐛 Bug Fix

- Change Cron to daily to allow vercel hobby projects [#354](https://github.com/haydenbleasel/next-ship/pull/354) ([@mikerkeating](https://github.com/mikerkeating))

#### Authors: 1

- Mike Keating ([@mikerkeating](https://github.com/mikerkeating))

---

# v2.21.5 (Fri Dec 13 2024)

#### ⚠️ Pushed to `main`

- Fix format and lint commands ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Add uploadthing migration guide [#353](https://github.com/haydenbleasel/next-ship/pull/353) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.21.4 (Fri Dec 13 2024)

#### ⚠️ Pushed to `main`

- Move metabase to addons ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.21.3 (Fri Dec 13 2024)

#### ⚠️ Pushed to `main`

- Fix last typos ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix more typos ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix typos ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.21.2 (Fri Dec 13 2024)

#### ⚠️ Pushed to `main`

- Misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Update better-auth.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.21.1 (Thu Dec 12 2024)

#### ⚠️ Pushed to `main`

- Attempt to fix Mintlify image issue ([@haydenbleasel](https://github.com/haydenbleasel))
- Update rate-limiting.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.21.0 (Thu Dec 12 2024)

#### 🚀 Enhancement

- Release 2.21 w/ Rate Limiting package [#349](https://github.com/haydenbleasel/next-ship/pull/349) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.31 (Thu Dec 12 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Fahreddin Özcan ([@fahreddinozcan](https://github.com/fahreddinozcan)), for all your work!

#### 🐛 Bug Fix

- feat: Upstash Redis and Upstash Ratelimit [#328](https://github.com/haydenbleasel/next-ship/pull/328) ([@fahreddinozcan](https://github.com/fahreddinozcan) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Fahreddin Özcan ([@fahreddinozcan](https://github.com/fahreddinozcan))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.30 (Thu Dec 12 2024)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: null[@pedrocarlo](https://github.com/pedrocarlo)

:heart: Simon ([@simon-v-swyftx](https://github.com/simon-v-swyftx))

#### 🐛 Bug Fix

- fix: clean tasks needed to be added to turbo.json [#346](https://github.com/haydenbleasel/next-ship/pull/346) ([@pedrocarlo](https://github.com/pedrocarlo))
- docs: add context to better-auth migration [#347](https://github.com/haydenbleasel/next-ship/pull/347) ([@simon-v-swyftx](https://github.com/simon-v-swyftx))

#### 🔩 Dependency Updates

- Bump zod from 3.24.0 to 3.24.1 in the npm_and_yarn group [#345](https://github.com/haydenbleasel/next-ship/pull/345) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 3

- [@dependabot[bot]](https://github.com/dependabot[bot])
- [@pedrocarlo](https://github.com/pedrocarlo)
- Simon ([@simon-v-swyftx](https://github.com/simon-v-swyftx))

---

# v2.20.29 (Wed Dec 11 2024)

#### ⚠️ Pushed to `main`

- More images ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.28 (Wed Dec 11 2024)

#### ⚠️ Pushed to `main`

- Tailwind devDep needed for production dark mode ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Replace next-secure-headers with Nosecone for security headers [#343](https://github.com/haydenbleasel/next-ship/pull/343) ([@davidmytton](https://github.com/davidmytton) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- David Mytton ([@davidmytton](https://github.com/davidmytton))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.27 (Wed Dec 11 2024)

#### ⚠️ Pushed to `main`

- Update index.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.26 (Wed Dec 11 2024)

#### ⚠️ Pushed to `main`

- Redesign splash page ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.25 (Tue Dec 10 2024)

#### ⚠️ Pushed to `main`

- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade to Next.js 15.1 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.24 (Tue Dec 10 2024)

#### ⚠️ Pushed to `main`

- Update README.md ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.23 (Tue Dec 10 2024)

#### ⚠️ Pushed to `main`

- Upgrade postcss configurations ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.22 (Tue Dec 10 2024)

#### ⚠️ Pushed to `main`

- Resolves #337 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.21 (Tue Dec 10 2024)

#### ⚠️ Pushed to `main`

- Resolves #338 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.20 (Tue Dec 10 2024)

#### 🐛 Bug Fix

- Update Drizzle migration documentation [#341](https://github.com/haydenbleasel/next-ship/pull/341) ([@yamz8](https://github.com/yamz8))

#### Authors: 1

- Yam Catzenelson ([@yamz8](https://github.com/yamz8))

---

# v2.20.19 (Tue Dec 10 2024)

#### ⚠️ Pushed to `main`

- Resolves #339 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.18 (Tue Dec 10 2024)

#### ⚠️ Pushed to `main`

- Ultracite fixes, for #338 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.17 (Tue Dec 10 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, null[@pedrocarlo](https://github.com/pedrocarlo), for all your work!

#### 🐛 Bug Fix

- Feature: Turborepo generator [#334](https://github.com/haydenbleasel/next-ship/pull/334) ([@pedrocarlo](https://github.com/pedrocarlo))

#### ⚠️ Pushed to `main`

- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- [@pedrocarlo](https://github.com/pedrocarlo)
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.16 (Tue Dec 10 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Simon ([@simon-v-swyftx](https://github.com/simon-v-swyftx)), for all your work!

#### 🐛 Bug Fix

- Chore: cleaner git repo with init and update scripts [#336](https://github.com/haydenbleasel/next-ship/pull/336) ([@simon-v-swyftx](https://github.com/simon-v-swyftx))

#### Authors: 1

- Simon ([@simon-v-swyftx](https://github.com/simon-v-swyftx))

---

# v2.20.15 (Tue Dec 10 2024)

#### ⚠️ Pushed to `main`

- Switch to TUI mode ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.14 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- For #333 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.13 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Update mint.json ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.12 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Start adding documentation images ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.11 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Fix broken links ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.10 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Update mint.json ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.9 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Fix redirects ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.8 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Make Vercel Toolbar optional, for #251 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.7 (Mon Dec 09 2024)

#### 🐛 Bug Fix

- Make application security optional [#327](https://github.com/haydenbleasel/next-ship/pull/327) ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Add Lemon Squeezy guide [#331](https://github.com/haydenbleasel/next-ship/pull/331) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.6 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Rename "Recommended Libraries" to "Addons" ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.5 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Add BaseHub as co-author ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Tabs [#330](https://github.com/haydenbleasel/next-ship/pull/330) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.4 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Update ai-chatbot.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Update ai.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Export AI components ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Recipes [#329](https://github.com/haydenbleasel/next-ship/pull/329) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.3 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.2 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Update setup.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.1 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Resolves #322 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.20.0 (Mon Dec 09 2024)

#### 🚀 Enhancement

- New update command [#320](https://github.com/haydenbleasel/next-ship/pull/320) ([@haydenbleasel](https://github.com/haydenbleasel))

#### ⚠️ Pushed to `main`

- Update vercel.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Update docs ([@haydenbleasel](https://github.com/haydenbleasel))
- For #251 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.19.4 (Mon Dec 09 2024)

#### ⚠️ Pushed to `main`

- Update index.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.19.3 (Sun Dec 08 2024)

#### ⚠️ Pushed to `main`

- Document CMS environment variable ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.19.2 (Sun Dec 08 2024)

#### ⚠️ Pushed to `main`

- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))
- Upgrade to React 19 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.19.1 (Sun Dec 08 2024)

#### ⚠️ Pushed to `main`

- Misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.19.0 (Sun Dec 08 2024)

#### 🚀 Enhancement

- New CMS package [#325](https://github.com/haydenbleasel/next-ship/pull/325) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.33 (Sun Dec 08 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Julian Benegas ([@julianbenegas](https://github.com/julianbenegas)), for all your work!

#### 🐛 Bug Fix

- [wip] basehub docs [#219](https://github.com/haydenbleasel/next-ship/pull/219) ([@julianbenegas](https://github.com/julianbenegas) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))

---

# v2.18.32 (Sun Dec 08 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Fuma Nama ([@fuma-nama](https://github.com/fuma-nama)), for all your work!

#### 🐛 Bug Fix

- add Fumadocs guide [#324](https://github.com/haydenbleasel/next-ship/pull/324) ([@fuma-nama](https://github.com/fuma-nama) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Fuma Nama ([@fuma-nama](https://github.com/fuma-nama))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.31 (Sat Dec 07 2024)

#### 🐛 Bug Fix

- Set up storybook tool bar for dark + light mode swap. [#318](https://github.com/haydenbleasel/next-ship/pull/318) ([@Balance8](https://github.com/Balance8))

#### Authors: 1

- Michael Slocum ([@Balance8](https://github.com/Balance8))

---

# v2.18.30 (Thu Dec 05 2024)

#### 🐛 Bug Fix

- Add ESLint migration doc [#291](https://github.com/haydenbleasel/next-ship/pull/291) ([@haydenbleasel](https://github.com/haydenbleasel))

#### ⚠️ Pushed to `main`

- Update eslint.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.29 (Wed Dec 04 2024)

#### ⚠️ Pushed to `main`

- Add bump-ui script and a doc on updates ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.28 (Wed Dec 04 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.27 (Wed Dec 04 2024)

#### ⚠️ Pushed to `main`

- Update mint.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Merge branch 'main' of https://github.com/haydenbleasel/next-ship ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Netlify deployment doc ([@haydenbleasel](https://github.com/haydenbleasel))
- Build fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.26 (Wed Dec 04 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Sergiy Dybskiy ([@sergical](https://github.com/sergical)), for all your work!

#### ⚠️ Pushed to `main`

- Redesign splash page hero ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- [Docs] Supabase database [#312](https://github.com/haydenbleasel/next-ship/pull/312) ([@sergical](https://github.com/sergical) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Sergiy Dybskiy ([@sergical](https://github.com/sergical))

---

# v2.18.25 (Wed Dec 04 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Emmanuel Isenah ([@Armadillidiid](https://github.com/Armadillidiid)), for all your work!

#### 🐛 Bug Fix

- Improve Grammer in Turso Docs [#319](https://github.com/haydenbleasel/next-ship/pull/319) ([@Armadillidiid](https://github.com/Armadillidiid))

#### 🔩 Dependency Updates

- Bump @storybook/react from 8.4.5 to 8.4.6 [#301](https://github.com/haydenbleasel/next-ship/pull/301) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump posthog-node from 4.3.0 to 4.3.1 [#303](https://github.com/haydenbleasel/next-ship/pull/303) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump class-variance-authority from 0.7.0 to 0.7.1 [#302](https://github.com/haydenbleasel/next-ship/pull/302) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump posthog-js from 1.188.0 to 1.194.1 [#304](https://github.com/haydenbleasel/next-ship/pull/304) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @prisma/client from 5.22.0 to 6.0.0 [#305](https://github.com/haydenbleasel/next-ship/pull/305) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @arcjet/next from 1.0.0-alpha.31 to 1.0.0-alpha.33 [#306](https://github.com/haydenbleasel/next-ship/pull/306) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump fumadocs-core from 14.5.4 to 14.5.5 [#307](https://github.com/haydenbleasel/next-ship/pull/307) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump undici from 6.21.0 to 7.0.0 [#308](https://github.com/haydenbleasel/next-ship/pull/308) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump ai from 4.0.4 to 4.0.9 [#309](https://github.com/haydenbleasel/next-ship/pull/309) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- Bump @storybook/addon-onboarding from 8.4.5 to 8.4.6 [#310](https://github.com/haydenbleasel/next-ship/pull/310) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Emmanuel Isenah ([@Armadillidiid](https://github.com/Armadillidiid))

---

# v2.18.24 (Mon Dec 02 2024)

#### ⚠️ Pushed to `main`

- Update release.yml ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.23 (Mon Dec 02 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Michael Slocum ([@Balance8](https://github.com/Balance8)), for all your work!

#### 🐛 Bug Fix

- Set defaults for Shadcn darkmode in Storybook [#311](https://github.com/haydenbleasel/next-ship/pull/311) ([@Balance8](https://github.com/Balance8))

#### Authors: 1

- Michael Slocum ([@Balance8](https://github.com/Balance8))

---

# v2.18.22 (Sat Nov 30 2024)

#### ⚠️ Pushed to `main`

- Update fonts to match docs ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.21 (Fri Nov 29 2024)

#### 🐛 Bug Fix

- fix: Log Arcjet deny reason [#299](https://github.com/haydenbleasel/next-ship/pull/299) ([@davidmytton](https://github.com/davidmytton))

#### Authors: 1

- David Mytton ([@davidmytton](https://github.com/davidmytton))

---

# v2.18.20 (Thu Nov 28 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, DaniEnsi ([@DaniEnsi](https://github.com/DaniEnsi)), for all your work!

#### 🐛 Bug Fix

- feat: added missing imports and fixed speeling [#295](https://github.com/haydenbleasel/next-ship/pull/295) ([@DaniEnsi](https://github.com/DaniEnsi))

#### Authors: 1

- DaniEnsi ([@DaniEnsi](https://github.com/DaniEnsi))

---

# v2.18.19 (Wed Nov 27 2024)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Bereket Engida ([@Bekacru](https://github.com/Bekacru))

:heart: Matthew Hefferon ([@matthewhefferon](https://github.com/matthewhefferon))

#### 🐛 Bug Fix

- docs: add better-auth guide [#294](https://github.com/haydenbleasel/next-ship/pull/294) ([@Bekacru](https://github.com/Bekacru) [@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Added Metabase documentation [#292](https://github.com/haydenbleasel/next-ship/pull/292) ([@matthewhefferon](https://github.com/matthewhefferon) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 3

- Bereket Engida ([@Bekacru](https://github.com/Bekacru))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Matthew Hefferon ([@matthewhefferon](https://github.com/matthewhefferon))

---

# v2.18.18 (Tue Nov 26 2024)

#### ⚠️ Pushed to `main`

- Update ai.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.17 (Tue Nov 26 2024)

#### ⚠️ Pushed to `main`

- Create new "Deploying" folder ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.16 (Tue Nov 26 2024)

#### ⚠️ Pushed to `main`

- Resolves #290 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.15 (Tue Nov 26 2024)

#### ⚠️ Pushed to `main`

- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.14 (Tue Nov 26 2024)

#### ⚠️ Pushed to `main`

- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.13 (Tue Nov 26 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.12 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Temporarily revert symlinks due to prod build issue ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.11 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- For #251 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.10 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- For #251 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.9 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- For #251 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.8 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- For #251 ([@haydenbleasel](https://github.com/haydenbleasel))
- Update svix.ts ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.7 (Mon Nov 25 2024)

#### 🐛 Bug Fix

- feat: Add built-in components for readability [#287](https://github.com/haydenbleasel/next-ship/pull/287) ([@fmerian](https://github.com/fmerian))

#### Authors: 1

- flo merian ([@fmerian](https://github.com/fmerian))

---

# v2.18.6 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Update ai.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix AI provider snippet ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.5 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Improve AI docs ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.4 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Update ai.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.3 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Update mint.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Merge branch 'main' of https://github.com/haydenbleasel/next-ship ([@haydenbleasel](https://github.com/haydenbleasel))
- Update .gitignore ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #275 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #199 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.2 (Mon Nov 25 2024)

#### 🐛 Bug Fix

- Added env variable NEXT_PUBLIC_API_URL [#245](https://github.com/haydenbleasel/next-ship/pull/245) ([@OsoThevenin](https://github.com/OsoThevenin) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Pere Bruy ([@OsoThevenin](https://github.com/OsoThevenin))

---

# v2.18.1 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Resolves #286, resolves #247 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.18.0 (Mon Nov 25 2024)

#### 🚀 Enhancement

- Symlink environment variables [#285](https://github.com/haydenbleasel/next-ship/pull/285) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.17.3 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Merge branch 'main' of https://github.com/haydenbleasel/next-ship ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #271 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #272 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #280 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.17.2 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Improve Storybook docs ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.17.1 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Update mint.json ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.17.0 (Mon Nov 25 2024)

#### 🚀 Enhancement

- Add Storybook [#167](https://github.com/haydenbleasel/next-ship/pull/167) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.17 (Mon Nov 25 2024)

#### ⚠️ Pushed to `main`

- Update mint.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Update authors.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.16 (Sun Nov 24 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Pierangelo Di Pilato ([@pierDipi](https://github.com/pierDipi)), for all your work!

#### 🐛 Bug Fix

- Minor: fix authjs migration secrets creation command [#281](https://github.com/haydenbleasel/next-ship/pull/281) ([@pierDipi](https://github.com/pierDipi))

#### Authors: 1

- Pierangelo Di Pilato ([@pierDipi](https://github.com/pierDipi))

---

# v2.16.15 (Sat Nov 23 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Yanis Vestfalskii ([@yanisneverlies](https://github.com/yanisneverlies)), for all your work!

#### 🐛 Bug Fix

- fix: resolve submenu duplication issues by using index as a key [#278](https://github.com/haydenbleasel/next-ship/pull/278) ([@yanisneverlies](https://github.com/yanisneverlies))

#### Authors: 1

- Yanis Vestfalskii ([@yanisneverlies](https://github.com/yanisneverlies))

---

# v2.16.14 (Sat Nov 23 2024)

#### ⚠️ Pushed to `main`

- Attempt to fix Mintlify images again ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.13 (Sat Nov 23 2024)

#### ⚠️ Pushed to `main`

- Temporary Mintlify fix ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.12 (Thu Nov 21 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Create Auth.js migration guide [#268](https://github.com/haydenbleasel/next-ship/pull/268) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.11 (Wed Nov 20 2024)

#### ⚠️ Pushed to `main`

- Update setup.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.10 (Wed Nov 20 2024)

#### ⚠️ Pushed to `main`

- Update mint.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Document header security ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.9 (Wed Nov 20 2024)

#### ⚠️ Pushed to `main`

- For #272 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.8 (Wed Nov 20 2024)

#### 🐛 Bug Fix

- Add recommended libraries documentation [#270](https://github.com/haydenbleasel/next-ship/pull/270) ([@yamz8](https://github.com/yamz8) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Yam Catzenelson ([@yamz8](https://github.com/yamz8))

---

# v2.16.7 (Wed Nov 20 2024)

#### ⚠️ Pushed to `main`

- Update formatting.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.6 (Tue Nov 19 2024)

#### ⚠️ Pushed to `main`

- Build fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.5 (Tue Nov 19 2024)

#### ⚠️ Pushed to `main`

- Resolves #267 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.4 (Mon Nov 18 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, null[@idkgene](https://github.com/idkgene), for all your work!

#### 🐛 Bug Fix

- VSCode workspace configuration [#253](https://github.com/haydenbleasel/next-ship/pull/253) ([@idkgene](https://github.com/idkgene) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- [@idkgene](https://github.com/idkgene)
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.3 (Mon Nov 18 2024)

#### 🐛 Bug Fix

- Extract testing configuration into repo/testing package [#182](https://github.com/haydenbleasel/next-ship/pull/182) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.2 (Mon Nov 18 2024)

#### ⚠️ Pushed to `main`

- Update setup.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.1 (Mon Nov 18 2024)

#### ⚠️ Pushed to `main`

- Update setup.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.16.0 (Mon Nov 18 2024)

### Release Notes

#### Collaboration ([#249](https://github.com/haydenbleasel/next-ship/pull/249))

- **New Features**
	- Introduced `AvatarStack` and `Cursors` components for enhanced user presence and cursor tracking in collaborative environments.
	- Added a new `CollaborationProvider` component to facilitate real-time collaboration features.
	- Implemented user search functionality within the organization.

- **Improvements**
	- Expanded configuration options with the addition of the `LIVEBLOCKS_SECRET` environment variable across multiple applications.

- **Bug Fixes**
	- Adjusted the `UserButton` styling to ensure it occupies the full width of the sidebar.

- **Chores**
	- Added new dependencies: `@repo/collaboration` and `fuse.js` to the project.
<!-- end of auto-generated comment: release notes by coderabbit.ai -->

---

#### 🚀 Enhancement

- Collaboration [#249](https://github.com/haydenbleasel/next-ship/pull/249) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.15.10 (Sun Nov 17 2024)

#### ⚠️ Pushed to `main`

- Update faq.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.15.9 (Sun Nov 17 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Kaiden Riley ([@krpleo](https://github.com/krpleo)), for all your work!

#### 🐛 Bug Fix

- fix: sidebar collapsible triggers [#256](https://github.com/haydenbleasel/next-ship/pull/256) ([@krpleo](https://github.com/krpleo))

#### ⚠️ Pushed to `main`

- Improve shadcn CLI updating ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Kaiden Riley ([@krpleo](https://github.com/krpleo))

---

# v2.15.8 (Sun Nov 17 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Pere Bruy ([@OsoThevenin](https://github.com/OsoThevenin)), for all your work!

#### 🐛 Bug Fix

- Export PrismaClient in database package [#258](https://github.com/haydenbleasel/next-ship/pull/258) ([@OsoThevenin](https://github.com/OsoThevenin))

#### Authors: 1

- Pere Bruy ([@OsoThevenin](https://github.com/OsoThevenin))

---

# v2.15.7 (Sun Nov 17 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Dade ([@shengdade](https://github.com/shengdade)), for all your work!

#### 🐛 Bug Fix

- Remove duplicate Tailwind utility classes [#255](https://github.com/haydenbleasel/next-ship/pull/255) ([@shengdade](https://github.com/shengdade))

#### ⚠️ Pushed to `main`

- Update package.json ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Dade ([@shengdade](https://github.com/shengdade))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.15.6 (Sun Nov 17 2024)

#### ⚠️ Pushed to `main`

- Resolves #260 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.15.5 (Sat Nov 16 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.15.4 (Sat Nov 16 2024)

#### ⚠️ Pushed to `main`

- Resolves #184 ([@haydenbleasel](https://github.com/haydenbleasel))
- Ultracite fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.15.3 (Sat Nov 16 2024)

#### ⚠️ Pushed to `main`

- Resolves #139 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.15.2 (Sat Nov 16 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Matthew Lewis ([@malewis5](https://github.com/malewis5)), for all your work!

#### 🐛 Bug Fix

- fix: add sheet title for a11y. [#250](https://github.com/haydenbleasel/next-ship/pull/250) ([@malewis5](https://github.com/malewis5) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Matthew Lewis ([@malewis5](https://github.com/malewis5))

---

# v2.15.1 (Sat Nov 16 2024)

#### ⚠️ Pushed to `main`

- Bump deps, simplify DS icons ([@haydenbleasel](https://github.com/haydenbleasel))
- Update shadcn/ui ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.15.0 (Fri Nov 15 2024)

#### 🚀 Enhancement

- Turbo [#170](https://github.com/haydenbleasel/next-ship/pull/170) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.17 (Fri Nov 15 2024)

#### 🐛 Bug Fix

- Add IP geolocation docs [#248](https://github.com/haydenbleasel/next-ship/pull/248) ([@davidmytton](https://github.com/davidmytton))

#### Authors: 1

- David Mytton ([@davidmytton](https://github.com/davidmytton))

---

# v2.14.16 (Fri Nov 15 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Added anti-fraud advice [#237](https://github.com/haydenbleasel/next-ship/pull/237) ([@davidmytton](https://github.com/davidmytton))

#### Authors: 2

- David Mytton ([@davidmytton](https://github.com/davidmytton))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.15 (Fri Nov 15 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Michael Zavattaro ([@mzavattaro](https://github.com/mzavattaro)), for all your work!

#### 🐛 Bug Fix

- Update location of .env file in directory docs [#241](https://github.com/haydenbleasel/next-ship/pull/241) ([@mzavattaro](https://github.com/mzavattaro))

#### Authors: 1

- Michael Zavattaro ([@mzavattaro](https://github.com/mzavattaro))

---

# v2.14.14 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.13 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Fix SVIX_TOKEN deploy issue ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.12 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Update deploying.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.11 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Update deploying.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.10 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Add Vercel marketplace link ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.9 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Add Vercel deploy button ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.8 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Update setup.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.7 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Resolves #238, resolves #234 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.6 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- For #234 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.5 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- For #234 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.4 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- For #234 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.2 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.1 (Thu Nov 14 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Anthony Shew ([@anthonyshew](https://github.com/anthonyshew)), for all your work!

#### 🐛 Bug Fix

- Update `turbo.json` to improve cache hit ratios [#235](https://github.com/haydenbleasel/next-ship/pull/235) ([@anthonyshew](https://github.com/anthonyshew) [@haydenbleasel](https://github.com/haydenbleasel))
- Remove root tsconfig.json [#236](https://github.com/haydenbleasel/next-ship/pull/236) ([@anthonyshew](https://github.com/anthonyshew))

#### Authors: 2

- Anthony Shew ([@anthonyshew](https://github.com/anthonyshew))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.14.0 (Thu Nov 14 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, null[@svix-lucho](https://github.com/svix-lucho), for all your work!

#### 🚀 Enhancement

- Add Svix Webhooks [#212](https://github.com/haydenbleasel/next-ship/pull/212) ([@svix-lucho](https://github.com/svix-lucho) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- [@svix-lucho](https://github.com/svix-lucho)
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.21 (Thu Nov 14 2024)

#### 🐛 Bug Fix

- Adjust Arcjet middleware to allow monitoring & expand docs [#231](https://github.com/haydenbleasel/next-ship/pull/231) ([@davidmytton](https://github.com/davidmytton))

#### Authors: 1

- David Mytton ([@davidmytton](https://github.com/davidmytton))

---

# v2.13.19 (Thu Nov 14 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, David Mytton ([@davidmytton](https://github.com/davidmytton)), for all your work!

#### 🐛 Bug Fix

- List the required accounts in setup [#229](https://github.com/haydenbleasel/next-ship/pull/229) ([@davidmytton](https://github.com/davidmytton))
- Update drizzle.mdx [#230](https://github.com/haydenbleasel/next-ship/pull/230) ([@yamz8](https://github.com/yamz8))

#### Authors: 2

- David Mytton ([@davidmytton](https://github.com/davidmytton))
- Yam Catzenelson ([@yamz8](https://github.com/yamz8))

---

# v2.13.18 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Update vitest.config.ts ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.17 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.16 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Create pull_request_template.md ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.15 (Thu Nov 14 2024)

#### ⚠️ Pushed to `main`

- Update issue templates ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.14 (Wed Nov 13 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.13 (Wed Nov 13 2024)

#### ⚠️ Pushed to `main`

- Expose Clerk components from auth package ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.12 (Wed Nov 13 2024)

#### ⚠️ Pushed to `main`

- Fix authors styling ([@haydenbleasel](https://github.com/haydenbleasel))
- Fix author images ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.11 (Wed Nov 13 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Jamie Barton ([@notrab](https://github.com/notrab)), for all your work!

#### 🐛 Bug Fix

- feat: add turso guide [#226](https://github.com/haydenbleasel/next-ship/pull/226) ([@notrab](https://github.com/notrab) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Jamie Barton ([@notrab](https://github.com/notrab))

---

# v2.13.10 (Wed Nov 13 2024)

#### ⚠️ Pushed to `main`

- For #222 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.9 (Wed Nov 13 2024)

#### ⚠️ Pushed to `main`

- For #222 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.8 (Wed Nov 13 2024)

#### 🐛 Bug Fix

- Finish extracting arcjet package [#221](https://github.com/haydenbleasel/next-ship/pull/221) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.7 (Tue Nov 12 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Christian Leonardo ([@whyleonardo](https://github.com/whyleonardo)), for all your work!

#### 🐛 Bug Fix

- Fix fetch status response error check condition [#217](https://github.com/haydenbleasel/next-ship/pull/217) ([@whyleonardo](https://github.com/whyleonardo))

#### Authors: 1

- Christian Leonardo ([@whyleonardo](https://github.com/whyleonardo))

---

# v2.13.6 (Tue Nov 12 2024)

#### ⚠️ Pushed to `main`

- Misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.5 (Tue Nov 12 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.4 (Tue Nov 12 2024)

#### ⚠️ Pushed to `main`

- Simplify authors data ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.3 (Tue Nov 12 2024)

#### ⚠️ Pushed to `main`

- Create CODE_OF_CONDUCT.md ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.2 (Tue Nov 12 2024)

#### 🐛 Bug Fix

- Update `mint.json` [#216](https://github.com/haydenbleasel/next-ship/pull/216) ([@fmerian](https://github.com/fmerian))

#### Authors: 1

- flo merian ([@fmerian](https://github.com/fmerian))

---

# v2.13.1 (Tue Nov 12 2024)

#### 🐛 Bug Fix

- Add Documentation section to docs [#214](https://github.com/haydenbleasel/next-ship/pull/214) ([@fmerian](https://github.com/fmerian) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- flo merian ([@fmerian](https://github.com/fmerian))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.13.0 (Tue Nov 12 2024)

#### 🚀 Enhancement

- V2.13 [#215](https://github.com/haydenbleasel/next-ship/pull/215) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.19 (Tue Nov 12 2024)

#### 🐛 Bug Fix

- Fix `.font` instructions in docs app [#213](https://github.com/haydenbleasel/next-ship/pull/213) ([@fmerian](https://github.com/fmerian) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- flo merian ([@fmerian](https://github.com/fmerian))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.18 (Mon Nov 11 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.17 (Mon Nov 11 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, jcchrrr ([@jcchrrr](https://github.com/jcchrrr)), for all your work!

#### 🐛 Bug Fix

- fix: vscode settings, tailwind config location [#211](https://github.com/haydenbleasel/next-ship/pull/211) ([@jcchrrr](https://github.com/jcchrrr))

#### Authors: 1

- jcchrrr ([@jcchrrr](https://github.com/jcchrrr))

---

# v2.12.16 (Sun Nov 10 2024)

#### ⚠️ Pushed to `main`

- Compress icons ([@haydenbleasel](https://github.com/haydenbleasel))
- Responsive fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Add X link ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.15 (Sun Nov 10 2024)

#### ⚠️ Pushed to `main`

- Update social.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.14 (Sun Nov 10 2024)

#### ⚠️ Pushed to `main`

- Update CONTRIBUTING.md ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.13 (Sun Nov 10 2024)

#### ⚠️ Pushed to `main`

- Move security file to github folder ([@haydenbleasel](https://github.com/haydenbleasel))
- Create CONTRIBUTING.md ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.12 (Sun Nov 10 2024)

#### 🐛 Bug Fix

- Include database scaffolding step in setup instructions [#208](https://github.com/haydenbleasel/next-ship/pull/208) ([@paulgrieselhuber](https://github.com/paulgrieselhuber))

#### Authors: 1

- Paul Grieselhuber ([@paulgrieselhuber](https://github.com/paulgrieselhuber))

---

# v2.12.11 (Sun Nov 10 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Paul Grieselhuber ([@paulgrieselhuber](https://github.com/paulgrieselhuber)), for all your work!

#### 🐛 Bug Fix

- Include necessary global env vars for turbo.json to allow Vercel builds [#206](https://github.com/haydenbleasel/next-ship/pull/206) ([@paulgrieselhuber](https://github.com/paulgrieselhuber))

#### Authors: 1

- Paul Grieselhuber ([@paulgrieselhuber](https://github.com/paulgrieselhuber))

---

# v2.12.10 (Sun Nov 10 2024)

#### ⚠️ Pushed to `main`

- Merge branch 'main' of https://github.com/haydenbleasel/next-ship ([@haydenbleasel](https://github.com/haydenbleasel))
- Add socials to homepage ([@haydenbleasel](https://github.com/haydenbleasel))
- Update layout.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Load Geist from Google Fonts ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.9 (Sun Nov 10 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, null[@000-KunalPal](https://github.com/000-KunalPal), for all your work!

#### 🐛 Bug Fix

- fix: Remove duplicate "is" in text [#205](https://github.com/haydenbleasel/next-ship/pull/205) ([@000-KunalPal](https://github.com/000-KunalPal))

#### Authors: 1

- [@000-KunalPal](https://github.com/000-KunalPal)

---

# v2.12.8 (Sun Nov 10 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Yam Catzenelson ([@yamz8](https://github.com/yamz8)), for all your work!

#### 🐛 Bug Fix

- Update README.md [#204](https://github.com/haydenbleasel/next-ship/pull/204) ([@yamz8](https://github.com/yamz8) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Yam Catzenelson ([@yamz8](https://github.com/yamz8))

---

# v2.12.7 (Sat Nov 09 2024)

#### ⚠️ Pushed to `main`

- Update prisma-postgres.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Create new SEO docs category ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.6 (Sat Nov 09 2024)

#### ⚠️ Pushed to `main`

- Update pnpm-lock.yaml ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.5 (Sat Nov 09 2024)

#### ⚠️ Pushed to `main`

- Resolves #202 ([@haydenbleasel](https://github.com/haydenbleasel))
- Resolves #201 ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps, add clerk/next to web ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.4 (Sat Nov 09 2024)

#### ⚠️ Pushed to `main`

- Update packages.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.3 (Sat Nov 09 2024)

#### ⚠️ Pushed to `main`

- Merge repo/status into repo/observability ([@haydenbleasel](https://github.com/haydenbleasel))
- Create "Observability" group ([@haydenbleasel](https://github.com/haydenbleasel))
- Break up structure pages ([@haydenbleasel](https://github.com/haydenbleasel))
- Shorten guide names ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.2 (Sat Nov 09 2024)

#### ⚠️ Pushed to `main`

- Fix broken links ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.1 (Sat Nov 09 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, flo merian ([@fmerian](https://github.com/fmerian)), for all your work!

#### ⚠️ Pushed to `main`

- Misc cleanup ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Switch docs to Mintlify [#197](https://github.com/haydenbleasel/next-ship/pull/197) ([@fmerian](https://github.com/fmerian) [@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- flo merian ([@fmerian](https://github.com/fmerian))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.12.0 (Sat Nov 09 2024)

#### 🚀 Enhancement

- 198 improve package isolation [#200](https://github.com/haydenbleasel/next-ship/pull/200) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.11.7 (Thu Nov 07 2024)

#### ⚠️ Pushed to `main`

- Resolves #195 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.11.6 (Thu Nov 07 2024)

#### ⚠️ Pushed to `main`

- Resolves #193 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.11.5 (Thu Nov 07 2024)

#### ⚠️ Pushed to `main`

- Update attribution.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.11.4 (Thu Nov 07 2024)

#### ⚠️ Pushed to `main`

- Merge branch 'main' of https://github.com/haydenbleasel/next-ship ([@haydenbleasel](https://github.com/haydenbleasel))
- Redesign hero ([@haydenbleasel](https://github.com/haydenbleasel))
- Update installer.tsx ([@haydenbleasel](https://github.com/haydenbleasel))
- Add logo.dev attribution ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.11.3 (Thu Nov 07 2024)

#### ⚠️ Pushed to `main`

- Rework database / orm docs ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.11.1 (Thu Nov 07 2024)

#### ⚠️ Pushed to `main`

- Update security.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Add Windows support ([@haydenbleasel](https://github.com/haydenbleasel))

#### 📝 Documentation

- Co-author: Drizzle [#168](https://github.com/haydenbleasel/next-ship/pull/168) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.11.0 (Thu Nov 07 2024)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Kaique da Silva ([@ktfth](https://github.com/ktfth))

:heart: David Mytton ([@davidmytton](https://github.com/davidmytton))

:heart: Nikolas ([@nikolasburk](https://github.com/nikolasburk))

#### 🚀 Enhancement

- feat: Add Arcjet security [#187](https://github.com/haydenbleasel/next-ship/pull/187) ([@davidmytton](https://github.com/davidmytton) [@haydenbleasel](https://github.com/haydenbleasel))

#### 🐛 Bug Fix

- chore(windows_setup): add windows setup script [#196](https://github.com/haydenbleasel/next-ship/pull/196) ([@ktfth](https://github.com/ktfth))

#### 📝 Documentation

- add docs for switching to Prisma Postgres [#192](https://github.com/haydenbleasel/next-ship/pull/192) ([@nikolasburk](https://github.com/nikolasburk))

#### Authors: 4

- David Mytton ([@davidmytton](https://github.com/davidmytton))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
- Kaique da Silva ([@ktfth](https://github.com/ktfth))
- Nikolas ([@nikolasburk](https://github.com/nikolasburk))

---

# v2.10.10 (Tue Nov 05 2024)

#### ⚠️ Pushed to `main`

- Resolves #180 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.9 (Tue Nov 05 2024)

#### ⚠️ Pushed to `main`

- For #180 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.8 (Tue Nov 05 2024)

#### ⚠️ Pushed to `main`

- Build fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))
- Use latest create-next-app ([@haydenbleasel](https://github.com/haydenbleasel))
- Update setup.sh ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.7 (Tue Nov 05 2024)

#### ⚠️ Pushed to `main`

- Resolves #175 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.6 (Tue Nov 05 2024)

#### ⚠️ Pushed to `main`

- Resolves #185 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.5 (Tue Nov 05 2024)

#### ⚠️ Pushed to `main`

- Resolves #186 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.4 (Tue Nov 05 2024)

#### ⚠️ Pushed to `main`

- Add Apple icons ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.3 (Tue Nov 05 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Alfredo José ([@fredojbg](https://github.com/fredojbg)), for all your work!

#### 🐛 Bug Fix

- feat: add repo/env to app [#188](https://github.com/haydenbleasel/next-ship/pull/188) ([@fredojbg](https://github.com/fredojbg) [@haydenbleasel](https://github.com/haydenbleasel))

#### ⚠️ Pushed to `main`

- Resolves #183 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 2

- Alfredo José ([@fredojbg](https://github.com/fredojbg))
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.2 (Tue Nov 05 2024)

#### 🐛 Bug Fix

- Misc enhancements [#181](https://github.com/haydenbleasel/next-ship/pull/181) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.1 (Mon Nov 04 2024)

#### ⚠️ Pushed to `main`

- Update github-button.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.10.0 (Mon Nov 04 2024)

#### 🚀 Enhancement

- 157 improve env var handling [#171](https://github.com/haydenbleasel/next-ship/pull/171) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.9.4 (Mon Nov 04 2024)

:tada: This release contains work from a new contributor! :tada:

Thank you, Ankur Tyagi ([@tyaga001](https://github.com/tyaga001)), for all your work!

#### 🐛 Bug Fix

- Add CodeRabbit AI Code Review Integration [#172](https://github.com/haydenbleasel/next-ship/pull/172) ([@tyaga001](https://github.com/tyaga001))

#### Authors: 1

- Ankur Tyagi ([@tyaga001](https://github.com/tyaga001))

---

# v2.9.3 (Sun Nov 03 2024)

#### ⚠️ Pushed to `main`

- Resolves #169 ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.9.2 (Sun Nov 03 2024)

#### ⚠️ Pushed to `main`

- Update README.md ([@haydenbleasel](https://github.com/haydenbleasel))
- Update setup.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.9.1 (Sun Nov 03 2024)

#### ⚠️ Pushed to `main`

- Update index.js ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.9.0 (Sun Nov 03 2024)

#### 🚀 Enhancement

- Create CLI [#166](https://github.com/haydenbleasel/next-ship/pull/166) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.8.0 (Sun Nov 03 2024)

#### 🚀 Enhancement

- Add Unit Tests [#165](https://github.com/haydenbleasel/next-ship/pull/165) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.7.4 (Sun Nov 03 2024)

#### ⚠️ Pushed to `main`

- Update shadcn/ui ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.7.3 (Sat Nov 02 2024)

#### ⚠️ Pushed to `main`

- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.7.2 (Sat Nov 02 2024)

#### ⚠️ Pushed to `main`

- Update structure.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.7.1 (Sat Nov 02 2024)

#### ⚠️ Pushed to `main`

- Update debugging.mdx ([@haydenbleasel](https://github.com/haydenbleasel))
- Create sitemap.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.7.0 (Sat Nov 02 2024)

#### 🚀 Enhancement

- Debugging [#164](https://github.com/haydenbleasel/next-ship/pull/164) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.6.6 (Fri Nov 01 2024)

#### ⚠️ Pushed to `main`

- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### 🔩 Dependency Updates

- Bump cmdk from 1.0.1 to 1.0.3 [#162](https://github.com/haydenbleasel/next-ship/pull/162) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.6.5 (Thu Oct 31 2024)

#### ⚠️ Pushed to `main`

- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.6.4 (Thu Oct 31 2024)

#### ⚠️ Pushed to `main`

- Misc fixes, add tooltip to installer copy button ([@haydenbleasel](https://github.com/haydenbleasel))

#### 🔩 Dependency Updates

- Bump ws from 7.5.9 to 8.18.0 [#160](https://github.com/haydenbleasel/next-ship/pull/160) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.6.3 (Thu Oct 31 2024)

#### ⚠️ Pushed to `main`

- Update global.css ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.6.2 (Thu Oct 31 2024)

#### ⚠️ Pushed to `main`

- Fix typo ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.6.1 (Thu Oct 31 2024)

#### ⚠️ Pushed to `main`

- Minor docs fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.6.0 (Thu Oct 31 2024)

#### 🚀 Enhancement

- Improve Dark Mode support [#159](https://github.com/haydenbleasel/next-ship/pull/159) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.5.1 (Thu Oct 31 2024)

#### ⚠️ Pushed to `main`

- Update shadcn/ui ([@haydenbleasel](https://github.com/haydenbleasel))
- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.5.0 (Tue Oct 29 2024)

#### 🚀 Enhancement

- Improve SEO [#158](https://github.com/haydenbleasel/next-ship/pull/158) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.11 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Fix typo ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.10 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- More tiny fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.9 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Fix and update docs fonts ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.8 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Update analytics.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.7 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Improve PostHog integration ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.6 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Update flags.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.5 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Add package-install remark plugin ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.4 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Fix formatting of PostHog ([@haydenbleasel](https://github.com/haydenbleasel))
- Split error capture and monitoring ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.3 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Add missing status component, improve docs ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.2 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Add zoomable images, misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.1 (Tue Oct 29 2024)

#### ⚠️ Pushed to `main`

- Run Ultracite ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.4.0 (Tue Oct 29 2024)

#### 🚀 Enhancement

- Add Vercel Feature Flags [#154](https://github.com/haydenbleasel/next-ship/pull/154) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.3.0 (Mon Oct 28 2024)

#### 🚀 Enhancement

- Implement Posthog [#156](https://github.com/haydenbleasel/next-ship/pull/156) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.2.7 (Mon Oct 28 2024)

#### ⚠️ Pushed to `main`

- Update global.css ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.2.6 (Mon Oct 28 2024)

#### ⚠️ Pushed to `main`

- Update layout.config.tsx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.2.5 (Mon Oct 28 2024)

#### ⚠️ Pushed to `main`

- Misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Update index.mdx ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.2.4 (Mon Oct 28 2024)

#### 🐛 Bug Fix

- Docs [#155](https://github.com/haydenbleasel/next-ship/pull/155) ([@haydenbleasel](https://github.com/haydenbleasel))

#### ⚠️ Pushed to `main`

- Update README.md ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.2.3 (Mon Oct 28 2024)

#### ⚠️ Pushed to `main`

- Remove leftover pscale stuff ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.2.2 (Mon Oct 28 2024)

#### ⚠️ Pushed to `main`

- Add Clerk as remote image pattern ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.2.1 (Sun Oct 27 2024)

#### ⚠️ Pushed to `main`

- Deprecate use of FC ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.2.0 (Sat Oct 26 2024)

#### 🚀 Enhancement

- 2.2 [#152](https://github.com/haydenbleasel/next-ship/pull/152) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.1.0 (Thu Oct 24 2024)

#### 🚀 Enhancement

- 2.1 [#151](https://github.com/haydenbleasel/next-ship/pull/151) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.0.6 (Thu Oct 24 2024)

#### ⚠️ Pushed to `main`

- Fix typo ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.0.5 (Thu Oct 24 2024)

#### ⚠️ Pushed to `main`

- Bump deps ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.0.4 (Wed Oct 23 2024)

#### ⚠️ Pushed to `main`

- Add missing LQIP props ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.0.3 (Wed Oct 23 2024)

#### 🐛 Bug Fix

- Demo fixes [#150](https://github.com/haydenbleasel/next-ship/pull/150) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.0.2 (Wed Oct 23 2024)

#### ⚠️ Pushed to `main`

- Update opengraph images ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.0.1 (Wed Oct 23 2024)

#### ⚠️ Pushed to `main`

- Improve installer ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v2.0.0 (Wed Oct 23 2024)

#### 💥 Breaking Change

- Version 2 [#149](https://github.com/haydenbleasel/next-ship/pull/149) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v1.2.0 (Mon Oct 21 2024)

#### 🚀 Enhancement

- 1.2.0 [#144](https://github.com/haydenbleasel/next-ship/pull/144) ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))

---

# v1.1.2 (Mon Sep 02 2024)

#### ⚠️ Pushed to `main`

- Attempt installing auto deps ([@haydenbleasel](https://github.com/haydenbleasel))
- Update package.json ([@haydenbleasel](https://github.com/haydenbleasel))
- Misc fixes ([@haydenbleasel](https://github.com/haydenbleasel))
- Create release.yml ([@haydenbleasel](https://github.com/haydenbleasel))
- Create .autorc ([@haydenbleasel](https://github.com/haydenbleasel))

#### Authors: 1

- Hayden Bleasel ([@haydenbleasel](https://github.com/haydenbleasel))
