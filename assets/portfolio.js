const PHONE_DISPLAY = '+91 95558 77000';
const PHONE_LINK = '+919555877000';
const COLORS={root:'#baff67',education:'#72b8ff',systems:'#b896ff',infra:'#93a5b7',automation:'#68dfd0',physical:'#ffbd66',project:'#f5f7f8'};

const CASES={
  aquapulse:{
    title:'AquaPulse',status:'Platform architecture / active development',group:'automation',repo:'https://github.com/pragalbhdwivedi/aquapulse',
    lead:'A self-hosted operational platform for aquaculture, designed around real-time records, tasks, water-quality workflows, accountability and human-in-the-loop AI support.',
    problem:'Operational data can become fragmented across people, paper, spreadsheets and isolated measurements. The goal is to make day-to-day work visible, searchable and auditable without turning AI into an unchecked operator.',
    role:'Product owner, requirements architect and self-hosted systems planner.',
    constraints:['Role-based access and auditability','Gradual migration rather than an all-at-once cutover','Self-hosted deployment and maintainability','AI must assist people, not silently control operations'],
    decisions:['Separate UI, API and database responsibilities','Use PostgreSQL as the durable system of record','Treat AI as an advisory layer with explicit boundaries','Design deployment around controlled self-hosted infrastructure'],
    architecture:['Operators / field data','Next.js interface','NestJS services','PostgreSQL record','Audit + AI assist'],
    evidence:['Public GitHub repository','Architecture and migration planning','RBAC / audit design']
  },
  smartclass:{
    title:'Smart Classroom System',status:'Prototype architecture',group:'education',
    lead:'A timetable-driven classroom platform connecting presentation, cameras, lesson capture, attendance context, local resilience and central administration.',
    problem:'Classroom technology tends to arrive as separate boxes: projector, camera, attendance, timetable and recording. The design challenge is to make them behave as one operational system for teachers rather than five unrelated tools.',
    role:'Systems architect and institutional product owner.',
    constraints:['Reuse existing projectors, cameras and network where practical','Teachers should not manage complex technical workflows','Classrooms must continue useful operation during network problems','The architecture must scale beyond a single pilot room'],
    decisions:['Use the academic timetable as an automation source','Keep an edge device inside each classroom','Buffer locally before central storage','Separate teacher-facing controls from administrative monitoring'],
    architecture:['FET / identity data','Classroom edge','Display + cameras','Local buffer','Central services'],
    evidence:['System architecture','Existing hardware integration plan','Timetable-driven workflow']
  },
  infra:{
    title:'Private Infrastructure Stack',status:'Applied infrastructure / ongoing',group:'infra',
    lead:'A self-hosted institutional infrastructure practice spanning Proxmox, storage, Linux, Kubernetes, networking, redundancy and automated provisioning.',
    problem:'Institutional services need dependable compute and storage without every workload becoming a separate appliance or unmanaged machine.',
    role:'Infrastructure architect, administrator and troubleshooter.',
    constraints:['Mixed hardware generations','Need to reuse capable equipment where sensible','Services have different storage and availability needs','Infrastructure must remain understandable enough to recover when something breaks'],
    decisions:['Virtualise workloads rather than dedicate hardware unnecessarily','Separate management, storage and service traffic conceptually','Use reusable provisioning instead of hand-building every VM','Design backups and recovery as part of architecture rather than an afterthought'],
    architecture:['Physical hosts','Proxmox / VMs','Kubernetes + services','TrueNAS / Ceph','Backup + monitoring'],
    evidence:['Public automation repositories','Operational Proxmox / storage work','Recovery and troubleshooting records']
  },
  solarcctv:{
    title:'Solar CCTV Edge Infrastructure',status:'Field engineering / system design',group:'physical',
    lead:'A continuous-duty remote CCTV and wireless edge concept using solar generation, battery storage, direct-DC distribution, PoE and outdoor networking.',
    problem:'Remote camera locations need dependable power and network connectivity without dragging mains AC everywhere or wasting energy through unnecessary DC→AC→DC conversion.',
    role:'Solution architect, power/network planner and field troubleshooter.',
    constraints:['Continuous operation target','Outdoor installation and variable solar conditions','PoE camera and wireless equipment loads','Avoid unnecessary conversion losses and maintenance complexity'],
    decisions:['Keep the edge power path DC wherever practical','Size around actual continuous load rather than nameplate assumptions','Treat network backhaul and power autonomy as one design problem','Use central recording rather than excessive intelligence at the pole'],
    architecture:['PV + battery','DC protection','PoE switching','Camera + outdoor AP','Wireless backhaul → NVR'],
    evidence:['Load and autonomy planning','Outdoor wireless troubleshooting','PoE / CCTV integration']
  },
  digitalops:{
    title:'Institutional Digital Operations',status:'Production + continuous improvement',group:'education',repo:'https://github.com/pragalbhdwivedi/bds-web',
    lead:'A connected set of school-facing systems covering timetable publishing, admissions communication, public information, QR workflows, automation and digital operational delivery.',
    problem:'Academic information, public communication and operational updates often exist in disconnected files and manual processes, creating repetitive work and stale information.',
    role:'Institutional owner, systems planner and deployment lead.',
    constraints:['Information must remain simple for staff and parents','Public-facing data needs structured publishing','Changes should be deployable without complex infrastructure','School operations span academic, administrative and communication workflows'],
    decisions:['Publish structured information rather than one-off documents where possible','Use GitHub-based deployment and automation for repeatability','Treat timetable data as machine-readable operational input','Use QR links to bridge physical school communication and digital information'],
    architecture:['Academic / admin data','FET + structured content','GitHub automation','Web / QR / signage','Staff + parents'],
    evidence:['Public web repositories','Timetable publishing workflow','GitHub Actions automation']
  },
  identity:{
    title:'Identity & Access Systems',status:'Applied institutional systems',group:'physical',
    lead:'An institutional identity architecture connecting student/staff credentials, RFID, QR data, access levels, transport identity and physical access control.',
    problem:'IDs are often designed as cards first and systems second. The better model is to define the identity data, lifecycle, permissions and service relationships before worrying about the plastic.',
    role:'Requirements architect and integration planner.',
    constraints:['Different user categories need different data and permissions','RFID values and printed identity data must stay distinct','Physical access has fail-safe and relay behavior','The identity model should support future services without repeated redesign'],
    decisions:['Separate static institutional content from dynamic identity data','Use a consistent unique identity model across services','Define access levels explicitly','Treat QR, RFID and printed identifiers as different interfaces to the same operational identity'],
    architecture:['Identity record','SUID / employee ID','RFID + QR','Access / transport','Future services'],
    evidence:['Credential data schemas','Access-control integration','Institutional workflow planning']
  }
};

