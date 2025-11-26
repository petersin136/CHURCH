"use client";

export default function FixedMenu() {
  return (
    <div className="fixed-menu hidden lg:block">
      <a
        href="#"
        className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex flex-col items-center justify-center text-xs text-center hover-scale shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
      >
        <span className="text-2xl mb-1">💡</span>
        <span className="text-gray-900 font-semibold">상담</span>
      </a>
    </div>
  );
}

