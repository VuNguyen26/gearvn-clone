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
    <section className={`mt-6 sm:mt-10 ${className}`}>
      <h2 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-2xl">
        Thông tin sản phẩm
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="border-b bg-gray-50 px-3 py-3 text-base font-semibold text-gray-900 sm:px-4 sm:text-lg">
          {title}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <tbody>
              {specs.map((item, index) => (
                <tr
                  key={`${item.label}-${index}`}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="w-[110px] bg-gray-50 px-3 py-3 align-top text-xs font-semibold text-blue-600 sm:w-[220px] sm:px-4 sm:text-sm">
                    {item.label}
                  </td>
                  <td className="whitespace-pre-line break-words px-3 py-3 align-top text-xs leading-5 text-gray-800 sm:px-4 sm:text-sm sm:leading-6">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}