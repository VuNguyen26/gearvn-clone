"use client";

type Props = {
  current: 1 | 2 | 3 | 4;
};

const steps = [
  { id: 1, label: "Giỏ hàng" },
  { id: 2, label: "Thông tin đặt hàng" },
  { id: 3, label: "Thanh toán" },
  { id: 4, label: "Hoàn tất" },
] as const;

export default function CheckoutStepper({ current }: Props) {
  return (
    <div className="rounded-md bg-[#fff1f1] px-6 py-5">
      <div className="grid grid-cols-4">
        {steps.map((step, index) => {
          const active = step.id <= current;
          const isCurrent = step.id === current;

          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${
                  active
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-gray-400 bg-white text-gray-500"
                }`}
              >
                {step.id}
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-4 h-px w-full border-t border-dashed border-gray-400" />
              )}

              <div
                className={`mt-3 text-[15px] ${
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