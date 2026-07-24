import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from '../components/CategoryFilter';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import { projectsData } from '../data/projects';
import { Sparkles, Layers } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 sm:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-6"
          >
            <Layers className="w-3.5 h-3.5" /> Full Case Studies Archive
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-slate-900 leading-[1.12] mb-6"
          >
            Engineering Portfolio & <span className="text-blue-600">Case Studies.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Explore our complete archive of enterprise investment platforms, commercial websites, proprietary SaaS portals, and zero-downtime database migrations.
          </motion.p>

          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 mt-6">
            <p className="text-slate-500 font-medium">No projects found in this category.</p>
          </div>
        )}
      </div>

      <CTA />
    </div>
  );
}
