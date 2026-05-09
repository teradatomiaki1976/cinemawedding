import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "シネマウェディング | ふたりの人生を、一本の名作に。",
  description:
    "特別な演技はいりません。プロの伴走で、ありのままのおふたりを美しく残すウェディングムービー。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${sans.variable} ${serif.variable} font-sans text-cinema-black bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
