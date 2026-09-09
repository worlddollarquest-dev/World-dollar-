import React from 'react';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <FileText className="h-3.5 w-3.5" />
          <span>User Agreement</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Terms of Use
        </h1>

        <p className="mt-3 text-sm text-[#5A6B63]">
          Last updated: January 1, 2025 · WorldDollar.quest
        </p>
      </div>

      <div className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-[#5A6B63]">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          1. Agreement to Terms
        </h2>
        <p>
          By accessing WorldDollar.quest, you agree to these Terms of Use. If you disagree with any portion, you must discontinue using the platform.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          2. Educational & Informational Purpose
        </h2>
        <p>
          All guides, articles, worksheets, and tool reviews are provided for educational purposes only. They do not constitute certified financial, legal, or tax advice. Online earnings depend entirely on individual skill, dedication, market conditions, and client negotiations. WorldDollar.quest makes zero guarantees regarding income levels.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          3. Digital Product Purchases & License
        </h2>
        <p>
          Purchased templates and Notion kits grant a non-exclusive, non-transferable personal license to the purchaser. You may not redistribute, resell, or publicly host the downloadable files or templates without explicit written permission.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          4. 30-Day Money Back Guarantee
        </h2>
        <p>
          If you are unsatisfied with any digital product purchase, contact support@worlddollar.quest within 30 days of purchase for a complete refund.
        </p>
      </div>
    </div>
  );
};
