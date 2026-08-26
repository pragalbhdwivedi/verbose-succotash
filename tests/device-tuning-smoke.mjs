import { chromium } from 'playwright';
import fs from 'node:fs';

const url=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:4173/';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});
const page=await context.newPage();
const fail=async message=>{fs.mkdirSync('test-artifacts',{recursive:true});await page.screenshot({path:'test-artifacts/device-tuning-failure.png',fullPage:true});throw new Error(message)};

try{
  await page.goto(url,{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.__deviceTuning?.viewport==='280 45 840 710');
  const viewBox=await page.locator('#network').getAttribute('viewBox');
  if(viewBox!=='280 45 840 710')await fail(`Unexpected mobile viewBox: ${viewBox}`);

  for(const id of ['edu','infra','automation']){
    const box=await page.locator(`#network .node[data-id="${id}"] .label`).boundingBox();
    if(!box||box.x<0||box.x+box.width>390)await fail(`${id} pillar label clips the mobile viewport`);
  }

  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
  if(overflow>1)await fail(`Horizontal page overflow: ${overflow}px`);

  await page.evaluate(()=>expandPath('aquapulse'));
  await page.waitForFunction(()=>document.querySelector('#drawer .kicker')?.textContent.includes('OPERATIONAL SOFTWARE'));
  const kicker=(await page.locator('#drawer .kicker').innerText()).replace(/\s+/g,' ').trim();
  if(/PROJECT\s*\/\s*PROJECT/i.test(kicker))await fail(`Redundant project kicker remains: ${kicker}`);

  const status=await page.locator('.energy-status').evaluate(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return{left:r.left,right:r.right,overflow:s.overflow}});
  if(status.left<0||status.right>390||status.overflow!=='hidden')await fail('Energy status is not safely constrained on mobile');

  console.log('Device tuning smoke passed.');
}finally{
  await context.close();
  await browser.close();
}
