import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:4173/';
const browser=await chromium.launch({headless:true});
let desktop,mobile;

async function checkSafeLinks(page,label){
  const unsafe=await page.locator('#commercialView a[target="_blank"]').evaluateAll(links=>links.filter(a=>!(a.getAttribute('rel')||'').split(/\s+/).includes('noreferrer')).map(a=>a.href));
  assert.deepEqual(unsafe,[],`${label} has unsafe target=_blank links`);
}

try{
  desktop=await browser.newPage({viewport:{width:1440,height:1000}});
  await desktop.goto(base,{waitUntil:'domcontentloaded'});
  await desktop.waitForSelector('#commercialMode');
  await desktop.click('#commercialMode');
  await desktop.waitForSelector('#commercialView.active [data-commercial-offer]');
  assert.equal(await desktop.locator('#commercialMode').getAttribute('aria-pressed'),'true');
  assert.equal(await desktop.locator('#networkView').evaluate(el=>el.classList.contains('hidden')),true);
  assert.equal(await desktop.locator('#recruiterView').evaluate(el=>el.classList.contains('active')),false);
  assert.equal(await desktop.locator('[data-commercial-offer]').count(),6,'consulting view should expose six launch offers');
  const commercialText=await desktop.locator('#commercialView').innerText();
  assert.ok(commercialText.includes('Infrastructure Rescue'));
  assert.ok(commercialText.includes('$650'));
  assert.ok(commercialText.includes('Infrastructure Care'));
  assert.equal(await desktop.locator('[data-commercial-offer]').first().isVisible(),true);
  assert.ok(await desktop.locator('#commercialView a[href^="tel:+919555877000"]').count()>=1);
  assert.ok(await desktop.locator('#commercialView a[href^="https://wa.me/919555877000"]').count()>=1);
  await checkSafeLinks(desktop,'desktop consulting view');

  await desktop.click('#recruiterMode');
  await desktop.waitForSelector('#recruiterView.active');
  assert.equal(await desktop.locator('#commercialView').evaluate(el=>el.classList.contains('active')),false);
  assert.equal(await desktop.locator('#commercialMode').getAttribute('aria-pressed'),'false');

  mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  await mobile.goto(base,{waitUntil:'domcontentloaded'});
  await mobile.click('#commercialMode');
  await mobile.waitForSelector('#commercialView.active [data-commercial-offer]');
  assert.equal(await mobile.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),true,'consulting view must not create horizontal mobile overflow');
  const modeBox=await mobile.locator('.mode').boundingBox();
  assert.ok(modeBox&&modeBox.x>=0&&modeBox.x+modeBox.width<=391,'mode selector must fit mobile viewport');
  const firstOfferBox=await mobile.locator('[data-commercial-offer]').first().boundingBox();
  assert.ok(firstOfferBox&&firstOfferBox.x>=0&&firstOfferBox.x+firstOfferBox.width<=391,'commercial offer must fit mobile viewport');
  assert.equal(await mobile.locator('[data-commercial-offer]').count(),6);
  await checkSafeLinks(mobile,'mobile consulting view');

  console.log('Commercial consulting mode smoke passed: deferred desktop/mobile conversion paths are present and contained.');
}finally{
  await desktop?.close().catch(()=>{});
  await mobile?.close().catch(()=>{});
  await browser.close().catch(()=>{});
}
