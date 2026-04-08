"use client";

import { useState } from "react";
import { MENU_DATA } from "@/data/home/megamenu";
import { Tag, Flame, Newspaper, Wrench, RefreshCw } from "lucide-react";
import { SubItem } from "../Header";
import { getItemLabel, resolveHref } from "./MegaMenu";
import Link from "next/link";

const SUB_NAV_ITEMS = [
  {
    id: 1,
    href: "/introduce",
    text: "Giới thiệu",
    icon: Tag, 
    withDivider: false,
  },
  {
    id: 2,
    href: "/laptop-gaming-hot-deals",
    text: "Hot Deal | Laptop",
    icon: Flame,
    withDivider: true,
  },
  {
    id: 3,
    href: "/news",
    text: "Tin tức",
    icon: Newspaper,
    withDivider: true,
  },
  {
    id: 4,
    href: "/on-site-technical-support",
    text: "Dịch vụ kỹ thuật tại nhà",
    icon: Wrench,
    withDivider: true,
  },
  {
    id: 5,
    href: "/trade-in",
    text: "Thu cũ đổi mới",
    icon: RefreshCw,
    withDivider: true,
  },
];

function CategoryMegaMenu({ open,onClose }: { open: boolean;onClose: () => void }){
    const [openId, setOpenId] = useState<string | null>(null);
    const [openCol, setOpenCol] = useState<string | null>(null);

    useEffect(() => {
    if (!open) {
      setOpenId(null);
      setOpenCol(null);
    }
  }, [open]);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
    setOpenCol(null);
  };

  return (
    <div className="">
        <div className="bg-[#E30019] h-10 text-white flex justify-between px-3 items-center border border-[#E30019]">
            <p className="text-xl">Danh mục sản phẩm</p>
            <button 
                onClick={onClose} 
                className="p-2 -mr-2 hover:bg-white/20 rounded-full transition-colors duration-200 focus:outline-none"
                aria-label="Close menu"
                >X
            </button>
        </div>
        <div className="divide-y">
        {MENU_DATA.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id}>
              {/* PARENT */}
                <button
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between py-1 px-3"
                >
                    <div className="flex items-center gap-2">
                        <Icon/>
                        <span>{item.label.toLocaleUpperCase()}</span>
                    </div>
                    <span className={`transition ${openId === item.id ? "rotate-180" : ""}`}>
                    ▼
                    </span>
                </button>
                {/* CHILDREN */}
                <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? "max-h-[1000px]" : "max-h-0"
                }`}
                >
                    <div className="bg-gray-50 px-3 pb-3">
                    {item.content?.columns.map((col, i) => {
                        const colId = item.id + "-" + i;
                            return (
                                    <div key={i} className="mb-3">
                                        {/* TITLE (click được) */}
                                        <button
                                            onClick={() => setOpenCol(openCol === colId ? null : colId)}
                                            className="flex w-full items-center justify-between pl-10"
                                        >
                                            <p className="text-sm">
                                            {col.title}
                                            </p>
                                            <span className={`transition ${
                                            openCol === colId ? "rotate-180" : ""
                                            }`}>
                                            ▼
                                            </span>
                                        </button>
                                        {/* ITEMS */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${
                                            openCol === colId ? "max-h-[500px]" : "max-h-0"
                                            }`}
                                        >
                                            <div className="space-y-1 text-sm text-gray-600 pl-15">
                                            {col.items.map((child, j) => {
                                                const label = getItemLabel(child);
                                                const href = resolveHref(item.id, col.title,child);
                                                return(
                                                    <div
                                                    key={`${label}-${j}`}
                                                    className="py-1 hover:text-red-500"
                                                    >
                                                        {href ? (
                                                            <Link
                                                            href={href}
                                                            className="text-[13px] text-gray-700 transition-colors duration-150 hover:text-[#E30019]"
                                                            >
                                                            {label}
                                                            </Link>
                                                        ) : (
                                                            <span className="text-[13px] text-gray-700 cursor-default">
                                                            {label}
                                                            </span>
                                                        )}
                                                    </div>
                                                        )
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                    );
                        })}
                    </div>
                </div>
            </div>
            );
        })}
        </div>
    </div>
  );
}

function BottomMenu(){
    return (
        <div className="grid grid-cols-1 h-11.5 mt-2 border-t">
            <h2 className="font-semibold mb-2">Thông tin</h2>
      {SUB_NAV_ITEMS.map((item) => {
        const IconComponent = item.icon;
        return (
          <SubItem
            key={item.id}
            href={item.href}
            text={item.text}
            withDivider={item.withDivider}
            icon={<IconComponent className="h-[18px] w-[18px]" />}
          />
        );
      })}
    </div>
    )
}

import { useEffect } from "react";
import { constant } from "firebase/firestore/pipelines";

export default function CategorySidebarMobile({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Logic chặn scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup function: Đảm bảo khi component bị gỡ bỏ (unmount), 
    // trang web vẫn cuộn lại được bình thường
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`lg:hidden fixed top-0 left-0 h-full w-[80%] bg-white z-[70]
      transform transition-transform duration-300 ease-in-out
      ${open ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="h-full overflow-y-auto"> {/* Cho phép cuộn bên trong menu nếu danh mục quá dài */}
        <CategoryMegaMenu open={open} onClose={onClose}/>
        <BottomMenu/>
      </div>
      <div>
      </div>
    </div>
  );
}