import React, { useState, useMemo, lazy, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import LazySection from '../components/LazySection';
import ScrollProgressButton from '../components/ScrollProgressButton';
import { projectsData } from '../data/projects';

import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import IndustryCollaboration from '../components/IndustryCollaboration';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setVisibleCount(8);
    }
  }, []);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    
    // Preload next 4 images for smooth appearance
    const nextProjects = projectsData.slice(visibleCount, visibleCount + 4);
    const itemsToAdd = nextProjects.length;

    if (itemsToAdd === 0) {
      setIsLoadingMore(false);
      return;
    }

    const imagePromises = nextProjects.map((project) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve; // Resolve on error too to not block
        img.src = project.cover;
      });
    });

    // Wait for images to load (with a minimum 400ms for smooth UI feel)
    Promise.all([
      ...imagePromises,
      new Promise(resolve => setTimeout(resolve, 400))
    ]).then(() => {
      // Add all 4 projects simultaneously
      setVisibleCount((prev) => prev + itemsToAdd);
      setIsLoadingMore(false);
    });
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projectsData.slice(0, visibleCount);
    }
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory, visibleCount]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Section (#hero) */}
      <div id="hero">
        <Hero />
      </div>

      {/* 2. About Us Section (#about) & Journey Timeline */}
      <LazySection minHeight="80vh">
        <AboutSection />
      </LazySection>

      {/* 3. Featured Portfolio & Case Studies (#portfolio) - Exactly right after Journey Timeline */}
      <section id="portfolio" className="pt-16 sm:pt-20 pb-8 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <SectionTitle
          badge="Featured Engineering Work"
          title="Digital Solutions Built for Real Business Challenges"
          subtitle="Explore our portfolio of custom software, websites, ERP systems, eCommerce platforms, and AI solutions. Every project reflects our commitment to quality, performance, and creating measurable value for our clients."
        />

        {/* Filter Buttons */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        {/* Portfolio Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}

          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {activeCategory === 'All' && visibleCount < projectsData.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className={`inline-flex items-center justify-center text-slate-900 gap-2 px-8 py-3.5 rounded-full border border-slate-900/50 cursor-pointer shadow-xl shadow-zinc-900/20 font-semibold text-base transition-all duration-300 group ${isLoadingMore ? 'opacity-80 pointer-events-none' : 'hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white'}`}
            >
              {isLoadingMore ? (
                <>
                  <span className="w-4 h-4 border-[2.5px] border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                  Loading...
                </>
              ) : (
                'Load More Projects'
              )}
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 mt-6">
            <p className="text-slate-500 font-medium">No projects found in this category right now.</p>
          </div>
        )}
      </section>


      {/* 4. Technology Ecosystem Section (#tech-stack) - Placed right after Portfolio */}
      <LazySection id="tech-stack" minHeight="60vh">
        <TechStackSection />
      </LazySection>

      {/* 5. Core Services & Capabilities (#services) */}
      <LazySection id="services" minHeight="80vh">
        <Services />
      </LazySection>

      {/* 6. Visual Screenshots Gallery with Lightbox */}
      <LazySection minHeight="0vh">
        <Gallery />
      </LazySection>

      {/* Industry Collaboration  IIT-IIM section .............. */}
      <LazySection id="academic-alliances" minHeight="0vh">
        <IndustryCollaboration />
      </LazySection>

      {/* 6. Stats Bar */}
      <LazySection minHeight="20vh">
        <Stats />
      </LazySection>

      {/* 8. Contact & Consultation Section (#contact) */}
      <div className="bg-white flex flex-col w-full">
        <ContactSection />
      </div>

      {/* 9. Scroll Progress / Back to Top Button */}
      <ScrollProgressButton />
    </div>
  );
}
