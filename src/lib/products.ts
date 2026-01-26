import { products } from "@/data/products";
import { CategorySlug, Product } from "@/types/product";

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug) {
  return products.filter(p => p.category === category);
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
    const k = query.q.toLowerCase();
    arr = arr.filter(p => p.name.toLowerCase().includes(k));
  }
  if (query.brand) {
    const b = query.brand.toLowerCase();
    arr = arr.filter(p => (p.specs.brand || "").toLowerCase() === b);
  }
  if (typeof query.min === "number") {
    arr = arr.filter(p => (p.salePrice ?? p.price) >= query.min!);
  }
  if (typeof query.max === "number") {
    arr = arr.filter(p => (p.salePrice ?? p.price) <= query.max!);
  }

  switch (query.sort) {
    case "price_asc":
      arr.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
      break;
    case "price_desc":
      arr.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
      break;
    default:
      // newest giả lập: giữ nguyên
      break;
  }

  return arr;
}
