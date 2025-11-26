import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "교회 홈페이지 전문 제작",
  description: "교회 홈페이지 전문 제작 - 상담의 80%가 '이미 홈페이지보고 마음이 끌렸어요'로 시작됩니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white">{children}</body>
    </html>
  );
}

