import { chromium } from 'playwright';

const url = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  await page.goto(url, { waitUntil: 'networkidle' });

  await page.waitForFunction(() => {
    const links = [...document.querySelectorAll('head link[rel="stylesheet"]')];
    const impeccable = links.findIndex(link => /\/assets\/design-tokens\.css(?:\?|$)/.test(link.getAttribute('href') || ''));
    const electrical = links.findIndex(link => /\/assets\/electrical-motion\.css(?:\?|$)/.test(link.getAttribute('href') || ''));
    return electrical >= 0 && impeccable > electrical;
  });

  const cascade = await page.evaluate(() => {
    const links = [...document.querySelectorAll('head link[rel="stylesheet"]')];
    return links.map(link => link.getAttribute('href') || '');
  });
  const impeccableIndex = cascade.findIndex(href => /\/assets\/design-tokens\.css(?:\?|$)/.test(href));
  const dynamicIndexes = cascade
    .map((href, index) => ({ href, index }))
    .filter(({ href }) => /\/assets\/(?:portfolio|evidence|audience|case-depth|case-navigation|hiring-conversion|accessibility|network-navigation|case-review|electrical-motion)\.css(?:\?|$)/.test(href))
    .map(({ index }) => index);
  assert(impeccableIndex >= 0, 'Impeccable/design-token stylesheet is missing.');
  assert(dynamicIndexes.length > 0, 'Expected dynamic portfolio stylesheets were not loaded.');
  assert(impeccableIndex > Math.max(...dynamicIndexes), 'Impeccable stylesheet must be last in the visual cascade.');

  await page.click('#recruiterMode');
  await page.waitForSelector('#recruiterView.active');

  const visual = await page.evaluate(() => {
    const style = selector => getComputedStyle(document.querySelector(selector));
    const mode = style('.mode');
    const solve = style('.solve');
    const competency = style('.competencies span');
    const contact = style('.contact');
    const cases = [...document.querySelectorAll('#caseGrid .case:not([hidden])')];
    const firstRect = cases[0]?.getBoundingClientRect();
    const secondRect = cases[1]?.getBoundingClientRect();
    return {
      modeBorder: [mode.borderTopWidth, mode.borderRightWidth, mode.borderBottomWidth, mode.borderLeftWidth],
      solveBackground: solve.backgroundColor,
      solveBorders: [solve.borderTopWidth, solve.borderRightWidth, solve.borderBottomWidth, solve.borderLeftWidth],
      competencyBorders: [competency.borderTopWidth, competency.borderRightWidth, competency.borderBottomWidth, competency.borderLeftWidth],
      contactTop: contact.borderTopWidth,
      contactLeft: contact.borderLeftWidth,
      firstCaseWidth: firstRect?.width || 0,
      secondCaseWidth: secondRect?.width || 0
    };
  });

  assert(visual.modeBorder.every(width => width === '0px'), 'View-mode control regressed to boxed chrome.');
  assert(visual.solveBackground === 'rgba(0, 0, 0, 0)', 'Solve cards should use an editorial transparent surface.');
  assert(visual.solveBorders[0] === '0px' && visual.solveBorders[1] === '0px' && visual.solveBorders[2] !== '0px', 'Solve cards should be ruled, not boxed.');
  assert(visual.competencyBorders[0] === '0px' && visual.competencyBorders[1] === '0px' && visual.competencyBorders[3] === '0px' && visual.competencyBorders[2] !== '0px', 'Capability labels should be underlined, not pill-boxed.');
  assert(visual.contactTop !== '0px' && visual.contactLeft === '0px', 'Contact block should use restrained horizontal containment.');
  assert(visual.firstCaseWidth > visual.secondCaseWidth * 1.6, 'Lead case should retain asymmetric flagship emphasis on desktop.');

  console.log('Stage 9B Impeccable visual hierarchy smoke test passed.');
} finally {
  await browser.close();
}
