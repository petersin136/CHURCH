"use client";

import { useEffect, useRef } from "react";

export default function ValuePropositionSection() {
  const marqueeWords = Array.from({ length: 30 }, (_, index) => {
    const isChurch = index % 2 === 0;
    return {
      label: isChurch ? "church" : "Homepage",
      colorClass: isChurch ? "color-black" : "color-red",
    };
  });

  const scrollSections = [
    {
      bgColor: "#F5F1E8",
      title: "교회의 신앙고백",
      subtitle: "교회의 신앙 정체성 확립",
      description:
        '"우리 교회가 믿는 것"을 명확히 전달하여,\n흔들림 없는 신앙의 뿌리를 보여줍니다.',
      textColor: "#2C2C2C",
    },
    {
      bgColor: "#E8D5CE",
      title: "목회 철학과 정체성",
      subtitle: "목사님의 비전 공유",
      description:
        "목회 철학과 교회만의 고유한 색깔을 담아,\n목사님의 뜻을 성도들과 나누는 통로가 됩니다.",
      textColor: "#3D2F2F",
    },
    {
      bgColor: "#A8AFA3",
      title: "새신자 안내",
      subtitle: "새신자에게 친절한 길잡이",
      description:
        "교회 오시는 길, 등록 방법 등 궁금한 모든 것을\n쉽게 찾아볼 수 있도록 처음 오는 분들을 환영합니다.",
      textColor: "#1A1F1A",
    },
    {
      bgColor: "#C9A88E",
      title: "돌아올 길을 엽니다",
      subtitle: "돌아오는 성도를 위한 창구",
      description:
        "사정상 교회를 떠났던 분들도 부담 없이\n언제든 다시 교회의 소식을 접하고 돌아올 수 있는 마음의 문을 열어줍니다.",
      textColor: "#2C1F1A",
    },
    {
      bgColor: "#8B8D8A",
      title: "가치와 비전 전달",
      subtitle: "교회의 사명과 비전 확산",
      description:
        "교회가 추구하는 가치와 앞으로의 계획을 널리 알려,\n성도들의 헌신과 다음 세대의 동참을 이끌어냅니다.",
      textColor: "#1A1A1A",
    },
    {
      bgColor: "#5B6B7C",
      title: "따뜻한 교제",
      subtitle: "언제나 연결된 따뜻한 공동체",
      description:
        "설교, 주보, 소식 등을 실시간으로 공유하여,\n온라인 환경에서도 성도 간의 사랑과 교제를 지속하게 합니다.",
      textColor: "#E8E8E8",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const totalCards = scrollSections.length;

    function update() {
      if (!container || !track) return;

      const rect = container.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = sectionHeight - windowHeight;

      if (scrollableDistance <= 0) return;

      const scrollProgress = Math.max(
        0,
        Math.min(1, -sectionTop / scrollableDistance)
      );
      const translateX = -scrollProgress * (totalCards - 1) * 100;
      track.style.transform = `translate3d(${translateX}vw, 0, 0)`;
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <section
        className="pt-0 pb-0 relative overflow-hidden"
        style={{ backgroundColor: "#F6F4EF" }}
      >
        <div className="marquee-shell marquee-top" aria-hidden>
          <div className="marquee-offset" aria-hidden>
            <div className="marquee-row">
              {marqueeWords.map((item, index) => (
                <span
                  key={`main-${index}`}
                  className={item.colorClass}
                >{`${item.label}\u00A0`}</span>
              ))}
            </div>
            <div className="marquee-row" aria-hidden>
              {marqueeWords.map((item, index) => (
                <span
                  key={`dup-${index}`}
                  className={item.colorClass}
                >{`${item.label}\u00A0`}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 가로 스크롤 섹션 */}
      <div className="horizontal-scroll-container" ref={containerRef}>
        <div className="horizontal-scroll-wrapper">
          <div className="horizontal-track" ref={trackRef}>
            {scrollSections.map((section, index) => (
              <div
                key={index}
                className="service-card"
                style={{ background: section.bgColor }}
              >
                <div
                  className="card-text"
                  style={{ color: section.textColor }}
                >
                  <div className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2>{section.title}</h2>
                  <p className="service-subtitle">{section.subtitle}</p>
                  <p className="service-description">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
