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
];