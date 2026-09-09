import React, { useState } from 'react';
import { store } from '../lib/store';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Inbox } from 'lucide-react';

export const NewsletterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    store.addSubscriber(email, 'newsletter_page', 'the_weekly_quest');
    store.trackEvent('newsletter_signup', {
      source: 'newsletter_page',
      email,
    });
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Mail className="h-3.5 w-3.5" />
          <span>The Monday Morning Briefing</span>
        </div>

        <h1 className="font-serif-heading mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          The Weekly Quest
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          Your 3-minute Monday dispatch for earning online, curated software tools, and international remote opportunities. Delivered with zero hype.
        </p>
      </div>

      {/* Subscription Card */}
      <div className="rounded-3xl border border-[#085536]/20 bg-[#FDFBF7] p-8 sm:p-12 shadow-md">
        {submitted ? (
          <div className="text-center py-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#085536]/10 text-[#085536]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="font-serif-heading mt-4 text-2xl font-bold text-[#18221D]">
              You are on the dispatch list.
            </h2>
            <p className="mt-2 text-sm text-[#5A6B63] max-w-md mx-auto">
              We have dispatched a welcome email and confirmed your spot for next Monday’s issue. Check your inbox for <strong className="text-[#18221D]">{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#18221D] mb-1.5">
                Work Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="name@company.com"
                required
                className="h-12 w-full rounded-2xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:ring-2 focus:ring-[#085536]/20 focus:outline-none shadow-sm transition-all"
              />
              {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
            </div>

            <button
              type="submit"
              className="quest-btn-primary w-full flex items-center justify-center gap-2 rounded-2xl bg-[#085536] py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#0E7345] hover:-translate-y-0.5 transition-all"
            >
              <span>Join The Weekly Quest</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-center text-xs text-[#5A6B63] pt-2">
              <ShieldCheck className="h-4 w-4 text-[#085536] shrink-0" />
              <span>Sent every Monday · Zero spam · Unsubscribe with 1 click anytime</span>
            </div>
          </form>
        )}
      </div>

      {/* Anatomy of an Issue */}
      <div className="rounded-3xl border border-[#EAE5D9] bg-[#F6F3EB] p-8 sm:p-10">
        <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
          What You Receive Every Monday (The 3-2-1-1-1 Format)
        </h2>
        <p className="mt-2 text-sm text-[#5A6B63]">
          We respect your attention. Every issue is strictly templated to be digested with coffee in 3 minutes or less.
        </p>

        <div className="mt-6 space-y-3 text-xs sm:text-sm">
          <div className="rounded-xl bg-white p-4 border border-[#EAE5D9] flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#085536] text-xs font-bold text-white shrink-0">
              3
            </span>
            <div>
              <strong className="text-[#18221D]">Curated Remote & Freelance Opportunities</strong>
              <p className="text-[#5A6B63] mt-0.5">Direct hiring links for vetted roles that pay competitive USD rates.</p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-[#EAE5D9] flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#085536] text-xs font-bold text-white shrink-0">
              2
            </span>
            <div>
              <strong className="text-[#18221D]">Useful Tools & Automations</strong>
              <p className="text-[#5A6B63] mt-0.5">Tested software to save manual hours or solve specific client delivery problems.</p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-[#EAE5D9] flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#085536] text-xs font-bold text-white shrink-0">
              1
            </span>
            <div>
              <strong className="text-[#18221D]">Practical Strategy or Teardown</strong>
              <p className="text-[#5A6B63] mt-0.5">One battle-tested proposal tweak, contract clause, or negotiation script.</p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-[#EAE5D9] flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#085536] text-xs font-bold text-white shrink-0">
              1
            </span>
            <div>
              <strong className="text-[#18221D]">In-Depth Editorial Guide</strong>
              <p className="text-[#5A6B63] mt-0.5">A long-form tutorial exploring a platform, skill, or workflow from scratch.</p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 border border-[#EAE5D9] flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#085536] text-xs font-bold text-white shrink-0">
              1
            </span>
            <div>
              <strong className="text-[#18221D]">Actionable Checklist or Template</strong>
              <p className="text-[#5A6B63] mt-0.5">A swipeable Notion file or PDF resource to keep in your career repository.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
