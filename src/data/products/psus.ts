import { Product } from "@/types/product";

export const psus: Product[] = [
  {
    id: "PSU001",
    slug: "nguon-asus-prime-850w-gold-80-plus-gold-atx-3-0",
    name: "Nguồn ASUS Prime 850W Gold - 80 Plus Gold - ATX 3.0",
    category: "psu",
    subcategory: "case_psu_cooler",
    price: 3290000,
    salePrice: 2890000,
    stock: 12,
    images: [
      "/product_image/case_psu_cooler/psu_asus_prime_850w_80plus/psu_asus_prime_850w_80plus.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_850w_80plus/psu_asus_prime_850w_80plus_01.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_850w_80plus/psu_asus_prime_850w_80plus_02.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_850w_80plus/psu_asus_prime_850w_80plus_03.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_850w_80plus/psu_asus_prime_850w_80plus_04.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_850w_80plus/psu_asus_prime_850w_80plus_05.jpg",
    ],
    shortDesc:
      "Nguồn máy tính chuẩn 80 Plus Gold mạnh mẽ, hỗ trợ ATX 3.0 và PCIe 5.0, thiết kế sang trọng phù hợp cho mọi cấu hình PC hiện đại.",
    description: `
      <h3>Hiệu suất 80 Plus Gold tin cậy</h3>
      <p>ASUS Prime 850W Gold đạt chứng nhận 80 Plus Gold, đảm bảo hiệu suất năng lượng tối ưu, giảm thiểu nhiệt lượng tỏa ra và tiết kiệm điện năng vận hành cho hệ thống của bạn.</p>
      
      <h3>Sẵn sàng cho thế hệ GPU mới</h3>
      <p>Với chuẩn ATX 3.0 tích hợp đầu cấp nguồn 16-pin (12VHPWR), bộ nguồn này hoàn toàn tương thích và cung cấp dòng điện ổn định cho các card đồ họa NVIDIA GeForce RTX 40 và 50 Series cao cấp nhất hiện nay.</p>
      
      <h3>Vận hành êm ái và bền bỉ</h3>
      <p>Trang bị quạt tản nhiệt Dual Ball Bearing (vòng bi kép) giúp tăng tuổi thọ hoạt động lên gấp đôi so với các loại quạt thông thường. Thiết kế tông màu trắng đen tối giản giúp linh kiện dễ dàng hòa hợp với nhiều phong cách build PC khác nhau.</p>
    `,
    brand: "ASUS",
    specs: {
      brand: "ASUS",
      wattage: "850W",
    },
    cardSpecs: [
      { label: "Công suất", value: "850W" },
      { label: "Hiệu suất", value: "80 Plus Gold" },
      { label: "Cáp nguồn", value: "Full Modular" },
    ],
    detailSpecs: [
      { label: "Chuẩn thiết kế", value: "ATX12V 3.0" },
      { label: "Kích thước", value: "150 x 150 x 86 mm" },
      { label: "Hiệu suất", value: "80 Plus Gold" },
      { label: "Tính năng bảo vệ", value: "OPP/OVP/UVP/SCP/OCP/OTP" },
      { label: "Đầu nối 24-pin", value: "1" },
      { label: "Đầu nối CPU 4+4-pin", value: "2" },
      { label: "Đầu nối PCI-E 16-pin", value: "1 (600W)" },
      { label: "Đầu nối PCI-E 6+2-pin", value: "3" },
      { label: "Đầu nối SATA", value: "5" },
      { label: "Kích thước quạt", value: "135 mm" },
      { label: "Bảo hành", value: "96 Tháng (8 Năm)" },
    ],
  },
];