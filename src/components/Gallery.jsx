import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, MousePointerClick } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { projectsData } from '../data/projects';

const LogoItem = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  const domain = useMemo(() => {
    try {
      if (!item.website) return null;
      return new URL(item.website.startsWith('http') ? item.website : `https://${item.website}`).hostname;
    } catch(e) { return null; }
  }, [item.website]);

  if (!domain) return null;

  return (
    <a 
      href={item.website?.startsWith('http') ? item.website : `https://${item.website}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col p-[2px] shrink-0 w-[12rem] sm:w-[15rem] h-[8rem] sm:h-[9rem] bg-white border border-slate-200/80 hover:border-transparent rounded-2xl shadow-sm mx-2 sm:mx-3 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden"
    >
      {/* Animated Glowing Border Beam (Visible on Hover) */}
      <div className="absolute inset-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none magic-border-bg z-0"></div>

      {/* Inner Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-white rounded-[14px] overflow-hidden">
        {imgError ? (
          <div className="text-center px-4 w-full h-full flex flex-col items-center justify-center">
            <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-600 tracking-tight line-clamp-1">
              {typeof item === 'string' ? 'Client Logo' : (item.caption || '').split(' - ')[0].split(' | ')[0]}
            </span>
            <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-1">
              {item.category || 'Partner'}
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 w-full flex items-center justify-center overflow-hidden p-3 sm:p-4 pb-1 sm:pb-1">
              <img 
                src={item.logo || `https://icon.horse/icon/${domain}`} 
                alt={item.caption} 
                onError={() => setImgError(true)}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity rounded-xl"
              />
            </div>
            <span className="mb-3 px-3 text-[11px] sm:text-xs font-semibold text-slate-600 text-center truncate w-full">
              {typeof item === 'string' ? 'Client' : (item.caption || '').split(' - ')[0].split(' | ')[0]}
            </span>
          </>
        )}
      </div>
    </a>
  );
};

export default function Gallery({ images, title = "Curated Visual Excellence", subtitle = "Explore our digital craftsmanship across enterprise web applications, high-converting portals, and bespoke SaaS interfaces." }) {
  // Extract and shuffle all project screenshots
  const allProjectImages = useMemo(() => {
    const allImgs = projectsData.flatMap(p =>
      (p.screenshots || []).map(src => ({
        src,
        caption: p.title,
        category: p.category,
        website: p.website
      }))
    );
    for (let i = allImgs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allImgs[i], allImgs[j]] = [allImgs[j], allImgs[i]];
    }
    return allImgs.slice(0, 24);
  }, []);

  const uniqueLogoItems = useMemo(() => {
    return projectsData
      .filter(p => p.website)
      .map(p => ({
        caption: p.title,
        category: p.category,
        website: p.website,
        logo: p.logo
      }));
  }, []);

  const galleryItems = images || allProjectImages;

  // Duplicate for seamless infinite scroll
  const seamlessRow1 = [...uniqueLogoItems, ...uniqueLogoItems, ...uniqueLogoItems, ...uniqueLogoItems];
  const seamlessRow2 = [...galleryItems, ...galleryItems, ...galleryItems];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
      setIsZoomed(false);
    }
  }, [selectedIndex, galleryItems.length]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      setIsZoomed(false);
    }
  }, [selectedIndex, galleryItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="w-full mx-auto pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionTitle
            badge="Visual Gallery"
            title={title}
            subtitle={subtitle}
          />
        </div>

        {/* Full-width Horizontal Marquee Grid */}
        <div className="w-full overflow-hidden flex flex-col gap-6 relative">
          {/* Row 1: Client Logos (Scrolls Left) */}
          <div className="animate-marquee gap-6 px-6 py-4 items-center mb-4">
            {seamlessRow1.map((item, index) => (
              <LogoItem key={`logo-${index}`} item={item} />
            ))}
          </div>

          {/* Row 2 (Scrolls Right) */}
          <div className="animate-marquee-reverse gap-6 pl-6 pr-6">
            {seamlessRow2.map((item, index) => (
              <motion.div
                key={`r2-${index}`}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer shrink-0 w-[14rem] md:w-[18rem] lg:w-[22rem] aspect-[16/10]"
                onClick={() => openLightbox(half + (index % row2.length))}
              >
                <img
                  src={typeof item === 'string' ? item : item.src}
                  alt={typeof item === 'string' ? `Screenshot ${index + 1}` : item.caption}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col">
                  {/* Centered Button */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                      <Maximize2 className="w-4 h-4" />
                      <span>Expand View</span>
                    </div>
                  </div>
                  {/* Bottom Info */}
                  <div className="p-5 flex flex-col justify-end bg-gradient-to-t from-slate-900/90 to-transparent">
                    {typeof item !== 'string' && item.category && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white mb-1 opacity-90">
                        {item.category}
                      </span>
                    )}
                    <div className="text-white font-bold text-sm tracking-tight">
                      <span className="line-clamp-1">{typeof item === 'string' ? `Case Study #${index + 1}` : item.caption}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={closeLightbox}
          >
            {/* Top Toolbar Controls */}
            <div
              className="absolute top-6 right-6 flex items-center gap-3 z-10 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Toggle Zoom"
              >
                {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
              </button>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left / Right Nav Arrows */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 hidden sm:flex items-center justify-center"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 hidden sm:flex items-center justify-center"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image Container */}
            <div
              className="relative max-w-6xl max-h-[85vh] flex items-center justify-center overflow-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: isZoomed ? 1.4 : 1,
                }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                src={typeof galleryItems[selectedIndex] === 'string' ? galleryItems[selectedIndex] : galleryItems[selectedIndex].src}
                alt="Enlarged screenshot"
                className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </div>

            {/* Bottom Center Project Name */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
              <div className="px-6 py-2.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 shadow-2xl">
                <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                  {typeof galleryItems[selectedIndex] === 'string'
                    ? `Screenshot ${selectedIndex + 1} of ${galleryItems.length}`
                    : galleryItems[selectedIndex].caption}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
