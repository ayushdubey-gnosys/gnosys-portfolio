import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200/50 z-[100] pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 origin-left"
        style={{ width: `${progress}%` }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
    </div>
  );
}
