import { mainboards } from './../data/products/mainboards';
import { vgas } from './../data/products/vgas';
import { products } from "@/data/products/index"; 
import { Product } from "@/types/product";

export async function getAllProducts() {
  return await products(); 
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

function expandCategoryAliases(rawValue?: string) {
  const normalized = normalizeValue(rawValue);
  if (!normalized) return [];

  const directAliases = menuCategoryMap[normalized] || [];

  const reverseAliases = Object.entries(menuCategoryMap)
    .filter(([, aliases]) =>
      aliases.map((item) => normalizeValue(item)).includes(normalized)
    )
    .flatMap(([key, aliases]) => [key, ...aliases]);

  return Array.from(
    new Set([normalized, ...directAliases, ...reverseAliases].map(normalizeValue))
  ).filter(Boolean);
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
  return true;
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
  price?: "under-15" | "15-20" | "over-20" | string;
  min?: number;
  max?: number;
  sort?: "price_asc" | "price_desc" | "newest";
  vga?: string;
  mainboard?: string;
};

export function filterProducts(items: Product[], query: ListQuery) {
  if (!Array.isArray(items)) {
    console.error("Lỗi: filterProducts nhận được dữ liệu không phải mảng!", items);
    return [];
  }
  let arr = [...items];

  const normalizedCategory = normalizeValue(query.category);
  const normalizedBrand = normalizeValue(query.brand);
  // Thay vì query.cpu?.replace("-", " ")
  let rawCpuQuery = query.cpu || "";
  // 1. Thay tất cả dấu gạch thành dấu cách
  rawCpuQuery = rawCpuQuery.replaceAll("-", " "); 
  // 2. Nếu query bắt đầu bằng chữ "cpu ", hãy xóa nó đi để lọc chính xác hơn (ví dụ "cpu intel" -> "intel")
  const cpuSearchTerm = rawCpuQuery.startsWith("cpu ") 
      ? rawCpuQuery.replace("cpu ", "").trim() 
      : rawCpuQuery.trim();
  const normalizedCpu = normalizeValue(cpuSearchTerm);
  const normalizedUsage = normalizeValue(
    query.usage || query.need || query.purpose
  );
  const normalizedSeries = normalizeValue(query.series);
  const normalizedQ = normalizeText(query.q);
  const normalizedVga = normalizeValue(query.vga);
  const normalizedMainboard = normalizeValue(query.mainboard);

  if (normalizedCategory) {
    const matchedCategories = expandCategoryAliases(normalizedCategory);

    arr = arr.filter((p) => {
      const values = getProductCategoryValues(p);
      return values.some((value) => matchedCategories.includes(value));
    });
  }

  if (normalizedBrand) {
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

  if (normalizedCpu) {
    arr = arr.filter((p) =>
      matchFromCandidates(
        [
          (p as any).cpu,
          getSpecValue(p, "cpu"),
          getSpecValue(p, "CPU"),
          p.name,
          p.slug,
          (p as any).shortDesc,
          ...getSpecValues(p),
        ],
        normalizedCpu
      )
    );
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
        ].map((v) => (v ? slugify(String(v)) : "")),
        slugify(normalizedSeries.replace("series", "").trim())
      )
    );
  }

  if (normalizedVga) {
    arr = arr.filter((p) =>
      matchFromCandidates(
        [
          (p as any).vga,
          getSpecValue(p, "vga"),
          getSpecValue(p, "VGA"),
          getSpecValue(p, "gpu"),
          getSpecValue(p, "GPU"),
          getSpecValue(p, "card đồ họa"),
          p.name,
          p.slug,
          ...getSpecValues(p),
        ],
        normalizedVga
      )
    );
  }
  if (normalizedMainboard) {
    arr = arr.filter((p) =>
      matchFromCandidates(
        [
          (p as any).mainboard,
          getSpecValue(p, "mainboard"),
          getSpecValue(p, "Mainboard"),
          getSpecValue(p, "bo mạch chủ"),
          getSpecValue(p, "chipset"),
          p.name,
          p.slug,
          ...getSpecValues(p),
        ],
        normalizedMainboard
      )
    );
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
      const searchable = normalizeText(getAllSearchableValues(p).join(" "));
      return (
        searchable.includes(normalizedQ) ||
        compactText(searchable).includes(compactText(normalizedQ))
      );
    });
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