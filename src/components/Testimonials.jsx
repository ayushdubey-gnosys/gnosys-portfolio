import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsList = [
    {
      name: "Sneha Patel",
      role: "Head of Supply Chain",
      company: "Orion Traders",
      quote: "With Gnosys Digital’s ERPNext solution, our trading and distribution operations are fully automated. Order processing, inventory tracking, and invoicing are now transparent and efficient. The team managed the implementation seamlessly and professionally.",
      rating: 4.8
    },
    {
      name: "Dr. Anjali Mehta",
      role: "Chief Operations Officer",
      company: "Sunrise Hospital",
      quote: "Gnosys Digital implemented the ERPNext healthcare module with precision. Our patient management, appointments, and billing processes are now fully integrated, significantly improving efficiency and accuracy. The team delivered the solution ahead of schedule with exceptional professionalism.",
      rating: 4.9
    },
    {
      name: "Ravi Kumar",
      role: "Plant Manager",
      company: "Apex Manufacturing Ltd.",
      quote: "Gnosys Digital’s ERPNext manufacturing solution has streamlined our production planning, inventory, and quality control processes. Operational efficiency has improved, and data accuracy has increased considerably. The implementation was smooth, professional, and delivered on time.",
      rating: 4.7
    },
    {
      name: "Karan Kulkarni",
      role: "Operations",
      company: "Shree Metals, Pune",
      quote: "Our production tracking dashboard gave complete visibility of machine output and operator performance. Decision-making is faster and delays reduced drastically.",
      rating: 4.6
    },
    {
      name: "Amit Mehta",
      role: "Operations Head",
      company: "Crystal Manufacturing, Surat",
      quote: "The workflow automation they developed saved nearly four hours of manual work every day. Data accuracy improved drastically, and productivity increased across the team in a measurable way.",
      rating: 4.8
    },
    {
      name: "James Carter",
      role: "Operations Head",
      company: "BookACleaner, Sydney",
      quote: "The booking system automation reduced manual entries by almost 70%. Customer satisfaction improved and operational workload dropped significantly.",
      rating: 4.9
    },
    {
      name: "Arjun Verma",
      role: "Founder",
      company: "FitnessFuel, Indore",
      quote: "Our sign-ups increased consistently after they optimized our funnels and lead forms. Practical steps and fast results.",
      rating: 4.5
    },
    {
      name: "Alina Khan",
      role: "Founder",
      company: "Glow Beauty Studio, Dubai",
      quote: "Their brand identity redesign and Instagram content strategy changed how customers perceive us. Our engagement and inquiries grow every week with creative posts.",
      rating: 4.7
    },
    {
      name: "Kevin Ong",
      role: "Marketing Manager",
      company: "PerfectFit Activewear, Singapore",
      quote: "The designs they deliver are fresh and always on time. We now stand out strongly with a consistent and stylish brand presence across social media.",
      rating: 4.8
    },
    {
      name: "Sonal Sharma",
      role: "Founder",
      company: "DecorCraft, Jaipur",
      quote: "Their Amazon marketplace management improved our product visibility and overall sales. Listing quality improved and daily operations became fully streamlined.",
      rating: 4.6
    },
    {
      name: "Jay Parmar",
      role: "Founder",
      company: "TrendBasket, Rajkot",
      quote: "They handled catalog setup, promotion, and overall online operations very smoothly. Sales increased month after month, and now we trust them as a long-term business partner.",
      rating: 4.9
    },
    {
      name: "Farhan Ali",
      role: "Operations",
      company: "HomeElegance, Abu Dhabi",
      quote: "Our inventory now syncs automatically between POS, website, and marketplaces like Amazon. Manual work reduced drastically, making our operations smoother.",
      rating: 4.8
    },
    {
      name: "Harsh Reddy",
      role: "Owner",
      company: "BrewBean Cafe, Bengaluru",
      quote: "Our cafe branding became modern and attractive. Customers appreciate the new visual identity and online presence. The results are very visible.",
      rating: 4.7
    },
    {
      name: "Megha Shah",
      role: "Marketing Head",
      company: "EduPoint Training, Vadodara",
      quote: "Our digital campaigns achieved a strong 7.3% conversion rate with a tight SME budget. Their strategies delivered measurable results and higher ROI.",
      rating: 4.8
    },
    {
      name: "Sneha Chatterjee",
      role: "Marketing",
      company: "TutorPro, Kolkata",
      quote: "After CRO improvements, our landing page conversions increased from 2% to 8.5%. Their optimization approach is smart, data-driven, and effective.",
      rating: 4.9
    },
    {
      name: "Kunal Rathi",
      role: "IT Manager",
      company: "GadgetMart, Pune",
      quote: "Our security updates, backups, and uptime monitoring are fully managed by their team. The website has not faced downtime since onboarding.",
      rating: 4.6
    },
    {
      name: "Vivek Patel",
      role: "Founder",
      company: "Craft & Clay, Surat",
      quote: "Our email open rates doubled, and subscriber growth has remained strong since they took over. Their performance tracking is excellent.",
      rating: 4.8
    },
    {
      name: "Michael Brown",
      role: "Technical Lead",
      company: "SolarCraft Canada, Toronto",
      quote: "They delivered performance hosting and ensured zero downtime with secure infrastructure. Their support response is always quick and professional.",
      rating: 4.7
    },
    {
      name: "Rohit Reddy",
      role: "Operations",
      company: "Elite Machinery Group, Hyderabad",
      quote: "Our internal systems were scattered across Excel and manual reports. Gnosys Digital helped us centralize business data, improving traceability, accountability, and planning accuracy across departments.",
      rating: 4.9
    },
    {
      name: "Manoj Gupta",
      role: "Director",
      company: "Gupta Tools Pvt. Ltd., Delhi",
      quote: "Their strategy consultation helped us restructure digital operations and improve revenue clarity. Decision-making is faster with clean visibility of business performance.",
      rating: 4.8
    },
    {
      name: "Omar Hassan",
      role: "Operations Manager",
      company: "RoyalTech Services, Doha",
      quote: "They guided us in planning a full digital transformation roadmap. Now our processes are measurable, scalable, and aligned with growth objectives.",
      rating: 4.7
    }
  ];

  const activeTestimonial = testimonialsList[activeIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFC]">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <SectionTitle
          badge="Verified Client Endorsements"
          title="Trusted by Industry Leaders Worldwide."
          subtitle="Discover what CTOs, C-Level executives, and corporate founders say about collaborating with our engineering and design teams."
        />

        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Panel - Sticky Large Testimonial (30%) */}
          <div className="w-full lg:w-[35%] xl:w-[30%] shrink-0 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white/90 backdrop-blur-xl rounded-[24px] p-8 sm:p-10 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col min-h-[350px]"
              >
                <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-100 -rotate-12 pointer-events-none" />
                
                <div className="flex items-center gap-1 mb-8 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(activeTestimonial.rating) ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/40 text-amber-400'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm font-bold text-slate-700">{activeTestimonial.rating.toFixed(1)}</span>
                </div>

                <p className="text-slate-800 text-lg sm:text-xl leading-relaxed font-medium relative z-10 flex-1">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </p>

                <div className="pt-8 mt-8 border-t border-slate-100 relative z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className="font-bold text-slate-900 text-lg tracking-tight">{activeTestimonial.name}</h4>
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  </div>
                  <div className="text-sm font-medium text-slate-500 flex flex-col gap-0.5">
                    <span>{activeTestimonial.role}</span>
                    <span className="text-slate-900 font-bold">{activeTestimonial.company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Panel - Grid of Small Cards (70%) */}
          <div className="w-full lg:w-[65%] xl:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonialsList.map((test, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className={`text-left p-6 rounded-[20px] border transition-all duration-300 flex flex-col h-full ${
                    isActive 
                      ? 'bg-blue-50/50 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/20' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < Math.floor(test.rating) ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/40 text-amber-400'}`} 
                      />
                    ))}
                  </div>
                  <div className="mt-auto">
                    <h4 className={`font-bold text-sm tracking-tight mb-1 ${isActive ? 'text-blue-900' : 'text-slate-900'}`}>
                      {test.name}
                    </h4>
                    <div className={`text-xs font-medium flex flex-col gap-0.5 ${isActive ? 'text-blue-700/70' : 'text-slate-500'}`}>
                      <span>{test.role}</span>
                      <span className={isActive ? 'text-blue-800 font-bold' : 'text-slate-900 font-bold'}>
                        {test.company}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
