"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RotatingLogo() {
  const [rotation, setRotation] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY.current;
      
      // 스크롤 내릴 때: 오른쪽 회전 (양수), 스크롤 올릴 때: 왼쪽 회전 (음수)
      setRotation((prev) => prev + scrollDelta * 0.5);
      lastScrollY.current = scrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-20">
      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 relative" ref={circleRef}>
        {/* 원형 텍스트 "로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라" 반복 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 192 192"
          style={{
            transform: `rotate(${-rotation}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <defs>
            <path
              id="rotating-logo-circle-path"
              d="M 96,96 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text
            fill="#553822"
            fontSize="9"
            fontFamily="Georgia, serif"
            fontWeight="bold"
            className="md:text-xs lg:text-sm"
          >
            <textPath href="#rotating-logo-circle-path" startOffset="0%">
              로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라,  •  •  로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라,  •  •  로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라,  •  •  로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라,  •  •  로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라,  •  •  로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라,  •  •  로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라,  •  •  로마서 11:36 이는 만물이 주에게서 나오고 주로 말미암고 주에게로 돌아감이라,  •  •
            </textPath>
          </text>
        </svg>

        {/* 내부 로고 이미지 - 전체 회전 */}
        <div
          className="absolute inset-2 md:inset-4 lg:inset-8 bg-white/80 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="https://hqpnwiaifysfpbpwixim.supabase.co/storage/v1/object/public/media/KakaoTalk_Photo_2025-06-23-00-02-43%20002-Photoroom.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain rounded-full w-full h-full p-1 md:p-2"
          />
        </div>
      </div>
    </div>
  );
}