const N=(id,label,type,group,parent,x,y,summary,opts={})=>({id,label,type,group,parent,x,y,summary,...opts});
const nodes=[
  N('root','PRAGALBH','PROFILE','root',null,700,450,'Education leader · institutional systems architect · infrastructure & automation builder.',{level:'Core identity'}),
  N('edu','Education & Operations','PILLAR','education','root',410,245,'Academic leadership, curriculum, admissions, compliance and institutional execution.',{level:'Core strength'}),
  N('systems','Systems Architecture','PILLAR','systems','root',700,145,'Requirements, solution architecture, resilience and cross-domain systems thinking.',{level:'Core strength'}),
  N('infra','Infrastructure & Networking','PILLAR','infra','root',1010,250,'Private infrastructure, storage, Linux, campus networking and edge systems.',{level:'Core strength'}),
  N('automation','Automation & Software','PILLAR','automation','root',1030,650,'Kubernetes, MAAS, GitHub, provisioning and operational software architecture.',{level:'Applied / growing'}),
  N('physical','Applied Technology & Energy','PILLAR','physical','root',470,700,'Smart facilities, identity, access, solar, CCTV and IT/OT integration.',{level:'Applied'}),

  N('leadership','Education Leadership','DOMAIN','education','edu',185,150,'School administration, academic operations, institution development and multi-institution coordination.',{level:'Core strength',skills:['School administration','Academic operations','Educational planning','Institution development','Faculty workflow','Admissions strategy']}),
  N('curriculum','Curriculum & Assessment','DOMAIN','education','edu',120,300,'Curriculum, assessment, examination systems and stage-wise academic planning.',{level:'Core strength',skills:['Curriculum planning','Assessment design','Exam structuring','Teacher aptitude tests','NCERT / NEP / NCF alignment']}),
  N('communication','Institutional Communication','DOMAIN','education','edu',220,430,'Parent communication, bilingual notices, admissions messaging and public information systems.',{level:'Core strength',skills:['Parent communication','Bilingual notices','Admissions campaigns','QR information','Formal school communication']}),
  N('edtech','Education Technology','DOMAIN','education','edu',410,70,'Digital workflows that connect timetable, attendance, classroom technology and administrative oversight.',{level:'Applied'}),
  N('smartclass','Smart Classroom','PROJECT','project','edtech',300,28,CASES.smartclass.lead,{caseId:'smartclass',level:'Prototype architecture'}),
  N('digitalops','Digital Operations','PROJECT','project','communication',100,505,CASES.digitalops.lead,{caseId:'digitalops',level:'Production + continuous improvement',repo:CASES.digitalops.repo}),

  N('requirements','Requirements Engineering','DOMAIN','systems','systems',545,55,'Convert ambiguous needs into users, constraints, failure modes, integrations and measurable requirements.',{level:'Core emerging strength',skills:['Stakeholder requirements','Constraint mapping','Failure-mode thinking','Pilot-to-scale planning']}),
  N('solution','Solution Architecture','DOMAIN','systems','systems',700,35,'Design the boundaries and relationships between hardware, software, networks, storage, power and people.',{level:'Core emerging strength',skills:['Architecture trade-offs','Integration boundaries','Resilience','Make-vs-buy','Technical solutioning']}),
  N('rootcause','Root-Cause Analysis','DOMAIN','systems','systems',850,55,'Evidence-led troubleshooting across software, permissions, networks, relays and electrical infrastructure.',{level:'Applied',skills:['Measurement','Isolation','Hypothesis testing','Configuration comparison','Fault tracing']}),
  N('resilience','Resilient Systems','DOMAIN','systems','systems',835,175,'Offline-first behavior, local buffering, redundancy, recovery and graceful failure.',{level:'Applied / developing',skills:['Local caching','Fault tolerance','Recovery planning','Configuration backups']}),

  N('proxmox','Proxmox / Virtualisation','DOMAIN','infra','infra',1190,120,'VM planning, cloud-init, cluster administration and self-hosted compute.',{level:'Strong',skills:['Proxmox VE','VM provisioning','Cloud-init','Cluster design','Capacity planning']}),
  N('storage','Storage / TrueNAS','DOMAIN','infra','infra',1280,260,'Network storage, file services, NFS/SMB/FTP and storage integration.',{level:'Applied',skills:['TrueNAS','NFS','SMB','FTP','Permissions','Storage pools']}),
  N('networking','Campus Networking','DOMAIN','infra','infra',1240,420,'VLANs, Omada, PoE, IP planning, outdoor wireless and segmented campus infrastructure.',{level:'Strong / applied',skills:['VLANs','Omada SDN','PoE','Switch topology','Outdoor wireless','Network segmentation']}),
  N('cctv','CCTV / NVR','DOMAIN','infra','networking',1325,535,'IP surveillance architecture, RTSP/ONVIF, recording, retention and wireless backhaul.',{level:'Applied',skills:['Hikvision IP cameras','RTSP','ONVIF','NVR architecture','Retention planning']}),
  N('infra-case','Private Infrastructure','PROJECT','project','proxmox',1260,35,CASES.infra.lead,{caseId:'infra',level:'Applied infrastructure'}),

  N('kubernetes','Kubernetes','DOMAIN','automation','automation',1245,665,'HA cluster architecture, control plane, external etcd, CNI, services and persistent storage.',{level:'Strong / developing advanced',repo:'https://github.com/pragalbhdwivedi/k8s-ha-installer',skills:['External etcd','HAProxy','Keepalived','Calico','WireGuard','MetalLB']}),
  N('maas','MAAS / Bare Metal','DOMAIN','automation','automation',1160,800,'Repeatable machine provisioning with cloud-init, Netplan, OVS and automated storage setup.',{level:'Applied',repo:'https://github.com/pragalbhdwivedi/maas-configurations',skills:['MAAS','Cloud-init','Netplan','OVS','Automated provisioning']}),
  N('github','GitHub / CI-CD','DOMAIN','automation','automation',930,835,'Repository workflows, Pages, custom domains, Actions and deployment validation.',{level:'Applied',skills:['GitHub Actions','GitHub Pages','PR workflows','Custom domains','Deployment validation']}),
  N('apps','Operational Software','DOMAIN','automation','automation',850,725,'Full-stack systems designed around workflows, roles, records, auditability and self-hosted operations.',{level:'Applied / developing'}),
  N('aquapulse','AquaPulse','PROJECT','project','apps',760,810,CASES.aquapulse.lead,{caseId:'aquapulse',level:'Active development',repo:CASES.aquapulse.repo}),

  N('identity','Identity & Access','PROJECT','project','physical',260,790,CASES.identity.lead,{caseId:'identity',level:'Applied institutional systems'}),
  N('solar','Solar / Battery Systems','DOMAIN','physical','physical',420,850,'Solar PV, battery architecture, hybrid inverters and continuous-duty edge power.',{level:'Applied',skills:['PV string thinking','Battery banks','Charge/discharge limits','DC distribution','Hybrid inverter configuration']}),
  N('solarcctv','Solar CCTV Edge','PROJECT','project','solar',260,880,CASES.solarcctv.lead,{caseId:'solarcctv',level:'Field engineering'}),
  N('access','Physical Access Control','DOMAIN','physical','physical',575,830,'RFID/face terminals, EM locks, relay logic and fail-safe access behavior.',{level:'Applied',skills:['Hikvision terminals','NO/NC relay logic','EM locks','Exit sensors','Fault diagnosis']}),
  N('signage','Digital Signage','DOMAIN','physical','physical',660,735,'Scheduled signage endpoints, automated provisioning and classroom/signage convergence.',{level:'Applied / developing',repo:'https://github.com/pragalbhdwivedi/signage-vm-autoinstall'})
];

