# Pragalbh.in — Static Payload Budget

Updated: 26 August 2026

This budget protects the portfolio from gradual source-weight growth.

It is deliberately a **raw static-source budget**, not a Lighthouse score, compressed-transfer claim or Core Web Vitals claim.

The live site is served directly from the repository root through GitHub Pages. These limits therefore cover the files under our direct control before compression, caching, browser execution and network effects.

## Current Stage 9 baseline

Measured by the production `Portfolio audit` for Stage 9 compacted source commit `e3d7087291ad92c2e44c92373bb839a7e872af95` on 26 August 2026:

| Category | Current raw size |
| --- | ---: |
| `index.html` | 13,555 B |
| live JavaScript under `assets/` | 160,399 B |
| live CSS under `assets/` | 40,860 B |
| current evidence/media SVGs | 79,257 B |
| current controlled raw live surface total | **294,471 B** |

The Stage 9 baseline includes:

- Systems Observatory electrical interaction
- Taste/design semantic tokens
- Impeccable hierarchy cleanup
- typography refinement
- motion choreography/interruption discipline
- meaningful observatory telemetry
- selective spatial polish
- About Me + Simple / Non-Technical View

Compared with the verified pre-Stage-9 Systems Observatory baseline of **274,834 B**, the complete premium-design/audience pass adds **19,637 B raw** while staying inside the original HTML, JavaScript, CSS, evidence-SVG and total-source ceilings.

The evidence/media figure excludes repository documentation because those files are not browser assets.

## Enforced budgets

### HTML

- `index.html`: **20 KiB maximum** (`20,480 B`)

Current headroom: **6,925 B**.

Reason: metadata/no-JS fallback can grow modestly, but substantial case content should remain in progressive case layers rather than turning the root document into a long static résumé.

### JavaScript

- all `assets/*.js` combined: **160 KiB maximum** (`163,840 B`)
- any single live JS file: **32 KiB maximum** (`32,768 B`)

Current combined headroom: **3,441 B**.

Reason: the portfolio intentionally uses dependency-light progressive enhancement. Stage 9 uses native Canvas, SVG, DOM APIs and Web Animations rather than importing particle, Three.js or animation-framework runtimes.

**Policy:** future JavaScript features should normally replace, consolidate or defer existing work before this budget is increased.

### CSS

- all `assets/*.css` combined: **40 KiB maximum** (`40,960 B`)
- any single live CSS file: **16 KiB maximum** (`16,384 B`)

Current combined headroom: **100 B**.

The CSS budget is intentionally saturated after the premium-design pass. New visual work must first simplify, remove or consolidate existing rules. Do not raise this ceiling merely to make CI green.

### Evidence diagrams

For SVGs under `assets/media/`:

- combined diagram SVG inventory: **120 KiB maximum** (`122,880 B`)
- any single evidence SVG: **12 KiB maximum** (`12,288 B`)

Current combined headroom: **43,623 B**.

These limits apply to privacy-safe derivative diagrams. Real photographic evidence has different compression characteristics and must be budgeted separately when introduced.

### Total current live source envelope

The controlled live source set is:

- `index.html`
- `assets/**/*.js`
- `assets/**/*.css`
- `assets/**/*.svg`

Combined raw maximum: **340 KiB** (`348,160 B`).

Current headroom: **53,689 B**.

This envelope intentionally leaves room for evidence refinement while keeping code/style growth visible through their tighter category limits.

## Stage 9 performance rules

The premium interaction layer must remain subordinate to the portfolio content and evidence model.

Current implementation/rules:

- low-count custom Canvas 2D particle field rather than a large particle engine
- device pixel ratio capped for the canvas
- rendering paced to roughly 30 fps rather than attempting maximum frame rate
- drawing pauses when the document or network experience is not visible
- mobile uses fewer particles than desktop
- electrical bolts reuse existing SVG graph geometry
- observatory rings/axes/status layers are native SVG
- selected ancestry uses existing graph geometry rather than a duplicate routing model
- subtle pointer parallax affects only atmospheric/guide layers, not information-node coordinates
- mobile disables pointer parallax
- transient zap DOM is removed after animation
- motion uses semantic timing levels and latest-action-wins interruption
- telemetry reports interface/system-map facts rather than simulated operational metrics
- spatial polish uses the native Web Animations API
- Simple View reuses the existing evidence/case system instead of duplicating case content
- `prefers-reduced-motion` disables decorative movement while preserving information state
- the complete Stage 9 rendered Chromium test suite must remain green

Do not add Three.js, a particle runtime, GSAP or another heavy animation dependency merely to imitate a reference site. A heavier runtime requires an explicit architecture/performance decision and a new measured baseline.

## Future raster evidence

Real screenshots/field photographs are expected through GitHub Issue #2.

Before publishing the first meaningful raster-media batch:

1. create a separate raster-media baseline,
2. prefer AVIF/WebP where practical,
3. use dimensions appropriate to rendered size,
4. lazy-load non-critical media,
5. define per-image and aggregate raster budgets from the actual evidence set,
6. update this file and the validator deliberately.

Do not weaken the existing JS/CSS/HTML budgets simply because photographs are added.

## What this budget does not measure

It does **not** claim or infer:

- Lighthouse Performance score
- LCP
- INP
- CLS
- TTFB
- compressed transfer size
- cache-hit behavior
- third-party font transfer size
- real mobile radio/network performance
- sustained GPU/battery cost on physical iPhone/Android hardware

Those require actual browser/network/device measurement.

## Change policy

Exceeding a budget is not automatically forbidden. It requires an explicit architectural decision.

A budget increase should document:

- what new evidence or capability requires the additional bytes,
- why an existing layer cannot be reused or simplified,
- whether the new asset is initially loaded or lazy-loaded,
- whether a smaller representation was considered,
- the new measured baseline.

Do not increase a limit merely to make CI green.

## Release rule

`npm run audit` must fail when the controlled static source exceeds these limits.

If real evidence later justifies a larger media envelope, revise the media budget explicitly while keeping code/style growth separately constrained.
