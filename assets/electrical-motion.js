(function(){
  const SVG_NS='http://www.w3.org/2000/svg';
  const svg=document.getElementById('network');
  const shell=document.querySelector('.graph-shell');
  if(!svg||!shell)return;

  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile=window.matchMedia('(max-width: 720px)');
  const colors=['#baff67','#72b8ff','#b896ff','#68dfd0','#ffbd66'];
  const MOTION=Object.freeze({fast:140,ui:220,transition:360,expressive:620,branchStagger:56,zapStagger:42});
  const EASE_UI='cubic-bezier(.2,.7,.2,1)',EASE_SETTLE='cubic-bezier(.16,1,.3,1)';
  const seenNodes=new Set(),seenEdges=new Set();
  let canvas=null,ctx=null,dpr=1,motes=[],lastFrame=0,decorateQueued=false,poweredUp=false,arrivalCount=0,parallaxQueued=false,zapEpoch=0;
  const pointer={x:-9999,y:-9999,active:false,nx:0,ny:0};

  function loadStyle(){
    if(document.querySelector('link[data-electrical-motion-style]'))return;
    const l=document.createElement('link');
    l.rel='stylesheet';l.href='./assets/electrical-motion.css';l.dataset.electricalMotionStyle='true';
    document.head.appendChild(l);
  }

  function setGraphViewport(){svg.setAttribute('viewBox',mobile.matches?'300 85 800 710':'0 0 1400 900')}

  function projectCode(n){
    const status=(n?.caseId&&typeof CASES!=='undefined'?CASES[n.caseId]?.status:'')||n?.level||'';
    if(/production/i.test(status))return'LIVE';
    if(/field/i.test(status))return'FIELD';
    if(/prototype/i.test(status))return'PROTO';
    if(/active development/i.test(status))return'BUILD';
    if(/applied/i.test(status))return'APPLIED';
    return'CASE';
  }

  function addStatus(){
    if(document.querySelector('.energy-status'))return;
    const el=document.createElement('div');
    el.className='energy-status';el.setAttribute('aria-hidden','true');
    el.innerHTML='<i></i><span>System online · tap a node</span>';
    shell.appendChild(el);
  }

  function updateStatus(){
    const el=document.querySelector('.energy-status span');
    if(!el||typeof nodeMap==='undefined'||typeof selected==='undefined')return;
    const n=nodeMap.get(selected);
    if(!n){el.textContent='System online · tap a node';return}
    el.textContent=n.id==='root'?'System online · tap a node':`${n.type==='PROJECT'?projectCode(n):n.type} · ${n.label}`;
  }

  function seedMotes(width,height){
    const count=mobile.matches?18:34;
    motes=Array.from({length:count},(_,i)=>({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:.7+Math.random()*1.4,color:colors[i%colors.length],phase:Math.random()*Math.PI*2}));
  }

  function resizeCanvas(){
    if(!canvas||!ctx)return;
    const rect=shell.getBoundingClientRect();dpr=Math.min(window.devicePixelRatio||1,1.6);
    canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.max(1,Math.round(rect.height*dpr));
    canvas.style.width=`${rect.width}px`;canvas.style.height=`${rect.height}px`;
    ctx.setTransform(dpr,0,0,dpr,0,0);seedMotes(rect.width,rect.height);
  }

  function makeCanvas(){
    canvas=document.createElement('canvas');canvas.className='energy-field';canvas.setAttribute('aria-hidden','true');
    shell.insertBefore(canvas,svg);ctx=canvas.getContext('2d',{alpha:true});resizeCanvas();
  }

  function drawField(time){
    if(!ctx||!canvas||reduced.matches)return;
    const width=canvas.width/dpr,height=canvas.height/dpr;ctx.clearRect(0,0,width,height);
    for(const m of motes){
      if(pointer.active){const dx=pointer.x-m.x,dy=pointer.y-m.y,dist2=dx*dx+dy*dy;if(dist2<18000&&dist2>1){const f=(18000-dist2)/18000*.003;m.vx+=dx*f;m.vy+=dy*f}}
      m.vx*=.994;m.vy*=.994;m.x+=m.vx*.75;m.y+=m.vy*.75;
      if(m.x<-8)m.x=width+8;if(m.x>width+8)m.x=-8;if(m.y<-8)m.y=height+8;if(m.y>height+8)m.y=-8;
    }
    for(let i=0;i<motes.length;i++)for(let j=i+1;j<motes.length;j++){
      const a=motes[i],b=motes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);
      if(d<92){ctx.globalAlpha=(1-d/92)*.095;ctx.strokeStyle=a.color;ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
    }
    ctx.globalAlpha=1;
    for(const m of motes){const pulse=.55+Math.sin(time*.0012+m.phase)*.25;ctx.globalAlpha=.28+pulse*.24;ctx.fillStyle=m.color;ctx.shadowColor=m.color;ctx.shadowBlur=7;ctx.beginPath();ctx.arc(m.x,m.y,m.r,0,Math.PI*2);ctx.fill()}
    ctx.shadowBlur=0;ctx.globalAlpha=1;
  }

  function loop(time){
    requestAnimationFrame(loop);
    const networkHidden=document.getElementById('networkView')?.classList.contains('hidden');
    if(document.hidden||reduced.matches||networkHidden||time-lastFrame<33)return;
    lastFrame=time;drawField(time);
  }

  function edgeKey(edge){return [edge.getAttribute('x1'),edge.getAttribute('y1'),edge.getAttribute('x2'),edge.getAttribute('y2'),edge.classList.contains('cross')?'x':'t'].join(':')}
  function coordKey(x,y){return`${Number(x).toFixed(2)}:${Number(y).toFixed(2)}`}
  function coordinateMap(){return typeof nodes==='undefined'?new Map():new Map(nodes.map(n=>[coordKey(n.x,n.y),n.id]))}

  function ensureObservatory(){
    const viewport=svg.querySelector('#viewport');
    if(!viewport||viewport.querySelector('.observatory-depth')||typeof nodeMap==='undefined')return;
    const root=nodeMap.get('root');if(!root)return;
    const g=document.createElementNS(SVG_NS,'g');g.classList.add('observatory-depth');g.setAttribute('aria-hidden','true');
    const radii=[125,250,375];
    radii.forEach((r,i)=>{
      const c=document.createElementNS(SVG_NS,'circle');c.classList.add('observatory-orbit',`orbit-${i+1}`);c.setAttribute('cx',root.x);c.setAttribute('cy',root.y);c.setAttribute('r',r);g.appendChild(c);
      const t=document.createElementNS(SVG_NS,'text');t.classList.add('observatory-label');t.setAttribute('x',root.x+r*.72);t.setAttribute('y',root.y-r*.69);t.textContent=`R${i+1} / ${i===0?'CORE':i===1?'DOMAINS':'SYSTEMS'}`;g.appendChild(t);
    });
    const h=document.createElementNS(SVG_NS,'line');h.classList.add('observatory-axis');h.setAttribute('x1',root.x-430);h.setAttribute('y1',root.y);h.setAttribute('x2',root.x+430);h.setAttribute('y2',root.y);g.appendChild(h);
    const v=document.createElementNS(SVG_NS,'line');v.classList.add('observatory-axis');v.setAttribute('x1',root.x);v.setAttribute('y1',root.y-410);v.setAttribute('x2',root.x);v.setAttribute('y2',root.y+410);g.appendChild(v);
    for(let i=0;i<12;i++){
      const a=i/12*Math.PI*2,r=250,tick=document.createElementNS(SVG_NS,'circle');tick.classList.add('observatory-tick');tick.setAttribute('cx',(root.x+Math.cos(a)*r).toFixed(1));tick.setAttribute('cy',(root.y+Math.sin(a)*r).toFixed(1));tick.setAttribute('r',i%3===0?'2.4':'1.4');g.appendChild(tick)
    }
    viewport.insertBefore(g,viewport.firstChild);
  }

  function animateArrival(node,delay){
    if(reduced.matches)return;
    node.classList.add('energizing');arrivalCount++;
    node.animate([
      {opacity:0,filter:'drop-shadow(0 0 0 rgba(186,255,103,0))'},
      {opacity:1,filter:'drop-shadow(0 0 14px rgba(186,255,103,.8))',offset:.62},
      {opacity:1,filter:'drop-shadow(0 0 0 rgba(186,255,103,0))'}
    ],{duration:MOTION.expressive,delay,easing:EASE_SETTLE});
    setTimeout(()=>node.classList.remove('energizing'),delay+MOTION.expressive);
  }

  function addProjectBadge(node,id){
    if(node.querySelector('.project-status-badge')||typeof nodeMap==='undefined')return;
    const n=nodeMap.get(id);if(!n||n.type!=='PROJECT')return;
    const base=node.querySelector('circle:not(.node-halo)');if(!base)return;
    const r=parseFloat(base.getAttribute('r'))||34,code=projectCode(n);
    const g=document.createElementNS(SVG_NS,'g');g.classList.add('project-status-badge');g.dataset.state=code;g.setAttribute('transform',`translate(-27 ${-(r+25)})`);g.setAttribute('aria-hidden','true');
    const rect=document.createElementNS(SVG_NS,'rect');rect.setAttribute('width','54');rect.setAttribute('height','15');rect.setAttribute('rx','3');g.appendChild(rect);
    const text=document.createElementNS(SVG_NS,'text');text.setAttribute('x','27');text.setAttribute('y','10.6');text.textContent=code;g.appendChild(text);node.appendChild(g);
  }

  function addProjectLock(node,id){
    if(typeof nodeMap==='undefined')return;
    const n=nodeMap.get(id),existing=node.querySelector('.case-lock');
    if(!n||n.type!=='PROJECT'||typeof selected==='undefined'||selected!==id){existing?.remove();return}
    if(existing)return;
    const base=node.querySelector('circle:not(.node-halo)');if(!base)return;
    const lock=document.createElementNS(SVG_NS,'circle');lock.classList.add('case-lock');lock.setAttribute('r',String((parseFloat(base.getAttribute('r'))||34)*1.44));node.insertBefore(lock,node.firstChild);
  }

  function edgeIds(line,map){return[map.get(coordKey(line.getAttribute('x1'),line.getAttribute('y1'))),map.get(coordKey(line.getAttribute('x2'),line.getAttribute('y2')))]}

  function syncPathState(){
    if(typeof selected==='undefined'||typeof nodeMap==='undefined')return;
    const path=selected==='root'?['root']:[...(typeof ancestors==='function'?ancestors(selected):[]),selected];
    const pathSet=new Set(path),pairs=new Set();for(let i=1;i<path.length;i++)pairs.add(`${path[i-1]}|${path[i]}`);
    const map=coordinateMap();
    svg.querySelectorAll('.node').forEach(node=>{
      const id=node.dataset.id;node.classList.toggle('path-hot',pathSet.has(id));node.classList.toggle('path-selected',id===selected);addProjectLock(node,id)
    });
    svg.querySelectorAll('.edge').forEach(line=>{
      const [a,b]=edgeIds(line,map),pairHot=pairs.has(`${a}|${b}`)||pairs.has(`${b}|${a}`),selectedLink=a===selected||b===selected;
      line.classList.toggle('path-hot',pairHot);line.classList.toggle('selected-link',selectedLink)
    });
    shell.classList.toggle('project-lock',nodeMap.get(selected)?.type==='PROJECT');
    updateStatus();
  }

  function decorate(){
    decorateQueued=false;ensureObservatory();
    const selectedNode=typeof nodeMap!=='undefined'&&typeof selected!=='undefined'?nodeMap.get(selected):null;
    const newEdges=[];
    [...svg.querySelectorAll('.edge')].forEach(edge=>{
      edge.classList.add('charged-edge');edge.setAttribute('pathLength','1');
      const key=edgeKey(edge),isNew=!seenEdges.has(key);seenEdges.add(key);if(isNew)newEdges.push(edge)
    });
    newEdges.sort((a,b)=>{
      if(!selectedNode)return 0;
      const da=Math.min(Math.hypot(+a.getAttribute('x1')-selectedNode.x,+a.getAttribute('y1')-selectedNode.y),Math.hypot(+a.getAttribute('x2')-selectedNode.x,+a.getAttribute('y2')-selectedNode.y));
      const db=Math.min(Math.hypot(+b.getAttribute('x1')-selectedNode.x,+b.getAttribute('y1')-selectedNode.y),Math.hypot(+b.getAttribute('x2')-selectedNode.x,+b.getAttribute('y2')-selectedNode.y));return da-db
    }).forEach((edge,i)=>{if(!reduced.matches)edge.animate([{opacity:0,strokeDashoffset:'1'},{opacity:1,strokeDashoffset:'0',filter:'drop-shadow(0 0 7px rgba(186,255,103,.72))',offset:.68},{opacity:edge.classList.contains('cross')?.35:.76,filter:'drop-shadow(0 0 0 rgba(186,255,103,0))'}],{duration:MOTION.transition,delay:i*MOTION.branchStagger,easing:EASE_SETTLE})});

    const newNodes=[];
    [...svg.querySelectorAll('.node')].forEach((node,i)=>{
      const id=node.dataset.id||`anon-${i}`,isNew=!seenNodes.has(id);seenNodes.add(id);
      if(!node.querySelector('.node-halo')){
        const base=node.querySelector('circle');if(base){const halo=document.createElementNS(SVG_NS,'circle');halo.classList.add('node-halo');halo.setAttribute('r',String((parseFloat(base.getAttribute('r'))||30)*1.16));halo.setAttribute('stroke',base.getAttribute('stroke')||'#baff67');node.insertBefore(halo,base)}
      }
      addProjectBadge(node,id);if(isNew)newNodes.push(node)
    });
    newNodes.sort((a,b)=>{
      if(!selectedNode||typeof nodeMap==='undefined')return 0;const A=nodeMap.get(a.dataset.id),B=nodeMap.get(b.dataset.id);return Math.hypot(A.x-selectedNode.x,A.y-selectedNode.y)-Math.hypot(B.x-selectedNode.x,B.y-selectedNode.y)
    }).forEach((node,i)=>animateArrival(node,MOTION.fast/2+i*MOTION.branchStagger));
    syncPathState();
  }

  function scheduleDecorate(){if(decorateQueued)return;decorateQueued=true;requestAnimationFrame(decorate)}

  function connectedSegments(id){
    if(typeof nodeMap==='undefined'||!nodeMap.has(id))return[];
    const n=nodeMap.get(id),eps=.1;
    return [...svg.querySelectorAll('.edge')].map(line=>({x1:+line.getAttribute('x1'),y1:+line.getAttribute('y1'),x2:+line.getAttribute('x2'),y2:+line.getAttribute('y2')})).filter(s=>Math.abs(s.x1-n.x)<eps&&Math.abs(s.y1-n.y)<eps||Math.abs(s.x2-n.x)<eps&&Math.abs(s.y2-n.y)<eps).map(s=>{const first=Math.abs(s.x1-n.x)<eps&&Math.abs(s.y1-n.y)<eps;return first?{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2}:{x1:s.x2,y1:s.y2,x2:s.x1,y2:s.y1}}).slice(0,7);
  }

  function boltPoints(a,b){
    const dx=b.x-a.x,dy=b.y-a.y,len=Math.max(1,Math.hypot(dx,dy)),px=-dy/len,py=dx/len,steps=Math.max(6,Math.min(14,Math.round(len/55))),jitter=Math.min(24,Math.max(7,len*.055)),pts=[];
    for(let i=0;i<=steps;i++){const t=i/steps,taper=Math.sin(Math.PI*t),off=(i===0||i===steps)?0:(Math.random()-.5)*2*jitter*taper;pts.push(`${(a.x+dx*t+px*off).toFixed(1)},${(a.y+dy*t+py*off).toFixed(1)}`)}
    return pts.join(' ');
  }

  function flashNode(id){
    const node=svg.querySelector(`.node[data-id="${CSS.escape(id)}"]`),base=node?.querySelector('circle:not(.node-halo):not(.case-lock)');if(!base||reduced.matches)return;
    base.animate([{filter:'drop-shadow(0 0 0 rgba(186,255,103,0))',strokeWidth:'1.45px'},{filter:'drop-shadow(0 0 9px #fff) drop-shadow(0 0 20px #baff67)',strokeWidth:'4px',offset:.38},{filter:'drop-shadow(0 0 10px rgba(186,255,103,.45))',strokeWidth:'1.45px'}],{duration:MOTION.transition,easing:EASE_UI});
  }

  function drawBolt(segment,delay,epoch){
    if(reduced.matches)return;
    setTimeout(()=>{
      if(epoch!==zapEpoch)return;
      const viewport=svg.querySelector('#viewport');if(!viewport)return;
      const g=document.createElementNS(SVG_NS,'g');g.classList.add('zap-layer');g.setAttribute('aria-hidden','true');
      const points=boltPoints({x:segment.x1,y:segment.y1},{x:segment.x2,y:segment.y2});
      for(const cls of ['zap-bolt-glow','zap-bolt-core']){const p=document.createElementNS(SVG_NS,'polyline');p.classList.add(cls);p.setAttribute('points',points);p.setAttribute('pathLength','1');g.appendChild(p)}
      viewport.appendChild(g);
      g.querySelectorAll('polyline').forEach((p,i)=>p.animate([{strokeDashoffset:'1',opacity:i?1:.18},{strokeDashoffset:'0',opacity:i?1:.32,offset:.55},{strokeDashoffset:'0',opacity:0}],{duration:MOTION.ui+i*45,easing:EASE_UI}));
      setTimeout(()=>{if(epoch===zapEpoch)g.remove()},MOTION.transition+MOTION.fast/2);
    },delay);
  }

  function zapNode(id){
    const epoch=++zapEpoch;
    svg.querySelectorAll('.zap-layer,.zap-ring').forEach(el=>el.remove());
    flashNode(id);connectedSegments(id).forEach((segment,i)=>drawBolt(segment,i*MOTION.zapStagger,epoch));
    const n=typeof nodeMap!=='undefined'?nodeMap.get(id):null,viewport=svg.querySelector('#viewport');if(!n||!viewport||reduced.matches)return;
    const ring=document.createElementNS(SVG_NS,'circle');ring.classList.add('zap-ring');ring.setAttribute('cx',n.x);ring.setAttribute('cy',n.y);ring.setAttribute('r','38');viewport.appendChild(ring);
    ring.animate([{opacity:0,strokeWidth:'5px'},{opacity:.9,strokeWidth:'3px',offset:.2},{opacity:0,strokeWidth:'.5px'}],{duration:MOTION.expressive,easing:EASE_SETTLE});setTimeout(()=>{if(epoch===zapEpoch)ring.remove()},MOTION.expressive+MOTION.fast/2);
  }

  function powerUp(){if(poweredUp||reduced.matches)return;poweredUp=true;setTimeout(()=>{if(!document.getElementById('networkView')?.classList.contains('hidden'))zapNode('root')},mobile.matches?MOTION.expressive:MOTION.transition)}

  function applyParallax(){
    parallaxQueued=false;if(reduced.matches||mobile.matches)return;
    const depth=svg.querySelector('.observatory-depth');if(depth)depth.style.transform=`translate(${(pointer.nx*9).toFixed(1)}px,${(pointer.ny*7).toFixed(1)}px)`;
    if(canvas)canvas.style.transform=`translate(${(pointer.nx*-3).toFixed(1)}px,${(pointer.ny*-2).toFixed(1)}px) scale(1.012)`;
  }
  function scheduleParallax(){if(parallaxQueued)return;parallaxQueued=true;requestAnimationFrame(applyParallax)}

  function onGraphClick(event){const node=event.target.closest?.('.node');if(!node)return;requestAnimationFrame(()=>requestAnimationFrame(()=>{syncPathState();zapNode(node.dataset.id)}))}
  function pointerMove(event){const rect=shell.getBoundingClientRect();pointer.x=event.clientX-rect.left;pointer.y=event.clientY-rect.top;pointer.active=true;pointer.nx=Math.max(-1,Math.min(1,(pointer.x/Math.max(1,rect.width)-.5)*2));pointer.ny=Math.max(-1,Math.min(1,(pointer.y/Math.max(1,rect.height)-.5)*2));scheduleParallax()}
  function pointerOff(){pointer.active=false;pointer.nx=0;pointer.ny=0;scheduleParallax()}

  function init(){
    loadStyle();setGraphViewport();addStatus();if(!reduced.matches)makeCanvas();scheduleDecorate();
    new MutationObserver(scheduleDecorate).observe(svg,{childList:true,subtree:true});svg.addEventListener('click',onGraphClick,true);
    shell.addEventListener('pointermove',pointerMove,{passive:true});shell.addEventListener('pointerleave',pointerOff,{passive:true});
    window.addEventListener('resize',()=>{setGraphViewport();resizeCanvas()},{passive:true});mobile.addEventListener?.('change',()=>{setGraphViewport();resizeCanvas();scheduleDecorate()});
    reduced.addEventListener?.('change',()=>{if(reduced.matches){zapEpoch++;svg.querySelectorAll('.zap-layer,.zap-ring').forEach(el=>el.remove());canvas?.remove();canvas=null;ctx=null;pointerOff()}else if(!canvas)makeCanvas()});
    requestAnimationFrame(loop);window.__electricalMotion={zapNode,syncPathState,timings:MOTION,get arrivals(){return arrivalCount}};powerUp();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();