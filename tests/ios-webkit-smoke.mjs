import { webkit } from 'playwright';
import fs from 'node:fs';

const url=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:4173/';
const browser=await webkit.launch({headless:true});
const context=await browser.newContext({
  viewport:{width:430,height:932},
  deviceScaleFactor:3,
  isMobile:true,
  hasTouch:true,
  userAgent:'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
});
const page=await context.newPage();
const fail=async message=>{fs.mkdirSync('test-artifacts',{recursive:true});await page.screenshot({path:'test-artifacts/ios-webkit-failure.png',fullPage:true});throw new Error(message)};

try{
  await page.goto(url,{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.__deviceTuning&&document.getElementById('simpleMode'));

  const portrait=await page.evaluate(()=>({
    overflow:document.documentElement.scrollWidth-innerWidth,
    viewBox:document.getElementById('network')?.getAttribute('viewBox'),
    modes:[...document.querySelectorAll('.mode button')].map(b=>({text:b.textContent.trim(),left:b.getBoundingClientRect().left,right:b.getBoundingClientRect().right}))
  }));
  if(portrait.overflow>1)await fail(`Portrait WebKit overflow: ${portrait.overflow}px`);
  if(portrait.viewBox!=='280 45 840 710')await fail(`Portrait WebKit viewBox mismatch: ${portrait.viewBox}`);
  if(portrait.modes.some(x=>x.left<0||x.right>430))await fail('Portrait mode controls clip in WebKit');

  await page.setViewportSize({width:932,height:430});
  await page.evaluate(()=>window.setMode('simple'));
  await page.waitForTimeout(150);
  const landscape=await page.evaluate(()=>({
    overflow:document.documentElement.scrollWidth-innerWidth,
    simple:document.getElementById('simpleView')?.classList.contains('active'),
    nav:[...document.querySelectorAll('.mode button')].map(b=>b.getBoundingClientRect())
  }));
  if(!landscape.simple)await fail('Simple View did not activate in landscape WebKit');
  if(landscape.overflow>1)await fail(`Landscape WebKit overflow: ${landscape.overflow}px`);
  if(landscape.nav.some(r=>r.left<0||r.right>932))await fail('Landscape mode controls clip in WebKit');

  const phone=await page.locator('#simpleView a[href^="tel:"]').first().getAttribute('href');
  const whatsapp=await page.locator('#simpleView a[href^="https://wa.me/"]').first().getAttribute('href');
  if(phone!=='tel:+919555877000')await fail(`Unexpected phone href: ${phone}`);
  if(whatsapp!=='https://wa.me/919555877000')await fail(`Unexpected WhatsApp href: ${whatsapp}`);

  console.log('iPhone-class WebKit smoke passed.');
}finally{
  await context.close();
  await browser.close();
}
