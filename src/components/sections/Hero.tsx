// src/components/sections/Hero.tsx

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* 背景動画 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
        // poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* シネマティック・オーバーレイ（全体を少し暗くする） */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full bg-white/10"></div>

      {/* 🎬 【ここを追加】シネマティック・レターボックス（上） */}
      <div className="pointer-events-none absolute top-0 left-0 z-20 h-[12vh] w-full bg-black md:h-[13vh]"></div>

      {/* 🎬 【ここを追加】シネマティック・レターボックス（下） */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[12vh] w-full bg-black md:h-[13vh]"></div>

      {/* コンテンツエリア */}
      <div className="animate-fade-in-up relative z-30 flex flex-col items-center justify-center px-4">
        <h1 className="mb-6 text-center font-serif text-4xl leading-tight font-bold tracking-widest drop-shadow-lg md:text-6xl">
          THE CINEMATIC WEDDING
        </h1>
        <p className="max-w-xl text-center font-sans text-base tracking-wide opacity-90 drop-shadow-md md:text-lg">
          〜 人生最良の日を、一本の映画に 〜
        </p>
      </div>

      {/* スクロールインジケーター（下の黒帯の中に綺麗に収まるように z-index を調整） */}
      <div className="absolute bottom-6 z-30 flex animate-bounce flex-col items-center gap-2 md:bottom-8">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-80 md:text-xs">
          Scroll
        </span>
        <div className="h-6 w-px bg-white/60 md:h-8"></div>
      </div>
    </section>
  );
}
