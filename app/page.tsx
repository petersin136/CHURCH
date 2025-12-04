"use client";

import Navigation from "./components/Navigation";
import FixedMenu from "./components/FixedMenu";
import RotatingLogo from "./components/RotatingLogo";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import CompanyHeroSection from "./components/CompanyHeroSection";
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
      <CompanyHeroSection />
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
