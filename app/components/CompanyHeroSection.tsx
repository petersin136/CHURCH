"use client";

import { useState } from "react";

export default function CompanyHeroSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="min-h-[75vh] flex items-center justify-center px-6 md:px-12 lg:px-20 py-16 bg-white relative pb-24">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Section - Hero Text */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 text-black">
                <div className="mb-4">maranatha<br />studio</div>
                <div className="rotating-text text-indigo-600" style={{ display: 'block' }}>
                  <span style={{ display: 'block', whiteSpace: 'pre-line' }}>교회 홈페이지</span>
                  <span style={{ display: 'block', whiteSpace: 'pre-line' }}>제작 전문업체</span>
                  <span style={{ display: 'block', whiteSpace: 'pre-line' }}>홈페이지는{'\n'}필수!</span>
                </div>
              </h1>
            </div>

            {/* Right Section - Services & Circular Text */}
            <div className="relative">
              {/* Circular Rotating Text */}
              <div className="absolute -top-20 right-0 hidden lg:block">
                <div className="circular-text">
                  <svg viewBox="0 0 200 200">
                    <defs>
                      <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"/>
                    </defs>
                    <text>
                      <textPath href="#circlePath">
                        CREATIVE • DESIGN • DEVELOP • CREATIVE • DESIGN • DEVELOP •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-900 font-semibold">
                <p>코로나 이후...온라인 예배로 전환하며</p>
                <p>교회 출석을 멈춘 성도가 200 만명을 넘었습니다</p>
                <p>이혼, 실직, 질병, 자녀 문제 등 자신의 능력 밖에</p>
                <p>인생의 위기가 찾아왔을 때 하나님을 기억합니다</p>
                <p>그들은 다시 교회를 찾습니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker at Bottom - Only for this section */}
        <div 
          className="ticker-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`ticker ${isPaused ? 'ticker-paused' : ''}`}>
            <span>❤️ 하나님께 영광 돌리는 교회 홈페이지 ❤️</span>
            <span>❤️ 성도들과 소통하는 디지털 공간 ❤️</span>
            <span>❤️ 새신자 환영부터 온라인 사역까지 ❤️</span>
            <span>❤️ 합리적인 가격, 전문적인 디자인 ❤️</span>
            <span>❤️ 교회의 비전을 담은 웹사이트 ❤️</span>
            <span>❤️ Contact: maranatha.studio ❤️</span>
            <span>❤️ 하나님께 영광 돌리는 교회 홈페이지 ❤️</span>
            <span>❤️ 성도들과 소통하는 디지털 공간 ❤️</span>
          </div>
        </div>
      </section>
  );
}

