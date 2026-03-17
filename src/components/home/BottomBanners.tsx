import Image from "next/image";
import Link from "next/link";

const tiles = [
  { src: "/home/tile-1.png", alt: "Laptop Gaming", href: "#" },
  { src: "/home/tile-2.png", alt: "Laptop Office", href: "#" },
  { src: "/home/tile-3.png", alt: "PC Deal", href: "#" },
  { src: "/home/tile-3.png", alt: "PC Deal", href: "#" },

];

export default function BottomBanners() {
  return (
    <div className="grid grid-cols-4 ">
      {tiles.map((t) => (
        <Link
          key={t.src}
          href={t.href}
          aria-label={t.alt}
          className="rounded-md border border-gray-200 bg-white"
        >
          {/* banner dưới kiểu GearVN: dẹt */}
          <div className="relative h-24">
            <Image
              src={t.src}
              alt={t.alt}
              fill
              // sizes="(min-width: 1024px) 310px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
