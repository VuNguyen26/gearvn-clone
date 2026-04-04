import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

// export const pcs = async (): Promise<Product[]> => {
//   const CACHE_KEY = "pc_products_session";
  
//   // Kiểm tra môi trường để tránh lỗi "sessionStorage is not defined" trên Server
//   const isBrowser = typeof window !== "undefined";

//   // 1. Kiểm tra Session Storage (Chỉ thực hiện ở Client)
//   if (isBrowser) {
//     const cachedData = sessionStorage.getItem(CACHE_KEY);
//     if (cachedData) {
//       // Nếu có, parse và trả về luôn (Tốn 0 lượt Read Firebase)
//       console.log("🚀 [PC] Lấy từ Session Storage (0 Read)");
//       return JSON.parse(cachedData) as Product[];
//     }
//   }

//   // 2. Nếu chưa có hoặc đang ở Server, mới gọi Firebase
//   try {
//     console.warn("🔥 [PC] Gọi Firebase để lấy dữ liệu (Tốn Quota)");
//     const q = query(
//       collection(db, "products"),
//       where("category", "==", "pc")
//     );
    
//     const snapshot = await getDocs(q);
//     const products = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data(),
//     })) as Product[];

//     // 3. Lưu vào Session Storage cho lần sau (Chỉ thực hiện ở Client)
//     if (isBrowser) {
//       sessionStorage.setItem(CACHE_KEY, JSON.stringify(products));
//     }
    
//     return products;
//   } catch (error) {
//     console.error("Lỗi khi fetch dữ liệu pcs:", error);
//     return [];
//   }
// };

