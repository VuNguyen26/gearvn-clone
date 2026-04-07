import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/types/news";

type Props = {
  latestArticles: NewsArticle[];
};

export default function NewsDetailSidebar({ latestArticles }: Props) {
  return (
    <aside className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-[13px] font-extrabold uppercase tracking-wide text-indigo-700 sm:text-sm">
            Bài mới nhất
          </h3>
          <span>📰</span>
        </div>

        <div className="space-y-3">
          {latestArticles.map((item) => (
            <article key={item.id} className="flex gap-3">
              <Link
                href={`/news/${item.slug}`}
                className="relative block h-[78px] w-[116px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 sm:h-[82px] sm:w-[120px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="116px"
                />
              </Link>

              <div className="min-w-0 flex-1">
                <Link href={`/news/${item.slug}`}>
                  <h4 className="line-clamp-2 text-[14px] font-semibold leading-snug text-gray-800 transition hover:text-red-600 sm:text-[15px]">
                    {item.title}
                  </h4>
                </Link>
                <div className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                  {item.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}