const nodeMap=new Map(nodes.map(n=>[n.id,n]));
const childrenByParent=new Map();
nodes.forEach(n=>{if(n.parent){if(!childrenByParent.has(n.parent))childrenByParent.set(n.parent,[]);childrenByParent.get(n.parent).push(n.id)}});
const crossLinks=[['smartclass','signage'],['smartclass','cctv'],['smartclass','identity'],['smartclass','resilience'],['infra-case','kubernetes'],['infra-case','storage'],['aquapulse','proxmox'],['digitalops','github'],['solarcctv','networking'],['solarcctv','cctv'],['identity','access'],['requirements','smartclass'],['solution','infra-case']];
const expanded=new Set(['root']);let selected='root';

const svg=document.getElementById('network'),drawer=document.getElementById('drawer'),searchInput=document.getElementById('searchInput'),searchResults=document.getElementById('searchResults');
let view={x:0,y:0,scale:1};let dragging=false,start={x:0,y:0},startView={x:0,y:0};

function ancestors(id){const arr=[];let cur=nodeMap.get(id);while(cur&&cur.parent){arr.unshift(cur.parent);cur=nodeMap.get(cur.parent)}return arr}
function isVisible(n){if(n.id==='root')return true;return ancestors(n.id).every(a=>expanded.has(a))}
function visibleNodes(){return nodes.filter(isVisible)}
function visibleEdges(){const vis=new Set(visibleNodes().map(n=>n.id));const base=visibleNodes().filter(n=>n.parent&&vis.has(n.parent)).map(n=>[n.parent,n.id,false]);const cross=crossLinks.filter(([a,b])=>vis.has(a)&&vis.has(b)).map(([a,b])=>[a,b,true]);return [...base,...cross]}
function radius(n){if(n.id==='root')return 58;if(n.type==='PILLAR')return 45;if(n.type==='PROJECT')return 34;return 30}
function color(n){return COLORS[n.group]||COLORS.infra}
function transformPoint(n){return{x:n.x*view.scale+view.x,y:n.y*view.scale+view.y}}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}

