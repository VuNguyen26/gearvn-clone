"use client";

import {
  ShoppingBag,
  Contact,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

type Props = {
  current: 1 | 2 | 3 | 4;
};

const steps = [
  {
    id: 1,
    mobileLabel: "Giỏ hàng",
    desktopLabel: "Giỏ hàng",
    icon: ShoppingBag,
  },
  {
    id: 2,
    mobileLabel: "Đặt hàng",
    desktopLabel: "Thông tin đặt hàng",
    icon: Contact,
  },
  {
    id: 3,
    mobileLabel: "Thanh toán",
    desktopLabel: "Thanh toán",
    icon: CreditCard,
  },
  {
    id: 4,
    mobileLabel: "Hoàn tất",
    desktopLabel: "Hoàn tất",
    icon: ShieldCheck,
  },
] as const;

export default function CheckoutStepper({ current }: Props) {
  return (
    <div className="rounded-2xl bg-[#fff1f1] px-2 py-4 sm:px-4 sm:py-5">
      <div className="grid grid-cols-4">
        {steps.map((step, index) => {
          const active = step.id <= current;
          const isCurrent = step.id === current;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="relative flex min-w-0 flex-col items-center text-center"
            >
              <div
                className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border sm:h-9 sm:w-9 ${
                  active
                    ? "border-red-500 bg-white text-red-500"
                    : "border-gray-400 bg-white text-gray-500"
                }`}
              >
                <Icon size={15} strokeWidth={2.2} />
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-4 h-px w-full border-t border-dashed border-gray-400 sm:top-[18px]" />
              )}

              <div
                className={`mt-2 px-1 text-[12px] leading-4 sm:mt-3 sm:max-w-[120px] sm:text-[14px] sm:leading-5 ${
                  isCurrent ? "font-semibold text-red-600" : "text-gray-700"
                }`}
              >
                <span className="sm:hidden">{step.mobileLabel}</span>
                <span className="hidden sm:block">
                  {step.desktopLabel === "Thông tin đặt hàng" ? (
                    <>
                      Thông tin đặt
                      <br />
                      hàng
                    </>
                  ) : (
                    step.desktopLabel
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}