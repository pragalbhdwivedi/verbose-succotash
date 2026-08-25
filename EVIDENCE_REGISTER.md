# Pragalbh Dwivedi Portfolio — Evidence Register

Updated: 26 August 2026

This file is the control sheet for **Sprint 1: Real Evidence**.

A portfolio claim is stronger when a visitor can trace it to a live system, public repository, source document, implementation record, redacted screenshot, field photograph, troubleshooting record, or architecture diagram.

## Evidence states

- **PUBLIC / READY** — can be linked or shown now.
- **SOURCE-BACKED / READY** — source exists; the public portfolio shows a privacy-safe derivative, diagram or excerpt rather than the raw source.
- **CAPTURE REQUIRED** — real/applied work exists but the portfolio still needs suitable media.
- **REDACTION REQUIRED** — evidence exists but cannot be published before identifiers, personal data, topology or protected counts are removed.
- **DO NOT PUBLISH RAW** — source should inform a derivative asset only.

## Publication rules

1. Every asset must prove a specific claim.
2. Prototype work remains labelled prototype.
3. Work belonging to Kritica Dwivedi is not used as evidence of Pragalbh's graphic/UI/UX/art-direction capability.
4. Do not publish precise protected operational counts for institutions, classrooms or transport assets.
5. Remove student/employee personal data, credentials, internal IP addresses, unnecessary serial numbers and sensitive security topology.
6. Prefer architecture diagrams and anonymised examples where raw screenshots disclose too much.

---

# Tier A flagship evidence

| Case study | Proof type | Evidence currently available | Public readiness | Next evidence task |
|---|---|---|---|---|
| **AquaPulse** | PUBLIC REPOSITORY / ACTIVE DEVELOPMENT | Public repo documents active prototype/internal beta status, Next.js + NestJS + PostgreSQL, workflow/RBAC/audit direction, self-hosting and human-in-the-loop AI boundary | PUBLIC / READY | Add stable privacy-safe UI screenshots when interface maturity is sufficient |
| **BDSPS Digital Ecosystem** | LIVE + PUBLIC REPOSITORY | Live public site, `bds-web`, scheduled festival-data workflow and public timetable repository | PUBLIC / READY | Add static live-site/workflow/timetable screenshots so proof survives iframe restrictions and loads faster |
| **Private Infrastructure Stack** | APPLIED INFRASTRUCTURE | Public MAAS/configuration evidence plus operational Proxmox/TrueNAS/Ceph/Linux administration history | MIXED | Capture redacted Proxmox + TrueNAS screenshots and privacy-safe host/rack photography |
| **HA Kubernetes Architecture** | PUBLIC REPOSITORY | Public repo + published privacy-safe architecture SVG showing orchestration, external etcd/TLS, HAProxy/Keepalived VIP and CNI/encryption layers | PUBLIC / READY | Add short failure/recovery explanation to the deep case study |
| **Smart Classroom Architecture** | SOURCE-BACKED ARCHITECTURE / PROTOTYPE | Formal prototype proposal + published privacy-safe architecture SVG | SOURCE-BACKED / READY | Add pilot endpoint/projector/camera photos and dashboard/timetable automation screenshots as implementation progresses |
| **Solar CCTV Edge Infrastructure** | FIELD SYSTEM DESIGN | Field requirement + existing live schematic in evidence rail | PARTLY READY | Publish a dedicated SVG, then replace/augment it with pole/AP/camera and power-enclosure photos |

---

# Tier B supporting evidence

| Project | Proof type | Evidence state | Safe public form / current status | Next action |
|---|---|---|---|---|
| **Identity, RFID & Access Architecture** | APPLIED SYSTEM DESIGN | CAPTURE REQUIRED | Dummy credential + logical identity diagram | Build anonymised identity/RFID/QR relationship asset |
| **Hikvision Access Control / EM Lock** | FIELD TROUBLESHOOTING | SOURCE-BACKED / READY | Published generic fail-safe relay/troubleshooting SVG derived from the wiring record | Add field hardware photo later if it can be published safely |
| **Hikvision-Compatible NVR** | SYSTEM DESIGN | CAPTURE REQUIRED | NVR architecture diagram | Create camera → network → RTSP/ONVIF → Linux/Docker NVR → storage/backup diagram |
| **Konica Minolta → TrueNAS** | FIELD TROUBLESHOOTING | CAPTURE REQUIRED | Short troubleshooting timeline | Document FTP integration, `530 Access Denied`, group-membership correction and successful flow without usernames/paths |
| **Three-Phase Solar / Backup Diagnostics** | FIELD TROUBLESHOOTING | CAPTURE + REDACTION REQUIRED | Fault-isolation diagram + selected measurements | Create neutral-loop/phase-loading troubleshooting visual |
| **MAAS Bare-Metal Provisioning** | PUBLIC REPOSITORY | PUBLIC / READY | Live evidence card now links public repo and exposes cloud-init, Netplan, bonding/bridging, OVS and storage automation | Add dedicated architecture diagram only if it improves the case study |
| **BDS Timetable Publishing** | PUBLIC REPOSITORY | PUBLIC / READY | FET XML plus multiple generated HTML views exist publicly | Add/fold timetable proof into Digital Operations evidence rail |
| **Signage VM Automation** | PUBLIC REPOSITORY | PUBLIC / READY | Supporting repo proof | Keep under automation/signage rather than flagship rail unless audience-specific view needs it |
| **BDSPS AR** | PUBLIC REPOSITORY / EXPERIMENT | PUBLIC / READY | Supporting experimental web/education-tech proof | Keep as secondary evidence |
| **Wedding Microsite Engineering** | ENGINEERING EVIDENCE | OPTIONAL | Engineering-only side-project proof | Include only for web/deployment audiences; preserve attribution boundary |

