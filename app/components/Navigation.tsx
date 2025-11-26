"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md z-40 border-b border-gray-200" style={{ backgroundColor: 'rgba(245, 245, 240, 0.95)' }}>
      <div className="container mx-auto px-3 md:px-6 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 cursor-pointer hover:opacity-80 transition">
            <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
              <Image
                src="https://hqpnwiaifysfpbpwixim.supabase.co/storage/v1/object/public/media/KakaoTalk_Photo_2025-06-23-00-02-43%20002-Photoroom.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold italic" style={{ color: '#553822', fontFamily: 'Georgia, serif' }}>
              maranatha studio
            </span>
          </Link>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-xs md:text-sm text-gray-600">
            <a href="#" className="hover:text-black transition">홈</a>
            <a href="#" className="hover:text-black transition">포트폴리오</a>
            <a href="#" className="hover:text-black transition">서비스</a>
            <a href="#" className="hover:text-black transition">문의하기</a>
          </div>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
            aria-label="메뉴"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3">
            <a
              href="#"
              className="block text-gray-600 hover:text-black transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-black transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              포트폴리오
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-black transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              서비스
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-black transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

