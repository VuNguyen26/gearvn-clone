import { Product } from "@/types/product";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const vgas = async (): Promise<Product[]> => {
  const CACHE_KEY = "vga_products_cache"; // Phải duy nhất cho mỗi file
  const isBrowser = typeof window !== "undefined";
  // 1. Chống lỗi Next.js SSR
  if (isBrowser) {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) return JSON.parse(cached);
  }
  // 2. Fetch Firebase
  try {
    const q = query(collection(db, "products"), where("category", "==", "vga"));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
    // 3. Lưu cache ở Client
    if (isBrowser) {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(products));
    }
    return products;
  } catch (error) {
    console.error("Lỗi fetch vgas:", error);
    return [];
  }
};


// export const vgas: Product[] = [
//   {
//     id: "VGA001",
//     slug: "card-man-hinh-asus-rog-astral-geforce-rtx-5080-16gb",
//     name: "Card màn hình ASUS ROG Astral GeForce RTX 5080 16GB",
//     category: "vga",
//     subcategory: "main_cpu_vga",
//     price: 32990000,
//     salePrice: 28990000,
//     stock: 10,
//     images: [
//       "/product_image/main_cpu_vga/card_hinh_asus_rog_astral_geforce_rtx/card_hinh_asus_rog_astral_geforce_rtx_5080_16gb.png",
//       "/product_image/main_cpu_vga/card_hinh_asus_rog_astral_geforce_rtx/card_hinh_asus_rog_astral_geforce_rtx_01.png",
//       "/product_image/main_cpu_vga/card_hinh_asus_rog_astral_geforce_rtx/card_hinh_asus_rog_astral_geforce_rtx_02.png",
//       "/product_image/main_cpu_vga/card_hinh_asus_rog_astral_geforce_rtx/card_hinh_asus_rog_astral_geforce_rtx_03.png",
//       "/product_image/main_cpu_vga/card_hinh_asus_rog_astral_geforce_rtx/card_hinh_asus_rog_astral_geforce_rtx_04.png",
//       "/product_image/main_cpu_vga/card_hinh_asus_rog_astral_geforce_rtx/card_hinh_asus_rog_astral_geforce_rtx_05.png",
//     ],
//     shortDesc:
//       "Card đồ họa cao cấp thế hệ mới, bứt phá giới hạn gaming 4K và sáng tạo nội dung chuyên nghiệp.",
//     description: `
//       <h3>Thiết kế ROG Astral đẳng cấp</h3>
//       <p>ASUS ROG Astral GeForce RTX 5080 16GB mang đến một diện mạo hoàn toàn mới với thiết kế hầm hố, đậm chất tương lai. Tích hợp hệ thống LED Aura Sync ARGB rực rỡ, bạn có thể dễ dàng đồng bộ ánh sáng với toàn bộ hệ sinh thái linh kiện ROG, biến góc máy của bạn thành một tác phẩm nghệ thuật thực sự.</p>
      
//       <h3>Hiệu năng kiến trúc Blackwell đột phá</h3>
//       <p>Sức mạnh từ kiến trúc NVIDIA Blackwell mới nhất kết hợp cùng dung lượng VRAM 16GB chuẩn GDDR7 siêu tốc giúp ROG Astral RTX 5080 dễ dàng chinh phục mọi tựa game AAA ở độ phân giải 4K với mức thiết lập đồ họa tối đa. Các công nghệ DLSS thế hệ mới và Ray Tracing được nâng cấp mang lại hình ảnh chân thực và mức FPS mượt mà đến khó tin.</p>
      
