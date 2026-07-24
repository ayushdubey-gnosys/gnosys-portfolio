import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Sparkles, Calendar, ArrowRight, Award, Cpu, ShieldCheck, Rocket, Layers } from 'lucide-react';

export default function JourneyTimeline() {
  const timelineRef = useRef(null);

  // Track vertical scroll progress inside the timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 50%"]
  });

  // Transform scroll progress to vertical height (0% -> 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineEvents = [
    {
      year: "2014 - 2015",
      badge: "Est. 2014 · Foundation",
      title: "The Studio Was Born",
      description: "Founded in 2014 as a premier full-stack engineering consultancy focused on high-speed web infrastructure and custom PHP/Laravel architecture.",
      highlights: ["Core Architecture", "Custom PHP & Laravel", "100% In-House Team"],
      icon: Award
    },
    {
      year: "2016 - 2017",
      badge: "Early Growth",
      title: "Expanding Capabilities",
      description: "Partnered with fast-growing SMEs to digitize their operations, launching our first series of integrated eCommerce and booking solutions.",
      highlights: ["eCommerce Platforms", "Booking Systems", "Rapid Client Acquisition"],
      icon: Rocket
    },
    {
      year: "2018 - 2019",
      badge: "Architecture & Scale",
      title: "Transition to Complex Systems",
      description: "Began engineering large-scale platforms, adopting modern JavaScript frameworks and designing robust, scalable microservices architectures.",
      highlights: ["React & Node.js", "Microservices", "Scalable Platforms"],
      icon: Layers
    },
    {
      year: "2020 - 2021",
      badge: "Scale & Expansion",
      title: "Enterprise Web Apps & ERP Scaling",
      description: "Expanded our technical teams across global hubs, engineering bespoke multi-site ERP platforms and real-time React + Node single-page applications.",
      highlights: ["Multi-Site ERP Systems", "React + Node SPAs", "Global Engineering Hubs"],
      icon: Cpu
    },
    {
      year: "2022 - 2023",
      badge: "Enterprise Security",
      title: "Cloud Infrastructure & Migration",
      description: "Pioneered proprietary DevOps tools and zero-downtime database replication protocols for mission-critical corporate portals.",
      highlights: ["Zero-Downtime Migrations", "SOC2 Ready Systems", "Automated CI/CD"],
      icon: ShieldCheck
    },
    {
      year: "2024 - Present",
      badge: "Modern Leadership",
      title: "Global Agency Leadership & AI Innovation",
      description: "Recognized for award-winning digital design, high-frequency SLA maintenance suites, and deploying high-performance enterprise platforms worldwide.",
      highlights: ["Award-Winning UX", "Next-Gen AI Systems", "24/7 SLA Monitoring"],
      icon: Sparkles
    }
  ];

  return (
    <div className="max-w-5xl mx-auto pt-8 pb-12">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Interactive Progression · Est. 2014</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Our Journey Since 2014
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-3">
          Scroll down to trace how we evolved from a specialized engineering consultancy into a globally recognized studio for scalable digital products.
        </p>
      </div>

      {/* Scroll-Linked Timeline Container */}
      <div ref={timelineRef} className="relative ml-4 sm:ml-36 py-4">

        {/* Static Background Track Line */}
        <div className="absolute left-4 sm:left-0 top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>

        {/* Animated Scroll-Fill Progress Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 sm:left-0 top-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-blue-500 rounded-full shadow-md shadow-blue-500/50 z-10"
        ></motion.div>

        {/* Timeline Events List */}
        <div className="space-y-16">
          {timelineEvents.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 45, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                  delay: idx * 0.05
                }}
                className="relative pl-12 sm:pl-16 group"
              >
                {/* Node Indicator Dot with Scroll Pop */}
                <motion.div
                  initial={{ scale: 0.8, backgroundColor: "#94A3B8" }}
                  whileInView={{ scale: 1.2, backgroundColor: "#2563EB" }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-[10px] sm:left-[-6px] top-1.5 w-4 h-4 rounded-full ring-4 ring-white shadow-md z-20 group-hover:ring-blue-100 group-hover:scale-125 transition-all"
                ></motion.div>

                {/* Left Year Badge on Desktop / Top Badge on Mobile */}
                <div className="sm:absolute sm:-left-36 sm:top-0 sm:text-right sm:w-28 block mb-2 sm:mb-0">
                  <span className="inline-block sm:block font-mono font-bold text-base sm:text-lg text-blue-600 tracking-tight bg-blue-50 sm:bg-transparent border sm:border-0 border-blue-200 px-3 py-1 sm:p-0 rounded-full">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider hidden sm:block mt-0.5">
                    {item.badge}
                  </span>
                </div>

                {/* Milestone Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-200/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden">

                  {/* Top Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-sm group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 sm:hidden block">
                          {item.badge}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights Pill Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-xs font-semibold text-slate-700 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>

                  {/* Subtle Background Number Watermark */}
                  <div className="absolute -right-4 -bottom-6 font-mono font-bold text-8xl text-slate-100/60 pointer-events-none select-none group-hover:text-blue-500/10 transition-colors">
                    0{idx + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
