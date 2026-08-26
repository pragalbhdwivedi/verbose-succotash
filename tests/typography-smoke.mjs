import { chromium } from 'playwright';

const url = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const px = value => Number.parseFloat(value || '0');

try {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.energy-status');
  await page.waitForSelector('.network-breadcrumb button');

  const explore = await page.evaluate(() => {
    const style = selector => getComputedStyle(document.querySelector(selector));
    return {
      bodyFamily: style('body').fontFamily,
      bodyNumeric: style('body').fontVariantNumeric,
      graphHeadingWeight: style('.graph-title h1').fontWeight,
      eyebrowSize: style('.graph-title .eyebrow').fontSize,
      searchSize: style('#searchInput').fontSize,
      nodeLabelSize: style('#network .node .label').fontSize,
      breadcrumbSize: style('.network-breadcrumb button').fontSize,
      energySize: style('.energy-status').fontSize
    };
  });

  assert(/Manrope/i.test(explore.bodyFamily), 'Reading/editorial voice must use Manrope.');
  assert(explore.bodyNumeric.includes('tabular-nums'), 'Operational numerals must use tabular figures.');
  assert(Number(explore.graphHeadingWeight) === 500, 'Editorial graph heading must use the 500-weight voice.');
  assert(px(explore.eyebrowSize) >= 10, 'Primary telemetry eyebrow must remain at least 10px.');
  assert(px(explore.searchSize) >= 13, 'Search reading size must remain at least 13px.');
  assert(px(explore.nodeLabelSize) >= 13, 'Primary graph labels must remain readable.');
  assert(px(explore.breadcrumbSize) >= 9, 'HTML breadcrumb telemetry must not drop below 9px.');
  assert(px(explore.energySize) >= 9, 'HTML observatory telemetry must not drop below 9px.');

  await page.click('#recruiterMode');
  await page.waitForSelector('#recruiterView.active');
  const recruiter = await page.evaluate(() => {
    const style = selector => getComputedStyle(document.querySelector(selector));
    return {
      heroWeight: style('.rhero h1').fontWeight,
      heroBody: style('.rhero p').fontSize,
      sectionHeading: style('.section-head h2').fontSize,
      sectionBody: style('.section-head p').fontSize,
      caseTitle: style('#caseGrid .case h3').fontSize,
      caseBody: style('#caseGrid .case p').fontSize,
      evidenceBody: style('#evidenceRail .evidence-copy p').fontSize,
      proofMeta: style('#evidenceRail .evidence-meta span').fontSize
    };
  });

  assert(Number(recruiter.heroWeight) === 500, 'Recruiter hero must retain editorial 500 weight.');
  assert(px(recruiter.heroBody) >= 16, 'Recruiter hero reading copy must remain at least 16px.');
  assert(px(recruiter.sectionHeading) >= 38, 'Recruiter section headings lost editorial hierarchy.');
  assert(px(recruiter.sectionBody) >= 13, 'Recruiter explanatory copy must remain at least 13px.');
  assert(px(recruiter.caseTitle) >= 26, 'Case titles must remain visually distinct from body copy.');
  assert(px(recruiter.caseBody) >= 13, 'Case reading copy must remain at least 13px.');
  assert(px(recruiter.evidenceBody) >= 13, 'Evidence reading copy must remain at least 13px.');
  assert(px(recruiter.proofMeta) >= 9, 'Evidence telemetry must not drop below 9px.');

  await page.evaluate(() => window.openCase('smartclass'));
  await page.waitForSelector('#caseOverlay.show');
  const modal = await page.evaluate(() => {
    const style = selector => getComputedStyle(document.querySelector(selector));
    return {
      title: style('#caseModal h2').fontSize,
      titleWeight: style('#caseModal h2').fontWeight,
      lead: style('#caseModal .lead').fontSize,
      blockBody: style('#caseModal .case-block p').fontSize
    };
  });

  assert(px(modal.title) >= 46, 'Case modal title hierarchy regressed.');
  assert(Number(modal.titleWeight) === 500, 'Case modal title must use editorial 500 weight.');
  assert(px(modal.lead) >= 15, 'Case lead must remain at least 15px.');
  assert(px(modal.blockBody) >= 13, 'Case reasoning copy must remain at least 13px.');

  console.log('Stage 9C typography smoke test passed.');
} finally {
  await browser.close();
}
