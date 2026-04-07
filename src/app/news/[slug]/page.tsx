import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";
import NewsDetailSidebar from "@/components/news/NewsDetailSidebar";

const SITE_URL = "https://gearvn-clone-t14d.vercel.app";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Bài viết không tồn tại",
      description: "Không tìm thấy bài viết.",
    };
  }

  const description = article.excerpt || article.title;

  return {
    title: article.title,
    description,
    alternates: {
      canonical: `${SITE_URL}/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description,
      url: `${SITE_URL}/news/${article.slug}`,
      type: "article",
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt || article.title,
    image: [article.image],
    author: {
      "@type": "Person",
      name: article.author || "GEARVN Clone",
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${SITE_URL}/news/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "GEARVN Clone",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/gearvn-pc-gvn-t11-topbar.png`,
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#f3f3f3] py-3 sm:py-4 md:py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-4">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 text-[13px] text-gray-500 sm:mb-4 sm:text-sm"
        >
          <ol className="flex flex-wrap items-center">
            <li>
              <Link href="/" className="transition-colors hover:text-red-600">
                Trang chủ
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/news" className="transition-colors hover:text-red-600">
                Tin tức
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="line-clamp-1 text-gray-700">{article.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-6">
          <article className="min-w-0">
            <div className="rounded-2xl bg-white p-3 shadow-sm sm:p-4 md:p-6">
              {article.category && (
                <div className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                  {article.category}
                </div>
              )}

              <h1 className="mt-3 text-[28px] font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
                {article.title}
              </h1>

              <div className="mt-3 text-[13px] text-gray-500 sm:text-sm">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.author}</span>
              </div>

              <div className="relative mt-5 h-[220px] w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-[260px] md:mt-6 md:h-[460px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 100vw, 900px"
                />
              </div>

              {article.excerpt && (
                <p className="mt-4 text-[15px] leading-7 text-gray-700 sm:mt-5 sm:text-[17px] sm:leading-8">
                  {article.excerpt}
                </p>
              )}

              <div className="mt-5 whitespace-pre-line text-[15px] leading-7 text-gray-800 sm:mt-6 sm:text-[16px] sm:leading-8">
                {article.content}
              </div>
            </div>

            <section className="mt-5 rounded-2xl bg-white p-3 shadow-sm sm:mt-6 sm:p-4 md:p-6">
              <h2 className="text-[22px] font-bold text-gray-900 sm:text-2xl">
                Bài viết liên quan
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="flex gap-3 rounded-2xl border border-gray-200 p-3 transition hover:border-red-300 hover:shadow-sm"
                  >
                    <div className="relative h-[86px] w-[130px] shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="130px"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-gray-900">
                        {item.title}
                      </h3>
                      <div className="mt-2 text-xs text-gray-500">
                        {item.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <aside className="min-w-0">
            <NewsDetailSidebar latestArticles={latestArticles} />
          </aside>
        </div>
      </div>
    </main>
  );
}