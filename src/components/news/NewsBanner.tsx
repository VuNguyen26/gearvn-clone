import Image from "next/image";
import { newsBanner } from "@/data/news";

export default function NewsBanner() {
  return (
    <div className="relative h-[150px] w-full overflow-hidden rounded-md bg-[#1292f3] md:h-[260px]">
      <Image
        src={newsBanner.image}
        alt={newsBanner.title}
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}