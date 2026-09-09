import {
  Tool,
  AffiliateLink,
  Comparison,
  Review,
  DigitalProduct,
  Resource,
  Article,
  LeadMagnet,
  NewsletterSubscriber,
  Order,
  AnalyticsEvent,
  SiteSettings,
} from '../types';
import {
  INITIAL_TOOLS,
  INITIAL_AFFILIATE_LINKS,
  INITIAL_COMPARISONS,
  INITIAL_REVIEWS,
  INITIAL_PRODUCTS,
  INITIAL_RESOURCES,
  INITIAL_LEAD_MAGNETS,
  INITIAL_ARTICLES,
  INITIAL_SETTINGS,
} from '../data/initialData';

const STORAGE_KEYS = {
  TOOLS: 'wd_tools_v1',
  AFFILIATE_LINKS: 'wd_affiliate_links_v1',
  COMPARISONS: 'wd_comparisons_v1',
  REVIEWS: 'wd_reviews_v1',
  PRODUCTS: 'wd_products_v1',
  RESOURCES: 'wd_resources_v1',
  LEAD_MAGNETS: 'wd_lead_magnets_v1',
  ARTICLES: 'wd_articles_v1',
  SUBSCRIBERS: 'wd_subscribers_v1',
  ORDERS: 'wd_orders_v1',
  EVENTS: 'wd_events_v1',
  SETTINGS: 'wd_settings_v1',
};

type Listener = () => void;
const listeners = new Set<Listener>();

function notifyListeners() {
  listeners.forEach((l) => l());
}

export function subscribeToStore(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getFromStorage<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    return JSON.parse(item);
  } catch (e) {
    console.warn(`Error reading key ${key} from localStorage:`, e);
    return fallback;
  }
}

function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    notifyListeners();
  } catch (e) {
    console.warn(`Error saving key ${key} to localStorage:`, e);
  }
}

