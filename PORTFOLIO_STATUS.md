# Pragalbh.in — Current Portfolio Status

Updated: 26 August 2026

This file is the concise source of truth for current execution status. The longer `MASTER_ROADMAP.md` retains the programme architecture and future direction.

## Overall state

**Portfolio architecture: production baseline established and automatically verified**

The current site is an interactive professional evidence system with two primary modes:

- **Explore Network** — progressive capability graph / expanding web
- **Recruiter View** — compact hiring, consulting and partnership path

Core positioning:

> **Education Leader · Institutional Systems Architect · Infrastructure & Automation Builder**

Core statement:

> **I design and build the systems behind modern institutions.**

## Programme status

### Sprint 1 — Real Evidence

**Status: FOUNDATION COMPLETE**

Implemented:

- evidence register and proof taxonomy
- public repository/live-system proof
- privacy-safe architecture diagrams
- evidence rail
- media publication rules
- case evidence-review register
- evidence-review stamps that distinguish review date from deployment date

Real screenshots/field photography remain continuous enrichment rather than structural blockers.

### Sprint 2 — Flagship Deep Case Studies

**Status: FRAMEWORK COMPLETE / EVIDENCE ENRICHMENT CONTINUOUS**

Six flagship cases:

1. AquaPulse
2. BDSPS Digital Operations
3. Private Infrastructure Stack
4. HA Kubernetes Architecture
5. Smart Classroom Architecture
6. Solar CCTV Edge Infrastructure

Flagships include problem/context, role, constraints, decisions/trade-offs, architecture, failure modes, verified evidence, current state, next iteration, proof links, shareable case hashes, related capability navigation and evidence-review state.

### Sprint 3 — Leadership & Institutional Systems Proof

**Status: COMPLETE**

Six source-backed leadership/institutional cases:

1. Teacher Recruitment & Evaluation
2. Curriculum & Assessment Framework
3. Compliance & Documentation Workflow
4. Institutional Operations System
5. Academic Scheduling & School-Wide Execution
6. Admissions & Institutional Communication Operations

### Sprint 4 — Hiring Conversion

**Status: STRUCTURAL WORK COMPLETE**

Implemented:

- leadership / full-time route
- consulting / advisory route
- partnership / pilot route
- end-to-end ownership model
- opportunity-specific evidence shortcuts
- flagship-first case hierarchy
- collapsed supporting/leadership cases
- phone + WhatsApp conversion only

### Sprint 5 — Mobile / Accessibility / Quality

**Status: SOURCE + AUTOMATED RENDERED QA COMPLETE; REAL-DEVICE QA REMAINS**

Implemented:

- keyboard-accessible graph nodes
- Enter/Space activation
- accessible mode state
- accessible search combobox/listbox semantics
- label-relevance search ranking
- modal dialog semantics
- Escape close
- focus containment/restoration
- visible focus states
- reduced-motion source rule
- mobile interaction-target improvements
- supporting-case disclosure
- current capability breadcrumb/path navigation
- shareable node hashes
- graph-origin case → node URL restoration
- direct shared case → canonical URL close behavior
- no-JavaScript professional fallback

Automated rendered tests now cover desktop Chromium, a synthetic 390×844 touch/mobile Chromium viewport and the no-JavaScript path.

Real-device/cross-browser work remains tracked in **GitHub Issue #1**.

### Sprint 6 — Discoverability / Performance

**Status: SOURCE-LEVEL WORK COMPLETE; REAL PERFORMANCE MEASUREMENT REMAINS**

Implemented:

- canonical `https://pragalbh.in/`
- robots metadata
- Open Graph metadata
- Twitter summary metadata
- Person + WebSite JSON-LD
- favicon
- `robots.txt`
- `sitemap.xml`
- external evidence iframe removed
- dependency-light static delivery
- faster font-loading path with head preconnects and no CSS Google Fonts `@import`
- monitored public proof-link health

Deferred until evidence/branding warrants it:

- dedicated 1200×630 social preview image
- standalone SEO routes for individual case studies
- any claimed Lighthouse/Core Web Vitals numbers without actual measurement

## Production verification layers

The repository now uses three automated quality systems plus GitHub Pages deployment.

### 1. Source / governance audit

Files:

