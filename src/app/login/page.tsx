"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

type RegisteredUser = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"phone" | "email">("phone");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const titleSwitch = useMemo(() => {
    return mode === "phone"
      ? "Đăng nhập bằng email"
      : "Đăng nhập bằng số điện thoại";
  }, [mode]);

  const closeModal = () => {
    router.push("/");
  };

  const normalizePhone = (value: string) => value.replace(/\s/g, "");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setOk(null);

    if (mode === "phone" && !phone.trim()) {
      setErr("Vui lòng nhập số điện thoại.");
      return;
    }

    if (mode === "email" && !email.trim()) {
      setErr("Vui lòng nhập email.");
      return;
    }

    if (!password.trim()) {
      setErr("Vui lòng nhập mật khẩu.");
      return;
    }

    const raw = localStorage.getItem("registeredUser");

    if (!raw) {
      setErr("Chưa có tài khoản nào được đăng ký. Vui lòng tạo tài khoản trước.");
      return;
    }

    let registeredUser: RegisteredUser;

    try {
      registeredUser = JSON.parse(raw) as RegisteredUser;
    } catch {
      setErr("Dữ liệu tài khoản không hợp lệ. Vui lòng đăng ký lại.");
      return;
    }

    const isPasswordMatch = registeredUser.password === password;

    const isPhoneMatch =
      normalizePhone(registeredUser.phone || "") === normalizePhone(phone);

    const isEmailMatch =
      (registeredUser.email || "").trim().toLowerCase() ===
      email.trim().toLowerCase();

    const isValid =
      mode === "phone"
        ? isPhoneMatch && isPasswordMatch
        : isEmailMatch && isPasswordMatch;

    if (!isValid) {
      setErr(
        mode === "phone"
          ? "Số điện thoại hoặc mật khẩu không chính xác."
          : "Email hoặc mật khẩu không chính xác."
      );
      return;
    }

    const currentUser = {
      fullName: registeredUser.fullName,
      email: registeredUser.email,
      phone: registeredUser.phone,
    };

    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    setOk("Đăng nhập thành công!");

    setTimeout(() => {
      window.location.href = "/";
    }, 900);
  };

  const handleForgotPassword = () => {
    const raw = localStorage.getItem("registeredUser");

    if (!raw) {
      setErr("Chưa tìm thấy tài khoản đã đăng ký.");
      setOk(null);
      return;
    }

    try {
      const registeredUser = JSON.parse(raw) as RegisteredUser;

      if (mode === "phone") {
        if (!phone.trim()) {
          setErr("Vui lòng nhập số điện thoại trước khi lấy lại mật khẩu.");
          setOk(null);
          return;
        }

        if (
          normalizePhone(registeredUser.phone || "") !== normalizePhone(phone)
        ) {
          setErr("Số điện thoại này chưa được đăng ký.");
          setOk(null);
          return;
        }
      } else {
        if (!email.trim()) {
          setErr("Vui lòng nhập email trước khi lấy lại mật khẩu.");
          setOk(null);
          return;
        }

        if (
          (registeredUser.email || "").trim().toLowerCase() !==
          email.trim().toLowerCase()
        ) {
          setErr("Email này chưa được đăng ký.");
          setOk(null);
          return;
        }
      }

      setErr(null);
      setOk(`Mật khẩu demo của bạn là: ${registeredUser.password}`);
    } catch {
      setErr("Không thể khôi phục mật khẩu. Vui lòng đăng ký lại.");
      setOk(null);
    }
  };

  const handleGoogleLogin = () => {
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

  const handleFacebookLogin = () => {
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
    <main className="relative min-h-screen overflow-hidden bg-[#ececec]">
      {/* Nền giả lập trang chủ */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-[#0A86FF]">
          <div className="mx-auto h-[44px] max-w-[1200px] px-3">
            <div className="flex h-full items-center justify-center text-center text-sm font-extrabold text-white sm:text-lg lg:text-3xl">
              GVN | TẶNG MÀN OLED 240Hz
            </div>
          </div>
        </div>

        <div className="bg-[#E30019]">
          <div className="mx-auto flex h-auto max-w-[1200px] flex-wrap items-center gap-2 px-3 py-3 sm:h-[74px] sm:flex-nowrap sm:gap-3 sm:py-0">
            <div className="flex h-[42px] min-w-[120px] items-center justify-center text-2xl font-extrabold text-white sm:w-[150px] sm:text-4xl">
              GEARVN
            </div>

            <div className="flex h-[44px] shrink-0 items-center gap-2 rounded-[6px] bg-[#B80014] px-2.5 font-bold text-white sm:w-[115px]">
              <span className="text-[13px]">Danh mục</span>
            </div>

            <div className="order-3 w-full sm:order-none sm:flex-1">
              <input
                readOnly
                placeholder="Bạn cần tìm gì?"
                className="h-[44px] w-full rounded-[6px] bg-white px-4 pr-12 text-[15px]"
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
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="hidden lg:col-span-2 lg:block lg:h-[360px] lg:rounded-lg lg:bg-white/80" />
            <div className="h-[180px] rounded-lg bg-[linear-gradient(135deg,#0ea5e9,#2563eb)] sm:h-[260px] lg:col-span-7 lg:h-[360px]" />
            <div className="grid grid-cols-2 gap-4 lg:col-span-3 lg:grid-cols-1">
              <div className="h-[110px] rounded-lg bg-red-500/80 lg:h-[172px]" />
              <div className="h-[110px] rounded-lg bg-red-500/80 lg:h-[172px]" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="h-[90px] rounded-lg bg-white/80 sm:h-[130px]" />
            <div className="h-[90px] rounded-lg bg-white/80 sm:h-[130px]" />
            <div className="h-[90px] rounded-lg bg-white/80 sm:h-[130px]" />
            <div className="h-[90px] rounded-lg bg-white/80 sm:h-[130px]" />
          </div>
        </div>
      </div>

      {/* Lớp mờ phủ lên nền */}
      <button
        type="button"
        aria-label="Đóng popup"
        onClick={closeModal}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[6px]"
      >
        <span className="sr-only">Đóng</span>
      </button>

      <div className="pointer-events-none fixed inset-0 z-40 bg-white/10" />

      <div className="relative z-50 flex min-h-screen items-center justify-center px-3 py-6 sm:px-4 sm:py-8">
        <div className="w-full max-w-[500px] animate-[modalIn_.24s_ease-out] overflow-hidden rounded-[20px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="flex items-start justify-between gap-3 border-b border-[#e5e5e5] px-4 py-4 sm:px-6 sm:py-5">
            <h1 className="pr-2 text-[15px] font-bold leading-6 text-[#3a3a3a] sm:text-[18px]">
              ĐĂNG NHẬP HOẶC TẠO TÀI KHOẢN
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
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "phone" ? "email" : "phone");
                  setErr(null);
                  setOk(null);
                }}
                className="text-[13px] text-gray-600 underline hover:text-red-600 sm:text-[14px]"
              >
                {titleSwitch}
              </button>
            </div>

            {err && (
              <div className="mb-3 rounded bg-red-100 p-2 text-sm text-red-600">
                {err}
              </div>
            )}

            {ok && (
              <div className="mb-3 rounded bg-green-100 p-2 text-sm text-green-600">
                {ok}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              {mode === "phone" ? (
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Số điện thoại"
                  className="h-[46px] w-full rounded border border-[#d8d8d8] px-4 text-[15px] outline-none transition focus:border-[#b9b9b9] sm:text-[16px]"
                />
              ) : (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  className="h-[46px] w-full rounded border border-[#d8d8d8] px-4 text-[15px] outline-none transition focus:border-[#b9b9b9] sm:text-[16px]"
                />
              )}

              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  className="h-[46px] w-full rounded border border-[#d8d8d8] px-4 pr-12 text-[15px] outline-none transition focus:border-[#b9b9b9] sm:text-[16px]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[13px] text-gray-600 underline hover:text-red-600 sm:text-[14px]"
                >
                  {mode === "phone"
                    ? "Quên mật khẩu?"
                    : "Quên mật khẩu email?"}
                </button>
              </div>

              <button
                type="submit"
                className="h-[50px] w-full rounded bg-[#e60012] text-[16px] font-bold text-white transition hover:bg-[#cc0010] sm:h-[54px] sm:text-[18px]"
              >
                ĐĂNG NHẬP
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-gray-300" />
              <span className="text-center text-xs text-gray-500 sm:text-sm">
                hoặc đăng nhập bằng
              </span>
              <div className="h-[1px] flex-1 bg-gray-300" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="h-[50px] rounded bg-[#e64a2f] font-semibold text-white"
              >
                G+ Google
              </button>

              <button
                type="button"
                onClick={handleFacebookLogin}
                className="h-[50px] rounded bg-[#4267b2] font-semibold text-white"
              >
                Facebook
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              Bạn chưa có tài khoản?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Đăng ký ngay!
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