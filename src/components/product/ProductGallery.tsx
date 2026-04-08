"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export default function ProductGallery({
  name,
  images,
}: ProductGalleryProps) {
  const safeImages = useMemo(() => {
    return images.filter((img) => typeof img === "string" && img.trim() !== "");
  }, [images]);

  const galleryImages = useMemo(() => {
    const detailOnly = safeImages.filter((img) => /_(0[1-6])\./i.test(img));
    return detailOnly.length > 0 ? detailOnly : safeImages;
  }, [safeImages]);

  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0] || safeImages[0] || ""
  );

  useEffect(() => {
    const nextImage = galleryImages[0] || safeImages[0] || "";
    setSelectedImage(nextImage);
  }, [galleryImages, safeImages]);

  if (!safeImages.length) return null;

  return (
    <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-sm sm:p-4">
      <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 sm:h-[420px] sm:aspect-auto sm:p-4">
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt={name}
            width={1200}
            height={1200}
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 520px"
            className="h-full w-auto max-h-full max-w-full object-contain"
          />
        ) : null}
      </div>

      {galleryImages.length > 0 && (
        <div className="mt-3 overflow-x-auto pb-1 sm:mt-4">
          <div className="flex w-max gap-2 sm:gap-3">
            {galleryImages.map((img, idx) => {
              const active = img === selectedImage;

              return (
                <button
                  key={`${name}-${idx}`}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  aria-label={`Chọn ảnh ${idx + 1} của ${name}`}
                  title={`Chọn ảnh ${idx + 1} của ${name}`}
                  className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white p-1 transition sm:h-[78px] sm:w-[78px] ${
                    active
                      ? "border-red-500 ring-1 ring-red-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Ảnh chi tiết ${idx + 1} của ${name}`}
                    width={160}
                    height={160}
                    sizes="(max-width: 639px) 56px, 78px"
                    className="h-full w-full object-contain"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}