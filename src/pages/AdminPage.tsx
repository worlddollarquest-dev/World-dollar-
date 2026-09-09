import React, { useState } from 'react';
import { store } from '../lib/store';
import { Tool, DigitalProduct } from '../types';
import {
  LayoutDashboard,
  Wrench,
  ShoppingBag,
  Mail,
  Sliders,
  TrendingUp,
  ExternalLink,
  Plus,
  RefreshCw,
  Check,
  ToggleLeft,
  ToggleRight,
  ShieldCheck,
  Search,
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tools' | 'products' | 'subscribers' | 'settings'>('overview');

  const tools = store.getTools();
  const products = store.getProducts();
  const orders = store.getOrders();
  const subscribers = store.getSubscribers();
  const settings = store.getSettings();
  const events = store.getEvents();

  const totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0);
  const totalAffiliateClicks = events.filter((e) => e.event_name === 'affiliate_click').length;

  const [editingTool, setEditingTool] = useState<Tool | null>(null);
  const [newCustomLink, setNewCustomLink] = useState('');
  const [saveMessage, setSaveMessage] = useState('');

  const handleToggleAffiliate = (tool: Tool) => {
    store.saveTool({ ...tool, affiliate_enabled: !tool.affiliate_enabled });
    setSaveMessage(`Affiliate status toggled for ${tool.name}!`);
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleUpdateCustomLink = (tool: Tool) => {
    store.saveTool({ ...tool, affiliate_url: newCustomLink.trim() || tool.affiliate_url });
    setSaveMessage(`Outbound referral link updated for ${tool.name}!`);
    setEditingTool(null);
    setNewCustomLink('');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE5D9] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-[#085536] px-2 py-0.5 text-xs font-bold text-white uppercase tracking-wider">
              Admin & CMS Dashboard
            </span>
            <span className="text-xs text-[#5A6B63]">Local Storage Synchronized</span>
          </div>
          <h1 className="font-serif-heading mt-2 text-3xl font-extrabold text-[#18221D]">
            WorldDollar Management Console
          </h1>
        </div>

        <button
          onClick={() => {
            if (confirm('Are you sure you want to reset all store data to default demo state?')) {
              store.resetToDefaults();
              window.location.reload();
            }
          }}
          className="inline-flex items-center gap-2 rounded-xl border border-[#E5E0D4] bg-white px-4 py-2 text-xs font-semibold text-[#5A6B63] hover:border-red-500 hover:text-red-600 transition-colors self-start sm:self-center"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span>Reset Demo Data</span>
        </button>
      </div>

      {saveMessage && (
        <div className="rounded-xl bg-emerald-100 border border-emerald-300 p-3 text-xs font-semibold text-emerald-800">
          {saveMessage}
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#EAE5D9] pb-3">
        {[
          { id: 'overview', label: 'Overview & Metrics', icon: LayoutDashboard },
          { id: 'tools', label: 'Tools & Affiliate Links', icon: Wrench },
          { id: 'products', label: 'Products & Orders', icon: ShoppingBag },
          { id: 'subscribers', label: 'Subscribers & Leads', icon: Mail },
          { id: 'settings', label: 'Site Settings', icon: Sliders },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-[#085536] text-white shadow-sm'
                : 'border border-[#E5E0D4] bg-[#FDFBF7] text-[#5A6B63] hover:border-[#085536]/30'
            }`}
          >
            <tab.icon className="h-3.5 w-3.5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metric Tiles */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B63]">
                Total Orders (Digital Store)
              </span>
              <div className="mt-2 text-3xl font-black text-[#18221D]">
                {orders.length}
              </div>
              <span className="text-[11px] text-[#085536] font-medium mt-1 block">
                ${totalRevenue} USD Total Value
              </span>
            </div>

            <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B63]">
                Affiliate Outbound Clicks
              </span>
              <div className="mt-2 text-3xl font-black text-[#18221D]">
                {totalAffiliateClicks}
              </div>
              <span className="text-[11px] text-[#5A6B63] mt-1 block">
                Logged with UTM attribution
              </span>
            </div>

            <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B63]">
                Email Subscribers
              </span>
              <div className="mt-2 text-3xl font-black text-[#18221D]">
                {subscribers.length}
              </div>
              <span className="text-[11px] text-[#085536] font-medium mt-1 block">
                100% Opt-in Verified
              </span>
            </div>

            <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B63]">
                Active Catalog Tools
              </span>
              <div className="mt-2 text-3xl font-black text-[#18221D]">
                {tools.length}
              </div>
              <span className="text-[11px] text-[#5A6B63] mt-1 block">
                {tools.filter((t) => t.affiliate_enabled).length} Affiliate Links Active
              </span>
            </div>
          </div>

          {/* Recent Outbound Events Log */}
          <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6">
            <h2 className="font-serif-heading text-xl font-bold text-[#18221D]">
              Recent Activity & Event Stream
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-[#EAE5D9] bg-[#F6F3EB] text-[#18221D]">
                  <tr>
                    <th className="py-2.5 px-3 font-bold">Timestamp</th>
                    <th className="py-2.5 px-3 font-bold">Event Type</th>
                    <th className="py-2.5 px-3 font-bold">Payload Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE5D9]">
                  {events.slice(0, 10).map((ev) => (
                    <tr key={ev.id} className="hover:bg-[#F6F3EB]/40">
                      <td className="py-2.5 px-3 text-[#5A6B63] whitespace-nowrap">
                        {new Date(ev.timestamp).toLocaleTimeString()}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-[#085536]">
                        {ev.event_name}
                      </td>
                      <td className="py-2.5 px-3 text-[#18221D]">
                        <code className="text-[11px] bg-[#F6F3EB] px-1.5 py-0.5 rounded">
                          {JSON.stringify(ev.metadata)}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TOOLS & AFFILIATES */}
      {activeTab === 'tools' && (
        <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 space-y-6">
          <div>
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              Manage Tools & Referral Links
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
              Control whether tools route through referral URLs with UTM parameters or clean direct URLs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-xs">
              <thead className="border-b border-[#EAE5D9] bg-[#F6F3EB] text-[#18221D]">
                <tr>
                  <th className="py-3 px-3 font-bold">Tool</th>
                  <th className="py-3 px-3 font-bold">Category</th>
                  <th className="py-3 px-3 font-bold">Affiliate Mode</th>
                  <th className="py-3 px-3 font-bold">Affiliate URL</th>
                  <th className="py-3 px-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE5D9]">
                {tools.map((tool) => (
                  <tr key={tool.id} className="hover:bg-[#F6F3EB]/40">
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="h-8 w-8 rounded-lg object-cover border border-[#E5E0D4]"
                        />
                        <div>
                          <div className="font-bold text-[#18221D]">{tool.name}</div>
                          <div className="text-[10px] text-[#5A6B63]">{tool.slug}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-[#5A6B63]">
                      {tool.category}
                    </td>

                    <td className="py-3 px-3">
                      <button
                        onClick={() => handleToggleAffiliate(tool)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                          tool.affiliate_enabled
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tool.affiliate_enabled ? (
                          <>
                            <Check className="h-3 w-3" />
                            <span>Active Affiliate</span>
                          </>
                        ) : (
                          <span>Direct Link Only</span>
                        )}
                      </button>
                    </td>

                    <td className="py-3 px-3 text-[#5A6B63] max-w-xs truncate">
                      {tool.affiliate_url || tool.website_url}
                    </td>

                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={() => {
                          setEditingTool(tool);
                          setNewCustomLink(tool.affiliate_url || '');
                        }}
                        className="rounded-lg border border-[#E5E0D4] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#18221D] hover:bg-[#F6F3EB]"
                      >
                        Edit URL
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Edit Custom Affiliate Link Dialog */}
          {editingTool && (
            <div className="rounded-2xl border border-[#085536]/30 bg-[#F6F3EB] p-5 mt-6">
              <h3 className="font-bold text-sm text-[#18221D]">
                Set Referral URL for {editingTool.name}
              </h3>
              <p className="text-xs text-[#5A6B63] mt-1">
                Enter your unique referral partner URL.
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  type="url"
                  value={newCustomLink}
                  onChange={(e) => setNewCustomLink(e.target.value)}
                  placeholder="https://..."
                  className="h-10 flex-1 rounded-xl border border-[#E5E0D4] bg-white px-3 text-xs text-[#18221D] focus:outline-none focus:border-[#085536]"
                />
                <button
                  onClick={() => handleUpdateCustomLink(editingTool)}
                  className="rounded-xl bg-[#085536] px-4 text-xs font-bold text-white hover:bg-[#0E7345]"
                >
                  Save Link
                </button>
                <button
                  onClick={() => setEditingTool(null)}
                  className="rounded-xl border border-[#E5E0D4] bg-white px-4 text-xs font-semibold text-[#5A6B63]"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: PRODUCTS & ORDERS */}
      {activeTab === 'products' && (
        <div className="space-y-8">
          <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6">
            <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
              Customer Order Logs
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
              All completed test checkouts with customer emails, order numbers, and download tokens.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-[#EAE5D9] bg-[#F6F3EB] text-[#18221D]">
                  <tr>
                    <th className="py-2.5 px-3 font-bold">Order #</th>
                    <th className="py-2.5 px-3 font-bold">Date</th>
                    <th className="py-2.5 px-3 font-bold">Customer Email</th>
                    <th className="py-2.5 px-3 font-bold">Product</th>
                    <th className="py-2.5 px-3 font-bold">Amount</th>
                    <th className="py-2.5 px-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE5D9]">
                  {orders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-[#F6F3EB]/40">
                      <td className="py-2.5 px-3 font-bold text-[#18221D]">
                        #{ord.order_number}
                      </td>
                      <td className="py-2.5 px-3 text-[#5A6B63]">
                        {new Date(ord.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-2.5 px-3 text-[#18221D]">
                        {ord.customer_email}
                      </td>
                      <td className="py-2.5 px-3 text-[#5A6B63]">
                        {ord.product_name}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-[#085536]">
                        ${ord.amount} {ord.currency}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 uppercase">
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SUBSCRIBERS */}
      {activeTab === 'subscribers' && (
        <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6">
          <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
            Subscriber Registry
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#5A6B63]">
            Subscribers captured from newsletter forms and lead magnet downloads.
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#EAE5D9] bg-[#F6F3EB] text-[#18221D]">
                <tr>
                  <th className="py-2.5 px-3 font-bold">Email</th>
                  <th className="py-2.5 px-3 font-bold">Acquisition Source</th>
                  <th className="py-2.5 px-3 font-bold">Campaign</th>
                  <th className="py-2.5 px-3 font-bold">Consent Timestamp</th>
                  <th className="py-2.5 px-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE5D9]">
                {subscribers.map((sub) => (
                  <tr key={sub.id} className="hover:bg-[#F6F3EB]/40">
                    <td className="py-2.5 px-3 font-bold text-[#18221D]">
                      {sub.email}
                    </td>
                    <td className="py-2.5 px-3 text-[#5A6B63]">
                      {sub.source}
                    </td>
                    <td className="py-2.5 px-3 text-[#5A6B63]">
                      {sub.campaign || 'Weekly Quest'}
                    </td>
                    <td className="py-2.5 px-3 text-[#5A6B63]">
                      {new Date(sub.consent_timestamp).toLocaleString()}
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 5: SITE SETTINGS */}
      {activeTab === 'settings' && (
        <div className="rounded-2xl border border-[#EAE5D9] bg-[#FDFBF7] p-6 space-y-6">
          <h2 className="font-serif-heading text-2xl font-bold text-[#18221D]">
            Monetization & Compliance Toggles
          </h2>

          <div className="space-y-4 max-w-xl">
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F3EB] border border-[#E5E0D4]">
              <div>
                <span className="font-bold text-sm text-[#18221D] block">
                  Affiliate Tracking Engine
                </span>
                <span className="text-xs text-[#5A6B63]">
                  Attaches referral query parameters to outbound partner links.
                </span>
              </div>
              <button
                onClick={() => {
                  store.updateSettings({ affiliate_tracking_enabled: !settings.affiliate_tracking_enabled });
                  setSaveMessage('Affiliate tracking setting updated!');
                  setTimeout(() => setSaveMessage(''), 3000);
                }}
                className="text-[#085536]"
              >
                {settings.affiliate_tracking_enabled ? (
                  <ToggleRight className="h-8 w-8 fill-[#085536] text-[#085536]" />
                ) : (
                  <ToggleLeft className="h-8 w-8 text-[#5A6B63]" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F3EB] border border-[#E5E0D4]">
              <div>
                <span className="font-bold text-sm text-[#18221D] block">
                  Membership Waitlist
                </span>
                <span className="text-xs text-[#5A6B63]">
                  Enables the Quest Guild membership interest teaser.
                </span>
              </div>
              <button
                onClick={() => {
                  store.updateSettings({ membership_waitlist_enabled: !settings.membership_waitlist_enabled });
                  setSaveMessage('Membership waitlist setting updated!');
                  setTimeout(() => setSaveMessage(''), 3000);
                }}
                className="text-[#085536]"
              >
                {settings.membership_waitlist_enabled ? (
                  <ToggleRight className="h-8 w-8 fill-[#085536] text-[#085536]" />
                ) : (
                  <ToggleLeft className="h-8 w-8 text-[#5A6B63]" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F3EB] border border-[#E5E0D4]">
              <div>
                <span className="font-bold text-sm text-[#18221D] block">
                  Editorial Sponsorships Slots
                </span>
                <span className="text-xs text-[#5A6B63]">
                  Allow transparent sponsored partner slots in category listings.
                </span>
              </div>
              <button
                onClick={() => {
                  store.updateSettings({ sponsorships_enabled: !settings.sponsorships_enabled });
                  setSaveMessage('Sponsorship setting updated!');
                  setTimeout(() => setSaveMessage(''), 3000);
                }}
                className="text-[#085536]"
              >
                {settings.sponsorships_enabled ? (
                  <ToggleRight className="h-8 w-8 fill-[#085536] text-[#085536]" />
                ) : (
                  <ToggleLeft className="h-8 w-8 text-[#5A6B63]" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
