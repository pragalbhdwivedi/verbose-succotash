# Pragalbh.in — Release Checklist

Updated: 26 August 2026

Use this checklist before treating a portfolio change as production-ready.

A release is evaluated through four separate layers:

1. **Source audit** — syntax, references, metadata, privacy, attribution and architecture contracts
2. **Rendered browser smoke** — actual Chromium behavior on desktop, synthetic mobile and no-JavaScript paths
3. **Public proof health** — monitored public portfolio/evidence links
4. **Real-device review** — iPhone, Android, Safari/Edge and assistive-technology checks where relevant

No single layer substitutes for the others.

## 1. Automated release gates

Required for live-surface changes:

- `npm run audit` passes
- GitHub Actions `Portfolio audit` passes
- GitHub Actions `Browser smoke` passes when its path filters are triggered
- GitHub Pages deployment completes successfully
- no broken local asset references
- JSON-LD parses
- canonical domain remains `https://pragalbh.in/`
- `CNAME` remains `pragalbh.in`
- no live iframe regression
- no public email / `mailto:`
- no private IPv4 address on live surface
- approved public phone/WhatsApp remains the only public phone number
- protected precise scale phrases remain absent

The Browser smoke workflow exercises:

- desktop Chromium rendering
- synthetic 390×844 touch/mobile viewport
- Recruiter View
- supporting-case disclosure
- case and node deep links
- graph-origin case close → originating node-state restoration
- keyboard search and exact-label search ranking
- accessible dialog semantics
- mobile horizontal-overflow checks
- mobile modal-width/close-control checks
- no-JavaScript fallback

On browser-smoke failure, diagnostic screenshots/URLs are uploaded as a short-lived GitHub Actions artifact.

## 2. Public evidence health

`Public evidence link health` must remain healthy as an operational monitor.

It runs:

- weekly
- manually through GitHub Actions
- whenever its checker/workflow configuration changes

It monitors:

- `pragalbh.in`
- public GitHub profile and selected evidence repositories
- the public BDSPS system

The checker uses bounded retries for transient network/server failures. Permanent broken links still fail the workflow.

This monitor is not required to run on every normal content commit because unrelated external-network instability should not block routine portfolio deployment.

## 3. Content and claim audit

For every new or edited claim:

- identify its proof type
- verify project maturity/status wording
- distinguish deployed / applied / source-backed / prototype / developing
- do not convert planned architecture into deployed work
- do not invent percentage improvements, savings, adoption, uptime or ROI
- check `OUTCOME_REGISTER.md` before adding impact language
- ensure the case states Pragalbh's actual role
- remove duplicated skill claims where a project already proves the capability

## 4. Attribution audit

Do not attribute these disciplines to Pragalbh:

- Graphic Design
- UI/UX Design
- Art Direction
- Brand Visual Design
- Campaign Visual Design
- Portfolio Visual Storytelling

For mixed-contribution projects, credit Pragalbh only for requirements, systems, implementation, engineering, automation, deployment, troubleshooting or operational work he actually performed.

## 5. Privacy and security audit

Do not publish unless explicitly approved and safe:

- student, parent, candidate or employee personal data
- internal IP addresses
- credentials, tokens, keys or passwords
- exact private topology
- device serial numbers where unnecessary
- exact protected operational inventory
- access-control security details that create avoidable physical-security exposure
- unredacted financial/compliance records

Prefer abstract scale language such as:

- multi-institution
- multi-classroom
- fleet-wide
- self-hosted
- continuous-duty
- cross-domain

## 6. Evidence audit

Every media item must answer: **what claim does this prove?**

Before publishing evidence:

- assign it to a case study
- set proof type
- remove sensitive data
- write factual caption
- add meaningful alt text
- confirm the image/diagram does not imply a more mature status than the text
- use public repository/live links where available
- keep source-backed derivatives separate from raw institutional documents
- update `EVIDENCE_REGISTER.md`
- update `CASE_REVIEW_REGISTER.md` when review state changes

## 7. Recruiter-view audit

Within roughly 90 seconds, a visitor should be able to determine:

- who Pragalbh is
- what problems he can own
- whether the opportunity fits leadership, advisory or partnership work
- which flagship cases matter to them
- what proof supports those cases
- how to call or WhatsApp him

Keep six flagship cases visible first. Leadership/supporting cases remain available without dominating the default view.

## 8. Network-view audit

Verify:

- root opens five primary pillars only
- node expansion remains progressive
- exact-label search results rank ahead of broader incidental matches
- current-path breadcrumb follows selected node
- node hash links resolve
- case links open the correct modal
- closing a graph-origin case restores the originating node URL/state
- direct shared case links close to the canonical page URL
- case-to-capability links return to the correct graph node
- Reset Map returns to root cleanly
- cross-links communicate relationships without excessive visual noise

## 9. Accessibility audit

Automated/rendered coverage includes:

- SVG nodes keyboard-focusable
- Enter/Space activation
- visible focus states
- accessible search combobox/listbox semantics
- mode buttons expose state
- modal uses dialog semantics
- Escape closes modal
- Tab containment / focus restoration
- reduced-motion source rule
- no-JavaScript fallback
- synthetic mobile overflow/modal checks

Manual checks still required for major interaction changes:

- keyboard-only real-browser pass
- VoiceOver on iPhone/macOS where available
- modal reading order
- native gesture behavior
- real phone/WhatsApp handoff

Do not claim WCAG conformance from automated smoke tests alone.

## 10. Device/browser audit

Synthetic mobile Chromium is useful regression coverage, not a physical-device substitute.

Required real-device/browser checks for major layout/interaction releases:

- iPhone Safari portrait
- iPhone Safari landscape
- Android Chrome portrait
- desktop Chrome
- desktop Safari
- Edge
- VoiceOver / screen-reader smoke test where available

Check:

- graph pan/zoom
- no accidental page/graph gesture trap
- case modal scroll
- evidence rail scroll
- phone link
- WhatsApp link
- recruiter/supporting-case toggle
- breadcrumb overflow/back behavior

Track this work in GitHub Issue #1.

## 11. Performance audit

Before adding media/dependencies:

- ask whether it materially improves evidence or comprehension
- respect the repository's static payload budget
- prefer SVG for diagrams
- convert photos to WebP/AVIF
- use responsive image sizes
- lazy-load non-critical media
- avoid autoplay media
- avoid heavy 3D libraries unless the information gain justifies them
- do not reintroduce embedded external websites for proof

Real Lighthouse/Core Web Vitals measurements should be recorded only from an actual browser measurement, never inferred from source size.

## 12. Discoverability audit

Verify:

- title and description remain accurate
- canonical remains correct
- Open Graph metadata remains accurate
- sitemap date is updated for meaningful releases
- JSON-LD does not contain stale title/contact data
- new standalone routes, if introduced later, receive their own metadata and sitemap entries

## 13. Release close-out

After merge/deploy:

1. verify `Portfolio audit` success
2. verify `Browser smoke` success when applicable
3. verify Pages deployment success
4. review Public evidence link health if evidence URLs changed
5. open the live domain on a physical mobile/desktop browser for major interaction releases when available
6. update `PORTFOLIO_STATUS.md` when architecture or release gates changed
7. update evidence/outcome/review registers when claims changed
8. record meaningful architecture changes in `CHANGELOG.md` / roadmap

A release is not complete merely because GitHub accepted the commit. Git is a version-control system, not a quality oracle.
