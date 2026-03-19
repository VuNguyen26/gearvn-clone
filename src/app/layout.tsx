import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideFloatBanners from "@/components/home/SideFloatBanners";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "GEARVN Clone - Next.js SEO Ecommerce",
  description: "Clone GearVN tập trung SEO/SSR/ISR, tối ưu performance và state phức tạp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-[#f2f2f2] text-gray-900">
        <Header />
        <main className="w-full relative">{children}
          <SideFloatBanners />
        </main>
        <Footer/>
      </body>
    </html>
  );
}
