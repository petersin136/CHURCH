"use client";

import { useState } from "react";

export default function FeatureSliderSection() {
  const features = [
    {
      number: "01",
      title: "교회 소개 페이지",
      description: "담임목회자, 교회 역사, 신앙고백, 비전, 예배 시간 등을 한눈에. 처음 오는 분도 교회를 쉽게 이해할 수 있습니다.",
    },
    {
      number: "02",
      title: "설교 아카이브",
      description: "주일설교와 특별설교를 체계적으로 관리하고 제공합니다. 성도들이 언제든지 하나님의 말씀에 접근할 수 있습니다.",
    },
    {
      number: "03",
      title: "부서별 소식판",
      description: "각 부서의 소식과 일정을 한 곳에서 확인할 수 있습니다. 교회 구성원들이 함께 나누는 공간입니다.",
    },
    {
      number: "04",
      title: "새가족 안내 시스템",
      description: "새로 오신 가족들을 위한 환영 페이지와 등록 시스템으로 따뜻하게 맞이합니다.",
    },
    {
      number: "05",
      title: "온라인 헌금 / 기도 요청",
      description: "안전하고 편리한 온라인 헌금 시스템과 기도 요청 기능으로 교회의 사역을 지원합니다.",
    },
    {
      number: "06",
      title: "모바일 완전 최적화",
      description: "모든 디바이스에서 완벽하게 작동하는 반응형 디자인으로 어디서나 교회를 만날 수 있습니다.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tabs/Slider Navigation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-16 border-b border-gray-200 pb-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {feature.number}
              </button>
            ))}
          </div>

          {/* Active Feature Content */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Text */}
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-4">
                  {features[activeIndex].number}
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {features[activeIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {features[activeIndex].description}
                </p>
              </div>

              {/* Right: Image placeholder */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-32 h-32 md:w-48 md:h-48 mx-auto opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-4 text-sm md:text-base">기능 이미지</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


