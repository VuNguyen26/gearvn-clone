"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { vnd } from "@/lib/money";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const remove = useCart((s) => s.remove);
  const setQty = useCart((s) => s.setQty);
  const total = useCart((s) => s.total());
  const clear = useCart((s) => s.clear);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold">Giỏ hàng</h1>
        <p className="mt-2 text-sm text-gray-600">Chưa có sản phẩm nào.</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Mua sắm ngay
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-3">
        <h1 className="text-xl font-bold">Giỏ hàng</h1>

        {items.map((i) => (
          <div
            key={i.productId}
            className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm"
          >
            <div className="relative h-20 w-28 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={i.image}
                alt={i.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <Link
                href={`/product/${i.slug}`}
                className="font-semibold hover:underline"
              >
                {i.name}
              </Link>
              <div className="mt-1 text-sm font-bold text-red-600">
                {vnd(i.price)}
              </div>

              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => setQty(i.productId, i.qty - 1)}
                  disabled={i.qty <= 1}
                  className="h-9 w-9 rounded-xl border hover:bg-gray-50 disabled:opacity-50"
                >
                  -
                </button>

                <input
                type="number"
                min={1}
                max={i.maxQty}
                value={i.qty}
                aria-label={`Số lượng của ${i.name}`}
                onChange={(e) => {
                    const n = Number(e.target.value);
                    setQty(i.productId, Number.isFinite(n) ? n : 1);
                }}
                className="h-9 w-14 rounded-xl border text-center text-sm"
                />

                <button
                  onClick={() => setQty(i.productId, i.qty + 1)}
                  disabled={i.qty >= i.maxQty}
                  className="h-9 w-9 rounded-xl border hover:bg-gray-50 disabled:opacity-50"
                >
                  +
                </button>

                <button
                  onClick={() => remove(i.productId)}
                  className="ml-auto rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
                >
                  Xoá
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={clear}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
        >
          Xoá tất cả
        </button>
      </div>

      <div className="h-fit rounded-2xl bg-white p-5 shadow-sm">
        <div className="text-lg font-bold">Tổng thanh toán</div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span>Tạm tính</span>
          <span className="font-semibold">{vnd(total)}</span>
        </div>

        <button className="mt-4 w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:opacity-90">
          Checkout (Mock)
        </button>

        <p className="mt-3 text-xs text-gray-500">
          Order lưu localStorage (không cần backend thật) — đúng phạm vi thầy cho phép.
        </p>
      </div>
    </div>
  );
}
