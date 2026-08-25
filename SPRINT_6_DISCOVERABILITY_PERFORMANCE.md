# Sprint 6 — Discoverability & Performance

Updated: 26 August 2026

**Status: ACTIVE**

Sprint 6 makes the portfolio easier to find, share and load without turning it into an SEO keyword landfill.

## Goals

1. Define `pragalbh.in` as the canonical portfolio URL.
2. Add complete baseline search metadata.
3. Add structured `Person` and `WebSite` data.
4. Keep the approved public contact boundary: phone/WhatsApp only.
5. Keep GitHub as the public technical-evidence identity.
6. Remove unnecessary third-party page embeds from the evidence rail.
7. Maintain a dependency-light first render.
8. Add a lightweight favicon / browser identity.
9. Prepare a future social-preview image without blocking production readiness.

## Source-level performance changes

- Replace the BDSPS live iframe in the evidence rail with a lightweight local evidence visual plus an external `Open live` link.
- Keep evidence diagrams lazy-loaded.
- Preserve progressive enhancement: the core portfolio remains static HTML + CSS + lightweight JavaScript layers.

## Discoverability metadata

Target static metadata:

- canonical URL
- robots index/follow
- author
- Open Graph URL/title/description/type
- Twitter card baseline
- JSON-LD `Person`
- JSON-LD `WebSite`
- GitHub `sameAs`
- approved public telephone

No public email is added.

## Future enrichment

- dedicated 1200×630 social preview image
- search-console verification if desired
- case-specific metadata if case studies later become standalone routes rather than hash-based modals
- performance measurement with a real browser/Lighthouse environment

## Sprint 6 exit criterion

Sprint 6 source-level work is complete when canonical/structured metadata is in the live HTML, the evidence rail has no third-party iframe, and the site has a favicon. Real-browser performance measurement remains a QA task rather than an invented score.
