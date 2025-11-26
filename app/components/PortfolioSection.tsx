export default function PortfolioSection() {
  const portfolios = [
    { title: "바우먼 | 서울문화센터" },
    { title: "노 디자인 | 조경업체" },
    { title: "아로게 오피스 | 건축사사무소" },
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            <span className="highlight-yellow">portfolio</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600">기업의 정체성을 담은 웹사이트 제작사례</p>
          
          <div className="mt-4 md:mt-6 flex flex-col space-y-2">
            <a href="#" className="text-sm md:text-base text-gray-600 hover:text-black flex items-center">
              <span className="mr-2">›</span> 포트폴리오 전체보기
            </a>
            <a href="#" className="text-sm md:text-base text-gray-600 hover:text-black flex items-center">
              <span className="mr-2">›</span> 그 외 많은 포트폴리오
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {portfolios.map((portfolio, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-md border border-white/30 rounded-lg overflow-hidden hover-scale">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <p className="text-gray-400">포트폴리오 이미지</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{portfolio.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

