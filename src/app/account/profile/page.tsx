"use client";

import { useEffect, useState } from "react";

type CurrentUser = {
  fullName: string;
  email: string;
  phone?: string;
  gender?: string;
  day?: string;
  month?: string;
  year?: string;
  defaultAddress?: {
    city?: string;
    district?: string;
    ward?: string;
    address?: string;
  };
};

export default function AccountProfilePage() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Nam");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    try {
      const raw =
        localStorage.getItem("currentUser") || localStorage.getItem("user");

      if (raw) {
        const parsed = JSON.parse(raw) as CurrentUser;
        setUser(parsed);
        setPhone(parsed.phone || "");
        setGender(parsed.gender || "Nam");
        setDay(parsed.day || "");
        setMonth(parsed.month || "");
        setYear(parsed.year || "");
      }
    } catch {}
  }, []);

  const handleSave = () => {
    if (!user) return;

    const updated: CurrentUser = {
      ...user,
      phone: phone.trim(),
      gender,
      day,
      month,
      year,
    };

    localStorage.setItem("user", JSON.stringify(updated));
    localStorage.setItem("currentUser", JSON.stringify(updated));
    setUser(updated);

    try {
      const rawCheckout = localStorage.getItem("gearvn_checkout_v1");

      if (rawCheckout) {
        const checkoutData = JSON.parse(rawCheckout);

        if (checkoutData?.state?.info) {
          checkoutData.state.info = {
            ...checkoutData.state.info,
            fullName: updated.fullName,
            phone: updated.phone || "",
            gender: gender === "Nam" ? "Anh" : "Chị",
          };

          localStorage.setItem(
            "gearvn_checkout_v1",
            JSON.stringify(checkoutData)
          );
        }
      }
    } catch (error) {
      console.error("Không thể đồng bộ checkout info:", error);
    }

    alert("Lưu thay đổi thành công!");
  };

  return (
    <div className="px-3 py-4 sm:px-5 sm:py-5 md:px-6">
      <h1 className="text-[16px] font-bold text-slate-900 sm:text-[22px] md:text-[26px]">
        Thông tin tài khoản
      </h1>

      <div className="mt-4 max-w-[760px] space-y-4 sm:mt-6 sm:space-y-5">
        {/* Họ tên */}
        <div className="grid grid-cols-[76px_1fr] items-center gap-2 sm:grid-cols-[120px_1fr] sm:gap-4">
          <label className="text-[12px] text-slate-900 sm:text-[15px]">
            Họ Tên
          </label>
          <input
            value={user?.fullName || ""}
            readOnly
            className="h-[34px] w-full rounded-sm border border-slate-300 px-2.5 text-[12px] outline-none sm:h-[42px] sm:px-4 sm:text-[15px]"
          />
        </div>

        {/* Giới tính */}
        <div className="grid grid-cols-[76px_1fr] items-center gap-2 sm:grid-cols-[120px_1fr] sm:gap-4">
          <label className="text-[12px] text-slate-900 sm:text-[15px]">
            Giới tính
          </label>

          <div className="flex items-center gap-3 text-[12px] sm:gap-6 sm:text-[15px]">
            <label className="flex items-center gap-1.5">
              <input
                type="radio"
                checked={gender === "Nam"}
                onChange={() => setGender("Nam")}
              />
              Nam
            </label>

            <label className="flex items-center gap-1.5">
              <input
                type="radio"
                checked={gender === "Nữ"}
                onChange={() => setGender("Nữ")}
              />
              Nữ
            </label>
          </div>
        </div>

        {/* SĐT */}
        <div className="grid grid-cols-[76px_1fr] items-center gap-2 sm:grid-cols-[120px_1fr] sm:gap-4">
          <label className="text-[12px] text-slate-900 sm:text-[15px]">
            Số điện thoại
          </label>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Số điện thoại"
              aria-label="Số điện thoại"
              title="Số điện thoại"
              className="h-[34px] min-w-0 flex-1 rounded-sm border border-green-500 px-2.5 text-[12px] outline-none sm:h-[42px] sm:max-w-[340px] sm:px-4 sm:text-[15px]"
            />

            <button
              type="button"
              className="text-[11px] text-blue-600 hover:underline sm:text-[14px]"
            >
              Xác thực
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="grid grid-cols-[76px_1fr] items-center gap-2 sm:grid-cols-[120px_1fr] sm:gap-4">
          <label className="text-[12px] text-slate-900 sm:text-[15px]">
            Email
          </label>

          <div className="flex items-center gap-2">
            <div className="truncate text-[12px] text-slate-900 sm:text-[15px]">
              {user?.email || ""}
            </div>
            <span className="text-[12px] text-green-600 sm:text-[14px]">✔</span>
          </div>
        </div>

        {/* Ngày sinh */}
        <div className="grid grid-cols-[76px_1fr] items-center gap-2 sm:grid-cols-[120px_1fr] sm:gap-4">
          <label className="text-[12px] text-slate-900 sm:text-[15px]">
            Ngày sinh
          </label>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              aria-label="Chọn ngày sinh"
              title="Chọn ngày sinh"
              className="h-[34px] w-[72px] rounded-sm border border-slate-300 px-2 text-[12px] outline-none sm:h-[42px] sm:w-[110px] sm:px-3 sm:text-[14px]"
            >
              <option value="">Ngày</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={String(n)}>
                  {n}
                </option>
              ))}
            </select>

            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              aria-label="Chọn tháng sinh"
              title="Chọn tháng sinh"
              className="h-[34px] w-[78px] rounded-sm border border-slate-300 px-2 text-[12px] outline-none sm:h-[42px] sm:w-[110px] sm:px-3 sm:text-[14px]"
            >
              <option value="">Tháng</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={String(n)}>
                  {n}
                </option>
              ))}
            </select>

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              aria-label="Chọn năm sinh"
              title="Chọn năm sinh"
              className="h-[34px] w-[72px] rounded-sm border border-slate-300 px-2 text-[12px] outline-none sm:h-[42px] sm:w-[110px] sm:px-3 sm:text-[14px]"
            >
              <option value="">Năm</option>
              {Array.from({ length: 80 }, (_, i) => 2026 - i).map((n) => (
                <option key={n} value={String(n)}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Button */}
        <div className="pl-[78px] sm:pl-[124px]">
          <button
            type="button"
            onClick={handleSave}
            className="h-[34px] rounded-sm bg-red-600 px-4 text-[11px] font-semibold text-white hover:bg-red-700 sm:h-[40px] sm:px-6 sm:text-[14px]"
          >
            LƯU THAY ĐỔI
          </button>
        </div>
      </div>
    </div>
  );
}