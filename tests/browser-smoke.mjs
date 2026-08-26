import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { chromium } from 'playwright';

const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });
let desktopContext, mobileContext, noJsContext;
let page, mobilePage, noJsPage;

async function waitForEnhancements(target) {
  await target.waitForFunction(() => {
    const search = document.getElementById('searchInput');
    return typeof window.openCase === 'function' && search?.getAttribute('role') === 'combobox';
  });
}

function capturePageErrors(target, label) {
  const errors = [];
  target.on('pageerror', error => errors.push(error.message));
  return () => assert.deepEqual(errors, [], `${label} emitted browser page errors: ${errors.join(' | ')}`);
}

async function assertSafeBlankLinks(target, label) {
  const unsafe = await target.locator('a[target="_blank"]').evaluateAll(links => links.filter(a => !(a.getAttribute('rel') || '').split(/\s+/).includes('noreferrer')).map(a => a.href));
  assert.deepEqual(unsafe, [], `${label} contains target=_blank links without rel=noreferrer: ${unsafe.join(', ')}`);
}

async function saveFailureArtifacts(error) {
  await fs.mkdir('test-artifacts', { recursive: true });
  await fs.writeFile('test-artifacts/failure.txt', `${error?.stack || error}\n`, 'utf8');
  for (const [name, target] of [['desktop', page], ['mobile', mobilePage], ['no-js', noJsPage]]) {
    if (!target || target.isClosed()) continue;
    try {
      await target.screenshot({ path: `test-artifacts/${name}.png`, fullPage: true });
      await fs.writeFile(`test-artifacts/${name}-url.txt`, `${target.url()}\n`, 'utf8');
    } catch {}
  }
}

