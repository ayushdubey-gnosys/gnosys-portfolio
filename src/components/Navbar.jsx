import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy Logic for Active Nav Link
      if (location.pathname === '/') {
        const sections = ['portfolio', 'tech-stack', 'academic-alliances'];
        let current = '';

        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // 150px offset to account for fixed navbar height + padding
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = id;
            }
          }
        }

        if (window.scrollY < 200) {
          current = '';
        }

        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);

    if (location.pathname === '/') {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(id === 'hero' ? '/' : `/#${id}`);
    }
  };

  const isHome = location.pathname === '/';
  const useDarkThemeNavbar = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white text-slate-900 ${isScrolled
        ? 'shadow-sm py-2 border-b border-slate-200/80'
        : 'py-3'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center group select-none focus:outline-none cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Gnosys Digital Studio Logo"
              className="h-10 sm:h-12 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
          </Link>

          {/* Navigation Links and CTA */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { name: 'Project Vault', id: 'portfolio' },
                { name: 'Technology Ecosystem', id: 'tech-stack' },
                { name: 'Academic Alliances', id: 'academic-alliances' },
              ].map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative text-[15px] font-medium transition-colors duration-300 group py-1 ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300 rounded-full ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
                  </a>
                );
              })}
            </nav>

            {/* Right Side CTA Button */}
            <a
              href="https://gnosysdigital.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-transparent shadow-[0_4px_24px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_32px_rgba(59,130,246,0.6)] border border-blue-500/30 font-semibold text-sm transition-all cursor-pointer text-blue-600 shrink-0"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
