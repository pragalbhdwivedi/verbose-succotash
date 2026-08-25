(function(){
  const cards=[
    {
      type:'live',badge:'LIVE SYSTEM',title:'BDSPS Digital Platform',caseId:'digitalops',
      body:'A public institutional web system covering school information, academics, admissions and operational publishing through a GitHub-managed delivery workflow.',
      url:'https://bdsps.in/',repo:'https://github.com/pragalbhdwivedi/bds-web',
      meta:['Public website','GitHub-managed','Institutional operations'],
      sourceNote:'Live system + public repository'
    },
    {
      type:'smartclass',badge:'SOURCE-BACKED',title:'Smart Classroom Architecture',caseId:'smartclass',
      body:'Prototype architecture grounded in a formal technical proposal: timetable-driven room modes, Raspberry Pi edge compute, browser/AirPlay presentation, RTSP video, local buffering and central services.',
      meta:['Prototype proposal','FET + HikCentral','Edge + central services'],
      sourceNote:'Formal prototype proposal available'
    },
    {
      type:'k8s',badge:'PUBLIC REPO',title:'HA Kubernetes Installer',nodeId:'kubernetes',
      body:'A repeatable high-availability Kubernetes bootstrap with external etcd, HAProxy, Keepalived, Calico, WireGuard, audit logging and multi-node orchestration.',
      url:'https://github.com/pragalbhdwivedi/k8s-ha-installer',
      meta:['Kubernetes','HA','Automation'],
      sourceNote:'Public repository'
    },
    {
      type:'maas',badge:'PUBLIC REPO',title:'MAAS Bare-Metal Provisioning',nodeId:'maas',
      body:'Version-controlled deployment automation for repeatable machine configuration, including cloud-init, Netplan, bonding/bridging, Open vSwitch and storage setup.',
      url:'https://github.com/pragalbhdwivedi/maas-configurations',
      meta:['MAAS','Cloud-init','Netplan','OVS'],
      sourceNote:'Public repository'
    },
    {
      type:'solar',badge:'FIELD SYSTEM',title:'Solar CCTV Edge Infrastructure',caseId:'solarcctv',
      body:'A continuous-duty remote edge concept connecting solar generation, battery storage, direct-DC distribution, PoE switching, outdoor wireless and central recording.',
      meta:['Direct DC','PoE','Outdoor wireless','CCTV / NVR'],
      sourceNote:'Field engineering / system design'
    },
    {
      type:'access',badge:'SOURCE-BACKED',title:'Access-Control Relay Troubleshooting',nodeId:'access',
      body:'Source-backed field troubleshooting around a Hikvision face terminal, no-touch exit input and fail-safe electromagnetic lock using COM/NC relay logic.',
      meta:['COM / NC','Fail-safe lock','Exit input','Fault diagnosis'],
      sourceNote:'Technical wiring/troubleshooting record'
    },
    {
      type:'aquapulse',badge:'PUBLIC REPO',title:'AquaPulse',caseId:'aquapulse',
      body:'An active self-hosted operational-platform prototype built around durable records, role-based access, auditability, staged cutover and human-in-the-loop AI rather than autonomous operational control.',
      url:'https://github.com/pragalbhdwivedi/aquapulse',
      meta:['Next.js','NestJS','PostgreSQL','RBAC'],
      sourceNote:'Public active-prototype repository'
    }
  ];

  function repoVisual(c,kicker,lines){
    return `<div class="evidence-media"><div class="repo-visual"><div class="repo-top"><span>${kicker}</span><span>Public GitHub</span></div><div class="repo-title">${c.title}</div><div class="repo-lines">${lines.map(x=>`<span>${x}</span>`).join('')}</div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span><a class="evidence-open" href="${c.url}" target="_blank" rel="noreferrer">Repository ↗</a></div></div>`;
  }

  function media(c){
    if(c.type==='live') return `<div class="evidence-media"><iframe src="${c.url}" title="${c.title} live preview" loading="lazy" referrerpolicy="no-referrer"></iframe><div class="live-overlay"><span class="evidence-badge">${c.badge}</span><a class="evidence-open" href="${c.url}" target="_blank" rel="noreferrer">Open live ↗</a></div></div>`;
    if(c.type==='smartclass') return `<div class="evidence-media"><div class="schematic"><div class="schematic-flow"><div class="schematic-node">FET + attendance</div><div class="schematic-arrow">→</div><div class="schematic-node accent">Classroom edge</div><div class="schematic-arrow">→</div><div class="schematic-node">Display + cameras</div><div class="schematic-arrow">→</div><div class="schematic-node">Local buffer</div><div class="schematic-arrow">→</div><div class="schematic-node">Central services</div></div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span></div></div>`;
    if(c.type==='solar') return `<div class="evidence-media"><div class="schematic"><div class="schematic-flow"><div class="schematic-node">PV + battery</div><div class="schematic-arrow">→</div><div class="schematic-node accent">DC protection</div><div class="schematic-arrow">→</div><div class="schematic-node">PoE switch</div><div class="schematic-arrow">→</div><div class="schematic-node">Camera + AP</div><div class="schematic-arrow">→</div><div class="schematic-node">Backhaul / NVR</div></div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span></div></div>`;
    if(c.type==='access') return `<div class="evidence-media"><div class="schematic"><div class="schematic-stack"><div class="schematic-node">12V lock PSU</div><div class="schematic-node accent">COM → NC relay</div><div class="schematic-node">Fail-safe EM lock</div><div class="schematic-node">Exit sensor COM</div><div class="schematic-node accent">BTN + GND input</div><div class="schematic-node">Access terminal</div></div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span></div></div>`;
    if(c.type==='k8s') return `<div class="evidence-media"><div class="schematic"><div class="schematic-stack"><div class="schematic-node">External etcd</div><div class="schematic-node accent">Control-plane VIP</div><div class="schematic-node">HAProxy + Keepalived</div><div class="schematic-node">Calico</div><div class="schematic-node">Kubernetes</div><div class="schematic-node">WireGuard</div></div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span><a class="evidence-open" href="${c.url}" target="_blank" rel="noreferrer">Repository ↗</a></div></div>`;
    if(c.type==='maas') return repoVisual(c,'Bare-metal provisioning',['Cloud-init','Netplan','Bonding / bridging','Open vSwitch','Storage automation']);
    return repoVisual(c,'Operational platform',['Next.js','NestJS','PostgreSQL','RBAC','Audit','AI assist']);
  }

  function cardAction(c,i){
    if(c.caseId) return `<button class="evidence-open evidence-case-action" data-evidence-index="${i}" style="border:0;cursor:pointer;margin-top:14px;align-self:flex-start">Open case study →</button>`;
    if(c.nodeId) return `<button class="evidence-open evidence-node-action" data-evidence-index="${i}" style="border:0;cursor:pointer;margin-top:14px;align-self:flex-start">Explore network node →</button>`;
    return '';
  }

  function wireActions(section){
    section.querySelectorAll('.evidence-case-action').forEach(btn=>btn.addEventListener('click',()=>{
      const c=cards[Number(btn.dataset.evidenceIndex)];
      if(c&&c.caseId&&typeof window.openCase==='function') window.openCase(c.caseId);
    }));
    section.querySelectorAll('.evidence-node-action').forEach(btn=>btn.addEventListener('click',()=>{
      const c=cards[Number(btn.dataset.evidenceIndex)];
      if(!c||!c.nodeId) return;
      if(typeof setMode==='function') setMode('explore');
      if(typeof expandPath==='function') expandPath(c.nodeId);
      window.scrollTo({top:0,behavior:'smooth'});
    }));
  }

  function build(){
    if(document.getElementById('evidenceRail')) return;
    const caseGrid=document.getElementById('caseGrid');
    if(!caseGrid) return;
    const section=document.createElement('section');
    section.className='evidence-section';
    section.id='evidenceRail';
    section.innerHTML=`<div class="evidence-head"><div><span class="eyebrow">Proof / evidence layer</span><h2>Architecture is useful. Evidence is better.</h2></div><p>Public systems and repositories are linked directly. Field and prototype work uses source-backed schematics until privacy-safe project photography is ready.</p></div><div class="evidence-rail">${cards.map((c,i)=>`<article class="evidence-card">${media(c)}<div class="evidence-copy"><h3>${c.title}</h3><p>${c.body}</p><div class="evidence-meta">${c.meta.map(x=>`<span>${x}</span>`).join('')}</div>${c.sourceNote?`<div class="evidence-note">${c.sourceNote}</div>`:''}${cardAction(c,i)}</div></article>`).join('')}</div>`;
    caseGrid.insertAdjacentElement('afterend',section);
    wireActions(section);
  }

  function loadProofLayer(){
    if(document.querySelector('script[data-proof-layer]')) return;
    const script=document.createElement('script');
    script.src='./assets/proof.js';
    script.dataset.proofLayer='true';
    document.body.appendChild(script);
  }

  function init(){build();loadProofLayer();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();