import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function SideFloatBanners() {
  return (
    <>
      {/* Left */}
      <div className="hidden xl:block absolute top-0 left-2 z-40 h-full">
        <div className="sticky top-20">
          <Link href="#" aria-label="Side left banner">
            <div className="relative h-90 w-20 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
              <Image src="/home/gearvn-pc-gvn-sticky-t1-26.png" alt="Side left" fill className="object-cover" />
            </div>
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="hidden xl:block absolute top-0 right-2 z-40 h-full">
        <div className="sticky top-20">
          <Link href="#" aria-label="Side right banner">
            <div className="relative h-90 w-20 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
              <Image src="/home/gearvn-laptop-gaming-sticky-t1-26.png" alt="Side right" fill className="object-cover" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
