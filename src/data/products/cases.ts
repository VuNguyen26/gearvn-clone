// import { db } from "@/lib/firebase";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { Product } from "@/types/product";

// export const cases = async (): Promise<Product[]> => {
//   const CACHE_KEY = "case_products_session";
//   const isBrowser = typeof window !== "undefined";
//   // 1. Kiểm tra Cache (Chỉ chạy trên Client)
//   if (isBrowser) {
//     const cachedData = sessionStorage.getItem(CACHE_KEY);
//     if (cachedData) {
//       console.log("⚡ [CASE] Lấy từ Session Storage (0 Read)");
//       return JSON.parse(cachedData) as Product[];
//     }
//   }
//   // 2. Fetch Firebase (Chạy trên cả Server và Client)
//   try {
//     const q = query(
//       collection(db, "products"),
//       where("category", "==", "case")
//     );
//     const snapshot = await getDocs(q);
//     const products = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data(),
//     })) as Product[];
//     // 3. Lưu vào Cache (Chỉ thực hiện trên Client)
//     if (isBrowser) {
//       sessionStorage.setItem(CACHE_KEY, JSON.stringify(products));
//     }
//     return products;
//   } catch (error) {
//     console.error("Lỗi fetch cases:", error);
//     return [];
//   }
// };

