import React from 'react';
import { useRouter, Link } from '../lib/router';
import { store } from '../lib/store';
import { handleAffiliateOutboundClick } from '../lib/affiliate';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';
import {
  GitCompare,
  Check,
  X,
  Star,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

interface ComparisonDetailPageProps {
  slug: string;
}

export const ComparisonDetailPage: React.FC<ComparisonDetailPageProps> = ({ slug }) => {
  const comparison = store.getComparisonBySlug(slug);

  if (!comparison) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-serif-heading text-3xl font-bold text-[#18221D]">
          Comparison Not Found
        </h1>
        <p className="mt-2 text-sm text-[#5A6B63]">
          The comparison breakdown you requested does not exist.
        </p>
        <Link
          to="/comparisons"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#085536] px-5 py-2.5 text-sm font-semibold text-white"
        >
          <span>View All Comparisons</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const tool1 = store.getToolBySlug(comparison.tool_slugs[0]);
  const tool2 = store.getToolBySlug(comparison.tool_slugs[1]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#5A6B63]">
        <Link to="/" className="hover:text-[#085536]">Home</Link>
        <span>/</span>
        <Link to="/comparisons" className="hover:text-[#085536]">Comparisons</Link>
        <span>/</span>
        <span className="text-[#18221D] font-medium">{comparison.title}</span>
      </nav>

      {/* Header */}
      <div className="mt-6 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <GitCompare className="h-3.5 w-3.5" />
          <span>Independent Platform Teardown</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D] leading-tight">
          {comparison.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          {comparison.intro}
        </p>

        <div className="mt-4 text-xs text-[#5A6B63]">
          Last updated: <span className="font-medium text-[#18221D]">{comparison.last_updated}</span>
        </div>
      </div>

      <div className="mt-6">
        <AffiliateDisclosureNotice compact />
      </div>

      {/* Side-by-Side Quick Summary Cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {comparison.items.map((item, idx) => {
          const associatedTool = store.getToolBySlug(item.slug);
          return (
            <div
              key={idx}
              className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-12 w-12 rounded-xl object-cover border border-[#E5E0D4] bg-white p-1 shrink-0"
                  />
                  <div>
                    <h3 className="font-serif-heading text-xl font-bold text-[#18221D]">
                      {item.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#085536]">
                      {item.key_perk}
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="rounded-xl bg-[#F6F3EB] p-3">
                    <span className="font-bold text-[#18221D]">Pricing: </span>
                    <span className="text-[#5A6B63]">{item.pricing}</span>
                  </div>
                  <div className="rounded-xl bg-[#F6F3EB] p-3">
                    <span className="font-bold text-[#18221D]">Best for: </span>
                    <span className="text-[#5A6B63]">{item.best_for}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center justify-between gap-3">
                <Link
                  to={`/tools/${item.slug}`}
                  className="text-xs font-semibold text-[#5A6B63] hover:text-[#085536]"
                >
                  View Profile →
                </Link>
                {associatedTool && (
                  <button
                    onClick={(e) => handleAffiliateOutboundClick(associatedTool, 'comparison_quick_card', e)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#085536] px-4 py-2 text-xs font-bold text-white hover:bg-[#0E7345] transition-colors"
                  >
                    <span>Visit {item.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Matrix Table (Horizontally Scrollable on Mobile) */}
      <div className="mt-12">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          Feature & Workflow Matrix
        </h2>
        <p className="mt-1 text-sm text-[#5A6B63]">
          Direct feature-by-feature evaluation based on practical daily usage.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] shadow-sm">
          <table className="w-full min-w-[620px] text-left text-xs sm:text-sm">
            <thead className="border-b border-[#EAE5D9] bg-[#F6F3EB] text-[#18221D]">
              <tr>
                <th className="py-3.5 px-4 font-bold">Feature / Capability</th>
                <th className="py-3.5 px-4 font-bold text-[#085536]">{comparison.items[0]?.name}</th>
                <th className="py-3.5 px-4 font-bold text-[#085536]">{comparison.items[1]?.name}</th>
                <th className="py-3.5 px-4 font-bold text-[#5A6B63]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5D9]">
              {comparison.feature_matrix.map((row, i) => (
                <tr key={i} className="hover:bg-[#F6F3EB]/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#18221D]">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 text-[#18221D]">
                    {row.item1_val}
                  </td>
                  <td className="py-3.5 px-4 text-[#18221D]">
                    {row.item2_val}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-[#5A6B63]">
                    {row.notes || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Best For Each Section */}
      <div className="mt-12 rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          Who Should Choose Which?
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {comparison.best_for_each.map((b, i) => (
            <div key={i} className="rounded-xl bg-[#F6F3EB] p-5 border border-[#E5E0D4]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                Choose {b.tool} If You Are:
              </div>
              <h3 className="font-serif-heading mt-2 text-lg font-bold text-[#18221D]">
                {b.audience}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                {b.reason}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pros & Cons Comparison */}
      <div className="mt-12">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          Comparative Strengths & Limitations
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {comparison.pros_cons.map((pc, i) => (
            <div key={i} className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6">
              <h3 className="font-serif-heading text-xl font-bold text-[#18221D]">
                {pc.tool}
              </h3>

              <div className="mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                  Advantages
                </span>
                <ul className="mt-2 space-y-2 text-xs sm:text-sm text-[#18221D]">
                  {pc.pros.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#085536] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE5D9]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  Tradeoffs
                </span>
                <ul className="mt-2 space-y-2 text-xs sm:text-sm text-[#18221D]">
                  {pc.cons.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-[#B45309] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Verdict */}
      <div className="mt-12 rounded-3xl border border-[#085536]/30 bg-[#085536]/5 p-8 sm:p-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
          <Sparkles className="h-4 w-4" />
          <span>The Bottom Line Recommendation</span>
        </div>
        <h2 className="font-serif-heading mt-2 text-3xl font-bold text-[#18221D]">
          Our Editorial Verdict
        </h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#18221D]">
          {comparison.verdict}
        </p>
      </div>

      {/* FAQ */}
      {comparison.faq.length > 0 && (
        <div className="mt-12 rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
          <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {comparison.faq.map((item, i) => (
              <div key={i} className="rounded-xl bg-[#F6F3EB] p-4">
                <h4 className="font-bold text-sm text-[#18221D]">
                  {item.question}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
