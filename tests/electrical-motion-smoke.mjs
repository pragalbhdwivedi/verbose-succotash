import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:4173/';
const browser=await chromium.launch({headless:true});
let desktop,mobile;
try{
  desktop=await browser.newContext({viewport:{width:1440,height:1000}});
  const page=await desktop.newPage();
  await page.goto(base,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(window.__electricalMotion));
  assert.equal(await page.locator('.energy-field').count(),1,'Electrical field canvas should render');
  assert.equal(await page.locator('.energy-status').count(),1,'Live-circuit status should render');
  assert.equal(await page.locator('#network .observatory-depth').count(),1,'Observatory depth layer should render');
  assert.ok(await page.locator('#network .observatory-orbit').count()>=3,'Systems observatory should expose layered orbital guides');
  assert.ok(await page.locator('#network .edge.charged-edge').count()>=5,'Visible graph edges should carry current styling');
  assert.ok(await page.locator('#network .node-halo').count()>=6,'Visible nodes should receive charge halos');

  const arrivalsBefore=await page.evaluate(()=>window.__electricalMotion.arrivals);
  const nodesBefore=await page.locator('#network .node').count();
  const node=page.locator('#network .node[data-id="edu"]');
  await node.click();
  await page.waitForSelector('#network .zap-layer',{state:'attached',timeout:1500});
  await page.waitForFunction(expected=>document.querySelectorAll('#network .node').length>expected,nodesBefore);
  await page.waitForFunction(expected=>window.__electricalMotion.arrivals>expected,arrivalsBefore);
  assert.ok(await page.locator('#network .node.energizing').count()>0,'Newly revealed nodes should receive transient energizing state');
  assert.equal(await page.locator('#network .node[data-id="edu"].path-selected').count(),1,'Selected node should remain electrically selected');
  assert.ok(await page.locator('#network .edge.path-hot').count()>=1,'Selected ancestry should remain electrically hot');

  await page.evaluate(()=>expandPath('smartclass'));
  await page.waitForSelector('#network .node[data-id="smartclass"] .project-status-badge',{timeout:1500});
  assert.equal(await page.locator('#network .node[data-id="smartclass"] .project-status-badge').getAttribute('data-state'),'PROTO','Prototype projects should expose explicit maturity state');
  assert.equal(await page.locator('#network .node[data-id="smartclass"] .case-lock').count(),1,'Selected project should receive lock-on treatment');
  assert.ok(await page.locator('#network .edge.path-hot').count()>=3,'Deep selected project should retain its complete hot ancestry path');
  assert.match(await page.locator('.energy-status span:not([data-system-telemetry])').textContent(),/PROTO · Smart Classroom/i,'System status should track the selected project');

  mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const mobilePage=await mobile.newPage();
  await mobilePage.goto(base,{waitUntil:'domcontentloaded'});
  await mobilePage.waitForFunction(()=>Boolean(window.__electricalMotion));
  assert.equal(await mobilePage.locator('#network').getAttribute('viewBox'),'280 45 840 710','Mobile graph should use the real-device tuned observatory viewBox');
  assert.equal(await mobilePage.locator('.energy-field').count(),1,'Mobile electrical field canvas should render');
  assert.equal(await mobilePage.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),true,'Electrical layer must not introduce mobile overflow');
  const heroSpacing=await mobilePage.evaluate(()=>{
    const title=document.querySelector('.graph-title h1')?.getBoundingClientRect();
    const search=document.querySelector('.search')?.getBoundingClientRect();
    return title&&search?{titleBottom:title.bottom,searchTop:search.top,gap:search.top-title.bottom}:null;
  });
  assert.ok(heroSpacing,'Mobile hero and search should both be measurable');
  assert.ok(heroSpacing.gap>=8,`Mobile search must clear the headline by at least 8px; measured ${heroSpacing.gap.toFixed(1)}px`);

  console.log('Electrical observatory smoke passed: particles, orbital depth, charged links, hot paths, project maturity, lock-on, branch energization and mobile framing.');
}finally{
  await mobile?.close().catch(()=>{});
  await desktop?.close().catch(()=>{});
  await browser.close().catch(()=>{});
}
