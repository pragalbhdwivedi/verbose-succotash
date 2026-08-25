import React, { useMemo, useState } from "react";
import {
  ArrowUpRight, Building2, CheckCircle2, ChevronRight, CloudCog,
  Cpu, Database, ExternalLink, FileCode2, Github, GraduationCap,
  Layers3, Network, RadioTower, Server, ShieldCheck, SolarPanel,
  TerminalSquare, Workflow, X
} from "lucide-react";

const github = "https://github.com/pragalbhdwivedi";

const capabilities = [
  {
    icon: GraduationCap,
    title: "Education Leadership",
    text: "Academic operations, admissions, institutional planning, faculty workflows and multi-institution execution."
  },
  {
    icon: Workflow,
    title: "Systems & Operations",
    text: "Turning messy operational problems into processes, SOPs, dashboards, workflows and measurable systems."
  },
  {
    icon: Server,
    title: "Infrastructure",
    text: "Self-hosted services, Proxmox, storage architecture, VM planning, redundancy and institutional compute."
  },
  {
    icon: Network,
    title: "Networks & Edge Systems",
    text: "VLANs, campus networking, PoE, CCTV backhaul, outdoor wireless links and remote-site infrastructure."
  },
  {
    icon: CloudCog,
    title: "Automation & Platform Engineering",
    text: "Kubernetes, MAAS, cloud-init, GitHub Actions, automated provisioning and repeatable deployment workflows."
  },
  {
    icon: Cpu,
    title: "Applied Technology",
    text: "Smart classrooms, RFID/access systems, digital signage, QR workflows, solar-backed edge systems and IoT planning."
  }
];

const projects = [
  {
    id: "aquapulse",
    no: "01",
    title: "AquaPulse",
    label: "Operational Software Platform",
    icon: Database,
    repo: "https://github.com/pragalbhdwivedi/aquapulse",
    featured: true,
    intro: "A self-hosted aquaculture operations platform designed as a real-time command centre for ponds, water quality, feed, tasks, alerts, audit records and AI-assisted operational support.",
    highlights: [
      "Next.js + NestJS + PostgreSQL architecture",
      "Role-based operational workflows and auditability",
      "Gradual Postgres / HTTP cutover strategy",
      "AI designed as an assistive layer, not an autonomous controller",
      "Self-hosted deployment target on Proxmox / Linux VMs",
      "Security, RBAC and production-readiness planning"
    ],
    tags: ["Product Systems", "Next.js", "NestJS", "PostgreSQL", "Proxmox", "AI Governance"]
  },
  {
    id: "k8s",
    no: "02",
    title: "Kubernetes HA Cluster Installer",
    label: "Infrastructure Automation",
    icon: CloudCog,
    repo: "https://github.com/pragalbhdwivedi/k8s-ha-installer",
    intro: "A single-command workflow for bootstrapping a high-availability Kubernetes environment on Debian 12, including orchestration across nodes.",
    highlights: [
      "External etcd with TLS",
      "HAProxy + Keepalived control-plane VIP",
      "Calico CNI with WireGuard encryption",
      "SSH-based multi-node orchestration",
      "Audit logging, NTP hardening and optional Rancher"
    ],
    tags: ["Kubernetes", "HA", "Linux", "Bash", "Automation"]
  },
  {
    id: "maas",
    no: "03",
    title: "MAAS Configurations",
    label: "Bare-Metal Provisioning",
    icon: Server,
    repo: "https://github.com/pragalbhdwivedi/maas-configurations",
    intro: "Version-controlled deployment configurations for repeatable machine provisioning through MAAS.",
    highlights: [
      "Cloud-init automation",
      "Network bonding, bridging and Open vSwitch",
      "Netplan configuration",
      "Storage partitioning and mounting",
      "Redundancy-oriented bare-metal deployment"
    ],
    tags: ["MAAS", "Cloud-init", "OVS", "Netplan", "Provisioning"]
  },
  {
    id: "bds-web",
    no: "04",
    title: "BDSPS Digital Web Platform",
    label: "Institutional Digital System",
    icon: Building2,
    repo: "https://github.com/pragalbhdwivedi/bds-web",
    intro: "A public school web platform covering academics, admissions, infrastructure, compliance disclosure, documents and institutional information.",
    highlights: [
      "GitHub-hosted static web system",
      "CBSE public-disclosure structure",
      "Calendar-driven festival themes",
      "Scheduled GitHub Actions automation",
      "Institutional content architecture"
    ],
    tags: ["Education", "GitHub Actions", "Automation", "Web Operations"]
  },
  {
    id: "timetable",
    no: "05",
    title: "BDS Timetable Publishing",
    label: "Academic Operations",
    icon: Layers3,
    repo: "https://github.com/pragalbhdwivedi/tt-bds",
    intro: "Publishing and operating school timetable outputs generated from FET, including teacher, room, activity and class views.",
    highlights: [
      "FET XML-based timetable workflow",
      "Multiple HTML timetable views",
      "Operational publishing for staff",
      "Structured academic scheduling data"
    ],
    tags: ["FET", "Scheduling", "Academic Operations", "Publishing"]
  },
  {
    id: "ar",
    no: "06",
    title: "BDSPS AR Experience",
    label: "Applied Web Technology",
    icon: RadioTower,
    repo: "https://github.com/pragalbhdwivedi/bdsps-ar",
    intro: "A lightweight web-based augmented-reality experience built around image targets for institutional engagement.",
    highlights: [
      "Image-target AR workflow",
      "Static deployment with custom domain support",
      "Web-first institutional experiment"
    ],
    tags: ["Web AR", "Experimentation", "Education Technology"]
  },
  {
    id: "signage",
    no: "07",
    title: "Signage VM Auto-Install",
    label: "Deployment Automation",
    icon: TerminalSquare,
    repo: "https://github.com/pragalbhdwivedi/signage-vm-autoinstall",
    intro: "Automated VM installation groundwork for repeatable digital-signage deployments.",
    highlights: [
      "Preseed-based unattended installation",
      "Repeatable signage endpoint provisioning",
      "Institutional deployment standardisation"
    ],
    tags: ["Digital Signage", "Preseed", "Automation", "VMs"]
  },
  {
    id: "proxmox",
    no: "08",
    title: "Proxmox Cloud-init Scripts",
    label: "Virtualisation Automation",
    icon: FileCode2,
    repo: "https://github.com/pragalbhdwivedi/proxmox-cloud-init-scripts",
    intro: "Cloud-init configuration work for faster, repeatable virtual-machine provisioning in Proxmox environments.",
    highlights: [
      "Reusable cloud-init configuration",
      "VM bootstrap standardisation",
      "Self-hosted infrastructure workflow"
    ],
    tags: ["Proxmox", "Cloud-init", "Virtualisation"]
  },
];

