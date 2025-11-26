export default function InsightSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      {/* Subtle cross-line divider above text */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="mx-4 text-gray-400 text-2xl">✟</div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Main text block - serif or elegant Korean font */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 leading-relaxed">
              물리적 교회 문은 잠겨 있습니다.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 leading-relaxed">
              그러나 온라인의 문까지 닫혀 있다면,
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 leading-relaxed">
              돌아오려는 영혼은 갈 곳을 잃습니다.
            </p>
          </div>

          {/* Call-to-action below */}
          <div className="mt-12 md:mt-16">
            <p className="text-base md:text-lg text-gray-600 italic">
              교회는 보이지 않는 영혼에게 먼저 손을 내밀어야 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


