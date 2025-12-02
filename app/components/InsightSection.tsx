export default function InsightSection() {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white relative">
      {/* Subtle cross-line divider above text */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16" style={{ lineHeight: '1.6' }}>
            작은 교회일수록 홈페이지는<br />
            선택이 아닌 <span style={{ fontSize: '1.3em', color: '#c41e3a', fontWeight: '700' }}>필수</span>입니다
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-8 md:mb-12 lg:mb-16">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="mx-3 md:mx-4 text-gray-400 text-xl md:text-2xl">✟</div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Main text block - serif or elegant Korean font */}
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              성도들이 큰 교회를 찾는 이유는 단순합니다.
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              정보가 없기 때문입니다.
            </p>
            
            <div className="py-1 md:py-2"></div>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              나와 맞는 목사님인지,
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              내 영혼을 맡길 수 있는 가치관인지 알 수 없기에
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              사람들은 가장 안전해 보이는 선택을 합니다.
            </p>
            
            <div className="py-1 md:py-2"></div>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              이제는 '규모'가 아닌 '방향'을 보여주세요.
            </p>
            
            <div className="py-1 md:py-2"></div>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              우리 교회가 무엇을 믿는지,
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              목사님이 어떤 마음으로 목양하는지 선명하게 드러낼 때,
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              하나님의 특별한 인도하심을 기다리던 그 한 영혼이
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              비로소 이곳을 발견하게 됩니다.
            </p>
            
            <div className="py-1 md:py-2"></div>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              가치관이 선명한 교회는 더 이상 작지 않습니다.
            </p>
            
            <div className="py-1 md:py-2"></div>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed">
              오직 당신의 교회를 찾고 있는 그 사람을 위해,
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-800 leading-relaxed font-bold">
              홈페이지를 만듭니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


