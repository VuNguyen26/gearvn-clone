"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([
    "/introduce/PC_laptop.jpg",
    "/introduce/PC-1.jpg",
    "/introduce/PC-2.jpg",
    "/introduce/laptop-1.jpg",
    "/introduce/laptop-2.png",
  ]);

  const rotateImages = () => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const firstImage = newImages.shift();
      newImages.push(firstImage!);
      return newImages;
    });
  };

  useEffect(() => {
    const interval = setInterval(rotateImages, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row lg:justify-center h-auto w-auto gap-x-2.5">
        <div className="relative h-69 w-103 lg:h-103 lg:w-150 overflow-hidden rounded-2xl mb-3 lg:mb-0">
          <Image
            src={images[0]}
            alt="Main display"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {images.slice(1).map((src, index) => (
            <div
              key={index}
              className="relative h-50 w-50 overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={`sub-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}