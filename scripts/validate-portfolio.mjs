import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const failures = [];
const notes = [];

const mustExist = [
  'index.html',
  'CNAME',
  'robots.txt',
  'sitemap.xml',
  'README.md',
  'MASTER_ROADMAP.md',
  'PORTFOLIO_STATUS.md',
  'PORTFOLIO_ARCHITECTURE.md',
  'PORTFOLIO_MAINTENANCE.md',
  'RELEASE_CHECKLIST.md',
  'CASE_REVIEW_REGISTER.md',
  'SKILLS.md',
  'EVIDENCE_REGISTER.md',
  'OUTCOME_REGISTER.md',
  'SPRINT_5_QUALITY_QA.md',
  'SPRINT_6_DISCOVERABILITY_PERFORMANCE.md',
  'assets/favicon.svg',
  'assets/portfolio.js',
  'assets/evidence.js',
  'assets/proof.js',
  'assets/case-navigation.js',
  'assets/hiring-conversion.js',
  'assets/accessibility.js',
  'assets/network-navigation.js',
  'assets/network-navigation.css',
  'assets/case-review.js',
  'assets/case-review.css'
];

function fail(message) { failures.push(message); }
function note(message) { notes.push(message); }
function read(rel) { return fs.readFileSync(path.join(root, rel), 'utf8'); }
function exists(rel) { return fs.existsSync(path.join(root, rel)); }

for (const file of mustExist) {
  if (!exists(file)) fail(`Missing required file: ${file}`);
}

if (exists('CNAME') && read('CNAME').trim() !== 'pragalbh.in') {
  fail('CNAME must contain exactly pragalbh.in');
}

const index = exists('index.html') ? read('index.html') : '';
const robots = exists('robots.txt') ? read('robots.txt') : '';
const sitemap = exists('sitemap.xml') ? read('sitemap.xml') : '';

const requiredIndexSnippets = [
  '<link rel="canonical" href="https://pragalbh.in/"',
  '<meta name="robots" content="index,follow"',
  '<meta property="og:url" content="https://pragalbh.in/"',
  '<meta name="twitter:card"',
  'application/ld+json',
  './assets/favicon.svg'
];
for (const snippet of requiredIndexSnippets) {
  if (!index.includes(snippet)) fail(`index.html missing required metadata/reference: ${snippet}`);
}

if (!robots.includes('Sitemap: https://pragalbh.in/sitemap.xml')) {
  fail('robots.txt does not point to canonical sitemap');
}
if (!sitemap.includes('<loc>https://pragalbh.in/</loc>')) {
  fail('sitemap.xml does not contain canonical homepage URL');
}

const jsonLdMatches = [...index.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
if (!jsonLdMatches.length) {
  fail('No JSON-LD block found in index.html');
} else {
  for (const [i, match] of jsonLdMatches.entries()) {
    try { JSON.parse(match[1]); }
    catch (error) { fail(`JSON-LD block ${i + 1} is invalid JSON: ${error.message}`); }
  }
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'dist') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const allFiles = walk(root);
const jsFiles = allFiles.filter(f => f.endsWith('.js') || f.endsWith('.mjs'));
for (const file of jsFiles) {
  const rel = path.relative(root, file);
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
  } catch (error) {
    fail(`JavaScript syntax error in ${rel}: ${String(error.stderr || error.message).trim()}`);
  }
}

const liveFiles = allFiles.filter(f => {
  const rel = path.relative(root, f).replaceAll('\\', '/');
  return rel === 'index.html' || rel.startsWith('assets/');
}).filter(f => /\.(html|js|css|svg)$/i.test(f));

const liveText = liveFiles.map(f => `\n/* FILE:${path.relative(root, f)} */\n${fs.readFileSync(f, 'utf8')}`).join('\n');

if (/<iframe\b/i.test(liveText)) fail('Live portfolio surface contains an iframe');
if (/mailto:/i.test(liveText)) fail('Live portfolio surface contains a mailto link');
if (/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(liveText)) fail('Live portfolio surface contains a public email address');

