"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import WarrantyTable from "@/components/services/WarrantyTable";
import {
  southWarrantyCenters,
  northWarrantyCenters,
} from "@/data/warrantyCenters";

type LookupTab = "warranty" | "imei";

export default function WarrantyLookupPage() {
  const [activeTab, setActiveTab] = useState<LookupTab>("warranty");
  const [phone, setPhone] = useState("");
  const [warrantyCode, setWarrantyCode] = useState("");
  const [imei, setImei] = useState("");

  const handleWarrantyLookup = () => {
    alert(
      `Hiện tại mới là giao diện demo.\nSố điện thoại: ${phone}\nMã phiếu bảo hành: ${warrantyCode}`
    );
  };

  const handleImeiLookup = () => {
    alert(`Hiện tại mới là giao diện demo.\nIMEI: ${imei}`);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-6">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mb-4 flex items-center gap-2 text-[13px] text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline">
            Trang chủ
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Trung tâm hỗ trợ tra cứu thông tin bảo hành sản phẩm chính hãng</span>
        </div>

        <div className="rounded-lg bg-white p-4 md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <ServiceSidebar activeHref="/warranty-lookup" />

            <section>
              <h1 className="text-[28px] font-bold leading-tight text-gray-800 md:text-[42px]">
                Trung tâm hỗ trợ tra cứu thông tin bảo hành sản phẩm chính hãng
              </h1>

              <div className="mt-8 flex flex-wrap gap-8">
                <button
                  type="button"
                  onClick={() => setActiveTab("warranty")}
                  className={`min-w-[300px] px-6 py-4 text-[18px] font-semibold transition ${
                    activeTab === "warranty"
                      ? "bg-[#4f6df5] text-white"
                      : "bg-transparent text-black"
                  }`}
                >
                  Tra cứu phiếu bảo hành
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("imei")}
                  className={`min-w-[220px] px-6 py-4 text-[18px] font-semibold transition ${
                    activeTab === "imei"
                      ? "bg-[#4f6df5] text-white"
                      : "bg-transparent text-black"
                  }`}
                >
                  Tra cứu IMEI
                </button>
              </div>

              {activeTab === "warranty" ? (
                <div className="mt-8">
                  <p className="text-[18px] font-medium text-black">
                    Quý khách vui lòng nhập cả 2 trường thông tin (bắt buộc) để tra
                    cứu trạng thái của phiếu bảo hành.
                  </p>

                  <div className="mt-4 flex flex-col overflow-hidden rounded-md border border-gray-300 md:flex-row">
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 px-4 py-4 text-[18px] outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Mã phiếu bảo hành"
                      value={warrantyCode}
                      onChange={(e) => setWarrantyCode(e.target.value)}
                      className="flex-1 border-t border-gray-300 px-4 py-4 text-[18px] outline-none md:border-l md:border-t-0"
                    />

                    <button
                      type="button"
                      onClick={handleWarrantyLookup}
                      className="bg-[#2878f0] px-8 py-4 text-[18px] font-semibold text-white hover:opacity-90"
                    >
                      Tra cứu
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-8">
                  <p className="text-[18px] font-medium text-black">
                    Quý khách vui lòng nhập IMEI để tra cứu bảo hành thiết bị.
                  </p>

                  <div className="mt-4 flex flex-col overflow-hidden rounded-md border border-gray-300 md:flex-row">
                    <input
                      type="text"
                      placeholder="Nhập IMEI"
                      value={imei}
                      onChange={(e) => setImei(e.target.value)}
                      className="flex-1 px-4 py-4 text-[18px] outline-none"
                    />

                    <button
                      type="button"
                      onClick={handleImeiLookup}
                      className="bg-[#2878f0] px-8 py-4 text-[18px] font-semibold text-white hover:opacity-90"
                    >
                      Tra cứu
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-10 border-t border-gray-300 pt-6 text-[18px] leading-9 text-gray-800">
                <p>
                  GEARVN xin lỗi vì sự cố khiến thiết bị của Quý khách bị hỏng phải
                  đi bảo hành, để Quý khách hàng thuận tiện trong thời gian bảo hành
                  sản phẩm, GEARVN xin cung cấp các thông tin địa chỉ bảo hành chính
                  hãng để tiết kiệm thời gian và không ảnh hưởng đến công việc của
                  Quý khách.
                </p>

                <h2 className="mt-8 text-[22px] font-bold text-black">
                  Tại khu vực miền Nam Quý khách vui lòng tra cứu thông tin bảo
                  hành theo bảng này:
                </h2>

                <WarrantyTable
                  title="GEARVN - ĐỊA CHỈ BẢO HÀNH KHU VỰC MIỀN NAM"
                  regionLabel="Khu vực miền Nam"
                  rows={southWarrantyCenters}
                />

                <h2 className="mt-10 text-[22px] font-bold text-black">
                  Tại Khu vực miền Bắc Quý khách vui lòng tra cứu thông tin bảo
                  hành theo bảng này:
                </h2>

                <WarrantyTable
                  title="GEARVN - ĐỊA CHỈ BẢO HÀNH KHU VỰC MIỀN BẮC"
                  regionLabel="Khu vực miền Bắc"
                  rows={northWarrantyCenters}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}