export const pcs: Product[] = [
  {
    id: "PC001",
    slug: "pc-gvn-amd-r5-5600x-vga-rtx-5060",
    name: "PC GVN AMD R5-5600X/ VGA RTX 5060",
    category: "pc",
    subcategory: "pc",
    price: 24820000,
    salePrice: 23490000,
    stock: 10,
    images: [
      "/product_image/pc/pc_gvn_amd_r5/pc_gvn_amd_r5_5600x_rtx_5060.jpg",
      "/product_image/pc/pc_gvn_amd_r5/pc_gvn_amd_r5_01.png",
      "/product_image/pc/pc_gvn_amd_r5/pc_gvn_amd_r5_02.png",
      "/product_image/pc/pc_gvn_amd_r5/pc_gvn_amd_r5_03.png",
      "/product_image/pc/pc_gvn_amd_r5/pc_gvn_amd_r5_04.png",
      "/product_image/pc/pc_gvn_amd_r5/pc_gvn_amd_r5_05.png",
      "/product_image/pc/pc_gvn_amd_r5/pc_gvn_amd_r5_06.png",
    ],
    shortDesc: "Cấu hình quốc dân chiến mượt mọi tựa game eSports và AAA ở độ phân giải Full HD.",
    description: `
      <h3>Hiệu năng "Quốc Dân" từ AMD Ryzen 5</h3>
      <p>PC GVN AMD R5-5600X sử dụng bộ vi xử lý AMD Ryzen 5 5600X vô cùng nổi tiếng với 6 nhân 12 luồng. Xung nhịp boost lên đến 4.6GHz mang lại khả năng xử lý mượt mà cho mọi tác vụ từ làm việc đa nhiệm, render video nhẹ nhàng cho đến chiến các tựa game eSports hot nhất hiện nay như CS2, Valorant hay LMHT.</p>
      
      <h3>Đồ họa thế hệ mới RTX 5060</h3>
      <p>Kết hợp cùng "trái tim" AMD là chiếc Card đồ họa NVIDIA GeForce RTX 5060 kiến trúc Blackwell mới nhất. Sức mạnh vượt trội kết hợp công nghệ DLSS 4 và Ray Tracing thế hệ mới giúp bộ PC này dễ dàng chinh phục các tựa game AAA nặng ký ở thiết lập đồ họa cao (High/Ultra Settings) trên độ phân giải Full HD (1080p).</p>
    `,
    brand: "GVN",
    specs: {
      brand: "GVN",
    },
    cardSpecs: [
      { label: "CPU", value: "AMD Ryzen 5 5600X" },
      { label: "VGA", value: "GeForce RTX 5060 8GB" },
      { label: "RAM", value: "16GB DDR4 3200MHz" },
    ],
    detailSpecs: [
      { label: "CPU", value: "AMD Ryzen 5 5600X (6 Nhân / 12 Luồng)" },
      { label: "Mainboard", value: "B550M (Chipset AMD B550)" },
      { label: "RAM", value: "16GB (2x8GB) DDR4 3200MHz RGB" },
      { label: "VGA", value: "NVIDIA GeForce RTX 5060 8GB GDDR6" },
      { label: "SSD", value: "500GB PCIe NVMe Gen 4x4" },
      { label: "Nguồn (PSU)", value: "600W 80 Plus Bronze" },
      { label: "Vỏ Case", value: "M-ATX Gaming Kính cường lực" },
      { label: "Tản nhiệt", value: "Tản nhiệt khí tháp với Fan RGB" },
      { label: "Bảo hành", value: "36 Tháng (Linh kiện)" },
    ],
  },

  {
    id: "PC002",
    slug: "pc-gvn-intel-i5-12400f-vga-arc-b580",
    name: "PC GVN Intel i5-12400F/VGA ARC B580",
    category: "pc",
    subcategory: "pc",
    price: 23520000,
    salePrice: 21990000,
    stock: 10,
    images: [
      "/product_image/pc/pc_gvn_intel_i5_b580/pc_gvn_intel_i5_12400f_arc_b580.jpg",
      "/product_image/pc/pc_gvn_intel_i5_b580/pc_gvn_intel_i5_b580_01.jpg",
      "/product_image/pc/pc_gvn_intel_i5_b580/pc_gvn_intel_i5_b580_02.jpg",
      "/product_image/pc/pc_gvn_intel_i5_b580/pc_gvn_intel_i5_b580_03.jpg",
      "/product_image/pc/pc_gvn_intel_i5_b580/pc_gvn_intel_i5_b580_04.jpg",
      "/product_image/pc/pc_gvn_intel_i5_b580/pc_gvn_intel_i5_b580_05.png",
      "/product_image/pc/pc_gvn_intel_i5_b580/pc_gvn_intel_i5_b580_06.jpg",
      "/product_image/pc/pc_gvn_intel_i5_b580/pc_gvn_intel_i5_b580_07.png",
    ],
    shortDesc: "Cỗ máy tối ưu P/P (Giá thành/Hiệu năng), đồ họa Intel Battlemage thế hệ mới.",
    description: `
      <h3>Sự kết hợp hoàn hảo từ hệ sinh thái Intel</h3>
      <p>Bộ PC GVN mang đến sự ổn định tuyệt đối nhờ sự kết hợp đồng bộ giữa vi xử lý Intel Core i5-12400F (6 nhân 12 luồng) và chiếc card màn hình Intel ARC B580 thế hệ Battlemage mới nhất. Đây là cấu hình cực kỳ lý tưởng cho người dùng tìm kiếm hiệu năng ổn định để học tập, làm việc văn phòng và thiết kế 2D/3D cơ bản.</p>
      
      <h3>Sức mạnh từ Intel ARC B580</h3>
      <p>Intel ARC B580 8GB mang lại sức mạnh đồ họa bứt phá trong phân khúc tầm trung. Với công nghệ nâng cấp hình ảnh XeSS độc quyền của Intel, bộ máy có thể đẩy mức FPS lên cao mà vẫn giữ được độ sắc nét ấn tượng, mang lại những giờ phút giải trí mượt mà trong các tựa game MOBA hay game thế giới mở.</p>
    `,
    brand: "GVN",
    specs: {
      brand: "GVN",
    },
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5 12400F" },
      { label: "VGA", value: "Intel ARC B580 8GB" },
      { label: "RAM", value: "16GB DDR4 3200MHz" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-12400F (6 Nhân / 12 Luồng)" },
      { label: "Mainboard", value: "B760M (Chipset Intel B760)" },
      { label: "RAM", value: "16GB (2x8GB) DDR4 3200MHz" },
      { label: "VGA", value: "Intel ARC B580 8GB GDDR6" },
      { label: "SSD", value: "500GB PCIe NVMe" },
      { label: "Nguồn (PSU)", value: "600W 80 Plus Standard" },
      { label: "Vỏ Case", value: "M-ATX Gaming Kính cường lực" },
      { label: "Tản nhiệt", value: "Tản nhiệt khí tháp CR-1000" },
      { label: "Bảo hành", value: "36 Tháng (Linh kiện)" },
    ],
  },

  {
    id: "PC003",
    slug: "pc-gvn-intel-i7-14700f-vga-rtx-5080",
    name: "PC GVN Intel i7-14700F/ VGA RTX 5080",
    category: "pc",
    subcategory: "pc",
    price: 79420000,
    salePrice: 77490000,
    stock: 10,
    images: [
      "/product_image/pc/pc_gvn_intel_i7/pc_gvn_intel_i7_14700_rtx_5080.jpg",
      "/product_image/pc/pc_gvn_intel_i7/pc_gvn_intel_i7_01.jpg",
      "/product_image/pc/pc_gvn_intel_i7/pc_gvn_intel_i7_02.jpg",
      "/product_image/pc/pc_gvn_intel_i7/pc_gvn_intel_i7_03.jpg",
      "/product_image/pc/pc_gvn_intel_i7/pc_gvn_intel_i7_04.jpg",
      "/product_image/pc/pc_gvn_intel_i7/pc_gvn_intel_i7_05.jpg",
      "/product_image/pc/pc_gvn_intel_i7/pc_gvn_intel_i7_06.jpg",
    ],
    shortDesc: "Siêu phẩm High-End PC, sức mạnh hủy diệt cho độ phân giải 4K và làm việc chuyên nghiệp.",
    description: `
      <h3>Quyền năng đa nhiệm Core i7 Gen 14</h3>
      <p>Trang bị vi xử lý Intel Core i7-14700F với 20 nhân 28 luồng, cỗ máy tính này là một con quái vật thực sự trong việc xử lý đa nhiệm. Dù bạn đang render một đoạn video 4K dài bằng Premiere Pro, hay chạy các ứng dụng giả lập phức tạp, hệ thống vẫn đáp ứng cực kỳ trơn tru và nhanh chóng.</p>
      
      <h3>Cảnh giới đồ họa mới: RTX 5080</h3>
      <p>Lắp sẵn siêu card đồ họa NVIDIA GeForce RTX 5080 16GB, hệ thống sẵn sàng nghiền nát mọi tựa game bom tấn hiện nay (như Cyberpunk 2077, Black Myth Wukong) ở độ phân giải 4K với mức thiết lập đồ họa cao nhất (Ultra Setting + Ray Tracing). Không gian RAM 32GB DDR5 cùng SSD 1TB Gen 4 tốc độ cao loại bỏ hoàn toàn tình trạng giật lag hay nghẽn cổ chai dữ liệu.</p>
    `,
    brand: "GVN",
    specs: {
      brand: "GVN",
    },
    cardSpecs: [
      { label: "CPU", value: "Intel Core i7 14700F" },
      { label: "VGA", value: "GeForce RTX 5080 16GB" },
      { label: "RAM", value: "32GB DDR5 5600MHz" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i7-14700F (20 Nhân / 28 Luồng)" },
      { label: "Mainboard", value: "Z790 (Chipset Intel Z790 DDR5)" },
      { label: "RAM", value: "32GB (2x16GB) DDR5 5600MHz RGB" },
      { label: "VGA", value: "NVIDIA GeForce RTX 5080 16GB GDDR7" },
      { label: "SSD", value: "1TB PCIe NVMe Gen 4x4" },
      { label: "Nguồn (PSU)", value: "850W 80 Plus Gold (Chuẩn ATX 3.0)" },
      { label: "Vỏ Case", value: "Mid-Tower Bể cá 2 mặt kính" },
      { label: "Tản nhiệt", value: "Tản nhiệt nước AIO 360mm ARGB" },
      { label: "Bảo hành", value: "36 Tháng (Linh kiện)" },
    ],
  },

  {
    id: "PC004",
    slug: "pc-gvn-intel-ultra-5-225f-vga-rtx-5060-ddr5",
    name: "PC GVN Intel Ultra 5 225F/VGA RTX 5060 (DDR5)",
    category: "pc",
    subcategory: "pc",
    price: 31020000,
    salePrice: 29490000,
    stock: 10,
    images: [
      "/product_image/pc/pc_gvn_intel_ultra_5/pc_gvn_intel_ultra_5_225f_rtx_5060.jpg",
      "/product_image/pc/pc_gvn_intel_ultra_5/pc_gvn_intel_ultra_5_01.jpg",
      "/product_image/pc/pc_gvn_intel_ultra_5/pc_gvn_intel_ultra_5_02.jpg",
      "/product_image/pc/pc_gvn_intel_ultra_5/pc_gvn_intel_ultra_5_03.jpg",
      "/product_image/pc/pc_gvn_intel_ultra_5/pc_gvn_intel_ultra_5_04.jpg",
      "/product_image/pc/pc_gvn_intel_ultra_5/pc_gvn_intel_ultra_5_05.jpg",
      "/product_image/pc/pc_gvn_intel_ultra_5/pc_gvn_intel_u5-06.png",
    ],
    shortDesc: "Đón đầu tương lai với kiến trúc Arrow Lake, chuẩn RAM DDR5 siêu tốc.",
    description: `
      <h3>Tiên phong công nghệ Core Ultra</h3>
      <p>Được xây dựng trên nền tảng vi xử lý Intel Core Ultra 5 225F thế hệ Arrow Lake hoàn toàn mới, hệ thống mang đến một bước tiến dài về hiệu suất xử lý lệnh và khả năng tiết kiệm điện năng. Nhiệt độ cực kỳ mát mẻ giúp bộ máy hoạt động bền bỉ, đáp ứng xuất sắc nhu cầu từ thiết kế đồ họa 2D/3D cho tới giải trí cường độ cao.</p>
      
      <h3>Chuẩn DDR5 và RTX 5060 mới nhất</h3>
      <p>Cấu hình được trang bị bộ nhớ RAM DDR5 thế hệ mới băng thông cực lớn, đi kèm card đồ họa RTX 5060 tiên tiến. Bộ đôi này xử lý mượt mà các bài toán biên tập video nặng, cũng như cung cấp chỉ số FPS cực ổn định cho trải nghiệm chơi game ở độ phân giải FHD và 2K (1440p).</p>
    `,
    brand: "GVN",
    specs: {
      brand: "GVN",
    },
    cardSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 225F" },
      { label: "VGA", value: "GeForce RTX 5060 8GB" },
      { label: "RAM", value: "16GB DDR5 5200MHz" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 225F (10 Nhân / 10 Luồng)" },
      { label: "Mainboard", value: "B860M (Socket LGA 1851)" },
      { label: "RAM", value: "16GB (1x16GB) DDR5 5200MHz" },
      { label: "VGA", value: "NVIDIA GeForce RTX 5060 8GB GDDR6" },
      { label: "SSD", value: "500GB PCIe NVMe Gen 4x4" },
      { label: "Nguồn (PSU)", value: "650W 80 Plus Bronze" },
      { label: "Vỏ Case", value: "M-ATX Gaming thoáng khí" },
      { label: "Tản nhiệt", value: "Tản nhiệt khí tháp hiệu năng cao" },
      { label: "Bảo hành", value: "36 Tháng (Linh kiện)" },
    ],
  },
];