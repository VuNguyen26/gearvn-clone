import CategorySidebar from "@/components/home/CategorySidebar";
import HeroCarousel from "@/components/home/HeroCarousel";
import BottomBanners from "@/components/home/BottomBanners";
import SideFloatBanners from "@/components/home/SideFloatBanners";

import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/products";

export const revalidate = 60;

export default function HomePage() {
  const featured = [
    ...getProductsByCategory("laptop"),
    ...getProductsByCategory("pc-gaming"),
    ...getProductsByCategory("gpu"),
    ...getProductsByCategory("man-hinh"),
  ].slice(0, 8);

  // khe giống GearVN
  const GAP = "gap-[6px]";
  const PAD = "px-[6px] py-[6px]";
  const MT = "mt-[6px]";

  // chiều cao cụm hero + banner phải (desktop)
  const TOP_H = "lg:h-[360px]";
  const MAX_W = "max-w-400";
  // tỷ lệ giống ảnh gốc: cột phải ~300px (345px làm hero bị nhỏ)
  const GRID_COLS = "lg:grid-cols-[250px_minmax(0,1fr)_300px]";

  return (
    <div className="bg-[#f2f2f2]">
          <SideFloatBanners />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-10/12 flex"> 
          <CategorySidebar />
          <HeroCarousel />
        </div>
        <div className="w-10/12 flex justify-center">
          <div className="w-full">
            <BottomBanners />
          </div>
        </div>
      </div>

        {/* ===== FEATURED ===== */}
        {/* <div className="mt-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Sản phẩm nổi bật</h2>
          <span className="text-sm text-gray-600">Render từ server (ISR)</span>
        </div>

        <div className={`${MT} grid grid-cols-2 gap-[6px] sm:grid-cols-3 lg:grid-cols-4`}>
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div> */}
    </div>
  );
}
