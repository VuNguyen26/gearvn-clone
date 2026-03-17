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
  { label: "Laptop Gaming", icon: Laptop, href: "/category/laptop-gaming" },

  { label: "PC GVN", icon: PcCase, href: "/category/pc-gvn" },
  { label: "Main, CPU, VGA", icon: Cpu, href: "/category/main-cpu-vga" },
  { label: "Case, Nguồn, Tản", icon: PcCase, href: "/category/case-nguon-tan" },
  { label: "Ổ cứng, RAM, Thẻ nhớ", icon: HardDrive, href: "/category/o-cung-ram-the-nho" },
  { label: "Loa, Micro, Webcam", icon: Mic, href: "/category/loa-micro-webcam" },
  { label: "Màn hình", icon: Monitor, href: "/category/man-hinh" },
  { label: "Bàn phím", icon: Keyboard, href: "/category/ban-phim" },
  { label: "Chuột + Lót chuột", icon: Mouse, href: "/category/chuot-lot-chuot" },
  { label: "Tai nghe", icon: Headphones, href: "/category/tai-nghe" },
  { label: "Ghế - Bàn", icon: Armchair, href: "/category/ghe-ban" },
  { label: "Phần mềm, mạng", icon: Network, href: "/category/phan-mem-mang" },
  { label: "Handheld, Console", icon: Gamepad2, href: "/category/handheld-console" },
  { label: "Phụ kiện (Hub, sạc, cáp..)", icon: Usb, href: "/category/phu-kien" },
  { label: "Dịch vụ và thông tin khác", icon: Wrench, href: "/category/dich-vu-thong-tin-khac" },
];

export default function CategorySidebar() {
  return (
    <aside className="w-55 rounded-md border border-gray-200 bg-white shadow-sm overflow-visible">
      <ul className="divide-y divide-gray-200">
        {items.map((it) => {
          const Icon = it.icon;

          return (
            <li key={it.label} className="relative">
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
                    "z-0",
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
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
