import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const mainboards = async (): Promise<Product[]> => {
  const CACHE_KEY = "mainboard_products_session";

  // 1. Kiểm tra SessionStorage trước (Tiết kiệm lượt Read Firebase)
  const cachedData = sessionStorage.getItem(CACHE_KEY);
  
  if (cachedData) {
    console.log("🔌 Lấy dữ liệu Mainboard từ Session Storage (0 Read)");
    return JSON.parse(cachedData) as Product[];
  }

  // 2. Nếu chưa có, mới gọi Firebase (Tốn Quota)
  console.warn("📡 Đang tải danh sách Mainboard từ Firebase...");
  try {
    const q = query(
      collection(db, "products"),
      where("category", "==", "mainboard") 
    );

    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];

    // 3. Lưu vào Session để tái sử dụng trong tab này
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(products));

    return products;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu mainboards:", error);
    return [];
  }
};


// export const mainboards: Product[] = [
//   {
//     id: "MB001",
//     slug: "bo-mach-chu-asus-rog-crosshair-x870e-extreme",
//     name: "Bo mạch chủ ASUS ROG CROSSHAIR X870E EXTREME (DDR5)",
//     category: "mainboard",
//     subcategory: "main_cpu_vga",
//     price: 32990000,
//     salePrice: 31990000,
//     stock: 10,
//     images: [
//       "/product_image/main_cpu_vga/bo_mach_chu_asus_rog/bo_mach_chu_asus_rog_x870e_extreme.jpg",
//       "/product_image/main_cpu_vga/bo_mach_chu_asus_rog/bo_mach_chu_asus_rog_01.jpg",
//       "/product_image/main_cpu_vga/bo_mach_chu_asus_rog/bo_mach_chu_asus_rog_02.jpg",
//       "/product_image/main_cpu_vga/bo_mach_chu_asus_rog/bo_mach_chu_asus_rog_03.jpg",
//       "/product_image/main_cpu_vga/bo_mach_chu_asus_rog/bo_mach_chu_asus_rog_04.jpg",
//       "/product_image/main_cpu_vga/bo_mach_chu_asus_rog/bo_mach_chu_asus_rog_05.jpg",
//     ],
//     shortDesc: "Siêu phẩm Mainboard X870E đầu bảng, tối ưu ép xung và tản nhiệt cho AMD Ryzen 9000 Series.",
//     description: `
//       <h3>Đỉnh cao bo mạch chủ AMD</h3>
//       <p>ASUS ROG CROSSHAIR X870E EXTREME là chiếc bo mạch chủ mang tính biểu tượng, được thiết kế để khai thác tối đa sức mạnh của các vi xử lý AMD Ryzen 9000 Series mới nhất. Sở hữu dàn phase nguồn (VRM) cực kỳ đồ sộ với các linh kiện chuẩn quân đội, bo mạch chủ này đảm bảo nguồn điện siêu sạch và ổn định, giúp các "phù thủy" ép xung (Overclocker) dễ dàng thiết lập những kỷ lục mới.</p>
      
