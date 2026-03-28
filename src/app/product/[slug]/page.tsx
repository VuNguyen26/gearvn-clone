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
    <div className="mx-auto max-w-[1200px] space-y-4 bg-[#f5f5f5] px-3 py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Trang chủ
        </Link>{" "}
        /{" "}
        <Link href={`/category/${p.category}`} className="hover:underline">
          {p.category}
        </Link>{" "}
        / <span className="text-gray-900">{p.name}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <ProductGallery name={p.name} images={p.images} />

        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h1 className="text-2xl font-bold text-black">{p.name}</h1>

            <p className="mt-2 text-sm text-blue-600">Xem đánh giá</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="text-4xl font-extrabold text-red-600">
                {vnd(price)}
              </div>

              {p.salePrice && (
                <>
                  <div className="text-2xl text-gray-500 line-through">
                    {vnd(p.price)}
                  </div>
                  <div className="rounded-md border border-red-300 px-3 py-1 text-sm font-semibold text-red-600">
                    -{discountPercent}%
                  </div>
                </>
              )}
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              {p.shortDesc ?? "Chưa có mô tả ngắn cho sản phẩm này."}
            </p>

            <div className="mt-5">
              <AddToCart product={p} />
            </div>

            {highlightSpecs.length > 0 && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                <div className="bg-red-600 px-4 py-3 text-base font-bold text-white">
                  ĐIỂM NỔI BẬT
                </div>

                <dl className="text-sm text-gray-700">
                  {highlightSpecs.map((item, index) => (
                    <div
                      key={`${item.label}-${index}`}
                      className="flex gap-2 border-b border-gray-100 px-4 py-3 last:border-b-0"
                    >
                      <dt className="w-32 shrink-0 text-gray-500">
                        {item.label}
                      </dt>
                      <dd className="whitespace-pre-line font-medium">
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

      <ProductSpecsTable specs={displaySpecs} />
    </div>
  );
}