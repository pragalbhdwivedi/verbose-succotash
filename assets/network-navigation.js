(function(){
  let lastSelected=null;
  function loadStyle(){if(document.querySelector('link[data-network-navigation-style]'))return;const l=document.createElement('link');l.rel='stylesheet';l.href='./assets/network-navigation.css';l.dataset.networkNavigationStyle='true';document.head.appendChild(l)}
  function pathFor(id){if(typeof nodeMap==='undefined'||!nodeMap.has(id))return[];const ids=[...(typeof ancestors==='function'?ancestors(id):[]),id];return ids.map(x=>nodeMap.get(x)).filter(Boolean)}
  function updateHash(id){if(location.hash.startsWith('#case='))return;if(!id||id==='root'){if(location.hash.startsWith('#node='))history.replaceState(null,'',`${location.pathname}${location.search}`);return}const next=`#node=${encodeURIComponent(id)}`;if(location.hash!==next)history.replaceState(null,'',`${location.pathname}${location.search}${next}`)}
  function go(id){if(id==='root'){if(typeof reset==='function')reset();return}if(typeof expandPath==='function')expandPath(id)}
  function render(){
    const shell=document.querySelector('.graph-shell');if(!shell||typeof selected==='undefined')return;
    let el=document.getElementById('networkBreadcrumb');if(!el){el=document.createElement('nav');el.id='networkBreadcrumb';el.className='network-breadcrumb';el.setAttribute('aria-label','Current capability path');el.setAttribute('aria-live','polite');shell.appendChild(el)}
    const nodes=pathFor(selected);if(!nodes.length)return;
    el.innerHTML=`<span>Current path</span>${nodes.map((n,i)=>`${i?'<i aria-hidden="true">›</i>':''}<button type="button" data-crumb="${n.id}" class="${i>0&&i<nodes.length-1?'crumb-middle':''}" ${i===nodes.length-1?'aria-current="page"':''}>${n.id==='root'?'Pragalbh':n.label}</button>`).join('')}${nodes.length>1?`<button type="button" class="network-back" data-crumb="${nodes[nodes.length-2].id}">← Back</button>`:''}`;
    el.querySelectorAll('[data-crumb]').forEach(btn=>btn.addEventListener('click',()=>go(btn.dataset.crumb)));
    if(lastSelected!==selected){lastSelected=selected;updateHash(selected);requestAnimationFrame(()=>{el.scrollLeft=el.scrollWidth})}
  }
  function observe(){const svg=document.getElementById('network');if(!svg)return;render();new MutationObserver(render).observe(svg,{childList:true,subtree:true,attributes:true,attributeFilter:['class']})}
  function loadCaseReview(){if(document.querySelector('script[data-case-review-layer]'))return;const s=document.createElement('script');s.src='./assets/case-review.js';s.dataset.caseReviewLayer='true';document.body.appendChild(s)}
  function init(){loadStyle();observe();window.addEventListener('hashchange',render);loadCaseReview()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();