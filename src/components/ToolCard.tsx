import React from 'react';
import { Tool } from '../types';
import { Link } from '../lib/router';
import { handleAffiliateOutboundClick } from '../lib/affiliate';
import { ExternalLink, Check, Star, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, featured = false }) => {
  // Category-specific visual accents (subtle, elegant, not rainbow)
  const getCategoryTheme = (cat: string) => {
    const lower = cat.toLowerCase();
    if (lower.includes('ai')) {
      return {
        badgeBg: 'bg-purple-50 text-purple-800 border-purple-200/60',
        dot: 'bg-purple-600',
        cardBorder: 'hover:border-purple-400/50',
        glow: 'hover:shadow-[0_8px_24px_-8px_rgba(147,51,234,0.12)]',
      };
    }
    if (lower.includes('payment') || lower.includes('finance') || lower.includes('business')) {
      return {
        badgeBg: 'bg-amber-50 text-amber-800 border-amber-200/60',
        dot: 'bg-amber-600',
        cardBorder: 'hover:border-amber-400/50',
        glow: 'hover:shadow-[0_8px_24px_-8px_rgba(217,119,6,0.12)]',
      };
    }
    if (lower.includes('design') || lower.includes('creative')) {
      return {
        badgeBg: 'bg-rose-50 text-rose-800 border-rose-200/60',
        dot: 'bg-rose-600',
        cardBorder: 'hover:border-rose-400/50',
        glow: 'hover:shadow-[0_8px_24px_-8px_rgba(244,63,94,0.12)]',
      };
    }
    if (lower.includes('remote') || lower.includes('career')) {
      return {
        badgeBg: 'bg-sky-50 text-sky-800 border-sky-200/60',
        dot: 'bg-sky-600',
        cardBorder: 'hover:border-sky-400/50',
        glow: 'hover:shadow-[0_8px_24px_-8px_rgba(2,132,199,0.12)]',
      };
    }
    // Default / Freelancing
    return {
      badgeBg: 'bg-emerald-50 text-[#085536] border-emerald-200/60',
      dot: 'bg-[#085536]',
      cardBorder: 'hover:border-[#085536]/40',
      glow: 'hover:shadow-[0_8px_24px_-8px_rgba(8,85,54,0.12)]',
    };
  };

  const theme = getCategoryTheme(tool.category);

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-[#EAE5D9] bg-white transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(24,34,29,0.04)] ${
        theme.cardBorder
      } ${theme.glow} hover:-translate-y-1 p-5 sm:p-6`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${theme.badgeBg}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${theme.dot}`} />
            {tool.category}
          </span>

          <div className="flex items-center gap-1.5">
            {tool.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-2 py-0.5 text-[10px] font-bold text-[#8A6700]">
                <Star className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                Curated
              </span>
            )}
            <span className="text-[11px] font-semibold text-[#5A6B63] bg-[#F6F3EB] px-2 py-0.5 rounded-md">
              {tool.pricing_type}
            </span>
          </div>
        </div>

        {/* Floating Logo & Header */}
        <div className="mt-4 flex items-center gap-3.5">
          <div className="relative">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="h-12 w-12 rounded-xl object-cover border border-[#E5E0D4] bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div>
            <Link
              to={`/tools/${tool.slug}`}
              className="font-serif-heading text-lg font-bold text-[#18221D] group-hover:text-[#085536] transition-colors"
            >
              {tool.name}
            </Link>
            <p className="text-xs text-[#5A6B63]">{tool.subcategory}</p>
          </div>
        </div>

        {/* Short Description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5A6B63] line-clamp-2">
          {tool.short_description}
        </p>

        {/* Best For Section */}
        <div className="mt-4 rounded-xl bg-[#FDFBF7] border border-[#EAE5D9]/70 p-3 text-xs">
          <span className="font-semibold text-[#18221D]">Best for: </span>
          <span className="text-[#5A6B63]">{tool.best_for}</span>
        </div>

        {/* Key Features Pill List */}
        <div className="mt-3 space-y-1.5">
          {tool.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#18221D]">
              <Check className="h-3.5 w-3.5 text-[#085536] shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer / Actions */}
      <div className="mt-6 border-t border-[#EAE5D9] pt-4">
        {tool.affiliate_enabled && (
          <div className="mb-2 text-[10px] text-[#5A6B63] flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-[#085536]" />
            <span>Eligible referral link · No extra cost</span>
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/tools/${tool.slug}`}
            className="text-xs font-semibold text-[#5A6B63] hover:text-[#085536] transition-colors py-2 px-1"
          >
            Review & Verdict →
          </Link>

          <button
            onClick={(e) => handleAffiliateOutboundClick(tool, 'tool_card', e)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#085536] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#0E7345] hover:-translate-y-0.5"
          >
            <span>View Tool</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
