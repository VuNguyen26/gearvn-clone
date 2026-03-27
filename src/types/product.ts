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
  connectivity?: string;
  power?: string;
  warranty?: string;
  material?: string;
  size?: string;
  weight?: string;
  [key: string]: string | undefined;
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
  cpu?: string;
  usage?: string;
  need?: string;
  purpose?: string;
  series?: string;
  segment?: string;

  specs?: ProductSpec;

  cardSpecs?: SpecItem[];
  detailSpecs?: SpecItem[];
};