# Pragalbh.in — Systems Observatory Design Direction

Updated: 26 August 2026

## Product idea

Pragalbh.in is not meant to behave like a conventional portfolio page with a hero, a stack of cards and a résumé underneath.

The target is a **living systems observatory**: an interactive map that makes institutional leadership, infrastructure, automation, software, education technology and physical systems feel connected because the work itself is connected.

The graph is the memorable interaction. Everything else exists to support comprehension, evidence and conversion.

## Reference principles

The current direction is informed by several references without copying their code or visual identity.

### Stella Nova

Useful principle: the interface feels like part of the system it describes.

Applied here as:

- observatory rings and axes around the capability graph,
- system-state language rather than decorative labels,
- project maturity tags such as `LIVE`, `FIELD`, `PROTO`, `BUILD` and `APPLIED`,
- a map that behaves like an operational instrument rather than a navigation menu.

### HorizonX

Useful principle: make one interaction memorable and spatial rather than animating every section.

Applied here as:

- subtle depth/parallax on desktop,
- luminous response to pointer movement,
- deliberate project lock-on,
- restrained atmospheric particles,
- stronger hierarchy when a project becomes the selected object.

Do not copy paid HorizonX source code or redistribute its assets.

### Emil Kowalski motion skills

Useful principle: motion must have a reason, frequency and hierarchy.

Applied here as:

- fast interaction feedback,
- short node/branch energisation,
- rare expressive electrical discharge,
- persistent state represented with calmer current/glow rather than repeated large animation,
- reduced-motion support as a first-class behavior.

### Impeccable

Useful principle: aggressively reject generic AI-interface defaults.

Applied here as:

- avoid repetitive SaaS-card grids as the primary experience,
- keep typography and spacing disciplined,
- use color to communicate domain/state rather than decorate containers,
- preserve hierarchy and restraint even when motion becomes more expressive.

### Taste Skill

Useful principle: capture why a visual decision exists, not merely its CSS values.

The design rationale for every major treatment should therefore answer:

1. What user/communication problem triggers the decision?
2. What visual or interaction decision is made?
3. Why does that decision fit this portfolio?
4. What evidence/reference supports it?
5. What trade-off does it introduce?

## Current motion hierarchy

### Level 0 — ambient

Low-frequency background behavior that makes the system feel alive without demanding attention.

- sparse particle field,
- slow observatory-ring drift,
- quiet node breathing,
- continuous link current.

### Level 1 — state

Persistent visual language that communicates where the visitor is.

- selected ancestry remains electrically hot,
- selected node receives a stronger charge state,
- project status remains visible,
- project lock-on remains visible until selection changes,
- current-path breadcrumb remains the textual navigation equivalent.

### Level 2 — transition

Short motion used when the information architecture changes.

- newly revealed branches energise outward,
- new links draw in before settling into continuous current,
- nodes receive a brief arrival glow.

### Level 3 — expressive event

Rare motion reserved for meaningful interaction.

- node click produces an electrical zap through currently connected visible links,
- first load powers up from the central Pragalbh node into the five pillars.

Do not add additional Level-3 effects without removing or reducing an existing one.

## Systems-observatory visual grammar

### Core

`PRAGALBH` is the system origin, not simply a profile avatar.

### Pillars

Five primary operating domains orbit the core.

### Domains

Domains are the second level of the operating map.

### Projects

Projects are evidence objects. They receive stronger state treatment and an explicit maturity badge.

Current maturity vocabulary:

- `LIVE` — production/public operating system,
- `FIELD` — field engineering/system work,
- `PROTO` — prototype/source-backed architecture,
- `BUILD` — active development,
- `APPLIED` — applied institutional/infrastructure work,
- `CASE` — fallback where no stronger public maturity label is justified.

This visual status does not replace the deeper proof taxonomy used inside case studies.

## Depth and parallax rules

Depth is deliberately subtle.

Desktop pointer movement may shift:

- the observatory guide layer slightly,
- the ambient particle field in the opposite direction.

It must not move actual information nodes far enough to affect targeting, reading or spatial memory.

Mobile does not use pointer parallax. Touch interaction should prioritise graph navigation.

## Mobile rules

The mobile graph is not a miniature desktop graph.

- use a tighter initial `viewBox`,
- keep the central five-pillar system legible,
- protect headline/search spacing with a rendered regression test,
- avoid outer observatory labels that become visual noise,
- keep touch targets and drawer behavior primary,
- preserve electrical state without requiring hover.

## Reduced-motion rules

With `prefers-reduced-motion: reduce`:

- no particle canvas,
- no zap animation,
- no rotating observatory guides,
- no moving edge current,
- no pulsing decorative animation,
- persistent state may remain through static color, weight and labels.

Reduced motion must still expose the same information hierarchy.

## Performance rules

The systems-observatory layer must remain dependency-light.

The current implementation uses:

- native SVG,
- Canvas 2D,
- Web Animations API,
- CSS animation,
- `requestAnimationFrame` pacing.

Do not introduce Three.js, a particle engine or a large animation framework merely because a reference site uses one.

A heavier runtime is justified only if it improves comprehension in a way that cannot reasonably be achieved with the current stack and the static payload budget is deliberately revised.

## What the interface should feel like

Desired:

- alive,
- precise,
- technical,
- exploratory,
- spatial,
- evidence-driven,
- calm between interactions,
- energetic when a system relationship is revealed.

Avoid:

- gaming HUD parody,
- cyberpunk neon everywhere,
- constant flashing,
- meaningless particles,
- excessive 3D rotation,
- scroll-jacking,
- cards appearing simply because content exists,
- effects that compete with project evidence,
- animation that makes the recruiter route slower.

## Decision test for future animation

Before adding an effect, answer:

1. Does it explain hierarchy, state, causality or transition?
2. Will the visitor see it often enough to become annoying?
3. Can the same meaning be communicated with a quieter state change?
4. Does it remain usable on mobile?
5. Does reduced-motion behavior remain equivalent?
6. Does it fit the existing payload budget?

If the answers are weak, do not add the animation.
