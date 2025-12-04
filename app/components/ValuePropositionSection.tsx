"use client";

import { useState, useEffect, useRef } from "react";

export default function ValuePropositionSection() {
  // 마키 텍스트 데이터
  const marqueeWords = Array.from({ length: 30 }, (_, index) => {
    const isChurch = index % 2 === 0;
    return {
      label: isChurch ? "church" : "Homepage",
      colorClass: isChurch ? "color-black" : "color-red",
    };
  });

  // 기존 포인트 데이터
  const points = [
    {
      title: "교회의 신앙고백을 보여줍니다.",
      subtitle: "교회의 신앙 정체성 확립",
      description: "\"우리 교회가 믿는 것\"을 명확히 전달하여, 흔들림 없는 신앙의 뿌리를 보여줍니다.",
    },
    {
      title: "목회 철학과 정체성을 담습니다.",
      subtitle: "목사님의 비전 공유",
      description: "목회 철학과 교회만의 고유한 색깔을 담아, 목사님의 뜻을 성도들과 나누는 통로가 됩니다.",
    },
    {
      title: "새신자를 안내합니다.",
      subtitle: "새신자에게 친절한 길잡이",
      description: "교회 오시는 길, 등록 방법 등 궁금한 모든 것을 쉽게 찾아볼 수 있도록 처음 오는 분들을 환영합니다.",
    },
    {
      title: "떠난 성도에게 길을 열어줍니다.",
      subtitle: "돌아오는 성도를 위한 창구",
      description: "사정상 교회를 떠났던 분들도 부담 없이 언제든 다시 교회의 소식을 접하고 돌아올 수 있는 마음의 문을 열어줍니다.",
    },
    {
      title: "교회의 가치와 비전을 전달합니다.",
      subtitle: "교회의 사명과 비전 확산",
      description: "교회가 추구하는 가치와 앞으로의 계획을 널리 알려, 성도들의 헌신과 다음 세대의 동참을 이끌어냅니다.",
    },
    {
      title: "온라인에서도 따뜻한 교제를 나눕니다.",
      subtitle: "언제나 연결된 따뜻한 공동체",
      description: "설교, 주보, 소식 등을 실시간으로 공유하여, 온라인 환경에서도 성도 간의 사랑과 교제를 지속하게 합니다.",
    },
  ];

  // 풀페이지 스크롤 섹션 데이터
  const scrollSections = [
    {
      bgColor: "#F5F1E8",
      title: "교회의 신앙고백을 보여줍니다",
      subtitle: "교회의 신앙 정체성 확립",
      description: "\"우리 교회가 믿는 것\"을 명확히 전달하여,\n흔들림 없는 신앙의 뿌리를 보여줍니다.",
      textColor: "#2C2C2C",
    },
    {
      bgColor: "#E8D5CE",
      title: "목회 철학과 정체성을 담습니다",
      subtitle: "목사님의 비전 공유",
      description: "목회 철학과 교회만의 고유한 색깔을 담아,\n목사님의 뜻을 성도들과 나누는 통로가 됩니다.",
      textColor: "#3D2F2F",
    },
    {
      bgColor: "#A8AFA3",
      title: "새신자를 안내합니다",
      subtitle: "새신자에게 친절한 길잡이",
      description: "교회 오시는 길, 등록 방법 등 궁금한 모든 것을\n쉽게 찾아볼 수 있도록 처음 오는 분들을 환영합니다.",
      textColor: "#1A1F1A",
    },
    {
      bgColor: "#C9A88E",
      title: "떠난 성도에게 길을 열어줍니다",
      subtitle: "돌아오는 성도를 위한 창구",
      description: "사정상 교회를 떠났던 분들도 부담 없이\n언제든 다시 교회의 소식을 접하고 돌아올 수 있는 마음의 문을 열어줍니다.",
      textColor: "#2C1F1A",
    },
    {
      bgColor: "#8B8D8A",
      title: "교회의 가치와 비전을 전달합니다",
      subtitle: "교회의 사명과 비전 확산",
      description: "교회가 추구하는 가치와 앞으로의 계획을 널리 알려,\n성도들의 헌신과 다음 세대의 동참을 이끌어냅니다.",
      textColor: "#1A1A1A",
    },
    {
      bgColor: "#5B6B7C",
      title: "온라인에서도 따뜻한 교제를 나눕니다",
      subtitle: "언제나 연결된 따뜻한 공동체",
      description: "설교, 주보, 소식 등을 실시간으로 공유하여,\n온라인 환경에서도 성도 간의 사랑과 교제를 지속하게 합니다.",
      textColor: "#E8E8E8",
    },
  ];

  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(6).fill(true));
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer로 섹션 가시성 감지 및 부드러운 스크롤 스냅
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    let isScrolling = false;
    let lastScrollTime = 0;

    // 부드러운 스크롤 스냅 함수
    const snapToSection = (index: number) => {
      const section = sectionRefs.current[index];
      if (!section || isScrolling) return;

      isScrolling = true;
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    // 약간의 지연 후 observer 설정
    const timer = setTimeout(() => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }
            });
          },
          {
            threshold: [0.3],
            rootMargin: "0px",
          }
        );

        observer.observe(ref);
        observers.push(observer);
      });
    }, 100);

    // 스크롤이 완전히 멈췄을 때만 부드럽게 스냅
    let scrollTimeout: NodeJS.Timeout;
    const handleScrollEnd = () => {
      const now = Date.now();
      if (isScrolling || now - lastScrollTime < 100) return;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (isScrolling) return;

        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // 섹션들의 위치 계산
        let closestIndex = -1;
        let closestDistance = Infinity;

        sectionRefs.current.forEach((ref, index) => {
          if (!ref) return;

          const rect = ref.getBoundingClientRect();
          const sectionTop = rect.top;
          const distance = Math.abs(sectionTop);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        // 섹션이 화면 중앙에서 20% 이상 벗어났을 때만 부드럽게 스냅
        if (closestIndex !== -1 && closestDistance > windowHeight * 0.2 && closestDistance < windowHeight * 0.8) {
          snapToSection(closestIndex);
        }
      }, 300);
    };

    const handleScroll = () => {
      lastScrollTime = Date.now();
      handleScrollEnd();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <section className="pt-0 pb-0 relative overflow-hidden" style={{ backgroundColor: '#F6F4EF' }}>
        {/* 마키 효과 */}
        <div className="marquee-shell marquee-top" aria-hidden>
          <div className="marquee-offset" aria-hidden>
            <div className="marquee-row">
              {marqueeWords.map((item, index) => (
                <span key={`main-${index}`} className={item.colorClass}>{`${item.label}\u00A0`}</span>
              ))}
          </div>
            <div className="marquee-row" aria-hidden>
              {marqueeWords.map((item, index) => (
                <span key={`dup-${index}`} className={item.colorClass}>{`${item.label}\u00A0`}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 풀페이지 스크롤 섹션 */}
      <div className="fullpage-scroll-container" ref={containerRef}>
        {scrollSections.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="fullpage-scroll-section"
            style={{
              backgroundColor: section.bgColor,
            }}
          >
            <div
              className={`fullpage-scroll-content ${
                visibleSections[index] ? "fullpage-scroll-content-visible" : ""
              }`}
              style={{ color: section.textColor }}
            >
              <div className="fullpage-scroll-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="fullpage-scroll-title">{section.title}</h3>
              <p className="fullpage-scroll-subtitle">{section.subtitle}</p>
              <p className="fullpage-scroll-description">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


