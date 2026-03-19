'use client';
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MENU_DATA } from "@/data/home/megamenu";
import { useState } from "react";
import MegaMenu from "./MegaMenu";

export default function CategorySidebar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  return (
    <aside className="relative w-55 mr-2 rounded-md border border-gray-200 bg-white shadow-sm overflow-visible">
      <ul className="divide-y divide-gray-200">
        {MENU_DATA.map((it) => {
          const Icon = it.icon;

          return (
            <li 
              key={it.label} 
              className="static"
              onMouseEnter={() => setActiveMenu(it.id)}
              onMouseLeave={() => setActiveMenu(null)}
              >
              <Link
                href={it.href}
                className={[
                  "group relative flex h-7.5 items-center",
                  "gap-1.5 px-2 pr-2.5",
                  "text-[18px] font-medium text-black",
                  "hover:bg-[#E30019] hover:text-white",
                  "hover:z-10",
                ].join(" ")}
              >
                {/* Mũi tên đỏ */}
                <span
                  aria-hidden
                  className={[
                    "pointer-events-none absolute top-1/2 -translate-y-1/2",
                    "right-0 translate-x-full",
                    "hidden group-hover:block",
                    "z-50",
                    "w-0 h-0",
                    "border-t-15 border-t-transparent",
                    "border-b-15 border-b-transparent",
                    "border-l-20 border-l-[#E30019]",
                  ].join(" ")}
                />
                {/* Content */}
                <Icon className="relative z-10 h-3.75 w-3.75 text-black/70 group-hover:text-white" />
                <span className="relative z-10 flex-1 truncate">{it.label}</span>
                <ChevronRight className="relative z-10 h-3.25 w-3.25 shrink-0 text-black/60 group-hover:text-white" />
              </Link>
            {/* Mega Menu - Khi hiện sẽ che HeroCarousel bên cạnh */}
              {activeMenu === it.id && it.content && (
                <MegaMenu content={it.content} />
              )}
          </li>
        );
      })}
    </ul>
  </aside>
);
}
