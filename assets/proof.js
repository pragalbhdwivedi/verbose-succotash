(function(){
  const PROOF={
    smartclass:{type:'SOURCE-BACKED ARCHITECTURE',note:'Supported by a formal technical proposal and implementation planning. Presented as prototype architecture, not as a completed campus-wide deployment.'},
    infra:{type:'APPLIED INFRASTRUCTURE',note:'Supported by public automation repositories plus operational administration, storage, recovery and troubleshooting work.'},
    aquapulse:{type:'PUBLIC REPOSITORY',note:'Public project architecture and documentation are available. The platform is presented as active development rather than a finished commercial product.'},
    solarcctv:{type:'FIELD SYSTEM DESIGN',note:'Based on real CCTV, outdoor wireless and continuous-power requirements. Field engineering and design status is stated explicitly.'},
    digitalops:{type:'LIVE + PUBLIC REPOSITORY',note:'A live institutional web system and its GitHub-managed publishing workflow are publicly verifiable.',live:'https://bdsps.in/'},
    identity:{type:'APPLIED SYSTEM DESIGN',note:'Derived from active identity, RFID, transport credential and physical access-control work. The system architecture is presented separately from visual card design.'}
  };

  function addCardBadges(){
    const cards=[...document.querySelectorAll('#caseGrid .case')];
    if(typeof caseOrder==='undefined') return;
    cards.forEach((card,i)=>{
      const id=caseOrder[i],p=PROOF[id];
      if(!p||card.querySelector('.proof-type')) return;
      const status=card.querySelector('.status');
      const badge=document.createElement('div');
      badge.className='proof-type';
      badge.textContent=p.type;
      if(status) status.insertAdjacentElement('afterend',badge); else card.prepend(badge);
    });
  }

  const baseOpenCase=window.openCase;
  if(typeof baseOpenCase==='function'){
    window.openCase=function(id){
      baseOpenCase(id);
      const p=PROOF[id],modal=document.getElementById('caseModal');
      if(!p||!modal) return;
      const lead=modal.querySelector('.lead');
      if(lead&&!modal.querySelector('.proof-panel')){
        const panel=document.createElement('div');
        panel.className='proof-panel';
        panel.innerHTML=`<span class="proof-type">${p.type}</span><p>${p.note}</p>`;
        lead.insertAdjacentElement('afterend',panel);
      }
      if(p.live){
        const actions=modal.querySelector('.actions');
        if(actions&&!actions.querySelector('[data-live-proof]')){
          const a=document.createElement('a');
          a.className='cta';a.href=p.live;a.target='_blank';a.rel='noreferrer';a.dataset.liveProof='true';a.textContent='Open live system ↗';
          actions.prepend(a);
        }
      }
    };
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addCardBadges); else addCardBadges();
})();