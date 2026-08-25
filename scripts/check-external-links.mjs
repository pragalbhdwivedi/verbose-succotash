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

const MAX_ATTEMPTS = 3;
const failures = [];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const retryableStatus = status => status === 408 || status === 425 || status === 429 || status >= 500;

async function request(url) {
  return fetch(url, {
    method: 'GET',
    redirect: 'follow',
    signal: AbortSignal.timeout(12000),
    headers: {
      'user-agent': 'pragalbh-portfolio-link-health/1.1',
      'accept': 'text/html,application/xhtml+xml,application/json;q=0.8,*/*;q=0.5'
    }
  });
}

async function check(url) {
  let lastFailure = '';

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await request(url);
      if (response.status >= 200 && response.status < 400) {
        console.log(`OK   ${response.status} ${url} -> ${response.url}${attempt > 1 ? ` (attempt ${attempt})` : ''}`);
        return;
      }

      lastFailure = `HTTP ${response.status}`;
      const shouldRetry = retryableStatus(response.status) && attempt < MAX_ATTEMPTS;
      console.error(`${shouldRetry ? 'RETRY' : 'FAIL '} ${response.status} ${url} (attempt ${attempt}/${MAX_ATTEMPTS})`);
      if (!shouldRetry) break;
    } catch (error) {
      lastFailure = `${error.name}: ${error.message}`;
      const shouldRetry = attempt < MAX_ATTEMPTS;
      console.error(`${shouldRetry ? 'RETRY' : 'FAIL '} ${url} -> ${lastFailure} (attempt ${attempt}/${MAX_ATTEMPTS})`);
      if (!shouldRetry) break;
    }

    await sleep(750 * attempt);
  }

  failures.push(`${url} -> ${lastFailure}`);
}

for (const url of urls) await check(url);

if (failures.length) {
  console.error(`\n${failures.length} monitored public link(s) failed after up to ${MAX_ATTEMPTS} attempts:`);
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`\nAll ${urls.length} monitored public links are healthy.`);
