import React from 'react';
import { Compass, ShieldCheck, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from '../lib/router';

export const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Compass className="h-3.5 w-3.5" />
          <span>Our Origin & Mission</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Built for the Borderless Workforce
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          WorldDollar.quest was created on a single core belief: Talent is equally distributed worldwide, but access to high-signal information, verified tools, and fair compensation is not.
        </p>
      </div>

      <div className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base leading-relaxed text-[#5A6B63]">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          The Quest Story
        </h2>
        <p>
          For decades, people outside major Western capitals were told that online earning meant filling out penny surveys or falling for pyramid marketing schemes.
        </p>
        <p>
          Today, the global knowledge economy allows an engineer in Lagos, a copywriter in Belgrade, a Notion designer in Manila, or a consultant in São Paulo to work directly with founders and teams globally — earning in strong currencies with financial sovereignty.
        </p>
        <p>
          WorldDollar.quest provides the practical roadmap: vetting the software, clarifying the banking steps, and stripping out the fake hype.
        </p>

        <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-3 pt-6 border-t border-[#EAE5D9]">
          <div className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-5">
            <span className="text-3xl font-black text-[#085536] block">100%</span>
            <span className="font-bold text-sm text-[#18221D] mt-1 block">Independent Reviews</span>
            <p className="text-xs text-[#5A6B63] mt-1">No paid editorial rankings. Ever.</p>
          </div>
          <div className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-5">
            <span className="text-3xl font-black text-[#085536] block">80+</span>
            <span className="font-bold text-sm text-[#18221D] mt-1 block">Countries Represented</span>
            <p className="text-xs text-[#5A6B63] mt-1">Global remote workers in our network.</p>
          </div>
          <div className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-5">
            <span className="text-3xl font-black text-[#085536] block">$0</span>
            <span className="font-bold text-sm text-[#18221D] mt-1 block">Cost to Start</span>
            <p className="text-xs text-[#5A6B63] mt-1">Free tools and step-by-step guides.</p>
          </div>
        </div>

        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D] pt-4 border-t border-[#EAE5D9]">
          Our Guiding Principles
        </h2>
        <div className="space-y-4 text-sm text-[#18221D]">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-[#085536] shrink-0 mt-0.5" />
            <div>
              <strong>No Earnings Guarantees:</strong> We will never tell you that you can &quot;make $10,000 in 30 days while you sleep.&quot; Real skills take practice and dedication.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-[#085536] shrink-0 mt-0.5" />
            <div>
              <strong>Global Inclusivity:</strong> We prioritize platforms and banking rails that support cross-border accounts without punishing foreign exchange markups.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-[#085536] shrink-0 mt-0.5" />
            <div>
              <strong>Peer Camaraderie:</strong> Building an independent career can be lonely. We foster mutual respect, feedback, and shared growth.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
