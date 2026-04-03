import Link from "next/link";
import type { MenuContent, MegaMenuChildItem, MenuItem } from "@/types/megamenu";

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
    "duoi 15 trieu": "under-15",
    "15-20 trieu": "15-20",
    "tren 20 trieu": "over-20",
  };

  const cpuMap: Record<string, string> = {
    "core i3": "core-i3",
    "core i5": "core-i5",
    "core i7": "core-i7",
    "core i9": "core-i9",
    "amd ryzen": "amd-ryzen",
    "ryzen 5": "ryzen-5",
    "ryzen 7": "ryzen-7",
  };

  const usageMap: Record<string, string> = {
    "do hoa-studio": "do-hoa-studio",
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
console.log(`Cột: ${col.title} | Item: ${label} | Href: ${href}`);
                  return (
                    <li key={`${label}-${itemIndex}`}>
                      <Link
                        href={href}
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