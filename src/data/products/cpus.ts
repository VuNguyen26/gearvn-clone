
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

// export const cpus = async (): Promise<Product[]> => {
//   const CACHE_KEY = "cpu_products_session";
  
//   // KIỂM TRA: Đảm bảo code chỉ truy cập sessionStorage khi chạy ở trình duyệt
//   const isBrowser = typeof window !== "undefined";

//   // 1. Kiểm tra xem trong Session đã có dữ liệu chưa (Chỉ thực hiện ở Client)
//   if (isBrowser) {
//     const cachedData = sessionStorage.getItem(CACHE_KEY);
//     if (cachedData) {
//       console.log("⚡ [CPU] Lấy từ Session Storage (0 Read)");
//       return JSON.parse(cachedData) as Product[];
//     }
//   }

//   // 2. Nếu chưa có hoặc đang ở Server, mới gọi Firebase (Tốn Quota)
//   try {
//     console.warn("📡 [CPU] Đang tải danh sách từ Firebase...");
//     const q = query(
//       collection(db, "products"),
//       where("category", "==", "cpu") 
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
export const cpus: Product[] = [
  {
    id: "CPU001",
    slug: "bo-vi-xu-ly-intel-core-i7-14700f",
    name: "Bộ vi xử lý Intel Core i7 14700F",
    category: "cpu",
    subcategory: "main_cpu_vga",
    price: 10290000,
    salePrice: 9990000,
    stock: 10,
    images: [
      "/product_image/main_cpu_vga/bo_vi_xu_ly_intel_core_i7_14700f.png",
    ],
    shortDesc: "CPU hiệu năng cao, phù hợp gaming và làm việc đa nhiệm với 20 nhân 28 luồng.",
    description: `
      <h3>Sức mạnh đa nhiệm vượt trội</h3>
      <p>Intel Core i7 14700F là sự nâng cấp đáng giá của thế hệ thứ 14 khi được bổ sung thêm các nhân E-Core. Với tổng cộng 20 nhân (8 P-Core và 12 E-Core) cùng 28 luồng xử lý, vi xử lý này mang lại hiệu suất đa nhiệm tuyệt vời, giúp bạn vừa chơi game mượt mà vừa có thể stream hoặc render video ở chế độ nền.</p>
      
      <h3>Tối ưu chi phí cho game thủ</h3>
      <p>Hậu tố "F" cho biết CPU này không được trang bị đồ họa tích hợp (iGPU). Điều này giúp giảm thiểu chi phí đầu tư ban đầu, cực kỳ phù hợp cho những game thủ hoặc người dùng đồ họa đã xác định sẽ trang bị card màn hình rời (VGA) cho hệ thống PC của mình.</p>
    `,
    brand: "Intel",
    specs: {
      brand: "Intel",
      cpu: "Intel Core i7 14700F",
    },
    cardSpecs: [
      { label: "Số nhân / luồng", value: "20 Nhân / 28 Luồng" },
      { label: "Xung nhịp tối đa", value: "5.4 GHz" },
      { label: "Socket", value: "LGA 1700" },
    ],
    detailSpecs: [
      { label: "Dòng CPU", value: "Core i7" },
      { label: "Socket", value: "LGA 1700" },
      { label: "Số nhân", value: "20 (8 P-Cores + 12 E-Cores)" },
      { label: "Số luồng", value: "28" },
      { label: "Xung cơ bản", value: "2.1 GHz (P-Core)" },
      { label: "Xung tối đa", value: "Up to 5.4 GHz" },
      { label: "Bộ nhớ đệm", value: "33 MB Intel Smart Cache" },
      { label: "Đồ họa tích hợp", value: "Không có (Cần VGA rời)" },
      { label: "TDP", value: "65W (Base) - 219W (Max Turbo)" },
      { label: "Kiến trúc", value: "Raptor Lake Refresh (Gen 14)" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "CPU002",
    slug: "bo-vi-xu-ly-intel-core-i9-14900kf",
    name: "Bộ vi xử lý Intel Core i9 14900KF",
    category: "cpu",
    subcategory: "main_cpu_vga",
    price: 14990000,
    salePrice: 14490000,
    stock: 10,
    images: [
      "/product_image/main_cpu_vga/bo_vi_xu_ly_intel_core_i9_14900kf.png",
    ],
    shortDesc: "Quái vật hiệu năng với xung nhịp 6.0 GHz, thiết kế cho hệ thống High-End PC.",
    description: `
      <h3>Phá vỡ giới hạn tốc độ</h3>
      <p>Intel Core i9 14900KF là một trong những vi xử lý mạnh nhất của thế hệ Raptor Lake Refresh. Được thiết kế để đẩy lùi mọi giới hạn, con chip này có khả năng đạt mức xung nhịp cực đại lên tới 6.0 GHz nhờ công nghệ Thermal Velocity Boost, mang lại mức FPS cao nhất cho các tựa game eSports và game AAA sát phần cứng.</p>
      
      <h3>Khả năng ép xung (Overclocking) mạnh mẽ</h3>
      <p>Với hậu tố "K" (mở khóa hệ số nhân) và không kèm iGPU ("F"), i9 14900KF tập trung toàn bộ năng lượng và không gian die cho các nhân CPU. Khi kết hợp với bo mạch chủ dòng Z (Z790) và hệ thống tản nhiệt nước cao cấp, người dùng có thể ép xung để vắt kiệt hiệu năng cho các tác vụ render 3D hay xử lý dữ liệu phức tạp.</p>
    `,
    brand: "Intel",
    specs: {
      brand: "Intel",
      cpu: "Intel Core i9 14900KF",
    },
    cardSpecs: [
      { label: "Số nhân / luồng", value: "24 Nhân / 32 Luồng" },
      { label: "Xung nhịp tối đa", value: "6.0 GHz" },
      { label: "Socket", value: "LGA 1700" },
    ],
    detailSpecs: [
      { label: "Dòng CPU", value: "Core i9" },
      { label: "Socket", value: "LGA 1700" },
      { label: "Số nhân", value: "24 (8 P-Cores + 16 E-Cores)" },
      { label: "Số luồng", value: "32" },
      { label: "Xung cơ bản", value: "3.2 GHz (P-Core)" },
      { label: "Xung tối đa", value: "Up to 6.0 GHz" },
      { label: "Bộ nhớ đệm", value: "36 MB Intel Smart Cache" },
      { label: "Đồ họa tích hợp", value: "Không có (Cần VGA rời)" },
      { label: "TDP", value: "125W (Base) - 253W (Max Turbo)" },
      { label: "Kiến trúc", value: "Raptor Lake Refresh (Gen 14)" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "CPU003",
    slug: "bo-vi-xu-ly-intel-core-ultra-5-245k",
    name: "Bộ vi xử lý Intel Core Ultra 5 245K",
    category: "cpu",
    subcategory: "main_cpu_vga",
    price: 8990000,
    salePrice: 8490000,
    stock: 10,
    images: [
      "/product_image/main_cpu_vga/bo_vi_xu_ly_intel_core_ultra_5_245k.png",
    ],
    shortDesc: "Thế hệ Arrow Lake mới với hiệu suất và khả năng tiết kiệm điện đột phá.",
    description: `
      <h3>Kiến trúc Arrow Lake hoàn toàn mới</h3>
      <p>Intel Core Ultra 5 245K đánh dấu kỷ nguyên mới của vi xử lý máy tính để bàn với kiến trúc Arrow Lake. Việc loại bỏ công nghệ siêu phân luồng (Hyper-Threading) giúp CPU hoạt động mát mẻ hơn, tiêu thụ ít điện năng hơn nhưng vẫn đảm bảo mức hiệu năng vượt trội nhờ các nhân P-Core (Lion Cove) và E-Core (Skymont) được thiết kế lại hoàn toàn.</p>
      
      <h3>Hiệu suất toàn diện cho mọi nhu cầu</h3>
      <p>Với 14 nhân và xung nhịp boost lên đến 5.2 GHz trên nền socket LGA 1851 mới, Core Ultra 5 245K là sự lựa chọn cân bằng hoàn hảo. Nó đáp ứng mượt mà từ các tựa game hiện đại đến các công việc sáng tạo nội dung, đồ họa 2D/3D nhẹ nhàng.</p>
    `,
    brand: "Intel",
    specs: {
      brand: "Intel",
      cpu: "Intel Core Ultra 5 245K",
    },
    cardSpecs: [
      { label: "Số nhân / luồng", value: "14 Nhân / 14 Luồng" },
      { label: "Xung nhịp tối đa", value: "5.2 GHz" },
      { label: "Socket", value: "LGA 1851" },
    ],
    detailSpecs: [
      { label: "Dòng CPU", value: "Core Ultra 5" },
      { label: "Socket", value: "LGA 1851" },
      { label: "Số nhân", value: "14 (6 P-Cores + 8 E-Cores)" },
      { label: "Số luồng", value: "14" },
      { label: "Xung cơ bản", value: "4.2 GHz (P-Core)" },
      { label: "Xung tối đa", value: "Up to 5.2 GHz" },
      { label: "Bộ nhớ đệm", value: "24 MB Intel Smart Cache" },
      { label: "Đồ họa tích hợp", value: "Intel Graphics" },
      { label: "TDP", value: "125W (Base) - 159W (Max Turbo)" },
      { label: "Kiến trúc", value: "Arrow Lake" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "CPU004",
    slug: "bo-vi-xu-ly-intel-core-ultra-7-265k",
    name: "Bộ vi xử lý Intel Core Ultra 7 265K",
    category: "cpu",
    subcategory: "main_cpu_vga",
    price: 12990000,
    salePrice: 12490000,
    stock: 10,
    images: [
      "/product_image/main_cpu_vga/bo_vi_xu_ly_intel_core_ultra_7_265k.png",
    ],
    shortDesc: "Sức mạnh 20 nhân kiến trúc Arrow Lake, lý tưởng cho hệ thống Gaming & Creator PC.",
    description: `
      <h3>Trải nghiệm sáng tạo chuyên nghiệp</h3>
      <p>Intel Core Ultra 7 265K cung cấp sức mạnh tính toán tuyệt vời nhờ sự kết hợp của 20 nhân vật lý mạnh mẽ. Dòng vi xử lý này mang lại IPC (chỉ thị mỗi nhịp xung) cao hơn đáng kể, rút ngắn thời gian hoàn thành các dự án biên tập video 4K, lập trình hay chạy các mô hình AI trực tiếp trên máy cá nhân.</p>
      
      <h3>Tối ưu năng lượng, nhiệt độ mát mẻ</h3>
      <p>Thay vì chạy đua nhiệt độ như các thế hệ trước, kiến trúc Arrow Lake trên Ultra 7 265K tập trung vào "Hiệu suất trên mỗi Watt". Con chip hoạt động vô cùng mát mẻ, cho phép hệ thống tản nhiệt hoạt động êm ái hơn, tạo ra không gian làm việc tĩnh lặng cho các nhà sáng tạo nội dung.</p>
    `,
    brand: "Intel",
    specs: {
      brand: "Intel",
      cpu: "Intel Core Ultra 7 265K",
    },
    cardSpecs: [
      { label: "Số nhân / luồng", value: "20 Nhân / 20 Luồng" },
      { label: "Xung nhịp tối đa", value: "5.4 GHz" },
      { label: "Socket", value: "LGA 1851" },
    ],
    detailSpecs: [
      { label: "Dòng CPU", value: "Core Ultra 7" },
      { label: "Socket", value: "LGA 1851" },
      { label: "Số nhân", value: "20 (8 P-Cores + 12 E-Cores)" },
      { label: "Số luồng", value: "20" },
      { label: "Xung cơ bản", value: "3.9 GHz (P-Core)" },
      { label: "Xung tối đa", value: "Up to 5.4 GHz" },
      { label: "Bộ nhớ đệm", value: "30 MB Intel Smart Cache" },
      { label: "Đồ họa tích hợp", value: "Intel Graphics" },
      { label: "TDP", value: "125W (Base) - 250W (Max Turbo)" },
      { label: "Kiến trúc", value: "Arrow Lake" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "CPU005",
    slug: "bo-vi-xu-ly-intel-core-ultra-9-285k",
    name: "Bộ vi xử lý Intel Core Ultra 9 285K",
    category: "cpu",
    subcategory: "main_cpu_vga",
    price: 18490000,
    salePrice: 17490000,
    stock: 10,
    images: [
      "/product_image/main_cpu_vga/bo_vi_xu_ly_intel_core_ultra_9_285k.png",
    ],
    shortDesc: "Vi xử lý đầu bảng thế hệ mới của Intel, hiệu năng cực đỉnh cho Workstation.",
    description: `
      <h3>Đỉnh cao hiệu năng máy tính để bàn</h3>
      <p>Intel Core Ultra 9 285K là biểu tượng sức mạnh mới của Intel. Với 24 nhân xung nhịp lên tới 5.7 GHz, vi xử lý này nghiền nát mọi bài kiểm tra benchmark và là trái tim hoàn hảo cho các cỗ máy Workstation chuyên xử lý kỹ xảo điện ảnh, thiết kế 3D chuyên nghiệp và tính toán dữ liệu lớn.</p>
      
      <h3>Tích hợp sức mạnh AI</h3>
      <p>Kiến trúc Arrow Lake mang đến khả năng xử lý trí tuệ nhân tạo (AI) ngay trên hệ thống nội bộ với các tập lệnh tối ưu hóa. Ultra 9 285K đảm bảo bạn luôn sẵn sàng cho kỷ nguyên công nghệ mới, giảm tải cho GPU và mang lại khả năng phản hồi tức thì cho các ứng dụng có tích hợp AI.</p>
    `,
    brand: "Intel",
    specs: {
      brand: "Intel",
      cpu: "Intel Core Ultra 9 285K",
    },
    cardSpecs: [
      { label: "Số nhân / luồng", value: "24 Nhân / 24 Luồng" },
      { label: "Xung nhịp tối đa", value: "5.7 GHz" },
      { label: "Socket", value: "LGA 1851" },
    ],
    detailSpecs: [
      { label: "Dòng CPU", value: "Core Ultra 9" },
      { label: "Socket", value: "LGA 1851" },
      { label: "Số nhân", value: "24 (8 P-Cores + 16 E-Cores)" },
      { label: "Số luồng", value: "24" },
      { label: "Xung cơ bản", value: "3.7 GHz (P-Core)" },
      { label: "Xung tối đa", value: "Up to 5.7 GHz" },
      { label: "Bộ nhớ đệm", value: "36 MB Intel Smart Cache" },
      { label: "Đồ họa tích hợp", value: "Intel Graphics" },
      { label: "TDP", value: "125W (Base) - 250W (Max Turbo)" },
      { label: "Kiến trúc", value: "Arrow Lake" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },
];