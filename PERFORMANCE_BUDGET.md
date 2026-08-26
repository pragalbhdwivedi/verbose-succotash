# Pragalbh.in — Static Payload Budget

Updated: 26 August 2026

This budget protects the portfolio from gradual source-weight growth.

It is deliberately a **raw static-source budget**, not a Lighthouse score, compressed-transfer claim or Core Web Vitals claim.

The current live site is served directly from the repository root through GitHub Pages. These limits therefore cover the files under our direct control before compression/caching/network effects.

## Measured baseline

Measured by the production `Portfolio audit` after the electrical-network interaction pass on 26 August 2026:

| Category | Current raw size |
| --- | ---: |
| `index.html` | 13,492 B |
| live JavaScript under `assets/` | 138,806 B |
| live CSS under `assets/` | 31,668 B |
| current evidence/media SVGs | 79,257 B |
| current controlled raw live surface total | **263,623 B** |

The electrical-motion feature increased the controlled raw live surface by **12,972 B** from the previous 250,651 B baseline while remaining inside every existing code/style/overall budget.

The same audit validated 40 local asset references, 40 reachable live assets, 21 JavaScript files, 41 live-surface files and all 12 case-study navigation/review IDs.

The evidence/media figure excludes repository documentation because those files are not browser assets.

## Enforced budgets

### HTML

- `index.html`: **20 KiB maximum** (`20,480 B`)

Current headroom: **6,988 B**.

Reason: metadata/no-JS fallback can grow modestly, but substantial case content should remain in progressive case layers rather than turning the root document into a long static résumé.

### JavaScript

- all `assets/*.js` combined: **160 KiB maximum** (`163,840 B`)
- any single live JS file: **32 KiB maximum** (`32,768 B`)

Current combined headroom: **25,034 B**.

Reason: the portfolio intentionally uses dependency-light progressive enhancement. The new electrical layer uses a small custom canvas/SVG implementation instead of importing a large particle or Three.js runtime.

### CSS

- all `assets/*.css` combined: **40 KiB maximum** (`40,960 B`)
- any single live CSS file: **16 KiB maximum** (`16,384 B`)

Current combined headroom: **9,292 B**.

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

Current headroom: **84,537 B**.

This envelope intentionally leaves room for evidence refinement without making large additions invisible.

## Electrical-motion performance rules

The motion layer must remain subordinate to the portfolio content and interaction model.

Current rules:

- low-count custom particle field rather than a large particle engine,
- device pixel ratio capped for the canvas,
- rendering paced to roughly 30 fps rather than attempting maximum frame rate,
- drawing pauses when the document or network experience is not visible,
- mobile uses fewer particles than desktop,
- electrical bolts reuse existing SVG graph geometry,
- transient zap DOM is removed after animation,
- `prefers-reduced-motion` disables the ambient particle and discharge animation,
- the dedicated electrical Browser smoke test must remain green.

A future visual effect must not justify weakening the existing JavaScript or CSS budgets merely because it is decorative.

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

Those require actual browser/network measurement.

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