---

# Leadership evidence register

| Leadership track | Existing evidence | Public form | Status |
|---|---|---|---|
| **Institutional Operations** | Policies, academic planning, staff workflows, notices, admissions and execution systems | Redacted process map + templates | CAPTURE / CURATE |
| **Teacher Recruitment & Evaluation** | Recruitment/JD pack, selection stages, role competencies and performance expectations | Published privacy-safe recruitment/evaluation workflow SVG | SOURCE-BACKED / READY |
| **Curriculum & Assessment** | Curriculum, worksheets, exams, assessment systems and teacher aptitude work | Redacted framework examples | CURATE |
| **Academic Calendar & Execution** | Calendar, timetable and event/assessment planning work | Process diagram + public timetable evidence | PARTLY PUBLIC |
| **Admissions & Communication** | Campaign planning, parent communication and institutional messaging | Funnel/process case study with private data removed | CURATE |
| **Compliance & Documentation** | Formal notices, regulatory-document requests and structured records frameworks | Redacted template/process example | CURATE |

---

# Source-backed assets identified outside the public repo

## Smart Classroom Prototype Proposal

Supports public claims around classroom edge compute, timetable-driven modes, browser sharing/AirPlay convenience, RTSP cameras, local buffering, central services, degraded-network operation, attendance totals without public student identities, and role-based/audited recording access.

**Published derivative:** `assets/media/smart-classroom/smart-classroom_architecture_01.svg`

## Hikvision Access-Control Wiring Diagrams

Supports COM/NC/NO relay logic, fail-safe electromagnetic-lock behaviour, no-touch exit input, separate lock power and reverse-operation troubleshooting.

**Published derivative:** `assets/media/identity-access/access-control_relay-troubleshooting_01.svg`

## Teacher Recruitment / JD Framework

Supports role-specific competencies, screening, written/leadership evaluation where appropriate, demo interaction, interview and explicit performance expectations.

**Published derivative:** `assets/media/leadership/teacher-recruitment_framework_01.svg`

---

# Public evidence assets now owned by this portfolio

- `assets/media/smart-classroom/smart-classroom_architecture_01.svg`
- `assets/media/identity-access/access-control_relay-troubleshooting_01.svg`
- `assets/media/leadership/teacher-recruitment_framework_01.svg`
- `assets/media/kubernetes-ha/kubernetes-ha_architecture_01.svg`

All new media follows the publication contract in `assets/media/README.md`.

---

# Sprint 1 progress

## Completed

- evidence taxonomy established
- evidence rail implemented
- live/public/source-backed proof visually separated
- audience + case-study navigation connected
- exact protected operational counts removed from public portfolio
- public GitHub evidence audited for AquaPulse, Kubernetes, BDSPS, MAAS and timetable work
- MAAS evidence added to live rail
- access-control evidence added to live rail
- Smart Classroom source-backed architecture published
- Kubernetes public-repo architecture published
- access-control troubleshooting schematic published
- first leadership evidence artifact published
- media naming/privacy contract defined

## Remaining before Sprint 1 closes

1. Fold public FET timetable proof more visibly into Digital Operations.
2. Capture/prepare privacy-safe BDSPS, Proxmox/TrueNAS and AquaPulse screenshots.
3. Export selected field photographs for Solar CCTV and access-control work.
4. Publish dedicated Solar CCTV architecture SVG.
5. Add at least one privacy-safe private-infrastructure visual beyond repository proof.
6. Verify all evidence cards and media on mobile and desktop.

## Sprint 1 exit criterion

Every **Tier A flagship case study** has at least one concrete proof asset beyond prose, and every Tier B case has either a public repository, source-backed artifact or a documented capture task.
