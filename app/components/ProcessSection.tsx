"use client";

import { useState, useEffect, useRef } from "react";

export default function ProcessSection() {
  const processes = [
    { 
      number: 1, 
      title: "상담문의", 
      badge: "24시간 내 응답",
      description: "홈페이지, 카카오톡, 인스타 등을 통해 문의를 남겨주시면 상담을 진행합니다." 
    },
    { 
      number: 2, 
      title: "견적 안내 및 결제", 
      badge: "명확한 견적",
      description: "상담 내용을 바탕으로 홈페이지 제작 견적을 산출하고, 계약서 작성 후 대금을 결제 받습니다." 
    },
    { 
      number: 3, 
      title: "확정 후 기획", 
      badge: "맞춤형 기획안",
      description: "계약 확정 후 고객님의 필요 내용을 파악하고 일정 및 기획을 진행합니다." 
    },
    { 
      number: 4, 
      title: "시안 전달 및 수정", 
      badge: "실시간 피드백",
      description: "PC 버전 전반 시안을 제공하고 고객님의 피드백을 통해 수정작업에 들어갑니다." 
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            processes.forEach((_, index) => {
              setTimeout(() => {
                setVisibleIndex(index);
              }, index * 150);
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
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%)',
        padding: 'clamp(20px, 4vw, 40px)',
      }}
    >
      {/* 배경 효과 */}
      <div className="absolute inset-0" style={{ opacity: 0.05 }}>
        <div 
          className="absolute top-0 left-0 rounded-full blur-3xl"
          style={{
            width: '384px',
            height: '384px',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 rounded-full blur-3xl"
          style={{
            width: '384px',
            height: '384px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10" style={{ padding: 'clamp(20px, 4vw, 40px)' }}>
        {/* 헤더 */}
        <div 
          className="text-center transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%)',
            borderRadius: '64px',
            boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
            padding: 'clamp(20px, 3vw, 40px)',
            marginBottom: 'clamp(30px, 5vw, 70px)',
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: 'clamp(30px, 5vw, 70px)',
          }}
        >
          <div 
            className="inline-block"
            style={{
              background: '#fbbf24',
              color: '#78350f',
              borderRadius: '999px',
              padding: 'clamp(8px, 1.5vw, 14px) clamp(20px, 3vw, 36px)',
              fontSize: 'clamp(16px, 3.2vw, 24px)',
              fontWeight: '700',
              marginBottom: 'clamp(12px, 2vw, 20px)',
            }}
          >
            간단한 4단계
          </div>
          <h2 
            style={{
              fontSize: 'clamp(20px, 4.8vw, 42px)',
              fontWeight: '800',
              color: '#0f172a',
              lineHeight: '1.3',
            }}
          >
            교회 홈페이지 제작 프로세스
          </h2>
        </div>

        {/* 프로세스 타임라인 */}
        <div className="relative max-w-5xl mx-auto">
          {/* 세로 연결선 (데스크탑만) */}
          <div 
            className="hidden md:block absolute"
            style={{
              left: '60px',
              top: '45px',
              bottom: '45px',
              width: '2px',
              background: 'linear-gradient(to bottom, #3b82f6, #60a5fa, #93c5fd)',
            }}
          ></div>

          {/* 스텝 목록 */}
          <div style={{ marginBottom: 'clamp(28px, 4vw, 60px)' }}>
            {processes.map((process, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  visibleIndex !== null && visibleIndex >= index
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
                style={{
                  marginBottom: index < processes.length - 1 ? 'clamp(28px, 4vw, 60px)' : '0',
                  transform: visibleIndex !== null && visibleIndex >= index ? 'none' : 'translateY(20px)',
                }}
              >
                <div className="flex items-start gap-4 md:gap-8">
                  {/* 번호 원형 뱃지 */}
                  <div 
                    className="flex-shrink-0 flex items-center justify-center relative"
                    style={{
                      width: 'clamp(60px, 10vw, 90px)',
                      height: 'clamp(60px, 10vw, 90px)',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      borderRadius: '50%',
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                      zIndex: 10,
                    }}
                  >
                    <span 
                      style={{
                        fontSize: 'clamp(20px, 3.5vw, 36px)',
                        fontWeight: '800',
                        color: '#ffffff',
                      }}
                    >
                      {process.number}
                    </span>
                  </div>

                  {/* 스텝 카드 */}
                  <div 
                    className="flex-1"
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      padding: 'clamp(18px, 3vw, 32px)',
                    }}
                  >
                    {/* 작은 뱃지 */}
                    <div 
                      className="inline-block"
                      style={{
                        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                        borderRadius: '16px',
                        padding: 'clamp(5px, 1vw, 6px) clamp(10px, 2vw, 14px)',
                        fontSize: 'clamp(11px, 1.8vw, 15px)',
                        fontWeight: '600',
                        color: '#1e40af',
                        marginBottom: 'clamp(10px, 1.5vw, 16px)',
                      }}
                    >
                      {process.badge}
                    </div>

                    {/* 제목 */}
                    <h3 
                      style={{
                        fontSize: 'clamp(18px, 3vw, 26px)',
                        fontWeight: '800',
                        color: '#0f172a',
                        marginBottom: 'clamp(8px, 1.5vw, 14px)',
                      }}
                    >
                      {process.title}
                    </h3>

                    {/* 설명 */}
                    <p 
                      style={{
                        fontSize: 'clamp(14px, 2.2vw, 17px)',
                        color: '#64748b',
                        lineHeight: '1.7',
                      }}
                    >
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 하단 요약 박스 */}
          <div 
            className="text-center"
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              padding: 'clamp(24px, 4vw, 40px)',
              marginTop: 'clamp(30px, 5vw, 70px)',
              maxWidth: '720px',
              margin: '0 auto',
              marginTop: 'clamp(30px, 5vw, 70px)',
            }}
          >
            <p 
              style={{
                fontSize: 'clamp(16px, 2.8vw, 20px)',
                color: '#475569',
                lineHeight: '1.7',
              }}
            >
              평균 <span style={{ color: '#ef4444', fontWeight: '800' }}>3-4주</span> 내에 완성되며,{' '}
              <span style={{ color: '#3b82f6', fontWeight: '800' }}>무료 상담</span>부터 시작하세요!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

