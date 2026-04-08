import Link from "next/link";
import { MapPin, ShoppingCart } from "lucide-react";
import ImageGallery from "@/components/introduce/ImageGallery";
import Robot3D from "@/components/introduce/Robot3D";
import SideFloatBanners from "@/components/home/SideFloatBanners";

const MAX_W = "max-w-[1200px] w-full ";

export default function IntroducePage() {
  return (
    <div className={`${MAX_W} mx-auto mt-4 rounded-2xl bg-white shadow-sm`}>
      <div className="w-full rounded-t-2xl p-4">
        <div className="flex gap-4">
          <div className="hidden xl:block shrink-0">
            <SideFloatBanners />
          </div>

          <div className="grid flex-1 grid-cols-1 items-center gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1 className="ml-4 text-2xl lg:text-4xl font-bold text-black">
                Giới thiệu về chúng tôi
              </h1>

              <p className="my-4">
                GearVN là thương hiệu được sinh ra từ giấc mơ của một game thủ,
                phát triển bởi tập thể các game thủ để phục vụ cho cộng đồng game
                thủ Việt.
              </p>

              <p className="my-4">
                Đội ngũ tư vấn của GearVN không đơn thuần là nhân viên kinh doanh,
                chúng tôi còn là những người yêu game với mong muốn giúp bạn cùng
                sở thích có được dàn máy và gear phù hợp.
              </p>

              <p className="my-4">
                Sự hài lòng của khách hàng chính là động lực giúp GearVN không ngừng
                hoàn thiện, mang lại ngày càng nhiều giá trị tích cực cho cộng đồng.
              </p>

              <div className="w-full max-w-[640px] rounded-2xl bg-red-600 px-4 py-2">
                <p className="my-4 text-white">
                  Khách hàng hôm nay là đồng đội tương lai! Chúng ta cùng nhau lan
                  toả giá trị tích cực đến cộng đồng game thủ và tất cả những người
                  yêu công nghệ tại Việt Nam.
                </p>
              </div>
            </div>

            <div className="h-full w-full">
              <Robot3D />
            </div>
          </div>
        </div>
      </div>

      <ImageGallery />

      <div className="w-full rounded-b-2xl p-4">
        <h1 className="my-4 text-center text-xl lg:text-2xl font-bold text-black">
          Trải nghiệm mua sắm toàn diện
        </h1>

        <div className="flex flex-col justify-center gap-5 xl:flex-row">
          <div className="w-full xl:w-120">
            <div className="my-4 flex w-full justify-center">
              <MapPin className="inline-block h-20 w-20 lg:h-40 text-red-500" />
            </div>

            <div>
              <h2 className="my-4 text-center text-xl lg:text-2xl font-bold text-gray-500">
                Hệ thống Showroom
              </h2>

              <div className="rounded-2xl bg-gray-100 p-4">
                <h2 className="my-4 text-xl lg:text-2xl font-bold text-red-500">
                  Khu vực miền Bắc
                </h2>

                <ul className="my-4 list-inside list-disc">
                  <li>Showroom Thái Hà</li>
                </ul>

                <span className="my-4 block w-full border"></span>

                <h2 className="my-4 text-xl lg:text-2xl font-bold text-red-500">
                  Khu vực miền Nam
                </h2>

                <ul className="my-4 list-inside list-disc">
                  <li className="my-2">Showroom Hoàng Hoa Thám</li>
                  <li className="my-2">Showroom Kha Vạn Cân</li>
                  <li className="my-2">Showroom Trần Hưng Đạo</li>
                </ul>

                <div className="flex w-full justify-center">
                  <Link href="/showroom" className="flex w-full justify-center">
                    <button className="btn-heartbeat mt-4 rounded-2xl px-4 py-2 text-xl lg:text-2xl font-bold text-red-500">
                      SHOWROOM
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-120">
            <div className="my-4 flex w-full justify-center">
              <ShoppingCart className="inline-block h-20 w-20 lg:h-40 lg:w-40 text-red-500" />
            </div>

            <div>
              <h2 className="my-4 text-center text-xl lg:text-2xl font-bold text-gray-500">
                Mua sắm trực tuyến
              </h2>

              <div className="rounded-2xl bg-gray-100 p-4">
                <h2 className="my-4 text-xl lg:text-2xl font-bold text-red-500">Website</h2>

                <ul className="my-4 list-inside list-disc">
                  <li className="my-2">www.....</li>
                  <li className="my-2">Miễn phí giao hàng toàn quốc</li>
                </ul>

                <div className="flex w-full justify-center">
                  <Link href="/" className="flex w-full justify-center">
                    <button className="btn-heartbeat mt-4 rounded-2xl px-4 py-2 text-xl lg:text-2xl font-bold text-red-500">
                      MUA NGAY
                    </button>
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