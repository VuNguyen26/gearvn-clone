import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "GEARVN Clone - Next.js SEO Ecommerce",
  description: "Clone GearVN tập trung SEO/SSR/ISR, tối ưu performance và state phức tạp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-[#f2f2f2] text-gray-900">
        <Header />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
