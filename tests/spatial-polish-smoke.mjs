import { chromium } from 'playwright';

const url=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:4173/';
const browser=await chromium.launch({headless:true});
const assert=(condition,message)=>{if(!condition)throw new Error(message)};

try{
  const context=await browser.newContext({viewport:{width:1440,height:1000}});
  const page=await context.newPage();
  await page.goto(url,{waitUntil:'networkidle'});
  await page.waitForFunction(()=>Boolean(window.__spatialPolish));
  const timings=await page.evaluate(()=>window.__spatialPolish.timings);
  assert(timings.ui===220&&timings.transition===360,'Spatial polish must use the shared UI/transition timing vocabulary.');

  await page.evaluate(()=>window.openCase('smartclass'));
  await page.waitForSelector('#caseOverlay.show');
  const modalMotion=await page.evaluate(()=>document.getElementById('caseModal').getAnimations().map(a=>({id:a.id,duration:a.effect?.getTiming().duration})));
  assert(modalMotion.some(a=>a.id==='case-spatial-reveal'&&a.duration===360),'Case opening must receive one restrained 360ms spatial reveal.');
  await page.evaluate(()=>window.closeCase());

  await page.evaluate(()=>expandPath('smartclass'));
  await page.waitForSelector('#drawer [data-system-readout]');
  await page.waitForTimeout(30);
  const drawerMotion=await page.evaluate(()=>[...document.querySelectorAll('#drawer > *')].flatMap(el=>el.getAnimations().map(a=>({id:a.id,duration:a.effect?.getTiming().duration}))));
  assert(drawerMotion.some(a=>a.id==='drawer-spatial-reveal'&&a.duration===220),'Drawer information must use the restrained 220ms reveal.');
  await context.close();

  const reducedContext=await browser.newContext({reducedMotion:'reduce',viewport:{width:1280,height:900}});
  const reducedPage=await reducedContext.newPage();
  await reducedPage.goto(url,{waitUntil:'networkidle'});
  await reducedPage.waitForFunction(()=>Boolean(window.__spatialPolish));
  await reducedPage.evaluate(()=>window.openCase('smartclass'));
  await reducedPage.waitForSelector('#caseOverlay.show');
  const reducedModal=await reducedPage.evaluate(()=>document.getElementById('caseModal').getAnimations().some(a=>a.id==='case-spatial-reveal'));
  assert(!reducedModal,'Reduced motion must suppress spatial case reveal animation.');
  await reducedPage.evaluate(()=>{window.closeCase();expandPath('smartclass')});
  await reducedPage.waitForTimeout(50);
  const reducedDrawer=await reducedPage.evaluate(()=>[...document.querySelectorAll('#drawer > *')].some(el=>el.getAnimations().some(a=>a.id==='drawer-spatial-reveal')));
  assert(!reducedDrawer,'Reduced motion must suppress drawer spatial reveal animation.');
  await reducedContext.close();

  console.log('Stage 9F spatial polish smoke test passed.');
}finally{await browser.close()}
