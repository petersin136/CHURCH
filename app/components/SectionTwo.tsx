"use client";

import Image from "next/image";

export default function SectionTwo() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 왼쪽: 노란/오렌지 카드 (그 순간이 생명입니다) - 2행 차지 */}
          <div className="md:row-span-2 bg-[#F5D547] md:min-h-[520px] rounded-2xl overflow-hidden flex flex-col">
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
                그 순간이 생명입니다
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed flex-1">
                유튜브에서 설교를 들어보지만, 한두 편만으로는 이 교회가 나와 결이 같은 곳인지 알 수 없습니다. 결국 홈페이지에 들어옵니다. 그 순간이 생명입니다.
              </p>
            </div>
            <div className="relative w-full h-48 md:h-56 lg:h-64 shrink-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                alt="목회자 또는 성도"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* 오른쪽 위: 파란 카드 (트렌디한 원페이지 디자인) */}
          <div className="bg-[#2563EB] rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[250px]">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">
                트렌디한 원페이지 디자인
              </h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed">
                쇼츠와 릴스에 익숙한 시대, 스크롤 한 번에 &quot;이 교회에서 예배하고 싶다&quot;는 마음이 들도록 설계합니다.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 text-white">
              <span className="w-10 h-10 rounded-full border-2 border-white flex-shrink-0" aria-hidden />
              <span className="text-2xl font-light">+</span>
              <span className="w-10 h-10 border-2 border-white rounded flex-shrink-0 font-serif text-lg flex items-center justify-center" aria-hidden>n</span>
            </div>
          </div>

          {/* 오른쪽 아래: 흰 카드 (합리적인 가격, 최상의 퀄리티) */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden p-6 md:p-8 min-h-[220px] md:min-h-[250px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3">
                합리적인 가격, 최상의 퀄리티
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                기존 300만 원 이상의 퀄리티를, 모든 교회가 감당할 수 있는 가격으로 드립니다. 교회의 첫인상이, 누군가의 첫 예배가 됩니다.
              </p>
            </div>
            <a
              href="#price"
              className="inline-flex items-center gap-2 mt-6 text-gray-900 font-medium hover:underline"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" aria-hidden />
              교회 맞춤 홈페이지: ANATA에서 시작하세요
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
