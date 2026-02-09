"use client";

import { useEffect, useRef, useState } from "react";

const processes = [
  {
    number: "01",
    title: "상담문의",
    highlight: "24시간 내 응답",
    description:
      "홈페이지, 카카오톡, 인스타 등을 통해 문의를 남겨주시면 상담을 진행합니다.",
    colorClass: "process-c1",
    pull: "-28px",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2a2a2a"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 12a7 7 0 0 1-7 7H7l-3 2v-4a7 7 0 1 1 16-5Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "견적 안내 및 결제",
    highlight: "명확한 견적 제공",
    description:
      "상담 내용을 바탕으로 홈페이지 제작 견적을 산출하고, 계약서 작성 후 대금을 결제 받습니다.",
    colorClass: "process-c2",
    pull: "-16px",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2a2a2a"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 3h10v18l-2-1-2 1-2-1-2 1-2-1-2 1V3Z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "확정 후 기획",
    highlight: "맞춤형 기획안",
    description:
      "계약 확정 후 고객님의 필요 내용을 파악하고 일정 및 기획을 진행합니다.",
    colorClass: "process-c3",
    pull: "-6px",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2a2a2a"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 7h8M8 11h8M8 15h5" />
        <path d="M6 3h12v18H6z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "시안 전달 및 수정",
    highlight: "실시간 피드백",
    description:
      "PC 버전 전반 시안을 제공하고 고객님의 피드백을 통해 수정작업에 들어갑니다.",
    colorClass: "process-c4",
    pull: "6px",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "모바일 작업 및 수정",
    highlight: "완벽한 반응형",
    description:
      "PC 버전 수정작업이 완료되면 모바일 홈페이지 작업을 진행합니다.",
    colorClass: "process-c5",
    pull: "16px",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "최종 시안 전달",
    highlight: "완성 및 관리 가이드",
    description:
      "완성된 최종 홈페이지 작업물을 넘겨드리고 관리가이드를 제공합니다.",
    colorClass: "process-c6",
    pull: "28px",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="process-slanted-root"
      aria-label="작업 프로세스"
    >
      <div className="process-wrap">
        <div className="process-title-wrap">
          <h2>교회 홈페이지 제작 과정</h2>
          <p>상담부터 납품까지, 6단계로 투명하게 진행합니다.</p>
        </div>
        <div
          ref={stepsRef}
          className={`process-steps${visible ? " process-steps-visible" : ""}`}
          role="list"
          aria-label="작업 프로세스 6단계"
        >
          {processes.map((step, index) => (
            <article
              key={step.number}
              className="process-step"
              role="listitem"
              style={
                {
                  "--process-i": index + 1,
                  "--process-pull": step.pull,
                } as React.CSSProperties
              }
            >
              <div className={`process-panel ${step.colorClass}`}>
                <div className="process-badge">{step.number}</div>
                <div className="process-content">
                  <div className="process-icon" aria-hidden="true">
                    {step.icon}
                  </div>
                  <div className="process-chip">{step.highlight}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
