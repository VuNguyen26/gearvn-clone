"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServiceSidebar from "@/components/services/ServiceSidebar";

type LookupTab = "warranty" | "imei";

type ProcessTimeRow = {
  category: string;
  time: string;
};

type DepreciationRow = {
  usage: string;
  depreciation: string;
};

const processTimeRows: ProcessTimeRow[] = [
  { category: "CHU - Chuột", time: "Từ 7 đến 30 ngày" },
  { category: "CM - Card mạng", time: "Từ 21 đến 30 ngày" },
  { category: "CPU - Bộ vi xử lý", time: "Từ 7 đến 14 ngày" },
  { category: "FAN - Quạt máy tính", time: "Trong vòng 21 ngày" },
  { category: "GHE - Ghế", time: "Từ 7 đến 30 ngày" },
  { category: "HDD - Ổ cứng HDD", time: "Từ 7 đến 21 ngày" },
  { category: "KB - Bàn phím", time: "Từ 7 đến 30 ngày" },
  { category: "LAP - Máy tính xách tay Laptop", time: "Từ 7 đến 30 ngày" },
  { category: "LOA - Loa", time: "Từ 7 đến 30 ngày" },
  { category: "MAN - Màn hình", time: "Từ 7 đến 30 ngày" },
  { category: "MB - Bo mạch chủ", time: "Từ 7 đến 30 ngày" },
  { category: "MBH - Máy bộ hãng", time: "Từ 21 đến 30 ngày" },
  { category: "MCG - Máy chơi game cầm tay", time: "Từ 14 đến 30 ngày" },
  { category: "Linh kiện khác", time: "Từ 7 đến 30 ngày" },
  { category: "PK-MAN - Phụ kiện màn hình", time: "Trong vòng 7 ngày" },
  { category: "PK-PC - Phụ kiện PC", time: "Từ 14 đến 30 ngày" },
  { category: "PKS - Phụ kiện thông minh", time: "Trong vòng 30 ngày" },
  { category: "PW - Nguồn máy tính", time: "Từ 7 đến 30 ngày" },
  { category: "RAM", time: "Từ 7 đến 30 ngày" },
  { category: "RAM-LAP - RAM Laptop", time: "Từ 14 đến 21 ngày" },
  { category: "RT - Router", time: "Từ 14 đến 30 ngày" },
  { category: "SSD - Ổ cứng SSD", time: "Từ 7 đến 30 ngày" },
  { category: "TAI - Tai nghe gaming", time: "Từ 7 đến 30 ngày" },
  { category: "TAI-AUDIO - Tai nghe Audio", time: "Từ 7 đến 30 ngày" },
  { category: "TBM - Thiết bị mạng", time: "Trong vòng 14 ngày" },
];

const depreciationRows: DepreciationRow[] = [
  {
    usage: "Trong 30 ngày đầu tiên tính từ ngày mua hàng",
    depreciation: "0%",
  },
  { usage: "Từ tháng thứ 02", depreciation: "20%" },
  { usage: "Từ tháng thứ 03", depreciation: "25%" },
  { usage: "Từ tháng thứ 04", depreciation: "30%" },
  { usage: "Từ tháng thứ 05", depreciation: "35%" },
  { usage: "Từ tháng thứ 06", depreciation: "40%" },
  { usage: "Từ tháng thứ 07", depreciation: "45%" },
  { usage: "Từ tháng thứ 08", depreciation: "50%" },
  { usage: "Từ tháng thứ 09", depreciation: "55%" },
  { usage: "Từ tháng thứ 10", depreciation: "60%" },
  { usage: "Từ tháng thứ 11", depreciation: "65%" },
  { usage: "Từ tháng thứ 12", depreciation: "70%" },
];

