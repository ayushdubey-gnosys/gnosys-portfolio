import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Cloud, Cpu, ArrowRight, GitBranch } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaPhp, FaLaravel, FaNodeJs, FaServer, FaCloud, FaPython, FaCogs, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiNginx, SiGithubactions, SiJavascript, SiNextdotjs, SiDjango, SiSupabase } from 'react-icons/si';
import SectionTitle from './SectionTitle';

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('frontend');

  const techCategories = [
    {
      id: 'frontend',
      title: 'Styling & Frontend',
      subtitle: 'High-speed UI & modern layout engineering',
      icon: Layout,
      colorClass: 'text-blue-600 bg-blue-50 border-blue-200',
      activeBorder: 'border-transparent shadow-xl shadow-blue-500/20',
      lineColor: 'bg-blue-600',
      footerStat: 'Sub-second UI Rendering',
      technologies: [
        { name: 'HTML5', desc: 'Semantic, SEO-ready structure with clean DOM hierarchy', icon: FaHtml5, iconColor: '#E34F26' },
        { name: 'CSS / Vanilla CSS', desc: 'Custom keyframes, CSS grid systems & zero-overhead styling', icon: FaCss3Alt, iconColor: '#1572B6' },
        { name: 'JavaScript (ES6+)', desc: 'Interactive UI logic, DOM handling & client-side functionality', icon: SiJavascript, iconColor: '#F7DF1E' },
        { name: 'Tailwind CSS', desc: 'Utility-first responsive design with custom design tokens', icon: SiTailwindcss, iconColor: '#06B6D4' },
        { name: 'Bootstrap', desc: 'Enterprise component scaffolding & grid frameworks', icon: FaBootstrap, iconColor: '#7952B3' },
        { name: 'SCSS / Sass', desc: 'Modular pre-processor architecture with nested styling', icon: FaSass, iconColor: '#CC6699' },
        { name: 'React.js', desc: 'Component-driven interactive single page applications', icon: FaReact, iconColor: '#61DAFB' },
        { name: 'Next.js', desc: 'Server-side rendering, static generation & performance optimization', icon: SiNextdotjs, iconColor: '#000000' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Frameworks',
      subtitle: 'Robust APIs & mission-critical server logic',
      icon: Server,
      colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      activeBorder: 'border-transparent shadow-xl shadow-indigo-500/20',
      lineColor: 'bg-indigo-600',
      footerStat: 'High-Concurrency Architecture',
      technologies: [
        { name: 'Laravel (PHP)', desc: 'Enterprise ORM, queues, authentication, event broadcasting & security layers', icon: FaLaravel, iconColor: '#FF2D20' },
        { name: 'Node.js + Express.js', desc: 'Event-driven runtime, middleware routing, microservices & RESTful APIs', icon: FaNodeJs, iconColor: '#339933' },
        { name: 'Python + Django', desc: 'Rapid backend development, scalable APIs, authentication & ORM-driven applications', icon: SiDjango, iconColor: '#092E20' },
        { name: 'Frappe Framework', desc: 'ERP-style business applications, workflows, role permissions & rapid customization', icon: FaCogs, iconColor: '#0089FF' }
      ]
    },
    {
      id: 'databases',
      title: 'Database Engines',
      subtitle: 'Scalable relational & NoSQL data storage',
      icon: Database,
      colorClass: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      activeBorder: 'border-transparent shadow-xl shadow-emerald-500/20',
      lineColor: 'bg-emerald-600',
      footerStat: 'ACID & High-TPS Architecture',
      technologies: [
        { name: 'PostgreSQL / Supabase', desc: 'Advanced relational queries, real-time databases, authentication & enterprise-grade data integrity', icon: SiSupabase, iconColor: '#3ECF8E' },
        { name: 'MySQL', desc: 'High-frequency transactional queries & multi-node replication', icon: SiMysql, iconColor: '#4479A1' },
        { name: 'MongoDB', desc: 'Document-oriented NoSQL schema for flexible big-data workloads', icon: SiMongodb, iconColor: '#47A248' },
        { name: 'Docker', desc: 'Containerized deployments, environment consistency & scalable application delivery', icon: FaDocker, iconColor: '#2496ED' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & Web Servers',
      subtitle: 'Zero-downtime deployment & infrastructure',
      icon: Cloud,
      colorClass: 'text-amber-600 bg-amber-50 border-amber-200',
      activeBorder: 'border-transparent shadow-xl shadow-amber-500/20',
      lineColor: 'bg-amber-600',
      footerStat: '99.99% Global Uptime SLA',
      technologies: [
        { name: 'Nginx / Apache', desc: 'High-concurrency web server reverse proxy & SSL termination', icon: SiNginx, iconColor: '#009639' },
        { name: 'TD Web Server', desc: 'Hardened Ubuntu / Alma Linux production cloud instances', icon: FaServer, iconColor: '#475569' },
        { name: 'Cloud Deployment', desc: 'TD Web Server, VPS clusters & auto-scaling container environments', icon: FaCloud, iconColor: '#0284C7' },
        { name: 'CI/CD Pipelines', desc: 'Automated GitHub actions & Docker deployment workflows', icon: SiGithubactions, iconColor: '#2088FF' }
      ]
    }
  ];

  const currentCategory = techCategories.find((c) => c.id === activeTab) || techCategories[0];

  return (
    <section id="tech-stack" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          badge="Technology Architecture"
          title="Engineered With Best-In-Class Technologies."
          subtitle="Click our 4 core engineering pillars below to trace how specialized tools branch into robust, enterprise-grade architectures."
        />

        {/* Clean, Simple & Professional Tree Architecture Layout */}
        <div className="flex flex-col gap-8 lg:gap-10 mt-12 relative">

          {/* TOP ROW: 4 Clean Category Buttons */}
          <div className="flex flex-row overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-4 w-full snap-x justify-start lg:justify-center">
            {techCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;

              return (
                <div
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`group relative flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none shrink-0 snap-center min-w-[260px] ${isActive
                    ? `bg-white ${category.activeBorder} scale-[1.02] shadow-md z-20`
                    : 'bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                    }`}
                >
                  {/* Bottom Accent Bar on Active Card */}
                  {isActive && (
                    <motion.div
                      layoutId="cleanIndicator"
                      className={`absolute bottom-[-1px] left-6 right-6 h-[3px] rounded-t-full ${category.lineColor}`}
                    />
                  )}

                  {/* Connecting Branch Line to the Panel below (Visible on Desktop) */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: '2.5rem' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`absolute top-[100%] left-1/2 -translate-x-1/2 w-[2px] ${category.lineColor} z-10 hidden lg:flex flex-col items-center justify-end`}
                    >
                      <div className={`w-2 h-2 rounded-full ${category.lineColor} -mb-1`} />
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold border shrink-0 transition-all duration-300 ${isActive ? category.colorClass : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-slate-100'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-[15px] font-bold tracking-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-800 group-hover:text-blue-600'}`}>
                      {category.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM ROW: Simple & Professional Horizontal Tree Branch Sprout */}
          <div className="w-full bg-white rounded-[24px] p-6 sm:p-8 border border-slate-200 shadow-sm overflow-hidden flex flex-col relative">

            {/* Header of Tree Panel */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${currentCategory.colorClass}`}>
                  <GitBranch className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {currentCategory.title} Architecture
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Sprouting {currentCategory.technologies.length} specialized modules
                  </p>
                </div>
              </div>
            </div>

            {/* Tree Branch Visual Area */}
            <div className="relative mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full pt-2 pb-2">
                <AnimatePresence mode="wait">
                  {currentCategory.technologies.map((tech, idx) => (
                    <motion.div
                      key={`${currentCategory.id}-${tech.name}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25, delay: idx * 0.05 }}
                      className="relative group/tech flex flex-col items-center px-3 sm:px-4 pb-8"
                    >
                      {/* Horizontal Spine Segment (Connects across grid cells!) */}
                      <div className="absolute top-[5px] left-0 right-0 h-[2px] bg-slate-200/90 hidden md:block" />

                      {/* Node Dot at Trunk */}
                      <div className={`w-3 h-3 rounded-full ${currentCategory.lineColor} z-10 border-2 border-white box-content relative`} />

                      {/* Vertical Branch Line connecting to Spine */}
                      <div className="w-[2px] h-8 bg-slate-200/90" />

                      {/* Clean Technology Card */}
                      <div className="group/card relative w-full p-[2px] rounded-2xl bg-white border border-slate-200/80 hover:border-transparent transition-all shadow-sm overflow-hidden cursor-pointer hover-magic-glow h-full">
                        <div className="absolute inset-[-50%] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none magic-border-bg z-0"></div>
                        <div className="relative z-10 w-full p-[18px] rounded-[14px] bg-white flex flex-col items-center text-center gap-3 h-full">
                          {tech.icon && (
                            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110">
                              <tech.icon className="w-8 h-8" style={{ color: tech.iconColor }} />
                            </div>
                          )}
                          <div>
                            <h4 className="font-bold text-slate-900 text-base tracking-tight group-hover/card:text-blue-600 transition-colors">
                              {tech.name}
                            </h4>
                            <p className="text-[13px] text-slate-500 font-medium leading-relaxed mt-2">
                              {tech.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
