# Tailwind CSS コーディングルール

1. Canonicalクラス名を使用する（旧記法や冗長なクラスを避ける）。
2. Arbitrary values（`[]`）は避け、`globals.css` の `@theme` で定義した変数を使用する。
3. `prettier-plugin-tailwindcss` による自動ソートを適用する。
4. UIパーツは `@apply` ではなくコンポーネントとして分割する。
5. クラス名の動的結合には `src/lib/utils.ts` の `cn` 関数を使用する。
6. モバイルファーストで記述し、`md:` や `lg:` で拡張する。
