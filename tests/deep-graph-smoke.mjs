import { chromium } from 'playwright';
import assert from 'node:assert/strict';
const url=process.env.PORTFOLIO_TEST_URL||'http://127.0.0.1:4173/';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
try{
  await page.goto(url,{waitUntil:'domcontentloaded'});
  await page.locator('#network').click({position:{x:10,y:10}});
  await page.waitForFunction(()=>window.__deepGraph,{timeout:10000});
  const m=await page.evaluate(()=>window.__deepGraph);
  assert.ok(m.nodes>=180,`expected a large capability graph, got ${m.nodes} nodes`);
  assert.ok(m.skills>=100,`expected at least 100 source-backed skill nodes, got ${m.skills}`);
  assert.ok(m.maxDepth>=10,`expected graph depth >=10, got ${m.maxDepth}`);
  assert.equal(m.tiers,10,'deep exploration trail must retain ten explicit tiers');
  assert.ok(m.minChoices>=3,`every continuing deep tier must expose at least three choices, got ${m.minChoices}`);
  assert.ok(m.categories>=20,`expected broad category coverage from SKILLS.md, got ${m.categories}`);
  assert.ok(m.crossLinks>=30,`expected substantial lateral interconnectivity, got ${m.crossLinks}`);
  assert.equal(m.navigation,true,'deep graph navigation layer must be active');

  const search=page.locator('#searchInput');
  const drawer=page.locator('#drawer');
  await search.fill('VLAN planning');
  const hit=page.locator('#searchResults button').filter({hasText:'VLAN planning'}).first();
  await hit.waitFor({state:'visible'});
  await hit.click();
  await assert.doesNotReject(()=>drawer.getByText('What it is',{exact:true}).waitFor());
  await assert.doesNotReject(()=>drawer.getByText('Plain-English example',{exact:true}).waitFor());
  await assert.doesNotReject(()=>drawer.getByText('Connected systems',{exact:true}).waitFor());
  await assert.doesNotReject(()=>drawer.getByText('Path',{exact:true}).waitFor());
  await assert.doesNotReject(()=>drawer.getByRole('button',{name:/Back one level/i}).waitFor());
  const text=await drawer.innerText();
  assert.match(text,/logical separation inside one physical network/i);
  assert.match(text,/LEVEL\s+\d+/i);
  const crumbs=drawer.locator('[data-graph-crumb]');
  assert.ok(await crumbs.count()>=3,'breadcrumb should expose multiple ancestor levels');

  const connected=drawer.locator('[data-graph-jump]');
  assert.ok(await connected.count()>=1,'connected systems must be clickable');
  const beforeTitle=await drawer.locator('h2').innerText();
  await connected.first().click();
  const afterTitle=await drawer.locator('h2').innerText();
  assert.notEqual(afterTitle,beforeTitle,'lateral connected-system jump should change selected node');
  await assert.doesNotReject(()=>drawer.getByRole('button',{name:/Return to previous/i}).waitFor());
  await drawer.getByRole('button',{name:/Return to previous/i}).click();
  assert.equal(await drawer.locator('h2').innerText(),beforeTitle,'return to previous should restore lateral source node');

  const beforeBack=await drawer.locator('h2').innerText();
  await drawer.getByRole('button',{name:/Back one level/i}).click();
  assert.notEqual(await drawer.locator('h2').innerText(),beforeBack,'back one level should navigate to parent');

  await search.fill('RFID numbering and credential workflows');
  const rfid=page.locator('#searchResults button').filter({hasText:'RFID numbering'}).first();
  await rfid.waitFor({state:'visible'});
  await rfid.click();
  const rfidText=await drawer.innerText();
  assert.match(rfidText,/radio credential/i);
  assert.match(rfidText,/Identity & Access|Physical Access Control|Smart Classroom/i);
  console.log(`Deep graph navigation smoke passed: ${m.nodes} nodes · ${m.skills} skills · depth ${m.maxDepth} · ${m.crossLinks} cross-links`);
} finally {await browser.close();}
