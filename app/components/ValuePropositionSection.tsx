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

    // 모바일 감지
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

    let lastScrollTime = 0;
    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 50; // 스크롤 임계값
    const SCROLL_COOLDOWN = 800; // 스크롤 쿨다운 (ms)

    // 터치 관련 변수
    let touchStartY = 0;
    let touchEndY = 0;
    const SWIPE_THRESHOLD = 50; // 스와이프 임계값

    const updateCurrentSection = () => {
      const viewportHeight = window.innerHeight;
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          const sectionCenter = sectionRect.top + sectionRect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          
          // 화면 중앙에 가장 가까운 섹션을 현재 섹션으로 설정
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });
      
      currentSection.current = closestIndex;
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

    // 데스크탑 wheel 이벤트
    const handleWheel = (e: WheelEvent) => {
      if (isMobile) return;
      
      updateCurrentSection();
      
      const isFirstSection = currentSection.current === 0;
      const isLastSection = currentSection.current === sectionRefs.current.length - 1;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      // 컨테이너의 스크롤 위치 확인
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

      // 첫 번째 섹션이고 컨테이너 최상단에서 위로 스크롤
      if (isFirstSection && isScrollingUp && isAtTop) {
        // 이벤트를 막지 않고 부모로 전파
        return;
      }

      // 마지막 섹션이고 컨테이너 최하단에서 아래로 스크롤
      if (isLastSection && isScrollingDown && isAtBottom) {
        // 이벤트를 막지 않고 부모로 전파
        return;
      }

      // 중간 섹션이거나 경계가 아닌 경우 스크롤 제어
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
        } else if (isLastSection) {
          // 마지막 섹션에서 컨테이너 끝까지 스크롤
          container.scrollTop = scrollHeight;
        }
      } else {
        // 위로 스크롤
        if (currentSection.current > 0) {
          scrollToSection(currentSection.current - 1);
        } else if (isFirstSection) {
          // 첫 번째 섹션에서 컨테이너 시작까지 스크롤
          container.scrollTop = 0;
        }
      }
    };

    // 모바일 터치 이벤트
    const handleTouchStart = (e: TouchEvent) => {
      if (!isMobile) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobile) return;
      touchEndY = e.touches[0].clientY;
      
      // 경계에서 자연스러운 스크롤을 위해 터치 무브는 막지 않음
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isMobile || isScrolling.current) return;
      
      const swipeDistance = touchStartY - touchEndY;
      
      if (Math.abs(swipeDistance) < SWIPE_THRESHOLD) {
        return;
      }

      updateCurrentSection();
      
      const isFirstSection = currentSection.current === 0;
      const isLastSection = currentSection.current === sectionRefs.current.length - 1;
      
      // 컨테이너의 스크롤 위치 확인
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
      
      if (swipeDistance > 0) {
        // 위로 스와이프 (아래로 스크롤)
        if (isLastSection && isAtBottom) {
          // 마지막 섹션 최하단에서는 자연스러운 스크롤 허용
          return;
        }
        if (currentSection.current < sectionRefs.current.length - 1) {
          scrollToSection(currentSection.current + 1);
        }
      } else {
        // 아래로 스와이프 (위로 스크롤)
        if (isFirstSection && isAtTop) {
          // 첫 번째 섹션 최상단에서는 자연스러운 스크롤 허용
          return;
        }
        if (currentSection.current > 0) {
          scrollToSection(currentSection.current - 1);
        }
      }
    };

    const handleScroll = () => {
      if (isScrolling.current) return;
      updateCurrentSection();
    };

    // 이벤트 리스너 등록
    if (!isMobile) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('scroll', handleScroll, { passive: true });

    // 초기 현재 섹션 설정
    updateCurrentSection();

    return () => {
      if (!isMobile) {
        container.removeEventListener('wheel', handleWheel);
      }
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
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
          scroll-snap-type: y proximity;
          overflow-y: auto;
          height: 100vh;
          scroll-padding: 0;
          scroll-behavior: smooth;
          overscroll-behavior: none;
        }

        .fullpage-section {
          height: 100vh;
          min-height: 100vh;
          max-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          scroll-snap-align: center;
          scroll-snap-stop: normal;
          position: relative;
          transition: all 0.6s ease-in-out;
          flex-shrink: 0;
        }
        
        .fullpage-section:first-child {
          scroll-snap-align: start;
        }
        
        .fullpage-section:last-child {
          scroll-snap-align: end;
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
          .fullpage-scroll-container {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: y mandatory;
          }

          .fullpage-section {
            height: 100vh;
            min-height: 100vh;
            max-height: 100vh;
            padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
          }

          .fullpage-content {
            padding: 1.5rem 1.25rem;
            max-width: 100%;
          }

          .section-number {
            font-size: 0.875rem;
            margin-bottom: 1.25rem;
            letter-spacing: 0.15em;
          }

          .section-title {
            font-size: clamp(1.75rem, 7vw, 2.25rem);
            margin-bottom: 1.5rem;
            line-height: 1.4;
            letter-spacing: -0.01em;
            word-break: keep-all;
          }

          .section-description {
            font-size: clamp(0.9rem, 3.5vw, 1.05rem);
            line-height: 1.75;
            padding: 0 0.5rem;
            word-break: keep-all;
          }
        }

        /* 작은 모바일 (세로 모드) */
        @media (max-width: 480px) {
          .fullpage-content {
            padding: 1.25rem 1rem;
          }

          .section-title {
            font-size: clamp(1.5rem, 8vw, 2rem);
            margin-bottom: 1.25rem;
          }

          .section-description {
            font-size: clamp(0.85rem, 4vw, 1rem);
            line-height: 1.7;
          }

          .section-number {
            font-size: 0.8rem;
            margin-bottom: 1rem;
          }
        }

        /* 가로 모드 모바일 */
        @media (max-width: 768px) and (orientation: landscape) {
          .fullpage-content {
            padding: 1rem;
          }

          .section-title {
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin-bottom: 1rem;
          }

          .section-description {
            font-size: clamp(0.85rem, 2.5vw, 1rem);
            margin-bottom: 0.5rem;
          }

          .section-number {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
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
