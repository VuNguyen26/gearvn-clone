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

    try {
        const rawCurrentUser = localStorage.getItem("currentUser");
        if (rawCurrentUser) {
        const currentUser = JSON.parse(rawCurrentUser);

        const updatedUser = {
            ...currentUser,
            fullName: info.fullName,
            phone: info.phone,
            defaultAddress: {
            city: info.city,
            district: info.district,
            ward: info.ward,
            address: info.address,
            },
        };

        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        localStorage.setItem("user", JSON.stringify(updatedUser));
        }
    } catch (error) {
        console.error("Không thể cập nhật thông tin người dùng:", error);
    }

    alert("Đặt hàng thành công");
    clearCart();
    router.push("/checkout/complete");
    };

  if (!info) {
    return (
      <main className="min-h-screen bg-[#f3f3f3] py-10">
        <div className="mx-auto max-w-[760px] rounded-md bg-white p-6 text-center">
          <p>Không có dữ liệu thanh toán.</p>
          <Link href="/checkout/info" className="mt-4 inline-block text-sky-600">
            Quay lại nhập thông tin
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#f3f3f3] py-10">
        <div className="mx-auto max-w-[760px] rounded-md bg-white p-6 text-center">
          <p>Giỏ hàng đang trống.</p>
          <Link href="/cart" className="mt-4 inline-block text-sky-600">
            Quay lại giỏ hàng
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3f3f3] py-6">
      <div className="mx-auto max-w-[1200px] px-4">
        <Link href="/checkout/info" className="mb-4 inline-block text-sm text-sky-600">
          &lt; Trở về nhập thông tin
        </Link>

        <div className="mx-auto max-w-[760px] rounded-md bg-white p-5 shadow-sm">
          <CheckoutStepper current={3} />

          <div className="mt-6">
            <h2 className="text-[18px] font-bold">Thông tin đặt hàng</h2>

            <div className="mt-4 space-y-4 text-[15px]">
              <div className="flex gap-4">
                <span className="min-w-[130px] font-semibold">Khách hàng:</span>
                <span>
                  {info.gender} {info.fullName}
                </span>
              </div>

              <div className="flex gap-4">
                <span className="min-w-[130px] font-semibold">Số điện thoại:</span>
                <span>{info.phone}</span>
              </div>

              <div className="flex gap-4">
                <span className="min-w-[130px] font-semibold">Địa chỉ nhận hàng:</span>
                <span>
                  {info.address}, {info.ward}, {info.district}, {info.city}
                </span>
              </div>

              {info.note ? (
                <div className="flex gap-4">
                  <span className="min-w-[130px] font-semibold">Ghi chú:</span>
                  <span>{info.note}</span>
                </div>
              ) : null}

              <div className="flex gap-4">
                <span className="min-w-[130px] font-semibold">Nhận hàng:</span>
                <span>
                  {info.deliveryMethod === "delivery"
                    ? "Giao hàng tận nơi"
                    : "Nhận tại cửa hàng"}
                </span>
              </div>

              <div className="flex gap-4">
                <span className="min-w-[130px] font-semibold">Tạm tính:</span>
                <span className="font-bold text-red-600">{vnd(total)}</span>
              </div>

              <div className="flex gap-4">
                <span className="min-w-[130px] font-semibold">Phí vận chuyển:</span>
                <span className="font-bold text-red-600">Miễn phí</span>
              </div>

              <div className="flex gap-4">
                <span className="min-w-[130px] font-semibold">Tổng tiền:</span>
                <span className="text-[18px] font-bold text-red-600">{vnd(total)}</span>
              </div>
            </div>

            <div className="mt-6 border-t pt-6">
              <h3 className="text-[18px] font-bold">Chọn hình thức thanh toán</h3>

              <label className="mt-4 flex items-center gap-3">
                <input type="radio" checked readOnly />
                <span>Thanh toán khi giao hàng (COD)</span>
              </label>
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="mb-2 flex justify-between">
                <span>Phí vận chuyển:</span>
                <span className="font-semibold">Miễn phí</span>
              </div>

              <div className="flex justify-between text-[18px] font-semibold">
                <span>Tổng tiền:</span>
                <span className="text-[20px] font-bold text-red-600">{vnd(total)}</span>
              </div>

              <button
                type="button"
                onClick={handleOrder}
                className="mt-5 h-[54px] w-full rounded bg-red-600 text-lg font-bold text-white hover:bg-red-700"
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