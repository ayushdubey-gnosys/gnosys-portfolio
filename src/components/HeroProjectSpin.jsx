import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function HeroProjectSpin({ onSelectProject }) {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeHoverCard, setActiveHoverCard] = useState(null);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  // Select top 8 projects for the spinning ring (`jitne cards the wo hi rakho`)
  const spinProjects = projectsData.slice(0, 8);
  const numCards = spinProjects.length;

  // Continuous 60FPS orbital animation loop (`jese animation pahle tha vesa hi kro`)
  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      if (!isPaused && activeHoverCard === null) {
        // Rotate smoothly by 0.22 degrees per frame (~13 degrees/sec)
        setRotation((prev) => (prev + 0.22) % 360);
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused, activeHoverCard]);

  // Handle clicking a card to scroll to portfolio or open details
  const handleCardClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="relative w-full h-[600px] sm:h-[680px] flex items-center justify-center select-none overflow-visible"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setActiveHoverCard(null);
      }}
    >
      {/* Background Orbit Ring Paths (Half-Circle / Elliptical Guide Lines) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Subtle radial glow at center */}
        <div className="w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Center Hub Orb (`logo ko center me kro`) - zIndex 60 keeps it centered right in the equatorial plane */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-6 sm:mt-10" style={{ zIndex: 60 }}>
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-blue-200/80 shadow-[0_12px_38px_rgba(37,99,235,0.18)] flex items-center justify-center relative group overflow-hidden"
        >
          <img
            src="/gnosysIcon.png"
            alt="Gnosys Digital Icon"
            className="w-full h-full object-cover drop-shadow-md"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </motion.div>
      </div>

      {/* 3D Orbiting Cards Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        {spinProjects.map((project, index) => {
          // Calculate angle for this specific card
          const baseAngle = (index * 360) / numCards;
          const currentAngle = (baseAngle + rotation) % 360;
          const angleRad = (currentAngle * Math.PI) / 180;

          // Elliptical radii: wider horizontally (X), shorter vertically (Y) for 3D half-circle tilt (`jese pahle tha`)
          const radiusX = window.innerWidth < 640 ? 170 : 225;
          const radiusY = window.innerWidth < 640 ? 130 : 170;

          // Position coordinates
          const x = Math.sin(angleRad) * radiusX;
          const y = -Math.cos(angleRad) * radiusY;

          // Z-Depth factor: cos(angleRad) ranges from -1 (top/back) to +1 (bottom/front)
          const depth = Math.cos(angleRad); // -1 to +1

          // Calculate visual scaling and fading based on depth
          const scale = 0.72 + (depth + 1) * 0.18; // Ranges from ~0.72 to 1.08
          const opacity = 0.45 + (depth + 1) * 0.275; // Ranges from ~0.45 to 1.0
          const zIndex = Math.round((depth + 1) * 50); // Ranges from 0 to 100
          const isFront = depth > -0.15; // Active highlighted front zone

          return (
            <div
              key={project.id}
              style={{
                position: 'absolute',
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: opacity,
                zIndex: activeHoverCard === project.id ? 200 : zIndex,
                transition: isPaused ? 'transform 0.3s ease, opacity 0.3s ease' : 'none',
              }}
              className="will-change-transform cursor-pointer"
              onMouseEnter={() => setActiveHoverCard(project.id)}
              onClick={() => handleCardClick(project)}
            >
              <div
                className={`w-48 sm:w-56 rounded-2xl bg-white/95 backdrop-blur-xl transition-all duration-300 overflow-hidden p-2 sm:p-2.5 group ${activeHoverCard === project.id
                    ? 'shadow-2xl shadow-zinc-800/40 scale-110'
                    : isFront
                      ? 'shadow-lg shadow-slate-200/50'
                      : 'shadow-md shadow-slate-200/30'
                  }`}
              >
                {/* Image Cover Preview */}
                <div className="relative h-24 sm:h-28 w-full rounded-xl overflow-hidden bg-slate-100 mb-2 border border-slate-200">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                </div>

                {/* Title and Industry */}
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-950 text-xs sm:text-sm tracking-tight truncate group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">
                      {project.industry || project.description}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Tech Stack Pills (Bottom) */}
                <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100 overflow-hidden">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[8px] font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded-md truncate border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[8px] font-semibold text-slate-500">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
