import React, { useEffect, useRef, useState } from 'react';
import { productsData } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-spacing bg-[#fffef8]"
    >
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p
            className={`section-subtitle mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {productsData.subtitle}
          </p>
          <h2
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {productsData.title}
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {productsData.products.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer transition-all duration-700 magnetic ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
              onClick={() => window.location.href = `/products/${product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
            >
              <div className="relative overflow-hidden mb-6 rounded-3xl animate-morphing-border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] lg:h-[360px] object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/30 transition-colors duration-500" />
                
                {/* Specs Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    activeProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="backdrop-blur-md bg-white/90 p-6 lg:p-8 max-w-xs rounded-2xl border border-white/30 shadow-xl">
                    <h4 className="text-sm tracking-widest uppercase text-[#C5A572] mb-4">
                      Specifications
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-sm">
                        <span className="text-[#8a8a8a]">Voltage</span>
                        <span className="text-[#1a1a1a] font-medium">{product.specs.voltage}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-[#8a8a8a]">Power</span>
                        <span className="text-[#1a1a1a] font-medium">{product.specs.power}</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-[#8a8a8a]">Frequency</span>
                        <span className="text-[#1a1a1a] font-medium">{product.specs.frequency}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-display text-xl lg:text-2xl text-[#1a1a1a] mb-2 group-hover:text-[#C5A572] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-[#4a4a4a] text-sm lg:text-base mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-[#1a1a1a] group-hover:text-[#C5A572] transition-colors duration-300">
                  View Details
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
