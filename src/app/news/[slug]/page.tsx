import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";
import NewsDetailSidebar from "@/components/news/NewsDetailSidebar";
import SideFloatBanners from "@/components/home/SideFloatBanners";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) return notFound();

  const relatedArticles = newsArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  const latestArticles = newsArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-[#f3f3f3] py-6">
      <SideFloatBanners />

      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/news" className="hover:text-red-600">
            Tin tức
          </Link>
          <span className="mx-2">/</span>
          <span className="line-clamp-1">{article.title}</span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="rounded-md bg-white p-5 shadow-sm md:p-6">
              {article.category && (
                <div className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                  {article.category}
                </div>
              )}

              <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
                {article.title}
              </h1>

              <div className="mt-3 text-sm text-gray-500">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.author}</span>
              </div>

              <div className="relative mt-6 h-[240px] w-full overflow-hidden rounded-md bg-gray-100 md:h-[460px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {article.excerpt && (
                <p className="mt-5 text-[17px] leading-8 text-gray-700">
                  {article.excerpt}
                </p>
              )}

              <div className="mt-6 whitespace-pre-line text-[16px] leading-8 text-gray-800">
                {article.content}
              </div>
            </div>

            <div className="mt-6 rounded-md bg-white p-5 shadow-sm md:p-6">
              <h2 className="text-xl font-bold text-gray-900">Bài viết liên quan</h2>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="flex gap-3 rounded-md border p-3 transition hover:border-red-300 hover:shadow-sm"
                  >
                    <div className="relative h-[86px] w-[130px] shrink-0 overflow-hidden rounded bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-gray-900">
                        {item.title}
                      </h3>
                      <div className="mt-2 text-xs text-gray-500">{item.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NewsDetailSidebar latestArticles={latestArticles} />
        </div>
      </div>
    </main>
  );
}