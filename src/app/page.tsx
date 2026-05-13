// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Empathy from "@/components/sections/Empathy";
import Concept from "@/components/sections/Concept";
import Promise from "@/components/sections/Promise";
import Gallery from "@/components/sections/Gallery";
import Photography from "@/components/sections/Photography";
import OurStory from "@/components/sections/OurStory";
import Flow from "@/components/sections/Flow";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden font-sans text-black bg-white">
      {/* 1. First View */}
      <Hero />

      {/* 2. 共感・課題提起 */}
      <Empathy />

      {/* 3. コンセプト */}
      <Concept />

      {/* 4. ３つの約束 */}
      <Promise />

      {/* 5. ギャラリー & 6. 写真撮影アピール */}
      <Gallery />
      <Photography />

      {/* 7. Our Story (お客様の声) */}
      <OurStory />

      {/* 8. Flow (制作の流れ) */}
      <Flow />

      {/* 9. Bottom CTA & 10. フォーム */}
      <Contact />

      {/* フッター (簡易版) */}
      <footer className="w-full py-8 bg-black text-white text-center text-sm opacity-80">
        <p>&copy; 2026 Cinema Wedding. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
