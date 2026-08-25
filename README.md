# Pragalbh Dwivedi Portfolio

Personal portfolio for **Pragalbh Dwivedi**, focused on the intersection of education leadership, institutional systems, infrastructure, automation and applied technology.

## Positioning

**Education Leadership · Systems Engineering · Infrastructure · Automation · Applied Technology**

The portfolio deliberately excludes Graphic Design, UI/UX and Art Direction work associated with Kritica Dwivedi.

## Selected GitHub-backed work

- AquaPulse — operational software platform
- Kubernetes HA Cluster Installer
- MAAS Configurations
- BDSPS Digital Web Platform
- BDS Timetable Publishing
- BDSPS AR Experience
- Signage VM Auto-Install
- Proxmox Cloud-init Scripts

## Recent project layer

The portfolio also documents current 2026 work that is not fully represented by public repositories:

- Smart classroom systems architecture
- 24×7 direct-DC solar CCTV edge nodes
- Hikvision-compatible self-hosted NVR architecture
- Konica Minolta 205i → TrueNAS scan integration
- Hikvision access-control / electromagnetic-lock troubleshooting
- React/Vite wedding microsite engineering and deployment
- Three-phase solar / inverter / stabiliser troubleshooting
- Campus RFID, identity and transport-system specification

Each recent project is described according to its actual status, such as production delivery, system design, prototype architecture, integration or field troubleshooting.

## Deployment

The live site uses the repository's existing **GitHub Pages branch deployment**. The root `index.html` is intentionally directly deployable, so publishing does not depend on a separate build action.

Custom domain: **pragalbh.in**

`CNAME` is retained at the repository root, with a matching `public/CNAME` for compatibility with the Vite source structure.

## Development source

React/Vite source files are retained under `src/` for future expansion into richer case-study interactions.

```bash
npm install
npm run dev
```
