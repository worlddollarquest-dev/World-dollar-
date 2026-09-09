import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const CookiePolicyPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Tracking & Transparency</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Cookie Policy
        </h1>

        <p className="mt-3 text-sm text-[#5A6B63]">
          Last updated: January 1, 2025 · WorldDollar.quest
        </p>
      </div>

      <div className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-[#5A6B63]">
        <p>
          This policy explains how WorldDollar.quest utilizes cookies, local browser storage, and similar technologies to remember your preferences and manage outbound tool links.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          1. Strictly Necessary Storage
        </h2>
        <p>
          These storage keys are required for the website to function properly, including remembering your cookie consent choice and maintaining client-side state for searches and filters.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          2. Analytics & Referral Attribution
        </h2>
        <p>
          When you click on a recommended tool or marketplace, referral parameters (e.g. UTM source tags) may be attached so the vendor can identify WorldDollar.quest as the referring publication. These mechanisms do not store personally identifiable sensitive details like passwords or financial records.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          3. Managing Your Preferences
        </h2>
        <p>
          You can clear your browser storage or block cookies at any time via your browser settings. You can also re-trigger the consent banner to update your choices.
        </p>
      </div>
    </div>
  );
};
