import React, { useState } from 'react';
import { Link } from '../lib/router';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  Code,
  PenTool,
  Search,
  Bot,
  Layout,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const SkillsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const skillsList = [
    {
      category: 'Development',
      title: 'Next.js & React Frontend Engineering',
      demand: 'High',
      rampUpTime: '60–90 Days',
      icon: Code,
      overview: 'Build high-performance web applications with server-side rendering and Tailwind CSS.',
      coreTools: ['VS Code', 'GitHub', 'Vercel', 'Tailwind'],
      firstProject: 'Rebuild a responsive SaaS marketing landing page with functional state and contact form.',
    },
    {
      category: 'Design',
      title: 'Figma UI/UX & Design Systems',
      demand: 'High',
      rampUpTime: '45–60 Days',
      icon: Layout,
      overview: 'Create wireframes, interactive mobile prototypes, and scalable component tokens for founders.',
      coreTools: ['Figma', 'FigJam', 'Notion'],
      firstProject: 'Design a 5-screen mobile banking or habit tracking app with dark/light mode tokens.',
    },
    {
      category: 'Writing',
      title: 'B2B Technical Copywriting & SEO',
      demand: 'Medium-High',
      rampUpTime: '30–45 Days',
      icon: PenTool,
      overview: 'Craft search-optimized blog guides and whitepapers that convert technical audiences.',
      coreTools: ['Claude', 'Google Docs', 'Ahrefs / Semrush'],
      firstProject: 'Write a 2,500-word comprehensive guide comparing modern database solutions with code examples.',
    },
    {
      category: 'AI & Ops',
      title: 'AI Workflow Automation & Prompt Ops',
      demand: 'Very High',
      rampUpTime: '20–30 Days',
      icon: Bot,
      overview: 'Connect LLMs to Zapier/Make and Airtable to automate lead qualification and content publishing.',
      coreTools: ['ChatGPT', 'Make.com', 'Airtable', 'Notion'],
      firstProject: 'Build an automated pipeline that summarizes customer feedback and drafts personalized replies.',
    },
    {
      category: 'Growth',
      title: 'Programmatic SEO & Content Engines',
      demand: 'High',
      rampUpTime: '45 Days',
      icon: Search,
      overview: 'Build data-driven content architectures targeting hundreds of long-tail search keywords.',
      coreTools: ['Google Search Console', 'Airtable', 'Webflow / Next.js'],
      firstProject: 'Build a directory database of 100 remote tools with automated comparison pages.',
    },
  ];

  const filteredSkills =
    activeTab === 'All'
      ? skillsList
      : skillsList.filter((s) => s.category === activeTab);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Practical Skills Matrix</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          High-Leverage Digital Skills in 2025
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          The fastest way to earn online is to possess a skill that produces tangible revenue or saves significant time for a business.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Development', 'Design', 'Writing', 'AI & Ops', 'Growth'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === tab
                ? 'bg-[#085536] text-white shadow-sm'
                : 'border border-[#E5E0D4] bg-[#F6F3EB] text-[#5A6B63] hover:border-[#085536]/30'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredSkills.map((sk, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#085536]/10 text-[#085536]">
                  <sk.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#085536]/10 px-2 py-0.5 text-[10px] font-bold text-[#085536]">
                    Demand: {sk.demand}
                  </span>
                  <span className="rounded bg-[#F6F3EB] border border-[#EAE5D9] px-2 py-0.5 text-[10px] font-bold text-[#5A6B63]">
                    {sk.rampUpTime}
                  </span>
                </div>
              </div>

              <h3 className="font-serif-heading mt-4 text-xl font-bold text-[#18221D]">
                {sk.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                {sk.overview}
              </p>

              <div className="mt-4 rounded-xl bg-[#F6F3EB] p-3 text-xs">
                <span className="font-bold text-[#18221D] block mb-1">Essential Tool Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {sk.coreTools.map((tool, i) => (
                    <span key={i} className="rounded bg-white px-2 py-0.5 border border-[#E5E0D4] text-[#18221D]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-xs text-[#18221D]">
                <span className="font-bold text-[#085536]">Recommended Proof Project: </span>
                <span className="text-[#5A6B63]">{sk.firstProject}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex justify-between items-center text-xs">
              <span className="text-[#5A6B63]">{sk.category}</span>
              <Link
                to="/tools"
                className="font-semibold text-[#085536] hover:underline inline-flex items-center gap-1"
              >
                <span>Find Tools for this Skill</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
