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
      href: "/category/ban-phim",
    },
  ];

  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/home/gearvn-thu-cu-doi-moi-t10-slider.jpeg",
        alt: "Hero 1",
        href: "/trade-in",
      },
      {
        src: "/home/gearvn-pc-gvn-t11-slider.jpg",
        alt: "Hero 2",
        href: "",
      },
      {
        src: "/home/gearvn-man-hinh-t10-slider.jpg",
        alt: "Hero 3",
        href: "/category/man-hinh",
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
        href: "http://localhost:3000/category/pc-gvn",
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
        <div className="relative h-50 sm:h-[345px] sm:w-[650px] overflow-hidden rounded-lg border border-gray-200 bg-white">
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
              unoptimized
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

      <div className="lg:grid lg:grid-cols-1 lg:gap-3 hidden">
        {rightBanners.map((banner) => (
          <div 
            key={banner.src}
            className="relative h-[165px] w-full rounded-lg overflow-hidden">
          <Link
            href={banner.href || "#"}
            aria-label={banner.alt}
            className=""
          >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover"
                unoptimized
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}