"use client";

import Image from "next/image";
import Link from "next/link";
import { gameTopics, hotTopics, newsArticles, tipsArticles } from "@/data/news";

function TopicSection({
  title,
  items,
  tabWidth,
}: {
  title: string;
  items: { name: string; image: string }[];
  tabWidth: string;
}) {
  return (
    <section className="relative mt-[50px] rounded-[2px] bg-[#fff1f1] p-[8px] pt-[28px]">
      <div className="absolute left-[1px] top-[-50px] z-10">
        <div
        className={`relative flex h-[54px] ${tabWidth} items-center rounded-tl-[22px] rounded-tr-[22px] rounded-br-[10px] bg-[#ef2b2d] pl-5 pr-12`}>
          <h3 className="text-[17px] font-normal uppercase tracking-[0.02em] text-white">
            {title}
          </h3>

          <div className="absolute -right-7 top-[35%] h-[70px] w-[70px] -translate-y-1/2">
            <Image
              src="/news/topics/fire.png"
              alt="Fire"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-4 gap-y-5 px-2 pb-2 pt-1">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col items-center text-center">
            <div className="relative h-[74px] w-[74px] overflow-hidden rounded-[6px] bg-white">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-2 text-[13px] font-medium leading-[1.25] text-[#1d2433]">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NewsSidebar() {
  const latestArticles = newsArticles.slice(0, 5);

  return (
    <aside className="space-y-4">
      <div className="space-y-18">
        <TopicSection
          title="Chủ đề hot"
          items={hotTopics}
          tabWidth="w-[180px]"
        />

        <TopicSection
          title="Thể loại game hot"
          items={gameTopics}
          tabWidth="w-[250px]"
        />
      </div>

      <section className="rounded-md border bg-white p-4">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-[18px] font-extrabold uppercase text-sky-700">Thủ thuật</h3>
          <span>⚡</span>
        </div>

        <div className="space-y-3">
          {tipsArticles.map((item) => (
            <article key={item.id} className="flex gap-3">
              <Link
                href={`/news/${item.slug}`}
                className="relative block h-[68px] w-[100px] shrink-0 overflow-hidden rounded border bg-gray-100"
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

      <section className="rounded-md border bg-white p-4">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-[18px] font-extrabold uppercase text-indigo-700">Bài mới nhất</h3>
          <span>📰</span>
        </div>

        <div className="space-y-3">
          {latestArticles.map((item) => (
            <article key={item.id} className="flex gap-3">
              <Link
                href={`/news/${item.slug}`}
                className="relative block h-[64px] w-[96px] shrink-0 overflow-hidden rounded border bg-gray-100"
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