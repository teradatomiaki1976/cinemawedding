// src/components/sections/OurStory.tsx
import React from "react";

export default function OurStory() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1B] mb-4">
            Our Story
          </h2>
          <p className="text-sm tracking-widest text-[#B89B72]">お客様の声</p>
        </div>

        {/* インタビュー記事風レイアウト */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          {/* 左側：メインビジュアル (スマホでは上) */}
          <div className="w-full md:w-1/2 relative aspect-4/5 bg-[#F9F9F9] rounded-sm overflow-hidden shrink-0 group">
            {/* プレースホルダー：本番では next/image に差し替え */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 border border-gray-200">
              <div className="text-center">
                <span className="block mb-2">📸</span>
                [ Image: ダンサーカップルの
                <br />
                自然に笑い合う写真 ]
              </div>
            </div>
            {/* 写真のキャプション風の装飾 */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs tracking-wider text-[#1A1A1B] font-serif">
              Kyoto, Autumn
            </div>
          </div>

          {/* 右側：テキストコンテンツ (スマホでは下) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center pt-4 md:pt-8">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1A1A1B] mb-6 leading-relaxed">
              「カメラを向けられると緊張してしまう。
              <br />
              そんな私たちが、
              <br className="hidden md:block" />
              心から楽しめた一日でした」
            </h3>
            <p className="text-sm text-gray-500 mb-10 font-serif border-b border-gray-200 pb-4 inline-block">
              M & Y 様 (ダンサー)
            </p>

            <div className="space-y-6 text-[#1A1A1B] leading-loose text-sm md:text-base">
              <p>
                「普段はステージで踊っていますが、いざ自分たちのウェディングムービーとなると、どう振る舞っていいか分からず、最初はとても不安でした。作られた笑顔を残すのは絶対に嫌だったんです。」
              </p>
              <p>
                「でも、撮影チームの皆さんが作ってくれた空気感のおかげで、いつの間にかカメラの存在を忘れていました。無理にポーズを要求されることもなく、ただふたりで過ごす時間を美しく切り取ってくれたような感覚です。」
              </p>
              <p>
                「完成した映像を見たとき、そこに映っていたのは『飾らない、いつもの私たち』でした。恥ずかしがり屋の彼も、『これなら何年経っても見返したいね』と言ってくれて。勇気を出してお願いして本当に良かったです。」
              </p>
            </div>

            {/* アクセントカラーを使った引用符風のあしらい */}
            <div className="mt-12 border-l-2 border-[#B89B72] pl-6 py-2">
              <p className="text-sm italic text-gray-500 font-serif tracking-wide">
                "A movie that captures the true essence of us."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
