import type { Metadata } from "next";
import Link from "next/link";
import CategorySidebar from "@/components/home/CategorySidebar";
import HeroCarousel from "@/components/home/HeroCarousel";
import { TopPromoRow, BottomWideRow } from "@/components/home/BottomBanners";
import SideFloatBanners from "@/components/home/SideFloatBanners";
import ProductCard from "@/components/ProductCard";
import { getPaginatedProducts } from "@/lib/products";
import CategorySidebarMobile from "@/components/home/CategorySidebarMobile";

export const metadata: Metadata = {
  title: "Trang chủ",
  description:
    "Mua sắm laptop, PC, màn hình, bàn phím, chuột, tai nghe và linh kiện công nghệ với giao diện hiện đại, tối ưu SEO và hiệu năng.",
};

type HomePageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const sp = await searchParams;

  const page = Number(sp.page || "1");
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;

  const { items, totalPages, currentPage, totalItems } = await getPaginatedProducts(
    safePage,
    20
  );
  // Tính toán các trang cần hiển thị (Ví dụ: [1, 2, 3, 4])
  const getVisiblePages = () => {
    const delta = 1; // Số trang hiển thị xung quanh trang hiện tại
    const range = [];
    
    // Trên mobile (giả sử < 768px), ta giới hạn chặt chẽ hơn
    // Ở đây mình lấy thuật toán đơn giản để hiện khoảng 4 số
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 3); // Hiện tối đa 4 số

    // Điều chỉnh lại nếu ở những trang cuối
    if (end - start < 3) {
      start = Math.max(1, end - 3);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f2f2f2]">
      <div className="hidden lg:block">
        <SideFloatBanners />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-3">
        <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm hidden lg:block">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            Thiết bị công nghệ chính hãng, giá tốt
          </h1>
          <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
            Khám phá laptop, PC, màn hình, bàn phím, chuột, tai nghe và nhiều phụ
            kiện công nghệ phù hợp cho học tập, làm việc và giải trí. Trang chủ
            được tối ưu hiển thị nội dung rõ ràng để hỗ trợ SEO và trải nghiệm
            người dùng.
          </p>
        </section>

        <div className="mt-3 flex">
          <CategorySidebar />
          <div className="max-w-[1030px] h-auto w-full">
            <HeroCarousel />
            <div className="hidden lg:block">
              <TopPromoRow />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <BottomWideRow />
        </div>

        <section className="mt-3 rounded-2xl bg-white p-4 shadow-sm ">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-[22px] font-bold text-black">
                Tất cả sản phẩm
              </h2>
              <p className="text-sm text-gray-600">
                Tổng cộng: {totalItems} sản phẩm
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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

            {getVisiblePages().map((pageNum) => (
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
              )
            )}

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
  );
}