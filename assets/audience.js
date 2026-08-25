(function(){
  function loadStyles(){
    if(document.querySelector('link[data-audience-style]')) return;
    const link=document.createElement('link');
    link.rel='stylesheet';link.href='./assets/audience.css';link.dataset.audienceStyle='true';
    document.head.appendChild(link);
  }

  const routes=[
    {label:'Hiring me',mode:'recruiter',primary:true},
    {label:'Education / EdTech',node:'edu'},
    {label:'Consulting / architecture',node:'systems'},
    {label:'Infrastructure / IT',node:'infra'},
    {label:'Automation / product',node:'automation'},
    {label:'Field systems',node:'physical'}
  ];

  function route(r){
    if(r.mode==='recruiter'){
      if(typeof setMode==='function') setMode('recruiter');
      return;
    }
    if(typeof setMode==='function') setMode('explore');
    if(r.node&&typeof expandPath==='function') expandPath(r.node);
  }

  function build(){
    loadStyles();
    if(document.querySelector('.audience-router')) return;
    const shell=document.querySelector('.graph-shell');
    if(!shell) return;
    const el=document.createElement('nav');
    el.className='audience-router';
    el.setAttribute('aria-label','Choose a portfolio path');
    el.innerHTML=`<span>Start with</span>${routes.map((r,i)=>`<button type="button" data-route="${i}" class="${r.primary?'primary-route':''}">${r.label}</button>`).join('')}`;
    el.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>route(routes[Number(btn.dataset.route)])));
    shell.appendChild(el);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build); else build();
})();