(function(){
const m=matchMedia('(max-width:720px)');
function style(){if(document.querySelector('style[data-device-tuning]'))return;const s=document.createElement('style');s.dataset.deviceTuning='true';s.textContent='@supports(height:100dvh){@media(max-width:720px){.network-view{height:calc(100dvh - 62px)}.drawer{max-height:min(64dvh,560px);padding-bottom:max(20px,env(safe-area-inset-bottom))}}}@media(max-width:720px){.energy-status{max-width:calc(100vw - 28px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}';document.head.append(s)}
function viewport(){const s=document.getElementById('network');if(s)s.setAttribute('viewBox',m.matches?'280 45 840 710':'0 0 1400 900')}
function kicker(){const d=document.getElementById('drawer'),k=d?.querySelector('.kicker');if(!k||typeof nodeMap==='undefined'||typeof selected==='undefined')return;const n=nodeMap.get(selected);if(n?.type!=='PROJECT')return;const p=nodeMap.get(n.parent),t=[...k.childNodes].find(x=>x.nodeType===3);if(t)t.nodeValue=`PROJECT / ${(p?.label||'SYSTEM').toUpperCase()}`}
function sync(){viewport();kicker()}
function init(){style();sync();const d=document.getElementById('drawer');if(d)new MutationObserver(()=>requestAnimationFrame(kicker)).observe(d,{childList:true,subtree:true});addEventListener('resize',sync,{passive:true});m.addEventListener?.('change',sync);requestAnimationFrame(()=>dispatchEvent(new Event('resize')));window.__deviceTuning={sync,viewport:'280 45 840 710'}}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init,{once:true}):init()
})();