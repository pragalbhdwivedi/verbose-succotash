# InfraLens — Internal AI-Assisted Infrastructure Audit Roadmap

## Purpose

InfraLens begins as an internal consulting tool that reduces the time required to turn infrastructure evidence into a structured audit. It should improve consistency and consultant leverage before it is exposed as a customer-facing product.

The tool must not silently make production changes. Its first job is analysis, organisation, evidence extraction and report drafting.

## Phase 0 — Operating rule

Human validation is mandatory for material findings and recommendations.

InfraLens may:
- parse supplied evidence
- normalise inventories
- identify missing information
- flag suspicious or inconsistent configuration
- draft risk statements
- build diagrams from verified topology data
- prepare report sections

InfraLens must not:
- invent configuration that was not supplied
- claim root cause without adequate evidence
- expose secrets in generated reports
- execute destructive commands
- present generic security advice as a penetration-test result

## Phase 1 — Internal evidence normaliser

### Inputs
- Proxmox version / node data
- VM / LXC inventory
- `pvesm status`
- `zpool status`
- `zfs list`
- SMART summaries
- Docker Compose files with secrets removed
- network / VLAN inventories
- firewall / switch summaries
- backup job information
- logs
- manually entered client context

### Normalised output

```text
engagement/
  client-context.json
  inventory/
    compute.json
    storage.json
    network.json
    services.json
    backups.json
  evidence/
  findings/
  diagrams/
  report/
```

## Phase 2 — Deterministic checks

Before using language models, implement explicit checks for facts that can be determined reliably.

Examples:
- pool degraded / faulted
- storage utilisation thresholds
- VM / container resource over-allocation signals
- missing backup coverage in inventory
- backup age
- configuration inconsistency across nodes
- known single points of failure inferred from supplied topology
- duplicate addresses / obvious VLAN inconsistencies in structured input
- exposed management services when explicitly visible in supplied rules

Every check should emit:
- finding ID
- evidence reference
- severity suggestion
- confidence
- remediation category

## Phase 3 — AI reasoning layer

Use the model for work that benefits from contextual synthesis:
- explain why multiple findings may be related
- turn evidence into a clear current-state narrative
- identify unanswered diagnostic questions
- suggest competing root-cause hypotheses
- compare architecture options
- draft decision records
- produce client-friendly executive summaries

The model should cite internal evidence IDs in drafts so the consultant can verify each material statement.

## Phase 4 — Report builder

Generate a draft matching `INFRASTRUCTURE_AUDIT_TEMPLATE.md`.

The report builder should separate:
- observed fact
- client-supplied statement
- inference
- recommendation
- unverified assumption

This distinction is essential for credibility.

## Phase 5 — Diagram generation

From verified structured topology, produce:
- logical network diagram
- compute / storage relationship diagram
- service dependency diagram
- current vs target architecture

Use an editable format such as Mermaid, Graphviz or structured SVG generation rather than an opaque raster image.

## Phase 6 — Consultant workflow

Suggested UI:

1. Create engagement
2. Add client context
3. Upload / paste sanitised evidence
4. Review parsed inventory
5. Run deterministic checks
6. Ask InfraLens for missing evidence
7. Review AI hypotheses
8. Confirm / reject findings
9. Build target architecture
10. Generate report draft
11. Human edit and approve
12. Export final report

## Phase 7 — Client-facing assessment

Only after enough real engagements establish stable patterns.

Potential ladder:
- Free: basic questionnaire and maturity score
- $29: automated assessment
- $99: detailed architecture report
- $299: report + human review
- $750+: professional audit
- $2,500+: implementation

The customer-facing product should feed consulting rather than attempt to replace expert work immediately.

## First technical implementation

A practical first version can be built as:
- web UI: React / Next.js
- API: Node / NestJS or Python FastAPI
- database: PostgreSQL
- file storage: local object storage or controlled filesystem
- job processing: simple queue for parsing and report generation
- model layer: provider-agnostic adapter
- diagrams: Mermaid / Graphviz
- report export: HTML first, PDF later

Self-hosting is preferred for the internal version because client infrastructure evidence can be sensitive.

## Data-protection requirements

- clear engagement-level data separation
- no secrets required for ordinary analysis
- automatic secret-pattern warnings on upload
- configurable retention
- deletion workflow
- encrypted transport
- least-privilege application access
- audit trail for report changes
- explicit indication of which data is sent to any external model provider

## Evaluation dataset

Build a private test set from sanitised, permission-safe examples covering:
- healthy Proxmox + ZFS
- degraded ZFS
- missing backup coverage
- overfull storage
- VLAN / management-plane mistakes
- Docker dependency confusion
- permissions / FTP access failure
- incomplete evidence where the correct answer is “cannot determine yet”

Success should be measured by factuality and useful diagnostic questions, not how confident the prose sounds.

## Business objective

The internal target is to reduce audit preparation time without reducing quality.

Example:

`10-hour manual audit → 4–6 hours with InfraLens assistance`

If a $1,000 engagement can be delivered in fewer high-quality hours, the effective margin improves before any SaaS revenue exists.
