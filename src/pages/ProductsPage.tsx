import React, { useState } from 'react';
import { store } from '../lib/store';
import { DigitalProduct } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CheckoutModal } from '../components/CheckoutModal';
import {
  ShoppingBag,
  ShieldCheck,
  Zap,
  Download,
  CheckCircle2,
  FileText,
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const products = store.getProducts();
  const [selectedProduct, setSelectedProduct] = useState<DigitalProduct | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#085536]/10 px-3 py-1 text-xs font-semibold text-[#085536]">
          <ShoppingBag className="h-3.5 w-3.5" />
          <span>Official Digital Storefront</span>
        </div>

        <h1 className="font-serif-heading mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18221D]">
          Practical Kits, Notion Systems & Checklists
        </h1>

        <p className="mt-3 text-base sm:text-lg text-[#5A6B63] leading-relaxed">
          Tested frameworks built to help you land clients faster, stay organized, and present professional work. Instant digital delivery after checkout.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#5A6B63]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#085536]" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-[#085536]" />
            <span>Instant File & Notion Access</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Download className="h-4 w-4 text-[#085536]" />
            <span>Lifetime Resource Updates</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onQuickCheckout={(p) => setSelectedProduct(p)}
          />
        ))}
      </div>

      {/* Satisfaction Guarantee Banner */}
      <div className="rounded-3xl border border-[#E5E0D4] bg-[#F6F3EB] p-8 sm:p-10 text-center max-w-3xl mx-auto">
        <ShieldCheck className="mx-auto h-10 w-10 text-[#085536]" />
        <h2 className="font-serif-heading mt-3 text-2xl font-bold text-[#18221D]">
          Our 100% Practical Satisfaction Promise
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#5A6B63] leading-relaxed">
          If any kit does not save you hours of work or give you clear direction in your career quest, simply email us at support@worlddollar.quest within 30 days for a prompt, courteous refund. No questions asked.
        </p>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
