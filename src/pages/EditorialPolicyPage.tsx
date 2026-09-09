import React from 'react';
import { ShieldCheck, CheckCircle2, FileCheck } from 'lucide-react';

export const EditorialPolicyPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <FileCheck className="h-3.5 w-3.5" />
          <span>Journalistic & Review Integrity</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Editorial Policy & Review Standards
        </h1>

        <p className="mt-3 text-sm text-[#5A6B63]">
          Last updated: January 1, 2025 · Independent Publishing Code
        </p>
      </div>

      <div className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-[#5A6B63]">
        <p>
          WorldDollar.quest was founded to combat the rampant misleading claims, fake revenue screenshots, and low-quality affiliate listicles dominating the online work industry.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          1. Independent Evaluations
        </h2>
        <p>
          All editorial content, software rankings, and comparison matrices are produced independently. Commercial partners and software advertisers cannot purchase favorable reviews, alter our editorial verdict, or suppress legitimate criticisms.
        </p>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          2. No Paid Ranking Manipulation
        </h2>
        <p>
          A vendor cannot pay us to rank their tool as &quot;Best Overall&quot; or place them at the top of our directory. Inclusion and editorial badges (such as &quot;Editor&apos;s Pick&quot;) are granted solely at our editorial discretion based on:
        </p>
        <ul className="space-y-2 list-disc list-inside text-[#18221D]">
          <li>Accessibility and pricing transparency for international workers.</li>
          <li>Product stability, uptime, and user data privacy protections.</li>
          <li>Real utility and efficiency delivered to the end user.</li>
        </ul>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          3. Accuracy & Corrections Policy
        </h2>
        <p>
          SaaS pricing tiers, platform terms of service, and feature availability change frequently. When readers or vendors notify us of an error or outdated figure, our team verifies and updates the content promptly with an updated timestamp.
        </p>
        <p>
          To report an inaccuracy, email our editorial desk at{' '}
          <a href="mailto:editorial@worlddollar.quest" className="text-[#085536] underline font-medium">
            editorial@worlddollar.quest
          </a>.
        </p>
      </div>
    </div>
  );
};
