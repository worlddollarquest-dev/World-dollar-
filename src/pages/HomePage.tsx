import React, { useState } from 'react';
import { useRouter, Link } from '../lib/router';
import { store } from '../lib/store';
import { Tool, DigitalProduct, LeadMagnet } from '../types';
import { ToolCard } from '../components/ToolCard';
import { ProductCard } from '../components/ProductCard';
import { QuestMapVisual } from '../components/QuestMapVisual';
import { CinematicHero3D } from '../components/CinematicHero3D';
import { CommunityNetworkVisual } from '../components/CommunityNetworkVisual';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';
import { CheckoutModal } from '../components/CheckoutModal';
import { LeadMagnetModal } from '../components/LeadMagnetModal';
import { ScrollReveal } from '../components/ScrollReveal';
import { WorldDollarLogo } from '../components/WorldDollarLogo';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Bot,
  Briefcase,
  Laptop,
  TrendingUp,
  CheckCircle2,
  FileText,
  Mail,
  Users,
  Star,
  ChevronRight,
  Quote,
  Layers,
  ArrowUpRight,
  Globe2,
  CreditCard,
  Award,
  BookOpen,
  Code2,
  Zap,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const tools = store.getTools();
  const products = store.getProducts();
  const comparisons = store.getComparisons();
  const articles = store.getArticles();
  const leadMagnets = store.getLeadMagnets();

  const [checkoutProduct, setCheckoutProduct] = useState<DigitalProduct | null>(null);
  const [activeLeadMagnet, setActiveLeadMagnet] = useState<LeadMagnet | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const featuredTools = tools.filter((t) => t.featured).slice(0, 6);

  // Filter 3 target comparisons: Upwork vs Fiverr, Wise vs Payoneer, ChatGPT vs Claude
  const featuredComparisons = [
    comparisons.find((c) => c.slug === 'upwork-vs-fiverr') || comparisons[0],
    comparisons.find((c) => c.slug === 'wise-vs-payoneer') || comparisons[1],
    comparisons.find((c) => c.slug === 'chatgpt-vs-claude') || comparisons[2],
  ].filter(Boolean);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    store.addSubscriber(newsletterEmail, 'homepage_hero');
    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  return (
    <div className="flex flex-col space-y-20 sm:space-y-28 pb-20 overflow-hidden">
      {/* ========================================================
          1. HERO — CINEMATIC 3D EXPERIENCE
          ======================================================== */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 lg:pt-18 pb-6 sm:pb-10 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              {/* Small Label */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#085536]/20 bg-[#085536]/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#085536]">
                  <Compass className="h-3.5 w-3.5 shrink-0" />
                  <span>YOUR PRACTICAL ONLINE-CAREER GUIDE</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-heading mt-4 sm:mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold tracking-tight text-[#18221D] leading-[1.12] sm:leading-[1.08] lg:leading-[1.1]">
                Start Your Quest{' '}
                <br className="hidden sm:inline" />
                <span className="text-[#085536] relative inline-block">
                  to Earn Online
                  <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#D4AF37]/20 -z-10 rounded-sm" />
                </span>{' '}
                <br className="hidden sm:inline" />
                From Anywhere
              </h1>

              {/* Supporting Copy */}
              <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg lg:text-[1.125rem] leading-relaxed sm:leading-8 text-[#5A6B63]">
                Learn practical skills, discover freelance and remote opportunities, find clients,
                and build an online career — with clear roadmaps, real-world lessons, and a
                community that helps you keep moving.
              </p>

              {/* CTAs */}
              <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  to="/start-earning"
                  id="hero-primary-cta"
                  className="quest-btn-primary inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#085536] px-8 py-4 text-sm sm:text-base font-bold text-[#FDFBF7] shadow-sm transition-all hover:bg-[#0E7345] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Start Your Free Quest</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>

                <Link
                  to="/remote-jobs"
                  id="hero-secondary-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] px-8 py-4 text-sm sm:text-base font-bold text-[#18221D] shadow-sm transition-all hover:border-[#085536]/40 hover:bg-[#EAE5D9] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Opportunities</span>
                </Link>
              </div>

              {/* Trust Line */}
              <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#5A6B63]">
                <ShieldCheck className="h-4 w-4 text-[#085536] shrink-0" />
                <span>No hype. No guaranteed-income promises. Just practical steps.</span>
              </div>
            </div>

            {/* Right Column: Original 3D Career Quest World */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <CinematicHero3D />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECTION 2 — THE FIVE STAGES OF THE CAREER QUEST
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <QuestMapVisual />
      </ScrollReveal>

      {/* ========================================================
          3. SECTION 3 — WHY WORLDDOLLAR.QUEST
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-[#E5E0D4] bg-gradient-to-b from-[#F6F3EB] to-[#FDFBF7] p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
              Our Operating Standard
            </span>
            <h2 className="font-serif-heading mt-2 text-3xl font-bold text-[#18221D] sm:text-4xl">
              Real Guidance. No Hype. Just Practical Steps.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5A6B63] leading-relaxed">
              Most online-earning websites profit from exaggerated hype, fake earnings screenshots,
              and expensive course funnels. We focus on verifiable execution.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1: Practical Guides */}
            <div className="group rounded-2xl border border-[#EAE5D9] bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#085536]/10 text-[#085536] shadow-xs transition-transform duration-300 group-hover:scale-105">
                <BookOpen className="h-6 w-6 text-[#085536]" />
              </div>
              <h3 className="font-serif-heading mt-5 text-xl font-bold text-[#18221D]">
                Practical Guides
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#5A6B63]">
                Step-by-step systems, proposal templates, and teardowns tested across real contracts.
                No vague motivational essays.
              </p>
            </div>

            {/* Card 2: Real-World Stories */}
            <div className="group rounded-2xl border border-[#EAE5D9] bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#8A6700] shadow-xs transition-transform duration-300 group-hover:scale-105">
                <Award className="h-6 w-6 text-[#8A6700]" />
              </div>
              <h3 className="font-serif-heading mt-5 text-xl font-bold text-[#18221D]">
                Real-World Stories
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#5A6B63]">
                Transparent case studies from real people who built freelance retainers and remote roles
                without overnight hype or fabricated earnings.
              </p>
            </div>

            {/* Card 3: Community Support */}
            <div className="group rounded-2xl border border-[#EAE5D9] bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#085536]/10 text-[#085536] shadow-xs transition-transform duration-300 group-hover:scale-105">
                <Users className="h-6 w-6 text-[#085536]" />
              </div>
              <h3 className="font-serif-heading mt-5 text-xl font-bold text-[#18221D]">
                Community Support
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#5A6B63]">
                An international network of digital workers, freelancers, and specialists sharing
                feedback, honest reviews, and global opportunities.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ========================================================
          4. SECTION 4 — CHOOSE YOUR PATH (6 CATEGORY CARDS)
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
            Tailored Roadmaps
          </span>
          <h2 className="font-serif-heading mt-2 text-3xl font-bold text-[#18221D] sm:text-4xl">
            Choose Your Path
          </h2>
          <p className="mt-2 text-sm text-[#5A6B63]">
            Select where you want to focus, and we will guide you through verified milestones.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Freelancing',
              category: 'Client Work',
              desc: 'Master a commercial craft, build proof of work, pitch high-paying clients, and earn in USD.',
              icon: Briefcase,
              link: '/freelancing',
            },
            {
              title: 'Digital Skills',
              category: 'Core Capabilities',
              desc: 'Learn high-demand capabilities in technical writing, modern frontend, design, and AI automation.',
              icon: Code2,
              link: '/skills',
            },
            {
              title: 'Remote Jobs',
              category: 'Global Careers',
              desc: 'Access legitimate international job boards, optimize your resume, and ace remote technical interviews.',
              icon: Laptop,
              link: '/remote-jobs',
            },
            {
              title: 'Digital Careers',
              category: 'Independence',
              desc: 'Build an independent consulting practice or agency with direct enterprise client retainers.',
              icon: TrendingUp,
              link: '/start-earning',
            },
            {
              title: 'Global Payments',
              category: 'Banking & FX',
              desc: 'Navigate multi-currency receiving accounts, Wise setups, and avoid steep hidden conversion fees.',
              icon: CreditCard,
              link: '/comparisons/wise-vs-payoneer',
            },
            {
              title: 'Success Stories',
              category: 'Verified Cases',
              desc: 'Read authentic breakdowns of how real international specialists progressed from $0 to sustained income.',
              icon: Award,
              link: '/blog',
            },
          ].map((path, idx) => {
            const Icon = path.icon;
            return (
              <Link
                key={idx}
                to={path.link}
                className="group flex flex-col justify-between rounded-2xl border border-[#EAE5D9] bg-white p-7 transition-all duration-300 shadow-xs hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#085536]/10 text-[#085536] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#085536] uppercase tracking-wider bg-[#085536]/8 px-2.5 py-1 rounded-md">
                      {path.category}
                    </span>
                  </div>

                  <h3 className="font-serif-heading mt-5 text-xl font-bold text-[#18221D] group-hover:text-[#085536] transition-colors">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5A6B63]">
                    {path.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs font-bold text-[#085536] pt-4 border-t border-[#EAE5D9]">
                  <span>Explore Path</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </ScrollReveal>

      {/* ========================================================
          5 & 6. SECTION 5 & 6 — TOOLS & RESOURCES STOREFRONT
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-[#085536]/20 bg-gradient-to-b from-[#085536]/5 to-[#FDFBF7] p-8 sm:p-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#EAE5D9]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                Digital Marketplace & Storefront
              </span>
              <h2 className="font-serif-heading mt-2 text-3xl font-bold text-[#18221D] sm:text-4xl">
                Tools & Resources to Move Faster
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#5A6B63] max-w-2xl">
                Explore useful tools, platforms, templates, and resources designed to help you
                learn, work, and grow online.
              </p>
            </div>

            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-xl bg-[#085536] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0E7345] hover:-translate-y-0.5 transition-all shrink-0"
            >
              <span>Explore All Tools</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 4 Category Storefront Hubs */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'AI Tools',
                desc: 'Writing, research, design, coding, video and automation.',
                icon: Bot,
                link: '/tools',
                accentBadge: 'bg-purple-50 text-purple-700 border-purple-200/60',
              },
              {
                title: 'Freelancing Tools',
                desc: 'Platforms, proposals, portfolios, productivity and client workflows.',
                icon: Briefcase,
                link: '/freelancing',
                accentBadge: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
              },
              {
                title: 'Remote Work Tools',
                desc: 'Job boards, communication, collaboration and career resources.',
                icon: Laptop,
                link: '/remote-jobs',
                accentBadge: 'bg-sky-50 text-sky-800 border-sky-200/60',
              },
              {
                title: 'Business Tools',
                desc: 'Websites, email, analytics, marketing, payments and productivity.',
                icon: TrendingUp,
                link: '/tools',
                accentBadge: 'bg-amber-50 text-amber-800 border-amber-200/60',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link
                  key={idx}
                  to={card.link}
                  className="group rounded-2xl border border-[#EAE5D9] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#085536]/10 text-[#085536] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wide border px-2 py-0.5 rounded-md ${card.accentBadge}`}
                      >
                        {card.title.split(' ')[0]}
                      </span>
                    </div>

                    <h3 className="font-serif-heading mt-4 text-xl font-bold text-[#18221D] group-hover:text-[#085536] transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5A6B63]">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-[#085536]">
                    <span>Browse Category</span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Section Beneath: POPULAR RIGHT NOW */}
          <div className="mt-14 pt-10 border-t border-[#EAE5D9]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                  Curated Catalog
                </span>
                <h3 className="font-serif-heading text-2xl font-bold text-[#18221D] mt-1">
                  POPULAR RIGHT NOW
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6B63]">
                  Handpicked software vetted for international usability, transparent pricing, and low barrier to entry.
                </p>
              </div>
              <AffiliateDisclosureNotice compact />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} featured={tool.featured} />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ========================================================
          7. SECTION 7 — COMPARISONS & REVIEWS (SPLIT-CARD VISUALS)
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
              Decision Support
            </span>
            <h2 className="font-serif-heading mt-1 text-3xl font-bold text-[#18221D] sm:text-4xl">
              Compare Before You Choose
            </h2>
            <p className="mt-2 text-sm text-[#5A6B63] max-w-xl">
              Unbiased head-to-head analysis so you can choose the right platforms without trial-and-error costs.
            </p>
          </div>

          <Link
            to="/comparisons"
            className="text-xs sm:text-sm font-semibold text-[#085536] hover:underline inline-flex items-center gap-1"
          >
            <span>View All Comparisons</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3 Featured Split-Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredComparisons.map((comp) => {
            const itemA = comp.items[0];
            const itemB = comp.items[1];
            return (
              <div
                key={comp.id}
                className="group flex flex-col justify-between rounded-3xl border border-[#EAE5D9] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  {/* Split Visual Top Section */}
                  <div className="relative flex items-center justify-between rounded-2xl bg-[#F6F3EB] p-4 border border-[#EAE5D9]/80">
                    {/* Item A */}
                    <div className="flex flex-col items-center text-center w-5/12">
                      <img
                        src={itemA.logo}
                        alt={itemA.name}
                        className="h-10 w-10 rounded-xl object-cover border border-[#E5E0D4] bg-white p-1 shadow-xs"
                      />
                      <span className="font-bold text-sm text-[#18221D] mt-2">
                        {itemA.name}
                      </span>
                      <span className="text-[10px] text-[#5A6B63]">
                        ★ {itemA.rating}
                      </span>
                    </div>

                    {/* Center VS Emblem */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[#085536] text-[#FDFBF7] text-xs font-black shadow-sm">
                      VS
                    </div>

                    {/* Item B */}
                    <div className="flex flex-col items-center text-center w-5/12">
                      <img
                        src={itemB.logo}
                        alt={itemB.name}
                        className="h-10 w-10 rounded-xl object-cover border border-[#E5E0D4] bg-white p-1 shadow-xs"
                      />
                      <span className="font-bold text-sm text-[#18221D] mt-2">
                        {itemB.name}
                      </span>
                      <span className="text-[10px] text-[#5A6B63]">
                        ★ {itemB.rating}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-heading mt-4 text-lg font-bold text-[#18221D] group-hover:text-[#085536] transition-colors leading-snug">
                    {comp.title}
                  </h3>

                  {/* Quick Verdict */}
                  <div className="mt-3 rounded-xl bg-[#FDFBF7] border border-[#EAE5D9]/70 p-3 text-xs">
                    <span className="font-bold text-[#085536]">Quick Verdict: </span>
                    <span className="text-[#5A6B63] line-clamp-2">
                      {comp.verdict}
                    </span>
                  </div>

                  {/* Best For Summary */}
                  <div className="mt-3 text-xs text-[#5A6B63] space-y-1">
                    <div>
                      <span className="font-semibold text-[#18221D]">{itemA.name}: </span>
                      <span>{itemA.best_for}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#18221D]">{itemB.name}: </span>
                      <span>{itemB.best_for}</span>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center justify-between">
                  <span className="text-[11px] text-[#5A6B63]">
                    Updated {comp.last_updated}
                  </span>
                  <Link
                    to={`/comparisons/${comp.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#085536] group-hover:text-[#0E7345]"
                  >
                    <span>Compare →</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* ========================================================
          8. SECTION 8 — PRACTICAL GUIDES & STRATEGIES
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
              Knowledge Base
            </span>
            <h2 className="font-serif-heading mt-1 text-3xl font-bold text-[#18221D] sm:text-4xl">
              Practical Guides & Strategies
            </h2>
            <p className="mt-2 text-sm text-[#5A6B63] max-w-xl">
              Original, long-form editorial breakdowns covering career acquisition, client negotiation,
              and international payments.
            </p>
          </div>

          <Link
            to="/blog"
            className="text-xs sm:text-sm font-semibold text-[#085536] hover:underline inline-flex items-center gap-1"
          >
            <span>Read All Guides</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.slice(0, 3).map((art) => (
            <div
              key={art.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#EAE5D9] bg-white shadow-xs transition-all duration-300 hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#F6F3EB]">
                  <img
                    src={art.featured_image}
                    alt={art.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-[#5A6B63]">
                    <span className="font-bold uppercase tracking-wider text-[#085536] bg-[#085536]/8 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span>{art.read_time}</span>
                  </div>

                  <Link
                    to={`/blog/${art.slug}`}
                    className="font-serif-heading mt-3 block text-lg font-bold text-[#18221D] group-hover:text-[#085536] transition-colors leading-snug"
                  >
                    {art.title}
                  </Link>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#5A6B63] line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#EAE5D9] mt-2 flex items-center justify-between text-xs">
                <span className="text-[#5A6B63]">Updated {art.updated_at}</span>
                <Link
                  to={`/blog/${art.slug}`}
                  className="font-bold text-[#085536] hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ========================================================
          9. SECTION 9 — SUCCESS STORIES
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-[#E5E0D4] bg-[#FDFBF7] p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
              Real Trajectories
            </span>
            <h2 className="font-serif-heading mt-2 text-3xl font-bold text-[#18221D] sm:text-4xl">
              People Moving Forward on Their Quest
            </h2>
            <p className="mt-2 text-sm text-[#5A6B63]">
              Authentic case studies based on verified industry skill progressions. We never fabricate
              earnings claims or promise overnight riches.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: 'Maya S.',
                role: 'SEO Copywriter & Content Strategist',
                initial: 'Started with zero freelance contracts',
                path: 'Built 3 niche case studies on Notion → Secured initial $25/hr Upwork projects → Now manages ongoing international retainers.',
                keyTool: 'Wise + Notion',
                category: 'Copywriting',
              },
              {
                name: 'Liam K.',
                role: 'Frontend Web Developer',
                initial: 'Transitioned from low-paying local IT jobs',
                path: 'Created open-source component library on GitHub → Applied via We Work Remotely → Contracted remotely with an EU tech team.',
                keyTool: 'GitHub + ChatGPT',
                category: 'Engineering',
              },
              {
                name: 'Elena R.',
                role: 'UI/UX & Design Consultant',
                initial: 'Self-taught Figma designer',
                path: 'Redesigned public web applications → Built visual portfolio on Contra → Landed product design contracts with 0% platform commissions.',
                keyTool: 'Figma + Contra',
                category: 'Product Design',
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-[#EAE5D9] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-md bg-[#085536]/8 px-2 py-0.5 text-[10px] font-bold text-[#085536] uppercase tracking-wider">
                      {story.category}
                    </span>
                    <Quote className="h-4 w-4 text-[#085536]/40" />
                  </div>

                  <h3 className="font-serif-heading mt-3 text-lg font-bold text-[#18221D]">
                    {story.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#085536]">{story.role}</div>

                  <p className="mt-3 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                    {story.path}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EAE5D9] text-xs flex items-center justify-between text-[#5A6B63]">
                  <span>Core Stack:</span>
                  <span className="font-bold text-[#18221D]">{story.keyTool}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ========================================================
          10. SECTION 10 — FREE ACTION GUIDES & CHECKLISTS
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-[#E5E0D4] bg-[#F6F3EB] p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 border-b border-[#EAE5D9]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                Free Downloads
              </span>
              <h2 className="font-serif-heading mt-2 text-3xl font-bold text-[#18221D] sm:text-4xl">
                Practical Action Guides & Checklists
              </h2>
              <p className="mt-2 text-sm text-[#5A6B63] max-w-xl">
                Structured checklists and roadmaps to eliminate guesswork and accelerate your quest.
              </p>
            </div>

            <Link
              to="/resources"
              className="text-xs sm:text-sm font-semibold text-[#085536] hover:underline inline-flex items-center gap-1"
            >
              <span>View All Free Guides</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {leadMagnets.map((magnet) => (
              <div
                key={magnet.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#EAE5D9] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#085536]/40 hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#085536] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                    FREE
                  </span>

                  <h3 className="font-serif-heading mt-3 text-lg font-bold text-[#18221D] group-hover:text-[#085536] transition-colors">
                    {magnet.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
                    {magnet.description}
                  </p>
                </div>

                <button
                  onClick={() => setActiveLeadMagnet(magnet)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#085536] py-2.5 text-xs font-semibold text-white hover:bg-[#0E7345] hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Get the Free Guide →</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ========================================================
          11. SECTION 11 — DIGITAL PRODUCTS STOREFRONT
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
              Storefront Preview
            </span>
            <h2 className="font-serif-heading mt-1 text-3xl font-bold text-[#18221D] sm:text-4xl">
              Save Time With Battle-Tested Kits
            </h2>
            <p className="mt-2 text-sm text-[#5A6B63] max-w-xl">
              Ready-to-use checklists, templates, roadmaps, and practical resources to help you move faster.
            </p>
          </div>

          <Link
            to="/products"
            className="text-xs sm:text-sm font-semibold text-[#085536] hover:underline inline-flex items-center gap-1"
          >
            <span>View All Store Kits</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onQuickCheckout={(p) => setCheckoutProduct(p)}
            />
          ))}
        </div>
      </ScrollReveal>

      {/* ========================================================
          12. SECTION 12 — COMMUNITY
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-[#085536]/20 bg-[#085536] p-8 sm:p-12 lg:p-14 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-white/95">
                <Users className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>Global Peer Network</span>
              </div>

              <h2 className="font-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                You Don&apos;t Have to Figure It Out Alone.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
                Learn with freelancers, remote workers, creators, and digital professionals around the world.
                Share honest feedback, exchange job leads, and build proof together.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/community"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#085536] shadow-sm hover:bg-[#F6F3EB] hover:-translate-y-0.5 transition-all"
                >
                  <span>Join Free Community</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/newsletter"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                >
                  <span>Read Community Dispatches</span>
                </Link>
              </div>
            </div>

            {/* Right 3D Visual Column */}
            <div className="lg:col-span-6">
              <CommunityNetworkVisual />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ========================================================
          13. SECTION 13 — NEWSLETTER: WEEKLY QUEST UPDATE
          ======================================================== */}
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl border border-[#E5E0D4] bg-[#FDFBF7] p-8 sm:p-12 overflow-hidden shadow-xs">
          {/* Subtle floating 3D quest token background accent */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#085536]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="mx-auto max-w-3xl text-center">
            {/* Visual: Brand Quest Emblem */}
            <div className="flex justify-center mb-3">
              <WorldDollarLogo variant="icon" size="lg" />
            </div>

            <span className="block text-xs font-bold uppercase tracking-wider text-[#085536]">
              Weekly Quest Update
            </span>
            <h2 className="font-serif-heading mt-1 text-3xl font-bold text-[#18221D] sm:text-4xl">
              Get Your Weekly Quest Update
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5A6B63] leading-relaxed max-w-xl mx-auto">
              New guides, useful opportunities, practical resources, and community stories — delivered straight to your inbox.
            </p>

            {/* Structured Metric Breakdown */}
            <div className="my-7 grid grid-cols-2 gap-3 sm:grid-cols-5 text-xs text-[#18221D]">
              <div className="rounded-xl border border-[#EAE5D9] bg-[#F6F3EB] p-3 text-center shadow-2xs">
                <span className="font-bold text-[#085536] block text-base">3</span>
                <span className="text-[#5A6B63]">Opportunities</span>
              </div>
              <div className="rounded-xl border border-[#EAE5D9] bg-[#F6F3EB] p-3 text-center shadow-2xs">
                <span className="font-bold text-[#085536] block text-base">2</span>
                <span className="text-[#5A6B63]">Useful Tools</span>
              </div>
              <div className="rounded-xl border border-[#EAE5D9] bg-[#F6F3EB] p-3 text-center shadow-2xs">
                <span className="font-bold text-[#085536] block text-base">1</span>
                <span className="text-[#5A6B63]">Practical Strategy</span>
              </div>
              <div className="rounded-xl border border-[#EAE5D9] bg-[#F6F3EB] p-3 text-center shadow-2xs">
                <span className="font-bold text-[#085536] block text-base">1</span>
                <span className="text-[#5A6B63]">New Guide</span>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-xl border border-[#EAE5D9] bg-[#F6F3EB] p-3 text-center shadow-2xs">
                <span className="font-bold text-[#085536] block text-base">1</span>
                <span className="text-[#5A6B63]">Resource</span>
              </div>
            </div>

            {/* Form */}
            {newsletterSuccess ? (
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#085536]/10 px-6 py-3 text-sm font-medium text-[#085536]">
                <CheckCircle2 className="h-5 w-5" />
                <span>You are subscribed to The Weekly Quest! Welcome aboard.</span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="h-12 w-full rounded-xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-12 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#085536] px-7 text-sm font-bold text-white shadow-sm hover:bg-[#0E7345] hover:-translate-y-0.5 transition-all shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Global Modals */}
      <CheckoutModal
        product={checkoutProduct}
        onClose={() => setCheckoutProduct(null)}
      />
      <LeadMagnetModal
        magnet={activeLeadMagnet}
        onClose={() => setActiveLeadMagnet(null)}
      />
    </div>
  );
};
