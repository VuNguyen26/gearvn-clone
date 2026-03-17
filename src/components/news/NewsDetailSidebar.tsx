import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/types/news";

type Props = {
  latestArticles: NewsArticle[];
};

export default function NewsDetailSidebar({ latestArticles }: Props) {
  return (
    <aside className="space-y-4">
      <section className="rounded-md border bg-white p-4">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-sm font-extrabold uppercase text-indigo-700">Bài mới nhất</h3>
          <span>📰</span>
        </div>

        <div className="space-y-3">
          {latestArticles.map((item) => (
            <article key={item.id} className="flex gap-3">
              <Link
                href={`/news/${item.slug}`}
                className="relative block h-[70px] w-[104px] shrink-0 overflow-hidden rounded border bg-gray-100"
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </Link>

              <div className="min-w-0">
                <Link href={`/news/${item.slug}`}>
                  <h4 className="line-clamp-2 text-[13px] font-semibold leading-snug text-gray-800 transition hover:text-red-600">
                    {item.title}
                  </h4>
                </Link>
                <div className="mt-1 text-[11px] text-gray-500">{item.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}