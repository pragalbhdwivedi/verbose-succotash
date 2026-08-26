import { chromium } from 'playwright';

const url = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => Boolean(window.__electricalMotion));

  const timings = await page.evaluate(() => window.__electricalMotion.timings);
  assert(timings.fast === 140, 'Fast motion token drifted from 140ms.');
  assert(timings.ui === 220, 'UI motion token drifted from 220ms.');
  assert(timings.transition === 360, 'Transition motion token drifted from 360ms.');
  assert(timings.expressive === 620, 'Expressive motion token drifted from 620ms.');
  assert(timings.branchStagger === 56, 'Branch stagger must remain short and controlled.');
  assert(timings.zapStagger === 42, 'Zap stagger must remain short and controlled.');

  const interrupted = await page.evaluate(() => {
    window.__electricalMotion.zapNode('systems');
    window.__electricalMotion.zapNode('infra');
    const ring = document.querySelector('.zap-ring');
    const expected = nodeMap.get('infra');
    return {
      rings: document.querySelectorAll('.zap-ring').length,
      cx: Number(ring?.getAttribute('cx')),
      cy: Number(ring?.getAttribute('cy')),
      expectedX: expected.x,
      expectedY: expected.y
    };
  });
  assert(interrupted.rings === 1, 'Latest-action-wins must leave only one active zap ring.');
  assert(interrupted.cx === interrupted.expectedX && interrupted.cy === interrupted.expectedY, 'The active expressive event must belong to the latest requested node.');

  await page.waitForTimeout(timings.expressive + timings.fast + 120);
  const residue = await page.evaluate(() => ({
    rings: document.querySelectorAll('.zap-ring').length,
    bolts: document.querySelectorAll('.zap-layer').length
  }));
  assert(residue.rings === 0 && residue.bolts === 0, 'Expressive motion must clean up its transient DOM residue.');
  await page.close();

  const reducedContext = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1280, height: 900 } });
  const reducedPage = await reducedContext.newPage();
  await reducedPage.goto(url, { waitUntil: 'networkidle' });
  await reducedPage.waitForFunction(() => Boolean(window.__electricalMotion));
  const reduced = await reducedPage.evaluate(() => {
    window.__electricalMotion.zapNode('systems');
    return {
      canvas: document.querySelectorAll('.energy-field').length,
      rings: document.querySelectorAll('.zap-ring').length,
      bolts: document.querySelectorAll('.zap-layer').length,
      hotPath: document.querySelectorAll('.path-hot').length
    };
  });
  assert(reduced.canvas === 0, 'Reduced motion must suppress the ambient particle canvas.');
  assert(reduced.rings === 0 && reduced.bolts === 0, 'Reduced motion must suppress expressive zap DOM.');
  assert(reduced.hotPath > 0, 'Reduced motion must preserve system-state hierarchy.');
  await reducedContext.close();

  console.log('Stage 9D motion choreography smoke test passed.');
} finally {
  await browser.close();
}
