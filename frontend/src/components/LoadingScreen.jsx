import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#fffef8] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <div className="absolute inset-0 border-4 border-[#C5A572] rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-2 bg-[#C5A572] rounded-full flex items-center justify-center">
            <span className="text-white font-display text-xl font-bold">SR</span>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="font-display text-2xl text-[#1a1a1a] mb-4 animate-pulse">
          S.R. ELECTRONICS
        </div>
        <div className="text-[#8a8a8a] text-sm tracking-wider uppercase">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;