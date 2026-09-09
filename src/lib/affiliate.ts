import React from 'react';
import { Tool } from '../types';
import { store } from './store';

interface GetAffiliateUrlOptions {
  tool: Tool;
  placement?: string;
  campaign?: string;
  source?: string;
  medium?: string;
}

export function getAffiliateUrl({
  tool,
  placement = 'editorial_cta',
  campaign = 'tools_directory',
  source = 'worlddollar',
  medium = 'affiliate',
}: GetAffiliateUrlOptions): string {
  // If affiliate mode is NOT enabled or verified by admin, ALWAYS use the official direct outbound URL
  if (!tool.affiliate_enabled || !tool.affiliate_url) {
    return tool.website_url;
  }

  // Check if there is an admin affiliate link override
  const customLink = store.getAffiliateLinkBySlug(tool.slug);
  if (customLink && !customLink.is_active) {
    return tool.website_url;
  }

  const baseUrl = customLink?.affiliate_url || tool.affiliate_url;

  try {
    const url = new URL(baseUrl);
    url.searchParams.set('utm_source', source);
    url.searchParams.set('utm_medium', medium);
    url.searchParams.set('utm_campaign', campaign || tool.slug);
    url.searchParams.set('utm_content', placement);
    return url.toString();
  } catch (e) {
    // If URL parsing fails, append query parameters simply
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign || tool.slug}&utm_content=${placement}`;
  }
}

export function handleAffiliateOutboundClick(
  tool: Tool,
  placement: string = 'general',
  e?: React.MouseEvent
) {
  store.recordAffiliateClick(tool.slug, placement);
  const targetUrl = getAffiliateUrl({ tool, placement });

  // If opening external window
  window.open(targetUrl, '_blank', 'noopener,noreferrer');
  if (e) {
    e.preventDefault();
  }
}
