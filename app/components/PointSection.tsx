export default function PointSection() {
  const points = [
    {
      number: "01",
      title: "빠른 제작",
      description: "평균 3-4주 내 완성",
    },
    {
      number: "02",
      title: "합리적 가격",
      description: "160만원부터 시작",
    },
    {
      number: "03",
      title: "맞춤 디자인",
      description: "브랜드 정체성 반영",
    },
    {
      number: "04",
      title: "사후 관리",
      description: "안정적인 유지보수",
    },
  ];

  return (
    <section className="py-12 md:py-20 gradient-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="highlight-yellow">POINT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-sm text-center hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-3 md:mb-4">{point.number}</div>
              <h3 className="font-bold text-base md:text-lg lg:text-xl mb-2 md:mb-3">{point.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

