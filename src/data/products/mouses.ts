import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const mouses = async (): Promise<Product[]> => {
  const CACHE_KEY = "mouse_products_session";

  // 1. Kiểm tra SessionStorage trước (Tiết kiệm lượt Read Firebase)
  const cachedData = sessionStorage.getItem(CACHE_KEY);
  
  if (cachedData) {
    console.log("🖱️ Lấy dữ liệu Chuột từ Session Storage (0 Read)");
    return JSON.parse(cachedData) as Product[];
  }

  // 2. Nếu chưa có, mới gọi Firebase (Tốn Quota)
  console.warn("📡 Đang tải danh sách Chuột từ Firebase...");
  try {
    const q = query(
      collection(db, "products"),
      where("category", "==", "mouse") 
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
    console.error("Lỗi khi fetch dữ liệu mouses:", error);
    return [];
  }
};

// export const mouses: Product[] = [
//   {
//     id: "MOU001",
//     slug: "chuot-asus-p722-rog-keris-ii-origin-wl-black",
//     name: "Chuột ASUS P722 ROG Keris II Origin WL Black",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 2990000,
//     salePrice: 2790000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_asus_p722_rog_keris_ii_origin_wl_black/mouse_asus_p722_rog_keris_ii_origin_wl_black.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_p722_rog_keris_ii_origin_wl_black/mouse_asus_p722_rog_keris_ii_origin_wl_black_01.png",
//       "/product_image/mouses_mousepads/mouse_asus_p722_rog_keris_ii_origin_wl_black/mouse_asus_p722_rog_keris_ii_origin_wl_black_02.png",
//       "/product_image/mouses_mousepads/mouse_asus_p722_rog_keris_ii_origin_wl_black/mouse_asus_p722_rog_keris_ii_origin_wl_black_03.png",
//       "/product_image/mouses_mousepads/mouse_asus_p722_rog_keris_ii_origin_wl_black/mouse_asus_p722_rog_keris_ii_origin_wl_black_04.png",
//     ],
//     shortDesc: "Vũ khí eSports công thái học, cảm biến quang học ROG AimPoint Pro 36,000 DPI.",
//     description: `
//       <h3>Thiết kế công thái học tối thượng</h3>
//       <p>ASUS ROG Keris II Origin là phiên bản nâng cấp hoàn hảo dành cho game thủ thuận tay phải. Thiết kế công thái học (Ergonomic) được tinh chỉnh tỉ mỉ giúp ôm khít lòng bàn tay, mang lại cảm giác thoải mái tuyệt đối ngay cả trong những trận đấu kéo dài. Trọng lượng siêu nhẹ chỉ 54g giúp bạn vẩy chuột nhanh hơn và ít tốn sức hơn.</p>
      
//       <h3>Cảm biến AimPoint Pro đỉnh cao</h3>
//       <p>Được trang bị mắt đọc cảm biến quang học ROG AimPoint Pro mới nhất với độ phân giải lên tới 36,000 DPI, gia tốc 50G và tốc độ lướt 650 IPS. Mọi chuyển động dù là nhỏ nhất của bạn đều được ghi nhận với độ lệch (CPI deviation) dưới 1%, mang lại độ chính xác gần như tuyệt đối trong các tựa game FPS như Valorant hay CS:GO.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Cảm biến", value: "ROG AimPoint Pro (36,000 DPI)" },
//       { label: "Trọng lượng", value: "Siêu nhẹ 54g" },
//       { label: "Kết nối", value: "3 Chế độ (Type-C, 2.4G, Bluetooth)" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột Gaming Không dây (Công thái học)" },
//       { label: "Cảm biến (Sensor)", value: "ROG AimPoint Pro Optical" },
//       { label: "Độ phân giải (DPI)", value: "Tối đa 36,000 DPI" },
//       { label: "Tốc độ lướt / Gia tốc", value: "650 IPS / 50G" },
//       { label: "Kết nối", value: "USB 2.0 / Bluetooth 5.1 / RF 2.4GHz" },
//       { label: "Switch", value: "ROG Optical Micro Switches (100M Click)" },
//       { label: "Trọng lượng", value: "54g (Không cáp & Dongle)" },
//       { label: "Pin", value: "Lên đến 119 giờ (2.4Ghz, tắt LED)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MOU002",
//     slug: "chuot-asus-tuf-gaming-m3-gen-ii",
//     name: "Chuột ASUS TUF Gaming M3 Gen II",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 790000,
//     salePrice: 690000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m3_gen_ii/mouse_asus_tuf_gaming_m3_gen_ii.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m3_gen_ii/mouse_asus_tuf_gaming_m3_gen_ii_01.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m3_gen_ii/mouse_asus_tuf_gaming_m3_gen_ii_02.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m3_gen_ii/mouse_asus_tuf_gaming_m3_gen_ii_03.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m3_gen_ii/mouse_asus_tuf_gaming_m3_gen_ii_04.jpg",
//     ],
//     shortDesc: "Chuột gaming có dây siêu nhẹ 59g, cảm biến 8000 DPI và khả năng kháng nước chuẩn IP56.",
//     description: `
//       <h3>Độ bền chuẩn quân đội TUF</h3>
//       <p>Đúng với tên gọi The Ultimate Force, ASUS TUF Gaming M3 Gen II sở hữu độ bền đáng nể. Bo mạch bên trong được phủ một lớp bảo vệ đạt chuẩn IP56, giúp chuột có khả năng kháng nước và chống bụi bẩn hiệu quả, bảo vệ an toàn cho thiết bị trước những sự cố tràn nước trên bàn làm việc.</p>
      
//       <h3>Thiết kế siêu nhẹ và Aura Sync</h3>
//       <p>Với trọng lượng được tối ưu chỉ còn 59g, M3 Gen II mang lại sự linh hoạt đáng kinh ngạc cho những pha thao tác nhanh. Dù nằm ở phân khúc phổ thông, chuột vẫn được trang bị đèn nền ASUS Aura Sync RGB có thể đồng bộ hóa hiệu ứng với các thiết bị ngoại vi khác trong hệ sinh thái.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Cảm biến", value: "Quang học (8000 DPI)" },
//       { label: "Trọng lượng", value: "59g" },
//       { label: "Tính năng", value: "Kháng nước, bụi chuẩn IP56" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột Gaming Có dây" },
//       { label: "Cảm biến (Sensor)", value: "Cảm biến quang học" },
//       { label: "Độ phân giải (DPI)", value: "100 - 8000 DPI" },
//       { label: "Kết nối", value: "Cáp USB 2.0" },
//       { label: "Switch", value: "Độ bền 60 triệu lần nhấn" },
//       { label: "Trọng lượng", value: "59g (Không tính cáp)" },
//       { label: "Bảo vệ", value: "Chuẩn kháng nước/bụi IP56" },
//       { label: "Đèn nền", value: "Aura Sync RGB" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MOU003",
//     slug: "chuot-asus-tuf-gaming-m4-wireless",
//     name: "Chuột ASUS TUF Gaming M4 Wireless",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 1290000,
//     salePrice: 1190000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m4_wireless/mouse_asus_tuf_gaming_m4_wireless.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m4_wireless/mouse_asus_tuf_gaming_m4_wireless_01.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m4_wireless/mouse_asus_tuf_gaming_m4_wireless_02.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m4_wireless/mouse_asus_tuf_gaming_m4_wireless_03.jpg",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_m4_wireless/mouse_asus_tuf_gaming_m4_wireless_04.jpg",
//     ],
//     shortDesc: "Chuột không dây đa năng, pin sử dụng AA/AAA, vỏ xử lý kháng khuẩn.",
//     description: `
//       <h3>Linh hoạt nguồn năng lượng</h3>
//       <p>ASUS TUF Gaming M4 Wireless là giải pháp hoàn hảo cho những ai thường xuyên di chuyển. Chuột không sử dụng pin sạc liền mà dùng pin rời, đặc biệt đi kèm một ngàm chuyển đổi cho phép bạn sử dụng linh hoạt giữa 2 loại pin AA hoặc AAA. Điều này giúp bạn dễ dàng thay pin ở bất cứ đâu mà không cần chờ sạc.</p>
      
//       <h3>Bề mặt phủ lớp bảo vệ kháng khuẩn</h3>
//       <p>Để giữ cho thiết bị luôn sạch sẽ, toàn bộ bề mặt và các phím bấm của chuột đều được xử lý bằng công nghệ ASUS Antibacterial Guard. Lớp phủ ion bạc này được chứng minh khoa học có thể ức chế sự phát triển của vi khuẩn tới 99% trong khoảng thời gian 24 giờ.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "2 Chế độ (2.4Ghz / Bluetooth)" },
//       { label: "Nguồn cấp", value: "Pin rời AA hoặc AAA" },
//       { label: "Cảm biến", value: "Quang học (12,000 DPI)" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột Gaming Không dây (Dùng pin rời)" },
//       { label: "Cảm biến (Sensor)", value: "Cảm biến quang học cao cấp" },
//       { label: "Độ phân giải (DPI)", value: "Tối đa 12,000 DPI" },
//       { label: "Kết nối", value: "RF 2.4GHz / Bluetooth 5.1" },
//       { label: "Pin", value: "Pin AA hoặc AAA (Kèm vỏ chuyển đổi)" },
//       { label: "Tính năng nổi bật", value: "Lớp phủ kháng khuẩn Antibacterial Guard" },
//       { label: "Trọng lượng", value: "77g (Cả pin AAA và vỏ chuyển)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MOU004",
//     slug: "chuot-asus-tuf-gaming-mini-hatsune-miku",
//     name: "Chuột ASUS TUF Gaming Mini Hatsune Miku",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 1490000,
//     salePrice: 1390000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_mini_hatsune_miku/mouse_asus_tuf_gaming_mini_hatsune_miku.png",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_mini_hatsune_miku/mouse_asus_tuf_gaming_mini_hatsune_miku_01.png",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_mini_hatsune_miku/mouse_asus_tuf_gaming_mini_hatsune_miku_02.png",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_mini_hatsune_miku/mouse_asus_tuf_gaming_mini_hatsune_miku_03.png",
//       "/product_image/mouses_mousepads/mouse_asus_tuf_gaming_mini_hatsune_miku/mouse_asus_tuf_gaming_mini_hatsune_miku_04.jpg",
//     ],
//     shortDesc: "Phiên bản hợp tác đặc biệt Hatsune Miku, kích thước Mini phù hợp form tay nhỏ.",
//     description: `
//       <h3>Thiết kế Hatsune Miku độc quyền</h3>
//       <p>Sự kết hợp tuyệt vời giữa công nghệ và văn hóa Anime, ASUS TUF Gaming Mini Miku khoác lên mình tông màu xanh ngọc bích rực rỡ đặc trưng của cô nàng ca sĩ ảo Hatsune Miku. Logo và các chi tiết được cách điệu tinh tế, biến nó thành món đồ sưu tầm vô giá cho các fan hâm mộ Anime/Manga.</p>
      
//       <h3>Nhỏ gọn, mạnh mẽ</h3>
//       <p>Với kích thước được thu gọn (Mini) và trọng lượng nhẹ, chuột cực kỳ vừa vặn với các bạn nữ hoặc những người có form tay nhỏ, sử dụng kiểu cầm Claw hoặc Fingertip grip. Dù nhỏ bé, thiết bị vẫn sở hữu cảm biến quang học 6200 DPI mạnh mẽ để chiến mượt mọi tựa game.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Phiên bản", value: "Hatsune Miku Limited Edition" },
//       { label: "Cảm biến", value: "Quang học (6200 DPI)" },
//       { label: "Kích thước", value: "Mini (Cho form tay nhỏ)" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột Gaming Có dây (Form Mini)" },
//       { label: "Phiên bản", value: "Hatsune Miku Collaboration" },
//       { label: "Cảm biến (Sensor)", value: "Cảm biến quang học" },
//       { label: "Độ phân giải (DPI)", value: "6200 DPI" },
//       { label: "Kết nối", value: "Cáp USB 2.0" },
//       { label: "Trọng lượng", value: "Siêu nhẹ (Không tính cáp)" },
//       { label: "Đèn nền", value: "Aura Sync RGB" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MOU005",
//     slug: "chuot-dareu-em901x-rgb-superlight",
//     name: "Chuột DareU EM901X RGB Superlight",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 890000,
//     salePrice: 790000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_dareu_em901x_rgb_superlight/mouse_dareu_em901x_rgb_superlight.jpg",
//       "/product_image/mouses_mousepads/mouse_dareu_em901x_rgb_superlight/mouse_dareu_em901x_rgb_superlight_01.jpg",
//     ],
//     shortDesc: "Chuột gaming không dây có Dock sạc, cảm biến ATG4090 hiệu suất cao, trọng lượng 85g.",
//     description: `
//       <h3>Dock sạc từ tính cao cấp</h3>
//       <p>Một tính năng hiếm thấy trong tầm giá dưới 1 triệu đồng: DareU EM901X được trang bị kèm một Dock sạc từ tính cực kỳ xịn sò. Sau khi sử dụng xong, bạn chỉ cần đặt nhẹ chuột lên Dock là thiết bị sẽ tự động hít vào và sạc pin, đồng thời dải LED dưới Dock tạo hiệu ứng ánh sáng cực ngầu cho bàn làm việc.</p>
      
//       <h3>Cảm biến ATG4090 ổn định</h3>
//       <p>Sử dụng mắt đọc độc quyền ATG4090, chuột cung cấp mức DPI tối đa 6000 cùng khả năng tracking mượt mà trên nhiều bề mặt. Với trọng lượng khoảng 85g (Superlight), cảm giác di chuột rất cân bằng, không quá hẫng cũng không gây mỏi tay khi thao tác nhiều.</p>
//     `,
//     brand: "DareU",
//     specs: {
//       brand: "DareU",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Wireless 2.4G / Type-C" },
//       { label: "Phụ kiện", value: "Kèm Dock sạc từ tính" },
//       { label: "Cảm biến", value: "ATG4090 (6000 DPI)" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột Gaming Không dây" },
//       { label: "Cảm biến (Sensor)", value: "DareU ATG4090 Optical" },
//       { label: "Độ phân giải (DPI)", value: "600 - 6000 DPI" },
//       { label: "Kết nối", value: "Wireless 2.4Ghz / Cáp Type-C" },
//       { label: "Pin", value: "930 mAh (Sử dụng 1-2 tuần)" },
//       { label: "Phụ kiện đi kèm", value: "Dock sạc nam châm có LED RGB" },
//       { label: "Trọng lượng", value: "85g" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MOU006",
//     slug: "chuot-logitech-g-pro-x-superlight-2-se-white",
//     name: "Chuột Logitech G Pro X Superlight 2 SE White",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 3490000,
//     salePrice: 3290000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_logitech_g_pro_x_superlight_2_se_white/mouse_logitech_g_pro_x_superlight_2_se_white.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_g_pro_x_superlight_2_se_white/mouse_logitech_g_pro_x_superlight_2_se_white_01.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_g_pro_x_superlight_2_se_white/mouse_logitech_g_pro_x_superlight_2_se_white_02.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_g_pro_x_superlight_2_se_white/mouse_logitech_g_pro_x_superlight_2_se_white_03.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_g_pro_x_superlight_2_se_white/mouse_logitech_g_pro_x_superlight_2_se_white_04.jpg",
//     ],
//     shortDesc: "Vị vua eSports thế hệ mới, trang bị Switch lai quang-cơ Lightforce, siêu nhẹ 60g.",
//     description: `
//       <h3>Sự tiến hóa của nhà vô địch</h3>
//       <p>Được thiết kế dựa trên sự phản hồi từ các tuyển thủ eSports hàng đầu thế giới, Logitech G Pro X Superlight 2 giữ nguyên form dáng cầm đối xứng huyền thoại nhưng nâng cấp mạnh mẽ bên trong. Mắt đọc Hero 2 mới nhất đạt 32,000 DPI và tốc độ lướt trên 500 IPS, đảm bảo độ chuẩn xác hoàn hảo ở cấp độ thi đấu.</p>
      
//       <h3>Công nghệ Switch Lightforce đột phá</h3>
//       <p>Sản phẩm đánh dấu sự xuất hiện của hệ thống phím bấm Lightforce kết hợp giữa công nghệ quang học (Optical) giúp loại bỏ độ trễ (debounce delay) và công nghệ cơ học (Mechanical) duy trì cảm giác nhấn giòn giã đặc trưng. Trọng lượng chuột được giảm xuống mức đáng kinh ngạc chỉ 60g mà không cần khoét lỗ vỏ.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Trọng lượng", value: "Siêu nhẹ 60g" },
//       { label: "Cảm biến", value: "HERO 2 (32,000 DPI)" },
//       { label: "Switch", value: "LIGHTFORCE Quang-Cơ" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột eSports Không dây (Đối xứng)" },
//       { label: "Cảm biến (Sensor)", value: "HERO 2 Optical" },
//       { label: "Độ phân giải (DPI)", value: "100 - 32,000 DPI" },
//       { label: "Polling Rate", value: "Lên đến 2000 Hz (Qua Dongle tương thích)" },
//       { label: "Kết nối", value: "Lightspeed Wireless / Type-C" },
//       { label: "Switch", value: "LIGHTFORCE (Lai Quang-Cơ)" },
//       { label: "Trọng lượng", value: "60g" },
//       { label: "Thời lượng pin", value: "95 giờ chuyển động liên tục" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MOU007",
//     slug: "chuot-logitech-g102-lightsync-black",
//     name: "Chuột Logitech G102 Lightsync Black",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 590000,
//     salePrice: 490000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_logitech_g102_lightsync_black/mouse_logitech_g102_lightsync_black.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_g102_lightsync_black/mouse_logitech_g102_lightsync_black_01.jpg",
//     ],
//     shortDesc: "Mẫu chuột gaming quốc dân, thiết kế cổ điển đối xứng, trang bị LED Lightsync RGB.",
//     description: `
//       <h3>Huyền thoại thiết kế 6 nút</h3>
//       <p>Logitech G102 Lightsync mang form dáng đối xứng lấy cảm hứng từ dòng chuột G100S huyền thoại được vô số game thủ trên toàn thế giới yêu thích. Thiết kế kinh điển này cực kỳ dễ làm quen, phù hợp với hầu hết các kích cỡ tay và nhiều kiểu cầm chuột khác nhau (Claw, Fingertip, Palm).</p>
      
//       <h3>Hiệu năng "Quốc dân"</h3>
//       <p>Cảm biến chơi game 8000 DPI của G102 mang lại sự theo dõi chuyển động ổn định và chính xác, đáp ứng tốt cho cả chơi game FPS, MOBA lẫn làm việc văn phòng. Dải LED Lightsync RGB mượt mà vòng qua đuôi chuột có thể đồng bộ hóa màu sắc cực đẹp qua phần mềm Logitech G-Hub.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Thiết kế", value: "Cổ điển đối xứng (6 nút)" },
//       { label: "Cảm biến", value: "Quang học (8000 DPI)" },
//       { label: "Đèn nền", value: "Lightsync RGB rực rỡ" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột Gaming Có dây" },
//       { label: "Thiết kế", value: "Đối xứng (Ambidextrous) 6 nút lập trình" },
//       { label: "Cảm biến (Sensor)", value: "Cảm biến quang học chơi game" },
//       { label: "Độ phân giải (DPI)", value: "200 - 8000 DPI" },
//       { label: "Kết nối", value: "Cáp USB" },
//       { label: "Trọng lượng", value: "85g (Chỉ chuột)" },
//       { label: "Đèn nền", value: "Lightsync RGB (Tùy chỉnh G-Hub)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MOU008",
//     slug: "chuot-logitech-g502-hero-gaming",
//     name: "Chuột Logitech G502 Hero Gaming",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 1490000,
//     salePrice: 1390000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_logitech_g502_hero_gaming/mouse_logitech_g502_hero_gaming.png",
//       "/product_image/mouses_mousepads/mouse_logitech_g502_hero_gaming/mouse_logitech_g502_hero_gaming_01.png",
//       "/product_image/mouses_mousepads/mouse_logitech_g502_hero_gaming/mouse_logitech_g502_hero_gaming_02.png",
//       "/product_image/mouses_mousepads/mouse_logitech_g502_hero_gaming/mouse_logitech_g502_hero_gaming_03.png",
//       "/product_image/mouses_mousepads/mouse_logitech_g502_hero_gaming/mouse_logitech_g502_hero_gaming_04.png",
//     ],
//     shortDesc: "Tượng đài chuột công thái học, 11 phím lập trình, hỗ trợ thay đổi trọng lượng bằng tạ phụ.",
//     description: `
//       <h3>Tùy biến trọng lượng cá nhân hóa</h3>
//       <p>Logitech G502 Hero là một trong những mẫu chuột bán chạy nhất mọi thời đại nhờ thiết kế công thái học sắc sảo và khả năng tùy biến tuyệt vời. Chuột đi kèm với bộ 5 viên tạ nhỏ (mỗi viên 3.6g), cho phép bạn thay đổi trọng lượng và trọng tâm của chuột để phù hợp nhất với thói quen di chuột của mình.</p>
      
//       <h3>Cảm biến HERO 25K và Con lăn vô cực</h3>
//       <p>Trái tim của G502 là mắt đọc quang học HERO 25K (nâng cấp bằng phần mềm) theo dõi chính xác từng nanomet. 11 phím bấm có thể lập trình Macro thoải mái qua G-Hub. Đặc biệt, con lăn "vô cực" bằng kim loại cung cấp chế độ quay tự do siêu nhanh để cuộn tài liệu hoặc lướt web dài.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Cảm biến", value: "HERO 25K (25,600 DPI)" },
//       { label: "Phím chức năng", value: "11 Phím lập trình được" },
//       { label: "Tùy biến", value: "Hệ thống tạ thay đổi trọng lượng" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột Gaming Có dây (Công thái học)" },
//       { label: "Cảm biến (Sensor)", value: "HERO 25K Optical" },
//       { label: "Độ phân giải (DPI)", value: "100 - 25,600 DPI" },
//       { label: "Kết nối", value: "Cáp USB bọc dù" },
//       { label: "Tính năng", value: "Con lăn siêu tốc (Hyper-fast scroll)" },
//       { label: "Trọng lượng", value: "121g (Kèm 5 x 3.6g tạ phụ)" },
//       { label: "Đèn nền", value: "Lightsync RGB 16.8M" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MOU009",
//     slug: "chuot-logitech-m650-signature-graphite",
//     name: "Chuột Logitech M650 Signature Graphite",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 990000,
//     salePrice: 890000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_logitech_m650_signature_graphite/mouse_logitech_m650_signature_graphite.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_m650_signature_graphite/mouse_logitech_m650_signature_graphite_01.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_m650_signature_graphite/mouse_logitech_m650_signature_graphite_02.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_m650_signature_graphite/mouse_logitech_m650_signature_graphite_03.jpg",
//       "/product_image/mouses_mousepads/mouse_logitech_m650_signature_graphite/mouse_logitech_m650_signature_graphite_04.jpg",
//     ],
//     shortDesc: "Chuột văn phòng Click tĩnh lặng (Silent), cuộn SmartWheel thông minh, pin dùng 24 tháng.",
//     description: `
//       <h3>Cuộn SmartWheel thông minh</h3>
//       <p>Nâng cấp trải nghiệm làm việc văn phòng với Logitech M650 Signature. Nút cuộn SmartWheel tự động thay đổi chế độ cuộn: Cuộn từng dòng chính xác khi bạn đang đọc văn bản, hoặc cuộn trớn siêu tốc khi bạn cần lướt nhanh qua các trang web dài tít tắp.</p>
      
//       <h3>Yên tĩnh tuyệt đối với SilentTouch</h3>
//       <p>Công nghệ SilentTouch độc quyền của Logitech làm giảm 90% tiếng ồn từ các cú nhấp chuột (click) so với chuột thông thường. Nó giúp bạn làm việc tập trung hơn và giữ không gian yên tĩnh cho các đồng nghiệp xung quanh trong không gian làm việc mở.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Tính năng", value: "Click không tiếng ồn (SilentTouch)" },
//       { label: "Kết nối", value: "Bluetooth / Logi Bolt Receiver" },
//       { label: "Thời lượng pin", value: "Lên tới 24 tháng (1 pin AA)" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột Văn phòng Không dây" },
//       { label: "Công nghệ cuộn", value: "SmartWheel (Thông minh đa tốc độ)" },
//       { label: "Công nghệ Click", value: "SilentTouch (Giảm 90% tiếng ồn)" },
//       { label: "Kết nối", value: "Bluetooth Low Energy / Đầu thu USB Logi Bolt" },
//       { label: "Dung lượng pin", value: "1 viên pin AA (Lên đến 24 tháng)" },
//       { label: "Tương thích", value: "Windows, macOS, Linux, Chrome OS, iPadOS, Android" },
//       { label: "Cấu tạo", value: "Phần báng cầm phủ cao su mềm" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "MOU010",
//     slug: "chuot-razer-viper-v3-pro-counter-strike",
//     name: "Chuột Razer Viper V3 Pro Counter Strike",
//     category: "mouse",
//     subcategory: "mouses_mousepads",
//     price: 4490000,
//     salePrice: 4290000,
//     stock: 10,
//     images: [
//       "/product_image/mouses_mousepads/mouse_razer_viper_v3_pro_counter_strike/mouse_razer_viper_v3_pro_counter_strike.png",
//       "/product_image/mouses_mousepads/mouse_razer_viper_v3_pro_counter_strike/mouse_razer_viper_v3_pro_counter_strike_01.jpg",
//       "/product_image/mouses_mousepads/mouse_razer_viper_v3_pro_counter_strike/mouse_razer_viper_v3_pro_counter_strike_02.png",
//       "/product_image/mouses_mousepads/mouse_razer_viper_v3_pro_counter_strike/mouse_razer_viper_v3_pro_counter_strike_03.jpg",
//       "/product_image/mouses_mousepads/mouse_razer_viper_v3_pro_counter_strike/mouse_razer_viper_v3_pro_counter_strike_04.jpg",
//     ],
//     shortDesc: "Kiệt tác không dây siêu nhẹ 54g, cảm biến Focus Pro Gen-2 đạt 35,000 DPI siêu thực.",
//     description: `
//       <h3>Thiết kế bởi PRO, dành cho PRO</h3>
//       <p>Được thiết kế dựa trên sự tham vấn trực tiếp từ các nhà vô địch eSports, Razer Viper V3 Pro mang form dáng đối xứng được tinh chỉnh lại hoàn hảo. Mọi đường cong, độ bám của bề mặt phủ (Smooth-touch) đều được tính toán để mang lại cảm giác làm chủ hoàn toàn con chuột ở bất kỳ cường độ thi đấu nào.</p>
      
//       <h3>Cảm biến quang học Focus Pro Gen-2</h3>
//       <p>Trái tim của Viper V3 Pro là bộ cảm biến quang học Focus Pro 35K Gen-2 mới nhất của Razer. Cảm biến này đạt độ phân giải 35,000 DPI, có khả năng theo dõi chuyển động hoàn hảo trên mọi bề mặt (kể cả kính cường lực). Đi kèm là HyperPolling Wireless Dongle cho phép tần số gửi tín hiệu lên đến 8000Hz, tạo ra độ trễ thấp chưa từng có ở chuột không dây.</p>
//     `,
//     brand: "Razer",
//     specs: {
//       brand: "Razer",
//     },
//     cardSpecs: [
//       { label: "Cảm biến", value: "Focus Pro 35K Optical Gen-2" },
//       { label: "Trọng lượng", value: "Siêu nhẹ 54g" },
//       { label: "Kết nối", value: "Razer HyperSpeed (Hỗ trợ 8000Hz)" },
//     ],
//     detailSpecs: [
//       { label: "Loại chuột", value: "Chuột eSports Không dây (Đối xứng)" },
//       { label: "Phiên bản", value: "Counter-Strike Edition" },
//       { label: "Cảm biến (Sensor)", value: "Focus Pro 35K Optical Gen-2" },
//       { label: "Độ phân giải (DPI)", value: "Tối đa 35,000 DPI" },
//       { label: "Tốc độ / Gia tốc", value: "750 IPS / 70G" },
//       { label: "Polling Rate", value: "Khởi điểm 1000Hz (Hỗ trợ up to 8000Hz)" },
//       { label: "Switch", value: "Razer Optical Mouse Switches Gen-3 (90M Click)" },
//       { label: "Trọng lượng", value: "54g" },
//       { label: "Thời lượng pin", value: "Lên đến 95 giờ (ở 1000Hz)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },
// ];