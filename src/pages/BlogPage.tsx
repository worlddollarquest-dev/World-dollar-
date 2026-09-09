import React, { useState } from 'react';
import { store } from '../lib/store';
import { Link } from '../lib/router';
import { BookOpen, Clock, User, ArrowRight, Search, Sparkles } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const articles = store.getArticles();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = [
    'All',
    'Freelance Strategy',
    'Tools & Automation',
    'Financial Logistics',
  ];

  const filteredArticles = articles.filter((art) => {
    if (selectedCategory !== 'All' && art.category !== selectedCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const match =
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.focus_keyword.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Practical Knowledge & Editorial</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Articles, Roadmaps & Strategy Dispatches
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          Deep, long-form editorial breakdowns covering career acquisition, proposal writing, remote work positioning, and international banking.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-b border-[#EAE5D9] pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#085536] text-white shadow-sm'
                  : 'border border-[#E5E0D4] bg-[#F6F3EB] text-[#5A6B63] hover:border-[#085536]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#5A6B63]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search guides..."
            className="h-10 w-full rounded-xl border border-[#E5E0D4] bg-white pl-10 pr-4 text-xs text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:outline-none"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] shadow-sm transition-all duration-300 hover:border-[#085536]/40 hover:shadow-xl"
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
                  <span className="font-bold uppercase tracking-wider text-[#085536]">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {art.read_time}
                  </span>
                </div>

                <Link
                  to={`/blog/${art.slug}`}
                  className="font-serif-heading mt-3 block text-xl font-bold text-[#18221D] group-hover:text-[#085536] transition-colors leading-snug"
                >
                  {art.title}
                </Link>

                <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#EAE5D9] mt-2 flex items-center justify-between text-xs">
              <span className="text-[#5A6B63]">By {art.author.name}</span>
              <Link
                to={`/blog/${art.slug}`}
                className="font-semibold text-[#085536] inline-flex items-center gap-1 group-hover:underline"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
