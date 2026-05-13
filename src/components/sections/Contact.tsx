// src/components/sections/Contact.tsx
"use client";

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
      className="w-full py-24 px-6 md:px-12 bg-white flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1B]">
            Contact
          </h2>
          <p className="text-gray-600 leading-relaxed">
            おふたりだけの映画づくり、まずはここから。
            <br />
            「こんなこと聞いてもいいのかな？」という些細な疑問でも、お気軽にご相談ください。
          </p>
        </div>

        {/* コンタクトエリア (LINE / Form 分割) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16">
          {/* 左側: LINE導線 */}
          <div className="w-full md:w-5/12 flex flex-col items-center text-center bg-[#F9F9F9] p-8 rounded-xl shrink-0 h-fit">
            <h3 className="font-bold text-lg text-[#1A1A1B] mb-2">
              LINEで気軽に相談
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              お急ぎの方や、まずはチャットで
              <br className="hidden md:block" />
              質問したい方はこちらから。
            </p>
            {/* QRコードのプレースホルダー (v4ルールの aspect-square を使用) */}
            <div className="w-40 aspect-square bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6">
              <span className="text-gray-400 text-sm">QR Code</span>
            </div>
            <a
              href="#"
              className="w-full py-4 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold rounded-md transition-colors duration-300"
            >
              友だち追加して相談する
            </a>
          </div>

          {/* 中央: 区切り線 (PCのみ表示) */}
          <div className="hidden md:block w-1px bg-gray-200 shrink-0"></div>

          {/* 右側: Webフォーム (React Hook Form) */}
          <div className="w-full md:w-7/12 grow">
            <div className="mb-6">
              <h3 className="font-bold text-lg text-[#1A1A1B] mb-2">
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
                  className="block text-sm font-medium text-[#1A1A1B] mb-1"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="映画 太郎"
                  {...register("name", { required: "お名前は必須です" })}
                  className={`w-full px-4 py-3 bg-[#F9F9F9] border ${errors.name ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none focus:border-[#B89B72] transition-colors`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* メールアドレス */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1A1A1B] mb-1"
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
                  className={`w-full px-4 py-3 bg-[#F9F9F9] border ${errors.email ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none focus:border-[#B89B72] transition-colors`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* 電話番号 */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#1A1A1B] mb-1"
                >
                  電話番号
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="090-1234-5678"
                  {...register("phone")}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-md focus:outline-none focus:border-[#B89B72] transition-colors"
                />
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1A1A1B] mb-1"
                >
                  ご相談内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="希望の撮影時期や、映像に残したい雰囲気など、自由にご記入ください。"
                  {...register("message", { required: "ご相談内容は必須です" })}
                  className={`w-full px-4 py-3 bg-[#F9F9F9] border ${errors.message ? "border-red-500" : "border-gray-200"} rounded-md focus:outline-none focus:border-[#B89B72] transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* 送信ボタン */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full py-4 bg-[#1A1A1B] hover:bg-black text-white font-bold rounded-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0"></span>
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
