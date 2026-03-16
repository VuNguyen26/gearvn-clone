'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Hand,
  CircleHelp,
  ClipboardList,
  Eye,
  LogOut,
  MapPin,
  Tag,
  Flame,
  Newspaper,
  Wrench,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { useCart } from "@/store/cart";
import CategorySidebar from "@/components/home/CategorySidebar";

const MAX_W = "max-w-[1200px]";

type HeaderUser = {
  fullName?: string;
  email?: string;
  phone?: string;
};

export default function Header() {
  const cartCount = useCart((s) => s.count());
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const [user, setUser] = useState<HeaderUser | null>(null);
  const [openUser, setOpenUser] = useState(false);
  const userRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpenCategory(false);
  }, [pathname]);

  const safeCartCount = mounted ? cartCount : 0;

  useEffect(() => {
    const syncUser = () => {
      try {
        const rawCurrentUser = localStorage.getItem("currentUser");
        const rawUser = localStorage.getItem("user");

        if (rawCurrentUser) {
          setUser(JSON.parse(rawCurrentUser));
        } else if (rawUser) {
          setUser(JSON.parse(rawUser));
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };

    syncUser();
    window.addEventListener("storage", syncUser);

    return () => window.removeEventListener("storage", syncUser);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!userRef.current) return;
      if (!userRef.current.contains(e.target as Node)) {
        setOpenUser(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
    setUser(null);
    setOpenUser(false);
    window.location.href = "/";
  };

  const displayName = user?.fullName || "Người dùng";
  const displayEmail = user?.email || "Chưa có email";

  return (
    <header className="sticky top-0 z-50 w-full">
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

      <div className="bg-[#E30019]">
        <div className={`mx-auto ${MAX_W} flex h-[74px] items-center gap-3 px-3`}>
          <Link href="/" className="flex shrink-0 items-center pr-1">
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

          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setOpenCategory((prev) => !prev)}
              className="flex h-[44px] w-[115px] shrink-0 items-center gap-2 rounded-[6px] bg-[#B80014] px-2.5 font-bold text-white hover:bg-[#A60012]"
            >
              <Menu className="h-6 w-6" />
              <span className="text-[13px] leading-none">Danh mục</span>
            </button>

            {openCategory && (
              <div className="absolute left-0 top-[52px] z-[999]">
                <CategorySidebar />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="relative">
              <input
                aria-label="Bạn cần tìm gì?"
                placeholder="Bạn cần tìm gì?"
                className="h-[44px] w-full rounded-[6px] bg-white px-4 pr-12 text-[15px] outline-none placeholder:text-gray-500"
              />
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="absolute right-0 top-0 flex h-[44px] w-[52px] items-center justify-center rounded-r-[6px] bg-white text-black hover:bg-gray-50"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 text-white lg:flex">
            <HeaderAction
              href="/showroom"
              icon={<MapPin className="h-6 w-6" />}
              line1="Hệ thống"
              line2="Showroom"
            />

            <HeaderAction
              href="/cart"
              icon={
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#FFE600] px-1 text-[9px] font-extrabold leading-none text-black ring-2 ring-white">
                    {safeCartCount > 99 ? "99+" : safeCartCount}
                  </span>
                </div>
              }
              line1="Giỏ"
              line2="hàng"
            />

            <div ref={userRef} className="relative">
              {!user ? (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenUser((v) => !v)}
                    aria-label="Mở menu tài khoản"
                    title="Mở menu tài khoản"
                    className="rounded-[6px]"
                  >
                    <HeaderAction
                      href="#"
                      icon={<User className="h-6 w-6" />}
                      line1="Đăng"
                      line2="nhập"
                      variant="boxed"
                    />
                  </button>

                  {openUser && (
                    <div className="absolute right-0 top-full z-50 mt-3 w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl">
                      <div className="absolute -top-2 right-8 h-4 w-4 rotate-45 bg-white" />

                      <div className="border-b border-slate-200 px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                            <Hand className="h-5 w-5" />
                          </div>
                          <div className="text-[16px] font-semibold text-slate-800">
                            Xin chào, vui lòng đăng nhập
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <Link
                            href="/login"
                            onClick={() => setOpenUser(false)}
                            className="flex h-[40px] items-center justify-center rounded-md bg-[#1f1f1f] text-[15px] font-bold text-white transition hover:bg-black"
                          >
                            ĐĂNG NHẬP
                          </Link>

                          <Link
                            href="/register"
                            onClick={() => setOpenUser(false)}
                            className="flex h-[40px] items-center justify-center rounded-md border-2 border-[#4b4b4b] bg-white text-[15px] font-bold text-[#222] transition hover:bg-slate-50"
                          >
                            ĐĂNG KÝ
                          </Link>
                        </div>
                      </div>

                      <div className="px-5 py-4">
                        <button
                          type="button"
                          className="flex items-center gap-3 text-[15px] text-slate-700 transition hover:text-red-600"
                        >
                          <CircleHelp className="h-6 w-6" />
                          <span>Trợ giúp</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <button type="button" onClick={() => setOpenUser((v) => !v)}>
                    <HeaderAction
                      href="#"
                      icon={<User className="h-6 w-6" />}
                      line1={(displayName || "User").split(" ").slice(-1)[0]}
                      line2="Tài khoản"
                      variant="boxed"
                    />
                  </button>

                  {openUser && (
                    <div className="absolute right-0 top-full z-50 mt-3 w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl">
                      <div className="absolute -top-2 right-8 h-4 w-4 rotate-45 bg-white" />

                      <div className="border-b border-slate-200 px-5 py-5">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                            <Hand className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">
                            <div className="text-[17px] font-semibold leading-6 text-slate-800">
                              Xin chào,
                            </div>
                            <div className="break-words text-[17px] font-semibold leading-6 text-slate-800">
                              {displayName}
                            </div>
                            <div className="break-words text-[17px] font-semibold leading-6 text-slate-800">
                              {displayEmail}
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/account/orders"
                        onClick={() => setOpenUser(false)}
                        className="flex items-center gap-4 border-b border-slate-200 px-5 py-4 text-[17px] text-slate-800 transition hover:bg-slate-50"
                      >
                        <ClipboardList className="h-5 w-5 text-slate-700" />
                        <span>Đơn hàng của tôi</span>
                      </Link>

                      <Link
                        href="/account/viewed"
                        onClick={() => setOpenUser(false)}
                        className="flex items-center gap-4 border-b border-slate-200 px-5 py-4 text-[17px] text-slate-800 transition hover:bg-slate-50"
                      >
                        <Eye className="h-5 w-5 text-slate-700" />
                        <span>Đã xem gần đây</span>
                      </Link>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-4 px-5 py-4 text-left text-[17px] text-slate-800 transition hover:bg-slate-50"
                      >
                        <LogOut className="h-5 w-5 text-slate-700" />
                        <span>Đăng xuất</span>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="ml-2 flex items-center gap-2 text-white lg:hidden">
            <Link
              href="/cart"
              className="relative rounded-[6px] bg-[#B80014] p-2 hover:bg-[#A60012]"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#FFE600] px-1 text-[9px] font-extrabold leading-none text-black ring-2 ring-white">
                {safeCartCount > 99 ? "99+" : safeCartCount}
              </span>
            </Link>

            {user ? (
              <Link
                href="/account/orders"
                className="rounded-[6px] bg-[#B80014] p-2 hover:bg-[#A60012]"
                aria-label="Tài khoản"
              >
                <User className="h-6 w-6" />
              </Link>
            ) : (
              <Link
                href="/login"
                className="rounded-[6px] bg-[#B80014] p-2 hover:bg-[#A60012]"
                aria-label="Đăng nhập"
              >
                <User className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white">
        <div className={`mx-auto ${MAX_W} h-[46px] px-3`}>
          <div className="grid h-[46px] grid-cols-6">
            <SubItem
              icon={<Tag className="h-[18px] w-[18px]" />}
              text="Mua PC tặng màn 240Hz"
            />
            <SubItem
              withDivider
              icon={<Flame className="h-[18px] w-[18px]" />}
              text="Hot Deal | Laptop"
            />
            <SubItem
              withDivider
              icon={<Newspaper className="h-[18px] w-[18px]" />}
              text="Tin tức"
            />
            <SubItem
              withDivider
              icon={<Wrench className="h-[18px] w-[18px]" />}
              text="Dịch vụ kỹ thuật tại nhà"
            />
            <SubItem
              withDivider
              icon={<RefreshCw className="h-[18px] w-[18px]" />}
              text="Thu cũ đổi mới"
            />
            <SubItem
              withDivider
              icon={<ShieldCheck className="h-[18px] w-[18px]" />}
              text="Tra cứu bảo hành"
            />
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

  if (href === "#") {
    return (
      <div className={`${base} ${variant === "boxed" ? boxed : ""}`}>
        <div className="shrink-0">{icon}</div>
        <div className="leading-[18px]">
          <div className="text-[13px] font-bold">{line1}</div>
          <div className="text-[13px] font-bold">{line2}</div>
        </div>
      </div>
    );
  }

  return (
    <Link href={href} className={`${base} ${variant === "boxed" ? boxed : ""}`}>
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
        <span className="absolute left-0 top-1/2 h-[24px] w-px -translate-y-1/2 bg-gray-300" />
      )}

      <span className="text-black/80 group-hover:text-[#D70018]">{icon}</span>
      <span className="whitespace-nowrap">{text}</span>
    </Link>
  );
}