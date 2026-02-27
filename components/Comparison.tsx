
import React, { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import Logo from './Logo';

const Comparison: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLeftIndex, setActiveLeftIndex] = useState(-1); // Accumulative index for red
  const [visibleRightIndex, setVisibleRightIndex] = useState(-1); // Accumulative index for green
  
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Choreographed Animation Sequence
  useEffect(() => {
    if (isVisible) {
      const runSequence = async () => {
        // 1. Wait for the columns to fade in visually
        await new Promise(resolve => setTimeout(resolve, 600));

        // 2. Left Side "Fill" (Turn Red sequentially)
        const leftCount = 5;
        for (let i = 0; i < leftCount; i++) {
          setActiveLeftIndex(i);
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        // 3. Brief pause to digest the "bad" news
        await new Promise(resolve => setTimeout(resolve, 400));

        // 4. Right Side "Fill" (Turn Green sequentially) - The Solution arrives
        const rightCount = 5;
        for (let i = 0; i < rightCount; i++) {
          setVisibleRightIndex(i);
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      };

      runSequence();
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-32 bg-transparent font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`flex flex-col items-center text-center mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gray-100 px-5 py-2 rounded-full text-xs font-black text-gray-900 mb-8 tracking-widest uppercase">
            Der Unterschied
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-black leading-[1.1] tracking-tight max-w-4xl">
            Warum <span className="text-[#22c55e]">marketingzeugs</span> und nicht <span className="font-serif-italic italic font-normal text-gray-400">irgendwer</span> anders?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column - Other Agencies */}
          <div 
            className={`flex flex-col transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Title Outside - Centered */}
            <div className="h-20 flex items-end justify-center mb-8 pb-2">
                <h3 className="text-3xl font-bold text-[#A8A29E] tracking-tight text-center">
                Andere Anbieter
                </h3>
            </div>

            {/* Card Content */}
            <div className="bg-[#F5F5F4]/50 rounded-[3rem] p-10 md:p-12 flex-1 border border-transparent hover:border-gray-200 transition-colors duration-300">
                <ul className="space-y-8 w-full">
                {[
                    "Arbeiten mit jedem zusammen",
                    "Risiko auf schlechte Erfahrung und Geldverschwendung",
                    "Agentur irgendwo aus Deutschland",
                    "Nur inländisches Rekrutieren",
                    "andere Personalberater liefern nur Bewerber"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-6 text-[#A8A29E] group">
                    <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                            i <= activeLeftIndex 
                                ? 'bg-red-500 text-white scale-110 shadow-lg shadow-red-500/40' 
                                : 'bg-[#E7E5E4] text-white scale-100'
                        }`}
                    >
                        <X size={16} strokeWidth={4} />
                    </div>
                    <span 
                      className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-500 ${
                        i <= activeLeftIndex ? 'text-gray-500' : 'text-[#A8A29E]'
                      }`}
                    >
                      {item}
                    </span>
                    </li>
                ))}
                </ul>
            </div>
          </div>

          {/* Right Column - Us */}
          <div 
            className={`flex flex-col relative transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
             {/* Logo Outside - Centered */}
             <div className="h-20 flex items-end justify-center mb-8">
                <div className="transform translate-y-2">
                    <Logo className="scale-[0.8]" variant="image" />
                </div>
             </div>

             {/* Card Content */}
             <div className="bg-white rounded-[3rem] p-10 md:p-12 flex-1 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-2 border-black/5 relative z-10 hover:border-[#22c55e]/30 transition-all duration-500">
                <ul className="space-y-8 w-full">
                {[
                    "Spezialisiert auf mittelständische Unternehmen",
                    "Planbare Einstellungen mit Sicherheit",
                    "Regional aus Osterholz-Scharmbeck",
                    "Kosteneffiziente EU-Rekrutierung",
                    "Schneller zum passenden Mitarbeiter"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-6 text-black">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-lg ${
                        i <= visibleRightIndex
                            ? 'bg-[#22c55e] shadow-green-500/40 scale-100' 
                            : 'bg-black shadow-black/20 scale-90'
                      }`}
                    >
                        <Check size={16} className="text-white" strokeWidth={4} />
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
