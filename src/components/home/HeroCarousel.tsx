"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type Slide = { src: string; alt: string; href?: string };

export default function HeroCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/home/gearvn-thu-cu-doi-moi-t10-slider.jpeg", alt: "Hero 1", href: "#" },
      { src: "/home/gearvn-pc-gvn-t11-slider.jpg", alt: "Hero 2", href: "#" },
      { src: "/home/gearvn-man-hinh-t10-slider.jpg", alt: "Hero 4", href: "#" },
      { src: "/home/gearvn-laptop-acer-predator-triton-14a-slider-t12.jpg", alt: "Hero 5", href: "#" },
      { src: "/home/gearvn-laptop-nvidia-rtx-50-series-slider.jpg", alt: "Hero 6", href: "#" },
      { src: "/home/gearvn-laptop-gigabyte-slider-t12.jpg", alt: "Hero 7", href: "#" },
      { src: "/home/gearvn-pc-gvn-nvidia-sliders.jpg", alt: "Hero 8", href: "#" },
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div
      className={[
        // mobile/tablet
        "h-[200px] sm:h-[240px]",
        // ✅ desktop: thấp lại cho đúng tỉ lệ (đổi 320 -> 300 nếu muốn thấp nữa)
        "lg:h-[320px]",
        "overflow-hidden rounded-md border border-gray-200 bg-white",
      ].join(" ")}
    >
      <div className="relative h-full w-full">
        {slides.map((s, i) => {
          const active = i === idx;

          const layer = (
            <div
              className={[
                "absolute inset-0",
                "transition-opacity duration-700 ease-out",
                active ? "opacity-100" : "opacity-0",
                active ? "pointer-events-auto" : "pointer-events-none",
              ].join(" ")}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 690px, 100vw"
                className="object-cover"
              />
            </div>
          );

          return s.href ? (
            <Link key={s.src} href={s.href} aria-label={s.alt} className="absolute inset-0">
              {layer}
            </Link>
          ) : (
            <div key={s.src} className="absolute inset-0">
              {layer}
            </div>
          );
        })}

        {/* indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 flex items-center gap-[6px]">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={[
                "h-[4px] w-[32px] rounded-[2px] transition-colors",
                i === idx ? "bg-[#D70018]" : "bg-black/30 hover:bg-black/40",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
