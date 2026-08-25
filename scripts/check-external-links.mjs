const urls = [
  'https://pragalbh.in/',
  'https://github.com/pragalbhdwivedi',
  'https://github.com/pragalbhdwivedi/aquapulse',
  'https://github.com/pragalbhdwivedi/k8s-ha-installer',
  'https://github.com/pragalbhdwivedi/maas-configurations',
  'https://github.com/pragalbhdwivedi/bds-web',
  'https://github.com/pragalbhdwivedi/tt-bds',
  'https://github.com/pragalbhdwivedi/signage-vm-autoinstall',
  'https://github.com/pragalbhdwivedi/proxmox-cloud-init-scripts',
  'https://github.com/pragalbhdwivedi/bdsps-ar',
  'https://bdsps.in/'
];

const failures = [];

async function check(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(12000),
      headers: {
        'user-agent': 'pragalbh-portfolio-link-health/1.0',
        'accept': 'text/html,application/xhtml+xml,application/json;q=0.8,*/*;q=0.5'
      }
    });
    if (response.status < 200 || response.status >= 400) {
      failures.push(`${url} -> HTTP ${response.status}`);
      console.error(`FAIL ${response.status} ${url}`);
      return;
    }
    console.log(`OK   ${response.status} ${url} -> ${response.url}`);
  } catch (error) {
    failures.push(`${url} -> ${error.name}: ${error.message}`);
    console.error(`FAIL ${url} -> ${error.name}: ${error.message}`);
  }
}

for (const url of urls) await check(url);

if (failures.length) {
  console.error(`\n${failures.length} monitored public link(s) failed:`);
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`\nAll ${urls.length} monitored public links are healthy.`);
