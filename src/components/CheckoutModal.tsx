import React, { useState } from 'react';
import { DigitalProduct, Order } from '../types';
import { store } from '../lib/store';
import {
  X,
  ShieldCheck,
  Download,
  CheckCircle2,
  Lock,
  CreditCard,
  ArrowRight,
  FileCheck,
} from 'lucide-react';

interface CheckoutModalProps {
  product: DigitalProduct | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, onClose }) => {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const [downloaded, setDownloaded] = useState(false);

  if (!product) return null;

  const finalPrice = product.sale_price || product.price;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsProcessing(true);
    store.trackEvent('product_checkout_start', {
      product_id: product.id,
      product_name: product.name,
      amount: finalPrice,
      currency: product.currency,
    });

    // Simulate secure server-side checkout process
    setTimeout(() => {
      const newOrder = store.createOrder({
        product,
        customerEmail: email,
      });
      setOrder(newOrder);
      setIsProcessing(false);
    }, 1200);
  };

  const handleSimulatedDownload = () => {
    setDownloaded(true);
    store.trackEvent('resource_download', {
      product_id: product.id,
      file_name: product.digital_file_name,
      token: order?.download_token,
    });

    // Trigger mock file download
    const element = document.createElement('a');
    const file = new Blob(
      [
        `======================================================\nWorldDollar.quest — Official Digital Resource\n======================================================\n\nProduct: ${product.name}\nOrder Number: ${order?.order_number}\nAuthorized Licensee: ${order?.customer_email}\nDate: ${order?.created_at}\n\nWHAT'S INCLUDED IN THIS PACKAGE:\n${product.whats_included.map((w, idx) => `${idx + 1}. ${w}`).join('\n')}\n\nKEY IMPLEMENTATION ROADMAP:\n${product.preview_details.map((p, idx) => `• ${p}`).join('\n')}\n\n======================================================\nSupport & Updates: support@worlddollar.quest\nYour quest to build skills, find opportunities, and earn online.\n======================================================`,
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = product.digital_file_name.replace('.zip', '.txt').replace('.pdf', '.txt');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[#E5E0D4] bg-[#FDFBF7] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EAE5D9] px-6 py-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#085536]">
            <Lock className="h-4 w-4" />
            <span>Secure Digital Delivery</span>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#5A6B63] hover:bg-[#F6F3EB]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {order ? (
            /* Success State: "Your resource is ready" */
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#085536]/10 text-[#085536]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-serif-heading mt-4 text-2xl font-bold text-[#18221D]">
                Your resource is ready.
              </h3>
              <p className="mt-2 text-sm text-[#5A6B63]">
                Order <strong className="text-[#18221D]">#{order.order_number}</strong> has been generated for{' '}
                <strong className="text-[#18221D]">{order.customer_email}</strong>.
              </p>

              <div className="my-6 rounded-xl border border-[#085536]/20 bg-[#085536]/5 p-4 text-left">
                <div className="flex items-center justify-between text-xs font-semibold text-[#085536]">
                  <span>Authorized Package</span>
                  <span>{product.file_size}</span>
                </div>
                <div className="mt-1 font-bold text-[#18221D]">{product.name}</div>
                <div className="mt-1 text-xs text-[#5A6B63]">
                  Digital file: {product.digital_file_name}
                </div>
              </div>

              <button
                onClick={handleSimulatedDownload}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#085536] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0E7345] transition-all"
              >
                <Download className="h-4 w-4" />
                <span>{downloaded ? 'Download Again' : 'Download Your Resource Now'}</span>
              </button>

              <p className="mt-4 text-xs text-[#5A6B63]">
                A backup access link with token <code className="text-[10px] bg-[#EAE5D9] px-1.5 py-0.5 rounded">{order.download_token.substring(0, 14)}...</code> has been sent to your email.
              </p>
            </div>
          ) : (
            /* Checkout Form */
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-[#EAE5D9] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#085536]">
                    {product.product_type}
                  </span>
                  <h4 className="font-serif-heading text-xl font-bold text-[#18221D]">
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#5A6B63] mt-1">{product.short_description}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-black text-[#18221D]">${finalPrice}</div>
                  <div className="text-[11px] text-[#5A6B63]">One-time payment</div>
                </div>
              </div>

              <form onSubmit={handleCheckoutSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18221D]">
                    Your Email Address (where resource file is sent)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    required
                    className="mt-1.5 h-11 w-full rounded-xl border border-[#E5E0D4] bg-white px-4 text-sm text-[#18221D] placeholder:text-[#5A6B63]/60 focus:border-[#085536] focus:outline-none"
                  />
                </div>

                <div className="rounded-xl border border-[#E5E0D4] bg-[#F6F3EB] p-3 text-xs text-[#5A6B63]">
                  <div className="flex items-center gap-2 font-medium text-[#18221D]">
                    <CreditCard className="h-4 w-4 text-[#085536]" />
                    <span>Instant Payment Processing Integration</span>
                  </div>
                  <p className="mt-1">
                    Environment test mode: Card details are securely tokenized. No real charges are made during this verification sandbox.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#085536] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0E7345] transition-all disabled:opacity-70"
                >
                  {isProcessing ? (
                    <span>Authorizing Download...</span>
                  ) : (
                    <>
                      <span>Complete Order & Access (${finalPrice} USD)</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#5A6B63]">
                <ShieldCheck className="h-4 w-4 text-[#085536]" />
                <span>30-Day Money-Back Guarantee · Instant Download Access</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
