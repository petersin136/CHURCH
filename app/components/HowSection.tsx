export default function HowSection() {
  const features = [
    {
      icon: "💼",
      title: "포트폴리오 관리",
      description: "작품을 카테고리별로 정리하고 관리할 수 있습니다.",
    },
    {
      icon: "📅",
      title: "예약 시스템",
      description: "고객이 직접 예약하고 일정을 확인할 수 있습니다.",
    },
    {
      icon: "💬",
      title: "상담 신청",
      description: "간편한 상담 신청 양식으로 고객과 연결됩니다.",
    },
    {
      icon: "⭐",
      title: "리뷰 관리",
      description: "고객 후기를 자동으로 수집하고 관리합니다.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            <span className="highlight-blue">HOW?</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600">어떻게 해결하나요?</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 md:p-6 rounded-lg bg-gray-50 hover-scale">
              <div className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">{feature.icon}</div>
              <h3 className="font-bold mb-2 md:mb-3 text-sm md:text-base">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

