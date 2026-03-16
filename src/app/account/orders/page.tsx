import { Search } from "lucide-react";

export default function AccountOrdersPage() {
  const tabs = [
    "TẤT CẢ",
    "MỚI",
    "ĐANG XỬ LÝ",
    "ĐANG VẬN CHUYỂN",
    "HOÀN THÀNH",
    "HỦY",
  ];

  return (
    <div className="px-6 py-6">
      <h1 className="text-[28px] font-bold text-[#0f2b57]">Quản lý đơn hàng</h1>

      <div className="mt-8 border-b border-[#d9dde4]">
        <div className="flex flex-wrap gap-x-14 gap-y-3">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`relative pb-4 text-[18px] font-semibold tracking-[0.2px] ${
                index === 0 ? "text-[#0f2b57]" : "text-[#274163]"
              }`}
            >
              {tab}
              {index === 0 && (
                <span className="absolute bottom-[-1px] left-0 h-[4px] w-[88px] bg-[#ff1f1f]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center rounded border border-[#d4dbe5] bg-white">
        <div className="flex h-[52px] flex-1 items-center gap-3 px-5">
          <Search className="h-5 w-5 text-[#5f6b7a]" />
          <input
            placeholder="Tìm đơn hàng theo Mã đơn hàng"
            className="h-full w-full bg-transparent text-[17px] text-[#0f2b57] outline-none placeholder:text-[#7a8697]"
          />
        </div>

        <button className="h-[52px] border-l border-[#d4dbe5] px-7 text-[17px] font-medium text-[#2b73ff] hover:underline">
          Tìm đơn hàng
        </button>
      </div>

      <div className="mt-5 min-h-[500px] rounded-sm bg-[#f7f8fb]" />
    </div>
  );
}