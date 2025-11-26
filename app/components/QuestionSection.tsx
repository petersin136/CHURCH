export default function QuestionSection() {
  const questions = [
    {
      emoji: "😕",
      text: "창업물을 보면 좋을 때 인스타 말고\n좀 더 정인된 포트폴리오 공간 없을까요?",
    },
    {
      emoji: "😔",
      text: "고객에게 우리만의 철학, 분위기를 제대로\n보여주고 싶어요. sns로는 한계가 있어요.",
    },
    {
      emoji: "🤔",
      text: "자동 예약, 진행상황 공유, 상담신청, 피드백,\n리뷰수집 등의 관리를 자동화 할 순 없을까요?",
    },
    {
      emoji: "😳",
      text: "예약부터 남들까지. 한번에 되는건 없을까요?\n너무 분산되어 있어요.",
    },
  ];

  return (
    <section className="py-12 md:py-20 gradient-bg">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-8 opacity-30">?</div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-12 px-4">
            혹시 이런 생각,
            <br />
            해보신 적 있으신가요?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {questions.map((question, index) => (
              <div key={index} className="bg-blue-100 p-4 md:p-6 rounded-xl md:rounded-2xl text-left">
                <span className="text-2xl md:text-3xl mb-2 md:mb-3 block">{question.emoji}</span>
                <p className="text-xs md:text-sm whitespace-pre-line leading-relaxed">{question.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

