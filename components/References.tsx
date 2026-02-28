
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const References: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Start bei 1, da Index 0 jetzt ein Klon des letzten Elements ist (für bidirektionales Swipen)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Touch State für Swipe-Gesten (useRef verhindert Re-Renders während des Swipes)
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  
  const sectionRef = useRef<HTMLElement>(null);
  
  // Konfiguration
  const AUTOPLAY_DURATION = 10000;
  const TRANSITION_DURATION = 1000;
  const SWIPE_THRESHOLD = 50;

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const originalReferences = [
    {
      company: "SGL Logistics",
      industry: "Transport & Logistik",
      title: "LKW stehen.\nFixkosten laufen.\nUmsatz fehlt.",
      description: "Durch gezielte Recruiting Maßnahmen haben wir Berufskraftfahrer aus dem EU-Raum (Deutschland, Rumänien, Tschechien, Polen) einstellen können. Dadurch konnten neue LKW’s gekauft werden und das Unternehmen ist auf Wachstumskurs.",
      results: [
        { label: "Einstellungen", value: "20+" },
        { label: "neue LKW's", value: "50+" },
        { label: "Wachstumskurs", value: "100%" }
      ],
      image: "https://antiquewhite-kingfisher-530774.hostingersite.com/sglogistics-ref.webp",
      color: "bg-orange-500"
    },
    {
      company: "Hansebahn Bremen",
      industry: "Transport & Logistik",
      title: "Stellen bleiben lange unbesetzt.\nHohe Kosten durch Einsatz von Leiharbeit.\nKaum Auszubildende.",
      description: "Durch spezifische Maßnahmen im Recruiting, der Optimierung von Bewerbungs- und Einstellungsprozess und die Begleitung über mittlerweile mehr als 3 Jahr ist die Personalgewinnung mittlerweile planbar.",
      results: [
        { label: "Einstellungen", value: "60+" },
        { label: "Ausbildungen pro Jahr", value: "30+" },
        { label: "Zukunftssicherung", value: "100%" }
      ],
      image: "https://antiquewhite-kingfisher-530774.hostingersite.com/hbb-ref.webp",
      color: "bg-blue-400"
    },
    {
      company: "Gemmer",
      industry: "Handwerk & Fertigung",
      title: "Unbesetzte Stellen.\nProduktion auf Hochtour.\nKrankheitsausfälle.",
      description: "Durch eine regionale Recruiting-Kampagne kombiniert mit gezielter Suche im EU-Raum haben wir qualifizierte Metallbauer und Schweißer gewonnen. Nun ist die Qualität und die Planbarkeit gesichert.",
      results: [
        { label: "Qualifizierte Einstellung", value: "3" },
        { label: "Tage bis alle Stellen besetzt waren", value: "20" },
        { label: "Steigerung der Produktivität", value: "15%" }
      ],
      image: "https://antiquewhite-kingfisher-530774.hostingersite.com/gemmer-ref.webp",
      color: "bg-blue-600"
    },
    {
      company: "Gilbert & Schmalriede",
      industry: "Technologie & Fertigung",
      title: "Keine qualifizierten Bewerbungen.\nEngpässe in Projekten.\nSpezialwissen geht verloren.",
      description: "Durch gezielte Maßnahmen wurden Stellen mit qualifizierten Fachkräften besetzt. Prozesse in der Produktion konnten optimiert werden und dadurch hat die Lieferzuverlässigkeit zugenommen. Das Unternehmen entwickelt sich strategisch.",
      results: [
        { label: "Einstellungen", value: "5+" },
        { label: "weniger Reklamationen", value: "20%" },
        { label: "Steigerung der Produktivität", value: "15%" }
      ],
      image: "https://antiquewhite-kingfisher-530774.hostingersite.com/gilbert-schmalriede-ref.webp",
      color: "bg-emerald-600"
    }
  ];

  // Bidirektionale Klone: [Letztes, ...Originale, Erstes]
  const extendedReferences = [
    originalReferences[originalReferences.length - 1],
    ...originalReferences,
    originalReferences[0]
  ];

  // Autoplay Logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex]); // Restart timer on index change

  const handleNext = () => {
    if (currentIndex >= extendedReferences.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleManualSlide = (originalIndex: number) => {
    setIsTransitioning(true);
    // +1 weil unser Array mit einem Klon beginnt (Index 0 = letztes Element)
    setCurrentIndex(originalIndex + 1);
  };

  // Touch Handler für Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > SWIPE_THRESHOLD;
    const isRightSwipe = distance < -SWIPE_THRESHOLD;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Reset Logic: Wenn wir auf einem Klon sind, springen wir ohne Animation zum Original
  useEffect(() => {
    if (currentIndex === extendedReferences.length - 1) {
      // Wir sind beim Klon des Ersten angekommen (rechts außen) -> Springe zum echten Ersten (Index 1)
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }

    if (currentIndex === 0) {
      // Wir sind beim Klon des Letzten angekommen (links außen) -> Springe zum echten Letzten
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(originalReferences.length);
      }, TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, extendedReferences.length, originalReferences.length]);

  // Berechnung für die Progress Bars (Mapping auf Original-Indizes)
  let progressIndex = currentIndex - 1;
  if (progressIndex < 0) progressIndex = originalReferences.length - 1;
  if (progressIndex >= originalReferences.length) progressIndex = 0;

  return (
    <section ref={sectionRef} id="references" className="py-12 md:py-32 bg-white text-black font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Fixed Alignment for Mobile */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl">
            <span className="inline-block py-2 px-4 rounded-full bg-gray-100 text-xs font-bold tracking-widest uppercase mb-6 text-gray-500">
              Referenzen
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Unsere Ergebnisse <br/>
              <span className="text-[#22c55e]">sprechen für sich.</span>
            </h2>
          </div>
        </div>

        {/* References Slider */}
        <div 
            className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
           
           <div className="relative">
             
             {/* Slider Wrapper */}
             {/* Added touch-pan-y to allow vertical scrolling but let JS handle horizontal swipe */}
             <div 
                className="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-gray-50 shadow-2xl shadow-gray-200/50 cursor-grab active:cursor-grabbing touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
             >
                <div 
                    className={`flex ${isTransitioning ? 'transition-transform duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)]' : ''}`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {extendedReferences.map((ref, index) => {
                        // Ein Element ist aktiv, wenn es der aktuelle Index ist
                        const isActive = index === currentIndex;
                        
                        return (
                          <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row min-h-[500px] md:h-[600px]">
                              
                              {/* Image Part */}
                              <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden group px-8 pt-8 md:p-0">
                                  {/* Parallax Image Effect */}
                                  <img 
                                      src={ref.image} 
                                      alt={ref.company} 
                                      className={`w-full h-full object-contain md:object-cover rounded-2xl md:rounded-none md:transition-transform md:duration-[1500ms] ease-out ${isActive ? 'scale-100' : 'md:scale-110'}`}
                                      draggable="false"
                                  />
                                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply hidden md:block" />
                              </div>

                              {/* Content Part - Added flex-1 to fill height on mobile */}
                              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white relative flex-1">
                                  
                                  <h3 className={`text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight transition-all duration-700 delay-[300ms] transform whitespace-pre-line ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                      {(ref as any).title || `${ref.company} Success Story`}
                                  </h3>

                                  <p className={`text-base md:text-lg text-gray-500 leading-relaxed mb-8 md:mb-10 font-medium transition-all duration-700 delay-[400ms] transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                      {ref.description}
                                  </p>
                                  
                                  {/* Results Grid - Staggered */}
                                  <div className={`grid ${ref.results.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2 md:gap-4 mb-10 border-t border-gray-100 pt-8`}>
                                      {ref.results.map((res, i) => (
                                          <div 
                                            key={i} 
                                            className={`flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                            style={{ transitionDelay: `${500 + i * 100}ms` }}
                                          >
                                              <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-1">{res.value}</div>
                                              <div className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-tight sm:tracking-wide">{res.label}</div>
                                          </div>
                                      ))}
                                  </div>

                                  <div className={`transition-all duration-700 delay-[800ms] transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                      <button className="w-fit flex items-center gap-2 text-sm font-bold bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-[#22c55e] transition-colors group">
                                          Erstgespräch buchen 
                                          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                      </button>
                                  </div>
                              </div>

                          </div>
                        );
                    })}
                </div>
             </div>

             {/* Progress Bar Navigation - Centered */}
             <div className="flex justify-center items-center mt-10">
                <div className="inline-flex items-center justify-center gap-4 px-10 py-4 rounded-full bg-gray-100 md:bg-transparent md:p-0 md:gap-4 transition-all">
                    {originalReferences.map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => handleManualSlide(i)}
                            className="group relative h-1.5 w-16 md:w-24 bg-gray-300 md:bg-gray-200 rounded-full overflow-hidden transition-all duration-300 hover:bg-gray-400 md:hover:bg-gray-300"
                            aria-label={`Gehe zu Referenz ${i + 1}`}
                        >
                            {/* Fill Animation */}
                            {/* Wir zeigen den Fill an, wenn der Index übereinstimmt. */}
                            {i === progressIndex && (
                                <div 
                                    className="absolute top-0 left-0 h-full bg-[#22c55e] rounded-full"
                                    style={{ 
                                        animation: `fillProgress ${AUTOPLAY_DURATION}ms linear forwards`,
                                        width: '100%'
                                    }} 
                                />
                            )}
                        </button>
                    ))}
                </div>
             </div>
             
             {/* Keyframes for the fill animation */}
             <style>{`
                @keyframes fillProgress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
             `}</style>

           </div>

        </div>

      </div>
    </section>
  );
};

export default References;
