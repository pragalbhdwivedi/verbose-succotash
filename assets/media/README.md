# Portfolio Evidence Media

This directory is reserved for **privacy-safe, case-study-specific proof assets** used by `pragalbh.in`.

Do not add images merely because they look technical. Every asset must prove a claim in a named case study.

## Directory structure

```text
assets/media/
  aquapulse/
  digital-operations/
  private-infrastructure/
  kubernetes-ha/
  smart-classroom/
  solar-cctv/
  identity-access/
  nvr/
  truenas-scan/
  power-diagnostics/
  leadership/
```

Create a case directory only when the first real asset is ready.

## File naming

`<case-id>_<evidence-type>_<sequence>.<ext>`

Examples:

- `smart-classroom_architecture_01.svg`
- `private-infrastructure_proxmox-redacted_01.webp`
- `solar-cctv_pole-installation_01.webp`
- `identity-access_dummy-credential_01.webp`

## Preferred formats

- diagrams: SVG where practical
- photographs/screenshots: WebP or AVIF
- fallback PNG only when necessary

## Required metadata before publication

For every asset record:

- case study
- proof type
- claim supported
- factual caption
- alt text
- redactions performed
- source/origin

## Privacy check

Never publish an asset that exposes:

- student or employee personal data
- passwords, tokens or credentials
- internal IP addresses unless explicitly approved and safe
- unnecessary serial numbers
- sensitive access-control/security topology
- precise protected operational inventory counts
- private phone/email data not approved for public use

## Attribution rule

Visual/design work created by Kritica Dwivedi must not be presented as evidence that Pragalbh Dwivedi is a graphic designer, UI/UX designer or art director. Where such work appears in an engineering case study, the caption must make Pragalbh's implementation/deployment contribution clear.

See `EVIDENCE_REGISTER.md` and `PORTFOLIO_ARCHITECTURE.md` before adding new media.
