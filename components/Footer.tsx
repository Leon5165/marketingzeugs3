
import React, { useEffect, useRef, useState } from 'react';
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
               <Logo className="scale-[0.8] origin-left" light={true} variant="image" />
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-medium">
              Führende Social Media Agentur für ganzheitliches Marketing, Recruiting und Employer Branding im Mittelstand.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-semibold">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Startseite</a></li>
              <li><a href="#services" className="hover:text-[#22c55e] transition-colors">Leistungen</a></li>
              <li><a href="#team" className="hover:text-[#22c55e] transition-colors">Unser Team</a></li>
              <li><a href="#contact" className="hover:text-[#22c55e] transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Rechtliches</h4>
            <ul className="space-y-4 text-gray-400 font-semibold">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">AGB</a></li>
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
