import CategorySidebar from "@/components/home/CategorySidebar";
import HeroCarousel from "@/components/home/HeroCarousel";
import PromoRight from "@/components/home/PromoRight";
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

  // tỷ lệ giống ảnh gốc: cột phải ~300px (345px làm hero bị nhỏ)
  const GRID_COLS = "lg:grid-cols-[250px_minmax(0,1fr)_300px]";

  return (
    <div className="bg-[#f2f2f2]">
      <SideFloatBanners />

      <div className={`mx-auto max-w-[1200px] ${PAD}`}>
        {/* ===== TOP: Sidebar | Hero | Right Promo ===== */}
        <div className={["grid grid-cols-1", GAP, GRID_COLS, "lg:items-start"].join(" ")}>
          {/* Left category */}
          <div className="hidden lg:block">
            {/* overflow-visible để mũi tên hover không bị cắt */}
            <div className="overflow-visible">
              <CategorySidebar />
            </div>
          </div>

          {/* Center hero */}
          <div className={`min-w-0 ${TOP_H}`}>
            <HeroCarousel />
          </div>

          {/* Right promos */}
          <div className={`hidden lg:block self-start ${TOP_H}`}>
            <PromoRight />
          </div>
        </div>

        {/* ===== BOTTOM BANNERS: chỉ nằm dưới Hero + cột phải (không nằm dưới sidebar) ===== */}
        <div className={["hidden lg:grid", MT, GAP, GRID_COLS].join(" ")}>
          {/* cột trái để trống đúng như ảnh gốc */}
          <div />
          {/* span 2 cột (Hero + PromoRight) */}
          <div className="col-span-2">
            <BottomBanners />
          </div>
        </div>

        {/* ===== FEATURED ===== */}
        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Sản phẩm nổi bật</h2>
          <span className="text-sm text-gray-600">Render từ server (ISR)</span>
        </div>

        <div className={`${MT} grid grid-cols-2 gap-[6px] sm:grid-cols-3 lg:grid-cols-4`}>
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
