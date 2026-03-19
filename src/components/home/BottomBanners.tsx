import Image from "next/image";
import Link from "next/link";

const tiles = [
  { src: "/home/title-1.png", alt: "Laptop Gaming", href: "#" },
  { src: "/home/title-2.png", alt: "Laptop Office", href: "#" },
  { src: "/home/title-3.png", alt: "PC Deal", href: "#" },
  { src: "/home/title-4.png", alt: "PC Deal", href: "#" },

];
export default function BottomBanners() {
  return (
    <div className="grid grid-cols-4 gap-2 mt-2">
      {tiles.map((t) => (
        <Link
          key={t.src}
          href={t.href}
          aria-label={t.alt}
          className="rounded-md overflow-hidden border border-gray-200 bg-white" 
        >
          <div className="relative h-36">
            <Image
              src={t.src}
              alt={t.alt}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
