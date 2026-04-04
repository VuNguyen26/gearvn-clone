import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const handheldConsoles = async (): Promise<Product[]> => {
  const CACHE_KEY = "handheld_console_products_session";
  
  // KIỂM TRA: Chỉ dùng sessionStorage nếu đang ở trình duyệt (Client)
  const isBrowser = typeof window !== "undefined";

  // 1. Kiểm tra SessionStorage trước (Chỉ thực hiện ở Client)
  if (isBrowser) {
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    if (cachedData) {
      console.log("🎮 [Handheld] Lấy từ Session Storage (0 Read)");
      return JSON.parse(cachedData) as Product[];
    }
  }

  // 2. Nếu chưa có hoặc đang ở Server, mới thực hiện gọi Firebase
  try {
    console.warn("📡 [Handheld] Đang tải danh sách từ Firebase...");
    const q = query(
      collection(db, "products"),
      where("category", "==", "handheld_console") 
    );

    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];

    // 3. Lưu vào Session để dùng lại (Chỉ thực hiện ở Client)
    if (isBrowser) {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(products));
    }

    return products;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu handheldConsoles:", error);
    return [];
  }
};

// export const handheldConsoles: Product[] = [
//   {
//     id: "HHC001",
//     slug: "tay-cam-dareu-h101x",
//     name: "Tay cầm DareU H101X",
//     category: "handheld_console",
//     subcategory: "handheld_console",
//     price: 700000,
//     salePrice: 590000,
//     stock: 20,
//     images: [
//       "/product_image/handheld_console/handheld_console_dareu_h101x/handheld_console_dareu_h101x.png",
//       "/product_image/handheld_console/handheld_console_dareu_h101x/handheld_console_dareu_h101x_01.png",
//       "/product_image/handheld_console/handheld_console_dareu_h101x/handheld_console_dareu_h101x_02.png",
//       "/product_image/handheld_console/handheld_console_dareu_h101x/handheld_console_dareu_h101x_03.png",
//       "/product_image/handheld_console/handheld_console_dareu_h101x/handheld_console_dareu_h101x_04.png",
//     ],
//     shortDesc: "Tay cầm chơi game thiết kế gọn nhẹ, kết nối Bluetooth 5.0, phù hợp giải trí đa nền tảng.",
//     description: `
//       <h3>Thiết kế công thái học gọn nhẹ</h3>
//       <p>DareU H101X sở hữu thiết kế bo tròn mềm mại, kích thước gọn gàng giúp ôm sát lòng bàn tay, hạn chế tình trạng mỏi khi cầm nắm trong thời gian dài. Nút bấm được tinh chỉnh với hành trình phím vừa phải, cho cảm giác nhấn nảy và cực kỳ êm ái.</p>
      
