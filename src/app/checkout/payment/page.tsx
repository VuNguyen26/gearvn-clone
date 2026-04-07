"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import { useCart } from "@/store/cart";
import { useCheckout } from "@/store/checkout";
import { vnd } from "@/lib/money";
import { useOrders } from "@/store/orders";

export default function PaymentPage() {
  const router = useRouter();
  const addOrder = useOrders((s) => s.addOrder);

  const items = useCart((s) => s.items);
  const total = useCart((s) => s.total());
  const clearCart = useCart((s) => s.clear);

  const info = useCheckout((s) => s.info);

  const handleOrder = () => {
    if (!info) {
      alert("Không tìm thấy thông tin đặt hàng.");
      router.push("/checkout/info");
      return;
    }

    if (items.length === 0) {
      alert("Giỏ hàng đang trống.");
      router.push("/cart");
      return;
    }

    const now = new Date().toISOString();
    const orderId = `order_${Date.now()}`;
    const orderCode = `GVN${Date.now().toString().slice(-8)}`;

    addOrder({
      id: orderId,
      code: orderCode,
      createdAt: now,
      updatedAt: now,
      status: "new",
      cancelReason: null,
      customer: info,
      items,
      subtotal: total,
      shippingFee: 0,
      total,
    });

    alert("Đặt hàng thành công");
    clearCart();
    router.push("/checkout/complete");
  };

  if (!info) {
    return (
      <main className="min-h-screen bg-[#f3f3f3] py-6">
        <div className="mx-auto w-full max-w-[760px] px-3">
          <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
            <p>Không có dữ liệu thanh toán.</p>
            <Link href="/checkout/info" className="mt-4 inline-block text-sky-600">
              Quay lại nhập thông tin
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#f3f3f3] py-6">
        <div className="mx-auto w-full max-w-[760px] px-3">
          <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
            <p>Giỏ hàng đang trống.</p>
            <Link href="/cart" className="mt-4 inline-block text-sky-600">
              Quay lại giỏ hàng
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3f3f3] py-3 sm:py-4 md:py-6">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-5">
        <Link
          href="/checkout/info"
          className="mb-3 inline-block text-[13px] text-sky-600 hover:underline sm:text-sm"
        >
          &lt; Trở về nhập thông tin
        </Link>

        <div className="mx-auto max-w-[760px] rounded-2xl bg-white p-4 shadow-sm sm:p-5 md:p-6">
          <CheckoutStepper current={3} />

          <div className="mt-5 sm:mt-6">
            <h2 className="text-[17px] font-bold sm:text-[18px]">
              Thông tin đặt hàng
            </h2>

            <div className="mt-4 space-y-4 text-[14px] sm:text-[15px]">
              {[
                ["Khách hàng:", `${info.gender} ${info.fullName}`],
                ["Số điện thoại:", info.phone],
                [
                  "Địa chỉ:",
                  `${info.address}, ${info.ward}, ${info.district}, ${info.city}`,
                ],
                ["Nhận hàng:", info.deliveryMethod === "delivery" ? "Giao tận nơi" : "Nhận tại cửa hàng"],
              ].map(([label, value], idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-semibold text-gray-600 sm:min-w-[140px]">
                    {label}
                  </span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}

              {info.note && (
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-semibold text-gray-600 sm:min-w-[140px]">
                    Ghi chú:
                  </span>
                  <span>{info.note}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-semibold sm:min-w-[140px]">
                  Tạm tính:
                </span>
                <span className="font-bold text-red-600">{vnd(total)}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-semibold sm:min-w-[140px]">
                  Phí vận chuyển:
                </span>
                <span className="font-bold text-red-600">Miễn phí</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-semibold sm:min-w-[140px]">
                  Tổng tiền:
                </span>
                <span className="text-[18px] font-bold text-red-600">
                  {vnd(total)}
                </span>
              </div>
            </div>

            <div className="mt-6 border-t pt-6">
              <h3 className="text-[17px] font-bold sm:text-[18px]">
                Hình thức thanh toán
              </h3>

              <label className="mt-4 flex items-center gap-3 text-sm sm:text-base">
                <input type="radio" checked readOnly />
                <span>Thanh toán khi nhận hàng (COD)</span>
              </label>
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex items-center justify-between text-[17px] font-semibold">
                <span>Tổng tiền:</span>
                <span className="text-[20px] font-bold text-red-600">
                  {vnd(total)}
                </span>
              </div>

              <button
                onClick={handleOrder}
                className="mt-4 h-[52px] w-full rounded-2xl bg-red-600 text-[16px] font-bold text-white hover:bg-red-700 sm:h-[54px] sm:text-lg"
              >
                THANH TOÁN NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}