import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceSidebar from "@/components/services/ServiceSidebar";

const deliveryFeeRows = [
  {
    orderValue: "Đơn hàng dưới 5 triệu đồng",
    hcmHn: "40.000 vnd",
    outerProvince: "Không áp dụng",
  },
  {
    orderValue: "Đơn hàng trên 5 triệu đồng",
    hcmHn: "Miễn phí",
    outerProvince: "Không áp dụng",
  },
];

const estimatedDeliveryRows = [
  {
    routes: ["Hồ Chí Minh - Hồ Chí Minh", "Hà Nội - Hà Nội"],
    areas: ["Nội Thành", "Ngoại Thành"],
    times: ["1 - 2 ngày"],
  },
  {
    routes: ["Hồ Chí Minh - Miền Nam", "Hà Nội - Miền Bắc"],
    areas: ["Trung tâm Tỉnh, Thành phố, Thị xã", "Huyện, xã"],
    times: ["3 - 4 ngày", "4 - 5 ngày"],
  },
  {
    routes: ["Hồ Chí Minh - Miền Trung", "Hà Nội - Miền Trung"],
    areas: ["Trung tâm Tỉnh, Thành phố, Thị xã", "Huyện, xã"],
    times: ["4 - 6 ngày", "5 - 7 ngày"],
  },
  {
    routes: ["Hồ Chí Minh - Miền Bắc", "Hà Nội - Miền Nam"],
    areas: ["Trung tâm Tỉnh, Thành phố, Thị xã", "Huyện, xã"],
    times: ["5 - 7 ngày", "5 - 7 ngày"],
  },
];

