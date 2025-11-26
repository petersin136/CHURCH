export default function ProblemSection() {
  const problems = [
    {
      icon: "🔍",
      title: "새신자들이 우리 교회를 잘 모릅니다.",
      description: "'예배 시간, 목회 철학, 프로그램'을 알 수 없다는 질문이 반복되고 있습니다.",
    },
    {
      icon: "📱",
      title: "젊은 세대와 소통이 어렵습니다.",
      description: "20~30대는 네이버에서 먼저 검색합니다. 그런데 우리 교회는 검색되지 않습니다.",
    },
    {
      icon: "🚪",
      title: "가나안 성도들이 돌아올 길이 없습니다.",
      description: "떠난 성도들이 돌아오고 싶어도 교회를 찾을 방법이 없습니다.",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: '#0E0E0E' }}>
      {/* Soft spotlight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            왜 지금, 교회 홈페이지가 필요할까요?
          </h2>
          
          {/* Sub copy */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16">
            변화한 시대, 그러나 여전히 닫혀있는 교회의 문
          </p>

          {/* Problem points - 3 columns on desktop, vertical on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {problems.map((problem, index) => (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-4 md:mb-6 opacity-90">
                  {problem.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft fade bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-5"></div>
    </section>
  );
}


