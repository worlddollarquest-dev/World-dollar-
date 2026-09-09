import React, { useState } from 'react';
import { useRouter, Link } from '../lib/router';
import { store } from '../lib/store';
import { CheckoutModal } from '../components/CheckoutModal';
import {
  ShoppingBag,
  CheckCircle2,
  Download,
  Lock,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileText,
  FileCheck,
  Check,
} from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const product = store.getProductBySlug(slug);
  const [showCheckout, setShowCheckout] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-serif-heading text-3xl font-bold text-[#18221D]">
          Product Not Found
        </h1>
        <p className="mt-2 text-sm text-[#5A6B63]">
          The digital kit you are looking for does not exist or has been updated.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#085536] px-5 py-2.5 text-sm font-semibold text-white"
        >
          <span>Return to Storefront</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const finalPrice = product.sale_price || product.price;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#5A6B63]">
        <Link to="/" className="hover:text-[#085536]">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-[#085536]">Products</Link>
        <span>/</span>
        <span className="text-[#18221D] font-medium">{product.name}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left 2 Cols: Details */}
        <div className="lg:col-span-2 space-y-10">
          {/* Main Hero Card */}
          <div className="overflow-hidden rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] shadow-sm">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#F6F3EB]">
              <img
                src={product.cover_image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-[#085536] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                  {product.product_type}
                </span>
                <span className="text-xs text-[#5A6B63]">
                  Format: {product.file_size}
                </span>
              </div>

              <h1 className="font-serif-heading mt-3 text-3xl sm:text-4xl font-extrabold text-[#18221D]">
                {product.name}
              </h1>

              <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
                {product.short_description}
              </p>
            </div>
          </div>

          {/* Full Description & Roadmaps */}
          <section className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              About This Resource
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#5A6B63]">
              {product.description}
            </p>

            {/* Implementation Highlights */}
            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                Key Implementation Steps
              </h3>
              <div className="mt-3 space-y-2.5">
                {product.preview_details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#18221D]">
                    <div className="mt-0.5 rounded-full bg-[#085536]/10 p-1 text-[#085536] shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="rounded-3xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 sm:p-8">
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              What&apos;s Included in Your Download
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.whats_included.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-[#E5E0D4] bg-[#F6F3EB] p-4 text-xs sm:text-sm text-[#18221D] flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#085536] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Col: Buy Box */}
        <div>
          <div className="sticky top-24 rounded-3xl border border-[#085536]/20 bg-[#FDFBF7] p-6 sm:p-8 shadow-lg">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                One-Time Payment
              </span>
              <div className="flex items-baseline gap-2">
                {product.sale_price ? (
                  <>
                    <span className="text-3xl font-black text-[#18221D]">
                      ${product.sale_price}
                    </span>
                    <span className="text-sm text-[#5A6B63] line-through">
                      ${product.price}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-black text-[#18221D]">
                    ${product.price}
                  </span>
                )}
                <span className="text-xs font-bold text-[#5A6B63]">USD</span>
              </div>
            </div>

            <button
              onClick={() => setShowCheckout(true)}
              className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl bg-[#085536] py-4 text-sm font-bold text-white shadow-md hover:bg-[#0E7345] transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Get Instant Access</span>
            </button>

            <div className="mt-6 space-y-3 border-t border-[#EAE5D9] pt-6 text-xs text-[#5A6B63]">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-[#085536] shrink-0" />
                <span>Instant download link + Notion link</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#085536] shrink-0" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#085536] shrink-0" />
                <span>Secure SSL checkout verification</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#F6F3EB] p-4 text-[11px] text-[#5A6B63] leading-relaxed">
              <strong>Need team access?</strong> All purchases include single-user commercial license with free lifetime updates as new templates are added.
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        product={showCheckout ? product : null}
        onClose={() => setShowCheckout(false)}
      />
    </div>
  );
};
