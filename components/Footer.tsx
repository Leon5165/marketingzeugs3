
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} id="footer" className="bg-black text-white border-t border-white/10 overflow-hidden">
      <div className={`py-24 max-w-7xl mx-auto px-8 md:px-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 pl-2">
               <Link to="/">
                 <Logo className="scale-[0.8] origin-left" light={true} variant="image" />
               </Link>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-medium">
              Führende Social Media Agentur für ganzheitliches Marketing, Recruiting und Employer Branding im Mittelstand.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-semibold">
              <li><Link to="/" className="hover:text-[#22c55e] transition-colors">Startseite</Link></li>
              <li><HashLink smooth to="/#services" className="hover:text-[#22c55e] transition-colors">Leistungen</HashLink></li>
              <li><HashLink smooth to="/#team" className="hover:text-[#22c55e] transition-colors">Unser Team</HashLink></li>
              <li><HashLink smooth to="/#contact" className="hover:text-[#22c55e] transition-colors">Kontakt</HashLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Rechtliches</h4>
            <ul className="space-y-4 text-gray-400 font-semibold">
              <li><Link to="/datenschutz" className="hover:text-[#22c55e] transition-colors">Datenschutz</Link></li>
              <li><Link to="/impressum" className="hover:text-[#22c55e] transition-colors">Impressum</Link></li>
              <li><Link to="/agb" className="hover:text-[#22c55e] transition-colors">AGB</Link></li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new Event('show-cookie-settings'))}
                  className="hover:text-[#22c55e] transition-colors cursor-pointer"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-semibold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Marketingzeugs GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#22c55e] transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/marketingzeugs" target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@marketingzeugs" target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e] transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
