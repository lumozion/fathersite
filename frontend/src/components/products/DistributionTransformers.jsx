import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOMeta from '../SEOMeta';

const DistributionTransformers = () => {
  const distSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Distribution Transformer Series DT",
    "description": "Reliable distribution transformers for efficient power distribution networks. Manufactured by S.R. Electronics.",
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
    { name: "Distribution Transformers", url: "https://www.srelectronics.store/products/distribution-transformers" }
  ];

  const faq = [
    {
      question: "What are distribution transformers used for?",
      answer: "Distribution transformers step down voltage from transmission lines to distribution levels suitable for end consumers in power distribution networks."
    },
    {
      question: "What is the standard voltage for distribution transformers?",
      answer: "Our distribution transformers operate at 11kV/415V with power ratings from 25kVA to 1000kVA."
    },
    {
      question: "Are your transformers oil-cooled?",
      answer: "Yes, all our distribution transformers use oil cooling technology for efficient heat dissipation and long operational life."
    },
    {
      question: "What maintenance is required?",
      answer: "Minimal maintenance is required. Regular inspection and oil testing are recommended annually. Contact us for maintenance guidelines."
    },
    {
      question: "How long do distribution transformers typically last?",
      answer: "With proper maintenance, our distribution transformers can operate reliably for 25-40 years."
    }
  ];

  return (
    <>
      <SEOMeta 
        title="Distribution Transformers DT - S.R. Electronics | Power Distribution Manufacturer Delhi"
        description="Reliable distribution transformers for power distribution networks. 11kV/415V, 25kVA-1000kVA, oil-cooled. S.R. Electronics - ISO certified transformer manufacturer in Delhi."
        keywords="distribution transformers, power distribution, oil cooled transformers, Delhi, S.R. Electronics, SR Electronics, distribution transformer supplier"
        canonical="https://www.srelectronics.store/products/distribution-transformers"
        ogImage="/ogimage.jpeg"
        schemaMarkup={distSchema}
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Distribution Transformers"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <div>
              <h1 className="section-title mb-6">Distribution Transformer Series DT</h1>
              <p className="text-[#4a4a4a] text-lg mb-8">
                Reliable distribution transformers for efficient power distribution networks.
           </p>
              
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 mb-8">
                <h3 className="font-display text-xl text-[#1a1a1a] mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Voltage</span>
                    <p className="text-[#1a1a1a] font-medium">11kV/415V</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Power</span>
                    <p className="text-[#1a1a1a] font-medium">25kVA - 1000kVA</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Type</span>
                    <p className="text-[#1a1a1a] font-medium">Oil Cooled</p>
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

export default DistributionTransformers;