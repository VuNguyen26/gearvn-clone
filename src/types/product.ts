export type ProductSpec = {
  cpu?: string;
  ram?: string;
  gpu?: string;
  storage?: string;
  screen?: string;
  refreshRate?: string;
  brand?: string;
};

export type SpecItem = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  salePrice?: number;
  stock: number;
  images: string[];

  shortDesc: string;
  brand?: string;

  // Giữ lại để tương thích với code cũ, nhất là laptop
  specs?: ProductSpec;

  // Dùng cho giao diện mới, linh hoạt cho mọi loại sản phẩm
  cardSpecs?: SpecItem[];
  detailSpecs?: SpecItem[];
};