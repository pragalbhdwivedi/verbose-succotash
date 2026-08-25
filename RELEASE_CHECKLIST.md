# Pragalbh.in — Release Checklist

Updated: 26 August 2026

Use this checklist before treating a portfolio change as production-ready.

The automated `Portfolio audit` workflow is necessary but not sufficient. It protects syntax, references, contact/privacy rules and core metadata. Human review still controls attribution, evidence quality, interaction and device behaviour.

## 1. Automated gate

Required before release:

- `npm run audit` passes
- GitHub Actions `Portfolio audit` passes
- GitHub Pages deployment completes successfully
- no broken local asset references
- JSON-LD parses
- canonical domain remains `https://pragalbh.in/`
- `CNAME` remains `pragalbh.in`
- no live iframe regression
- no public email / `mailto:`
- no private IPv4 address on live surface
- approved public phone/WhatsApp remains the only public phone number
- protected precise scale phrases remain absent

## 2. Content and claim audit

For every new or edited claim:

- identify its proof type
- verify project maturity/status wording
- distinguish deployed / applied / source-backed / prototype / developing
- do not convert planned architecture into deployed work
- do not invent percentage improvements, savings, adoption, uptime or ROI
- check `OUTCOME_REGISTER.md` before adding impact language
- ensure the case states Pragalbh's actual role
- remove duplicated skill claims where a project already proves the capability

## 3. Attribution audit

Do not attribute these disciplines to Pragalbh:

- Graphic Design
- UI/UX Design
- Art Direction
- Brand Visual Design
- Campaign Visual Design
- Portfolio Visual Storytelling

For mixed-contribution projects, credit Pragalbh only for requirements, systems, implementation, engineering, automation, deployment, troubleshooting or operational work he actually performed.

## 4. Privacy and security audit

Do not publish unless explicitly approved and safe:

- student, parent, candidate or employee personal data
- internal IP addresses
- credentials, tokens, keys or passwords
- exact private topology
- device serial numbers where unnecessary
- exact protected operational inventory
- access-control security details that create avoidable physical-security exposure
- unredacted financial/compliance records

Prefer abstract scale language such as:

- multi-institution
- multi-classroom
- fleet-wide
- self-hosted
- continuous-duty
- cross-domain

## 5. Evidence audit

Every media item must answer: **what claim does this prove?**

Before publishing evidence:

- assign it to a case study
- set proof type
- remove sensitive data
- write factual caption
- add meaningful alt text
- confirm the image/diagram does not imply a more mature status than the text
- use public repository/live links where available
- keep source-backed derivatives separate from raw institutional documents

## 6. Recruiter-view audit

Within roughly 90 seconds, a visitor should be able to determine:

- who Pragalbh is
- what problems he can own
- whether the opportunity fits leadership, advisory or partnership work
- which flagship cases matter to them
- what proof supports those cases
- how to call or WhatsApp him

Keep six flagship cases visible first. Leadership/supporting cases remain available without dominating the default view.

## 7. Network-view audit

Verify:

- root opens five primary pillars only
- node expansion remains progressive
- search opens the correct branch
- current-path breadcrumb follows selected node
- node hash links resolve
- case links open the correct modal
- case-to-capability links return to the correct graph node
- Reset Map returns to root cleanly
- cross-links communicate relationships without excessive visual noise

## 8. Accessibility audit

Automated/source-level:

- SVG nodes keyboard-focusable
- Enter/Space activates nodes
- visible focus states
- search accessible name
- mode buttons expose state
- modal uses dialog semantics
- Escape closes modal
- Tab remains inside modal
- focus restores after close
- reduced-motion preference respected

Manual smoke test:

- keyboard-only navigation
- VoiceOver on iPhone/macOS where available
- modal reading order
- mobile bottom-sheet usability

## 9. Device/browser audit

Required manual checks when layout or interaction changes:

- iPhone Safari portrait
- iPhone Safari landscape
- Android Chrome portrait
- tablet viewport
- desktop Chrome
- desktop Safari
- Edge

Check:

- graph pan/zoom
- no accidental page/graph gesture trap
- case modal scroll
- evidence rail scroll
- phone link
- WhatsApp link
- recruiter/supporting-case toggle
- breadcrumb overflow

## 10. Performance audit

Before adding media/dependencies:

- ask whether it materially improves evidence or comprehension
- prefer SVG for diagrams
- convert photos to WebP/AVIF
- use responsive image sizes
- lazy-load non-critical media
- avoid autoplay media
- avoid heavy 3D libraries unless the information gain justifies them
- do not reintroduce embedded external websites for proof

Real Lighthouse/Core Web Vitals measurements should be recorded only from an actual browser run.

## 11. Discoverability audit

Verify:

- title and description remain accurate
- canonical remains correct
- Open Graph metadata remains accurate
- sitemap date is updated for meaningful releases
- JSON-LD does not contain stale title/contact data
- new standalone routes, if introduced later, receive their own metadata and sitemap entries

## 12. Release close-out

After merge/deploy:

1. verify `Portfolio audit` success
2. verify Pages deployment success
3. open the live domain on at least one mobile and one desktop browser when available
4. update `PORTFOLIO_STATUS.md`
5. update the relevant evidence/outcome register when claims changed
6. record meaningful architecture changes in the roadmap

A release is not complete merely because GitHub accepted the commit. Git is a version-control system, not a quality oracle.
