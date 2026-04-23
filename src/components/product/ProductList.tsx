"use client";

import { useRef } from "react";
import { Product } from "@/types/product";
import ProductCard from "../ProductCard";
import { motion } from "framer-motion";

export function ProductList({
  products,
  category,
}: {
  products: Product[];
  category: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = products
    .filter(
      (p) =>
        p.category?.toLowerCase().trim() ===
        category.toLowerCase().trim()
    )
    .slice(0, 10);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative mt-1 lg:mt-3">
      
      {/* 🔥 Nút trái */}
      <button
        onClick={scrollLeft}
        className="hidden lg:block absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow p-2 rounded-full opacity-30 hover:opacity-100"
      >
        ◀
      </button>

      {/* 🔥 Nút phải */}
      <button
        onClick={scrollRight}
        className="hidden lg:block absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow p-2 rounded-full opacity-30 hover:opacity-100"
      >
        ▶
      </button>

   <div
        ref={scrollRef}
        className="flex gap-2 lg:gap-3 overflow-x-auto scroll-smooth snap-x scrollbar-hide px-8"
      >
        {filtered.map((p) => (
          <div
            key={p.id}
            className="min-w-[220px] snap-start"
          >
            <ProductCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductGrid({ products } : { products : Product[]}){
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p, index) => (
            <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.05,
            }}
            >
            <ProductCard p={p} />
            </motion.div>
        ))}
        </div>
    )
}