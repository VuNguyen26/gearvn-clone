import Link from "next/link";
import { newsArticles } from "@/data/news";
import NewsBanner from "@/components/news/NewsBanner";
import FeaturedNewsGrid from "@/components/news/FeaturedNewsGrid";
import NewsList from "@/components/news/NewsList";
import NewsSidebar from "@/components/news/NewsSidebar";
import SideFloatBanners from "@/components/home/SideFloatBanners";

export default function NewsPage() {
  const featured = newsArticles.filter((item) => item.featured);
  const normalArticles = newsArticles.filter((item) => !item.featured);

  return (
    <main className="min-h-screen bg-[#f3f3f3] py-4">
      <SideFloatBanners />

      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <span>Tất cả bài viết</span>
        </div>

        <div className="rounded-md bg-white p-4 shadow-sm">
          <NewsBanner />

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
            <div>
              <FeaturedNewsGrid articles={featured} />
              <div className="mt-6">
                <NewsList articles={normalArticles} initialCount={7} step={4} />
              </div>
            </div>

            <NewsSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}