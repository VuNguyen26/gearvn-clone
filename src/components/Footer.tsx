import Link from "next/link";
import Image from "next/image";
import { px } from "framer-motion";

export default function Footer(){
    const MAX_WIDTH = "max-w-[1400px]";
    return(
        <div className="h-auto bg-white flex justify-center py-4 text-black text-[18px]">
            <div className="grid grid-cols-5 gap-5 w-[1400px]">
                <div className="">
                    <label className="px-1 font-semibold">VỀ GEARVN</label>
                    <ul className="flex flex-col gap-2">
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Giới thiệu</li></Link>
                    </ul>
                </div>
                <div className="">
                    <label className="px-1 font-semibold">CHÍNH SÁCH</label>
                    <ul className="flex flex-col gap-2">
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Chính sách bảo mật</li></Link>
                    </ul>
                </div>
                <div className="">
                    <label className="px-1 font-semibold">THÔNG TIN</label>
                    <ul className="flex flex-col gap-2">
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Hệ thống cửa hàngt</li></Link>
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Hướng dẫn mua hàng</li></Link>
                        <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Build PC</li></Link>
                    </ul>
                </div>
                <div className="">
                    <label className="px-1 font-semibold">TỔNG ĐÀI HỖ TRỢ (8:00 - 21:00)</label>
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
                <div className="">
                    <label className="px-1 font-semibold">ĐƠN VỊ VẬN CHUYỂN</label>
                    <ul className="flex gap-2">
                        <Image src="/home/footer_ship_1.png" alt="đơn vị vận chuyển 1" width={100} height={100}/>
                        <Image src="/home/footer_ship_2.png" alt="đơn vị vận chuyển 2" width={100} height={100}/>
                    </ul>
                    <label className="px-1 font-semibold">CÁCH THỨC THANH TOÁN</label>
                    <ul className="flex gap-2">
                        <Image src="/home/footer_momo_icon_payment.png" alt="momo" width={100} height={100}/>
                        <Image src="/home/footer_cash_icon_payment.png" alt="momo" width={100} height={100}/>
                        <Image src="/home/footer_visa_icon_payment.png" alt="momo" width={100} height={100}/>

                    </ul>
                </div>

            </div>
        </div>
    )
}