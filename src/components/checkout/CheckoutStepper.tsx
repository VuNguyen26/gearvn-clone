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
  { id: 1, label: "Giỏ hàng", icon: ShoppingBag },
  { id: 2, label: "Thông tin đặt hàng", icon: Contact },
  { id: 3, label: "Thanh toán", icon: CreditCard },
  { id: 4, label: "Hoàn tất", icon: ShieldCheck },
] as const;

export default function CheckoutStepper({ current }: Props) {
  return (
    <div className="rounded-md bg-[#fff1f1] px-6 py-5">
      <div className="grid grid-cols-4">
        {steps.map((step, index) => {
          const active = step.id <= current;
          const isCurrent = step.id === current;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className={`z-10 flex h-9 w-9 items-center justify-center rounded-full border ${
                  active
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-gray-500 bg-white text-gray-500"
                }`}
              >
                <Icon size={17} strokeWidth={2.2} />
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-[18px] h-px w-full border-t border-dashed border-gray-400" />
              )}

              <div
                className={`mt-3 max-w-[120px] text-[15px] leading-snug ${
                  isCurrent ? "font-semibold text-red-600" : "text-gray-700"
                }`}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}