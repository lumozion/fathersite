import React, { useEffect, useRef, useState } from 'react';
import { industriesData } from '../data/mock';
import { Factory, Cog, Activity, Zap, Building, Radio } from 'lucide-react';

const iconMap = {
  Factory: Factory,
  Cog: Cog,
  Activity: Activity,
  Zap: Zap,
  Building: Building,
  Radio: Radio,
};

const Industries = () => {
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
      id="industries"
      ref={sectionRef}
      className="section-spacing bg-[#f8f7f2]"
    >
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p
            className={`section-subtitle mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {industriesData.subtitle}
          </p>
          <h2
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {industriesData.title}
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {industriesData.industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <div
                key={industry.id}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                {/* Icon Container */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl group-hover:bg-white/40 group-hover:border-[#C5A572]/50 transition-all duration-300 shadow-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Icon && (
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className="text-[#1a1a1a] group-hover:text-[#C5A572] transition-colors duration-300"
                      />
                    )}
                  </div>
                  {/* Hover line */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-px bg-[#C5A572] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>

                {/* Industry Name */}
                <h3 className="text-sm tracking-wider uppercase text-[#1a1a1a] group-hover:text-[#C5A572] transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
