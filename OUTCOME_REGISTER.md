# Pragalbh Dwivedi Portfolio — Outcome Register

Updated: 26 August 2026

This register controls outcome language used in the portfolio.

The purpose is to prevent a common portfolio failure: turning architecture, intention or prototype scope into invented business impact.

## Outcome classes

- **PUBLICLY VERIFIABLE** — supported by a live system or public repository.
- **SOURCE-BACKED** — supported by an internal proposal, implementation record or troubleshooting history; publish only a privacy-safe derivative.
- **APPLIED QUALITATIVE** — based on real operational work, but not yet expressed as a safe public metric.
- **NOT YET MEASURABLE** — architecture or implementation is too early for an outcome claim.

No percentage improvement, cost saving, uptime figure, adoption figure or fleet/classroom/institution count should be invented or published merely to make a case study look more impressive.

---

## Tier-A flagship outcomes

| Case | Outcome class | Safe outcome language | Evidence basis | Do not claim yet |
|---|---|---|---|---|
| **AquaPulse** | PUBLICLY VERIFIABLE / ACTIVE PROTOTYPE | A coherent operational model now exists across alerts, workflows, roles, auditability and staged durable-data cutover. The project has explicit safety boundaries for assistive AI and a documented path toward self-hosted deployment. | Public README and repository architecture | Production readiness, user adoption, farm ROI, sensor automation impact |
| **BDSPS Digital Operations** | PUBLICLY VERIFIABLE | Public institutional publishing is structured through a live website, version-controlled repositories, scheduled content generation and machine-readable timetable outputs rather than being only a set of isolated manual pages. | Live site, `bds-web`, scheduled GitHub Actions workflow, `tt-bds` | Time saved, traffic, parent engagement percentages, staff adoption metrics unless measured |
| **Private Infrastructure Stack** | APPLIED QUALITATIVE | Compute, storage, provisioning and recovery are treated as one self-hosted operating practice rather than isolated appliances. Repeatable provisioning reduces dependence on undocumented one-off builds. | Public MAAS/cloud-init evidence plus operational administration and troubleshooting history | Uptime percentage, recovery-time objective, cost savings, host counts, private capacity figures |
| **HA Kubernetes** | PUBLICLY VERIFIABLE | The public project demonstrates a repeatable HA bootstrap with inspectable architecture, orchestration, logging and resilience components instead of a one-time manually assembled cluster. | Public `k8s-ha-installer` repository | Production-cluster SLA, failover timing, scale figures unless tested and published |
| **Smart Classroom** | SOURCE-BACKED / NOT YET MEASURABLE | The prototype architecture defines how timetable automation, classroom edge compute, presentation, video, local buffering, attendance context and central services should behave together, including degraded-network behavior. | Formal prototype proposal and implementation planning | Campus-wide deployment, teacher productivity improvement, recording reliability, adoption metrics until pilot evidence exists |
| **Solar CCTV Edge** | APPLIED QUALITATIVE / FIELD DESIGN | Power autonomy, PoE load and wireless backhaul are now treated as one edge-system design, reducing architectural dependence on unnecessary DC→AC→DC conversion stages where direct DC is practical. | Field requirements, power/network planning and troubleshooting history | Measured energy savings, autonomy duration, uptime or maintenance reduction until measured in operation |

---

## Supporting outcomes

| Project | Safe outcome language |
|---|---|
| **MAAS Bare-Metal Provisioning** | Network and storage configuration can be expressed as version-controlled provisioning rather than repeated manual machine setup. |
| **Konica Minolta → TrueNAS** | A device-to-storage scan workflow was made operational by isolating authentication/group-permission failure rather than replacing the whole workflow. |
| **Access Control / EM Lock** | Relay behavior was reduced to explicit COM/NC/NO and fail-safe logic, making reverse-lock behavior diagnosable instead of mysterious. |
| **Three-Phase Solar Diagnostics** | Measurement-driven fault isolation identified neutral-loop behavior and phase/load interactions rather than treating inverter/stabiliser symptoms independently. |
| **Identity / RFID** | Identity fields, RFID/QR interfaces and access roles are being standardised as a system model rather than designed as unrelated card layouts. |
| **Timetable Publishing** | FET XML provides a machine-readable academic source that can feed generated operational views instead of remaining only a printed timetable. |

---

## Outcome writing rules for the live portfolio

Prefer:

- repeatable deployment
- machine-readable source of truth
- centralised publishing
- reduced dependence on one-off manual configuration
- clearer fault isolation
- explicit fail-safe logic
- standardised identity relationships
- degraded-network resilience by design
- fewer architectural conversion stages
- public evidence is inspectable

Avoid unless measured:

- "X% faster"
- "saved Y hours"
- "reduced cost by Z%"
- "99.9% uptime"
- "served N users"
- exact protected operational counts
- "production-ready" for prototypes or active-development systems

## Next measurement opportunities

When projects mature, collect evidence for:

1. deployment/rebuild time
2. restore/recovery test results
3. manual steps before vs after automation
4. classroom pilot workflow friction
5. real edge-node power consumption and autonomy
6. publishing turnaround time
7. fault resolution timeline where safe
8. application workflow completion / error rates where appropriate

Measurements should be captured prospectively rather than reconstructed later from memory.
