import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const revalidate = 60; // ISR: 60s

export default function HomePage() {
  const top = products.slice(0, 8);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">GEARVN Clone</h1>
        <p className="mt-2 text-sm text-gray-600">
          Next.js App Router • ISR/SEO • Next/Image • Cart state phức tạp • Animation mượt
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" href="/category/laptop">Laptop</Link>
          <Link className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" href="/category/pc-gaming">PC Gaming</Link>
          <Link className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" href="/category/gpu">GPU</Link>
          <Link className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" href="/category/man-hinh">Màn hình</Link>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-lg font-bold">Sản phẩm nổi bật</h2>
          <span className="text-xs text-gray-500">Render từ server (ISR)</span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {top.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </div>
  );
}
