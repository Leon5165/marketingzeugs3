
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed md:absolute top-0 left-0 w-full z-50 py-4 md:py-6 bg-white md:bg-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-50">
            <Logo className="scale-[0.7] md:scale-[0.85]" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 mr-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm font-bold text-gray-600 hover:text-[#22c55e] transition-colors tracking-tight"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button className="px-6 py-3 border border-gray-900 rounded-full text-xs font-bold tracking-tight hover:bg-gray-900 hover:text-white transition-all bg-transparent text-gray-900">
              Jetzt kostenlos Termin vereinbaren
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-900 relative z-50 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileMenuOpen ? (
               <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-transform hover:rotate-90">
                 <X size={24} />
               </div>
            ) : (
              <Menu size={32} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-[100dvh] pt-24 pb-8 px-6">
          
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-6 relative z-10">
            {navLinks.map((link, index) => (
               <a 
                 key={link.name}
                 href={link.href} 
                 className={`text-4xl sm:text-5xl font-black text-gray-900 hover:text-[#22c55e] transition-all duration-300 transform ${
                   mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                 }`}
                 style={{ transitionDelay: `${150 + index * 100}ms` }}
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {link.name}
               </a>
            ))}
          </div>

          {/* Footer Area */}
          <div 
            className={`mt-auto flex flex-col gap-6 relative z-10 transition-all duration-500 delay-500 transform ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button className="w-full py-5 bg-[#22c55e] text-white rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform">
                <span>Termin vereinbaren</span>
                <ArrowRight size={20} />
            </button>

            <div className="flex justify-between items-center border-t border-gray-100 pt-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Folge uns</span>
              <div className="flex gap-6 text-gray-400">
                <a href="https://www.instagram.com/marketingzeugs" target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] transition-colors"><Instagram size={24} /></a>
                <a href="https://www.tiktok.com/@marketingzeugs" target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] transition-colors">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
