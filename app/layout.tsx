import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Database News Digest",
  description: "数据库论文追踪与 AI 总结应用"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
