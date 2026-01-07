import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#fffef8] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Loading Circle */}
        <div className="w-16 h-16 border-4 border-[#e5e5e5] border-t-[#C5A572] rounded-full animate-spin mx-auto mb-8"></div>
        
        {/* Company Name */}
        <h1 className="font-display text-2xl lg:text-3xl tracking-widest text-[#1a1a1a] mb-2">
          S.R. ELECTRONICS
        </h1>
        
        {/* Tagline */}
        <p className="text-[#C5A572] text-sm tracking-wider uppercase">
          Precision Engineering Excellence
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;