//       <h3>Công nghệ tương lai hội tụ</h3>
//       <p>Sản phẩm dẫn đầu xu hướng công nghệ với sự góp mặt của chuẩn WiFi 7 siêu tốc, cổng USB4 kép 40Gbps và khe cắm PCIe 5.0 bọc thép cho card màn hình và ổ cứng SSD M.2. Đặc biệt, màn hình AniMe Matrix LED độc quyền trên tản nhiệt VRM cho phép bạn cá nhân hóa góc máy bằng các hình ảnh động mang đậm chất cá nhân.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Chipset", value: "AMD X870E" },
//       { label: "Socket", value: "AM5" },
//       { label: "Hỗ trợ RAM", value: "DDR5 (Ép xung tốc độ cao)" },
//     ],
//     detailSpecs: [
//       { label: "Chipset", value: "AMD X870E" },
//       { label: "Socket", value: "AM5 (Hỗ trợ AMD Ryzen 9000/8000/7000 Series)" },
//       { label: "Kích thước", value: "E-ATX" },
//       { label: "Hỗ trợ RAM", value: "4 x DIMM, Max. 192GB, DDR5" },
//       { label: "Khe PCIe", value: "2 x PCIe 5.0 x16 (Hỗ trợ x16 hoặc x8/x8)" },
//       { label: "Khe lưu trữ", value: "Lên đến 5 x M.2 (Gồm PCIe 5.0) và 4 x SATA 6Gb/s" },
//       { label: "Cổng kết nối", value: "2 x USB4 40Gbps (Type-C), nhiều cổng USB 10Gbps" },
//       { label: "Mạng LAN", value: "1x 5Gb Ethernet, 1x 2.5Gb Ethernet" },
//       { label: "Không dây", value: "Wi-Fi 7, Bluetooth 5.4" },
//       { label: "Âm thanh", value: "ROG SupremeFX 7.1 Surround Sound" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "MB002",
//     slug: "bo-mach-chu-gigabyte-z790-eagle-ax",
//     name: "Bo mạch chủ Gigabyte Z790 EAGLE AX",
//     category: "mainboard",
//     subcategory: "main_cpu_vga",
//     price: 6590000,
//     salePrice: 5890000,
//     stock: 10,
//     images: [
//       "/product_image/main_cpu_vga/bo_mach_chu_gigabyte_z790/bo_mach_chu_gigabyte_z790_eagle_ax.png",
//       "/product_image/main_cpu_vga/bo_mach_chu_gigabyte_z790/bo_mach_chu_gigabyte_z790_01.png",
//       "/product_image/main_cpu_vga/bo_mach_chu_gigabyte_z790/bo_mach_chu_gigabyte_z790_02.png",
//       "/product_image/main_cpu_vga/bo_mach_chu_gigabyte_z790/bo_mach_chu_gigabyte_z790_03.png",
//       "/product_image/main_cpu_vga/bo_mach_chu_gigabyte_z790/bo_mach_chu_gigabyte_z790_04.png",
//     ],
//     shortDesc: "Mainboard Intel Z790 tối ưu p/p, trang bị kết nối Wi-Fi và tản nhiệt nhôm khối.",
//     description: `
//       <h3>Nền tảng vững chắc cho Intel Core</h3>
//       <p>Gigabyte Z790 EAGLE AX mang đến một giải pháp hoàn hảo cho những người dùng muốn build PC sử dụng CPU Intel Core thế hệ 12, 13 và 14. Dàn VRM được làm mát bởi các khối tản nhiệt nhôm diện tích lớn, đảm bảo CPU luôn bung xõa hết sức mạnh mà không lo bị sụt giảm hiệu năng (throttling) do quá nhiệt.</p>
      
