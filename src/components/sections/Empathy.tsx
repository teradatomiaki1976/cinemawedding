// src/components/sections/Empathy.tsx
import FadeIn from "@/components/ui/FadeIn";

export default function Empathy() {
  // ターゲットのインサイト（心の声）を定義
  const concerns = [
    "カメラを向けられると\nどうしても表情が\nこわばってしまう",
    "作り込んだポーズや\n派手な演出は\n自分たちらしくない",
    "「いかにも」な\n結婚式ムービーは\nなんだか恥ずかしい",
  ];

  return (
    <section className="bg-gray flex w-full flex-col items-center px-6 py-24 md:px-12">
      <FadeIn>
        <h2 className="mb-12 text-center font-serif text-2xl leading-relaxed font-bold text-black md:text-3xl">
          「結婚式の映像」に、
          <br className="md:hidden" />
          こんな不安はありませんか？
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {concerns.map((text, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              {/* 吹き出しのアイコン（アクセントカラーを使用） */}
              <span className="text-accent mb-4 block">
                <svg
                  className="h-16 w-16 opacity-80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
              <p className="font-sans text-sm leading-loose whitespace-pre-wrap text-black/80 md:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="mt-16 text-center">
          <p className="font-serif text-lg leading-relaxed tracking-wide text-black/70">
            そのお気持ち、よくわかります。
            <br />
            だからこそ、私たちが大切にしていることがあります。
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
