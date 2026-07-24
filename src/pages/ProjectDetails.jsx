import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  Zap,
  Sparkles,
  Award,
  Briefcase,
  ArrowUpRight,
  Maximize2,
  X
} from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaPhp, FaLaravel, FaNodeJs, FaServer, FaCloud, FaWordpress, FaAws, FaPython, FaSearch, FaProjectDiagram, FaLock, FaChartBar, FaCogs, FaCubes, FaNetworkWired } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiNginx, SiGithubactions, SiTypescript, SiMariadb, SiVuedotjs, SiAngular, SiNextdotjs } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { projectsData } from '../data/projects';
import ContactSection from '../components/ContactSection';
import ProjectCard from '../components/ProjectCard';

const getTechIconDetails = (techName) => {
  const t = techName.toLowerCase();

  if (t.includes('react')) return { Icon: FaReact, color: '#61DAFB' };
  if (t.includes('typescript')) return { Icon: SiTypescript, color: '#3178C6' };
  if (t.includes('javascript') || t.includes('js')) return { Icon: IoLogoJavascript, color: '#F7DF1E' };
  if (t.includes('html')) return { Icon: FaHtml5, color: '#E34F26' };
  if (t.includes('css')) return { Icon: FaCss3Alt, color: '#1572B6' };
  if (t.includes('tailwind')) return { Icon: SiTailwindcss, color: '#06B6D4' };
  if (t.includes('bootstrap')) return { Icon: FaBootstrap, color: '#7952B3' };
  if (t.includes('sass') || t.includes('scss')) return { Icon: FaSass, color: '#CC6699' };
  if (t.includes('next')) return { Icon: SiNextdotjs, color: '#000000' };
  if (t.includes('vue')) return { Icon: SiVuedotjs, color: '#4FC08D' };
  if (t.includes('angular')) return { Icon: SiAngular, color: '#DD0031' };

  if (t.includes('php')) return { Icon: FaPhp, color: '#777BB4' };
  if (t.includes('laravel')) return { Icon: FaLaravel, color: '#FF2D20' };
  if (t.includes('node') || t.includes('express')) return { Icon: FaNodeJs, color: '#339933' };
  if (t.includes('python')) return { Icon: FaPython, color: '#3776AB' };
  if (t.includes('frappe')) return { Icon: FaCogs, color: '#0089FF' };

  if (t.includes('mariadb')) return { Icon: SiMariadb, color: '#003545' };
  if (t.includes('mysql')) return { Icon: SiMysql, color: '#4479A1' };
  if (t.includes('postgre')) return { Icon: SiPostgresql, color: '#4169E1' };
  if (t.includes('mongo')) return { Icon: SiMongodb, color: '#47A248' };

  if (t.includes('nginx')) return { Icon: SiNginx, color: '#009639' };
  if (t.includes('aws') || t.includes('amazon')) return { Icon: FaAws, color: '#FF9900' };
  if (t.includes('cloud') || t.includes('td web') || t.includes('hosting')) return { Icon: FaCloud, color: '#00A8E1' };
  if (t.includes('server')) return { Icon: FaServer, color: '#555555' };

  if (t.includes('wordpress')) return { Icon: FaWordpress, color: '#21759B' };

  if (t.includes('seo')) return { Icon: FaSearch, color: '#F29F05' };
  if (t.includes('auth') || t.includes('jwt') || t.includes('access')) return { Icon: FaLock, color: '#E84142' };
  if (t.includes('api') || t.includes('rest')) return { Icon: FaNetworkWired, color: '#0078D7' };
  if (t.includes('analytics') || t.includes('dashboard')) return { Icon: FaChartBar, color: '#FF5722' };
  if (t.includes('workflow') || t.includes('enterprise')) return { Icon: FaProjectDiagram, color: '#607D8B' };

  return { Icon: FaCubes, color: '#64748B' };
};

