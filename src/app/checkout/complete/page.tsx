"use client";

import Link from "next/link";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";

export default function CheckoutCompletePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] py-6">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mx-auto max-w-[760px] rounded-md bg-white p-5 shadow-sm">
          <CheckoutStepper current={4} />

          <div className="py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
              ✓
            </div>

            <h1 className="mt-5 text-[28px] font-bold text-[#222]">
              Đặt hàng thành công
            </h1>

            <p className="mt-3 text-[15px] text-gray-600">
              Cảm ơn bạn đã đặt hàng tại GEARVN.
            </p>

            <p className="mt-2 text-[15px] text-gray-600">
              Nhân viên sẽ sớm liên hệ để xác nhận đơn hàng của bạn.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex h-[46px] min-w-[180px] items-center justify-center rounded bg-red-600 px-6 text-sm font-bold text-white hover:bg-red-700"
              >
                VỀ TRANG CHỦ
              </Link>

              <Link
                href="/account/orders"
                className="inline-flex h-[46px] min-w-[180px] items-center justify-center rounded border border-gray-300 bg-white px-6 text-sm font-bold text-gray-700 hover:bg-gray-50"
                >
                XEM ĐƠN HÀNG
                </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}