# Pragalbh.in — Static Payload Budget

Updated: 26 August 2026

This budget protects the portfolio from gradual source-weight growth.

It is deliberately a **raw static-source budget**, not a Lighthouse score, compressed-transfer claim or Core Web Vitals claim.

The current live site is served directly from the repository root through GitHub Pages. These limits therefore cover the files under our direct control before compression/caching/network effects.

## Measured baseline

Measured by the production `Portfolio audit` for verified live-surface commit `606e943c91bbaf67974ced6c74414d64ab6ad95c` on 26 August 2026:

| Category | Current raw size |
| --- | ---: |
| `index.html` | 13,492 B |
| live JavaScript under `assets/` | 129,005 B |
| live CSS under `assets/` | 28,497 B |
| current evidence/media SVGs | 79,257 B |
| favicon SVG | 400 B |
| current raw live surface total | **250,651 B** |

The same audit validated 38 local asset references, 38 reachable live assets, 19 JavaScript files, 39 live-surface files and all 12 case-study navigation/review IDs.

The evidence/media figure excludes `assets/media/README.md` because that file is repository documentation rather than a browser asset.

## Enforced budgets

### HTML

- `index.html`: **20 KiB maximum** (`20,480 B`)

Current headroom: **6,988 B** (approximately 6.8 KiB).

Reason: metadata/no-JS fallback can grow modestly, but substantial case content should remain in progressive case layers rather than turning the root document into a long static résumé.

### JavaScript

- all `assets/*.js` combined: **160 KiB maximum** (`163,840 B`)
- any single live JS file: **32 KiB maximum** (`32,768 B`)

Current combined headroom: **34,835 B** (approximately 34.0 KiB).

Reason: the portfolio intentionally uses dependency-light progressive enhancement. A new feature should normally deepen an existing layer rather than introduce a framework/runtime bundle to the live static surface.

### CSS

- all `assets/*.css` combined: **40 KiB maximum** (`40,960 B`)
- any single live CSS file: **16 KiB maximum** (`16,384 B`)

Current combined headroom: **12,463 B** (approximately 12.2 KiB).

### Evidence diagrams

For SVGs under `assets/media/`:

- combined diagram SVG inventory: **120 KiB maximum** (`122,880 B`)
- any single evidence SVG: **12 KiB maximum** (`12,288 B`)

Current combined headroom: **43,623 B** (approximately 42.6 KiB).

These limits apply to privacy-safe derivative diagrams. Real photographic evidence has different compression characteristics and must be budgeted separately when introduced.

### Total current live source envelope

The current controlled live source set is:

- `index.html`
- `assets/**/*.js`
- `assets/**/*.css`
- `assets/**/*.svg`

Combined raw maximum: **340 KiB** (`348,160 B`).

Current headroom: **97,509 B** (approximately 95.2 KiB).

This envelope intentionally leaves room for evidence refinement without making large additions invisible.

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
