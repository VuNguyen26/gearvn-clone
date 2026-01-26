export type CategorySlug = "laptop" | "pc-gaming" | "gpu" | "man-hinh";

export type ProductSpec = {
  cpu?: string;
  ram?: string;
  gpu?: string;
  storage?: string;
  screen?: string;
  refreshRate?: string;
  brand?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  salePrice?: number;
  stock: number;
  images: string[];
  specs: ProductSpec;
  shortDesc: string;
};
