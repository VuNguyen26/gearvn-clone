import Image from "next/image";
import Link from "next/link";

type Banner = {
  src: string;
  alt: string;
  href?: string;
};

const topRow: Banner[] = [
  { src: "/home/banner-laptop-gaming.png", alt: "Laptop Gaming", href: "/category/laptop-gaming" },
  { src: "/home/banner-laptop-office.png", alt: "Laptop Office", href: "/category/laptop" },
  { src: "/home/banner-pc-i5-5060.png", alt: "PC i5 5060", href: "/products?category=pc-gvn&series=pc-core-i5" },
];

const bottomRow: Banner[] = [
  { src: "/home/banner-deal-hong-dieu.png", alt: "Deal hồng điều", href: "#" },
  { src: "/home/banner-monitor.png", alt: "Monitor", href: "/category/man-hinh" },
  { src: "/home/banner-gaming-mouse.png", alt: "Gaming Mouse", href: "/products?category=mouse&q=chuot+gaming" },
  { src: "/home/banner-pc-rx6500xt.png", alt: "PC RX 6500XT", href: "#" },
];

function BannerCard({
  item,
  heightClass = "h-[165px]",
}: {
  item: Banner;
  heightClass?: string;
}) {
  return (
    <Link
      href={item.href || "#"}
      aria-label={item.alt}
      className="block overflow-hidden rounded-lg bg-white min-w-[200px] w-full"
    >
      <div className={`relative w-full overflow-hidden rounded-lg ${heightClass}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
}

export function TopPromoRow() {
  return (
    <div className="lg:grid gap-3 lg:grid-cols-3 mt-3">
      {topRow.map((item) => (
        <BannerCard
          key={item.src}
          item={item}
        />
      ))}
    </div>
  );
}

export function BottomWideRow() {
  return (
    <div className="flex overflow-x-auto scrollbar-hide gap-3">
      {bottomRow.map((item) => (
        <BannerCard
          key={item.src}
          item={item}
          heightClass="lg:h-[150px] h-25"
        />
      ))}
    </div>
  );
}