//       <h3>Kết nối không dây tiện lợi</h3>
//       <p>Sử dụng công nghệ kết nối Bluetooth 5.0, H101X mang đến sự tự do tuyệt đối mà không bị vướng víu bởi dây cáp. Thiết bị dễ dàng kết nối và tương thích hoàn hảo với PC, Laptop, điện thoại Android và cả Nintendo Switch.</p>
//     `,
//     brand: "DareU",
//     specs: {
//       brand: "DareU",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Bluetooth 5.0 / Có dây" },
//       { label: "Tương thích", value: "PC, Android, Switch" },
//       { label: "Pin", value: "Sử dụng đến 20 giờ" },
//     ],
//     detailSpecs: [
//       { label: "Loại thiết bị", value: "Gamepad Không Dây" },
//       { label: "Kết nối", value: "Bluetooth 5.0 / USB Type-C" },
//       { label: "Tương thích", value: "Windows PC, Android, Nintendo Switch" },
//       { label: "Rung", value: "Motor rung kép (Dual Vibration)" },
//       { label: "Dung lượng pin", value: "600 mAh" },
//       { label: "Thời lượng pin", value: "Khoảng 20 giờ sử dụng" },
//       { label: "Trọng lượng", value: "205g" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "HHC002",
//     slug: "tay-cam-dareu-h105",
//     name: "Tay cầm DareU H105 Wireless",
//     category: "handheld_console",
//     subcategory: "handheld_console",
//     price: 790000,
//     salePrice: 650000,
//     stock: 18,
//     images: [
//       "/product_image/handheld_console/handheld_console_dareu_h105/handheld_console_dareu_h105.png",
//       "/product_image/handheld_console/handheld_console_dareu_h105/handheld_console_dareu_h105_01.jpg",
//       "/product_image/handheld_console/handheld_console_dareu_h105/handheld_console_dareu_h105_02.jpg",
//       "/product_image/handheld_console/handheld_console_dareu_h105/handheld_console_dareu_h105_03.jpg",
//       "/product_image/handheld_console/handheld_console_dareu_h105/handheld_console_dareu_h105_04.jpg",
//     ],
//     shortDesc: "Tay cầm không dây có LED RGB, Joystick 360 độ chính xác, mang lại trải nghiệm chiến game đỉnh cao.",
//     description: `
//       <h3>Ngoại hình đậm chất Gaming</h3>
//       <p>DareU H105 Wireless gây ấn tượng mạnh với dải đèn LED RGB chạy dọc viền tay cầm, mang đến hiệu ứng thị giác cực kỳ bắt mắt, đặc biệt khi chơi game trong không gian tối. Vỏ nhựa nhám chống bám mồ hôi giúp bạn luôn giữ được sự chắc chắn trong những pha xử lý căng thẳng.</p>
      
//       <h3>Trải nghiệm điều khiển chính xác</h3>
//       <p>Được trang bị cần Analog (Joystick) 360 độ không điểm mù, mọi chuyển động nhân vật hay góc cam trong game đều được tái hiện mượt mà. Động cơ rung kép không đối xứng mang lại phản hồi lực chân thực cho từng cú va chạm hay cháy nổ.</p>
//     `,
//     brand: "DareU",
//     specs: {
//       brand: "DareU",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Wireless 2.4G / Type-C" },
//       { label: "Tương thích", value: "PC Windows" },
//       { label: "Đèn nền", value: "LED RGB" },
//     ],
//     detailSpecs: [
//       { label: "Loại thiết bị", value: "Gamepad Không Dây" },
//       { label: "Kết nối", value: "Wireless 2.4Ghz (Dongle) / Cáp Type-C" },
//       { label: "Tương thích", value: "Windows PC (X-Input, D-Input)" },
//       { label: "Rung", value: "Rung kép Asymmetric" },
//       { label: "Dung lượng pin", value: "930 mAh" },
//       { label: "Đèn nền", value: "LED RGB đa dải màu" },
//       { label: "Trọng lượng", value: "210g" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "HHC003",
//     slug: "may-choi-game-lenovo-legion-go",
//     name: "Máy chơi Game cầm tay Lenovo Legion GO",
//     category: "handheld_console",
//     subcategory: "handheld_console",
//     price: 22990000,
//     salePrice: 22990000,
//     stock: 8,
//     images: [
//       "/product_image/handheld_console/handheld_console_lenovo_legion_go/handheld_console_lenovo_legion_go.png",
//       "/product_image/handheld_console/handheld_console_lenovo_legion_go/handheld_console_lenovo_legion_go_01.png",
//       "/product_image/handheld_console/handheld_console_lenovo_legion_go/handheld_console_lenovo_legion_go_02.png",
//       "/product_image/handheld_console/handheld_console_lenovo_legion_go/handheld_console_lenovo_legion_go_03.png",
//       "/product_image/handheld_console/handheld_console_lenovo_legion_go/handheld_console_lenovo_legion_go_04.png",
//       "/product_image/handheld_console/handheld_console_lenovo_legion_go/handheld_console_lenovo_legion_go_05.png",
//       "/product_image/handheld_console/handheld_console_lenovo_legion_go/handheld_console_lenovo_legion_go_06.png",
//     ],
//     shortDesc: "Siêu phẩm Handheld PC màn hình 8.8 inch 144Hz, tay cầm tháo rời độc đáo.",
//     description: `
//       <h3>Màn hình lớn nhất thế giới Handheld PC</h3>
//       <p>Lenovo Legion GO định nghĩa lại trải nghiệm chơi game di động với màn hình Lenovo PureSight khổng lồ lên đến 8.8 inch. Độ phân giải 2K+ (QHD+) cùng tần số quét 144Hz mang đến khung hình rực rỡ, sắc nét và siêu mượt mà, vượt trội hoàn toàn so với các đối thủ cùng phân khúc.</p>
      
