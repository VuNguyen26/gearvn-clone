import Link from "next/link";
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

const items = [
  { label: "Laptop", icon: Laptop, href: "/category/laptop" },
  { label: "Laptop Gaming", icon: Laptop, href: "/category/laptop?brand=Gaming" },
  { label: "PC GVN", icon: PcCase, href: "/category/pc-gaming" },
  { label: "Main, CPU, VGA", icon: Cpu, href: "/category/gpu" },
  { label: "Case, Nguồn, Tản", icon: PcCase, href: "/category/pc-gaming" },
  { label: "Ổ cứng, RAM, Thẻ nhớ", icon: HardDrive, href: "/category/pc-gaming" },
  { label: "Loa, Micro, Webcam", icon: Mic, href: "/category/pc-gaming" },
  { label: "Màn hình", icon: Monitor, href: "/category/man-hinh" },
  { label: "Bàn phím", icon: Keyboard, href: "/category/pc-gaming" },
  { label: "Chuột + Lót chuột", icon: Mouse, href: "/category/pc-gaming" },
  { label: "Tai nghe", icon: Headphones, href: "/category/pc-gaming" },
  { label: "Ghế - Bàn", icon: Armchair, href: "/category/pc-gaming" },
  { label: "Phần mềm, mạng", icon: Network, href: "/category/pc-gaming" },
  { label: "Handheld, Console", icon: Gamepad2, href: "/category/pc-gaming" },
  { label: "Phụ kiện (Hub, sạc, cáp..)", icon: Usb, href: "/category/pc-gaming" },
  { label: "Dịch vụ và thông tin khác", icon: Wrench, href: "/category/pc-gaming" },
];

export default function CategorySidebar() {
  return (
    <aside className="w-[220px] rounded-md border border-gray-200 bg-white shadow-sm overflow-visible">
      <ul className="divide-y divide-gray-200">
        {items.map((it) => {
          const Icon = it.icon;

          return (
            <li key={it.label} className="relative">
              <Link
                href={it.href}
                className={[
                  "group relative flex h-[30px] items-center",
                  "gap-1.5 px-2 pr-2.5",
                  "text-[12.5px] font-medium text-black",
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
                    "z-0",
                    "w-0 h-0",
                    "border-t-[15px] border-t-transparent",
                    "border-b-[15px] border-b-transparent",
                    "border-l-[20px] border-l-[#E30019]",
                  ].join(" ")}
                />

                {/* Content */}
                <Icon className="relative z-10 h-[15px] w-[15px] text-black/70 group-hover:text-white" />
                <span className="relative z-10 flex-1 truncate">{it.label}</span>
                <ChevronRight className="relative z-10 h-[13px] w-[13px] shrink-0 text-black/60 group-hover:text-white" />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
