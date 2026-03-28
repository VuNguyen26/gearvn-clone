import Image from "next/image";
import Link from "next/link";

type Banner = {
  src: string;
  alt: string;
  href?: string;
};

const topRow: Banner[] = [
  { src: "/home/banner-laptop-gaming.png", alt: "Laptop Gaming", href: "#" },
  { src: "/home/banner-laptop-office.png", alt: "Laptop Office", href: "#" },
  { src: "/home/banner-pc-i5-5060.png", alt: "PC i5 5060", href: "#" },
];

const bottomRow: Banner[] = [
  { src: "/home/banner-deal-hong-dieu.png", alt: "Deal hồng điều", href: "#" },
  { src: "/home/banner-monitor.png", alt: "Monitor", href: "#" },
  { src: "/home/banner-gaming-mouse.png", alt: "Gaming Mouse", href: "#" },
  { src: "/home/banner-pc-rx6500xt.png", alt: "PC RX 6500XT", href: "#" },
];

function BannerCard({
  item,
  heightClass = "h-[150px] xl:h-[150px]",
}: {
  item: Banner;
  heightClass?: string;
}) {
  return (
    <Link
      href={item.href || "#"}
      aria-label={item.alt}
      className="block overflow-hidden rounded-lg bg-white"
    >
      <div className={`relative w-full overflow-hidden rounded-lg ${heightClass}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </Link>
  );
}

export function TopPromoRow() {
  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
      {topRow.map((item) => (
        <BannerCard
          key={item.src}
          item={item}
          heightClass="h-[150px] xl:h-[150px]"
        />
      ))}
    </div>
  );
}

export function BottomWideRow() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {bottomRow.map((item) => (
        <BannerCard
          key={item.src}
          item={item}
          heightClass="h-[150px] xl:h-[150px]"
        />
      ))}
    </div>
  );
}