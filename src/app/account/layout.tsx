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
      icon: <User className="h-[22px] w-[22px]" strokeWidth={2} />,
    },
    {
      href: "/account/addresses",
      label: "Sổ địa chỉ",
      icon: <MapPin className="h-[22px] w-[22px]" strokeWidth={2} />,
    },
    {
      href: "/account/orders",
      label: "Quản lý đơn hàng",
      icon: <ClipboardList className="h-[22px] w-[22px]" strokeWidth={2} />,
    },
    {
      href: "/account/viewed",
      label: "Sản phẩm đã xem",
      icon: <Eye className="h-[22px] w-[22px]" strokeWidth={2} />,
    },
  ];

  const avatarLetter = useMemo(() => {
    if (!user?.fullName?.trim()) return "U";
    return user.fullName.trim().charAt(0).toUpperCase();
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-[calc(100vh-160px)] bg-[#f3f4f6] px-4 py-8">
        <div className="mx-auto max-w-[1440px] rounded-sm bg-white p-8">
          <h1 className="text-[30px] font-bold text-[#0f2b57]">Tài khoản</h1>
          <p className="mt-3 text-[17px] text-slate-600">
            Bạn chưa đăng nhập tài khoản.
          </p>

          <button
            type="button"
            onClick={() => router.push("/login")}
            className="mt-6 rounded bg-red-600 px-5 py-3 text-[17px] font-semibold text-white hover:bg-red-700"
          >
            Đi đến trang đăng nhập
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#f1f3f6] px-4 py-5">
      <div className="mx-auto max-w-[1460px]">
        <div className="grid gap-4 lg:grid-cols-[355px_1fr]">
          {/* Sidebar */}
          <aside className="overflow-hidden rounded-sm bg-white">
            <div className="flex items-center gap-5 border-b border-[#d7dce3] px-6 py-6">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#d9dde4] text-[#4b5563]">
                <User className="h-10 w-10" strokeWidth={2.2} />
              </div>

              <div className="min-w-0">
                <div className="truncate text-[18px] font-semibold leading-8 text-[#061c3f]">
                  {user.fullName}
                </div>
                <div className="truncate text-[18px] font-semibold leading-8 text-[#061c3f]">
                  {user.email}
                </div>
              </div>
            </div>

            <div className="px-4 py-4">
              {menu.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mb-1 flex items-center gap-5 rounded-sm px-4 py-[18px] text-[18px] transition ${
                      active
                        ? "font-semibold text-[#ff1f1f]"
                        : "font-normal text-[#10284c] hover:bg-[#f8fafc]"
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
                className="mt-1 flex w-full items-center gap-5 rounded-sm px-4 py-[18px] text-left text-[18px] text-[#10284c] transition hover:bg-[#f8fafc]"
              >
                <LogOut className="h-[22px] w-[22px] text-[#5b6472]" strokeWidth={2} />
                <span>Đăng xuất</span>
              </button>
            </div>
          </aside>

          {/* Content */}
          <section className="rounded-sm bg-white">{children}</section>
        </div>
      </div>
    </main>
  );
}