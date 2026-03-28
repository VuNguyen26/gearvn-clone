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
    <main className="min-h-screen bg-[#f3f3f3] py-6">
      <div className="hidden xl:block">
              <SideFloatBanners />
            </div>
      <div className="mx-auto px-4">
        <div className="mx-auto max-w-[680px]">
          <Link href="/" className="mb-4 inline-block text-sm text-sky-600 hover:underline">
            &lt; Mua thêm sản phẩm khác
          </Link>

          <div className="rounded-md bg-white p-5 shadow-sm">
            <CheckoutStepper current={1} />

            {items.length === 0 ? (
              <div className="py-12 text-center">
                <h1 className="text-xl font-bold text-gray-900">Giỏ hàng</h1>
                <p className="mt-2 text-sm text-gray-600">Chưa có sản phẩm nào.</p>

                <Link
                  href="/"
                  className="mt-4 inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  Mua sắm ngay
                </Link>
              </div>
            ) : (
              <>
                <div className="mt-6 space-y-6">
                  {items.map((i) => (
                    <div key={i.productId} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <div className="flex w-[130px] shrink-0 flex-col items-center">
                          <Link
                            href={`/product/${i.slug}`}
                            className="relative h-[110px] w-[110px] overflow-hidden rounded border bg-white"
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
                            className="mt-3 inline-flex items-center gap-1.5 text-[15px] text-gray-500 transition hover:text-red-600"
                          >
                            <Trash2 size={15} strokeWidth={1.8} />
                            <span>Xóa</span>
                          </button>
                        </div>

                        <div className="flex flex-1 justify-between gap-4">
                          <div className="flex-1">
                            <Link
                              href={`/product/${i.slug}`}
                              className="block max-w-[320px] text-[18px] font-semibold leading-snug text-gray-900 hover:text-red-600"
                            >
                              {i.name}
                            </Link>
                          </div>

                          <div className="shrink-0 text-right">
                            <div className="text-[18px] font-bold text-red-600">{vnd(i.price)}</div>

                            <div className="mt-3 inline-flex items-center overflow-hidden rounded border">
                              <button
                                type="button"
                                onClick={() => setQty(i.productId, i.qty - 1)}
                                disabled={i.qty <= 1}
                                className="flex h-8 w-8 items-center justify-center border-r disabled:cursor-not-allowed disabled:opacity-50"
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
                                onChange={(e) => {
                                  const n = Number(e.target.value);
                                  setQty(i.productId, Number.isFinite(n) ? n : 1);
                                }}
                                className="h-8 w-10 border-0 text-center text-sm outline-none"
                              />

                              <button
                                type="button"
                                onClick={() => setQty(i.productId, i.qty + 1)}
                                disabled={i.qty >= i.maxQty}
                                className="flex h-8 w-8 items-center justify-center border-l disabled:cursor-not-allowed disabled:opacity-50"
                                aria-label="Tăng số lượng"
                                title="Tăng số lượng"
                              >
                                +
                              </button>
                            </div>

                            <div className="mt-2 text-xs text-gray-400">Tối đa: {i.maxQty}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="rounded border px-4 py-2 text-[#1d72f3] transition hover:bg-gray-50"
                  >
                    Sử dụng mã giảm giá
                  </button>

                  <button
                    type="button"
                    onClick={clear}
                    className="rounded border px-4 py-2 text-sm transition hover:bg-gray-50"
                  >
                    Xoá tất cả
                  </button>
                </div>

                <div className="mt-8 border-t pt-6">
                  <div className="flex items-center justify-between text-[18px] font-semibold">
                    <span>Tổng tiền:</span>
                    <span className="text-[20px] font-bold text-red-600">{vnd(total)}</span>
                  </div>

                  <Link
                    href="/checkout/info"
                    className="mt-5 flex h-[54px] w-full items-center justify-center rounded bg-red-600 text-lg font-bold text-white transition hover:bg-red-700"
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