import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOMeta from '../SEOMeta';

const AutoTransformers = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/auto.jpeg', '/auto2.jpeg'];

  const autoSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Auto Transformer Series AT",
    "description": "Compact auto transformers for voltage regulation and motor starting applications. Manufactured by S.R. Electronics.",
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
    { name: "Auto Transformers", url: "https://www.srelectronics.store/products/auto-transformers" }
  ];

  const faqSchema = [
    {
      question: "What are auto transformers used for?",
      answer: "Auto transformers are used for voltage regulation and soft-starting motors, providing smooth power supply adjustment for various industrial applications."
    },
    {
      question: "What voltage range can auto transformers adjust?",
      answer: "Our auto transformers operate at 415V with adjustable taps providing ±10% voltage adjustment capability for precise voltage regulation."
    },
    {
      question: "What is the power rating range?",
      answer: "Our auto transformers are available in power ratings from 5kVA to 500kVA to suit different application requirements."
    },
    {
      question: "Are auto transformers more efficient than regular transformers?",
      answer: "Yes, auto transformers are more compact and efficient because they have a smaller copper mass and lower losses compared to conventional transformers."
    },
    {
      question: "Can auto transformers be used for motor starting?",
      answer: "Yes, auto transformers with tap adjustments are ideal for soft-starting motors by gradually increasing voltage, reducing inrush current and mechanical stress."
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <SEOMeta 
        title="Auto Transformers AT - S.R. Electronics | Voltage Regulation Transformer Manufacturer Delhi"
        description="Compact auto transformers for voltage regulation and motor starting. 415V variable, 5kVA-500kVA, ±10% taps. S.R. Electronics - ISO certified transformer manufacturer in Delhi."
        keywords="auto transformers, voltage regulation transformers, motor starting, soft starter, Delhi, S.R. Electronics, SR Electronics"
        canonical="https://www.srelectronics.store/products/auto-transformers"
        ogImage="/ogimage.jpeg"
        schemaMarkup={autoSchema}
        breadcrumbs={breadcrumbs}
        faqSchema={faqSchema}
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
            {/* Image Slideshow */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={images[currentImage]}
                alt="Auto Transformers"
                className="w-full h-[400px] object-cover transition-opacity duration-500"
                loading="lazy"
                decoding="async"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImage ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h1 className="section-title mb-6">Auto Transformer Series AT</h1>
              <p className="text-[#4a4a4a] text-lg mb-8">
                Compact auto transformers for voltage regulation and motor starting applications.
              </p>
              
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 mb-8">
                <h3 className="font-display text-xl text-[#1a1a1a] mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Voltage</span>
                    <p className="text-[#1a1a1a] font-medium">415V Variable</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Power</span>
                    <p className="text-[#1a1a1a] font-medium">5kVA - 500kVA</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Taps</span>
                    <p className="text-[#1a1a1a] font-medium">±10% Steps</p>
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

export default AutoTransformers;