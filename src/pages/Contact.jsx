import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Full-Stack Web Application',
    customScope: '',
    currency: 'Rupees (₹)',
    budgetAmount: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 sm:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 font-semibold text-[11px] uppercase tracking-widest mb-5"
          >
            Direct Engineering Access
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-800 leading-[1.16] mb-5"
          >
            Let&apos;s Discuss Your Next <span className="text-blue-600 font-semibold">Digital Architecture.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Schedule a technical consultation directly with our senior software architects and UI design directors. Guaranteed response within 2 business hours.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Executive Commitment */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-1.5">Direct Access</span>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">
                  Direct Contact Channels
                </h3>
              </div>

              <div className="space-y-4 divide-y divide-slate-100">
                <a
                  href="mailto:hello@gnosysdigital.com"
                  className="block pt-2 first:pt-0 hover:opacity-80 transition-opacity group"
                >
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">Email Inquiry</div>
                  <div className="text-sm sm:text-base font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                    hello@gnosysdigital.com
                  </div>
                </a>

                <div className="pt-4">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">Enterprise Desk</div>
                  <div className="text-sm sm:text-base font-medium text-slate-800">
                    +1 (800) 555-GNOSYS
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">Global Studios</div>
                  <div className="text-sm sm:text-base font-medium text-slate-800">
                    San Francisco · London · Milan · Bangalore
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Commitment */}
            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-700">
                Executive Commitment
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                When you submit an inquiry, it is bypassed directly to our C-Level technical directors and lead solution designers. No entry-level sales friction.
              </p>
              <div className="pt-3 border-t border-slate-200/60 text-[11px] text-emerald-600 font-medium tracking-wide">
                Mutual Non-Disclosure Agreement (NDA) Ready
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-2xs relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-14 space-y-5"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto font-semibold text-lg border border-emerald-200">
                  ✓
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 tracking-tight">
                  Inquiry Dispatched Successfully.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-medium text-slate-800">{formData.name}</span>. Your requirements have been routed directly to our senior engineering cell. We will contact you within <span className="text-blue-600 font-medium">2 business hours</span>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', projectType: 'Full-Stack Web Application', customScope: '', currency: 'Rupees (₹)', budgetAmount: '', message: '' }); }}
                    className="px-5 py-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-200/70 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest block mb-1">Technical Brief</span>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">
                    Project Specifications Brief
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Tell us about your technical objectives and timeline requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/60 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm font-normal text-slate-800 outline-none transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alexander@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/60 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm font-normal text-slate-800 outline-none transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Fintech Corp"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/60 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm font-normal text-slate-800 outline-none transition-all shadow-2xs"
                  />
                </div>

                {/* Primary Scope - Selector dropdown with 'Other' option */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Primary Scope *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/60 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm font-normal text-slate-800 outline-none transition-all cursor-pointer shadow-2xs"
                  >
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="Corporate Website">Corporate Website</option>
                    <option value="Enterprise Resource Planning (ERP)">Enterprise Resource Planning (ERP)</option>
                    <option value="Technical SEO & Core Web Vitals">Technical SEO & Core Web Vitals</option>
                    <option value="Zero-Downtime Cloud Migration">Zero-Downtime Cloud Migration</option>
                    <option value="Other">Other</option>
                  </select>
                  {formData.projectType === 'Other' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2.5"
                    >
                      <input
                        type="text"
                        name="customScope"
                        value={formData.customScope}
                        onChange={handleChange}
                        placeholder="Please specify your custom scope..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/60 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm font-normal text-slate-800 outline-none transition-all shadow-2xs"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Estimated Budget - Currency Selector first, then Budget Amount Input */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Estimated Budget Scale *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-4">
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/60 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm font-normal text-slate-800 outline-none transition-all cursor-pointer shadow-2xs"
                      >
                        <option value="Rupees (₹)">Rupees (₹)</option>
                        <option value="Dollar ($)">Dollar ($)</option>
                        <option value="Euro (€)">Euro (€)</option>
                      </select>
                    </div>

                    <div className="sm:col-span-8">
                      <input
                        type="number"
                        name="budgetAmount"
                        required
                        value={formData.budgetAmount}
                        onChange={handleChange}
                        placeholder={
                          formData.currency === 'Rupees (₹)'
                            ? 'Enter amount in Rupees (e.g. 5,00,000)'
                            : formData.currency === 'Dollar ($)'
                            ? 'Enter amount in Dollars (e.g. 25,000)'
                            : 'Enter amount in Euros (e.g. 20,000)'
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/60 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm font-normal text-slate-800 outline-none transition-all shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your architecture goals, timeline requirements, or integration roadblocks..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/60 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm font-normal text-slate-800 outline-none transition-all shadow-2xs resize-none"
                  ></textarea>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
                  <div className="text-[11px] text-slate-400 font-medium">
                    Protected by enterprise SSL encryption.
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    {loading ? 'Dispatching...' : 'Submit Technical Brief'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
