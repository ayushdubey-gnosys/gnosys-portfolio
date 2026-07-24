import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        window.scrollTo(0, 0);
      }
    } else if (pathname.startsWith('/project/')) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#F8FAFC] text-[#111827] selection:bg-blue-600 selection:text-white">
      <ScrollHandler />
      <MouseFollower />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full p-[3px] overflow-hidden shadow-lg shadow-blue-500/10 mb-4">
              {/* Spinning gradient border */}
              <div className="absolute inset-[-50%] magic-border-bg z-0 pointer-events-none"></div>
              {/* Inner circle masking */}
              <div className="relative z-10 w-full h-full bg-[#F8FAFC] rounded-full flex items-center justify-center">
                <img src="/gnosysIcon.png" alt="Loading..." className="w-12 h-12 object-contain animate-pulse" />
              </div>
            </div>
            <span className="text-slate-500 font-medium tracking-wide animate-pulse">Loading...</span>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetails />} />
            {/* Redirect old standalone page routes cleanly to single-page sections */}
            <Route path="/portfolio" element={<Navigate to="/#portfolio" replace />} />
            <Route path="/services" element={<Navigate to="/#services" replace />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
