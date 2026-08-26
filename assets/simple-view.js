(function(){
  const PHONE_DISPLAY='+91 95558 77000',PHONE_LINK='+919555877000';
  const STORIES=[
    {id:'digitalops',state:'LIVE / PUBLIC',title:'Make institutional information easier to operate',body:'A live school-facing system that connects public information, timetable publishing, admissions communication and repeatable web delivery instead of relying only on disconnected files and one-off updates.'},
    {id:'smartclass',state:'PROTOTYPE',title:'Make classroom technology behave like one system',body:'A classroom architecture intended to follow the timetable and connect presentation, cameras, lesson capture, attendance context and central administration without making teachers operate several separate technical tools.'},
    {id:'infra',state:'APPLIED / ONGOING',title:'Build technology an institution can own and recover',body:'Private compute, storage and network infrastructure designed so services can be operated, rebuilt and recovered without turning every workload into another isolated appliance.'},
    {id:'aquapulse',state:'ACTIVE BUILD',title:'Turn fragmented operational records into accountable software',body:'Operational software designed around controlled workflows, durable records, permissions, auditability and human-guided AI so important work is visible and traceable rather than scattered across paper and spreadsheets.'},
    {id:'solarcctv',state:'FIELD DESIGN',title:'Keep remote systems powered and connected',body:'Remote surveillance and networking designed around solar generation, battery storage, efficient direct-DC delivery, PoE and wireless backhaul so power and connectivity are solved as one field problem.'},
    {id:'identity',state:'APPLIED',title:'Treat identity as a system, not just a card',body:'A common identity model connecting printed IDs, RFID, QR, access levels and transport use so each service does not create another disconnected identity record.'}
  ];

  const ABOUT=`I work where education leadership, institutional operations and technology meet. I usually start with the operating problem: what people need to do, what already exists, what can fail, and what must keep working. From there I frame requirements, connect the software, hardware, network, power and people constraints, build or coordinate the system, and keep diagnosing and improving it once it is in use.`;

  function addAbout(){
    const hero=document.querySelector('#recruiterView .rhero'),impact=document.querySelector('#recruiterView .impact');
    if(!hero||!impact||document.querySelector('#recruiterView [data-about-me]'))return;
    const section=document.createElement('section');section.dataset.aboutMe='true';section.innerHTML=`<div class="section-head"><div><span class="eyebrow">About me</span><h2>Systems begin with the operating problem.</h2></div><p>${ABOUT}</p></div>`;
    impact.insertAdjacentElement('beforebegin',section)
  }

  function buildSimple(){
    if(document.getElementById('simpleView'))return;
    const recruiter=document.getElementById('recruiterView');if(!recruiter)return;
    const section=document.createElement('section');section.className='recruiter-view';section.id='simpleView';section.setAttribute('aria-label','Simple plain-language portfolio view');
    section.innerHTML=`<div class="rwrap"><div class="rhero"><div><span class="eyebrow">Pragalbh Dwivedi / Plain-language view</span><h1>I turn difficult institutional problems into <em>systems people can operate.</em></h1><p>${ABOUT}</p><div class="actions"><a class="cta primary" href="tel:${PHONE_LINK}">Call ${PHONE_DISPLAY}</a><a class="cta" href="https://wa.me/${PHONE_LINK.replace('+','')}" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div><aside class="rside"><span class="eyebrow">Current context</span><strong>Executive Director</strong><span>Badridhar Dwivedi Group of Institutions</span><div style="height:1px;background:var(--line);margin:22px 0"></div><span class="eyebrow">In simple terms</span><strong style="font-size:16px">Leadership · systems · problem solving</strong><span>Education, institutional operations, private technology, automation and applied field systems.</span></aside></div><div class="section-head"><div><span class="eyebrow">What that looks like</span><h2>Six problems, explained without the engineering vocabulary.</h2></div><p>The underlying case studies remain the same. This view translates the technical language; it does not simplify the evidence or change project maturity.</p></div><div class="case-grid" data-simple-stories>${STORIES.map((s,i)=>`<article class="case ${i===0?'flagship-card':''}" data-simple-case="${s.id}"><span class="status">${s.state}</span><h3>${s.title}</h3><p>${s.body}</p><button type="button" data-simple-open="${s.id}">See evidence & decisions →</button></article>`).join('')}</div><div class="section-head"><div><span class="eyebrow">How I work</span><h2>Understand → design → build → operate → improve.</h2></div><p>I am most useful when the problem crosses normal boundaries: administration and software, networks and physical equipment, classroom routines and automation, or power and connectivity.</p></div><div class="solves"><article class="solve"><b>01</b><h3>Understand the operating problem</h3><p>Start with users, constraints, existing equipment, risks and what must continue working.</p></article><article class="solve"><b>02</b><h3>Design across boundaries</h3><p>Connect people, process, software, hardware, networking, storage and power instead of treating each as a separate purchase.</p></article><article class="solve"><b>03</b><h3>Keep improving after launch</h3><p>Troubleshoot from evidence, document what matters and evolve the system rather than abandoning it after installation.</p></article></div><div class="contact"><div><span class="eyebrow">Work with me</span><h2>Have a messy institutional problem?</h2><p>Open to leadership roles, consulting/advisory work and partnerships where systems thinking matters more than another isolated workaround.</p></div><div class="actions"><a class="cta primary" href="tel:${PHONE_LINK}">Phone</a><a class="cta" href="https://wa.me/${PHONE_LINK.replace('+','')}" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div></div>`;
    recruiter.insertAdjacentElement('afterend',section);
    section.querySelectorAll('[data-simple-open]').forEach(btn=>btn.addEventListener('click',()=>{if(typeof window.openCase==='function')window.openCase(btn.dataset.simpleOpen)}));
  }

  function addMode(){
    const mode=document.querySelector('.mode');if(!mode)return null;
    let btn=document.getElementById('simpleMode');if(btn)return btn;
    btn=document.createElement('button');btn.id='simpleMode';btn.type='button';btn.textContent='Simple view';btn.setAttribute('aria-label','Simple plain-language view');btn.setAttribute('aria-pressed','false');mode.appendChild(btn);return btn
  }

  function syncLabels(){
    const compact=matchMedia('(max-width:720px)').matches,explore=document.getElementById('exploreMode'),recruit=document.getElementById('recruiterMode'),simple=document.getElementById('simpleMode');
    if(explore)explore.textContent=compact?'Explore':'Explore network';if(recruit)recruit.textContent=compact?'Recruiter':'Recruiter view';if(simple)simple.textContent=compact?'Simple':'Simple view'
  }

  function installMode(){
    const simple=document.getElementById('simpleMode'),simpleView=document.getElementById('simpleView'),recruiter=document.getElementById('recruiterView'),network=document.getElementById('networkView'),explore=document.getElementById('exploreMode'),recruit=document.getElementById('recruiterMode'),reset=document.getElementById('resetBtn');
    if(!simple||!simpleView||!recruiter||!network)return;
    const baseSetMode=window.setMode;
    window.setMode=function(mode){
      if(mode!=='simple'){
        simpleView.classList.remove('active');
        if(typeof baseSetMode==='function')baseSetMode(mode);
      }else{
        network.classList.add('hidden');recruiter.classList.remove('active');simpleView.classList.add('active');
        explore?.classList.remove('active');recruit?.classList.remove('active');simple.classList.add('active');
        if(reset)reset.style.display='none';window.scrollTo({top:0,behavior:'smooth'})
      }
      explore?.setAttribute('aria-pressed',String(mode==='explore'));recruit?.setAttribute('aria-pressed',String(mode==='recruiter'));simple.setAttribute('aria-pressed',String(mode==='simple'))
    };
    simple.onclick=()=>window.setMode('simple');
    if(explore)explore.onclick=()=>window.setMode('explore');if(recruit)recruit.onclick=()=>window.setMode('recruiter')
  }

  function init(){addAbout();buildSimple();addMode();installMode();syncLabels();window.addEventListener('resize',syncLabels,{passive:true});window.__simpleView={stories:STORIES.map(s=>s.id),about:ABOUT}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();