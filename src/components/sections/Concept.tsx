// src/components/sections/Concept.tsx

export default function Concept() {
  return (
    <section className="w-full py-24 px-6 md:py-32 md:px-12 bg-white flex flex-col items-center text-black">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        {/* メインコピー（見出し） */}
        <h2 className="font-serif text-2xl md:text-4xl font-bold mb-12 leading-loose md:leading-relaxed">
          必要なのは、
          <br className="md:hidden" />
          「いつものおふたり」だけ。
        </h2>

        {/* コンセプト説明（リード文） */}
        <div className="space-y-8 font-sans text-sm md:text-base tracking-[0.15em] leading-loose text-gray-700">
          <p>
            無理に笑わなくていい。
            <br />
            気の利いたポーズもいらない。
            <br />
            ただ、お互いを見つめて、いつものように話すだけ。
          </p>
          <p>
            シネマウェディングが大切にしているのは、
            <br className="hidden md:block" />
            作られた美しさではなく、
            <br className="hidden md:block" />
            おふたりが紡いできた日常の延長線上にある「本物の空気感」です。
          </p>
          <p>
            映画のワンシーンのように、
            <br />
            何気ない瞬間を永遠の記録として残します。
          </p>
        </div>
      </div>
    </section>
  );
}
