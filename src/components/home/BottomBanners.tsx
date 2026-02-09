import Image from "next/image";
import Link from "next/link";

const tiles = [
  { src: "/home/tile-1.jpg", alt: "Laptop Gaming", href: "#" },
  { src: "/home/tile-2.jpg", alt: "Laptop Office", href: "#" },
  { src: "/home/tile-3.jpg", alt: "PC Deal", href: "#" },
];

export default function BottomBanners() {
  return (
    <div className="grid grid-cols-3 gap-[6px]">
      {tiles.map((t) => (
        <Link
          key={t.src}
          href={t.href}
          aria-label={t.alt}
          className="block overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm"
        >
          {/* banner dưới kiểu GearVN: dẹt */}
          <div className="relative w-full aspect-[16/6]">
            <Image
              src={t.src}
              alt={t.alt}
              fill
              sizes="(min-width: 1024px) 310px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
