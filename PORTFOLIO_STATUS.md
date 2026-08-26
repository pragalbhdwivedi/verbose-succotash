# Pragalbh.in — Current Portfolio Status

Updated: 26 August 2026

This file is the concise source of truth for current execution status. The longer `MASTER_ROADMAP.md` retains the programme architecture and future direction.

## Overall state

**Portfolio architecture: verified production baseline established**

The current site is an interactive professional evidence system with two primary modes:

- **Explore Network** — progressive capability graph / expanding web
- **Recruiter View** — compact hiring, consulting and partnership path

Core positioning:

> **Education Leader · Institutional Systems Architect · Infrastructure & Automation Builder**

Core statement:

> **I design and build the systems behind modern institutions.**

Verified live-surface source baseline:

`606e943c91bbaf67974ced6c74414d64ab6ad95c`

For that exact source commit:

- `Portfolio audit` completed successfully
- `Browser smoke` completed successfully
- GitHub Pages build/deployment completed successfully
- Browser smoke covered desktop Chromium, synthetic 390×844 mobile/touch, no-JavaScript fallback, modal semantics and safe new-tab links
- raw controlled live surface measured **250,651 B**

## Completed programme stages

### Sprint 1 — Real Evidence

**Status: FOUNDATION COMPLETE**

Implemented:

- evidence register
- proof taxonomy
- public repository/live-system proof
- privacy-safe architecture diagrams
- evidence rail
- media publication rules
- case evidence-review register
- live evidence-review stamps that explicitly distinguish review date from deployment date

Remaining real screenshots/field photography are enrichment backlog, not structural blockers.

### Sprint 2 — Flagship Deep Case Studies

**Status: FRAMEWORK COMPLETE / EVIDENCE ENRICHMENT CONTINUOUS**

Six flagship cases:

1. AquaPulse
2. BDSPS Digital Operations
3. Private Infrastructure Stack
4. HA Kubernetes Architecture
5. Smart Classroom Architecture
6. Solar CCTV Edge Infrastructure

Implemented across flagships:

- problem/context
- role
- constraints
- decisions/trade-offs
- architecture
- failure modes
- verified/source-backed evidence
- current state
- next iteration
- proof links
- shareable case hashes
- related capability navigation
- evidence-review freshness label

### Sprint 3 — Leadership & Institutional Systems Proof

**Status: COMPLETE**

Six leadership/institutional cases:

1. Teacher Recruitment & Evaluation
2. Curriculum & Assessment Framework
3. Compliance & Documentation Workflow
4. Institutional Operations System
5. Academic Scheduling & School-Wide Execution
6. Admissions & Institutional Communication Operations

All are explicitly source-backed or hybrid public/source-backed and preserve privacy/attribution boundaries.

### Sprint 4 — Hiring Conversion

**Status: STRUCTURAL WORK COMPLETE**

Implemented:

- full-time/leadership engagement route
- consulting/advisory route
- partnership/pilot route
- end-to-end ownership model
- opportunity-specific evidence shortcuts
- flagship-first recruiter case hierarchy
- collapsed supporting/leadership case control
- phone + WhatsApp conversion only

### Sprint 5 — Mobile / Accessibility / Quality

**Status: SOURCE + AUTOMATED RENDERED QA COMPLETE; PHYSICAL QA REMAINS**

Implemented:

- keyboard-accessible graph nodes
- Enter/Space activation
- accessible mode state
- modal dialog semantics
- labelled close controls
- Escape close
- focus containment/restoration
- visible focus states
- reduced-motion support
- mobile interaction-target improvements
- compact supporting-case disclosure
- current capability breadcrumb/path navigation
- shareable node hashes
- no-JavaScript professional fallback
- graph-origin case URL restoration
- safe new-tab link contract
- explicit initial `aria-hidden` case-overlay state

Automated Browser smoke now covers desktop Chromium plus a synthetic 390×844 mobile/touch viewport and no-JavaScript fallback.

Real device/browser work is tracked in **GitHub Issue #1: Production QA: real devices, browsers and assistive technology**.

### Sprint 6 — Discoverability / Performance

**Status: SOURCE-LEVEL WORK COMPLETE; REAL PERFORMANCE MEASUREMENT REMAINS**

Implemented:

- canonical `https://pragalbh.in/`
- robots metadata
- strict-origin-when-cross-origin referrer policy
- Open Graph metadata
- Twitter summary metadata
- Person + WebSite JSON-LD
- favicon
- `robots.txt`
- `sitemap.xml`
- external evidence iframe removed
- dependency-light static delivery preserved
- weekly public proof-link health workflow
- measured/enforced static payload budgets

Verified raw-source baseline:

