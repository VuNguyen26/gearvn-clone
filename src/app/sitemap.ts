import type { MetadataRoute } from "next";
import { newsArticles } from "@/data/news";
import { getAllProductsFlat } from "@/lib/products";

const SITE_URL = "https://your-domain.com";

const categorySlugs = [
  "laptop",
  "laptop-gaming",
  "pc-gvn",
  "main-cpu-vga",
  "case-nguon-tan",
  "o-cung-ram-the-nho",
  "loa-micro-webcam",
  "man-hinh",
  "ban-phim",
  "chuot-lot-chuot",
  "tai-nghe",
  "ghe-ban",
  "phan-mem-mang",
  "handheld-console",
  "phu-kien",
  "dich-vu-thong-tin-khac",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/introduce",
    "/news",
    "/showroom",
    "/cart",
    "/login",
    "/register",
    "/account/profile",
    "/account/orders",
    "/account/addresses",
    "/account/viewed",
    "/checkout/info",
    "/checkout/payment",
    "/checkout/complete",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categorySlugs.map((slug) => ({
    url: `${SITE_URL}/category/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const productRoutes = getAllProductsFlat().map((product: any) => ({
    url: `${SITE_URL}/product/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...newsRoutes,
    ...productRoutes,
  ];
}