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
  assert.ok(await page.locator('#network .edge.charged-edge').count()>=5,'Visible graph edges should carry current styling');
  assert.ok(await page.locator('#network .node-halo').count()>=6,'Visible nodes should receive charge halos');
  const node=page.locator('#network .node[data-id="edu"]');
  await node.click();
  await page.waitForSelector('#network .zap-layer',{state:'attached',timeout:1500});

  mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const mobilePage=await mobile.newPage();
  await mobilePage.goto(base,{waitUntil:'domcontentloaded'});
  await mobilePage.waitForFunction(()=>Boolean(window.__electricalMotion));
  assert.equal(await mobilePage.locator('#network').getAttribute('viewBox'),'250 40 900 820','Mobile graph should use the tighter readable viewBox');
  assert.equal(await mobilePage.locator('.energy-field').count(),1,'Mobile electrical field canvas should render');
  assert.equal(await mobilePage.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),true,'Electrical layer must not introduce mobile overflow');
  const heroSpacing=await mobilePage.evaluate(()=>{
    const title=document.querySelector('.graph-title h1')?.getBoundingClientRect();
    const search=document.querySelector('.search')?.getBoundingClientRect();
    return title&&search?{titleBottom:title.bottom,searchTop:search.top,gap:search.top-title.bottom}:null;
  });
  assert.ok(heroSpacing,'Mobile hero and search should both be measurable');
  assert.ok(heroSpacing.gap>=8,`Mobile search must clear the headline by at least 8px; measured ${heroSpacing.gap.toFixed(1)}px`);

  console.log('Electrical motion smoke passed: particles, charged links, click zap, mobile graph framing and hero spacing.');
}finally{
  await mobile?.close().catch(()=>{});
  await desktop?.close().catch(()=>{});
  await browser.close().catch(()=>{});
}
