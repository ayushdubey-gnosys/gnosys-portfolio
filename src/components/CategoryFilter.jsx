import React, { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { categoriesList } from '../data/projects';

const FilterButton = memo(({ category, isActive, onClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={() => onClick(category)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      style={{
        boxShadow: isHovered && !isActive
          ? `${-mousePos.x / 3}px ${-mousePos.y / 3}px 20px rgba(63, 63, 70, 0.15)`
          : isActive
            ? '0 4px 6px -1px rgba(39, 39, 42, 0.25)'
            : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}
      className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 select-none cursor-pointer focus:outline-none ${isActive
        ? 'bg-zinc-800 text-white border-transparent'
        : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200/80 hover:border-slate-300'
        }`}
    >
      <span>{category}</span>
    </motion.button>
  );
});

export default memo(function CategoryFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
      {categoriesList.map((category) => (
        <FilterButton
          key={category}
          category={category}
          isActive={activeCategory === category}
          onClick={onSelectCategory}
        />
      ))}
    </div>
  );
});
