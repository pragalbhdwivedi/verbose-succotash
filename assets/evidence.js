(function(){
  const cards=[
    {
      type:'live',badge:'LIVE SYSTEM',title:'BDSPS Digital Platform',
      body:'A public institutional web system covering school information, academics, admissions and operational publishing through a GitHub-managed delivery workflow.',
      url:'https://bdsps.in/',repo:'https://github.com/pragalbhdwivedi/bds-web',
      meta:['Public website','GitHub-managed','Institutional operations']
    },
    {
      type:'smartclass',badge:'SOURCE-BACKED',title:'Smart Classroom Architecture',
      body:'Prototype architecture grounded in a formal technical proposal: timetable-driven room modes, Raspberry Pi edge compute, browser/AirPlay presentation, RTSP video, local NVMe buffering and central services.',
      meta:['Prototype proposal','FET + HikCentral','Edge + central services']
    },
    {
      type:'k8s',badge:'PUBLIC REPO',title:'HA Kubernetes Installer',
      body:'A repeatable high-availability Kubernetes bootstrap with external etcd, HAProxy, Keepalived, Calico, WireGuard and multi-node orchestration.',
      url:'https://github.com/pragalbhdwivedi/k8s-ha-installer',
      meta:['Kubernetes','HA','Automation']
    },
    {
      type:'solar',badge:'FIELD SYSTEM',title:'Solar CCTV Edge Infrastructure',
      body:'A continuous-duty remote edge concept connecting solar generation, battery storage, direct-DC distribution, PoE switching, outdoor wireless and central recording.',
      meta:['Direct DC','PoE','Outdoor wireless','CCTV / NVR']
    },
    {
      type:'aquapulse',badge:'PUBLIC REPO',title:'AquaPulse',
      body:'A self-hosted operational platform concept built around durable records, role-based access, auditability and human-in-the-loop AI rather than autonomous operational control.',
      url:'https://github.com/pragalbhdwivedi/aquapulse',
      meta:['Next.js','NestJS','PostgreSQL','RBAC']
    }
  ];

  function media(c){
    if(c.type==='live') return `<div class="evidence-media"><iframe src="${c.url}" title="${c.title} live preview" loading="lazy" referrerpolicy="no-referrer"></iframe><div class="live-overlay"><span class="evidence-badge">${c.badge}</span><a class="evidence-open" href="${c.url}" target="_blank" rel="noreferrer">Open live ↗</a></div></div>`;
    if(c.type==='smartclass') return `<div class="evidence-media"><div class="schematic"><div class="schematic-flow"><div class="schematic-node">FET + attendance</div><div class="schematic-arrow">→</div><div class="schematic-node accent">Classroom edge</div><div class="schematic-arrow">→</div><div class="schematic-node">Display + cameras</div><div class="schematic-arrow">→</div><div class="schematic-node">Local buffer</div><div class="schematic-arrow">→</div><div class="schematic-node">Central services</div></div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span></div></div>`;
    if(c.type==='solar') return `<div class="evidence-media"><div class="schematic"><div class="schematic-flow"><div class="schematic-node">PV + battery</div><div class="schematic-arrow">→</div><div class="schematic-node accent">DC protection</div><div class="schematic-arrow">→</div><div class="schematic-node">PoE switch</div><div class="schematic-arrow">→</div><div class="schematic-node">Camera + AP</div><div class="schematic-arrow">→</div><div class="schematic-node">Backhaul / NVR</div></div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span></div></div>`;
    if(c.type==='k8s') return `<div class="evidence-media"><div class="schematic"><div class="schematic-stack"><div class="schematic-node">External etcd</div><div class="schematic-node accent">Control-plane VIP</div><div class="schematic-node">HAProxy + Keepalived</div><div class="schematic-node">Calico</div><div class="schematic-node">Kubernetes</div><div class="schematic-node">WireGuard</div></div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span><a class="evidence-open" href="${c.url}" target="_blank" rel="noreferrer">Repository ↗</a></div></div>`;
    return `<div class="evidence-media"><div class="repo-visual"><div class="repo-top"><span>Operational platform</span><span>Self-hosted</span></div><div class="repo-title">AquaPulse</div><div class="repo-lines"><span>Next.js</span><span>NestJS</span><span>PostgreSQL</span><span>RBAC</span><span>Audit</span><span>AI assist</span></div></div><div class="live-overlay"><span class="evidence-badge">${c.badge}</span><a class="evidence-open" href="${c.url}" target="_blank" rel="noreferrer">Repository ↗</a></div></div>`;
  }

  function build(){
    if(document.getElementById('evidenceRail')) return;
    const caseGrid=document.getElementById('caseGrid');
    if(!caseGrid) return;
    const section=document.createElement('section');
    section.className='evidence-section';
    section.id='evidenceRail';
    section.innerHTML=`<div class="evidence-head"><div><span class="eyebrow">Proof / evidence layer</span><h2>Architecture is useful. Evidence is better.</h2></div><p>Public systems are shown directly. Field and prototype work is represented with source-backed schematics until reusable project photography is available.</p></div><div class="evidence-rail">${cards.map(c=>`<article class="evidence-card">${media(c)}<div class="evidence-copy"><h3>${c.title}</h3><p>${c.body}</p><div class="evidence-meta">${c.meta.map(x=>`<span>${x}</span>`).join('')}</div>${c.repo?`<div class="evidence-note">Public repository available</div>`:''}</div></article>`).join('')}</div>`;
    caseGrid.insertAdjacentElement('afterend',section);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build); else build();
})();