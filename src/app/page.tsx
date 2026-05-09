export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      {/* 動作確認用の仮表示 */}
      <div className="h-screen flex flex-col items-center justify-center bg-cinema-gray">
        <h1 className="font-serif text-4xl font-bold mb-4">
          シネマウェディング24年6月現在、Tailwind CSSの環境構築が完了しました！
        </h1>
        <p className="text-cinema-accent">
          Tailwind最新版で環境構築、完了です！🎬
        </p>
      </div>
    </main>
  );
}
