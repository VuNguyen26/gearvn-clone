import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideFloatBanners from "@/components/home/SideFloatBanners";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_NAME = "GEARVN Clone";
const SITE_URL = "https://gearvn-clone-t14d.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Website thương mại điện tử công nghệ với giao diện hiện đại, tối ưu SEO, hiệu năng tốt và trải nghiệm mua sắm mượt mà.",
  keywords: [
    "gearvn",
    "gearvn clone",
    "laptop",
    "pc",
    "màn hình",
    "bàn phím",
    "chuột",
    "tai nghe",
    "linh kiện máy tính",
    "next.js ecommerce",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  verification: {
    google: "g93p3ZHgLlo0az8VNCz5-HNYyQaNoThF2eTgCfcBtgY",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Website thương mại điện tử công nghệ với giao diện hiện đại, tối ưu SEO, hiệu năng tốt và trải nghiệm mua sắm mượt mà.",
    images: [
      {
        url: "/gearvn-pc-gvn-t11-topbar.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Website thương mại điện tử công nghệ với giao diện hiện đại, tối ưu SEO, hiệu năng tốt và trải nghiệm mua sắm mượt mà.",
    images: ["/gearvn-pc-gvn-t11-topbar.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function HeaderFallback() {
  return <div className="h-[120px] w-full" />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-[#f2f2f2] text-gray-900">
        {/* <Suspense fallback={<HeaderFallback />}>
          <Header />
        </Suspense> */}

        <main className="relative w-full">
          {children}
          {/* <SideFloatBanners /> */}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}