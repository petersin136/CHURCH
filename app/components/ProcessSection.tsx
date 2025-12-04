"use client";

import { useState, useEffect, useRef } from "react";

export default function ProcessSection() {
  const processes = [
    { 
      number: "01", 
      title: "상담문의", 
      highlight: "24시간 내 응답",
      description: "홈페이지, 카카오톡, 인스타 등을 통해 문의를 남겨주시면 상담을 진행합니다." 
    },
    { 
      number: "02", 
      title: "견적 안내 및 결제", 
      highlight: "명확한 견적 제공",
      description: "상담 내용을 바탕으로 홈페이지 제작 견적을 산출하고, 계약서 작성 후 대금을 결제 받습니다." 
    },
    { 
      number: "03", 
      title: "확정 후 기획", 
      highlight: "맞춤형 기획안",
      description: "계약 확정 후 고객님의 필요 내용을 파악하고 일정 및 기획을 진행합니다." 
    },
    { 
      number: "04", 
      title: "시안 전달 및 수정", 
      highlight: "실시간 피드백",
      description: "PC 버전 전반 시안을 제공하고 고객님의 피드백을 통해 수정작업에 들어갑니다." 
    },
    { 
      number: "05", 
      title: "모바일 작업 및 수정", 
      highlight: "완벽한 반응형",
      description: "PC 버전 수정작업이 완료되면 모바일 홈페이지 작업을 진행합니다." 
    },
    { 
      number: "06", 
      title: "최종 시안 전달", 
      highlight: "완성 및 관리 가이드",
      description: "완성된 최종 홈페이지 작업물을 넘겨드리고 관리가이드를 제공합니다." 
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 섹션이 보이면 순차적으로 애니메이션
            processes.forEach((_, index) => {
              setTimeout(() => {
                setVisibleIndex(index);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            PROCESS
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">작업 프로세스</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processes.map((process, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                  visibleIndex !== null && visibleIndex >= index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Image-like gradient background */}
                <div 
                  className="h-48 md:h-56 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, 
                      hsl(${210 + index * 15}, 70%, 60%) 0%, 
                      hsl(${200 + index * 15}, 65%, 55%) 100%)`
                  }}
                >
                  {/* Number badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-white/30">
                      <span className="text-white font-bold text-xl md:text-2xl">{process.number}</span>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs md:text-sm font-semibold rounded-full">
                      {process.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                    {process.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}

