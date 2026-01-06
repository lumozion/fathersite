import React, { useEffect, useRef, useState } from 'react';
import { craftsmanshipData } from '../data/mock';

const Craftsmanship = () => {
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
      id="craftsmanship"
      ref={sectionRef}
      className="section-spacing bg-[#f8f7f2]"
    >
      <div className="container-premium">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p
            className={`section-subtitle mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {craftsmanshipData.subtitle}
          </p>
          <h2
            className={`section-title mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {craftsmanshipData.title}
          </h2>
          <p
            className={`text-lg text-[#4a4a4a] leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {craftsmanshipData.description}
          </p>
        </div>

        {/* Images Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Image */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative overflow-hidden group rounded-3xl">
              <img
                src={craftsmanshipData.images[0].src}
                alt={craftsmanshipData.images[0].alt}
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent">
                <span className="text-white text-sm tracking-widest uppercase">
                  {craftsmanshipData.images[0].caption}
                </span>
              </div>
            </div>
          </div>

          {/* Stacked Images */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {craftsmanshipData.images.slice(1).map((image, index) => (
              <div
                key={image.id}
                className={`relative overflow-hidden group rounded-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[200px] lg:h-[234px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent">
                  <span className="text-white text-sm tracking-widest uppercase">
                    {image.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
