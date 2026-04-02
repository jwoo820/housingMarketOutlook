import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Housing Market Outlook",
  description: "README.md 기반 부동산 시장 분석 문서"
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
