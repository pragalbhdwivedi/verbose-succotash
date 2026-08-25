# Sprint 2 — Six Flagship Deep Case Studies

Updated: 26 August 2026

**Status: ACTIVE — framework complete, evidence enrichment in progress**

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

Each flagship now answers:

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

## Live implementation

- `assets/case-depth.js` — decision narratives and flagship hierarchy
- `assets/case-depth.css` — deep-case layout
- `assets/case-evidence.js` — verified public/source-backed evidence enrichment
- `assets/case-navigation.js` — deep links and case-to-capability navigation
- `assets/case-navigation.css` — relationship/navigation presentation
- `OUTCOME_REGISTER.md` — controlled outcome language and future measurement plan

## Visual evidence now available for all six flagships

- AquaPulse — `assets/media/aquapulse/aquapulse_operational-architecture_01.svg`
- Digital Operations — `assets/media/digital-operations/digital-operations_publish-flow_01.svg`
- Private Infrastructure — `assets/media/private-infrastructure/private-infrastructure_provisioning-loop_01.svg`
- Kubernetes — `assets/media/kubernetes-ha/kubernetes-ha_architecture_01.svg`
- Smart Classroom — `assets/media/smart-classroom/smart-classroom_architecture_01.svg`
- Solar CCTV — `assets/media/solar-cctv/solar-cctv_edge-architecture_01.svg`

## Publicly verified enrichment

### AquaPulse

The public repository supports:

- active prototype / internal-beta foundation status
- Next.js + NestJS + PostgreSQL architecture
- staged Postgres / HTTP cutover
- self-hosted Linux / Proxmox deployment direction
- RBAC / audit / AppSec planning
- assistive, human-in-the-loop AI rather than autonomous control

### BDSPS Digital Operations

Public evidence supports:

- live institutional web delivery
- version-controlled public information structure
- scheduled GitHub Actions content generation
- calendar-driven festival data workflow
- FET XML as machine-readable timetable source
- generated activity/class/teacher/room timetable views

### Private Infrastructure

Public evidence supports:

- version-controlled MAAS provisioning
- cloud-init / Netplan / bonding / bridging / Open vSwitch / storage configuration
- separate Proxmox cloud-init bootstrap evidence

Private dashboards, host identifiers, IP ranges, paths and protected topology remain intentionally unpublished.

### HA Kubernetes

The public installer supports:

- SSH-orchestrated multi-node bootstrap
- external etcd with TLS
- HAProxy + Keepalived virtual endpoint
- Calico + WireGuard networking
- audit logging and log rotation
- time-synchronisation hardening
- metrics / Helm / optional Rancher path

## Completed Sprint 2 interaction work

- deep-case decision narratives for all six flagships
- proof/status boundary visible in each case
- Tier-A vs supporting hierarchy
- visual architecture evidence for all six flagships
- public/source-backed `Verified now` evidence blocks
- case-to-capability navigation
- shareable deep links, e.g. `#case=aquapulse`
- capability deep links, e.g. `#node=kubernetes`
- evidence cards route into the appropriate case or network node
- Kubernetes promoted from a skill-only node into a flagship case study

## Outcome layer

`OUTCOME_REGISTER.md` is now the source of truth for result language.

Safe outcome classes:

- PUBLICLY VERIFIABLE
- SOURCE-BACKED
- APPLIED QUALITATIVE
- NOT YET MEASURABLE

Do not invent:

- percentage improvements
- time savings
- cost savings
- uptime figures
- adoption counts
- production-readiness claims

## Remaining Sprint 2 work

### P0 — real media enrichment

- AquaPulse: stable UI screenshots when suitable
- Digital Operations: static live-site + workflow + timetable screenshots
- Private Infrastructure: redacted Proxmox / TrueNAS / hardware evidence
- Smart Classroom: pilot hardware and dashboard media as implementation progresses
- Solar CCTV: privacy-safe field photographs and measured power observations

### P0 — measured outcomes where feasible

Prospective measurements to capture:

- deployment / rebuild time
- restore / recovery test results
- manual steps before vs after automation
- classroom pilot workflow friction
- real edge-node power consumption and autonomy
- publishing turnaround time
- fault-resolution timeline where safe

### P1 — recruiter hierarchy refinement

Make Recruiter View even clearer about:

- flagship case studies
- supporting applied cases
- evidence-only items
- role fit by audience

### P1 — static/social case sharing

Future enhancement:

- case-specific Open Graph title/description/image handling
- optional printable case-study summary

## Sprint 2 exit criterion

Sprint 2 is complete when:

- all six Tier-A flagships contain coherent decision narratives
- proof/status is explicit
- all six have visual evidence
- public cases expose verifiable evidence without reproducing raw repositories
- outcome language follows `OUTCOME_REGISTER.md`
- recruiters can deep-link directly to a case
- visitors can move from case study back into related capability nodes
- remaining gaps are limited to richer real-world media or measurements that genuinely require future project evidence
