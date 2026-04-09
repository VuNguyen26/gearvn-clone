import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

// export const psus = async (): Promise<Product[]> => {
//   const CACHE_KEY = "psu_products_session";
  
//   // KIỂM TRA: Đảm bảo code chỉ truy cập sessionStorage khi chạy ở trình duyệt
//   const isBrowser = typeof window !== "undefined";

//   // 1. Kiểm tra xem trong Session đã có dữ liệu chưa (Chỉ thực hiện ở Client)
//   if (isBrowser) {
//     const cachedData = sessionStorage.getItem(CACHE_KEY);
//     if (cachedData) {
//       console.log("⚡ [PSU] Lấy từ Session Storage (0 Read)");
//       return JSON.parse(cachedData) as Product[];
//     }
//   }

//   // 2. Nếu chưa có hoặc đang ở Server, mới gọi Firebase (Tốn Quota)
//   try {
//     console.warn("📡 [PSU] Đang tải danh sách từ Firebase...");
//     const q = query(
//       collection(db, "products"),
//       where("category", "==", "psu") 
//     );

//     const snapshot = await getDocs(q);
//     const products = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data(),
//     })) as Product[];

//     // 3. Lưu vào Session để tái sử dụng (Chỉ thực hiện ở Client)
//     if (isBrowser) {
//       sessionStorage.setItem(CACHE_KEY, JSON.stringify(products));
//     }

//     return products;
//   } catch (error) {
//     console.error("Lỗi khi fetch dữ liệu cpus:", error);
//     return [];
//   }
// };

