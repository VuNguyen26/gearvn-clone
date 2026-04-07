"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/types/news";

type Props = {
  articles: NewsArticle[];
  initialCount?: number;
  step?: number;
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

export default function NewsList({
  articles,
  initialCount = 6,
  step = 4,
}: Props) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleArticles = useMemo(
    () => articles.slice(0, visibleCount),
    [articles, visibleCount]
  );

  const hasMore = visibleCount < articles.length;

  return (
    <div className="space-y-4">
      {visibleArticles.map((item) => (
        <article
          key={item.id}
          className="flex flex-col gap-3 border-b border-gray-200 pb-4 last:border-b-0 sm:gap-4 md:flex-row"
        >
          <Link
            href={`/news/${item.slug}`}
            className="relative block h-[200px] w-full shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 transition hover:shadow-sm sm:h-[220px] md:h-[118px] md:w-[210px] md:rounded-xl"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 210px"
            />
          </Link>

          <div className="min-w-0 flex-1">
            <Link href={`/news/${item.slug}`}>
              <h3 className="line-clamp-2 text-[19px] font-semibold leading-snug text-gray-900 transition hover:text-red-600 sm:text-[20px] md:text-[18px]">
                {item.title}
              </h3>
            </Link>

            <MetaLine date={item.date} author={item.author} />

            {item.excerpt && (
              <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-gray-600 sm:text-[15px]">
                {item.excerpt}
              </p>
            )}
          </div>
        </article>
      ))}

      {hasMore && (
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + step)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Xem thêm bài viết
          </button>
        </div>
      )}
    </div>
  );
}