
import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Search, Route, TrendingUp, Settings, Rocket, Users } from 'lucide-react';

const History: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineWrapperRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let animationFrameId: number;

    const updateTimeline = () => {
      if (!timelineWrapperRef.current || !lineRef.current) return;
      
      const viewportCenter = window.innerHeight / 2;
      const rect = timelineWrapperRef.current.getBoundingClientRect();
      
      const offset = viewportCenter - rect.top;
      const percentage = Math.max(0, Math.min(1, offset / rect.height));
      
      lineRef.current.style.height = `${percentage * 100}%`;

      let currentActiveId = "";

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const stepRect = step.getBoundingClientRect();
        const stepCenter = stepRect.top + (stepRect.height / 2);
        
        if (stepCenter <= viewportCenter) {
          currentActiveId = steps[index].id;
        }
      });

      setActiveId(prev => prev !== currentActiveId ? currentActiveId : prev);
    };

    const loop = () => {
      updateTimeline();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const steps = [
    {
      id: "2018",
      title: "Einstieg & Praxis.",
      description: "Einstieg bei einem Personaldienstleister und direkt rein in die Praxis: Recruiting und Marketing für technisch gewerbliche Profile. Nicht als „Kampagne“, sondern als tägliche Verantwortung. Ziel war immer klar: passende Leute finden, die schnell starten können und im Betrieb funktionieren. Einsatzgebiet: Nord- und Ostdeutschland, später auch Recruiting im EU-Ausland.",
      icon: <Briefcase size={32} strokeWidth={1.5} />,
      img: "https://antiquewhite-kingfisher-530774.hostingersite.com/2018.webp"
    },
    {
      id: "2019",
      title: "Die Realität der Betriebe.",
      description: "Der Alltag wird zur Realität vieler Betriebe: zu wenig gute Bewerber, zu viel Streuverlust, zu viele Gespräche ohne Treffer. Parallel steigt der Druck bei Kunden: Maschinen dürfen nicht stehen, Termine dürfen nicht rutschen, Qualität muss stimmen. In dieser Phase beginnt die systematische Arbeit: Was zieht die richtigen Kandidaten an und was sorgt dafür, dass sie am Ende wirklich anfangen?",
      icon: <Search size={32} strokeWidth={1.5} />,
      img: "https://antiquewhite-kingfisher-530774.hostingersite.com/2019.webp"
    },
    {
      id: "2020",
      title: "Candidate Journey Fokus.",
      description: "Vom „Wir suchen Leute“ hin zu einer klaren Candidate Journey. Prozesse werden straffer, Kommunikation schneller, Auswahl besser. Fokus: weniger Masse, mehr Passung. Denn die eigentliche Herausforderung ist nicht, Bewerbungen zu bekommen, sondern Abbrüche zu vermeiden und die richtigen Menschen sauber durch den Prozess zu führen.",
      icon: <Route size={32} strokeWidth={1.5} />,
      img: "https://antiquewhite-kingfisher-530774.hostingersite.com/2020.webp"
    },
    {
      id: "2021",
      title: "Skalierung & System.",
      description: "Skalierung und Qualitätsanspruch gleichzeitig. Recruiting wird nicht als Einzelmaßnahme gedacht, sondern als wiederholbares System: Zielgruppenlogik, Vorqualifizierung, Erwartungsmanagement, Tempo im Prozess, saubere Übergaben. Ergebnis zählt, nicht der schöne Report.",
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      img: "https://antiquewhite-kingfisher-530774.hostingersite.com/2021.webp"
    },
    {
      id: "2022",
      title: "Das fertige System.",
      description: "Das System ist im Kern fertig, weil es unter Druck entstanden ist. Nicht im Workshop, sondern im Alltag mit echten Engpässen. Die Erkenntnis sitzt: Im Mittelstand geht es nicht nur um Personal. Es geht um Lieferfähigkeit, Qualität, Wissen im Betrieb und darum, dass der Laden läuft, ohne dass der Unternehmer ständig Feuer löscht.",
      icon: <Settings size={32} strokeWidth={1.5} />,
      img: "https://antiquewhite-kingfisher-530774.hostingersite.com/2022.webp"
    },
    {
      id: "2023",
      title: "Gründung marketingzeugs.",
      description: "Gründung von marketingzeugs. Ziel: dieses System in den inhabergeführten Mittelstand bringen. Dorthin, wo Personalmangel schnell existenzbedrohend wird, weil Know-how verschwindet, Schichten nicht besetzt sind, Termine kippen und Kunden abspringen. Recruiting sollte planbar werden, ohne „Hoffen und Beten“.",
      icon: <Rocket size={32} strokeWidth={1.5} />,
      img: "https://antiquewhite-kingfisher-530774.hostingersite.com/2023.webp"
    },
    {
      id: "Heute",
      title: "Langfristige Begleitung.",
      description: "Wir begleiten mittelständische Betriebe langfristig und bauen Strukturen, die dauerhaft funktionieren. Viele Kunden arbeiten über Jahre mit uns zusammen, weil sie nicht nur kurzfristig Stellen besetzen wollen, sondern sich für die Zukunft fit machen wollen:\n\n• Wissen im Unternehmen sichern, bevor es mit in den Ruhestand geht\n• Qualität erhöhen, weil die richtigen Leute am richtigen Platz sind\n• zuverlässiger liefern, weil Teams stabil werden und Prozesse greifen\n\nDas schaffen wir mit unserem eigens für den Mittelstand entwickelten System: kein Marketing-Trick, sondern eine praxiserprobte Methode, die Recruiting, Candidate Journey und interne Abläufe so verbindet, dass am Ende nicht „irgendwer“ kommt, sondern die richtigen Menschen bleiben.",
      icon: <Users size={32} strokeWidth={1.5} />,
      img: "https://antiquewhite-kingfisher-530774.hostingersite.com/heute.webp"
    }
  ];

  return (
    <section ref={containerRef} className="py-48 bg-black text-white relative overflow-hidden">
      
      {/* Background Image for Top Section */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0">
        <img 
          src="https://antiquewhite-kingfisher-530774.hostingersite.com/Stephan%20Bühnenbild.webp" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
      </div>

      {/* Top Wave Divider */}
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px]" shapeRendering="geometricPrecision">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-40 max-w-4xl mx-auto">
          <span className="text-[#22c55e] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Gründer von marketingzeugs</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            Stephan Müller
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Keine theoretischen Konzepte, sondern Lösungen, die aus der täglichen Notwendigkeit entstanden sind.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={timelineWrapperRef} className="relative">
          
          {/* Line Wrapper */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 -translate-x-1/2 overflow-hidden pointer-events-none"
            style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          >
              <div className="absolute inset-0 bg-gray-800 rounded-full" />
              <div 
                ref={lineRef}
                className="absolute top-0 left-0 w-full bg-[#22c55e] rounded-full will-change-[height]"
                style={{ height: '0%' }}
              />
          </div>

          {/* Steps */}
          <div className="space-y-48 md:space-y-64 py-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeId === step.id || steps.findIndex(s => s.id === activeId) >= index;
              const isCurrent = activeId === step.id;

              return (
                <div 
                    key={step.id} 
                    ref={(el) => { stepRefs.current[index] = el; }}
                    className="relative grid md:grid-cols-2 gap-8 md:gap-24 items-center"
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10">
                    <div 
                      className={`w-10 h-10 md:w-20 md:h-20 rounded-full border-2 md:border-4 flex items-center justify-center font-black text-[10px] md:text-base transition-all duration-300 z-20 shadow-xl ${
                        isActive 
                          ? 'border-[#22c55e] bg-black text-[#22c55e] scale-110 shadow-[#22c55e]/30' 
                          : 'border-gray-800 bg-black text-gray-600'
                      }`}
                    >
                       {step.id}
                    </div>
                  </div>

                  {/* Image Side - Always first on mobile */}
                  <div className={`order-1 ${isEven ? 'md:order-2' : 'md:order-1'} pl-12 md:pl-0 mb-4 md:mb-0`}>
                      <div 
                        className={`relative rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 aspect-video transition-all duration-1000 transform md:max-w-none ${
                             isActive 
                              ? 'opacity-100 scale-100 grayscale-0' 
                              : 'opacity-100 scale-100 md:opacity-0 md:scale-90 md:grayscale'
                        }`}
                      >
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                         <img 
                            src={step.img} 
                            alt={step.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                         />
                      </div>
                  </div>

                  {/* Text Side - Always second on mobile */}
                  <div className={`order-2 ${isEven ? 'md:order-1 md:text-left' : 'md:order-2'} pl-12 md:pl-0`}>
                     <div 
                        className={`transition-all duration-700 transform ${
                            isActive 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-100 translate-y-0 md:opacity-30 md:translate-y-10'
                        }`}
                     >
                        <div className={`hidden md:flex mb-6 ${isEven ? 'justify-start' : 'justify-start'}`}>
                             <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-[#22c55e] text-black' : 'bg-white/5 text-gray-500'}`}>
                                {step.icon}
                             </div>
                        </div>
                        <h3 className={`text-xl md:text-4xl font-black mb-4 md:mb-6 uppercase leading-tight tracking-tight transition-colors duration-300 ${isCurrent ? 'text-white' : 'text-gray-500'}`}>
                            {step.title}
                        </h3>
                        <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-lg max-w-prose ml-0 md:mr-auto whitespace-pre-line">
                            {step.description}
                        </p>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Minimalist Claim */}
        <div className="mt-32 mb-16 text-center max-w-6xl mx-auto px-6">
            <p className="text-lg sm:text-xl md:text-3xl font-medium text-white leading-relaxed font-sans">
                <span className="whitespace-nowrap">Recruiting ist kein Marketing-Trick.</span> <br />
                <span className="text-gray-500 md:whitespace-nowrap">Es ist ein System. Und das haben wir in der Praxis gelernt.</span>
            </p>
        </div>

        {/* CTA at bottom */}
        <div className="text-center relative z-30">
             <button className="px-12 py-6 bg-[#22c55e] text-black font-black rounded-full hover:scale-105 transition-all text-sm md:text-lg uppercase tracking-wider">
                Kontakt aufnehmen
             </button>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-20 transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px]" shapeRendering="geometricPrecision">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

    </section>
  );
};

export default History;
