import type { Metadata } from "next";
import Link from "next/link";
import { newsArticles } from "@/data/news";
import NewsBanner from "@/components/news/NewsBanner";
import FeaturedNewsGrid from "@/components/news/FeaturedNewsGrid";
import NewsList from "@/components/news/NewsList";
import NewsSidebar from "@/components/news/NewsSidebar";

const SITE_URL = "https://your-domain.com";

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
    <main className="min-h-screen bg-[#f3f3f3] py-4">
      <div className="mx-auto max-w-[1200px] px-4">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 text-sm text-gray-500"
        >
          <ol className="flex flex-wrap items-center">
            <li>
              <Link href="/" className="hover:text-red-600">
                Trang chủ
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-gray-700">Tất cả bài viết</li>
          </ol>
        </nav>

        <section className="rounded-md bg-white p-4 shadow-sm">
          <header>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Tin tức công nghệ mới nhất
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
              Tổng hợp các bài viết nổi bật về công nghệ, phần cứng, thiết bị
              gaming, xu hướng mới và kinh nghiệm chọn mua sản phẩm phù hợp cho
              học tập, làm việc và giải trí.
            </p>
          </header>

          <div className="mt-4">
            <NewsBanner />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
            <div>
              <section aria-labelledby="featured-news-heading">
                <h2
                  id="featured-news-heading"
                  className="mb-4 text-xl font-bold text-gray-900"
                >
                  Bài viết nổi bật
                </h2>
                <FeaturedNewsGrid articles={featured} />
              </section>

              <section aria-labelledby="all-news-heading" className="mt-6">
                <h2
                  id="all-news-heading"
                  className="mb-4 text-xl font-bold text-gray-900"
                >
                  Tất cả bài viết
                </h2>
                <NewsList articles={normalArticles} initialCount={7} step={4} />
              </section>
            </div>

            <aside>
              <NewsSidebar />
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}