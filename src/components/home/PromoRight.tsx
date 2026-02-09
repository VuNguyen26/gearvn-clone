import Image from "next/image";
import Link from "next/link";

type Promo = { src: string; alt: string; href?: string };

function PromoCard({ p }: { p: Promo }) {
  const inner = (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
      {/* banner phải kiểu GearVN: dẹt */}
      <div className="relative w-full aspect-[16/7]">
        <Image
          src={p.src}
          alt={p.alt}
          fill
          sizes="(min-width: 1024px) 224px, (min-width: 768px) 240px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );

  return p.href ? (
    <Link href={p.href} aria-label={p.alt} className="block">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export default function PromoRight() {
  const top: Promo = {
    src: "/home/gearvn-build-pc-sub-banner-t1-26.png",
    alt: "Right 1",
    href: "#",
  };
  const mid: Promo = {
    src: "/home/gearvn-ban-phim-sub-banner-t1-26.png",
    alt: "Right 2",
    href: "#",
  };

  return (
    <div className="grid gap-[6px]">
      <PromoCard p={top} />
      <PromoCard p={mid} />
    </div>
  );
}
