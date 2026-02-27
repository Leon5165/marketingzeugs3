
import React, { useEffect, useState, useRef } from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset(scrollPercent * 100); // Parallax factor
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 md:pt-32 pb-8 md:pb-12 bg-white overflow-hidden relative font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span className="bg-gray-100 border border-gray-200 px-5 py-2 rounded-full text-xs font-black text-[#22c55e] mb-6 inline-block tracking-widest uppercase shadow-sm">
            Trust
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight max-w-2xl mx-auto mb-0 relative z-20">
          Echte Stimmen. <br/>
          <span className="text-[#22c55e]">Echte Ergebnisse.</span>
        </h2>

        {/* iPhone Mockup with Parallax and Fade */}
        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[600px] -mt-8 md:-mt-16 z-10">
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-full max-w-[320px] md:max-w-[450px] transition-transform duration-100 ease-out"
            style={{ transform: `translateX(-50%) translateY(${offset * 0.6}px)` }}
          >
            <img 
              src="https://images.guns.lol/c5ef1716cc448792373e254f7855895411393353/k5nM17.png" 
              alt="iPhone Mockup" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Fade out at the bottom - taller and with solid base */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/90 to-transparent z-20" />
          <div className="absolute inset-x-0 -bottom-40 h-40 bg-white z-20" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
