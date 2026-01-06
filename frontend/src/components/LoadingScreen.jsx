import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#fffef8] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo with srelec.jpeg */}
        <div className="mb-8 flex justify-center">
          <img
            src="/srelec.jpeg"
            alt="S.R. Electronics"
            className="w-32 h-32 object-contain animate-pulse"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(197, 165, 114, 0.3))',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        
        {/* Company Name */}
        <h1 className="font-display text-2xl lg:text-3xl tracking-widest text-[#1a1a1a] mb-2">
          S.R. ELECTRONICS
        </h1>
        
        {/* Tagline */}
        <p className="text-[#C5A572] text-sm tracking-wider uppercase">
          Precision Engineering Excellence
        </p>
        
        {/* Loading Animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#C5A572] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#C5A572] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#C5A572] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;