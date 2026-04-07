"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { X } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"email" | "phone">("email");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const fullName = useMemo(
    () => `${lastName.trim()} ${firstName.trim()}`.trim(),
    [lastName, firstName]
  );

  const isEmailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isPhoneValid = (v: string) =>
    /^(0|\+84)[0-9]{9,10}$/.test(v.replace(/\s/g, ""));

  const closeModal = () => {
    router.push("/");
  };

  const resetMessages = () => {
    setErr(null);
    setOk(null);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();

    if (!lastName.trim() || !firstName.trim() || !password.trim()) {
      setErr("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (mode === "email") {
      if (!email.trim()) {
        setErr("Vui lòng nhập email.");
        return;
      }

      if (!isEmailValid(email)) {
        setErr("Email không hợp lệ.");
        return;
      }
    }

    if (mode === "phone") {
      if (!phone.trim()) {
        setErr("Vui lòng nhập số điện thoại.");
        return;
      }

      if (!isPhoneValid(phone)) {
        setErr("Số điện thoại không hợp lệ.");
        return;
      }
    }

    if (password.length < 6) {
      setErr("Mật khẩu tối thiểu 6 ký tự.");
      return;
    }

    const user = {
      fullName,
      email: mode === "email" ? email.trim() : "",
      phone: mode === "phone" ? phone.trim() : "",
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        fullName,
        email: mode === "email" ? email.trim() : "",
        phone: mode === "phone" ? phone.trim() : "",
        password,
      })
    );

    setOk("Bạn đã tạo tài khoản thành công!");

    setTimeout(() => {
      router.push("/login");
    }, 1200);
  };

  const handleGoogle = () => {
    const mockUser = {
      fullName: "Google User",
      email: "google@gmail.com",
      phone: "0999999999",
      provider: "google",
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    localStorage.setItem("currentUser", JSON.stringify(mockUser));

    setTimeout(() => {
      window.location.href = "/";
    }, 600);
  };

  const handleFacebook = () => {
    const mockUser = {
      fullName: "Facebook User",
      email: "facebook@gmail.com",
      phone: "0988888888",
      provider: "facebook",
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    localStorage.setItem("currentUser", JSON.stringify(mockUser));

    setTimeout(() => {
      window.location.href = "/";
    }, 600);
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#ececec]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-[#0A86FF]">
          <div className="mx-auto flex h-[38px] max-w-[1200px] items-center justify-center px-3 sm:h-[44px]">
            <div className="truncate text-center text-sm font-extrabold text-white sm:text-lg lg:text-3xl">
              GVN | TẶNG MÀN OLED 240Hz
            </div>
          </div>
        </div>

        <div className="bg-[#E30019]">
          <div className="mx-auto flex h-auto max-w-[1200px] flex-wrap items-center gap-2 px-3 py-3 sm:h-[74px] sm:flex-nowrap sm:gap-3 sm:py-0">
            <div className="flex h-[38px] min-w-[110px] items-center justify-center text-2xl font-extrabold text-white sm:h-[42px] sm:w-[150px] sm:text-4xl">
              GEARVN
            </div>

            <div className="flex h-[40px] shrink-0 items-center gap-2 rounded-[6px] bg-[#B80014] px-3 font-bold text-white sm:h-[44px] sm:w-[115px] sm:px-2.5">
              <span className="text-[13px]">Danh mục</span>
            </div>

            <div className="order-3 w-full sm:order-none sm:flex-1">
              <input
                readOnly
                placeholder="Bạn cần tìm gì?"
                className="h-[42px] w-full rounded-[6px] bg-white px-4 pr-12 text-[15px] outline-none"
              />
            </div>

            <div className="hidden items-center gap-2 text-white lg:flex">
              <div className="rounded-[6px] bg-[#B80014] px-4 py-2 font-bold">
                Hệ thống Showroom
              </div>
              <div className="rounded-[6px] bg-[#B80014] px-4 py-2 font-bold">
                Giỏ hàng
              </div>
              <div className="rounded-[6px] bg-[#B80014] px-4 py-2 font-bold">
                Đăng nhập
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-3 py-4">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
            <div className="hidden lg:col-span-2 lg:block lg:h-[360px] lg:rounded-lg lg:bg-white/80" />
            <div className="h-[180px] rounded-lg bg-[linear-gradient(135deg,#0ea5e9,#2563eb)] sm:h-[240px] lg:col-span-7 lg:h-[360px]" />
            <div className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-cols-1 lg:gap-4">
              <div className="h-[90px] rounded-lg bg-red-500/80 sm:h-[120px] lg:h-[172px]" />
              <div className="h-[90px] rounded-lg bg-red-500/80 sm:h-[120px] lg:h-[172px]" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            <div className="h-[88px] rounded-lg bg-white/80 sm:h-[110px] lg:h-[130px]" />
            <div className="h-[88px] rounded-lg bg-white/80 sm:h-[110px] lg:h-[130px]" />
            <div className="h-[88px] rounded-lg bg-white/80 sm:h-[110px] lg:h-[130px]" />
            <div className="h-[88px] rounded-lg bg-white/80 sm:h-[110px] lg:h-[130px]" />
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Đóng popup"
        onClick={closeModal}
        className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[6px]"
      >
        <span className="sr-only">Đóng</span>
      </button>

      <div className="pointer-events-none fixed inset-0 z-40 bg-white/10" />

      <div className="relative z-50 flex min-h-dvh items-center justify-center px-3 py-6 sm:px-4 sm:py-8">
        <div className="w-full max-w-[540px] animate-[modalIn_.24s_ease-out] overflow-hidden rounded-[18px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:rounded-[20px]">
          <div className="flex items-start justify-between gap-3 border-b border-[#e5e5e5] px-4 py-4 sm:px-6 sm:py-5">
            <h1 className="pr-2 text-[15px] font-bold leading-6 text-[#3a3a3a] sm:text-[18px]">
              ĐĂNG KÝ TÀI KHOẢN GEARVN
            </h1>

            <button
              type="button"
              onClick={closeModal}
              className="shrink-0 text-gray-500 transition hover:text-black"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
          </div>

          <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
            <div className="mb-4 flex justify-end">
              {mode === "email" ? (
                <button
                  type="button"
                  onClick={() => {
                    setMode("phone");
                    resetMessages();
                  }}
                  className="text-[13px] text-gray-600 underline hover:text-red-600 sm:text-[14px]"
                >
                  Đăng ký bằng số điện thoại
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMode("email");
                    resetMessages();
                  }}
                  className="text-[13px] text-gray-600 underline hover:text-red-600 sm:text-[14px]"
                >
                  Đăng ký bằng email
                </button>
              )}
            </div>

            {err && (
              <div className="mb-3 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600">
                {err}
              </div>
            )}

            {ok && (
              <div className="mb-3 rounded-lg bg-green-100 px-3 py-2 text-sm text-green-600">
                {ok}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              {mode === "email" ? (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  className="h-[46px] w-full rounded-lg border border-[#d8d8d8] px-4 text-[15px] outline-none transition focus:border-[#b9b9b9] sm:text-[16px]"
                />
              ) : (
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Số điện thoại"
                  type="tel"
                  className="h-[46px] w-full rounded-lg border border-[#d8d8d8] px-4 text-[15px] outline-none transition focus:border-[#b9b9b9] sm:text-[16px]"
                />
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Họ"
                  className="h-[46px] w-full rounded-lg border border-[#d8d8d8] px-4 text-[15px] outline-none transition focus:border-[#b9b9b9] sm:text-[16px]"
                />

                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Tên"
                  className="h-[46px] w-full rounded-lg border border-[#d8d8d8] px-4 text-[15px] outline-none transition focus:border-[#b9b9b9] sm:text-[16px]"
                />
              </div>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Mật khẩu"
                className="h-[46px] w-full rounded-lg border border-[#d8d8d8] px-4 text-[15px] outline-none transition focus:border-[#b9b9b9] sm:text-[16px]"
              />

              <button
                type="submit"
                className="h-[50px] w-full rounded-lg bg-[#e60012] text-[16px] font-bold text-white transition hover:bg-[#cc0010] sm:h-[54px] sm:text-[18px]"
              >
                TẠO TÀI KHOẢN
              </button>
            </form>

            <div className="my-5 flex items-center gap-3 sm:my-6">
              <div className="h-[1px] flex-1 bg-gray-300" />
              <span className="shrink-0 text-center text-xs text-gray-500 sm:text-sm">
                hoặc đăng ký bằng
              </span>
              <div className="h-[1px] flex-1 bg-gray-300" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleGoogle}
                className="h-[48px] rounded-lg bg-[#e64a2f] text-sm font-semibold text-white transition hover:opacity-95 sm:h-[50px]"
              >
                G+ Google
              </button>

              <button
                type="button"
                onClick={handleFacebook}
                className="h-[48px] rounded-lg bg-[#4267b2] text-sm font-semibold text-white transition hover:opacity-95 sm:h-[50px]"
              >
                Facebook
              </button>
            </div>

            <div className="mt-5 text-center text-sm text-gray-600 sm:mt-6">
              Bạn đã có tài khoản?{" "}
              <Link href="/login" className="font-medium text-blue-600 hover:underline">
                Đăng nhập!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(-18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </main>
  );
}