import React from 'react';
import { useRouter, Link } from '../lib/router';
import { store } from '../lib/store';
import { handleAffiliateOutboundClick } from '../lib/affiliate';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';
import {
  FileCheck,
  Check,
  X,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';

interface ReviewDetailPageProps {
  slug: string;
}

export const ReviewDetailPage: React.FC<ReviewDetailPageProps> = ({ slug }) => {
  const review = store.getReviewBySlug(slug);

  if (!review) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-serif-heading text-3xl font-bold text-[#18221D]">
          Review Not Found
        </h1>
        <p className="mt-2 text-sm text-[#5A6B63]">
          The editorial review you are looking for does not exist.
        </p>
        <Link
          to="/reviews"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#085536] px-5 py-2.5 text-sm font-semibold text-white"
        >
          <span>View All Reviews</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const tool = store.getToolBySlug(review.tool_slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#5A6B63]">
        <Link to="/" className="hover:text-[#085536]">Home</Link>
        <span>/</span>
        <Link to="/reviews" className="hover:text-[#085536]">Reviews</Link>
        <span>/</span>
        <span className="text-[#18221D] font-medium">{review.tool_name}</span>
      </nav>

      {/* Header */}
      <div className="mt-6 rounded-3xl border border-[#E5E0D4] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#085536]/10 px-2.5 py-0.5 text-xs font-bold text-[#085536]">
                Editorial Assessment
              </span>
              <span className="text-xs text-[#5A6B63]">
                Updated {review.last_updated}
              </span>
            </div>

            <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold text-[#18221D]">
              {review.title}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed max-w-2xl">
              {review.what_it_is}
            </p>
          </div>

          {tool && (
            <div className="sm:text-right shrink-0">
              <button
                onClick={(e) => handleAffiliateOutboundClick(tool, 'review_header_cta', e)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#085536] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0E7345] transition-all"
              >
                <span>Visit {tool.name}</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 border-t border-[#EAE5D9] pt-4">
          <AffiliateDisclosureNotice compact />
        </div>
      </div>

      {/* Deep-Dive Sections */}
      <div className="mt-10 space-y-10">
        {/* Who It's For */}
        <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
          <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
            Who Is {review.tool_name} Best Suited For?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A6B63] leading-relaxed">
            {review.who_its_for}
          </p>

          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#085536]">
              Prime Use Cases
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {review.best_use_cases.map((uc, i) => (
                <div key={i} className="rounded-xl bg-[#F6F3EB] p-4 text-xs sm:text-sm text-[#18221D]">
                  <span className="font-bold text-[#085536] block mb-1">Scenario #{i + 1}</span>
                  {uc}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Breakdown */}
        <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
          <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
            Pricing & Fee Structure
          </h2>
          <p className="mt-1 text-sm text-[#5A6B63]">
            Clear breakdown of direct costs and potential hidden service charges.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {review.pricing_breakdown.map((tier, idx) => (
              <div key={idx} className="rounded-xl border border-[#E5E0D4] bg-[#F6F3EB] p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#5A6B63]">
                  {tier.tier}
                </div>
                <div className="mt-2 text-2xl font-black text-[#18221D]">
                  {tier.price}
                </div>
                <p className="mt-2 text-xs text-[#5A6B63] leading-relaxed">
                  {tier.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Strengths & Limitations */}
        <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
          <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
            Balanced Assessment
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-900/10 bg-emerald-50/40 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                Core Strengths
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#18221D]">
                {review.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#085536] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-amber-900/10 bg-amber-50/40 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Critical Limitations
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#18221D]">
                {review.limitations.map((l, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <X className="h-4 w-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who Should Skip It */}
        <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
            <AlertTriangle className="h-4 w-4" />
            <span>Honest Filter</span>
          </div>
          <h2 className="font-serif-heading mt-2 text-2xl font-bold text-[#18221D]">
            Who Should Probably Skip {review.tool_name}?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A6B63] leading-relaxed">
            {review.who_should_skip}
          </p>
        </section>

        {/* Editorial Verdict */}
        <section className="rounded-3xl border border-[#085536]/30 bg-[#085536]/5 p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
            <Sparkles className="h-4 w-4" />
            <span>Final Verdict</span>
          </div>
          <h2 className="font-serif-heading mt-2 text-3xl font-bold text-[#18221D]">
            Our Recommendation
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#18221D]">
            {review.editorial_verdict}
          </p>

          {tool && (
            <div className="mt-6 pt-6 border-t border-[#085536]/15 flex items-center justify-between">
              <span className="text-xs font-medium text-[#5A6B63]">
                Ready to try it yourself?
              </span>
              <button
                onClick={(e) => handleAffiliateOutboundClick(tool, 'review_verdict_cta', e)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#085536] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#0E7345]"
              >
                <span>Visit {tool.name}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </section>

        {/* FAQ */}
        {review.faq.length > 0 && (
          <section className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {review.faq.map((item, idx) => (
                <div key={idx} className="rounded-xl bg-[#F6F3EB] p-4">
                  <h4 className="font-bold text-sm text-[#18221D]">
                    {item.question}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
