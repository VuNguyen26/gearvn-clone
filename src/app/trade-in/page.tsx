import Link from "next/link";
import { MyTable } from "@/components/trade-in/MyTable";
import SideFloatBanners from "@/components/home/SideFloatBanners";
import { tradeInTables } from "@/data/tradeInPriceData";
import { tr } from "framer-motion/client";

const MAX_W = "w-300";
export default function TradeInPage() {
  return (
    <div className={`${MAX_W} mx-auto`}>
        <div className="hidden xl:block">
                <SideFloatBanners />
              </div>
      <div className="my-2 text-[13px]">
        <Link href="/" className="text-blue-500">Trang chủ</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">Thu cũ đổi mới</span>
      </div >
        <div className="bg-white rounded-lg p-10 shadow-sm">
            <h1 className="text-2xl font-bold mb-4 flex justify-center">Chính sách & bảng giá thu sản phẩm đã qua sử dụng</h1>
            <p className="my-4">GearVN ra mắt dịch vụ <span className="font-bold">&quot;Thu cũ đổi mới&quot;</span> nhằm hỗ trợ khách hàng dễ dàng nâng cấp linh kiện với chi phí hợp lý. Chúng tôi cam kết mang đến trải nghiệm thuận tiện và giá trị tốt nhất cho khách hàng.</p>
            <p className="my-4">Các dòng sản phẩm nằm trong chính sách thu cũ đổi mới bao gồm <span className="font-bold">VGA, Mainboard và CPU</span> đã qua sử dụng. </p>
            <p className="my-4">Đối với dòng sản phẩm <span className="font-bold">Mainboard</span>, hiện tại Gearvn chỉ áp dụng cho các thương hiệu <span className="font-bold">Gigabyte, MSI, Asus</span> và <span className="font-bold">Asrock</span>.</p>
            <div className="my-4 border-l-4 border-gray-300 p-4">
                <p className="italic">GearVN hiện <span className="font-bold">chỉ thu lại sản phẩm cũ khi bạn mua sản phẩm mới</span> tại cửa hàng; hiện tại, <span className="font-bold">chúng tôi chưa cung cấp dịch vụ thu mua sản phẩm cũ riêng lẻ</span>. Mong quý khách thông cảm.</p>
            </div>
            <h2 className="text-red-500 font-bold text-2xl my-4">Bảng giá thu sản phẩm cũ tham khảo:</h2>
            <div className="grid grid-cols-2 gap-4 my-4 p-4">
                {Object.entries(tradeInTables).map(([key,tradein],index) => (

                    
                    <div key={index} className="border w-fit border-black py-2 ">
                        <p className="ml-2">{tradein.title}</p>
                        <MyTable data={tradein}/>
                        <span className="border-x border-b border-black ml-1"> {key.toUpperCase()}</span>
                    </div>
                    ))}
            </div>
            <div className="my-4 italic border-l-4 border-gray-300 p-4">
                <p className="my-4"><span className="font-bold underline">Lưu ý:</span> Giá thu mua có thể thay đổi tùy theo biến động thị trường. Vui lòng liên hệ trực tiếp để có báo giá chính xác nhất.</p>
                <p className="my-4">Giá thu trên chỉ mang tính tham khảo, giá thu sẽ được <span className="font-bold">xác định chính xác sau khi hoàn tất kiểm tra trực tiếp và thông báo bởi bộ phận kỹ thuật</span> tại các cửa hàng.</p>
            </div>
            <h2 className="text-red-500 font-bold text-2xl my-4">Quy trình thu cũ đổi mới</h2>
            <ol className="list-decimal list-inside space-y-1 my-4">
                <li>Khách hàng mang sản phẩm cũ đến cửa hàng GearVN hoặc liên hệ để được tư vấn qua tổng đài 1900 5301.</li>
                <li>Nhân viên kỹ thuật kiểm tra và định giá sản phẩm cũ.</li>
                <li>Báo giá thu mua và tư vấn sản phẩm mới phù hợp.</li>
            </ol>
            <h2 className="text-red-500 font-bold text-2xl my-4">Chính sách định giá</h2>
            <p className="my-4">Giá thu mua được xác định dựa trên các yếu tố sau:</p>
            <ul className="list-disc list-inside space-y-1 my-4">
                <li>Tình trạng hoạt động của sản phẩm</li>
                <li>Thương hiệu và model</li>
                <li>Thời gian bảo hành còn lại</li>
                <li>Tình trạng ngoại hình</li>
                <li>Phụ kiện đi kèm (hộp, cáp, v.v.)</li>
            </ul>
            <h2 className="text-red-500 font-bold text-2xl my-4">Các loại sản phẩm không thu:</h2>
            <ol className="list-decimal list-inside space-y-1 my-4">
                <li>Các sản phẩm hư hỏng nặng, móp méo, cháy nổ dẫn đến biến dạng biến dạng hoặc gãy vỡ.</li>
                <li>Các sản phẩm đã thay thế linh kiện không đúng tiêu chuẩn. </li>
                <li>Các sản phẩm không thể xác định rõ tên, thương hiệu.</li>
            </ol>
            <h2 className="text-red-500 font-bold text-2xl my-4">Liên hệ:</h2>
            <p>Để biết thêm thông tin chi tiết về chính sách thu cũ đổi mới, vui lòng liên hệ với chúng tôi qua:</p>
            <ul className="list-disc list-inside space-y-1 my-4">
                <li>Hotline: 1900 5301</li>
                <li>Email: support@gearvn.com</li>
                <li>Khu vực miền Bắc:
                    <ul className="list-[circle] list-inside ml-4 space-y-1">
                        <li>162 - 164 Thái Hà, Phường Trung Liệt, Đống Đa, Hà Nội.</li>
                    </ul>
                </li>
                <li>Khu vực miền Nam:
                    <ul className="list-[circle] list-inside ml-4 space-y-1">
                        <li>82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình, Tp.HCM. </li>
                        <li>905 Kha Vạn Cân, Phường Linh Tây, TP. Thủ Đức</li>
                        <li>1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5</li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
  );
}