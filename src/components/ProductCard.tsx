"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { vnd } from "@/lib/money";

export default function ProductCard({ p }: { p: Product }) {
  const finalPrice = p.salePrice ?? p.price;

  const hasDiscount =
    typeof p.salePrice === "number" && p.salePrice < p.price;

  const discountPercent = hasDiscount
    ? Math.round(((p.price - p.salePrice!) / p.price) * 100)
    : 0;

  const specs = [
    { label: "CPU", value: p.specs?.cpu },
    { label: "RAM", value: p.specs?.ram },
    { label: "Storage", value: p.specs?.storage },
  ].filter((item) => item.value);

  const thumbnail =
    p.images && p.images.length > 0 ? p.images[0] : "/placeholder.png";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:rounded-2xl"
    >
      <Link href={`/product/${p.slug}`} className="block">
        <div className="relative h-[112px] w-full overflow-hidden bg-white sm:h-[145px] md:h-[180px]">
          <Image
            src={thumbnail}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-105 sm:p-4"
            priority={false}
          />

          {hasDiscount && (
            <span className="absolute right-2 top-2 z-10 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-bold text-white sm:right-3 sm:top-3 sm:px-3 sm:text-[11px]">
              -{discountPercent}%
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-2.5 pb-2.5 sm:px-3 sm:pb-3">
        <Link href={`/product/${p.slug}`} className="block">
          <h3 className="min-h-[40px] line-clamp-2 text-[12px] font-semibold leading-5 text-black sm:min-h-[52px] sm:text-[15px] sm:leading-6">
            {p.name}
          </h3>
        </Link>

        <div className="mt-2 rounded-lg bg-gray-100 p-2 sm:rounded-xl sm:p-3">
          <div className="space-y-1">
            {specs.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-2 text-[10px] sm:text-[13px]"
              >
                <span className="font-medium text-gray-500">{item.label}</span>
                <span className="line-clamp-1 text-right font-semibold text-gray-800">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <div className="text-[15px] font-extrabold leading-5 text-red-600 sm:text-[18px] md:text-[20px]">
            {vnd(finalPrice)}
          </div>

          {hasDiscount ? (
            <div className="mt-1 text-[11px] text-gray-400 line-through sm:text-sm">
              {vnd(p.price)}
            </div>
          ) : (
            <div className="mt-1 text-[11px] text-transparent line-through sm:text-sm">
              placeholder
            </div>
          )}
        </div>

        <div className="mt-2 text-[11px] text-gray-500 sm:text-sm">
          Còn lại: <span className="font-medium text-black">{p.stock}</span>
        </div>
      </div>
    </motion.div>
  );
}