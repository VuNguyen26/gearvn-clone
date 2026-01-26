"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/store/cart";
import { motion, AnimatePresence } from "framer-motion";

export default function AddToCart({ product }: { product: Product }) {
  const add = useCart(s => s.add);
  const [done, setDone] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => {
          add(product, 1);
          setDone(true);
          setTimeout(() => setDone(false), 900);
        }}
        className="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
      >
        Thêm vào giỏ
      </button>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border bg-white px-3 py-2 text-xs"
          >
            Đã thêm
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