function renderGraph(){
  const vis=visibleNodes(),edges=visibleEdges(),focus=selected;let html='<g id="viewport">';
  edges.forEach(([a,b,cross])=>{const A=nodeMap.get(a),B=nodeMap.get(b);html+=`<line class="edge ${cross?'cross':''} ${focus&&(a===focus||b===focus)?'active':''}" x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}"/>`});
  vis.forEach(n=>{const r=radius(n),isProject=n.type==='PROJECT';html+=`<g class="node ${isProject?'project':''} ${selected===n.id?'active':''}" data-id="${n.id}" transform="translate(${n.x} ${n.y})"><circle r="${r}" fill="${isProject?color(n):'#0b1015'}" stroke="${color(n)}"/><text class="label" y="${n.id==='root'?0:-2}">${esc(n.label)}</text><text class="sub" y="${n.id==='root'?17:13}">${esc(n.type)}</text></g>`});
  html+='</g>';svg.innerHTML=html;applyViewport();
  svg.querySelectorAll('.node').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();selectNode(el.dataset.id,true)}));
}
function applyViewport(){const g=document.getElementById('viewport');if(g)g.setAttribute('transform',`translate(${view.x} ${view.y}) scale(${view.scale})`)}
function selectNode(id,toggle=false){const n=nodeMap.get(id);if(!n)return;selected=id;if(toggle&&childrenByParent.has(id)){expanded.has(id)?expanded.delete(id):expanded.add(id)}renderGraph();renderDrawer(n);highlightRelated(id)}
function highlightRelated(id){const related=new Set([id]);visibleEdges().forEach(([a,b])=>{if(a===id)related.add(b);if(b===id)related.add(a)});svg.querySelectorAll('.node').forEach(el=>{el.classList.toggle('dim',!related.has(el.dataset.id)&&id!=='root')})}
function expandPath(id){ancestors(id).forEach(a=>expanded.add(a));const n=nodeMap.get(id);if(n&&childrenByParent.has(id))expanded.add(id);selected=id;renderGraph();renderDrawer(n);centerOn(n)}
function centerOn(n){if(!n)return;view.scale=Math.min(1.22,Math.max(.85,view.scale));view.x=700-n.x*view.scale;view.y=440-n.y*view.scale;applyViewport()}
function archHTML(steps=[]){return `<div class="architecture">${steps.map((s,i)=>`${i?'<div class="arch-arrow">→</div>':''}<div class="arch-step"><b>${String(i+1).padStart(2,'0')}</b><span>${esc(s)}</span></div>`).join('')}</div>`}
function renderDrawer(n){if(!n)return;drawer.classList.remove('empty');drawer.classList.add('open');const c=n.caseId?CASES[n.caseId]:null;drawer.innerHTML=`<button class="mobile-close" id="drawerClose">Close</button><div class="kicker"><i style="background:${color(n)}"></i>${esc(n.type)} / ${esc(n.group)}</div><h2>${esc(n.label)}</h2><div class="level">${esc(n.level||'Applied')}</div><p class="summary">${esc(n.summary)}</p>${c?`<div class="dsection"><h3>Architecture</h3>${archHTML(c.architecture)}</div><div class="project-grid"><div class="project-fact"><b>Role</b><span>${esc(c.role)}</span></div><div class="project-fact"><b>Status</b><span>${esc(c.status)}</span></div></div><div class="dsection"><h3>Problem</h3><p>${esc(c.problem)}</p></div><div class="dsection"><h3>Key decisions</h3><ul>${c.decisions.slice(0,3).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}${n.skills?.length?`<div class="dsection"><h3>Capabilities</h3><div class="chips">${n.skills.map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div></div>`:''}<div class="actions">${c?`<button class="cta primary" onclick="openCase('${n.caseId}')">Open case study</button>`:''}${n.repo?`<a class="cta" href="${n.repo}" target="_blank" rel="noreferrer">GitHub ↗</a>`:''}<a class="cta" href="https://wa.me/${PHONE_LINK.replace('+','')}" target="_blank" rel="noreferrer">WhatsApp</a></div>`;const close=document.getElementById('drawerClose');if(close)close.onclick=()=>drawer.classList.remove('open')}

function reset(){expanded.clear();expanded.add('root');selected='root';view={x:0,y:0,scale:1};renderGraph();drawer.className='drawer empty';drawer.innerHTML='<div class="drawer-empty"><span class="eyebrow">Start anywhere</span><h2>Explore how the work connects.</h2><p>Open a branch, follow the connections and inspect projects as evidence hubs. The map stays deliberately sparse until you ask for more.</p><div class="mini">Blue = education · violet = systems · grey = infrastructure · cyan = automation · amber = applied / energy</div></div>'}

document.getElementById('resetBtn').onclick=reset;
svg.addEventListener('wheel',e=>{e.preventDefault();const factor=e.deltaY<0?1.08:.92;view.scale=Math.max(.55,Math.min(1.8,view.scale*factor));applyViewport()},{passive:false});
svg.addEventListener('pointerdown',e=>{if(e.target.closest('.node'))return;dragging=true;start={x:e.clientX,y:e.clientY};startView={...view};svg.setPointerCapture(e.pointerId)});svg.addEventListener('pointermove',e=>{if(!dragging)return;view.x=startView.x+(e.clientX-start.x);view.y=startView.y+(e.clientY-start.y);applyViewport()});svg.addEventListener('pointerup',()=>dragging=false);

searchInput.addEventListener('input',()=>{const q=searchInput.value.trim().toLowerCase();if(!q){searchResults.classList.remove('show');searchResults.innerHTML='';return}const hits=nodes.filter(n=>`${n.label} ${n.summary} ${(n.skills||[]).join(' ')}`.toLowerCase().includes(q)).slice(0,9);searchResults.innerHTML=hits.map(n=>`<button data-id="${n.id}"><strong>${esc(n.label)}</strong><span>${esc(n.type)} · ${esc(n.level||'')}</span></button>`).join('');searchResults.classList.toggle('show',hits.length>0);searchResults.querySelectorAll('button').forEach(b=>b.onclick=()=>{expandPath(b.dataset.id);searchResults.classList.remove('show');searchInput.value=''})});

document.addEventListener('click',e=>{if(!e.target.closest('.search'))searchResults.classList.remove('show')});

const recruiter=document.getElementById('recruiterView'),networkView=document.getElementById('networkView'),exploreMode=document.getElementById('exploreMode'),recruiterMode=document.getElementById('recruiterMode');
function setMode(mode){const rec=mode==='recruiter';recruiter.classList.toggle('active',rec);networkView.classList.toggle('hidden',rec);exploreMode.classList.toggle('active',!rec);recruiterMode.classList.toggle('active',rec);document.getElementById('resetBtn').style.display=rec?'none':'';if(rec)window.scrollTo({top:0,behavior:'smooth'})}
exploreMode.onclick=()=>setMode('explore');recruiterMode.onclick=()=>setMode('recruiter');

const caseOrder=['smartclass','infra','aquapulse','solarcctv','digitalops','identity'];
function renderRecruiterCases(){const grid=document.getElementById('caseGrid');grid.innerHTML=caseOrder.map(id=>{const c=CASES[id];return `<article class="case"><span class="status">${esc(c.status)}</span><h3>${esc(c.title)}</h3><p>${esc(c.lead)}</p><div class="case-tags">${c.architecture.slice(0,3).map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div><button onclick="openCase('${id}')">View architecture & decisions →</button></article>`}).join('')}

window.openCase=function(id){const c=CASES[id];if(!c)return;const modal=document.getElementById('caseModal');modal.innerHTML=`<button class="case-close" onclick="closeCase()">×</button><span class="eyebrow">${esc(c.status)}</span><h2>${esc(c.title)}</h2><p class="lead">${esc(c.lead)}</p><div class="case-cols"><div class="case-block"><h3>Problem</h3><p>${esc(c.problem)}</p></div><div class="case-block"><h3>My role</h3><p>${esc(c.role)}</p></div><div class="case-block"><h3>Constraints</h3><ul>${c.constraints.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="case-block"><h3>Decisions</h3><ul>${c.decisions.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div><div class="case-architecture"><h3>System architecture</h3>${archHTML(c.architecture)}</div><div class="evidence-strip">${c.evidence.map((x,i)=>`<div class="evidence-card"><b>Evidence ${String(i+1).padStart(2,'0')}</b><span>${esc(x)}</span></div>`).join('')}</div><div class="actions">${c.repo?`<a class="cta primary" href="${c.repo}" target="_blank" rel="noreferrer">View repository ↗</a>`:''}<a class="cta" href="https://wa.me/${PHONE_LINK.replace('+','')}" target="_blank" rel="noreferrer">Discuss on WhatsApp</a></div>`;document.getElementById('caseOverlay').classList.add('show')};
window.closeCase=function(){document.getElementById('caseOverlay').classList.remove('show')};document.getElementById('caseOverlay').addEventListener('click',e=>{if(e.target.id==='caseOverlay')closeCase()});

renderRecruiterCases();renderGraph();renderDrawer(nodeMap.get('root'));drawer.classList.add('empty');drawer.classList.remove('open');
