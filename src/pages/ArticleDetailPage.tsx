import React from 'react';
import { useRouter, Link } from '../lib/router';
import { store } from '../lib/store';
import { AffiliateDisclosureNotice } from '../components/AffiliateDisclosureNotice';
import { ToolCard } from '../components/ToolCard';
import {
  Clock,
  User,
  Calendar,
  ArrowRight,
  Share2,
  Bookmark,
  CheckCircle2,
} from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  const article = store.getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-serif-heading text-3xl font-bold text-[#18221D]">
          Article Not Found
        </h1>
        <p className="mt-2 text-sm text-[#5A6B63]">
          The article you are looking for has moved or does not exist.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#085536] px-5 py-2.5 text-sm font-semibold text-white"
        >
          <span>Return to All Guides</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const relatedTools = article.related_tools
    .map((s) => store.getToolBySlug(s))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#5A6B63]">
        <Link to="/" className="hover:text-[#085536]">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-[#085536]">Articles</Link>
        <span>/</span>
        <span className="text-[#18221D] font-medium">{article.category}</span>
      </nav>

      {/* Article Header */}
      <div className="mt-6">
        <span className="rounded-md bg-[#085536]/10 px-2.5 py-0.5 text-xs font-bold text-[#085536]">
          {article.category}
        </span>

        <h1 className="font-serif-heading mt-4 text-3xl sm:text-5xl font-extrabold text-[#18221D] leading-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-base sm:text-xl text-[#5A6B63] leading-relaxed">
          {article.excerpt}
        </p>

        {/* Metadata Row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#EAE5D9] py-4 text-xs text-[#5A6B63]">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="h-9 w-9 rounded-full object-cover border border-[#E5E0D4]"
            />
            <div>
              <div className="font-bold text-[#18221D]">{article.author.name}</div>
              <div className="text-[11px] text-[#5A6B63]">{article.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {article.published_at}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.read_time}
            </span>
          </div>
        </div>
      </div>

      {/* Affiliate Notice */}
      <div className="mt-6">
        <AffiliateDisclosureNotice compact />
      </div>

      {/* Hero Image */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-[#EAE5D9] bg-[#F6F3EB]">
        <img
          src={article.featured_image}
          alt={article.title}
          className="h-full w-full object-cover max-h-[480px]"
        />
      </div>

      {/* Article Content / Markdown-like layout */}
      <div className="mt-10 rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-10 shadow-sm">
        <div className="prose prose-stone max-w-none text-[#18221D] leading-relaxed">
          {article.content.map((para, idx) => {
            if (para.startsWith('## ')) {
              return (
                <h2
                  key={idx}
                  className="font-serif-heading mt-8 mb-4 text-2xl font-bold text-[#18221D] border-b border-[#EAE5D9] pb-2"
                >
                  {para.replace('## ', '')}
                </h2>
              );
            }
            if (para.startsWith('- ')) {
              const items = para.split('\n').map((item) => item.replace('- ', ''));
              return (
                <ul key={idx} className="my-4 space-y-2 text-sm text-[#5A6B63] list-disc list-inside">
                  {items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="my-4 text-sm sm:text-base text-[#5A6B63] leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>
      </div>

      {/* Contextual Tools Mentioned in this Guide */}
      {relatedTools.length > 0 && (
        <div className="mt-12 rounded-3xl border border-[#E5E0D4] bg-[#F6F3EB] p-6 sm:p-8">
          <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
            Recommended Tools Mentioned in this Guide
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
            Curated software to implement the strategies outlined above.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedTools.map((t) => (
              <ToolCard key={t!.id} tool={t!} />
            ))}
          </div>
        </div>
      )}

      {/* Newsletter signup inline */}
      <div className="mt-12 rounded-3xl border border-[#085536]/20 bg-[#085536] p-8 text-center text-white">
        <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold">
          Get the Next Strategy Dispatch
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-md mx-auto">
          Join thousands of independent workers receiving our weekly 3-minute career digest.
        </p>
        <Link
          to="/newsletter"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-[#085536] hover:bg-[#F6F3EB]"
        >
          <span>Subscribe to The Weekly Quest</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};
