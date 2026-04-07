"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import { useCart } from "@/store/cart";
import { vnd } from "@/lib/money";
import SideFloatBanners from "@/components/home/SideFloatBanners";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const remove = useCart((s) => s.remove);
  const setQty = useCart((s) => s.setQty);
  const total = useCart((s) => s.total());
  const clear = useCart((s) => s.clear);

  return (
    <main className="min-h-screen bg-[#f3f3f3] py-3 sm:py-4 md:py-6">
      <div className="hidden xl:block">
        <SideFloatBanners />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-5">
        <div className="mx-auto max-w-[680px]">
          <Link
            href="/"
            className="mb-3 inline-block text-[13px] text-sky-600 hover:underline sm:mb-4 sm:text-sm"
          >
            &lt; Mua thêm sản phẩm khác
          </Link>

          <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-5 md:p-6">
            <CheckoutStepper current={1} />

            {items.length === 0 ? (
              <div className="py-10 text-center">
                <h1 className="text-xl font-bold text-gray-900">Giỏ hàng</h1>
                <p className="mt-2 text-sm text-gray-600">
                  Chưa có sản phẩm nào.
                </p>

                <Link
                  href="/"
                  className="mt-4 inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  Mua sắm ngay
                </Link>
              </div>
            ) : (
              <>
                <div className="mt-5 space-y-5">
                  {items.map((i) => (
                    <div
                      key={i.productId}
                      className="border-b pb-5 last:border-b-0"
                    >
                      <div className="flex gap-3 sm:gap-4">
                        <div className="flex flex-col items-center">
                          <Link
                            href={`/product/${i.slug}`}
                            className="relative h-[90px] w-[90px] overflow-hidden rounded-xl border bg-white sm:h-[110px] sm:w-[110px]"
                          >
                            <Image
                              src={i.image}
                              alt={i.name}
                              fill
                              sizes="110px"
                              className="object-contain"
                            />
                          </Link>

                          <button
                            type="button"
                            onClick={() => remove(i.productId)}
                            className="mt-2 flex items-center gap-1 text-[13px] text-gray-500 hover:text-red-600"
                          >
                            <Trash2 size={14} />
                            Xóa
                          </button>
                        </div>

                        <div className="flex flex-1 flex-col">
                          <Link
                            href={`/product/${i.slug}`}
                            className="line-clamp-2 text-[15px] font-semibold text-gray-900 hover:text-red-600 sm:text-[16px]"
                          >
                            {i.name}
                          </Link>

                          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="text-[17px] font-bold text-red-600 sm:text-[18px]">
                              {vnd(i.price)}
                            </div>

                            <div>
                              <div className="inline-flex h-9 items-center overflow-hidden rounded-xl border">
                                <button
                                  type="button"
                                  onClick={() => setQty(i.productId, i.qty - 1)}
                                  disabled={i.qty <= 1}
                                  className="flex h-9 w-9 items-center justify-center border-r disabled:opacity-50"
                                  aria-label="Giảm số lượng"
                                  title="Giảm số lượng"
                                >
                                  -
                                </button>

                                <input
                                  type="number"
                                  min={1}
                                  max={i.maxQty}
                                  value={i.qty}
                                  aria-label={`Số lượng của ${i.name}`}
                                  title={`Số lượng của ${i.name}`}
                                  onChange={(e) => {
                                    const n = Number(e.target.value);
                                    setQty(
                                      i.productId,
                                      Number.isFinite(n) ? n : 1
                                    );
                                  }}
                                  className="h-9 w-12 border-0 text-center text-sm outline-none"
                                />

                                <button
                                  type="button"
                                  onClick={() => setQty(i.productId, i.qty + 1)}
                                  disabled={i.qty >= i.maxQty}
                                  className="flex h-9 w-9 items-center justify-center border-l disabled:opacity-50"
                                  aria-label="Tăng số lượng"
                                  title="Tăng số lượng"
                                >
                                  +
                                </button>
                              </div>

                              <div className="mt-1 text-xs text-gray-400">
                                Tối đa: {i.maxQty}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    className="rounded-2xl border px-4 py-2 text-[#1d72f3] hover:bg-gray-50"
                  >
                    Sử dụng mã giảm giá
                  </button>

                  <button
                    type="button"
                    onClick={clear}
                    className="rounded-2xl border px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Xoá tất cả
                  </button>
                </div>

                <div className="mt-7 border-t pt-5">
                  <div className="flex items-center justify-between text-[17px] font-semibold sm:text-[18px]">
                    <span>Tổng tiền:</span>
                    <span className="text-[20px] font-bold text-red-600">
                      {vnd(total)}
                    </span>
                  </div>

                  <Link
                    href="/checkout/info"
                    className="mt-4 flex h-[52px] w-full items-center justify-center rounded-2xl bg-red-600 text-[16px] font-bold text-white hover:bg-red-700 sm:h-[54px] sm:text-lg"
                  >
                    ĐẶT HÀNG NGAY
                  </Link>

                  <p className="mt-3 text-center text-xs text-gray-500">
                    Order lưu localStorage, chưa cần backend thật.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}