"use client";

import Link from "next/link";
import { MapPin, Phone, ChevronRight } from "lucide-react";

type Store = {
  name: string;
  address: string;
  hours: string;
  mapUrl: string;
};

const hcmStores: Store[] = [
  {
    name: "TÂN BÌNH - HOÀNG HOA THÁM",
    address: "78-80-82 Hoàng Hoa Thám, Tân Bình, TP.HCM",
    hours: "8:00 - 21:00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=GEARVN+Hoang+Hoa+Tham",
  },
  {
    name: "TP THỦ ĐỨC - KHA VẠN CÂN",
    address: "905 Kha Vạn Cân, Thủ Đức, TP.HCM",
    hours: "8:00 - 21:00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=GEARVN+Kha+Van+Can",
  },
  {
    name: "QUẬN 5 - TRẦN BÌNH TRỌNG",
    address: "98 Trần Bình Trọng, Quận 5, TP.HCM",
    hours: "8:00 - 21:00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=GEARVN+Tran+Binh+Trong",
  },
  {
    name: "BÌNH THẠNH - NGUYỄN CỬU VÂN",
    address: "63 Nguyễn Cửu Vân, Bình Thạnh, TP.HCM",
    hours: "8:00 - 21:00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=GEARVN+Nguyen+Cuu+Van",
  },
];

const hanoiStores: Store[] = [
  {
    name: "ĐỐNG ĐA - THÁI HÀ",
    address: "30-32 Thái Hà, Đống Đa, Hà Nội",
    hours: "8:00 - 21:00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=GEARVN+Thai+Ha+Ha+Noi",
  },
];

function StoreCard({ store }: { store: Store }) {
  return (
    <div className="w-full rounded-md border border-[#e5e7eb] bg-white p-3 shadow-sm sm:p-4">
      <div className="flex items-start gap-2">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink-500" />
        <h3 className="text-[13px] font-bold uppercase leading-5 text-[#2563eb] sm:text-[14px]">
          {store.name}
        </h3>
      </div>

      <div className="mt-3 text-[12px] leading-6 text-[#374151]">
        <p>
          <span className="font-semibold">Địa chỉ:</span> {store.address}
        </p>
        <p className="mt-1">
          <span className="font-semibold">Giờ làm việc:</span> {store.hours}
        </p>
      </div>

      <div className="mt-4">
        <a
          href={store.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-[#3b82f6] px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-[#2563eb]"
        >
          <MapPin className="h-3.5 w-3.5" />
          Chỉ đường
        </a>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-md bg-[#2f2f2f] px-4 py-3 text-center text-[14px] font-extrabold leading-5 text-white sm:text-[15px]">
      {children}
    </div>
  );
}

export default function ShowroomPage() {
  return (
    <main className="bg-[#ececec] py-0 sm:py-3">
      <div className="mx-auto w-full max-w-none px-0 sm:max-w-[1200px] sm:px-4">
        <div className="bg-[#ececec] px-0 py-0 sm:px-0 sm:py-0">
          <div className="w-full rounded-none bg-white px-3 py-4 sm:rounded-md sm:p-6">
            <div className="mb-3 flex flex-wrap items-center gap-1 text-[10px] text-[#6b7280] sm:mb-4 sm:gap-1.5 sm:text-[11px]">
              <Link href="/" className="text-[#2563eb] hover:underline">
                Trang chủ
              </Link>
              <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Hệ thống cửa hàng GearVN</span>
            </div>

            <h1 className="text-[16px] font-bold text-[#1f2937] sm:text-[18px] lg:text-[24px]">
              Hệ thống cửa hàng GearVN
            </h1>

            <div className="mt-4 rounded-md bg-[#f3f4f6] px-3 py-4 sm:mt-6 sm:px-4 sm:py-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[20px] font-bold leading-none text-[#ef4444] sm:text-[22px]">
                  →
                </span>
                <span className="text-[13px] text-[#111827] sm:text-[14px] lg:text-[16px]">
                  Giờ mở cửa: <b>08:00 - 21:00</b>
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-center sm:mt-6">
              <a
                href="tel:19005301"
                className="inline-flex h-[42px] w-full items-center justify-center gap-2 rounded-md bg-[#22c55e] px-4 text-[13px] font-extrabold text-white transition hover:bg-[#16a34a] sm:h-auto sm:min-w-[250px] sm:w-auto sm:px-6 sm:py-3 sm:text-[14px]"
              >
                <Phone className="h-4 w-4" />
                GỌI NGAY: 1900.5301
              </a>
            </div>

            <div className="mt-5 sm:mt-6">
              <SectionTitle>CỬA HÀNG TẠI TP. HỒ CHÍ MINH</SectionTitle>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:gap-4 md:grid-cols-2">
                {hcmStores.map((store) => (
                  <StoreCard key={store.name} store={store} />
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <SectionTitle>CỬA HÀNG TẠI HÀ NỘI</SectionTitle>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:gap-4 md:grid-cols-2">
                {hanoiStores.map((store) => (
                  <StoreCard key={store.name} store={store} />
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-md bg-[#f3f4f6] px-3 py-4 text-center sm:mt-6 sm:px-4 sm:py-5">
              <div className="text-[15px] font-bold text-[#111827] sm:text-[16px]">
                Liên hệ với chúng tôi
              </div>
              <div className="mt-1 text-[15px] font-extrabold text-[#16a34a] sm:text-[16px]">
                HOTLINE: 1900.5301
              </div>
              <div className="mt-2 text-[12px] leading-6 text-[#374151]">
                Email: <span className="text-[#2563eb]">cskh@gearvn.com</span>
                <br />
                Website: <span className="text-[#2563eb]">www.gearvn.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}