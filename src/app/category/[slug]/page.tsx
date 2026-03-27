import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { filterProducts, getProductsByMenuSlug } from "@/lib/products";
import CategoryProductsClient from "./CategoryProductsClient";

export const revalidate = 60;

const MAX_W = "max-w-[1500px]";
const SITE_URL = "https://gearvn-clone-t14d.vercel.app";

const categoryTitleMap: Record<string, string> = {
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
  "handheld-console": "Handheld Console",
  "phu-kien": "Phụ kiện",
  "dich-vu-thong-tin-khac": "Dịch vụ và thông tin khác",
};

const slugAliasMap: Record<string, string> = {
  laptopgaming: "laptop-gaming",
  "laptop-gamings": "laptop-gaming",
  laptopgamings: "laptop-gaming",
  "pc-gaming": "pc-gvn",
  pcgaming: "pc-gvn",
  monitor: "man-hinh",
  monitors: "man-hinh",
  mouse: "chuot-lot-chuot",
  mouses: "chuot-lot-chuot",
  mousepads: "chuot-lot-chuot",
  keyboard: "ban-phim",
  keyboards: "ban-phim",
  headphone: "tai-nghe",
  headphones: "tai-nghe",
  accessory: "phu-kien",
  accessories: "phu-kien",
};

type SortKey = "" | "price_asc" | "price_desc";

type SearchParams = {
  brand?: string | string[];
  min?: string | string[];
  max?: string | string[];
  sort?: string | string[];
  q?: string | string[];
  keyword?: string | string[];
};

type ResolvedPageProps = {
  params: {
    slug: string;
  };
  searchParams?: SearchParams;
};

type PageProps = {
  params: Promise<ResolvedPageProps["params"]> | ResolvedPageProps["params"];
  searchParams?:
    | Promise<ResolvedPageProps["searchParams"]>
    | ResolvedPageProps["searchParams"];
};

function normalizeSlug(value?: string) {
  const raw = String(value ?? "")
    .toLowerCase()
    .trim()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");

  return slugAliasMap[raw] ?? raw;
}

function getCategoryTitle(slug: string) {
  return categoryTitleMap[normalizeSlug(slug)];
}

function parseSort(value?: string): SortKey {
  if (value === "price_asc" || value === "price_desc") {
    return value;
  }
  return "";
}

function toNumberOrUndef(value?: string) {
  if (!value) return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

function firstValue(value?: string | string[]) {
  if (Array.isArray(value)) return value[0];
  return value;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = normalizeSlug(resolvedParams.slug);
  const title = getCategoryTitle(slug) ?? "Danh mục sản phẩm";
  const description = `Khám phá danh mục ${title} với nhiều sản phẩm công nghệ chất lượng, hỗ trợ lọc và sắp xếp thuận tiện, giao diện hiện đại và tối ưu SEO.`;

  return {
    title: `${title} | GEARVN Clone`,
    description,
    alternates: {
      canonical: `${SITE_URL}/category/${slug}`,
    },
    openGraph: {
      title: `${title} | GEARVN Clone`,
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
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const slug = normalizeSlug(resolvedParams.slug);
  const sp = resolvedSearchParams ?? {};

  const title = getCategoryTitle(slug);
  if (!title) {
    notFound();
  }

  const baseProducts = getProductsByMenuSlug(slug);

  const keyword = firstValue(sp.q) || firstValue(sp.keyword) || "";

  const items = filterProducts(baseProducts, {
    q: keyword,
    brand: firstValue(sp.brand),
    min: toNumberOrUndef(firstValue(sp.min)),
    max: toNumberOrUndef(firstValue(sp.max)),
    sort: parseSort(firstValue(sp.sort)) || undefined,
  });

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
              defaultValue={firstValue(sp.q) ?? firstValue(sp.keyword) ?? ""}
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
              defaultValue={firstValue(sp.brand) ?? ""}
              placeholder="Thương hiệu"
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
              defaultValue={firstValue(sp.min) ?? ""}
              placeholder="Giá tối thiểu"
              aria-label="Giá tối thiểu"
              className="rounded-xl border px-3 py-2 text-sm"
            />

            <label className="sr-only" htmlFor="sort">
              Sắp xếp
            </label>
            <select
              id="sort"
              name="sort"
              defaultValue={parseSort(firstValue(sp.sort))}
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