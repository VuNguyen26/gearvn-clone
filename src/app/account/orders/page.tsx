"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useOrders, type OrderStatus } from "@/store/orders";
import { vnd } from "@/lib/money";

type TabKey = "all" | OrderStatus;

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "TẤT CẢ" },
  { key: "new", label: "MỚI" },
  { key: "processing", label: "ĐANG XỬ LÝ" },
  { key: "shipping", label: "ĐANG VẬN CHUYỂN" },
  { key: "completed", label: "HOÀN THÀNH" },
  { key: "cancelled", label: "HỦY" },
];

const cancelReasons = [
  "Tôi muốn thay đổi sản phẩm trong đơn hàng",
  "Tôi đặt nhầm sản phẩm / số lượng",
  "Tôi muốn thay đổi địa chỉ nhận hàng",
  "Thời gian giao hàng quá lâu",
  "Tìm được giá tốt hơn ở nơi khác",
  "Không còn nhu cầu mua nữa",
  "Lý do khác",
];

function getStatusLabel(status: OrderStatus) {
  switch (status) {
    case "new":
      return "Mới";
    case "processing":
      return "Đang xử lý";
    case "shipping":
      return "Đang vận chuyển";
    case "completed":
      return "Hoàn thành";
    case "cancelled":
      return "Đã hủy";
    default:
      return status;
  }
}

function getStatusClass(status: OrderStatus) {
  switch (status) {
    case "new":
      return "bg-blue-50 text-blue-600 border border-blue-200";
    case "processing":
      return "bg-yellow-50 text-yellow-700 border border-yellow-200";
    case "shipping":
      return "bg-purple-50 text-purple-700 border border-purple-200";
    case "completed":
      return "bg-green-50 text-green-700 border border-green-200";
    case "cancelled":
      return "bg-red-50 text-red-600 border border-red-200";
    default:
      return "bg-gray-50 text-gray-600 border border-gray-200";
  }
}

