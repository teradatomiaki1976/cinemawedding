// src/components/sections/Contact.tsx
"use client";
import FadeIn from "@/components/ui/FadeIn";

import { useForm, SubmitHandler } from "react-hook-form";

type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // ここに実際の送信処理（APIルート呼び出しなど）を実装します
    console.log("送信データ:", data);

    // 送信中のダミーウェイト
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("お問い合わせを受け付けました。担当者よりご連絡いたします。");
    reset();
  };

  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center bg-white px-6 py-24 md:px-12"
    >
      <div className="w-full max-w-5xl">
        {/* セクションタイトル */}
        <div className="mb-16 text-center">
          <FadeIn>
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#1A1A1B] md:text-4xl">
              Contact
            </h2>
            <p className="leading-relaxed text-gray-600">
              おふたりだけの映画づくり、まずはここから。
              <br />
              「こんなこと聞いてもいいのかな？」という些細な疑問でも、お気軽にご相談ください。
            </p>
          </FadeIn>
        </div>

        {/* コンタクトエリア (LINE / Form 分割) */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-8 lg:gap-16">
          {/* 左側: LINE導線 */}
          <div className="flex h-fit w-full shrink-0 flex-col items-center rounded-xl bg-[#F9F9F9] p-8 text-center md:w-5/12">
            <h3 className="mb-2 text-lg font-bold text-[#1A1A1B]">
              LINEで気軽に相談
            </h3>
            <p className="mb-6 text-sm text-gray-600">
              お急ぎの方や、まずはチャットで
              <br className="hidden md:block" />
              質問したい方はこちらから。
            </p>
            {/* QRコードのプレースホルダー (v4ルールの aspect-square を使用) */}
            <div className="mb-6 flex aspect-square w-40 items-center justify-center border border-gray-200 bg-white shadow-sm">
              <span className="text-sm text-gray-400">QR Code</span>
            </div>
            <a
              href="#"
              className="w-full rounded-md bg-[#06C755] py-4 font-bold text-white transition-colors duration-300 hover:bg-[#05b34c]"
            >
              友だち追加して相談する
            </a>
          </div>

          {/* 中央: 区切り線 (PCのみ表示) */}
          <div className="w-1px hidden shrink-0 bg-gray-200 md:block"></div>

          {/* 右側: Webフォーム (React Hook Form) */}
          <div className="w-full grow md:w-7/12">
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-bold text-[#1A1A1B]">
                フォームから詳細を相談
              </h3>
              <p className="text-sm text-gray-600">
                撮影の希望時期や、こだわりのポイントがある方はこちらから。
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              {/* お名前 */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-[#1A1A1B]"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="映画 太郎"
                  {...register("name", { required: "お名前は必須です" })}
                  className={`w-full border bg-[#F9F9F9] px-4 py-3 ${errors.name ? "border-red-500" : "border-gray-200"} rounded-md transition-colors focus:border-[#B89B72] focus:outline-none`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* メールアドレス */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-[#1A1A1B]"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  {...register("email", {
                    required: "メールアドレスは必須です",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "有効なメールアドレスを入力してください",
                    },
                  })}
                  className={`w-full border bg-[#F9F9F9] px-4 py-3 ${errors.email ? "border-red-500" : "border-gray-200"} rounded-md transition-colors focus:border-[#B89B72] focus:outline-none`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* 電話番号 */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-[#1A1A1B]"
                >
                  電話番号
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="090-1234-5678"
                  {...register("phone")}
                  className="w-full rounded-md border border-gray-200 bg-[#F9F9F9] px-4 py-3 transition-colors focus:border-[#B89B72] focus:outline-none"
                />
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-[#1A1A1B]"
                >
                  ご相談内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="希望の撮影時期や、映像に残したい雰囲気など、自由にご記入ください。"
                  {...register("message", {
                    required: "ご相談内容は必須です",
                  })}
                  className={`w-full border bg-[#F9F9F9] px-4 py-3 ${errors.message ? "border-red-500" : "border-gray-200"} resize-none rounded-md transition-colors focus:border-[#B89B72] focus:outline-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* 送信ボタン */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#1A1A1B] py-4 font-bold text-white transition-colors duration-300 hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                    送信中...
                  </>
                ) : (
                  "この内容で送信する"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
