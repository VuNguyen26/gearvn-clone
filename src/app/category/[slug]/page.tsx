import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { filterProducts, getProductsByCategory } from "@/lib/products";
import { CategorySlug } from "@/types/product";

export const revalidate = 60;

const categoryTitle: Record<CategorySlug, string> = {
  laptop: "Laptop",
  "pc-gaming": "PC Gaming",
  gpu: "Card đồ họa (GPU)",
  "man-hinh": "Màn hình",
};

// SEO title/description cho category
export async function generateMetadata({ params }: { params: { slug: CategorySlug } }) {
  const title = `${categoryTitle[params.slug]} | GEARVN Clone`;
  return {
    title,
    description: `Danh sách ${categoryTitle[params.slug]} - lọc/sắp xếp chuẩn SEO với SSR/ISR.`,
  };
}

type SortKey = "" | "price_asc" | "price_desc";

function parseSort(v?: string): SortKey {
  if (v === "price_asc" || v === "price_desc") return v;
  return "";
}

function toNumberOrUndef(v?: string) {
  if (!v) return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: CategorySlug };
  searchParams: { brand?: string; min?: string; max?: string; sort?: string; q?: string };
}) {
  const base = getProductsByCategory(params.slug);

  const items = filterProducts(base, {
    q: searchParams.q,
    brand: searchParams.brand,
    min: toNumberOrUndef(searchParams.min),
    max: toNumberOrUndef(searchParams.max),
    sort: parseSort(searchParams.sort) || undefined,
  });

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold">{categoryTitle[params.slug]}</h1>
        <p className="mt-1 text-sm text-gray-600">
          SSR/ISR list để Google crawl được • Filter sync URL
        </p>

        <form className="mt-3 grid gap-2 sm:grid-cols-4" method="GET">
          {/* Search */}
          <label className="sr-only" htmlFor="q">
            Tìm sản phẩm
          </label>
          <input
            id="q"
            name="q"
            defaultValue={searchParams.q ?? ""}
            placeholder="Tìm sản phẩm..."
            aria-label="Tìm sản phẩm"
            className="rounded-xl border px-3 py-2 text-sm"
          />

          {/* Brand */}
          <label className="sr-only" htmlFor="brand">
            Thương hiệu
          </label>
          <input
            id="brand"
            name="brand"
            defaultValue={searchParams.brand ?? ""}
            placeholder="Brand (ASUS/Lenovo...)"
            aria-label="Thương hiệu"
            className="rounded-xl border px-3 py-2 text-sm"
          />

          {/* Min price */}
          <label className="sr-only" htmlFor="min">
            Giá tối thiểu
          </label>
          <input
            id="min"
            name="min"
            type="number"
            inputMode="numeric"
            min={0}
            defaultValue={searchParams.min ?? ""}
            placeholder="Giá min"
            aria-label="Giá tối thiểu"
            className="rounded-xl border px-3 py-2 text-sm"
          />

          {/* Sort */}
          <label className="sr-only" htmlFor="sort">
            Sắp xếp
          </label>
          <select
            id="sort"
            name="sort"
            defaultValue={parseSort(searchParams.sort)}
            aria-label="Sắp xếp"
            className="rounded-xl border px-3 py-2 text-sm"
          >
            <option value="">Sắp xếp</option>
            <option value="price_asc">Giá tăng dần</option>
            <option value="price_desc">Giá giảm dần</option>
          </select>

          <div className="flex gap-2 sm:col-span-4">
            <button
              type="submit"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white"
            >
              Áp dụng
            </button>

            <Link
              href={`/category/${params.slug}`}
              className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
            >
              Reset
            </Link>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {items.length === 0 && (
        <div className="rounded-2xl bg-white p-6 text-sm text-gray-600">
          Không tìm thấy sản phẩm phù hợp.
        </div>
      )}
    </div>
  );
}