export const cases: Product[] = [
  {
    id: "CASE001",
    slug: "vo-case-asus-rog-strix-helios-ii-hatsune-miku-edition",
    name: "Vỏ Case ASUS ROG Strix Helios II Hatsune Miku Edition",
    category: "case",
    subcategory: "case_psu_cooler",
    price: 12990000,
    salePrice: 11040000,
    stock: 5,
    images: [
      "/product_image/case_psu_cooler/CASE001/case_asus_rog_strix_helios_2_hatsune_miku.png",
      "/product_image/case_psu_cooler/CASE001/case_asus_rog_strix_helios_2_hatsune_miku_01.png",
      "/product_image/case_psu_cooler/CASE001/case_asus_rog_strix_helios_2_hatsune_miku_02.png",
      "/product_image/case_psu_cooler/CASE001/case_asus_rog_strix_helios_2_hatsune_miku_03.png",
      "/product_image/case_psu_cooler/CASE001/case_asus_rog_strix_helios_2_hatsune_miku_04.png",
      "/product_image/case_psu_cooler/CASE001/case_asus_rog_strix_helios_2_hatsune_miku_05.png",
    ],
    shortDesc:
      "Phiên bản giới hạn Hatsune Miku với thiết kế Mid-Tower cao cấp, hỗ trợ EATX và hệ thống đèn Aura Sync ARGB rực rỡ.",
    description: `
      <h3>Thiết kế độc bản Hatsune Miku</h3>
      <p>ASUS ROG Strix Helios II Hatsune Miku Edition sở hữu tông màu xanh lam-xanh lục và hồng đặc trưng của "nàng thơ" ảo Hatsune Miku. Mặt trước bằng nhôm phay xước kết hợp với kính cường lực 4mm ở hai bên hông giúp phô diễn toàn bộ linh kiện bên trong một cách đẳng cấp.</p>
      
      <h3>Hiệu suất tản nhiệt vượt trội</h3>
      <p>Case được trang bị sẵn 4 quạt 140mm hiệu suất cao (3 quạt trước, 1 quạt sau) đảm bảo luồng khí lưu thông tối ưu. Hỗ trợ lắp đặt radiator lên đến 420mm ở phía trước và 360mm ở phía trên, sẵn sàng cho những hệ thống tản nhiệt nước custom phức tạp nhất.</p>
      
      <h3>Khả năng mở rộng và quản lý cáp thông minh</h3>
      <p>Với không gian rộng rãi, Helios II hỗ trợ card đồ họa dài tới 450mm và tản nhiệt CPU cao 190mm. Hệ thống quản lý cáp với nắp đậy đa năng giúp che giấu dây nhợ gọn gàng, đi kèm dây đeo vải dệt hình chữ X chắc chắn giúp bạn dễ dàng di chuyển bộ máy đến các buổi party LAN.</p>
    `,
    brand: "ASUS",
    specs: {
      brand: "ASUS",
      type: "Mid Tower",
    },
    cardSpecs: [
      { label: "Loại case", value: "Mid Tower" },
      { label: "Hỗ trợ Main", value: "EATX, ATX, Micro-ATX" },
      { label: "Màu sắc", value: "Hatsune Miku Edition" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "250 x 565 x 591 mm" },
      { label: "Trọng lượng", value: "18 kg" },
      { label: "Chất liệu", value: "Nhôm, Thép, Kính cường lực" },
      { label: "Hỗ trợ Mainboard", value: "EATX (12\"x10.9\"), ATX, Micro-ATX, Mini-ITX" },
      { label: "Khay ổ đĩa", value: "4 x 2.5\" Bay, 2 x 2.5\"/3.5\" Combo Bay" },
      { label: "Khe mở rộng", value: "8 + 2 (dọc)" },
      { label: "Cổng I/O trước", value: "1 x Headphone/Mic, 2 x USB 3.2 Gen 2x2 Type-C, 4 x USB 3.2 Gen 1" },
      { label: "Hỗ trợ Radiator", value: "Trước: 420mm, Trên: 360mm, Sau: 140mm" },
      { label: "Chiều dài GPU tối đa", value: "450 mm" },
      { label: "Chiều cao tản CPU tối đa", value: "190 mm" },
      { label: "Hệ thống quạt đi kèm", value: "Trước: 3 x 140mm PWM, Sau: 1 x 140mm PWM" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "CASE002",
    slug: "vo-case-asus-rog-hyperion-gr701",
    name: "Vỏ Case ASUS ROG Hyperion GR701",
    category: "case",
    subcategory: "case_psu_cooler",
    price: 11990000,
    salePrice: 10990000,
    stock: 10,
    images: [
      "/product_image/case_psu_cooler/CASE002/case_asus_rog_hyperion_gr701.jpg",
      "/product_image/case_psu_cooler/CASE002/case_asus_rog_hyperion_gr701_01.png",
      "/product_image/case_psu_cooler/CASE002/case_asus_rog_hyperion_gr701_02.png",
      "/product_image/case_psu_cooler/CASE002/case_asus_rog_hyperion_gr701_03.png",
      "/product_image/case_psu_cooler/CASE002/case_asus_rog_hyperion_gr701_04.png",
      "/product_image/case_psu_cooler/CASE002/case_asus_rog_hyperion_gr701_05.png",
    ],
    shortDesc: "Siêu phẩm Full Tower với khả năng hỗ trợ tản nhiệt nước tối thượng và thiết kế khung chữ X đặc trưng của ROG.",
    description: `
      <h3>Hiệu năng làm mát đỉnh cao</h3>
      <p>ROG Hyperion hỗ trợ lắp đặt hai radiator 420mm đồng thời, đi kèm 4 quạt 140mm PWM lắp sẵn và một hub quạt tích hợp, đảm bảo luồng khí lưu thông mạnh mẽ nhất cho các linh kiện cao cấp.</p>
      <h3>Không gian lắp đặt rộng rãi</h3>
      <p>Hỗ trợ bo mạch chủ E-ATX, card đồ họa dài đến 460mm và có ngăn chứa phụ kiện riêng biệt. Khung nhôm đúc nguyên khối mang lại sự chắc chắn và sang trọng tuyệt đối.</p>
    `,
    brand: "ASUS",
    specs: { brand: "ASUS", type: "Full Tower" },
    cardSpecs: [
      { label: "Loại case", value: "Full Tower" },
      { label: "Hỗ trợ Main", value: "EATX, ATX, Micro-ATX" },
      { label: "Màu sắc", value: "Black" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "268 x 639 x 659 mm" },
      { label: "Trọng lượng", value: "20.8 kg" },
      { label: "Chất liệu", value: "Hợp kim nhôm, Thép, Kính cường lực" },
      { label: "Cổng I/O trước", value: "2 x USB 3.2 Gen 2x2 (Type-C), 4 x USB 3.2 Gen 1" },
      { label: "Chiều dài GPU tối đa", value: "460 mm" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },
  {
    id: "CASE003",
    slug: "vo-case-lian-li-o11-vision-compact-black",
    name: "Vỏ Case Lian Li O11 Vision Compact - Black",
    category: "case",
    subcategory: "case_psu_cooler",
    price: 3350000,
    salePrice: 3150000,
    stock: 15,
    images: [
      "/product_image/case_psu_cooler/CASE003/case_lianli_o11_vision_compact_black.png",
      "/product_image/case_psu_cooler/CASE003/case_lianli_o11_vision_compact_black_01.png",
      "/product_image/case_psu_cooler/CASE003/case_lianli_o11_vision_compact_black_02.png",
      "/product_image/case_psu_cooler/CASE003/case_lianli_o11_vision_compact_black_03.png",
    ],
    shortDesc: "Thiết kế 3 mặt kính cường lực không cột trụ, mang đến góc nhìn panorama không giới hạn cho hệ thống của bạn.",
    description: `
      <h3>Tầm nhìn Panorama không giới hạn</h3>
      <p>Lian Li O11 Vision Compact loại bỏ các cột trụ ở góc, kết hợp 3 tấm kính cường lực để phô diễn trọn vẹn vẻ đẹp bên trong máy tính từ mọi góc độ.</p>
      <h3>Thiết kế khoang đôi đặc trưng</h3>
      <p>Tiếp nối thành công của dòng O11, phiên bản Vision Compact tối ưu hóa việc đi dây ở khoang sau, giúp bộ máy luôn gọn gàng và chuyên nghiệp.</p>
    `,
    brand: "Lian Li",
    specs: { brand: "Lian Li", type: "Mid Tower" },
    cardSpecs: [
      { label: "Loại case", value: "Mid Tower" },
      { label: "Hỗ trợ Main", value: "ATX, Micro-ATX, ITX" },
      { label: "Màu sắc", value: "Black" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "447.5 x 287.5 x 446.4 mm" },
      { label: "Chất liệu", value: "Thép 3.0mm, Kính cường lực 4.0mm" },
      { label: "Hỗ trợ Radiator", value: "Cạnh bên: 360mm, Dưới: 360mm" },
      { label: "Chiều dài GPU tối đa", value: "408 mm" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },
  {
    id: "CASE004",
    slug: "vo-case-jonsbo-tk3-white",
    name: "Vỏ Case Jonsbo TK3 White",
    category: "case",
    subcategory: "case_psu_cooler",
    price: 2150000,
    salePrice: 1950000,
    stock: 20,
    images: [
      "/product_image/case_psu_cooler/case_jonsbo_tk3_white/case_jonsbo_tk3_white.jpg",
      "/product_image/case_psu_cooler/case_jonsbo_tk3_white/case_jonsbo_tk3_white_01.jpg",
      "/product_image/case_psu_cooler/case_jonsbo_tk3_white/case_jonsbo_tk3_white_02.jpg",
      "/product_image/case_psu_cooler/case_jonsbo_tk3_white/case_jonsbo_tk3_white_03.jpg",
      "/product_image/case_psu_cooler/case_jonsbo_tk3_white/case_jonsbo_tk3_white_04.jpg",
      "/product_image/case_psu_cooler/case_jonsbo_tk3_white/case_jonsbo_tk3_white_05.jpg",
      "/product_image/case_psu_cooler/case_jonsbo_tk3_white/case_jonsbo_tk3_white_06.jpg",
    ],
    shortDesc: "Vỏ case bể cá với kính uốn cong 270 độ, thiết kế tinh tế và hiện đại cho các bộ máy tông màu trắng.",
    description: `
      <h3>Kính uốn cong liền mạch</h3>
      <p>Jonsbo TK3 nổi bật với tấm kính cường lực uốn cong bao quanh từ mặt trước sang mặt bên, tạo hiệu ứng thị giác mượt mà và đẳng cấp.</p>
      <h3>Hỗ trợ tản nhiệt mạnh mẽ</h3>
      <p>Dù có thiết kế kính nhưng TK3 vẫn đảm bảo nhiệt độ ổn định nhờ khả năng lắp đặt tối đa 10 quạt 120mm và hỗ trợ radiator 360mm ở phía trên.</p>
    `,
    brand: "Jonsbo",
    specs: { brand: "Jonsbo", type: "Mid Tower" },
    cardSpecs: [
      { label: "Loại case", value: "Mid Tower" },
      { label: "Hỗ trợ Main", value: "ATX, M-ATX, ITX" },
      { label: "Màu sắc", value: "White" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "288 x 438 x 415 mm" },
      { label: "Chất liệu", value: "Thép, Kính cường lực" },
      { label: "Chiều dài GPU tối đa", value: "420 mm" },
      { label: "Cổng I/O", value: "1 x USB 3.2 Gen 2 Type-C, 2 x USB 3.0" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },
  {
    id: "CASE005",
    slug: "vo-case-cooler-master-masterbox-td500-mesh-v2",
    name: "Vỏ Case Cooler Master MasterBox TD500 Mesh V2",
    category: "case",
    subcategory: "case_psu_cooler",
    price: 2500000,
    salePrice: 2250000,
    stock: 12,
    images: [
      "/product_image/case_psu_cooler/case_cooler_master_masterbox_td500_mesh_v2/case_cooler_master_masterbox_td500_mesh_v2.png",
      "/product_image/case_psu_cooler/case_cooler_master_masterbox_td500_mesh_v2/case_cooler_master_masterbox_td500_mesh_v2_01.png",
      "/product_image/case_psu_cooler/case_cooler_master_masterbox_td500_mesh_v2/case_cooler_master_masterbox_td500_mesh_v2_02.png",
      "/product_image/case_psu_cooler/case_cooler_master_masterbox_td500_mesh_v2/case_cooler_master_masterbox_td500_mesh_v2_03.png",
      "/product_image/case_psu_cooler/case_cooler_master_masterbox_td500_mesh_v2/case_cooler_master_masterbox_td500_mesh_v2_04.png",
    ],
    shortDesc: "Thiết kế mặt lưới đa giác FineMesh độc quyền cùng hệ thống 3 quạt ARGB mang lại hiệu năng tản nhiệt tối ưu.",
    description: `
      <h3>Thiết kế mặt lưới đa giác độc đáo</h3>
      <p>Mặt trước FineMesh của TD500 Mesh V2 không chỉ tạo điểm nhấn thẩm mỹ với các đường cắt đa giác mà còn tối ưu hóa luồng không khí, đồng thời lọc bụi hiệu quả.</p>
      <h3>Hỗ trợ tản nhiệt đa dạng</h3>
      <p>Phiên bản V2 cải tiến hỗ trợ lắp đặt tản nhiệt nước 360mm ở cả mặt trước và mặt trên, cùng không gian rộng rãi cho các dòng card đồ họa mới nhất.</p>
    `,
    brand: "Cooler Master",
    specs: { brand: "Cooler Master", type: "Mid Tower" },
    cardSpecs: [
      { label: "Loại case", value: "Mid Tower" },
      { label: "Hỗ trợ Main", value: "E-ATX, ATX, M-ATX" },
      { label: "Màu sắc", value: "Black" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "499 x 210 x 500 mm" },
      { label: "Chất liệu", value: "Thép, Nhựa, Kính cường lực" },
      { label: "Cổng I/O", value: "2 x USB 3.2 Gen 1, 1 x USB 3.2 Gen 2 Type-C, Audio In/Out" },
      { label: "Chiều dài GPU tối đa", value: "410 mm" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },
  {
    id: "CASE006",
    slug: "vo-case-corsair-6500x-tg-mid-tower-black",
    name: "Vỏ Case Corsair 6500X Tempered Glass Mid-Tower - Black",
    category: "case",
    subcategory: "case_psu_cooler",
    price: 4990000,
    salePrice: 4550000,
    stock: 8,
    images: [
      "/product_image/case_psu_cooler/case_corsair_6500x_tg_mid_tower/case_corsair_6500x_tg_mid_tower.png",
      "/product_image/case_psu_cooler/case_corsair_6500x_tg_mid_tower/case_corsair_6500x_tg_mid_tower_01.png",
      "/product_image/case_psu_cooler/case_corsair_6500x_tg_mid_tower/case_corsair_6500x_tg_mid_tower_02.png",
      "/product_image/case_psu_cooler/case_corsair_6500x_tg_mid_tower/case_corsair_6500x_tg_mid_tower_03.png",
      "/product_image/case_corsair_6500x_tg_mid_tower/case_corsair_6500x_tg_mid_tower_04.png",
      "/product_image/case_corsair_6500x_tg_mid_tower/case_corsair_6500x_tg_mid_tower_05.png",
      "/product_image/case_corsair_6500x_tg_mid_tower/case_corsair_6500x_tg_mid_tower_06.png",
    ],
    shortDesc: "Thiết kế khoang đôi (Dual Chamber) hiện đại, tối ưu hóa lưu thông không khí và hỗ trợ các bo mạch chủ kết nối ngược (BTF/Project Zero).",
    description: `
      <h3>Thiết kế khoang đôi thế hệ mới</h3>
      <p>Corsair 6500X tách biệt các linh kiện tỏa nhiệt mạnh và hệ thống dây cáp sang hai khoang riêng biệt, giúp bộ máy trông cực kỳ sạch sẽ và thoáng mát.</p>
      <h3>Sẵn sàng cho tương lai</h3>
      <p>Hỗ trợ hoàn hảo cho các dòng bo mạch chủ có cổng kết nối mặt sau như ASUS BTF và MSI Project Zero, giúp giấu dây hoàn toàn khỏi tầm mắt.</p>
    `,
    brand: "Corsair",
    specs: { brand: "Corsair", type: "Mid Tower" },
    cardSpecs: [
      { label: "Loại case", value: "Mid Tower" },
      { label: "Hỗ trợ Main", value: "ATX, M-ATX, Mini-ITX" },
      { label: "Màu sắc", value: "Black" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "481 x 328 x 496 mm" },
      { label: "Chất liệu", value: "Thép, Kính cường lực" },
      { label: "Hỗ trợ quạt", value: "Tối đa 10 x 120mm hoặc 7 x 140mm" },
      { label: "Chiều dài GPU tối đa", value: "400 mm" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },
  {
  id: "CASE-17404",
  slug: "vo-may-tinh-jonsbo-tk1-black",
  name: "Vỏ máy tính Jonsbo TK1 Black",
  category: "case",
  subcategory: "case_psu_cooler",
  price: 2690000,
  salePrice: 2590000,
  stock: 15,
  images: [
    "/product_image/CASE007/CASE007_1.jpg",
    "/product_image/CASE007/CASE007_2.jpg",
    "/product_image/CASE007/CASE007_3.jpg",
    "/product_image/CASE007/CASE007_4.jpg",
    "/product_image/CASE007/CASE007_5.jpg",
    "/product_image/CASE007/CASE007_6.jpg",
    "/product_image/CASE007/CASE007_7.jpg",
  ],
  shortDesc: "Thiết kế kính cong vô cực độc đáo, hỗ trợ Mainboard ITX/M-ATX, tối ưu không gian cho các dàn máy Gaming hiện đại.",
  description: `
    <h3>Thiết kế kính cong 2 mặt</h3>
    <p>Jonsbo TK1 sở hữu tấm kính cường lực uốn cong liền mạch, loại bỏ cột góc giúp phô diễn trọn vẹn vẻ đẹp linh kiện bên trong.</p>
    <h3>Cấu trúc khoang kép</h3>
    <p>Thiết kế tách biệt khoang nguồn và khoang linh kiện chính giúp tối ưu hóa luồng khí và giấu dây cáp cực kỳ gọn gàng.</p>
    <h3>Hỗ trợ tản nhiệt mạnh mẽ</h3>
    <p>Dù có kích thước nhỏ gọn nhưng vẫn hỗ trợ tối đa các dòng tản nhiệt khí và tản nhiệt nước AIO, đảm bảo hệ thống luôn mát mẻ.</p>
  `,
  brand: "Jonsbo",
  specs: { 
    brand: "Jonsbo", 
    type: "Mid Tower" 
  },
  cardSpecs: [
    { label: "Loại case", value: "Mid Tower" },
    { label: "Hỗ trợ Main", value: "M-ATX, ITX" },
    { label: "Màu sắc", value: "Black" },
  ],
  detailSpecs: [
    { label: "Kích thước", value: "299 x 310 x 345 mm" },
    { label: "Chất liệu", value: "Thép, Hợp kim nhôm, Kính cường lực" },
    { label: "Hỗ trợ GPU", value: "Tối đa 280mm" },
    { label: "Bảo hành", value: "12 Tháng" },
  ],
  }
];