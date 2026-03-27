// src/types/product.ts

export type SpecPrimitive = string | number | boolean;
export type SpecValue = SpecPrimitive | SpecPrimitive[];

export type ProductSpec = {
  cpu?: string;
  ram?: string;
  gpu?: string;
  storage?: string;
  screen?: string;
  refreshRate?: string;
  brand?: string;

  series?: string;
  usage?: string;
  purpose?: string;
  need?: string;
  segment?: string;

  color?: string;
  material?: string;
  size?: string;
  weight?: string;
  warranty?: string;

  connection?: string;
  connectivity?: string;
  ports?: string;
  power?: string;

  [key: string]: SpecValue | undefined;
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
  description?: string;
  // Giữ lại để tương thích với dữ liệu cũ
  brand?: string;
  cpu?: string;
  usage?: string;
  need?: string;
  purpose?: string;
  series?: string;
  segment?: string;

  // Thông số linh hoạt cho mọi loại sản phẩm
  specs?: ProductSpec;

  // Dùng cho card hoặc trang chi tiết nếu muốn custom riêng
  cardSpecs?: SpecItem[];
  detailSpecs?: SpecItem[];
};