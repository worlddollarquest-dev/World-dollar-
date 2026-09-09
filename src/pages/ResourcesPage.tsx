import React, { useState } from 'react';
import { store } from '../lib/store';
import { LeadMagnet } from '../types';
import { LeadMagnetModal } from '../components/LeadMagnetModal';
import { Link } from '../lib/router';
import {
  FileText,
  Download,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const magnets = store.getLeadMagnets();
  const [selectedMagnet, setSelectedMagnet] = useState<LeadMagnet | null>(null);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <FileText className="h-3.5 w-3.5" />
          <span>Free Knowledge Base & Downloads</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Free Checklists, Worksheets & Roadmaps
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          Actionable resources designed to accelerate your online career quest. No payment required — delivered instantly to your inbox.
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs text-[#5A6B63]">
          <ShieldCheck className="h-4 w-4 text-[#085536]" />
          <span>Strict no-spam guarantee. Unsubscribe with 1 click anytime.</span>
        </div>
      </div>

      {/* Grid of Lead Magnets */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {magnets.map((mag) => (
          <div
            key={mag.id}
            className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-[#085536]/10 px-2.5 py-0.5 text-xs font-bold text-[#085536]">
                  {mag.highlight}
                </span>
                <span className="text-xs text-[#5A6B63]">Instant Download</span>
              </div>

              <h3 className="font-serif-heading mt-3 text-2xl font-bold text-[#18221D]">
                {mag.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                {mag.description}
              </p>

              <div className="mt-5 rounded-2xl bg-[#F6F3EB] p-4 text-xs text-[#18221D]">
                <span className="font-bold text-[#085536] block mb-1">What&apos;s Included:</span>
                <div className="flex items-center gap-2 text-[#5A6B63]">
                  <CheckCircle2 className="h-4 w-4 text-[#085536] shrink-0" />
                  <span>Formatted PDF + Actionable Notion Checklist</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE5D9]">
              <button
                onClick={() => setSelectedMagnet(mag)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#085536] py-3 text-xs font-bold text-white hover:bg-[#0E7345] transition-all shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Get Free Access</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Digital Products Bridge */}
      <div className="rounded-3xl border border-[#085536]/20 bg-gradient-to-r from-[#085536]/10 via-[#F6F3EB] to-[#085536]/5 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
            Looking for Complete Starter Kits?
          </span>
          <h2 className="font-serif-heading mt-1 text-2xl font-bold text-[#18221D]">
            Explore Our Premium Digital Kits & Templates
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] max-w-xl">
            Save dozens of hours with complete Notion dashboards, proposal templates, and client onboarding systems starting at just $7.
          </p>
        </div>

        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-xl bg-[#085536] px-6 py-3 text-xs font-bold text-white hover:bg-[#0E7345] transition-all shrink-0"
        >
          <span>View Storefront</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Modal */}
      <LeadMagnetModal
        magnet={selectedMagnet}
        onClose={() => setSelectedMagnet(null)}
      />
    </div>
  );
};
