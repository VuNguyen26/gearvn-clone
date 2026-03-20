"use client";

import { useMemo, useState } from "react";
import Link from "next/link"; // <-- Thêm import Link từ Next.js
import {
  Laptop,
  PcCase,
  Cpu,
  Monitor,
  HardDrive,
  Mic,
  Keyboard,
  Mouse,
  Headphones,
  Armchair,
  Network,
  Gamepad2,
  Usb,
  Wrench,
  ChevronRight,
} from "lucide-react";
import MegaMenuContent from "@/components/menu/MegaMenuContent";
import { CATEGORY_MENU, type MenuCategory } from "@/data/category-menu";

const sidebarItems = [
  { id: "laptop", label: "Laptop", icon: Laptop },
  { id: "laptop-gaming", label: "Laptop Gaming", icon: Laptop },
  { id: "pc-gvn", label: "PC GVN", icon: PcCase },
  { id: "main-cpu-vga", label: "Main, CPU, VGA", icon: Cpu },
  { id: "case-nguon-tan", label: "Case, Nguồn, Tản", icon: PcCase },
  { id: "o-cung-ram-the-nho", label: "Ổ cứng, RAM, Thẻ nhớ", icon: HardDrive },
  { id: "loa-micro-webcam", label: "Loa, Micro, Webcam", icon: Mic },
  { id: "man-hinh", label: "Màn hình", icon: Monitor },
  { id: "ban-phim", label: "Bàn phím", icon: Keyboard },
  { id: "chuot-lot-chuot", label: "Chuột + Lót chuột", icon: Mouse },
  { id: "tai-nghe", label: "Tai nghe", icon: Headphones },
  { id: "ghe-ban", label: "Ghế - Bàn", icon: Armchair },
  { id: "phan-mem-mang", label: "Phần mềm, mạng", icon: Network },
  { id: "handheld-console", label: "Handheld, Console", icon: Gamepad2 },
  { id: "phu-kien", label: "Phụ kiện (Hub, sạc, cáp..)", icon: Usb },
  { id: "dich-vu-thong-tin-khac", label: "Dịch vụ và thông tin khác", icon: Wrench },
];

const fallbackCategory = (id: string, label: string): MenuCategory => ({
  id,
  label,
  sections: [
    {
      title: label,
      items: ["Danh mục đang cập nhật"],
    },
  ],
});

type CategorySidebarProps = {
  className?: string;
};

export default function CategorySidebar({
  className = "",
}: CategorySidebarProps) {
  const [activeId, setActiveId] = useState(sidebarItems[0].id);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  const activeSidebarItem = useMemo(() => {
    return sidebarItems.find((item) => item.id === activeId) || sidebarItems[0];
  }, [activeId]);

  const activeCategory = useMemo(() => {
    return (
      CATEGORY_MENU.find((item) => item.id === activeId) ||
      fallbackCategory(activeSidebarItem.id, activeSidebarItem.label)
    );
  }, [activeId, activeSidebarItem]);

  return (
    <div
      className={`relative w-[250px] shrink-0 ${className}`}
      onMouseLeave={() => setIsMegaOpen(false)}
    >
      <aside className="overflow-visible rounded-md border border-gray-200 bg-white shadow-sm">
        <ul className="divide-y divide-gray-200">
          {sidebarItems.map((it) => {
            const Icon = it.icon;
            const isActive = isMegaOpen && activeId === it.id;

            return (
              <li key={it.id} className="relative">
                {/* Đổi từ <button> sang <Link> để có thể click chuyển trang */}
                <Link
                  href={`/category/${it.id}`}
                  onMouseEnter={() => {
                    setActiveId(it.id);
                    setIsMegaOpen(true);
                  }}
                  className={[
                    "group relative flex h-[40px] w-full items-center gap-2 px-3",
                    "text-left text-[15px] font-medium leading-none transition-colors",
                    isActive
                      ? "bg-[#E30019] text-white"
                      : "bg-white text-black hover:bg-[#E30019] hover:text-white",
                  ].join(" ")}
                >
                  <span
                    aria-hidden
                    className={[
                      "pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-full",
                      isActive ? "block" : "hidden group-hover:block",
                      "z-[60] h-0 w-0",
                      "border-b-[20px] border-b-transparent",
                      "border-l-[16px] border-l-[#E30019]",
                      "border-t-[20px] border-t-transparent",
                    ].join(" ")}
                  />

                  <Icon
                    className={[
                      "relative z-10 h-4 w-4 shrink-0",
                      isActive
                        ? "text-white"
                        : "text-black/70 group-hover:text-white",
                    ].join(" ")}
                  />

                  <span className="relative z-10 flex-1 truncate">
                    {it.label}
                  </span>

                  <ChevronRight
                    className={[
                      "relative z-10 h-4 w-4 shrink-0",
                      isActive
                        ? "text-white"
                        : "text-black/60 group-hover:text-white",
                    ].join(" ")}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {isMegaOpen && (
        <div className="absolute left-full top-0 z-[120] min-h-full w-[940px] max-w-[calc(100vw-320px)] rounded-r-md border border-l-0 border-gray-200 bg-[#f5f5f5] shadow-xl">
          <MegaMenuContent category={activeCategory} />
        </div>
      )}
    </div>
  );
}