"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "교회 홈페이지가 정말 필요한가요?",
      answer: "네, 필요합니다. 오늘날 사람들은 온라인에서 먼저 정보를 찾습니다. 특히 젊은 세대는 네이버나 구글에서 교회를 검색합니다. 교회 홈페이지가 없다는 것은 교회의 문을 닫아두는 것과 같습니다. 새신자들과 가나안 성도들이 돌아올 길을 열어두는 것이 현대 목회에서 필수적입니다.",
    },
    {
      question: "관리가 어렵지 않나요?",
      answer: "직관적인 관리자 페이지를 제공하여 누구나 쉽게 사용할 수 있도록 설계되었습니다. 초기 교육을 통해 간단한 업데이트 방법을 안내해드리며, 복잡한 작업이 필요할 때는 언제든지 지원해드립니다.",
    },
    {
      question: "비용 대비 가치가 있을까요?",
      answer: "한 번의 투자로 지속적으로 교회를 알릴 수 있는 채널을 확보하게 됩니다. 새신자 유입, 가나안 성도 복귀, 온라인 헌금 등을 통해 장기적으로 교회 성장에 기여할 수 있습니다. 월 관리비는 최소화되어 있어 경제적입니다.",
    },
    {
      question: "설교 영상을 올리면 오히려 예배 참석이 줄지 않나요?",
      answer: "오히려 반대입니다. 설교 영상을 통해 교회에 관심을 가지게 된 사람들이 실제로 교회를 방문하는 사례가 많습니다. 또한 불가피하게 예배에 참석하지 못한 성도들이 말씀을 듣고 다음 주에는 참석하게 되는 긍정적 효과가 있습니다.",
    },
    {
      question: "작은 교회도 필요할까요?",
      answer: "작은 교회일수록 더 필요합니다. 대형 교회는 이미 인지도가 높지만, 작은 교회는 홍보 채널이 제한적입니다. 온라인 홈페이지를 통해 더 많은 사람들에게 교회를 알릴 수 있는 기회를 얻을 수 있습니다.",
    },
    {
      question: "블로그나 밴드로 충분하지 않나요?",
      answer: "블로그나 밴드는 일시적 소통에는 유용하지만, 체계적인 정보 제공과 검색 엔진 최적화에는 한계가 있습니다. 홈페이지는 교회의 정체성과 신앙고백을 깊이 있게 보여줄 수 있으며, 영구적인 온라인 공간을 제공합니다.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              자주 묻는 질문
            </h2>
          </div>

          {/* Accordion style clean FAQ layout */}
          <div className="bg-gray-50 rounded-lg shadow-sm">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${index !== faqs.length - 1 ? 'border-b border-gray-200' : ''} transition-all duration-300`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 md:p-8 text-left flex justify-between items-start gap-4 hover:bg-gray-100 transition-colors"
                >
                  <p className="font-medium text-lg md:text-xl text-gray-900 pr-2">
                    {faq.question}
                  </p>
                  <span className="text-2xl md:text-3xl text-gray-500 flex-shrink-0 transition-transform duration-300">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
