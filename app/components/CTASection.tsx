export default function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Soft gradient with church photo blur background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main text centered */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            2백만 가나안 성도가 돌아올 길을
            <br />
            지금, 열어두십시오.
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 md:mb-12 leading-relaxed">
            교회의 문을 온라인에서 먼저 여는 것,
            <br />
            그것이 다음 세대를 향한 목회입니다.
          </p>

          {/* Button (large) */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 md:px-16 py-5 md:py-6 rounded-full text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105">
            무료 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  );
}
