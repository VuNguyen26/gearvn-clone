import { webcams } from './../data/products/webcams';
import { speakers } from './../data/products/speakers';
import { sdcards } from './../data/products/sdcards';
import { MapPin } from 'lucide-react';
import { mainboards } from './../data/products/mainboards';
import { products } from "@/data/products/index"; 
import { Product } from "@/types/product";
import { constant } from 'firebase/firestore/pipelines';
import { body, p } from 'framer-motion/client';

// export async function getAllProducts() {
//   return await products(); 
// }

export function getAllProducts() {
  return  products; 
}

export function getAllProductsFlat() {
  return products;
}

export function getProductBySlug(slug: string) {
  const normalizedSlug = normalizeValue(slug);

  return products.find(
    (p) =>
      normalizeValue(p.slug) === normalizedSlug ||
      slugify(p.slug) === slugify(slug)
  );
}

export function getProductsByCategory(category: string) {
  const normalizedCategory = normalizeValue(category);
  const matchedCategories = expandCategoryAliases(normalizedCategory);

  return products.filter((p) => {
    const values = getProductCategoryValues(p);
    return values.some((value) => matchedCategories.includes(value));
  });
}

const menuCategoryMap: Record<string, string[]> = {
  laptop: ["laptop", "laptops"],

  "laptop-gaming": [
    "laptop-gaming",
    "gaming-laptop",
    "gaming-laptops",
    "laptopgaming",
    "gaming",
    "gaming-laptop",
    "gaming-notebook",
  ],

  "pc-gvn": ["pc", "pcs", "pc-gvn"],

  "main-cpu-vga": [
    "mainboard",
    "mainboards",
    "cpu",
    "cpus",
    "vga",
    "vgas",
    "gpu",
    "gpus",
    "main-cpu-vga",
    "main_cpu_vga",
  ],

  "case-nguon-tan": [
    "case",
    "cases",
    "psu",
    "power-supply",
    "power-supplies",
    "cooler",
    "coolers",
    "fan",
    "fans",
    "case-nguon-tan",
  ],

  "o-cung-ram-the-nho": [
    "ssd",
    "ssds",
    "hdd",
    "hdds",
    "ram",
    "rams",
    "sdcard",
    "sdcards",
    "memory-card",
    "memory-cards",
    "storage",
    "o-cung-ram-the-nho",
    "ssd_ram_sd",
  ],

  "loa-micro-webcam": [
    "speaker",
    "speakers",
    "micro",
    "micros",
    "microphone",
    "microphones",
    "webcam",
    "webcams",
    "loa-micro-webcam",
    "speaker_micro_webcam",
  ],

  "man-hinh": ["monitor", "monitors", "man-hinh"],

  "ban-phim": ["keyboard", "keyboards", "ban-phim"],

  "chuot-lot-chuot": [
    "mouse",
    "mouses",
    "mousepad",
    "mousepads",
    "chuot-lot-chuot",
    "mouses_mousepads",
  ],

  "tai-nghe": ["headphone", "headphones", "tai-nghe"],

  "ghe-ban": [
    "chair",
    "chairs",
    "table",
    "tables",
    "ghe-ban",
    "tables_chairs",
  ],

  "handheld-console": [
    "handheld-console",
    "handheld_console",
    "handheld",
    "console",
    "console-gaming",
    "gaming-console",
  ],

  "phu-kien": [
    "phu-kien",
    "phu_kien",
    "accessory",
    "accessories",
    "adapter",
    "hub",
    "charger",
    "cable",
  ],

};

function normalizeValue(value?: string | number | null) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeText(value?: string | number | null) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
}

function compactText(value?: string | number | null) {
  return normalizeText(value).replace(/\s+/g, "");
}

function slugify(value?: string | number | null) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getProductPrice(product: Product) {
  return Number(product.salePrice ?? product.price ?? 0);
}

function getSpecs(product: Product): Record<string, unknown> {
  return ((product as any).specs || {}) as Record<string, unknown>;
}

function getSpecValue(product: Product, key: string) {
  const specs = getSpecs(product);
  return specs[key];
}

function getSpecValues(product: Product): string[] {
  const specs = getSpecs(product);

  return Object.values(specs)
    .filter(Boolean)
    .map((v) => String(v));
}

function getProductCategoryValues(product: Product): string[] {
  return [
    normalizeValue(product.category),
    normalizeValue((product as any).subcategory),
  ].filter(Boolean);
}

