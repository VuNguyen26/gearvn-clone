import Link from "next/link";

export default function AccountViewedPage() {
  return (
    <div className="px-8 py-6">
      <h1 className="text-[28px] font-bold uppercase text-slate-900">
        SẢN PHẨM ĐÃ XEM
      </h1>

      <div className="flex min-h-[420px] flex-col items-center justify-center">
        <div className="text-[90px] opacity-20">⌕</div>
        <p className="mt-4 text-[18px] text-slate-700">
          Quý khách chưa xem sản phẩm nào.
        </p>

        <Link
          href="/"
          className="mt-6 rounded bg-red-600 px-8 py-3 text-[18px] font-semibold text-white hover:bg-red-700"
        >
          TIẾP TỤC MUA HÀNG
        </Link>
      </div>
    </div>
  );
}