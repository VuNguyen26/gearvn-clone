import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    const MAX_WIDTH = "max-w-[1400px]";
    return(
        <div className="h-auto bg-white flex justify-center py-4 text-black text-[18px] mt-6">
            <div className="grid grid-cols-5 gap-5 w-300">
                <div className="">
                    <label className="px-1 font-semibold whitespace-nowrap">VỀ GEARVN</label>
                    <ul className="flex flex-col gap-2">
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Giới thiệu</li></Link>
                    </ul>
                </div>
                <div className="">
                    {/* <label className="px-1 font-semibold whitespace-nowrap">CHÍNH SÁCH</label>
                    <ul className="flex flex-col gap-2">
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Chính sách bảo mật</li></Link>
                    </ul> */}
                </div>
                <div className="">
                    <label className="px-1 font-semibold whitespace-nowrap">THÔNG TIN</label>
                    <ul className="flex flex-col gap-2">
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Hệ thống cửa hàngt</li></Link>
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Hướng dẫn mua hàng</li></Link>
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Build PC</li></Link>
                    </ul>
                </div>
                <div className="">
                    <label className="px-1 font-semibold whitespace-nowrap">TỔNG ĐÀI HỖ TRỢ</label>
                    <ul className="flex flex-col gap-2">
                        <li className="grid grid-cols-2 px-1 w-fit">
                            <span className="w-28">Mua hàng:</span>
                            <span className="font-semibold text-blue-500">1900 5301</span>
                        </li>
                        <li className="grid grid-cols-2 px-1 w-fit">
                            <span className="w-28">Bảo hành:</span>
                            <span className="font-semibold text-blue-500">1900 5301</span>
                        </li>
                        <li className="grid grid-cols-2 px-1 w-fit">
                            <span className="w-28">Khiếu nại:</span>
                            <span className="font-semibold text-blue-500">1900 5301</span>
                        </li>
                        <li className="grid grid-cols-2 px-1 w-fit">
                            <span className="w-28">Email:</span>
                            <span className="font-semibold text-blue-500">1900 5301</span>
                        </li>
                    </ul>
                </div>
                <div className="w-auto">
                    <label className="px-1 font-semibold whitespace-nowrap">ĐƠN VỊ VẬN CHUYỂN</label>
                    <ul className="flex gap-2">
                        <Image src="/home/footer_ship_1.png" alt="đơn vị vận chuyển 1" width={100} height={100}/>
                        <Image src="/home/footer_ship_2.png" alt="đơn vị vận chuyển 2" width={100} height={100}/>
                    </ul>
                    <label className="px-1 font-semibold w-auto whitespace-nowrap">CÁCH THỨC THANH TOÁN</label>
                    <ul className="flex gap-2">
                        <Image src="/home/footer_momo_icon_payment.png" alt="momo" width={100} height={100}/>
                        <Image src="/home/footer_cash_icon_payment.png" alt="momo" width={100} height={100}/>
                        <Image src="/home/footer_visa_icon_payment.png" alt="momo" width={100} height={100}/>
                    </ul>
                </div>
          <div>
            <label className="px-1 text-[18px] font-semibold">CHÍNH SÁCH</label>
            <ul className="mt-2 flex flex-col gap-2">
              <li>
                <Link
                  href="/privacy_policy"
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
  );
}