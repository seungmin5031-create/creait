(function () {
  const PORTFOLIO_API = '/api/portfolio';
  const CATEGORY_ORDER = ['commercial', 'brand', 'promotion', 'youtube'];
  const CATEGORY_LABELS = {
    all: 'ALL',
    commercial: 'Commercial',
    brand: 'Brand',
    promotion: 'Promotion',
    youtube: 'YouTube'
  };
  const BG_KEYS = ['bg-1', 'bg-2', 'bg-3', 'bg-4', 'bg-5', 'bg-6', 'bg-7', 'bg-8'];

  function slugify(value = '') {
    return String(value)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9가-힣]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'item';
  }

  function normalizeCredits(credits, item) {
    if (credits && typeof credits === 'object' && !Array.isArray(credits)) {
      return Object.fromEntries(
        Object.entries(credits)
          .map(([key, value]) => [String(key || '').trim(), String(value || '').trim()])
          .filter(([key, value]) => key && value)
      );
    }

    const fallback = {
      Client: item.client || 'CREAIT',
      Platform: item.videoUrl ? 'YouTube' : 'Archive',
      Type: item.displayCat || item.cat || 'Portfolio'
    };

    return Object.fromEntries(Object.entries(fallback).filter(([, value]) => Boolean(value)));
  }

  function normalizeItem(item = {}, index = 0) {
    const rawCat = String(item.cat || 'promotion').trim().toLowerCase();
    const cat = CATEGORY_ORDER.includes(rawCat) ? rawCat : 'promotion';
    const title = String(item.title || `Untitled ${index + 1}`).trim();
    const client = String(item.client || 'CREAIT').trim();

    const normalized = {
      id: String(item.id || `${slugify(title)}-${index + 1}`),
      featured: typeof item.featured === 'boolean' ? item.featured : index < 8,
      cat,
      displayCat: String(item.displayCat || '').trim() || '',
      client,
      title,
      year: String(item.year || '').trim() || String(new Date().getFullYear()),
      duration: String(item.duration || '').trim() || '00:00',
      format: String(item.format || '').trim() || '16:9',
      bg: BG_KEYS.includes(item.bg) ? item.bg : BG_KEYS[index % BG_KEYS.length],
      thumb: String(item.thumb || '').trim(),
      videoUrl: String(item.videoUrl || '').trim(),
      desc: String(item.desc || '').trim(),
      gallery: Array.isArray(item.gallery) ? item.gallery.map((src) => String(src || '').trim()).filter(Boolean) : []
    };

    normalized.credits = normalizeCredits(item.credits, normalized);
    return normalized;
  }

  function normalizeCollection(items) {
    return Array.isArray(items) ? items.map((item, index) => normalizeItem(item, index)) : [];
  }

  async function loadPortfolioData() {
    try {
      const response = await fetch(`${PORTFOLIO_API}?ts=${Date.now()}`, { cache: 'no-store' });
      if (response.ok) {
        const payload = await response.json().catch(() => null);
        if (Array.isArray(payload?.items) && payload.items.length) {
          return normalizeCollection(payload.items);
        }
      }
    } catch {}

    return normalizeCollection(window.portfolioData || []);
  }

  function getFeaturedItems(items, limit = 8) {
    return normalizeCollection(items).filter((item) => item.featured !== false).slice(0, limit);
  }

  function getCategoryTabs(items) {
    const normalized = normalizeCollection(items);
    const used = CATEGORY_ORDER.filter((cat) => normalized.some((item) => item.cat === cat));
    return ['all', ...used];
  }

  function getCategoryLabel(cat) {
    return CATEGORY_LABELS[cat] || String(cat || '').toUpperCase();
  }

  function createBlankItem(index = 0) {
    return normalizeItem(
      {
        featured: false,
        cat: 'promotion',
        displayCat: 'PROMOTION',
        client: '새 프로젝트',
        title: `새 포트폴리오 ${index + 1}`,
        year: String(new Date().getFullYear()),
        duration: '00:30',
        format: '16:9',
        desc: '',
        thumb: '',
        videoUrl: '',
        credits: {
          Client: '새 프로젝트',
          Platform: 'Archive',
          Type: 'Portfolio'
        }
      },
      index
    );
  }

  window.CreaitPortfolioStore = {
    CATEGORY_ORDER,
    CATEGORY_LABELS,
    BG_KEYS,
    normalizeItem,
    normalizeCollection,
    loadPortfolioData,
    getFeaturedItems,
    getCategoryTabs,
    getCategoryLabel,
    createBlankItem
  };
})();
