"use client";

import { useState, useEffect, useRef } from "react";

export default function ValuePropositionSection() {
  const sections = [
    {
      title: "교회의 신앙 고백을 보여줍니다",
      description: '"우리 교회가 믿는 것"을 명확히 전달하여, 흔들림 없는 신앙의 뿌리를 보여줍니다.',
      bgColor: "#F5F1E8",
      textColor: "#2C2C2C"
    },
    {
      title: "목회 철학과 정체성을 담습니다",
      description: "목회 철학과 교회만의 고유한 색깔을 담아, 목사님의 뜻을 성도들과 나누는 통로가 됩니다.",
      bgColor: "#E8D5CE",
      textColor: "#2C2C2C"
    },
    {
      title: "새신자를 안내합니다",
      description: "교회 오시는 길, 등록 방법 등 궁금한 모든 것을 쉽게 찾아볼 수 있도록 처음 오는 분들을 환영합니다.",
      bgColor: "#A8AFA3",
      textColor: "#FFFFFF"
    },
    {
      title: "떠난 성도에게 길을 열어줍니다",
      description: "사정상 교회를 떠났던 분들도 부담 없이 언제든 다시 교회의 소식을 접하고 돌아올 수 있는 마음의 문을 열어줍니다.",
      bgColor: "#C9A88E",
      textColor: "#2C2C2C"
    },
    {
      title: "교회의 가치와 비전을 전달합니다",
      description: "교회가 추구하는 가치와 앞으로의 계획을 널리 알려, 성도들의 헌신과 다음 세대의 동참을 이끌어냅니다.",
      bgColor: "#8B8D8A",
      textColor: "#FFFFFF"
    },
    {
      title: "온라인에서도 따뜻한 교제를 나눕니다",
      description: "설교, 주보, 소식 등을 실시간으로 공유하여, 온라인 환경에서도 성도 간의 사랑과 교제를 지속하게 합니다.",
      bgColor: "#5B6B7C",
      textColor: "#FFFFFF"
    }
  ];

  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);
  const currentSection = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(index));
            currentSection.current = index;
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTime = 0;
    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 50; // 스크롤 임계값
    const SCROLL_COOLDOWN = 800; // 스크롤 쿨다운 (ms)

    const updateCurrentSection = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          const sectionTop = sectionRect.top - containerTop;
          
          // 섹션이 화면 상단에 가까우면 현재 섹션으로 설정
          if (sectionTop >= -100 && sectionTop <= 100) {
            currentSection.current = index;
          }
        }
      });
    };

    const scrollToSection = (index: number) => {
      if (isScrolling.current) return;
      
      const sections = sectionRefs.current;
      if (index < 0 || index >= sections.length) return;
      
      const targetSection = sections[index];
      if (!targetSection) return;

      isScrolling.current = true;
      currentSection.current = index;
      
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      setTimeout(() => {
        isScrolling.current = false;
        updateCurrentSection();
      }, SCROLL_COOLDOWN);
    };

    const handleWheel = (e: WheelEvent) => {
      updateCurrentSection();
      
      const isFirstSection = currentSection.current === 0;
      const isLastSection = currentSection.current === sectionRefs.current.length - 1;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      // 첫 번째 섹션에서 위로 스크롤하거나, 마지막 섹션에서 아래로 스크롤할 때는 자연스럽게 스크롤 허용
      if ((isFirstSection && isScrollingUp) || (isLastSection && isScrollingDown)) {
        // preventDefault 하지 않고 자연스럽게 스크롤되도록 함
        return;
      }

      // 중간 섹션에서는 스크롤 제어
      e.preventDefault();
      e.stopPropagation();
      
      const now = Date.now();
      if (now - lastScrollTime < 50) {
        return;
      }

      if (isScrolling.current) {
        return;
      }

      scrollAccumulator += e.deltaY;
      
      // 스크롤 임계값을 넘었을 때만 이동
      if (Math.abs(scrollAccumulator) < SCROLL_THRESHOLD) {
        return;
      }

      lastScrollTime = now;
      const delta = scrollAccumulator;
      scrollAccumulator = 0;
      
      if (delta > 0) {
        // 아래로 스크롤
        if (currentSection.current < sectionRefs.current.length - 1) {
          scrollToSection(currentSection.current + 1);
        }
      } else {
        // 위로 스크롤
        if (currentSection.current > 0) {
          scrollToSection(currentSection.current - 1);
        }
      }
    };

    const handleScroll = () => {
      if (isScrolling.current) return;
      updateCurrentSection();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll, { passive: true });

    // 초기 현재 섹션 설정
    updateCurrentSection();

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="fullpage-scroll-container">
      {sections.map((section, index) => (
                <div
                  key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          data-index={index}
          className={`fullpage-section ${visibleSections.has(index) ? 'visible' : ''}`}
                  style={{
            backgroundColor: section.bgColor,
            color: section.textColor
          }}
        >
          <div className="fullpage-content">
            <div className="section-number" style={{ color: section.textColor }}>
              {String(index + 1).padStart(2, '0')}
            </div>
            <h2 className="section-title" style={{ color: section.textColor }}>
              {section.title}
            </h2>
            <p className="section-description" style={{ color: section.textColor }}>
              {section.description}
            </p>
          </div>
        </div>
      ))}

      <style jsx>{`
        .fullpage-scroll-container {
          scroll-snap-type: y mandatory;
          overflow-y: auto;
          height: 100vh;
          scroll-padding: 0;
          scroll-behavior: smooth;
          overscroll-behavior: contain;
        }

        .fullpage-section {
          height: 100vh;
          min-height: 100vh;
          max-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          position: relative;
          transition: all 0.6s ease-in-out;
          flex-shrink: 0;
        }

        .fullpage-content {
          max-width: 1200px;
          padding: 2rem;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fullpage-section.visible .fullpage-content {
          opacity: 1;
          transform: translateY(0);
        }

        .section-number {
          font-size: clamp(1rem, 2vw, 1.5rem);
          font-weight: 300;
          letter-spacing: 0.2em;
          margin-bottom: 1.5rem;
          opacity: 0.6;
          font-family: "Noto Serif KR", serif;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 2rem;
          font-family: "Noto Serif KR", serif;
          letter-spacing: -0.02em;
        }

        .section-description {
          font-size: clamp(1rem, 2vw, 1.5rem);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9;
          font-family: "Pretendard Variable", "Noto Sans KR", sans-serif;
          font-weight: 400;
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .fullpage-content {
            padding: 1.5rem;
          }

          .section-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
            margin-bottom: 1.5rem;
          }

          .section-description {
            font-size: clamp(0.95rem, 3vw, 1.1rem);
            line-height: 1.7;
          }

          .section-number {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
        }

        /* 스크롤바 스타일링 */
        .fullpage-scroll-container::-webkit-scrollbar {
          width: 8px;
        }

        .fullpage-scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        .fullpage-scroll-container::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        .fullpage-scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        /* 부드러운 스크롤 */
        @supports (scroll-behavior: smooth) {
          .fullpage-scroll-container {
            scroll-behavior: smooth;
          }
        }
      `}</style>
      </div>
  );
}
