import React from 'react';
import { Link } from '../lib/router';
import { store } from '../lib/store';
import { ToolCard } from '../components/ToolCard';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';
import {
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  FileText,
  DollarSign,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';

export const FreelancingPage: React.FC = () => {
  const tools = store.getTools();
  const freelanceTools = tools.filter(
    (t) =>
      t.category === 'Freelancing Tools' ||
      t.category === 'Payment Tools' ||
      t.category === 'Productivity Tools'
  ).slice(0, 4);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Foundational Freelance Architecture</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Freelancing From Scratch: The Complete Global Guide
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          How to offer valuable client services, build undeniable proof of work, write winning proposals, and receive international payments in USD.
        </p>
      </div>

      <AffiliateDisclosureNotice compact />

      {/* 1. How Freelancing Actually Works */}
      <section className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          1. How Freelancing Actually Works
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#5A6B63] leading-relaxed">
          Freelancing is not a &quot;get rich quick&quot; scheme. You are running a micro business selling a specialized outcome to a client who lacks either the time, skill, or headcount to do it themselves. Your earnings depend directly on the economic value of the problem you solve.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs">
          <div className="rounded-xl bg-[#F6F3EB] p-4">
            <span className="font-bold text-[#085536] block text-sm">Low Leverage</span>
            <p className="text-[#5A6B63] mt-1">Generic typing, data entry, unspecialized virtual assistance. High competition, pricing pressure.</p>
          </div>
          <div className="rounded-xl bg-[#F6F3EB] p-4">
            <span className="font-bold text-[#085536] block text-sm">Medium Leverage</span>
            <p className="text-[#5A6B63] mt-1">Graphic design, blog writing, WordPress customization. Decent rates with proven portfolio.</p>
          </div>
          <div className="rounded-xl bg-[#F6F3EB] p-4">
            <span className="font-bold text-[#085536] block text-sm">High Leverage</span>
            <p className="text-[#5A6B63] mt-1">Direct-response copywriting, Next.js development, CRM operations, B2B sales funnels. Premium retainers.</p>
          </div>
        </div>
      </section>

      {/* 2. Platforms & Where to Find Clients */}
      <section className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          2. The 3 Primary Acquisition Channels
        </h2>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-5">
            <h3 className="font-bold text-base text-[#18221D]">A. Curated Marketplaces (Upwork & Contra)</h3>
            <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
              Clients with active budgets are actively posting jobs. The platform provides escrow protection, milestone payments, and contract management. Ideal for landing your first 1-5 reviews.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-5">
            <h3 className="font-bold text-base text-[#18221D]">B. Direct Outreach & Cold Email</h3>
            <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
              Identify fast-growing companies that have broken landing pages, poor SEO articles, or outdated social assets. Send a concise Loom teardown demonstrating how to fix the issue. Zero platform fees.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-5">
            <h3 className="font-bold text-base text-[#18221D]">C. Ongoing Monthly Retainers</h3>
            <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
              Once a one-off project succeeds, propose an ongoing maintenance or content package (e.g. $1,500/month for 4 technical articles or continuous design sprints). This eliminates proposal hunting.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Avoiding Scams */}
      <section className="rounded-3xl border border-red-900/10 bg-red-50/40 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700">
          <AlertTriangle className="h-4 w-4" />
          <span>Crucial Safety Warning</span>
        </div>
        <h2 className="font-serif-heading mt-2 text-2xl font-bold text-[#18221D]">
          How to Recognize Freelance Scams Instantly
        </h2>

        <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#18221D]">
          <div className="flex items-start gap-2">
            <span className="font-bold text-red-600">RULE 1:</span>
            <span>Never pay an upfront &quot;equipment fee&quot;, &quot;security deposit&quot;, or &quot;ID verification charge&quot;. Legitimate clients pay you, never the reverse.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-red-600">RULE 2:</span>
            <span>Beware of clients immediately redirecting you to Telegram or WhatsApp before an escrow contract is funded on Upwork.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-red-600">RULE 3:</span>
            <span>Avoid check-cashing overpayment schemes (&quot;we will send a $2,000 cashier check, deposit it and wire $500 back&quot;). These are always fraudulent.</span>
          </div>
        </div>
      </section>

      {/* 4. Build Your Freelance Toolkit */}
      <section className="rounded-3xl border border-[#E5E0D4] bg-[#F6F3EB] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#EAE5D9]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
              Essential Stack
            </span>
            <h2 className="font-serif-heading mt-1 text-2xl sm:text-3xl font-bold text-[#18221D]">
              Build Your Freelance Toolkit
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
              Recommended software to manage proposals, client communication, and cross-border bank deposits.
            </p>
          </div>

          <Link
            to="/tools"
            className="text-xs sm:text-sm font-semibold text-[#085536] hover:underline inline-flex items-center gap-1"
          >
            <span>Browse All Tools</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {freelanceTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Related Resources CTA */}
      <div className="rounded-2xl border border-[#085536]/20 bg-[#085536]/5 p-6 text-center">
        <h3 className="font-serif-heading text-xl font-bold text-[#18221D]">
          Accelerate With Our Battle-Tested Proposal Templates
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] max-w-xl mx-auto">
          Skip the guessing game. Get our field-tested proposal templates and portfolio kit to start pitching with confidence.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <Link
            to="/products/proposal-template-pack"
            className="rounded-xl bg-[#085536] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#0E7345]"
          >
            Get Proposal Template Pack ($15)
          </Link>
          <Link
            to="/resources"
            className="rounded-xl border border-[#E5E0D4] bg-white px-5 py-2.5 text-xs font-bold text-[#18221D] hover:bg-[#F6F3EB]"
          >
            Free Starter Checklist
          </Link>
        </div>
      </div>
    </div>
  );
};
