import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../lib/router';
import { store } from '../lib/store';
import { Search, X, ArrowRight, Wrench, GitCompare, BookOpen, ShoppingBag, FileCheck } from 'lucide-react';

export const SearchBarModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigate } = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsSearchOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const tools = store.getTools();
  const comparisons = store.getComparisons();
  const reviews = store.getReviews();
  const products = store.getProducts();
  const articles = store.getArticles();

  const q = query.trim().toLowerCase();

  const matchedTools = q
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.short_description.toLowerCase().includes(q)
      )
    : [];

  const matchedComparisons = q
    ? comparisons.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.slug.toLowerCase().includes(q) ||
          c.intro.toLowerCase().includes(q)
      )
    : [];

  const matchedReviews = q
    ? reviews.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.tool_name.toLowerCase().includes(q)
      )
    : [];

  const matchedProducts = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.short_description.toLowerCase().includes(q)
      )
    : [];

  const matchedArticles = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    matchedTools.length +
    matchedComparisons.length +
    matchedReviews.length +
    matchedProducts.length +
    matchedArticles.length;

  const handleSelect = (path: string) => {
    setIsSearchOpen(false);
    setQuery('');
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-16 sm:pt-24 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#E5E0D4] bg-[#FDFBF7] shadow-2xl">
        {/* Search Header Input */}
        <div className="flex items-center border-b border-[#EAE5D9] px-4 py-3 sm:px-6">
          <Search className="h-5 w-5 text-[#5A6B63]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools, comparisons, reviews, products, and guides..."
            className="h-12 w-full bg-transparent px-3 text-base text-[#18221D] placeholder:text-[#5A6B63]/60 focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[#F6F3EB] text-[#5A6B63]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {!query ? (
            <div className="py-8 text-center text-sm text-[#5A6B63]">
              <p className="font-medium text-[#18221D]">Popular searches to get you started:</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Upwork', 'Wise', 'Canva', 'ChatGPT', 'Upwork vs Fiverr', 'Proposal Template', 'First Client'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="rounded-full border border-[#E5E0D4] bg-[#F6F3EB] px-3.5 py-1.5 text-xs font-medium text-[#18221D] hover:border-[#085536]"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-sm text-[#5A6B63]">
              <p className="font-semibold text-[#18221D]">No results found for &ldquo;{query}&rdquo;</p>
              <p className="mt-1">Try searching for a broader term like &ldquo;freelance&rdquo;, &ldquo;tools&rdquo;, or &ldquo;remote&rdquo;.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Tools */}
              {matchedTools.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
                    <Wrench className="h-3.5 w-3.5" />
                    Tools & Platforms ({matchedTools.length})
                  </h4>
                  <div className="mt-2 space-y-1">
                    {matchedTools.map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => handleSelect(`/tools/${tool.slug}`)}
                        className="flex w-full items-center justify-between rounded-xl p-2.5 text-left hover:bg-[#F6F3EB] transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-[#18221D]">{tool.name}</div>
                          <div className="text-xs text-[#5A6B63]">{tool.short_description}</div>
                        </div>
                        <span className="text-xs text-[#085536] font-medium shrink-0 ml-2">
                          View Tool →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparisons */}
              {matchedComparisons.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
                    <GitCompare className="h-3.5 w-3.5" />
                    Tool Comparisons ({matchedComparisons.length})
                  </h4>
                  <div className="mt-2 space-y-1">
                    {matchedComparisons.map((comp) => (
                      <button
                        key={comp.id}
                        onClick={() => handleSelect(`/comparisons/${comp.slug}`)}
                        className="flex w-full items-center justify-between rounded-xl p-2.5 text-left hover:bg-[#F6F3EB] transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-[#18221D]">{comp.title}</div>
                          <div className="text-xs text-[#5A6B63] line-clamp-1">{comp.intro}</div>
                        </div>
                        <span className="text-xs text-[#085536] font-medium shrink-0 ml-2">
                          Compare →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              {matchedReviews.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
                    <FileCheck className="h-3.5 w-3.5" />
                    Editorial Reviews ({matchedReviews.length})
                  </h4>
                  <div className="mt-2 space-y-1">
                    {matchedReviews.map((rev) => (
                      <button
                        key={rev.id}
                        onClick={() => handleSelect(`/reviews/${rev.slug}`)}
                        className="flex w-full items-center justify-between rounded-xl p-2.5 text-left hover:bg-[#F6F3EB] transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-[#18221D]">{rev.title}</div>
                          <div className="text-xs text-[#5A6B63]">{rev.who_its_for}</div>
                        </div>
                        <span className="text-xs text-[#085536] font-medium shrink-0 ml-2">
                          Read Review →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Products */}
              {matchedProducts.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    Digital Products & Templates ({matchedProducts.length})
                  </h4>
                  <div className="mt-2 space-y-1">
                    {matchedProducts.map((prod) => (
                      <button
                        key={prod.id}
                        onClick={() => handleSelect(`/products/${prod.slug}`)}
                        className="flex w-full items-center justify-between rounded-xl p-2.5 text-left hover:bg-[#F6F3EB] transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-[#18221D]">
                            {prod.name} — ${prod.sale_price || prod.price}
                          </div>
                          <div className="text-xs text-[#5A6B63]">{prod.short_description}</div>
                        </div>
                        <span className="text-xs text-[#085536] font-medium shrink-0 ml-2">
                          Get Resource →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {matchedArticles.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#085536]">
                    <BookOpen className="h-3.5 w-3.5" />
                    Articles & Guides ({matchedArticles.length})
                  </h4>
                  <div className="mt-2 space-y-1">
                    {matchedArticles.map((art) => (
                      <button
                        key={art.id}
                        onClick={() => handleSelect(`/blog/${art.slug}`)}
                        className="flex w-full items-center justify-between rounded-xl p-2.5 text-left hover:bg-[#F6F3EB] transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-[#18221D]">{art.title}</div>
                          <div className="text-xs text-[#5A6B63] line-clamp-1">{art.excerpt}</div>
                        </div>
                        <span className="text-xs text-[#085536] font-medium shrink-0 ml-2">
                          Read Guide →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
