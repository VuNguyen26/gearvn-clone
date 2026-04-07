import type { Metadata } from "next";
import Link from "next/link";
import { newsArticles } from "@/data/news";
import NewsBanner from "@/components/news/NewsBanner";
import FeaturedNewsGrid from "@/components/news/FeaturedNewsGrid";
import NewsList from "@/components/news/NewsList";
import NewsSidebar from "@/components/news/NewsSidebar";
import SideFloatBanners from "@/components/home/SideFloatBanners";

const SITE_URL = "https://gearvn-clone-t14d.vercel.app";

export const metadata: Metadata = {
  title: "Tin tức",
  description:
    "Cập nhật tin tức công nghệ, sản phẩm mới, xu hướng phần cứng và các bài viết hữu ích dành cho người yêu công nghệ.",
  alternates: {
    canonical: `${SITE_URL}/news`,
  },
  openGraph: {
    title: "Tin tức",
    description:
      "Cập nhật tin tức công nghệ, sản phẩm mới, xu hướng phần cứng và các bài viết hữu ích dành cho người yêu công nghệ.",
    url: `${SITE_URL}/news`,
    type: "website",
    images: [
      {
        url: "/gearvn-pc-gvn-t11-topbar.png",
        width: 1200,
        height: 630,
        alt: "Tin tức công nghệ",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewsPage() {
  const featured = newsArticles.filter((item) => item.featured);
  const normalArticles = newsArticles.filter((item) => !item.featured);

  return (
    <main className="min-h-screen bg-[#f3f3f3] py-3 sm:py-4">
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-4">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 text-[13px] text-gray-500 sm:mb-4 sm:text-sm"
        >
          <ol className="flex flex-wrap items-center">
            <li>
              <Link href="/" className="hover:text-red-600 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-gray-700">Tất cả bài viết</li>
          </ol>
        </nav>

        <div className="hidden xl:block">
          <SideFloatBanners />
        </div>

        <section className="rounded-2xl bg-white p-3 shadow-sm sm:p-4 md:p-5">
          <header>
            <h1 className="text-[30px] font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
              Tin tức công nghệ mới nhất
            </h1>
            <p className="mt-2 text-[15px] leading-6 text-gray-600 sm:text-base">
              Tổng hợp các bài viết nổi bật về công nghệ, phần cứng, thiết bị
              gaming, xu hướng mới và kinh nghiệm chọn mua sản phẩm phù hợp cho
              học tập, làm việc và giải trí.
            </p>
          </header>

          <div className="mt-4 overflow-hidden rounded-2xl">
            <NewsBanner />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 lg:mt-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-6">
            <div className="min-w-0">
              <section aria-labelledby="featured-news-heading">
                <h2
                  id="featured-news-heading"
                  className="mb-3 text-[22px] font-bold text-gray-900 sm:mb-4 sm:text-2xl"
                >
                  Bài viết nổi bật
                </h2>
                <FeaturedNewsGrid articles={featured} />
              </section>

              <section aria-labelledby="all-news-heading" className="mt-5 sm:mt-6">
                <h2
                  id="all-news-heading"
                  className="mb-3 text-[22px] font-bold text-gray-900 sm:mb-4 sm:text-2xl"
                >
                  Tất cả bài viết
                </h2>
                <NewsList articles={normalArticles} initialCount={7} step={4} />
              </section>
            </div>

            <aside className="min-w-0">
              <NewsSidebar />
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}