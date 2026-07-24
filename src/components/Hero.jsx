import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import HeroProjectSpin from './HeroProjectSpin';

export default function Hero() {
  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-32 pb-10 sm:pt-40 sm:pb-12 lg:pt-44 lg:pb-16 overflow-hidden border-none transition-all duration-300"
      style={{
        background: 'linear-gradient(0deg, #ffffff 0%, #e2e8f0 18%, #94a3b8 45%, #64748b 75%, #334155 100%)'
      }}
    >

      {/* 1. Background Image & Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
          alt="Gnosys Digital Studio Architecture & Engineering Workspace"
          className="w-full h-full object-cover object-center scale-105 opacity-10 mix-blend-overlay"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />

        {/* Subtle glowing accents */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center -mt-4 lg:-mt-8">

          {/* Left Column: High-Contrast Copy over Top/Middle Gradient */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-blue-200 font-medium text-base tracking-widest mb-6"
            >
              <span className=""></span>
              Where Innovation Meets Exceptional Design
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[30px] sm:text-[40px] lg:text-[54px] font-extrabold tracking-tight text-blue-200 leading-[1.08] mb-6 drop-shadow-md"
            >
              Crafting Digital Products That <span className="text-white font-black drop-shadow-sm">Scale Businesses.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-50 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl mb-10 font-medium drop-shadow-sm"
            >
              We build high-performance websites, web applications, enterprise software, SEO solutions, ERP systems and long-term digital products.
            </motion.p>

            {/* Clean Professional Trust Metrics over Light Bottom Area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-14 pt-8 border-t border-slate-400/60 grid grid-cols-2 gap-y-4 gap-x-6 max-w-xl"
            >
              <div className="flex items-center gap-1.5 text-sm text-zinc-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>10+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-zinc-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% In-House Team</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-zinc-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>End-to-End Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-zinc-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Long-Term Partnership</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Half-Circle Orbital Project Cards Ring */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full">
            <HeroProjectSpin />
          </div>

        </div>
      </div>
    </section>
  );
}
