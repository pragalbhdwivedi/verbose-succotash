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

→ `electrical-motion.js`

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
- synchronous accessibility decoration when a generated case modal opens
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
- loads the visual Systems Observatory layer after the functional interaction stack is ready

### `electrical-motion.js`

This is an isolated visual/system-state enhancement, not a graph-data owner.

It provides:

- low-count ambient Canvas 2D particle field behind the graph
- capped Retina/HiDPI rendering
- approximately 30 fps animation pacing
- visibility-aware rendering
- continuously moving current along visible SVG links
- node charge halos
- initial core-to-pillars power-up discharge
- click/tap electrical discharge through currently connected visible branches
- node impact flash and discharge ring
- coordinate-safe staggered energisation of newly revealed edges/nodes
- three SVG observatory guide rings around the Pragalbh core
- guide axes/ticks and restrained technical depth labels
- subtle desktop-only parallax on guide/atmospheric layers
- persistent electrically hot selected ancestry path
- stronger selected-node state
- project maturity badges (`LIVE`, `FIELD`, `PROTO`, `BUILD`, `APPLIED`, `CASE`)
- selected-project lock-on treatment
- live system-status text that follows the selected object
- tighter mobile graph framing
- reduced-motion behavior that removes decorative movement while retaining hierarchy/state

The implementation deliberately borrows interaction principles from physics/system-world/cinematic references without importing a heavyweight particle, Three.js or animation runtime.

`DESIGN_DIRECTION.md` is the governing rationale for this layer.

## Why the order matters

Each functional wrapper should receive the fully constructed function from the previous layer. The Systems Observatory layer loads only after case review because it observes and decorates the already-working graph rather than owning routing, data or accessibility semantics.

The target conceptual stack is:

`base case renderer`

→ `proof/status`

→ `deep-case content`

→ `leadership/supporting case definitions`

→ `case routing/navigation`

→ `accessibility/focus behavior`

→ `evidence freshness`

→ `Systems Observatory state + motion`

A future refactor may consolidate files, but it must preserve behavior rather than merely reduce file count.

## Rules for future changes

1. New case-definition layers belong **before** `case-navigation.js`.
2. New global interaction wrappers belong **after** all case definitions.
3. Do not load Hiring Conversion from an individual case file.
4. Do not create multiple competing owners for the same downstream loader.
5. If a new layer wraps `window.openCase`, document whether it must run before or after accessibility/case-review behavior.
6. Direct `#case=` opening must remain accessible even if it occurs before `accessibility.js` arrives; accessibility initialization therefore prepares an already-open modal.
7. Systems Observatory motion must never become responsible for graph data, routing or case behavior.
8. Actual information-node coordinates must remain stable; depth/parallax may affect only visual guide/atmospheric layers.
9. Project maturity badges must describe implementation state, not inflate proof strength. Proof taxonomy remains owned by the case/evidence system.
10. `prefers-reduced-motion` must remain respected when motion effects change.
11. Keep the observatory layer within existing JS/CSS/static payload budgets unless an explicit budget review justifies a change.
12. Do not import paid reference-site assets/source into the portfolio.
13. Run `npm run audit` after any chain change.
14. Keep both rendered Browser smoke and the dedicated electrical/observatory smoke test green after interaction changes.
15. Add a deep-link regression check to GitHub Issue #1 for any newly introduced case route.

## Future consolidation

Consolidation into fewer bundles may be considered only after real-device QA and if request overhead becomes measurable.

Do not merge layers solely to make the directory look tidier. The current separation preserves clear responsibility boundaries and makes the observatory layer removable or replaceable without destabilising the evidence/case system.
