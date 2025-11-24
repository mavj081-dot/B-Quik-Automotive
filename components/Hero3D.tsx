import React, { useEffect, useState, useRef } from 'react';

export const Hero3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40; // Reduced sensitivity for smoother feel
      const y = (e.clientY - innerHeight / 2) / 40;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-brand-dark flex items-center justify-center perspective-container"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(11,36,71,0.4),_rgba(2,6,23,1))]" />

      {/* 3D Grid Floor */}
      <div
        className="absolute bottom-0 left-[-50%] w-[200%] h-[50%] z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F94C10 1px, transparent 1px), linear-gradient(90deg, #F94C10 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `rotateX(60deg) translateY(${mousePos.y * 0.2}px) translateZ(-200px)`,
          transformOrigin: '50% 100%',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1), transparent)'
        }}
      />

      {/* Decorative Brand Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-orange blur-[150px] opacity-10 rounded-full animate-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-navy blur-[150px] opacity-20 rounded-full" />

      {/* Main Content */}
      <div
        className="relative z-10 w-full max-w-7xl px-6 flex flex-col-reverse md:flex-row items-center justify-between preserve-3d"
      >
        {/* Typography Section */}
        <div
          className="md:w-1/2 text-left mt-8 md:mt-0 transform transition-transform duration-100 ease-out"
          style={{ transform: `translateZ(20px) rotateY(${mousePos.x * 0.1}deg)` }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-brand-orange/30 rounded-full bg-brand-orange/5 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">Premier Auto Care</span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">Engine's</span><br />
            <span className="text-brand-orange drop-shadow-lg">Doctor</span>
          </h1>

          <p className="font-sans text-gray-400 text-lg max-w-lg mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            B-Quik Automotive delivers professional diagnostics, precision repairs, and premium maintenance for modern vehicles in Surat.
          </p>

          <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-orange text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-orange transition-all duration-300 clip-path-slant shadow-[0_0_20px_rgba(249,76,16,0.3)] hover:shadow-[0_0_40px_rgba(249,76,16,0.6)]"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
            >
              Book Service
            </a>
            <a
              href="#bento"
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-all duration-300"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* 3D Car Visual */}
        <div className="md:w-1/2 relative h-[300px] md:h-[600px] w-full flex items-center justify-center preserve-3d">
          {/* Back Texture/Ring */}
          <div
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-2 border-brand-navy/30 rounded-full"
            style={{ transform: `translateZ(-50px) scale(${1 + mousePos.y * 0.01})` }}
          ></div>
          <div
            className="absolute w-[280px] h-[280px] md:w-[460px] md:h-[460px] border border-brand-orange/20 rounded-full border-dashed animate-spin-slow"
            style={{ transform: `translateZ(-40px)` }}
          ></div>

          {/* High Quality Car Image (Transparent PNG) */}
          {/* Using a high quality transparent car image from a reliable source */}
          <img
            src="../feature.png"
            alt="Sports Car"
            className="absolute w-[120%] rounded-[40px]  max-w-none md:w-[140%] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] select-none mask-image-car"
            style={{
              // Using CSS mask to cut out background if it wasn't transparent, but here we use a mix-blend or a cleanly cut image.
              // For this demo, we use a trick: mix-blend-screen if the image has black bg, or just standard positioning if it's a cutout.
              // Since we can't guarantee a cutout from Unsplash, let's use a nice composition technique.
              transform: `translateX(${mousePos.x * -1.5}px) translateY(${mousePos.y * -1.5}px) translateZ(50px) rotateZ(-5deg)`,
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              filter: 'contrast(1.2) saturation(1.1)'
            }}
          />

          {/* Floating 'B-Quik' Badge */}
          <div
            className="absolute top-10 right-10 glass-panel px-6 py-3 rounded-xl transform transition-transform"
            style={{ transform: `translateX(${mousePos.x * 2}px) translateZ(80px)` }}
          >
            <span className="text-brand-orange font-display font-bold text-xl">B-QUIK</span>
            <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Automotive</span>
          </div>
        </div>
      </div>
    </div>
  );
};