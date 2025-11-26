export default function CredibilitySection() {
  const testimonials = [
    {
      quote: "홈페이지를 통해 새신자들이 예배 시간과 교회를 쉽게 찾을 수 있게 되었습니다. 온라인 헌금 기능도 매우 편리합니다.",
      author: "박○○ 목사",
      church: "○○교회",
      avatar: "/api/placeholder/80/80",
    },
    {
      quote: "가나안 성도들이 검색을 통해 다시 찾아오는 사례가 늘어났습니다. 목회 사역에 큰 도움이 되고 있습니다.",
      author: "김○○ 목사",
      church: "○○교회",
      avatar: "/api/placeholder/80/80",
    },
    {
      quote: "관리도 쉽고, 젊은 세대와의 소통 창구가 마련되어 만족합니다. 교회의 정체성을 온라인에서도 잘 보여줄 수 있게 되었습니다.",
      author: "이○○ 목사",
      church: "○○교회",
      avatar: "/api/placeholder/80/80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              목회자들이 먼저 경험했습니다
            </h2>
          </div>

          {/* 3 testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8 text-center"
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-gray-300 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed italic" style={{ fontFamily: 'Georgia, serif' }}>
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-300 mb-3 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl text-gray-500">👤</span>
                  </div>
                  <p className="font-bold text-gray-900 text-base md:text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    {testimonial.church}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

