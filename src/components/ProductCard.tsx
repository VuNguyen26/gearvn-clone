"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { vnd } from "@/lib/money";
import { useCart } from "@/store/cart";

export default function ProductCard({ p }: { p: Product }) {
  const add = useCart(s => s.add);
  const price = p.salePrice ?? p.price;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border bg-white p-3 shadow-sm"
    >
      <Link href={`/product/${p.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={p.images[0]}
            alt={p.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <h3 className="mt-3 line-clamp-2 text-sm font-semibold">{p.name}</h3>

        <div className="mt-2 flex items-end gap-2">
          <div className="text-base font-bold text-red-600">{vnd(price)}</div>
          {p.salePrice && (
            <div className="text-xs text-gray-500 line-through">{vnd(p.price)}</div>
          )}
        </div>

        <p className="mt-2 line-clamp-2 text-xs text-gray-600">{p.shortDesc}</p>
      </Link>

      <button
        onClick={() => add(p, 1)}
        className="mt-3 w-full rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
      >
        Thêm vào giỏ
      </button>
    </motion.div>
  );
}
