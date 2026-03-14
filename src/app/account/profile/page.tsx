"use client";

import { useEffect, useState } from "react";

type CurrentUser = {
  fullName: string;
  email: string;
  phone?: string;
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
      const raw = localStorage.getItem("currentUser") || localStorage.getItem("user");
      if (raw) {
        const parsed = JSON.parse(raw) as CurrentUser;
        setUser(parsed);
        setPhone(parsed.phone || "");
      }
    } catch {}
  }, []);

  const handleSave = () => {
    if (!user) return;

    const updated = {
      ...user,
      phone,
    };

    localStorage.setItem("user", JSON.stringify(updated));
    localStorage.setItem("currentUser", JSON.stringify(updated));
    setUser(updated);

    alert("Lưu thay đổi thành công!");
  };

  return (
    <div className="px-8 py-6">
      <h1 className="text-[28px] font-bold text-slate-900">Thông tin tài khoản</h1>

      <div className="mt-8 max-w-[760px] space-y-6">
        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className="text-[17px] text-slate-900">Họ Tên</label>
          <input
            value={user?.fullName || ""}
            readOnly
            className="h-[44px] rounded border border-slate-300 px-4 text-[16px]"
          />
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className="text-[17px] text-slate-900">Giới tính</label>
          <div className="flex items-center gap-6 text-[16px]">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={gender === "Nam"}
                onChange={() => setGender("Nam")}
              />
              Nam
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={gender === "Nữ"}
                onChange={() => setGender("Nữ")}
              />
              Nữ
            </label>
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className="text-[17px] text-slate-900">Số điện thoại</label>
          <div className="flex items-center gap-4">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Số điện thoại"
              className="h-[44px] w-full max-w-[340px] rounded border border-green-500 px-4 text-[16px]"
            />
            <button className="text-[16px] text-blue-600 hover:underline">
              Xác thực
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className="text-[17px] text-slate-900">Email</label>
          <div className="flex items-center gap-3">
            <div className="text-[16px] text-slate-900">{user?.email || ""}</div>
            <span className="text-green-600">✔</span>
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
          <label className="text-[17px] text-slate-900">Ngày sinh</label>
          <div className="flex gap-4">
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="h-[44px] w-[130px] rounded border border-slate-300 px-4 text-[16px]"
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
              className="h-[44px] w-[130px] rounded border border-slate-300 px-4 text-[16px]"
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
              className="h-[44px] w-[130px] rounded border border-slate-300 px-4 text-[16px]"
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

        <div className="pl-[144px]">
          <button
            onClick={handleSave}
            className="h-[42px] rounded bg-red-600 px-8 text-[18px] font-semibold text-white hover:bg-red-700"
          >
            LƯU THAY ĐỔI
          </button>
        </div>
      </div>
    </div>
  );
}