//       <h3>Sức mạnh từ AMD Ryzen Z1 Extreme</h3>
//       <p>Sở hữu sức mạnh phần cứng "khủng long" nhờ vi xử lý AMD Ryzen Z1 Extreme, Legion GO đủ sức "cân" mượt mà các tựa game AAA hạng nặng dành cho hệ máy PC. Chạy sẵn hệ điều hành Windows 11, thiết bị có khả năng tương thích với mọi nền tảng phân phối game như Steam, Epic Games hay Xbox Game Pass.</p>

//       <h3>Tay cầm TrueStrike tháo rời đột phá</h3>
//       <p>Lấy cảm hứng từ Nintendo Switch, tay cầm TrueStrike của Legion GO có khả năng tháo rời linh hoạt. Cùng với chân đế tích hợp phía sau máy (Kickstand), bạn có thể đặt máy lên bàn và thư giãn hoàn toàn trên ghế sofa. Tay cầm phải còn có thể biến thành một con chuột quang học để thao tác trong các tựa game FPS đầy tính sáng tạo.</p>
//     `,
//     brand: "Lenovo",
//     specs: {
//       brand: "Lenovo",
//     },
//     cardSpecs: [
//       { label: "Màn hình", value: "8.8 inch QHD+ 144Hz" },
//       { label: "CPU", value: "AMD Ryzen Z1 Extreme" },
//       { label: "Bộ nhớ", value: "16GB RAM / 512GB SSD" },
//     ],
//     detailSpecs: [
//       { label: "Loại thiết bị", value: "Handheld Gaming PC" },
//       { label: "Màn hình", value: "8.8 inch QHD+ (2560x1600), 144Hz, IPS 500 nits" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "CPU", value: "AMD Ryzen™ Z1 Extreme (8-core, 16-thread)" },
//       { label: "GPU", value: "AMD Radeon™ Graphics (AMD RDNA™ 3)" },
//       { label: "RAM", value: "16GB LPDDR5x 7500Mhz" },
//       { label: "Bộ nhớ", value: "512GB PCIe 4.0 NVMe M.2 SSD" },
//       { label: "Pin", value: "49.2Whr (Máy) + 900mAh (Mỗi tay cầm)" },
//       { label: "Cổng kết nối", value: "2x USB Type-C (USB 4.0 / DP 1.4), MicroSD, Audio Jack" },
//       { label: "Trọng lượng", value: "854g (Kèm tay cầm)" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "HHC004",
//     slug: "vo-lang-logitech-driving-force-g29",
//     name: "Tay cầm Logitech Driving G29 Driving Force",
//     category: "handheld_console",
//     subcategory: "handheld_console",
//     price: 7990000,
//     salePrice: 6690000,
//     stock: 10,
//     images: [
//       "/product_image/handheld_console/handheld_console_logitech_driving_g29/handheld_console_logitech_driving_g29.jpg",
//       "/product_image/handheld_console/handheld_console_logitech_driving_g29/handheld_console_logitech_driving_g29_01.jpg",
//       "/product_image/handheld_console/handheld_console_logitech_driving_g29/handheld_console_logitech_driving_g29_02.jpg",
//       "/product_image/handheld_console/handheld_console_logitech_driving_g29/handheld_console_logitech_driving_g29_03.jpg",
//     ],
//     shortDesc: "Vô lăng đua xe chân thực với phản hồi lực mô-tơ kép, bọc da cao cấp.",
//     description: `
//       <h3>Trải nghiệm đường đua thực thụ</h3>
//       <p>Logitech G29 Driving Force sinh ra là để dành cho những tín đồ đam mê tốc độ. Với công nghệ phản hồi lực mô-tơ kép (Dual-Motor Force Feedback), bạn sẽ cảm nhận rõ rệt độ bám đường, lực ly tâm khi vào cua hay từng viên sỏi nảy lên dưới bánh xe trong các tựa game như Forza Horizon hay Dirt Rally.</p>
      
