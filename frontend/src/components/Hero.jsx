import React, { useEffect, useState } from 'react';
import { heroData } from '../data/mock';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden parallax-container">
      {/* Background Image */}
      <div 
        className="absolute inset-0 parallax-element"
        style={{
          transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0) scale(1.1)`
        }}
      >
        <img
          src={heroData.backgroundImage}
          alt="Premium transformers manufacturing"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0d0d0d]/75" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Title */}
          <h1 className="hero-title text-white mb-6 animate-text-reveal">
            {heroData.title}
          </h1>

          {/* Decorative Line */}
          <div
            className={`w-24 h-px bg-[#C5A572] mx-auto mb-8 transition-all duration-1000 delay-300 animate-pulse-glow ${
              isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />

          {/* Tagline */}
          <p
            className={`hero-tagline text-white/80 mb-12 transition-all duration-1000 delay-500 animate-slide-diagonal ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {heroData.tagline}
          </p>

          {/* CTA Button */}
          <a
            href="#products"
            className={`btn-primary rounded-full magnetic transition-all duration-1000 delay-700 hover:scale-105 hover:shadow-2xl animate-float ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {heroData.ctaText}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="#craftsmanship"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
