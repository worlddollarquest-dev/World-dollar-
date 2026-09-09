import React from 'react';
import { store } from '../lib/store';
import { Link } from '../lib/router';
import { GitCompare, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';

export const ComparisonsPage: React.FC = () => {
  const comparisons = store.getComparisons();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <GitCompare className="h-3.5 w-3.5" />
          <span>Independent Software Comparisons</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Head-to-Head Platform Comparisons
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          Comprehensive, side-by-side analysis of the most popular platforms and digital tools. We analyze real fees, project workflows, and tradeoffs so you can make informed decisions.
        </p>
      </div>

      <div className="mt-6">
        <AffiliateDisclosureNotice compact />
      </div>

      {/* Comparisons Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {comparisons.map((comp) => (
          <div
            key={comp.id}
            className="group flex flex-col justify-between rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 shadow-sm transition-all duration-300 hover:border-[#085536]/40 hover:shadow-xl"
          >
            <div>
              {/* Tool Logos Comparison */}
              <div className="flex items-center gap-3 pb-4 border-b border-[#EAE5D9]">
                <div className="flex -space-x-3">
                  {comp.items.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.logo}
                      alt={item.name}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm bg-white"
                    />
                  ))}
                </div>
                <div className="text-xs font-bold text-[#085536]">
                  {comp.items.map((i) => i.name).join(' vs ')}
                </div>
              </div>

              <Link
                to={`/comparisons/${comp.slug}`}
                className="font-serif-heading mt-4 block text-xl font-bold text-[#18221D] group-hover:text-[#085536] transition-colors leading-snug"
              >
                {comp.title}
              </Link>

              <p className="mt-3 text-xs sm:text-sm text-[#5A6B63] line-clamp-3 leading-relaxed">
                {comp.intro}
              </p>

              {/* Best For Preview */}
              <div className="mt-4 space-y-2 text-xs">
                {comp.best_for_each.map((b, i) => (
                  <div key={i} className="rounded-lg bg-[#F6F3EB] p-2.5">
                    <span className="font-bold text-[#18221D]">{b.tool}: </span>
                    <span className="text-[#5A6B63]">{b.audience}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center justify-between text-xs">
              <span className="text-[#5A6B63]">Updated {comp.last_updated}</span>
              <Link
                to={`/comparisons/${comp.slug}`}
                className="font-semibold text-[#085536] inline-flex items-center gap-1 group-hover:underline"
              >
                <span>Full Comparison</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
