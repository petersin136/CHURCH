import Image from "next/image";
import Link from "next/link";

const Logo = "https://hqpnwiaifysfpbpwixim.supabase.co/storage/v1/object/public/media/KakaoTalk_Photo_2025-06-23-00-02-43%20002-Photoroom.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* 4 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Column 1: Logo + slogan */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image src={Logo} alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-lg md:text-xl font-bold italic" style={{ color: '#553822', fontFamily: 'Georgia, serif' }}>
                maranatha studio
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              교회 홈페이지 전문 제작
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">링크</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">홈</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">서비스</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">포트폴리오</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">문의</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>교회: maranatha studio</li>
              <li>대표명: 000</li>
              <li>전화번호: 010-0000-0000</li>
              <li>이메일: contact@chrch.com</li>
            </ul>
          </div>

          {/* Column 4: Copyright */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4">정보</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">이용약관</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">개인정보처리방침</Link>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-6">© 2025 maranatha studio</p>
          </div>
        </div>

        {/* Bottom mini bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
            Maranatha Studio — 모든 교회에게 디지털 사역의 길을 엽니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
