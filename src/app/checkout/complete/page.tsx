"use client";

import Link from "next/link";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";

export default function CheckoutCompletePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] py-3 sm:py-4 md:py-6">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-5">
        <div className="mx-auto max-w-[760px] rounded-2xl bg-white p-4 shadow-sm sm:p-5 md:p-6">
          <CheckoutStepper current={4} />

          <div className="py-10 text-center sm:py-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600 sm:h-18 sm:w-18">
              ✓
            </div>

            <h1 className="mt-5 text-[26px] font-bold text-[#222] sm:text-[28px]">
              Đặt hàng thành công
            </h1>

            <p className="mt-3 text-[15px] leading-6 text-gray-600">
              Cảm ơn bạn đã đặt hàng tại GEARVN.
            </p>

            <p className="mt-2 text-[15px] leading-6 text-gray-600">
              Nhân viên sẽ sớm liên hệ để xác nhận đơn hàng của bạn.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex h-[48px] w-full items-center justify-center rounded-2xl bg-red-600 px-6 text-sm font-bold text-white transition hover:bg-red-700 sm:h-[46px] sm:min-w-[180px] sm:w-auto"
              >
                VỀ TRANG CHỦ
              </Link>

              <Link
                href="/account/orders"
                className="inline-flex h-[48px] w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 text-sm font-bold text-gray-700 transition hover:bg-gray-50 sm:h-[46px] sm:min-w-[180px] sm:w-auto"
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