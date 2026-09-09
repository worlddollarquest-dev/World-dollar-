import React, { useState } from 'react';
import { store } from '../lib/store';
import { Tool, ToolCategory } from '../types';
import { ToolCard } from '../components/ToolCard';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';
import { Search, Filter, Wrench, Sparkles, Check } from 'lucide-react';

export const ToolsPage: React.FC = () => {
  const tools = store.getTools();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [pricingFilter, setPricingFilter] = useState<string>('All');
  const [onlyRecommended, setOnlyRecommended] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const categories: string[] = [
    'All',
    'AI Tools',
    'Freelancing Tools',
    'Creator Tools',
    'Design Tools',
    'Writing Tools',
    'Productivity Tools',
    'Remote Work Tools',
    'Business Tools',
    'Website Tools',
    'Marketing Tools',
    'Payment Tools',
    'Learning Tools',
  ];

  const filteredTools = tools.filter((tool) => {
    if (selectedCategory !== 'All' && tool.category !== selectedCategory) return false;
    if (pricingFilter === 'Free' && !tool.free_plan && tool.pricing_type !== 'Free') return false;
    if (pricingFilter === 'Freemium' && tool.pricing_type !== 'Freemium') return false;
    if (pricingFilter === 'Paid' && tool.pricing_type !== 'Paid') return false;
    if (onlyRecommended && !tool.recommended) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const match =
        tool.name.toLowerCase().includes(q) ||
        tool.short_description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.best_for.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <Wrench className="h-3.5 w-3.5" />
          <span>Curated Digital Software Directory</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Best Tools for Your Online Career
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          Practical tools for freelancers, remote workers, creators, and digital professionals.
          Unbiased editorial breakdowns without fake ratings or hype.
        </p>
      </div>

      {/* Prominent Affiliate Disclosure near top */}
      <div className="mt-6">
        <AffiliateDisclosureNotice />
      </div>

      {/* Search & Filter Bar */}
      <div className="mt-8 rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-[#5A6B63]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools by name, use-case, or category..."
              className="h-11 w-full rounded-xl border border-[#E5E0D4] bg-white pl-10 pr-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={pricingFilter}
              onChange={(e) => setPricingFilter(e.target.value)}
              className="h-11 rounded-xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] focus:border-[#085536] focus:outline-none"
            >
              <option value="All">All Pricing Models</option>
              <option value="Free">Free Only</option>
              <option value="Freemium">Freemium</option>
              <option value="Paid">Paid Only</option>
            </select>

            <button
              onClick={() => setOnlyRecommended(!onlyRecommended)}
              className={`h-11 flex items-center gap-1.5 rounded-xl px-4 text-xs font-semibold border transition-all whitespace-nowrap ${
                onlyRecommended
                  ? 'border-[#085536] bg-[#085536] text-white'
                  : 'border-[#E5E0D4] bg-white text-[#5A6B63] hover:border-[#085536]/30'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Recommended Only</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#EAE5D9]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#085536] text-white shadow-sm'
                  : 'bg-white/80 text-[#5A6B63] hover:bg-white hover:text-[#18221D] border border-[#E5E0D4]/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-8 flex items-center justify-between text-xs text-[#5A6B63]">
        <span>
          Showing <strong className="text-[#18221D]">{filteredTools.length}</strong> vetted tools
        </span>
        {selectedCategory !== 'All' && (
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-[#085536] hover:underline font-semibold"
          >
            Clear category filter
          </button>
        )}
      </div>

      {/* Tool Grid */}
      {filteredTools.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} featured={tool.featured} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-[#E5E0D4] p-12 text-center">
          <Wrench className="mx-auto h-8 w-8 text-[#5A6B63]" />
          <h3 className="font-serif-heading mt-4 text-xl font-bold text-[#18221D]">
            No matching tools found
          </h3>
          <p className="mt-1 text-sm text-[#5A6B63]">
            Try adjusting your search criteria or clearing selected filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setPricingFilter('All');
              setOnlyRecommended(false);
              setSearch('');
            }}
            className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#085536] px-4 py-2 text-xs font-semibold text-white"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
