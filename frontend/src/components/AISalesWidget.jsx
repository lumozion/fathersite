import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';

const AISalesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-24 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50">
          <div className="bg-[#C5A572] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot size={24} />
              <div>
                <h3 className="font-medium">AI Sales Assistant</h3>
                <p className="text-xs opacity-90">Powered by S.R. Electronics</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div id="ai-sales-widget-root" className="p-4 h-96 overflow-y-auto">
            <p className="text-gray-600 text-sm">AI Assistant loading...</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#C5A572] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#B8956A] transition-all duration-300 flex items-center justify-center z-50"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>
    </>
  );
};

export default AISalesWidget;
