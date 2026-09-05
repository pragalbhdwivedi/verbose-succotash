# Infrastructure Audit Report Template

> Client-facing structure for Infrastructure Rescue, architecture review and self-hosted infrastructure engagements.

## Cover

**Infrastructure Audit & Architecture Review**  
Client: [Client name]  
Prepared by: Pragalbh Dwivedi  
Date: [Date]  
Confidentiality: [Internal / Confidential]

## 1. Executive summary

In plain language:
- what was reviewed
- the most important finding
- the most serious operational risk
- the strongest part of the existing environment
- the recommended next move

Keep this readable by a decision-maker who does not administer the infrastructure.

## 2. Scope

### Included
- [systems]
- [sites]
- [services]

### Excluded
- [systems]
- [security testing not performed]
- [areas where evidence was unavailable]

## 3. Evidence reviewed

| Evidence | Source | Date / version | Reliability / limitation |
|---|---|---|---|
| | | | |

## 4. Current-state architecture

Describe the environment in layers:
1. connectivity / internet
2. firewall / routing
3. switching / VLANs
4. compute / hypervisors
5. storage
6. applications / services
7. backups / recovery
8. monitoring / administration

Include a logical architecture diagram where useful.

## 5. Asset and service inventory

| Asset / service | Role | Platform | Criticality | Owner | Backup | Notes |
|---|---|---|---|---|---|---|
| | | | | | | |

## 6. Findings and risk register

Use severity based on operational consequence, not dramatic wording.

| ID | Finding | Severity | Evidence | Business impact | Recommendation |
|---|---|---|---|---|---|
| R-01 | | Critical / High / Medium / Low | | | |

### Severity guide

**Critical** — credible risk of major outage, unrecoverable data loss or immediate security exposure.  
**High** — material reliability, recovery or security weakness likely to cause significant impact.  
**Medium** — important weakness that should be addressed in planned work.  
**Low** — optimisation, maintainability or documentation improvement.

## 7. Root-cause analysis

For each material problem:

### Problem
[Observed symptom]

### Evidence
[Logs, measurements, configuration, reproduction]

### Hypotheses considered
- [hypothesis]
- [hypothesis]

### Root cause
[Confirmed root cause, or state clearly if not conclusively proven]

### Immediate stabilisation
[Safe short-term action]

### Durable correction
[Long-term action]

## 8. Compute and virtualisation

Review:
- host health and resource pressure
- Proxmox / hypervisor layout
- VM and container allocation
- clustering / HA assumptions
- single points of failure
- management access
- provisioning consistency
- update strategy

## 9. Storage and data

Review:
- ZFS / TrueNAS / Ceph pool health
- capacity and growth
- redundancy assumptions
- snapshots
- replication
- permissions
- service protocols
- workload placement
- recovery paths

## 10. Network architecture

Review:
- topology
- routing and firewall boundaries
- VLAN design
- management separation
- server / storage traffic
- cameras / IoT / guest separation
- DNS / DHCP
- remote access
- switch and PoE capacity where relevant

## 11. Backup and disaster recovery

Document:
- what is backed up
- what is not backed up
- backup destinations
- off-site / immutable copies
- retention
- restore testing
- RPO / RTO assumptions
- recovery dependencies

State explicitly when “backup exists” has not been validated by a restore test.

## 12. Security and access observations

This is an architecture review unless a separate security assessment is contracted.

Review relevant basics:
- administrative exposure
- least privilege
- credential handling
- network segmentation
- patch / update process
- remote access
- logging / auditability

Do not present this section as a penetration test.

## 13. Monitoring and operations

Review:
- service health monitoring
- infrastructure monitoring
- storage alerts
- backup alerts
- capacity monitoring
- ownership of alerts
- restart / escalation procedures

## 14. Target-state architecture

Describe the recommended state and why it is preferable.

For each important decision state:
- requirement
- chosen approach
- rejected alternative(s)
- trade-off
- migration implication

## 15. Implementation roadmap

### Phase 0 — Protect
Actions required before major change: backups, exports, snapshots, credential validation, maintenance window.

### Phase 1 — Stabilise
Fix immediate reliability / recovery risks.

### Phase 2 — Restructure
Implement network, storage, compute or service architecture changes.

### Phase 3 — Automate
Standardise provisioning, backups, monitoring and documentation.

### Phase 4 — Operate
Define ongoing maintenance and managed-support responsibilities.

## 16. Priority action table

| Priority | Action | Effort | Risk if delayed | Dependency |
|---|---|---|---|---|
| P0 | | | | |

## 17. Documentation delivered

- architecture diagram
- network / VLAN register
- asset register
- service dependency list
- backup and recovery notes
- change log
- runbook / SOP where included

## 18. Assumptions and limitations

State gaps clearly. Never convert missing evidence into certainty.

Examples:
- configuration was supplied by client and not independently verified
- restore testing was outside scope
- physical cabling was not inspected
- production failover was not deliberately triggered

## 19. Recommended next engagement

Choose only what follows logically from findings:
- implementation project
- migration
- documentation remediation
- backup / DR work
- network redesign
- recurring managed support

## 20. Acceptance

Client acknowledgement that the report represents the evidence and scope available at the time of review. Recommendations should be reassessed if the environment materially changes.
