import { Product } from "@/types/product";

export const coolers: Product[] = [
  {
    id: "COOLER001",
    slug: "tan-nhiet-khi-cooler-master-hyper-620s-argb",
    name: "Tản nhiệt khí Cooler Master Hyper 620S ARGB",
    category: "cooler",
    subcategory: "case_psu_cooler",
    price: 990000,
    salePrice: 850000,
    stock: 15,
    images: [
      "/product_image/case_psu_cooler/cooler_master_hyper_620s/cooler_master_hyper_620s.png", 
      "/product_image/case_psu_cooler/cooler_master_hyper_620s/cooler_master_hyper_620s_01.png",
      "/product_image/case_psu_cooler/cooler_master_hyper_620s/cooler_master_hyper_620s_02.png",
      "/product_image/case_psu_cooler/cooler_master_hyper_620s/cooler_master_hyper_620s_03.png",
    ],
    shortDesc:
      "Tản nhiệt khí tháp đôi mạnh mẽ với 6 ống dẫn nhiệt, trang bị quạt ARGB và khả năng tương thích hoàn hảo cho các dòng CPU hiện đại.",
    description: `
      <h3>Thiết kế tháp đôi (Dual Tower) tối ưu</h3>
      <p>Cooler Master Hyper 620S được thiết kế với cấu trúc tháp đôi giúp tăng diện tích tiếp xúc và giải nhiệt nhanh chóng. Với chiều cao chỉ 154.9mm, bộ tản nhiệt này dễ dàng lắp đặt trong hầu hết các thùng máy mid-tower phổ biến hiện nay mà không lo cấn ram hay kính hông.</p>
      
      <h3>6 ống dẫn nhiệt tiếp xúc trực tiếp</h3>
      <p>Sở hữu 6 ống đồng dẫn nhiệt được hoàn thiện bề mặt tiếp xúc mịn màng, giúp truyền dẫn nhiệt từ CPU lên các lá nhôm một cách hiệu quả nhất. Đây là lựa chọn lý tưởng cho các dòng CPU Intel Core i7 hoặc AMD Ryzen 7 trở lên khi xử lý các tác vụ nặng.</p>
      
      <h3>Quạt ARGB đồng bộ rực rỡ</h3>
      <p>Đi kèm là cặp quạt 120mm hỗ trợ đèn LED ARGB, không chỉ mang lại lưu lượng gió lớn mà còn cho phép bạn tùy chỉnh ánh sáng qua các phần mềm của mainboard như ASUS Aura Sync, MSI Mystic Light hay Gigabyte RGB Fusion.</p>
    `,
    brand: "Cooler Master",
    specs: {
      brand: "Cooler Master",
      type: "Air Cooler",
    },
    cardSpecs: [
      { label: "Kiểu tản nhiệt", value: "Tháp đôi (Dual Tower)" },
      { label: "Số ống đồng", value: "6 ống" },
      { label: "Hệ thống LED", value: "ARGB" },
    ],
    detailSpecs: [
      { label: "Socket hỗ trợ", value: "LGA1700, LGA1200, LGA1151, AM5, AM4" },
      { label: "Kích thước (DxRxC)", value: "125 x 137 x 154.9 mm" },
      { label: "Số lượng quạt", value: "2 quạt 120mm" },
      { label: "Tốc độ quạt", value: "650-1750 RPM (PWM) ± 10%" },
      { label: "Lưu lượng gió", value: "71.93 CFM (Max)" },
      { label: "Áp suất gió", value: "1.86 mmH2O (Max)" },
      { label: "Độ ồn quạt", value: "27.2 dBA" },
      { label: "Tuổi thọ quạt", value: ">160,000 giờ" },
      { label: "Đầu nối nguồn", value: "4-Pin (PWM)" },
      { label: "Đầu nối LED", value: "3-Pin ARGB" },
      { label: "Điện áp định mức", value: "12 VDC" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },
  {
    id: "COOLER002",
    slug: "tan-nhiet-nuoc-cooler-master-masterliquid-360l-core-argb",
    name: "Tản nhiệt nước Cooler Master MasterLiquid 360L Core ARGB",
    category: "cooler",
    subcategory: "case_psu_cooler",
    price: 2390000,
    salePrice: 2150000,
    stock: 10,
    images: [
      "/product_image/case_psu_cooler/cooler_aio_cooler_master_masterliquid/cooler_aio_cooler_master_masterliquid.png",
      "/product_image/case_psu_cooler/cooler_aio_cooler_master_masterliquid/cooler_aio_cooler_master_masterliquid_01.png",
    ],
    shortDesc: "Thế hệ tản nhiệt nước AIO mới với bơm buồng đôi Gen S cải tiến, tăng cường lưu lượng nước và áp suất để giải nhiệt tối ưu.",
    description: `
      <h3>Bơm buồng đôi Gen S cải tiến</h3>
      <p>Thiết kế đế đồng mới giúp tối ưu hóa điểm tiếp xúc nhiệt, kết hợp cùng bơm buồng đôi thế hệ mới tăng cường hiệu suất truyền nhiệt và độ bền vận hành.</p>
      <h3>Diện tích bề mặt Radiator lớn hơn</h3>
      <p>Các lá nhôm trên radiator được thiết kế sâu hơn giúp tăng diện tích bề mặt giải nhiệt, đi kèm quạt ARGB 120mm được nâng cấp để tối ưu luồng gió.</p>
    `,
    brand: "Cooler Master",
    specs: { brand: "Cooler Master", type: "Liquid Cooler" },
    cardSpecs: [
      { label: "Loại tản nhiệt", value: "AIO 360mm" },
      { label: "Số lượng quạt", value: "3 quạt ARGB" },
      { label: "Bơm", value: "Dual Chamber Gen S" },
    ],
    detailSpecs: [
      { label: "Socket hỗ trợ", value: "LGA1700, 1200, 115x, AM5, AM4" },
      { label: "Kích thước Radiator", value: "394 x 119.6 x 27.2 mm" },
      { label: "Tốc độ quạt", value: "650-1750 RPM ± 10%" },
      { label: "Độ ồn quạt", value: "27.2 dBA (Max)" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },
  {
    id: "COOLER003",
    slug: "tan-nhiet-nuoc-deepcool-lt520-240mm",
    name: "Tản nhiệt nước Deepcool LT520 Premium Liquid CPU Cooler",
    category: "cooler",
    subcategory: "case_psu_cooler",
    price: 2650000,
    salePrice: 2390000,
    stock: 8,
    images: [
      "/product_image/case_psu_cooler/cooler_aio_deepcool_lt520/cooler_aio_deepcool_lt520.png",
      "/product_image/case_psu_cooler/cooler_aio_deepcool_lt520/cooler_aio_deepcool_lt520_01.png",
      "/product_image/case_psu_cooler/cooler_aio_deepcool_lt520/cooler_aio_deepcool_lt520_02.png",
      "/product_image/case_psu_cooler/cooler_aio_deepcool_lt520/cooler_aio_deepcool_lt520_03.png",
      "/product_image/case_psu_cooler/cooler_aio_deepcool_lt520/cooler_aio_deepcool_lt520_04.png",
    ],
    shortDesc: "Thiết kế mặt block gương vô cực đa chiều độc đáo kết hợp cùng bơm thế hệ thứ 4 hiệu suất cực cao.",
    description: `
      <h3>Thẩm mỹ gương vô cực đa chiều</h3>
      <p>Mặt block của LT520 sở hữu thiết kế lập phương gương vô cực độc bản, tạo hiệu ứng thị giác 3D huyền ảo khi kết hợp cùng hệ thống LED ARGB.</p>
      <h3>Công nghệ chống rò rỉ Anti-Leak</h3>
      <p>Deepcool trang bị công nghệ cân bằng áp suất bên trong radiator, giúp giảm thiểu rủi ro rò rỉ chất lỏng sau thời gian dài sử dụng.</p>
    `,
    brand: "Deepcool",
    specs: { brand: "Deepcool", type: "Liquid Cooler" },
    cardSpecs: [
      { label: "Loại tản nhiệt", value: "AIO 240mm" },
      { label: "Công nghệ", value: "Anti-Leak Tech" },
      { label: "Thiết kế", value: "Infinity Mirror" },
    ],
    detailSpecs: [
      { label: "Kích thước Radiator", value: "282 x 120 x 27 mm" },
      { label: "Tốc độ bơm", value: "3100 RPM ± 10%" },
      { label: "Quạt đi kèm", value: "2 x FK120 PWM" },
      { label: "Lưu lượng gió", value: "85.85 CFM" },
      { label: "Bảo hành", value: "60 Tháng (5 Năm)" },
    ],
  },
  {
    id: "COOLER004",
    slug: "tan-nhiet-khi-deepcool-ak400-digital-argb",
    name: "Tản nhiệt khí Deepcool AK400 Digital ARGB",
    category: "cooler",
    subcategory: "case_psu_cooler",
    price: 950000,
    salePrice: 850000,
    stock: 20,
    images: [
      "/product_image/case_psu_cooler/cooler_deepcool_ak400_digital_argb/cooler_deepcool_ak400_digital_argb.png",
      "/product_image/case_psu_cooler/cooler_deepcool_ak400_digital_argb/cooler_deepcool_ak400_digital_argb_01.png",
      "/product_image/case_deepcool_ak400_digital_argb/cooler_deepcool_ak400_digital_argb_02.png",
      "/product_image/case_deepcool_ak400_digital_argb/cooler_deepcool_ak400_digital_argb_03.png",
    ],
    shortDesc: "Màn hình kỹ thuật số hiển thị nhiệt độ CPU thời gian thực cùng dải LED ARGB phong cách trên tháp tản nhiệt đơn hiệu suất cao.",
    description: `
      <h3>Màn hình trạng thái kỹ thuật số</h3>
      <p>Điểm nhấn lớn nhất là màn hình hiển thị nhiệt độ và mức sử dụng CPU trực quan, đi kèm cảnh báo khi nhiệt độ quá cao thông qua phần mềm chuyên dụng.</p>
      <h3>Khả năng tương thích RAM tuyệt vời</h3>
      <p>Với thiết kế tháp đơn mỏng và ống đồng được tính toán kỹ lưỡng, AK400 Digital hoàn toàn không gây cấn các loại RAM có tản nhiệt cao.</p>
    `,
    brand: "Deepcool",
    specs: { brand: "Deepcool", type: "Air Cooler" },
    cardSpecs: [
      { label: "Tiện ích", value: "Màn hình LED hiển thị" },
      { label: "Số ống đồng", value: "4 ống 6mm" },
      { label: "Tản nhiệt", value: "Tháp đơn" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "126 x 97 x 156 mm" },
      { label: "Quạt", value: "1 x 120mm FDB Fan" },
      { label: "Độ ồn quạt", value: "≤28 dBA" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },
  {
    id: "COOLER005",
    slug: "tan-nhiet-nuoc-jonsbo-tf360-sc-argb-white",
    name: "Tản nhiệt nước Jonsbo TF360 SC ARGB - LCD Display",
    category: "cooler",
    subcategory: "case_psu_cooler",
    price: 2150000,
    salePrice: 1850000,
    stock: 12,
    images: [
      "/product_image/case_psu_cooler/cooler_jonsbo_tf_360_lcd_argb/cooler_jonsbo_tf_360_lcd_argb.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_tf_360_lcd_argb/cooler_jonsbo_tf_360_lcd_argb_01.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_tf_360_lcd_argb/cooler_jonsbo_tf_360_lcd_argb_02.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_tf_360_lcd_argb/cooler_jonsbo_tf_360_lcd_argb_03.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_tf_360_lcd_argb/cooler_jonsbo_tf_360_lcd_argb_04.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_tf_360_lcd_argb/cooler_jonsbo_tf_360_lcd_argb_05.jpg",
    ],
    shortDesc: "Trang bị màn hình LCD trên mặt block cho phép tùy biến hình ảnh và theo dõi thông số hệ thống, tông màu trắng sang trọng.",
    brand: "Jonsbo",
    specs: { brand: "Jonsbo", type: "Liquid Cooler" },
    cardSpecs: [
      { label: "Màn hình", value: "LCD 2.1 inch" },
      { label: "Màu sắc", value: "White" },
      { label: "Radiator", value: "360mm" },
    ],
    detailSpecs: [
      { label: "Kích thước Radiator", value: "397 x 120 x 27 mm" },
      { label: "Số lượng quạt", value: "3 x 120mm ARGB" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },
  {
    id: "COOLER006",
    slug: "tan-nhiet-nuoc-jonsbo-th240-argb-black",
    name: "Tản nhiệt nước Jonsbo TH240 ARGB Black",
    category: "cooler",
    subcategory: "case_psu_cooler",
    price: 1390000,
    salePrice: 1150000,
    stock: 15,
    images: [
      "/product_image/case_psu_cooler/cooler_jonsbo_th_240_black_argb/cooler_jonsbo_th_240_black_argb.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_th_240_black_argb/cooler_jonsbo_th_240_black_argb_01.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_th_240_black_argb/cooler_jonsbo_th_240_black_argb_02.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_th_240_black_argb/cooler_jonsbo_th_240_black_argb_03.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_th_240_black_argb/cooler_jonsbo_th_240_black_argb_04.jpg",
      "/product_image/case_psu_cooler/cooler_jonsbo_th_240_black_argb/cooler_jonsbo_th_240_black_argb_05.jpg",
    ],
    shortDesc: "Giải pháp tản nhiệt nước AIO hiệu năng ổn định trong tầm giá cực tốt với hệ thống quạt ARGB rực rỡ.",
    brand: "Jonsbo",
    specs: { brand: "Jonsbo", type: "Liquid Cooler" },
    cardSpecs: [
      { label: "Loại tản", value: "AIO 240mm" },
      { label: "Đèn LED", value: "ARGB Sync Hub" },
      { label: "Màu sắc", value: "Black" },
    ],
    detailSpecs: [
      { label: "Tốc độ bơm", value: "2500 RPM ± 10%" },
      { label: "Số lượng quạt", value: "2 x 120mm ARGB" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

];