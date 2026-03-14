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
    <main className="relative min-h-screen overflow-hidden bg-[#ececec]">
      {/* Nền giả lập trang chủ */}
      <div className="absolute inset-0 z-0">
        <div className="bg-[#0A86FF]">
          <div className="mx-auto h-[44px] max-w-[1200px] px-3">
            <div className="flex h-full items-center justify-center text-3xl font-extrabold text-white">
              GVN | TẶNG MÀN OLED 240Hz
            </div>
          </div>
        </div>

        <div className="bg-[#E30019]">
          <div className="mx-auto flex h-[74px] max-w-[1200px] items-center gap-3 px-3">
            <div className="flex h-[42px] w-[150px] items-center justify-center text-4xl font-extrabold text-white">
              GEARVN
            </div>

            <div className="flex h-[44px] w-[115px] items-center gap-2 rounded-[6px] bg-[#B80014] px-2.5 font-bold text-white">
              <span className="text-[13px]">Danh mục</span>
            </div>

            <div className="relative flex-1">
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
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2 h-[360px] rounded-lg bg-white/80" />
            <div className="col-span-7 h-[360px] rounded-lg bg-[linear-gradient(135deg,#0ea5e9,#2563eb)]" />
            <div className="col-span-3 space-y-4">
              <div className="h-[172px] rounded-lg bg-red-500/80" />
              <div className="h-[172px] rounded-lg bg-red-500/80" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-4">
            <div className="h-[130px] rounded-lg bg-white/80" />
            <div className="h-[130px] rounded-lg bg-white/80" />
            <div className="h-[130px] rounded-lg bg-white/80" />
            <div className="h-[130px] rounded-lg bg-white/80" />
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

      <div className="relative z-50 flex min-h-screen items-center justify-center px-4 py-8">
        <div className="w-full max-w-[540px] animate-[modalIn_.24s_ease-out] overflow-hidden rounded-[20px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-5">
            <h1 className="text-[18px] font-bold text-[#3a3a3a]">
              ĐĂNG KÝ TÀI KHOẢN GEARVN
            </h1>

            <button
              type="button"
              onClick={closeModal}
              className="text-gray-500 transition hover:text-black"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <div className="px-6 pb-6 pt-5">
            <div className="mb-4 flex justify-end">
              {mode === "email" ? (
                <button
                  type="button"
                  onClick={() => {
                    setMode("phone");
                    resetMessages();
                  }}
                  className="text-[14px] text-gray-600 underline hover:text-red-600"
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
                  className="text-[14px] text-gray-600 underline hover:text-red-600"
                >
                  Đăng ký bằng email
                </button>
              )}
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
              {mode === "email" ? (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  className="h-[46px] w-full rounded border border-[#d8d8d8] px-4 text-[16px] outline-none transition focus:border-[#b9b9b9]"
                />
              ) : (
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Số điện thoại"
                  type="tel"
                  className="h-[46px] w-full rounded border border-[#d8d8d8] px-4 text-[16px] outline-none transition focus:border-[#b9b9b9]"
                />
              )}

              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Họ"
                className="h-[46px] w-full rounded border border-[#d8d8d8] px-4 text-[16px] outline-none transition focus:border-[#b9b9b9]"
              />

              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Tên"
                className="h-[46px] w-full rounded border border-[#d8d8d8] px-4 text-[16px] outline-none transition focus:border-[#b9b9b9]"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Mật khẩu"
                className="h-[46px] w-full rounded border border-[#d8d8d8] px-4 text-[16px] outline-none transition focus:border-[#b9b9b9]"
              />

              <button
                type="submit"
                className="h-[54px] w-full rounded bg-[#e60012] text-[18px] font-bold text-white transition hover:bg-[#cc0010]"
              >
                TẠO TÀI KHOẢN
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-gray-300" />
              <span className="text-sm text-gray-500">hoặc đăng ký bằng</span>
              <div className="h-[1px] flex-1 bg-gray-300" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleGoogle}
                className="h-[50px] rounded bg-[#e64a2f] font-semibold text-white"
              >
                G+ Google
              </button>

              <button
                type="button"
                onClick={handleFacebook}
                className="h-[50px] rounded bg-[#4267b2] font-semibold text-white"
              >
                Facebook
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              Bạn đã có tài khoản?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
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