import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* 배경 비디오 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://hqpnwiaifysfpbpwixim.supabase.co/storage/v1/object/public/media/video.mp4.mp4"
          type="video/mp4"
        />
      </video>

      {/* 오버레이 (어두운 그라데이션) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-700/70 z-[1]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white md:ml-[2cm]">
            <p className="mb-2 md:mb-2 font-bold hero-subtitle" style={{ color: '#FFEA00', textShadow: '0 0 10px rgba(255, 234, 0, 0.8)' }}>
              교회 홈페이지 전문 제작
            </p>
            <h1 className="font-bold mb-2 md:mb-3 leading-tight hero-title">
              200만 가나안 성도가
            </h1>
            <p className="mb-1 hero-text-1">
              언제든 돌아올 수 있도록
            </p>
            <p className="mb-1 font-bold hero-text-2">
              교회의 문을
            </p>
            <p className="hero-text-1">온라인에서 활짝 열어두세요</p>
          </div>

          <div className="relative w-full flex items-center justify-center">
            {/* 이미지 */}
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] flex items-center justify-center">
              <Image
                src="https://hqpnwiaifysfpbpwixim.supabase.co/storage/v1/object/public/media/img1.png"
                alt="maranatha studio"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="fixed md:absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-blue-200 text-black px-4 py-2 md:px-6 md:py-3 rounded-full hover-scale z-30 text-sm md:text-base font-bold"
      >
        무료 상담 신청하기
      </a>
    </section>
  );
}

