# Sprint 7 — Production Audit & Baseline

Updated: 26 August 2026

**Status: AUTOMATED PRODUCTION BASELINE GREEN · PHYSICAL/CROSS-BROWSER QA REMAINS**

Sprint 7 records what is actually verified before treating the portfolio as a stable professional baseline.

The production model now uses four distinct verification layers rather than one catch-all audit.

## 1. Source / governance audit

Workflow:

- `.github/workflows/portfolio-audit.yml`

Canonical checker:

- `scripts/validate-portfolio.mjs`
- `npm run audit`

The audit protects:

### Syntax and required architecture

- JavaScript syntax
- required portfolio/governance files
- required QA workflows/tests
- deterministic progressive-enhancement ownership
- case navigation/review registries

### Canonical/discoverability contract

- `CNAME` exactly `pragalbh.in`
- canonical URL `https://pragalbh.in/`
- robots metadata
- sitemap reference
- valid Person/WebSite JSON-LD
- favicon/font-loading contract

### Privacy / attribution contract

The live-surface audit rejects:

- iframe regressions
- public email / `mailto:`
- private IPv4 addresses
- unapproved public phone-like values
- protected precise-scale phrases

It also requires the documented attribution boundary for visual-design disciplines that are not Pragalbh's work.

### Resilience contract

- no-JavaScript fallback remains present
- interactive shell is hidden when JavaScript is unavailable
- local asset references must resolve
- browser-smoke and proof-health workflows must retain their expected contracts

### Static payload contract

`PERFORMANCE_BUDGET.md` is enforced from repository byte sizes.

Current limits include:

- root HTML
- combined / single live JS
- combined / single live CSS
- combined / single evidence SVGs
- combined controlled live-source envelope

This is a raw static-source budget, not a Lighthouse/Core Web Vitals claim.

## 2. Rendered browser smoke

Workflow:

- `.github/workflows/browser-smoke.yml`

Test:

- `tests/browser-smoke.mjs`
- `npm run smoke:browser`

Automated rendered coverage includes:

### Desktop Chromium

- Explore Network and Recruiter View
- hiring-conversion layer
- supporting-case disclosure
- phone/WhatsApp route presence
- direct case deep links
- node deep links
- accessible dialog semantics
- evidence-review state
- graph-origin case URL restoration
- direct-case clean URL close behavior
- keyboard search
- exact-label search routing
- browser page-error capture

### Synthetic mobile Chromium

Viewport: **390 × 844**, mobile/touch emulation enabled.

Checks include:

- horizontal document overflow
- search viewport fit
- breadcrumb/Back visibility
- Recruiter View
- supporting-case disclosure
- case-modal viewport fit
- close-control visibility

### No-JavaScript path

- fallback profile visible
- interactive shell hidden
- flagship proof retained
- approved phone route retained

### Failure diagnostics

Browser-smoke failures save error text, current URLs and screenshots. GitHub Actions uploads those files temporarily for diagnosis.

## 3. Public evidence link health

Workflow:

- `.github/workflows/link-health.yml`

Checker:

- `scripts/check-external-links.mjs`

Monitored evidence includes:

- `pragalbh.in`
- public GitHub profile
- AquaPulse
- HA Kubernetes installer
- MAAS configurations
- BDSPS web platform
- FET timetable repository
- signage auto-install
- Proxmox cloud-init scripts
- BDSPS AR
- live `bdsps.in`

The checker uses bounded retries/backoff for transient failures while still failing on persistently broken proof links.

It runs weekly, manually and whenever its own monitor configuration changes.

## 4. GitHub Pages delivery

The production delivery path remains the repository's existing branch-based GitHub Pages system.

The live root is intentionally directly deployable:

- `index.html`
- `assets/`
- `CNAME`

No duplicate custom Pages deployment workflow is used.

## Confirmed automated baseline — 26 August 2026

The documented baseline has completed successfully across:

- Portfolio audit
- rendered Browser smoke
- synthetic mobile/no-JavaScript Browser smoke coverage
- Public evidence link health
- GitHub Pages deployment

This establishes a verified automated baseline for the code-controlled surface.

It does **not** establish universal browser/device/accessibility conformance.

## Physical / cross-browser QA still required

Tracked in **GitHub Issue #1**.

Remaining checks include:

### Browser/device

- iPhone Safari portrait + landscape
- Android Chrome
- desktop Safari
- manual desktop Chrome
- Edge

### Interaction/accessibility

- real touch pan / pinch behavior
- case modal scroll on physical small screens
- keyboard-only real-browser end-to-end pass
- VoiceOver / screen-reader smoke test
- OS/browser reduced-motion behavior
- native phone link handoff
- native WhatsApp handoff

Synthetic Chromium coverage must not be described as proof of Safari, Android or VoiceOver behavior.

## Performance still requiring real measurement

The repository now controls raw source size through `PERFORMANCE_BUDGET.md`, but still does not claim:

- Lighthouse Performance score
- LCP
- INP
- CLS
- TTFB
- real mobile-network timing
- mobile CPU interaction smoothness

Those require an actual measured browser/network environment.

## Evidence enrichment, not structural blockers

Tracked in **GitHub Issue #2**.

Examples:

- real privacy-safe field photographs
- AquaPulse stable UI screenshots
- redacted Proxmox/TrueNAS screenshots
- measured edge-node power/autonomy data
- Smart Classroom pilot evidence
- anonymised leadership/assessment/compliance examples
- admissions enquiry/status aggregate evidence
- future social-preview artwork if warranted

## Privacy / attribution baseline

### Approved public contact

- Phone: +91 95558 77000
- WhatsApp: +91 95558 77000

No public email.

### Protected information

Do not publish:

- protected exact operating inventory counts
- internal IP ranges/private topology
- student, parent, candidate or employee records
- credentials/secrets/private identifiers
- unnecessary serial numbers
- sensitive physical-security layouts
- raw financial/compliance records

### Attribution boundary

Do not attribute Kritica Dwivedi's Graphic Design, UI/UX Design, Art Direction, Brand Visual Design, Campaign Visual Design or Portfolio Visual Storytelling work to Pragalbh.

## Claims baseline

The portfolio distinguishes:

- live system
- public repository
- source-backed architecture/system
- applied infrastructure
- field system design
- field troubleshooting
- prototype / active development

Unmeasured percentages, ROI, uptime, adoption, learning gains, hiring improvement or enrollment-growth claims remain prohibited by `OUTCOME_REGISTER.md`.

## Production baseline conclusion

The portfolio now has a verified automated production baseline across source integrity, rendered interaction, public proof health, payload guardrails and GitHub Pages delivery.

It should be treated as **production baseline with physical/cross-browser QA and evidence enrichment continuing**, not as a frozen finished artifact.

Future substantial project work should continue the established loop:

`project → evidence → outcome classification → case study → capability relationships → source audit → rendered smoke → deploy → proof monitoring`