export default function AccountOrdersPage() {
  const orders = useOrders((s) => s.orders);
  const cancelOrder = useOrders((s) => s.cancelOrder);

  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [keywordInput, setKeywordInput] = useState("");
  const [keyword, setKeyword] = useState("");

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchTab = activeTab === "all" ? true : order.status === activeTab;
      const matchKeyword = keyword.trim()
        ? order.code.toLowerCase().includes(keyword.trim().toLowerCase())
        : true;

      return matchTab && matchKeyword;
    });
  }, [orders, activeTab, keyword]);

  const handleSearch = () => {
    setKeyword(keywordInput);
  };

  const openCancelModal = (orderId: string) => {
    setSelectedOrderId(orderId);
    setSelectedReason("");
    setCustomReason("");
    setCancelModalOpen(true);
  };

  const closeCancelModal = () => {
    setCancelModalOpen(false);
    setSelectedOrderId(null);
    setSelectedReason("");
    setCustomReason("");
  };

  const handleConfirmCancel = () => {
    if (!selectedOrderId) return;

    let finalReason = selectedReason;

    if (!selectedReason) {
      alert("Vui lòng chọn lý do hủy đơn.");
      return;
    }

    if (selectedReason === "Lý do khác") {
      if (!customReason.trim()) {
        alert("Vui lòng nhập lý do hủy đơn.");
        return;
      }
      finalReason = customReason.trim();
    }

    cancelOrder(selectedOrderId, finalReason);
    closeCancelModal();
  };

  return (
    <>
      <div className="px-6 py-6">
        <h1 className="text-[28px] font-bold text-[#0f2b57]">Quản lý đơn hàng</h1>

        <div className="mt-8 border-b border-[#d9dde4]">
          <div className="flex flex-wrap gap-x-14 gap-y-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative pb-4 text-[18px] font-semibold tracking-[0.2px] ${
                    isActive ? "text-[#0f2b57]" : "text-[#274163]"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-[-1px] left-0 h-[4px] w-[88px] bg-[#ff1f1f]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center rounded border border-[#d4dbe5] bg-white">
          <div className="flex h-[52px] flex-1 items-center gap-3 px-5">
            <Search className="h-5 w-5 text-[#5f6b7a]" />
            <input
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder="Tìm đơn hàng theo Mã đơn hàng"
              className="h-full w-full bg-transparent text-[17px] text-[#0f2b57] outline-none placeholder:text-[#7a8697]"
            />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="h-[52px] border-l border-[#d4dbe5] px-7 text-[17px] font-medium text-[#2b73ff] hover:underline"
          >
            Tìm đơn hàng
          </button>
        </div>

        <div className="mt-5 min-h-[500px] rounded-sm bg-[#f7f8fb] p-4">
          {filteredOrders.length === 0 ? (
            <div className="flex min-h-[440px] items-center justify-center text-[18px] text-[#7a8697]">
              Chưa có đơn hàng nào.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-md border border-[#e3e8ef] bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-3 border-b border-[#edf1f5] pb-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-[20px] font-bold text-[#0f2b57]">
                        {order.code}
                      </div>
                      <div className="mt-1 text-sm text-[#7a8697]">
                        {new Date(order.createdAt).toLocaleString("vi-VN")}
                      </div>
                      {order.updatedAt ? (
                        <div className="mt-1 text-xs text-[#98a3b3]">
                          Cập nhật: {new Date(order.updatedAt).toLocaleString("vi-VN")}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col items-start gap-3 md:items-end">
                      <div
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(
                          order.status
                        )}`}
                      >
                        {getStatusLabel(order.status)}
                      </div>

                      {(order.status === "new" || order.status === "processing") && (
                        <button
                          type="button"
                          onClick={() => openCancelModal(order.id)}
                          className="rounded border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                        >
                          Hủy đơn
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 text-[15px] text-[#274163]">
                      <div>
                        <span className="font-semibold text-[#0f2b57]">
                          Khách hàng:
                        </span>{" "}
                        {order.customer.gender} {order.customer.fullName}
                      </div>
                      <div>
                        <span className="font-semibold text-[#0f2b57]">
                          Số điện thoại:
                        </span>{" "}
                        {order.customer.phone}
                      </div>
                      <div>
                        <span className="font-semibold text-[#0f2b57]">
                          Địa chỉ:
                        </span>{" "}
                        {order.customer.address}, {order.customer.ward},{" "}
                        {order.customer.district}, {order.customer.city}
                      </div>

                      {order.cancelReason ? (
                        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                          <span className="font-semibold">Lý do hủy: </span>
                          {order.cancelReason}
                        </div>
                      ) : null}
                    </div>

                    <div className="text-left md:text-right">
                      <div className="text-sm text-[#7a8697]">Tổng thanh toán</div>
                      <div className="mt-1 text-[24px] font-bold text-[#ff1f1f]">
                        {vnd(order.total)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.productId}
                        className="flex items-center gap-4 rounded border border-[#edf1f5] bg-[#fafbfc] p-3"
                      >
                        <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded border bg-white">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="84px"
                            className="object-contain"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="line-clamp-2 font-semibold text-[#0f2b57]">
                            {item.name}
                          </div>
                          <div className="mt-1 text-sm text-[#7a8697]">
                            Số lượng: {item.qty}
                          </div>
                        </div>

                        <div className="text-right font-bold text-[#ff1f1f]">
                          {vnd(item.price * item.qty)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#edf1f5] pt-4">
                    <div className="text-sm text-[#7a8697]">
                      {order.items.length} sản phẩm
                    </div>
                    <div>
                      <span className="mr-2 text-[15px] font-medium text-[#274163]">
                        Tổng tiền:
                      </span>
                      <span className="text-[22px] font-bold text-[#ff1f1f]">
                        {vnd(order.total)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {cancelModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[560px] rounded-xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <h2 className="text-xl font-bold text-[#0f2b57]">Chọn lý do hủy đơn</h2>
              <button
                type="button"
                onClick={closeCancelModal}
                className="rounded p-1 text-gray-500 hover:bg-gray-100"
                aria-label="Đóng"
                title="Đóng"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-5 py-4">
              <div className="space-y-3">
                {cancelReasons.map((reason) => (
                  <label
                    key={reason}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#e5e7eb] px-4 py-3 hover:bg-[#fafafa]"
                  >
                    <input
                      type="radio"
                      name="cancelReason"
                      value={reason}
                      checked={selectedReason === reason}
                      onChange={() => setSelectedReason(reason)}
                      className="mt-1"
                    />
                    <span className="text-[15px] text-[#274163]">{reason}</span>
                  </label>
                ))}
              </div>

              {selectedReason === "Lý do khác" && (
                <div className="mt-4">
                  <textarea
                    value={customReason}
                    onChange={(e) => setCustomReason(e.target.value)}
                    placeholder="Nhập lý do hủy đơn..."
                    rows={4}
                    className="w-full rounded-lg border border-[#d4dbe5] px-4 py-3 text-[15px] outline-none focus:border-red-400"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 border-t px-5 py-4">
              <button
                type="button"
                onClick={closeCancelModal}
                className="rounded-lg border border-[#d4dbe5] px-5 py-2.5 text-sm font-semibold text-[#274163] hover:bg-gray-50"
              >
                Đóng
              </button>

              <button
                type="button"
                onClick={handleConfirmCancel}
                className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                Xác nhận hủy đơn
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}