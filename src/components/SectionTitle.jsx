import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function SectionTitle({ badge, title, subtitle, align = 'center', className = '' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-50 text-zinc-700 font-semibold text-[11px] sm:text-xs uppercase tracking-wider mb-4 border border-zinc-200/60 ${isCenter ? 'mx-auto' : ''}`}>
          <Briefcase className="w-3.5 h-3.5 text-zinc-700" /> {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-800 leading-[1.2] mb-3.5">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-600 text-sm sm:text-base leading-relaxed font-normal ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
