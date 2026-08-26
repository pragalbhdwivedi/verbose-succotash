(function(){
  const svg=document.getElementById('network'),drawer=document.getElementById('drawer');
  if(!svg||!drawer)return;
  let queued=false,lastKey='';

  function maturity(n){
    const status=(n?.caseId&&typeof CASES!=='undefined'?CASES[n.caseId]?.status:'')||n?.level||'';
    if(/production/i.test(status))return'LIVE';
    if(/field/i.test(status))return'FIELD';
    if(/prototype/i.test(status))return'PROTO';
    if(/active development/i.test(status))return'BUILD';
    if(/applied/i.test(status))return'APPLIED';
    return n?.type==='PROJECT'?'CASE':n?.type||'SYSTEM';
  }

  function snapshot(){
    if(typeof selected==='undefined'||typeof nodeMap==='undefined')return null;
    const n=nodeMap.get(selected);if(!n)return null;
    const path=selected==='root'?['root']:[...(typeof ancestors==='function'?ancestors(selected):[]),selected];
    const visible=typeof visibleNodes==='function'?visibleNodes():[];
    const edges=typeof visibleEdges==='function'?visibleEdges():[];
    const relations=edges.filter(([a,b])=>a===selected||b===selected).length;
    const childCount=typeof childrenByParent!=='undefined'?(childrenByParent.get(selected)?.length||0):0;
    const evidence=n.caseId&&typeof CASES!=='undefined'?(CASES[n.caseId]?.evidence?.length||0):0;
    return {n,depth:Math.max(0,path.length-1),visible:visible.length,relations,childCount,evidence,state:maturity(n)};
  }

  function statusTelemetry(s){
    const host=document.querySelector('.energy-status');if(!host)return;
    let meta=host.querySelector('[data-system-telemetry]');
    if(!meta){meta=document.createElement('span');meta.dataset.systemTelemetry='true';meta.setAttribute('aria-hidden','true');meta.style.opacity='.58';meta.style.marginLeft='4px';host.appendChild(meta)}
    const compact=matchMedia('(max-width:720px)').matches;
    meta.textContent=compact?`L${s.depth} · ${s.relations}R`:`L${s.depth} · ${s.relations} REL · ${s.visible} VISIBLE`;
  }

  function drawerTelemetry(s){
    if(drawer.classList.contains('empty'))return;
    let readout=drawer.querySelector('[data-system-readout]');
    if(!readout){
      readout=document.createElement('div');readout.className='mini';readout.dataset.systemReadout='true';
      const anchor=drawer.querySelector('.level')||drawer.querySelector('.kicker');
      if(anchor)anchor.insertAdjacentElement('afterend',readout);else drawer.prepend(readout)
    }
    const first=`PATH L${s.depth} / ${s.relations} REL / ${s.childCount} CHILD / ${s.visible} VISIBLE`;
    const second=s.n.type==='PROJECT'?`PROJECT / ${s.state} / ${s.evidence} EVIDENCE`:`${s.n.type} / ${String(s.n.level||'APPLIED').toUpperCase()}`;
    readout.textContent=`${first} · ${second}`;
  }

  function update(){
    queued=false;const s=snapshot();if(!s)return;
    const key=`${s.n.id}:${s.depth}:${s.visible}:${s.relations}:${s.childCount}:${s.evidence}:${s.state}:${drawer.className}`;
    if(key===lastKey&&document.querySelector('[data-system-telemetry]')&&drawer.querySelector('[data-system-readout]'))return;
    lastKey=key;statusTelemetry(s);drawerTelemetry(s)
  }

  function schedule(){if(queued)return;queued=true;requestAnimationFrame(update)}
  new MutationObserver(schedule).observe(svg,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  new MutationObserver(schedule).observe(drawer,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  window.addEventListener('resize',schedule,{passive:true});
  schedule();
})();