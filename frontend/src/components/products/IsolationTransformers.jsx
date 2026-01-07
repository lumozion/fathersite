import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOMeta from '../SEOMeta';

const IsolationTransformers = () => {
  const isolationSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Isolation Transformer Series IT",
    "description": "Safety isolation transformers providing electrical isolation and protection. Manufactured by S.R. Electronics.",
    "brand": {
      "@type": "Brand",
      "name": "S.R. Electronics"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "S.R. Electronics",
      "url": "https://www.srelectronics.store"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <SEOMeta 
        title="Isolation Transformers IT - S.R. Electronics | Safety Transformer Manufacturer Delhi"
        description="Safety isolation transformers for electrical protection. 230V/230V, 1kVA-100kVA, 4kV isolation. S.R. Electronics - ISO certified manufacturer in Delhi."
        keywords="isolation transformers, safety transformers, electrical transformers, Delhi, S.R. Electronics, SR Electronics"
        canonical="https://www.srelectronics.store/products/isolation-transformers"
        schemaMarkup={isolationSchema}
      />
      <div className="min-h-screen bg-[#fffef8] pt-24 pb-16">
      <div className="container-premium">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#1a1a1a] transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/isolation.jpeg"
                alt="Isolation Transformers"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div>
              <h1 className="section-title mb-6">Isolation Transformer Series IT</h1>
              <p className="text-[#4a4a4a] text-lg mb-8">
                Safety isolation transformers providing electrical isolation and protection.
           </p>
              
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 mb-8">
                <h3 className="font-display text-xl text-[#1a1a1a] mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Voltage</span>
                    <p className="text-[#1a1a1a] font-medium">230V/230V</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Power</span>
                    <p className="text-[#1a1a1a] font-medium">1kVA - 100kVA</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Isolation</span>
                    <p className="text-[#1a1a1a] font-medium">4kV Test</p>
                  </div>
                </div>
              </div>
              
              <a
                href="tel:+919313618021"
                className="btn-primary rounded-full inline-flex items-center gap-3"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default IsolationTransformers;