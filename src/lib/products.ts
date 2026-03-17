import { products } from "@/data/products/index";
import { Product } from "@/types/product";

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

const menuCategoryMap: Record<string, string[]> = {
  laptop: ["laptop", "laptops"],

  // tạm không làm
  "laptop-gaming": [],

  "pc-gvn": ["pc", "pcs"],

  "main-cpu-vga": [
    "mainboard",
    "mainboards",
    "cpu",
    "cpus",
    "vga",
    "vgas",
    "main_cpu_vga",
  ],

  // hiện tại trong ảnh chưa thấy file data cho nhóm này
  "case-nguon-tan": [],

  "o-cung-ram-the-nho": [
    "ssd",
    "ssds",
    "ram",
    "sdcard",
    "sdcards",
    "sdcard",
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
    "speaker_micro_webcam",
  ],

  "man-hinh": ["monitor", "monitors"],

  "ban-phim": ["keyboard", "keyboards"],

  "chuot-lot-chuot": [
    "mouse",
    "mouses",
    "mousepad",
    "mousepads",
    "mouses_mousepads",
  ],

  "tai-nghe": ["headphone", "headphones"],

  "ghe-ban": ["chair", "chairs", "table", "tables", "tables_chairs"],
};

function normalizeValue(value?: string) {
  return (value || "")
    .toLowerCase()
    .trim()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

export function getProductsByMenuSlug(slug: string): Product[] {
  const matchedValues = menuCategoryMap[slug];

  if (!matchedValues || matchedValues.length === 0) {
    return [];
  }

  const normalizedMatched = matchedValues.map(normalizeValue);

  return products.filter((p) => {
    const values = [
      normalizeValue(p.category),
      normalizeValue(p.subcategory),
    ].filter(Boolean);

    return values.some((value) => normalizedMatched.includes(value));
  });
}

export function getFeaturedProducts(limit?: number) {
  const grouped = new Map<string, Product[]>();

  for (const product of products) {
    const key = product.category;
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

export function getPaginatedProducts(page: number = 1, pageSize: number = 20) {
  const all = getAllProducts();
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
  brand?: string;
  min?: number;
  max?: number;
  sort?: "price_asc" | "price_desc" | "newest";
};

export function filterProducts(items: Product[], query: ListQuery) {
  let arr = [...items];

  if (query.q) {
    const k = query.q.toLowerCase().trim();
    arr = arr.filter((p) => p.name.toLowerCase().includes(k));
  }

  if (query.brand) {
    const b = query.brand.toLowerCase().trim();
    arr = arr.filter((p) => (p.specs?.brand || "").toLowerCase() === b);
  }

  const min = query.min;
  if (typeof min === "number") {
    arr = arr.filter((p) => (p.salePrice ?? p.price) >= min);
  }

  const max = query.max;
  if (typeof max === "number") {
    arr = arr.filter((p) => (p.salePrice ?? p.price) <= max);
  }

  switch (query.sort) {
    case "price_asc":
      arr.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
      break;

    case "price_desc":
      arr.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
      break;

    case "newest":
      arr.reverse();
      break;

    default:
      break;
  }

  return arr;
}