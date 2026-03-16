"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Search,
  Headphones,
  MapPin,
  ClipboardList,
  ShoppingCart,
  User,
  Tag,
  Flame,
  Newspaper,
  Wrench,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { useCart } from "@/store/cart";

const MAX_W = "max-w-[1200px]";

export default function Header() {
  const cartCount = useCart((s) => s.count());

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 1) TOP PROMO (IMAGE) */}
      <div className="bg-[#0A86FF]">
        <div className={`mx-auto ${MAX_W} px-3`}>
          <div className="relative h-[44px] w-full">
            <Image
              src="/gearvn-pc-gvn-t11-topbar.png"
              alt="GEARVN Promo"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* 2) MAIN RED HEADER */}
      <div className="bg-[#E30019]">
        <div className={`mx-auto ${MAX_W} h-[74px] px-3 flex items-center gap-3`}>
          {/* Logo */}
          <Link href="/" className="flex items-center pr-1 shrink-0">
            <div className="relative h-[42px] w-[150px]">
              <Image
                src="/logo_fd11946b31524fbe98765f34f3de0628.svg"
                alt="GEARVN"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Danh mục */}
          <button
            type="button"
            className="h-[44px] w-[115px] shrink-0 rounded-[6px] bg-[#B80014] px-2.5 text-white font-bold flex items-center gap-2 hover:bg-[#A60012]"
          >
            <Menu className="h-6 w-6" />
            <span className="text-[13px] leading-none">Danh mục</span>
          </button>

          {/* Search */}
          <div className="flex-1 min-w-0">
            <div className="relative">
              <input
                aria-label="Bạn cần tìm gì?"
                placeholder="Bạn cần tìm gì?"
                className="h-[44px] w-full rounded-[6px] bg-white px-4 pr-12 text-[15px] outline-none placeholder:text-gray-500"
              />
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="absolute right-0 top-0 h-[44px] w-[52px] rounded-r-[6px] bg-white flex items-center justify-center text-black hover:bg-gray-50"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right actions (desktop) - dùng chung HeaderAction */}
          <div className="hidden lg:flex shrink-0 items-center gap-2 text-white">
            <HeaderAction
              href="#"
              icon={<Headphones className="h-6 w-6" />}
              line1="Hotline"
              line2="1900.5301"
            />
            <HeaderAction
              href="#"
              icon={<MapPin className="h-6 w-6" />}
              line1="Hệ thống"
              line2="Showroom"
            />
            <HeaderAction
              href="#"
              icon={<ClipboardList className="h-6 w-6" />}
              line1="Tra cứu"
              line2="đơn hàng"
            />

            <HeaderAction
              href="/cart"
              icon={
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {/* luôn hiện số, có viền trắng */}
                  <span
                    className="
                      absolute -right-1 -top-1
                      flex h-[14px] min-w-[14px] items-center justify-center
                      rounded-full bg-[#FFE600]
                      px-1 text-[9px] font-extrabold leading-none text-black
                      ring-2 ring-white
                    "
                  >
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                </div>
              }
              line1="Giỏ"
              line2="hàng"
            />

            {/* Đăng nhập có bao */}
            <HeaderAction
              href="#"
              icon={<User className="h-6 w-6" />}
              line1="Đăng"
              line2="nhập"
              variant="boxed"
            />
          </div>

          {/* Mobile actions */}
          <div className="ml-2 flex items-center gap-2 text-white lg:hidden">
            <Link
              href="/cart"
              className="relative rounded-[6px] bg-[#B80014] p-2 hover:bg-[#A60012]"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="h-6 w-6" />
              <span
                className="
                  absolute -right-1 -top-1
                  flex h-[14px] min-w-[14px] items-center justify-center
                  rounded-full bg-[#FFE600]
                  px-1 text-[9px] font-extrabold leading-none text-black
                  ring-2 ring-white
                "
              >
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            </Link>

            <Link
              href="#"
              className="rounded-[6px] bg-[#B80014] p-2 hover:bg-[#A60012]"
              aria-label="Đăng nhập"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* 3) WHITE SUB MENU BAR - căn giữa đều + chữ dày hơn */}
      <div className="bg-white border-b border-gray-200">
        <div className={`mx-auto ${MAX_W} h-[46px] px-3`}>
          <div className="grid h-[46px] grid-cols-6">
            <SubItem icon={<Tag className="h-[18px] w-[18px]" />} text="Mua PC tặng màn 240Hz" />
            <SubItem withDivider icon={<Flame className="h-[18px] w-[18px]" />} text="Hot Deal | Laptop" />
            <SubItem withDivider icon={<Newspaper className="h-[18px] w-[18px]" />} text="Tin tức" />
            <SubItem withDivider icon={<Wrench className="h-[18px] w-[18px]" />} text="Dịch vụ kỹ thuật tại nhà" />
            <SubItem withDivider icon={<RefreshCw className="h-[18px] w-[18px]" />} text="Thu cũ đổi mới" />
            <SubItem withDivider icon={<ShieldCheck className="h-[18px] w-[18px]" />} text="Tra cứu bảo hành" />
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderAction({
  href,
  icon,
  line1,
  line2,
  variant = "plain",
}: {
  href: string;
  icon: React.ReactNode;
  line1: string;
  line2: string;
  variant?: "plain" | "boxed";
}) {
  const base =
    "flex items-center gap-2 rounded-[6px] px-2 py-1.5 hover:bg-white/10";
  const boxed = "bg-[#B80014] hover:bg-[#A60012]";
  return (
    <Link
      href={href}
      className={`${base} ${variant === "boxed" ? boxed : ""}`}
    >
      <div className="shrink-0">{icon}</div>
      <div className="leading-[18px]">
        <div className="text-[13px] font-bold">{line1}</div>
        <div className="text-[13px] font-bold">{line2}</div>
      </div>
    </Link>
  );
}

function SubItem({
  icon,
  text,
  withDivider,
}: {
  icon: React.ReactNode;
  text: string;
  withDivider?: boolean;
}) {
  return (
    <Link
      href="#"
      className={[
        "relative group flex h-[46px] items-center justify-center gap-2 px-3",
        "text-[14px] font-medium text-black hover:text-[#D70018]",
        withDivider ? "pl-5" : "",
      ].join(" ")}
    >
      {withDivider && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[24px] w-px bg-gray-300" />
      )}

      <span className="text-black/80 group-hover:text-[#D70018]">{icon}</span>
      <span className="whitespace-nowrap">{text}</span>
    </Link>
  );
}

