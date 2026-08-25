(function(){
  const DATA={
    aquapulse:{
      media:'./assets/media/aquapulse/aquapulse_operational-architecture_01.svg',
      caption:'Operational architecture derived from the public AquaPulse repository. The project remains explicitly an active prototype / internal-beta foundation.',
      verified:[
        'Public README identifies the current stage as active prototype / internal beta foundation.',
        'Documented stack includes Next.js, NestJS and PostgreSQL with a self-hosted Linux / Proxmox deployment target.',
        'The repository describes gradual Postgres + HTTP cutover rather than an all-at-once migration.',
        'AI is explicitly constrained to assistive functions such as explanation, summary and drafting rather than autonomous operational control.'
      ]
    },
    digitalops:{
      media:'./assets/media/digital-operations/digital-operations_publish-flow_01.svg',
      caption:'Public-information and timetable publishing flow derived from the BDSPS website, FET timetable repository and GitHub Actions workflow.',
      verified:[
        'The institutional website repository publicly separates academics, admissions, infrastructure, disclosure documents and other public sections.',
        'A scheduled GitHub Actions workflow generates festival data from a calendar source and commits changes only when generated content changes.',
        'The timetable repository retains FET XML and multiple generated HTML views for activities, classes, teachers and rooms.',
        'The live/public layer is kept distinct from private operational data.'
      ]
    },
    infra:{
      media:'./assets/media/private-infrastructure/private-infrastructure_provisioning-loop_01.svg',
      caption:'Privacy-safe provisioning and recovery loop. It represents the operating model without exposing private hostnames, IP ranges, paths or topology.',
      verified:[
        'Public MAAS configuration work shows version-controlled provisioning for networking and storage configuration.',
        'The MAAS repository documents cloud-init, Netplan, bonding/bridging, Open vSwitch and automated storage setup.',
        'A separate public Proxmox cloud-init repository demonstrates reusable VM bootstrap configuration.',
        'Private operational dashboards and topology remain intentionally unpublished until redacted evidence is prepared.'
      ]
    },
    'kubernetes-ha':{
      verified:[
        'The public repository documents a single-command, SSH-orchestrated multi-node bootstrap workflow.',
        'External etcd with TLS, HAProxy + Keepalived VIP and Calico with WireGuard are explicitly part of the documented design.',
        'Audit logging, log rotation, metrics tooling and time-synchronisation hardening are included in the installer baseline.',
        'The portfolio describes the public installer architecture, not a private production-cluster topology.'
      ]
    }
  };
  const esc=s=>String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  function enrich(id){
    const d=DATA[id],modal=document.getElementById('caseModal'),deep=modal?.querySelector(`[data-deep-case="${id}"]`);if(!d||!deep)return;
    if(d.media&&!deep.querySelector('.deep-media')){
      const head=deep.querySelector('.deep-case-head');
      const fig=document.createElement('figure');fig.className='deep-media';fig.innerHTML=`<img src="${d.media}" alt="${esc(id)} evidence architecture" loading="lazy"><figcaption>${esc(d.caption)}</figcaption>`;
      if(head)head.insertAdjacentElement('afterend',fig);else deep.prepend(fig);
    }
    if(d.verified?.length&&!deep.querySelector('[data-verified-proof]')){
      const grid=deep.querySelector('.deep-grid');
      const box=document.createElement('div');box.className='deep-block wide';box.dataset.verifiedProof='true';box.innerHTML=`<h4>Verified now</h4><ul>${d.verified.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
      if(grid)grid.appendChild(box);else deep.appendChild(box);
    }
  }

  const baseOpen=window.openCase;
  if(typeof baseOpen==='function'){
    window.openCase=function(id){baseOpen(id);setTimeout(()=>enrich(id),0)};
  }
  window.enrichCaseEvidence=enrich;
})();