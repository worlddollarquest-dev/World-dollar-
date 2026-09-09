import React, { useState } from 'react';
import { Link } from '../lib/router';
import { Info, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { store } from '../lib/store';

interface AffiliateDisclosureNoticeProps {
  compact?: boolean;
  className?: string;
}

export const AffiliateDisclosureNotice: React.FC<AffiliateDisclosureNoticeProps> = ({
  compact = false,
  className = '',
}) => {
  const [expanded, setExpanded] = useState(false);
  const settings = store.getSettings();

  if (compact) {
    return (
      <div
        className={`flex items-center gap-1.5 text-xs text-[#5A6B63] bg-[#F6F3EB] px-3 py-1.5 rounded-lg border border-[#EAE5D9] ${className}`}
      >
        <Info className="h-3.5 w-3.5 text-[#085536] shrink-0" />
        <span>
          <strong className="font-semibold text-[#18221D]">Affiliate Disclosure:</strong> Some links may earn us a commission at no extra cost to you.{' '}
          <Link to="/affiliate-disclosure" className="text-[#085536] underline hover:text-[#0E7345]">
            Learn how we select tools
          </Link>
        </span>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border border-[#E5E0D4] bg-[#F6F3EB]/70 p-4 transition-all ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 rounded-md bg-[#085536]/10 p-1 text-[#085536]">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                Conspicuous Affiliate & Editorial Disclosure
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-[#18221D] leading-relaxed">
              {settings.affiliate_disclosure_text}
            </p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-medium text-[#085536] hover:underline shrink-0"
        >
          <span>{expanded ? 'Hide Details' : 'Our Policy'}</span>
          {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 border-t border-[#EAE5D9] pt-3 text-xs text-[#5A6B63] space-y-1.5">
          <p>
            • We never rank or recommend a platform simply because it pays an affiliate commission.
          </p>
          <p>
            • If an affiliate program has not been vetted, we link directly to the official site without affiliate tracking.
          </p>
          <p>
            • Pricing, terms, and availability belong solely to the respective provider.
          </p>
          <div className="pt-1">
            <Link
              to="/affiliate-disclosure"
              className="font-semibold text-[#085536] hover:underline inline-flex items-center gap-1"
            >
              Read full Affiliate Disclosure & FTC Compliance Statement →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
