"use client";

import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import {
  bestSellerSlugs,
  hotDealTabs,
  hotDealsViewMoreLinks,
  over30Slugs,
  under25Slugs,
  under30Slugs,
} from "@/data/home/hotDeals";
import type { Product } from "@/types/product";

type Props = {
  products: Product[];
  hideViewMore?: boolean;
};

function formatLabel(label: string) {
  return label.split("\n").map((line, idx) => (
    <span key={idx} className="block leading-tight">
      {line}
    </span>
  ));
}

function mapProductsBySlugs(products: Product[], slugs: string[]) {
  const productMap = new Map(products.map((item) => [item.slug, item]));
  return slugs.map((slug) => productMap.get(slug)).filter(Boolean) as Product[];
}

function HeroBanner() {
  return (
    <div className="relative h-[851px] w-full bg-black">
      <Image
        src="/images/hotdeals.png"
        alt="Hot Deals Banner"
        fill
        className="object-cover"
      />
    </div>
  );
}

function TopTabs() {
  return (
    <div className="sticky top-18 z-15 mx-auto flex w-full flex-wrap items-center justify-center gap-3 bg-black px-4 py-2">
      <div className="rounded-2xl border border-zinc-600 bg-gradient-to-b from-zinc-500 to-zinc-800 px-5 py-3 text-center text-white shadow-lg">
        <div className="text-lg font-black leading-none md:text-xl">VOUCHER</div>
        <div className="mt-1 text-2xl font-black leading-none sm:text-3xl">
          500K
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-wide text-zinc-200 md:text-xs">
          Khi nâng cấp RAM / SSD
        </div>
      </div>

      {hotDealTabs.map((tab) => (
        <a
          key={tab.key}
          href={`#${tab.sectionId}`}
          className="min-w-[170px] rounded-2xl border border-cyan-900 bg-[radial-gradient(circle_at_top,rgba(70,170,220,0.35),rgba(10,18,30,0.95))] px-5 py-3 text-center font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(34,211,238,0.28)]"
        >
          <div className="text-sm leading-5 md:text-[15px]">
            {formatLabel(tab.label)}
          </div>
        </a>
      ))}
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mx-auto mb-6 flex justify-center px-4">
      <div className="rounded-[24px] border border-zinc-500 bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-800 px-8 py-4 text-center shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="text-2xl font-extrabold uppercase tracking-wide text-white md:text-4xl">
          {title}
        </div>
      </div>
    </div>
  );
}

function ProductSection({
  id,
  title,
  products,
  viewMoreHref,
  hideViewMore = false,
}: {
  id: string;
  title: string;
  products: Product[];
  viewMoreHref: string;
  hideViewMore?: boolean;
}) {
  if (!products.length) return null;

  return (
    <section id={id} className="scroll-mt-24 py-8 md:py-10">
      <SectionTitle title={title} />

      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="min-w-0">
            <ProductCard p={product} />
          </div>
        ))}
      </div>

      {!hideViewMore && (
        <div className="mt-6 mb-12 flex justify-center">
          <Link
            href={viewMoreHref}
            className="rounded-2xl border border-cyan-900 bg-[radial-gradient(circle_at_top,rgba(70,170,220,0.35),rgba(10,18,30,0.95))] px-7 py-2.5 text-lg font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(34,211,238,0.28)]"
          >
            Xem Thêm
          </Link>
        </div>
      )}
    </section>
  );
}
export default function HotDealsGamingPage({
  products,
  hideViewMore = false,
}: Props) {
  const bestSellerProducts = mapProductsBySlugs(products, bestSellerSlugs);
  const under25Products = mapProductsBySlugs(products, under25Slugs);
  const under30Products = mapProductsBySlugs(products, under30Slugs);
  const over30Products = mapProductsBySlugs(products, over30Slugs);

  return (
    <div className="bg-black text-white">
      <div
        className="min-h-screen bg-cover bg-top bg-no-repeat"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.82), rgba(0,0,0,.92))",
        }}
      >
        <HeroBanner />
        <TopTabs />

        <ProductSection
        id="best-seller"
        title="Best Seller"
        products={bestSellerProducts}
        viewMoreHref={hotDealsViewMoreLinks.bestSeller}
        hideViewMore={hideViewMore}
      />

      <ProductSection
        id="under-25"
        title="Dưới 25 triệu"
        products={under25Products}
        viewMoreHref={hotDealsViewMoreLinks.under25}
        hideViewMore={hideViewMore}
      />

      <ProductSection
        id="under-30"
        title="Dưới 30 triệu"
        products={under30Products}
        viewMoreHref={hotDealsViewMoreLinks.under30}
        hideViewMore={hideViewMore}
      />

      <ProductSection
        id="over-30"
        title="Trên 30 triệu"
        products={over30Products}
        viewMoreHref={hotDealsViewMoreLinks.over30}
        hideViewMore={hideViewMore}
      />
      </div>
    </div>
  );
}