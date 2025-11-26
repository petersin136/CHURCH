export default function PriceSection() {
  const plans = [
    {
      name: "Basic",
      description: "소규모 교회",
      price: "₩ 1,600,000",
      features: [
        "페이지 : 메인 1P (섹션 최대 10개)",
        "제작기간 : 3주 이내",
        "수정 횟수 : 2회",
        "SEO최적화 + SSL + 도메인 연결",
        "기본 기능 제공",
      ],
      isStandard: false,
    },
    {
      name: "Standard",
      description: "대부분 추천",
      price: "₩ 2,300,000",
      features: [
        "페이지 : 메인 1P + 서브 8P",
        "제작기간 : 4주",
        "수정 횟수 : 2회",
        "SEO최적화 + SSL + 도메인 연결",
        "설교 아카이브 포함",
        "온라인 헌금 시스템",
      ],
      isStandard: true,
    },
    {
      name: "Advanced",
      description: "대형 교회 / 다국어 / 맞춤형",
      price: "맞춤 견적",
      features: [
        "페이지 수 무제한",
        "제작기간 : 4주~5주",
        "수정 횟수 : 무제한",
        "SEO최적화 + SSL + 도메인 연결",
        "다국어 지원",
        "맞춤 기능 개발",
        "우선 관리 지원",
      ],
      isStandard: false,
    },
  ];

  return (
    <section id="price" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            교회 규모에 관계없이, 공평한 가격
          </h2>
        </div>

        {/* 3-tier layout but highlight Standard tier */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                plan.isStandard
                  ? 'border-4 border-yellow-500 scale-105 md:scale-110 z-10'
                  : 'border-2 border-gray-200'
              }`}
            >
              {plan.isStandard && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  추천
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 text-sm md:text-base text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-yellow-500 mr-2 text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 ${
                  plan.isStandard
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {plan.price === "맞춤 견적" ? "맞춤 견적 상담 요청" : "선택하기"}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button below */}
        <div className="text-center mt-12 md:mt-16">
          <button className="bg-gray-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-lg text-lg md:text-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
            맞춤 견적 상담 요청
          </button>
        </div>
      </div>
    </section>
  );
}
