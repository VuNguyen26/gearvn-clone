"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { ProductList } from "../product/ProductList";
import Link from "next/link";
const type_product = [
    {
        title: "Laptop",
        category : "laptop",
        video: [
            "/home/product/laptop_dell.mp4",

        ],
    },
    {
        title: "Laptop gaming",
        category : "laptop-gaming",
        video: [
            "/home/product/laptopgaming_acer.mp4",
            "/home/product/laptopgaming_asus.mp4",
            "/home/product/laptopgaming_dell.mp4",

        ],
    },
    {
        title: "PC",
        category : "pc",
        video: [
            "/home/product/PC.mp4",
            "/home/product/PC_1.mp4",
            "/home/product/PC_2.mp4",
            "/home/product/PC_3.mp4",
            "/home/product/PC_4.mp4",
        ],

    },
    {
        title: "Bàn phím",
        category : "keyboard",
        video : [
            "/home/product/keyboard.mp4",
            "/home/product/keyboard_1.mp4",
            "/home/product/keyboard_2.mp4",
            "/home/product/keyboard_3.mp4",
            "/home/product/keyboard_4.mp4",
        ]
    },
    {
        title: "Màn hình",
        category : "monitor",
        video: [
            "/home/product/monitor.mp4",
            "/home/product/monitor_1.mp4",
        ]
    }
]

export default function ProductType({products,}: {products: Product[];}) {
    const [videoIndex, setVideoIndex] = useState<Record<string, number>>({});
  return (
    <div>
      {type_product.map((item) => {
        const currentIndex = videoIndex[item.category] ?? 0;
        const currentVideo = item.video[currentIndex];
        return(
        <div key={item.category} className="mt-3 w-auto h-auto bg-white overflow-visible relative">
          {/* VIDEO */}
            <div className="relative min-h-50 max-h-80 overflow-hidden">
              {currentVideo && (
                <video
                  key={currentVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  onEnded={() => {
                    setVideoIndex((prev) => ({
                      ...prev,
                      [item.category]:
                        (currentIndex + 1) % item.video.length,
                    }));
                  }}
                >
                  <source src={currentVideo} type="video/mp4" />
                </video>
              )}
            </div>
          {/* PRODUCT */}
          <div className="p-4 w-auto overflow-visible">
            <div className="flex justify-between">
                <h2 className="lg:text-xl font-bold">{item.title}</h2>
                <Link href={`/category/${item.category}`} className="hover:text-blue-500 underline lg:text-[16px] text-sm">Xem tất cả</Link>
            </div>
            <ProductList products={products} category={item.category}/>
          </div>
        </div>
        )
      })}
    </div>
  )
}

