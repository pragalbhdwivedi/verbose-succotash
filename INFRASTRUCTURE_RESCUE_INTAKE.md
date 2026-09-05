# Infrastructure Rescue — Client Intake

Use this before beginning diagnosis. The objective is to understand the environment, failure modes and business impact before making changes.

## 1. Organisation and objective

- Organisation / project name:
- Primary contact:
- Time zone:
- Country / sites involved:
- What is the main problem you need solved?
- What would a successful outcome look like?
- Is the issue currently causing downtime, data risk, security risk or degraded performance?
- Is there a deadline or business event driving this work?

## 2. Current environment

### Compute
- Physical hosts and models:
- CPU / RAM per host:
- Hypervisor(s):
- Proxmox version(s), if applicable:
- Number of VMs / containers:
- Critical workloads:
- Clustering / HA in use:

### Storage
- TrueNAS / ZFS / Ceph / local storage / SAN / NAS in use:
- Pool layout:
- Approximate used and free capacity:
- Important datasets / shares:
- SMB / NFS / iSCSI / FTP services:
- Snapshot policy:
- Replication policy:

### Network
- Router / firewall:
- Managed switches:
- VLANs:
- Internet links:
- Static IP / DHCP design:
- DNS:
- VPN / remote-access method:
- Known network diagram available? Yes / No

### Services
- Docker / Compose / Kubernetes in use:
- Reverse proxy:
- Authentication / SSO:
- Databases:
- Monitoring:
- Backup software:
- External cloud dependencies:

## 3. Failure description

- What exactly is failing?
- When did it begin?
- What changed immediately before the issue?
- Is the problem constant or intermittent?
- Which systems are affected?
- Which systems are not affected?
- Exact error messages:
- Relevant timestamps:
- What troubleshooting has already been attempted?
- Did any attempted fix change the symptoms?

## 4. Business impact

- Number of affected users:
- Production / development / lab environment:
- Estimated impact of one hour of downtime:
- Data-loss tolerance:
- Maximum acceptable recovery time:
- Services that must not be interrupted without approval:

## 5. Backups and recovery

- What is backed up?
- Where are backups stored?
- Last successful backup date:
- Last restore test date:
- Off-site / immutable copy available?
- Credentials / encryption keys documented safely?
- Known recovery procedure available?

## 6. Access and change control

- Remote-access method available:
- Read-only access possible for initial audit?
- Who approves production changes?
- Maintenance window:
- Systems that require explicit approval before restart:
- Existing rollback procedure:

## 7. Evidence to provide

Provide only what is relevant and safe to share. Remove secrets and personal data where possible.

Suggested evidence:
- screenshots of current errors
- `pveversion -v`
- `pvesm status`
- VM / container inventory
- `zpool status`
- `zfs list`
- SMART summaries
- Docker Compose files with secrets removed
- network / VLAN diagram
- switch / firewall export with credentials removed
- backup job configuration
- recent relevant logs
- storage-capacity screenshots
- service dependency notes

## 8. Credentials and secrets

Do **not** place passwords, API keys, private keys or recovery codes in this document.

Use an agreed secure method for temporary credentials. Prefer scoped, temporary access and revoke or rotate it after the engagement where practical.

## 9. Requested engagement

Select the closest fit:
- [ ] Diagnosis only
- [ ] Architecture review
- [ ] Stabilisation / repair
- [ ] Migration
- [ ] Documentation
- [ ] Full implementation
- [ ] Ongoing managed support

## 10. Output expected

By default, an Infrastructure Rescue engagement should produce:
- current-state summary
- risk register
- root-cause findings where determinable
- immediate recommendations
- target-state architecture
- prioritised implementation roadmap
- backup / recovery observations
- documentation of material changes made during the engagement
