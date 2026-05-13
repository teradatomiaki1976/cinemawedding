// src/components/sections/Hero.tsx

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-black text-white">
      {/* 背景動画 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        // poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-loop_hi.mp4" type="video/mp4" />
      </video>

      {/* シネマティック・オーバーレイ（全体を少し暗くする） */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 z-10 pointer-events-none"></div>

      {/* 🎬 【ここを追加】シネマティック・レターボックス（上） */}
      <div className="absolute top-0 left-0 w-full h-[12vh] md:h-[13vh] bg-black z-20 pointer-events-none"></div>

      {/* 🎬 【ここを追加】シネマティック・レターボックス（下） */}
      <div className="absolute bottom-0 left-0 w-full h-[12vh] md:h-[13vh] bg-black z-20 pointer-events-none"></div>

      {/* コンテンツエリア */}
      <div className="relative z-30 flex flex-col items-center justify-center px-4 animate-fade-in-up">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-widest text-center leading-tight drop-shadow-lg">
          THE CINEMATIC WEDDING
        </h1>
        <p className="text-base md:text-lg opacity-90 text-center max-w-xl font-sans tracking-wide drop-shadow-md">
          〜 人生最良の日を、一本の映画に 〜
        </p>
      </div>

      {/* スクロールインジケーター（下の黒帯の中に綺麗に収まるように z-index を調整） */}
      <div className="absolute bottom-6 md:bottom-8 z-30 animate-bounce flex flex-col items-center gap-2">
        <span className="text-[10px] md:text-xs tracking-[0.3em] opacity-80 uppercase font-sans">
          Scroll
        </span>
        <div className="w-px h-6 md:h-8 bg-white/60"></div>
      </div>
    </section>
  );
}