- `index.html`: 13,492 B
- live JavaScript: 129,005 B
- live CSS: 28,497 B
- evidence SVGs: 79,257 B
- controlled raw live surface: 250,651 B

Deferred until evidence/branding warrants it:

- dedicated 1200×630 social preview image
- standalone SEO routes for individual case studies
- claimed Lighthouse/Core Web Vitals scores without real-browser measurement

### Sprint 7 — Production Audit

**Status: AUTOMATED BASELINE VERIFIED**

Code-controlled production verification now includes:

1. source/governance audit
2. rendered desktop/mobile/no-JS Chromium smoke testing
3. public evidence link health monitoring
4. GitHub Pages deployment visibility
5. static payload budgets
6. orphaned live-asset detection
7. deterministic progressive-enhancement ownership
8. privacy/contact/attribution regression checks
9. Node 24 + current v7 checkout/setup-node workflow contract

`main` is currently not protected. Repository-protection policy is tracked separately in GitHub Issue #3 and is not a live-site code blocker.

## Automated quality gate

The repository includes:

- `.github/workflows/portfolio-audit.yml`
- `.github/workflows/browser-smoke.yml`
- `.github/workflows/link-health.yml`
- `scripts/validate-portfolio.mjs`
- `scripts/check-external-links.mjs`
- `tests/browser-smoke.mjs`
- `npm run audit`
- `npm run smoke:browser`

Portfolio-owned Actions workflows use Node 24 and current v7 `actions/checkout` / `actions/setup-node` majors.

The audit verifies:

- JavaScript syntax
- required architecture/governance files
- CNAME/canonical consistency
- robots/sitemap references
- JSON-LD validity
- referrer policy
- initial case-overlay accessibility state
- local asset references and orphan detection
- static payload budgets
- case navigation registry
- case evidence-review registry
- no live iframe
- no public email / mailto
- no private IPv4 addresses on live surface
- approved phone/WhatsApp boundary
- protected precise-scale phrase regressions
- attribution-boundary presence
- deterministic enhancement chain
- rendered-browser/link-health workflow contracts
- Node 24 workflow runtime contract

The validation gate is required to remain green.

## Public proof-link monitoring

The repository also includes:

- `scripts/check-external-links.mjs`
- `.github/workflows/link-health.yml`

The workflow is scheduled weekly and can also be run manually. It monitors the public portfolio, live institutional system and selected public evidence repositories with bounded retry/backoff for transient failures.

## Current privacy boundary

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

## Current attribution boundary

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

Primary remaining evidence targets:

### AquaPulse

- stable UI screenshots
- role/RBAC workflow screenshot
- audit/workflow evidence
- self-hosted deployment evidence

### BDSPS Digital Operations

- privacy-safe live-site screenshots
- Actions/deployment evidence
- timetable publishing screenshot
- before/after workflow example

### Private Infrastructure

- redacted Proxmox screenshot
- redacted TrueNAS screenshot
- rack/server photographs
- recovery-test evidence

### HA Kubernetes

- documented failure/recovery test
- bootstrap timing if safely measured

### Smart Classroom

- pilot hardware photography
- timetable automation capture
- endpoint/dashboard screenshots when built

### Solar CCTV Edge

- field installation photos
- measured load
- real autonomy data
- wireless-link evidence

## Current governance files

- `MASTER_ROADMAP.md` — programme architecture and priorities
- `PORTFOLIO_STATUS.md` — concise current state
- `PORTFOLIO_MAINTENANCE.md` — ongoing update contract
- `RELEASE_CHECKLIST.md` — production release procedure
- `PERFORMANCE_BUDGET.md` — measured static payload guardrails
- `CHANGELOG.md` — meaningful architecture/history changes
- `CASE_REVIEW_REGISTER.md` — evidence-review freshness and triggers
- `EVIDENCE_REGISTER.md` — proof/media control
- `OUTCOME_REGISTER.md` — public impact/claim control

## Next operational priorities

1. complete GitHub Issue #1 real-device/browser/assistive-technology QA
2. add privacy-safe evidence through GitHub Issue #2 as it becomes available
3. review `main` protection through GitHub Issue #3
4. measure outcomes prospectively rather than reconstructing metrics later
5. keep the six-flagship hierarchy disciplined
6. monitor public proof links weekly
7. keep skills connected to evidence rather than increasing skill volume
8. keep `npm run audit` / Portfolio audit green
9. use `RELEASE_CHECKLIST.md` for meaningful releases
10. use `PORTFOLIO_MAINTENANCE.md` for monthly/quarterly governance

## Production rule

Future work should normally deepen an existing node or case before creating a new homepage section.

The default experience stays sparse; evidence expands on demand.
