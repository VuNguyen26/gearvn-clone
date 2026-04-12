"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SideFloatBanners() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 85);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bannerPositionClass = compact ? "top-[85px]" : "top-[155px]";

  return (
    <>
      {/* Left */}
      <div
        className={`fixed left-3 ${bannerPositionClass} z-40 hidden xl:block transition-all duration-300 ease-out`}
      >
        <Link href="#" aria-label="Side left banner">
          <div className="relative h-[380px] w-[100px] overflow-hidden rounded-md">
            <Image
              src="/home/gearvn-pc-gvn-sticky-t1-26.png"
              alt="Side left"
              fill
              className="object-contain object-center"
              sizes="100px"
            />
          </div>
        </Link>
      </div>

      {/* Right */}
      <div
        className={`fixed right-3 ${bannerPositionClass} z-40 hidden xl:block transition-all duration-300 ease-out`}
      >
        <Link href="#" aria-label="Side right banner">
          <div className="relative h-[380px] w-[100px] overflow-hidden rounded-md">
            <Image
              src="/home/gearvn-laptop-gaming-sticky-t1-26.png"
              alt="Side right"
              fill
              className="object-contain object-center"
              sizes="100px"
            />
          </div>
        </Link>
      </div>
    </>
  );
}