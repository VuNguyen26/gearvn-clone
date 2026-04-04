'use client'

import Link from "next/link";
import type { MegaMenuChildItem, MenuItem } from "@/types/megamenu";
import { constant } from "firebase/firestore/pipelines";
import { main } from "framer-motion/client";
import { cp } from "fs";

type MegaMenuProps = {
  activeSidebarItem: MenuItem;
};

const PRODUCTS_PATH = "/products";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const slugify = (value: string) =>
  normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const buildHref = (
  pathname: string,
  query: Record<string, string | undefined>
) => {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value && value.trim() !== "") {
      params.set(key, value);
    }
  });

  const queryString = params.toString();
  return queryString ? `${pathname}?${queryString}` : pathname;
};

const getItemLabel = (item: MegaMenuChildItem) =>
  typeof item === "string" ? item : item.label;

const getDirectHref = (item: MegaMenuChildItem) => {
  if (typeof item === "string") return undefined;

  const href = item.href?.trim();

  if (!href || href === "#" || href === "/#" || href.startsWith("#")) {
    return undefined;
  }
  return href;
};

const resolveHref = (category: string | undefined, columnTitle: string, item: MegaMenuChildItem) => {
  const directHref = getDirectHref(item);
  if (directHref) return directHref;

  const label = getItemLabel(item);
  const title = normalize(columnTitle); 
  const value = normalize(label);
  console.log(title);
  
  const SPECIFIC_PRODUCT_MAP: Record<string, string> = {
  "homework athlon": "homework-athlon-3000g", // Slug thực tế trên website của bạn
  "homework r3": "homework-ryzen-3-4300g",
  "homework r5": "homework-ryzen-5-5600g",
  "homework i5": "homework-intel-core-i5",
  "window ban quyen": "microsoft-windows-11-home",
  "office 365 ban quyen": "microsoft-office-365-personal",
  };
  const rawValue = normalize(label).split("-")[0].trim();

  // 1. Kiểm tra nếu là sản phẩm cụ thể để dẫn thẳng vào trang chi tiết
  if (SPECIFIC_PRODUCT_MAP[rawValue]) {
    return `/product/${SPECIFIC_PRODUCT_MAP[rawValue]}`;
  }
  const brandMap: Record<string, string> = {
    asus: "asus",
    acer: "acer",
    msi: "msi",
    lenovo: "lenovo",
    dell: "dell",
    hp: "hp",
    lg: "lg",
    apple: "apple",
  };

  const priceMap: Record<string, string> = {
    // Laptop
    "duoi 15 trieu": "under-15",
    "15-20 trieu": "15-20",
    "tren 20 trieu": "over-20",
    //Laptop gaming
    "duoi 20 trieu": "under-20",
    "tu 20 den 25 trieu": "20-25",
    "tu 25 den 30 trieu": "25-30",
    "tren 30 trieu": "over-30",
    // PC
    "pc duoi 30 trieu": "under-30",
    "pc tu 30 50 trieu": "30-50",
    "pc tu 50 70 trieu": "50-70",
    "pc tu 70 100 trieu": "70-100",
    "pc tu 100 200 trieu": "100-200",
    "pc tren 200 trieu": "over-200",
  };
  const cpuMap: Record<string, string> = {
    // Laptop 
    "core i3": "core-i3",
    "core i5": "core-i5",
    "core i7": "core-i7",
    "core i9": "core-i9",
    "amd ryzen": "amd-ryzen",
    "ryzen 5": "ryzen-5",
    "ryzen 7": "ryzen-7",
    // Laptop gaming
    "cpu core ultra" : "cpu-core-ultra",
    "cpu adm" : "cpu-adm",
    // PC
    "pc amd r3" : "pc-amd-r3",
    "pc amd r5" : "pc-amd-r5",
    "pc amd r7" : "pc-amd-r7",
    "pc amd r9" : "pc-amd-r9",
    "pc core i3": "pc-core-i3",
    "pc core i5": "pc-core-i5",
    "pc core i7": "pc-core-i7",
    "pc core i9": "pc-core-i9",
    "pc ultra 5": "pc-ultra-5",
    "pc ultra 7": "pc-ultra-7",
    "pc ultra 9": "pc-ultra-9",
    // Main, CPU
    "cpu intel core ultra series 2": "cpu-intel-core-ultra-series-2",
    "cpu intel 9": "cpu-intel-9",
    "cpu intel 7": "cpu-intel-7",
    "cpu intel 5": "cpu-intel-5",
    "cpu intel 3": "cpu-intel-3",

    "cpu amd athlon": "cpu-amd-athlon",
    "cpu amd r3": "cpu-amd-r3",
    "cpu amd r5": "cpu-amd-r5",
    "cpu amd r7": "cpu-amd-r7",
    "cpu amd r9": "cpu-amd-r9",
    
  };
  const gpuMap: Record<string, string> = {
    // Laptop gaming
    "rtx 50 series" : "rtx-50-series",
    // PC
    "pc rtx 5090" : "pc-rtx-5090",
    "pc rtx 5080": "pc-rtx-5080",
    "pc rtx 5070ti": "pc-rtx-5070ti",
    "pc rtx 5070": "pc-rtx-5070",
    "pc rtx 5060ti": "pc-rtx-5060ti",
    "pc rtx 5060": "pc-rtx-5060",
    "pc rtx 5050": "pc-rtx-5050",
    "pc rtx 3060": "pc-rtx-3060",
    "pc rtx 3050": "pc-rtx-3050",
    // Main, CPU
    "rtx 5090" : "rtx-5090",
    "rtx 5080": "rtx-5080",
    "rtx 5070ti": "rtx-5070ti",
    "rtx 5070": "rtx-5070",
    "rtx 5060ti": "rtx-5060ti",
    "rtx 5060": "rtx-5060",
    "rtx 4070 super (12gb)": "rtx-4070-super-12gb",
    "rtx 4070Ti super (16gb)": "rtx-4070ti-super-16gb",
    "rtx 4080 super (16gb)": "rtx-4080-super-16gb",
    "rtx 4090 super (24gb)": "rtx-4070-super-24gb",

    "rtx 4060ti (8 - 16gb)": "rtx-4060ti-8-16gb",
    "rtx 4060 (8gb)": "rtx-4060-8gb",
    "rtx 3060 (12gb)": "rtx-3060-12gb",
    "rtx 3050 (6 - 8gb)": "rtx-3050-6-8gb",
    "gtx 1650 (4gb)": "gtx-1650-4gb",
    "gt 710 / gt 1030 (2-4gb)": "gt-710-gt-1030-2-4gb",

    "nvidia quadro": "nvidia-quadro",
    "amd radeon": "amd-radeon",
  };
  const mainboardMap : Record<string,string> = {
    "z890": "z890",
    "z790": "z790",
    "b760": "b760",
    "h610": "h610",
    "x299x": "x299x",
    "amd x870": "amd-x870",
    "amd x670": "amd-x670",
    "amd x570": "amd-x570",
    "amd b650": "amd-b650",
    "amd b550": "amd-b550",
    "amd a320": "amd-a320",
    "amd trx40": "amd-trx40",
  }
  const usageMap: Record<string, string> = {
    "đo hoa-studio": "do-hoa-studio",
    "hoc sinh-sinh vien": "hoc-sinh-sinh-vien",
    "mong nhe-cao cap": "mong-nhe-cao-cap",
    gaming: "gaming",
    "van phong": "van-phong",
  };
  if (title === "thuong hieu" && brandMap[value]) {
    return buildHref(PRODUCTS_PATH, {
      category,
      brand: brandMap[value],
    });
  }

  if (title === "gia ban" && priceMap[value]) {
    return buildHref(PRODUCTS_PATH, {
      category,
      price: priceMap[value],
    });
  }

  if (title === "cpu intel-amd" && cpuMap[value]) {
    return buildHref(PRODUCTS_PATH, {
      category,
      cpu: cpuMap[value],
    });
  }

  if (title === "nhu cau su dung" && usageMap[value]) {
    return buildHref(PRODUCTS_PATH, {
      category,
      usage: usageMap[value],
    });
  }

  if (title.startsWith("laptop ")) {
    const brandFromTitle = title.replace("laptop ", "").trim();
    return buildHref(PRODUCTS_PATH, {
      category,
      brand: brandFromTitle,
      series: slugify(label),
    });
  }

  // Laptop gaming
  if (title === "thuong hieu") {
    // Tách lấy chữ đầu tiên (ví dụ "asus / rog" -> lấy "asus")
    const brandRaw = value.split(/[|/]/)[0].trim();
    return buildHref(PRODUCTS_PATH, { category, brand: slugify(brandRaw) });
  }
  if (title === "gia ban") {
    return buildHref(PRODUCTS_PATH, { 
      category, 
      price: priceMap[value] || slugify(label) 
    });
  }

  if (title === "cau hinh") {
    return buildHref(PRODUCTS_PATH, { 
      category, 
      series: gpuMap[value] || slugify(label) || cpuMap[value]
    });
  }
  const brands = ["asus", "acer", "msi", "lenovo", "dell", "hp", "gigabyte"];
  const matchedBrand = brands.find(b => title.includes(b));

  if (matchedBrand) {
    return buildHref(PRODUCTS_PATH, {
      category,
      brand: matchedBrand,
      series: slugify(label),
    });
  }

  // PC
  const series = ["pc rtx 50 series", "pc theo cau hinh vga"]
  const matchedSeri = series.find(b => title.includes(b));
  if (matchedSeri) {
    return buildHref(PRODUCTS_PATH, {
      category,
      series: gpuMap[value],
    })
  }
  if (title === "pc theo gia") {
    return buildHref(PRODUCTS_PATH, {
      category,
      price: priceMap[value]
    })
  }
  const cpus = ["pc theo cpu amd", "pc theo cpu intel"];
  const matchedCPU = cpus.find(cpu => title.includes(cpu));
  if (matchedCPU){
    return buildHref(PRODUCTS_PATH, {
      category,
      series: cpuMap[value]
    })
  }
  // Mainboard, CPU
  const vgas = ["vga rtx 50 series", "vga (tren 12 gb vram)", "vga (duoi 12 gb vram)", "vga - card man hinh"];
  const matchedvgas = vgas.find(vga => title.includes(vga));
  if (matchedvgas){
    return buildHref(PRODUCTS_PATH, {
      category,
      vga: gpuMap[value]
    })
  }
  const mainboards = ["bo mach chu intel", "bo mach chu amd"];
  const matchedmainboard = mainboards.find(mainboard => title.includes(mainboard));
  if(matchedmainboard) {
    return buildHref(PRODUCTS_PATH, {
      category,
      mainboard: mainboardMap[value]
    })
  }
  const cpusMainboard = ["cpu - bo vi xu ly intel", "cpu - bo vi xu ly amd"]
  const matchedCpusMainboard = cpusMainboard.find(cpu => title.includes(cpu))
  if (matchedCpusMainboard) {
    return buildHref(PRODUCTS_PATH,{
      category,
      cpu: cpuMap[value],
    })
  }
  return buildHref(PRODUCTS_PATH, {
    category,
  });
};

