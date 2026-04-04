// import Link from "next/link";
// import { ChevronRight } from "lucide-react";
// import ServiceSidebar from "@/components/services/ServiceSidebar";
// import TradeInPriceTabs from "@/components/services/TradeInPriceTabs";

// export default function TradeInPricePage() {
//   return (
//     <main className="min-h-screen bg-gray-100 py-6">
//       <div className="mx-auto max-w-[1280px] px-4">
//         <div className="mb-4 flex items-center gap-2 text-[13px] text-gray-500">
//           <Link href="/" className="text-blue-600 hover:underline">
//             Trang chủ
//           </Link>
//           <ChevronRight className="h-4 w-4" />
//           <span>GEARVN - Chính sách & bảng giá thu sản phẩm đã qua sử dụng</span>
//         </div>

//         <div className="rounded-lg bg-white p-4 md:p-6">
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
//             <ServiceSidebar activeHref="/bang-gia-thu-san-pham-cu" />

//             <section>
//               <h1 className="text-[28px] font-bold leading-tight text-gray-800 md:text-[42px]">
//                 GEARVN - Chính sách & bảng giá thu sản phẩm đã qua sử dụng
//               </h1>

//               <div className="mt-8 space-y-6 text-[18px] leading-9 text-gray-800">
//                 <p>
//                   GearVN ra mắt dịch vụ <b>"Thu cũ đổi mới sản phẩm cũ"</b> nhằm
//                   hỗ trợ khách hàng dễ dàng nâng cấp linh kiện với chi phí hợp
//                   lý. Chúng tôi cam kết mang đến trải nghiệm thuận tiện và giá trị
//                   tốt nhất cho khách hàng.
//                 </p>

//                 <p>
//                   Các dòng sản phẩm nằm trong chính sách thu cũ đổi mới bao gồm
//                   <b> VGA, Mainboard và CPU </b>
//                   đã qua sử dụng.
//                 </p>

//                 <p>
//                   Đối với dòng sản phẩm <b>Mainboard</b>, hiện tại GearVN chỉ áp
//                   dụng cho các thương hiệu <b>Gigabyte, MSI, Asus và Asrock</b>.
//                 </p>

//                 <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-900">
//                   GearVN hiện <b>chỉ thu lại sản phẩm cũ khi bạn mua sản phẩm mới</b>{" "}
//                   tại cửa hàng; hiện tại, chúng tôi <b>chưa cung cấp dịch vụ thu mua
//                   sản phẩm cũ riêng lẻ</b>. Mong quý khách thông cảm.
//                 </blockquote>

//                 <div>
//                   <h2 className="text-[22px] font-bold text-[#d33b20]">
//                     Ưu đãi đặc biệt
//                   </h2>

//                   <p className="mt-4">
//                     Xem chi tiết chương trình tại :{" "}
//                     <a href="https://gearvn.com/pages/thu-cu-doi-moi" target="_self" className="text-blue-600 hover:underline">
//                       Link
//                     </a>
//                   </p>

//                   <blockquote className="mt-4 border-l-4 border-gray-300 pl-6 italic">
//                     <b>Lưu ý:</b> Chương trình thu cũ đổi mới diễn ra tại tất cả
//                     các cửa hàng thuộc hệ thống bán lẻ của GearVN.
//                   </blockquote>
//                 </div>

//                 <div>
//                   <h2 className="text-[22px] font-bold text-[#d33b20]">
//                     Bảng giá thu sản phẩm cũ tham khảo:
//                   </h2>

//                   <TradeInPriceTabs />

//                   <blockquote className="mt-6 border-l-4 border-gray-300 pl-6 italic">
//                     <b>Lưu ý:</b> Giá thu mua có thể thay đổi tùy theo biến động
//                     thị trường. Vui lòng liên hệ trực tiếp để có báo giá chính xác.
//                     <br />
//                     Giá thu trên chỉ mang tính tham khảo, giá thu sẽ được
//                     <b> xác định chính xác sau khi hoàn tất kiểm tra trực tiếp </b>
//                     và thông báo bởi bộ phận kỹ thuật tại các cửa hàng.
//                   </blockquote>
//                 </div>

//                 <div>
//                   <h2 className="text-[22px] font-bold text-[#d33b20]">
//                     Quy trình thu cũ đổi mới
//                   </h2>

//                   <ol className="mt-4 list-decimal space-y-2 pl-6">
//                     <li>
//                       Khách hàng mang sản phẩm cũ đến cửa hàng GearVN hoặc liên hệ
//                       để được tư vấn qua tổng đài 1900 5301.
//                     </li>
//                     <li>
//                       Nhân viên kỹ thuật kiểm tra và định giá sản phẩm cũ.
//                     </li>
//                     <li>
//                       Báo giá thu mua và tư vấn sản phẩm mới phù hợp.
//                     </li>
//                   </ol>
//                 </div>

//                 <div>
//                   <h2 className="text-[22px] font-bold text-[#d33b20]">
//                     Chính sách định giá
//                   </h2>

//                   <p className="mt-4">
//                     Giá thu mua được xác định dựa trên các yếu tố sau:
//                   </p>

//                   <ul className="mt-4 list-disc space-y-2 pl-6">
//                     <li>Tình trạng hoạt động của sản phẩm</li>
//                     <li>Thương hiệu và model</li>
//                     <li>Thời gian bảo hành còn lại</li>
//                     <li>Tình trạng ngoại hình</li>
//                     <li>Phụ kiện đi kèm (hộp, cáp, v.v.)</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h2 className="text-[22px] font-bold text-[#d33b20]">
//                     Các loại sản phẩm không thu:
//                   </h2>

//                   <ol className="mt-4 list-decimal space-y-2 pl-6">
//                     <li>
//                       Các sản phẩm hư hỏng nặng, móp méo, cháy nổ dẫn đến biến
//                       dạng hoặc gãy vỡ.
//                     </li>
//                     <li>
//                       Các sản phẩm đã thay thế linh kiện không đúng tiêu chuẩn.
//                     </li>
//                     <li>
//                       Các sản phẩm không thể xác định rõ tên, thương hiệu.
//                     </li>
//                   </ol>
//                 </div>

//                 <div>
//                   <h2 className="text-[22px] font-bold text-[#d33b20]">
//                     Liên hệ
//                   </h2>

//                   <p className="mt-4">
//                     Để biết thêm thông tin chi tiết hoặc đặt lịch kiểm tra sản
//                     phẩm cũ, vui lòng liên hệ:
//                   </p>

//                   <ul className="mt-4 list-disc space-y-2 pl-6">
//                     <li>
//                       Hotline: <b>1900 5301</b>
//                     </li>
//                     <li>Email: cskh@gearvn.com</li>
//                     <li>
//                       Khu vực miền Bắc:
//                       <ul className="mt-2 list-disc pl-6">
//                         <li>
//                           162 - 164 Thái Hà, Phường Trung Liệt, Đống Đa, Hà Nội.
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       Khu vực miền Nam:
//                       <ul className="mt-2 list-disc pl-6">
//                         <li>
//                           82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình, Tp.HCM.
//                         </li>
//                         <li>
//                           905 Kha Vạn Cân, Phường Linh Tây, TP. Thủ Đức.
//                         </li>
//                         <li>
//                           1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5.
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }