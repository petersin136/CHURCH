export default function ValuePropositionSection() {
  const points = [
    "교회의 신앙고백을 보여줍니다.",
    "목회 철학과 정체성을 담습니다.",
    "새신자를 안내합니다.",
    "떠난 성도에게 길을 열어둡니다.",
    "교회의 가치와 비전을 전달합니다.",
    "온라인에서도 따뜻한 교제를 나눕니다.",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Left text block */}
          <div className="relative">
            {/* Title with gradient effect */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 md:mb-12 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                교회의 본질을 담습니다
              </span>
            </h2>

            {/* Content with numbered cards */}
            <div className="space-y-4 md:space-y-5">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  style={{
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Number badge with 3D effect */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-bold text-white text-lg md:text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                          boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {index + 1}
                      </div>
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        }}
                      ></div>
                    </div>
                    
                    {/* Text content */}
                    <p className="text-base md:text-lg lg:text-xl text-gray-800 font-medium leading-relaxed pt-1 flex-1">
                      {point}
                    </p>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 3D illustration */}
          <div className="relative">
            <div className="relative aspect-square">
              {/* 3D Card Effect */}
              <div
                className="absolute inset-0 rounded-2xl transform transition-transform duration-500 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(249, 250, 251, 0.9) 100%)',
                  boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="h-full flex flex-col items-center justify-center p-8">
                  {/* Church icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl"></div>
                <svg
                      className="relative w-32 h-32 md:w-48 md:h-48 mx-auto text-yellow-600 drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                      style={{
                        filter: 'drop-shadow(0 10px 20px rgba(245, 158, 11, 0.3))',
                      }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                        strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                  </div>
                  <p className="mt-6 text-sm md:text-base font-semibold text-gray-600">교회의 본질</p>
                </div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${15 + i * 12}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '2s',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced quotation box */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 lg:mt-20">
          <div
            className="relative bg-white/90 backdrop-blur-md border-l-4 border-yellow-500 p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            style={{
              boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.5)',
            }}
          >
            <div className="absolute top-4 left-4 text-yellow-400 opacity-20 text-6xl font-serif">"</div>
            <blockquote className="relative text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 italic leading-relaxed text-center">
              "하나님을 찾는 순간,
              <br />
              교회는 그들을 맞이할 준비가 되어 있어야 합니다."
            </blockquote>
            <div className="absolute bottom-4 right-4 text-yellow-400 opacity-20 text-6xl font-serif">"</div>
          </div>
        </div>
      </div>
    </section>
  );
}


