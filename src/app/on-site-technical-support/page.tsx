import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
// import ServiceSidebar from "@/components/services/ServiceSidebar";
import SideFloatBanners from "@/components/home/SideFloatBanners";

const googleFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSdPLGe0SVcpCzyd0su-vLLhsxCa17WDH82F7MDW9YKp62hXeg/viewform?usp=publish-editor";

export default function OnSiteTechnicalSupportPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-3 sm:py-6">
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-4">
        <div className="hidden xl:block">
          <SideFloatBanners />
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-1.5 text-xs leading-5 text-gray-500 sm:mb-4 sm:gap-2 sm:text-[13px]">
          <Link href="/" className="text-blue-600 hover:underline">
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
          <span className="break-words">
            GearVN hợp tác với ALD Service cung cấp dịch vụ kỹ thuật tại nhà
          </span>
        </div>

        <div className="rounded-lg bg-white p-3 sm:p-4 md:p-6">
          <div>
            {/* <ServiceSidebar activeHref="/on-site-technical-support" /> */}

            <section>
              <h1 className="text-xl font-bold leading-tight text-gray-800 sm:text-[28px] md:text-[42px]">
                GearVN hợp tác với ALD Service cung cấp dịch vụ kỹ thuật tại nhà
              </h1>

              <div className="mt-6 text-center sm:mt-8">
                <h2 className="text-2xl font-bold uppercase leading-tight text-black sm:text-[34px] md:text-[40px]">
                  YÊU CẦU DỊCH VỤ:{" "}
                  <a
                    href={googleFormLink}
                    className="normal-case text-[#d34a32] hover:underline"
                  >
                    Click ↗
                  </a>
                </h2>
              </div>

              <div className="mt-4 overflow-hidden rounded-md">
                <Image
                  src="/services/dich_vu_hop_tac_gearvn_ald_service.png"
                  alt="GearVN hợp tác với ALD Service"
                  width={1400}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <div className="mt-5 text-sm leading-7 text-gray-800 sm:mt-6 sm:text-[18px] sm:leading-9">
                <p className="italic">
                  <span className="font-bold">GearVN</span> vui mừng thông báo về
                  sự hợp tác với ALD Service, một trong những đơn vị chuyên
                  nghiệp về dịch vụ xử lý kỹ thuật tại nhà. Với sự hợp tác này,
                  ALD Service cam kết mang đến dịch vụ chất lượng cao, đáp ứng
                  nhanh chóng nhu cầu xử lý kỹ thuật tại nhà cho khách hàng của
                  GearVN.
                </p>
              </div>

              <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                <div className="overflow-hidden rounded border border-gray-200">
                  <div className="border-b border-gray-200 px-3 py-4 text-center sm:px-4 sm:py-5">
                    <h3 className="text-xl font-bold italic leading-tight text-[#e24b34] sm:text-[28px]">
                      COMBO DỊCH VỤ - LỰA CHỌN TIẾT KIỆM HƠN
                    </h3>

                    <p className="mt-4 text-lg font-bold italic text-[#e24b34] sm:mt-6 sm:text-[24px]">
                      COMBO LẮP ĐẶT - 449.000đ
                    </p>

                    <p className="mt-3 text-base font-semibold italic leading-7 text-gray-800 sm:mt-4 sm:text-[20px] sm:leading-8">
                      Dành cho khách hàng đã có sẵn linh kiện mới và cần kỹ
                      thuật viên đến tận nhà hỗ trợ lắp đặt, đi dây và cài đặt
                      máy tính.
                    </p>
                  </div>

                  <div className="p-3 text-sm leading-7 text-gray-800 sm:p-4 sm:text-[17px] sm:leading-9 md:p-6">
                    <p className="font-semibold">
                      KTV đến nhà xử lý tất cả dịch vụ trong 1 lần hỗ trợ:
                    </p>

                    <ol className="mt-2 list-decimal space-y-1.5 pl-5 sm:space-y-2 sm:pl-6">
                      <li>Kiểm tra tình trạng linh kiện</li>
                      <li>Lắp ráp & đi dây trong PC</li>
                      <li>Cài đặt Windows và các phần mềm cơ bản</li>
                    </ol>

                    <p className="mt-4">
                      <span className="font-bold">Lợi ích:</span> Bạn có thể dùng
                      thời gian để thư giãn, lắp ráp PC đã có kỹ thuật viên lo.
                      Bạn chỉ cần chuẩn bị linh kiện, gọi ALD Service sau có máy
                      sẵn sàng dùng!
                    </p>

                    <p className="mt-4">
                      Giá dịch vụ trọn gói đã bao gồm VAT và phí di chuyển
                      &lt;20km
                    </p>

                    <p className="mt-4">
                      <span className="font-bold">Bảo hành:</span> 7 ngày kể từ
                      khi hoàn tất dịch vụ
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded border border-gray-200">
                  <div className="border-b border-gray-200 px-3 py-4 text-center sm:px-4 sm:py-5">
                    <p className="text-lg font-bold italic text-[#e24b34] sm:text-[24px]">
                      COMBO BẢO TRÌ - 549.000đ
                    </p>

                    <p className="mt-2 text-base italic text-[#efb11d] sm:text-[20px]">
                      (tiết kiệm hơn 25% so với mua lẻ dịch vụ)
                    </p>

                    <p className="mt-3 text-base font-semibold italic leading-7 text-gray-800 sm:mt-4 sm:text-[20px] sm:leading-8">
                      Dành cho khách hàng đang có PC cần kiểm tra và vệ sinh để
                      tối ưu hiệu năng vận hành!
                    </p>
                  </div>

                  <div className="p-3 text-sm leading-7 text-gray-800 sm:p-4 sm:text-[17px] sm:leading-9 md:p-6">
                    <p className="font-semibold">
                      Trong 1 lần hỗ trợ, KTV đến nhà xử lý tất cả dịch vụ sau:
                    </p>

                    <ol className="mt-2 list-decimal space-y-1.5 pl-5 sm:space-y-2 sm:pl-6">
                      <li>Kiểm tra tình trạng linh kiện</li>
                      <li>Tìm lỗi & xử lý</li>
                      <li>Cài đặt Windows và các phần mềm cơ bản</li>
                      <li>Vệ sinh máy tính</li>
                      <li>Tra keo tản nhiệt CPU bằng MX4</li>
                    </ol>

                    <p className="mt-4">
                      <span className="font-bold">Lợi ích:</span> Bạn không cần
                      phải tốn thời gian kiểm tra linh kiện, tìm lỗi hay loay
                      hoay cài phần mềm. Tất cả đã có đội ngũ kỹ thuật viên đến
                      nhà xử lý giúp bạn!
                    </p>

                    <p className="mt-4">
                      Giá dịch vụ trọn gói đã bao gồm VAT và phí di chuyển
                      &lt;20km
                    </p>

                    <p className="mt-4">
                      <span className="font-bold">Bảo hành:</span> 7 ngày kể từ
                      khi hoàn tất dịch vụ
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded border border-gray-200">
                  <div className="border-b border-gray-200 px-3 py-4 text-center sm:px-4 sm:py-5">
                    <p className="text-lg font-bold italic text-[#e24b34] sm:text-[24px]">
                      COMBO NÂNG CẤP - 649.000đ
                    </p>

                    <p className="mt-2 text-base italic text-[#efb11d] sm:text-[20px]">
                      (tiết kiệm hơn 35% so với mua lẻ dịch vụ)
                    </p>

                    <p className="mt-3 text-base font-semibold italic leading-7 text-gray-800 sm:mt-4 sm:text-[20px] sm:leading-8">
                      Dành cho khách hàng đang có linh kiện mới và PC cũ cần vệ
                      sinh và nâng cấp tại nhà!
                    </p>
                  </div>

                  <div className="p-3 text-sm leading-7 text-gray-800 sm:p-4 sm:text-[17px] sm:leading-9 md:p-6">
                    <p className="font-semibold">
                      Trong 1 lần hỗ trợ, KTV đến nhà xử lý tất cả dịch vụ sau:
                    </p>

                    <ol className="mt-2 list-decimal space-y-1.5 pl-5 sm:space-y-2 sm:pl-6">
                      <li>Kiểm tra tình trạng linh kiện</li>
                      <li>Lắp ráp & đi dây trong PC</li>
                      <li>Cài đặt Windows và các phần mềm cơ bản</li>
                      <li>Vệ sinh máy tính</li>
                      <li>Tra keo tản nhiệt CPU bằng MX4</li>
                    </ol>

                    <p className="mt-4">
                      <span className="font-bold">Lợi ích:</span> Linh kiện được
                      kiểm tra trước khi lắp, máy tính được làm mới, tiết kiệm
                      chi phí mua keo tản nhiệt cao cấp, máy tính được cài phần
                      mềm cần thiết. Bạn nhận lại một chiếc PC nâng cấp mới, chỉ
                      việc dùng, không lo nghĩ.
                    </p>

                    <p className="mt-4">
                      Giá dịch vụ trọn gói đã bao gồm VAT và phí di chuyển
                      &lt;20km
                    </p>

                    <p className="mt-4">
                      <span className="font-bold">Bảo hành:</span> 7 ngày kể từ
                      khi hoàn tất dịch vụ
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded border border-gray-200">
                  <div className="border-b border-gray-200 px-3 py-4 text-center sm:px-4 sm:py-5">
                    <p className="text-lg font-bold italic text-[#e24b34] sm:text-[24px]">
                      DỊCH VỤ LẺ - BẠN GỌI - CHÚNG TÔI ĐẾN
                    </p>

                    <p className="mt-3 text-base font-semibold italic leading-7 text-gray-800 sm:mt-4 sm:text-[20px] sm:leading-8">
                      Dành cho khách hàng đã hiểu vấn đề của máy, cần KTV đến
                      nhà xử lý
                    </p>
                  </div>

                  <div className="p-3 text-sm leading-7 text-gray-800 sm:p-4 sm:text-[17px] sm:leading-9 md:p-6">
                    <ul className="list-disc space-y-1.5 pl-5 sm:space-y-2 sm:pl-6">
                      <li>
                        Dịch vụ bảo trì máy tính:{" "}
                        <span className="font-bold">349.000đ</span>
                      </li>
                      <li>
                        Dịch vụ cân màu màn hình:{" "}
                        <span className="font-bold">349.000đ</span>
                      </li>
                      <li>
                        Dịch vụ nâng cấp linh kiện:{" "}
                        <span className="font-bold">349.000đ</span>
                      </li>
                      <li>
                        Dịch vụ vệ sinh PC/Laptop - Tản nhiệt khí:{" "}
                        <span className="font-bold">349.000đ</span>
                      </li>
                      <li>
                        Dịch vụ vệ sinh PC - Tản nhiệt nước (AIO):{" "}
                        <span className="font-bold">399.000đ</span>
                      </li>
                      <li>
                        Dịch vụ vệ sinh ghế da:{" "}
                        <span className="font-bold">349.000đ</span>
                      </li>
                      <li>
                        Dịch vụ vệ sinh ghế nỉ/lưới:{" "}
                        <span className="font-bold">399.000đ</span>
                      </li>
                      <li>
                        Dịch vụ vệ sinh máy tính Custom:{" "}
                        <span className="font-bold">2 - 5 triệu</span>
                      </li>
                      <li>
                        Dịch vụ giao nhận (PC, linh kiện):{" "}
                        <span className="font-bold">LIÊN HỆ</span>
                      </li>
                    </ul>

                    <p className="mt-6">Giá dịch vụ trọn gói đã bao gồm VAT</p>

                    <p className="mt-4">
                      <span className="font-bold">Bảo hành:</span> 7 ngày kể từ
                      khi hoàn tất dịch vụ
                    </p>

                    <p className="mt-4">
                      Miễn phí di chuyển trong phạm vi 20km tính từ ALD Service
                      (34/9 Đ. Phùng Văn Cung, Phường Cầu Kiệu, Hồ Chí Minh).
                    </p>

                    <div className="mt-4">
                      <p>Chi phí phụ thu thêm khoảng cách và ngoài giờ:</p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 sm:space-y-2 sm:pl-6">
                        <li>Từ 21-25km: 50.000đ</li>
                        <li>Từ 26-30km: 100.000đ</li>
                        <li>Trước 8h30 và sau 18h: 150.000đ</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded border border-gray-200">
                  <div className="border-b border-gray-200 px-3 py-4 text-center sm:px-4 sm:py-5">
                    <p className="text-lg font-bold italic text-[#e24b34] sm:text-[24px]">
                      GÓI THÀNH VIÊN - chỉ 999.000đ/năm
                    </p>

                    <p className="mt-2 text-base italic text-[#efb11d] sm:text-[20px]">
                      (tiết kiệm hơn 45% so với mua lẻ dịch vụ)
                    </p>

                    <p className="mt-3 text-base font-semibold italic leading-7 text-gray-800 sm:mt-4 sm:text-[20px] sm:leading-8">
                      Dành cho khách hàng cần bảo trì, vệ sinh PC định kỳ để tối
                      ưu hiệu năng và thời gian sử dụng
                    </p>
                  </div>

                  <div className="p-3 text-sm leading-7 text-gray-800 sm:p-4 sm:text-[17px] sm:leading-9 md:p-6">
                    <p>Trong 12 tháng, KTV đến nhà xử lý tất cả dịch vụ sau:</p>

                    <ul className="mt-2 list-disc space-y-1.5 pl-5 sm:space-y-2 sm:pl-6">
                      <li>2 lần sử dụng COMBO BẢO TRÌ</li>
                      <li>1 lần sử dụng dịch vụ lẻ theo nhu cầu</li>
                      <li>
                        1 lần hỗ trợ khẩn cấp (trong khung giờ từ 8h-20h)
                      </li>
                      <li>Thời hạn sử dụng: 12 tháng kể từ ngày đăng ký</li>
                    </ul>

                    <p className="mt-4 italic">
                      Giá dịch vụ trọn gói đã bao gồm VAT và phí di chuyển
                      &lt;20km
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center sm:mt-10">
                <h2 className="text-2xl font-bold uppercase leading-tight text-black sm:text-[34px] md:text-[40px]">
                  YÊU CẦU DỊCH VỤ:{" "}
                  <a
                    href={googleFormLink}
                    className="normal-case text-[#d34a32] hover:underline"
                  >
                    Click tại đây
                  </a>
                </h2>
              </div>

              <div className="mt-6 text-sm leading-7 text-gray-800 sm:mt-8 sm:text-[18px] sm:leading-9">
                <h3 className="text-xl font-bold uppercase text-black sm:text-[24px]">
                  THÔNG TIN LIÊN HỆ
                </h3>

                <p className="mt-4">
                  <span className="font-bold italic">Số điện thoại:</span>{" "}
                  0947.266.276
                </p>

                <p className="mt-4">
                  <span className="font-bold italic">Địa chỉ:</span> 34/9 Đ.
                  Phùng Văn Cung, Phường Cầu Kiệu, Hồ Chí Minh
                </p>

                <h3 className="mt-6 text-xl font-bold uppercase text-black sm:mt-8 sm:text-[24px]">
                  THỜI GIAN LÀM VIỆC
                </h3>

                <ul className="mt-4 list-disc space-y-1.5 pl-5 sm:space-y-2 sm:pl-6">
                  <li>Thời gian làm việc: 08h30 - 18h00 (Thứ 2 - Chủ nhật)</li>
                  <li>Phạm vi hỗ trợ tối đa: 30km tính từ ALD Service</li>
                  <li>
                    Thời gian phản hồi: ALD Service cam kết phản hồi khách hàng
                    trong vòng 12 tiếng kể từ khi tiếp nhận yêu cầu.
                  </li>
                </ul>

                <p className="mt-6">
                  Khách hàng của GEARVN có thể hoàn toàn yên tâm sử dụng dịch vụ
                  kỹ thuật tại nhà thông qua đối tác uy tín của chúng tôi là ALD
                  Service.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}