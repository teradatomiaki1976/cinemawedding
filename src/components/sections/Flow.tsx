// src/components/sections/Flow.tsx
import React from "react";

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
    <section className="w-full py-24 px-6 md:px-12 bg-[#F9F9F9] flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1B] mb-4">
          Flow
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          無料相談からご納品までの流れ
        </p>
      </div>

      <div className="w-full max-w-2xl relative">
        {/* 左側の縦線 (タイムラインの軸) */}
        <div className="absolute top-0 left-6 md:left-8 bottom-0 w-px bg-gray-300"></div>

        <div className="flex flex-col gap-12">
          {flowSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex items-start gap-6 md:gap-8"
            >
              {/* ステップの丸いバッジ */}
              <div className="shrink-0 relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#B89B72] flex items-center justify-center shadow-sm">
                <span className="font-serif font-bold text-[#B89B72] text-lg md:text-xl">
                  {step.id}
                </span>
              </div>

              {/* テキストコンテンツ */}
              <div className="pt-2 md:pt-4">
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#1A1A1B] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
