import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/types/news";

type Props = {
  articles: NewsArticle[];
};

function MetaLine({ date, author }: { date: string; author: string }) {
  return (
    <div className="mt-2 text-xs text-gray-500">
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
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[1.55fr_1fr]">
      <article className="self-start overflow-hidden rounded-md border bg-white transition hover:shadow-sm">
        <Link href={`/news/${main.slug}`} className="block">
          <div className="relative h-[310px] w-full bg-gray-100 md:h-[440px]">
            <Image src={main.image} alt={main.title} fill className="object-cover" />
          </div>

          <div className="p-4">
            <h2 className="line-clamp-2 text-[26px] font-bold leading-snug text-gray-900 transition hover:text-red-600">
              {main.title}
            </h2>

            <MetaLine date={main.date} author={main.author} />

            {main.excerpt && (
              <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-gray-600">
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
            className="overflow-hidden rounded-md border bg-white transition hover:shadow-sm"
          >
            <Link href={`/news/${item.slug}`} className="block">
              <div className="relative h-[170px] w-full bg-gray-100">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>

              <div className="p-3">
                <h3 className="line-clamp-2 text-[18px] font-bold leading-snug text-gray-900 transition hover:text-red-600">
                  {item.title}
                </h3>

                <MetaLine date={item.date} author={item.author} />

                {item.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
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