function isConcreteProductCategory(value: string) {
  return products.some((p) => {
    const values = getProductCategoryValues(p);
    return values.includes(value);
  });
}
function expandCategoryAliases(rawValue?: string) {
  const normalized = normalizeValue(rawValue);
  if (!normalized) return [];
  if (isConcreteProductCategory(normalized)) {
    return [normalized];
  }
  const directAliases = menuCategoryMap[normalized];
  if (directAliases) {
    return Array.from(
      new Set([normalized, ...directAliases].map(normalizeValue))
    ).filter(Boolean);
  }
  const matchedGroup = Object.entries(menuCategoryMap).find(([, aliases]) =>
    aliases.some((item) => normalizeValue(item) === normalized)
  );

  if (matchedGroup) {
    const [groupKey, aliases] = matchedGroup;

    return Array.from(
      new Set([groupKey, ...aliases].map(normalizeValue))
    ).filter(Boolean);
  }

  // 4) Mặc định giữ nguyên
  return [normalized];
}

function getAllSearchableValues(product: Product) {
  const cardSpecs =
    product.cardSpecs?.flatMap((item) => [item.label, item.value]) ?? [];

  const detailSpecs =
    product.detailSpecs?.flatMap((item) => [item.label, item.value]) ?? [];

  return [
    product.name,
    product.slug,
    product.category,
    product.subcategory,
    product.brand,
    (product as any).subcategory,
    (product as any).brand,
    (product as any).cpu,
    (product as any).usage,
    (product as any).need,
    (product as any).purpose,
    (product as any).series,
    product.shortDesc,
    (product as any).shortDesc,
    ...(product.images || []),
    ...getSpecValues(product),
    ...cardSpecs,
    ...detailSpecs,
  ]
    .filter(Boolean)
    .map((v) => String(v));
}

function includesLoose(candidate: string, target: string) {
  const a = normalizeValue(candidate);
  const b = normalizeValue(target);
  const aa = compactText(candidate);
  const bb = compactText(target);

  return (
    a === b ||
    a.includes(b) ||
    b.includes(a) ||
    aa === bb ||
    aa.includes(bb) ||
    bb.includes(aa)
  );
}

function matchFromCandidates(
  candidates: Array<string | number | null | undefined>,
  target?: string
) {
  if (!target) return true;

  const validCandidates = candidates.filter(Boolean).map((v) => String(v));

  return validCandidates.some((candidate) => includesLoose(candidate, target));
}

