import { chromium } from 'playwright';

const url = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-system-telemetry]');

  const root = await page.evaluate(() => ({
    status: document.querySelector('[data-system-telemetry]')?.textContent || '',
    primary: document.querySelector('.energy-status span:not([data-system-telemetry])')?.textContent || ''
  }));
  assert(/L0/.test(root.status), 'Root telemetry must expose path depth.');
  assert(/REL/.test(root.status) && /VISIBLE/.test(root.status), 'Desktop telemetry must expose relationship and visible-system counts.');
  assert(/System online/i.test(root.primary), 'Primary observatory state must remain intact beside telemetry.');

  await page.evaluate(() => expandPath('smartclass'));
  await page.waitForFunction(() => document.querySelector('[data-system-readout]')?.textContent?.includes('SMART') || document.querySelector('[data-system-readout]')?.textContent?.includes('PROTO'));

  const smart = await page.evaluate(() => ({
    status: document.querySelector('[data-system-telemetry]')?.textContent || '',
    drawer: document.querySelector('[data-system-readout]')?.textContent || '',
    primary: document.querySelector('.energy-status span:not([data-system-telemetry])')?.textContent || ''
  }));
  assert(/L\d/.test(smart.status) && /REL/.test(smart.status), 'Selected-system telemetry must follow graph navigation.');
  assert(/PATH L\d/.test(smart.drawer), 'Drawer readout must expose selected path depth.');
  assert(/PROTO/.test(smart.drawer), 'Smart Classroom readout must expose prototype maturity.');
  assert(/EVIDENCE/.test(smart.drawer), 'Project readout must expose evidence count.');
  assert(/Smart Classroom/i.test(smart.primary), 'Primary observatory state must name the selected project.');

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await mobile.goto(url, { waitUntil: 'networkidle' });
  await mobile.waitForSelector('[data-system-telemetry]');
  const mobileText = await mobile.locator('[data-system-telemetry]').textContent();
  assert(/^L\d+ · \d+R$/.test((mobileText || '').trim()), 'Mobile telemetry must collapse to the compact depth/relationship form.');
  await mobile.close();

  console.log('Stage 9E observatory telemetry smoke test passed.');
} finally {
  await browser.close();
}
