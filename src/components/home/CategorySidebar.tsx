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
    <aside className="w-[240px] rounded-md bg-white shadow-sm border border-gray-200 overflow-visible">
      <ul className="divide-y divide-gray-200">
        {items.map((it) => {
          const Icon = it.icon;

          return (
            <li key={it.label} className="relative">
              <Link
                href={it.href}
                className={[
                  // nhỏ row
                  "group relative flex h-[30px] items-center gap-1.5 px-2.5 pr-3",
                  "text-[12.5px] font-medium text-black",
                  "hover:bg-[#E30019] hover:text-white",
                  "hover:z-10",

                  // mũi tên lòi ra ngoài (hover)
                  "after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2",
                  "after:w-0 after:h-0 after:right-0 after:z-10 after:pointer-events-none",
                  "after:border-t-[15px] after:border-t-transparent",
                  "after:border-b-[15px] after:border-b-transparent",
                  "after:border-l-[0px] after:border-l-transparent",
                  "hover:after:-right-[20px]",
                  "hover:after:border-l-[20px]",
                  "hover:after:border-l-[#E30019]",
                ].join(" ")}
              >
                <Icon className="h-[15px] w-[15px] text-black/70 group-hover:text-white" />
                <span className="flex-1 truncate">{it.label}</span>
                <ChevronRight className="h-[13px] w-[13px] text-black/60 group-hover:text-white" />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
