import React, { useEffect, useRef, useState } from 'react';
import { engineeringData } from '../data/mock';

const Engineering = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="engineering"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={engineeringData.image}
          alt="Industrial facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/85" />
      </div>

      {/* Content */}
      <div className="relative section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text Content */}
            <div>
              <p
                className={`section-subtitle text-[#C5A572] mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {engineeringData.subtitle}
              </p>
              <h2
                className={`section-title text-white mb-8 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {engineeringData.title}
              </h2>
              
              {/* Decorative Line */}
              <div
                className={`w-16 h-px bg-[#C5A572] mb-8 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            {/* Right - Features */}
            <div className="space-y-8">
              {engineeringData.features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`relative pl-8 border-l border-[#C5A572]/30 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Number */}
                  <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center bg-[#C5A572] text-[#0d0d0d] text-xs font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <h3 className="font-display text-xl text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
