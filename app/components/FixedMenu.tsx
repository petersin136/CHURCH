"use client";

export default function FixedMenu() {
  return (
    <div className="fixed-menu hidden lg:block">
      <div className="flex flex-col space-y-4">
        <a
          href="#"
          className="w-16 h-16 rounded-full bg-blue-200 flex flex-col items-center justify-center text-xs text-center hover-scale"
        >
          <span className="text-2xl mb-1">💡</span>
          <span>상담</span>
        </a>
        <a
          href="#"
          className="w-16 h-16 rounded-full bg-gray-800 text-white flex flex-col items-center justify-center text-xs text-center hover-scale"
        >
          <span className="text-2xl mb-1">📁</span>
          <span>포트폴리오</span>
        </a>
      </div>
    </div>
  );
}