const privateIp = /(^|[^0-9])(10\.(?:\d{1,3}\.){2}\d{1,3}|192\.168\.(?:\d{1,3}\.)\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.(?:\d{1,3}\.)\d{1,3})([^0-9]|$)/m;
if (privateIp.test(liveText)) fail('Live portfolio surface contains a private IPv4 address');

const forbiddenScalePhrases = [
  '4 institutions',
  '7 mapped classroom',
  '11-15 classroom',
  '11–15 classroom',
  '4 buses + 6 vans',
  '4 buses / 6 vans',
  '4 buses and 6 vans'
];
for (const phrase of forbiddenScalePhrases) {
  if (liveText.toLowerCase().includes(phrase.toLowerCase())) fail(`Protected precise scale phrase reintroduced: ${phrase}`);
}

const phoneLike = liveText.match(/(?:\+?91[\s-]?)?[6-9]\d{9}/g) || [];
for (const raw of phoneLike) {
  const digits = raw.replace(/\D/g, '');
  if (digits !== '9555877000' && digits !== '919555877000') {
    fail(`Unexpected public phone-like number found: ${raw}`);
  }
}
if (!liveText.includes('9555877000')) fail('Approved public phone/WhatsApp number is missing from live surface');

const localRefPattern = /\.\/assets\/[A-Za-z0-9._\/-]+/g;
const refSources = allFiles.filter(f => /\.(html|js|css)$/i.test(f));
const refs = new Set();
for (const file of refSources) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(localRefPattern)) refs.add(match[0]);
}
for (const ref of refs) {
  const rel = ref.replace(/^\.\//, '');
  if (!exists(rel)) fail(`Broken local asset reference: ${ref}`);
}
note(`Validated ${refs.size} local asset references`);

const requiredCaseIds = [
  'aquapulse',
  'digitalops',
  'infra',
  'kubernetes-ha',
  'smartclass',
  'solarcctv',
  'leadership-recruitment',
  'curriculum-assessment',
  'compliance-documentation',
  'institutional-operations',
  'academic-scheduling',
  'admissions-communication'
];
const nav = exists('assets/case-navigation.js') ? read('assets/case-navigation.js') : '';
const reviewLayer = exists('assets/case-review.js') ? read('assets/case-review.js') : '';
const reviewRegister = exists('CASE_REVIEW_REGISTER.md') ? read('CASE_REVIEW_REGISTER.md') : '';
for (const id of requiredCaseIds) {
  if (!nav.includes(id)) fail(`Case navigation registry is missing: ${id}`);
  if (!reviewLayer.includes(`'${id}'`)) fail(`Case review layer is missing: ${id}`);
}
const expectedReviewNames = [
  'AquaPulse','BDSPS Digital Operations','Private Infrastructure','HA Kubernetes','Smart Classroom','Solar CCTV Edge',
  'Teacher Recruitment & Evaluation','Curriculum & Assessment','Compliance & Documentation','Institutional Operations',
  'Academic Scheduling & Execution','Admissions & Institutional Communication'
];
for (const name of expectedReviewNames) {
  if (!reviewRegister.includes(name)) fail(`CASE_REVIEW_REGISTER.md missing case: ${name}`);
}

const attributionTerms = ['Graphic Design', 'UI/UX Design', 'Art Direction', 'Brand Visual Design', 'Campaign Visual Design', 'Portfolio Visual Storytelling'];
const readme = exists('README.md') ? read('README.md') : '';
for (const term of attributionTerms) {
  if (!readme.includes(term)) fail(`README attribution boundary missing discipline: ${term}`);
}

if (!readme.includes('No public email')) fail('README contact boundary should explicitly retain no-public-email rule');

if (failures.length) {
  console.error('\nPortfolio validation FAILED\n');
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

console.log('Portfolio validation passed.');
for (const item of notes) console.log(`- ${item}`);
console.log(`- Checked ${jsFiles.length} JavaScript files for syntax`);
console.log(`- Checked ${liveFiles.length} live-surface files for privacy/contact regressions`);
console.log(`- Verified ${requiredCaseIds.length} case-study navigation and review IDs`);
