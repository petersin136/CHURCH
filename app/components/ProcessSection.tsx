export default function ProcessSection() {
  const processes = [
    { number: "1", title: "상담문의", description: "홈페이지, 카카오톡, 인스타 등을 통해 문의를 남겨주시면 상담을 진행합니다." },
    { number: "2", title: "견적 안내 및 결제", description: "상담 내용을 바탕으로 홈페이지 제작 견적을 산출하고, 계약서 작성 후 대금을 결제 받습니다." },
    { number: "3", title: "확정 후 기획", description: "계약 확정 후 고객님의 필요 내용을 파악하고 일정 및 기획을 진행합니다." },
    { number: "4", title: "시안 전달 및 수정", description: "PC 버전 전반 시안을 제공하고 고객님의 피드백을 통해 수정작업에 들어갑니다." },
    { number: "5", title: "모바일 작업 및 수정", description: "PC 버전 수정작업이 완료되면 모바일 홈페이지 작업을 진행합니다." },
    { number: "6", title: "최종 시안 전달", description: "완성된 최종 홈페이지 작업물을 넘겨드리고 관리가이드를 제공합니다." },
  ];

  return (
    <section id="process" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="highlight-yellow">PROCESS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {processes.map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-blue-200 flex items-center justify-center text-2xl md:text-3xl font-bold mx-auto mb-4 md:mb-6">
                {process.number}
              </div>
              <h3 className="font-bold mb-2 md:mb-4 text-base md:text-lg">{process.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 px-2">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

