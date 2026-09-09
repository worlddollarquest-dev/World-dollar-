export type ToolCategory =
  | 'AI Tools'
  | 'Freelancing Tools'
  | 'Creator Tools'
  | 'Design Tools'
  | 'Writing Tools'
  | 'Productivity Tools'
  | 'Remote Work Tools'
  | 'Business Tools'
  | 'Website Tools'
  | 'Marketing Tools'
  | 'Payment Tools'
  | 'Learning Tools';

export type PricingType = 'Free' | 'Freemium' | 'Free Trial' | 'Paid';

export interface Tool {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: ToolCategory;
  subcategory: string;
  short_description: string;
  full_description: string;
  website_url: string;
  affiliate_url: string;
  affiliate_enabled: boolean;
  affiliate_program: string;
  commission_notes?: string;
  pricing_summary: string;
  pricing_type: PricingType;
  free_plan: boolean;
  best_for: string;
  features: string[];
  pros: string[];
  cons: string[];
  alternatives: string[];
  editorial_verdict: string;
  rating?: number; // 1-5 editorial score, strictly labeled editorial
  featured: boolean;
  recommended: boolean;
  status: 'published' | 'draft' | 'archived';
  seo_title: string;
  seo_description: string;
  focus_keyword: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface AffiliateLink {
  id: string;
  tool_id?: string;
  tool_name: string;
  slug: string;
  destination_url: string;
  affiliate_url: string;
  is_active: boolean;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  total_clicks: number;
  last_clicked_at?: string;
}

export interface ComparisonItem {
  name: string;
  slug: string;
  logo: string;
  rating: number;
  pricing: string;
  best_for: string;
  key_perk: string;
}

export interface Comparison {
  id: string;
  title: string;
  slug: string;
  intro: string;
  tool_slugs: string[];
  items: ComparisonItem[];
  feature_matrix: {
    feature: string;
    item1_val: string;
    item2_val: string;
    notes?: string;
  }[];
  pricing_notes: string;
  best_for_each: {
    tool: string;
    audience: string;
    reason: string;
  }[];
  pros_cons: {
    tool: string;
    pros: string[];
    cons: string[];
  }[];
  verdict: string;
  faq: { question: string; answer: string }[];
  seo_title: string;
  seo_description: string;
  focus_keyword: string;
  last_updated: string;
}

export interface Review {
  id: string;
  title: string;
  slug: string;
  tool_slug: string;
  tool_name: string;
  what_it_is: string;
  who_its_for: string;
  key_features: string[];
  pricing_breakdown: { tier: string; price: string; details: string }[];
  strengths: string[];
  limitations: string[];
  best_use_cases: string[];
  alternatives: { name: string; slug: string; why: string }[];
  who_should_skip: string;
  editorial_verdict: string;
  faq: { question: string; answer: string }[];
  last_updated: string;
  seo_title: string;
  seo_description: string;
}

export type ProductType =
  | 'Checklist'
  | 'Template'
  | 'PDF'
  | 'ZIP'
  | 'Notion Template'
  | 'Spreadsheet'
  | 'Bundle';

export interface DigitalProduct {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  cover_image: string;
  price: number;
  sale_price?: number;
  currency: string;
  product_type: ProductType;
  digital_file_name: string;
  file_size: string;
  status: 'published' | 'draft';
  featured: boolean;
  category: string;
  tags: string[];
  whats_included: string[];
  who_its_for: string[];
  preview_details: string[];
  faq: { question: string; answer: string }[];
  seo_title: string;
  seo_description: string;
  created_at: string;
  updated_at: string;
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string;
  is_free: boolean;
  format: string;
  file_name: string;
  download_count: number;
  recommended_for: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  read_time: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  published_at: string;
  updated_at: string;
  excerpt: string;
  content: string[]; // array of paragraphs or markdown sections
  featured_image: string;
  related_tools?: string[]; // tool slugs
  related_comparisons?: string[];
  related_products?: string[];
  faq?: { question: string; answer: string }[];
  seo_title: string;
  seo_description: string;
  focus_keyword: string;
}

export interface LeadMagnet {
  id: string;
  title: string;
  slug: string;
  description: string;
  file_name: string;
  downloads_count: number;
  highlight: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  source: string;
  campaign?: string;
  consent_timestamp: string;
  status: 'active' | 'unsubscribed';
}

export interface Order {
  id: string;
  order_number: string;
  customer_email: string;
  product_id: string;
  product_name: string;
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'refunded';
  download_token: string;
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  event_name:
    | 'page_view'
    | 'tool_view'
    | 'affiliate_click'
    | 'comparison_view'
    | 'review_view'
    | 'newsletter_signup'
    | 'lead_magnet_signup'
    | 'product_view'
    | 'product_checkout_start'
    | 'product_purchase'
    | 'resource_download'
    | 'community_join'
    | 'cta_click';
  metadata: Record<string, string | number | boolean | undefined>;
  timestamp: string;
}

export interface SiteSettings {
  affiliate_disclosure_text: string;
  affiliate_tracking_enabled: boolean;
  ads_enabled: boolean;
  sponsorships_enabled: boolean;
  membership_waitlist_enabled: boolean;
}
