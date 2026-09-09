import React from 'react';
import { Link } from '../lib/router';
import {
  Laptop,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Search,
  Video,
  FileCheck,
} from 'lucide-react';

export const RemoteJobsPage: React.FC = () => {
  const verifiedBoards = [
    {
      name: 'We Work Remotely',
      url: 'https://weworkremotely.com',
      focus: 'Engineering, Design, Marketing, Customer Support',
      bestFor: 'Established international remote organizations',
      fee: 'Free for job seekers',
    },
    {
      name: 'Wellfound (formerly AngelList)',
      url: 'https://wellfound.com',
      focus: 'High-growth tech startups, seed to Series B',
      bestFor: 'Direct founder applications with equity transparency',
      fee: 'Free for job seekers',
    },
    {
      name: 'Remotive',
      url: 'https://remotive.com',
      focus: 'Software, DevOps, Product, Operations',
      bestFor: 'Fully remote-first companies hiring globally',
      fee: 'Free for job seekers',
    },
    {
      name: 'Remote OK',
      url: 'https://remoteok.com',
      focus: 'Tech, Non-tech, Writing, Community',
      bestFor: 'Broad search with worldwide eligibility tags',
      fee: 'Free for job seekers',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Laptop className="h-3.5 w-3.5" />
          <span>Global Employment Navigation</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Legitimate Remote Jobs & Career Opportunities
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          How to bypass low-quality aggregators, identify legitimate distributed companies, and stand out against thousands of global applicants.
        </p>
      </div>

      {/* Verified Boards */}
      <section className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE5D9]">
          <div>
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              Verified International Remote Job Boards
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
              Boards that actively screen employers to prevent fake listings and spam.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {verifiedBoards.map((b, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-heading text-lg font-bold text-[#18221D]">
                    {b.name}
                  </h3>
                  <span className="rounded bg-[#085536]/10 px-2 py-0.5 text-[10px] font-bold text-[#085536]">
                    {b.fee}
                  </span>
                </div>

                <div className="mt-3 space-y-1.5 text-xs text-[#5A6B63]">
                  <div>
                    <span className="font-semibold text-[#18221D]">Primary Roles: </span>
                    {b.focus}
                  </div>
                  <div>
                    <span className="font-semibold text-[#18221D]">Best For: </span>
                    {b.bestFor}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EAE5D9] flex justify-end">
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#085536] hover:underline"
                >
                  <span>Visit Job Board</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Red Flags & Scam Prevention */}
      <section className="rounded-3xl border border-amber-900/20 bg-amber-50/40 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
          <AlertTriangle className="h-4 w-4" />
          <span>Vetting Guide</span>
        </div>
        <h2 className="font-serif-heading mt-2 text-2xl font-bold text-[#18221D]">
          Remote Job Red Flags to Watch For
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs sm:text-sm text-[#18221D]">
          <div className="rounded-xl bg-white p-4 border border-amber-200">
            <span className="font-bold text-[#B45309] block">Unrealistic Pay for Zero Experience</span>
            <p className="mt-1 text-[#5A6B63]">No legitimate employer pays $50/hour for basic data entry, captcha typing, or SMS forwarding without prior experience.</p>
          </div>

          <div className="rounded-xl bg-white p-4 border border-amber-200">
            <span className="font-bold text-[#B45309] block">Telegram / WhatsApp Only Interviews</span>
            <p className="mt-1 text-[#5A6B63]">Legitimate companies interview via Google Meet, Zoom, or structured email assessments from their official domain (@company.com).</p>
          </div>

          <div className="rounded-xl bg-white p-4 border border-amber-200">
            <span className="font-bold text-[#B45309] block">Upfront Software / Training Fees</span>
            <p className="mt-1 text-[#5A6B63]">Any request to transfer money for proprietary software licenses or home-office supplies is a known advance-fee fraud.</p>
          </div>

          <div className="rounded-xl bg-white p-4 border border-amber-200">
            <span className="font-bold text-[#B45309] block">Vague Job Descriptions</span>
            <p className="mt-1 text-[#5A6B63]">Legitimate listings specify team structure, tech stack, timezone overlaps, and clear quarterly performance goals.</p>
          </div>
        </div>
      </section>

      {/* Standout Application Strategies */}
      <section className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          How to Stand Out in Distributed Hiring
        </h2>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-4 rounded-2xl bg-[#F6F3EB] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#085536]/10 text-[#085536] shrink-0">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#18221D]">
                The 90-Second Loom Teardown
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                Instead of submitting just a PDF resume, record a crisp 90-second Loom showing your face and screen. Walk through one specific enhancement you can bring to their product or customer onboarding.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-[#F6F3EB] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#085536]/10 text-[#085536] shrink-0">
              <FileCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#18221D]">
                Asynchronous Communication Mastery
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                Distributed teams value concise written clarity above all else. Structure your email replies with clear headings, bullet points, and direct links to eliminate back-and-forth delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Download */}
      <div className="rounded-2xl border border-[#085536]/20 bg-[#085536]/5 p-6 text-center">
        <h3 className="font-serif-heading text-xl font-bold text-[#18221D]">
          Get Our Free Remote Job Application Checklist
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] max-w-xl mx-auto">
          32 specific pre-submission checkpoints to ensure your application passes ATS filters and catches the hiring manager’s attention.
        </p>
        <div className="mt-4">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 rounded-xl bg-[#085536] px-6 py-3 text-xs font-bold text-white hover:bg-[#0E7345]"
          >
            <span>Download Free Checklist</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
