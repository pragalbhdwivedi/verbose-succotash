(()=>{
  const commercialMode=document.getElementById('commercialMode');
  const commercialView=document.getElementById('commercialView');
  const recruiterView=document.getElementById('recruiterView');
  const networkView=document.getElementById('networkView');
  const exploreMode=document.getElementById('exploreMode');
  const recruiterMode=document.getElementById('recruiterMode');
  const resetBtn=document.getElementById('resetBtn');
  if(!commercialMode||!commercialView||!recruiterView||!networkView||!exploreMode||!recruiterMode)return;

  const hideCommercial=()=>{
    commercialView.classList.remove('active');
    commercialMode.classList.remove('active');
  };

  commercialMode.addEventListener('click',()=>{
    recruiterView.classList.remove('active');
    networkView.classList.add('hidden');
    commercialView.classList.add('active');
    exploreMode.classList.remove('active');
    recruiterMode.classList.remove('active');
    commercialMode.classList.add('active');
    if(resetBtn)resetBtn.style.display='none';
    window.scrollTo({top:0,behavior:'smooth'});
  });

  exploreMode.addEventListener('click',hideCommercial);
  recruiterMode.addEventListener('click',hideCommercial);

  document.querySelectorAll('[data-open-commercial]').forEach(el=>{
    el.addEventListener('click',e=>{
      e.preventDefault();
      commercialMode.click();
    });
  });
})();