// src/components/sections/Empathy.tsx

export default function Empathy() {
  // ターゲットのインサイト（心の声）を定義
  const concerns = [
    "カメラを向けられると\nどうしても表情が\nこわばってしまう",
    "作り込んだポーズや\n派手な演出は\n自分たちらしくない",
    "「いかにも」な\n結婚式ムービーは\nなんだか恥ずかしい",
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-gray flex flex-col items-center">
      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-12 text-center text-black leading-relaxed">
        「結婚式の映像」に、
        <br className="md:hidden" />
        こんな不安はありませんか？
      </h2>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {concerns.map((text, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center justify-center relative"
          >
            {/* 吹き出しのアイコン（アクセントカラーを使用） */}
            <span className="text-accent mb-4 block">
              <svg
                className="w-16 h-16 opacity-80"
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
            <p className="text-sm md:text-base leading-loose text-black/80 whitespace-pre-wrap font-sans">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* 次のコンセプトセクションへの橋渡し */}
      <div className="mt-16 text-center">
        <p className="text-black/70 font-serif text-lg tracking-wide leading-relaxed">
          そのお気持ち、よくわかります。
          <br />
          だからこそ、私たちが大切にしていることがあります。
        </p>
        <div className="w-1 h-12 bg-accent mx-auto mt-8 opacity-50"></div>
      </div>
    </section>
  );
}
