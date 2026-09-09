import React, { useState } from 'react';
import {
  Users,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Award,
} from 'lucide-react';

export const CommunityPage: React.FC = () => {
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState('');

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setJoined(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Users className="h-3.5 w-3.5" />
          <span>Global Peer Collective</span>
        </div>

        <h1 className="font-serif-heading mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          You Don&apos;t Have to Figure It Out Alone.
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          Connect with thousands of remote workers, freelancers, and builders across 80+ countries. Get portfolio feedback, share scam alerts, and exchange practical career advice.
        </p>
      </div>

      {/* Join Box */}
      <div className="rounded-3xl border border-[#085536]/20 bg-[#FDFBF7] p-8 sm:p-12 shadow-md">
        {joined ? (
          <div className="text-center py-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#085536]/10 text-[#085536]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h2 className="font-serif-heading mt-4 text-2xl font-bold text-[#18221D]">
              Welcome to the Quest Community!
            </h2>
            <p className="mt-2 text-sm text-[#5A6B63] max-w-md mx-auto">
              We have sent an invitation link to <strong className="text-[#18221D]">{email}</strong>. Check your inbox to complete your community profile setup.
            </p>
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              Join the Free Discussion Hub
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5A6B63]">
              Free lifetime access. No secret courses. Real peer support.
            </p>

            <form onSubmit={handleJoin} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="h-12 flex-1 rounded-xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:ring-2 focus:ring-[#085536]/20 focus:outline-none transition-all shadow-sm"
              />
              <button
                type="submit"
                className="quest-btn-primary h-12 rounded-xl bg-[#085536] px-6 text-sm font-bold text-white hover:bg-[#0E7345] hover:-translate-y-0.5 transition-all shrink-0"
              >
                Join Free Community
              </button>
            </form>

            <p className="mt-3 text-center text-[11px] text-[#5A6B63]">
              By joining, you agree to our respectful peer conduct code.
            </p>
          </div>
        )}
      </div>

      {/* Pillars of the Community */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="quest-card rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#085536]/10 text-[#085536]">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="font-serif-heading mt-4 text-lg font-bold text-[#18221D]">
            Portfolio Tear-Downs
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
            Submit your case studies or proposal drafts for constructive, line-by-line feedback from experienced peers before sending to clients.
          </p>
        </div>

        <div className="quest-card rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#085536]/10 text-[#085536]">
            <AlertCircle className="h-5 w-5" />
          </div>
          <h3 className="font-serif-heading mt-4 text-lg font-bold text-[#18221D]">
            Live Scam Radar
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
            Real-time reports on phishing job posts, fraudulent telegram groups, and deceptive clients to protect your identity and earnings.
          </p>
        </div>

        <div className="quest-card rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#085536]/10 text-[#085536]">
            <MessageSquare className="h-5 w-5" />
          </div>
          <h3 className="font-serif-heading mt-4 text-lg font-bold text-[#18221D]">
            Country-Specific Banking
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
            Tips on routing payments from Wise/Payoneer into local bank accounts in Nigeria, Philippines, India, Brazil, Europe, and beyond.
          </p>
        </div>
      </div>

      {/* Future Membership Preview */}
      <div className="rounded-3xl border border-[#E5E0D4] bg-[#F6F3EB] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
            Coming in Late 2025
          </span>
          <h2 className="font-serif-heading mt-1 text-2xl font-bold text-[#18221D]">
            Quest Guild Membership
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] max-w-xl">
            A premium mastermind tier including live monthly expert workshops, private job board referrals, and 1-on-1 portfolio audits.
          </p>
        </div>

        <button
          disabled
          className="rounded-xl border border-[#E5E0D4] bg-white px-5 py-2.5 text-xs font-semibold text-[#5A6B63] cursor-not-allowed shrink-0"
        >
          Waitlist Opening Soon
        </button>
      </div>
    </div>
  );
};
