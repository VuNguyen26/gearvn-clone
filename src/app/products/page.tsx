
import SideFloatBanners from "@/components/home/SideFloatBanners";
import ProductCard from "@/components/ProductCard";
import { getFilteredPaginatedProducts } from "@/lib/products";
import { get } from "node_modules/axios/index.cjs";

export const revalidate = 60;

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const sp = await searchParams;

  const page = Number(sp.page || "1");

  const { items, totalItems } = getFilteredPaginatedProducts({
    page: Number.isFinite(page) && page > 0 ? page : 1,
    pageSize: 20,

    q: getFirst(sp.q),
    category: getFirst(sp.category),
    brand: getFirst(sp.brand),
    cpu: getFirst(sp.cpu),
    usage: getFirst(sp.usage),
    need: getFirst(sp.need),
    purpose: getFirst(sp.purpose),
    series: getFirst(sp.series),
    price: getFirst(sp.price) as any,

    min: toNumber(sp.min),
    max: toNumber(sp.max),
    sort: getFirst(sp.sort) as any,

    gpu: getFirst(sp.vga),
    chip: getFirst(sp.chip),

    ram: getFirst(sp.ram),
    ssd: getFirst(sp.ssd),
    minstorage: getFirst(sp.minstorage),
    maxstorage: getFirst(sp.maxstorage),
    sdcard: getFirst(sp.sdcard),

    speaker: getFirst(sp.speaker),
    resolution: getFirst(sp.resolution),
    microphone: getFirst(sp.microphone),
  });

  return (
    <div className="max-w-[1200px] mx-auto py-4">
      <div className="hidden xl:block">
        <SideFloatBanners />
      </div>
      <h1 className="text-xl font-bold mb-4">
        Tìm thấy {totalItems} sản phẩm
      </h1>

      {items.length === 0 ? (
        <div>Không tìm thấy sản phẩm</div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function getFirst(v?: string | string[]) {
  if (Array.isArray(v)) return v[0];
  return v;
}

function toNumber(v?: string | string[]) {
  const val = getFirst(v);
  const num = Number(val);
  return Number.isFinite(num) ? num : undefined;
}