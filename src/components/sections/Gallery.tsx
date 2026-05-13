// src/components/sections/Gallery.tsx
import React from "react";
// import Image from "next/image"; // 実画像を使用する際にコメントアウトを外してください

// ギャラリーのモックデータ（実際の画像/動画パスに差し替えてください）
const galleryItems = [
  {
    id: 1,
    type: "image",
    alt: "笑顔で見つめ合うふたり",
    height: "h-64",
    bg: "bg-stone-800",
  },
  {
    id: 2,
    type: "video",
    alt: "歩きながら話すシーン",
    height: "h-96",
    bg: "bg-stone-900",
  },
  {
    id: 3,
    type: "image",
    alt: "風になびくドレス",
    height: "h-80",
    bg: "bg-stone-800",
  },
  {
    id: 4,
    type: "image",
    alt: "何気ない会話の瞬間",
    height: "h-72",
    bg: "bg-stone-800",
  },
  {
    id: 5,
    type: "video",
    alt: "夕暮れのシルエット",
    height: "h-80",
    bg: "bg-stone-900",
  },
  {
    id: 6,
    type: "image",
    alt: "手を繋ぐクローズアップ",
    height: "h-96",
    bg: "bg-stone-800",
  },
];

export default function Gallery() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#1A1A1B] text-white flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#B89B72]">
            Cinematic Moments
          </h2>
          <p className="tracking-widest text-sm md:text-base opacity-80">
            飾らない瞬間が、名作になる。
          </p>
        </div>

        {/* Masonry Gallery (Tailwind v4 columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-24">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* プレースホルダー（実案件では next/image や video タグに置き換え） */}
              <div
                className={`w-full ${item.height} ${item.bg} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}
              >
                {/* 動画用の再生アイコン */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:scale-110">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}

                <span className="text-xs text-white/50 px-4 text-center">
                  {item.alt} {item.type === "video" ? "(Video)" : "(Photo)"}
                </span>
              </div>

              {/* ホバー時のオーバーレイ（暗転効果） */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
