import Link from "next/link";
import { MenuCategory } from "@/data/category-menu";

type Props = {
  category: MenuCategory;
};

export default function MegaMenuContent({ category }: Props) {
  return (
    <div className="grid grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-6 p-5">
      {category.sections.map((section) => (
        <div key={section.title} className="min-w-0">
          <h3 className="mb-2 text-[14px] font-bold leading-5 text-[#E30019]">
            {section.title}
          </h3>

          <ul className="space-y-1.5">
            {section.items.map((item) => (
              <li key={item}>
                {/* Truyền keyword lên URL để trang sản phẩm bắt và lọc */}
                <Link
                  href={`/category/${category.id}?keyword=${encodeURIComponent(item)}`}
                  className="text-[14px] leading-5 text-gray-800 transition hover:text-[#E30019]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}