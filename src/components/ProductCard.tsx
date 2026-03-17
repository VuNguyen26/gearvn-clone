"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { vnd } from "@/lib/money";

export default function ProductCard({ p }: { p: Product }) {
  const finalPrice = p.salePrice ?? p.price;

  const specs = [
    { label: "CPU", value: p.specs?.cpu },
    { label: "RAM", value: p.specs?.ram },
    { label: "Storage", value: p.specs?.storage },
  ].filter((item) => item.value);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >
      <Link href={`/product/${p.slug}`} className="block">
        <div className="relative flex h-[220px] items-center justify-center bg-white p-4">
          <Image
            src={p.images[0]}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-4 pb-4">
        <Link href={`/product/${p.slug}`} className="block">
          <h3 className="min-h-[48px] line-clamp-2 text-[15px] font-semibold leading-6 text-black">
            {p.name}
          </h3>
        </Link>

        <div className="mt-3 rounded-xl bg-gray-100 p-3">
          <div className="space-y-2">
            {specs.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 text-xs"
              >
                <span className="font-medium text-gray-500">{item.label}</span>
                <span className="line-clamp-1 text-right font-semibold text-gray-800">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <div className="text-lg font-bold text-red-600">{vnd(finalPrice)}</div>

          {p.salePrice ? (
            <div className="mt-1 text-sm text-gray-400 line-through">
              {vnd(p.price)}
            </div>
          ) : (
            <div className="mt-1 text-sm text-transparent line-through">
              placeholder
            </div>
          )}
        </div>

        <div className="mt-3 text-xs text-gray-500">
          Còn lại: <span className="font-medium text-black">{p.stock}</span>
        </div>
      </div>
    </motion.div>
  );
}