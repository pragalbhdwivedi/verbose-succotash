import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root=process.cwd(),failures=[],notes=[];
const mustExist=['index.html','CNAME','robots.txt','sitemap.xml','README.md','MASTER_ROADMAP.md','PORTFOLIO_STATUS.md','PORTFOLIO_ARCHITECTURE.md','PORTFOLIO_MAINTENANCE.md','RELEASE_CHECKLIST.md','CASE_REVIEW_REGISTER.md','CHANGELOG.md','ENHANCEMENT_CHAIN.md','SKILLS.md','EVIDENCE_REGISTER.md','OUTCOME_REGISTER.md','SPRINT_5_QUALITY_QA.md','SPRINT_6_DISCOVERABILITY_PERFORMANCE.md','assets/favicon.svg','assets/portfolio.js','assets/evidence.js','assets/proof.js','assets/case-navigation.js','assets/hiring-conversion.js','assets/accessibility.js','assets/network-navigation.js','assets/network-navigation.css','assets/case-review.js','assets/case-review.css'];
const fail=m=>failures.push(m),note=m=>notes.push(m),read=rel=>fs.readFileSync(path.join(root,rel),'utf8'),exists=rel=>fs.existsSync(path.join(root,rel));
for(const f of mustExist)if(!exists(f))fail(`Missing required file: ${f}`);
if(exists('CNAME')&&read('CNAME').trim()!=='pragalbh.in')fail('CNAME must contain exactly pragalbh.in');

const index=exists('index.html')?read('index.html'):'',robots=exists('robots.txt')?read('robots.txt'):'',sitemap=exists('sitemap.xml')?read('sitemap.xml'):'',portfolioCss=exists('assets/portfolio.css')?read('assets/portfolio.css'):'';
for(const s of ['<link rel="canonical" href="https://pragalbh.in/"','<meta name="robots" content="index,follow"','<meta property="og:url" content="https://pragalbh.in/"','<meta name="twitter:card"','application/ld+json','./assets/favicon.svg','<link rel="preconnect" href="https://fonts.googleapis.com"','<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin','https://fonts.googleapis.com/css2?family=DM+Mono'])if(!index.includes(s))fail(`index.html missing required metadata/reference: ${s}`);
if(/@import\s+url\([^)]*fonts\.googleapis\.com/i.test(portfolioCss))fail('portfolio.css must not reintroduce blocking Google Fonts @import');
if(!index.includes('.app{display:none!important}'))fail('No-JavaScript fallback must hide the inert interactive shell');
if(!robots.includes('Sitemap: https://pragalbh.in/sitemap.xml'))fail('robots.txt does not point to canonical sitemap');
if(!sitemap.includes('<loc>https://pragalbh.in/</loc>'))fail('sitemap.xml does not contain canonical homepage URL');

