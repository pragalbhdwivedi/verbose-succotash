# Pragalbh.in — Progressive Enhancement Chain

Updated: 26 August 2026

The live portfolio intentionally keeps `index.html` lightweight and builds richer behavior through progressively loaded JavaScript layers.

Because several layers wrap `window.openCase`, load order is part of the application architecture and must remain deliberate.

## Base entry

`index.html`

loads directly:

1. `assets/portfolio.js`
2. `assets/evidence.js`

`portfolio.js` owns the base capability graph, Recruiter View, base case renderer, mode switching and drawer behavior.

`evidence.js` builds the evidence rail and then loads the proof/case stack.

## Evidence / case stack

`evidence.js`

→ `proof.js`

`proof.js` performs proof/status enhancement and starts two tracks:

### Independent audience UI

`audience.js`

This can load independently because it does not own the deep-case wrapper chain.

### Deterministic deep-case chain

`case-depth.js`

→ `case-evidence.js`

→ `leadership-case.js`

→ `leadership-systems.js`

→ `academic-scheduling-case.js`

→ `admissions-communication-case.js`

→ `case-navigation.js`

The parent loader advances to the next script only from the preceding script's `onload` callback.

## Post-case interaction chain

After every case definition exists, `case-navigation.js` becomes the owner of post-case enhancement and loads:

`hiring-conversion.js`

→ `accessibility.js`

→ `network-navigation.js`

→ `case-review.js`

Responsibilities:

### `case-navigation.js`

- shareable `#case=` routes
- `#node=` route resolution
- related-capability links
- copy-case-link behavior
- Kubernetes evidence → flagship routing
- starts post-case enhancement chain

### `hiring-conversion.js`

- engagement modes
- end-to-end ownership block
- opportunity-specific proof paths
- flagship-first case disclosure
- loads accessibility layer

### `accessibility.js`

- graph-node keyboard semantics
- search combobox/listbox semantics
- mode ARIA state
- dialog semantics/focus behavior
- direct-hash modal preparation
- loads network navigation

### `network-navigation.js`

- current-path breadcrumbs
- mobile Back control
- shareable selected-node state
- loads case evidence-review layer

### `case-review.js`

- quiet `Evidence reviewed · Aug 2026` stamps
- keeps review date separate from deployment/completion date

## Why the order matters

Each wrapper should receive the fully constructed function from the previous layer.

The target conceptual stack is:

`base case renderer`

→ `proof/status`

→ `deep-case content`

→ `leadership/supporting case definitions`

→ `case routing/navigation`

→ `accessibility/focus behavior`

→ `evidence freshness`

A future refactor may consolidate files, but it must preserve behavior rather than merely reduce file count.

## Rules for future changes

1. New case-definition layers belong **before** `case-navigation.js`.
2. New global interaction wrappers belong **after** all case definitions.
3. Do not load Hiring Conversion from an individual case file.
4. Do not create multiple competing owners for the same downstream loader.
5. If a new layer wraps `window.openCase`, document whether it must run before or after accessibility/case-review behavior.
6. Direct `#case=` opening must remain accessible even if it occurs before `accessibility.js` arrives; accessibility initialization therefore prepares an already-open modal.
7. Run `npm run audit` after any chain change.
8. Add a deep-link regression check to GitHub Issue #1 for any newly introduced case route.

## Future consolidation

Consolidation into fewer bundles may be considered only after real-device QA and if request overhead becomes measurable.

Do not merge layers solely to make the directory look tidier. The current separation also preserves clear responsibility boundaries during ongoing case/evidence development.
