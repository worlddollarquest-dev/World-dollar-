import React, { useState } from 'react';
import { Mail, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Mail className="h-3.5 w-3.5" />
          <span>Direct Inquiries</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Get in Touch
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          Questions about a tool, feedback on an editorial guide, or corrections? We would love to hear from you.
        </p>
      </div>

      <div className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm">
        {sent ? (
          <div className="text-center py-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#085536]/10 text-[#085536]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h2 className="font-serif-heading mt-4 text-2xl font-bold text-[#18221D]">
              Message Received
            </h2>
            <p className="mt-2 text-sm text-[#5A6B63] max-w-md mx-auto">
              Thank you for reaching out. A member of our editorial team will reply to <strong className="text-[#18221D]">{email}</strong> within 1-2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#18221D] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex"
                  required
                  className="h-11 w-full rounded-xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#18221D] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  required
                  className="h-11 w-full rounded-xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#18221D] mb-1.5">
                Topic
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="h-11 w-full rounded-xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] focus:border-[#085536] focus:outline-none"
              >
                <option value="general">General Question</option>
                <option value="editorial">Editorial Correction / Feedback</option>
                <option value="partnership">Tool Listing / Software Review Inquiry</option>
                <option value="order">Digital Product Support / Download Help</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#18221D] mb-1.5">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="How can we help you?"
                required
                className="w-full rounded-xl border border-[#E5E0D4] bg-white p-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-[#085536] px-6 py-3 text-sm font-bold text-white hover:bg-[#0E7345] transition-all shadow-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
