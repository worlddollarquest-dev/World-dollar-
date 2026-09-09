import React from 'react';
import { store } from '../lib/store';
import { Link } from '../lib/router';
import { FileCheck, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';

export const ReviewsPage: React.FC = () => {
  const reviews = store.getReviews();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <FileCheck className="h-3.5 w-3.5" />
          <span>Independent Editorial Reviews</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Editorial Software Reviews
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          In-depth assessments of tools and platforms built for the global online workforce. We examine genuine capabilities, fee transparency, and real limitations.
        </p>
      </div>

      <div className="mt-6">
        <AffiliateDisclosureNotice compact />
      </div>

      {/* Reviews Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="group flex flex-col justify-between rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 shadow-sm transition-all duration-300 hover:border-[#085536]/40 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-[#085536]/10 px-2.5 py-0.5 text-xs font-bold text-[#085536]">
                  {rev.tool_name}
                </span>
                <span className="text-xs text-[#5A6B63]">
                  Updated {rev.last_updated}
                </span>
              </div>

              <Link
                to={`/reviews/${rev.slug}`}
                className="font-serif-heading mt-3 block text-2xl font-bold text-[#18221D] group-hover:text-[#085536] transition-colors leading-snug"
              >
                {rev.title}
              </Link>

              <p className="mt-3 text-xs sm:text-sm text-[#5A6B63] line-clamp-3 leading-relaxed">
                {rev.what_it_is}
              </p>

              <div className="mt-4 rounded-xl bg-[#F6F3EB] p-3 text-xs">
                <span className="font-bold text-[#18221D]">Target Professional: </span>
                <span className="text-[#5A6B63]">{rev.who_its_for}</span>
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-[#18221D]">
                <span className="font-bold text-[#085536] block">Key Strengths:</span>
                {rev.strengths.slice(0, 2).map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#085536] shrink-0" />
                    <span className="line-clamp-1">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center justify-between text-xs">
              <span className="font-medium text-[#5A6B63]">Editorial Review</span>
              <Link
                to={`/reviews/${rev.slug}`}
                className="font-semibold text-[#085536] inline-flex items-center gap-1 group-hover:underline"
              >
                <span>Read Full Review</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
