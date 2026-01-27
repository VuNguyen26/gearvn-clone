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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden rounded-[6px] border border-gray-200 bg-transparent">
      <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[320px]">
        {slides.map((s, i) => {
          const active = i === idx;

          const layer = (
            <div
              className={[
                "absolute inset-0",
                "transition-opacity duration-1000 ease-in-out",
                active ? (mounted ? "opacity-100" : "opacity-0") : "opacity-0",
                active ? "pointer-events-auto" : "pointer-events-none",
              ].join(" ")}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 991px) 100vw, 651px"
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

        {/* thanh gạch đè lên ảnh */}
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex items-center gap-[6px]">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={[
                "h-[4px] w-[32px] rounded-[2px] transition",
                i === idx ? "bg-[#D70018]" : "bg-black/30 hover:bg-black/40",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
