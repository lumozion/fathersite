import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOMeta from '../SEOMeta';

const ControlTransformers = () => {
  const controlSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Control Transformer Series CT",
    "description": "Premium single-phase control transformers for industrial automation systems. Manufactured by S.R. Electronics.",
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
    { name: "Control Transformers", url: "https://www.srelectronics.store/products/control-transformers" }
  ];

  const faqSchema = [
    {
      question: "What are control transformers used for?",
      answer: "Control transformers are used for industrial automation, providing reliable power supply to control circuits in manufacturing equipment and industrial systems."
    },
    {
      question: "What voltage range do your control transformers support?",
      answer: "Our control transformers support voltage ranges from 230V to 440V with power ratings from 50VA to 5000VA."
    },
    {
      question: "Are the transformers ISO certified?",
      answer: "Yes, S.R. Electronics is ISO certified and all our transformers meet international quality standards."
    },
    {
      question: "What is the warranty on control transformers?",
      answer: "All our control transformers come with comprehensive warranty coverage. Contact us for specific warranty terms."
    },
    {
      question: "Can I get custom specifications?",
      answer: "Yes, we provide custom transformer specifications to meet your specific requirements. Call +91-9313618021 for custom orders."
    }
  ];

  return (
    <>
      <SEOMeta 
        title="Control Transformers CT - S.R. Electronics | Premium Transformer Manufacturer Delhi"
        description="Premium control transformers for industrial automation. 230V-440V, 50VA-5000VA. S.R. Electronics - ISO certified transformer manufacturer in Delhi with 20+ years experience."
        keywords="control transformers, automation transformers, industrial transformers, Delhi, S.R. Electronics, SR Electronics, control transformer manufacturer"
        canonical="https://www.srelectronics.store/products/control-transformers"
        ogImage="/ogimage.jpeg"
        schemaMarkup={controlSchema}
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
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/control.jpeg"
                alt="Control Transformers"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div>
              <h1 className="section-title mb-6">Control Transformer Series CT</h1>
              <p className="text-[#4a4a4a] text-lg mb-8">
                Premium single-phase control transformers for industrial automation systems.
              </p>
              
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 mb-8">
                <h3 className="font-display text-xl text-[#1a1a1a] mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Voltage</span>
                    <p className="text-[#1a1a1a] font-medium">230V - 440V</p>
                  </div>
                  <div>
                    <span className="text-[#8a8a8a] text-sm">Power</span>
                    <p className="text-[#1a1a1a] font-medium">50VA - 5000VA</p>
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

export default ControlTransformers;