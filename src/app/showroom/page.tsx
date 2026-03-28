"use client";

import Link from "next/link";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import SideFloatBanners from "@/components/home/SideFloatBanners";

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
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="hidden xl:block">
              <SideFloatBanners />
            </div>
      <div className="flex items-start gap-2">
        <MapPin className="mt-1 h-4 w-4 text-red-500" />
        <h3 className="text-[16px] font-bold text-blue-600">{store.name}</h3>
      </div>

      <div className="mt-3 text-[14px] text-gray-700">
        <p>
          <span className="font-semibold">Địa chỉ:</span> {store.address}
        </p>

        <p className="mt-1">
          <span className="font-semibold">Giờ làm việc:</span> {store.hours}
        </p>
      </div>

      <div className="mt-3">
        <a
          href={store.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-[14px] font-semibold text-white hover:bg-blue-600"
        >
          <MapPin className="h-4 w-4" />
          Chỉ đường
        </a>
      </div>
    </div>
  );
}

export default function ShowroomPage() {
  return (
    <main className="bg-gray-100 py-6">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-[13px] text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline">
            Trang chủ
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Hệ thống cửa hàng GearVN</span>
        </div>

        <div className="rounded-lg bg-white p-6">
          <h1 className="text-[24px] font-bold text-gray-800">
            Hệ thống cửa hàng GearVN
          </h1>

          {/* giờ mở cửa */}
          <div className="mt-4 rounded bg-gray-100 p-4 text-[15px]">
            <span className="font-semibold">Giờ mở cửa:</span>{" "}
            <b>08:00 - 21:00</b>
          </div>

          {/* hotline */}
          <div className="mt-4 flex justify-center">
            <a
              href="tel:19005301"
              className="flex items-center gap-2 rounded bg-green-500 px-6 py-2 text-[16px] font-bold text-white hover:bg-green-600"
            >
              <Phone className="h-4 w-4" />
              GỌI NGAY: 1900.5301
            </a>
          </div>

          {/* HCM */}
          <div className="mt-6">
            <div className="rounded bg-black py-3 text-center text-[16px] font-bold text-white">
              CỬA HÀNG TẠI TP. HỒ CHÍ MINH
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {hcmStores.map((store) => (
                <StoreCard key={store.name} store={store} />
              ))}
            </div>
          </div>

          {/* HANOI */}
          <div className="mt-6">
            <div className="rounded bg-black py-3 text-center text-[16px] font-bold text-white">
              CỬA HÀNG TẠI HÀ NỘI
            </div>

            <div className="mt-4 grid gap-4">
              {hanoiStores.map((store) => (
                <StoreCard key={store.name} store={store} />
              ))}
            </div>
          </div>

          {/* contact */}
          <div className="mt-6 rounded bg-gray-100 p-5 text-center">
            <div className="text-[18px] font-bold">Liên hệ với chúng tôi</div>

            <div className="mt-1 text-[16px] font-bold text-green-600">
              HOTLINE: 1900.5301
            </div>

            <div className="mt-2 text-[14px]">
              Email:{" "}
              <span className="text-blue-600">cskh@gearvn.com</span> | Website:{" "}
              <span className="text-blue-600">www.gearvn.com</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}