function matchPriceLabel(product: Product, rawValue?: string) {
  if (!rawValue) return true;

  const price = getProductPrice(product);
  const value = normalizeValue(rawValue);

  // === NHÓM LAPTOP THƯỜNG ===
  if (["under-15", "duoi-15-trieu", "duoi-15"].includes(value)) {
    return price < 15000000;
  }
  if (["15-20", "15-20-trieu", "tu-15-den-20-trieu"].includes(value)) {
    return price >= 15000000 && price <= 20000000;
  }
  if (["over-20", "tren-20-trieu", "tren-20"].includes(value)) {
    return price > 20000000;
  }
  // === NHÓM LAPTOP GAMING ===
  if (["under-20", "duoi-20-trieu"].includes(value)) {
    return price < 20000000;
  }
  if (["20-25", "tu-20-den-25-trieu", "20-25-trieu"].includes(value)) {
    return price >= 20000000 && price <= 25000000;
  }
  if (["25-30", "tu-25-den-30-trieu", "25-30-trieu"].includes(value)) {
    return price >= 25000000 && price <= 30000000;
  }
  if (["over-30", "tren-30-trieu", "tren-30"].includes(value)) {
    return price > 30000000;
  }
  // === NHÓM PC (Workstation/High-end) ===
  if (["under-30", "pc-duoi-30-trieu"].includes(value)) {
    return price < 30000000;
  }
  if (["30-50", "pc-tu-30-50-trieu", "tu-30-den-50-trieu"].includes(value)) {
    return price >= 30000000 && price <= 50000000;
  }
  if (["50-70", "pc-tu-50-70-trieu", "tu-50-den-70-trieu"].includes(value)) {
    return price >= 50000000 && price <= 70000000;
  }
  if (["70-100", "pc-tu-70-100-trieu", "tu-70-den-100-trieu"].includes(value)) {
    return price >= 70000000 && price <= 100000000;
  }
  if (["100-200", "pc-tu-100-200-trieu", "tu-100-den-200-trieu"].includes(value)) {
    return price >= 100000000 && price <= 200000000;
  }
  if (["over-200", "pc-tren-200-trieu", "tren-200-trieu"].includes(value)) {
    return price > 200000000;
  }
  // === NHÓM TAI NGHE ===
  if (["under-500k", "tai-nghe-duoi-500-nghin"].includes(value)) {
    return price < 500000;
  }
  if (["500k-1m", "tai-nghe-tu-500-nghin-den-1-trieu"].includes(value)) {
    return price >= 500000 && price <= 1000000;
  }
  if (["1-2m", "tai-nghe-tu-1-den-2-trieu"].includes(value)) {
    return price > 1000000 && price <= 2000000;
  }
  if (["over-2m", "tai-nghe-tren-2-trieu"].includes(value)) {
    return price > 2000000;
  }
  // === NHÓM LOA ===
  if (["under-1m", "loa-duoi-1-trieu"].includes(value)) {
    return price < 1000000;
  }
  if (["1-3m", "loa-tu-1-den-3-trieu"].includes(value)) {
    return price >= 1000000 && price <= 3000000;
  }
  if (["3-5m", "loa-tu-3-den-5-trieu"].includes(value)) {
    return price > 3000000 && price <= 5000000;
  }
  if (["over-5m", "loa-tren-5-trieu"].includes(value)) {
    return price > 5000000;
  }
  // === NHÓM MICRO ===
  if (["under-1m", "micro-duoi-1-trieu"].includes(value)) {
    return price < 1000000;
  }
  if (["1-2m", "micro-tu-1-den-2-trieu"].includes(value)) {
    return price >= 1000000 && price <= 2000000;
  }
  if (["2-5m", "micro-tu-2-den-5-trieu"].includes(value)) {
    return price > 2000000 && price <= 5000000;
  }
  if (["over-5m", "micro-tren-5-trieu"].includes(value)) {
    return price > 5000000;
  }
  // === NHÓM TAI NGHE ===
  if (["under-1m-headphone", "tai-nghe-duoi-1-trieu"].includes(value)) {
    return price < 1000000;
  }
  if (["1-2m-headphone", "tai-nghe-1-trieu-den-2-trieu", "tai-nghe-tu-1-den-2-trieu"].includes(value)) {
    return price >= 1000000 && price <= 2000000;
  }
  if (["2-3m-headphone", "tai-nghe-2-den-3-trieu"].includes(value)) {
    return price > 2000000 && price <= 3000000;
  }
  if (["3-4m-headphone", "tai-nghe-3-den-4-trieu"].includes(value)) {
    return price > 3000000 && price <= 4000000;
  }
  if (["over-4m-headphone", "tai-nghe-tren-4-trieu"].includes(value)) {
    return price > 4000000;
  }
  // === NHÓM CHUỘT ===
  if (["under-500k-mouse", "chuot-duoi-500-nghin"].includes(value)) {
    return price < 500000;
  }
  if (["500k-1m-mouse", "chuot-tu-500-nghin-den-1-trieu", "chuot-tu-500-nghin-1-trieu"].includes(value)) {
    return price >= 500000 && price <= 1000000;
  }
  if (["1-2m-mouse", "chuot-tu-1-trieu-den-2-trieu", "chuot-tu-1-trieu-2-trieu"].includes(value)) {
    return price > 1000000 && price <= 2000000;
  }
  if (["2-3m-mouse", "chuot-tren-2-trieu-3-trieu", "chuot-tu-2-trieu-den-3-trieu"].includes(value)) {
    return price > 2000000 && price <= 3000000;
  }
  if (["over-3m-mouse", "chuot-tren-3-trieu"].includes(value)) {
    return price > 3000000;
  }
  // === NHÓM GHẾ - BÀN ===
  if (["under-5m-chair-table", "ban-ghe-duoi-5-trieu"].includes(value)) {
    return price < 5000000;
  }
  if (["5-10m-chair-table", "ban-ghe-tu-5-den-10-trieu"].includes(value)) {
    return price >= 5000000 && price <= 10000000;
  }
  if (["over-10m-chair-table", "ban-ghe-tren-10-trieu"].includes(value)) {
    return price > 10000000;
  }
  // === NHÓM HANDHELD / CONSOLE ===
  if (["under-1m-handheld", "handheld-duoi-1-trieu"].includes(value)) {
    return price < 1000000;
  }
  if (["over-2m-handheld", "handheld-tren-2-trieu"].includes(value)) {
    return price > 2000000;
  }
  // === NHÓM PHỤ KIỆN ===
  if (["under-200k", "phu-kien-duoi-200-nghin", "duoi-200-nghin"].includes(value)) {
    return price < 200000;
  }
  if (["200k-500k", "phu-kien-tu-200-den-500-nghin", "tu-200-en-500-nghin"].includes(value)) {
    return price >= 200000 && price <= 500000;
  }
  if (["500k-1m", "phu-kien-tu-500-nghin-den-1-trieu", "tu-500-nghin-en-1-trieu"].includes(value)) {
    return price > 500000 && price <= 1000000;
  }
  if (["over-1m", "phu-kien-tren-1-trieu", "tren-1-trieu"].includes(value)) {
    return price > 1000000;
  }
  // === NHÓM MÀN HÌNH ===
  if (value === "under-5" || value === "duoi-5-trieu") {
    return price < 5000000;
  }
  if (value === "5-10" || value === "tu-5-trieu-den-10-trieu") {
    return price >= 5000000 && price <= 10000000;
  }
  if (value === "10-20" || value === "tu-10-trieu-den-20-trieu") {
    return price > 10000000 && price <= 20000000;
  }
  if (value === "20-30" || value === "tu-20-trieu-den-30-trieu") {
    return price > 20000000 && price <= 30000000;
  }
  if (value === "over-30" || value === "tren-30-trieu") {
    return price > 30000000;
  }
  // === NHÓM KEYBOARD ===
  if (value === "under-1" || value === "duoi-1-trieu") {
    return price < 1000000;
  }

  if (value === "1-2" || value === "1-trieu-2-trieu") {
    return price >= 1000000 && price <= 2000000;
  }

  if (value === "2-3" || value === "2-trieu-3-trieu") {
    return price > 2000000 && price <= 3000000;
  }

  if (value === "3-4" || value === "3-trieu-4-trieu") {
    return price > 3000000 && price <= 4000000;
  }

  if (value === "over-4" || value === "tren-4-trieu") {
    return price > 4000000;
  }
  return true;
}

