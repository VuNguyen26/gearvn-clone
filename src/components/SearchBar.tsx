"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { filterProducts, getAllProducts } from "@/lib/products";

function formatPrice(price: number) {
  return `${price.toLocaleString("vi-VN")}đ`;
}

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setKeyword(searchParams?.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const suggestions = useMemo(() => {
    const q = keyword.trim();

    if (!q) return [];

    return filterProducts(getAllProducts(), { q }).slice(0, 6);
  }, [keyword]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const q = keyword.trim();
    setOpen(false);

    if (!q) {
      router.push("/search");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={keyword}
          onChange={(e) => {
            const value = e.target.value;
            setKeyword(value);
            setOpen(Boolean(value.trim()));
          }}
          onFocus={() => {
            if (keyword.trim()) setOpen(true);
          }}
          placeholder="Bạn cần tìm gì?"
          className="h-[44px] w-full rounded-[6px] bg-white px-4 pr-12 text-[14px] text-black outline-none placeholder:text-gray-500"
        />

        <button
          type="submit"
          aria-label="Tìm kiếm"
          className="absolute right-0 top-0 flex h-[44px] w-[52px] items-center justify-center rounded-r-[6px] bg-white text-black hover:bg-gray-50"
        >
          <Search className="h-5 w-5" />
        </button>
      </form>

      {open && keyword.trim() && (
        <div className="absolute left-0 top-[calc(100%+2px)] z-[80] w-full overflow-hidden rounded-b-md border border-gray-200 bg-white shadow-xl">
          {suggestions.length > 0 ? (
            <>
              <div className="max-h-[420px] overflow-y-auto">
                {suggestions.map((product) => {
                  const finalPrice = product.salePrice ?? product.price;
                  const hasSale =
                    typeof product.salePrice === "number" &&
                    product.salePrice < product.price;

                  return (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 hover:bg-gray-50"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[15px] text-black">
                          {product.name}
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-[15px] font-semibold text-red-600">
                            {formatPrice(finalPrice)}
                          </span>

                          {hasSale && (
                            <span className="text-[14px] text-gray-400 line-through">
                              {formatPrice(product.price)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded border bg-white">
                        <Image
                          src={product.images?.[0] || "/placeholder.png"}
                          alt={product.name}
                          fill
                          className="object-contain p-1"
                          sizes="48px"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>

              <Link
                href={`/search?q=${encodeURIComponent(keyword.trim())}`}
                onClick={() => setOpen(false)}
                className="block bg-gray-50 px-4 py-3 text-center text-sm font-medium text-red-600 hover:bg-gray-100"
              >
                Xem tất cả kết quả cho "{keyword}"
              </Link>
            </>
          ) : (
            <div className="px-4 py-4 text-sm text-gray-500">
              Không tìm thấy sản phẩm phù hợp.
            </div>
          )}
        </div>
      )}
    </div>
  );
}