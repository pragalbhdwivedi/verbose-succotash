(function(){
  const SVG_NS='http://www.w3.org/2000/svg';
  const svg=document.getElementById('network');
  const shell=document.querySelector('.graph-shell');
  if(!svg||!shell)return;

  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile=window.matchMedia('(max-width: 720px)');
  const colors=['#baff67','#72b8ff','#b896ff','#68dfd0','#ffbd66'];
  let canvas=null,ctx=null,dpr=1,motes=[],raf=0,lastFrame=0,decorateQueued=false;
  const pointer={x:-9999,y:-9999,active:false};

  function loadStyle(){
    if(document.querySelector('link[data-electrical-motion-style]'))return;
    const l=document.createElement('link');
    l.rel='stylesheet';
    l.href='./assets/electrical-motion.css';
    l.dataset.electricalMotionStyle='true';
    document.head.appendChild(l);
  }

  function setGraphViewport(){
    svg.setAttribute('viewBox',mobile.matches?'250 40 900 820':'0 0 1400 900');
  }

  function addStatus(){
    if(document.querySelector('.energy-status'))return;
    const el=document.createElement('div');
    el.className='energy-status';
    el.setAttribute('aria-hidden','true');
    el.innerHTML='<i></i><span>Live circuit · tap a node</span>';
    shell.appendChild(el);
  }

  function seedMotes(width,height){
    const count=mobile.matches?18:34;
    motes=Array.from({length:count},(_,i)=>({
      x:Math.random()*width,
      y:Math.random()*height,
      vx:(Math.random()-.5)*.18,
      vy:(Math.random()-.5)*.18,
      r:.7+Math.random()*1.4,
      color:colors[i%colors.length],
      phase:Math.random()*Math.PI*2
    }));
  }

  function resizeCanvas(){
    if(!canvas||!ctx)return;
    const rect=shell.getBoundingClientRect();
    dpr=Math.min(window.devicePixelRatio||1,1.6);
    canvas.width=Math.max(1,Math.round(rect.width*dpr));
    canvas.height=Math.max(1,Math.round(rect.height*dpr));
    canvas.style.width=`${rect.width}px`;
    canvas.style.height=`${rect.height}px`;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    seedMotes(rect.width,rect.height);
  }

  function makeCanvas(){
    canvas=document.createElement('canvas');
    canvas.className='energy-field';
    canvas.setAttribute('aria-hidden','true');
    shell.insertBefore(canvas,svg);
    ctx=canvas.getContext('2d',{alpha:true});
    resizeCanvas();
  }

  function drawField(time){
    if(!ctx||!canvas||reduced.matches)return;
    const width=canvas.width/dpr,height=canvas.height/dpr;
    ctx.clearRect(0,0,width,height);
    const speedScale=.75;
    for(const m of motes){
      if(pointer.active){
        const dx=pointer.x-m.x,dy=pointer.y-m.y,dist2=dx*dx+dy*dy;
        if(dist2<18000&&dist2>1){const f=(18000-dist2)/18000*.003;m.vx+=dx*f;m.vy+=dy*f}
      }
      m.vx*=.994;m.vy*=.994;
      m.x+=m.vx*speedScale;m.y+=m.vy*speedScale;
      if(m.x<-8)m.x=width+8;if(m.x>width+8)m.x=-8;
      if(m.y<-8)m.y=height+8;if(m.y>height+8)m.y=-8;
    }
    for(let i=0;i<motes.length;i++){
      const a=motes[i];
      for(let j=i+1;j<motes.length;j++){
        const b=motes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);
        if(d<92){ctx.globalAlpha=(1-d/92)*.095;ctx.strokeStyle=a.color;ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
      }
    }
    ctx.globalAlpha=1;
    for(const m of motes){
      const pulse=.55+Math.sin(time*.0012+m.phase)*.25;
      ctx.globalAlpha=.28+pulse*.24;
      ctx.fillStyle=m.color;
      ctx.shadowColor=m.color;ctx.shadowBlur=7;
      ctx.beginPath();ctx.arc(m.x,m.y,m.r,0,Math.PI*2);ctx.fill();
    }
    ctx.shadowBlur=0;ctx.globalAlpha=1;
  }

  function loop(time){
    raf=requestAnimationFrame(loop);
    if(document.hidden||reduced.matches||!document.getElementById('networkView')?.classList.contains('hidden')===false)return;
    if(time-lastFrame<33)return;
    lastFrame=time;
    drawField(time);
  }

  function decorate(){
    decorateQueued=false;
    svg.querySelectorAll('.edge').forEach(edge=>{
      edge.classList.add('charged-edge');
      edge.setAttribute('pathLength','1');
    });
    svg.querySelectorAll('.node').forEach(node=>{
      if(node.querySelector('.node-halo'))return;
      const base=node.querySelector('circle');
      if(!base)return;
      const halo=document.createElementNS(SVG_NS,'circle');
      halo.classList.add('node-halo');
      halo.setAttribute('r',String((parseFloat(base.getAttribute('r'))||30)*1.16));
      halo.setAttribute('stroke',base.getAttribute('stroke')||'#baff67');
      node.insertBefore(halo,base);
    });
  }

  function scheduleDecorate(){
    if(decorateQueued)return;
    decorateQueued=true;
    requestAnimationFrame(decorate);
  }

  function connectedSegments(id){
    if(typeof nodeMap==='undefined'||!nodeMap.has(id))return[];
    const n=nodeMap.get(id),eps=.1;
    return [...svg.querySelectorAll('.edge')].map(line=>({
      x1:+line.getAttribute('x1'),y1:+line.getAttribute('y1'),x2:+line.getAttribute('x2'),y2:+line.getAttribute('y2')
    })).filter(s=>Math.abs(s.x1-n.x)<eps&&Math.abs(s.y1-n.y)<eps||Math.abs(s.x2-n.x)<eps&&Math.abs(s.y2-n.y)<eps).map(s=>{
      const first=Math.abs(s.x1-n.x)<eps&&Math.abs(s.y1-n.y)<eps;
      return first?{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2}:{x1:s.x2,y1:s.y2,x2:s.x1,y2:s.y1};
    }).slice(0,7);
  }

  function boltPoints(a,b){
    const dx=b.x-a.x,dy=b.y-a.y,len=Math.max(1,Math.hypot(dx,dy));
    const px=-dy/len,py=dx/len;
    const steps=Math.max(6,Math.min(14,Math.round(len/55)));
    const jitter=Math.min(24,Math.max(7,len*.055));
    const pts=[];
    for(let i=0;i<=steps;i++){
      const t=i/steps;
      const taper=Math.sin(Math.PI*t);
      const off=(i===0||i===steps)?0:(Math.random()-.5)*2*jitter*taper;
      pts.push(`${(a.x+dx*t+px*off).toFixed(1)},${(a.y+dy*t+py*off).toFixed(1)}`);
    }
    return pts.join(' ');
  }

  function flashNode(id){
    const node=svg.querySelector(`.node[data-id="${CSS.escape(id)}"]`);
    const base=node?.querySelector('circle:not(.node-halo)');
    if(!base||reduced.matches)return;
    base.animate([
      {filter:'drop-shadow(0 0 0 rgba(186,255,103,0))',strokeWidth:'1.45px'},
      {filter:'drop-shadow(0 0 9px #fff) drop-shadow(0 0 20px #baff67)',strokeWidth:'4px',offset:.38},
      {filter:'drop-shadow(0 0 10px rgba(186,255,103,.45))',strokeWidth:'1.45px'}
    ],{duration:430,easing:'cubic-bezier(.2,.8,.2,1)'});
  }

  function drawBolt(segment,delay){
    if(reduced.matches)return;
    setTimeout(()=>{
      const viewport=svg.querySelector('#viewport');if(!viewport)return;
      const g=document.createElementNS(SVG_NS,'g');g.classList.add('zap-layer');g.setAttribute('aria-hidden','true');
      const points=boltPoints({x:segment.x1,y:segment.y1},{x:segment.x2,y:segment.y2});
      for(const cls of ['zap-bolt-glow','zap-bolt-core']){const p=document.createElementNS(SVG_NS,'polyline');p.classList.add(cls);p.setAttribute('points',points);p.setAttribute('pathLength','1');g.appendChild(p)}
      viewport.appendChild(g);
      g.querySelectorAll('polyline').forEach((p,i)=>p.animate([
        {strokeDashoffset:'1',opacity:i?1:.18},
        {strokeDashoffset:'0',opacity:i?1:.32,offset:.55},
        {strokeDashoffset:'0',opacity:0}
      ],{duration:310+(i*45),easing:'cubic-bezier(.15,.85,.25,1)'}));
      setTimeout(()=>g.remove(),430);
    },delay);
  }

  function zapNode(id){
    flashNode(id);
    const segments=connectedSegments(id);
    segments.forEach((s,i)=>drawBolt(s,i*42));
    const n=typeof nodeMap!=='undefined'?nodeMap.get(id):null,viewport=svg.querySelector('#viewport');
    if(!n||!viewport||reduced.matches)return;
    const ring=document.createElementNS(SVG_NS,'circle');
    ring.classList.add('zap-ring');ring.setAttribute('cx',n.x);ring.setAttribute('cy',n.y);ring.setAttribute('r','38');viewport.appendChild(ring);
    ring.animate([{opacity:0,strokeWidth:'5px'},{opacity:.9,strokeWidth:'3px',offset:.2},{opacity:0,strokeWidth:'.5px'}],{duration:520,easing:'ease-out'});
    setTimeout(()=>ring.remove(),560);
  }

  function onGraphClick(event){
    const node=event.target.closest?.('.node');if(!node)return;
    const id=node.dataset.id;
    requestAnimationFrame(()=>requestAnimationFrame(()=>zapNode(id)));
  }

  function pointerMove(event){
    const rect=shell.getBoundingClientRect();
    pointer.x=event.clientX-rect.left;pointer.y=event.clientY-rect.top;pointer.active=true;
  }
  function pointerOff(){pointer.active=false}

  function init(){
    loadStyle();setGraphViewport();addStatus();
    if(!reduced.matches)makeCanvas();
    scheduleDecorate();
    new MutationObserver(scheduleDecorate).observe(svg,{childList:true,subtree:true});
    svg.addEventListener('click',onGraphClick,true);
    shell.addEventListener('pointermove',pointerMove,{passive:true});
    shell.addEventListener('pointerleave',pointerOff,{passive:true});
    window.addEventListener('resize',()=>{setGraphViewport();resizeCanvas()},{passive:true});
    mobile.addEventListener?.('change',()=>{setGraphViewport();resizeCanvas()});
    reduced.addEventListener?.('change',()=>{if(reduced.matches){canvas?.remove();canvas=null;ctx=null}else if(!canvas)makeCanvas()});
    raf=requestAnimationFrame(loop);
    window.__electricalMotion={zapNode};
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();