function matchAccessoryTypeLabel(product: Product, rawValue?: string) {
  if (!rawValue) return true;

  return matchFromCandidates(
    [
      (product as any).accessoryType,
      (product as any).type,
      getSpecValue(product, "accessoryType"),
      getSpecValue(product, "AccessoryType"),
      ...getAllSearchableValues(product),
    ],
    rawValue
  );
}

export function getProductsByMenuSlug(slug: string): Product[] {
  const normalizedSlug = normalizeValue(slug);
  const matchedValues = expandCategoryAliases(normalizedSlug);

  return products.filter((p) => {
    const category = normalizeValue(p.category);
    const subcategory = normalizeValue((p as any).subcategory);
    const values = [category, subcategory].filter(Boolean);

    if (values.some((value) => matchedValues.includes(value))) {
      return true;
    }

    if (normalizedSlug === "laptop-gaming") {
      return (
        values.some((value) =>
          [
            "laptop-gaming",
            "laptopgaming",
            "gaming-laptop",
            "gaming-laptops",
            "gaming",
          ].includes(value)
        ) ||
        (category === "laptop" &&
          ["gaming", "laptop-gaming", "laptopgaming"].includes(subcategory))
      );
    }

    if (normalizedSlug === "laptop") {
      return (
        category === "laptop" &&
        !["gaming", "laptop-gaming", "laptopgaming"].includes(subcategory)
      );
    }

    return false;
  });
}

export function getFeaturedProducts(limit?: number) {
  const grouped = new Map<string, Product[]>();

  for (const product of products) {
    const key = normalizeValue(product.category);
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key)!.push(product);
  }

  const categoryGroups = Array.from(grouped.values());
  const result: Product[] = [];
  let index = 0;

  while (true) {
    let added = false;

    for (const group of categoryGroups) {
      if (group[index]) {
        result.push(group[index]);
        added = true;

        if (typeof limit === "number" && result.length >= limit) {
          return result;
        }
      }
    }

    if (!added) break;
    index++;
  }

  return result;
}

export async function getPaginatedProducts(page: number = 1, pageSize: number = 20) {
  const all = await getAllProducts();
  const totalItems = all.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const currentPage = Math.min(Math.max(page, 1), Math.max(totalPages, 1));

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: all.slice(start, end),
    totalItems,
    totalPages,
    currentPage,
    pageSize,
  };
}

export type ListQuery = {
  q?: string;
  category?: string;
  brand?: string;
  cpu?: string;
  usage?: string;
  need?: string;
  purpose?: string;
  series?: string;
  accessoryType?: string;
  price?: "under-15" | "15-20" | "over-20" | string;
  min?: number;
  max?: number;
  sort?: "price_asc" | "price_desc" | "newest";

  gpu?: string;
  chip?:string;

  ram?: string;
  ssd?: string;
  maxstorage?: string;
  minstorage?: string;
  sdcard?:string;

  speaker?:string;
  resolution?:string;
  microphone?: string;

  hz?: string;
  inch?: string;

  type?: string;
};

