"use client";

import { useState } from "react";

export default function FeaturesSection() {
  const features = [
    "교회 소개 페이지",
    "설교 아카이브",
    "부서별 소식판",
    "새가족 안내 시스템",
    "온라인 헌금 / 기도 요청",
    "모바일 완전 최적화",
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 md:mb-16">
            교회에 꼭 필요한 기능만 담았습니다
          </h2>

          {/* 2x3 card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover glow underline */}
                {hoveredIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 animate-pulse"></div>
                )}
                
                {/* Icon placeholder */}
                <div className="text-2xl md:text-5xl mb-3 md:mb-4 text-gray-700 opacity-60">
                  {index === 0 && "🏛️"}
                  {index === 1 && "📖"}
                  {index === 2 && "📢"}
                  {index === 3 && "👨‍👩‍👧‍👦"}
                  {index === 4 && "💰"}
                  {index === 5 && "📱"}
                </div>
                
                {/* Feature name */}
                <h3 className="text-base md:text-2xl font-bold text-gray-900">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


