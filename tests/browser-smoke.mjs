import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });

async function waitForEnhancements(page) {
  await page.waitForFunction(() => {
    const search = document.getElementById('searchInput');
    return typeof window.openCase === 'function' && search?.getAttribute('role') === 'combobox';
  });
}

function capturePageErrors(page, label) {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  return () => assert.deepEqual(errors, [], `${label} emitted browser page errors: ${errors.join(' | ')}`);
}

const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const finishMainErrors = capturePageErrors(page, 'main smoke path');

await page.goto(base, { waitUntil: 'domcontentloaded' });
await waitForEnhancements(page);
assert.equal(await page.title(), 'Pragalbh Dwivedi | Institutional Systems Architect');
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

await page.goto(`${base}#case=aquapulse`, { waitUntil: 'domcontentloaded' });
await waitForEnhancements(page);
await page.waitForSelector('#caseOverlay.show');
assert.equal(new URL(page.url()).hash, '#case=aquapulse');
assert.equal(await page.locator('#caseModal').getAttribute('role'), 'dialog');
assert.equal(await page.locator('#caseModal').getAttribute('aria-modal'), 'true');
assert.ok((await page.locator('.case-review-stamp').textContent()).includes('Evidence reviewed'));
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

const noJsContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1024, height: 800 } });
const noJsPage = await noJsContext.newPage();
await noJsPage.goto(base, { waitUntil: 'domcontentloaded' });
assert.equal(await noJsPage.locator('.noscript-profile').isVisible(), true, 'No-JS profile must remain visible');
assert.equal(await noJsPage.locator('.app').isVisible(), false, 'Interactive shell must be hidden without JavaScript');
assert.ok((await noJsPage.locator('.noscript-profile').textContent()).includes('AquaPulse'));
assert.equal(await noJsPage.locator('.noscript-profile a[href="tel:+919555877000"]').count(), 1);
await noJsContext.close();

await browser.close();
console.log('Browser smoke test passed.');
