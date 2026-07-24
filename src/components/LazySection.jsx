import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

export default function LazySection({ children, minHeight = '50vh', ...props }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px', // Load 200px before it comes into view
  });

  return (
    <div ref={ref} style={{ minHeight }} className="w-full transition-opacity duration-700" {...props}>
      {inView ? children : null}
    </div>
  );
}
