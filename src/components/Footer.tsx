import React, { useState } from 'react';
import { Link } from '../lib/router';
import { CheckCircle2, ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';
import { store } from '../lib/store';
import { WorldDollarLogo } from './WorldDollarLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    const ok = store.addSubscriber(email, 'footer');
    if (ok) {
      setSubscribed(true);
      setError('');
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-[#182B21] bg-[#101713] text-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex">
              <WorldDollarLogo theme="dark" size="md" variant="horizontal" showTagline={true} />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A4B5AC]">
              Your quest to build skills, find opportunities, and earn online — from anywhere.
              No hype, no false guarantees. Just practical, verified digital career blueprints.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#A4B5AC]">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 border border-white/10 px-2.5 py-1 font-medium text-white/90">
                <Globe2 className="h-3.5 w-3.5 text-[#0E7345]" />
                International Platform
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 border border-white/10 px-2.5 py-1 font-medium text-white/90">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                Zero False Promises
              </span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/start-earning" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Start Earning
                </Link>
              </li>
              <li>
                <Link to="/freelancing" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Freelancing Hub
                </Link>
              </li>
              <li>
                <Link to="/remote-jobs" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Remote Jobs
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Digital Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources & Tools */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
              Resources & Tools
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/tools" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Tools Directory
                </Link>
              </li>
              <li>
                <Link to="/comparisons" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Comparisons
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Tool Reviews
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Free Action Guides
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Digital Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Blog */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
              Community & Blog
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/community" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Community Hub
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Practical Guides
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-[#A4B5AC] hover:text-white transition-colors">
                  The Weekly Quest
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A4B5AC] hover:text-white transition-colors">
                  About WorldDollar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/affiliate-disclosure" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/editorial-policy" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-[#A4B5AC] hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-[#A4B5AC] gap-4">
          <p>© {new Date().getFullYear()} WorldDollar.quest. All rights reserved.</p>
          <p className="font-medium text-white/90">Built for the global digital workforce.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/admin" className="text-[#A4B5AC]/70 hover:text-white flex items-center gap-1">
              Admin CMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
