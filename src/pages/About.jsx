import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Award, ShieldCheck, Users, Zap, Code2, Cpu } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import JourneyTimeline from '../components/JourneyTimeline';

export default function About() {
  const coreValues = [
    {
      icon: Code2,
      title: "Zero Technical Debt",
      desc: "We write clean, modular, upgrade-safe code covered by rigorous automated testing and static vulnerability scans."
    },
    {
      icon: Cpu,
      title: "Sub-Second Performance",
      desc: "Every web platform we launch is optimized for Core Web Vitals, achieving Lighthouse 99+ ratings across devices."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "We implement SOC2-ready architectures, zero-trust role-based access controls, and multi-region database replication."
    },
    {
      icon: Users,
      title: "True Partnership",
      desc: "We operate not just as an external vendor, but as a dedicated engineering cell inside your organization."
    }
  ];

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          badge="Who We Are · Est. 2018"
          title="Engineering Digital Products With Uncompromising Excellence."
          subtitle="Gnosys Digital is a senior software engineering studio and digital agency established in 2018 with 8+ years of industry experience. We combine award-winning visual design with rigorous technical craftsmanship."
        />

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {coreValues.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-slate-300 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold mb-5 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Company Heritage & Global Footprint */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 lg:p-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Our Heritage · Since 2018
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                8+ Years of Building Mission-Critical Software.
              </h3>
              <p className="text-slate-600 text-[16px] leading-relaxed">
                Founded in 2018 on the core belief that digital products should not only look visually stunning but perform with institutional reliability, Gnosys Digital has grown into a premier studio for complex web engineering.
              </p>
              <p className="text-slate-600 text-[16px] leading-relaxed">
                We have guided enterprises through zero-downtime database migrations, built real-time tracking applications handling millions of transactions, and deployed custom ERP architectures that synchronize industrial supply chains.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> 8+ Years Experience (Est. 2018)
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> 4 Global Tech Hubs
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> 100% In-House Team
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/40 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-slate-900 border border-white/60 shadow-[0_4px_24px_rgba(161,161,170,0.55)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-slate-800" />
                <h4 className="text-2xl font-bold tracking-tight text-slate-950">
                  Global Delivery Footprint
                </h4>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-8 font-medium">
                Our distributed senior engineering teams collaborate across time zones to guarantee continuous 24/7 development, SLA monitoring, and instant incident response.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-slate-300/80 text-xs">
                <div className="bg-transparent py-2 rounded-xl border-0 shadow-none transition-all duration-300">
                  <div className="text-slate-900 font-bold mb-1 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    Canada Office [Address-CA]
                  </div>
                  <div className="text-slate-700 font-medium leading-relaxed sm:text-xs">
                    1664, 225 The East Mall, Toronto, ON, M9B 0A9
                  </div>
                </div>
                <div className="bg-transparent py-2 rounded-xl border-0 shadow-none transition-all duration-300">
                  <div className="text-slate-900 font-bold mb-1 flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    UK Office [Address-UK]
                  </div>
                  <div className="text-slate-700 font-medium leading-relaxed sm:text-xs">
                    20-22 Wenlock Road, London N1 7GU, United Kingdom.
                  </div>
                </div>
                <div className="bg-transparent py-2 rounded-xl border-0 shadow-none flex items-center justify-between transition-all duration-300">
                  <div>
                    <div className="text-slate-500 font-bold uppercase tracking-wider text-[11px] mb-0.5">[Phone] Direct Line</div>
                    <div className="text-slate-950 font-extrabold text-sm sm:text-[15px]">+1 647 947 9546</div>
                  </div>
                </div>
                <div className="bg-transparent py-2 rounded-xl border-0 shadow-none flex items-center justify-between transition-all duration-300">
                  <div>
                    <div className="text-slate-500 font-bold uppercase tracking-wider text-[11px] mb-0.5">[E-Mail] Official Contact</div>
                    <div className="text-slate-950 font-extrabold text-sm sm:text-[15px]">connect@gnosysdigital.com</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Scrollable Journey Timeline Since 2018 */}
        <JourneyTimeline />

      </div>
    </div>
  );
}
