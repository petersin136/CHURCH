export default function ServiceSection() {
  return (
    <section id="service" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-40">👤</div>
            <p className="text-xs md:text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              인스타에 올라도 뭔가 부족한 느낌.{'\n'}우리만의 감도, 의도, 철학 등을{'\n'}제대로 보여줄 공간이 필요하단 생각.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-40">☁️</div>
            <p className="text-xs md:text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              예약, 상담, 진행 공유까지 다 따로에,{'\n'}담당하라 작업하라...{'\n'}하루가 24시간인데 날도 부지기수
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 opacity-40">⚙️</div>
            <p className="text-xs md:text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              포트폴리오는 예쁘게 정리되면 좋겠고,{'\n'}자동화 시스템이 있으면 좋겠는데{'\n'}막상 시작하려니 어떻게 해야할지 모르겠고
            </p>
          </div>
        </div>

        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 leading-tight">
            한번에 해결할 수 있는 올인원 홈페이지를 제작합니다.
          </h2>
        </div>
      </div>
    </section>
  );
}

