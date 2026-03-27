// src/components/product/ProductSpecsTable.tsx

import { SpecItem } from "@/types/product";

type ProductSpecsTableProps = {
  specs: SpecItem[];
  title?: string;
  className?: string;
};

export default function ProductSpecsTable({
  specs,
  title = "Thông số kĩ thuật",
  className = "",
}: ProductSpecsTableProps) {
  if (!specs || specs.length === 0) return null;

  return (
    <section className={`mt-10 ${className}`}>
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Thông tin sản phẩm
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="border-b bg-gray-50 px-4 py-3 text-lg font-semibold text-gray-900">
          {title}
        </div>

        <table className="w-full border-collapse">
          <tbody>
            {specs.map((item, index) => (
              <tr
                key={`${item.label}-${index}`}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="w-[220px] bg-gray-50 px-4 py-3 align-top font-semibold text-blue-600">
                  {item.label}
                </td>
                <td className="whitespace-pre-line px-4 py-3 align-top text-gray-800">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}