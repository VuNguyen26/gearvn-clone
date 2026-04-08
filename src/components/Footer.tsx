"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer(){
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenPolicy, setIsOpenPolicy] = useState(false);
    const [isOpenInfo, setIsOpenInfo] = useState(false);
    const [isOpenSupport, setIsOpenSupport] = useState(false);
    const [isOpenPayment, setIsOpenPayment] = useState(false);
    const [isOpenShipping, setIsOpenShipping] = useState(false);
    const MAX_WIDTH = "max-w-[1200px]";
    return(
        <div id="footer" className=" bg-white flex justify-center py-4 text-black text-sm sm:text-[16px] mt-6 w-80 w-full">
            <div className={`lg:grid lg:grid-cols-5 lg:gap-5 ${MAX_WIDTH} w-full`}>
                <div className="border-b border-gray-300 md:border-none md:pb-0 p-2">
                    <div onClick={() => setIsOpen(!isOpen)} 
                        className="flex justify-between items-center cursor-pointer ">
                        <label className="px-1 font-semibold whitespace-nowrap">VỀ GEARVN</label>
                        <span className={`left-0 text-black block transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                    </div>
                    <div className={`
                        grid transition-all duration-300 ease-in-out
                        ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'} 
                        md:grid-rows-[1fr] sm:opacity-100 md:mb-0
                    `}>
                        <ul className="overflow-hidden flex flex-col gap-2 px-1">
                            <Link href="introduce"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Giới thiệu</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="border-b border-gray-300 md:border-none p-2 md:py-0">
                    <div onClick={() => setIsOpenPolicy(!isOpenPolicy)} 
                        className="flex justify-between items-center cursor-pointer">
                        <label className="px-1 font-semibold whitespace-nowrap">CHÍNH SÁCH</label>
                        <span className={`text-black block transition-transform duration-300 md:hidden ${isOpenPolicy ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                    </div>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpenPolicy ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'} md:grid-rows-[1fr] md:opacity-100 md:mt-2`}>
                        <ul className="overflow-hidden flex flex-col gap-2 px-1">
                            <Link href="#"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Chính sách bảo mật</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="border-b border-gray-300 md:border-none p-2 md:py-0">
                    <div onClick={() => setIsOpenInfo(!isOpenInfo)} 
                        className="flex justify-between items-center cursor-pointer">
                        <label className="px-1 font-semibold whitespace-nowrap">THÔNG TIN</label>
                        <span className={`text-black block transition-transform duration-300 md:hidden ${isOpenInfo ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                    </div>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpenInfo ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'} md:grid-rows-[1fr] md:opacity-100 md:mt-2`}>
                        <ul className="overflow-hidden flex flex-col gap-2 px-1">
                            <Link href="showroom"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Hệ thống cửa hàng</li></Link>
                            <Link href="/"><li className="hover:underline hover:cursor-pointer hover:text-red-500 px-1">Hướng dẫn mua hàng</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="border-b border-gray-300 md:border-none p-2 md:py-0">
                    <div onClick={() => setIsOpenSupport(!isOpenSupport)} 
                        className="flex justify-between items-center cursor-pointer">
                        <label className="px-1 font-semibold whitespace-nowrap">TỔNG ĐÀI HỖ TRỢ</label>
                        <span className={`text-black block transition-transform duration-300 md:hidden ${isOpenSupport ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                    </div>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpenSupport ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'} md:grid-rows-[1fr] md:opacity-100 md:mt-2`}>
                        <ul className="overflow-hidden flex flex-col gap-2 px-1">
                            <li className="grid grid-cols-2 w-fit gap-2">
                                <span className="w-24">Mua hàng:</span>
                                <span className="font-semibold text-blue-500">1900 5301</span>
                            </li>
                            <li className="grid grid-cols-2 w-fit gap-2">
                                <span className="w-24">Bảo hành:</span>
                                <span className="font-semibold text-blue-500">1900 5301</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-auto">
                    <div className="border-b border-gray-300 md:border-none p-2 md:py-0">
                        <div onClick={() => setIsOpenShipping(!isOpenShipping)} 
                            className="flex justify-between items-center cursor-pointer">
                            <label className="px-1 font-semibold whitespace-nowrap">ĐƠN VỊ VẬN CHUYỂN</label>
                            <span className={`text-black block transition-transform duration-300 md:hidden ${isOpenShipping ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                        </div>
                        <div className={`grid transition-all duration-300 ease-in-out ${isOpenShipping ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'} md:grid-rows-[1fr] md:opacity-100 md:mt-2`}>
                            <ul className="overflow-hidden flex flex-col gap-2 px-1">
                                <Image src="/home/footer_ship_1.png" alt="đơn vị vận chuyển 1" width={100} height={100}/>
                                <Image src="/home/footer_ship_2.png" alt="đơn vị vận chuyển 2" width={100} height={100}/>
                            </ul>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 md:border-none p-2 md:py-0">
                        <div onClick={() => setIsOpenPayment(!isOpenPayment)} 
                            className="flex justify-between items-center cursor-pointer">
                            <label className="px-1 font-semibold whitespace-nowrap">CÁCH THỨC THANH TOÁN</label>
                            <span className={`text-black block transition-transform duration-300 md:hidden ${isOpenPayment ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                        </div>
                        <div className={`grid transition-all duration-300 ease-in-out ${isOpenPayment ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'} md:grid-rows-[1fr] md:opacity-100 md:mt-2`}>
                            <ul className="overflow-hidden md:flex-row flex flex-col gap-2 px-1">
                                <Image src="/home/footer_momo_icon_payment.png" alt="momo" width={100} height={100}/>
                                <Image src="/home/footer_cash_icon_payment.png" alt="momo" width={100} height={100}/>
                                <Image src="/home/footer_visa_icon_payment.png" alt="momo" width={100} height={100}/>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
      </div>
  );
}