import type { Metadata } from "next";
import {
  Noto_Sans_JP,
  Noto_Serif_JP,
  Cormorant_Garamond,
} from "next/font/google"; // インポート追加
import "./globals.css";

// 本文用（日本語）
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
});

// 見出し用（日本語）
const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

// タイトル・アクセント用（欧文専用：Cormorant Garamond）
const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"], // イタリック体（斜体）も使えるようにするとより映画的
  variable: "--font-display", // 新しく display という名前で定義
});

export const metadata: Metadata = {
  title: "シネマウェディング",
  description: "映画のような、一生モノのウェディング体験を",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* 3つの変数をすべて適用 */}
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${cormorantGaramond.variable} bg-gray font-sans text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
