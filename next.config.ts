import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      { 
        protocol: "https",
        hostname: "images.unsplash.com" },
      { 
        protocol: "https", 
        hostname: "firebasestorage.googleapis.com" // Thêm dòng này cho Firebase
      },
      { 
        protocol: "https", 
        hostname: "cdn2.fptshop.com.vn" // Thêm dòng này nếu vẫn dùng link FPT cũ
      },
      { 
        protocol: "https", 
        hostname: "cdn.hstatic.net" // Thêm dòng này để chạy link hstatic
      },
    ],
  },
};

export default nextConfig;