const fieldProjects = [
  {
    icon: Cpu,
    title: "Smart Classroom Architecture",
    text: "A classroom platform concept combining scheduled displays, screen sharing, teacher/board and student camera feeds, automatic recording, timetable integration, attendance and administrative monitoring."
  },
  {
    icon: SolarPanel,
    title: "24×7 Solar CCTV Edge Nodes",
    text: "Direct-DC solar and battery architecture for remote CCTV poles using PoE cameras, outdoor wireless links and networking equipment without unnecessary inverter conversion."
  },
  {
    icon: ShieldCheck,
    title: "RFID, Access & Identity Systems",
    text: "School-wide identity architecture spanning student, staff and transport cards, RFID, QR, access levels, services and operational data."
  },
  {
    icon: Network,
    title: "Campus Network & Infrastructure",
    text: "Practical deployment and troubleshooting across Omada networks, VLAN thinking, PoE, servers, CCTV, storage, access control and remote links."
  },
];

const recentProjects = [
  {
    date: "AUG 2026",
    icon: Cpu,
    title: "Smart Classroom Systems Architecture",
    status: "Prototype architecture",
    text: "Specified a classroom platform around Raspberry Pi / thin-client endpoints, timetable-driven room modes, wireless presentation, teacher and student video, automatic lesson capture, RFID attendance totals, health monitoring and central administration.",
    evidence: ["FET timetable integration", "HikCentral attendance", "RTSP / camera workflows", "Proxmox + storage services"]
  },
  {
    date: "AUG 2026",
    icon: SolarPanel,
    title: "Solar-Powered CCTV Edge Nodes",
    status: "Field engineering",
    text: "Designed a 24×7 direct-DC power concept for remote CCTV poles using outdoor wireless links, PoE switching, cameras, solar generation and battery storage while avoiding unnecessary DC→AC→DC conversion.",
    evidence: ["PoE load planning", "Battery autonomy", "Outdoor wireless", "Remote infrastructure"]
  },
  {
    date: "AUG 2026",
    icon: Server,
    title: "Hikvision-Compatible NVR Architecture",
    status: "System design",
    text: "Evaluated a self-hosted NVR stack for Hikvision IP cameras using Linux, Docker, ONVIF/RTSP and reused thin-client hardware, with surveillance storage, VLAN separation and optional AI detection.",
    evidence: ["Linux NVR", "ONVIF / RTSP", "Docker", "CCTV network design"]
  },
  {
    date: "AUG 2026",
    icon: Database,
    title: "Konica Minolta → TrueNAS Scan Workflow",
    status: "Integrated & troubleshot",
    text: "Configured FTP-based scan delivery from a Konica Minolta 205i into TrueNAS, diagnosed authentication and group-access failures, and corrected server-side user/group permissions.",
    evidence: ["TrueNAS", "FTP", "Unix groups", "Peripheral integration"]
  },
  {
    date: "AUG 2026",
    icon: ShieldCheck,
    title: "Access Control & Electromagnetic Lock Integration",
    status: "Field troubleshooting",
    text: "Worked through Hikvision face-terminal, no-touch exit button and 12V electromagnetic-lock wiring, including NO/NC relay logic and reverse-lock behaviour diagnosis.",
    evidence: ["Relay logic", "NO / NC", "12V access control", "Fault isolation"]
  },
  {
    date: "AUG 2026",
    icon: FileCode2,
    title: "Wedding Microsite Engineering & Deployment",
    status: "Production delivery",
    text: "Handled repository-level implementation and delivery for a React/Vite wedding microsite: asset cleanup, RSVP hardening, WhatsApp flow, browser behaviour fixes, branding integration and GitHub Pages build validation.",
    evidence: ["React / Vite", "GitHub PR workflow", "GitHub Pages", "Production debugging"]
  },
  {
    date: "JUL–AUG 2026",
    icon: SolarPanel,
    title: "Three-Phase Solar & Backup Power Troubleshooting",
    status: "Operational engineering",
    text: "Investigated inverter, stabiliser, grid-return, neutral-loop and phase-loading behaviour in a live institutional solar system, using measured line/phase voltages and current to isolate faults and operating constraints.",
    evidence: ["3-phase power", "Solar inverters", "Battery systems", "Electrical fault diagnosis"]
  },
  {
    date: "AUG 2026",
    icon: Network,
    title: "Campus Identity, RFID & Transport Systems",
    status: "Systems specification",
    text: "Defined a school-wide identity data model spanning student, teacher and transport credentials, RFID identifiers, QR codes, access levels, emergency information and future service integration.",
    evidence: ["RFID", "Identity data", "Access levels", "Operational workflows"]
  }
];

