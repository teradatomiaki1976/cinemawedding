// src/components/sections/Promise.tsx
import FadeIn from "@/components/ui/FadeIn";
import React from "react";

export default function PromiseSection() {
  const promises = [
    {
      number: "01",
      title: "飾らない空気づくり",
      description:
        "「笑ってください」とは言いません。カメラの存在を忘れてしまうような、おふたりが自然体でいられるリラックスした空間と空気感をつくります。",
    },
    {
      number: "02",
      title: "「らしさ」の発見",
      description:
        "ふとした瞬間の視線、何気ない会話での笑顔。おふたり自身もまだ気づいていないような「本当の魅力」を、ドキュメンタリーのように丁寧に切り取ります。",
    },
    {
      number: "03",
      title: "映画のような映像美",
      description:
        "光と影を操る撮影技術と、プロによる緻密なカラーグレーディング。派手な演出がなくても、日常の延長にある姿を一本の美しい「名作」へと昇華させます。",
    },
  ];

  return (
    <section className="bg-gray flex w-full flex-col items-center px-6 py-24 md:px-12">
      <div className="w-full max-w-5xl">
        {/* セクションタイトル */}
        <div className="mb-16 text-center">
          <FadeIn>
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-wide text-black md:text-4xl">
              Our Promise
            </h2>
            <p className="text-sm tracking-widest text-black/70">
              シネマウェディングが約束する3つのこと
            </p>
          </FadeIn>
        </div>

        {/* 3つの約束 カラムエリア */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              <FadeIn delay={0.2}>
                {/* ナンバリング (アクセントカラー) */}
                <span className="text-accent mb-6 font-serif text-5xl italic opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:text-6xl">
                  {promise.number}
                </span>

                {/* タイトル */}
                <h3 className="mb-4 font-serif text-xl font-bold text-black">
                  {promise.title}
                </h3>

                {/* 本文 */}
                <p className="px-2 text-justify text-sm leading-relaxed text-black/80 md:text-left">
                  {promise.description}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
