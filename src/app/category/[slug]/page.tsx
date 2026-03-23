import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { filterProducts, getProductsByMenuSlug } from "@/lib/products";
import CategoryProductsClient from "./CategoryProductsClient";

export const revalidate = 60;

const MAX_W = "max-w-[1500px]";
const SITE_URL = "https://your-domain.com";

const categoryTitle: Record<string, string> = {
  laptop: "Laptop",
  "laptop-gaming": "Laptop Gaming",
  "pc-gvn": "PC GVN",
  "main-cpu-vga": "Main, CPU, VGA",
  "case-nguon-tan": "Case, Nguồn, Tản",
  "o-cung-ram-the-nho": "Ổ cứng, RAM, Thẻ nhớ",
  "loa-micro-webcam": "Loa, Micro, Webcam",
  "man-hinh": "Màn hình",
  "ban-phim": "Bàn phím",
  "chuot-lot-chuot": "Chuột + Lót chuột",
  "tai-nghe": "Tai nghe",
  "ghe-ban": "Ghế - Bàn",
  "phan-mem-mang": "Phần mềm, mạng",
  "handheld-console": "Handheld, Console",
  "phu-kien": "Phụ kiện (Hub, sạc, cáp..)",
  "dich-vu-thong-tin-khac": "Dịch vụ và thông tin khác",
};

type SortKey = "" | "price_asc" | "price_desc";

type SearchParams = {
  brand?: string;
  min?: string;
  max?: string;
  sort?: string;
  q?: string;
};

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<SearchParams>;
};

function parseSort(v?: string): SortKey {
  if (v === "price_asc" || v === "price_desc") return v;
  return "";
}

function toNumberOrUndef(v?: string) {
  if (!v) return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = categoryTitle[slug] ?? "Danh mục sản phẩm";
  const description = `Khám phá danh mục ${title} với nhiều sản phẩm công nghệ chất lượng, hỗ trợ lọc và sắp xếp thuận tiện, giao diện hiện đại và tối ưu SEO.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/category/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/category/${slug}`,
      type: "website",
      images: [
        {
          url: "/gearvn-pc-gvn-t11-topbar.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const sp = await searchParams;

  if (!categoryTitle[slug]) {
    return notFound();
  }

  const base = getProductsByMenuSlug(slug);

  const items = filterProducts(base, {
    q: sp.q,
    brand: sp.brand,
    min: toNumberOrUndef(sp.min),
    max: toNumberOrUndef(sp.max),
    sort: parseSort(sp.sort) || undefined,
  });

  const title = categoryTitle[slug];

  return (
    <div className={`mx-auto ${MAX_W} px-3 py-4`}>
      <div className="space-y-4">
        <nav
          aria-label="Breadcrumb"
          className="rounded-xl bg-white px-4 py-3 text-sm text-gray-500 shadow-sm"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-black">
                Trang chủ
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-700">{title}</li>
          </ol>
        </nav>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Danh mục {title} gồm nhiều sản phẩm công nghệ phù hợp cho học tập,
            làm việc, giải trí và nâng cấp góc máy. Người dùng có thể tìm kiếm,
            lọc theo thương hiệu, khoảng giá và sắp xếp nhanh ngay trên trang.
          </p>

          <form className="mt-4 grid gap-2 sm:grid-cols-4" method="GET">
            <label className="sr-only" htmlFor="q">
              Tìm sản phẩm
            </label>
            <input
              id="q"
              name="q"
              defaultValue={sp.q ?? ""}
              placeholder="Tìm sản phẩm..."
              aria-label="Tìm sản phẩm"
              className="rounded-xl border px-3 py-2 text-sm"
            />

            <label className="sr-only" htmlFor="brand">
              Thương hiệu
            </label>
            <input
              id="brand"
              name="brand"
              defaultValue={sp.brand ?? ""}
              placeholder="Brand"
              aria-label="Thương hiệu"
              className="rounded-xl border px-3 py-2 text-sm"
            />

            <label className="sr-only" htmlFor="min">
              Giá tối thiểu
            </label>
            <input
              id="min"
              name="min"
              type="number"
              inputMode="numeric"
              min={0}
              defaultValue={sp.min ?? ""}
              placeholder="Giá min"
              aria-label="Giá tối thiểu"
              className="rounded-xl border px-3 py-2 text-sm"
            />

            <label className="sr-only" htmlFor="sort">
              Sắp xếp
            </label>
            <select
              id="sort"
              name="sort"
              defaultValue={parseSort(sp.sort)}
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
                href={`/category/${slug}`}
                className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
              >
                Reset
              </Link>
            </div>
          </form>
        </div>

        <section
          aria-label={`Danh sách sản phẩm ${title}`}
          className="space-y-3"
        >
          <h2 className="sr-only">Danh sách sản phẩm {title}</h2>
          <CategoryProductsClient items={items} />
        </section>
      </div>
    </div>
  );
}