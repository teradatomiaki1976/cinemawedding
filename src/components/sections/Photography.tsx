// src/components/sections/Photography.tsx
import React from "react";

export default function Photography() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#1A1A1B] text-white flex flex-col items-center border-t border-white/10">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* 画像エリア */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3] w-full bg-stone-800 rounded-sm overflow-hidden relative group">
            {/* ホバー時の明るさ調整 */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none" />

            {/* プレースホルダー画像 */}
            <div className="w-full h-full flex items-center justify-center text-white/40 text-sm transition-transform duration-700 group-hover:scale-105">
              [ ふとした瞬間の自然なスチル写真 ]
            </div>
          </div>

          {/* シネマティックな装飾フレーム */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#B89B72]/50 z-0 pointer-events-none" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#B89B72]/50 z-0 pointer-events-none" />
        </div>

        {/* テキストエリア */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#B89B72]">
            Still Photography
          </h2>
          <p className="text-lg md:text-xl mb-8 tracking-widest font-serif opacity-90">
            映像のとなりで、そっと切り取る一枚。
          </p>

          <div className="space-y-6 text-sm md:text-base leading-loose opacity-80 mb-10 font-sans">
            <p>
              「写真のためにポーズをとるのは、なんだか気恥ずかしい」
              <br />
              そんなおふたりにこそ、私たちのスチル撮影をおすすめします。
            </p>
            <p>
              ムービーのカメラが回っている隣で、フォトグラファーが静かにシャッターを切ります。だからこそ残せるのは、カメラを意識しない、いつもの自然な表情。
            </p>
            <p>
              映像と同じ世界観、同じ温度感で。
              <br />
              飾らないおふたりの姿を、映画のワンシーンのような一枚に仕立てます。
            </p>
          </div>

          <button className="w-fit px-8 py-4 border border-white/30 text-white text-sm tracking-widest hover:border-[#B89B72] hover:bg-[#B89B72] hover:text-[#1A1A1B] transition-all duration-300">
            スチル撮影プランを見る
          </button>
        </div>
      </div>
    </section>
  );
}
