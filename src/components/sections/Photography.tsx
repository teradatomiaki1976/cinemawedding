// src/components/sections/Photography.tsx
import React from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function Photography() {
  // ★ ここを実際の画像パス（public/images/...）に書き換えるだけでOK！
  const photographyImage = "/images/1500x1000_still.jpg";

  return (
    <section className="flex w-full flex-col items-center border-t border-white/10 bg-[#1A1A1B] px-6 py-24 text-white md:px-12">
      <FadeIn>
        <div className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-20">
          {/* 画像エリア */}
          <div className="relative w-full md:w-1/2">
            {/* 装飾用の背面フレーム（シネマティックな金色の枠） */}
            <div className="pointer-events-none absolute -right-6 -bottom-6 z-0 h-32 w-32 border-r-2 border-b-2 border-[#B89B72]/40" />
            <div className="pointer-events-none absolute -top-6 -left-6 z-0 h-32 w-32 border-t-2 border-l-2 border-[#B89B72]/40" />

            {/* 画像本体のコンテナ */}
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-sm bg-stone-800 shadow-2xl">
              {/* 実際の画像コンポーネント */}
              <Image
                src={photographyImage}
                alt="自然な表情を切り取ったスチル写真"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* シネマティックな質感：ホバー時に少しだけ明るさを戻すオーバーレイ */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-black/15 transition-colors duration-500 group-hover:bg-black/0" />
            </div>
          </div>

          {/* テキストエリア */}
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#B89B72] md:text-4xl">
              Still Photography
            </h2>
            <p className="mb-8 font-serif text-lg tracking-widest opacity-90 md:text-xl">
              映像のとなりで、そっと切り取る一枚。
            </p>

            <div className="mb-10 space-y-6 font-sans text-sm leading-loose opacity-80 md:text-base">
              <p className="leading-relaxed">
                「写真のためにポーズをとるのは、なんだか気恥ずかしい」
                <br />
                そんなおふたりにこそ、私たちのスチル撮影をおすすめします。
              </p>
              <p className="leading-relaxed">
                ムービーのカメラが回っている隣で、フォトグラファーが静かにシャッターを切ります。だからこそ残せるのは、カメラを意識しない、いつもの自然な表情。
              </p>
              <p className="leading-relaxed">
                映像と同じ世界観、同じ温度感で。
                <br />
                飾らないおふたりの姿を、映画のワンシーンのような一枚に仕立てます。
              </p>
            </div>

            <button className="w-fit border border-white/30 px-10 py-4 text-xs tracking-[0.2em] text-white transition-all duration-300 hover:border-[#B89B72] hover:bg-[#B89B72] hover:text-[#1A1A1B]">
              PLAN VIEW
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
