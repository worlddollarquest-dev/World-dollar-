import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../lib/router';
import {
  Search,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';
import { WorldDollarLogo } from './WorldDollarLogo';

export const Navbar: React.FC = () => {
  const { currentPath, setIsSearchOpen } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Start Earning', path: '/start-earning' },
    { label: 'Freelancing', path: '/freelancing' },
    { label: 'Remote Jobs', path: '/remote-jobs' },
    { label: 'Tools', path: '/tools' },
    { label: 'Resources', path: '/resources' },
    { label: 'Community', path: '/community' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[#EAE5D9] bg-[#FDFBF7]/95 shadow-[0_2px_12px_-4px_rgba(24,34,29,0.06)] backdrop-blur-md'
          : 'border-b border-[#EAE5D9]/70 bg-[#FDFBF7]/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link to="/" className="group flex items-center">
          <WorldDollarLogo size="md" variant="horizontal" showTagline={true} />
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                  isActive
                    ? 'text-[#085536] font-semibold bg-[#085536]/8'
                    : 'text-[#5A6B63] hover:text-[#18221D] hover:bg-[#F6F3EB]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            id="nav-search-button"
            aria-label="Search website"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E0D4] bg-[#F6F3EB] text-[#5A6B63] transition-all hover:border-[#085536]/40 hover:text-[#18221D] hover:bg-white"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Join Free CTA */}
          <Link
            to="/newsletter"
            id="nav-join-free-cta"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#085536] px-5 py-2.5 text-sm font-semibold text-[#FDFBF7] shadow-sm transition-all hover:bg-[#0E7345] hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Join Free</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E0D4] bg-[#F6F3EB] text-[#18221D] lg:hidden transition-colors hover:bg-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#EAE5D9] bg-[#FDFBF7] px-4 py-5 shadow-lg lg:hidden transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#085536]/10 text-[#085536] font-semibold'
                      : 'text-[#18221D] hover:bg-[#F6F3EB]'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <div className="pt-3.5 mt-2 border-t border-[#EAE5D9] flex flex-col gap-2.5">
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#085536] px-4 py-2.5 text-xs font-semibold text-[#085536] hover:bg-[#085536]/5 transition-colors"
              >
                <span>Digital Products & Templates</span>
              </Link>
              <Link
                to="/newsletter"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#085536] px-4 py-2.5 text-xs font-semibold text-[#FDFBF7] hover:bg-[#0E7345] transition-colors"
              >
                <span>Join Free Newsletter</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
