export default function ValuePropositionSection() {
  const bulletPoints = [
    "교회의 신앙고백을 보여줍니다.",
    "목회 철학과 정체성을 담습니다.",
    "새신자를 안내합니다.",
    "떠난 성도에게 길을 열어둡니다.",
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F6F4EF' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Left text block */}
          <div>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-10 leading-tight">
              단순 정보 전달이 아닌,
              <br />
              영혼을 품는 교회 홈페이지
            </h2>

            {/* Content bullet points */}
            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-3 text-xl">•</span>
                  <span className="text-lg md:text-xl text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right subtle church-themed illustration or soft blurred church silhouette */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg opacity-60 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg
                  className="w-32 h-32 md:w-48 md:h-48 mx-auto opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <p className="mt-4 text-sm md:text-base">교회 일러스트</p>
              </div>
            </div>
          </div>
        </div>

        {/* Aesthetic quotation box */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
          <div className="bg-white/80 backdrop-blur-sm border-l-4 border-yellow-600 p-6 md:p-8 rounded-lg shadow-lg">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 italic leading-relaxed text-center">
              "하나님을 찾는 순간,
              <br />
              교회는 그들을 맞이할 준비가 되어 있어야 합니다."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}


