"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type Slide = {
  src: string;
  alt: string;
  href?: string;
};

type Promo = {
  src: string;
  alt: string;
  href?: string;
};

export default function HeroCarousel() {
  const rightBanners: Promo[] = [
    {
      src: "/home/gearvn-build-pc-sub-banner-t1-26.png",
      alt: "Build PC",
      href: "#",
    },
    {
      src: "/home/gearvn-ban-phim-sub-banner-t1-26.png",
      alt: "Bàn phím",
      href: "#",
    },
  ];

  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/home/gearvn-thu-cu-doi-moi-t10-slider.jpeg",
        alt: "Hero 1",
        href: "#",
      },
      {
        src: "/home/gearvn-pc-gvn-t11-slider.jpg",
        alt: "Hero 2",
        href: "#",
      },
      {
        src: "/home/gearvn-man-hinh-t10-slider.jpg",
        alt: "Hero 3",
        href: "#",
      },
      {
        src: "/home/gearvn-laptop-acer-predator-triton-14a-slider-t12.jpg",
        alt: "Hero 4",
        href: "#",
      },
      {
        src: "/home/gearvn-laptop-nvidia-rtx-50-series-slider.jpg",
        alt: "Hero 5",
        href: "#",
      },
      {
        src: "/home/gearvn-laptop-gigabyte-slider-t12.jpg",
        alt: "Hero 6",
        href: "#",
      },
      {
        src: "/home/gearvn-pc-gvn-nvidia-sliders.jpg",
        alt: "Hero 7",
        href: "#",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[idx];

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-gray-200 bg-white sm:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px]">
          <Link
            href={current.href || "#"}
            aria-label={current.alt}
            className="absolute inset-0 block"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              className="object-cover"
            />
          </Link>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 w-8 rounded-full transition-colors ${
                  i === idx ? "bg-[#D70018]" : "bg-black/25 hover:bg-black/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {rightBanners.map((banner) => (
          <Link
            key={banner.src}
            href={banner.href || "#"}
            aria-label={banner.alt}
            className="block overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="relative h-[150px] w-full xl:h-[150px]">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 340px, (min-width: 1024px) 33vw, 100vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}