// Count every page load as a visit, per the lesson owner's counting rule.
// Per-page PV API: https://github.com/soxft/busuanzi/wiki/api
// Use a canonical URL so query strings and index.html share this lesson's counts.
(() => {
  const panel = document.getElementById('visitor-stats');
  const visitors = document.getElementById('visitor-count');
  const status = document.getElementById('visitor-status');
  if (!panel || !visitors || !status || panel.dataset.requested) return;
  panel.dataset.requested = 'true';

  const pageUrl = 'https://yu-husn.github.io/fuchun-reading-pages/';
  const published = location.origin === 'https://yu-husn.github.io'
    && /^\/fuchun-reading-pages\/(?:index\.html)?$/.test(location.pathname);
  const headers = { 'x-bsz-referer': pageUrl };

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
    if (!result.success || !counts || !Number.isSafeInteger(counts.page_pv) || counts.page_pv < 0) {
      throw new Error('Invalid visitor statistics');
    }
    visitors.textContent = counts.page_pv.toLocaleString('zh-TW');
    status.textContent = '自 2026/11/22 起統計；每次開啟或重新整理本頁，計為一次到訪。';
    panel.dataset.state = 'ready';
  }).catch(() => {
    status.textContent = '到訪統計暫時無法載入，仍可正常閱讀與作答。';
    panel.dataset.state = 'unavailable';
  }).finally(() => {
    clearTimeout(timer);
    panel.setAttribute('aria-busy', 'false');
  });
})();
