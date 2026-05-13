// src/components/sections/Gallery.tsx
"use client"; // useStateを使用するためClient Componentに指定

import React, { useState } from "react";
import Image from "next/image";

// ギャラリーアイテムの型定義
type GalleryItem = {
  id: number;
  type: "image" | "video";
  alt: string;
  src: string; // 実際の画像/動画のパス
  height: string; // マソンリーレイアウト用の高さ
};

// ギャラリーのデータ（実案件では public/images/ や public/videos/ のパスに）
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    alt: "笑顔で見つめ合うふたり",
    src: "/images/1500x1000_1.jpg",
    height: "h-64",
  },
  {
    id: 2,
    type: "video",
    alt: "歩きながら話すシーン",
    src: "/videos/gallery01.mp4",
    height: "h-96",
  },
  {
    id: 3,
    type: "image",
    alt: "風になびくドレス",
    src: "/images/1000x1500_1.jpg",
    height: "h-80",
  },
  {
    id: 4,
    type: "image",
    alt: "何気ない会話の瞬間",
    src: "/images/1500x1000_2.jpg",
    height: "h-72",
  },
  {
    id: 5,
    type: "video",
    alt: "夕暮れのシルエット",
    src: "/videos/gallery02.mp4",
    height: "h-80",
  },
  {
    id: 6,
    type: "image",
    alt: "手を繋ぐクローズアップ",
    src: "/images/1000x1500_2.jpg",
    height: "h-96",
  },
];

export default function Gallery() {
  // ポップアップで表示中のアイテムを保持するState（nullの場合は非表示）
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // モーダルを閉じる処理
  const closeModal = () => setSelectedItem(null);

  return (
    <section className="relative flex w-full flex-col items-center bg-[#1A1A1B] px-6 py-24 text-white md:px-12">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#B89B72] md:text-4xl">
            Cinematic Moments
          </h2>
          <p className="text-sm tracking-widest opacity-80 md:text-base">
            飾らない瞬間が、名作になる。
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-xl"
              onClick={() => setSelectedItem(item)} // クリックでStateにセット
            >
              {/* サムネイル画像 */}
              <div
                className={`relative w-full ${item.height} bg-stone-800 transition-transform duration-700 group-hover:scale-105`}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-white/30">
                    Video Thumbnail
                  </div>
                )}

                {/* 動画用の再生アイコン */}
                {item.type === "video" && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <div className="border-t-8px border-l-14px border-b-8px ml-1 h-0 w-0 border-t-transparent border-b-transparent border-l-white"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* ホバー時のオーバーレイ */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================
        Lightbox (ポップアップモーダル)
        ========================================
      */}
      {selectedItem && (
        <div
          /* ★ globals.css で定義した animate-fade-in に変更 */
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1B]/95 p-4 backdrop-blur-sm md:p-10"
          onClick={closeModal}
        >
          {/* 閉じるボタン */}
          <button
            className="absolute top-6 right-6 z-50 p-2 text-white/70 transition-colors hover:text-[#B89B72] md:top-10 md:right-10"
            onClick={closeModal}
            aria-label="閉じる"
          >
            <svg
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* コンテンツエリア */}
          <div
            className="relative flex h-[80vh] w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()} // 中身のクリックでは閉じないように伝播をストップ
          >
            {selectedItem.type === "image" ? (
              // 拡大写真
              <div className="relative h-full w-full">
                {/* 実際の画像コンポーネント（コメントアウトを解除・プレースホルダーを削除） */}
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            ) : (
              // 拡大動画（自動再生・コントロール付き）
              <video
                src={selectedItem.src}
                className="max-h-full max-w-full rounded-lg border border-white/10 object-contain shadow-2xl outline-none"
                controls
                autoPlay
                playsInline
              >
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