const receivingNotes = [
  "Trước khi tiến hành giao hàng cho Quý khách, Hỗ trợ kỹ thuật (HTTK) của GearVN hoặc bưu tá của Đối tác vận chuyển sẽ liên hệ qua số điện thoại của Quý khách trước khoảng 3 đến 5 phút để xác nhận giao hàng.",
  "Áp dụng cho đơn hàng giao hàng tiêu chuẩn, nếu Quý khách không thể có mặt trong đợt nhận hàng thứ nhất, bưu tá sẽ cố gắng liên lạc lại thêm ít nhất 2 lần nữa (trong 02 ca giao hàng khác nhau) để sắp xếp thời gian giao hàng, Quý khách vui lòng để ý điện thoại để liên hệ được với bưu tá giao hàng.",
];

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-6">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mb-4 flex items-center gap-2 text-[13px] text-gray-500">
          <Link href="/" className="text-blue-600 hover:underline">
            Trang chủ
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Chính sách vận chuyển</span>
        </div>

        <div className="rounded-lg bg-white p-4 md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <ServiceSidebar activeHref="/shipping-policy" />

            <section>
              <h1 className="text-[28px] font-bold text-gray-800 md:text-[42px]">
                Chính sách vận chuyển
              </h1>

              <div className="mt-8 space-y-6 text-[18px] leading-9 text-gray-800">
                <p className="italic">
                  <span className="font-bold">
                    Gearvn cung cấp dịch vụ giao hàng toàn quốc, gửi hàng tận nơi
                    đến địa chỉ cung cấp của Quý khách. Thời gian giao hàng dự
                    kiến phụ thuộc vào kho và địa chỉ nhận hàng của Quý khách.
                  </span>
                </p>

                <p>
                  Với đa phần đơn hàng, GearVN cần vài giờ làm việc để kiểm tra
                  thông tin và đóng gói hàng. Nếu các sản phẩm đều có sẵn GearVN
                  sẽ nhanh chóng bàn giao cho đối tác vận chuyển.
                </p>

                <div>
                  <h2 className="text-[22px] font-bold text-black">
                    Phí dịch vụ giao hàng
                  </h2>

                  <div className="mt-4 overflow-hidden rounded border border-gray-300">
                    <table className="w-full border-collapse text-left text-[16px]">
                      <thead>
                        <tr className="bg-white">
                          <th className="border border-gray-300 px-4 py-3 font-semibold">
                            Giá trị đơn hàng
                          </th>
                          <th className="border border-gray-300 px-4 py-3 font-semibold">
                            Khu vực HCM/HN
                          </th>
                          <th className="border border-gray-300 px-4 py-3 font-semibold">
                            Khu vực Ngoại thành/ Tỉnh
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            colSpan={3}
                            className="border border-gray-300 px-4 py-3 text-center font-medium"
                          >
                            GIAO HÀNG NHANH 2H ĐẾN 4H
                          </td>
                        </tr>

                        {deliveryFeeRows.map((row) => (
                          <tr key={row.orderValue}>
                            <td className="border border-gray-300 px-4 py-4">
                              • {row.orderValue}
                            </td>
                            <td className="border border-gray-300 px-4 py-4">
                              {row.hcmHn}
                            </td>
                            <td className="border border-gray-300 px-4 py-4">
                              {row.outerProvince}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-2 text-center italic">
                    Chính sách này có hiệu lực từ ngày 03 tháng 09 năm 2025.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">Thời gian dự kiến giao hàng:</span>{" "}
                    phụ thuộc vào kho và địa chỉ nhận hàng của Quý khách. Thời
                    gian dự kiến giao hàng tiêu chuẩn như sau:
                  </p>

                  <div className="mt-4 overflow-hidden rounded border border-gray-300">
                    <table className="w-full border-collapse text-left text-[16px]">
                      <thead>
                        <tr className="bg-white">
                          <th className="border border-gray-300 px-4 py-3 font-semibold">
                            Tuyến
                          </th>
                          <th className="border border-gray-300 px-4 py-3 font-semibold">
                            Khu vực
                          </th>
                          <th className="border border-gray-300 px-4 py-3 font-semibold">
                            Thời gian dự kiến
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {estimatedDeliveryRows.map((row, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-4 align-top">
                              <ul className="list-disc space-y-2 pl-5">
                                {row.routes.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </td>

                            <td className="border border-gray-300 px-4 py-4 align-top">
                              <ul className="list-disc space-y-2 pl-5">
                                {row.areas.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </td>

                            <td className="border border-gray-300 px-4 py-4 align-top">
                              <ul className="list-disc space-y-2 pl-5">
                                {row.times.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>
                      Nội thành Tp.HCM: Quận 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                      12, Bình Tân, Gò Vấp, Thủ Đức, Bình Thạnh, Phú Nhuận, Tân
                      Phú, Tân Bình.
                    </li>
                    <li>
                      Nội thành Hà Nội: Hoàn Kiếm, Đống Đa, Ba Đình, Hai Bà
                      Trưng, Hoàng Mai, Thanh Xuân, Tây Hồ, Cầu Giấy, Long Biên,
                      Hà Đông, Nam Từ Liêm, Bắc Từ Liêm.
                    </li>
                  </ul>

                  <div className="mt-4">
                    <p className="font-bold underline">Lưu ý:</p>

                    <ul className="mt-2 list-disc space-y-2 pl-6">
                      <li>
                        Trong một số trường hợp, hàng hóa không có sẵn tại kho
                        gần nhất, thời gian giao hàng có thể chậm hơn so với dự
                        kiến do điều hàng.
                      </li>
                      <li>
                        Ngày làm việc là từ thứ hai đến thứ 6, không tính thứ 7,
                        Chủ nhật và các ngày nghỉ lễ, tết, nghỉ bù, và không bao
                        gồm các tuyến huyện đảo xa.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-[24px] font-bold uppercase text-black">
                    MỘT SỐ LƯU Ý KHI NHẬN HÀNG
                  </h2>

                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    {receivingNotes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}

                    <li>
                      Khi nhận hàng, Quý khách vui lòng quay lại video quá trình
                      khui nhận hàng hóa. Trong trường hợp Quý khách không đồng
                      ý nhận hàng vì xuất phát nguyên nhân từ hàng hóa của
                      GEARVN không đảm bảo, không đúng như mô tả..., Đơn hàng
                      của Quý khách sẽ được hoàn lại cho chúng tôi và được hủy
                      trên hệ thống GearVN. Tham khảo thêm chính sách bảo hành
                      tại{" "}
                      <a
                        href="https://gearvn.com/pages/chinh-sach-bao-hanh"
                        className="text-blue-600 hover:underline"
                      >
                        https://gearvn.com/pages/chinh-sach-bao-hanh
                      </a>
                      .
                    </li>

                    <li>
                      Trong trường hợp đơn hàng đang giao đến Quý khách có ngoại
                      quan bên ngoài hộp hàng hóa có dấu hiệu bị rách, móp, ướt,
                      thủng, mất niêm phong,...Quý khách vui lòng kiểm tra kỹ
                      chất lượng sản phẩm bên trong trước khi nhận hàng. Quý
                      khách hoàn toàn có quyền từ chối nhận hàng và báo về cho
                      chúng tôi qua hotline{" "}
                      <span className="font-bold text-blue-600">1900.5301</span>{" "}
                      để được hỗ trợ giao lại đơn hàng mới hoặc hủy đơn hàng.
                    </li>

                    <li>
                      Mọi thông tin về việc thay đổi sản phẩm hay hủy đơn đơn
                      hàng, đề nghị Quý khách thông báo sớm để GearVN có thể
                      điều chỉnh lại đơn hàng. Quý khách có thể liên hệ với
                      chúng tôi qua số điện thoại hotline:{" "}
                      <span className="font-bold text-blue-600">1900.5301</span>{" "}
                      hoặc chat trực tiếp trên fanpage <b>GearVN</b> hoặc
                      website{" "}
                      <a
                        href="https://gearvn.com/"
                        className="text-blue-600 hover:underline"
                      >
                        https://gearvn.com/
                      </a>{" "}
                      để được hỗ trợ tra cứu tình hình vận chuyển đơn hàng.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}