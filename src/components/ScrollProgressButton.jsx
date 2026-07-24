import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgressButton() {
  const { scrollYProgress } = useScroll();
  
  // Use a spring for smoother progress animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  // Show button only when scrolled down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, pointerEvents: 'none' }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] cursor-pointer group"
      onClick={scrollToTop}
      title="Back to Top"
    >
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_25px_rgba(37,99,235,0.25),0_10px_30px_rgba(5,150,105,0.2)] border border-slate-100 hover:shadow-[0_15px_35px_rgba(37,99,235,0.35),0_20px_45px_rgba(5,150,105,0.3)] transition-all duration-300 hover:-translate-y-1.5">
        {/* Background Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 text-slate-200" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="6" fill="none" />
        </svg>
        
        {/* Animated Progress Circle */}
        <motion.svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-sm" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />  {/* blue-600 */}
              <stop offset="100%" stopColor="#059669" /> {/* emerald-600 */}
            </linearGradient>
          </defs>
          <motion.circle
            cx="50"
            cy="50"
            r="46"
            stroke="url(#progressGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength: smoothProgress }}
          />
        </motion.svg>

        {/* Icon (Gnosys Logo) */}
        <img 
          src="/gnosysIcon.png" 
          alt="Back to top" 
          className="w-5 h-5 sm:w-6 sm:h-6 z-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
}
