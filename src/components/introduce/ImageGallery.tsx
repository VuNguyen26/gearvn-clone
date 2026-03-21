"use client";
import Image from "next/image";
import { useState, useEffect, use } from "react";

export default function ImageGallery() {
    const [images, setImages] = useState([
        "/introduce/PC_laptop.jpg",
        "/introduce/PC-1.jpg",
        "/introduce/PC_2.jpg",
        "/introduce/laptop-1.jpg",
        "/introduce/laptop-2.png",
    ]);

    const rotateImages = () => {
        setImages((prevImages) => {
            const newImages =  [...prevImages];
            const firstImage = newImages.shift();
            newImages.push(firstImage!);
            return newImages;
        });
    };
    
    useEffect(() => {
        const interval = setInterval(rotateImages, 3000);
        return () => clearInterval(interval);
    },[]);

    return (
        <div className="w-full h-full bg-gray-100 flex justify-center items-center p-4">
            <div className="flex h-auto w-auto gap-x-2.5">
                <div className="w-[600px] h-100 relative rounded-2xl overflow-hidden">
                    <Image src={images[0]} alt="Main display" fill className="object-cover" priority/>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                {images.slice(1).map((src,index) => (
                    <div key={index} className="relative w-50 h-50 rounded-2xl overflow-hidden">
                        <Image src={src} alt={`sub-${index}`} fill className="object-cover"/>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}