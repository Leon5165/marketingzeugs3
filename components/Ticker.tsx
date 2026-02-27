
import React from 'react';

const BrandLogo: React.FC<{ name: string; variant: string }> = ({ name, variant }) => {
  switch (variant) {
    case 'agrarfrost':
      return (
        <div className="flex items-center justify-center px-8">
          <div className="border-4 border-blue-600 rounded-[50%] px-6 py-2 flex flex-col items-center">
            <span className="text-red-600 font-black text-2xl tracking-tighter italic">agrar</span>
            <span className="text-blue-600 font-black text-2xl tracking-tighter -mt-2">frost</span>
          </div>
        </div>
      );
    case 'fag':
      return (
        <div className="flex items-center gap-1 px-8">
          {['F', 'A', 'G'].map((l) => (
            <div key={l} className="w-10 h-10 bg-red-600 rounded-md flex items-center justify-center text-white font-bold text-xl">
              {l}
            </div>
          ))}
        </div>
      );
    case 'ritag':
      return (
        <div className="flex items-center gap-2 px-8">
          <div className="w-4 h-12 bg-orange-500"></div>
          <span className="text-3xl font-black text-gray-800 tracking-tight uppercase font-serif">RITAG</span>
        </div>
      );
    case 'behrens':
      return (
        <div className="px-8">
          <div className="bg-[#e91e63] rounded-2xl px-6 py-2 rotate-[-2deg] shadow-sm">
            <span className="text-white font-serif italic font-bold text-xl block leading-tight">Bäcker</span>
            <span className="text-white font-sans font-black text-2xl block leading-tight tracking-tighter">BEHRENS</span>
          </div>
        </div>
      );
    case 'stadtwerke':
      return (
        <div className="flex items-center border-l-4 border-blue-400 pl-4 px-8">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-700 leading-none">Osterholzer</span>
            <span className="text-2xl font-light text-gray-500 leading-none mt-1">Stadtwerke</span>
          </div>
        </div>
      );
    case 'gs':
      return (
        <div className="flex items-center gap-3 px-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-600 shadow-inner border border-gray-400"></div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Gilbert & Schmalriede</span>
            <span className="text-red-600 font-black text-xl leading-none">TECHNOLOGY</span>
          </div>
        </div>
      );
    case 'nehlsen':
      return (
        <div className="bg-[#8bc34a] px-8 py-3 flex items-center gap-2 rounded-sm">
          <div className="w-6 h-6 border-t-4 border-r-4 border-white rotate-45 mt-1"></div>
          <span className="text-white font-black text-2xl tracking-tighter italic">Nehlsen</span>
        </div>
      );
    default:
      return <span className="text-2xl font-black text-gray-300 px-8">{name}</span>;
  }
};

const Ticker: React.FC = () => {
  const brands = [
    { name: 'Agrarfrost', variant: 'agrarfrost' },
    { name: 'FAG', variant: 'fag' },
    { name: 'RITAG', variant: 'ritag' },
    { name: 'Bäcker Behrens', variant: 'behrens' },
    { name: 'Stadtwerke OHZ', variant: 'stadtwerke' },
    { name: 'G&S Technology', variant: 'gs' },
    { name: 'Nehlsen', variant: 'nehlsen' },
  ];

  return (
    <div className="pt-4 pb-8 md:pt-8 md:pb-16 bg-white border-b border-gray-50 overflow-hidden relative z-10">
      <div className="relative flex items-center">
        
        {/* Left Fade Gradient - Reduced width and intensity for mobile */}
        <div className="absolute top-0 left-0 h-full w-20 md:w-[40rem] bg-gradient-to-r from-white md:via-white/90 to-transparent z-20 pointer-events-none" />

        <div className="flex animate-ticker whitespace-nowrap items-center hover:[animation-play-state:paused]">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="mx-12 opacity-100 transition-all duration-300 ease-out grayscale-0"
            >
              <BrandLogo name={brand.name} variant={brand.variant} />
            </div>
          ))}
        </div>
        
        {/* Right Fade Gradient - Reduced width and intensity for mobile */}
        <div className="absolute top-0 right-0 h-full w-20 md:w-[40rem] bg-gradient-to-l from-white md:via-white/90 to-transparent z-20 pointer-events-none" />

      </div>
    </div>
  );
};

export default Ticker;
