
import React from 'react';

const Logo: React.FC<{ className?: string; light?: boolean; variant?: 'text' | 'image' }> = ({ 
  className = "", 
  light = false,
  variant = 'text'
}) => {
  if (variant === 'image') {
    return (
      <div className={`relative flex items-center select-none w-fit ${className}`}>
        <img 
          src="https://antiquewhite-kingfisher-530774.hostingersite.com/logo-withoutbg.webp" 
          alt="marketingzeugs logo" 
          className={`h-12 md:h-16 w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col items-center select-none w-fit ${className}`}>
      {/* Hand-drawn Arrow Doodle - reduced offset */}
      <div className="absolute -top-5 -right-6 text-[#22c55e] animate-pulse">
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M80 80 C 90 40, 60 20, 20 40" />
          <path d="M25 30 L 15 42 L 30 45" />
        </svg>
      </div>

      {/* Shine lines on the left - reduced offset */}
      <div className="absolute -left-5 top-4 text-[#22c55e]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="2" y1="12" x2="6" y2="10" />
          <line x1="2" y1="16" x2="6" y2="18" />
          <line x1="4" y1="20" x2="8" y2="22" />
        </svg>
      </div>

      <div className="flex flex-col leading-none items-start">
        <span className="text-2xl md:text-3xl font-black text-[#22c55e] tracking-tighter lowercase font-sans">
          marketing
        </span>
        <div className="flex items-center gap-2 relative">
          <span className={`text-2xl md:text-3xl font-black tracking-tighter lowercase font-sans ${light ? 'text-white' : 'text-black'}`}>
            zeugs
          </span>
          {/* Bottom Scribble underline */}
          <div className="absolute -bottom-1 -right-2 text-[#22c55e]">
            <svg width="50" height="12" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M10 10 Q 50 15 90 8 M15 15 Q 55 18 85 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
