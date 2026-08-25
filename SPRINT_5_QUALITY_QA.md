# Sprint 5 — Mobile, Accessibility & Quality QA

Updated: 26 August 2026

**Status: ACTIVE**

The portfolio is intentionally interactive. Sprint 5 ensures that interaction does not become a barrier.

## Quality goals

1. Capability nodes are usable from keyboard as well as pointer/touch.
2. Case-study modals behave as real dialogs.
3. Focus moves into a case when opened and returns when closed.
4. Escape closes an open case.
5. Tab focus remains inside an open modal.
6. View-mode controls expose their state to assistive technology.
7. Search has an accessible name.
8. Motion respects `prefers-reduced-motion`.
9. Mobile interactive controls remain comfortably tappable.
10. Recruiter View stays compact by showing flagships first.

## Implementation strategy

Use a progressive enhancement layer rather than rewriting the core graph:

- `assets/accessibility.js`
- `assets/accessibility.css`

The accessibility layer observes SVG graph rerenders and re-applies keyboard semantics to generated nodes.

## Manual QA still required

- iPhone Safari
- Android Chrome
- desktop Chrome
- desktop Safari
- Edge
- keyboard-only navigation
- VoiceOver / screen-reader smoke test
- modal scroll on small screens
- graph pinch/pan behaviour
- reduced-motion setting
- phone / WhatsApp links

## Sprint 5 exit criterion

Sprint 5 is complete when automated/source-level accessibility improvements are in place and the remaining browser/device checks are reduced to a documented manual QA checklist rather than known structural defects.
