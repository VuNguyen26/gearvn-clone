'use client'

import Link from "next/link";
import type { MegaMenuChildItem, MenuItem } from "@/types/megamenu";
import { constant } from "firebase/firestore/pipelines";

type MegaMenuProps = {
  activeSidebarItem: MenuItem;
};

const PRODUCTS_PATH = "/products";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/đ/g, "d")             
    .replace(/[^\w\s]/g, "")        
    .replace(/\s+/g, " ")           
    .trim();

const slugify = (value: string) =>
  normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const buildHref = (
  pathname: string,
  query: Record<string, any>
) => {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    const valStr = value !== undefined && value !== null ? String(value) : "";
    if (valStr && valStr.trim() !== "") {
      params.set(key, valStr);
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


const SPECIAL_LINK_MAP: Record<string, string | null> = {
  "dich vu::dich vu ky thuat tai nha": "/on-site-technical-support",
  "dich vu::dich vu sua chua tai nha": "/on-site-technical-support",
  "dich vu::dich vu sua chua": "/on-site-technical-support",

  "chinh sach::chinh sach & bang gia thu vga qua su dung": "/trade-in",
  "chinh sach::chinh sach va bang gia thu vga qua su dung": "/trade-in",
  "chinh sach::chinh sach bao hanh": "/warranty-policy",
  "chinh sach::chinh sach giao hang": "/shipping-policy",
  "chinh sach::chinh sach doi tra": "/trade-in",
};

const categoryAliasMap: Record<string, string> = {
  "phu-kien": "accessory",
  "accessories": "accessory",
  "tai-nghe": "headphone",
  "headphones": "headphone",
  "loa": "speaker",
  "audio-webcam": "speaker",
  "micro": "microphone",
};

const accessoryTypeMap: Record<string, string> = {
  "cap sac": "cap-sac",
  "day cap": "cap-sac",
  "hub chuyen doi": "hub",
  "cu sac": "cu-sac",
};

const categoryPricePrefixMap: Record<string, string> = {
  accessory: "phu kien",
  headphone: "tai nghe",
  "mouse-mousepad": "chuot-lot-chuot",
  "ghe-ban": "ban ghe",
  "handheld-console": "handheld",
};

const resolveHref = (
  category: string | undefined,
  columnTitle: string,
  item: MegaMenuChildItem
): string | undefined => {
  const label = getItemLabel(item);
  const title = normalize(columnTitle);
  const value = normalize(label);
  const queryCategory = categoryAliasMap[category ?? ""] ?? category;

  const specialKey = `${title}::${value}`;
  if (specialKey in SPECIAL_LINK_MAP) {
    return SPECIAL_LINK_MAP[specialKey] ?? undefined;
  }

  const directHref = getDirectHref(item);
  if (directHref) return directHref;


  
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
    gigabyte: "gigabyte",
    // Man hinh
    viewsonic: "viewsonic",
    aoc: "aoc",
    hkc : "hkc",
    samsung: "samsung",
    phiplips : "phiplips",
    "e-dra" : "e-dra",
    vsp : "vsp",
    // Tai nghe, loa, gear
    razer: "razer",
    logitech: "logitech",
    corsair: "corsair",
    hyperx: "hyperx",
    steelseries: "steelseries",
    sony: "sony",
    jbl: "jbl",
    edifier: "edifier",
    // Phụ kiện
    ugreen: "ugreen",
    belkin: "belkin",
    //case
    "case asus": "asus",
    "case corsair": "corsair",
    "case lianli": "lianli",
    "case nzxt": "nzxt",
    "case jonsbo": "jonsbo",
    // keyboard
    akko : "akko",
    aula : "aula",
    "dare-u" : "dare-u",
    durgod : "durgod",
    leobog : "leobog",
    keychron : "keychron",
    "fl-esports" : "fl-esports",
    cidoo : "cidoo",
    machenike : "machenike",
    rapoo: "rapoo",
    vgn : "vgn",
    madlions : "madlions",
    skyloong : "skyloong"
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
    //Man hinh
    "duoi 5 trieu" : "under-5",
    "tu 5 trieu den 10 trieu" : "5-10",
    "tu 10 trieu den 20 trieu" : "10-20",
    "tu 20 trieu den 30 trieu" : "20-30",
    // Chuột
    "duoi 500 nghin": "under-500k-mouse",
    "tu 500 nghin 1 trieu": "500k-1m-mouse",
    "tu 1 trieu 2 trieu": "1-2m-mouse",
    "tren 2 trieu 3 trieu": "2-3m-mouse",
    "tren 3 trieu": "over-3m-mouse",
    // Tai nghe
    "tai nghe duoi 1 trieu": "under-1m-headphone",
    "tai nghe 1 trieu den 2 trieu": "1-2m-headphone",
    "tai nghe 2 den 3 trieu": "2-3m-headphone",
    "tai nghe 3 den 4 trieu": "3-4m-headphone",
    "tai nghe tren 4 trieu": "over-4m-headphone",
    // Ghế - Bàn
    "ban ghe duoi 5 trieu": "under-5m-chair-table",
    "ban ghe tu 5 den 10 trieu": "5-10m-chair-table",
    "ban ghe tren 10 trieu": "over-10m-chair-table",
    // Handheld, Console
    "handheld duoi 1 trieu": "under-1m-handheld",
    "handheld tren 2 trieu": "over-2m-handheld",
    // Phụ kiện
    "phu kien duoi 200 nghin": "under-200k",
    "phu kien tu 200 den 500 nghin": "200k-500k",
    "phu kien tu 500 nghin den 1 trieu": "500k-1m",
    "phu kien tren 1 trieu": "over-1m",
    // Case
    // Keyboard
    "duoi 1 trieu" : "under-1",
    "1 trieu 2 trieu" : "1-2",
    "2 trieu 3 trieu" : "2-3",
    "3 trieu 4 trieu" : "3-4",
    "tren 4 trieu" : "over-4"
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
    "cpu intel core ultra series 2": "core-ultra",
    "cpu intel 9": "core-i9",
    "cpu intel 7": "core-i7",
    "cpu intel 5": "core-i5",
    "cpu intel 3": "core-i3",

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
    //Card man hinh vga
    // VGA series
    "rtx 5090" : "rtx-5090",
    "rtx 5080": "rtx-5080",
    "rtx 5070ti": "rtx-5070ti",
    "rtx 5070": "rtx-5070",
    "rtx 5060ti": "rtx-5060ti",
    "rtx 5060": "rtx-5060",
    // VGA tren 12GB
    "rtx 4070 super (12gb)": "rtx-4070-super-12gb",
    "rtx 4070Ti super (16gb)": "rtx-4070ti-super-16gb",
    "rtx 4080 super (16gb)": "rtx-4080-super-16gb",
    "rtx 4090 super (24gb)": "rtx-4090-super-24gb",
    // VGA duoi 12GB
    "rtx 4060ti (8 - 16gb)": "rtx-4060ti-8-16gb",
    "rtx 4060 (8gb)": "rtx-4060-8gb",
    "rtx 3060 (12gb)": "rtx-3060-12gb",
    "rtx 3050 (6 - 8gb)": "rtx-3050-6-8gb",
    "gtx 1650 (4gb)": "gtx-1650-4gb",
    "gt 710 / gt 1030 (2-4gb)": "gt-710-gt-1030-2-4gb",
    //VGA card man hinh
    "nvidia quadro": "nvidia-quadro",
    "amd radeon": "amd-radeon",
  };
  const mainboardMap : Record<string,string> = {
    // Intel
    "z890": "z890",
    "z790": "z790",
    "b760": "b760",
    "h610": "h610",
    "x299x": "x299x",
    // AMD
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

  const ramMap : Record<string,string> = {
    // dung luong
    "8 gb": "8GB",
    "16 gb": "16GB",
    "32 gb": "32GB",
    "64 gb": "64GB",
    // loai
    "ddr4" : "DDR4",
    "ddr5" : "DDR5",
    // hang
    "corsair" : "Corsair",
    "kingston" : "Kingston",
    "g.skill" : "G.Skill",
    "pny" : "PNY",
  };

  const ssdMap : Record<string,{ min: number; max: number } | string> =  {
    // dung luong 
    "120gb - 128gb" : {min:120, max:128},
    "250gb - 256gb" : {min:250, max:256},
    "480gb - 512gb" : {min:480, max:512},
    "960gb - 1tb" : {min:960, max:1000},
    "2tb" : {min:2000, max:2000},
    "tren 2tb" : {min:2000, max:9999999},
    // hang
    "samsung" : "samsung",
    "wester digital" : "wester-digital",
    "corsair" : "corsair",
    "kingston" : "kingston",
    "pny" : "pny",
  }
  const sdcardMap : Record<string,string> = {
    "sandisk" : "sandisk",
  }
  //Loa
  const speakerMap: Record<string, string> = {
  // Thương hiệu
  "edifier": "edifier",
  "razer": "razer",
  "logitech": "logitech",
  "soundmax": "soundmax",
  // Kiểu loa
  "loa vi tinh": "loa-vi-tinh",
  "loa bluetooth": "bluetooth",
  "loa soundbar": "soundbar",
  "loa mini": "mini",
  "sub phu (loa tram)": "subwoofer"
  };
  const resolutionMap : Record<string,string> = {
    // webcam
    "do phan giai 4k" : "4k",
    "do phan giai full hd 1080p" : "full-hd-1080p",
    "do phan giai 720p" : "720p",
    // Man hinh
    "man hinh full hd" : "FHD",
    "man hinh 2k 1440p" : "2k",
    "man hinh 4k uhd" : "4k-uhd",
    "man hinh 6k" : "6k",
  }
  const microphoneMap : Record<string,string> = {
    "micro hyperx" : "hyperx"
  }
  const hzMap : Record<string,string> = {
    "60hz" : "60hz",
    "75hz" : "75hz",
    "100hz" : "100hz",
    "144hz" : "144hz",
    "240hz" : "240hz",
  }
  const inchMap : Record<string,string> = {
    "man hinh 22" : "22",
    "man hinh 24" : "24",
    "man hinh 27" : "27",
    "man hinh 29" : "29",
    "man hinh 32" : "32",
    "man hinh tren 32" : "over-32"
  }
  const typeKeyboardMap : Record<string,string> = {
    "bluetooth" : "bluetooth",
    "wireless" : "wireless",
  }
  if (title === "thuong hieu" && brandMap[value]) {
    return buildHref(PRODUCTS_PATH, {
      category: queryCategory,
      brand: brandMap[value],
    });
  }
  if (
    queryCategory === "accessory" &&
    (title.includes("hub") || title.includes("sac") || title.includes("cap") || title.includes("nhom san pham"))
  ) {
    const type = accessoryTypeMap[value] ?? slugify(label);
    return buildHref(PRODUCTS_PATH, {
      category: queryCategory,
      accessoryType: type,
    });
    }
    // Chuột + Lót chuột
  if (queryCategory === "chuot-lot-chuot") {
    if (title === "thuong hieu chuot") {
      return buildHref(PRODUCTS_PATH, {
        category: "mouse",
        brand: slugify(label),
      });
    }
    if (title === "gia tien") {
      return buildHref(PRODUCTS_PATH, {
        category: "mouse",
        price: priceMap[value] ?? slugify(label),
      });
    }
    if (title === "loai chuot") {
      const mouseTypeMap: Record<string, string> = {
        "chuot choi game": "chuot gaming",
        "chuot van phong": "chuot van phong",
      };

      return buildHref(PRODUCTS_PATH, {
        category: "mouse",
        q: mouseTypeMap[value] ?? label,
      });
    }
    if (title === "logitech") {
      const logitechMouseMap: Record<string, string> = {
        "logitech gaming": "chuot gaming",
        "logitech van phong": "chuot van phong",
      };
      return buildHref(PRODUCTS_PATH, {
        category: "mouse",
        brand: "logitech",
        q: logitechMouseMap[value] ?? label,
      });
    }
    if (title === "thuong hieu lot chuot") {
      return buildHref(PRODUCTS_PATH, {
        category: "mousepad",
        brand: slugify(label),
      });
    }
  }
  // Tai nghe
  if (queryCategory === "headphone") {
    if (title === "thuong hieu tai nghe") {
      return buildHref(PRODUCTS_PATH, {
        category: queryCategory,
        brand: slugify(label),
      });
    }
    if (title === "tai nghe theo gia") {
      return buildHref(PRODUCTS_PATH, {
        category: queryCategory,
        price: priceMap[value] ?? slugify(label),
      });
    }
    if (title === "kieu ket noi") {
      const headphoneConnectionMap: Record<string, string> = {
        "tai nghe wireless": "wireless",
        "tai nghe bluetooth": "bluetooth",
      };

      return buildHref(PRODUCTS_PATH, {
        category: queryCategory,
        q: headphoneConnectionMap[value] ?? label,
      });
    }
    if (title === "kieu tai nghe") {
      const headphoneTypeMap: Record<string, string> = {
        "tai nghe over-ear": "over-ear",
        "tai nghe gaming in-ear": "in-ear",
      };

      return buildHref(PRODUCTS_PATH, {
        category: queryCategory,
        q: headphoneTypeMap[value] ?? label,
      });
    }
  }
  // Ghế - Bàn
    if (queryCategory === "ghe-ban") {
    const chairBrandTitles = ["thuong hieu ghe gaming", "thuong hieu ghe cth"];

    if (chairBrandTitles.includes(title)) {
      return buildHref(PRODUCTS_PATH, {
        category: queryCategory,
        brand: slugify(label),
      });
    }

    if (title === "kieu ghe") {
      return buildHref(PRODUCTS_PATH, {
        category: queryCategory,
        q: label,
      });
    }

    if (title === "ban gaming" || title === "ban cong thai hoc") {
      const chairTableKeywordMap: Record<string, string> = {
        "ban gaming dxracer": "dxracer",
        "ban gaming e-dra": "e-dra",
        "ban gaming warrior": "warrior",
        "ban cth warrior": "warrior",
        "phu kien ban ghe": "phu kien ban ghe",
      };

      return buildHref(PRODUCTS_PATH, {
        category: queryCategory,
        q: chairTableKeywordMap[value] ?? label,
      });
    }
  }
  if (
    title === "gia ban" ||
    ((queryCategory === "handheld-console" || queryCategory === "ghe-ban") && title === "gia tien")
  ) {
    const prefix = categoryPricePrefixMap[queryCategory ?? ""];
    const fullPriceKey = prefix ? `${prefix} ${value}` : value;
    const resolvedPrice = priceMap[fullPriceKey] ?? priceMap[value];

    return buildHref(PRODUCTS_PATH, {
      category: queryCategory,
      price: resolvedPrice ?? slugify(label),
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
  // Card man hinh
  const vgas = ["vga rtx 50 series", "vga (tren 12 gb vram)", "vga (duoi 12 gb vram)", "vga - card man hinh"];
  const matchedvgas = vgas.find(vga => title.includes(vga));
  if (matchedvgas){
    return buildHref(PRODUCTS_PATH, {
      category: "vga",
      vga: gpuMap[value]
    })
  }
  // Bo mach chu 
  const mainboards = ["bo mach chu intel", "bo mach chu amd"];
  const matchedmainboard = mainboards.find(mainboard => title.includes(mainboard));
  if(matchedmainboard) {
    return buildHref(PRODUCTS_PATH, {
      category: "mainboard",
      chip: mainboardMap[value]
    })
  }
  // CPU
  const cpusMainboard = ["cpu - bo vi xu ly intel", "cpu - bo vi xu ly amd"]
  const matchedCpusMainboard = cpusMainboard.find(cpu => title.includes(cpu))
  if (matchedCpusMainboard) {
    return buildHref(PRODUCTS_PATH,{
      category: "cpu",
      cpu: cpuMap[value],
    })
  }
  //handheld, console
  if (
    queryCategory === "handheld-console" &&
    (title === "handheld pc" || title === "tay cam" || title === "vo lang lai xe")
  ) {
    if (value === "xem tat ca") {
      return buildHref(PRODUCTS_PATH, {
        category: queryCategory,
      });
    }

    const handheldKeywordMap: Record<string, string> = {
      "rog ally": "rog ally",
      "msi claw": "msi claw",
      "legion go": "legion go",
      "tay cam playstation": "playstation",
      "tay cam rapoo": "rapoo",
      "tay cam dareu": "dareu",
      "vo lang logitech": "logitech",
    };

    return buildHref(PRODUCTS_PATH, {
      category: queryCategory,
      q: handheldKeywordMap[value] ?? label,
    });
  }

  // Case
  if (title === "case theo hang") {
    return buildHref(PRODUCTS_PATH, {
      category: "case",
      brand: brandMap[value],
    });
  }
  // RAM
  const rams = ["dung luong ram", "loai ram", "hang ram"];
  const matchedRam = rams.find( ram => title.includes(ram));
  if (matchedRam){
    return buildHref(PRODUCTS_PATH,{
      category: "ram",
      ram : ramMap[value],
    })
  }
  // SSD
  const ssds = ["dung luong ssd", "hang ssd"];
  const matchedSsd = ssds.find(ssd => title.includes(ssd));
  if (matchedSsd) {
    const range = ssdMap[value];
    if (range && typeof range === "object") {
      return buildHref(PRODUCTS_PATH, {
        category: "ssd",
        minstorage: range?.min,
        maxstorage: range?.max,
      });
    }
    if (range && typeof range === "string"){
      return buildHref(PRODUCTS_PATH, {
        category: "ssd",
        ssd: range,
      })
    }
  }
  // The nho, USB
  if (title === "the nho / usb"){
    return buildHref(PRODUCTS_PATH,{
      category: "sdcard",
      sdcard: sdcardMap[value],
    })
  }
  // Loa
  const speakerKeys = ["thuong hieu loa", "kieu loa"];
  const matchedSpeaker = speakerKeys.find(key => title.toLowerCase().includes(key));
  if (matchedSpeaker) {
    return buildHref(PRODUCTS_PATH,{
      category: "speaker",
      speaker: speakerMap[value],
    })
    
  }
  // Web cam
  if (title === "webcam") {
    return buildHref(PRODUCTS_PATH,{
      category: "webcam",
      resolution: resolutionMap[value]
    })
  }
  // Microphone
  if (title === "microphone") {
    return buildHref(PRODUCTS_PATH,{
      category: "microphone",
      microphone: microphoneMap[value]
    })
  }
  // Man hinh
  if (title === "hang san xuat"){
    return buildHref(PRODUCTS_PATH, {
      category: "monitor",
      brand: brandMap[value]
    })
  }
  console.log(value);
  if (title === "gia tien") {
    return buildHref(PRODUCTS_PATH,{
      category,
      price: priceMap[value]
    })
  }
  if (title === "do phan giai") {
    return buildHref(PRODUCTS_PATH, {
      category: "monitor",
      resolution : resolutionMap[value]
    })
  }
  if (title === "tan so quet") {
    return buildHref(PRODUCTS_PATH, {
      category:"monitor",
      hz : hzMap[value],
    })
  }
  if (title === "kich thuoc") {
    return buildHref(PRODUCTS_PATH, {
      category: "monitor",
      inch: inchMap[value],
    })
  }
  // Keyboard
  if (title === "ket noi"){
    return buildHref(PRODUCTS_PATH, {
      category,
      type: typeKeyboardMap[value],
    })
  }
  return buildHref(PRODUCTS_PATH, {
    category: queryCategory,
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
                      {href ? (
                        <Link
                          href={href}
                          onClick={() => console.log("CLICK:", label, href)}
                          className="text-[13px] text-gray-700 transition-colors duration-150 hover:text-[#E30019]"
                        >
                          {label}
                        </Link>
                      ) : (
                        <span className="text-[13px] text-gray-700 cursor-default">
                          {label}
                        </span>
                      )}
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