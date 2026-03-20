import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceSidebar from "@/components/services/ServiceSidebar";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-6">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mb-4 flex items-center gap-2 text-[13px] text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline">
            Trang chủ
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Điều khoản dịch vụ</span>
        </div>

        <div className="rounded-lg bg-white p-4 md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <ServiceSidebar activeHref="/terms-of-service" />

            <section>
              <h1 className="text-[28px] font-bold text-gray-800 md:text-[42px]">
                Điều khoản dịch vụ
              </h1>

              <div className="mt-8 space-y-8 text-[18px] leading-9 text-gray-800">
                <div>
                  <h2 className="text-[22px] font-bold text-black">
                    1. Giới thiệu
                  </h2>

                  <p className="mt-4">
                    Chào mừng quý khách hàng đến với website chúng tôi.
                  </p>

                  <p className="mt-4">
                    Khi quý khách hàng truy cập vào trang website của chúng tôi có
                    nghĩa là quý khách đồng ý với các điều khoản này. Trang web có
                    quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào
                    trong Điều khoản mua bán hàng hóa này, vào bất cứ lúc nào. Các
                    thay đổi có hiệu lực ngay khi được đăng trên trang web mà không
                    cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang
                    web, sau khi các thay đổi về Điều khoản này được đăng tải, có
                    nghĩa là quý khách chấp nhận với những thay đổi đó.
                  </p>

                  <p className="mt-4">
                    Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những
                    thay đổi của chúng tôi.
                  </p>
                </div>

                <div>
                  <h2 className="text-[22px] font-bold text-black">
                    2. Hướng dẫn sử dụng website
                  </h2>

                  <p className="mt-4">
                    Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi,
                    hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp
                    pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện
                    các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp
                    luật Việt Nam.
                  </p>

                  <p className="mt-4">
                    Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng
                    cáo từ website. Nếu không muốn tiếp tục nhận mail, quý khách có
                    thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi
                    email quảng cáo.
                  </p>
                </div>

                <div>
                  <h2 className="text-[22px] font-bold text-black">
                    3. Thanh toán an toàn và tiện lợi
                  </h2>

                  <p className="mt-4">
                    Người mua có thể tham khảo các phương thức thanh toán sau đây và
                    lựa chọn áp dụng phương thức phù hợp:
                  </p>

                  <div className="mt-4 space-y-2">
                    <p>
                      <span className="font-bold underline">Cách 1:</span> Thanh
                      toán trực tiếp (người mua nhận hàng tại địa chỉ người bán)
                    </p>

                    <p>
                      <span className="font-bold underline">Cách 2:</span> Thanh
                      toán sau (COD - giao hàng và thu tiền tận nơi)
                    </p>

                    <p>
                      <span className="font-bold underline">Cách 3:</span> Thanh
                      toán online qua thẻ tín dụng, chuyển khoản
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}