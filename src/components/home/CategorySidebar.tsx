"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
} from "react";
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
  Gamepad2,
  Usb,
  ChevronRight,
} from "lucide-react";

import MegaMenu from "./MegaMenu";
import MegaMenuContent from "@/components/menu/MegaMenuContent";
import { MENU_DATA } from "@/data/home/megamenu";
import { CATEGORY_MENU, type MenuCategory } from "@/data/category-menu";

type CategorySidebarProps = {
  className?: string;
  onNavigate?: () => void;
};

type SidebarItem = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

const sidebarItems: SidebarItem[] = [
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
  { id: "handheld-console", label: "Handheld Console", icon: Gamepad2 },
  { id: "phu-kien", label: "Phụ kiện", icon: Usb },
];

const slugAliasMap: Record<string, string> = {
  laptopgaming: "laptop-gaming",
  laptopgamings: "laptop-gaming",
  "laptop-gamings": "laptop-gaming",

  pcgaming: "pc-gvn",
  "pc-gaming": "pc-gvn",

  monitor: "man-hinh",
  monitors: "man-hinh",

  mouse: "chuot-lot-chuot",
  mouses: "chuot-lot-chuot",
  mousepad: "chuot-lot-chuot",
  mousepads: "chuot-lot-chuot",

  keyboard: "ban-phim",
  keyboards: "ban-phim",

  headphone: "tai-nghe",
  headphones: "tai-nghe",

  accessory: "phu-kien",
  accessories: "phu-kien",

  handheld: "handheld-console",
  handheldconsole: "handheld-console",
  "handheld-consoles": "handheld-console",
};

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

function normalizeCategoryId(value?: string) {
  const raw = String(value ?? "")
    .toLowerCase()
    .trim()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");

  return slugAliasMap[raw] ?? raw;
}

function buildCategoryHref(id: string) {
  return `/category/${normalizeCategoryId(id)}`;
}

export default function CategorySidebar({
  className = "",
  onNavigate,
}: CategorySidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams?.toString() ?? "";

  const [activeId, setActiveId] = useState<string>(
    normalizeCategoryId(sidebarItems[0]?.id ?? "")
  );
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mergedItems = useMemo(() => {
    return sidebarItems.map((localItem) => {
      const normalizedId = normalizeCategoryId(localItem.id);

      const remoteItem = MENU_DATA.find((item) => {
        const remoteId = normalizeCategoryId(item.id);
        const remoteLabel = item.label?.trim().toLowerCase();
        const localLabel = localItem.label.trim().toLowerCase();

        return remoteId === normalizedId || remoteLabel === localLabel;
      });

      return {
        ...localItem,
        id: normalizedId,
        href: buildCategoryHref(normalizedId),
        content: remoteItem?.content ?? null,
      };
    });
  }, []);

  const activeSidebarItem = useMemo(() => {
    return mergedItems.find((item) => item.id === activeId) ?? mergedItems[0];
  }, [activeId, mergedItems]);

  const activeCategory = useMemo(() => {
    if (!activeSidebarItem) {
      return fallbackCategory("default", "Danh mục");
    }

    return (
      CATEGORY_MENU.find(
        (item) =>
          normalizeCategoryId(item.id) ===
          normalizeCategoryId(activeSidebarItem.id)
      ) ?? fallbackCategory(activeSidebarItem.id, activeSidebarItem.label)
    );
  }, [activeSidebarItem]);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeAll = () => {
    clearCloseTimer();
    setIsMegaOpen(false);
    onNavigate?.();
  };

  const openMenuById = (id: string) => {
    clearCloseTimer();
    setActiveId(normalizeCategoryId(id));
    setIsMegaOpen(true);
  };

  const handleWrapperEnter = () => {
    clearCloseTimer();
    setIsMegaOpen(true);
  };

  const handleWrapperLeave = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 120);
  };

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  useEffect(() => {
    setIsMegaOpen(false);
  }, [pathname, searchKey]);

  if (!mergedItems.length) return null;

  return (
    <div
      className={`relative w-[250px] shrink-0 ${className}`}
      onMouseEnter={handleWrapperEnter}
      onMouseLeave={handleWrapperLeave}
    >
      <aside className="overflow-visible rounded-md border border-gray-200 bg-white shadow-sm">
        <ul className="divide-y divide-gray-200">
          {mergedItems.map((item) => {
            const Icon = item.icon;
            const isActive = isMegaOpen && activeId === item.id;

            return (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => openMenuById(item.id)}
              >
                <Link
                  href={item.href}
                  onClick={closeAll}
                  className={[
                    "group relative flex h-[40px] w-full items-center gap-2 px-3",
                    "text-left text-[15px] font-medium leading-none transition-colors duration-150",
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
                      "relative z-10 h-4 w-4 shrink-0 transition-colors duration-150",
                      isActive
                        ? "text-white"
                        : "text-black/70 group-hover:text-white",
                    ].join(" ")}
                  />

                  <span className="relative z-10 flex-1 truncate">
                    {item.label}
                  </span>

                  <ChevronRight
                    className={[
                      "relative z-10 h-4 w-4 shrink-0 transition-colors duration-150",
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

      <div
        className={[
          "absolute left-full top-0 z-[110] h-full w-3",
          isMegaOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      />

      <div
        className={[
          "absolute left-[calc(100%-1px)] top-0 z-[120]",
          "transition-all duration-150 ease-out",
          isMegaOpen
            ? "visible translate-x-0 opacity-100"
            : "pointer-events-none invisible translate-x-1 opacity-0",
        ].join(" ")}
        onClickCapture={(e) => {
          const target = e.target as HTMLElement | null;
          if (target?.closest("a")) {
            closeAll();
          }
        }}
      >
        {activeSidebarItem?.content ? (
          <MegaMenu content={activeSidebarItem.content} />
        ) : (
          <div className="min-h-full w-[940px] max-w-[calc(100vw-320px)] rounded-r-md border border-l-0 border-gray-200 bg-[#f5f5f5] shadow-xl">
            <MegaMenuContent category={activeCategory} />
          </div>
        )}
      </div>
    </div>
  );
}