import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  ChevronRight,
  Target,
  BookOpen,
  Briefcase,
  Award,
  TrendingUp,
  Layers,
} from 'lucide-react';
import { Link } from '../lib/router';

export const QuestMapVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState(2); // Default to '03 Build'

  const stages = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Find a direction that fits you.',
      tag: 'Direction',
      icon: Target,
      description:
        'Audit your baseline strengths and pick a commercially verified direction: B2B copywriting, Next.js frontend, Notion operations, or UX prototyping.',
      deliverable: 'Skill Matrix & Target Niche Defined',
      actionLabel: 'Explore Skills Roadmap',
      link: '/skills',
    },
    {
      num: '02',
      title: 'Learn',
      tagline: 'Build practical, marketable skills.',
      tag: 'Capability',
      icon: BookOpen,
      description:
        'Focus strictly on market outcomes instead of theoretical tutorials. Equip your modern workflow with AI tools, Figma, and multi-currency banking.',
      deliverable: 'Core Toolkit & Workflow Mastery',
      actionLabel: 'Browse Tools Directory',
      link: '/tools',
    },
    {
      num: '03',
      title: 'Build',
      tagline: 'Create your portfolio and professional presence.',
      tag: 'Proof of Work',
      icon: Layers,
      description:
        'Never pitch with an empty profile. Build 3 concrete, public proof-of-work case studies or redesign teardowns before submitting your very first proposal.',
      deliverable: '3 Verifiable Public Case Studies',
      actionLabel: 'View Portfolio Kit',
      link: '/products/freelancer-portfolio-starter-kit',
    },
    {
      num: '04',
      title: 'Land',
      tagline: 'Find clients, freelance work, or remote opportunities.',
      tag: 'Opportunity',
      icon: Briefcase,
      description:
        'Pitch curated remote boards and direct client inquiries with concise, problem-solving proposals. Secure escrow protection and your first USD contracts.',
      deliverable: 'First International Contract Signed',
      actionLabel: 'Read First Client Guide',
      link: '/blog/how-to-start-freelancing-from-scratch',
    },
    {
      num: '05',
      title: 'Grow',
      tagline: 'Improve, specialize, and build a sustainable career.',
      tag: 'Progression',
      icon: TrendingUp,
      description:
        'Transition from hourly work to recurring retainers, high-value consulting, and digital product kits for long-term career independence.',
      deliverable: 'Recurring Retainers & Digital Kits',
      actionLabel: 'Explore Digital Products',
      link: '/products',
    },
  ];

  const current = stages[activeStage];

  return (
    <div className="rounded-3xl border border-[#E5E0D4] bg-[#FDFBF7] p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_-8px_rgba(24,34,29,0.06)] transition-all">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#EAE5D9]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#085536]/20 bg-[#085536]/8 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#085536]">
            <Compass className="h-3.5 w-3.5" />
            <span>Structured Progression</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#18221D] mt-3">
            The 5 Stages of the Global Career Quest
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] max-w-xl leading-relaxed">
            Your online career is a quest. Follow this verified sequence to avoid beginner traps and build verifiable income from anywhere.
          </p>
        </div>

        {/* Milestone Indicator Pills */}
        <div className="flex items-center gap-1.5 self-start lg:self-end bg-[#F6F3EB] p-1.5 rounded-2xl border border-[#EAE5D9]">
          {stages.map((stage, idx) => (
            <button
              key={stage.num}
              onClick={() => setActiveStage(idx)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                activeStage === idx
                  ? 'bg-[#085536] text-[#FDFBF7] shadow-sm scale-105'
                  : 'text-[#5A6B63] hover:text-[#18221D] hover:bg-[#EAE5D9]'
              }`}
            >
              Stage {stage.num}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Connected Journey Track with 3D Depth */}
      <div className="relative mt-10">
        {/* Connecting Line Track */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-[#EAE5D9] rounded-full z-0">
          <div
            className="h-full bg-[#085536] transition-all duration-500 rounded-full"
            style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
          />
        </div>

        {/* 5 Stage Nodes Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
          {stages.map((st, idx) => {
            const isActive = activeStage === idx;
            const isCompleted = idx < activeStage;
            const Icon = st.icon;

            return (
              <button
                key={st.num}
                onClick={() => setActiveStage(idx)}
                className={`text-left rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-[#085536] bg-white shadow-md -translate-y-1.5 ring-2 ring-[#085536]/15'
                    : isCompleted
                    ? 'border-[#085536]/30 bg-[#F6F3EB]/80 hover:bg-white hover:border-[#085536]'
                    : 'border-[#EAE5D9] bg-[#FDFBF7] hover:bg-white hover:border-[#085536]/40 hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-extrabold ${
                        isActive || isCompleted ? 'text-[#085536]' : 'text-[#5A6B63]'
                      }`}
                    >
                      Stage {st.num}
                    </span>
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl shadow-xs transition-transform ${
                        isActive
                          ? 'bg-[#085536] text-[#FDFBF7] scale-110'
                          : isCompleted
                          ? 'bg-[#085536]/15 text-[#085536]'
                          : 'bg-[#EAE5D9] text-[#5A6B63]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-serif-heading text-lg font-bold text-[#18221D]">
                    {st.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5A6B63] font-medium leading-snug">
                    {st.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAE5D9]/70 flex items-center justify-between text-[11px]">
                  <span
                    className={`font-semibold ${
                      isActive ? 'text-[#085536]' : 'text-[#5A6B63]'
                    }`}
                  >
                    {isActive ? 'Active View' : isCompleted ? 'Completed' : 'Upcoming'}
                  </span>
                  <ChevronRight
                    className={`h-3.5 w-3.5 transition-transform ${
                      isActive ? 'text-[#085536] translate-x-1' : 'text-[#5A6B63]'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Active Stage Detail Panel */}
      <div className="mt-8 rounded-2xl border border-[#085536]/20 bg-gradient-to-r from-[#085536]/6 via-[#FDFBF7] to-[#085536]/4 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#085536] bg-[#085536]/10 px-2.5 py-0.5 rounded-md">
                Stage {current.num} Focus · {current.tag}
              </span>
            </div>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#18221D] mt-2">
              {current.num} {current.title} — {current.tagline}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
              {current.description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#18221D]">
              <CheckCircle2 className="h-4 w-4 text-[#085536] shrink-0" />
              <span>Target Deliverable: </span>
              <span className="text-[#085536] font-bold">{current.deliverable}</span>
            </div>
          </div>

          <Link
            to={current.link}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#085536] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#FDFBF7] shadow-sm hover:bg-[#0E7345] hover:-translate-y-0.5 transition-all shrink-0"
          >
            <span>{current.actionLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
