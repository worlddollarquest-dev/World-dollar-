import React, { useState } from 'react';
import { LeadMagnet } from '../types';
import { store } from '../lib/store';
import { X, CheckCircle2, Download, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface LeadMagnetModalProps {
  magnet: LeadMagnet | null;
  onClose: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ magnet, onClose }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!magnet) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    store.addSubscriber(email, 'lead_magnet', magnet.slug);
    store.trackEvent('lead_magnet_signup', {
      magnet_slug: magnet.slug,
      magnet_title: magnet.title,
      email,
    });
    setSuccess(true);
  };

  const handleDownload = () => {
    store.trackEvent('resource_download', {
      file_name: magnet.file_name,
      type: 'free_lead_magnet',
    });
    const element = document.createElement('a');
    const file = new Blob(
      [
        `======================================================\nWorldDollar.quest — Free Career Resource\n======================================================\n\nResource: ${magnet.title}\nDelivered To: ${email}\n\nOVERVIEW:\n${magnet.description}\n\nKEY TAKEAWAYS:\n1. Focus on high-demand, specific outcomes.\n2. Always verify international payment channels upfront.\n3. Build authentic proof of work before sending pitches.\n4. Avoid scam listings with upfront fee requirements.\n\n======================================================\nVisit: https://worlddollar.quest\nNo hype. No guaranteed-income promises. Just practical steps.\n======================================================`,
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = magnet.file_name.replace('.pdf', '.txt');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#E5E0D4] bg-[#FDFBF7] p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg text-[#5A6B63] hover:bg-[#F6F3EB]"
        >
          <X className="h-4 w-4" />
        </button>

        {success ? (
          <div className="text-center py-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#085536]/10 text-[#085536]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="font-serif-heading mt-4 text-xl font-bold text-[#18221D]">
              Download is Ready
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#5A6B63]">
              We have dispatched a copy of <strong className="text-[#18221D]">{magnet.title}</strong> to{' '}
              <strong className="text-[#18221D]">{email}</strong>.
            </p>

            <button
              onClick={handleDownload}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#085536] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0E7345] transition-all shadow-sm"
            >
              <Download className="h-4 w-4" />
              <span>Download File Now</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
              <Mail className="h-4 w-4" />
              <span>Free Instant Resource</span>
            </div>

            <h3 className="font-serif-heading mt-2 text-xl font-bold text-[#18221D]">
              {magnet.title}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
              {magnet.description}
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter your email for instant access..."
                  required
                  className="h-11 w-full rounded-xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:outline-none"
                />
                {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#085536] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0E7345] transition-all shadow-sm"
              >
                <span>Send Me the Free Guide</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-3 text-center text-[11px] text-[#5A6B63]">
              Zero spam. You will also receive our weekly curated dispatch. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
