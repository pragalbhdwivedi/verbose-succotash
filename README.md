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

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the Vite application and deploys `dist/` to GitHub Pages.

Custom domain: **pragalbh.in**

The domain is retained in both the repository-root `CNAME` and `public/CNAME` so the production Vite build includes it.
