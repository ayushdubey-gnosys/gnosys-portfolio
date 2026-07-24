import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Code2, Cpu, ShieldCheck, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';
import JourneyTimeline from './JourneyTimeline';

export default function AboutSection() {
  const coreValues = [
    {
      icon: Code2,
      title: "Senior Engineering Expertise",
      desc: "Our experienced team follows modern development standards, clean architecture, and industry best practices to build reliable solutions that remain easy to maintain and scale as your business grows."
    },
    {
      icon: Cpu,
      title: "Performance by Design",
      desc: "Every solution is optimized for speed, accessibility, SEO, and Core Web Vitals, delivering an exceptional user experience that improves engagement, conversions, and long-term business performance."
    },
    {
      icon: ShieldCheck,
      title: "Security & Reliability",
      desc: "From secure authentication and role-based access controls to regular code reviews and infrastructure best practices, we build systems that businesses can confidently rely on every day."
    },
    {
      icon: Users,
      title: "A Long-Term Technology Partner",
      desc: "We don't disappear after launch. We work as an extension of your team, providing ongoing support, enhancements, performance optimization, and strategic technical guidance as your business evolves."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Who We Are · Est. 2014"
          title="Engineering Digital Solutions That Drive Business Growth"
          subtitle={
            <>
              Since 2014, Gnosys Digital has partnered with startups, SMEs, and established businesses to build websites, custom software, ERP systems, eCommerce platforms, and AI-powered solutions that solve real business challenges.
              <br /><br />
              We combine strategic thinking, world-class design, and senior engineering expertise to deliver digital products that are fast, secure, scalable, and built for long-term success. Every project is developed by our in-house team, ensuring consistent quality, clear communication, and complete accountability from discovery to post-launch support.
            </>
          }
        />

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative flex flex-col p-[2px] bg-[#F8FAFC] rounded-2xl border border-slate-200/80 hover:border-transparent transition-all duration-300 overflow-hidden cursor-pointer hover-magic-glow"
              >
                <div className="absolute inset-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none magic-border-bg z-0"></div>
                <div className="relative z-10 p-7 bg-[#F8FAFC] rounded-[14px] w-full h-full flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* Interactive Scrollable Journey Timeline Since 2014 */}
        {/* <JourneyTimeline /> */}

      </div>
    </section>
  );
}
