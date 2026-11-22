// Per-page UV/PV API: https://github.com/soxft/busuanzi/wiki/api
// Use a canonical URL so query strings and index.html share this lesson's counts.
(() => {
  const panel = document.getElementById('visitor-stats');
  const visitors = document.getElementById('visitor-count');
  const views = document.getElementById('page-view-count');
  const status = document.getElementById('visitor-status');
  if (!panel || !visitors || !views || !status || panel.dataset.requested) return;
  panel.dataset.requested = 'true';

  const pageUrl = 'https://yu-husn.github.io/fuchun-reading-pages/';
  const published = location.origin === 'https://yu-husn.github.io'
    && /^\/fuchun-reading-pages\/(?:index\.html)?$/.test(location.pathname);
  const identityKey = 'fuchun-visitor-identity-v1';
  const headers = { 'x-bsz-referer': pageUrl };
  try {
    const identity = localStorage.getItem(identityKey);
    if (identity) headers.Authorization = 'Bearer ' + identity;
  } catch {}

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  // Local previews read the existing counts without adding testing visits.
  fetch('https://busuanzi.9420.ltd/api', {
    method: published ? 'POST' : 'GET',
    headers,
    signal: controller.signal,
    credentials: 'omit',
    cache: 'no-store'
  }).then(async response => {
    if (!response.ok) throw new Error('Visitor statistics unavailable');
    const result = await response.json();
    const counts = result.data;
    if (!result.success || !counts || ![counts.page_uv, counts.page_pv]
      .every(value => Number.isSafeInteger(value) && value >= 0)) {
      throw new Error('Invalid visitor statistics');
    }
    const identity = response.headers.get('Set-Bsz-Identity');
    if (identity) {
      try { localStorage.setItem(identityKey, identity); } catch {}
    }
    visitors.textContent = counts.page_uv.toLocaleString('zh-TW');
    views.textContent = counts.page_pv.toLocaleString('zh-TW');
    status.textContent = '自 2026/11/22 起統計；到訪人數為估計值，重新整理會增加瀏覽次數。';
    panel.dataset.state = 'ready';
  }).catch(() => {
    status.textContent = '到訪統計暫時無法載入，仍可正常閱讀與作答。';
    panel.dataset.state = 'unavailable';
  }).finally(() => {
    clearTimeout(timer);
    panel.setAttribute('aria-busy', 'false');
  });
})();
