import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { filterProducts, getAllProducts } from "@/lib/products";

type SearchParams = {
  q?: string | string[];
};

type SearchPageProps = {
  searchParams?: Promise<SearchParams> | SearchParams;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams;

  const rawKeyword = resolvedSearchParams?.q;
  const keyword = Array.isArray(rawKeyword)
    ? (rawKeyword[0] ?? "").trim()
    : (rawKeyword ?? "").trim();

  const items = keyword
    ? filterProducts(getAllProducts(), { q: keyword })
    : [];

  return (
    <div className="mx-auto max-w-[1200px] px-3 py-6">
      <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-bold">
          {keyword
            ? `Kết quả tìm kiếm cho: "${keyword}"`
            : "Tìm kiếm sản phẩm"}
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          {keyword
            ? `Tìm thấy ${items.length} sản phẩm phù hợp`
            : "Vui lòng nhập từ khóa để tìm kiếm sản phẩm"}
        </p>
      </div>

      {!keyword ? (
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">Bạn chưa nhập từ khóa tìm kiếm.</p>

          <Link
            href="/"
            className="mt-4 inline-block rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white"
          >
            Quay về trang chủ
          </Link>
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">
            Không tìm thấy sản phẩm nào phù hợp với từ khóa "{keyword}".
          </p>

          <Link
            href="/"
            className="mt-4 inline-block rounded-xl border px-5 py-2 text-sm font-semibold hover:bg-gray-50"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((product) => (
            <ProductCard key={product.id} p={product} />
          ))}
        </div>
      )}
    </div>
  );
}