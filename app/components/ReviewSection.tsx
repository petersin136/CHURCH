export default function ReviewSection() {
  const reviews = [
    {
      company: "(주) ********",
      content: "빠른 응답력에 업무와 관련한 내용까지 완벽합니다. 전문가 효과와 업무 직감을 전달합니다.",
    },
    {
      company: "(주)******",
      content: "디자인도 디테일하지만, 상업성과 실무 말씀이 최고인 담당자와 그 품질이 너무 측정됩니다.",
    },
    {
      company: "스*******",
      content: "포트폴리오와 빠른 평의 마나 포트폴리오소 훌륭합니다. 디자인을 화면까지 민첩하게 작업하여주셨구요.",
    },
    {
      company: "스****** ********",
      content: "스튜디오 예방 및 보건, 전적인 농담은 대신 정부수단의 독정업에 눈랄스럽고 고급적 전략원자입니다.",
    },
  ];

  return (
    <section id="review" className="py-12 md:py-20 gradient-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            <span className="highlight-yellow">review</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600">우리와 함께한 고객님의 실제 이야기</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover-scale">
              <div className="flex mb-3">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{review.company}</p>
              <p className="text-sm text-gray-700">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

