# Pragalbh.in — Motion System

Updated: 26 August 2026
Stage: 9D — Motion choreography audit
Status: Baseline defined

## Purpose

Motion exists to explain change in the systems observatory. It is not a second visual theme layered over the portfolio.

The governing sequence is:

**Trigger → information change → motion level → duration → interruption rule → reduced-motion equivalent**

Every animation must make state, hierarchy, causality or navigation easier to understand.

## Motion levels

### Level 0 — Ambient
Examples: sparse particles, slow guide-ring drift, low-intensity current, quiet node breathing.

Purpose: communicate that the system is active without demanding attention.

Rules:
- continuous motion must be visually low contrast
- it pauses when the network is not visible
- it disappears or becomes static under `prefers-reduced-motion`
- it must never move actual interaction targets

### Level 1 — State
Examples: selected path stays electrically hot, selected node stays charged, project lock-on, maturity/status remains visible.

Purpose: preserve location and spatial memory.

Rules:
- persistent state is calmer than click feedback
- state must survive without animation
- state must never depend on hover

### Level 2 — Transition
Examples: new branches energise, nodes arrive, drawer/case content reveals, viewport settles.

Purpose: show that the information architecture changed.

Target duration: approximately 360 ms, with short controlled staggering when multiple related objects arrive.

Rules:
- new information should appear in causal order from the selected object outward
- transitions should be interruptible
- repeated user actions should not queue long animation chains

### Level 3 — Expressive event
Examples: first-load power-up and meaningful node activation zap.

Purpose: make the core systems interaction memorable.

Target envelope: approximately 620 ms total event duration.

Rules:
- only one expressive event owns attention at a time
- a new user activation cancels stale pending discharge work
- expressive events never block navigation or input
- no additional Level-3 effect may be added without removing or reducing an existing one

## Canonical timing vocabulary

The semantic timing tokens remain defined in `assets/design-tokens.css`:

- `--motion-fast: 140ms`
- `--motion-ui: 220ms`
- `--motion-transition: 360ms`
- `--motion-expressive: 620ms`
- `--ease-ui: cubic-bezier(.2,.7,.2,1)`
- `--ease-settle: cubic-bezier(.16,1,.3,1)`

JavaScript choreography should use equivalent named constants rather than unrelated literal durations.

## Interaction choreography

### Initial load

1. Core identity and five pillars are available immediately.
2. Observatory atmosphere becomes active without delaying input.
3. One short root-origin discharge communicates the powered-system metaphor.
4. The interface then returns to a calm persistent state.

### Node activation

1. User activates a node.
2. Selection state changes immediately.
3. Existing/pending expressive discharge belonging to an older selection is cancelled.
4. Node impact feedback occurs.
5. Connected visible branches discharge outward with a short stagger.
6. Newly revealed branches/nodes energise from nearest to farthest.
7. Selected ancestry remains electrically hot after the transient effect ends.

### Project activation

Project activation uses the same node choreography plus persistent maturity and lock-on state. It must not introduce a second expressive animation species.

### Case opening

Case transition is informational rather than theatrical. Modal/drawer motion should stay at Level 2 or below so project evidence remains the focus.

## Interruption model

The latest explicit user action wins.

A new node activation must invalidate pending bolt timers from the previous activation. Transient `.zap-layer` and `.zap-ring` elements from the previous expressive event should be removed before the new event begins.

This prevents rapid exploration from accumulating visual noise and keeps input responsive.

## Reduced motion

With `prefers-reduced-motion: reduce`:

- particle canvas is absent
- observatory orbit rotation is stopped
- zap bolts/rings are not generated
- decorative breathing/pulsing is stopped
- branch and selection hierarchy remains visible
- maturity/status remains visible
- selected ancestry remains visible
- navigation and case interactions remain fully functional

Reduced motion changes movement, not meaning.

## Mobile motion rules

- no pointer-parallax dependency
- lower particle count than desktop
- expressive effects remain brief
- graph targets do not physically shift as part of decorative motion
- motion must not cover the headline/search controls
- pinch/pan/navigation remain higher priority than spectacle

## Acceptance test

A motion change passes Stage 9D only if:

1. its trigger is explicit
2. its purpose is state, transition, hierarchy or causality
3. its duration maps to the shared timing vocabulary
4. it can be interrupted without leaving stale elements/timers
5. repeated actions do not create an animation queue
6. the same information survives reduced motion
7. input remains available during the effect
8. it does not move the underlying graph targets for decorative reasons
9. it stays inside existing performance budgets
10. removing the animation would reduce comprehension or memorable interaction rather than merely reduce decoration
