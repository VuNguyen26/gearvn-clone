import Image from "next/image";
import Link from "next/link";

export default function SideFloatBanners() {
  return (
    <>
      {/* Left */}
      <div className="hidden xl:block fixed left-2 top-[190px] z-40">
        <Link href="#" aria-label="Side left banner">
          <div className="relative h-[420px] w-[120px] overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
            <Image src="/home/gearvn-pc-gvn-sticky-t1-26.png" alt="Side left" fill className="object-cover" />
          </div>
        </Link>
      </div>

      {/* Right */}
      <div className="hidden xl:block fixed right-2 top-[190px] z-40">
        <Link href="#" aria-label="Side right banner">
          <div className="relative h-[420px] w-[120px] overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
            <Image src="/home/gearvn-laptop-gaming-sticky-t1-26.png" alt="Side right" fill className="object-cover" />
          </div>
        </Link>
      </div>
    </>
  );
}
