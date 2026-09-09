import React, { useState, useEffect } from 'react';
import { Link } from '../lib/router';
import { ShieldCheck, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('wd_cookie_consent_v1');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('wd_cookie_consent_v1', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('wd_cookie_consent_v1', 'minimal');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-[#E5E0D4] bg-[#FDFBF7] p-4 shadow-2xl sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-lg bg-[#085536]/10 p-2 text-[#085536] shrink-0">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
            <span className="font-semibold text-[#18221D]">Your Privacy Matters:</span> We use strictly essential cookies and anonymous analytics to improve navigation and track external tool outbound links. We never sell personal data.{' '}
            <Link to="/cookie-policy" className="text-[#085536] underline hover:text-[#0E7345]">
              Read Cookie Policy
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-[#085536] underline hover:text-[#0E7345]">
              Privacy Policy
            </Link>.
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
          <button
            onClick={handleDecline}
            className="rounded-xl border border-[#E5E0D4] px-3.5 py-2 text-xs font-semibold text-[#5A6B63] hover:bg-[#F6F3EB] transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="rounded-xl bg-[#085536] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0E7345] transition-colors shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};
