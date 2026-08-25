# Pragalbh Dwivedi Portfolio — Evidence Register

Updated: 26 August 2026

This file is the control sheet for **Sprint 1: Real Evidence**.

The rule is simple: a portfolio claim is stronger when a visitor can trace it to a live system, public repository, source document, implementation record, redacted screenshot, field photograph, troubleshooting record, or architecture diagram.

This register is intentionally stricter than the public-facing site. It distinguishes what is already verifiable, what is source-backed but not public, what still needs media capture, and what must be redacted before publication.

## Evidence states

- **PUBLIC / READY** — can be linked or shown now.
- **SOURCE-BACKED / READY** — source exists; public portfolio should show a privacy-safe derivative, diagram or excerpt rather than the raw source.
- **CAPTURE REQUIRED** — the project is real/applied but the portfolio still needs a suitable photo, screenshot or diagram.
- **REDACTION REQUIRED** — evidence exists but cannot be published before identifiers, personal data, internal topology or protected counts are removed.
- **DO NOT PUBLISH RAW** — useful internal evidence that should only inform a derivative case-study asset.

## Publication rules

1. Every asset must prove a specific claim.
2. Prototype work remains labelled prototype.
3. Design work belonging to Kritica Dwivedi is not used as evidence of Pragalbh's professional graphic/UI/UX/art-direction capability.
4. Do not publish precise protected operational counts for institutions, classrooms or transport assets.
5. Remove student/employee personal data, credentials, internal IP addresses, unnecessary serial numbers and sensitive security topology.
6. Prefer architecture diagrams and anonymised examples where raw screenshots disclose too much.

---

# Tier A flagship evidence

| Case study | Proof type | Evidence already available | Public readiness | What it proves | Next evidence task |
|---|---|---|---|---|---|
| **AquaPulse** | PUBLIC REPOSITORY / ACTIVE DEVELOPMENT | Public repository and detailed README documenting active prototype/internal beta status, Next.js + NestJS + PostgreSQL stack, workflow/RBAC/audit direction, self-hosted target and human-in-the-loop AI boundary | PUBLIC / READY | Product requirements, operational software architecture, governance, self-hosting and staged cutover thinking | Add stable privacy-safe application screenshots and one architecture visual when the UI is mature enough |
| **BDSPS Digital Ecosystem** | LIVE + PUBLIC REPOSITORY | Live public site, `bds-web` repository, scheduled festival-data workflow, public site/document structure, timetable repository | PUBLIC / READY | Institutional information architecture, public publishing, GitHub-managed automation and machine-readable academic operations | Add a live-site screenshot, workflow screenshot and timetable publishing example |
| **Private Infrastructure Stack** | APPLIED INFRASTRUCTURE | Public MAAS/configuration repositories plus operational Proxmox/TrueNAS/Ceph/Linux administration and troubleshooting history | MIXED | Self-hosted compute/storage thinking, repeatable provisioning, recovery and integration | Capture redacted Proxmox and TrueNAS screenshots; photograph hosts/rack without exposing labels or sensitive topology |
| **HA Kubernetes Architecture** | PUBLIC REPOSITORY | `k8s-ha-installer` README and scripts document external etcd/TLS, HAProxy + Keepalived VIP, Calico/WireGuard, audit logging and SSH orchestration | PUBLIC / READY | HA architecture, automation, resilience and repeatable multi-node deployment | Add a clean architecture diagram derived from the repo and a short failure/recovery explanation |
| **Smart Classroom Architecture** | SOURCE-BACKED ARCHITECTURE / PROTOTYPE | Formal prototype proposal covering Raspberry Pi edge compute, timetable automation, AirPlay/browser sharing, RTSP camera input, local NVMe buffering, central services, attendance context, degraded-network behaviour and privacy controls | SOURCE-BACKED / READY | Requirements engineering, EdTech architecture, offline-first design, timetable-driven automation and privacy-aware operations | Publish a redacted architecture diagram; later add pilot endpoint/projector/camera photos and dashboard screenshots |
| **Solar CCTV Edge Infrastructure** | FIELD SYSTEM DESIGN | Real field requirement and troubleshooting history around cameras, outdoor wireless, PoE switching, remote power and direct-DC solar/battery architecture | CAPTURE REQUIRED | IT/OT integration, power/network co-design, autonomy planning and edge-system thinking | Capture pole/AP/camera photos, power enclosure photo, direct-DC diagram and privacy-safe power-budget summary |

---

# Tier B supporting evidence

