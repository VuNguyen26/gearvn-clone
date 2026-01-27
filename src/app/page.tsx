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

  return (
    <div className="bg-[#f2f2f2]">
      <SideFloatBanners />

      <div className="mx-auto max-w-[1200px] px-3 py-3">
        
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[250px_minmax(0,1fr)_240px] lg:gap-x-0 lg:gap-y-0">
          <div className="hidden lg:block">
            <CategorySidebar />
          </div>

          <div className="min-w-0">
            <HeroCarousel />
          </div>

          <div className="hidden lg:block">
            <PromoRight />
          </div>
        </div>

        <div className="mt-3 hidden lg:block">
          <BottomBanners />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Sản phẩm nổi bật</h2>
          <span className="text-sm text-gray-600">Render từ server (ISR)</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