- `.github/workflows/portfolio-audit.yml`
- `scripts/validate-portfolio.mjs`
- `npm run audit`

Protects:

- JavaScript syntax
- required architecture/governance files
- canonical/CNAME/robots/sitemap
- JSON-LD
- local asset references
- case routing/review registries
- deterministic progressive-enhancement ownership
- browser-smoke/link-health workflow contracts
- privacy/contact boundaries
- protected precise-scale phrases
- attribution boundaries
- font/no-JavaScript resilience rules

### 2. Rendered browser smoke

Files:

- `.github/workflows/browser-smoke.yml`
- `tests/browser-smoke.mjs`
- `npm run smoke:browser`

Covers:

- desktop Chromium
- synthetic 390×844 touch/mobile Chromium
- no-JavaScript fallback
- Recruiter View
- deep links and URL-state restoration
- search keyboard behavior/ranking
- dialog semantics
- mobile overflow/modal checks

Failures produce temporary diagnostic artifacts/screenshots.

### 3. Public evidence link health

Files:

- `scripts/check-external-links.mjs`
- `.github/workflows/link-health.yml`

The monitor checks the public portfolio, BDSPS system, GitHub profile and selected public evidence repositories. It runs weekly, manually and whenever its own configuration changes. Transient network/server errors receive bounded retries; persistent failures still fail the workflow.

### 4. Pages deployment

The existing GitHub Pages branch deployment remains the production delivery mechanism. The static root `index.html` remains directly deployable and `CNAME` remains `pragalbh.in`.

## Confirmed automated baseline — 26 August 2026

The latest documented verification baseline is green:

- Portfolio audit: **success**
- Browser smoke with desktop + synthetic mobile + no-JS coverage: **success**
- Public evidence link health: **success**
- GitHub Pages deployment: **success**

This does not mean physical iPhone/Android/Safari/Edge/VoiceOver testing is complete.

## Privacy boundary

Public contact:

- Phone: +91 95558 77000
- WhatsApp: +91 95558 77000

Do not publish by default:

- public email
- internal IPs/topology
- credentials
- student/parent/candidate/employee personal data
- exact protected operational inventory counts
- unredacted compliance/financial material

## Attribution boundary

Do not claim as Pragalbh's professional disciplines:

- Graphic Design
- UI/UX Design
- Art Direction
- Brand Visual Design
- Campaign Visual Design
- Portfolio Visual Storytelling

For collaborative projects, claim only Pragalbh's actual systems/requirements/engineering/deployment contribution.

## Active evidence / measurement backlog

Tracked in **GitHub Issue #2: Evidence enrichment: real media and prospective outcome measurement**.

Primary targets remain real AquaPulse UI evidence, BDSPS publishing evidence, redacted infrastructure evidence, HA failure/recovery evidence, Smart Classroom pilot evidence and Solar CCTV measured field evidence.

## Current governance files

- `MASTER_ROADMAP.md` — programme architecture and priorities
- `PORTFOLIO_STATUS.md` — concise current state
- `PORTFOLIO_ARCHITECTURE.md` — interaction/proof/privacy model
- `PORTFOLIO_MAINTENANCE.md` — ongoing update contract
- `RELEASE_CHECKLIST.md` — production release procedure
- `CHANGELOG.md` — meaningful architecture/history changes
- `CASE_REVIEW_REGISTER.md` — evidence-review freshness and triggers
- `ENHANCEMENT_CHAIN.md` — deterministic progressive-enhancement load contract
- `EVIDENCE_REGISTER.md` — proof/media control
- `OUTCOME_REGISTER.md` — public impact/claim control

## Next operational priorities

1. complete GitHub Issue #1 physical-device/cross-browser/assistive-technology QA
2. add privacy-safe evidence through GitHub Issue #2
3. enforce a static payload/performance budget without inventing Lighthouse scores
4. measure outcomes prospectively
5. keep the six-flagship hierarchy disciplined
6. keep public proof links monitored
7. keep all automated quality/deployment gates green
8. use `RELEASE_CHECKLIST.md` for meaningful releases
9. use `PORTFOLIO_MAINTENANCE.md` for monthly/quarterly governance

## Production rule

Future work should normally deepen an existing node or case before creating a new homepage section.

The default experience stays sparse; evidence expands on demand.
