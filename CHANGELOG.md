# Portfolio Changelog

This changelog records meaningful portfolio-system changes, not every file edit or commit.

## 2026-08-26 — Production evidence-system baseline

### Positioning

- Established public positioning: **Education Leader · Institutional Systems Architect · Infrastructure & Automation Builder**.
- Established portfolio thesis: **I design and build the systems behind modern institutions.**
- Preserved strict attribution boundary separating Kritica Dwivedi's visual-design disciplines from Pragalbh's work.
- Limited public contact to Phone + WhatsApp.
- Replaced precise protected operating counts with broad scale language.

### Experience architecture

- Replaced long-scroll skills page with an expandable capability-network experience.
- Added dual modes: Explore Network + Recruiter View.
- Added five top-level capability pillars.
- Added audience routing for hiring, EdTech, consulting, infrastructure, automation/product and field systems.
- Added graph search, pan/zoom, progressive expansion, cross-links and evidence drawers.
- Added shareable `#node=` and `#case=` state.
- Added current-path breadcrumbs and mobile Back behavior.
- Added node-origin URL restoration: opening a case from a graph node temporarily uses `#case=...`, then closing restores the originating `#node=...` state.
- Kept direct shared case links independent: closing a direct `#case=...` link returns to the clean canonical page URL.
- Improved search ranking so exact/prefix capability-label matches outrank incidental summary/skill matches.

### Hiring conversion

- Added full-time/leadership, consulting/advisory and partnership/pilot engagement modes.
- Added end-to-end ownership model: frame problem → architect → coordinate/build → operate/improve.
- Added opportunity-specific evidence shortcuts.
- Made recruiter case hierarchy flagship-first, with leadership/supporting cases collapsed by default.

### Technical / systems proof

Implemented six flagship deep cases:

1. AquaPulse
2. BDSPS Digital Operations
3. Private Infrastructure Stack
4. HA Kubernetes Architecture
5. Smart Classroom Architecture
6. Solar CCTV Edge Infrastructure

Each supports evidence/status boundaries, architecture, decisions/trade-offs, failure modes, current state, next iteration and capability relationships.

### Leadership / institutional proof

Implemented six source-backed/hybrid cases:

1. Teacher Recruitment & Evaluation
2. Curriculum & Assessment
3. Compliance & Documentation
4. Institutional Operations
5. Academic Scheduling & School-Wide Execution
6. Admissions & Institutional Communication

### Evidence system

- Added proof taxonomy and evidence rail.
- Added privacy-safe architecture/process diagrams under `assets/media/`.
- Added `EVIDENCE_REGISTER.md`.
- Added `OUTCOME_REGISTER.md` to prevent invented impact metrics.
- Added `CASE_REVIEW_REGISTER.md` and live `Evidence reviewed · Aug 2026` stamps.
- Added public evidence link-health monitoring covering the portfolio, BDSPS and selected public GitHub evidence.
- Added bounded retry/backoff for transient external network/server failures while preserving failure on persistently broken proof links.

### Accessibility / resilience

- Added keyboard semantics to graph nodes.
- Added Enter/Space activation.
- Upgraded search to combobox/listbox semantics with keyboard result navigation and Escape behavior.
- Added modal dialog semantics, Escape close, Tab containment and focus restoration.
- Added labelled generated case-close controls and explicit initial `aria-hidden` overlay state.
- Added reduced-motion support and larger mobile targets.
- Added no-JavaScript professional fallback.
- Added explicit current-path navigation rather than relying solely on graph spatial memory.
- Added `strict-origin-when-cross-origin` referrer policy and rendered safe-new-tab validation.

### Rendered browser verification

- Added Playwright/Chromium browser smoke testing.
- Added desktop rendered checks for Recruiter View, case routing, deep links, dialog semantics, keyboard search and URL-state restoration.
- Added synthetic **390×844** touch/mobile Chromium coverage for overflow, breadcrumbs, supporting-case disclosure and case-modal fit.
- Added no-JavaScript rendered validation.
- Added browser page-error capture.
- Added short-lived screenshots/URL/error artifacts on browser-smoke failure.
- Browser testing exposed and drove fixes for search focus handling and exact-label search ranking rather than relying only on source inspection.
- Verified live-surface commit `606e943c91bbaf67974ced6c74414d64ab6ad95c` with successful Portfolio audit, Browser smoke and GitHub Pages deployment on the same source.

