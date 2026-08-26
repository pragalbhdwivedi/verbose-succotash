import { chromium } from 'playwright';

const url=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:4173/';
const browser=await chromium.launch({headless:true});
const assert=(condition,message)=>{if(!condition)throw new Error(message)};

try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  await page.goto(url,{waitUntil:'networkidle'});
  await page.waitForFunction(()=>Boolean(window.__simpleView));

  assert(await page.locator('.mode button').count()===3,'Portfolio must expose exactly three audience modes.');
  assert(await page.locator('#simpleMode').count()===1,'Simple View mode control must exist.');
  assert(await page.locator('#recruiterView [data-about-me]').count()===1,'Recruiter View must include an About Me section.');
  assert((await page.locator('#recruiterView [data-about-me]').textContent()).includes('Owner and Executive Director'),'About Me must identify the owner/executive role.');
  assert(await page.locator('#recruiterView [data-profile-timeline] .stat').count()===5,'About Me must expose the public professional timeline.');
  assert((await page.locator('#recruiterView [data-profile-foundations]').textContent()).includes('MCSA'),'Technical foundations must include MCSA.');
  assert((await page.locator('#recruiterView [data-profile-foundations]').textContent()).includes('RHCSA'),'Technical foundations must include RHCSA.');
  assert(await page.locator('#recruiterView [data-operational-disclosure]').count()===1,'Recruiter View must explain operational redaction.');
  assert((await page.locator('#recruiterView .rhero .actions').textContent()).includes('Let’s connect'),'Recruiter hero must route contact through Let’s connect.');
  assert(await page.locator('#recruiterContact [data-connect-form]').count()===1,'Recruiter View must expose the contact form.');
  assert(await page.locator('#recruiterContact a[href^="tel:"]').count()===1,'Direct phone contact must remain available inside Contact Me.');
  assert(await page.locator('#recruiterContact a[href^="https://wa.me/"]').count()===1,'Direct WhatsApp contact must remain available inside Contact Me.');
  assert((await page.locator('#recruiterContact').textContent()).includes('no charge'),'Contact Me must retain the help-first no-charge note.');

  await page.click('#recruiterMode');
  const form=page.locator('#recruiterContact [data-connect-form]');
  await form.locator('[name="name"]').fill('Test Visitor');
  await form.locator('[name="problem"]').fill('A systems problem');
  await form.locator('[name="context"]').fill('Testing the pre-filled contact handoff.');
  const outgoing=page.waitForRequest(r=>r.url().startsWith('https://wa.me/919555877000?text='));
  await page.route('https://wa.me/**',route=>route.abort());
  await form.locator('button[type="submit"]').click();
  const req=await outgoing;
  const decoded=decodeURIComponent(req.url());
  assert(decoded.includes('Test Visitor')&&decoded.includes('A systems problem'),'Contact form must produce a pre-filled WhatsApp message.');
  await page.unroute('https://wa.me/**');

  assert(await page.locator('#simpleView [data-simple-case]').count()===6,'Simple View must translate six real system stories.');
  assert((await page.locator('#simpleView').textContent()).includes('Systems begin with the operating problem')===false,'Simple View should use its own plain-language hierarchy rather than duplicate the recruiter heading verbatim.');
  assert((await page.locator('#simpleView').textContent()).includes('I turn difficult institutional problems into'),'Simple View must explain the professional value in plain language.');

  await page.click('#simpleMode');
  assert(await page.locator('#simpleView').evaluate(el=>el.classList.contains('active')),'Simple View must become active from the third mode control.');
  assert(await page.locator('#networkView').evaluate(el=>el.classList.contains('hidden')),'Explore network must hide while Simple View is active.');
  assert(!(await page.locator('#recruiterView').evaluate(el=>el.classList.contains('active'))),'Recruiter View must not remain active beside Simple View.');
  assert(await page.locator('#simpleMode').getAttribute('aria-pressed')==='true','Simple View must expose pressed state to assistive technology.');
  assert(await page.locator('#simpleContact [data-connect-form]').count()===1,'Simple View must expose the same Let’s Connect pathway.');

  const technicalTerms=(await page.locator('#simpleView').textContent()).match(/Kubernetes|HAProxy|etcd|WireGuard|RBAC|PostgreSQL|FET XML/g)||[];
  assert(technicalTerms.length===0,'Default Simple View must not require infrastructure jargon to understand the work.');

  await page.locator('[data-simple-open="smartclass"]').click();
  await page.waitForSelector('#caseOverlay.show');
  assert(/Smart Classroom/i.test(await page.locator('#caseModal h2').textContent()),'Simple View must open the same underlying evidence case, not a second truth source.');
  await page.evaluate(()=>window.closeCase());

  await page.click('#recruiterMode');
  assert(await page.locator('#recruiterView').evaluate(el=>el.classList.contains('active')),'Recruiter mode must still work after visiting Simple View.');
  await page.click('#exploreMode');
  assert(!(await page.locator('#networkView').evaluate(el=>el.classList.contains('hidden'))),'Explore mode must restore the network after visiting Simple View.');

  const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  await mobile.goto(url,{waitUntil:'networkidle'});
  await mobile.waitForFunction(()=>Boolean(window.__simpleView));
  const labels=await mobile.locator('.mode button').allTextContents();
  assert(labels.join('|')==='Explore|Recruiter|Simple','Mobile mode labels must remain compact enough for the top bar.');
  assert(await mobile.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),'Three-mode navigation must not introduce mobile horizontal overflow.');
  await mobile.click('#simpleMode');
  assert(await mobile.locator('#simpleView').evaluate(el=>el.classList.contains('active')),'Simple View must work on the mobile viewport.');
  assert(await mobile.locator('#simpleContact [data-connect-form]').count()===1,'Contact form must remain available on mobile.');
  assert(await mobile.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),'Contact form must not introduce mobile horizontal overflow.');
  await mobile.close();

  console.log('Profile, Simple View and Let’s Connect smoke test passed.');
}finally{await browser.close()}
