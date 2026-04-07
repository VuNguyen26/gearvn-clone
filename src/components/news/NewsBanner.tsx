import Image from "next/image";
import { newsBanner } from "@/data/news";

export default function NewsBanner() {
  return (
    <div className="relative h-[170px] w-full overflow-hidden rounded-2xl bg-[#1292f3] sm:h-[200px] md:h-[230px] lg:h-[260px]">
      <Image
        src={newsBanner.image}
        alt={newsBanner.title}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
      />
    </div>
  );
}