//       <h3>Cấu tạo từ vật liệu cao cấp</h3>
//       <p>Toàn bộ phần vô lăng được bọc da thủ công tinh xảo, mang lại cảm giác nắm chắc chắn y hệt xe thể thao hạng sang. Cần chuyển số (Paddle Shifter) và bộ 3 bàn đạp (Ga, Côn, Phanh) được làm từ thép không gỉ sáng bóng, có độ phản hồi lực cực kỳ chân thật và bền bỉ dưới mọi tác động lực mạnh.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Loại thiết bị", value: "Vô lăng đua xe (Racing Wheel)" },
//       { label: "Tương thích", value: "PS5, PS4, PC" },
//       { label: "Tính năng", value: "Phản hồi lực mô-tơ kép" },
//     ],
//     detailSpecs: [
//       { label: "Loại thiết bị", value: "Bộ Vô lăng đua xe & Bàn đạp" },
//       { label: "Tương thích", value: "PlayStation 5, PlayStation 4, Windows PC" },
//       { label: "Vòng quay", value: "900 độ (Khóa góc tới góc)" },
//       { label: "Vật liệu vô lăng", value: "Bọc da khâu tay, nan hoa nhôm" },
//       { label: "Vật liệu bàn đạp", value: "Thép không gỉ cuộn lạnh" },
//       { label: "Phản hồi lực", value: "Mô-tơ kép (Force Feedback)" },
//       { label: "Kết nối", value: "USB 2.0" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "HHC005",
//     slug: "tay-cam-machenike-g3-v2",
//     name: "Tay cầm Machenike G3 V2",
//     category: "handheld_console",
//     subcategory: "handheld_console",
//     price: 890000,
//     salePrice: 790000,
//     stock: 15,
//     images: [
//       "/product_image/handheld_console/handheld_console_machenike_g3_v2/handheld_console_machenike_g3_v2.png",
//       "/product_image/handheld_console/handheld_console_machenike_g3_v2/handheld_console_machenike_g3_v2_01.png",
//       "/product_image/handheld_console/handheld_console_machenike_g3_v2/handheld_console_machenike_g3_v2_02.png",
//       "/product_image/handheld_console/handheld_console_machenike_g3_v2/handheld_console_machenike_g3_v2_03.png",
//     ],
//     shortDesc: "Gamepad đa năng thiết kế trong suốt, nút bấm cơ học siêu nhạy.",
//     description: `
//       <h3>Ngoại hình trong suốt Cyberpunk</h3>
//       <p>Machenike G3 V2 gây ấn tượng ngay từ cái nhìn đầu tiên với lớp vỏ nhựa trong suốt lộ bảng mạch cực ngầu. Kết hợp cùng dải LED ở phím bấm và cần gạt, sản phẩm tỏa ra vẻ đẹp đậm chất khoa học viễn tưởng và công nghệ tương lai.</p>
      
