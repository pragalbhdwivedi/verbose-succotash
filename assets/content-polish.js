(function(){
  function refineRecruiterCopy(){
    const heads=[...document.querySelectorAll('#recruiterView .section-head')];
    for(const head of heads){
      const title=head.querySelector('h2')?.textContent?.trim();
      if(title==='Evidence over adjectives.'){
        const p=head.querySelector('p');
        if(p)p.textContent='Each case states the problem, Pragalbh’s role, constraints, architectural decisions, supporting evidence and current maturity.';
      }
    }
  }
  function init(){refineRecruiterCopy()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();