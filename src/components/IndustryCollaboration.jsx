import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Library, GraduationCap, BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';
import iitLogo from '../assets/IIT_Kharagpur_Logo.svg';
import iimRaipur from '../assets/iim-raipur.png';
import iitVaranasi from '../assets/iit-varansi.png';
import mdiLogo from '../assets/mdi.png';

export default function IndustryCollaboration() {
  const institutes = [
    { name: "IIT Kharagpur", icon: Building2, logo: iitLogo },
    { name: "IIM Raipur", icon: Library, logo: iimRaipur },
    { name: "IIT Varanasi", icon: GraduationCap, logo: iitVaranasi },
    { name: "MDI Gurgaon", icon: BookOpen, logo: mdiLogo }
  ];

  return (
    <section className="relative pt-10 pb-16 sm:pt-12 sm:pb-20 bg-[#F8FAFC] overflow-hidden border-y border-slate-200/80">
      {/* Background glowing accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        
        <SectionTitle
          badge="Industry Collaboration"
          title="Empowering Future Innovators Through Industry Workshops"
          subtitle="Collaborating with premier institutes to bridge the gap between academic learning and real-world technology."
        />

        {/* Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-4 mb-10">
            <span className="hidden sm:block w-16 h-[1px] bg-slate-200"></span>
            Trusted by Leading Academic Institutions
            <span className="hidden sm:block w-16 h-[1px] bg-slate-200"></span>
          </h3>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {institutes.map((institute, idx) => {
            const Icon = institute.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className="group relative flex flex-col p-[2px] rounded-2xl bg-white border border-slate-200/80 hover:border-transparent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden cursor-pointer"
              >
                {/* Animated Glowing Border Beam (Visible on Hover) */}
                <div className="absolute inset-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none magic-border-bg z-0"></div>

                {/* Inner Card Content */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 bg-white rounded-[14px] overflow-hidden">
                  {institute.logo ? (
                    <>
                      <img 
                        src={institute.logo} 
                        alt={institute.name} 
                        className="h-14 md:h-16 w-auto object-contain mb-3 transition-transform duration-300 group-hover:scale-105" 
                      />
                      <span className="text-sm font-bold text-slate-800 tracking-tight text-center">
                        {institute.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <span className="text-base font-semibold text-slate-800 tracking-tight">
                        {institute.name}
                      </span>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Collaborating with India's leading academic institutions to inspire innovation, practical learning, and industry readiness.
        </motion.p>

      </div>
    </section>
  );
}