export function filterProducts(items: Product[], query: ListQuery) {
  if (!Array.isArray(items)) {
    console.error("Lỗi: filterProducts nhận được dữ liệu không phải mảng!", items);
    return [];
  }
  let arr = [...items];
  const normalizedCategory = normalizeValue(query.category);
  const normalizedBrand = normalizeValue(query.brand);
  // 1. Thay vì query.cpu?.replace("-", " ")
  let cpuQuery = query.cpu || "";
  // 2. Dùng Regex để thay THẾ TẤT CẢ dấu "-" thành dấu cách
  // "cpu-intel-core-ultra-series-2" -> "cpu intel core ultra series 2"
  cpuQuery = cpuQuery.replace(/-/g, " ");
  // 3. Chuẩn hóa chuỗi (xóa khoảng trắng thừa, viết thường)
  const normalizedCpu = normalizeValue(cpuQuery);
  const normalizedUsage = normalizeValue(
    query.usage || query.need || query.purpose
  );
  const normalizedSeries = normalizeValue(query.series);
  const normalizedQ = normalizeText(query.q);
  const normalizedAccessoryType = normalizeValue(query.accessoryType);



  const normalizedVga = normalizeValue(query.gpu);
  const normalizedMainboard = normalizeValue(query.chip);

  const normalizedRAM = normalizeValue(query.ram);
  const normalizedSSD = normalizeValue(query.ssd);
  const normalizedMinStorage = normalizeValue(query.minstorage);
  const normalizedMaxStorage = normalizeValue(query.maxstorage);
  const normalizedSdCard = normalizeValue(query.sdcard);

  const normalizedSpeaker = normalizeValue(query.speaker);
  const normalizedResolution = normalizeValue(query.resolution);
  const normalizedMicrophone = normalizeValue(query.microphone);

  const normalizedHz = normalizeValue(query.hz);
  const normalizedInch = normalizeValue(query.inch);

  const normalizedType = normalizeValue(query.type);

  if (normalizedCategory) {
    if (normalizedCategory === "mouse" || normalizedCategory === "mousepad") {
      arr = arr.filter((p) => {
        const values = getProductCategoryValues(p);
        return values.includes(normalizedCategory);
      });
    } else {
      const matchedCategories = expandCategoryAliases(normalizedCategory);

      arr = arr.filter((p) => {
        const values = getProductCategoryValues(p);
        return values.some((value) => matchedCategories.includes(value));
      });
    }
  }

  if (normalizedAccessoryType) {
    arr = arr.filter((p) =>
      matchAccessoryTypeLabel(p, normalizedAccessoryType)
    );
  }
  
  if (normalizedBrand) {
    console.log (arr);
    console.log(normalizedCategory)
    arr = arr.filter((p) =>
      matchFromCandidates(
        [
          (p as any).brand,
          getSpecValue(p, "brand"),
          getSpecValue(p, "Brand"),
          productHasBrandInName(p),
          p.name,
          p.slug,
          (p as any).shortDesc,
          ...getSpecValues(p),
        ],
        normalizedBrand
      )
    );
  }
  if (normalizedMainboard) {
    arr = arr.filter((p) => {
      const cardValues = (p as any).cardSpecs?.map((card : any) => card.value) || [];
      const detailValues = (p as any).detailSpecs?.map((s: any) => s.value) || [];
      const candidates = [
        ...cardValues,
        ...detailValues,
        getSpecValue(p, "Chipset"),
        getSpecValue(p, "Mainboard"),
        ...getSpecValues(p),
      ];
      const normalizedCandidates = candidates
        .filter(Boolean) 
        .map(val => normalizeValue(val)); 
      return matchFromCandidates(
        normalizedCandidates, 
        normalizedMainboard
      );
    })
  }
  if (normalizedCpu) {
    arr = arr.filter((p) => {
      const detailValues = (p as any).detailSpecs?.map((value : any) => value.value) || [];
      const candidates = [
        (p as any).specs?.cpu,
        ...detailValues,
        getSpecValue(p,"Dòng CPU"),
        getSpecValue(p,"dòng CPU"),
        ...getSpecValues(p),
      ];
      const normalizedCandidates = candidates
        .filter(Boolean)
        .map(val => normalizeValue(val));
      return matchFromCandidates(normalizedCandidates, normalizedCpu);
    });
  }
  if (normalizedUsage) {
    arr = arr.filter((p) =>
      matchFromCandidates(
        [
          (p as any).usage,
          (p as any).need,
          (p as any).purpose,
          getSpecValue(p, "usage"),
          getSpecValue(p, "Usage"),
          getSpecValue(p, "need"),
          getSpecValue(p, "Need"),
          getSpecValue(p, "purpose"),
          getSpecValue(p, "Purpose"),
          getSpecValue(p, "segment"),
          getSpecValue(p, "Segment"),
          p.name,
          p.slug,
          (p as any).shortDesc,
          ...getSpecValues(p),
        ],
        normalizedUsage
      )
    );
  }
  if (normalizedSeries) {
    arr = arr.filter((p) =>
      matchFromCandidates(
        [
          (p as any).series,
          getSpecValue(p, "series"),
          getSpecValue(p, "Series"),
          p.name,
          p.slug,
          (p as any).shortDesc,
          ...getSpecValues(p),
        ],
        normalizedSeries
      )
    );
  }
  if (normalizedVga) {
    const cleanTarget = normalizedVga.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Bỏ dấu tiếng Việt
            .replace(/đ/g, "d")
            .replace(/[^a-z0-9]/g, "");
    arr = arr.filter((p) => {
      const normalizedCandidates =
        [
        (p as any).specs?.gpu, // Dành cho cấu trúc specs: { gpu: "RTX 5080" }
        ...getSpecValues(p),
      ].filter(Boolean).map(value => value.toLowerCase()
                                          .normalize("NFD")
                                          .replace(/[\u0300-\u036f]/g, "") // Bỏ dấu tiếng Việt
                                          .replace(/đ/g, "d")
                                          .replace(/[^a-z0-9]/g, ""));
      return normalizedCandidates.some((candidate) => {
        if (cleanTarget.endsWith("ti")) 
          return candidate.includes(cleanTarget);
        return candidate.includes(cleanTarget) && !candidate.includes(cleanTarget + "ti");
      });
   });
  }
  if (normalizedRAM){
    arr = arr.filter((p) => { 
      const specsRam = normalizeValue((p as any).specs?.ram);
      const cardValues = (p as any).cardSpecs?.map((card : any) => card.value.toLowerCase());
      const candidates = 
        [
          p.brand,
          ...cardValues,
          ...(Array.isArray(specsRam) ? specsRam : [specsRam]),
          ...getSpecValues(p),
        ].filter(Boolean).map(val => val.toLowerCase());
      return candidates.includes(normalizedRAM);
    })
  }
  if (normalizedMinStorage && normalizedMaxStorage){
    const min = parseFloat(normalizedMinStorage);
    const max = parseFloat(normalizedMaxStorage);
    arr = arr.filter((p) => {
      const specsStorage = normalizeValue((p as any).specs?.storage);
      let num = parseFloat(specsStorage);
      if (specsStorage.includes("tb")) num = num*1000;
      return num >= min && num <= max;
    })
  }
  if (normalizedSSD) {
    arr = arr.filter((p) => {
      const ssd = (p as any).brand.toLowerCase();
      return matchFromCandidates(
        [
          (p as any).brand,
          ...getSpecValues(p)
        ].filter(Boolean).map(val => val.toLowerCase()),
        normalizedSSD
      )
    })
  }
  if(normalizedSdCard) {
    arr = arr.filter((p) => {
      return matchFromCandidates([
        (p as any).brand,
        ...getSpecValues(p)
      ].filter(Boolean).map(val => val.toLowerCase()),
      normalizedSdCard
    )})
  }
  if(normalizedSpeaker) {
    arr = arr.filter((p) => {
      return matchFromCandidates([
        (p as any).brand,
        (p as any).detailSpecs?.map((specs : any) => specs.value),
        ...getSpecValues(p)
      ].filter(Boolean).map(val => String(val).toLowerCase()),
      normalizedSdCard
    )})
  }
  if (normalizedResolution) {
    arr = arr.filter((p) => {
      const cardValues = (p as any).cardSpecs?.map((card : any) => card.value) || [];
      const candidates = [
        ...cardValues,
        ...getSpecValues(p)
      ].filter(Boolean).map(val => normalizeValue(val));
      return matchFromCandidates(candidates,normalizedResolution)
    })
  }
  if (normalizedMicrophone) {
    arr = arr.filter((p) => {
      return matchFromCandidates([
        (p as any).brand,
        ...getSpecValues(p),
      ].filter(Boolean).map(val => normalizeValue(val)),
      normalizedMicrophone
    )
    })
  }
  if (normalizedHz){
    arr = arr.filter((p) => {
      return matchFromCandidates([
        (p as any).detailSpecs?.map((value : any) => value.value),
        ...getSpecValues(p),
      ],
      normalizedHz
    )
    })
  }
  if (normalizedInch){
    const inch = parseFloat(normalizedInch); 
    arr = arr.filter((p) => {
      const detailValues = (p as any).detailSpecs?.map((value : any) => normalizeValue(value.value)) || [];
    const inches:number[] = detailValues
      .map((v: string) => parseFloat(v))
      .filter((n: number) => !isNaN(n));
    if (normalizedInch === "over-32") {
      return inches.some((n) => n > 32); 
    }
    return inches.some((n) => n === inch);
    })
  }
  if (normalizedQ) {
    arr = arr.filter((p) => {
      const pPrice = getProductPrice(p);
      // Laptop
      if (
        normalizedQ === "duoi 15 trieu" ||
        normalizedQ === "duoi 15" ||
        normalizedQ === "under 15"
      ) {
        return pPrice < 15000000;
      }
      if (
        normalizedQ === "tu 15 den 20 trieu" ||
        normalizedQ === "15 20 trieu" ||
        normalizedQ === "15 20"
      ) {
        return pPrice >= 15000000 && pPrice <= 20000000;
      }
      if (
        normalizedQ === "tren 20 trieu" ||
        normalizedQ === "tren 20" ||
        normalizedQ === "over 20"
      ) {
        return pPrice > 20000000;
      }
      // Laptop Gaming
      if (
      normalizedQ === "duoi 20 trieu" ||
      normalizedQ === "under 20"
      ) {
        return pPrice < 20000000;
      }
      if (
        normalizedQ === "tu 20 den 25 trieu" ||
        normalizedQ === "20 25 trieu" ||
        normalizedQ === "20 25"
      ) {
        return pPrice >= 20000000 && pPrice <= 25000000;
      }
      if (
        normalizedQ === "tu 25 den 30 trieu" ||
        normalizedQ === "25 30 trieu" ||
        normalizedQ === "25 30"
      ) {
        return pPrice >= 25000000 && pPrice <= 30000000;
      }
      if (
        normalizedQ === "tren 30 trieu" ||
        normalizedQ === "tren 30" ||
        normalizedQ === "over 30"
      ) {
        return pPrice > 30000000;
      }
      // ===== PC =====
      if (
        normalizedQ === "pc duoi 30 trieu" ||
        normalizedQ === "duoi 30 trieu"
      ) {
        return pPrice < 30000000;
      }
      if (
        normalizedQ === "pc tu 30 50 trieu" ||
        normalizedQ === "30 50 trieu" ||
        normalizedQ === "tu 30 den 50 trieu"
      ) {
        return pPrice >= 30000000 && pPrice <= 50000000;
      }
      if (
        normalizedQ === "pc tu 50 70 trieu" ||
        normalizedQ === "50 70 trieu" ||
        normalizedQ === "tu 50 den 70 trieu"
      ) {
        return pPrice >= 50000000 && pPrice <= 70000000;
      }
      if (
        normalizedQ === "pc tu 70 100 trieu" ||
        normalizedQ === "70 100 trieu" ||
        normalizedQ === "tu 70 den 100 trieu"
      ) {
        return pPrice >= 70000000 && pPrice <= 100000000;
      }
      if (
        normalizedQ === "pc tu 100 200 trieu" ||
        normalizedQ === "100 200 trieu" ||
        normalizedQ === "tu 100 den 200 trieu"
      ) {
        return pPrice >= 100000000 && pPrice <= 200000000;
      }
      if (
        normalizedQ === "pc tren 200 trieu" ||
        normalizedQ === "tren 200 trieu" ||
        normalizedQ === "over 200"
      ) {
        return pPrice > 200000000;
      }
      // ===== MÀN HÌNH (MONITOR) =====
      if (
        normalizedQ === "man hinh duoi 5 trieu" ||
        normalizedQ === "duoi 5 trieu" ||
        normalizedQ === "monitor under 5m"
      ) {
        return pPrice < 5000000;
      }
      if (
        normalizedQ === "man hinh 5 10 trieu" ||
        normalizedQ === "5 10 trieu" ||
        normalizedQ === "tu 5 den 10 trieu"
      ) {
        return pPrice >= 5000000 && pPrice <= 10000000;
      }
      if (
        normalizedQ === "man hinh 10 20 trieu" ||
        normalizedQ === "10 20 trieu" ||
        normalizedQ === "tu 10 den 20 trieu"
      ) {
        return pPrice >= 10000000 && pPrice <= 20000000;
      }
      if (
        normalizedQ === "man hinh 20 30 trieu" ||
        normalizedQ === "20 30 trieu" ||
        normalizedQ === "tu 20 den 30 trieu"
      ) {
        return pPrice >= 20000000 && pPrice <= 30000000;
      }
      if (
        normalizedQ === "man hinh tren 30 trieu" ||
        normalizedQ === "tren 30 trieu" ||
        normalizedQ === "over 30m"
      ) {
        return pPrice > 30000000;
      }
      // ===== KEYBOARD =====
      if (
        normalizedQ === "ban phim duoi 1 trieu" ||
        normalizedQ === "duoi 1 trieu"
      ) {
        return pPrice < 1000000;
      }
      if (
        normalizedQ === "ban phim tu 1 2 trieu" ||
        normalizedQ === "1 2 trieu" ||
        normalizedQ === "tu 1 den 2 trieu"
      ) {
        return pPrice >= 1000000 && pPrice <= 2000000;
      }
      if (
        normalizedQ === "ban phim tu 2 3 trieu" ||
        normalizedQ === "2 3 trieu" ||
        normalizedQ === "tu 2 den 3 trieu"
      ) {
        return pPrice >= 2000000 && pPrice <= 3000000;
      }
      if (
        normalizedQ === "ban phim tu 3 4 trieu" ||
        normalizedQ === "3 4 trieu" ||
        normalizedQ === "tu 3 den 4 trieu"
      ) {
        return pPrice >= 3000000 && pPrice <= 4000000;
      }
      if (
        normalizedQ === "ban phim tren 4 trieu" ||
        normalizedQ === "tren 4 trieu" ||
        normalizedQ === "over 4"
      ) {
        return pPrice > 4000000;
      }
      const searchable = normalizeText(getAllSearchableValues(p).join(" "));
      return (
        searchable.includes(normalizedQ) ||
        compactText(searchable).includes(compactText(normalizedQ))
      );
    });
  }
  if (normalizedType){
    arr = arr.filter((p) => {
      return matchFromCandidates([
        (p as any).detailSpecs?.map((val : any) => val.value),
        (p as any).cardSpecs?.map((val : any) => val.value),
        ...getSpecValues(p),
      ].filter(Boolean).map(v => (normalizeValue(v))),
      normalizedType
    )
    })
  }
  if (query.price) {
    arr = arr.filter((p) => matchPriceLabel(p, query.price));
  }
  const minPrice = query.min;
  if (typeof minPrice === "number" && !Number.isNaN(minPrice)) {
    arr = arr.filter((p) => getProductPrice(p) >= minPrice);
  }
  const maxPrice = query.max;
  if (typeof maxPrice === "number" && !Number.isNaN(maxPrice)) {
    arr = arr.filter((p) => getProductPrice(p) <= maxPrice);
  }
  switch (query.sort) {
    case "price_asc":
      arr.sort((a, b) => getProductPrice(a) - getProductPrice(b));
      break;
    case "price_desc":
      arr.sort((a, b) => getProductPrice(b) - getProductPrice(a));
      break;
    case "newest":
      arr.reverse();
      break;
    default:
      break;
  }
  return arr;
}

