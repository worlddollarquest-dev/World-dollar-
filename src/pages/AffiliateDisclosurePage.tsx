import React from 'react';
import { ShieldCheck, Info, Check, ExternalLink } from 'lucide-react';
import { Link } from '../lib/router';

export const AffiliateDisclosurePage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Full Legal & Regulatory Disclosure</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Affiliate & Commercial Disclosure
        </h1>

        <p className="mt-3 text-sm text-[#5A6B63]">
          Last updated: January 1, 2025 · Compliant with FTC 16 CFR § 255.5 Guidelines
        </p>
      </div>

      <div className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-[#5A6B63]">
        <div className="rounded-2xl border border-[#085536]/20 bg-[#085536]/5 p-5 text-sm text-[#18221D]">
          <strong className="text-[#085536] block mb-1">Plain Language Summary:</strong>
          Some of the links on WorldDollar.quest are affiliate links. If you click on an affiliate link and make a purchase or open an account, WorldDollar.quest may receive an affiliate referral commission at no additional cost to you. In some instances, our links may even grant you promotional credits or discounted fees.
        </div>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          1. What Are Affiliate Links?
        </h2>
        <p>
          An affiliate link is a URL containing a unique tracking identifier that informs the software vendor or platform that you found their service via WorldDollar.quest. If you choose to subscribe to a paid tier or make a transaction, the vendor shares a portion of that revenue with us.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          2. Does It Cost You Anything Extra?
        </h2>
        <p>
          <strong className="text-[#18221D]">Absolutely not.</strong> You will never pay higher fees, rates, or subscription prices by clicking through our referral links. In fact, many vendor agreements enable us to provide discounted trials, waived transfer fees, or free starter credits.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          3. How We Maintain Editorial Independence
        </h2>
        <p>
          Our editorial recommendations are driven solely by our assessment of usefulness, reliability, pricing fairness, and relevance to global online earners:
        </p>
        <ul className="space-y-2 list-disc list-inside text-[#18221D]">
          <li>We never rank a tool higher simply because its affiliate program pays a higher commission.</li>
          <li>We regularly review and feature tools that have zero affiliate programs if they solve real problems for our community.</li>
          <li>When a tool has notable flaws, pricing gouges, or poor customer support, we document these drawbacks directly in our reviews and comparison matrices.</li>
        </ul>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          4. How to Bypass Affiliate Links
        </h2>
        <p>
          We believe in complete autonomy. If you prefer not to use our affiliate links, you can easily navigate directly to the vendor&apos;s website by opening a new browser tab and typing the company&apos;s domain name (e.g., <code>wise.com</code> or <code>contra.com</code>) directly into your search bar.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          5. Inquiries & Feedback
        </h2>
        <p>
          If you have questions regarding our commercial partnerships or notice any outdated pricing information, please reach out to us at{' '}
          <a href="mailto:affiliates@worlddollar.quest" className="text-[#085536] underline font-medium">
            affiliates@worlddollar.quest
          </a>.
        </p>
      </div>
    </div>
  );
};
