"use client";

import Image from "next/image";
import Link from "next/link";
import {
  gameTopics,
  hotTopics,
  newsArticles,
  tipsArticles,
} from "@/data/news";

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
    <section className="relative mt-10 rounded-2xl bg-[#fff1f1] p-3 pt-7 sm:mt-12 sm:p-4 sm:pt-8">
      <div className="absolute left-0 top-[-40px] z-10 sm:top-[-46px]">
        <div
          className={`relative flex h-[46px] ${tabWidth} items-center rounded-tl-[20px] rounded-tr-[20px] rounded-br-[10px] bg-[#ef2b2d] pl-4 pr-10 sm:h-[52px] sm:pl-5 sm:pr-12`}
        >
          <h3 className="text-[14px] font-medium uppercase tracking-[0.02em] text-white sm:text-[16px]">
            {title}
          </h3>

          <div className="absolute -right-5 top-1/2 h-[52px] w-[52px] -translate-y-1/2 sm:-right-6 sm:h-[64px] sm:w-[64px]">
            <Image
              src="/news/topics/fire.png"
              alt="Fire"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-3 gap-y-4 px-1 pt-1 sm:gap-x-4 sm:gap-y-5 sm:px-2">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col items-center text-center">
            <div className="relative h-[68px] w-[68px] overflow-hidden rounded-xl bg-white sm:h-[74px] sm:w-[74px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="74px"
              />
            </div>

            <div className="mt-2 text-[12px] font-medium leading-[1.3] text-[#1d2433] sm:text-[13px]">
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
    <aside className="space-y-5">
      <div className="space-y-10 sm:space-y-12">
        <TopicSection
          title="Chủ đề hot"
          items={hotTopics}
          tabWidth="w-[160px] sm:w-[180px]"
        />

        <TopicSection
          title="Thể loại game hot"
          items={gameTopics}
          tabWidth="w-[220px] sm:w-[250px]"
        />
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-[16px] font-extrabold uppercase text-sky-700 sm:text-[18px]">
            Thủ thuật
          </h3>
          <span>⚡</span>
        </div>

        <div className="space-y-3">
          {tipsArticles.map((item) => (
            <article key={item.id} className="flex gap-3">
              <Link
                href={`/news/${item.slug}`}
                className="relative block h-[76px] w-[116px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 sm:h-[72px] sm:w-[108px]"
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
                  <h4 className="line-clamp-2 text-[14px] font-semibold leading-snug text-gray-800 transition hover:text-red-600 sm:text-[13px]">
                    {item.title}
                  </h4>
                </Link>
                <div className="mt-1 text-[11px] text-gray-500">{item.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-[16px] font-extrabold uppercase text-indigo-700 sm:text-[18px]">
            Bài mới nhất
          </h3>
          <span>📰</span>
        </div>

        <div className="space-y-3">
          {latestArticles.map((item) => (
            <article key={item.id} className="flex gap-3">
              <Link
                href={`/news/${item.slug}`}
                className="relative block h-[76px] w-[116px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 sm:h-[70px] sm:w-[104px]"
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
                  <h4 className="line-clamp-2 text-[14px] font-semibold leading-snug text-gray-800 transition hover:text-red-600 sm:text-[13px]">
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