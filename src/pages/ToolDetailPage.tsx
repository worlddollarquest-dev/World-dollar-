import React from 'react';
import { useRouter, Link } from '../lib/router';
import { store } from '../lib/store';
import { handleAffiliateOutboundClick } from '../lib/affiliate';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';
import { ToolCard } from '../components/ToolCard';
import {
  ExternalLink,
  Check,
  X,
  ShieldCheck,
  Star,
  ArrowRight,
  HelpCircle,
  Sparkles,
  GitCompare,
  BookOpen,
} from 'lucide-react';

interface ToolDetailPageProps {
  slug: string;
}

export const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ slug }) => {
  const tool = store.getToolBySlug(slug);
  const { navigate } = useRouter();

  if (!tool) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-serif-heading text-3xl font-bold text-[#18221D]">
          Tool Not Found
        </h1>
        <p className="mt-2 text-sm text-[#5A6B63]">
          The software profile you requested does not exist or has been retired.
        </p>
        <Link
          to="/tools"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#085536] px-5 py-2.5 text-sm font-semibold text-white"
        >
          <span>Return to Tools Directory</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const allTools = store.getTools();
  const comparisons = store.getComparisons().filter((c) => c.tool_slugs.includes(tool.slug));
  const relatedTools = allTools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#5A6B63]">
        <Link to="/" className="hover:text-[#085536]">Home</Link>
        <span>/</span>
        <Link to="/tools" className="hover:text-[#085536]">Tools</Link>
        <span>/</span>
        <span className="text-[#18221D] font-medium">{tool.name}</span>
      </nav>

      {/* Header Block */}
      <div className="mt-6 rounded-3xl border border-[#E5E0D4] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover border border-[#E5E0D4] bg-white p-1.5 shrink-0 shadow-sm"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-[#085536]/10 px-2.5 py-0.5 text-xs font-bold text-[#085536]">
                  {tool.category}
                </span>
                <span className="text-xs text-[#5A6B63]">{tool.subcategory}</span>
                {tool.featured && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#D97706]/15 px-2 py-0.5 text-[10px] font-bold text-[#B45309]">
                    <Star className="h-3 w-3 fill-[#D97706]" />
                    Editor&apos;s Pick
                  </span>
                )}
              </div>

              <h1 className="font-serif-heading mt-2 text-3xl sm:text-4xl font-extrabold text-[#18221D]">
                {tool.name}
              </h1>

              <p className="mt-2 text-sm sm:text-base text-[#5A6B63] leading-relaxed max-w-2xl">
                {tool.short_description}
              </p>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="sm:text-right shrink-0 flex flex-col gap-2">
            <button
              onClick={(e) => handleAffiliateOutboundClick(tool, 'tool_detail_header', e)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#085536] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#0E7345]"
            >
              <span>Visit {tool.name}</span>
              <ExternalLink className="h-4 w-4" />
            </button>
            <span className="text-[11px] text-[#5A6B63]">
              Official website link
            </span>
          </div>
        </div>

        {/* Conspicuous disclosure right below header */}
        <div className="mt-6 border-t border-[#EAE5D9] pt-4">
          <AffiliateDisclosureNotice compact />
        </div>

        {/* Quick Spec Matrix */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-[#EAE5D9] pt-6 text-xs">
          <div className="rounded-xl bg-[#F6F3EB] p-3">
            <span className="text-[#5A6B63] block">Pricing Model</span>
            <span className="font-bold text-[#18221D] text-sm mt-0.5 block">{tool.pricing_type}</span>
          </div>
          <div className="rounded-xl bg-[#F6F3EB] p-3">
            <span className="text-[#5A6B63] block">Free Plan Available?</span>
            <span className="font-bold text-[#18221D] text-sm mt-0.5 block">
              {tool.free_plan ? 'Yes (Free Tier)' : 'Paid / Trial'}
            </span>
          </div>
          <div className="rounded-xl bg-[#F6F3EB] p-3 col-span-2">
            <span className="text-[#5A6B63] block">Pricing Summary</span>
            <span className="font-bold text-[#18221D] text-xs mt-0.5 block line-clamp-2">
              {tool.pricing_summary}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left 2 Cols: Deep Dive */}
        <div className="lg:col-span-2 space-y-10">
          {/* Section: Overview */}
          <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              Overview & Capabilities
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A6B63]">
              {tool.full_description}
            </p>

            <div className="mt-6 rounded-xl bg-[#F6F3EB] p-4 text-xs sm:text-sm">
              <span className="font-bold text-[#18221D]">Best For: </span>
              <span className="text-[#5A6B63]">{tool.best_for}</span>
            </div>
          </section>

          {/* Section: Key Features */}
          <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              Key Features
            </h2>
            <div className="mt-4 space-y-3">
              {tool.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#18221D]">
                  <div className="mt-0.5 rounded-full bg-[#085536]/10 p-1 text-[#085536] shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Pros & Cons */}
          <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              Honest Pros & Cons
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Pros */}
              <div className="rounded-xl border border-emerald-900/10 bg-emerald-50/40 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                  Strengths
                </h3>
                <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-[#18221D]">
                  {tool.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#085536] shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="rounded-xl border border-amber-900/10 bg-amber-50/40 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  Limitations & Trade-offs
                </h3>
                <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-[#18221D]">
                  {tool.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-[#B45309] shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Editorial Verdict */}
          <section className="rounded-2xl border border-[#085536]/30 bg-[#085536]/5 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
              <Sparkles className="h-4 w-4" />
              <span>WorldDollar.quest Verdict</span>
            </div>
            <h2 className="font-serif-heading mt-2 text-2xl font-bold text-[#18221D]">
              Our Independent Perspective
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#18221D]">
              {tool.editorial_verdict}
            </p>
          </section>

          {/* Section: Comparisons Featuring This Tool */}
          {comparisons.length > 0 && (
            <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
                <GitCompare className="h-4 w-4" />
                <span>Head-to-Head Comparisons</span>
              </div>
              <h2 className="font-serif-heading mt-1 text-2xl font-bold text-[#18221D]">
                Compare {tool.name} with Alternatives
              </h2>

              <div className="mt-4 space-y-3">
                {comparisons.map((c) => (
                  <Link
                    key={c.id}
                    to={`/comparisons/${c.slug}`}
                    className="flex items-center justify-between rounded-xl border border-[#E5E0D4] bg-[#F6F3EB] p-4 hover:border-[#085536]/40 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-sm text-[#18221D]">{c.title}</div>
                      <div className="text-xs text-[#5A6B63] mt-0.5 line-clamp-1">{c.intro}</div>
                    </div>
                    <span className="text-xs font-semibold text-[#085536] shrink-0 ml-3">
                      View Comparison →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Col: Sidebar info & Alternatives */}
        <div className="space-y-8">
          {/* Outbound Box */}
          <div className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-6">
            <h3 className="font-serif-heading text-lg font-bold text-[#18221D]">
              Ready to Explore {tool.name}?
            </h3>
            <p className="mt-2 text-xs text-[#5A6B63] leading-relaxed">
              Visit the official website to create an account, view live pricing tiers, and explore documentation.
            </p>

            <button
              onClick={(e) => handleAffiliateOutboundClick(tool, 'tool_detail_sidebar', e)}
              className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-[#085536] py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0E7345] transition-all"
            >
              <span>Visit Official Site</span>
              <ExternalLink className="h-4 w-4" />
            </button>

            {tool.affiliate_enabled && (
              <div className="mt-3 text-[11px] text-[#5A6B63] flex items-center gap-1.5 justify-center">
                <ShieldCheck className="h-3.5 w-3.5 text-[#085536]" />
                <span>Standard referral link · No cost to you</span>
              </div>
            )}
          </div>

          {/* Alternatives */}
          <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6">
            <h3 className="font-serif-heading text-lg font-bold text-[#18221D]">
              Popular Alternatives
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tool.alternatives.map((alt, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-[#E5E0D4] bg-[#F6F3EB] px-3 py-1 text-xs font-medium text-[#18221D]"
                >
                  {alt}
                </span>
              ))}
            </div>
          </div>

          {/* Related Tools in Category */}
          {relatedTools.length > 0 && (
            <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6">
              <h3 className="font-serif-heading text-lg font-bold text-[#18221D]">
                More in {tool.category}
              </h3>
              <div className="mt-4 space-y-3">
                {relatedTools.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/tools/${rel.slug}`}
                    className="flex items-center gap-3 rounded-xl p-2 hover:bg-[#F6F3EB] transition-colors"
                  >
                    <img
                      src={rel.logo}
                      alt={rel.name}
                      className="h-10 w-10 rounded-lg object-cover border border-[#E5E0D4]"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#18221D]">{rel.name}</div>
                      <div className="text-[11px] text-[#5A6B63] line-clamp-1">{rel.short_description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
