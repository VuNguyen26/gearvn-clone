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
    <div className="relative h-[260px] w-full bg-black sm:h-[360px] md:h-[520px] lg:h-[720px] xl:h-[851px]">
      <Image
        src="/images/hotdeals.png"
        alt="Hot Deals Banner"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

function TopTabs() {
  return (
    <div className="relative z-10 mx-auto -mt-10 w-full px-2.5 sm:-mt-12 sm:px-4 md:-mt-14">
      <div className="mx-auto max-w-[1280px] rounded-2xl bg-black/70 px-2 py-2 backdrop-blur-sm sm:px-3 sm:py-3">
        <div className="mx-auto mb-2 w-fit rounded-xl border border-zinc-600 bg-gradient-to-b from-zinc-500 to-zinc-800 px-4 py-2 text-center text-white shadow-lg sm:mb-3 sm:px-5 sm:py-3">
          <div className="text-[11px] font-black leading-none sm:text-sm">
            Voucher 500K
          </div>
          <div className="mt-1 text-[9px] uppercase tracking-wide text-zinc-200 sm:text-[10px]">
            Khi nâng cấp RAM / SSD
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
          {hotDealTabs.map((tab) => (
            <a
              key={tab.key}
              href={`#${tab.sectionId}`}
              className="flex min-h-[40px] items-center justify-center rounded-lg border border-cyan-900 bg-[radial-gradient(circle_at_top,rgba(70,170,220,0.35),rgba(10,18,30,0.95))] px-1 py-1.5 text-center font-bold text-white shadow-[0_0_12px_rgba(34,211,238,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(34,211,238,0.22)] sm:min-h-[46px] sm:rounded-xl sm:px-2 sm:py-2"
            >
              <div className="text-[9px] leading-3 sm:text-[11px] sm:leading-4">
                {formatLabel(tab.label)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mx-auto mb-4 flex justify-center px-3 sm:mb-6 sm:px-4">
      <div className="rounded-[18px] border border-zinc-500 bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-800 px-5 py-3 text-center shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:rounded-[24px] sm:px-8 sm:py-4">
        <div className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-2xl md:text-4xl">
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

  const visibleProducts = products.slice(0, 5);

  return (
    <section id={id} className="scroll-mt-24 py-6 sm:py-8 md:py-10">
      <SectionTitle title={title} />

      {/* Mobile: lướt ngang | Desktop: grid */}
      <div className="md:hidden">
        <div className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-2.5 pb-1">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="w-[160px] shrink-0 snap-start"
            >
              <ProductCard p={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:mx-auto md:max-w-[1280px] md:grid-cols-3 md:gap-3 md:px-4 lg:grid-cols-4 xl:grid-cols-5">
        {visibleProducts.map((product) => (
          <div key={product.id} className="min-w-0">
            <ProductCard p={product} />
          </div>
        ))}
      </div>

      {!hideViewMore && (
        <div className="mb-10 mt-5 flex justify-center sm:mb-12 sm:mt-6">
          <Link
            href={viewMoreHref}
            className="rounded-2xl border border-cyan-900 bg-[radial-gradient(circle_at_top,rgba(70,170,220,0.35),rgba(10,18,30,0.95))] px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(34,211,238,0.28)] sm:px-7 sm:text-lg"
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