"use client";

import Navigation from "./components/Navigation";
import FixedMenu from "./components/FixedMenu";
import RotatingLogo from "./components/RotatingLogo";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import InsightSection from "./components/InsightSection";
import ValuePropositionSection from "./components/ValuePropositionSection";
import ProcessSection from "./components/ProcessSection";
import FeaturesSection from "./components/FeaturesSection";
import FeatureSliderSection from "./components/FeatureSliderSection";
import FAQSection from "./components/FAQSection";
import PriceSection from "./components/PriceSection";
import CredibilitySection from "./components/CredibilitySection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WritingText from "./components/WritingText";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // 섹션이 20% 보일 때 트리거
      }
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
    <main>
      <Navigation />
      <FixedMenu />
      <RotatingLogo />
      <HeroSection />
      <ProblemSection />
      <section
        ref={sectionRef}
        className="hidden md:flex w-full bg-cover bg-center bg-no-repeat flex-row"
        style={{
          backgroundImage: "url('https://hqpnwiaifysfpbpwixim.supabase.co/storage/v1/object/public/media/paper.w.b.png')",
          minHeight: "66vh",
        }}
      >
        {/* 왼쪽 텍스트 창 */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="max-w-2xl w-full">
            <p
              className="text-black text-[1.1rem] md:text-[1.44rem] lg:text-[1.68rem] xl:text-[2.1rem]"
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.8px",
                lineHeight: "2.4",
                color: "#1a1a1a",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <span style={{ fontSize: "1.6em", lineHeight: "1.2" }}>목사님</span> 코로나 이후...온라인 예배로 전환하며<br />
              교회 출석을 멈춘 성도가 200 만명을 넘었습니다<br />
              이혼, 실직, 질병, 자녀 문제 등 자신의 능력 밖에<br />
              인생의 위기가 찾아왔을 때 하나님을 기억합니다<br />
              그들은 다시 교회를 찾습니다.
            </p>
          </div>
        </div>
        {/* 오른쪽 텍스트 창 */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="max-w-2xl w-full">
            <div
              className="text-black text-[1.2rem] md:text-[1.54rem] lg:text-[1.848rem] xl:text-[2.31rem]"
              style={{
                fontFamily: "'Caveat', 'Dancing Script', 'Nanum Pen Script', cursive",
                fontWeight: 500,
                letterSpacing: "2.5px",
                lineHeight: "1.3",
                color: "#1a1a1a",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <WritingText text="청년들은 이렇게 교회를 찾습니다" fontSize="1.2em" delay={0} isVisible={isSectionVisible} /><br />
              <WritingText text="주일 아침, 처음 교회를 찾아보려는 20대 청년이 있습니다." delay={900} isVisible={isSectionVisible} /><br />
              <WritingText text='그는 네이버에 " 우리 동네 교회 "를 검색합니다.' delay={2400} isVisible={isSectionVisible} /><br />
              <WritingText text="예배 시간을 확인하고, 네이버 지도에서 위치를 봅니다." delay={3900} isVisible={isSectionVisible} /><br />
              <WritingText text="교회 분위기가 궁금해 사진도 찾아봅니다." delay={5400} isVisible={isSectionVisible} /><br />
              <WritingText text="하지만... 정보가 없습니다." delay={6700} isVisible={isSectionVisible} /><br />
              <WritingText text="5년 전 블로그 글 몇 개가 전부입니다." delay={7800} isVisible={isSectionVisible} /><br />
              <WritingText text='" 이 교회 아직 하시나 ? "' delay={9100} isVisible={isSectionVisible} /><br />
              <WritingText text='" 예배가 몇 시지 ? "' delay={10200} isVisible={isSectionVisible} /><br />
              <WritingText text='" 젊은 사람도 다니나 ? "' delay={11100} isVisible={isSectionVisible} /><br />
              <span style={{ color: "#d32f2f", fontFamily: "'Caveat', 'Dancing Script', 'Nanum Pen Script', cursive" }}>
                <WritingText text="결국 검색을 포기합니다." fontSize="1.2em" delay={12100} isVisible={isSectionVisible} />
              </span>
            </div>
          </div>
        </div>
      </section>
      <InsightSection />
      <ValuePropositionSection />
      <ProcessSection />
      <FeaturesSection />
      <FeatureSliderSection />
      <FAQSection />
      <PriceSection />
      <CredibilitySection />
      <CTASection />
      <Footer />
    </main>
  );
}
