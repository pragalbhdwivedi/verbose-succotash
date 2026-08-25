(function(){
  function loadStyles(){
    if(document.querySelector('link[data-case-depth-style]')) return;
    const l=document.createElement('link');l.rel='stylesheet';l.href='./assets/case-depth.css';l.dataset.caseDepthStyle='true';document.head.appendChild(l);
  }
  const esc=s=>String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const ul=a=>`<ul>${(a||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;

  const DEEP={
    aquapulse:{
      label:'Public repository · active prototype',
      context:'Aquaculture operations generate recurring records across ponds, batches, water quality, feed, tasks, alerts and approvals. The product is being designed as an operational command centre rather than another spreadsheet-shaped database.',
      implementation:['Custom web-application architecture using Next.js, NestJS and PostgreSQL','Mock / in-memory safe runtime retained while durable Postgres and HTTP cutovers are introduced gradually','Role and audit foundations designed before production hardening','Self-hosted deployment target on Linux / Proxmox infrastructure','AI constrained to explanation, summary, drafting and assistance rather than autonomous operational decisions'],
      tradeoffs:['Structured manual entry first gives controllable data quality before sensor/IoT expansion','Incremental cutover reduces migration risk but temporarily increases architectural complexity','Human-in-the-loop AI is less flashy than autonomous control, but materially safer for operational decisions'],
      failures:['Premature database cutover can make prototype workflows brittle','RBAC that exists only in design rather than enforcement is not production security','Backups, staging and recovery must exist before production claims','AI must never silently mutate critical operational records'],
      outcome:'The project now has a coherent operational model, a documented active-prototype status and a strong alerts/workbench direction. The portfolio deliberately treats production readiness as unfinished rather than laundering roadmap items into accomplishments.',
      next:'Complete staged durable-data cutover, enforce RBAC end-to-end, validate backup/recovery, finish security audit gates and add stable privacy-safe product screenshots.',
      media:null,
      links:[['Public repository','https://github.com/pragalbhdwivedi/aquapulse']]
    },
    digitalops:{
      label:'Live system + public repositories',
      context:'Institutional information is easy to fragment across documents, notices, calendars and one-off exports. The system direction is to make public information and academic publishing structured, repeatable and easier to keep current.',
      implementation:['Static institutional web platform for public information, academics, admissions, infrastructure and disclosures','GitHub-managed content and deployment workflow','Calendar-driven festival data generation with a scheduled GitHub Actions job','FET XML retained as machine-readable timetable source','Generated HTML timetable views expose academic scheduling for different operational audiences'],
      tradeoffs:['Static delivery keeps hosting simple and resilient but requires disciplined generation/publishing workflows','Generated calendar/timetable data reduces repetitive editing but adds source-data governance requirements','Public systems intentionally expose only information suitable for parents/staff rather than internal operational detail'],
      failures:['A stale source calendar can generate technically correct but operationally wrong content','Automation without review can publish source-data mistakes faster','Public repositories require deliberate separation of secrets, internal data and publishable content'],
      outcome:'The result is more than a brochure site: public information, scheduled content generation and machine-readable timetable publishing now sit inside a repeatable GitHub-managed operating model.',
      next:'Add static evidence captures for the live site and workflows, improve source-of-truth governance and connect more institutional publishing tasks to structured data rather than one-off documents.',
      media:null,
      links:[['Live BDSPS system','https://bdsps.in/'],['BDSPS repository','https://github.com/pragalbhdwivedi/bds-web'],['Timetable repository','https://github.com/pragalbhdwivedi/tt-bds']]
    },
    infra:{
      label:'Applied infrastructure',
      context:'Institutional services need compute, storage and recovery that can be operated as a system rather than accumulated as unrelated appliances. The environment also has to make sensible use of mixed generations of hardware.',
      implementation:['Proxmox-based virtualisation and workload planning','TrueNAS / shared-storage integration and file-service workflows','Ceph recovery and storage troubleshooting experience','Linux administration across service, permissions and network layers','MAAS/cloud-init style provisioning used to make machine configuration repeatable','Capacity, backup and recovery treated as architecture concerns rather than post-deployment chores'],
      tradeoffs:['Reusing capable hardware lowers cost but increases the need for disciplined capacity and compatibility decisions','High availability can improve resilience while also multiplying failure modes and recovery complexity','Self-hosting increases control only if monitoring, documentation and backups are maintained'],
      failures:['Storage problems can cascade across otherwise healthy services','Permissions and identity mismatches can look like application failures','Cluster recovery requires knowing which layer actually owns state','Automation that is not documented becomes a new form of manual dependency'],
      outcome:'The infrastructure practice has evolved from individual servers into a repeatable self-hosted operating model spanning compute, storage, provisioning and fault recovery.',
      next:'Publish redacted Proxmox/TrueNAS evidence, strengthen health monitoring, document recovery drills and make backup verification visible as part of the case study.',
      media:null,
      links:[['MAAS configurations','https://github.com/pragalbhdwivedi/maas-configurations']]
    },
    'kubernetes-ha':{
      title:'HA Kubernetes Architecture',status:'Public repository / infrastructure automation',proof:'PUBLIC REPOSITORY',
      lead:'A reusable Debian-based bootstrap for a high-availability Kubernetes cluster, built around external etcd, a stable control-plane endpoint and orchestrated multi-node installation.',
      label:'Public repository · repeatable bootstrap',
      context:'A manual cluster can demonstrate Kubernetes once. The more interesting infrastructure problem is making the build repeatable, observable and resilient enough that another node can be brought into the same architecture without reconstructing the process from memory.',
      implementation:['Controller script orchestrates remote nodes over SSH with reachability checks','External etcd uses TLS rather than embedding all state responsibilities into the control plane','HAProxy + Keepalived provide the control-plane virtual endpoint','Calico provides CNI while WireGuard adds network encryption','Audit logging, log rotation and Chrony/NTP hardening are included in the operational baseline','Metrics tooling, Helm and an optional Rancher path are included around the cluster bootstrap'],
      tradeoffs:['External etcd adds operational complexity in exchange for clearer state separation and HA architecture','A virtual IP simplifies client/API targeting but becomes its own failover path to test','Automating installation saves repetition only when logs and failure states remain visible'],
      failures:['Loss of etcd quorum is fundamentally different from losing a worker','VIP/HAProxy failure can make healthy control-plane nodes appear unavailable','Clock drift and certificate problems can masquerade as unrelated cluster faults','SSH orchestration needs explicit reachability and per-node logs to avoid opaque partial installs'],
      outcome:'The public repository demonstrates infrastructure automation rather than a one-time cluster screenshot: the architecture, bootstrap roles, logging and HA components are inspectable.',
      next:'Continue hardening idempotence, version compatibility checks, recovery documentation and automated validation of failure/failover paths.',
      media:'./assets/media/kubernetes-ha/kubernetes-ha_architecture_01.svg',
      caption:'Architecture derived from the public k8s-ha-installer repository. No private cluster topology is exposed.',
      links:[['Public repository','https://github.com/pragalbhdwivedi/k8s-ha-installer']]
    },
    smartclass:{
      label:'Source-backed prototype architecture',
      context:'Projectors, cameras, attendance systems, timetables and recording often arrive in classrooms as independent products. The architectural question is how to make them behave as one teacher-friendly room system without making teaching dependent on continuous internet access.',
      implementation:['FET timetable acts as an automation input rather than only a printable schedule','A classroom edge appliance coordinates display, cameras, session state and local services','Browser presentation and AirPlay-style convenience are layered onto the room workflow','Existing RTSP student-camera input can be combined with teacher/board capture','Local NVMe buffering preserves useful operation and recording during network degradation','Central self-hosted services handle storage, administration, monitoring and higher-level integrations','Attendance context is limited to operational totals rather than public student identity'],
      tradeoffs:['Edge compute adds hardware per room but prevents the central network from becoming a single point of teaching failure','Reusing existing projectors/cameras lowers rollout cost but requires adapters and compatibility logic','Automatic timetable behaviour reduces teacher friction only if manual override remains simple'],
      failures:['Network loss must not blank the classroom or destroy the session','Local storage can fill if upload/reconciliation fails','Camera/RTSP loss should degrade recording rather than the entire teaching mode','A stale timetable must not silently trigger the wrong room behaviour'],
      outcome:'The proposal now defines a coherent pilot architecture, failure behaviour and privacy model. It remains explicitly a prototype architecture until implementation evidence justifies a stronger status.',
      next:'Build/polish the pilot endpoint, capture privacy-safe room hardware evidence, validate degraded-network behaviour and measure teacher workflow friction before wider rollout.',
      media:'./assets/media/smart-classroom/smart-classroom_architecture_01.svg',
      caption:'Privacy-safe derivative of the formal Smart Classroom prototype proposal.',
      links:[]
    },
    solarcctv:{
      label:'Field system design',
      context:'Remote CCTV poles combine two reliability problems: continuous electrical power and reliable network backhaul. Treating them separately often leads to oversized conversion chains, extra failure points and awkward maintenance.',
      implementation:['PV generation feeds regulated battery storage','Protected DC distribution keeps the edge path DC where practical','PoE switching supplies camera/network equipment','Outdoor wireless provides backhaul to the wider campus/network','Central NVR/storage retains recording responsibilities away from the remote pole','Power sizing is based on continuous load and autonomy assumptions rather than only device nameplates'],
      tradeoffs:['Direct DC improves conversion efficiency but requires careful voltage/protection design','Central recording simplifies the edge but depends on backhaul availability','Battery autonomy can cover poor solar periods only when load estimates and environmental assumptions are realistic'],
      failures:['Underestimated continuous load causes chronic battery deficit','Wireless degradation can make a powered camera operationally useless','A single unprotected DC fault can take down the entire edge node','Poor enclosure/thermal/weather design can defeat otherwise correct electrical sizing'],
      outcome:'The project moved from “put solar on the pole” to a defined edge architecture where power, PoE and wireless reliability are solved together.',
      next:'Add field photographs, validate real energy consumption over time, document protection/enclosure choices and tune autonomy assumptions from measured operation.',
      media:'./assets/media/solar-cctv/solar-cctv_edge-architecture_01.svg',
      caption:'Privacy-safe field-system architecture; exact capacity, location and protected asset counts are intentionally omitted.',
      links:[]
    }
  };

  function deepHTML(id,d){
    return `<section class="deep-case" data-deep-case="${esc(id)}"><div class="deep-case-head"><div><span>Sprint 2 · decision narrative</span><h3>How the system was shaped</h3></div><span>${esc(d.label)}</span></div>${d.media?`<figure class="deep-media"><img src="${d.media}" alt="${esc((d.title||id)+' architecture evidence')}" loading="lazy"><figcaption>${esc(d.caption||'Architecture evidence')}</figcaption></figure>`:''}<div class="deep-grid"><div class="deep-block wide"><h4>Context</h4><p>${esc(d.context)}</p></div><div class="deep-block"><h4>Implementation path</h4>${ul(d.implementation)}</div><div class="deep-block"><h4>Trade-offs</h4>${ul(d.tradeoffs)}</div><div class="deep-block"><h4>Failure modes considered</h4>${ul(d.failures)}</div><div class="deep-block"><h4>Outcome / current value</h4><p>${esc(d.outcome)}</p></div><div class="deep-block wide"><h4>Next iteration</h4><p>${esc(d.next)}</p>${d.links?.length?`<div class="deep-proof-links">${d.links.map(([t,u])=>`<a href="${u}" target="_blank" rel="noreferrer">${esc(t)} ↗</a>`).join('')}</div>`:''}</div></div><p class="deep-disclosure">Status and proof level are intentionally explicit. Planned work is not presented as completed deployment.</p></section>`;
  }

  function openKubernetes(){
    const d=DEEP['kubernetes-ha'],modal=document.getElementById('caseModal');if(!modal)return;
    modal.innerHTML=`<button class="case-close" onclick="closeCase()">×</button><span class="eyebrow">${esc(d.status)}</span><h2>${esc(d.title)}</h2><p class="lead">${esc(d.lead)}</p><div class="proof-panel"><span class="proof-type">${esc(d.proof)}</span><p>The architecture and bootstrap workflow are publicly inspectable in the repository. This case describes the installer and HA design, not a private production-cluster topology.</p></div>${deepHTML('kubernetes-ha',d)}<div class="actions"><a class="cta primary" href="https://github.com/pragalbhdwivedi/k8s-ha-installer" target="_blank" rel="noreferrer">View repository ↗</a><a class="cta" href="https://wa.me/919555877000" target="_blank" rel="noreferrer">Discuss on WhatsApp</a></div>`;
    document.getElementById('caseOverlay').classList.add('show');
  }

  function enhanceExisting(id){
    const d=DEEP[id],modal=document.getElementById('caseModal');if(!d||!modal||modal.querySelector('[data-deep-case]'))return;
    const actions=modal.querySelector('.actions');
    const wrap=document.createElement('div');wrap.innerHTML=deepHTML(id,d);const section=wrap.firstElementChild;
    if(actions) actions.insertAdjacentElement('beforebegin',section); else modal.appendChild(section);
  }

  function addK8sCard(){
    const grid=document.getElementById('caseGrid');if(!grid||grid.querySelector('[data-k8s-flagship]'))return;
    [...grid.querySelectorAll('.case')].forEach(card=>{const h=card.querySelector('h3')?.textContent||'';if(['AquaPulse','Smart Classroom System','Private Infrastructure Stack','Solar CCTV Edge Infrastructure','Institutional Digital Operations'].includes(h))card.classList.add('flagship-card');if(h==='Identity & Access Systems')card.classList.add('support-card')});
    const card=document.createElement('article');card.className='case flagship-card k8s-flagship';card.dataset.k8sFlagship='true';card.innerHTML=`<span class="status">Infrastructure automation / public repository</span><div class="proof-type">PUBLIC REPOSITORY</div><h3>HA Kubernetes Architecture</h3><p>Repeatable HA bootstrap using external etcd, a control-plane VIP, encrypted CNI and SSH-based multi-node orchestration.</p><div class="case-tags"><span class="chip">External etcd</span><span class="chip">HAProxy + Keepalived</span><span class="chip">Calico / WireGuard</span></div><button type="button">View architecture & decisions →</button>`;card.querySelector('button').onclick=openKubernetes;
    const cards=[...grid.children],identity=cards.find(c=>c.querySelector('h3')?.textContent==='Identity & Access Systems');if(identity)grid.insertBefore(card,identity);else grid.appendChild(card);
  }

  const baseOpen=window.openCase;
  window.openCase=function(id){if(id==='kubernetes-ha'){openKubernetes();return}if(typeof baseOpen==='function')baseOpen(id);enhanceExisting(id)};
  window.openDeepCase=window.openCase;

  function init(){loadStyles();addK8sCard()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();