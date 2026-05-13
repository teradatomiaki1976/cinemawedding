// src/components/sections/Flow.tsx
import React from "react";
import FadeIn from "@/components/ui/FadeIn";

const flowSteps = [
  {
    id: "01",
    title: "お問い合わせ・無料相談",
    description:
      "まずはLINEまたは下部のフォームよりお気軽にご相談ください。「映像にするか迷っている」「何も決まっていない」という状態でも大歓迎です。",
  },
  {
    id: "02",
    title: "お打ち合わせ（オンライン可能）",
    description:
      "プロデューサーがヒアリングを行います。おふたりの出会い、好きなもの、苦手なことなど、リラックスした雰囲気でなんでもお話しください。",
  },
  {
    id: "03",
    title: "コンセプト・プランのご提案",
    description:
      "ヒアリングをもとに、おふたりらしさを引き出すロケーションや、無理のない撮影スケジュールをご提案します。",
  },
  {
    id: "04",
    title: "撮影当日",
    description:
      "カメラ目線やポージングの強要はいたしません。いつものデートのように、おふたりの時間をただ楽しんでお過ごしください。",
  },
  {
    id: "05",
    title: "編集・ご納品",
    description:
      "シネマライクな色調と音楽を重ね、映画のような一本の映像に仕上げます。撮影から約1ヶ月〜1.5ヶ月でデータにてご納品いたします。",
  },
];

export default function Flow() {
  return (
    <section className="flex w-full flex-col items-center bg-[#F9F9F9] px-6 py-24 md:px-12">
      <div className="mb-16 text-center">
        <FadeIn>
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#1A1A1B] md:text-4xl">
            Flow
          </h2>
          <p className="text-sm text-gray-600 md:text-base">
            無料相談からご納品までの流れ
          </p>
        </FadeIn>
      </div>

      <div className="relative w-full max-w-2xl">
        <FadeIn delay={0.2}>
          {/* 左側の縦線 (タイムラインの軸) */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gray-300 md:left-8"></div>

          <div className="flex flex-col gap-12">
            {flowSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* ステップの丸いバッジ */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#B89B72] bg-white shadow-sm md:h-16 md:w-16">
                  <span className="font-serif text-lg font-bold text-[#B89B72] md:text-xl">
                    {step.id}
                  </span>
                </div>

                {/* テキストコンテンツ */}
                <div className="pt-2 md:pt-4">
                  <h3 className="mb-2 font-serif text-lg font-bold text-[#1A1A1B] md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
