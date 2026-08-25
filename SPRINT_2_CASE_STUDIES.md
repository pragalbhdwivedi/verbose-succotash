# Sprint 2 — Six Flagship Deep Case Studies

Updated: 26 August 2026

**Status: ACTIVE**

Sprint 1 established proof. Sprint 2 turns that proof into hiring-grade decision narratives.

## Flagships

1. AquaPulse
2. BDSPS Digital Ecosystem / Institutional Digital Operations
3. Private Infrastructure Stack
4. HA Kubernetes Architecture
5. Smart Classroom Architecture
6. Solar CCTV Edge Infrastructure

Identity & Access remains a strong supporting case study rather than a Tier-A flagship.

## Standard deep-case structure

Each flagship should answer:

1. Context
2. Problem
3. Constraints
4. My role
5. Architecture
6. Implementation path
7. Decisions / trade-offs
8. Failure modes considered
9. Evidence / proof level
10. Current state
11. Outcome / operational value
12. Next iteration

## Current implementation

`assets/case-depth.js` enhances the existing case-study modal system without rewriting the capability graph engine.

`assets/case-depth.css` provides the deep-case layout and flagship/supporting hierarchy.

Current deep narratives are implemented for:

- AquaPulse
- Institutional Digital Operations
- Private Infrastructure
- HA Kubernetes
- Smart Classroom
- Solar CCTV Edge

## Evidence connection

Where a portfolio-owned evidence asset exists, the deep case should show it directly:

- Kubernetes: `assets/media/kubernetes-ha/kubernetes-ha_architecture_01.svg`
- Smart Classroom: `assets/media/smart-classroom/smart-classroom_architecture_01.svg`
- Solar CCTV: `assets/media/solar-cctv/solar-cctv_edge-architecture_01.svg`

Other cases currently link to live/public repositories or await privacy-safe screenshot capture.

## Current claim boundaries

### AquaPulse

Keep **active prototype / internal-beta foundation** status explicit. Do not call it production-ready.

### Digital Operations

Public website and repositories are live/verifiable. Describe the work as institutional information architecture, timetable publishing and repeatable digital operations, not merely web design.

### Private Infrastructure

Use qualitative applied-infrastructure claims until redacted dashboards and physical evidence are added. Do not expose private topology.

### Kubernetes

The public installer/repository is the proof. Do not imply that private cluster topology is public evidence.

### Smart Classroom

Keep **source-backed prototype architecture** status until implementation evidence supports a stronger claim.

### Solar CCTV

Keep **field system design / engineering** status clear. Do not turn autonomy assumptions into measured production performance until actual operating data exists.

## Remaining Sprint 2 work

### P0 — deepen evidence inside modals

- AquaPulse: stable UI screenshots when suitable
- Digital Operations: static live-site + workflow + timetable screenshots
- Private Infrastructure: redacted Proxmox / TrueNAS evidence
- Kubernetes: concise failure/recovery notes and optional repo-file links
- Smart Classroom: pilot media when implementation progresses
- Solar CCTV: field photos and measured power observations

### P0 — outcome layer

Replace generic outcome language with verified operating outcomes where safe:

- reduced manual steps
- repeatable deployment
- centralised information
- improved fault isolation
- standardised data/identity
- lower conversion complexity
- improved recoverability

Never invent percentage improvements.

### P1 — case-to-network relationships

Deep cases should eventually surface related capability nodes so a visitor can move:

`case study → decision → skill → another project`

### P1 — deep links

Add URL/hash support for specific cases, for example:

- `/#case=aquapulse`
- `/#case=kubernetes-ha`
- `/#case=smartclass`

### P1 — recruiter hierarchy

Recruiter View should clearly distinguish:

- Tier-A flagship
- supporting case study
- evidence-only item

## Sprint 2 exit criterion

Sprint 2 is complete when all six Tier-A flagships contain a coherent decision narrative, proof/status is explicit, at least three have visual evidence inside the deep case, outcomes are factual, and a recruiter can understand each project without having to infer Pragalbh's role from the technology list.
