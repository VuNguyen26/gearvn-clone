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
      <div className="px-3 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        <h1 className="text-[20px] font-bold text-[#0f2b57] sm:text-[24px] lg:text-[28px]">
          Quản lý đơn hàng
        </h1>

        <div className="mt-5 border-b border-[#d9dde4] sm:mt-6 lg:mt-8">
          <div className="flex gap-5 overflow-x-auto whitespace-nowrap sm:gap-8 lg:flex-wrap lg:gap-x-14 lg:gap-y-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative shrink-0 pb-3 text-[12px] font-semibold tracking-[0.1px] sm:pb-4 sm:text-[14px] lg:text-[18px] ${
                    isActive ? "text-[#0f2b57]" : "text-[#274163]"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-[-1px] left-0 h-[3px] w-full bg-[#ff1f1f] sm:h-[4px] lg:w-[88px]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center rounded border border-[#d4dbe5] bg-white sm:mt-5 lg:mt-6">
          <div className="flex h-[40px] flex-1 items-center gap-2 px-3 sm:h-[46px] sm:gap-3 sm:px-4 lg:h-[52px] lg:px-5">
            <Search className="h-4 w-4 text-[#5f6b7a] sm:h-5 sm:w-5" />
            <input
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder="Tìm đơn hàng theo Mã đơn hàng"
              className="h-full w-full bg-transparent text-[12px] text-[#0f2b57] outline-none placeholder:text-[#7a8697] sm:text-[14px] lg:text-[17px]"
            />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="h-[40px] shrink-0 border-l border-[#d4dbe5] px-3 text-[12px] font-medium text-[#2b73ff] hover:underline sm:h-[46px] sm:px-4 sm:text-[13px] lg:h-[52px] lg:px-7 lg:text-[17px]"
          >
            Tìm đơn hàng
          </button>
        </div>

        <div className="mt-4 min-h-[220px] rounded-sm bg-[#f7f8fb] p-3 sm:mt-5 sm:min-h-[320px] sm:p-4 lg:min-h-[500px]">
          {filteredOrders.length === 0 ? (
            <div className="flex min-h-[180px] items-center justify-center text-[13px] text-[#7a8697] sm:min-h-[260px] sm:text-[15px] lg:min-h-[440px] lg:text-[18px]">
              Chưa có đơn hàng nào.
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-md border border-[#e3e8ef] bg-white p-3 shadow-sm sm:p-4 lg:p-5"
                >
                  <div className="flex flex-col gap-3 border-b border-[#edf1f5] pb-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-[16px] font-bold text-[#0f2b57] sm:text-[18px] lg:text-[20px]">
                        {order.code}
                      </div>
                      <div className="mt-1 text-[12px] text-[#7a8697] sm:text-sm">
                        {new Date(order.createdAt).toLocaleString("vi-VN")}
                      </div>
                      {order.updatedAt ? (
                        <div className="mt-1 text-[11px] text-[#98a3b3] sm:text-xs">
                          Cập nhật: {new Date(order.updatedAt).toLocaleString("vi-VN")}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:gap-3 md:items-end">
                      <div
                        className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold sm:text-sm ${getStatusClass(
                          order.status
                        )}`}
                      >
                        {getStatusLabel(order.status)}
                      </div>

                      {(order.status === "new" || order.status === "processing") && (
                        <button
                          type="button"
                          onClick={() => openCancelModal(order.id)}
                          className="rounded border border-red-200 bg-red-50 px-3 py-1.5 text-[12px] font-semibold text-red-600 hover:bg-red-100 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          Hủy đơn
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 text-[13px] text-[#274163] sm:text-[14px] lg:text-[15px]">
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
                        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-[12px] text-red-600 sm:text-sm">
                          <span className="font-semibold">Lý do hủy: </span>
                          {order.cancelReason}
                        </div>
                      ) : null}
                    </div>

                    <div className="text-left md:text-right">
                      <div className="text-[12px] text-[#7a8697] sm:text-sm">
                        Tổng thanh toán
                      </div>
                      <div className="mt-1 text-[20px] font-bold text-[#ff1f1f] sm:text-[22px] lg:text-[24px]">
                        {vnd(order.total)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.productId}
                        className="flex items-center gap-3 rounded border border-[#edf1f5] bg-[#fafbfc] p-3 sm:gap-4"
                      >
                        <div className="relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded border bg-white sm:h-[74px] sm:w-[74px] lg:h-[84px] lg:w-[84px]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="84px"
                            className="object-contain"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="line-clamp-2 text-[13px] font-semibold text-[#0f2b57] sm:text-[14px] lg:text-base">
                            {item.name}
                          </div>
                          <div className="mt-1 text-[12px] text-[#7a8697] sm:text-sm">
                            Số lượng: {item.qty}
                          </div>
                        </div>

                        <div className="text-right text-[13px] font-bold text-[#ff1f1f] sm:text-[14px] lg:text-base">
                          {vnd(item.price * item.qty)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#edf1f5] pt-4">
                    <div className="text-[12px] text-[#7a8697] sm:text-sm">
                      {order.items.length} sản phẩm
                    </div>
                    <div>
                      <span className="mr-2 text-[13px] font-medium text-[#274163] sm:text-[14px] lg:text-[15px]">
                        Tổng tiền:
                      </span>
                      <span className="text-[18px] font-bold text-[#ff1f1f] sm:text-[20px] lg:text-[22px]">
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
            <div className="flex items-center justify-between border-b px-4 py-3 sm:px-5 sm:py-4">
              <h2 className="text-[18px] font-bold text-[#0f2b57] sm:text-xl">
                Chọn lý do hủy đơn
              </h2>
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

            <div className="max-h-[70vh] overflow-y-auto px-4 py-4 sm:px-5">
              <div className="space-y-3">
                {cancelReasons.map((reason) => (
                  <label
                    key={reason}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#e5e7eb] px-3 py-3 hover:bg-[#fafafa] sm:px-4"
                  >
                    <input
                      type="radio"
                      name="cancelReason"
                      value={reason}
                      checked={selectedReason === reason}
                      onChange={() => setSelectedReason(reason)}
                      className="mt-1"
                    />
                    <span className="text-[14px] text-[#274163] sm:text-[15px]">
                      {reason}
                    </span>
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
                    className="w-full rounded-lg border border-[#d4dbe5] px-4 py-3 text-[14px] outline-none focus:border-red-400 sm:text-[15px]"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 border-t px-4 py-3 sm:px-5 sm:py-4">
              <button
                type="button"
                onClick={closeCancelModal}
                className="rounded-lg border border-[#d4dbe5] px-4 py-2 text-[13px] font-semibold text-[#274163] hover:bg-gray-50 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Đóng
              </button>

              <button
                type="button"
                onClick={handleConfirmCancel}
                className="rounded-lg bg-red-600 px-4 py-2 text-[13px] font-semibold text-white hover:bg-red-700 sm:px-5 sm:py-2.5 sm:text-sm"
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