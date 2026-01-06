import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AutoTransformers = () => {
  return (
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
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
                alt="Auto Transformers"
                className="w-full h-[400px] object-cover"
              />
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
  );
};

export default AutoTransformers;