"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useCart } from "@/store/cart";
import { motion, AnimatePresence } from "framer-motion";

export default function AddToCart({ product }: { product: Product }) {
  const router = useRouter();
  const add = useCart((s) => s.add);
  const [done, setDone] = useState(false);

  const handleBuyNow = () => {
    const rawUser =
      typeof window !== "undefined"
        ? localStorage.getItem("currentUser") || localStorage.getItem("user")
        : null;

    if (!rawUser) {
      alert("Vui lòng đăng nhập hoặc đăng ký để mua hàng.");
      router.push("/login");
      return;
    }

    add(product, 1);
    setDone(true);
    setTimeout(() => setDone(false), 900);

    router.push("/cart");
  };

  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={handleBuyNow}
        className="w-full rounded-xl bg-red-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:py-3 sm:text-base"
      >
        Mua Ngay
      </button>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full rounded-xl border border-green-200 bg-white px-3 py-2 text-center text-xs font-medium text-green-700 sm:w-auto sm:text-left"
          >
            Đã thêm vào giỏ hàng
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}