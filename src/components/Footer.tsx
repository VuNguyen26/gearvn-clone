import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-black">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <label className="px-1 text-[18px] font-semibold">VỀ GEARVN</label>
            <ul className="mt-2 flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="px-1 hover:cursor-pointer hover:text-red-500 hover:underline"
                >
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <label className="px-1 text-[18px] font-semibold">CHÍNH SÁCH</label>
            <ul className="mt-2 flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="px-1 hover:cursor-pointer hover:text-red-500 hover:underline"
                >
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <label className="px-1 text-[18px] font-semibold">THÔNG TIN</label>
            <ul className="mt-2 flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="px-1 hover:cursor-pointer hover:text-red-500 hover:underline"
                >
                  Hệ thống cửa hàng
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-1 hover:cursor-pointer hover:text-red-500 hover:underline"
                >
                  Hướng dẫn mua hàng
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-1 hover:cursor-pointer hover:text-red-500 hover:underline"
                >
                  Build PC
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <label className="px-1 text-[18px] font-semibold">
              TỔNG ĐÀI HỖ TRỢ (8:00 - 21:00)
            </label>
            <ul className="mt-2 flex flex-col gap-2">
              <li className="flex gap-2 px-1">
                <span className="w-24">Mua hàng:</span>
                <span className="font-semibold text-blue-500">1900 5301</span>
              </li>
              <li className="flex gap-2 px-1">
                <span className="w-24">Bảo hành:</span>
                <span className="font-semibold text-blue-500">1900 5301</span>
              </li>
              <li className="flex gap-2 px-1">
                <span className="w-24">Khiếu nại:</span>
                <span className="font-semibold text-blue-500">1900 5301</span>
              </li>
              <li className="flex gap-2 px-1">
                <span className="w-24">Email:</span>
                <span className="font-semibold text-blue-500">cskh@gearvn.com</span>
              </li>
            </ul>
          </div>

          <div>
            <label className="px-1 text-[18px] font-semibold">ĐƠN VỊ VẬN CHUYỂN</label>
            <ul className="mt-2 flex flex-wrap gap-2">
              <li>
                <Image
                  src="/home/footer_ship_1.png"
                  alt="đơn vị vận chuyển 1"
                  width={90}
                  height={40}
                />
              </li>
              <li>
                <Image
                  src="/home/footer_ship_2.png"
                  alt="đơn vị vận chuyển 2"
                  width={90}
                  height={40}
                />
              </li>
            </ul>

            <label className="mt-4 block px-1 text-[18px] font-semibold">
              CÁCH THỨC THANH TOÁN
            </label>
            <ul className="mt-2 flex flex-wrap gap-2">
              <li>
                <Image
                  src="/home/footer_momo_icon_payment.png"
                  alt="momo"
                  width={70}
                  height={40}
                />
              </li>
              <li>
                <Image
                  src="/home/footer_cash_icon_payment.png"
                  alt="tiền mặt"
                  width={70}
                  height={40}
                />
              </li>
              <li>
                <Image
                  src="/home/footer_visa_icon_payment.png"
                  alt="visa"
                  width={70}
                  height={40}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}