function productHasBrandInName(product: Product) {
  const name = normalizeText(product.name);
  const knownBrands = [
    "asus",
    "acer",
    "msi",
    "lenovo",
    "dell",
    "hp",
    "lg",
    "apple",
    "gigabyte",
    "logitech",
    "razer",
    "corsair",
    "intel",
    "amd",
    "asrock",
    "samsung",
    "kingston",
    "aoc",
    "viewsonic",
    "jbl",
    "sony",
    "dareu",
    "machenike",
    "rapoo",
    "ugreen",
    "belkin",
    "c-tech",
    "ctech",
  ];

  return knownBrands.find((brand) => name.includes(brand)) || "";
}

export function getFilteredPaginatedProducts(
  query: ListQuery & {
    page?: number;
    pageSize?: number;
  } = {}
) {
  const page = Number.isFinite(query.page) ? Number(query.page) : 1;
  const pageSize = Number.isFinite(query.pageSize) ? Number(query.pageSize) : 20;

  const filtered = filterProducts(getAllProducts(), query);

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const currentPage = Math.min(Math.max(page, 1), Math.max(totalPages, 1));

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: filtered.slice(start, end),
    totalItems,
    totalPages,
    currentPage,
    pageSize,
  };
}
export function searchProducts(keyword: string) {
  const q = normalizeText(keyword);

  if (!q) return [];

  return filterProducts(getAllProducts(), { q });
}