"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export default function ProductGallery({
  name,
  images,
}: ProductGalleryProps) {
  const galleryImages = useMemo(() => {
    const detailOnly = images.filter((img) => /_(0[1-6])\./i.test(img));
    return detailOnly.length > 0 ? detailOnly : images;
  }, [images]);

  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0] || images[0] || ""
  );

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-4">
        <Image
          src={selectedImage}
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4"
        />
      </div>

      {galleryImages.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {galleryImages.map((img, idx) => {
            const active = img === selectedImage;

            return (
              <button
                key={`${name}-${idx}`}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`relative flex h-[78px] w-[78px] items-center justify-center overflow-hidden rounded-xl border bg-white p-1 transition ${
                  active
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`Ảnh chi tiết ${idx + 1} của ${name}`}
                  fill
                  sizes="78px"
                  className="object-contain p-1"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}