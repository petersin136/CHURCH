"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    id: "01",
    title: "교회 소개 페이지",
    description: "비전, 역사, 담임목사 인사말, 오시는 길을 한눈에 보여줍니다",
    color: "#94d327",
    textOnColor: "#000",
    position: "top",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M26 6L10 18V44H20V32H32V44H42V18L26 6Z" stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round" />
        <path d="M26 6V14" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <line x1="23" y1="10" x2="29" y2="10" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "설교 아카이브",
    description: "영상·음성·텍스트 설교를 날짜별, 시리즈별로 정리합니다",
    color: "#00c197",
    textOnColor: "#000",
    position: "bottom",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="8" y="8" width="36" height="36" rx="4" stroke="white" strokeWidth="3" fill="none" />
        <polygon points="22,18 22,34 36,26" fill="white" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "부서별 소식판",
    description: "교회학교, 청년부, 장년부 등 각 부서 공지를 독립 관리합니다",
    color: "#00a3c4",
    textOnColor: "#000",
    position: "top",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M8 12L26 6L44 12V36L26 42L8 36V12Z" stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round" />
        <line x1="26" y1="6" x2="26" y2="42" stroke="white" strokeWidth="2.5" />
        <line x1="8" y1="12" x2="26" y2="18" stroke="white" strokeWidth="2" />
        <line x1="44" y1="12" x2="26" y2="18" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "새가족 안내 시스템",
    description: "등록 폼, 환영 안내, 양육반 연결까지 온라인으로 진행합니다",
    color: "#007bff",
    textOnColor: "#fff",
    position: "bottom",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="20" cy="16" r="7" stroke="white" strokeWidth="3" fill="none" />
        <path d="M8 44C8 34 14 28 20 28C26 28 32 34 32 44" stroke="white" strokeWidth="3" fill="none" />
        <line x1="38" y1="18" x2="38" y2="32" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <line x1="31" y1="25" x2="45" y2="25" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "온라인 헌금 / 기도 요청",
    description: "십일조·감사헌금과 기도 요청을 안전하게 접수할 수 있습니다",
    color: "#175dc5",
    textOnColor: "#fff",
    position: "top",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="16" stroke="white" strokeWidth="3" fill="none" />
        <text x="26" y="32" textAnchor="middle" fontSize="22" fontWeight="700" fill="white" fontFamily="sans-serif">₩</text>
      </svg>
    ),
  },
  {
    id: "06",
    title: "모바일 완전 최적화",
    description: "스마트폰·태블릿 어디서든 깨짐 없이 완벽하게 표시됩니다",
    color: "#18418d",
    textOnColor: "#fff",
    position: "bottom",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="14" y="6" width="24" height="40" rx="4" stroke="white" strokeWidth="3" fill="none" />
        <line x1="22" y1="40" x2="30" y2="40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="18" y="12" width="16" height="22" rx="1" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ft-section">
      <div className="ft-inner">
        <h2 className="ft-title">교회에 꼭 필요한 기능만 담았습니다</h2>
        <p className="ft-subtitle">복잡한 건 빼고, 교회 운영에 실제로 쓰이는 핵심 6가지</p>

        <div className="ft-timeline" ref={ref}>
          <div className="ft-bar" aria-hidden="true" />

          <div className={`ft-columns${visible ? " ft-columns--visible" : ""}`}>
            {features.map((f, i) => (
              <div
                key={f.id}
                className={`ft-col ft-col--${f.position}`}
                style={{ "--ft-i": i } as React.CSSProperties}
              >
                {/* 위 영역 */}
                <div className="ft-area ft-area--top">
                  {f.position === "top" && (
                    <>
                      <div className="ft-label" style={{ background: f.color, color: f.textOnColor }}>
                        Feature {f.id}
                      </div>
                      <div className="ft-card">
                        <p className="ft-desc">{f.description}</p>
                      </div>
                      <h3 className="ft-name">{f.title}</h3>
                    </>
                  )}
                  {f.position === "bottom" && (
                    <h3 className="ft-name ft-name--solo">{f.title}</h3>
                  )}
                </div>

                {/* 육각형 */}
                <div className="ft-hex" style={{ background: f.color }}>
                  {f.icon}
                </div>

                {/* 아래 영역 */}
                <div className="ft-area ft-area--bottom">
                  {f.position === "bottom" && (
                    <>
                      <div className="ft-card">
                        <p className="ft-desc">{f.description}</p>
                      </div>
                      <div className="ft-label" style={{ background: f.color, color: f.textOnColor }}>
                        Feature {f.id}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ft-gradient-bar" aria-hidden="true" />
      </div>
    </section>
  );
}
