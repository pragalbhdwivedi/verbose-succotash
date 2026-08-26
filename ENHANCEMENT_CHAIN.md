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

→ `telemetry.js`

→ `spatial-polish.js`

→ `simple-view.js`

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
- semantic motion timings and latest-action-wins interruption
- reduced-motion behavior that removes decorative movement while retaining hierarchy/state
- loads observatory telemetry after the electrical state layer is ready

### `telemetry.js`

Telemetry is explanatory interface state, not simulated operations data.

It exposes:

- selected path depth
- visible relationship count
- visible-system count
- project maturity where applicable
- evidence count where available
- compact mobile status treatment
- drawer system readouts
- no invented CPU, uptime, throughput or other fake operational metrics
- loads selective spatial polish

### `spatial-polish.js`

This layer provides restrained spatial choreography without moving information targets.

It provides:

- case-modal settle/reveal using the Web Animations API
- sequential drawer-information reveal
- interruption-safe replacement of its own animations
- complete suppression under `prefers-reduced-motion`
- no WebGL/Three.js runtime
- loads the Simple View translation layer

### `simple-view.js`

This is the third audience mode and an interpretation layer over the existing evidence system.

It provides:

- **Simple View** beside Explore Network and Recruiter View
- compact mobile labels: Explore / Recruiter / Simple
- non-technical explanations of the same real flagship/system evidence
- About Me content in the recruiter/simple experience
- shared case IDs and shared case modals rather than a duplicate proof database
- phone + WhatsApp conversion only
- no new factual claims beyond the underlying case/evidence system

The implementation deliberately borrows interaction principles from physics/system-world/cinematic references without importing heavyweight particle, Three.js or paid reference-site source.

`DESIGN_DIRECTION.md`, `DESIGN_DNA.md`, `MOTION_SYSTEM.md` and `TELEMETRY_SYSTEM.md` govern these layers.

## Why the order matters

Each functional wrapper should receive the fully constructed function from the previous layer. The Systems Observatory and audience-translation layers load only after case review because they observe, explain and decorate the already-working graph rather than owning routing, case facts, proof taxonomy or accessibility semantics.

The target conceptual stack is:

`base case renderer`

→ `proof/status`

→ `deep-case content`

→ `leadership/supporting case definitions`

→ `case routing/navigation`

→ `accessibility/focus behavior`

→ `evidence freshness`

→ `electrical system state + motion`

→ `meaningful telemetry`

→ `spatial choreography`

→ `plain-language audience translation`

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
10. Telemetry must report interface/system-map state or verified evidence facts; do not simulate operational metrics.
11. Simple View must reuse the same case IDs/evidence and must not become a second claims database.
12. `prefers-reduced-motion` must remain respected when motion effects change.
13. Keep Stage 9 layers within existing JS/CSS/static payload budgets unless an explicit budget review justifies a change.
14. Do not import paid reference-site assets/source into the portfolio.
15. Run `npm run audit` after any chain change.
16. Keep the full rendered Browser smoke suite green after interaction/audience changes.
17. Add a deep-link regression check to GitHub Issue #1 for any newly introduced case route.

## Future consolidation

Consolidation into fewer bundles may be considered only after real-device QA and if request overhead becomes measurable.

Do not merge layers solely to make the directory look tidier. The current separation preserves clear responsibility boundaries and makes the visual/audience layers removable or replaceable without destabilising the evidence/case system.
