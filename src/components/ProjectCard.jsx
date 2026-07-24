import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default React.memo(function ProjectCard({ project, index = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`group relative flex flex-col p-[2px] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 bg-white border border-slate-200/80 hover:border-transparent ${className}`}
    >
      {/* Animated Glowing Border Beam (Visible on Hover) */}
      <div className="absolute inset-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none magic-border-bg z-0"></div>

      {/* Inner Card Content */}
      <div className="relative z-10 flex flex-col flex-grow w-full bg-white rounded-[14px] overflow-hidden">
        {/* Sleek Widescreen Thumbnail (Clean without floating category or year badges) */}
        <div className="relative overflow-hidden aspect-[16/9] bg-slate-100 shrink-0">
          <Link to={`/project/${project.slug}`} className="block w-full h-full">
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle dark tint on hover to pop the image */}
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Compact & Stylish Content Area */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          
          {/* Title */}
          <Link to={`/project/${project.slug}`} className="group/title block mb-1.5">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover/title:text-blue-600 transition-colors line-clamp-1">
              {project.title}
            </h3>
          </Link>

          {/* Compact Description */}
          <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mb-3 flex-grow font-normal">
            {project.description?.split(' ').length > 18 ? (
              <>
                {project.description.split(' ').slice(0, 18).join(' ')}...{' '}
                <span className="text-blue-600 font-medium whitespace-nowrap">more</span>
              </>
            ) : (
              project.description
            )}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack?.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md bg-[#F8FAFC] text-slate-700 text-[11px] font-semibold border border-slate-200/70"
              >
                {tech}
              </span>
            ))}
            {project.techStack?.length > 3 && (
              <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[11px] font-semibold">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Card Footer: Single Stylish 'Explore' Button */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-start gap-3 mt-auto">
            <Link
              to={`/project/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
});