const categorizeTechStack = (techArray) => {
  if (!techArray) return [];
  const categories = {
    'Frontend': [],
    'Backend': [],
    'Database': [],
    'Cloud & Hosting': [],
    'Other': []
  };

  const frontendKeywords = ['html', 'css', 'react', 'next', 'tailwind', 'bootstrap', 'javascript', 'typescript', 'vite', 'jinja', 'ui/ux', 'vue', 'angular'];
  const backendKeywords = ['php', 'laravel', 'node', 'express', 'python', 'django', 'frappe'];
  const dbKeywords = ['mysql', 'postgre', 'mongo', 'mariadb', 'prisma', 'database'];
  const cloudKeywords = ['aws', 'td web', 'cloud', 'hosting', 'nginx', 'ssl', 'domain', 'server', 'amazon', 'flipkart', 'geek crunch'];

  techArray.forEach(tech => {
    const t = tech.toLowerCase();
    if (frontendKeywords.some(kw => t.includes(kw))) {
      categories['Frontend'].push(tech);
    } else if (backendKeywords.some(kw => t.includes(kw))) {
      categories['Backend'].push(tech);
    } else if (dbKeywords.some(kw => t.includes(kw))) {
      categories['Database'].push(tech);
    } else if (cloudKeywords.some(kw => t.includes(kw))) {
      categories['Cloud & Hosting'].push(tech);
    } else {
      categories['Other'].push(tech);
    }
  });

  return Object.entries(categories).filter(([_, items]) => items.length > 0);
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  // Find exact project or fallback to first project
  const projectIndex = projectsData.findIndex((p) =>
    p.slug === slug || p.slug?.toLowerCase() === slug?.toLowerCase()
  );
  const project = projectIndex !== -1 ? projectsData[projectIndex] : projectsData[0];

  // Next, previous, and all other portfolio projects
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length] || projectsData[0];
  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length] || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.slug !== project?.slug);

  // Gather all high-res screenshots for the top slider
  const fallbackScreenshots = [
    project?.cover,
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1920&q=80"
  ];

  const rawImages = (project?.screenshots && project.screenshots.length > 0)
    ? [project.cover, ...project.screenshots]
    : fallbackScreenshots;
  const sliderImages = Array.from(new Set(rawImages.filter(Boolean)));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Auto-skipping turned off as requested (`auto skipping off ho jaye`) so user can study full image
  useEffect(() => {
    // No auto interval
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSlide(0);
  }, [slug]);

  // Continuous Auto-Scroll Animation for Portfolio Carousel
  useEffect(() => {
    let animationFrameId;
    let isRunning = true;

    const scroll = () => {
      if (!isRunning) return;
      const el = carouselRef.current;
      if (el && !isAutoScrollPaused) {
        // Increment scrollLeft smoothly every frame
        el.scrollLeft += 1.2;

        // If we have scrolled through the first set of duplicated projects, reset to 0 seamlessly
        if (el.scrollLeft >= (el.scrollWidth - el.clientWidth) / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrollPaused]);

  if (!project) {
    return (
      <div className="min-h-screen pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
        <Link to="/" className="text-blue-600 font-bold underline">Return to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[72px] pb-20">

      {/* 1. TOP FULL-SCREEN UN-CROPPED SCREENSHOT SLIDER (< > Buttons) */}
      {/* TOP HEADER: Project Heading right below Navbar (`navbar ke baad fir images`) */}
      <div className="w-[96%] max-w-7xl mx-auto px-2 sm:px-4 pt-8 sm:pt-12 pb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-200/80 pb-8 w-full">
          <div className="w-full lg:max-w-5xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-50 text-zinc-800 font-semibold text-xs uppercase tracking-wider mb-3.5 border border-zinc-200/60">
              <Briefcase className="w-3.5 h-3.5 text-zinc-800" /> Project Specifications
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-3.5 leading-[1.22] w-full">
              {project.title}
            </h1>
            <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-normal w-full max-w-none">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            {project.website && project.website !== '#' && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-900 text-white font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>

      {/* 1. SCREENSHOT SHOWCASE WITHOUT BORDER (`border-0`) AND PROFESSIONAL BREATHING SPACE */}
      <div className="w-[96%] max-w-7xl mx-auto px-2 sm:px-4 mb-8">
        <div className="relative w-full bg-slate-950 shadow-2xl border-0 overflow-hidden select-none group">

          {/* Main Image Display Area (Instant Solid Change without Blinking/Fading Animation!) */}
          <img
            src={sliderImages[currentSlide]}
            alt={`${project.title} Screenshot ${currentSlide + 1}`}
            className="w-full h-auto max-h-[1250px] object-contain sm:object-fill block"
          />

          {/* Prominent Left and Right Navigation Buttons (`left and right side button honge jisse user image change kar sakta hai`) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            title="Previous Screenshot"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900/90 hover:bg-zinc-900 text-white flex items-center justify-center backdrop-blur-md border border-white/25 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            title="Next Screenshot"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900/90 hover:bg-zinc-900 text-white flex items-center justify-center backdrop-blur-md border border-white/25 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

        </div>
      </div>

      {/* MULTIPLE IMAGES THUMBNAIL BAR BELOW (`light background as requested`) */}
      {sliderImages && sliderImages.length > 1 && (
        <div className="w-[96%] max-w-[1600px] mx-auto px-2 sm:px-4 mb-20">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-lg shadow-slate-200/50 flex items-center justify-center">
            <div className="flex items-center gap-3 sm:gap-4 w-full overflow-x-auto pb-3 pt-1 px-1 snap-x">
              {sliderImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(idx);
                  }}
                  title={`Screenshot ${idx + 1}`}
                  className={`relative w-20 h-13 sm:w-28 sm:h-18 rounded-xl overflow-hidden shrink-0 transition-all duration-300 border-2 cursor-pointer shadow-sm ${currentSlide === idx
                    ? 'border-zinc-800 scale-105 shadow-md shadow-zinc-800/25 opacity-100 ring-4 ring-zinc-800/20 bg-white z-10'
                    : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-zinc-800 hover:scale-102 bg-slate-100'
                    }`}
                >
                  <img src={imgUrl} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. AUTHENTIC, HUMAN & EXECUTIVE PROFESSIONAL PROJECT BREAKDOWN SECTION (`simple and professional, not AI`) */}
      <div className="w-[96%] max-w-[1600px] mx-auto px-2 sm:px-4">

        {/* Authentic Executive Header */}
        <div className="mb-10 pb-6 border-b border-slate-200/90 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-zinc-600 uppercase tracking-widest block mb-1.5 font-mono">
              Technical Case Study Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Strategic Overview & Solution Architecture
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-[15px] max-w-md leading-relaxed font-normal">
            An in-depth breakdown of project requirements, core engineering obstacles, and our verified technical execution.
          </p>
        </div>

        {/* 3 Executive Summary Cards (`Authentic clean white design without AI rainbow gradients or fake metric badges`) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">

          {/* Card 1: Executive Overview */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/60 flex items-center justify-center font-semibold">
                  <Layers className="w-5 h-5 stroke-[2]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-3">
                Executive Overview
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                {project.overview || 'We executed a comprehensive digital engineering overhaul, modernizing frontend responsiveness, optimizing server-side execution speeds, and establishing rigorous security protocols across all user touchpoints.'}
              </p>
            </div>

          </div>

          {/* Card 2: Core Challenges */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/60 flex items-center justify-center font-semibold">
                  <Zap className="w-5 h-5 stroke-[2]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-3">
                Core Challenges
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                {project.challenges || 'The existing infrastructure struggled with concurrent user traffic, legacy database bottlenecks, and slow loading speeds that negatively impacted user retention and organic search performance.'}
              </p>
            </div>

          </div>

          {/* Card 3: Gnosys Solution */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/60 flex items-center justify-center font-semibold">
                  <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-3">
                Gnosys Solution
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                {project.solution || 'We architected a high-speed microservices framework paired with a custom React frontend. By implementing automated data caching and zero-trust security layers, we achieved sub-second latency across all core features.'}
              </p>
            </div>

          </div>

        </div>

        {/* Key Capabilities & Technology Stack (`Clean split container fitting naturally with page background`) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_2px_16px_rgba(0,0,0,0.02)] p-7 sm:p-10 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left 7 Columns: Key Capabilities */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-400 block mb-2">
                System Highlights
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">
                Key Capabilities & Features
              </h3>

              <div className="space-y-3.5">
                {(project.features && project.features.length > 0 ? project.features : [
                  'Sub-second query execution using optimized database indexing and memory caching',
                  'Enterprise-grade role-based access control (RBAC) with multi-factor authentication',
                  'Responsive design system with fluid typography and interactive UI components',
                  'Automated data backup routines with geo-redundant disaster recovery protocol',
                  'Core Web Vitals tuning achieving 99+ Lighthouse performance ratings across mobile and desktop'
                ]).map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/60"
                  >
                    <div className="w-6 h-6 rounded-md bg-white text-slate-700 border border-slate-200 shadow-2xs flex items-center justify-center shrink-0 font-mono font-semibold text-xs mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-slate-700 font-normal text-sm sm:text-[15px] leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Technology Stack Card (`Premium Enterprise Look`) */}
            <div className="lg:col-span-5 bg-white rounded-[24px] p-7 sm:p-9 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group/stackcard">
              {/* Subtle background gradient decoration */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl group-hover/stackcard:bg-blue-100/50 transition-colors duration-700 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100/80 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Technology Stack
                  </h4>
                </div>
                <p className="text-[13px] sm:text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                  Enterprise-grade frameworks and infrastructure engineered for continuous reliability, security, and speed.
                </p>

                {/* Categorized Tech Chips */}
                <div className="space-y-7">
                  {categorizeTechStack(project.techStack).map(([catName, techs]) => (
                    <div key={catName} className="relative">
                      <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3.5 flex items-center gap-3">
                        {catName}
                        <span className="flex-1 h-[1px] bg-slate-100"></span>
                      </h5>
                      <div className="flex flex-wrap gap-2.5">
                        {techs.map((tech, i) => {
                          const { Icon, color } = getTechIconDetails(tech);
                          return (
                            <span
                              key={i}
                              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#F8FAFC] hover:bg-white text-slate-700 font-bold text-xs sm:text-[13px] border border-slate-200/80 hover:border-blue-300 hover:text-blue-700 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-default"
                            >
                              {Icon ? (
                                <Icon style={{ color: color }} className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
                              ) : (
                                <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shadow-sm ${catName === 'Frontend' ? 'bg-cyan-500 shadow-cyan-500/40' :
                                  catName === 'Backend' ? 'bg-indigo-500 shadow-indigo-500/40' :
                                    catName === 'Database' ? 'bg-emerald-500 shadow-emerald-500/40' :
                                      catName === 'Cloud & Hosting' ? 'bg-purple-500 shadow-purple-500/40' :
                                        'bg-slate-400 shadow-slate-400/40'
                                  }`}></span>
                              )}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Horizontal Scrollable Project Cards Carousel (Full Bleed Edge-to-Edge) */}
      <div className="w-full pb-20">
        <div className="pt-16 border-t border-slate-200">

          {/* Header Title with Watch in Grid button on the right side */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 block mb-2">
                Interactive Showcase · {otherProjects.length} + Projects Available
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Explore Our Complete Portfolio
              </h3>
            </div>

            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 group hover:-translate-y-0.5 self-start sm:self-auto"
            >
              <span>Watch in Grid</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Auto-Scrollable Track (0 Padding - Edge to Edge Off Screen Marquee) */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsAutoScrollPaused(true)}
            onMouseLeave={() => setIsAutoScrollPaused(false)}
            onTouchStart={() => setIsAutoScrollPaused(true)}
            onTouchEnd={() => setIsAutoScrollPaused(false)}
            className="w-full flex overflow-x-auto gap-6 sm:gap-8 pb-8 pt-2 scrollbar-none select-none cursor-grab active:cursor-grabbing px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...otherProjects, ...otherProjects, ...otherProjects, ...otherProjects].map((otherProj, idx) => (
              <div
                key={`${otherProj.id || otherProj.slug}-${idx}`}
                className="min-w-[310px] sm:min-w-[360px] lg:min-w-[380px] max-w-[380px] shrink-0 flex flex-col transition-transform duration-300 hover:-translate-y-1"
              >
                <ProjectCard project={otherProj} />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Contact Section */}
      <ContactSection />
    </div>
  );
}