// Store API
export const store = {
  // Site Settings
  getSettings(): SiteSettings {
    return getFromStorage<SiteSettings>(STORAGE_KEYS.SETTINGS, INITIAL_SETTINGS);
  },
  updateSettings(settings: Partial<SiteSettings>) {
    const current = this.getSettings();
    saveToStorage(STORAGE_KEYS.SETTINGS, { ...current, ...settings });
  },

  // Tools
  getTools(): Tool[] {
    return getFromStorage<Tool[]>(STORAGE_KEYS.TOOLS, INITIAL_TOOLS);
  },
  getToolBySlug(slug: string): Tool | undefined {
    return this.getTools().find((t) => t.slug === slug);
  },
  saveTool(tool: Tool) {
    const tools = this.getTools();
    const idx = tools.findIndex((t) => t.id === tool.id || t.slug === tool.slug);
    if (idx >= 0) {
      tools[idx] = { ...tool, updated_at: new Date().toISOString().split('T')[0] };
    } else {
      tools.unshift({
        ...tool,
        id: tool.id || `tool-${Date.now()}`,
        created_at: new Date().toISOString().split('T')[0],
        updated_at: new Date().toISOString().split('T')[0],
      });
    }
    saveToStorage(STORAGE_KEYS.TOOLS, tools);
  },
  deleteTool(id: string) {
    const tools = this.getTools().filter((t) => t.id !== id);
    saveToStorage(STORAGE_KEYS.TOOLS, tools);
  },

  // Affiliate Links
  getAffiliateLinks(): AffiliateLink[] {
    return getFromStorage<AffiliateLink[]>(STORAGE_KEYS.AFFILIATE_LINKS, INITIAL_AFFILIATE_LINKS);
  },
  getAffiliateLinkBySlug(slug: string): AffiliateLink | undefined {
    return this.getAffiliateLinks().find((a) => a.slug === slug);
  },
  saveAffiliateLink(link: AffiliateLink) {
    const links = this.getAffiliateLinks();
    const idx = links.findIndex((l) => l.id === link.id || l.slug === link.slug);
    if (idx >= 0) {
      links[idx] = link;
    } else {
      links.unshift({ ...link, id: link.id || `aff-${Date.now()}` });
    }
    saveToStorage(STORAGE_KEYS.AFFILIATE_LINKS, links);
  },
  recordAffiliateClick(toolSlug: string, placement: string = 'general') {
    const links = this.getAffiliateLinks();
    const idx = links.findIndex((l) => l.slug === toolSlug);
    if (idx >= 0) {
      links[idx].total_clicks = (links[idx].total_clicks || 0) + 1;
      links[idx].last_clicked_at = new Date().toISOString();
      saveToStorage(STORAGE_KEYS.AFFILIATE_LINKS, links);
    }
    this.trackEvent('affiliate_click', {
      tool_slug: toolSlug,
      placement,
      source: 'web',
    });
  },

  // Comparisons
  getComparisons(): Comparison[] {
    return getFromStorage<Comparison[]>(STORAGE_KEYS.COMPARISONS, INITIAL_COMPARISONS);
  },
  getComparisonBySlug(slug: string): Comparison | undefined {
    return this.getComparisons().find((c) => c.slug === slug);
  },
  saveComparison(comp: Comparison) {
    const comps = this.getComparisons();
    const idx = comps.findIndex((c) => c.id === comp.id || c.slug === comp.slug);
    if (idx >= 0) {
      comps[idx] = { ...comp, last_updated: new Date().toISOString().split('T')[0] };
    } else {
      comps.unshift({ ...comp, id: comp.id || `comp-${Date.now()}` });
    }
    saveToStorage(STORAGE_KEYS.COMPARISONS, comps);
  },

  // Reviews
  getReviews(): Review[] {
    return getFromStorage<Review[]>(STORAGE_KEYS.REVIEWS, INITIAL_REVIEWS);
  },
  getReviewBySlug(slug: string): Review | undefined {
    return this.getReviews().find((r) => r.slug === slug);
  },
  saveReview(review: Review) {
    const revs = this.getReviews();
    const idx = revs.findIndex((r) => r.id === review.id || r.slug === review.slug);
    if (idx >= 0) {
      revs[idx] = { ...review, last_updated: new Date().toISOString().split('T')[0] };
    } else {
      revs.unshift({ ...review, id: review.id || `rev-${Date.now()}` });
    }
    saveToStorage(STORAGE_KEYS.REVIEWS, revs);
  },

  // Digital Products
  getProducts(): DigitalProduct[] {
    return getFromStorage<DigitalProduct[]>(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
  },
  getProductBySlug(slug: string): DigitalProduct | undefined {
    return this.getProducts().find((p) => p.slug === slug);
  },
  saveProduct(product: DigitalProduct) {
    const prods = this.getProducts();
    const idx = prods.findIndex((p) => p.id === product.id || p.slug === product.slug);
    if (idx >= 0) {
      prods[idx] = { ...product, updated_at: new Date().toISOString().split('T')[0] };
    } else {
      prods.unshift({
        ...product,
        id: product.id || `prod-${Date.now()}`,
        created_at: new Date().toISOString().split('T')[0],
        updated_at: new Date().toISOString().split('T')[0],
      });
    }
    saveToStorage(STORAGE_KEYS.PRODUCTS, prods);
  },

  // Resources
  getResources(): Resource[] {
    return getFromStorage<Resource[]>(STORAGE_KEYS.RESOURCES, INITIAL_RESOURCES);
  },
  saveResource(resource: Resource) {
    const list = this.getResources();
    const idx = list.findIndex((r) => r.id === resource.id);
    if (idx >= 0) list[idx] = resource;
    else list.unshift(resource);
    saveToStorage(STORAGE_KEYS.RESOURCES, list);
  },

  // Lead Magnets
  getLeadMagnets(): LeadMagnet[] {
    return getFromStorage<LeadMagnet[]>(STORAGE_KEYS.LEAD_MAGNETS, INITIAL_LEAD_MAGNETS);
  },

  // Articles / Blog
  getArticles(): Article[] {
    return getFromStorage<Article[]>(STORAGE_KEYS.ARTICLES, INITIAL_ARTICLES);
  },
  getArticleBySlug(slug: string): Article | undefined {
    return this.getArticles().find((a) => a.slug === slug);
  },
  saveArticle(article: Article) {
    const arts = this.getArticles();
    const idx = arts.findIndex((a) => a.id === article.id || a.slug === article.slug);
    if (idx >= 0) arts[idx] = article;
    else arts.unshift(article);
    saveToStorage(STORAGE_KEYS.ARTICLES, arts);
  },

  // Newsletter Subscribers
  getSubscribers(): NewsletterSubscriber[] {
    return getFromStorage<NewsletterSubscriber[]>(STORAGE_KEYS.SUBSCRIBERS, []);
  },
  addSubscriber(email: string, source: string = 'homepage', campaign?: string): boolean {
    if (!email || !email.includes('@')) return false;
    const subs = this.getSubscribers();
    if (subs.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return true; // already subscribed
    }
    const newSub: NewsletterSubscriber = {
      id: `sub-${Date.now()}`,
      email: email.trim().toLowerCase(),
      source,
      campaign,
      consent_timestamp: new Date().toISOString(),
      status: 'active',
    };
    subs.unshift(newSub);
    saveToStorage(STORAGE_KEYS.SUBSCRIBERS, subs);
    this.trackEvent('newsletter_signup', { email: newSub.email, source, campaign });
    return true;
  },

  // Orders
  getOrders(): Order[] {
    return getFromStorage<Order[]>(STORAGE_KEYS.ORDERS, []);
  },
  createOrder(data: {
    product: DigitalProduct;
    customerEmail: string;
  }): Order {
    const orders = this.getOrders();
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      order_number: `WDQ-${Math.floor(100000 + Math.random() * 900000)}`,
      customer_email: data.customerEmail,
      product_id: data.product.id,
      product_name: data.product.name,
      amount: data.product.sale_price || data.product.price,
      currency: data.product.currency,
      status: 'completed',
      download_token: `dl_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    orders.unshift(newOrder);
    saveToStorage(STORAGE_KEYS.ORDERS, orders);
    this.trackEvent('product_purchase', {
      order_id: newOrder.id,
      product_name: newOrder.product_name,
      amount: newOrder.amount,
      currency: newOrder.currency,
    });
    return newOrder;
  },

  // Analytics Events
  getEvents(): AnalyticsEvent[] {
    return getFromStorage<AnalyticsEvent[]>(STORAGE_KEYS.EVENTS, []);
  },
  trackEvent(
    eventName: AnalyticsEvent['event_name'],
    metadata: Record<string, string | number | boolean | undefined> = {}
  ) {
    const events = this.getEvents();
    const newEvent: AnalyticsEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      event_name: eventName,
      metadata,
      timestamp: new Date().toISOString(),
    };
    // Keep last 500 events
    const updated = [newEvent, ...events].slice(0, 500);
    saveToStorage(STORAGE_KEYS.EVENTS, updated);
  },

  // Reset to initial mock database
  resetToDefaults() {
    localStorage.removeItem(STORAGE_KEYS.TOOLS);
    localStorage.removeItem(STORAGE_KEYS.AFFILIATE_LINKS);
    localStorage.removeItem(STORAGE_KEYS.COMPARISONS);
    localStorage.removeItem(STORAGE_KEYS.REVIEWS);
    localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
    localStorage.removeItem(STORAGE_KEYS.RESOURCES);
    localStorage.removeItem(STORAGE_KEYS.LEAD_MAGNETS);
    localStorage.removeItem(STORAGE_KEYS.ARTICLES);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    notifyListeners();
  },
};
