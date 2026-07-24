import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    website: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <section id="contact" className="pt-8 sm:pt-12 pb-16 sm:pb-24 border-none transition-all duration-300 relative overflow-hidden text-slate-900" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 20%, #f1f5f9 55%, #e2e8f0 85%, #f8fafc 95%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4 items-start">

          {/* Left Column: Next Steps CTA Text */}
          <div className="lg:col-span-6 space-y-6 pt-2">
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-slate-200/50 border border-zinc-200/60 px-3 py-1 rounded-md mb-6">
                Next Steps
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-blue-500 leading-[1.14] mb-4 lg:mb-6">
                Let&apos;s Build Something <span className="text-zinc-800">Amazing Together.</span>
              </h3>
              <p className="text-slate-600 text-md sm:text-md leading-relaxed font-medium max-w-xl">
                Whether you&apos;re planning a new website, custom software, ERP system, AI solution, or looking to modernize an existing platform, our team is ready to help. Tell us about your project, and we&apos;ll get back to you with the right solution.
              </p>

              <div className="pt-6">
                <a
                  href="https://gnosysdigital.com/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-base shadow-lg transition-all duration-300 group hover:-translate-y-0.5"
                >
                  Let&apos;s Connect
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Details */}
          <div className="lg:col-span-5 lg:col-start-8 space-y-10 pt-2 lg:pt-10">
            <div className="space-y-6">
              <a
                href="mailto:connect@gnosysdigital.com"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email</div>
                  <div className="text-lg font-medium text-slate-600 transition-colors">
                    connect@gnosysdigital.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-slate-600 uppercase tracking-wider mb-1">Contact</div>
                  <div className="text-lg font-medium text-slate-700 space-y-1">
                    <div> +91 9016113413</div>
                    <div>+1 647 947 9546</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Commitment */}
            <div className="space-y-4 pt-4 pb-0">
              <div className="text-sm font-bold uppercase tracking-widest text-slate-700">
                Executive Commitment
              </div>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                Inquiries are routed directly to our C-Level technical directors and lead solution designers. No entry-level sales friction.
              </p>
              <div className="pt-2 text-sm text-slate-600 font-semibold tracking-wide">
                Mutual Non-Disclosure Agreement (NDA) Ready
              </div>
            </div>
          </div>

          {/* Left Column: Interactive Consultation Form */}
          <div className="hidden lg:col-span-7 lg:col-start-1 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 relative order-2 lg:order-none">
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
                    onClick={() => { setSubmitted(false); setFormData({ name: '', surname: '', email: '', website: '', subject: '', message: '' }); }}
                    className="px-6 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-medium text-slate-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-slate-700 mb-2">
                      Your Surname <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="surname"
                      required
                      value={formData.surname}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] font-medium text-slate-700 mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-slate-700 mb-2">
                      Website <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-slate-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all text-slate-800 resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#005B96] hover:bg-[#004A7A] text-white rounded-xl font-medium text-base shadow-lg shadow-[#005B96]/30 hover:shadow-[#005B96]/40 hover:-translate-y-0.5 transition-all disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
