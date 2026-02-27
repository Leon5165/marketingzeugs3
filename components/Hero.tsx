
import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (repulse)
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) / 150;
          const repulsion = force * 2;
          this.x += Math.cos(angle) * repulsion;
          this.y += Math.sin(angle) * repulsion;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(34, 197, 94, 0.15)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      
      const particleCount = Math.floor((width * height) / 10000);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove); // Listen on window for smoother interaction
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative pt-24 pb-8 md:pt-36 md:pb-12 overflow-hidden min-h-[85vh] md:min-h-[80vh] flex flex-col justify-center bg-white w-full">
      
      {/* Interactive Background Canvas */}
      <div className="absolute top-0 left-0 right-0 h-[350px] z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
        {/* Fade out at bottom of canvas area */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-6 text-center relative z-10 w-full">
        
        {/* Badge */}
        <div 
          className={`inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 md:px-8 md:py-4 mb-6 md:mb-8 shadow-sm transition-all duration-700 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="flex text-yellow-400 gap-[0.5px] shrink-0">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-2.5 h-2.5" fill="currentColor" />)}
            </div>
            <span className="text-[8px] md:text-[10px] font-bold text-gray-700 uppercase tracking-tight md:tracking-widest leading-tight md:leading-none pt-[0.5px] md:whitespace-nowrap max-w-[180px] md:max-w-none text-left md:text-center">
              Über 80 Unternehmen aus dem Mittelstand vertrauen uns
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 
          className={`text-[32px] sm:text-4xl md:text-6xl font-bold leading-[1.1] text-gray-900 mb-8 max-w-5xl mx-auto tracking-tight transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Vom Unternehmen <br />
          unter Druck zurück zum <br />
          <span className="font-serif-italic italic text-[#22c55e]">zuverlässigen</span> Lieferanten
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Mit unserem System sorgen wir von 90 Tagen für Fachkräfte, die Ihre Lieferfähigkeit sichern, Qualität stabil halten und Wissen im Betrieb bewahren.
        </p>

        {/* Buttons - Mobile: Stacked, Desktop: Row */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 md:mb-8 w-full px-4 sm:px-0 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* THE NEW BUTTON: Electric Pulse & Clean Swipe */}
          <button className="relative group w-full sm:w-auto">
            <div className="relative px-8 py-4 md:px-12 md:py-5 bg-[#22c55e] text-white font-bold rounded-full text-sm md:text-base whitespace-nowrap overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-200 animate-electric-pulse flex justify-center items-center">
              
              {/* Strong Light Sweep */}
              <div className="absolute top-0 bottom-0 left-0 w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-super-shine pointer-events-none" />

              <span className="relative z-10 drop-shadow-sm">Strategiegespräch buchen</span>
            </div>
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all text-sm md:text-base whitespace-nowrap z-10 shadow-sm">
            Referenzen ansehen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
