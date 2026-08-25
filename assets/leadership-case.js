(function(){
  const ID='leadership-recruitment';
  const esc=s=>String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const list=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
  const DATA={
    title:'Teacher Recruitment & Evaluation System',
    status:'Source-backed institutional leadership system',
    proof:'SOURCE-BACKED INSTITUTIONAL SYSTEM',
    lead:'A role-to-performance recruitment architecture connecting job definition, screening, written or leadership evaluation, demo interaction, interview, selection and explicit performance expectations.',
    problem:'Generic CV screening and a single interview do not adequately test whether a candidate can teach, lead, assess, communicate or operate inside a school system.',
    role:'Institutional requirements owner, process architect and evaluation-framework designer.',
    context:'Different school roles require different competencies, reporting relationships, instructional depth and operating expectations. Recruitment therefore needs to test role fit rather than merely confirm qualifications.',
    implementation:['Define role scope, reporting relationship, qualifications and experience','Translate the role into competencies, responsibilities and performance expectations','Screen applications against explicit requirements','Use written / leadership evaluation where appropriate','Observe teaching or practical interaction through demo stages','Use final interview for judgement, culture and operational fit','Carry expectations forward into probation and performance review'],
    tradeoffs:['A deeper process takes more effort than a single interview but provides more evidence of role fit','Standardisation improves consistency, but tests and demos must remain role-specific','Written assessment can test reasoning and knowledge but cannot replace classroom observation','Performance expectations are useful only if they remain visible after appointment'],
    failures:['Over-weighting written scores while ignoring classroom performance','Using one generic rubric for materially different roles','Testing recall instead of teaching judgement','Unclear interviewer scoring criteria','Allowing recruitment criteria to disappear after selection instead of feeding probation review'],
    outcome:'A source-backed institutional workflow now connects role definition, staged evaluation and explicit performance expectations rather than treating recruitment as a sequence of unrelated HR steps.',
    next:'Add structured scorecards, interviewer calibration guidance, an evidence-based demo observation rubric and probation review mapped back to original performance expectations.',
    verified:['The recruitment pack defines separate leadership, pre-primary, academic-subject and activity-teacher roles with role-specific competencies and responsibilities.','Selection stages include application screening, written or leadership evaluation where relevant, demo/practical interaction and final interview.','The science-teacher recruitment test contains 100 questions: 80 MCQs and 20 descriptive items.','The assessment includes Child Development & Pedagogy, inclusion, formative/diagnostic assessment, critical thinking, activity-based learning, subject knowledge and lesson-planning tasks.'],
    media:'./assets/media/leadership/teacher-recruitment_framework_01.svg'
  };

  function openLeadership(){
    const d=DATA,modal=document.getElementById('caseModal');if(!modal)return;
    modal.innerHTML=`<button class="case-close" onclick="closeCase()">×</button><span class="eyebrow">${esc(d.status)}</span><h2>${esc(d.title)}</h2><p class="lead">${esc(d.lead)}</p><div class="proof-panel"><span class="proof-type">${esc(d.proof)}</span><p>Supported by institutional recruitment/JD material and teacher recruitment assessment evidence. Raw candidate or internal evaluation data is not published.</p></div><div class="case-cols"><div class="case-block"><h3>Problem</h3><p>${esc(d.problem)}</p></div><div class="case-block"><h3>My role</h3><p>${esc(d.role)}</p></div></div><section class="deep-case" data-deep-case="${ID}"><div class="deep-case-head"><div><span>Sprint 3 · leadership proof</span><h3>How the process was shaped</h3></div><span>Institutional system</span></div><figure class="deep-media"><img src="${d.media}" alt="Teacher recruitment and evaluation framework" loading="lazy"><figcaption>Privacy-safe derivative of institutional recruitment and evaluation source material.</figcaption></figure><div class="deep-grid"><div class="deep-block wide"><h4>Context</h4><p>${esc(d.context)}</p></div><div class="deep-block"><h4>Implementation path</h4>${list(d.implementation)}</div><div class="deep-block"><h4>Trade-offs</h4>${list(d.tradeoffs)}</div><div class="deep-block"><h4>Failure modes considered</h4>${list(d.failures)}</div><div class="deep-block"><h4>Outcome / current value</h4><p>${esc(d.outcome)}</p></div><div class="deep-block wide" data-verified-proof="true"><h4>Verified now</h4>${list(d.verified)}</div><div class="deep-block wide"><h4>Next iteration</h4><p>${esc(d.next)}</p></div></div><p class="deep-disclosure">This case proves institutional process design and education leadership. Candidate records, compensation details and private evaluation data are intentionally excluded.</p></section><div class="actions"><a class="cta" href="https://wa.me/919555877000" target="_blank" rel="noreferrer">Discuss on WhatsApp</a></div>`;
    document.getElementById('caseOverlay').classList.add('show');
  }

  function addCard(){
    const grid=document.getElementById('caseGrid');if(!grid||grid.querySelector('[data-leadership-case]'))return;
    const card=document.createElement('article');card.className='case support-card';card.dataset.leadershipCase='true';card.innerHTML=`<span class="status">Institutional leadership / source-backed</span><div class="proof-type">SOURCE-BACKED</div><h3>${DATA.title}</h3><p>${DATA.lead}</p><div class="case-tags"><span class="chip">Role definition</span><span class="chip">Evaluation</span><span class="chip">Demo + interview</span></div><button type="button">View leadership system →</button>`;card.querySelector('button').addEventListener('click',()=>window.openCase(ID));grid.appendChild(card);
  }

  const baseOpen=window.openCase;
  window.openCase=function(id){if(id===ID){openLeadership();return}if(typeof baseOpen==='function')baseOpen(id)};
  window.openLeadershipCase=openLeadership;
  function init(){addCard()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();