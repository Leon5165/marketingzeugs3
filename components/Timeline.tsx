
import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, Rocket, Crown } from 'lucide-react';

const Timeline: React.FC = () => {
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
      
      // Berechne den Fortschritt der Linie basierend auf der Wrapper-Position zur Bildschirmmitte
      // Offset ist positiv, wenn der Wrapper in die Mitte hineinscrollt
      const offset = viewportCenter - rect.top;
      
      // Berechne Prozentwert (0 bis 1)
      // Wir begrenzen es zwischen 0% und 100%
      const percentage = Math.max(0, Math.min(1, offset / rect.height));
      
      // Update der Linie via Direct DOM Manipulation für Performance
      lineRef.current.style.height = `${percentage * 100}%`;

      // Active Step Logic: Prüfe jeden Punkt individuell
      // Wir suchen den letzten Punkt, der die Mittellinie passiert hat
      let currentActiveId = "";

      // Wir durchlaufen alle Steps und schauen, ob sie die Mitte passiert haben
      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const stepRect = step.getBoundingClientRect();
        // Wir nehmen die Mitte des Icons als Referenzpunkt
        const stepCenter = stepRect.top + (stepRect.height / 2);
        
        // Wenn die Mitte des Steps oberhalb (oder genau auf) der Bildschirmmitte liegt
        if (stepCenter <= viewportCenter) {
          currentActiveId = steps[index].id;
        }
      });

      // State nur updaten, wenn er sich wirklich geändert hat
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
      title: "LOREM IPSUM DOLOR",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
      icon: <Lightbulb size={32} strokeWidth={1.5} />,
      img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "2021",
      title: "SIT AMET CONSETETUR",
      description: "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
      icon: <Rocket size={32} strokeWidth={1.5} />,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "HEUTE",
      title: "SADIPSCING ELITR",
      description: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.",
      icon: <Crown size={32} strokeWidth={1.5} />,
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section ref={containerRef} className="py-48 bg-black text-white relative overflow-hidden">
      
      {/* Top Wave Divider */}
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px]" shapeRendering="geometricPrecision">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-40 max-w-4xl mx-auto">
          <span className="text-[#22c55e] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Unsere DNA</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            Vom Visionär zum <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-emerald-800">Marktführer.</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Wir sind diesen Weg gegangen, damit wir Sie heute auf Ihrem Weg begleiten können.
          </p>
        </div>

        {/* Timeline Container - Ref for calculating height relative to content */}
        <div ref={timelineWrapperRef} className="relative">
          
          {/* 
            Line Wrapper with CSS Mask for Fade In/Out Effect 
          */}
          <div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] md:w-1 -translate-x-1/2 overflow-hidden pointer-events-none"
            style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          >
              {/* Vertical Line Background (Gray) */}
              <div className="absolute inset-0 bg-gray-800 rounded-full" />
              
              {/* Vertical Line Foreground (Green Progress) - Controlled via ref */}
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
              // Check active status
              const isActive = activeId === step.id || steps.findIndex(s => s.id === activeId) >= index;
              const isCurrent = activeId === step.id;

              return (
                <div 
                    key={step.id} 
                    // Assign Ref to the row/step container to track its position
                    ref={(el) => { stepRefs.current[index] = el; }}
                    className="relative grid md:grid-cols-2 gap-8 md:gap-24 items-center"
                >
                  
                  {/* Timeline Dot (Center) */}
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
                  <div className={`order-2 ${isEven ? 'md:order-1 md:text-right' : 'md:order-2'} pl-12 md:pl-0`}>
                     <div 
                        className={`transition-all duration-700 transform ${
                            isActive 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-100 translate-y-0 md:opacity-30 md:translate-y-10'
                        }`}
                     >
                        <div className={`hidden md:flex mb-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
                             {/* Icon Box */}
                             <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-[#22c55e] text-black' : 'bg-white/5 text-gray-500'}`}>
                                {step.icon}
                             </div>
                        </div>
                        <h3 className={`text-xl md:text-4xl font-black mb-4 md:mb-6 uppercase leading-tight tracking-tight transition-colors duration-300 ${isCurrent ? 'text-white' : 'text-gray-500'}`}>
                            {step.title}
                        </h3>
                        <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-lg max-w-prose ml-0 md:ml-auto">
                            {step.description}
                        </p>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA at bottom */}
        <div className="mt-40 text-center relative z-30">
             <button className="px-12 py-6 bg-[#22c55e] text-black font-black rounded-full hover:scale-105 transition-all text-sm md:text-lg uppercase tracking-wider">
                Schreib deine Geschichte mit uns
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

export default Timeline;
