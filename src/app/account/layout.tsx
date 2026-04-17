"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  User,
  MapPin,
  ClipboardList,
  Eye,
  LogOut,
} from "lucide-react";

type CurrentUser = {
  fullName: string;
  email: string;
  phone?: string;
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
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
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  const menu = [
    {
      href: "/account/profile",
      label: "Thông tin tài khoản",
      icon: <User className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" strokeWidth={2} />,
    },
    {
      href: "/account/addresses",
      label: "Sổ địa chỉ",
      icon: <MapPin className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" strokeWidth={2} />,
    },
    {
      href: "/account/orders",
      label: "Quản lý đơn hàng",
      icon: (
        <ClipboardList
          className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
          strokeWidth={2}
        />
      ),
    },
    {
      href: "/account/viewed",
      label: "Sản phẩm đã xem",
      icon: <Eye className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" strokeWidth={2} />,
    },
  ];

  const avatarLetter = useMemo(() => {
    if (!user?.fullName?.trim()) return "U";
    return user.fullName.trim().charAt(0).toUpperCase();
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-[calc(100vh-120px)] bg-[#f3f4f6] px-2 py-3 sm:px-4 sm:py-6">
        <div className="mx-auto max-w-[1200px] rounded-sm border border-[#e5e7eb] bg-white p-4 sm:p-6">
          <h1 className="text-[20px] font-bold text-[#0f2b57] sm:text-[28px]">
            Tài khoản
          </h1>

          <p className="mt-2 text-[14px] text-slate-600 sm:text-[16px]">
            Bạn chưa đăng nhập tài khoản.
          </p>

          <button
            type="button"
            onClick={() => router.push("/login")}
            className="mt-4 rounded bg-red-600 px-4 py-2.5 text-[14px] font-semibold text-white hover:bg-red-700 sm:px-5 sm:text-[15px]"
          >
            Đi đến trang đăng nhập
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-120px)] bg-[#f1f3f6] px-2 py-3 sm:px-4 sm:py-5">
      <div className="mx-auto max-w-[1460px]">
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-4 xl:grid-cols-[355px_minmax(0,1fr)]">
          {/* Content - mobile lên trước */}
          <section className="order-1 min-w-0 overflow-hidden rounded-sm border border-[#e5e7eb] bg-white">
            {children}
          </section>

          {/* Sidebar - mobile xuống dưới */}
          <aside className="order-2 overflow-hidden rounded-sm border border-[#e5e7eb] bg-white lg:order-none">
            <div className="flex items-center gap-3 border-b border-[#edf0f3] px-4 py-4 sm:px-5 sm:py-5">
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#e5e7eb] text-[18px] font-bold text-[#0f2b57] sm:h-[56px] sm:w-[56px] sm:text-[22px]">
                {avatarLetter}
              </div>

              <div className="min-w-0">
                <div className="truncate text-[13px] font-semibold text-[#061c3f] sm:text-[16px]">
                  {user.fullName}
                </div>
                <div className="truncate text-[12px] text-[#061c3f] sm:text-[14px]">
                  {user.email}
                </div>
              </div>
            </div>

            <div className="px-3 py-2 sm:px-4 sm:py-3">
              {menu.map((item) => {
                const active =
                  pathname === item.href || (pathname?.startsWith(`${item.href}/`) ?? false);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-sm px-3 py-3 text-[13px] transition sm:px-4 sm:text-[15px] ${
                      active
                        ? "font-semibold text-[#ff1f1f]"
                        : "text-[#10284c] hover:bg-[#f8fafc]"
                    }`}
                  >
                    <span className={active ? "text-[#ff1f1f]" : "text-[#5b6472]"}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-sm px-3 py-3 text-left text-[13px] text-[#10284c] transition hover:bg-[#f8fafc] sm:px-4 sm:text-[15px]"
              >
                <LogOut
                  className="h-[16px] w-[16px] text-[#5b6472] sm:h-[18px] sm:w-[18px]"
                  strokeWidth={2}
                />
                <span>Đăng xuất</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}