//       <h3>Công tắc cơ học (Mechanical Switch)</h3>
//       <p>Điểm đáng giá nhất trên G3 V2 là cụm phím hành động (A, B, X, Y) được trang bị Switch cơ học (giống bàn phím cơ), mang lại tốc độ phản hồi siêu nhanh, độ nảy tốt và âm thanh "clicky" vô cùng đã tai. Hỗ trợ Macro đa phím ở mặt lưng giúp bạn thực hiện các chuỗi combo phức tạp chỉ với 1 thao tác nhấn.</p>
//     `,
//     brand: "Machenike",
//     specs: {
//       brand: "Machenike",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Wireless 2.4G / Bluetooth" },
//       { label: "Phím bấm", value: "Switch cơ học siêu nhạy" },
//       { label: "Thiết kế", value: "Vỏ trong suốt" },
//     ],
//     detailSpecs: [
//       { label: "Loại thiết bị", value: "Gamepad Không Dây" },
//       { label: "Kết nối", value: "Bluetooth 5.0 / Dongle 2.4Ghz / Cáp Type-C" },
//       { label: "Tương thích", value: "PC, Switch, Android, iOS" },
//       { label: "Cụm phím ABXY", value: "Switch cơ học (Micro-switch)" },
//       { label: "Cần Analog", value: "ALPS Joystick" },
//       { label: "Phím Macro", value: "2 phím lập trình mặt lưng" },
//       { label: "Dung lượng pin", value: "600 mAh" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "HHC006",
//     slug: "may-choi-game-msi-claw-a1m",
//     name: "Máy chơi game MSI Claw A1M",
//     category: "handheld_console",
//     subcategory: "handheld_console",
//     price: 14990000,
//     salePrice: 14990000,
//     stock: 6,
//     images: [
//       "/product_image/handheld_console/handheld_console_msi_claw_a1m/handheld_console_msi_claw_a1m.png",
//       "/product_image/handheld_console/handheld_console_msi_claw_a1m/handheld_console_msi_claw_a1m_01.jpg",
//       "/product_image/handheld_console/handheld_console_msi_claw_a1m/handheld_console_msi_claw_a1m_02.jpg",
//       "/product_image/handheld_console/handheld_console_msi_claw_a1m/handheld_console_msi_claw_a1m_03.jpg",
//       "/product_image/handheld_console/handheld_console_msi_claw_a1m/handheld_console_msi_claw_a1m_04.jpg",
//       "/product_image/handheld_console/handheld_console_msi_claw_a1m/handheld_console_msi_claw_a1m_05.jpg",
//     ],
//     shortDesc: "Máy chơi game cầm tay đầu tiên trên thế giới trang bị vi xử lý Intel Core Ultra.",
//     description: `
//       <h3>Tiên phong cấu trúc Intel Core Ultra</h3>
//       <p>Khác biệt với phần đông thị trường sử dụng chip AMD, MSI Claw A1M tự hào là mẫu Handheld PC đầu tiên tích hợp bộ vi xử lý Intel Core Ultra. Được trang bị công nghệ AI nội bộ (NPU) và kiến trúc đồ họa Intel Arc, máy mang lại sự tối ưu hóa tuyệt vời cả về FPS lẫn khả năng tiết kiệm điện năng cho những chuyến đi dài.</p>
      
//       <h3>Tản nhiệt Cooler Boost HyperFlow</h3>
//       <p>Kế thừa công nghệ từ dòng Laptop Gaming MSI danh tiếng, hệ thống làm mát 2 quạt Cooler Boost HyperFlow liên tục điều hướng luồng khí nóng ra xa vị trí cầm nắm, giúp máy và đôi tay của bạn luôn duy trì mức nhiệt độ mát mẻ lý tưởng ngay cả khi chạy các tác vụ nặng nhất.</p>

