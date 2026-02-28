
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Team: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const members = [
    { 
      name: 'Stephan', 
      lastName: 'Müller',
      role: 'CEO & Founder', 
      img: 'https://antiquewhite-kingfisher-530774.hostingersite.com/Stephan_01.webp' 
    },
    { 
      name: 'Charlene', 
      lastName: 'Papyrin',
      role: 'Projektmanagement', 
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Julika', 
      lastName: 'Heins',
      role: 'Marketing', 
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Maya-Elin', 
      lastName: 'Buß',
      role: 'Grafik Design', 
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Jette', 
      lastName: 'Brotslek',
      role: 'Studentische Aushilfe', 
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Eduart', 
      lastName: 'Korsh',
      role: 'Recruiting', 
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Reinhard', 
      lastName: 'Müller',
      role: 'Accounting', 
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' 
    }
  ];

  return (
    <section ref={sectionRef} id="team" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Die Köpfe dahinter</span>
             </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tighter">
            Keine <span className="font-serif-italic italic text-gray-400 font-normal">Anonymität.</span><br/>
            Echte <span className="text-[#22c55e]">Experten.</span>
          </h2>
        </div>
        
        {/* Grid - Adjusted for smaller cards: 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {members.map((m, i) => (
            <div 
              key={i} 
              className={`group relative w-full aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] bg-gray-100 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Image - Full Cover */}
              <img 
                src={m.img} 
                alt={`${m.name} ${m.lastName}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

              {/* Content Wrapper - Reduced padding on mobile */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 z-20">
                
                {/* Text Info - Smaller Fonts on Mobile */}
                <div className="transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#22c55e] mb-1 md:mb-2 truncate">
                    {m.role}
                  </p>
                  <h3 className="text-lg md:text-3xl font-black text-white leading-none tracking-tighter mb-0.5 break-words">
                    {m.name}
                  </h3>
                  <h3 className="text-lg md:text-3xl font-black text-gray-400 leading-none tracking-tighter group-hover:text-white transition-colors break-words">
                    {m.lastName}
                  </h3>
                </div>



              </div>
            </div>
          ))}
          
          {/* "Join Us" Card - The 8th Card */}
          <div 
             className={`group relative w-full aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] bg-black overflow-hidden flex flex-col items-center justify-center text-center p-4 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
             style={{ transitionDelay: '400ms' }}
          >
              <div className="mb-4 md:mb-6 relative">
                <div className="w-12 h-12 md:w-20 md:h-20 border-2 border-dashed border-gray-700 rounded-full flex items-center justify-center group-hover:border-[#22c55e] group-hover:scale-110 transition-all duration-500">
                    <span className="text-2xl md:text-4xl text-gray-700 group-hover:text-[#22c55e] transition-colors font-light">+</span>
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">Du fehlst!</h3>
              <p className="text-gray-500 text-xs md:text-sm font-medium mb-4 md:mb-8 leading-relaxed max-w-[120px] md:max-w-none">
                Werde Teil unserer Story.
              </p>
              <button className="px-4 py-2 md:px-6 md:py-3 bg-white text-black rounded-full font-bold text-xs md:text-sm hover:bg-[#22c55e] hover:text-white transition-colors flex items-center gap-1 md:gap-2">
                Karriere
                <ArrowRight size={14} className="md:w-4 md:h-4" />
              </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
