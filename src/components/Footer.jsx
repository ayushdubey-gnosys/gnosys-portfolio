import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" clipRule="evenodd" />
    </svg>
  );
}

function PinterestIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026h.032z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.5A1.66 1.66 0 0 0 6.18 8.16a1.66 1.66 0 0 0 1.65 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.5Z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollClick = (e, id) => {
    e.preventDefault();
    if (location.pathname === '/') {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(id === 'hero' ? '/' : `/#${id}`);
    }
  };

  return (
    <footer className="bg-white pt-6 pb-0 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Logo & Address */}
          <div className="lg:col-span-4 space-y-4 text-[13px] text-slate-700">
            <a
              href="/#hero"
              onClick={(e) => handleScrollClick(e, 'hero')}
              className="flex items-center group inline-flex select-none cursor-pointer mb-2"
            >
              <img
                src="/logo.png"
                alt="Gnosys Digital Studio Logo"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0"
              />
            </a>
            
            <div className="leading-relaxed font-medium">
              <span className="font-bold text-slate-900">[Address-CA]:</span> 1664, 225 The East Mall,<br />
              Toronto, ON, M9B 0A9
            </div>
            <div className="leading-relaxed font-medium">
              <span className="font-bold text-slate-900">[Address-UK]:</span> 20-22 Wenlock Road, London<br />
              N1 7GU, United Kingdom.
            </div>
            <div className="leading-relaxed font-medium">
              <span className="font-bold text-slate-900">[Phone]:</span> +1 647 947 9546
            </div>
            <div className="leading-relaxed font-medium">
              <span className="font-bold text-slate-900">[E-Mail]:</span> connect@gnosysdigital.com
            </div>
          </div>

          {/* Col 2: Digital Services */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-[#004e89] text-[15px] mb-5">
              Digital Services
            </h3>
            <ul className="space-y-3.5 text-[13px] text-slate-600 font-medium">
              <li><a href="https://gnosysdigital.com/erpnext-implementation/" target="_blank" rel="noopener noreferrer" className="hover:text-[#004e89] transition-colors">ERPNext Implementation</a></li>
              <li><a href="https://gnosysdigital.com/ai-automation-data-services/" target="_blank" rel="noopener noreferrer" className="hover:text-[#004e89] transition-colors">Ai Automation Data Services</a></li>
              <li><a href="https://gnosysdigital.com/2025/09/17/seo-optimized-professional-and-detailed-for-2025-trends" target="_blank" rel="noopener noreferrer" className="hover:text-[#004e89] transition-colors">SEO & Growth Services</a></li>
              <li><a href="https://gnosysdigital.com/product/managed-wordpress" target="_blank" rel="noopener noreferrer" className="hover:text-[#004e89] transition-colors">Managed WordPress Services</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-[#004e89] text-[15px] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-[13px] text-slate-600 font-medium">
              <li><a href="https://gnosysdigital.com/product-category/digital-services/custom-development/" target="_blank" rel="noopener noreferrer" className="hover:text-[#004e89] transition-colors">Explore Custom Development</a></li>
              <li><a href="https://gnosysdigital.com/product-category/digital-services/ecommerce-development/" target="_blank" rel="noopener noreferrer" className="hover:text-[#004e89] transition-colors">Explore eCommerce Solutions</a></li>
              <li><a href="https://gnosysdigital.com/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-[#004e89] transition-colors">Contact Us Today</a></li>
              <li><a href="https://gnosysdigital.com/mailchimp-newsletter-landing-page" target="_blank" rel="noopener noreferrer" className="hover:text-[#004e89] transition-colors">Mailchimp Newsletter Landing Page</a></li>
            </ul>
          </div>

          {/* Col 4: Follow Us */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-[#004e89] text-[15px] mb-5">
              Follow Us
            </h3>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/gnosys.digital/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-[#004e89] text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://x.com/GnosysDigital" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-[#004e89] text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/gnosysdigital/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-[#004e89] text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://in.pinterest.com/GnosysDigital/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-[#004e89] text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <PinterestIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.linkedin.com/company/gnosys-digital/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded bg-[#004e89] text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Black Bottom Bar */}
      <div className="bg-black py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-[12px] font-medium tracking-wide">
            Copyright © 2014 – {currentYear} by Dwarkadhish E-Commerce Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}