//       <h3>Tản nhiệt tối ưu, hoạt động bền bỉ</h3>
//       <p>Hệ thống tản nhiệt được nâng cấp với 3 quạt Axial-tech thế hệ mới, tối ưu hóa luồng khí và áp suất tĩnh. Kết hợp với khối heatsink khổng lồ và công nghệ tản nhiệt buồng hơi (Vapor Chamber), card luôn giữ được mức nhiệt độ lý tưởng ngay cả khi phải xử lý các tác vụ render 3D nặng nề trong thời gian dài.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//       gpu: "RTX 5080",
//     },
//     cardSpecs: [
//       { label: "GPU", value: "GeForce RTX 5080" },
//       { label: "VRAM", value: "16GB GDDR7" },
//       { label: "Nguồn đề nghị", value: "850W" },
//     ],
//     detailSpecs: [
//       { label: "GPU", value: "NVIDIA GeForce RTX 5080" },
//       { label: "Bộ nhớ đồ họa", value: "16GB" },
//       { label: "Loại bộ nhớ", value: "GDDR7" },
//       { label: "Bus bộ nhớ", value: "256-bit" },
//       { label: "Xung nhịp", value: "2650 MHz (Boost Clock)" },
//       { label: "Số nhân xử lý", value: "10752 CUDA Cores" },
//       { label: "Cổng xuất hình", value: "3x DisplayPort 2.1a, 1x HDMI 2.1a" },
//       { label: "Nguồn phụ", value: "1x 16-pin (12V-2x6)" },
//       { label: "Nguồn đề nghị", value: "850W" },
//       { label: "Kích thước", value: "340 x 150 x 75 mm" },
//       { label: "Tản nhiệt", value: "3 Quạt Axial-tech, Vapor Chamber" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "VGA002",
//     slug: "card-man-hinh-gigabyte-geforce-rtx-5060-windforce-max-oc",
//     name: "Card màn hình Gigabyte GeForce RTX 5060 WINDFORCE MAX OC",
//     category: "vga",
//     subcategory: "main_cpu_vga",
//     price: 11990000,
//     salePrice: 10990000,
//     stock: 10,
//     images: [
//       "/product_image/main_cpu_vga/card_man_hinh_gigabyte_geforce_rtx/card_man_hinh_gigabyte_geforce_rtx_5060_windforce_max_oc.png",
//       "/product_image/main_cpu_vga/card_man_hinh_gigabyte_geforce_rtx/card_man_hinh_gigabyte_geforce_rtx_01.png",
//       "/product_image/main_cpu_vga/card_man_hinh_gigabyte_geforce_rtx/card_man_hinh_gigabyte_geforce_rtx_02.png",
//       "/product_image/main_cpu_vga/card_man_hinh_gigabyte_geforce_rtx/card_man_hinh_gigabyte_geforce_rtx_03.png",
//       "/product_image/main_cpu_vga/card_man_hinh_gigabyte_geforce_rtx/card_man_hinh_gigabyte_geforce_rtx_04.png",
//       "/product_image/main_cpu_vga/card_man_hinh_gigabyte_geforce_rtx/card_man_hinh_gigabyte_geforce_rtx_05.png",
//     ],
//     shortDesc:
//       "Lựa chọn quốc dân cho cấu hình PC Gaming 1080p và 1440p, hệ thống tản nhiệt 3 quạt siêu mát.",
//     description: `
//       <h3>Hiệu năng "Quốc dân" thế hệ mới</h3>
//       <p>Kế thừa ngôi vương của dòng card tầm trung, Gigabyte GeForce RTX 5060 WINDFORCE MAX OC được tối ưu hóa xung nhịp từ nhà máy (OC Edition), mang lại hiệu suất vượt trội cho các tựa game eSports và game AAA ở độ phân giải FHD và 2K. Công nghệ Frame Generation mới nhất của NVIDIA giúp fps luôn ổn định ở mức cao.</p>
      
//       <h3>Hệ thống làm mát WINDFORCE MAX</h3>
//       <p>Dù là dòng card tầm trung, Gigabyte vẫn trang bị hệ thống tản nhiệt WINDFORCE cao cấp với 3 quạt thiết kế cánh độc quyền, quay luân phiên giúp giảm nhiễu loạn luồng khí và tăng áp suất làm mát. Tính năng 3D Active Fan sẽ tự động dừng quạt khi card ở tải thấp, mang lại không gian yên tĩnh tuyệt đối cho bạn tập trung làm việc hoặc giải trí.</p>

