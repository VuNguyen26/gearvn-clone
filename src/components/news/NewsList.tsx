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
    <div className="mt-2 text-xs text-gray-500">
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
          className="flex flex-col gap-3 border-b border-gray-200 pb-4 last:border-b-0 md:flex-row"
        >
          <Link
            href={`/news/${item.slug}`}
            className="relative block h-[190px] w-full shrink-0 overflow-hidden rounded-md border bg-gray-100 transition hover:shadow-sm md:h-[118px] md:w-[210px]"
          >
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </Link>

          <div className="min-w-0 flex-1">
            <Link href={`/news/${item.slug}`}>
              <h3 className="line-clamp-2 text-[18px] font-semibold leading-snug text-gray-900 transition hover:text-red-600">
                {item.title}
              </h3>
            </Link>

            <MetaLine date={item.date} author={item.author} />

            {item.excerpt && (
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
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
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Xem thêm bài viết
          </button>
        </div>
      )}
    </div>
  );
}