export const psus: Product[] = [
  {
    id: "PSU001",
    slug: "nguon-asus-prime-750w-gold-80-plus-gold-atx-3-0",
    name: "Nguồn ASUS Prime 750W Gold - 80 Plus Gold - ATX 3.0",
    category: "psu",
    subcategory: "case_psu_cooler",
    price: 3290000,
    salePrice: 2890000,
    stock: 12,
    images: [
      "/product_image/case_psu_cooler/psu_asus_prime_750w_80plus/psu_asus_prime_750w_80plus.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_750w_80plus/psu_asus_prime_750w_80plus_01.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_750w_80plus/psu_asus_prime_750w_80plus_02.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_750w_80plus/psu_asus_prime_750w_80plus_03.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_750w_80plus/psu_asus_prime_750w_80plus_04.jpg",
      "/product_image/case_psu_cooler/psu_asus_prime_750w_80plus/psu_asus_prime_750w_80plus_05.jpg",
    ],
    shortDesc:
      "Nguồn máy tính chuẩn 80 Plus Gold mạnh mẽ, hỗ trợ ATX 3.0 và PCIe 5.0, thiết kế sang trọng phù hợp cho mọi cấu hình PC hiện đại.",
    description: `
      <h3>Hiệu suất 80 Plus Gold tin cậy</h3>
      <p>ASUS Prime 750W Gold đạt chứng nhận 80 Plus Gold, đảm bảo hiệu suất năng lượng tối ưu, giảm thiểu nhiệt lượng tỏa ra và tiết kiệm điện năng vận hành cho hệ thống của bạn.</p>
      
      <h3>Sẵn sàng cho thế hệ GPU mới</h3>
      <p>Với chuẩn ATX 3.0 tích hợp đầu cấp nguồn 16-pin (12VHPWR), bộ nguồn này hoàn toàn tương thích và cung cấp dòng điện ổn định cho các card đồ họa NVIDIA GeForce RTX 40 và 50 Series cao cấp nhất hiện nay.</p>
      
      <h3>Vận hành êm ái và bền bỉ</h3>
      <p>Trang bị quạt tản nhiệt Dual Ball Bearing (vòng bi kép) giúp tăng tuổi thọ hoạt động lên gấp đôi so với các loại quạt thông thường. Thiết kế tông màu trắng đen tối giản giúp linh kiện dễ dàng hòa hợp với nhiều phong cách build PC khác nhau.</p>
    `,
    brand: "ASUS",
    specs: {
      brand: "ASUS",
      wattage: "780W",
    },
    cardSpecs: [
      { label: "Công suất", value: "780W" },
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
  {
    id: "PSU002",
    slug: "nguon-asus-rog-thor-1600t-gaming-titanium-atx-3-0",
    name: "Nguồn ASUS ROG Thor 1600W Titanium - 80 Plus Titanium - ATX 3.0",
    category: "psu",
    subcategory: "case_psu_cooler",
    price: 15990000,
    salePrice: 14500000,
    stock: 5,
    images: [
      "/product_image/case_psu_cooler/psu_asus_rog_thor_1600t3_atx/psu_asus_rog_thor_1600t3_atx.jpg",
      "/product_image/case_psu_cooler/psu_asus_rog_thor_1600t3_atx/psu_asus_rog_thor_1600t3_atx_01.jpg",
      "/product_image/case_psu_cooler/psu_asus_rog_thor_1600t3_atx/psu_asus_rog_thor_1600t3_atx_02.jpg",
      "/product_image/case_psu_cooler/psu_asus_rog_thor_1600t3_atx/psu_asus_rog_thor_1600t3_atx_03.jpg",
      "/product_image/case_psu_cooler/psu_asus_rog_thor_1600t3_atx/psu_asus_rog_thor_1600t3_atx_04.jpg",
    ],
    shortDesc: "Bộ nguồn mạnh mẽ nhất dòng ROG Thor với chứng nhận 80 Plus Titanium, màn hình OLED hiển thị công suất và hỗ trợ PCIe 5.0.",
    description: `
      <h3>Sức mạnh Titanium tuyệt đối</h3>
      <p>ROG Thor 1600W đạt chuẩn 80 Plus Titanium, mức hiệu suất cao nhất hiện nay, sử dụng các linh kiện Gallium Nitride (GaN) để tối ưu hóa truyền dẫn năng lượng.</p>
      <h3>Màn hình OLED thời gian thực</h3>
      <p>Tích hợp màn hình OLED hiển thị trực tiếp mức tiêu thụ điện năng của hệ thống, cùng hệ thống đèn Aura Sync ARGB đồng bộ rực rỡ.</p>
    `,
    brand: "ASUS",
    specs: { brand: "ASUS", wattage: "1600W" },
    cardSpecs: [
      { label: "Công suất", value: "1600W" },
      { label: "Hiệu suất", value: "80 Plus Titanium" },
      { label: "Tiện ích", value: "Màn hình OLED" },
    ],
    detailSpecs: [
      { label: "Chuẩn thiết kế", value: "ATX 3.0" },
      { label: "Kích thước", value: "190 x 150 x 86 mm" },
      { label: "Đầu nối PCI-E 16-pin", value: "1 (600W)" },
      { label: "Quạt tản nhiệt", value: "135mm Axial-tech" },
      { label: "Bảo hành", value: "120 Tháng (10 Năm)" },
    ],
  },
  {
    id: "PSU003",
    slug: "nguon-cooler-master-mwe-gold-1050-v2-full-modular",
    name: "Nguồn Cooler Master MWE Gold 1050W V2 - 80 Plus Gold",
    category: "psu",
    subcategory: "case_psu_cooler",
    price: 4350000,
    salePrice: 3890000,
    stock: 15,
    images: [
      "/product_image/case_psu_cooler/psu_cooler_master_mwe_gold_1050w_v2/psu_cooler_master_mwe_gold_1050w_v2.jpg",
      "/product_image/case_psu_cooler/psu_cooler_master_mwe_gold_1050w_v2/psu_cooler_master_mwe_gold_1050w_v2_01.jpg",
      "/product_image/case_psu_cooler/psu_cooler_master_mwe_gold_1050w_v2/psu_cooler_master_mwe_gold_1050w_v2_02.jpg",
      "/product_image/case_psu_cooler/psu_cooler_master_mwe_gold_1050w_v2/psu_cooler_master_mwe_gold_1050w_v2_03.jpg",
      "/product_image/case_psu_cooler/psu_cooler_master_mwe_gold_1050w_v2/psu_cooler_master_mwe_gold_1050w_v2_04.jpg",
    ],
    shortDesc: "Phiên bản nâng cấp V2 với khả năng chịu nhiệt độ cao và quạt HDB 140mm yên tĩnh.",
    description: `
      <h3>Độ bền chuẩn công nghiệp</h3>
      <p>MWE Gold V2 có thể vận hành an toàn ở nhiệt độ môi trường lên tới 50°C, cực kỳ phù hợp cho các hệ thống làm việc cường độ cao hoặc overclocking.</p>
      <h3>Quạt HDB 140mm tĩnh lặng</h3>
      <p>Sử dụng vòng bi thủy động lực học (HDB) giúp giảm ma sát, tăng tuổi thọ và giảm tiếng ồn tối đa khi tải nặng.</p>
    `,
    brand: "Cooler Master",
    specs: { brand: "Cooler Master", wattage: "1050W" },
    cardSpecs: [
      { label: "Công suất", value: "1050W" },
      { label: "Hiệu suất", value: "80 Plus Gold" },
      { label: "Cáp nguồn", value: "Full Modular" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "180 x 150 x 86 mm" },
      { label: "Chuẩn thiết kế", value: "ATX 12V V2.52" },
      { label: "Quạt", value: "140mm HDB Fan" },
      { label: "Bảo hành", value: "60 Tháng (5 Năm)" },
    ],
  },
  {
    id: "PSU004",
    slug: "nguon-cooler-master-v1300-platinum-v2-full-modular",
    name: "Nguồn Cooler Master V1300 Platinum V2 - 80 Plus Platinum",
    category: "psu",
    subcategory: "case_psu_cooler",
    price: 8900000,
    salePrice: 8200000,
    stock: 7,
    images: [
      "/product_image/case_psu_cooler/psu_cooler_master_v_platinum_1300_v2/psu_cooler_master_v_platinum_1300_v2.png",
      "/product_image/case_psu_cooler/psu_cooler_master_v_platinum_1300_v2/psu_cooler_master_v_platinum_1300_v2_01.png",
      "/product_image/case_psu_cooler/psu_cooler_master_v_platinum_1300_v2/psu_cooler_master_v_platinum_1300_v2_02.png",
      "/product_image/case_psu_cooler/psu_cooler_master_v_platinum_1300_v2/psu_cooler_master_v_platinum_1300_v2_03.png",
      "/product_image/case_psu_cooler/psu_cooler_master_v_platinum_1300_v2/psu_cooler_master_v_platinum_1300_v2_04.png",
    ],
    shortDesc: "Đỉnh cao hiệu suất với chứng nhận Platinum, cáp 16AWG PCI-e chuyên dụng cho dòng card đồ họa cao cấp.",
    description: `
      <h3>Hiệu suất Platinum vượt trội</h3>
      <p>Chứng nhận 80 Plus Platinum đảm bảo hiệu suất >92% trong điều kiện tải bình thường, giúp hệ thống hoạt động mát mẻ và ổn định.</p>
    `,
    brand: "Cooler Master",
    specs: { brand: "Cooler Master", wattage: "1300W" },
    cardSpecs: [
      { label: "Công suất", value: "1300W" },
      { label: "Hiệu suất", value: "80 Plus Platinum" },
      { label: "Cáp nguồn", value: "Full Modular" },
    ],
    detailSpecs: [
      { label: "Chuẩn thiết kế", value: "ATX 12V V2.52" },
      { label: "Bảo hành", value: "120 Tháng (10 Năm)" },
    ],
  },
  {
    id: "PSU005",
    slug: "nguon-deepcool-pk550d-80-plus-bronze",
    name: "Nguồn Deepcool PK550D - 80 Plus Bronze",
    category: "psu",
    subcategory: "case_psu_cooler",
    price: 1190000,
    salePrice: 1050000,
    stock: 30,
    images: [
      "/product_image/case_psu_cooler/psu_deepcool_pt550_80plus/psu_deepcool_pt550_80plus.jpg",
      "/product_image/case_psu_cooler/psu_deepcool_pt550_80plus/psu_deepcool_pt550_80plus_01.jpg",
      "/product_image/case_psu_cooler/psu_deepcool_pt550_80plus/psu_deepcool_pt550_80plus_02.jpg",
      "/product_image/case_psu_cooler/psu_deepcool_pt550_80plus/psu_deepcool_pt550_80plus_03.jpg",
      "/product_image/case_psu_cooler/psu_deepcool_pt550_80plus/psu_deepcool_pt550_80plus_04.jpg",
      "/product_image/case_psu_cooler/psu_deepcool_pt550_80plus/psu_deepcool_pt550_80plus_05.jpg",
    ],
    shortDesc: "Lựa chọn kinh tế và tin cậy cho cấu hình PC gaming phổ thông với hiệu suất 80 Plus Bronze.",
    brand: "Deepcool",
    specs: { brand: "Deepcool", wattage: "550W" },
    cardSpecs: [
      { label: "Công suất", value: "550W" },
      { label: "Hiệu suất", value: "80 Plus Bronze" },
      { label: "Cáp nguồn", value: "Cáp dẹt đen" },
    ],
    detailSpecs: [
      { label: "Hiệu suất", value: "80 Plus Bronze" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },
  {
    id: "PSU006",
    slug: "nguon-msi-mag-a1250gl-pcie5-80-plus-gold-atx-3-0",
    name: "Nguồn MSI MAG A1250GL PCIE5 - 80 Plus Gold - ATX 3.0",
    category: "psu",
    subcategory: "case_psu_cooler",
    price: 5490000,
    salePrice: 4990000,
    stock: 10,
    images: [
      "/product_image/case_psu_cooler/psu_msi_mag_a1250gl_pcie5_80plus/psu_msi_mag_a1250gl_pcie5_80plus.png",
      "/product_image/case_psu_cooler/psu_msi_mag_a1250gl_pcie5_80plus/psu_msi_mag_a1250gl_pcie5_80plus_01.png",
      "/product_image/case_psu_cooler/psu_msi_mag_a1250gl_pcie5_80plus/psu_msi_mag_a1250gl_pcie5_80plus_02.png",
      "/product_image/case_psu_cooler/psu_msi_mag_a1250gl_pcie5_80plus/psu_msi_mag_a1250gl_pcie5_80plus_03.png",
      "/product_image/case_psu_cooler/psu_msi_mag_a1250gl_pcie5_80plus/psu_msi_mag_a1250gl_pcie5_80plus_04.png",
    ],
    shortDesc: "Thiết kế chuẩn ATX 3.0 nhỏ gọn, hỗ trợ cổng 12VHPWR với màu sắc cổng kết nối giúp tránh việc cắm sai.",
    description: `
      <h3>Cổng kết nối 16-pin an toàn</h3>
      <p>MSI sử dụng cổng kết nối PCIe 5.0 màu vàng đặc trưng giúp người dùng dễ dàng nhận diện và đảm bảo đầu cắm được đẩy vào hoàn toàn, tránh nguy cơ cháy nổ.</p>
    `,
    brand: "MSI",
    specs: { brand: "MSI", wattage: "1250W" },
    cardSpecs: [
      { label: "Công suất", value: "1250W" },
      { label: "Hiệu suất", value: "80 Plus Gold" },
      { label: "Cáp nguồn", value: "Full Modular" },
    ],
    detailSpecs: [
      { label: "Chuẩn thiết kế", value: "ATX 3.0" },
      { label: "Kích thước", value: "150 x 150 x 86 mm" },
      { label: "Bảo hành", value: "84 Tháng (7 Năm)" },
    ],
  },
  {
    id: "PSU007",
    slug: "nguon-msi-mag-a750bn-pcie5-80-plus-bronze",
    name: "Nguồn MSI MAG A750BN PCIE5 - 80 Plus Bronze",
    category: "psu",
    subcategory: "case_psu_cooler",
    price: 1890000,
    salePrice: 1650000,
    stock: 25,
    images: [
      "/product_image/case_psu_cooler/psu_msi_mag_a750bn_pcie5_80plus_bronze.png",
    ],
    shortDesc: "Nguồn chuẩn Bronze đầu tiên tích hợp sẵn đầu cấp nguồn PCIe 5.0 (12VHPWR), giải pháp tối ưu cho RTX 4070 series trở xuống.",
    description: `
      <h3>Hỗ trợ PCIe 5.0 trong phân khúc phổ thông</h3>
      <p>MSI MAG A750BN PCIE5 là một trong những bộ nguồn chuẩn Bronze hiếm hoi trên thị trường hỗ trợ cáp 16-pin PCIe 5.0, giúp bạn xây dựng cấu hình sử dụng các dòng card đồ họa thế hệ mới một cách dễ dàng.</p>
      
      <h3>Cấu trúc mạch DC-to-DC</h3>
      <p>Thiết kế mạch DC-to-DC giúp giảm thiểu sự mất ổn định của điện áp đầu ra, đảm bảo hệ thống luôn vận hành mượt mà ngay cả khi thay đổi mức tải đột ngột.</p>
      
      <h3>Vận hành an toàn</h3>
      <p>Trang bị đầy đủ các cơ chế bảo vệ công nghiệp như OVP, OCP, SCP, OPP, OTP. Quạt 120mm độ ồn thấp tự động điều chỉnh tốc độ theo nhiệt độ hệ thống.</p>
    `,
    brand: "MSI",
    specs: {
      brand: "MSI",
      wattage: "750W",
    },
    cardSpecs: [
      { label: "Công suất", value: "750W" },
      { label: "Hiệu suất", value: "80 Plus Bronze" },
      { label: "Hỗ trợ", value: "PCIe 5.0 (16-pin)" },
    ],
    detailSpecs: [
      { label: "Chuẩn thiết kế", value: "ATX 12V 3.0" },
      { label: "Kích thước", value: "150 x 140 x 86 mm" },
      { label: "Kiểu cáp", value: "Cáp dẹt đen (Non-Modular)" },
      { label: "Đầu nối PCI-E 16-pin", value: "1 (300W)" },
      { label: "Kích thước quạt", value: "120 mm" },
      { label: "Bảo hành", value: "60 Tháng (5 Năm)" },
    ],
  },
];