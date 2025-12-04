export default function ProblemSection() {
  return (
    <section className="py-8 md:py-12 lg:py-20 relative" style={{ backgroundColor: '#0E0E0E' }}>
      {/* Soft spotlight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Content - 시적인 느낌의 텍스트 */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-light" style={{ lineHeight: '1.5' }}>
              교회 문은 잠가도
            </p>
          
            <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium" style={{ lineHeight: '1.5' }}>
              온라인 교회는 열어둘 수 있습니다.
            </p>
            
            <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium" style={{ lineHeight: '1.5' }}>
              새벽에도, 한밤중에도,
            </p>
            
            <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium" style={{ lineHeight: '1.5' }}>
              언제든 들어올 수 있는 24시간 열린 교회.
            </p>
            
            <div className="pt-6 md:pt-8 lg:pt-12">
              <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight border-t border-gray-700 pt-6 md:pt-8 lg:pt-12 inline-block">
                그것이 홈페이지입니다.
                </p>
              </div>
          </div>
        </div>
      </div>

      {/* Soft fade bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-5"></div>
    </section>
  );
}
