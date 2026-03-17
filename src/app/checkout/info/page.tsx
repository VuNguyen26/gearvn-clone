"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import { useCart } from "@/store/cart";
import { useCheckout } from "@/store/checkout";
import { vnd } from "@/lib/money";

type Province = {
  code: number;
  name: string;
};

type District = {
  code: number;
  name: string;
};

type Ward = {
  code: number;
  name: string;
};

export default function CheckoutInfoPage() {
  const router = useRouter();

  const [wardCode, setWardCode] = useState<number | "">("");

  const items = useCart((s) => s.items);
  const total = useCart((s) => s.total());

  const savedInfo = useCheckout((s) => s.info);
  const setInfo = useCheckout((s) => s.setInfo);

  const [gender, setGender] = useState<"Anh" | "Chị">("Anh");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod] = useState<"cod">("cod");
  const [needInvoice, setNeedInvoice] = useState(false);

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const [provinceCode, setProvinceCode] = useState<number | "">("");
  const [districtCode, setDistrictCode] = useState<number | "">("");

  useEffect(() => {
    const loadProvinces = async () => {
      try {
        const res = await axios.get<Province[]>("https://provinces.open-api.vn/api/p/");
        setProvinces(res.data);
      } catch (error) {
        console.error("Lỗi load tỉnh/thành:", error);
      }
    };

    loadProvinces();
  }, []);

  useEffect(() => {
    if (savedInfo) {
        setGender(savedInfo.gender);
        setFullName(savedInfo.fullName);
        setPhone(savedInfo.phone);
        setCity(savedInfo.city);
        setDistrict(savedInfo.district);
        setWard(savedInfo.ward);
        setAddress(savedInfo.address);
        setNote(savedInfo.note);
        setDeliveryMethod(savedInfo.deliveryMethod);
        return;
    }

    try {
        const raw = localStorage.getItem("currentUser");
        if (!raw) return;

        const currentUser = JSON.parse(raw);

        if (currentUser.fullName) setFullName(currentUser.fullName);
        if (currentUser.phone) setPhone(currentUser.phone);
        if (currentUser.gender === "Nam") setGender("Anh");
        if (currentUser.gender === "Nữ") setGender("Chị");

        if (currentUser.defaultAddress) {
        setCity(currentUser.defaultAddress.city || "");
        setDistrict(currentUser.defaultAddress.district || "");
        setWard(currentUser.defaultAddress.ward || "");
        setAddress(currentUser.defaultAddress.address || "");
        }
    } catch {}
    }, [savedInfo]);



    useEffect(() => {
    const restoreAddressSelection = async () => {
        let source:
        | {
            city?: string;
            district?: string;
            ward?: string;
            address?: string;
            fullName?: string;
            phone?: string;
            gender?: string;
            }
        | null = null;

        if (savedInfo) {
        source = {
            city: savedInfo.city,
            district: savedInfo.district,
            ward: savedInfo.ward,
            address: savedInfo.address,
            fullName: savedInfo.fullName,
            phone: savedInfo.phone,
            gender: savedInfo.gender,
        };
        } else {
        try {
            const raw = localStorage.getItem("currentUser");
            if (raw) {
            const currentUser = JSON.parse(raw);
            source = {
                city: currentUser?.defaultAddress?.city,
                district: currentUser?.defaultAddress?.district,
                ward: currentUser?.defaultAddress?.ward,
                address: currentUser?.defaultAddress?.address,
                fullName: currentUser?.fullName,
                phone: currentUser?.phone,
                gender: currentUser?.gender,
            };
            }
        } catch {}
        }

        if (!source) return;

        if (source.fullName) setFullName(source.fullName);
        if (source.phone) setPhone(source.phone);
        if (source.address) setAddress(source.address);

        if (source.gender === "Nam") setGender("Anh");
        if (source.gender === "Nữ") setGender("Chị");
        if (source.gender === "Anh" || source.gender === "Chị") {
        setGender(source.gender);
        }

        if (!source.city || provinces.length === 0) return;

        const matchedProvince = provinces.find(
        (p) => p.name.trim().toLowerCase() === source!.city!.trim().toLowerCase()
        );

        if (!matchedProvince) return;

        setCity(matchedProvince.name);
        setProvinceCode(matchedProvince.code);

        try {
        const districtRes = await axios.get(
            `https://provinces.open-api.vn/api/p/${matchedProvince.code}?depth=2`
        );
        const loadedDistricts = districtRes.data.districts || [];
        setDistricts(loadedDistricts);

        if (!source.district) return;

        const matchedDistrict = loadedDistricts.find(
            (d: { code: number; name: string }) =>
            d.name.trim().toLowerCase() === source!.district!.trim().toLowerCase()
        );

        if (!matchedDistrict) return;

        setDistrict(matchedDistrict.name);
        setDistrictCode(matchedDistrict.code);

        const wardRes = await axios.get(
            `https://provinces.open-api.vn/api/d/${matchedDistrict.code}?depth=2`
        );
        const loadedWards = wardRes.data.wards || [];
        setWards(loadedWards);

        if (!source.ward) return;

        const matchedWard = loadedWards.find(
            (w: { code: number; name: string }) =>
            w.name.trim().toLowerCase() === source!.ward!.trim().toLowerCase()
        );

        if (!matchedWard) return;

        setWard(matchedWard.name);
        setWardCode(matchedWard.code);
        } catch (error) {
        console.error("Khôi phục địa chỉ thất bại:", error);
        }
    };

    restoreAddressSelection();
    }, [savedInfo, provinces]);

  const handleProvinceChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
  const code = Number(e.target.value);

    if (!code) {
        setProvinceCode("");
        setCity("");
        setDistrict("");
        setWard("");
        setDistricts([]);
        setWards([]);
        setDistrictCode("");
        setWardCode("");
        return;
    }

    setProvinceCode(code);
    setDistrict("");
    setWard("");
    setDistrictCode("");
    setWardCode("");
    setWards([]);

    const selectedProvince = provinces.find((p) => p.code === code);
    setCity(selectedProvince?.name || "");

    try {
        const res = await axios.get(`https://provinces.open-api.vn/api/p/${code}?depth=2`);
        setDistricts(res.data.districts || []);
    } catch (error) {
        console.error("Lỗi load quận/huyện:", error);
        setDistricts([]);
    }
    };

  const handleDistrictChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = Number(e.target.value);

    if (!code) {
        setDistrictCode("");
        setDistrict("");
        setWard("");
        setWardCode("");
        setWards([]);
        return;
    }

    setDistrictCode(code);
    setWard("");
    setWardCode("");

    const selectedDistrict = districts.find((d) => d.code === code);
    setDistrict(selectedDistrict?.name || "");

    try {
        const res = await axios.get(`https://provinces.open-api.vn/api/d/${code}?depth=2`);
        setWards(res.data.wards || []);
    } catch (error) {
        console.error("Lỗi load phường/xã:", error);
        setWards([]);
    }
    };

  const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = Number(e.target.value);
    const selectedWard = wards.find((w) => w.code === code);
    setWard(selectedWard?.name || "");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Giỏ hàng đang trống.");
      router.push("/cart");
      return;
    }

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !city.trim() ||
      !district.trim() ||
      !ward.trim() ||
      !address.trim()
    ) {
      alert("Vui lòng nhập đầy đủ thông tin nhận hàng.");
      return;
    }

    const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
    if (!phoneRegex.test(phone.trim())) {
      alert("Số điện thoại không hợp lệ.");
      return;
    }

    setInfo({
      gender,
      fullName: fullName.trim(),
      phone: phone.trim(),
      city: city.trim(),
      district: district.trim(),
      ward: ward.trim(),
      address: address.trim(),
      note: note.trim(),
      deliveryMethod,
      paymentMethod,
    });

    router.push("/checkout/payment");
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#f3f3f3] py-10">
        <div className="mx-auto max-w-[760px] rounded-md bg-white p-6 text-center">
          <p className="text-lg font-medium">Giỏ hàng của bạn đang trống.</p>
          <Link href="/cart" className="mt-4 inline-block text-sky-600">
            Quay lại giỏ hàng
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3f3f3] py-6">
      <div className="mx-auto max-w-[1200px] px-4">
        <Link href="/cart" className="mb-4 inline-block text-sm text-sky-600">
          &lt; Trở về
        </Link>

        <div className="mx-auto max-w-[760px] rounded-md bg-white p-4 shadow-sm md:p-5">
          <CheckoutStepper current={2} />

          <form onSubmit={handleSubmit} className="mt-6">
            <h2 className="text-[18px] font-bold text-[#222]">Thông tin khách mua hàng</h2>

            <div className="mt-4 flex items-center gap-6">
              <label className="flex items-center gap-2 text-[15px] text-[#222]">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "Anh"}
                  onChange={() => setGender("Anh")}
                  className="accent-sky-500"
                />
                <span>Anh</span>
              </label>

              <label className="flex items-center gap-2 text-[15px] text-[#222]">
                <input
                  type="radio"
                  name="gender"
                  checked={gender === "Chị"}
                  onChange={() => setGender("Chị")}
                  className="accent-sky-500"
                />
                <span>Chị</span>
              </label>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nhập họ tên"
                className="h-[42px] w-full rounded border border-[#63b84a] px-3 text-[15px] outline-none"
              />

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Nhập số điện thoại"
                className="h-[42px] w-full rounded border border-[#63b84a] px-3 text-[15px] outline-none"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-[18px] font-bold text-[#222]">Chọn cách nhận hàng</h3>

              <div className="mt-4 space-y-4">
                <label className="flex items-center gap-2 text-[15px] text-[#222]">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    checked={deliveryMethod === "delivery"}
                    onChange={() => setDeliveryMethod("delivery")}
                    className="accent-sky-500"
                  />
                  <span>Giao hàng tận nơi</span>
                </label>

                <div className="rounded-md bg-[#f3f3f3] p-4">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <select
                        value={provinceCode}
                        onChange={handleProvinceChange}
                        aria-label="Chọn tỉnh hoặc thành phố"
                        title="Chọn tỉnh hoặc thành phố"
                        className="h-[42px] w-full rounded border border-[#d9d9d9] bg-white px-3 text-[15px] outline-none"
                        >
                        <option value="">Chọn Tỉnh/Thành phố</option>
                        {provinces.map((province) => (
                            <option key={province.code} value={province.code}>
                            {province.name}
                            </option>
                        ))}
                        </select>

                        <select
                        value={districtCode}
                        onChange={handleDistrictChange}
                        disabled={!provinceCode}
                        aria-label="Chọn quận hoặc huyện"
                        title="Chọn quận hoặc huyện"
                        className="h-[42px] w-full rounded border border-[#d9d9d9] bg-white px-3 text-[15px] outline-none disabled:bg-[#f5f5f5]"
                        >
                        <option value="">Chọn Quận/Huyện</option>
                        {districts.map((item) => (
                            <option key={item.code} value={item.code}>
                            {item.name}
                            </option>
                        ))}
                        </select>

                        <select
                        value={wardCode}
                        onChange={(e) => {
                            const code = Number(e.target.value);

                            if (!code) {
                            setWardCode("");
                            setWard("");
                            return;
                            }

                            setWardCode(code);
                            const selectedWard = wards.find((w) => w.code === code);
                            setWard(selectedWard?.name || "");
                        }}
                        disabled={!districtCode}
                        aria-label="Chọn phường hoặc xã"
                        title="Chọn phường hoặc xã"
                        className="h-[42px] w-full rounded border border-[#d9d9d9] bg-white px-3 text-[15px] outline-none disabled:bg-[#f5f5f5]"
                        >
                        <option value="">Chọn Phường/Xã</option>
                        {wards.map((item) => (
                            <option key={item.code} value={item.code}>
                            {item.name}
                            </option>
                        ))}
                        </select>

                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Số nhà, tên đường"
                      className="h-[42px] w-full rounded border border-[#63b84a] px-3 text-[15px] outline-none"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Lưu ý, yêu cầu khác (Không bắt buộc)"
                  className="h-[42px] w-full rounded border border-[#d9d9d9] px-3 text-[15px] outline-none"
                />

                <label className="flex items-center gap-2 text-[15px] text-[#222]">
                  <input
                    type="checkbox"
                    checked={needInvoice}
                    onChange={(e) => setNeedInvoice(e.target.checked)}
                  />
                  <span>Xuất hoá đơn cho đơn hàng</span>
                </label>
              </div>
            </div>

            <div className="mt-8 border-t border-[#e5e5e5] pt-6">
              <h3 className="text-[18px] font-bold text-[#222]">Dịch vụ giao hàng</h3>

              <div className="mt-4 space-y-3">
                <label className="flex items-center justify-between gap-3 text-[15px] text-[#222]">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shippingOption"
                      checked={deliveryMethod === "delivery"}
                      onChange={() => setDeliveryMethod("delivery")}
                    />
                    <span>Miễn phí vận chuyển (Giao hành tiêu chuẩn)</span>
                  </div>
                  <span>0đ</span>
                </label>

                <label className="flex items-center justify-between gap-3 text-[15px] text-[#222]">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shippingOption"
                      checked={deliveryMethod === "pickup"}
                      onChange={() => setDeliveryMethod("pickup")}
                    />
                    <span>Nhận tại cửa hàng</span>
                  </div>
                  <span>0đ</span>
                </label>
              </div>
            </div>

            <div className="mt-8 border-t border-[#e5e5e5] pt-6">
              <div className="flex items-center justify-between text-[18px] font-semibold">
                <span className="text-[#222]">Tổng tiền:</span>
                <span className="text-[20px] font-bold text-red-600">{vnd(total)}</span>
              </div>

              <button
                type="submit"
                className="mt-5 flex h-[54px] w-full items-center justify-center rounded bg-red-600 text-lg font-bold uppercase text-white hover:bg-red-700"
              >
                ĐẶT HÀNG NGAY
              </button>

              <p className="mt-3 text-center text-sm text-[#7a7a7a]">
                Bạn có thể chọn hình thức thanh toán sau khi đặt hàng
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}