//       <h3>Tốc độ vượt trội với DDR5 và Wi-Fi 6E</h3>
//       <p>Bo mạch chủ hỗ trợ chuẩn bộ nhớ DDR5 mới nhất cùng các profile XMP để bạn dễ dàng đẩy xung nhịp RAM lên cao. Module kết nối không dây Wi-Fi 6E tích hợp giúp giảm thiểu độ trễ mạng khi chơi game online, đồng thời mang đến tốc độ tải file cực nhanh trên các băng tần ít bị nhiễu sóng.</p>
//     `,
//     brand: "GIGABYTE",
//     specs: {
//       brand: "GIGABYTE",
//     },
//     cardSpecs: [
//       { label: "Chipset", value: "Intel Z790" },
//       { label: "Socket", value: "LGA 1700" },
//       { label: "Kích thước", value: "ATX Form Factor" },
//     ],
//     detailSpecs: [
//       { label: "Chipset", value: "Intel Z790" },
//       { label: "Socket", value: "LGA 1700 (Hỗ trợ Intel Gen 12/13/14)" },
//       { label: "Kích thước", value: "ATX" },
//       { label: "Hỗ trợ RAM", value: "4 x DIMM, Max. 192GB, DDR5" },
//       { label: "Khe PCIe", value: "1 x PCIe 5.0 x16, các khe PCIe mở rộng khác" },
//       { label: "Khe lưu trữ", value: "3 x M.2 PCIe 4.0 x4, 4 x SATA 6Gb/s" },
//       { label: "Cổng kết nối", value: "USB Type-C 20Gbps, USB 3.2 Gen 2, HDMI, DP" },
//       { label: "Mạng LAN", value: "Realtek 2.5GbE LAN" },
//       { label: "Không dây", value: "Wi-Fi 6E, Bluetooth 5.3" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "MB003",
//     slug: "bo-mach-chu-msi-pro-a620m-b-evo",
//     name: "Bo mạch chủ MSI PRO A620M-B EVO",
//     category: "mainboard",
//     subcategory: "main_cpu_vga",
//     price: 2490000,
//     salePrice: 2290000,
//     stock: 10,
//     images: [
//       "/product_image/main_cpu_vga/bo_mach_chu_msi_pro_a620am/bo_mach_chu_msi_pro_a620am_b_evo.png",
//       "/product_image/main_cpu_vga/bo_mach_chu_msi_pro_a620am/bo_mach_chu_msi_pro_a620am_01.png",
//       "/product_image/main_cpu_vga/bo_mach_chu_msi_pro_a620am/bo_mach_chu_msi_pro_a620am_02.png",
//       "/product_image/main_cpu_vga/bo_mach_chu_msi_pro_a620am/bo_mach_chu_msi_pro_a620am_03.png",
//     ],
//     shortDesc: "Sự khởi đầu hoàn hảo với nền tảng AM5, bo mạch chủ bền bỉ chuẩn văn phòng và eSports.",
//     description: `
//       <h3>Tiếp cận nền tảng AM5 dễ dàng</h3>
//       <p>Thuộc phân khúc phổ thông của MSI, PRO A620M-B EVO là chiếc bo mạch chủ hoàn hảo để bước chân vào hệ sinh thái socket AM5 thế hệ mới của AMD với một mức giá vô cùng tiết kiệm. Sản phẩm đặc biệt thích hợp để lắp ráp các bộ máy tính văn phòng, học tập hoặc cấu hình chơi game eSports cơ bản.</p>
      
//       <h3>Thiết kế thực dụng, dễ dàng lắp đặt</h3>
//       <p>Sở hữu form chuẩn Micro-ATX (mATX) nhỏ gọn, chiếc mainboard này dễ dàng nằm gọn trong các thùng máy (case) nhỏ. Dù ở phân khúc giá rẻ, MSI vẫn trang bị khe cắm ổ cứng SSD M.2 tốc độ cao và chuẩn bộ nhớ DDR5, đáp ứng tốt nhu cầu truyền tải và xử lý dữ liệu hiện đại.</p>
//     `,
//     brand: "MSI",
//     specs: {
//       brand: "MSI",
//     },
//     cardSpecs: [
//       { label: "Chipset", value: "AMD A620" },
//       { label: "Socket", value: "AM5" },
//       { label: "Kích thước", value: "Micro-ATX" },
//     ],
//     detailSpecs: [
//       { label: "Chipset", value: "AMD A620" },
//       { label: "Socket", value: "AM5 (Hỗ trợ AMD Ryzen 7000/8000 Series)" },
//       { label: "Kích thước", value: "Micro-ATX" },
//       { label: "Hỗ trợ RAM", value: "2 x DIMM, Max. 96GB, DDR5" },
//       { label: "Khe PCIe", value: "1 x PCIe 4.0 x16, 1 x PCIe 3.0 x1" },
//       { label: "Khe lưu trữ", value: "1 x M.2 PCIe 4.0 x4, 4 x SATA 6Gb/s" },
//       { label: "Cổng kết nối", value: "USB 3.2 Gen 1, HDMI, VGA, cổng âm thanh" },
//       { label: "Mạng LAN", value: "Realtek Gigabit LAN (1Gbps)" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },
// ];