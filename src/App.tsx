import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './lib/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchBarModal } from './components/SearchBarModal';
import { CookieConsent } from './components/CookieConsent';

// Pages
import { HomePage } from './pages/HomePage';
import { ToolsPage } from './pages/ToolsPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { ComparisonsPage } from './pages/ComparisonsPage';
import { ComparisonDetailPage } from './pages/ComparisonDetailPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ReviewDetailPage } from './pages/ReviewDetailPage';
import { StartEarningPage } from './pages/StartEarningPage';
import { FreelancingPage } from './pages/FreelancingPage';
import { RemoteJobsPage } from './pages/RemoteJobsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BlogPage } from './pages/BlogPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { NewsletterPage } from './pages/NewsletterPage';
import { CommunityPage } from './pages/CommunityPage';
import { AdminPage } from './pages/AdminPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { EditorialPolicyPage } from './pages/EditorialPolicyPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Route Dispatcher
  const renderRoute = () => {
    // Normalization
    const path = currentPath.split('?')[0].replace(/\/$/, '') || '/';

    if (path === '/') return <HomePage />;
    if (path === '/tools') return <ToolsPage />;
    if (path.startsWith('/tools/')) {
      const slug = path.replace('/tools/', '');
      return <ToolDetailPage slug={slug} />;
    }

    if (path === '/comparisons') return <ComparisonsPage />;
    if (path.startsWith('/comparisons/')) {
      const slug = path.replace('/comparisons/', '');
      return <ComparisonDetailPage slug={slug} />;
    }

    if (path === '/reviews') return <ReviewsPage />;
    if (path.startsWith('/reviews/')) {
      const slug = path.replace('/reviews/', '');
      return <ReviewDetailPage slug={slug} />;
    }

    if (path === '/start-earning') return <StartEarningPage />;
    if (path === '/freelancing') return <FreelancingPage />;
    if (path === '/remote-jobs') return <RemoteJobsPage />;
    if (path === '/skills') return <SkillsPage />;
    if (path === '/resources') return <ResourcesPage />;

    if (path === '/products') return <ProductsPage />;
    if (path.startsWith('/products/')) {
      const slug = path.replace('/products/', '');
      return <ProductDetailPage slug={slug} />;
    }

    if (path === '/blog') return <BlogPage />;
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      return <ArticleDetailPage slug={slug} />;
    }

    if (path === '/newsletter') return <NewsletterPage />;
    if (path === '/community') return <CommunityPage />;
    if (path === '/admin') return <AdminPage />;

    if (path === '/affiliate-disclosure') return <AffiliateDisclosurePage />;
    if (path === '/editorial-policy') return <EditorialPolicyPage />;
    if (path === '/privacy') return <PrivacyPolicyPage />;
    if (path === '/terms') return <TermsPage />;
    if (path === '/cookie-policy') return <CookiePolicyPage />;
    if (path === '/about') return <AboutPage />;
    if (path === '/contact') return <ContactPage />;

    // Fallback 404
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-serif-heading text-4xl font-bold text-[#18221D]">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-[#5A6B63]">
          The route <code className="bg-[#EAE5D9] px-2 py-0.5 rounded text-xs">{path}</code> does not exist on WorldDollar.quest.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#085536] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#0E7345]"
        >
          Return to Homepage
        </a>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#18221D] antialiased">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="flex-1 transition-opacity duration-300">
        <div key={currentPath} className="animate-in fade-in duration-300">
          {renderRoute()}
        </div>
      </main>

      <Footer />

      <SearchBarModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <CookieConsent />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
