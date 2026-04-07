import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/types/news";

type Props = {
  articles: NewsArticle[];
};

function MetaLine({ date, author }: { date: string; author: string }) {
  return (
    <div className="mt-2 text-[12px] text-gray-500 sm:text-xs">
      <span>{date}</span>
      <span className="mx-1">•</span>
      <span>{author}</span>
    </div>
  );
}

export default function FeaturedNewsGrid({ articles }: Props) {
  if (!articles.length) return null;

  const [main, ...side] = articles;

  return (
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
      <article className="self-start overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-sm">
        <Link href={`/news/${main.slug}`} className="block">
          <div className="relative h-[220px] w-full bg-gray-100 sm:h-[280px] md:h-[380px] lg:h-[440px]">
            <Image
              src={main.image}
              alt={main.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-3 sm:p-4 md:p-5">
            <h2 className="line-clamp-2 text-[22px] font-bold leading-snug text-gray-900 transition hover:text-red-600 sm:text-[24px] md:text-[26px]">
              {main.title}
            </h2>

            <MetaLine date={main.date} author={main.author} />

            {main.excerpt && (
              <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
                {main.excerpt}
              </p>
            )}
          </div>
        </Link>
      </article>

      <div className="space-y-4">
        {side.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-sm"
          >
            <Link href={`/news/${item.slug}`} className="block">
              <div className="relative h-[190px] w-full bg-gray-100 sm:h-[200px] lg:h-[170px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="line-clamp-2 text-[17px] font-bold leading-snug text-gray-900 transition hover:text-red-600 sm:text-[18px]">
                  {item.title}
                </h3>

                <MetaLine date={item.date} author={item.author} />

                {item.excerpt && (
                  <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-gray-600">
                    {item.excerpt}
                  </p>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}