export default function MegaMenu({ activeSidebarItem }: MegaMenuProps) {
  const content = activeSidebarItem?.content;
  const category = activeSidebarItem?.id;

  if (!content || content.columns.length === 0) {
    return null;
  }
  return (
    <div
      className={[
        "h-140 w-247.5  max-w-[calc(100vw-320px)] ml-4",
        "rounded-r-md border border-l-0 border-gray-200 bg-white",
        "p-6 text-black shadow-xl",
      ].join(" ")}
    >
      <div className="grid h-full grid-cols-5 gap-x-6 gap-y-8">
        {content.columns.map((col, idx) => (
          <div key={`${col.title}-${idx}`} className="flex flex-col gap-2">
            <h4 className="text-[14px] font-bold uppercase tracking-tight text-[#E30019]">
              {col.title}
            </h4>

            {col.items?.length > 0 && (
              <ul className="flex flex-col gap-1">
                {col.items.map((item, itemIndex) => {
                  const label = getItemLabel(item);
                  const href = resolveHref(category, col.title, item);
                  return (
                    <li key={`${label}-${itemIndex}`}>
                      <Link
                        href={href}
                        onClick={() => console.log("CLICK:", label, href)}
                        className="text-[13px] text-gray-700 transition-colors duration-150 hover:text-[#E30019]"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}