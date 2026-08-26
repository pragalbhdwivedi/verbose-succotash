(function(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const EASE='cubic-bezier(.16,1,.3,1)';
  const UI=220,TRANSITION=360;

  function animateModal(){
    if(reduced.matches)return;
    const modal=document.getElementById('caseModal');
    if(!modal||!document.getElementById('caseOverlay')?.classList.contains('show'))return;
    modal.getAnimations().forEach(a=>{if(a.id==='case-spatial-reveal')a.cancel()});
    const a=modal.animate([
      {opacity:.42,transform:'translateY(18px) scale(.992)',filter:'blur(2px)'},
      {opacity:1,transform:'translateY(0) scale(1)',filter:'blur(0)'}
    ],{duration:TRANSITION,easing:EASE,fill:'both'});
    a.id='case-spatial-reveal';a.finished.finally(()=>{if(a.playState!=='idle')a.cancel()}).catch(()=>{});
  }

  function animateDrawer(){
    if(reduced.matches)return;
    const drawer=document.getElementById('drawer');if(!drawer||drawer.classList.contains('empty'))return;
    const items=[...drawer.querySelectorAll(':scope > .kicker,:scope > h2,:scope > .level,:scope > [data-system-readout],:scope > .summary,:scope > .dsection,:scope > .project-grid,:scope > .actions')].slice(0,9);
    items.forEach((el,i)=>{
      el.getAnimations().forEach(a=>{if(a.id==='drawer-spatial-reveal')a.cancel()});
      const a=el.animate([{opacity:.18,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:UI,delay:i*24,easing:EASE,fill:'both'});
      a.id='drawer-spatial-reveal';a.finished.finally(()=>{if(a.playState!=='idle')a.cancel()}).catch(()=>{})
    })
  }

  const baseOpen=window.openCase;
  if(typeof baseOpen==='function')window.openCase=function(id){const result=baseOpen(id);requestAnimationFrame(animateModal);return result};

  const drawer=document.getElementById('drawer');
  if(drawer){let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;animateDrawer()})}).observe(drawer,{childList:true,subtree:false})}

  window.__spatialPolish={animateModal,animateDrawer,timings:{ui:UI,transition:TRANSITION}};
})();