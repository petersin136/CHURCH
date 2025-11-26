"use client";

export default function FixedMenu() {
  return (
    <div className="fixed-menu hidden lg:block">
      <a
        href="#"
        className="group relative w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex flex-col items-center justify-center text-xs text-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50 active:scale-95"
        style={{
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(255, 234, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/50 to-yellow-600/50 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <svg 
            className="w-8 h-8 mb-1.5 text-gray-900 group-hover:rotate-12 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
          <span className="text-gray-900 font-bold text-[11px] tracking-tight">상담</span>
        </div>
      </a>
    </div>
  );
}