const showroomMaps = [
  {
    title: "GEARVN Hoàng Hoa Thám",
    address: "78-80-82 Hoàng Hoa Thám, Tân Bình, TP.HCM",
  },
  {
    title: "GEARVN Kha Vạn Cân",
    address: "905 Kha Vạn Cân, Thủ Đức, TP.HCM",
  },
  {
    title: "GEARVN Trần Hưng Đạo",
    address: "98 Trần Bình Trọng, Quận 5, TP.HCM",
  },
  {
    title: "GEARVN Thái Hà",
    address: "30-32 Thái Hà, Đống Đa, Hà Nội",
  },
];

function ShowroomMapCard({
  title,
  address,
}: {
  title: string;
  address: string;
}) {
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=15&output=embed`;

  return (
    <div className="overflow-hidden rounded border border-gray-200 bg-white">
      <iframe
        src={embedUrl}
        title={title}
        className="h-[260px] w-full"
        loading="lazy"
      />
    </div>
  );
}

export default function WarrantyPolicyPage() {
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
          <span>Chính sách bảo hành cho khách hàng GEARVN</span>
        </div>

        <div className="rounded-lg bg-white p-4 md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <ServiceSidebar activeHref="/warranty-policy" />

            <section>
              <h1 className="text-[28px] font-bold text-gray-800 md:text-[42px]">
                Chính sách bảo hành cho khách hàng GEARVN
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
                  Để thuận tiện cho việc tra cứu bảo hành các sản phẩm tại GearVN,
                  xin kính gửi Quý khách hàng các thông tin chính sách bảo hành tại
                  GEARVN và các thông tin liên hệ khi cần.
                </p>

                <div className="mt-8">
                  <h2 className="text-[22px] font-bold uppercase text-black">
                    1. LIÊN HỆ BẢO HÀNH SẢN PHẨM
                  </h2>

                  <p className="mt-4">
                    Khi có nhu cầu bảo hành sản phẩm, khách hàng vui lòng liên hệ
                    với GearVN qua các hình thức sau:
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>
                      Gọi tổng đài bảo hành{" "}
                      <span className="font-bold text-blue-600">1900.5325</span>.
                    </li>
                    <li>
                      Gửi tin nhắn trực tiếp tại{" "}
                      <a
                        href="https://gearvn.com/"
                        className="font-bold hover:underline"
                      >
                        website
                      </a>{" "}
                      hoặc <span className="font-bold">fanpage</span>.
                    </li>
                    <li>
                      Mang sản phẩm trực tiếp đến các chi nhánh cửa hàng hoặc Trung
                      tâm bảo hành của GearVN.
                    </li>
                    <li>
                      Mang sản phẩm trực tiếp đến Trung tâm bảo hành của hãng/nhà
                      cung cấp của sản phẩm.
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="/showroom"
                      className="text-[18px] underline hover:text-blue-600"
                    >
                      Xem hệ thống Showroom GearVN tại đây:
                    </Link>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {showroomMaps.map((item) => (
                      <ShowroomMapCard
                        key={item.title}
                        title={item.title}
                        address={item.address}
                      />
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="font-bold">Lưu ý:</p>
                    <ul className="mt-2 list-disc space-y-2 pl-6 italic">
                      <li>
                        Khách hàng cũng có thể gửi sản phẩm bảo hành thông qua đơn
                        vị vận chuyển. GearVN sau khi tiếp nhận sản phẩm sẽ thông
                        tin tiến độ tới khách hàng.
                      </li>
                      <li>
                        Khách hàng vui lòng liên hệ nhân viên tư vấn trước khi gửi
                        hàng để được hỗ trợ.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-[22px] font-bold uppercase text-black">
                    2. ĐIỀU KIỆN BẢO HÀNH
                  </h2>

                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>
                      Sản phẩm còn trong thời hạn bảo hành của GearVN; Thời hạn bảo
                      hành được ghi nhận dựa trên thông tin mua hàng, số Serial
                      Number của sản phẩm.
                    </li>
                    <li>
                      Sản phẩm phải còn tem niêm phong bảo hành hoặc tem của nhà
                      phân phối. Với các sản phẩm cần bảo hành theo hộp, khách hàng
                      phải gửi đầy đủ hộp và phụ kiện đi kèm.
                    </li>
                    <li>
                      Sản phẩm còn nguyên trạng, không trầy xước cấn móp, biến dạng
                      ngoài quy định của hãng/ nhà phân phối.
                    </li>
                    <li>
                      Sản phẩm phát sinh lỗi trong quá trình sử dụng do nhà sản xuất
                      như linh kiện, lỗi kỹ thuật.
                    </li>
                  </ul>

                  <div className="mt-6">
                    <p className="font-bold underline">Lưu ý:</p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        Các điều kiện bảo hành cụ thể có thể thay đổi tùy theo từng
                        nhà sản xuất và nhà cung cấp sản phẩm.
                      </li>
                      <li className="text-[#d94b4b]">
                        Dữ liệu (lưu trữ trong sản phẩm: Laptop/ Máy tính để bàn/
                        Thẻ nhớ/ Ổ cứng...) không thuộc phạm vi bảo hành. Chúng tôi
                        hoàn toàn từ chối trách nhiệm trong quá trình lưu dữ liệu quý
                        khách hàng và luôn cố gắng hết sức để hỗ trợ hướng dẫn quý
                        khách hàng trong việc sao lưu dữ liệu. GearVN không chịu
                        trách nhiệm về bất cứ thiệt hại trực tiếp hoặc gián tiếp nào
                        gây ra cho quý khách hàng nếu dữ liệu lưu trong sản phẩm bị
                        tiết lộ, bị mất, bị hư hỏng trong quá trình kiểm tra, xử lý
                        bảo hành.
                      </li>
                      <li>
                        Nên tham khảo kỹ phiếu bảo hành và chính sách bảo hành của
                        nhà sản xuất trước khi sử dụng sản phẩm.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-[22px] font-bold uppercase text-black">
                    3. SẢN PHẨM KHÔNG ĐỦ ĐIỀU KIỆN BẢO HÀNH
                  </h2>

                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Sản phẩm hết hạn bảo hành tại GearVN.</li>
                    <li>
                      Sản phẩm không đầy đủ các thiết bị, linh kiện đi kèm bắt buộc
                      (ví dụ: receiver, adapter...)
                    </li>
                    <li>
                      Sản phẩm không có thông tin mua hàng hoặc không phải do
                      GearVN cung cấp, thông tin sản phẩm không được ghi nhận trên
                      hệ thống của GearVN.
                    </li>
                    <li>
                      Sản phẩm hư hỏng do lỗi người dùng (Rơi vỡ, cấn móp, biến
                      dạng, vô nước ... hoặc sử dụng không theo hướng dẫn và chức
                      năng của sản phẩm).
                    </li>
                    <li>
                      Sản phẩm đã có can thiệp sửa chữa, tháo lắp hoặc thay đổi kết
                      cấu từ bên thứ ba chưa được cho phép của GearVN và nhà phân
                      phối sản phẩm.
                    </li>
                    <li>
                      Thông tin sản phẩm (Số Serial/imei/Service Tag) không còn hoặc
                      không trùng khớp với thực tế sản phẩm.
                    </li>
                    <li>
                      Sản phẩm bị hỏng vì các lý do khách quan như thiên tai, hỏa
                      hoạn, động vật, côn trùng hoặc hao mòn do môi trường gây ra.
                    </li>
                  </ul>
                </div>

                <div className="mt-10">
                  <h2 className="text-[22px] font-bold uppercase text-black">
                    4. CHÍNH SÁCH BẢO HÀNH CHUNG
                  </h2>

                  <p className="mt-4">
                    Tất cả các sản phẩm do GearVN bán ra đều được bảo hành theo quy
                    định của nhà sản xuất/nhà phân phối.
                  </p>

                  <p className="mt-4">
                    Tất cả sản phẩm hư hỏng, sẽ được gửi cho nhà sản xuất hoặc đơn
                    vị được nhà sản xuất ủy quyền để bảo hành theo đúng chính sách
                    bảo hành của nhà sản xuất đưa ra. GearVN không chịu trách nhiệm
                    nếu nhà sản xuất hoặc đơn vị được nhà sản xuất ủy quyền từ chối
                    bảo hành.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-[20px] font-bold">4.1 Chính sách đổi mới</h3>

                    <ul className="mt-4 list-disc space-y-4 pl-6">
                      <li>
                        <span className="font-bold">Sản phẩm đổi mới trong 7 ngày:</span>
                        <p className="mt-2">
                          Đối với các sản phẩm lỗi phát sinh do nhà sản xuất hoặc
                          GearVN, khách hàng sẽ được đổi mới trong vòng 7 ngày tính
                          từ ngày mua hàng. Áp dụng với các dòng sản phẩm Laptop,
                          màn hình (Ngoại trừ một số dòng sản phẩm có chính sách bảo
                          hành riêng biệt).
                        </p>
                      </li>

                      <li>
                        <span className="font-bold">
                          Sản phẩm đổi mới trong 30 ngày:
                        </span>
                        <p className="mt-2">
                          Đối với các sản phẩm lỗi phát sinh do nhà sản xuất hoặc
                          GearVN, khách hàng sẽ được đổi mới trong vòng 30 ngày tính
                          từ ngày mua hàng. Áp dụng với các dòng sản phẩm gaming
                          gear (Bàn phím, chuột, tai nghe ...) hoặc Linh kiện máy
                          tính (NUC, CPU, RAM, Ổ cứng, tản nhiệt, nguồn, thiết bị
                          khác..)
                        </p>
                      </li>

                      <li>
                        <span className="font-bold">Yêu cầu về sản phẩm đổi mới:</span>
                        <ul className="mt-2 list-[circle] space-y-2 pl-6">
                          <li>Sản phẩm có tình trạng như lúc mới mua.</li>
                          <li>
                            Hộp như mới, không móp méo, rách, bị viết, vẽ hoặc dán
                            băng dính, keo...
                          </li>
                          <li>
                            Phụ kiện đi kèm đầy đủ, nguyên vẹn, không trầy xước hư
                            hại.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-[20px] font-bold">4.2 Thời gian xử lý</h3>

                    <ul className="mt-4 list-disc space-y-3 pl-6">
                      <li>
                        GearVN cam kết xử lý <span className="font-bold">trong vòng 30 ngày</span>{" "}
                        tính từ ngày tiếp nhận sản phẩm. Thông tin về thời gian xử lý
                        sẽ được thể hiện trong phiếu bảo hành hoặc thông tin đến
                        khách hàng trong trường hợp khách hàng gửi sản phẩm. Khách
                        hàng có thể tham khảo thời gian dự kiến xử lý theo danh mục
                        sau:
                      </li>
                    </ul>

                    <div className="mt-4 max-w-[780px] overflow-hidden rounded border border-gray-300">
                      <table className="w-full border-collapse text-left text-[15px]">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border-b border-gray-300 px-4 py-3 font-semibold">
                              Danh mục sản phẩm
                            </th>
                            <th className="border-b border-gray-300 px-4 py-3 font-semibold">
                              Thời gian dự kiến xử lý
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {processTimeRows.map((row) => (
                            <tr key={row.category}>
                              <td className="border-b border-gray-200 px-4 py-3">
                                {row.category}
                              </td>
                              <td className="border-b border-gray-200 px-4 py-3">
                                {row.time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <ul className="mt-4 list-disc space-y-2 pl-6">
                      <li>
                        <span className="font-bold">Lưu ý:</span> Thời gian hẹn trả
                        chính xác cho mỗi sản phẩm sẽ có sau khi GearVN tiếp nhận
                        bảo hành và được thể hiện trên phiếu tiếp nhận.
                      </li>
                      <li>
                        Nếu sản phẩm sau khi kiểm tra không có phát sinh lỗi, GearVN
                        xin phép hoàn trả sản phẩm <span className="font-bold">sau 3 ngày</span>.
                      </li>
                      <li>
                        Tất cả các sản phẩm đều được áp dụng chính sách bảo hành của
                        nhà sản xuất, nếu thời gian bảo hành có phát sinh do các vấn
                        đề khách quan cũng sẽ được thông tin đầy đủ đến khách hàng.
                      </li>
                      <li>
                        Thông tin liên hệ bảo hành theo hãng:{" "}
                        <a
                          href="https://gearvn.com/pages/chinh-sach-bao-hanh"
                          className="text-blue-600 hover:underline"
                        >
                          Xem tại đây
                        </a>
                        .
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-[20px] font-bold">4.3 Xử lý ngoài bảo hành</h3>

                    <ul className="mt-4 list-disc space-y-2 pl-6">
                      <li>
                        Đối với các sản phẩm do lỗi người dùng, GearVN xin phép từ
                        chối bảo hành.
                      </li>
                      <li>
                        Với các trường hợp phát sinh sửa chữa ngoài điều kiện bảo
                        hành nếu có, khách hàng nếu đồng ý sẽ chịu chi phí sửa chữa.
                      </li>
                      <li>
                        Trường hợp sản phẩm đủ điều kiện bảo hành nhưng không còn
                        linh kiện sửa chữa, sản phẩm đổi trả/thay thế, khách hàng
                        lựa chọn một trong các phương án sau:
                        <ul className="mt-2 list-[circle] space-y-2 pl-6">
                          <li>
                            Đổi sản phẩm tương đương: Sản phẩm cùng nhóm hàng và do
                            GearVN/ hãng sản xuất đề xuất.
                          </li>
                          <li>
                            Thu hồi sản phẩm có khấu hao: Sản phẩm sẽ được thu hồi
                            có tính chi phí khấu hao. Mức khấu hao sẽ do chính sách
                            của hãng sản xuất và GearVN quy định. Tùy vào tình trạng
                            và giá trị của sản phẩm sẽ có các mức khấu hao tương
                            ứng.
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <div className="mt-6 max-w-[780px] overflow-hidden rounded border border-gray-300">
                      <table className="w-full border-collapse text-left text-[15px]">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border-b border-gray-300 px-4 py-3 font-semibold">
                              THỜI GIAN SỬ DỤNG
                            </th>
                            <th className="border-b border-gray-300 px-4 py-3 font-semibold">
                              KHẤU HAO
                            </th>
                            <th className="border-b border-gray-300 px-4 py-3 font-semibold">
                              GHI CHÚ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {depreciationRows.map((row, index) => (
                            <tr key={row.usage}>
                              <td className="border-b border-gray-200 px-4 py-3">
                                {row.usage}
                              </td>
                              <td className="border-b border-gray-200 px-4 py-3">
                                {row.depreciation}
                              </td>
                              {index === 0 && (
                                <td
                                  rowSpan={depreciationRows.length}
                                  className="border-b border-gray-200 px-4 py-3 align-top"
                                >
                                  GearVN không có chính sách mua lại sản phẩm.
                                  Chính sách thu hồi chỉ áp dụng trong trường hợp
                                  sản phẩm không có phương án bảo hành phù hợp.
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <ul className="mt-4 list-disc space-y-2 pl-6">
                      <li>Khách hàng nhận lại sản phẩm không bảo hành.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-[22px] font-medium">
                    GEARVN XIN CHÂN THÀNH CẢM ƠN QUÝ KHÁCH
                  </p>
                  <p className="mt-3 text-[16px] text-gray-700">
                    Chính sách bảo hành được GearVN cập nhật từ ngày 22/03/2024.
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