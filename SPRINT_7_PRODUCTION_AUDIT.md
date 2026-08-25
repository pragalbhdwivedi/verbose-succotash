# Sprint 7 — Production Audit & Baseline

Updated: 26 August 2026

**Status: AUTOMATED SOURCE AUDIT PASSING — MANUAL DEVICE/BROWSER QA REMAINS**

This stage records what is actually verified before treating the portfolio as a stable professional baseline.

## Automated checks implemented

Workflow: `.github/workflows/portfolio-audit.yml`

The audit runs on `main` pushes and pull requests.

### JavaScript syntax

Every `assets/**/*.js` file is checked with Node syntax validation.

### Canonical files

The audit requires:

- `index.html`
- `CNAME`
- `robots.txt`
- `sitemap.xml`
- `CNAME` exactly equal to `pragalbh.in`
- canonical link to `https://pragalbh.in/`
- sitemap reference in `robots.txt`

### Privacy / security guardrails on the live surface

The audit rejects:

- iframe regressions in live HTML/JavaScript
- public email addresses in live HTML/JavaScript
- private IPv4 addresses in live HTML/JavaScript

These checks do not replace human privacy review, but they prevent several high-risk regressions from quietly returning later.

## Current automated result

The first `Portfolio audit` run completed successfully for commit:

`3cd067174c422c6f878517afd654106bbe6d228a`

The matching GitHub Pages deployment also completed successfully.

## Source-level quality already implemented

- spider-web capability navigation
- Recruiter View
- audience routing
- flagship-first recruiter hierarchy
- six flagship technical/system cases
- six leadership/institutional cases
- evidence taxonomy
- outcome claim controls
- case deep links
- capability deep links
- public-repository/live/source-backed distinction
- privacy-safe evidence diagrams
- keyboard-accessible SVG nodes
- accessible modal dialog semantics
- Escape-to-close
- modal focus trapping
- focus restoration
- reduced-motion support
- mobile touch-target improvements
- canonical metadata
- Person/WebSite structured data
- robots policy
- sitemap
- favicon
- no embedded third-party evidence iframe

## Privacy / attribution baseline

### Approved public contact

- Phone: +91 95558 77000
- WhatsApp: +91 95558 77000

No public email.

### Protected information

Do not publish:

- exact protected institution/classroom/transport inventory counts
- internal IP ranges or private network topology
- student, parent, candidate or employee personal records
- raw financial/compliance records
- credentials, secrets or private identifiers
- location-specific security layouts

### Attribution boundary

Do not attribute Kritica Dwivedi's graphic design, UI/UX, art direction, brand visual design, campaign visual design or portfolio visual storytelling work to Pragalbh.

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

## Manual QA still required

The following cannot be honestly marked complete from repository inspection alone:

### Browser/device

- iPhone Safari
- Android Chrome
- desktop Safari
- desktop Chrome
- Edge

### Interaction

- touch pan / pinch behaviour on the graph
- case modal scrolling on small screens
- keyboard-only end-to-end navigation
- VoiceOver / screen-reader smoke test
- reduced-motion behavior on an actual device/browser
- phone link
- WhatsApp link

### Performance

- Lighthouse / Core Web Vitals measurement
- image/network waterfall
- mobile CPU interaction smoothness

### Discoverability

- search-engine crawl/index confirmation
- optional search-console verification
- future social-preview image validation

## Enrichment backlog, not blockers

- real privacy-safe field photographs
- AquaPulse stable UI screenshots
- redacted Proxmox/TrueNAS screenshots
- measured edge-node power data
- Smart Classroom pilot media
- anonymised recruitment scorecard
- assessment/remedial-response examples
- compliance control-register example
- admissions enquiry/status aggregate evidence
- dedicated 1200×630 social preview image

## Production baseline conclusion

The portfolio now has a stable source architecture, explicit proof/claim boundaries, automated syntax/privacy/canonical checks and a successful Pages deployment.

It should be treated as **production baseline with manual QA outstanding**, not as a frozen finished artifact. Future substantial project work should continue the established loop:

`project → evidence → outcome classification → case study → capability relationships → audit → deploy`
