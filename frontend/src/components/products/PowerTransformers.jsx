import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOMeta from '../SEOMeta';

const PowerTransformers = () => {
  const powerSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Power Transformer Series PT",
    "description": "High-efficiency three-phase power transformers for industrial and commercial applications. Manufactured by S.R. Electronics.",
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

  const breadcrumbs = [
    { name: "Home", url: "https://www.srelectronics.store" },
    { name: "Products", url: "https://www.srelectronics.store#products" },
    { name: "Power Transformers", url: "https://www.srelectronics.store/products/power-transformers" }
  ];

  const faq = [
    {
      question: "What are the specifications of your power transformers?",
      answer: "Our power transformers support 11kV-33kV voltage range with power ratings from 100kVA to 2500kVA, operating at 50/60 Hz."
    },
    {
      question: "Are power transformers suitable for industrial applications?",
      answer: "Yes, our high-efficiency three-phase power transformers are designed specifically for industrial and commercial applications."
    },
    {
      question: "What is the efficiency rating of your transformers?",
      answer: "Our transformers are designed for high efficiency with minimal losses. Contact us for specific efficiency ratings for your application."
    },
    {
      question: "Do you offer on-site installation?",
      answer: "Yes, we provide installation support. Call +91-9313618021 for details on installation services."
    },
    {
      question: "What is your delivery timeline?",
      answer: "Delivery timelines vary based on specifications and order volume. Contact us for custom delivery schedules."
    }
  ];

  return (
    <>
      <SEOMeta 
        title="Power Transformers PT - S.R. Electronics | Industrial Transformer Manufacturer Delhi"
        description="High-efficiency three-phase power transformers for industrial applications. 11kV-33kV, 100kVA-2500kVA, power transformer supplier"
        keywords="power transformers, industrial transformers, three-phase transformers, Delhi, S.R. Electronics, SR Electronics, power transformer supplier"
        canonical="https://www.srelectronics.store/products/power-transformers"
        ogImage="/ogimage.jpeg"
        schemaMarkup={powerSchema}
        breadcrumbs={breadcrumbs}
        faqSchema={faq}
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Power Transformers"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <div>
              <h1 className="section-title mb-6">Power Transformer Series PT</h1>
              <p className="text-[#4a4a4a] text-lg mb-8">
                High-efficiency three-phase power transformers for industrial and commercial applications.
              </p>
              
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 mb-8">
                <h3 className="font-display text-xl text-[#1a1a1a] mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Voltage</span>
                    <p className="text-[#1a1a1a] font-medium">11kV - 33kV</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Power</span>
                    <p className="text-[#1a1a1a] font-medium">100kVA - 2500kVA</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Frequency</span>
                    <p className="text-[#1a1a1a] font-medium">50/60 Hz</p>
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

export default PowerTransformers;