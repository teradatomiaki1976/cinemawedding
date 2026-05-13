// src/components/sections/OurStory.tsx
import React from "react";
import Image from "next/image"; // Next.jsのImageコンポーネントをインポート
import FadeIn from "@/components/ui/FadeIn";

// コンテンツデータを定義 (将来的にCMSや別ファイルから取得可能に)
const storyData = {
  title:
    "「カメラを向けられると緊張してしまう。そんな私たちが、心から楽しめた一日でした」",
  coupleName: "C & C 様",
  imageSrc: "/images/our-story.jpg",
  imageAlt: "京都で自然に笑い合うダンサーカップル",
  paragraphs: [
    "「普段はステージで踊っていますが、いざ自分たちのウェディングムービーとなると、どう振る舞っていいか分からず、最初はとても不安でした。作られた笑顔を残すのは絶対に嫌だったんです。」",
    "「でも、撮影チームの皆さんが作ってくれた空気感のおかげで、いつの間にかカメラの存在を忘れていました。無理にポーズを要求されることもなく、ただふたりで過ごす時間を美しく切り取ってくれたような感覚です。」",
    "「完成した映像を見たとき、そこに映っていたのは『飾らない、いつもの私たち』でした。恥ずかしがり屋の彼も、『これなら何年経っても見返したいね』と言ってくれて。勇気を出してお願いして本当に良かったです。」",
  ],
  accentText: "A movie that captures the true essence of us.",
};

export default function OurStory() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-6 py-24 md:px-12">
      <div className="w-full max-w-5xl">
        {/* セクションタイトル */}
        <div className="mb-16 text-center">
          <FadeIn>
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#1A1A1B] md:text-4xl">
              Our Story
            </h2>
            <p className="text-sm tracking-widest text-[#B89B72]">お客様の声</p>
          </FadeIn>
        </div>

        {/* インタビュー記事風レイアウト */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
            {/* 左側：メインビジュアル (スマホでは上) */}
            <div className="group relative aspect-4/5 w-full shrink-0 overflow-hidden rounded-sm bg-[#F9F9F9] md:w-1/2">
              {/* next/image で画像を最適化して表示 */}
              <Image
                src={storyData.imageSrc}
                alt={storyData.imageAlt}
                fill // 親要素(aspect-4/5)いっぱいに表示
                className="object-cover" // 縦横比を保ちながらカバー
                priority // このセクションは優先して読み込む
                sizes="(max-width: 768px) 100vw, 50vw" // レスポンシブな画像サイズ最適化
              />
            </div>

            {/* 右側：テキストコンテンツ (スマホでは下) */}
            <div className="flex w-full flex-col justify-center pt-4 md:w-1/2 md:pt-8">
              <h3
                className="mb-6 font-serif text-xl leading-relaxed font-bold text-[#1A1A1B] md:text-2xl"
                // dangerouslySetInnerHTML で改行タグを反映
                dangerouslySetInnerHTML={{ __html: storyData.title }}
              />
              <p className="mb-10 inline-block border-b border-gray-200 pb-4 font-serif text-sm text-gray-500">
                {storyData.coupleName}
              </p>

              <div className="space-y-6 text-sm leading-loose text-[#1A1A1B] md:text-base">
                {storyData.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* アクセントカラーを使った引用符風のあしらい */}
              <div className="mt-12 border-l-2 border-[#B89B72] py-2 pl-6">
                <p className="font-serif text-sm tracking-wide text-gray-500 italic">
                  "{storyData.accentText}"
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
