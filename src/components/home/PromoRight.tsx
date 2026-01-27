import Image from "next/image";
import Link from "next/link";

type Promo = { src: string; alt: string; href?: string };

function PromoCard({ p }: { p: Promo }) {
  const Inner = (
    <div className="relative h-full w-full overflow-hidden rounded-[6px] border border-gray-200 bg-white">
      <Image src={p.src} alt={p.alt} fill sizes="280px" className="object-cover" />
    </div>
  );
  return p.href ? <Link href={p.href} aria-label={p.alt}>{Inner}</Link> : Inner;
}

export default function PromoRight() {
  const top: Promo = { src: "/banners/right-1.png", alt: "Right 1", href: "#" };
  const mid: Promo = { src: "/banners/right-2.png", alt: "Right 2", href: "#" };

  return (
    <div className="grid gap-3">
      <div className="h-[172px]"><PromoCard p={top} /></div>
      <div className="h-[172px]"><PromoCard p={mid} /></div>
    </div>
  );
}
