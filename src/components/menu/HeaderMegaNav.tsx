"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CATEGORY_MENU } from "@/data/category-menu";
import MegaMenuContent from "@/components/menu/MegaMenuContent";

export default function HeaderMegaNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(CATEGORY_MENU[0].id);

  const activeCategory = useMemo(() => {
    return CATEGORY_MENU.find((item) => item.id === activeId) || CATEGORY_MENU[0];
  }, [activeId]);

  return (
    <div
      className="relative hidden xl:block"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-6">
        {CATEGORY_MENU.map((item) => {
          const isActive = isOpen && activeId === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveId(item.id);
                setIsOpen((prev) => !prev || activeId !== item.id);
              }}
              onMouseEnter={() => {
                setActiveId(item.id);
                setIsOpen(true);
              }}
              className={`flex items-center gap-1 py-3 text-sm font-medium transition ${
                isActive ? "text-red-600" : "text-gray-900 hover:text-red-600"
              }`}
            >
              {item.label}
              <ChevronDown className="h-4 w-4" />
            </button>
          );
        })}
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-[1180px] rounded-xl border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <MegaMenuContent category={activeCategory} />
        </div>
      )}
    </div>
  );
}