# Sprint 5 — Mobile, Accessibility & Quality QA

Updated: 26 August 2026

**Status: SOURCE + AUTOMATED RENDERED QA COMPLETE · REAL-DEVICE QA CONTINUES**

The portfolio is intentionally interactive. Sprint 5 ensures that interaction does not become a barrier.

## Implemented source-level controls

1. Capability nodes are usable from keyboard as well as pointer/touch.
2. Case-study modals behave as real dialogs.
3. Focus moves into a case when opened and returns when closed.
4. Escape closes an open case.
5. Tab focus remains inside an open modal.
6. View-mode controls expose their state to assistive technology.
7. Search uses combobox/listbox semantics and keyboard result navigation.
8. Exact/prefix label matches rank ahead of broader incidental search matches.
9. Motion respects `prefers-reduced-motion`.
10. Mobile interactive controls have larger touch targets.
11. Recruiter View stays compact by showing flagships first.
12. Current-path breadcrumbs provide an explicit navigation path through the graph.
13. Node selections can be shared with `#node=` links.
14. Graph-origin case links restore the originating node URL/state when closed.
15. Direct shared case links close to the canonical page URL.
16. A no-JavaScript fallback preserves the professional summary, flagship proof and contact routes if the interaction layer fails.

## Progressive enhancement layers

- `assets/accessibility.js`
- `assets/accessibility.css`
- `assets/network-navigation.js`
- `assets/network-navigation.css`
- `assets/case-review.js`
- `assets/case-review.css`

The full deterministic load order is documented in `ENHANCEMENT_CHAIN.md` and enforced by the source audit.

## Automated rendered browser coverage

The repository now includes:

- `tests/browser-smoke.mjs`
- `.github/workflows/browser-smoke.yml`
- `npm run smoke:browser`

The Playwright/Chromium smoke test currently covers:

### Desktop Chromium

- initial Explore Network state
- Recruiter View mode switching
- Hiring Conversion section
- flagship/supporting case disclosure
- phone/WhatsApp link presence
- direct `#case=aquapulse` opening
- dialog semantics
- evidence-review stamp
- direct case close → clean canonical URL
- `#node=aquapulse` deep link
- breadcrumb/current-path rendering
- graph-origin case open/close → node URL restoration
- keyboard search
- `Kubernetes` exact-result routing
- Escape behavior for search
- browser page-error capture

### Synthetic mobile Chromium

Viewport: **390 × 844**, touch/mobile emulation enabled.

Checks include:

- no horizontal document overflow
- search fits viewport
- node deep-link rendering
- current-path breadcrumb and mobile Back control
- Recruiter View rendering
- supporting-case disclosure remains visible/usable
- no Recruiter View horizontal overflow
- case modal fits viewport width
- case close control remains visible

### No-JavaScript path

- fallback profile remains visible
- interactive app shell is hidden
- flagship proof remains available
- approved phone contact remains available

### Failure diagnostics

On future browser-smoke failure, the test writes screenshots, failing URLs and the error stack to `test-artifacts/`. GitHub Actions uploads those artifacts for short-term regression diagnosis.

## Confirmed automated baseline

On 26 August 2026, a Browser smoke run containing the desktop, synthetic mobile and no-JavaScript checks completed successfully. The matching source audit remained green and the subsequent Pages/public-link-health checks were also successful.

This is automated Chromium coverage only.

## Real-device / cross-browser QA still required

Tracked in **GitHub Issue #1**.

Still required before claiming broad device/browser validation:

- iPhone Safari portrait
- iPhone Safari landscape
- Android Chrome
- desktop Chrome manual smoke
- desktop Safari
- Edge
- keyboard-only real-browser navigation
- VoiceOver / screen-reader smoke test
- modal reading order
- graph pinch/pan native behavior
- breadcrumb overflow/back behavior on physical mobile
- reduced-motion OS/browser behavior
- actual phone / WhatsApp handoff

Synthetic 390×844 Chromium coverage reduces regression risk. It does **not** prove Safari behavior, Android browser behavior, VoiceOver behavior or physical touch/gesture behavior.

Use `RELEASE_CHECKLIST.md` for the full production sequence.

## Sprint 5 exit state

The source-level and automated-rendered Sprint 5 criteria are met. Remaining work is an explicit real-device/cross-browser/assistive-technology validation programme rather than known architecture debt.

Do not claim WCAG conformance or universal mobile compatibility until actual corresponding tests have been performed and recorded.
