import React, { useState, useEffect } from 'react';
import { Compass, CheckCircle2, ShieldCheck, Sparkles, MapPin, Globe2, ArrowRight } from 'lucide-react';
import { Link } from '../lib/router';

export const HeroQuestVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState(2); // Default to stage 3: "Build Proof"

  const nodes = [
    {
      id: 0,
      label: 'Discover',
      sub: 'Market Skill',
      x: 15,
      y: 75,
      status: 'completed',
      tag: 'Step 01',
    },
    {
      id: 1,
      label: 'Equip',
      sub: 'Global Tools',
      x: 35,
      y: 35,
      status: 'completed',
      tag: 'Step 02',
    },
    {
      id: 2,
      label: 'Build Proof',
      sub: '3 Case Studies',
      x: 60,
      y: 65,
      status: 'current',
      tag: 'Active Quest',
    },
    {
      id: 3,
      label: 'First Client',
      sub: 'USD Contract',
      x: 85,
      y: 28,
      status: 'upcoming',
      tag: 'Step 04',
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Container with tactile editorial frame */}
      <div className="relative overflow-hidden rounded-3xl border border-[#E5E0D4] bg-[#FDFBF7] p-6 sm:p-7 shadow-sm">
        {/* Subtle decorative background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#085536 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Top bar of the visual card */}
        <div className="relative flex items-center justify-between border-b border-[#EAE5D9] pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#085536]/10 text-[#085536]">
              <Compass className="h-4 w-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#18221D] block leading-none">
                Interactive Career Quest
              </span>
              <span className="text-[10px] text-[#5A6B63]">
                Verified Milestone Progression
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-[#085536]/8 px-2.5 py-1 text-[11px] font-semibold text-[#085536]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#085536] animate-pulse" />
            <span>Path Active</span>
          </div>
        </div>

        {/* SVG Journey Canvas */}
        <div className="relative my-4 aspect-[16/10] w-full rounded-2xl bg-[#F6F3EB]/70 border border-[#EAE5D9]/70 overflow-hidden flex items-center justify-center p-2">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background base road path */}
            <path
              d="M 60 180 C 100 180, 110 80, 150 80 C 190 80, 210 160, 250 160 C 290 160, 310 70, 350 70"
              stroke="#E2DDD2"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Slow traveling dashed animation line */}
            <path
              className="animate-quest-path"
              d="M 60 180 C 100 180, 110 80, 150 80 C 190 80, 210 160, 250 160 C 290 160, 310 70, 350 70"
              stroke="#085536"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Node 1: Discover */}
            <g
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setActiveNode(0)}
              transform="translate(60, 180)"
            >
              <circle r="12" fill="#FDFBF7" stroke="#085536" strokeWidth="2.5" />
              <circle r="5" fill="#085536" />
            </g>

            {/* Node 2: Equip */}
            <g
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setActiveNode(1)}
              transform="translate(150, 80)"
            >
              <circle r="12" fill="#FDFBF7" stroke="#085536" strokeWidth="2.5" />
              <circle r="5" fill="#085536" />
            </g>

            {/* Node 3: Build Proof (Active Pulsing Node) */}
            <g
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setActiveNode(2)}
              transform="translate(250, 160)"
            >
              <circle r="18" fill="#085536" fillOpacity="0.12" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle r="14" fill="#FDFBF7" stroke="#085536" strokeWidth="3" />
              <circle r="6" fill="#085536" />
            </g>

            {/* Node 4: First Client */}
            <g
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setActiveNode(3)}
              transform="translate(350, 70)"
            >
              <circle r="12" fill="#FDFBF7" stroke="#A3B4AC" strokeWidth="2" strokeDasharray="3 3" />
              <circle r="4" fill="#A3B4AC" />
            </g>

            {/* Node Labels in SVG */}
            <text x="60" y="210" textAnchor="middle" fill="#18221D" fontSize="11" fontWeight="700">
              01 Discover
            </text>
            <text x="150" y="58" textAnchor="middle" fill="#18221D" fontSize="11" fontWeight="700">
              02 Equip
            </text>
            <text x="250" y="195" textAnchor="middle" fill="#085536" fontSize="11" fontWeight="800">
              03 Proof
            </text>
            <text x="350" y="48" textAnchor="middle" fill="#5A6B63" fontSize="11" fontWeight="600">
              04 Client
            </text>
          </svg>
        </div>

        {/* Selected Milestone Detail Banner */}
        <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-3.5 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#085536] bg-[#085536]/8 px-2 py-0.5 rounded">
              {nodes[activeNode].tag}
            </span>
            <span className="text-[11px] text-[#5A6B63] font-medium">
              Click nodes to preview
            </span>
          </div>

          <div className="mt-2 flex items-baseline justify-between gap-2">
            <div>
              <h4 className="font-serif-heading text-sm sm:text-base font-bold text-[#18221D]">
                {nodes[activeNode].label} — {nodes[activeNode].sub}
              </h4>
              <p className="text-xs text-[#5A6B63] mt-0.5">
                {activeNode === 0 && 'Define your commercial outcome: SEO copywriting, Next.js, or Figma UI.'}
                {activeNode === 1 && 'Equip Wise banking, Claude research, and standard contracts.'}
                {activeNode === 2 && 'Build 3 public portfolio case studies showing verifiable problem solving.'}
                {activeNode === 3 && 'Pitch high-value clients across Upwork, Contra, and direct inquiries.'}
              </p>
            </div>
          </div>
        </div>

        {/* World connection pill */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-[#5A6B63] px-1">
          <div className="flex items-center gap-1.5">
            <Globe2 className="h-3.5 w-3.5 text-[#085536]" />
            <span>Active earners: Manila · Lagos · São Paulo · London</span>
          </div>
          <span className="font-semibold text-[#085536]">100% Remote</span>
        </div>
      </div>
    </div>
  );
};
