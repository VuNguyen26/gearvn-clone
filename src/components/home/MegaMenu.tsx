
import React from "react";
import Link from "next/link";

interface MegaMenuProps {
  content: {
    columns: {
      title: string;
      items: string[];
    }[];
  };
}

export default function MegaMenu({ content }: MegaMenuProps) {
  return (
    <div 
      className={[
        "ml-2",
        "absolute top-0 left-full", // Bám sát lề phải sidebar, lấn 2px để mất border nối
        "h-[500.8px] w-244",    // Chiều rộng đủ để che HeroCarousel
        "bg-white border border-gray-200",
        "shadow-[5px_0_15px_rgba(0,0,0,0.1)]", // Đổ bóng sang phải để tạo cảm giác đè lên
        "z-10 p-6",                        // Z-index cực cao để chắc chắn nằm trên cùng
        "grid grid-cols-5 gap-x-6 gap-y-8 text-black", 
      ].join(" ")}
    >
      {content.columns.map((col, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <h4 className="font-bold text-[#E30019] text-[14px] uppercase tracking-tight">
            {col.title}
          </h4>
          
          {col.items && col.items.length > 0 && (
            <ul className="flex flex-col gap-1">
              {col.items.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-[13px] text-gray-700 hover:text-[#E30019] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
