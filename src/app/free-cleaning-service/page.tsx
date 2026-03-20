import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceSidebar from "@/components/services/ServiceSidebar";

const zaloLink = "https://zalo.me/s/2918563510026290661/";

export default function FreeCleaningServicePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-6">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mb-4 flex items-center gap-2 text-[13px] text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline">
            Trang chủ
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>GEARVN MEMBER - DỊCH VỤ VỆ SINH & BẢO DƯỠNG TẠI NHÀ</span>
        </div>

        <div className="rounded-lg bg-white p-4 md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <ServiceSidebar activeHref="/dich-vu-ve-sinh-mien-phi" />

            <section>
              <h1 className="text-[28px] font-bold text-gray-800 md:text-[42px]">
                GEARVN MEMBER - DỊCH VỤ VỆ SINH & BẢO DƯỠNG TẠI NHÀ
              </h1>

              <div className="mt-10 text-center">
                <h2 className="text-[24px] font-bold uppercase text-[#ef4b3f] md:text-[34px]">
                  DỊCH VỤ "VỆ SINH & BẢO DƯỠNG THIẾT BỊ TẠI NHÀ"
                </h2>

                <p className="mt-6 text-[18px] font-bold text-black md:text-[24px]">
                  🎉 Mở Ngay Ứng Dụng "GEARVN MEMBER" Trên Zalo Mini App để khám phá 🎉
                </p>
              </div>

              <div className="mt-8 space-y-6 text-[18px] leading-9 text-gray-800">
                <p>
                  Với mục tiêu không ngừng nâng tầm trải nghiệm và mang đến sự thuận
                  tiện tối đa sau mua hàng, GearVN chính thức ra mắt dịch vụ
                  "Vệ sinh & Bảo dưỡng Thiết bị Tại Nhà". Đây là dịch vụ chăm sóc
                  đặc biệt dành riêng cho nhóm Khách hàng thân thiết đã đồng hành
                  cùng chúng tôi trong suốt thời gian qua.
                </p>

                <p className="italic">
                  (Lưu ý: Hệ thống sẽ tự động quét lịch sử mua hàng và cấp quyền lợi
                  này cho các tài khoản đủ điều kiện).
                </p>

                <div>
                  <h2 className="text-[22px] font-bold text-black">
                    1. Quyền lợi & Đối tượng áp dụng
                  </h2>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>
                      <span className="font-bold">Đối tượng:</span> Dành riêng cho
                      Khách hàng thân thiết nhận được thông báo kích hoạt từ hệ
                      thống ZNS của GearVN.
                    </li>

                    <li>
                      <span className="font-bold">Quyền lợi:</span> Miễn phí 100%
                      gói dịch vụ Vệ sinh & Bảo dưỡng thiết bị tại nhà.
                    </li>

                    <li>
                      <span className="font-bold">Lưu ý:</span> Không áp dụng cho
                      PC Custom nước & Laptop tản nhiệt kim loại lỏng.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-[22px] font-bold text-black">
                    2. Hướng dẫn sử dụng dịch vụ
                  </h2>

                  <p className="mt-4">
                    Quý khách không cần tải app mới, thao tác trực tiếp trên Zalo:
                  </p>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>
                      <span className="font-bold">Bước 1:</span> Truy cập{" "}
                      <span className="font-bold">
                        Zalo Mini App "GearVN Member"
                      </span>{" "}
                      từ tin nhắn thông báo hoặc tìm kiếm trên Zalo.
                    </li>

                    <li>
                      <span className="font-bold">Bước 2:</span> Chọn mục{" "}
                      <span className="font-bold">Đặt lịch</span> → Chọn dịch vụ{" "}
                      <span className="font-bold">Vệ sinh thiết bị tại nhà</span>.
                    </li>

                    <li>
                      <span className="font-bold">Bước 3:</span> Chọn thời gian mong
                      muốn và hoàn tất.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-[22px] font-bold text-black">
                    3. Quy trình phục vụ chuẩn 4.0
                  </h2>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>
                      <span className="font-bold">Đặt lịch:</span> Khách hàng thao
                      tác trên Zalo Mini App.
                    </li>

                    <li>
                      <span className="font-bold">Xác nhận:</span> Đội ngũ kỹ thuật
                      gọi điện xác nhận địa chỉ và tình trạng máy.
                    </li>

                    <li>
                      <span className="font-bold">Thực hiện:</span> Đội ngũ kỹ thuật
                      đến tận nơi, thực hiện vệ sinh theo quy trình chuẩn.
                    </li>

                    <li>
                      <span className="font-bold">Hoàn tất & Đánh giá:</span> Khách
                      hàng nghiệm thu thiết bị và chấm điểm chất lượng dịch vụ ngay
                      trên App.
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-[20px] font-bold">
                    👉 Kiểm tra quyền lợi của bạn ngay tại:{" "}
                    <a
                      href={zaloLink}
                      className="text-blue-600 hover:underline"
                    >
                      link
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}