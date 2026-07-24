import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import { techStackChips } from '../data/projects';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 sm:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" /> Comprehensive Agency Capabilities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-slate-900 leading-[1.12] mb-6 max-w-4xl mx-auto"
        >
          Specialized Digital Engineering & <span className="text-blue-600">Enterprise Solutions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
        >
          We partner with ambitious startups and global enterprises to deliver modular software architectures, high-converting digital portals, and ongoing 24/7 SLA infrastructure support.
        </motion.p>

        {/* Colorful Tech Stack Badges Showcase */}
        <div className="max-w-5xl mx-auto pt-8 border-t border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Mastered Technologies & Frameworks
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStackChips.map((chip, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-xl text-sm font-bold border flex items-center gap-2 ${chip.bg} ${chip.text} ${chip.border}`}
              >
                <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                {chip.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid Component */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />
    </div>
  );
}
