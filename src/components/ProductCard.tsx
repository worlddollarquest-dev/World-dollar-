import React from 'react';
import { DigitalProduct } from '../types';
import { Link } from '../lib/router';
import { ShoppingBag, CheckCircle, ArrowRight, Sparkles, FileText } from 'lucide-react';

interface ProductCardProps {
  product: DigitalProduct;
  onQuickCheckout?: (product: DigitalProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickCheckout,
}) => {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] transition-all duration-300 hover:border-[#085536]/35 hover:shadow-md hover:-translate-y-1">
      {/* Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F6F3EB]">
        <img
          src={product.cover_image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="rounded-md bg-[#085536] px-2.5 py-1 text-[10px] font-bold tracking-wide text-white uppercase shadow-sm">
            {product.product_type}
          </span>
          {product.sale_price && (
            <span className="rounded-md bg-[#D97706] px-2 py-1 text-[10px] font-bold text-white shadow-sm">
              Save ${product.price - product.sale_price}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="text-[11px] font-medium text-white/95 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
            {product.file_size}
          </span>
          <span className="text-[10px] font-medium tracking-wide uppercase text-white/95 bg-[#085536]/85 backdrop-blur-md px-2 py-0.5 rounded-md">
            Resource
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#085536]">
              {product.category}
            </span>
            <div className="flex items-baseline gap-1.5">
              {product.sale_price ? (
                <>
                  <span className="text-lg sm:text-xl font-extrabold text-[#18221D]">
                    ${product.sale_price}
                  </span>
                  <span className="text-xs text-[#5A6B63] line-through">
                    ${product.price}
                  </span>
                </>
              ) : (
                <span className="text-lg sm:text-xl font-extrabold text-[#18221D]">
                  ${product.price}
                </span>
              )}
              <span className="text-[10px] font-bold text-[#5A6B63]">USD</span>
            </div>
          </div>

          <Link
            to={`/products/${product.slug}`}
            className="font-serif-heading mt-2 block text-lg sm:text-xl font-bold text-[#18221D] group-hover:text-[#085536] transition-colors"
          >
            {product.name}
          </Link>

          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5A6B63] line-clamp-2">
            {product.short_description}
          </p>

          {/* Quick list preview */}
          <div className="mt-4 space-y-1.5 border-t border-[#EAE5D9] pt-3 text-xs text-[#18221D]">
            {product.whats_included.slice(0, 2).map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#085536] shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-2 pt-2 border-t border-[#EAE5D9]">
          <Link
            to={`/products/${product.slug}`}
            className="flex-1 rounded-xl border border-[#E5E0D4] bg-[#F6F3EB] py-2.5 text-center text-xs font-semibold text-[#18221D] hover:border-[#085536]/40 transition-colors"
          >
            Details
          </Link>

          {onQuickCheckout ? (
            <button
              onClick={() => onQuickCheckout(product)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#085536] py-2.5 text-center text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#0E7345] hover:-translate-y-0.5"
            >
              <span>Get Resource →</span>
            </button>
          ) : (
            <Link
              to={`/products/${product.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#085536] py-2.5 text-center text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#0E7345] hover:-translate-y-0.5"
            >
              <span>Get Resource →</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