//       <h3>Bền bỉ và linh kiện cao cấp</h3>
//       <p>Sử dụng linh kiện cuộn cảm kim loại cao cấp, tụ điện rắn ESR thấp và PCB đồng 2oz, card đảm bảo độ ổn định nguồn điện tuyệt đối, kéo dài tuổi thọ sản phẩm. Mặt lưng được trang bị tấm backplate kim loại cứng cáp, vừa bảo vệ linh kiện vừa tăng tính thẩm mỹ cho tổng thể dàn PC của bạn.</p>
//     `,
//     brand: "GIGABYTE",
//     specs: {
//       brand: "GIGABYTE",
//       gpu: "RTX 5060",
//     },
//     cardSpecs: [
//       { label: "GPU", value: "GeForce RTX 5060" },
//       { label: "VRAM", value: "8GB GDDR6" },
//       { label: "Tản nhiệt", value: "3 Quạt WINDFORCE" },
//     ],
//     detailSpecs: [
//       { label: "GPU", value: "NVIDIA GeForce RTX 5060" },
//       { label: "Bộ nhớ đồ họa", value: "8GB" },
//       { label: "Loại bộ nhớ", value: "GDDR6" },
//       { label: "Bus bộ nhớ", value: "128-bit" },
//       { label: "Xung nhịp", value: "2550 MHz (OC Mode)" },
//       { label: "Số nhân xử lý", value: "4608 CUDA Cores" },
//       { label: "Cổng xuất hình", value: "2x DisplayPort 2.1a, 2x HDMI 2.1a" },
//       { label: "Nguồn phụ", value: "1x 8-pin" },
//       { label: "Nguồn đề nghị", value: "550W" },
//       { label: "Kích thước", value: "272 x 115 x 40 mm" },
//       { label: "Tản nhiệt", value: "Hệ thống tản nhiệt WINDFORCE 3 quạt" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "VGA003",
//     slug: "card-man-hinh-zotac-geforce-rtx-5060-ti-8gb",
//     name: "Card màn hình Zotac GeForce RTX 5060 Ti 8GB",
//     category: "vga",
//     subcategory: "main_cpu_vga",
//     price: 9990000,
//     salePrice: 9690000,
//     stock: 10,
//     images: [
//       "/product_image/main_cpu_vga/card_man_hinh_zotac_geforce_rtx_5060/card_man_hinh_zotac_geforce_rtx_5060_ti_8g.png",
//       "/product_image/main_cpu_vga/card_man_hinh_zotac_geforce_rtx_5060/card_man_hinh_zotac_geforce_rtx_5060_01.png",
//       "/product_image/main_cpu_vga/card_man_hinh_zotac_geforce_rtx_5060/card_man_hinh_zotac_geforce_rtx_5060_02.png",
//       "/product_image/main_cpu_vga/card_man_hinh_zotac_geforce_rtx_5060/card_man_hinh_zotac_geforce_rtx_5060_03.png",
//       "/product_image/main_cpu_vga/card_man_hinh_zotac_geforce_rtx_5060/card_man_hinh_zotac_geforce_rtx_5060_04.png",
//       "/product_image/main_cpu_vga/card_man_hinh_zotac_geforce_rtx_5060/card_man_hinh_zotac_geforce_rtx_5060_05.png",
//     ],
//     shortDesc:
//       "Thiết kế nhỏ gọn, tối ưu không gian nhưng vẫn mang lại sức mạnh đồ họa đỉnh cao cho độ phân giải 2K.",
//     description: `
//       <h3>Thiết kế Aerodynamic tinh tế</h3>
//       <p>Zotac GeForce RTX 5060 Ti 8GB sở hữu ngôn ngữ thiết kế bo tròn khí động học (Aerodynamic) đặc trưng, vô cùng nhỏ gọn và tinh tế. Đây là sự lựa chọn hoàn hảo cho các hệ thống PC Mini-ITX hoặc những góc máy đề cao sự tối giản nhưng không muốn thỏa hiệp về mặt hiệu năng.</p>
      
//       <h3>Tản nhiệt IceStorm 2.0 cải tiến</h3>
//       <p>Hệ thống làm mát IceStorm 2.0 tiên tiến với bộ đôi quạt kích thước lớn, kết hợp với các ống dẫn nhiệt bằng đồng được tinh chỉnh giúp phân tán nhiệt lượng hiệu quả nhất. Tính năng FREEZE Fan Stop tự động ngắt quạt khi hoạt động nhẹ để giảm tiếng ồn, đồng thời phần mềm FireStorm cho phép bạn tùy biến toàn quyền tốc độ quạt theo ý muốn.</p>

//       <h3>Sức mạnh lý tưởng cho độ phân giải 1440p</h3>
//       <p>Với hiệu năng mạnh mẽ từ dòng Ti thế hệ mới, Zotac RTX 5060 Ti dễ dàng đáp ứng mượt mà trải nghiệm gaming ở độ phân giải 1440p. Công cụ mã hóa phần cứng AV1 mới nhất cũng biến chiếc card này trở thành trợ thủ đắc lực cho các streamer và content creator với chất lượng hình ảnh vượt trội ở mức băng thông thấp.</p>
//     `,
//     brand: "Zotac",
//     specs: {
//       brand: "Zotac",
//       gpu: "RTX 5060 Ti",
//     },
//     cardSpecs: [
//       { label: "GPU", value: "GeForce RTX 5060 Ti" },
//       { label: "VRAM", value: "8GB GDDR6" },
//       { label: "Kích thước", value: "Nhỏ gọn, phù hợp case ITX" },
//     ],
//     detailSpecs: [
//       { label: "GPU", value: "NVIDIA GeForce RTX 5060 Ti" },
//       { label: "Bộ nhớ đồ họa", value: "8GB" },
//       { label: "Loại bộ nhớ", value: "GDDR6" },
//       { label: "Bus bộ nhớ", value: "128-bit" },
//       { label: "Xung nhịp", value: "2600 MHz" },
//       { label: "Số nhân xử lý", value: "6144 CUDA Cores" },
//       { label: "Cổng xuất hình", value: "3x DisplayPort 2.1a, 1x HDMI 2.1a" },
//       { label: "Nguồn phụ", value: "1x 8-pin" },
//       { label: "Nguồn đề nghị", value: "600W" },
//       { label: "Kích thước", value: "225 x 116 x 40 mm" },
//       { label: "Tản nhiệt", value: "IceStorm 2.0 (2 Quạt)" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },
// ];