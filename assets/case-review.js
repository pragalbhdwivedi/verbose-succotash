(function(){
  const REVIEWED='Aug 2026';
  const CASES_REVIEWED=new Set([
    'aquapulse','digitalops','infra','kubernetes-ha','smartclass','solarcctv',
    'leadership-recruitment','curriculum-assessment','compliance-documentation',
    'institutional-operations','academic-scheduling','admissions-communication'
  ]);
  function loadStyle(){if(document.querySelector('link[data-case-review-style]'))return;const l=document.createElement('link');l.rel='stylesheet';l.href='./assets/case-review.css';l.dataset.caseReviewStyle='true';document.head.appendChild(l)}
  function loadElectricalMotion(){if(document.querySelector('script[data-electrical-motion-layer]'))return;const s=document.createElement('script');s.src='./assets/electrical-motion.js';s.dataset.electricalMotionLayer='true';document.body.appendChild(s)}
  function stamp(id){const modal=document.getElementById('caseModal');if(!modal||!CASES_REVIEWED.has(id)||modal.querySelector('.case-review-stamp'))return;const proof=modal.querySelector('.proof-panel')||modal.querySelector('.lead');if(!proof)return;const el=document.createElement('div');el.className='case-review-stamp';el.innerHTML=`<i aria-hidden="true"></i><b>Evidence reviewed · ${REVIEWED}</b><span>Review date, not deployment date</span>`;proof.insertAdjacentElement('afterend',el)}
  const baseOpen=window.openCase;if(typeof baseOpen==='function')window.openCase=function(id){baseOpen(id);setTimeout(()=>stamp(id),0)};
  function init(){loadStyle();if(location.hash.startsWith('#case=')){const id=decodeURIComponent(location.hash.slice(6));setTimeout(()=>stamp(id),80)}loadElectricalMotion()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();