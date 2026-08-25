# Sprint 5 — Mobile, Accessibility & Quality QA

Updated: 26 August 2026

**Status: SOURCE-LEVEL COMPLETE · REAL-DEVICE QA CONTINUES**

The portfolio is intentionally interactive. Sprint 5 ensures that interaction does not become a barrier.

## Source-level quality goals

Implemented:

1. Capability nodes are usable from keyboard as well as pointer/touch.
2. Case-study modals behave as real dialogs.
3. Focus moves into a case when opened and returns when closed.
4. Escape closes an open case.
5. Tab focus remains inside an open modal.
6. View-mode controls expose their state to assistive technology.
7. Search has an accessible name.
8. Motion respects `prefers-reduced-motion`.
9. Mobile interactive controls have larger touch targets.
10. Recruiter View stays compact by showing flagships first.
11. Current-path breadcrumbs provide an explicit navigation path through the graph.
12. Node selections can be shared with `#node=` links.
13. A no-JavaScript fallback preserves the core professional summary, flagship proof and contact routes if the interaction layer fails.

## Progressive enhancement layers

- `assets/accessibility.js`
- `assets/accessibility.css`
- `assets/network-navigation.js`
- `assets/network-navigation.css`

The accessibility layer observes SVG graph rerenders and reapplies keyboard semantics to generated nodes. The network-navigation layer adds breadcrumbs/back navigation and shareable node state without changing the graph data model.

## Automated protection

`npm run audit` / GitHub Actions now checks structural regressions such as syntax, broken asset references, public email/private-IP exposure, canonical metadata, case routing and required governance files.

This does not replace assistive-technology or real-device testing.

## Manual QA still required

Perform after meaningful interaction/layout changes:

- iPhone Safari portrait
- iPhone Safari landscape
- Android Chrome
- tablet viewport
- desktop Chrome
- desktop Safari
- Edge
- keyboard-only navigation
- VoiceOver / screen-reader smoke test
- modal scroll on small screens
- graph pinch/pan behaviour
- breadcrumb overflow/back behaviour
- reduced-motion setting
- phone / WhatsApp links
- supporting-case disclosure

Use `RELEASE_CHECKLIST.md` for the full production smoke-test sequence.

## Sprint 5 exit state

The source-level Sprint 5 exit criterion is met: structural accessibility and navigation improvements are implemented, and the remaining work is a documented real-browser/device validation programme rather than known architecture debt.

Do not claim WCAG conformance from source inspection alone. Record actual assistive-technology/device results when they are performed.
