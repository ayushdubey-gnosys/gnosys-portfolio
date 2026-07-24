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
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] text-slate-500 font-medium tracking-wide">Loading...</div>}>
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