try {
  desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  page = await desktopContext.newPage();
  const finishMainErrors = capturePageErrors(page, 'desktop smoke path');

  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await waitForEnhancements(page);
  assert.equal(await page.title(), 'Pragalbh Dwivedi | Owner, Executive Director & Systems Builder');
  assert.equal(await page.locator('#exploreMode').getAttribute('aria-pressed'), 'true');
  assert.equal(await page.locator('#recruiterMode').getAttribute('aria-pressed'), 'false');
  assert.equal(await page.locator('#searchInput').getAttribute('aria-controls'), 'searchResults');

  await page.click('#recruiterMode');
  await page.waitForSelector('#recruiterView.active');
  assert.equal(await page.locator('#recruiterMode').getAttribute('aria-pressed'), 'true');
  assert.ok(await page.locator('.hiring-conversion').count(), 'Hiring conversion layer should render in Recruiter View');
  assert.ok(await page.locator('.case-visibility').count(), 'Flagship/supporting case disclosure should render');
  assert.equal(await page.locator('a[href="tel:+919555877000"]').first().count(), 1);
  assert.equal(await page.locator('a[href="https://wa.me/919555877000"]').first().count(), 1);
  await assertSafeBlankLinks(page, 'Recruiter View');

  await page.goto(`${base}#case=aquapulse`, { waitUntil: 'domcontentloaded' });
  await waitForEnhancements(page);
  await page.waitForSelector('#caseOverlay.show');
  assert.equal(new URL(page.url()).hash, '#case=aquapulse');
  assert.equal(await page.locator('#caseModal').getAttribute('role'), 'dialog');
  assert.equal(await page.locator('#caseModal').getAttribute('aria-modal'), 'true');
  assert.equal(await page.locator('.case-close').getAttribute('type'), 'button');
  assert.equal(await page.locator('.case-close').getAttribute('aria-label'), 'Close case study');
  assert.ok((await page.locator('.case-review-stamp').textContent()).includes('Evidence reviewed'));
  await assertSafeBlankLinks(page, 'AquaPulse case');
  await page.click('.case-close');
  await page.waitForFunction(() => !document.getElementById('caseOverlay')?.classList.contains('show'));
  assert.equal(new URL(page.url()).hash, '', 'Direct case link should close to the canonical page URL');

  await page.goto(`${base}#node=aquapulse`, { waitUntil: 'domcontentloaded' });
  await waitForEnhancements(page);
  await page.waitForFunction(() => document.querySelector('#networkBreadcrumb [aria-current="page"]')?.textContent?.includes('AquaPulse'));
  assert.equal(new URL(page.url()).hash, '#node=aquapulse');
  assert.ok((await page.locator('#networkBreadcrumb').textContent()).includes('AquaPulse'));
  await page.locator('#drawer button.cta.primary').click();
  await page.waitForSelector('#caseOverlay.show');
  assert.equal(new URL(page.url()).hash, '#case=aquapulse');
  await page.click('.case-close');
  await page.waitForFunction(() => !document.getElementById('caseOverlay')?.classList.contains('show'));
  assert.equal(new URL(page.url()).hash, '#node=aquapulse', 'Closing a graph-origin case should restore its node hash');

  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await waitForEnhancements(page);
  const search = page.locator('#searchInput');
  await search.fill('Kubernetes');
  await page.waitForSelector('#searchResults.show [role="option"]');
  assert.equal(await search.getAttribute('aria-expanded'), 'true');
  await search.press('ArrowDown');
  assert.equal(await page.locator(':focus').getAttribute('role'), 'option', 'ArrowDown should move focus into search results');
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => location.hash === '#node=kubernetes');
  assert.equal(new URL(page.url()).hash, '#node=kubernetes');

  await search.fill('solar');
  await page.waitForSelector('#searchResults.show [role="option"]');
  await search.press('Escape');
  assert.equal(await search.getAttribute('aria-expanded'), 'false');
  finishMainErrors();

  mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  mobilePage = await mobileContext.newPage();
  const finishMobileErrors = capturePageErrors(mobilePage, 'mobile viewport smoke path');
  await mobilePage.goto(base, { waitUntil: 'domcontentloaded' });
  await waitForEnhancements(mobilePage);
  assert.equal(await mobilePage.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), true, 'Mobile page must not create horizontal document overflow');
  const mobileSearchBox = await mobilePage.locator('#searchInput').boundingBox();
  assert.ok(mobileSearchBox && mobileSearchBox.x >= 0 && mobileSearchBox.x + mobileSearchBox.width <= 391, 'Mobile search must fit within viewport');

  await mobilePage.goto(`${base}#node=aquapulse`, { waitUntil: 'domcontentloaded' });
  await waitForEnhancements(mobilePage);
  await mobilePage.waitForSelector('#networkBreadcrumb');
  assert.equal(await mobilePage.locator('#networkBreadcrumb .network-back').isVisible(), true, 'Mobile breadcrumb must expose Back control');
  assert.equal(await mobilePage.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), true, 'Expanded mobile network must not overflow document width');

  await mobilePage.click('#recruiterMode');
  await mobilePage.waitForSelector('#recruiterView.active');
  const disclosure = mobilePage.locator('.case-visibility button');
  assert.equal(await disclosure.isVisible(), true, 'Supporting-case disclosure must remain visible on mobile');
  assert.equal(await disclosure.getAttribute('aria-expanded'), 'false');
  await disclosure.click();
  assert.equal(await disclosure.getAttribute('aria-expanded'), 'true');
  assert.equal(await mobilePage.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), true, 'Recruiter View must not create horizontal overflow');
  await assertSafeBlankLinks(mobilePage, 'Mobile Recruiter View');

  await mobilePage.evaluate(() => window.openCase('aquapulse'));
  await mobilePage.waitForSelector('#caseOverlay.show');
  const modalBox = await mobilePage.locator('#caseModal').boundingBox();
  assert.ok(modalBox && modalBox.x >= 0 && modalBox.x + modalBox.width <= 391, 'Mobile case modal must fit within viewport width');
  assert.equal(await mobilePage.locator('.case-close').isVisible(), true, 'Mobile case close control must remain visible');
  assert.equal(await mobilePage.locator('.case-close').getAttribute('aria-label'), 'Close case study');
  await mobilePage.click('.case-close');
  await mobilePage.waitForFunction(() => !document.getElementById('caseOverlay')?.classList.contains('show'));
  finishMobileErrors();

  noJsContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1024, height: 800 } });
  noJsPage = await noJsContext.newPage();
  await noJsPage.goto(base, { waitUntil: 'domcontentloaded' });
  assert.equal(await noJsPage.locator('.noscript-profile').isVisible(), true, 'No-JS profile must remain visible');
  assert.equal(await noJsPage.locator('.app').isVisible(), false, 'Interactive shell must be hidden without JavaScript');
  assert.ok((await noJsPage.locator('.noscript-profile').textContent()).includes('AquaPulse'));
  assert.equal(await noJsPage.locator('.noscript-profile a[href="tel:+919555877000"]').count(), 1);

  console.log('Browser smoke test passed: desktop Chromium, synthetic mobile viewport, no-JavaScript fallback, modal semantics and safe new-tab links.');
} catch (error) {
  await saveFailureArtifacts(error);
  throw error;
} finally {
  await noJsContext?.close().catch(() => {});
  await mobileContext?.close().catch(() => {});
  await desktopContext?.close().catch(() => {});
  await browser.close().catch(() => {});
}
