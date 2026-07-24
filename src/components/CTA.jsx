import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function CTA() {
  return (
    <section
      className="py-24 sm:py-32 border-none transition-all duration-300 relative overflow-hidden text-slate-900"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 20%, #94a3b8 50%, #64748b 72%, #e2e8f0 90%, #ffffff 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-transparent border border-zinc-200/60 px-3 py-1 rounded-md mb-6">
            Next Steps
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-blue-400 leading-[1.14] mb-6 drop-shadow-sm">
            Let&apos;s Build Something <span className="text-zinc-800">Amazing Together.</span>
          </h2>

          <p className="text-slate-800 text-lg sm:text-md leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            Whether you&apos;re planning a new website, custom software, ERP system, AI solution, or looking to modernize an existing platform, our team is ready to help. Tell us about your project, and we&apos;ll get back to you with the right solution.
          </p>

          <div className="flex items-center justify-center">
            <Button
              href="https://gnosysdigital.com/contact/"
              variant="ghost"
              size="lg"
              iconRight={ArrowUpRight}
              className="!bg-transparent hover:!bg-transparent !border-0 !border-none hover:!border-none !text-slate-950 !shadow-[0_0_20px_4px_rgba(219,234,254,0.85)] hover:!shadow-[0_0_25px_6px_rgba(219,234,254,0.95)] !px-9 !py-4 text-base font-extrabold rounded-full transition-all duration-300 scale-105"
            >
              Start Your Project
            </Button>
          </div>

          <div className="mt-14 pt-8 border-none flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-zinc-600">
            <span className="flex items-center gap-2 text-blue-600">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Guaranteed SLA Delivery
            </span>
            <span className="flex items-center gap-2 text-blue-600 ">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Clean Modular Architecture
            </span>
            <span className="flex items-center gap-2 text-blue-600">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Senior Engineering Cell
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
