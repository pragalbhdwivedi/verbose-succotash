(function(){
  const RELATED={
    aquapulse:['apps','requirements','github','proxmox'],
    digitalops:['communication','edtech','github','leadership'],
    infra:['proxmox','storage','networking','maas','resilience'],
    'kubernetes-ha':['kubernetes','maas','resilience','networking'],
    smartclass:['edtech','resilience','cctv','identity','signage'],
    solarcctv:['solar','networking','cctv','access'],
    'leadership-recruitment':['leadership','curriculum','communication','requirements'],
    'curriculum-assessment':['curriculum','leadership','communication','requirements'],
    'compliance-documentation':['leadership','communication','requirements'],
    'institutional-operations':['leadership','curriculum','communication','requirements']
  };
  const LABELS={apps:'Operational Software',requirements:'Requirements Engineering',github:'GitHub / CI-CD',proxmox:'Proxmox / Virtualisation',communication:'Institutional Communication',edtech:'Education Technology',leadership:'Education Leadership',curriculum:'Curriculum & Assessment',storage:'Storage / TrueNAS',networking:'Campus Networking',maas:'MAAS / Bare Metal',resilience:'Resilient Systems',kubernetes:'Kubernetes',cctv:'CCTV / NVR',identity:'Identity & Access',signage:'Digital Signage',solar:'Solar / Battery Systems',access:'Physical Access Control'};

  function loadStyles(){if(document.querySelector('link[data-case-navigation-style]'))return;const l=document.createElement('link');l.rel='stylesheet';l.href='./assets/case-navigation.css';l.dataset.caseNavigationStyle='true';document.head.appendChild(l)}
  function caseHash(id){return `#case=${encodeURIComponent(id)}`}
  function setCaseHash(id){if(id)history.replaceState(null,'',`${location.pathname}${location.search}${caseHash(id)}`)}
  function clearCaseHash(){if(location.hash.startsWith('#case='))history.replaceState(null,'',`${location.pathname}${location.search}`)}

  function addNavigation(id){
    const modal=document.getElementById('caseModal'),deep=modal?.querySelector('[data-deep-case]');if(!modal||!deep||deep.querySelector('.case-relations'))return;
    const related=RELATED[id]||[],box=document.createElement('div');box.className='case-relations';
    box.innerHTML=`<div class="case-relations-head"><div><span>Connected capability web</span><h4>Follow the system outward.</h4></div><button type="button" class="copy-case-link">Copy case link</button></div><div class="case-relation-links">${related.map(node=>`<button type="button" data-related-node="${node}">${LABELS[node]||node} ↗</button>`).join('')}</div>`;
    deep.appendChild(box);
    box.querySelectorAll('[data-related-node]').forEach(btn=>btn.addEventListener('click',()=>{const node=btn.dataset.relatedNode;if(typeof window.closeCase==='function')window.closeCase();if(typeof setMode==='function')setMode('explore');if(typeof expandPath==='function')expandPath(node);history.replaceState(null,'',`${location.pathname}${location.search}#node=${encodeURIComponent(node)}`);window.scrollTo({top:0,behavior:'smooth'})}));
    const copy=box.querySelector('.copy-case-link');copy.addEventListener('click',async()=>{const url=`${location.origin}${location.pathname}${location.search}${caseHash(id)}`;try{await navigator.clipboard.writeText(url);copy.textContent='Link copied'}catch(e){copy.textContent='Use address bar'}setTimeout(()=>copy.textContent='Copy case link',1600)});
  }

  const baseOpen=window.openCase;
  if(typeof baseOpen==='function')window.openCase=function(id){baseOpen(id);if(document.getElementById('caseOverlay')?.classList.contains('show')){setCaseHash(id);setTimeout(()=>addNavigation(id),0)}};
  const baseClose=window.closeCase;
  if(typeof baseClose==='function')window.closeCase=function(){baseClose();clearCaseHash()};

  function wireK8sCard(){const btn=document.querySelector('[data-k8s-flagship] button');if(btn&&!btn.dataset.caseNavWired){btn.dataset.caseNavWired='true';btn.addEventListener('click',()=>{setCaseHash('kubernetes-ha');setTimeout(()=>addNavigation('kubernetes-ha'),0)})}}

  function wireK8sEvidence(){
    const cards=[...document.querySelectorAll('#evidenceRail .evidence-card')],card=cards.find(c=>c.querySelector('h3')?.textContent==='HA Kubernetes Installer');if(!card||card.dataset.deepCaseWired)return;
    card.dataset.deepCaseWired='true';const old=card.querySelector('.evidence-node-action');if(!old)return;const btn=old.cloneNode(true);btn.classList.remove('evidence-node-action');btn.textContent='Open flagship case →';old.replaceWith(btn);btn.addEventListener('click',()=>{if(typeof window.openCase==='function')window.openCase('kubernetes-ha')});
  }

  function openFromHash(){if(!location.hash.startsWith('#case='))return;const id=decodeURIComponent(location.hash.slice(6));if(!RELATED[id])return;if(typeof setMode==='function')setMode('recruiter');setTimeout(()=>{if(typeof window.openCase==='function')window.openCase(id)},20)}
  function openNodeFromHash(){if(!location.hash.startsWith('#node='))return;const node=decodeURIComponent(location.hash.slice(6));if(typeof setMode==='function')setMode('explore');if(typeof expandPath==='function')expandPath(node)}
  function init(){loadStyles();wireK8sCard();wireK8sEvidence();openFromHash();openNodeFromHash()}
  window.addEventListener('hashchange',()=>{openFromHash();openNodeFromHash()});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();