| Project | Proof type | Evidence state | Safe public form | Next action |
|---|---|---|---|---|
| **Identity, RFID & Access Architecture** | APPLIED SYSTEM DESIGN | CAPTURE REQUIRED | Dummy credential + logical identity diagram | Create anonymised student/staff/transport identity examples and show RFID/QR/access relationships |
| **Hikvision Access Control / EM Lock** | FIELD TROUBLESHOOTING | SOURCE-BACKED / READY | Technical relay/wiring schematic | Use the existing Hikvision DS-K1T321 + EM-lock + no-touch-exit wiring diagram as source; publish a simplified portfolio schematic, not an installation/security map |
| **Hikvision-Compatible NVR** | SYSTEM DESIGN | CAPTURE REQUIRED | NVR architecture diagram | Show camera → VLAN/network → RTSP/ONVIF → Linux/Docker NVR → storage/backup flow |
| **Konica Minolta → TrueNAS** | FIELD TROUBLESHOOTING | CAPTURE REQUIRED | Short troubleshooting timeline | Document FTP integration, `530 Access Denied`, group membership correction and successful workflow without exposing usernames/paths |
| **Three-Phase Solar / Backup Diagnostics** | FIELD TROUBLESHOOTING | CAPTURE + REDACTION REQUIRED | Fault-isolation diagram + selected measurements | Show neutral-loop diagnosis and phase/stabiliser reasoning without publishing a full electrical/security inventory |
| **MAAS Bare-Metal Provisioning** | PUBLIC REPOSITORY | PUBLIC / READY | Repo evidence card | Add `maas-configurations` proof showing cloud-init, Netplan, bonding/bridging, OVS and storage automation |
| **BDS Timetable Publishing** | PUBLIC REPOSITORY | PUBLIC / READY | HTML/XML preview + repo link | Add a timetable proof card showing FET XML and generated activity/class/room/teacher views |
| **Signage VM Automation** | PUBLIC REPOSITORY | PUBLIC / READY | Repo proof | Add as supporting evidence under automation/signage rather than a flagship card |
| **BDSPS AR** | PUBLIC REPOSITORY / EXPERIMENT | PUBLIC / READY | Repo proof | Keep as experimental web/education technology work, not a flagship system |
| **Wedding Microsite Engineering** | PUBLIC/REPO ENGINEERING EVIDENCE | OPTIONAL | Engineering-only side-project proof | Include only if it helps a web/deployment audience; retain strict attribution boundary for visual design/art direction |

---

# Leadership evidence register

Technical work is not enough. The portfolio must also prove institutional leadership and academic-system capability.

| Leadership track | Existing evidence | Public form | Status |
|---|---|---|---|
| **Institutional Operations** | Policies, academic planning, staff workflows, notices, admissions and execution systems | Redacted process map + representative templates | CAPTURE / CURATE |
| **Teacher Recruitment & Evaluation** | Recruitment JD pack, selection stages, demo/evaluation thinking and teacher performance expectations | Anonymised recruitment/evaluation framework | SOURCE-BACKED / READY |
| **Curriculum & Assessment** | Curriculum, worksheets, exams, assessment systems and teacher aptitude work | Redacted framework examples | CURATE |
| **Academic Calendar & Execution** | Calendar, timetable and event/assessment planning work | Process diagram + public timetable evidence | PARTLY PUBLIC |
| **Admissions & Communication** | Campaign planning, parent communication and institutional messaging | Funnel/process case study with private data removed | CURATE |
| **Compliance & Documentation** | Formal notices, regulatory-document requests and structured records frameworks | Redacted template/process example | CURATE |

---

# Evidence currently identified outside the portfolio repository

These source assets exist in the user's working/file context and can support derivatives for the public portfolio:

## Smart Classroom Prototype Proposal

Useful public claims supported by the source:

- classroom edge appliance concept
- timetable-driven operating modes
- browser sharing + AirPlay convenience
- RTSP/student-camera integration
- local NVMe cache/buffer
- central self-hosted services
- offline/degraded-network behaviour
- attendance totals without public student identities
- role-based recording access and audited administrative viewing

**Publication rule:** do not reproduce protected operational counts, internal capacity figures or sensitive topology. Use a simplified diagram and concise source-backed explanation.

## Hikvision Access-Control Wiring Diagrams

Useful public claims supported by the source:

- COM / NC / NO relay logic
- fail-safe electromagnetic-lock behaviour
- no-touch exit-button input
- separate lock power supply concept
- reverse-operation troubleshooting context

**Publication rule:** use a simplified learning/troubleshooting schematic. Do not publish a location-specific security layout.

---

# Media folder contract

Future public evidence media belongs under:

`assets/media/<case-id>/`

Recommended case IDs:

- `aquapulse`
- `digital-operations`
- `private-infrastructure`
- `kubernetes-ha`
- `smart-classroom`
- `solar-cctv`
- `identity-access`
- `nvr`
- `truenas-scan`
- `power-diagnostics`
- `leadership`

Filename format:

`<case-id>_<evidence-type>_<sequence>.<ext>`

Examples:

- `smart-classroom_architecture_01.svg`
- `private-infrastructure_proxmox-redacted_01.webp`
- `solar-cctv_pole-installation_01.webp`
- `identity-access_dummy-credential_01.webp`

Every published media asset needs:

- factual caption
- alt text
- proof type
- case-study assignment
- privacy review
- mobile-safe crop where appropriate

---

# Sprint 1 progress

## Completed in this sprint

- evidence taxonomy established
- evidence rail implemented
- live/public/source-backed proof separated visually
- audience and case-study navigation connected
- exact protected inventory counts removed from the public portfolio
- public GitHub evidence audited for AquaPulse, Kubernetes, BDSPS, MAAS and timetable work
- source-backed Smart Classroom evidence identified
- source-backed access-control diagram evidence identified
- media naming and privacy contract defined

## Remaining before Sprint 1 is considered complete

1. Add MAAS and access-control evidence cards to the live evidence rail.
2. Add a timetable/publication proof card or fold it into the BDSPS digital-operations card.
3. Capture or prepare privacy-safe screenshots for BDSPS, Proxmox/TrueNAS and AquaPulse.
4. Export selected field photographs for Solar CCTV and access-control work.
5. Create the first publishable Smart Classroom architecture diagram.
6. Create at least one leadership evidence artifact.
7. Verify every published media item on mobile and desktop.

## Sprint 1 exit criterion

At least every **Tier A flagship case study** must have one concrete proof asset beyond prose, and every Tier B case must have either a public repository, source-backed artifact or a documented capture task.
