// src/components/sections/Promise.tsx
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
    <section className="w-full py-24 px-6 md:px-12 bg-gray flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-black tracking-wide">
            Our Promise
          </h2>
          <p className="text-sm tracking-widest text-black/70">
            シネマウェディングが約束する3つのこと
          </p>
        </div>

        {/* 3つの約束 カラムエリア */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* ナンバリング (アクセントカラー) */}
              <span className="font-serif text-5xl md:text-6xl italic text-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {promise.number}
              </span>

              {/* タイトル */}
              <h3 className="font-serif text-xl font-bold mb-4 text-black">
                {promise.title}
              </h3>

              {/* 本文 */}
              <p className="text-sm leading-relaxed text-black/80 text-justify md:text-left px-2">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