const focus = [
  "Education & institutional leadership",
  "Systems thinking and process architecture",
  "Self-hosted infrastructure",
  "Virtualisation and storage",
  "Kubernetes and bare-metal automation",
  "Campus networking and PoE",
  "Education technology",
  "RFID / access-control systems",
  "Digital signage and automation",
  "Solar-backed edge infrastructure",
  "GitHub-based deployment workflows",
  "Technical documentation and SOPs",
];

function ProjectModal({ project, close }) {
  if (!project) return null;
  const Icon = project.icon;
  return (
    <div className="modal-backdrop" onClick={close}>
      <article className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={close} aria-label="Close"><X size={18}/></button>
        <div className="modal-kicker"><Icon size={17}/> {project.label}</div>
        <div className="modal-number">{project.no}</div>
        <h2>{project.title}</h2>
        <p className="modal-intro">{project.intro}</p>
        <div className="modal-grid">
          <div>
            <span className="eyebrow">What it demonstrates</span>
            <ul>{project.highlights.map(x => <li key={x}><CheckCircle2 size={15}/>{x}</li>)}</ul>
          </div>
          <div>
            <span className="eyebrow">Capabilities</span>
            <div className="tag-wrap">{project.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
          </div>
        </div>
        <a className="repo-btn" href={project.repo} target="_blank" rel="noreferrer">
          View repository <Github size={17}/> <ArrowUpRight size={16}/>
        </a>
      </article>
    </div>
  )
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const featured = useMemo(() => projects.find(p => p.featured), []);

  return (
    <main>
      <nav className="nav">
        <a className="monogram" href="#top">PD</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#field">Field Systems</a>
          <a href="#recent">Recent Work</a>
          <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-grid">
          <div>
            <div className="status"><span></span> Education · Systems · Infrastructure · Automation</div>
            <p className="micro">PRAGALBH DWIVEDI / INDIA</p>
            <h1>I build systems that make institutions <em>work better.</em></h1>
            <p className="lede">
              Education executive and systems builder working across institutional operations,
              self-hosted infrastructure, automation, networks, power systems and applied technology.
              My work usually sits where software meets real buildings, people and operational constraints.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#work">Explore selected work <ArrowUpRight size={17}/></a>
              <a className="secondary" href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub profile</a>
            </div>
          </div>
          <aside className="hero-note">
            <span className="eyebrow">Current operating context</span>
            <h3>Executive Director</h3>
            <p>Badridhar Dwivedi Group of Institutions</p>
            <div className="divider"></div>
            <span className="eyebrow">Working principle</span>
            <blockquote>“Start with the operational problem. Build the system around reality.”</blockquote>
          </aside>
        </div>
        <div className="hero-index">
          <span>Leadership</span><i></i><span>Infrastructure</span><i></i><span>Automation</span><i></i><span>Education Technology</span>
        </div>
      </header>

      <section className="section" id="work">
        <div className="section-heading">
          <div><span className="eyebrow">01 / Selected Work</span><h2>Projects that reveal the pattern.</h2></div>
          <p>The common thread is not a particular tool. It is taking a real operational problem and pushing it toward a structured, maintainable system.</p>
        </div>

        <article className="feature" onClick={() => setSelected(featured)}>
          <div className="feature-top">
            <span className="project-no">{featured.no}</span>
            <span className="feature-label">FEATURED / {featured.label.toUpperCase()}</span>
            <ArrowUpRight className="feature-arrow"/>
          </div>
          <div className="feature-body">
            <div>
              <h3>{featured.title}</h3>
              <p>{featured.intro}</p>
            </div>
            <div className="feature-stack">
              <span>NEXT.JS</span><span>NESTJS</span><span>POSTGRESQL</span><span>PROXMOX</span><span>RBAC</span><span>AI</span>
            </div>
          </div>
        </article>

        <div className="project-list">
          {projects.filter(p => !p.featured).map(p => {
            const Icon = p.icon;
            return (
              <button className="project-row" key={p.id} onClick={() => setSelected(p)}>
                <span className="project-no">{p.no}</span>
                <span className="project-icon"><Icon size={20}/></span>
                <span className="project-title">{p.title}<small>{p.label}</small></span>
                <span className="project-tags">{p.tags.slice(0,3).join(" · ")}</span>
                <ChevronRight size={19}/>
              </button>
            )
          })}
        </div>
      </section>

      <section className="section alt" id="capabilities">
        <div className="section-heading">
          <div><span className="eyebrow">02 / Capability Map</span><h2>Not one job title. A connected operating stack.</h2></div>
          <p>This portfolio deliberately avoids the usual résumé trick of listing every noun ever encountered. These areas recur across the work.</p>
        </div>
        <div className="cap-grid">
          {capabilities.map(({icon: Icon, title, text}, i) => (
            <article className="cap-card" key={title}>
              <div className="cap-head"><span>0{i+1}</span><Icon size={21}/></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="focus-strip">
          {focus.map(x => <span key={x}>{x}</span>)}
        </div>
      </section>

      <section className="section" id="field">
        <div className="section-heading">
          <div><span className="eyebrow">03 / Field Systems</span><h2>Software is only half the story.</h2></div>
          <p>A large part of the work lives where code meets buildings, people, power, networks, cameras, access control and daily institutional operations.</p>
        </div>
        <div className="field-grid">
          {fieldProjects.map(({icon: Icon, title, text}, i) => (
            <article className="field-card" key={title}>
              <span className="field-index">F{i+1}</span>
              <Icon size={27}/>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" id="recent">
        <div className="section-heading">
          <div><span className="eyebrow">04 / Recent Project Log</span><h2>Current work, not archival résumé filler.</h2></div>
          <p>These are active or recently completed systems from current institutional and technical work. Some are production deployments; others are architecture, integration or field-troubleshooting projects.</p>
        </div>
        <div className="recent-grid">
          {recentProjects.map(({icon: Icon, date, title, status, text, evidence}) => (
            <article className="recent-card" key={title}>
              <div className="recent-top"><span>{date}</span><Icon size={20}/></div>
              <div className="recent-status">{status}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="recent-evidence">{evidence.map(x => <span key={x}>{x}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section gh-section">
        <div className="gh-panel">
          <div>
            <span className="eyebrow">05 / GitHub</span>
            <h2>Evidence, not decoration.</h2>
            <p>
              Public repositories include platform work, infrastructure automation,
              bare-metal provisioning, institutional websites, timetable publishing,
              web AR and deployment tooling.
            </p>
          </div>
          <div className="gh-count">
            <strong>12+</strong>
            <span>public repositories reviewed for this portfolio</span>
            <a href={github} target="_blank" rel="noreferrer">github.com/pragalbhdwivedi <ExternalLink size={15}/></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-name" href="#top">Pragalbh Dwivedi</a>
        <p>Education leadership · Systems building · Infrastructure · Automation</p>
        <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
      </footer>

      <ProjectModal project={selected} close={() => setSelected(null)} />
    </main>
  );
}
