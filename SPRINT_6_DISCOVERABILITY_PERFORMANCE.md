# Sprint 6 — Discoverability & Performance

Updated: 26 August 2026

**Status: SOURCE-LEVEL WORK COMPLETE — REAL-BROWSER MEASUREMENT REMAINS QA**

Sprint 6 makes the portfolio easier to find, share and load without turning it into an SEO keyword landfill.

## Implemented

1. `pragalbh.in` is declared as the canonical portfolio URL.
2. Search metadata includes robots, author and a concise portfolio description.
3. Open Graph URL/title/description/type/site-name metadata is present.
4. Twitter summary metadata is present without inventing a social-preview asset.
5. Structured JSON-LD includes `Person` and `WebSite` data.
6. GitHub is linked as the public technical-evidence identity via `sameAs`.
7. The approved public telephone is present; no public email has been added.
8. The BDSPS evidence card no longer embeds a third-party live iframe.
9. Live-system evidence uses a lightweight local visual plus an external `Open live` link.
10. A lightweight SVG favicon is present.
11. `robots.txt` and `sitemap.xml` are present.
12. Evidence diagrams remain lazy-loaded and the site remains dependency-light.

## Files

- `index.html`
- `assets/favicon.svg`
- `assets/evidence.js`
- `robots.txt`
- `sitemap.xml`

## Deliberately deferred

### Dedicated social preview image

A 1200×630 image should be added once the final visual identity / evidence photography is mature enough to justify it. Sprint 6 does not block production on a generic placeholder.

### Search-console verification

Requires the relevant external account/setup and is not represented as completed.

### Real-browser performance measurement

Lighthouse/Core Web Vitals scores should be measured in a real browser environment. No performance score is invented from source inspection.

### Standalone case-study SEO routes

Current case studies use hash-based modal links. Search engines should not be told these are independent pages. If flagship cases later become standalone routes, each can receive dedicated metadata and sitemap entries.

## Sprint 6 exit criteria

- canonical + structured metadata in live HTML — **MET**
- no third-party evidence iframe — **MET**
- favicon — **MET**
- crawler policy + sitemap — **MET**
- contact/privacy boundaries preserved — **MET**

Source-level Sprint 6 is therefore complete. Performance measurement remains part of production QA.
