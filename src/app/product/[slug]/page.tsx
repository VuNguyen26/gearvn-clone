import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { vnd } from "@/lib/money";
import { getDisplaySpecs } from "@/lib/getDisplaySpecs";
import ProductGallery from "@/components/product/ProductGallery";
import ProductSpecsTable from "@/components/product/ProductSpecsTable";
import AddToCart from "./ui/add-to-cart";

export const revalidate = 60;

const SITE_URL = "https://gearvn-clone-t14d.vercel.app";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);

  if (!p) {
    return {
      title: "Sản phẩm không tồn tại",
      description: "Không tìm thấy sản phẩm.",
    };
  }

  const description = p.shortDesc ?? p.name;
  const image = p.images?.[0] ?? "/gearvn-pc-gvn-t11-topbar.png";

  return {
    title: p.name,
    description,
    alternates: {
      canonical: `${SITE_URL}/product/${p.slug}`,
    },
    openGraph: {
      title: p.name,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: p.name,
        },
      ],
      type: "website",
      url: `${SITE_URL}/product/${p.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const p = getProductBySlug(slug);

  if (!p) {
    notFound();
  }

  const price = p.salePrice ?? p.price;

  const discountPercent =
    p.salePrice && p.price > 0
      ? Math.round(((p.price - p.salePrice) / p.price) * 100)
      : 0;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    image: p.images?.length
      ? p.images
      : [`${SITE_URL}/gearvn-pc-gvn-t11-topbar.png`],
    description: p.shortDesc ?? p.name,
    brand: {
      "@type": "Brand",
      name: p.specs?.brand ?? "GEARVN Clone",
    },
    category: p.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: String(price),
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/product/${p.slug}`,
    },
  };

  const displaySpecs = getDisplaySpecs(p);
  const highlightSpecs = displaySpecs.slice(0, 6);

  return (
    <div className="mx-auto w-full max-w-[1200px] space-y-3 bg-[#f5f5f5] px-2 py-2 pb-24 sm:space-y-4 sm:px-4 sm:py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="overflow-hidden rounded-xl bg-white px-3 py-2 text-xs text-gray-600 sm:px-4 sm:py-3 sm:text-sm"
      >
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
          <Link href="/" className="hover:underline">
            Trang chủ
          </Link>

          <span>/</span>

          <Link href={`/category/${p.category}`} className="hover:underline">
            {p.category}
          </Link>

          <span>/</span>

          <span className="line-clamp-2 min-w-0 font-medium text-gray-900">
            {p.name}
          </span>
        </div>
      </nav>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] sm:gap-5">
        <div className="min-w-0 overflow-hidden">
          <ProductGallery name={p.name} images={p.images} />
        </div>

        <div className="min-w-0 space-y-3 sm:space-y-4">
          <div className="rounded-2xl bg-white p-3 shadow-sm sm:p-5">
            <h1 className="text-lg font-bold leading-7 text-black sm:text-[28px] sm:leading-9">
              {p.name}
            </h1>

            <p className="mt-2 text-sm text-blue-600">Xem đánh giá</p>

            <div className="mt-3 flex flex-wrap items-end gap-2 sm:mt-4 sm:gap-3">
              <div className="text-[28px] font-extrabold leading-none text-red-600 sm:text-4xl">
                {vnd(price)}
              </div>

              {p.salePrice && (
                <>
                  <div className="text-sm text-gray-500 line-through sm:text-2xl">
                    {vnd(p.price)}
                  </div>

                  <div className="rounded-md border border-red-300 px-2 py-1 text-[11px] font-semibold text-red-600 sm:px-3 sm:text-sm">
                    -{discountPercent}%
                  </div>
                </>
              )}
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-[15px]">
              {p.shortDesc ?? "Chưa có mô tả ngắn cho sản phẩm này."}
            </p>

            <div className="mt-4 sm:mt-5">
              <AddToCart product={p} />
            </div>

            {highlightSpecs.length > 0 && (
              <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 sm:mt-6">
                <div className="bg-red-600 px-4 py-3 text-sm font-bold text-white sm:text-base">
                  ĐIỂM NỔI BẬT
                </div>

                <dl className="text-sm text-gray-700">
                  {highlightSpecs.map((item, index) => (
                    <div
                      key={`${item.label}-${index}`}
                      className="flex flex-col gap-1.5 border-b border-gray-100 px-3 py-3 last:border-b-0 sm:flex-row sm:gap-3 sm:px-4"
                    >
                      <dt className="shrink-0 text-sm font-medium text-gray-500 sm:w-32">
                        {item.label}
                      </dt>

                      <dd className="break-words whitespace-pre-line text-sm font-medium leading-6 text-gray-800">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="min-w-0 overflow-x-auto">
        <ProductSpecsTable specs={displaySpecs} />
      </div>
    </div>
  );
}