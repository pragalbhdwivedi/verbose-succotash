# Pragalbh.in — Stage 9B Impeccable Visual Audit

Updated: 26 August 2026

## Purpose

Stage 9B removes generic portfolio/SaaS visual habits without changing the proven information architecture.

The target is a calm technical editorial system: evidence should feel deliberate, hierarchy should come from composition and typography, and containers should exist only when the boundary itself carries meaning.

## Audit summary

### 1. Border density — FIXED IN 9B

Problem:
- recruiter metrics, solution cards, case cards, chips, architecture steps, evidence cards and modal blocks all relied on similar bordered rectangles.
- this made different kinds of information feel equally important.

Decision:
- use whitespace, alignment and hairlines for ordinary information.
- preserve stronger containment for evidence media, search results, controls and system surfaces where the boundary communicates interaction or proof.

Trade-off:
- the interface becomes less obviously componentized, so spacing discipline becomes more important.

### 2. Repetitive card grid — FIXED IN 9B

Problem:
- repeated equal cards made the Recruiter View resemble a generic SaaS landing page.

Decision:
- convert “what I solve” into an editorial ruled grid.
- make flagship case-study presentation asymmetric so important work gets more visual weight.
- supporting cases remain subordinate.

Trade-off:
- asymmetric layouts require explicit mobile collapse rules.

### 3. Pill/chip overuse — FIXED IN 9B

Problem:
- capabilities and metadata were repeatedly expressed as small bordered pills.

Decision:
- capability chips become lightweight notation separated by rhythm rather than containers.
- maturity/proof states retain explicit compact treatments because their boundary carries semantic meaning.

### 4. Search/control chrome — FIXED IN 9B

Problem:
- search and view controls visually competed with the observatory.

Decision:
- reduce container chrome and use underline/state emphasis.
- keep focus states explicit and accessible.

### 5. Recruiter hierarchy — FIXED IN 9B

Problem:
- hero, metrics, solutions and cases were all similarly dense.

Decision:
- make the hero more editorial and spacious.
- metrics become a thin operating-context band.
- solution sections become quieter.
- case studies carry the strongest downstream visual hierarchy.

### 6. Case-study modal density — FIXED IN 9B

Problem:
- nested bordered blocks made detailed cases feel like dashboards inside a modal.

Decision:
- replace most boxes with ruled sections and column rhythm.
- retain media/proof containment where it supports evidence comprehension.

### 7. Evidence containment — REFINED, NOT REMOVED

Evidence is allowed stronger visual framing than ordinary text because it is a proof object.

Decision:
- remove unnecessary outer-card framing.
- retain media frames, proof labels and source boundaries.

### 8. Typography — DEFERRED TO 9C

9B improves hierarchy through spacing and composition but does not yet replace/refine the type scale in depth.

Stage 9C owns:
- editorial display hierarchy,
- telemetry hierarchy,
- body measure,
- case-study reading scale,
- mobile type tuning.

### 9. Motion choreography — DEFERRED TO 9D

9B does not add new animation.

Stage 9D will review motion purpose, duration, easing, interruption and frequency.

## Visual acceptance rules after 9B

A screen should fail review if:

1. three adjacent content groups all use identical bordered rectangles,
2. a metadata token looks like a button but is not interactive,
3. a supporting item has the same visual weight as a flagship proof object,
4. a section uses a card because spacing alone was not considered,
5. the recruiter route feels like a component gallery rather than an argument for hiring,
6. visual ornament competes with the systems observatory,
7. mobile collapses retain desktop asymmetry in a way that harms reading order.

## Scope boundary

9B changes visual composition only.

It does not change:
- capability data,
- proof taxonomy,
- attribution boundaries,
- privacy rules,
- deep-link behavior,
- case-study facts,
- contact channels,
- Systems Observatory electrical behavior.
