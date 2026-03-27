// src/lib/getDisplaySpecs.ts

import { getSpecConfigByCategory } from "@/lib/spec-config";
import { Product, SpecItem } from "@/types/product";

function formatSpecValue(value: unknown): string {
  if (value === undefined || value === null) return "";

  if (typeof value === "boolean") {
    return value ? "Có" : "Không";
  }

  if (typeof value === "number") {
    return String(value);
  }

  if (typeof value === "string") {
    return value.trim();
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => formatSpecValue(item))
      .filter(Boolean)
      .join(", ");
  }

  return String(value).trim();
}

export function getDisplaySpecs(product: Product): SpecItem[] {
  if (!product) return [];

  // Ưu tiên dùng detailSpecs nếu sản phẩm có khai báo riêng
  if (product.detailSpecs && product.detailSpecs.length > 0) {
    return product.detailSpecs
      .map((item) => ({
        label: item.label?.trim() || "",
        value: formatSpecValue(item.value),
      }))
      .filter((item) => item.label && item.value);
  }

  const config = getSpecConfigByCategory(product.category);
  const specs = product.specs || {};

  const displaySpecs: SpecItem[] = config
    .map((item) => {
      let rawValue = specs[item.key];

      // fallback cho một số trường hay dùng
      if (
        (rawValue === undefined || rawValue === null || rawValue === "") &&
        item.key === "brand"
      ) {
        rawValue = product.brand;
      }

      return {
        label: item.label,
        value: formatSpecValue(rawValue),
      };
    })
    .filter((item) => item.value);

  return displaySpecs;
}