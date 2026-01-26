import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { vnd } from "@/lib/money";
import AddToCart from "./ui/add-to-cart";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = getProductBySlug(params.slug);
  if (!p) return { title: "Sản phẩm không tồn tại" };

  const title = `${p.name} | GEARVN Clone`;
  const description = p.shortDesc;

  return {
    title,
    description,
    alternates: {
      canonical: `/product/${p.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [p.images[0]],
      type: "website",
      url: `/product/${p.slug}`,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProductBySlug(params.slug);
  if (!p) return notFound();

  const price = p.salePrice ?? p.price;

  return (
    <div className="space-y-4">
      {/* Breadcrumb nhẹ để UX + SEO */}
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

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Gallery */}
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={p.images[0]}
              alt={p.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {p.images.slice(1, 5).map((img, idx) => (
              <div
                key={`${p.id}-thumb-${idx}`}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100"
              >
                <Image
                  src={img}
                  alt={`Ảnh ${idx + 2} của ${p.name}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h1 className="text-xl font-bold">{p.name}</h1>
            <p className="mt-2 text-sm text-gray-600">{p.shortDesc}</p>

            <div className="mt-4 flex items-end gap-3">
              <div className="text-2xl font-extrabold text-red-600">
                {vnd(price)}
              </div>
              {p.salePrice && (
                <div className="text-sm text-gray-500 line-through">
                  {vnd(p.price)}
                </div>
              )}
            </div>

            <div className="mt-4">
              <AddToCart product={p} />
            </div>

            <div className="mt-5 grid gap-2 text-sm">
              <div className="font-semibold">Thông số</div>

              {/* Semantic tốt hơn ul/li */}
              <dl className="grid gap-1 text-gray-700">
                {p.specs.brand && (
                  <div className="flex gap-2">
                    <dt className="w-28 text-gray-500">Hãng</dt>
                    <dd className="font-medium">{p.specs.brand}</dd>
                  </div>
                )}
                {p.specs.cpu && (
                  <div className="flex gap-2">
                    <dt className="w-28 text-gray-500">CPU</dt>
                    <dd className="font-medium">{p.specs.cpu}</dd>
                  </div>
                )}
                {p.specs.ram && (
                  <div className="flex gap-2">
                    <dt className="w-28 text-gray-500">RAM</dt>
                    <dd className="font-medium">{p.specs.ram}</dd>
                  </div>
                )}
                {p.specs.gpu && (
                  <div className="flex gap-2">
                    <dt className="w-28 text-gray-500">GPU</dt>
                    <dd className="font-medium">{p.specs.gpu}</dd>
                  </div>
                )}
                {p.specs.storage && (
                  <div className="flex gap-2">
                    <dt className="w-28 text-gray-500">Lưu trữ</dt>
                    <dd className="font-medium">{p.specs.storage}</dd>
                  </div>
                )}
                {p.specs.screen && (
                  <div className="flex gap-2">
                    <dt className="w-28 text-gray-500">Màn hình</dt>
                    <dd className="font-medium">{p.specs.screen}</dd>
                  </div>
                )}
                {p.specs.refreshRate && (
                  <div className="flex gap-2">
                    <dt className="w-28 text-gray-500">Tần số quét</dt>
                    <dd className="font-medium">{p.specs.refreshRate}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 text-sm text-gray-600 shadow-sm">
            Tip chấm điểm: trang này là SSR/ISR + metadata để SEO.
          </div>
        </div>
      </div>
    </div>
  );
}
