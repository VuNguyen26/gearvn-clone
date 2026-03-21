import Image from "next/image";
import Link from "next/link";
import {MapPin, ShoppingCart} from "lucide-react";
import ImageGallery from "@/components/introduce/ImageGallery";

const MAX_W = "w-300";
export default function IntroducePage() {
    return (
        <div className={`${MAX_W} mx-auto mt-4 rounded-2xl h-96 bg-white shadow-sm h-auto`}>
            <div className="w-full h-auto rounded-t-2xl p-4 flex">
                <div>
                    <h1 className="font-bold text-black text-4xl ml-4">Giới thiệu về chúng tôi</h1>
                    <p className="my-4">
                        GearVN là thương hiệu được sinh ra từ giấc mơ của một game thủ, phát triển bởi tập thể các game thủ để phục vụ cho cộng đồng game thủ Việt.
                    </p>
                    <p className="my-4">
                        Đội ngũ tư vấn của GearVN không đơn thuần là nhân viên kinh doanh, chúng tôi còn là những người yêu game với mong muốn giúp bạn cùng sở thích có được dàn máy và gear phù hợp.
                    </p>
                    <p className="my-4">
                        Sự hài lòng của khách hàng chính là động lực giúp GearVN không ngừng hoàn thiện, mang lại ngày càng nhiều giá trị tích cực cho cộng đồng.  
                    </p>
                    <div className="bg-red-600 px-4 py-2 rounded-2xl w-120">
                        <p className="my-4 text-white">Khách hàng hôm nay là đồng đội tương lai! Chúng ta cùng nhau lan toả giá trị tích cực đến cộng đồng game thủ và tất cả những người yêu công nghệ tại Việt Nam.”</p>
                    </div>
                </div>
                <div className="relative w-200 h-100">
                    <Image src="/introduce/top.avif" alt="robot" fill className=""/>
                </div>
            </div>
            <ImageGallery />
            <div className="w-full h-auto rounded-b-2xl p-4">
                <h1 className="font-bold text-black text-2xl text-center my-4">Trải nghiệm mua sắm toàn diện</h1>
                <div className="flex justify-center gap-5">
                    <div className="w-120">
                        <div className="w-full flex justify-center my-4">
                            <MapPin className="inline-block text-red-500 w-40 h-40"/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-500 text-center my-4">Hệ thống Showroom</h2>
                            <div className="bg-gray-100 rounded-2xl p-4">
                                <h2 className="text-red-500 text-2xl font-bold my-4">Khu vực miền Bắc</h2>
                                <ul className="list-disc list-inside my-4">
                                    <li>Showroom Thái Hà</li>
                                </ul>
                                <span className="block w-full border my-4"></span>
                                <h2 className="text-red-500 text-2xl font-bold my-4">Khu vực miền Nam</h2>
                                <ul className="list-disc list-inside my-4">
                                    <li className="my-2">Showroom Hoàng Hoa Thám</li>
                                    <li className="my-2">Showroom Kha Vạn Cân</li>
                                    <li className="my-2">Showroom Trần Hưng Đạo</li>
                                </ul>
                                <div className="flex w-full justify-center">
                                    <Link href="/showroom " className="flex justify-center w-full">
                                        <button className="btn-heartbeat text-red-500 text-2xl font-bold px-4 py-2 rounded-2xl mt-4">SHOWROOM</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-120">
                        <div className="w-full flex justify-center my-4">
                            <ShoppingCart className="inline-block text-red-500 w-40 h-40"/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-500 text-center my-4">Mua sắm trực tuyến</h2>
                            <div className="bg-gray-100 rounded-2xl p-4">
                                <h2 className="text-red-500 text-2xl font-bold my-4">Website</h2>
                                <ul className="list-disc list-inside my-4">
                                    <li className="my-2">www.....</li>
                                    <li className="my-2">Miễn phí giao hàng toàn quốc</li>
                                </ul>
                                <div className="flex w-full justify-center">
                                    <Link href="/" className="flex justify-center w-full">
                                        <button className="btn-heartbeat text-red-500 text-2xl font-bold px-4 py-2 rounded-2xl mt-4">MUA NGAY</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}