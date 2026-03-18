import Link from "next/link";
import CategorySidebar from "@/components/home/CategorySidebar";
import HeroCarousel from "@/components/home/HeroCarousel";
import BottomBanners from "@/components/home/BottomBanners";
import PromoRight from "@/components/home/PromoRight";
import SideFloatBanners from "@/components/home/SideFloatBanners";
import ProductCard from "@/components/ProductCard";
import { getPaginatedProducts } from "@/lib/products";

export const revalidate = 60;

type HomePageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const sp = await searchParams;

  const page = Number(sp.page || "1");
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;

  const { items, totalPages, currentPage, totalItems } = getPaginatedProducts(
    safePage,
    20
  );

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <SideFloatBanners />

      <div className="flex flex-col items-center">
        <div className="w-10/12">
          <div className="flex">
            <CategorySidebar />
            <HeroCarousel />
          </div>

          <div className="mt-[6px]">
            <BottomBanners />
          </div>

          <section className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-[22px] font-bold text-black">
                  Tất cả sản phẩm
                </h2>
                <p className="text-sm text-gray-600">
                  Tổng cộng: {totalItems} sản phẩm
                </p>
              </div>

              <span className="text-sm text-gray-600">
                Trang {currentPage}/{totalPages}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {items.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Link
                href={currentPage > 1 ? `/?page=${currentPage - 1}` : "#"}
                className={`rounded-xl border px-4 py-2 text-sm ${
                  currentPage > 1
                    ? "hover:bg-gray-50"
                    : "pointer-events-none opacity-50"
                }`}
              >
                Trang trước
              </Link>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/?page=${pageNum}`}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                    pageNum === currentPage
                      ? "bg-red-600 text-white"
                      : "border hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </Link>
              ))}

              <Link
                href={currentPage < totalPages ? `/?page=${currentPage + 1}` : "#"}
                className={`rounded-xl border px-4 py-2 text-sm ${
                  currentPage < totalPages
                    ? "hover:bg-gray-50"
                    : "pointer-events-none opacity-50"
                }`}
              >
                Trang sau
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}