const jsonLd=[...index.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
if(!jsonLd.length)fail('No JSON-LD block found in index.html');else for(const[i,m]of jsonLd.entries())try{JSON.parse(m[1])}catch(e){fail(`JSON-LD block ${i+1} is invalid JSON: ${e.message}`)}

function walk(dir){const out=[];for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','node_modules','dist'].includes(entry.name))continue;const full=path.join(dir,entry.name);entry.isDirectory()?out.push(...walk(full)):out.push(full)}return out}
const all=walk(root),jsFiles=all.filter(f=>f.endsWith('.js')||f.endsWith('.mjs'));
for(const file of jsFiles){try{execFileSync(process.execPath,['--check',file],{stdio:'pipe'})}catch(e){fail(`JavaScript syntax error in ${path.relative(root,file)}: ${String(e.stderr||e.message).trim()}`)}}
const liveFiles=all.filter(f=>{const rel=path.relative(root,f).replaceAll('\\','/');return(rel==='index.html'||rel.startsWith('assets/'))&&/\.(html|js|css|svg)$/i.test(f)}),liveText=liveFiles.map(f=>`\n/* FILE:${path.relative(root,f)} */\n${read(path.relative(root,f))}`).join('\n');
if(/<iframe\b/i.test(liveText))fail('Live portfolio surface contains an iframe');
if(/mailto:/i.test(liveText))fail('Live portfolio surface contains a mailto link');
if(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(liveText))fail('Live portfolio surface contains a public email address');
if(/(^|[^0-9])(10\.(?:\d{1,3}\.){2}\d{1,3}|192\.168\.(?:\d{1,3}\.)\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.(?:\d{1,3}\.)\d{1,3})([^0-9]|$)/m.test(liveText))fail('Live portfolio surface contains a private IPv4 address');
for(const phrase of ['4 institutions','7 mapped classroom','11-15 classroom','11–15 classroom','4 buses + 6 vans','4 buses / 6 vans','4 buses and 6 vans'])if(liveText.toLowerCase().includes(phrase.toLowerCase()))fail(`Protected precise scale phrase reintroduced: ${phrase}`);
for(const raw of liveText.match(/(?:\+?91[\s-]?)?[6-9]\d{9}/g)||[]){const digits=raw.replace(/\D/g,'');if(!['9555877000','919555877000'].includes(digits))fail(`Unexpected public phone-like number found: ${raw}`)}
if(!liveText.includes('9555877000'))fail('Approved public phone/WhatsApp number is missing from live surface');

const refs=new Set();for(const file of all.filter(f=>/\.(html|js|css)$/i.test(f)))for(const m of read(path.relative(root,file)).matchAll(/\.\/assets\/[A-Za-z0-9._\/-]+/g))refs.add(m[0]);
for(const ref of refs)if(!exists(ref.replace(/^\.\//,'')))fail(`Broken local asset reference: ${ref}`);note(`Validated ${refs.size} local asset references`);

const caseIds=['aquapulse','digitalops','infra','kubernetes-ha','smartclass','solarcctv','leadership-recruitment','curriculum-assessment','compliance-documentation','institutional-operations','academic-scheduling','admissions-communication'],nav=exists('assets/case-navigation.js')?read('assets/case-navigation.js'):'',review=exists('assets/case-review.js')?read('assets/case-review.js'):'',reviewRegister=exists('CASE_REVIEW_REGISTER.md')?read('CASE_REVIEW_REGISTER.md'):'';
for(const id of caseIds){if(!nav.includes(id))fail(`Case navigation registry is missing: ${id}`);if(!review.includes(`'${id}'`))fail(`Case review layer is missing: ${id}`)}
for(const name of ['AquaPulse','BDSPS Digital Operations','Private Infrastructure','HA Kubernetes','Smart Classroom','Solar CCTV Edge','Teacher Recruitment & Evaluation','Curriculum & Assessment','Compliance & Documentation','Institutional Operations','Academic Scheduling & Execution','Admissions & Institutional Communication'])if(!reviewRegister.includes(name))fail(`CASE_REVIEW_REGISTER.md missing case: ${name}`);

const admissions=exists('assets/admissions-communication-case.js')?read('assets/admissions-communication-case.js'):'',hiring=exists('assets/hiring-conversion.js')?read('assets/hiring-conversion.js'):'',accessibility=exists('assets/accessibility.js')?read('assets/accessibility.js'):'',networkNav=exists('assets/network-navigation.js')?read('assets/network-navigation.js'):'';
if(admissions.includes('hiring-conversion.js'))fail('Admissions case layer must not own Hiring Conversion loading');
if(!nav.includes("s.src='./assets/hiring-conversion.js'"))fail('Case Navigation must own Hiring Conversion loading');
if(!hiring.includes("s.src='./assets/accessibility.js'"))fail('Hiring Conversion must load Accessibility');
if(!accessibility.includes("s.src='./assets/network-navigation.js'"))fail('Accessibility must load Network Navigation');
if(!networkNav.includes("s.src='./assets/case-review.js'"))fail('Network Navigation must load Case Review');
note('Validated deterministic post-case enhancement chain');

const readme=exists('README.md')?read('README.md'):'';for(const term of ['Graphic Design','UI/UX Design','Art Direction','Brand Visual Design','Campaign Visual Design','Portfolio Visual Storytelling'])if(!readme.includes(term))fail(`README attribution boundary missing discipline: ${term}`);if(!readme.includes('No public email'))fail('README contact boundary should explicitly retain no-public-email rule');

if(failures.length){console.error('\nPortfolio validation FAILED\n');for(const f of failures)console.error(`- ${f}`);process.exit(1)}
console.log('Portfolio validation passed.');for(const n of notes)console.log(`- ${n}`);console.log(`- Checked ${jsFiles.length} JavaScript files for syntax`);console.log(`- Checked ${liveFiles.length} live-surface files for privacy/contact regressions`);console.log(`- Verified ${caseIds.length} case-study navigation and review IDs`);
