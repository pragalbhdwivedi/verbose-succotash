# Pragalbh.in — Current Portfolio Status

Updated: 26 August 2026

This file is the concise source of truth for current execution status. The longer `MASTER_ROADMAP.md` retains the programme architecture and future direction.

## Overall state

**Portfolio architecture: production baseline established**

The current site is an interactive professional evidence system with two primary modes:

- **Explore Network** — progressive capability graph / expanding web
- **Recruiter View** — compact hiring, consulting and partnership path

Core positioning:

> **Education Leader · Institutional Systems Architect · Infrastructure & Automation Builder**

Core statement:

> **I design and build the systems behind modern institutions.**

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

**Status: SOURCE-LEVEL WORK COMPLETE; REAL-DEVICE QA REMAINS**

Implemented:

- keyboard-accessible graph nodes
- Enter/Space activation
- accessible mode state
- modal dialog semantics
- Escape close
- focus containment/restoration
- visible focus states
- reduced-motion support
- mobile interaction-target improvements
- compact supporting-case disclosure
- current capability breadcrumb/path navigation
- shareable node hashes
- no-JavaScript professional fallback

Real device/browser work is tracked in **GitHub Issue #1: Production QA: real devices, browsers and assistive technology**.

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
- dependency-light static delivery preserved
- weekly public proof-link health workflow

Deferred until evidence/branding warrants it:

- dedicated 1200×630 social preview image
- standalone SEO routes for individual case studies
- claimed Lighthouse/Core Web Vitals scores without real-browser measurement

## Automated quality gate

The repository includes:

- `.github/workflows/portfolio-audit.yml`
- `scripts/validate-portfolio.mjs`
- `npm run audit`

The audit verifies:

- JavaScript syntax
- required architecture/governance files
- CNAME/canonical consistency
- robots/sitemap references
- JSON-LD validity
- local asset references
- case navigation registry
- case evidence-review registry
- no live iframe
- no public email / mailto
- no private IPv4 addresses on live surface
- approved phone/WhatsApp boundary
- protected precise-scale phrase regressions
- attribution-boundary presence

The validation gate is required to remain green.

## Public proof-link monitoring

The repository also includes:

- `scripts/check-external-links.mjs`
- `.github/workflows/link-health.yml`

The workflow is scheduled weekly and can also be run manually from GitHub Actions. It monitors the public portfolio, live institutional system and selected public evidence repositories without making transient external-network failures block every normal portfolio deployment.

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
- `CHANGELOG.md` — meaningful architecture/history changes
- `CASE_REVIEW_REGISTER.md` — evidence-review freshness and triggers
- `EVIDENCE_REGISTER.md` — proof/media control
- `OUTCOME_REGISTER.md` — public impact/claim control

## Next operational priorities

1. complete GitHub Issue #1 real-device/browser QA
2. add privacy-safe evidence through GitHub Issue #2 as it becomes available
3. measure outcomes prospectively rather than reconstructing metrics later
4. keep the six-flagship hierarchy disciplined
5. monitor public proof links weekly
6. keep skills connected to evidence rather than increasing skill volume
7. keep `npm run audit` / Portfolio audit green
8. use `RELEASE_CHECKLIST.md` for meaningful releases
9. use `PORTFOLIO_MAINTENANCE.md` for monthly/quarterly governance

## Production rule

Future work should normally deepen an existing node or case before creating a new homepage section.

The default experience stays sparse; evidence expands on demand.
