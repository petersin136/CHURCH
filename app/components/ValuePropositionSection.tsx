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

  // 풀페이지 스크롤 섹션 데이터 (제목은 모바일 줄바꿈 방지로 짧게)
  const scrollSections = [
    {
      bgColor: "#F5F1E8",
      title: "교회의 신앙고백",
      subtitle: "교회의 신앙 정체성 확립",
      description: "\"우리 교회가 믿는 것\"을 명확히 전달하여,\n흔들림 없는 신앙의 뿌리를 보여줍니다.",
      textColor: "#2C2C2C",
    },
    {
      bgColor: "#E8D5CE",
      title: "목회 철학과 정체성",
      subtitle: "목사님의 비전 공유",
      description: "목회 철학과 교회만의 고유한 색깔을 담아,\n목사님의 뜻을 성도들과 나누는 통로가 됩니다.",
      textColor: "#3D2F2F",
    },
    {
      bgColor: "#A8AFA3",
      title: "새신자 안내",
      subtitle: "새신자에게 친절한 길잡이",
      description: "교회 오시는 길, 등록 방법 등 궁금한 모든 것을\n쉽게 찾아볼 수 있도록 처음 오는 분들을 환영합니다.",
      textColor: "#1A1F1A",
    },
    {
      bgColor: "#C9A88E",
      title: "돌아올 길을 엽니다",
      subtitle: "돌아오는 성도를 위한 창구",
      description: "사정상 교회를 떠났던 분들도 부담 없이\n언제든 다시 교회의 소식을 접하고 돌아올 수 있는 마음의 문을 열어줍니다.",
      textColor: "#2C1F1A",
    },
    {
      bgColor: "#8B8D8A",
      title: "가치와 비전 전달",
      subtitle: "교회의 사명과 비전 확산",
      description: "교회가 추구하는 가치와 앞으로의 계획을 널리 알려,\n성도들의 헌신과 다음 세대의 동참을 이끌어냅니다.",
      textColor: "#1A1A1A",
    },
    {
      bgColor: "#5B6B7C",
      title: "따뜻한 교제",
      subtitle: "언제나 연결된 따뜻한 공동체",
      description: "설교, 주보, 소식 등을 실시간으로 공유하여,\n온라인 환경에서도 성도 간의 사랑과 교제를 지속하게 합니다.",
      textColor: "#E8E8E8",
    },
  ];

  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(6).fill(true));
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // 2~3번 스크롤에 한 번씩 섹션 전환 (너무 민감하지 않게)
  const SCROLL_THRESHOLD = 320; // 휠 2~3번 분량 (한 번에 ~100–120 정도)
  const COOLDOWN_MS = 500;
  const scrollAccumulator = useRef(0);
  const lastWheelTime = useRef(0);
  const cooldownUntil = useRef(0);
  const currentSectionIndex = useRef(0);

  // 현재 보이는 섹션 인덱스 갱신 (스크롤/스냅 후)
  const updateCurrentSectionIndex = () => {
    const windowHeight = window.innerHeight;
    let closestIndex = 0;
    let closestDistance = Infinity;
    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    currentSectionIndex.current = closestIndex;
  };

  const goToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    currentSectionIndex.current = index;
  };

  // Intersection Observer로 섹션 가시성
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const timer = setTimeout(() => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }
            });
          },
          { threshold: [0.3], rootMargin: "0px" }
        );
        observer.observe(ref);
        observers.push(observer);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // 휠: 2~3번 모아서 한 섹션씩 이동
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now < cooldownUntil.current) {
        e.preventDefault();
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const inView = containerRect.top < window.innerHeight * 0.5 && containerRect.bottom > window.innerHeight * 0.5;
      if (!inView) return;

      updateCurrentSectionIndex();
      const current = currentSectionIndex.current;

      // 첫 섹션에서 위로, 마지막 섹션에서 아래로는 기본 스크롤 허용
      if (current === 0 && e.deltaY < 0) return;
      if (current === 5 && e.deltaY > 0) return;

      e.preventDefault();
      const prev = scrollAccumulator.current;
      scrollAccumulator.current += e.deltaY;
      // 방향 바뀌면 누적값 리셋 (2~3번만 정확히 세기 위해)
      if ((prev >= 0 && e.deltaY < 0) || (prev <= 0 && e.deltaY > 0)) scrollAccumulator.current = e.deltaY;

      const threshold = SCROLL_THRESHOLD;
      if (scrollAccumulator.current >= threshold) {
        scrollAccumulator.current = 0;
        cooldownUntil.current = now + COOLDOWN_MS;
        if (current < 5) goToSection(current + 1);
      } else if (scrollAccumulator.current <= -threshold) {
        scrollAccumulator.current = 0;
        cooldownUntil.current = now + COOLDOWN_MS;
        if (current > 0) goToSection(current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // 터치: 스와이프 거리로 2~3번 분량 모아서 한 섹션씩
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let touchAccum = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchAccum = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const dy = touchStartY - e.touches[0].clientY;
      touchAccum += dy;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const now = Date.now();
      if (now < cooldownUntil.current) return;

      const containerRect = container.getBoundingClientRect();
      const inView = containerRect.top < window.innerHeight * 0.5 && containerRect.bottom > window.innerHeight * 0.5;
      if (!inView) return;

      updateCurrentSectionIndex();
      const current = currentSectionIndex.current;

      if (current === 0 && touchAccum > 0) return;
      if (current === 5 && touchAccum < 0) return;

      const threshold = SCROLL_THRESHOLD;
      if (touchAccum >= threshold && current < 5) {
        cooldownUntil.current = now + COOLDOWN_MS;
        goToSection(current + 1);
      } else if (touchAccum <= -threshold && current > 0) {
        cooldownUntil.current = now + COOLDOWN_MS;
        goToSection(current - 1);
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // 스크롤 멈췄을 때 현재 섹션 인덱스 동기화
  useEffect(() => {
    let tick: number;
    const onScroll = () => {
      cancelAnimationFrame(tick);
      tick = requestAnimationFrame(() => updateCurrentSectionIndex());
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(tick);
      window.removeEventListener("scroll", onScroll);
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


