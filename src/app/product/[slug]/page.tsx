import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { vnd } from "@/lib/money";
import ProductGallery from "@/components/product/ProductGallery";
import AddToCart from "./ui/add-to-cart";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);

  if (!p) {
    return { title: "Sản phẩm không tồn tại" };
  }

  return {
    title: `${p.name} | GEARVN Clone`,
    description: p.shortDesc ?? p.name,
    alternates: {
      canonical: `/product/${p.slug}`,
    },
    openGraph: {
      title: p.name,
      description: p.shortDesc ?? p.name,
      images: [p.images[0]],
      type: "website",
      url: `/product/${p.slug}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const p = getProductBySlug(slug);

  if (!p) return notFound();

  const price = p.salePrice ?? p.price;

  const discountPercent =
    p.salePrice && p.price > 0
      ? Math.round(((p.price - p.salePrice) / p.price) * 100)
      : 0;

  return (
    <div className="mx-auto max-w-[1200px] space-y-4 bg-[#f5f5f5] px-3 py-4">
      <nav className="text-sm text-gray-600">
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

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <div className="bg-red-600 px-4 py-3 text-base font-bold text-white">
                ĐIỂM NỔI BẬT
              </div>

              <dl className="text-sm text-gray-700">
                {p.specs?.cpu && (
                  <div className="flex gap-2 border-b border-gray-100 px-4 py-3">
                    <dt className="w-28 shrink-0 text-gray-500">CPU</dt>
                    <dd className="font-medium">{p.specs.cpu}</dd>
                  </div>
                )}

                {p.specs?.gpu && (
                  <div className="flex gap-2 border-b border-gray-100 px-4 py-3">
                    <dt className="w-28 shrink-0 text-gray-500">VGA</dt>
                    <dd className="font-medium">{p.specs.gpu}</dd>
                  </div>
                )}

                {p.specs?.ram && (
                  <div className="flex gap-2 border-b border-gray-100 px-4 py-3">
                    <dt className="w-28 shrink-0 text-gray-500">RAM</dt>
                    <dd className="font-medium">{p.specs.ram}</dd>
                  </div>
                )}

                {p.specs?.storage && (
                  <div className="flex gap-2 border-b border-gray-100 px-4 py-3">
                    <dt className="w-28 shrink-0 text-gray-500">SSD</dt>
                    <dd className="font-medium">{p.specs.storage}</dd>
                  </div>
                )}

                {p.specs?.screen && (
                  <div className="flex gap-2 border-b border-gray-100 px-4 py-3">
                    <dt className="w-28 shrink-0 text-gray-500">Màn hình</dt>
                    <dd className="font-medium">{p.specs.screen}</dd>
                  </div>
                )}

                {p.specs?.refreshRate && (
                  <div className="flex gap-2 border-b border-gray-100 px-4 py-3">
                    <dt className="w-28 shrink-0 text-gray-500">Tần số quét</dt>
                    <dd className="font-medium">{p.specs.refreshRate}</dd>
                  </div>
                )}

                {p.specs?.brand && (
                  <div className="flex gap-2 px-4 py-3">
                    <dt className="w-28 shrink-0 text-gray-500">Hãng</dt>
                    <dd className="font-medium">{p.specs.brand}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}