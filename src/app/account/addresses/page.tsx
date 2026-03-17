export default function AccountAddressesPage() {
  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-bold text-slate-900">Thông tin tài khoản</h1>

        <button className="rounded bg-blue-600 px-5 py-3 text-[16px] font-semibold text-white hover:bg-blue-700">
          + Thêm địa chỉ mới
        </button>
      </div>

      <div className="mt-10 rounded border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-[17px] text-slate-500">
        Chưa có địa chỉ nào được lưu.
      </div>
    </div>
  );
}