### Discoverability / delivery

- Added canonical metadata, robots, Open Graph, Twitter summary metadata and Person/WebSite JSON-LD.
- Added favicon, `robots.txt` and `sitemap.xml`.
- Removed embedded external live-site iframe from evidence layer.
- Moved Google Fonts out of CSS `@import` into the document head with connection hints.
- Preserved dependency-light branch-based GitHub Pages delivery.

### Progressive enhancement architecture

- Documented deterministic load ownership in `ENHANCEMENT_CHAIN.md`.
- Removed a dynamic-script load-order race between case navigation and hiring-conversion layers.
- Enforced the post-case chain through the source audit:
  - case navigation → hiring conversion
  - hiring conversion → accessibility
  - accessibility → network navigation
  - network navigation → case review
- Added orphaned live JS/CSS/SVG rejection so obsolete enhancement layers cannot silently accumulate.

### Static payload guardrail

- Added `PERFORMANCE_BUDGET.md` from measured repository-tree sizes.
- Final verified raw controlled live source: **250,651 B** before transfer compression/network effects.
- Verified components:
  - `index.html`: 13,492 B
  - live JavaScript: 129,005 B
  - live CSS: 28,497 B
  - evidence SVGs: 79,257 B
- Added enforced limits for root HTML, combined/single JavaScript, combined/single CSS, combined/single evidence SVG and total controlled live source.
- Explicitly kept Lighthouse/Core Web Vitals outside this source-budget claim until actual measurements are performed.

### Workflow/runtime hardening

- Upgraded all portfolio-owned workflows from the deprecated Node 20 generation to **Node 24**.
- Upgraded `actions/checkout` and `actions/setup-node` to their current **v7** majors.
- Verified the production audit on Node **v24.19.0** with all source/governance contracts passing.
- Verified Browser smoke successfully after the Node 24/v7 migration.
- Verified Public evidence link health successfully after the Node 24/v7 migration.
- The link-health run returned HTTP 200 for all **11 monitored public endpoints**, including `https://pragalbh.in/` and `https://bdsps.in/`.

### Repository protection state

- Confirmed `main` currently reports `protected: false` with required-status enforcement off.
- Confirmed no repository rulesets are currently configured.
- Kept protection changes outside automatic maintenance because enabling PR-only or required-check policies changes the current direct-maintenance workflow.
- GitHub Issue #3 records the explicit decision required for force-push/deletion protection, required checks, pull-request policy and administrator recovery/bypass.

### Governance / quality

- Rewrote `MASTER_ROADMAP.md` as current v2 roadmap.
- Added `PORTFOLIO_STATUS.md`.
- Added `PORTFOLIO_MAINTENANCE.md`.
- Added `RELEASE_CHECKLIST.md`.
- Added `PERFORMANCE_BUDGET.md`.
- Added `ENHANCEMENT_CHAIN.md`.
- Added zero-dependency `scripts/validate-portfolio.mjs`.
- Added `npm run audit`.
- Strengthened GitHub `Portfolio audit` workflow to protect source, privacy, routing, enhancement-chain, browser-smoke, proof-health, workflow-runtime and payload-budget contracts.
- Added separate `Browser smoke` GitHub Actions gate.
- Added separate `Public evidence link health` workflow.
- Recorded a green automated baseline across source audit, rendered browser smoke, proof-link health and Pages deployment.
- Opened GitHub Issue #1 for real-device/browser/accessibility QA and recorded automated progress without closing the physical-device backlog.
- Opened GitHub Issue #2 for real media and prospective outcome enrichment.
- Opened GitHub Issue #3 for the repository-protection decision.

## Earlier baseline

The repository originally contained a conventional static/React/Vite portfolio direction with GitHub Pages/custom-domain deployment. That version was progressively replaced by the evidence-network architecture above while retaining Git history and relevant React/Vite source for reference.
