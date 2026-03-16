"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type Props = {
  items: Product[];
};

const INITIAL_VISIBLE = 25;

export default function CategoryProductsClient({ items }: Props) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = useMemo(() => {
    return showAll ? items : items.slice(0, INITIAL_VISIBLE);
  }, [items, showAll]);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-6 text-sm text-gray-600">
        Không tìm thấy sản phẩm phù hợp.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {visibleItems.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {!showAll && items.length > INITIAL_VISIBLE && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="min-w-[340px] rounded-[10px] border border-[#2F80ED] bg-white px-6 py-3 text-[16px] font-semibold text-[#2F80ED] transition hover:bg-[#F5FAFF]"
          >
            Xem thêm sản phẩm
          </button>
        </div>
      )}
    </div>
  );
}