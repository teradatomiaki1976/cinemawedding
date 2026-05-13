// src/components/sections/Concept.tsx
import FadeIn from "@/components/ui/FadeIn";

export default function Concept() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-6 py-24 text-black md:px-12 md:py-32">
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <FadeIn>
          <h2 className="mb-12 font-serif text-2xl leading-loose font-bold md:text-4xl md:leading-relaxed">
            必要なのは、
            <br className="md:hidden" />
            「いつものおふたり」だけ。
          </h2>
        </FadeIn>
        <div className="space-y-8 font-sans text-sm leading-loose tracking-[0.15em] text-gray-700 md:text-base">
          <FadeIn delay={0.2}>
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
