import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwindのクラスを安全に結合・マージするユーティリティ関数
 * clsxで条件付きクラスを結合し、tailwind-mergeでスタイルの競合を解決します。
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
