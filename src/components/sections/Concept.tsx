// src/components/sections/Concept.tsx
import Image from "next/image"; // ★Next.jsのImageコンポーネントをインポート

export default function Concept() {
  return (
    // section自体をrelativeにして、背景divをabsoluteで配置できるようにする
    <section className="text-cinema-black relative flex w-full flex-col items-center overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32">
      {/* ★背景画像とオーバーレイのエリ�� */}
      <div className="absolute inset-0 z-0">
        {/* 背景画像 */}
        <Image
          src="/images/concept-bg.jpg" // アップロードされた画像を指定 [cite: 9, 11]
          alt="Concept Background"
          fill // 親要素(div)いっぱいに広げる
          className="object-cover object-center" // 画像の比率を保ちつつ中央に配置
          priority // この画像は優先的に読み込む
        />
        {/* 白い半透明オーバーレイ（ここで「うっすら」を調整） */}
        {/* bg-white/90 で90%透過の白を重ねています。数値を調整して濃さを決めてください。 */}
        <div className="absolute inset-0 z-10 bg-white/70"></div>
      </div>

      {/* コンテンツエリア（z-10を追加してオーバーレイの上に表示） */}
      <div className="relative z-20 flex w-full max-w-3xl flex-col items-center text-center">
        {/* メインコピー（見出し） */}
        <h2 className="mb-12 font-serif text-2xl leading-loose font-bold md:text-4xl md:leading-relaxed">
          必要なのは、
          <br className="md:hidden" />
          「いつものおふたり」だけ。
        </h2>
        {/* コンセプト説明（リード文） */}
        <div className="space-y-8 font-sans text-sm leading-loose tracking-[0.15em] text-gray-700 md:text-base">
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
