import React from 'react';
import { Link } from '../lib/router';
import {
  Compass,
  ArrowRight,
  Briefcase,
  Laptop,
  GraduationCap,
  Bot,
  Building2,
  Video,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export const StartEarningPage: React.FC = () => {
  const paths = [
    {
      id: 'freelancing',
      title: '1. Freelancing (Client Services)',
      badge: 'Fastest Path to Cashflow',
      desc: 'Offer a concrete digital service directly to founders, agencies, and businesses across the globe.',
      steps: [
        'Identify one specific service (e.g., SEO article writing or Figma UI components).',
        'Create 2-3 public case study samples proving execution ability.',
        'Set up accounts on Upwork and Contra with verified ID.',
        'Send 3 personalized proposals daily focusing on the client’s exact bottleneck.',
        'Set up Wise to receive low-fee international payments.',
      ],
      link: '/freelancing',
      cta: 'Open Freelance Roadmap',
    },
    {
      id: 'remote-job',
      title: '2. Full-Time Remote Employment',
      badge: 'Predictable Stability',
      desc: 'Secure salaried employment with international tech companies and asynchronous distributed teams.',
      steps: [
        'Streamline your resume into standard single-column ATS-compliant PDF.',
        'Target verified remote portals like We Work Remotely and Wellfound.',
        'Record a concise 90-second Loom introduction for application forms.',
        'Highlight cross-cultural communication and asynchronous collaboration skills.',
      ],
      link: '/remote-jobs',
      cta: 'Explore Remote Job Guide',
    },
    {
      id: 'digital-skills',
      title: '3. Digital Skills Upgrading',
      badge: 'Long-Term Compounding',
      desc: 'Acquire high-leverage commercial skills that businesses actively recruit for in 2025 and beyond.',
      steps: [
        'Choose an in-demand domain: Web Development, Data Analytics, Technical Writing, or UI Design.',
        'Commit to a 60-day hands-on practice schedule with real projects.',
        'Document your learning process publicly on LinkedIn or GitHub.',
      ],
      link: '/skills',
      cta: 'Browse Skills Roadmap',
    },
    {
      id: 'ai-operator',
      title: '4. AI-Enhanced Professional Workflows',
      badge: 'Modern Leverage',
      desc: 'Use LLMs, code generation, and automation tools to deliver client projects twice as fast.',
      steps: [
        'Master prompt engineering and context caching in Claude and ChatGPT.',
        'Build automated content and research pipelines for agency clients.',
        'Package AI assistance as a premium speed advantage without sacrificing quality.',
      ],
      link: '/tools',
      cta: 'Browse AI Tools',
    },
    {
      id: 'digital-products',
      title: '5. Digital Products & Resources',
      badge: 'Scalable Asset',
      desc: 'Package specialized industry knowledge into Notion systems, templates, and actionable checklists.',
      steps: [
        'Solve a painful, repetitive problem you have solved for yourself or clients.',
        'Design a clean, immediately deployable template in Notion or Figma.',
        'Publish on your own storefront or platforms with zero upfront cost.',
      ],
      link: '/products',
      cta: 'Explore Digital Products',
    },
    {
      id: 'content-creator',
      title: '6. Niche Content & Audience',
      badge: 'Strategic Moat',
      desc: 'Publish curated insights and industry guides to build trust and attract incoming client inquiries.',
      steps: [
        'Pick one specialized topic with commercial intent (e.g., remote fintech operations).',
        'Publish a high-signal weekly newsletter using a consistent digest format.',
        'Monetize with vetted affiliate tools, job board postings, and sponsorships.',
      ],
      link: '/newsletter',
      cta: 'See Newsletter Strategy',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Compass className="h-3.5 w-3.5" />
          <span>Complete Global Career Blueprint</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Start Your Online Career: 6 Viable Paths
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          There is no single magic formula. Different people possess different strengths, time horizons, and risk appetites. Explore the 6 proven paths to earning online legitimately from anywhere.
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#5A6B63]">
          <ShieldCheck className="h-4 w-4 text-[#085536]" />
          <span>Zero fluff. No income guarantees. Pure execution roadmaps.</span>
        </div>
      </div>

      {/* Roadmaps Grid */}
      <div className="mt-12 space-y-8">
        {paths.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8 shadow-sm transition-all hover:border-[#085536]/30"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#EAE5D9]">
              <div>
                <span className="rounded-md bg-[#085536]/10 px-2.5 py-0.5 text-xs font-bold text-[#085536]">
                  {p.badge}
                </span>
                <h2 className="font-serif-heading mt-2 text-2xl font-bold text-[#18221D]">
                  {p.title}
                </h2>
              </div>

              <Link
                to={p.link}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#085536] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#0E7345] transition-all self-start sm:self-center shrink-0"
              >
                <span>{p.cta}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <p className="mt-4 text-sm sm:text-base text-[#5A6B63] leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-6 rounded-2xl bg-[#F6F3EB] p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#18221D] mb-3">
                Execution Steps:
              </h3>
              <div className="space-y-2.5">
                {p.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#18221D]">
                    <CheckCircle2 className="h-4 w-4 text-[#085536] shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
