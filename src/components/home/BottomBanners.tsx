import Image from "next/image";
import Link from "next/link";

const tiles = [
  { src: "/home/tile-1.jpg", alt: "Laptop Gaming", href: "#" },
  { src: "/home/tile-2.jpg", alt: "Laptop Office", href: "#" },
  { src: "/home/tile-3.jpg", alt: "PC Deal", href: "#" },
];

export default function BottomBanners() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {tiles.map((t) => (
        <Link
          key={t.src}
          href={t.href}
          className="rounded-md bg-white shadow-sm border border-gray-200 overflow-hidden"
          aria-label={t.alt}
        >
          <div className="relative aspect-[16/6]">
            <Image
              src={t.src}
              alt={t.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
