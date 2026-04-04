import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

// export const monitors = async (): Promise<Product[]> => {
//   const CACHE_KEY = "monitor_products_session";
  
//   // KIỂM TRA: Chỉ dùng sessionStorage nếu đang ở trình duyệt (Client)
//   const isBrowser = typeof window !== "undefined";

//   // 1. Kiểm tra SessionStorage trước (Chỉ thực hiện ở Client)
//   if (isBrowser) {
//     const cachedData = sessionStorage.getItem(CACHE_KEY);
//     if (cachedData) {
//       console.log("🖥️ [Monitor] Lấy từ Session Storage (0 Read)");
//       return JSON.parse(cachedData) as Product[];
//     }
//   }

//   // 2. Nếu chưa có hoặc đang ở Server, mới gọi Firebase
//   try {
//     console.warn("📡 [Monitor] Đang tải danh sách từ Firebase...");
//     const q = query(
//       collection(db, "products"),
//       where("category", "==", "monitor") 
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
//     console.error("Lỗi khi fetch dữ liệu monitors:", error);
//     return [];
//   }
// };

export const monitors: Product[] = [
  {
    id: "MON001",
    slug: "man-hinh-acer-kg240y-x1-200hz",
    name: "Màn hình Acer KG240Y X1 200Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 3990000,
    salePrice: 3590000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_acer_kg240y_x1_200hz/man_hinh_acer_kg240y_x1_200hz.jpg",
      "/product_image/monitors/man_hinh_acer_kg240y_x1_200hz/man_hinh_acer_kg240y_x1_200hz_01.png",
      "/product_image/monitors/man_hinh_acer_kg240y_x1_200hz/man_hinh_acer_kg240y_x1_200hz_02.png",
      "/product_image/monitors/man_hinh_acer_kg240y_x1_200hz/man_hinh_acer_kg240y_x1_200hz_03.png",
      "/product_image/monitors/man_hinh_acer_kg240y_x1_200hz/man_hinh_acer_kg240y_x1_200hz_04.png",
    ],
    shortDesc: "Màn hình viền mỏng ZeroFrame, tần số quét 200Hz vượt trội trong tầm giá.",
    description: `
      <h3>Tốc độ 200Hz mượt mà ấn tượng</h3>
      <p>Acer KG240Y X1 mang đến sự đột phá trong phân khúc phổ thông khi trang bị tần số quét lên tới 200Hz và thời gian phản hồi siêu tốc 1ms (VRB). Tốc độ này giúp loại bỏ hoàn toàn hiện tượng bóng mờ (ghosting), mang lại lợi thế cực lớn trong các tựa game bắn súng FPS hay game hành động nhịp độ cao.</p>
      
      <h3>Thiết kế ZeroFrame tràn viền</h3>
      <p>Sở hữu thiết kế ZeroFrame với viền màn hình siêu mỏng, không chỉ tối ưu hóa không gian hiển thị mà còn đặc biệt hoàn hảo nếu bạn có nhu cầu ghép nối nhiều màn hình. Công nghệ AMD FreeSync đồng bộ hóa khung hình, ngăn chặn hiện tượng xé hình (tearing) khó chịu khi chơi game.</p>
    `,
    brand: "Acer",
    specs: {
      brand: "Acer",
      refreshRate: "200Hz",
    },
    cardSpecs: [
      { label: "Kích thước", value: "23.8 inch" },
      { label: "Độ phân giải", value: "FHD (1920x1080)" },
      { label: "Tần số quét", value: "200Hz" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "23.8 inch" },
      { label: "Độ phân giải", value: "FHD (1920 x 1080)" },
      { label: "Tấm nền", value: "IPS" },
      { label: "Tần số quét", value: "200Hz" },
      { label: "Thời gian phản hồi", value: "1ms (VRB)" },
      { label: "Công nghệ đồng bộ", value: "AMD FreeSync" },
      { label: "Cổng kết nối", value: "2x HDMI 2.0, 1x DisplayPort 1.2, Audio Out" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON002",
    slug: "man-hinh-aoc-cs25g-310hz",
    name: "Màn hình AOC CS25G 310Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 6990000,
    salePrice: 6490000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_aoc_cs25g_310hz/man_hinh_aoc_cs25g_310hz.jpg",
      "/product_image/monitors/man_hinh_aoc_cs25g_310hz/man_hinh_aoc_cs25g_310hz_01.png",
      "/product_image/monitors/man_hinh_aoc_cs25g_310hz/man_hinh_aoc_cs25g_310hz_02.png",
      "/product_image/monitors/man_hinh_aoc_cs25g_310hz/man_hinh_aoc_cs25g_310hz_03.png",
      "/product_image/monitors/man_hinh_aoc_cs25g_310hz/man_hinh_aoc_cs25g_310hz_04.png",
      "/product_image/monitors/man_hinh_aoc_cs25g_310hz/man_hinh_aoc_cs25g_310hz_05.png",
    ],
    shortDesc: "Vũ khí eSports chuyên dụng với tần số quét 310Hz, tấm nền Fast IPS độ nhạy 1ms.",
    description: `
      <h3>Tốc độ eSports đỉnh cao 310Hz</h3>
      <p>AOC CS25G là lựa chọn lý tưởng cho các tuyển thủ eSports khi sở hữu tần số quét ép xung lên đến 310Hz. Hình ảnh được làm mới cực nhanh giúp mọi chuyển động của kẻ địch trong Valorant hay CS2 đều được bắt trọn một cách mượt mà và chính xác nhất.</p>
      
      <h3>Tấm nền Fast IPS màu sắc sống động</h3>
      <p>Không giống như màn hình TN tốc độ cao truyền thống bị hạn chế về màu sắc, CS25G sử dụng tấm nền Fast IPS. Nó không chỉ cung cấp tốc độ phản hồi 1ms GtG mà còn duy trì góc nhìn cực rộng cùng độ phủ màu sRGB ấn tượng, mang lại hình ảnh sắc nét trong cả lúc giải trí đa phương tiện.</p>
    `,
    brand: "AOC",
    specs: {
      brand: "AOC",
      refreshRate: "310Hz",
    },
    cardSpecs: [
      { label: "Tấm nền", value: "Fast IPS" },
      { label: "Tần số quét", value: "310Hz" },
      { label: "Thời gian phản hồi", value: "1ms (GtG)" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "24.5 inch" },
      { label: "Độ phân giải", value: "FHD (1920 x 1080)" },
      { label: "Tấm nền", value: "Fast IPS" },
      { label: "Tần số quét", value: "310Hz (OC)" },
      { label: "Thời gian phản hồi", value: "1ms (GtG)" },
      { label: "Độ sáng", value: "400 nits (HDR400)" },
      { label: "Cổng kết nối", value: "2x HDMI 2.0, 1x DisplayPort 1.4, Audio Out" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON003",
    slug: "man-hinh-asus-rog-strix-xg259cms-310hz",
    name: "Màn hình ASUS ROG Strix XG259CMS 310Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 9990000,
    salePrice: 9490000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_asus_rog_strix_xg259cms_310hz/man_hinh_asus_rog_strix_xg259cms_310hz.jpg",
      "/product_image/monitors/man_hinh_asus_rog_strix_xg259cms_310hz/man_hinh_asus_rog_strix_xg259cms_310hz_01.png",
      "/product_image/monitors/man_hinh_asus_rog_strix_xg259cms_310hz/man_hinh_asus_rog_strix_xg259cms_310hz_02.png",
      "/product_image/monitors/man_hinh_asus_rog_strix_xg259cms_310hz/man_hinh_asus_rog_strix_xg259cms_310hz_03.png",
      "/product_image/monitors/man_hinh_asus_rog_strix_xg259cms_310hz/man_hinh_asus_rog_strix_xg259cms_310hz_04.png",
      "/product_image/monitors/man_hinh_asus_rog_strix_xg259cms_310hz/man_hinh_asus_rog_strix_xg259cms_310hz_05.png",
    ],
    shortDesc: "Màn hình ROG Strix 24.5 inch Fast IPS, 310Hz, tích hợp công nghệ ELMB Sync độc quyền.",
    description: `
      <h3>Độc quyền ELMB Sync & Tần số 310Hz</h3>
      <p>ASUS ROG Strix XG259CMS được thiết kế để thống trị các bảng xếp hạng eSports. Tính năng ELMB Sync độc quyền cho phép kích hoạt đồng thời công nghệ chống nhòe chuyển động (Motion Blur Reduction) và công nghệ chống xé hình (G-Sync/FreeSync), mang lại hình ảnh cực kỳ sắc nét ngay cả khi lia chuột với tốc độ cao ở mức 310Hz.</p>
      
      <h3>Thiết kế thông minh, thân thiện Streamer</h3>
      <p>Phần chân đế của màn hình được thiết kế thông minh với rãnh để điện thoại và tích hợp ốc tripod tiêu chuẩn 1/4-inch. Bạn có thể dễ dàng gắn Webcam, đèn Ring Light hoặc máy ảnh lên thẳng chân đế màn hình, tối ưu hóa không gian cho góc Stream mà không cần mua thêm tay đỡ (Arm).</p>
    `,
    brand: "ASUS",
    specs: {
      brand: "ASUS",
      refreshRate: "310Hz",
    },
    cardSpecs: [
      { label: "Độ phân giải", value: "FHD (1920x1080)" },
      { label: "Tần số quét", value: "310Hz (OC)" },
      { label: "Cổng kết nối", value: "Hỗ trợ USB-C" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "24.5 inch" },
      { label: "Độ phân giải", value: "FHD (1920 x 1080)" },
      { label: "Tấm nền", value: "Fast IPS" },
      { label: "Tần số quét", value: "310Hz (Ép xung)" },
      { label: "Thời gian phản hồi", value: "1ms (GtG)" },
      { label: "Tính năng đặc biệt", value: "ELMB Sync, Tích hợp ngàm Tripod" },
      { label: "Cổng kết nối", value: "1x DisplayPort 1.4, 1x HDMI 2.0, 1x USB Type-C (Alt Mode)" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON004",
    slug: "man-hinh-asus-tuf-gaming-vg27aq5a-210hz",
    name: "Màn hình ASUS TUF Gaming VG27AQ5A 210Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 7490000,
    salePrice: 6990000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_asus_tuf_gaming_vg27aq5a_210hz/man_hinh_asus_tuf_gaming_vg27aq5a_210hz.jpg",
      "/product_image/monitors/man_hinh_asus_tuf_gaming_vg27aq5a_210hz/man_hinh_asus_tuf_gaming_vg27aq5a_210hz_01.jpg",
      "/product_image/monitors/man_hinh_asus_tuf_gaming_vg27aq5a_210hz/man_hinh_asus_tuf_gaming_vg27aq5a_210hz_02.jpg",
      "/product_image/monitors/man_hinh_asus_tuf_gaming_vg27aq5a_210hz/man_hinh_asus_tuf_gaming_vg27aq5a_210hz_03.jpg",
      "/product_image/monitors/man_hinh_asus_tuf_gaming_vg27aq5a_210hz/man_hinh_asus_tuf_gaming_vg27aq5a_210hz_04.jpg",
    ],
    shortDesc: "Màn hình 27 inch độ phân giải 2K QHD, cân bằng hoàn hảo giữa đồ họa và tốc độ.",
    description: `
      <h3>Sắc nét từng chi tiết với độ phân giải 2K</h3>
      <p>ASUS TUF Gaming VG27AQ5A sở hữu màn hình 27 inch độ phân giải QHD (2560x1440), cung cấp không gian làm việc rộng hơn 77% so với chuẩn FHD truyền thống. Mật độ điểm ảnh cao mang lại những khung hình game AAA rực rỡ và sắc nét tới từng cọng cỏ.</p>
      
      <h3>Tốc độ 210Hz mượt mà</h3>
      <p>Bên cạnh độ sắc nét, màn hình được nâng cấp tần số quét lên mức 210Hz kết hợp tấm nền Fast IPS 1ms. Bạn không cần phải đánh đổi giữa chất lượng hình ảnh và tốc độ khung hình, chiếc màn hình này đáp ứng hoàn hảo cả nhu cầu thiết kế đồ họa lẫn leo rank eSports căng thẳng.</p>
    `,
    brand: "ASUS",
    specs: {
      brand: "ASUS",
      refreshRate: "210Hz",
    },
    cardSpecs: [
      { label: "Kích thước", value: "27 inch" },
      { label: "Độ phân giải", value: "2K QHD (2560x1440)" },
      { label: "Tần số quét", value: "210Hz" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "27 inch" },
      { label: "Độ phân giải", value: "2K QHD (2560 x 1440)" },
      { label: "Tấm nền", value: "Fast IPS" },
      { label: "Tần số quét", value: "210Hz (OC)" },
      { label: "Thời gian phản hồi", value: "1ms (GtG)" },
      { label: "Độ phủ màu", value: "130% sRGB" },
      { label: "Cổng kết nối", value: "2x HDMI 2.0, 1x DisplayPort 1.2, Earphone Jack" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON005",
    slug: "man-hinh-asus-vy249hgr-120hz",
    name: "Màn hình ASUS VY249HGR 120Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 3290000,
    salePrice: 2990000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_asus_vy249hgr_120hz/man_hinh_asus_vy249hgr_120hz.jpg",
      "/product_image/monitors/man_hinh_asus_vy249hgr_120hz/man_hinh_asus_vy249hgr_120hz_01.jpg",
      "/product_image/monitors/man_hinh_asus_vy249hgr_120hz/man_hinh_asus_vy249hgr_120hz_02.jpg",
      "/product_image/monitors/man_hinh_asus_vy249hgr_120hz/man_hinh_asus_vy249hgr_120hz_03.jpg",
      "/product_image/monitors/man_hinh_asus_vy249hgr_120hz/man_hinh_asus_vy249hgr_120hz_04.jpg",
    ],
    shortDesc: "Màn hình 120Hz mượt mà, tích hợp công nghệ Eye Care bảo vệ mắt toàn diện.",
    description: `
      <h3>Trải nghiệm 120Hz mượt mà cho văn phòng</h3>
      <p>Vượt xa chuẩn 60Hz truyền thống, ASUS VY249HGR mang lại sự khác biệt lớn với tần số quét 120Hz. Mọi thao tác cuộn trang web, di chuyển chuột hay xem video của bạn đều trở nên trơn tru và nhẹ mắt hơn rất nhiều, giảm cảm giác nhức mỏi khi làm việc lâu dài.</p>
      
      <h3>Bảo vệ sức khỏe chủ động</h3>
      <p>Điểm độc đáo của VY249HGR là bề mặt viền và các phím bấm được phủ lớp xử lý kháng khuẩn Ion Bạc (Ag+) giúp ngăn ngừa sự phát triển của vi khuẩn. Công nghệ ASUS Eye Care Plus đi kèm bộ lọc ánh sáng xanh chuẩn TUV Rheinland và tính năng nhắc nhở nghỉ ngơi (Rest Reminder) giúp bảo vệ đôi mắt của bạn một cách tối đa.</p>
    `,
    brand: "ASUS",
    specs: {
      brand: "ASUS",
      refreshRate: "120Hz",
    },
    cardSpecs: [
      { label: "Tấm nền", value: "IPS" },
      { label: "Tần số quét", value: "120Hz" },
      { label: "Tính năng", value: "Eye Care / Phủ Kháng khuẩn" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "23.8 inch" },
      { label: "Độ phân giải", value: "FHD (1920 x 1080)" },
      { label: "Tấm nền", value: "IPS" },
      { label: "Tần số quét", value: "120Hz" },
      { label: "Thời gian phản hồi", value: "1ms (MPRT)" },
      { label: "Bảo vệ mắt", value: "Low Blue Light, Flicker-Free, Anti-glare" },
      { label: "Cổng kết nối", value: "1x HDMI 1.4, 1x VGA" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON006",
    slug: "man-hinh-gigabyte-gs25f2a-240hz",
    name: "Màn hình Gigabyte GS25F2A 240Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 4590000,
    salePrice: 4290000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_gigabyte_gs25f2a_240hz/man_hinh_gigabyte_gs25f2a_240hz.jpg",
      "/product_image/monitors/man_hinh_gigabyte_gs25f2a_240hz/man_hinh_gigabyte_gs25f2a_240hz_01.png",
      "/product_image/monitors/man_hinh_gigabyte_gs25f2a_240hz/man_hinh_gigabyte_gs25f2a_240hz_02.png",
      "/product_image/monitors/man_hinh_gigabyte_gs25f2a_240hz/man_hinh_gigabyte_gs25f2a_240hz_03.png",
      "/product_image/monitors/man_hinh_gigabyte_gs25f2a_240hz/man_hinh_gigabyte_gs25f2a_240hz_04.png",
      "/product_image/monitors/man_hinh_gigabyte_gs25f2a_240hz/man_hinh_gigabyte_gs25f2a_240hz_05.png",
    ],
    shortDesc: "Màn hình Super Speed IPS 240Hz với thiết kế ngàm chân đế tinh giản, sang trọng.",
    description: `
      <h3>Hiệu năng Super Speed IPS</h3>
      <p>Gigabyte GS25F2A trang bị tấm nền Super Speed IPS (SS IPS) độc quyền, cung cấp độ nhạy thời gian phản hồi chỉ 1ms (GtG) nhưng vẫn giữ được dải màu chân thực vốn có của IPS. Kết hợp với tần số làm mới 240Hz, mọi pha combat nảy lửa sẽ hiển thị rõ nét như ngoài đời thực.</p>
      
      <h3>Phần mềm OSD Sidekick trực quan</h3>
      <p>Không cần phải mò mẫm qua các nút bấm cứng ở mặt sau, tính năng OSD Sidekick cho phép người dùng điều chỉnh mọi thông số của màn hình (độ sáng, độ tương phản, tâm ngắm ảo Crosshair, hiển thị FPS...) trực tiếp bằng chuột và bàn phím ngay trên màn hình Desktop.</p>
    `,
    brand: "Gigabyte",
    specs: {
      brand: "Gigabyte",
      refreshRate: "240Hz",
    },
    cardSpecs: [
      { label: "Tấm nền", value: "Super Speed IPS" },
      { label: "Tần số quét", value: "240Hz" },
      { label: "Tính năng", value: "OSD Sidekick, Aim Stabilizer" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "24.5 inch" },
      { label: "Độ phân giải", value: "FHD (1920 x 1080)" },
      { label: "Tấm nền", value: "SS IPS" },
      { label: "Tần số quét", value: "240Hz" },
      { label: "Thời gian phản hồi", value: "1ms (GtG)" },
      { label: "Hỗ trợ HDR", value: "HDR Ready" },
      { label: "Cổng kết nối", value: "2x HDMI 2.0, 1x DisplayPort 1.4, Earphone Jack" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON007",
    slug: "man-hinh-msi-mag-274qf-rapid-ips-240hz",
    name: "Màn hình MSI MAG 274QF Rapid IPS 240Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 8990000,
    salePrice: 8490000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_msi_mag_274qf_rapid_ips_240k/man_hinh_msi_mag_274qf_rapid_ips_240k.jpg",
      "/product_image/monitors/man_hinh_msi_mag_274qf_rapid_ips_240k/man_hinh_msi_mag_274qf_rapid_ips_240k_01.png",
      "/product_image/monitors/man_hinh_msi_mag_274qf_rapid_ips_240k/man_hinh_msi_mag_274qf_rapid_ips_240k_02.png",
      "/product_image/monitors/man_hinh_msi_mag_274qf_rapid_ips_240k/man_hinh_msi_mag_274qf_rapid_ips_240k_03.png",
      "/product_image/monitors/man_hinh_msi_mag_274qf_rapid_ips_240k/man_hinh_msi_mag_274qf_rapid_ips_240k_04.png",
    ],
    shortDesc: "Siêu phẩm màn hình 27 inch 2K WQHD, sử dụng Rapid IPS 240Hz cho hình ảnh rực rỡ và tốc độ đỉnh cao.",
    description: `
      <h3>Đỉnh cao hình ảnh WQHD 2K</h3>
      <p>MSI MAG 274QF là sự giao thoa hoàn hảo giữa độ nét và kích thước. Độ phân giải WQHD (2560x1440) trên tấm nền 27 inch cung cấp không gian rộng rãi để đa nhiệm và chơi game AAA cực kỳ sắc nét. Công nghệ Wide Color Gamut đem tới dải màu hiển thị rực rỡ, chi tiết hơn bao giờ hết.</p>
      
      <h3>Rapid IPS 240Hz - Tốc độ của ánh sáng</h3>
      <p>Công nghệ màng tinh thể lỏng Rapid IPS có tốc độ xoay nhanh gấp 4 lần so với tấm nền IPS thông thường. Với thời gian phản hồi 1ms GtG và tần số làm mới 240Hz, các dải chuyển động tốc độ cao (như game đua xe, FPS) không hề để lại bóng mờ vệt đuôi chuột, giúp bạn phản xạ chuẩn xác trong từng mili-giây.</p>
    `,
    brand: "MSI",
    specs: {
      brand: "MSI",
      refreshRate: "240Hz",
    },
    cardSpecs: [
      { label: "Độ phân giải", value: "2K WQHD (2560x1440)" },
      { label: "Tấm nền", value: "Rapid IPS" },
      { label: "Tần số quét", value: "240Hz" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "27 inch" },
      { label: "Độ phân giải", value: "WQHD (2560 x 1440)" },
      { label: "Tấm nền", value: "Rapid IPS" },
      { label: "Tần số quét", value: "240Hz" },
      { label: "Thời gian phản hồi", value: "1ms (GtG) / 0.5ms (Min)" },
      { label: "Công nghệ nổi bật", value: "Wide Color Gamut, HDR Ready" },
      { label: "Cổng kết nối", value: "2x HDMI 2.0b, 1x DisplayPort 1.4a, Audio Out" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON008",
    slug: "man-hinh-viewsonic-va2432-120hz",
    name: "Màn hình ViewSonic VA2432 120Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 2990000,
    salePrice: 2690000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_viewsonic_va2432_120hz/man_hinh_viewsonic_va2432_120hz.jpg",
      "/product_image/monitors/man_hinh_viewsonic_va2432_120hz/man_hinh_viewsonic_va2432_120hz_01.png",
      "/product_image/monitors/man_hinh_viewsonic_va2432_120hz/man_hinh_viewsonic_va2432_120hz_02.png",
      "/product_image/monitors/man_hinh_viewsonic_va2432_120hz/man_hinh_viewsonic_va2432_120hz_03.png",
      "/product_image/monitors/man_hinh_viewsonic_va2432_120hz/man_hinh_viewsonic_va2432_120hz_04.png",
      "/product_image/monitors/man_hinh_viewsonic_va2432_120hz/man_hinh_viewsonic_va2432_120hz_05.png",
    ],
    shortDesc: "Màn hình phổ thông 120Hz mượt mà, viền siêu mỏng 3 cạnh, hỗ trợ ngàm VESA.",
    description: `
      <h3>Tần số quét 120Hz trong tầm tay</h3>
      <p>ViewSonic VA2432 tái định nghĩa lại tiêu chuẩn của một chiếc màn hình văn phòng/phổ thông khi mang trong mình tần số làm mới lên tới 120Hz. Công nghệ AMD FreeSync cung cấp hình ảnh mượt mà, chống giật lag khi chơi các tựa game cơ bản hoặc giải trí đa phương tiện.</p>
      
      <h3>Thiết kế Frameless hiện đại</h3>
      <p>Với viền màn hình siêu mỏng ở 3 cạnh, VA2432 mang lại vẻ ngoài cực kỳ thanh lịch và phù hợp cho các thiết lập ghép đa màn hình. Màn hình tích hợp công nghệ SuperClear IPS cung cấp góc nhìn cực rộng lên đến 178 độ, giữ màu sắc đồng nhất dù bạn nhìn từ bất kỳ hướng nào.</p>
    `,
    brand: "ViewSonic",
    specs: {
      brand: "ViewSonic",
      refreshRate: "120Hz",
    },
    cardSpecs: [
      { label: "Kích thước", value: "23.8 inch" },
      { label: "Tấm nền", value: "SuperClear IPS" },
      { label: "Tần số quét", value: "120Hz" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "23.8 inch" },
      { label: "Độ phân giải", value: "FHD (1920 x 1080)" },
      { label: "Tấm nền", value: "IPS (SuperClear)" },
      { label: "Tần số quét", value: "120Hz" },
      { label: "Thời gian phản hồi", value: "1ms (MPRT)" },
      { label: "Chuẩn gắn tường VESA", value: "100 x 100 mm" },
      { label: "Cổng kết nối", value: "1x HDMI 1.4, 1x VGA" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON009",
    slug: "man-hinh-viewsonic-vx2479a-hd-pro-240hz",
    name: "Màn hình ViewSonic VX2479A-HD-PRO 240Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 5290000,
    salePrice: 4890000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_viewsonic_vx2479a_hd_pro_240hz/man_hinh_viewsonic_vx2479a_hd_pro_240hz.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2479a_hd_pro_240hz/man_hinh_viewsonic_vx2479a_hd_pro_240hz_01.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2479a_hd_pro_240hz/man_hinh_viewsonic_vx2479a_hd_pro_240hz_02.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2479a_hd_pro_240hz/man_hinh_viewsonic_vx2479a_hd_pro_240hz_03.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2479a_hd_pro_240hz/man_hinh_viewsonic_vx2479a_hd_pro_240hz_04.jpg",
    ],
    shortDesc: "Chiến thần phân khúc tầm trung, Fast IPS 240Hz đem tới lợi thế quyết định trong game FPS.",
    description: `
      <h3>Tốc độ làm mới siêu nhanh 240Hz</h3>
      <p>Được tạo ra để dành riêng cho phân khúc Competitive Gaming, ViewSonic VX2479A-HD-PRO với tần số quét 240Hz cung cấp sự lưu loát tuyệt đối. Bạn sẽ thấy từng khung hình trôi qua mượt mà, định vị mục tiêu dễ dàng và có thời gian phản ứng nhanh hơn đối thủ.</p>
      
      <h3>Tấm nền Fast IPS tối ưu</h3>
      <p>Sự kết hợp giữa công nghệ Fast IPS và khả năng HDR mang lại màu sắc sống động, độ tương phản sâu và thời gian phản hồi cực thấp. Thiết kế chân đế công thái học chữ V tối giản cũng giải phóng diện tích bàn, nhường không gian cho miếng lót chuột cỡ lớn của bạn.</p>
    `,
    brand: "ViewSonic",
    specs: {
      brand: "ViewSonic",
      refreshRate: "240Hz",
    },
    cardSpecs: [
      { label: "Tấm nền", value: "Fast IPS" },
      { label: "Tần số quét", value: "240Hz" },
      { label: "Độ phân giải", value: "FHD (1920x1080)" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "23.8 inch" },
      { label: "Độ phân giải", value: "FHD (1920 x 1080)" },
      { label: "Tấm nền", value: "Fast IPS" },
      { label: "Tần số quét", value: "240Hz" },
      { label: "Thời gian phản hồi", value: "1ms (GtG)" },
      { label: "Tính năng Gaming", value: "Black Stabilization, Crosshair" },
      { label: "Cổng kết nối", value: "2x HDMI 2.0, 1x DisplayPort 1.4" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "MON010",
    slug: "man-hinh-viewsonic-vx2882-4kp-150hz",
    name: "Màn hình ViewSonic VX2882-4KP 150Hz",
    category: "monitor",
    subcategory: "monitors",
    price: 11990000,
    salePrice: 11490000,
    stock: 10,
    images: [
      "/product_image/monitors/man_hinh_viewsonic_vx2882_4kp_150hz/man_hinh_viewsonic_vx2882_4kp_28inch_ips_4k_150hz_hdr10_usbc.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2882_4kp_150hz/man_hinh_viewsonic_vx2882_4kp_150hz_01.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2882_4kp_150hz/man_hinh_viewsonic_vx2882_4kp_150hz_02.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2882_4kp_150hz/man_hinh_viewsonic_vx2882_4kp_150hz_03.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2882_4kp_150hz/man_hinh_viewsonic_vx2882_4kp_150hz_04.jpg",
      "/product_image/monitors/man_hinh_viewsonic_vx2882_4kp_150hz/man_hinh_viewsonic_vx2882_4kp_150hz_05.jpg",
    ],
    shortDesc: "Màn hình 28 inch 4K đỉnh cao, hỗ trợ HDMI 2.1 xuất sắc cho PS5 và Xbox Series X.",
    description: `
      <h3>Trải nghiệm hình ảnh 4K UHD chân thực</h3>
      <p>ViewSonic VX2882-4KP đưa bạn vào thế giới giải trí điện ảnh ngay trên góc máy cá nhân với độ phân giải siêu nét 4K UHD (3840x2160) trên tấm nền SuperClear IPS. Kết hợp chuẩn hiển thị HDR10, màn hình tái tạo độ sâu màu sắc đáng kinh ngạc, làm nổi bật vùng sáng chói và khắc họa chi tiết vùng tối rõ ràng.</p>
      
      <h3>Trợ thủ đắc lực cho Console Next-Gen</h3>
      <p>Được trang bị cổng giao tiếp HDMI 2.1 băng thông siêu rộng, đây là chiếc màn hình sinh ra để phục vụ hệ máy PlayStation 5 và Xbox Series X, cho phép xuất hình 4K @ 120Hz mượt mà. Trong khi đó, với PC, cổng DisplayPort 1.4 có thể đẩy tần số quét lên tối đa 150Hz. Cổng USB-C tích hợp còn hỗ trợ sạc nhanh và truyền hình ảnh cho các dòng laptop hiện đại.</p>
    `,
    brand: "ViewSonic",
    specs: {
      brand: "ViewSonic",
      refreshRate: "150Hz",
    },
    cardSpecs: [
      { label: "Độ phân giải", value: "4K UHD (3840x2160)" },
      { label: "Tần số quét", value: "150Hz (PC) / 120Hz (Console)" },
      { label: "Kết nối", value: "HDMI 2.1 / Type-C 65W" },
    ],
    detailSpecs: [
      { label: "Kích thước màn hình", value: "28 inch" },
      { label: "Độ phân giải", value: "4K UHD (3840 x 2160)" },
      { label: "Tấm nền", value: "SuperClear IPS (HDR10)" },
      { label: "Tần số quét", value: "150Hz" },
      { label: "Thời gian phản hồi", value: "1ms (MPRT)" },
      { label: "Cổng kết nối", value: "2x HDMI 2.1, 2x DisplayPort 1.4, 1x USB Type-C (65W PD)" },
      { label: "Tính năng", value: "AMD FreeSync Premium, KVM Switch, Loa kép tích hợp" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },
];