//       <h3>Màn hình 120Hz mượt mà & Joystick Hall Effect</h3>
//       <p>Với màn hình IPS 7 inch FHD 120Hz, MSI Claw hiển thị độ rực rỡ và chuyển động trơn tru xuất sắc. Cần điều khiển (Joystick) và nút Trigger sử dụng cảm biến từ tính Hall Effect, loại bỏ hoàn toàn rủi ro trôi cần (Joy-Con Drift) thường gặp trên các hệ máy chơi game cầm tay khác.</p>
//     `,
//     brand: "MSI",
//     specs: {
//       brand: "MSI",
//     },
//     cardSpecs: [
//       { label: "Màn hình", value: "7 inch FHD 120Hz" },
//       { label: "CPU", value: "Intel Core Ultra 7" },
//       { label: "Joystick", value: "Từ tính Hall Effect" },
//     ],
//     detailSpecs: [
//       { label: "Loại thiết bị", value: "Handheld Gaming PC" },
//       { label: "Màn hình", value: "7 inch FHD (1920x1080), 120Hz, IPS-Level, 100% sRGB" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "CPU", value: "Intel® Core™ Ultra 7 processor 155H" },
//       { label: "GPU", value: "Intel® Arc™ Graphics" },
//       { label: "RAM", value: "16GB LPDDR5 6400Mhz" },
//       { label: "Bộ nhớ", value: "512GB PCIe Gen4x4 M.2 SSD" },
//       { label: "Điều khiển", value: "Hall Effect Joysticks & Triggers, RGB Lighting" },
//       { label: "Pin", value: "6-Cell, 53Whr" },
//       { label: "Trọng lượng", value: "675g" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "HHC007",
//     slug: "tay-cam-rapoo-v600-se",
//     name: "Tay cầm Rapoo V600 SE",
//     category: "handheld_console",
//     subcategory: "handheld_console",
//     price: 650000,
//     salePrice: 450000,
//     stock: 16,
//     images: [
//       "/product_image/handheld_console/handheld_console_rapoo_v600_se/handheld_console_rapoo_v600_se.png",
//       "/product_image/handheld_console/handheld_console_rapoo_v600_se/handheld_console_rapoo_v600_se_01.png",
//       "/product_image/handheld_console/handheld_console_rapoo_v600_se/handheld_console_rapoo_v600_se_02.png",
//       "/product_image/handheld_console/handheld_console_rapoo_v600_se/handheld_console_rapoo_v600_se_03.png",
//     ],
//     shortDesc: "Tay cầm chơi game phổ thông, kết nối ổn định, lý tưởng để chơi FC Online (FO4).",
//     description: `
//       <h3>Lựa chọn "Quốc Dân" cho dòng game thể thao</h3>
//       <p>Với mức giá cực kỳ dễ tiếp cận, Rapoo V600 SE là tay cầm được cộng đồng người chơi FO4 (FC Online) hay PES săn đón nồng nhiệt. Form cầm lấy cảm hứng từ tay cầm Xbox 360 mang lại cảm giác cực kỳ quen thuộc và dễ làm quen cho mọi lứa tuổi.</p>
      
//       <h3>Độ bền bỉ đáng kinh ngạc</h3>
//       <p>Được thiết kế để chịu được những pha "nhồi" phím căng thẳng, bộ phím điều hướng (D-Pad) và các nút bấm của V600 SE có tuổi thọ nhấn rất cao. Bề mặt tay cầm làm từ nhựa bóng ở mặt trước kết hợp cao su sần ở 2 bên hông giúp hạn chế trơn trượt hiệu quả.</p>
//     `,
//     brand: "Rapoo",
//     specs: {
//       brand: "Rapoo",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Có dây USB" },
//       { label: "Tương thích", value: "PC Windows, Android" },
//       { label: "Tính năng", value: "Động cơ rung kép" },
//     ],
//     detailSpecs: [
//       { label: "Loại thiết bị", value: "Gamepad Có Dây" },
//       { label: "Kết nối", value: "USB 2.0 (Dây dài 2m)" },
//       { label: "Tương thích", value: "Windows PC (X-Input, D-Input), Android TV" },
//       { label: "Rung", value: "Motor rung kép (Asymmetric dual vibration)" },
//       { label: "Tính năng", value: "Nút bấm Turbo chế độ bắn liên tục" },
//       { label: "Bề mặt", value: "Nhựa bóng, ốp hông đệm cao su" },
//       { label: "Trọng lượng", value: "250g" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },
// ];