import type { WarrantyCenterRow } from "@/data/warrantyCenters";

type WarrantyTableProps = {
  title: string;
  regionLabel: string;
  rows: WarrantyCenterRow[];
};

export default function WarrantyTable({
  title,
  regionLabel,
  rows,
}: WarrantyTableProps) {
  return (
    <div className="mt-6 overflow-hidden rounded border border-gray-300 bg-white">
      <div className="border-b border-gray-300 px-4 py-3 text-[18px] text-black">
        {title}: <span className="font-medium">{regionLabel}</span>
      </div>

      <div className="max-h-[520px] overflow-auto">
        <table className="min-w-[1100px] w-full border-collapse text-left text-[15px]">
          <thead className="sticky top-0 z-10 bg-[#b8d5a8] text-black">
            <tr>
              <th className="border border-gray-300 px-4 py-3 font-semibold">
                Hãng/Nhà cung cấp
              </th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">
                Tên Trung Tâm Bảo hành
              </th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">
                Liên Hệ
              </th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">
                Địa chỉ
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.brand}-${index}`} className="bg-white">
                <td className="border border-gray-300 px-4 py-3">{row.brand}</td>
                <td className="border border-gray-300 px-4 py-3">
                  {row.centerName}
                </td>
                <td className="border border-gray-300 px-4 py-3">{row.contact}</td>
                <td className="border border-gray-300 px-4 py-3">{row.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-300 bg-gray-50 px-4 py-2 text-[14px] text-gray-700">
        {regionLabel}
      </div>
    </div>
  );
}