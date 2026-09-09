import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Lock className="h-3.5 w-3.5" />
          <span>User Data Protection</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-[#5A6B63]">
          Last updated: January 1, 2025 · Compliant with GDPR & CCPA
        </p>
      </div>

      <div className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-[#5A6B63]">
        <p>
          WorldDollar.quest respects your personal privacy. We never sell, rent, or trade your personal information with third-party data brokers or marketing firms.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          1. Information We Collect
        </h2>
        <p>
          We only collect information you voluntarily provide:
        </p>
        <ul className="space-y-2 list-disc list-inside text-[#18221D]">
          <li><strong>Email Address:</strong> When you subscribe to The Weekly Quest, download a lead magnet, or purchase a digital product.</li>
          <li><strong>Order Details:</strong> Customer email, timestamp, and product authorization tokens for digital kit fulfillment. (We never store payment card credentials).</li>
          <li><strong>Anonymous Usage Data:</strong> Page visits, referral links clicked, and device categories to improve site navigation.</li>
        </ul>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          2. How We Use Information
        </h2>
        <p>
          Collected data is used strictly to:
        </p>
        <ul className="space-y-2 list-disc list-inside text-[#18221D]">
          <li>Deliver requested newsletters and digital resources.</li>
          <li>Fulfill and authorize downloads for purchased digital products.</li>
          <li>Provide customer support and security verification.</li>
        </ul>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          3. Your Rights Under GDPR & CCPA
        </h2>
        <p>
          Regardless of location, you maintain the right to access, rectify, or request immediate deletion of your email address and subscriber history. Every newsletter email includes a one-click unsubscribe link. You may also contact <a href="mailto:privacy@worlddollar.quest" className="text-[#085536] underline font-medium">privacy@worlddollar.quest</a> for immediate data erasure.
        </p>
      </div>
    </div>
  );
};
