import { Product } from "@/types/product";

export const laptops: Product[] = [
//============================ACER===========================
  {
    id: "P001",
    slug: "laptop-acer-aspire-5",
    name: "Laptop Acer Aspire 5 A515 58P 71EJ",
    category: "laptop",
    price: 20490000,
    salePrice: 20190000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_aspire_5/laptop_acer_aspire_5_a515_58p.png",
      "/product_image/laptops/laptop_acer_aspire_5/laptop_acer_aspire_5_01.png",
      "/product_image/laptops/laptop_acer_aspire_5/laptop_acer_aspire_5_02.png",
      "/product_image/laptops/laptop_acer_aspire_5/laptop_acer_aspire_5_03.png",
      "/product_image/laptops/laptop_acer_aspire_5/laptop_acer_aspire_5_04.png",
      "/product_image/laptops/laptop_acer_aspire_5/laptop_acer_aspire_5_05.png",
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core i7-1355U",
      ram: "16GB",
      storage: "1TB SSD",
      screen: "15.6 inch",
    },
    shortDesc: "Laptop mỏng nhẹ, cấu hình i7 mạnh mẽ, màn hình 15.6 inch rộng rãi cho dân văn phòng.",
    description: `
      <h3>Hiệu năng dẫn đầu phân khúc văn phòng</h3>
      <p>Acer Aspire 5 A515 được trang bị bộ vi xử lý Intel Core i7-1355U thế hệ 13 mới nhất, cung cấp sức mạnh vượt trội để xử lý mượt mà từ các bảng tính Excel hàng vạn dòng cho đến các phần mềm thiết kế 2D cơ bản. Đi kèm là dung lượng RAM 16GB đa nhiệm trơn tru và ổ cứng SSD 1TB siêu tốc, không gian lưu trữ cực lớn.</p>
      
      <h3>Màn hình 15.6 inch FHD viền mỏng</h3>
      <p>Trải nghiệm hình ảnh sắc nét trên không gian hiển thị rộng lớn 15.6 inch độ phân giải Full HD. Tấm nền IPS kết hợp công nghệ Acer ComfyView giúp giảm chói và chống lóa, bảo vệ mắt hiệu quả khi bạn phải làm việc trước màn hình liên tục trong nhiều giờ.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i7-1355U" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Ổ cứng", value: "1TB SSD PCIe" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i7-1355U (10 Nhân / 12 Luồng, Up to 5.0GHz)" },
      { label: "RAM", value: "16GB DDR4 3200MHz" },
      { label: "Ổ cứng", value: "1TB PCIe NVMe SSD" },
      { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, Acer ComfyView" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Cổng kết nối", value: "1x USB Type-C, 2x USB 3.2, 1x HDMI, 1x 3.5mm" },
      { label: "Trọng lượng", value: "1.7 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P002",
    slug: "laptop-acer-aspire-5-a514",
    name: "Laptop Acer Aspire 5 A514 56P 562P",
    category: "laptop",
    price: 15990000,
    salePrice: 12790000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_aspire_5_a514/laptop_acer_aspire_5_a514_56p_562p.png",
      "/product_image/laptops/laptop_acer_aspire_5_a514/laptop_acer_aspire_5_a514_01.png",
      "/product_image/laptops/laptop_acer_aspire_5_a514/laptop_acer_aspire_5_a514_02.png",
      "/product_image/laptops/laptop_acer_aspire_5_a514/laptop_acer_aspire_5_a514_03.png",
      "/product_image/laptops/laptop_acer_aspire_5_a514/laptop_acer_aspire_5_a514_04.png",
      "/product_image/laptops/laptop_acer_aspire_5_a514/laptop_acer_aspire_5_a514_05.png",
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core i7-1355U",
      ram: "16GB",
      storage: "1TB SSD",
      screen: "14 inch",
    },
    shortDesc: "Thiết kế 14 inch nhỏ gọn, tính di động cao đi kèm cấu hình Intel Core i7 vô song.",
    description: `
      <h3>Sức mạnh khổng lồ trong thân máy 14 inch</h3>
      <p>Mang trong mình con chip Intel Core i7-1355U siêu mạnh nhưng Acer Aspire 5 A514 lại sở hữu kích thước vô cùng nhỏ gọn với màn hình 14 inch. Đây là sự lựa chọn tối ưu cho các bạn sinh viên hoặc dân sale thường xuyên phải di chuyển, mang theo laptop đi học, đi cà phê mỗi ngày.</p>
      
      <h3>Đa nhiệm mượt mà, lưu trữ bất tận</h3>
      <p>Máy được trang bị sẵn 16GB RAM chuẩn LPDDR5 tốc độ cao, cho phép bạn mở hàng chục tab Chrome cùng lúc mà không hề gặp hiện tượng tải lại trang. Ổ cứng SSD 1TB mang đến một không gian rộng rãi để lưu trữ mọi tài liệu học tập, phim ảnh và các tệp thiết kế đồ họa.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i7-1355U" },
      { label: "RAM", value: "16GB LPDDR5" },
      { label: "Màn hình", value: "14 inch WUXGA" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i7-1355U (10 Nhân / 12 Luồng, Up to 5.0GHz)" },
      { label: "RAM", value: "16GB LPDDR5 (Onboard)" },
      { label: "Ổ cứng", value: "1TB PCIe NVMe Gen 4 SSD" },
      { label: "Màn hình", value: "14 inch WUXGA (1920x1200), IPS 16:10" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Trọng lượng", value: "1.5 kg" },
      { label: "Chất liệu", value: "Vỏ kim loại mặt A" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P003",
    slug: "laptop-acer-aspire-16-ai",
    name: "Laptop Acer Aspire 16 AI A16 71M 71U7",
    category: "laptop",
    price: 21590000,
    salePrice: 18890000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_aspire_16_ai/laptop_acer_aspire_16_ai_a16-71m.png",
      "/product_image/laptops/laptop_acer_aspire_16_ai/laptop_acer_aspire_16_ai_01.png",
      "/product_image/laptops/laptop_acer_aspire_16_ai/laptop_acer_aspire_16_ai_02.png",
      "/product_image/laptops/laptop_acer_aspire_16_ai/laptop_acer_aspire_16_ai_03.png",
      "/product_image/laptops/laptop_acer_aspire_16_ai/laptop_acer_aspire_16_ai_04.png",
      "/product_image/laptops/laptop_acer_aspire_16_ai/laptop_acer_aspire_16_ai_05.png",
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core Ultra 7 155H",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "16 inch",
    },
    shortDesc: "Laptop AI thế hệ mới, tích hợp NPU xử lý trí tuệ nhân tạo, màn hình 16 inch cực lớn.",
    description: `
      <h3>Tiên phong kỉ nguyên AI PC</h3>
      <p>Acer Aspire 16 AI được trang bị vi xử lý Intel Core Ultra 7 155H tiên tiến, tích hợp sẵn nhân NPU chuyên biệt cho các tác vụ Trí tuệ nhân tạo. Công nghệ này không chỉ hỗ trợ xử lý hình ảnh, âm thanh trong các ứng dụng nhanh hơn mà còn giúp tiết kiệm pin đáng kể cho toàn bộ hệ thống.</p>
      
      <h3>Không gian sáng tạo 16 inch</h3>
      <p>Sở hữu màn hình kích thước 16 inch với tỷ lệ 16:10 thời thượng, không gian hiển thị theo chiều dọc được mở rộng, rất thuận tiện cho việc viết code, đọc tài liệu hay lướt web. Đi kèm Card đồ họa Intel Arc Graphics mới, máy dễ dàng chạy mượt các phần mềm chỉnh sửa ảnh và video cơ bản.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 155H" },
      { label: "Màn hình", value: "16 inch WUXGA 16:10" },
      { label: "Tính năng", value: "Tích hợp NPU AI" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 155H (16 Nhân / 22 Luồng, Up to 4.8GHz, 24MB)" },
      { label: "RAM", value: "16GB LPDDR5X (Onboard)" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
      { label: "Màn hình", value: "16.0 inch WUXGA (1920x1200), IPS, 60Hz" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Pin", value: "3-cell 65Wh" },
      { label: "Trọng lượng", value: "1.8 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P004",
    slug: "laptop-acer-aspire-go-15",
    name: "Laptop Acer Aspire Go 15 AG15 71P 58X1",
    category: "laptop",
    price: 15290000, 
    salePrice: 14490000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_aspire_go_15/laptop_acer_aspire_go_15_ag15_71p.png",
      "/product_image/laptops/laptop_acer_aspire_go_15/laptop_acer_aspire_go_15_01.png",
      "/product_image/laptops/laptop_acer_aspire_go_15/laptop_acer_aspire_go_15_02.png",
      "/product_image/laptops/laptop_acer_aspire_go_15/laptop_acer_aspire_go_15_03.png",
      "/product_image/laptops/laptop_acer_aspire_go_15/laptop_acer_aspire_go_15_04.png",
      "/product_image/laptops/laptop_acer_aspire_go_15/laptop_acer_aspire_go_15_05.png"
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core i5-13420H", 
      ram: "16GB",
      storage: "512GB SSD",
      screen: "15.6 inch"
    },
    shortDesc: "Chiếc laptop học sinh sinh viên giá tốt, sở hữu chip H hiệu năng cao mạnh mẽ.",
    description: `
      <h3>Sức mạnh vượt trội từ dòng chip H</h3>
      <p>Khác với các dòng máy văn phòng thông thường, Acer Aspire Go 15 được ưu ái trang bị con chip Intel Core i5-13420H hiệu năng cao (Dòng H thường dùng trên laptop gaming). Nhờ đó, máy phản hồi chớp nhoáng với mọi thao tác, chạy mượt mà các ứng dụng nặng hay những file trình chiếu phức tạp.</p>
      
      <h3>Thiết kế thanh lịch, bàn phím Fullsize</h3>
      <p>Lớp vỏ ngoài được hoàn thiện với màu bạc nhám tinh tế, phù hợp với mọi môi trường học đường hay công sở. Bàn phím được tích hợp cụm phím số Numpad tiện dụng, hỗ trợ đắc lực cho những người dùng thường xuyên phải thao tác với số liệu kế toán, Excel.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5-13420H" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Ổ cứng", value: "512GB SSD" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-13420H (8 Nhân / 12 Luồng, Up to 4.6GHz)" },
      { label: "RAM", value: "16GB LPDDR5" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
      { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS" },
      { label: "Card màn hình", value: "Intel UHD Graphics" },
      { label: "Trọng lượng", value: "1.75 kg" },
      { label: "Cổng kết nối", value: "USB-C, USB 3.2, HDMI 2.1, Jack 3.5mm" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P005",
    slug: "laptop-acer-aspire-lite-14",
    name: "Laptop Acer Aspire Lite 14 AL14-52P-309T",
    category: "laptop",
    price: 15450000,
    salePrice: 13890000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_aspire_lite_14/laptop_acer_aspire_lite_14_al14_52p_309t.jpg",
      "/product_image/laptops/laptop_acer_aspire_lite_14/laptop_acer_aspire_lite_14_01.jpg",
      "/product_image/laptops/laptop_acer_aspire_lite_14/laptop_acer_aspire_lite_14_02.jpg",
      "/product_image/laptops/laptop_acer_aspire_lite_14/laptop_acer_aspire_lite_14_03.jpg",
      "/product_image/laptops/laptop_acer_aspire_lite_14/laptop_acer_aspire_lite_14_04.jpg",
      "/product_image/laptops/laptop_acer_aspire_lite_14/laptop_acer_aspire_lite_14_05.jpg",
      "/product_image/laptops/laptop_acer_aspire_lite_14/laptop_acer_aspire_lite_14_06.jpg"
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core i3-1305U",
      ram: "8GB DDR5",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Siêu mỏng nhẹ, thiết kế vỏ kim loại thời trang, lựa chọn tiết kiệm cho nhu cầu cơ bản.",
    description: `
      <h3>Thiết kế siêu di động</h3>
      <p>Đúng như tên gọi "Lite", Acer Aspire Lite 14 sở hữu thiết kế cực kỳ mỏng gọn và trọng lượng chỉ khoảng 1.5kg. Máy dễ dàng nằm gọn trong balo, túi xách để theo bạn đến bất cứ đâu. Vỏ ngoài tinh giản mang lại vẻ sang trọng không thua kém các dòng máy cao cấp.</p>
      
      <h3>Hiệu suất vừa vặn, nâng cấp linh hoạt</h3>
      <p>Trang bị vi xử lý Intel Core i3 thế hệ 13 mới cùng 8GB RAM chuẩn DDR5 siêu tốc, máy chạy tốt các tác vụ văn phòng, học tập trực tuyến và lướt web. Đặc biệt, máy sở hữu 2 khe cắm RAM SO-DIMM cho phép bạn dễ dàng nâng cấp lên tối đa 32GB trong tương lai.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i3-1305U" },
      { label: "RAM", value: "8GB DDR5 (Có thể nâng cấp)" },
      { label: "Màn hình", value: "14 inch WUXGA" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i3-1305U (5 Nhân / 6 Luồng, Up to 4.5GHz)" },
      { label: "RAM", value: "8GB (1x8GB) DDR5 4800MHz (2 Khe, Max 32GB)" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200), IPS" },
      { label: "Card màn hình", value: "Intel UHD Graphics" },
      { label: "Trọng lượng", value: "1.5 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P006",
    slug: "laptop-acer-swift-14-ai",
    name: "Laptop Acer Swift 14 AI SF14 51 53P9",
    category: "laptop",
    price: 34990000,
    salePrice: 28990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_swift_14_ai/laptop_acer_swift_14_ai_sf14_51_53p9.jpg",
      "/product_image/laptops/laptop_acer_swift_14_ai/laptop_acer_swift_14_ai_01.png",
      "/product_image/laptops/laptop_acer_swift_14_ai/laptop_acer_swift_14_ai_02.jpg",
      "/product_image/laptops/laptop_acer_swift_14_ai/laptop_acer_swift_14_ai_03.jpg",
      "/product_image/laptops/laptop_acer_swift_14_ai/laptop_acer_swift_14_ai_04.jpg",
      "/product_image/laptops/laptop_acer_swift_14_ai/laptop_acer_swift_14_ai_05.jpg"
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core Ultra 5 226V",
      ram: "16GB LPDDR5X",
      storage: "1TB SSD",
      screen: "14 inch"
    },
    shortDesc: "Tuyệt tác thiết kế siêu mỏng nhẹ, CPU Lunar Lake kiến trúc mới với NPU AI 40 TOPS.",
    description: `
      <h3>Kỉ nguyên mới với vi xử lý Lunar Lake</h3>
      <p>Acer Swift 14 AI chứng tỏ đẳng cấp với dòng vi xử lý Intel Core Ultra 5 226V (kiến trúc Lunar Lake). Sự tích hợp RAM thẳng vào đế chip giúp truyền tải dữ liệu siêu tốc, đồng thời NPU thế hệ mới cung cấp hiệu năng AI lên tới 40 TOPS, hỗ trợ hoàn hảo cho các công cụ Copilot và sáng tạo AI ngoại tuyến.</p>
      
      <h3>Sang trọng, đẳng cấp doanh nhân</h3>
      <p>Thân máy được chế tác từ hợp kim nhôm nguyên khối siêu nhẹ và vô cùng cứng cáp. Màn hình 14 inch cực sắc nét hiển thị màu sắc sống động, kết hợp với thời lượng pin kỷ lục (nhờ khả năng tối ưu điện năng của chip mới), đây là chiếc laptop lý tưởng cho giới doanh nhân hay người dùng cao cấp.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 226V (Lunar Lake)" },
      { label: "RAM", value: "16GB LPDDR5X (On-package)" },
      { label: "Đồ họa", value: "Intel Arc Graphics" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 226V (8 Nhân / 8 Luồng, Up to 4.5GHz, NPU 40 TOPS)" },
      { label: "RAM", value: "16GB LPDDR5X 8533MHz (On-package)" },
      { label: "Ổ cứng", value: "1TB PCIe NVMe Gen 4 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200) hoặc 2.5K, IPS/OLED 100% sRGB" },
      { label: "Card màn hình", value: "Intel Arc Graphics (Thế hệ mới)" },
      { label: "Bảo mật", value: "Bảo mật vân tay / Nhận diện khuôn mặt" },
      { label: "Trọng lượng", value: "1.3 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P007",
    slug: "laptop-acer-swift-go",
    name: "Laptop Acer Swift Go SFG14 74T 55HD",
    category: "laptop",
    price: 29990000,
    salePrice: 28990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_swift_go/laptop_acer_swift_go_sfg14_74t_55hd.png",
      "/product_image/laptops/laptop_acer_swift_go/laptop_acer_swift_go_01.png",
      "/product_image/laptops/laptop_acer_swift_go/laptop_acer_swift_go_02.png",
      "/product_image/laptops/laptop_acer_swift_go/laptop_acer_swift_go_03.png",
      "/product_image/laptops/laptop_acer_swift_go/laptop_acer_swift_go_04.png"
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core Ultra 5 225H",
      ram: "16GB LPDDR5X",
      storage: "1TB SSD",
      screen: "14 inch"
    },
    shortDesc: "Dòng Swift Go cao cấp tích hợp màn hình cảm ứng, cấu hình Intel Core Ultra AI mượt mà.",
    description: `
      <h3>Màn hình cảm ứng linh hoạt</h3>
      <p>Sự tiện lợi được đẩy lên mức tối đa khi Acer Swift Go SFG14 74T trang bị màn hình hỗ trợ cảm ứng đa điểm (Touch). Bạn có thể thao tác vuốt, chạm, cuộn trang web trực tiếp trên màn hình một cách trực quan, cực kỳ thích hợp cho các buổi thuyết trình hay thảo luận nhóm.</p>
      
      <h3>Hiệu suất đồ họa tích hợp xuất sắc</h3>
      <p>Vi xử lý Intel Core Ultra 5 đi kèm nhân đồ họa Intel Arc Graphics kiến trúc mới, mang lại sức mạnh xử lý hình ảnh vượt trội so với các thế hệ Iris Xe trước đây. Kết xuất video 4K hay chơi các tựa game eSports như Liên Minh Huyền Thoại, FIFA Online 4 diễn ra vô cùng trơn tru ở mức FPS cao.</p>
    `,
    cardSpecs: [
      { label: "Màn hình", value: "14 inch Cảm ứng (Touch)" },
      { label: "CPU", value: "Intel Core Ultra 5 225H" },
      { label: "Ổ cứng", value: "1TB SSD PCIe" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 225H (14 Nhân / 14 Luồng, Up to 4.9GHz, NPU 13 TOPS)" },
      { label: "RAM", value: "16GB LPDDR5X 7500MHz (Onboard)" },
      { label: "Ổ cứng", value: "1TB PCIe NVMe Gen 4 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200), IPS, Cảm ứng đa điểm" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Cổng kết nối", value: "2x Thunderbolt 4, 2x USB 3.2, 1x HDMI 2.1" },
      { label: "Trọng lượng", value: "1.32 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P008",
    slug: "laptop-acer-swift-go-14-ai",
    name: "Laptop Acer Swift Go 14 SFG14 73 57FZ",
    category: "laptop",
    price: 24490000,
    salePrice: 23790000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_swift_go_14_ai/laptop_acer_swift_go_14_ai_sfg14.png",
      "/product_image/laptops/laptop_acer_swift_go_14_ai/laptop_acer_swift_go_14_ai_01.png",
      "/product_image/laptops/laptop_acer_swift_go_14_ai/laptop_acer_swift_go_14_ai_02.png",
      "/product_image/laptops/laptop_acer_swift_go_14_ai/laptop_acer_swift_go_14_ai_03.png",
      "/product_image/laptops/laptop_acer_swift_go_14_ai/laptop_acer_swift_go_14_ai_04.png",
      "/product_image/laptops/laptop_acer_swift_go_14_ai/laptop_acer_swift_go_14_ai_05.png",
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core Ultra 5 125H",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14 inch",
    },
    shortDesc: "Laptop màn hình OLED chuẩn điện ảnh, vỏ nhôm nguyên khối, đạt chuẩn Intel Evo.",
    description: `
      <h3>Màn hình OLED rực rỡ, chuẩn xác</h3>
      <p>Acer Swift Go 14 chinh phục thị giác người dùng bằng tấm nền OLED cao cấp độ phân giải 2.8K. Với khả năng hiển thị 100% dải màu DCI-P3 và độ tương phản vô cực, màn hình này cung cấp màu đen sâu thẳm và màu sắc sống động, hoàn hảo để chỉnh sửa hình ảnh hay cày phim điện ảnh.</p>
      
      <h3>Chuẩn mực Intel Evo tinh tế</h3>
      <p>Sản phẩm vinh dự đạt chứng nhận Intel Evo, đảm bảo các tiêu chí khắt khe về thời lượng pin trên 9 tiếng, khởi động từ chế độ Sleep chỉ trong 1 giây và sạc nhanh (sạc 30 phút dùng 4 tiếng). Máy còn sở hữu webcam QHD 1440p nét căng, tích hợp AI làm đẹp khuôn mặt khi họp online.</p>
    `,
    cardSpecs: [
      { label: "Màn hình", value: "14 inch 2.8K OLED (90Hz)" },
      { label: "CPU", value: "Intel Core Ultra 5 125H" },
      { label: "Đạt chuẩn", value: "Intel Evo Platform" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 125H (14 Nhân / 18 Luồng, Up to 4.5GHz)" },
      { label: "RAM", value: "16GB LPDDR5X 6400MHz (Onboard)" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
      { label: "Màn hình", value: "14.0 inch 2.8K (2880x1800), OLED, 90Hz, 100% DCI-P3" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Webcam", value: "QHD 1440p (Hỗ trợ hiệu ứng Studio AI)" },
      { label: "Trọng lượng", value: "1.32 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P009",
    slug: "laptop_acer_swift_go_sfg14",
    name: "Laptop Acer Swift Go SFG14 74 58FJ",
    category: "laptop",
    price: 29990000,
    salePrice: 28990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_swift_go_sfg14/laptop_acer_swift_go_sfg14_74_58fj.png",
      "/product_image/laptops/laptop_acer_swift_go_sfg14/laptop_acer_swift_go_sfg14_01.png",
      "/product_image/laptops/laptop_acer_swift_go_sfg14/laptop_acer_swift_go_sfg14_02.png",
      "/product_image/laptops/laptop_acer_swift_go_sfg14/laptop_acer_swift_go_sfg14_03.png",
      "/product_image/laptops/laptop_acer_swift_go_sfg14/laptop_acer_swift_go_sfg14_04.png",
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core Ultra 5 125H",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14 inch",
    },
    shortDesc: "Phiên bản thiết kế mới, vỏ hợp kim magie mát lạnh, bảo mật vân tay 1 chạm.",
    description: `
      <h3>Phong cách tối giản, vỏ hợp kim nhôm</h3>
      <p>Acer Swift Go SFG14 khoác lên mình bộ vỏ hợp kim nhôm mát lạnh, vừa mang lại sự chắc chắn vừa giúp thiết bị tản nhiệt tốt hơn. Cân nặng vỏn vẹn 1.32kg giúp nó trở thành người bạn đồng hành tuyệt vời trong balo của giới trẻ hiện đại.</p>
      
      <h3>Tốc độ truy xuất nhanh chóng</h3>
      <p>Với vi xử lý Core Ultra tích hợp chuẩn RAM LPDDR5X bus cao và ổ SSD NVMe PCIe Gen 4, máy tính cung cấp tốc độ phản hồi gần như tức thì với mọi cú click chuột. Nút nguồn được tích hợp sẵn cảm biến vân tay giúp bảo vệ an toàn dữ liệu và đăng nhập vào Windows một cách nhanh chóng.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 125H" },
      { label: "RAM", value: "16GB LPDDR5X" },
      { label: "Bảo mật", value: "Vân tay (Fingerprint)" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 125H (14 Nhân / 18 Luồng, Up to 4.5GHz)" },
      { label: "RAM", value: "16GB LPDDR5X (Onboard)" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200) hoặc 2.8K IPS/OLED" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Kết nối", value: "Wi-Fi 7, Bluetooth 5.3, Thunderbolt 4" },
      { label: "Trọng lượng", value: "1.32 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P010",
    slug: "laptop-acer-swift-x14",
    name: "Laptop Acer Swift X14 SFX14 72G 77F9",
    category: "laptop",
    price: 44990000,
    salePrice: 35490000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_acer_swift_x14/laptop_acer_swift_x14_sfx14_72g_77f9.png",
      "/product_image/laptops/laptop_acer_swift_x14/laptop_acer_swift_x14_01.png",
      "/product_image/laptops/laptop_acer_swift_x14/laptop_acer_swift_x14_02.png",
      "/product_image/laptops/laptop_acer_swift_x14/laptop_acer_swift_x14_03.png",
      "/product_image/laptops/laptop_acer_swift_x14/laptop_acer_swift_x14_04.png",
      "/product_image/laptops/laptop_acer_swift_x14/laptop_acer_swift_x14_05.png",
    ],
    specs: {
      brand: "Acer",
      cpu: "Intel Core Ultra 7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14.5 inch",
    },
    shortDesc: "Dòng Swift X cao cấp mang card đồ họa rời RTX 40-Series vào thiết kế siêu mỏng nhẹ.",
    description: `
      <h3>Sức mạnh đồ họa rời NVIDIA RTX</h3>
      <p>Acer Swift X14 là một cỗ máy phi thường khi gói gọn card đồ họa rời NVIDIA GeForce RTX 40-Series (thường là RTX 4050) vào trong một thân hình mỏng nhẹ. Điều này biến nó thành công cụ sản xuất nội dung hoàn hảo cho các Editor, 3D Modeler cần render video bằng phần mềm Premiere, After Effect hay Blender mọi lúc mọi nơi.</p>
      
      <h3>Màn hình 14.5 inch OLED 120Hz</h3>
      <p>Thưởng thức hình ảnh tuyệt mỹ trên tấm nền OLED 14.5 inch độ phân giải 2.8K (2880x1800). Tần số quét 120Hz mang lại độ mượt mà đáng kinh ngạc cho mọi chuyển động, độ sáng 500 nits chuẩn DisplayHDR True Black 500 cung cấp khả năng hiển thị chính xác tuyệt đối màu sắc in ấn (100% DCI-P3 và Delta E &lt; 2).</p>
    `,
    cardSpecs: [
      { label: "Màn hình", value: "14.5 inch 2.8K OLED 120Hz" },
      { label: "Đồ họa rời", value: "NVIDIA GeForce RTX 40-Series" },
      { label: "Chuẩn màu", value: "100% DCI-P3, Delta E < 2" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 (Thế hệ mới tích hợp NPU)" },
      { label: "RAM", value: "16GB LPDDR5X (Onboard)" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
      { label: "Màn hình", value: "14.5 inch 2.8K (2880x1800) OLED, 120Hz, 400 nits (500 nits HDR)" },
      { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
      { label: "Làm mát", value: "Quạt kép lớn và ống đồng tản nhiệt kép" },
      { label: "Trọng lượng", value: "1.55 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  //============================ASUS============================
  {
    id: "P011",
    slug: "laptop-asus-expertbook-b1",
    name: "Laptop ASUS ExpertBook B1 BM1403CDA S60974W",
    category: "laptop",
    price: 12990000,
    salePrice: 12190000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_expertbook_b1/laptop_asus_expertbook_b1_b1403.png",
      "/product_image/laptops/laptop_asus_expertbook_b1/laptop_asus_expertbook_b1_01.jpg",
      "/product_image/laptops/laptop_asus_expertbook_b1/laptop_asus_expertbook_b1_02.jpg",
      "/product_image/laptops/laptop_asus_expertbook_b1/laptop_asus_expertbook_b1_03.jpg",
      "/product_image/laptops/laptop_asus_expertbook_b1/laptop_asus_expertbook_b1_04.jpg",
      "/product_image/laptops/laptop_asus_expertbook_b1/laptop_asus_expertbook_b1_05.jpg"
    ],
    specs: {
      brand: "ASUS",
      cpu: "AMD Ryzen 5 7535HS",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Dòng laptop doanh nghiệp siêu bền chuẩn quân đội, bảo mật cấp doanh nghiệp.",
    description: `
      <h3>Bền bỉ chuẩn quân sự Mỹ (MIL-STD 810H)</h3>
      <p>ASUS ExpertBook B1 được thiết kế đặc biệt cho môi trường doanh nghiệp với lớp vỏ chịu lực, vượt qua hàng loạt bài kiểm tra khắc nghiệt của chuẩn quân đội Mỹ MIL-STD 810H (chống va đập, chống sốc, chịu nhiệt độ cao). Bàn phím có thiết kế chống tràn nước, giúp bảo vệ dữ liệu nội bộ một cách an toàn nhất.</p>
      
      <h3>Bảo mật và Hiệu suất cao</h3>
      <p>Được trang bị chip AMD Ryzen 5 7535HS (dòng chip hiệu năng cao) và RAM DDR5, máy xử lý mượt mà các phần mềm kế toán, ERP hay quản lý kho. Tính năng bảo mật sinh trắc học vân tay, khe khóa Kensington và chip bảo mật TPM 2.0 tạo ra một bức tường thành vững chắc chống lại sự xâm nhập trái phép.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "AMD Ryzen 5 7535HS" },
      { label: "Độ bền", value: "Chuẩn quân đội MIL-STD 810H" },
      { label: "Bảo mật", value: "Chip TPM 2.0, Vân tay" },
    ],
    detailSpecs: [
      { label: "CPU", value: "AMD Ryzen 5 7535HS (6 Nhân / 12 Luồng, Up to 4.55GHz)" },
      { label: "RAM", value: "16GB DDR5 (1 khe rời, hỗ trợ max 64GB)" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "14.0 inch FHD (1920x1080), Anti-Glare, 250 nits" },
      { label: "Card màn hình", value: "AMD Radeon Graphics" },
      { label: "Kết nối mạng", value: "Wi-Fi 6E, Bluetooth 5.3, Cổng LAN RJ45" },
      { label: "Trọng lượng", value: "1.49 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P012",
    slug: "laptop-asus-expertbook-p1",
    name: "Laptop ASUS ExpertBook P1 P1403CVA-C5H08-50W",
    category: "laptop",
    price: 17490000,
    salePrice: 16390000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_expertbook_p1/laptop_asus_expertbook_p1_p1403cva_c5h08_50w.jpg", 
      "/product_image/laptops/laptop_asus_expertbook_p1/laptop_asus_expertbook_p1_01.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p1/laptop_asus_expertbook_p1_02.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p1/laptop_asus_expertbook_p1_03.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p1/laptop_asus_expertbook_p1_04.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p1/laptop_asus_expertbook_p1_05.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p1/laptop_asus_expertbook_p1_06.jpg"
    ],
    specs: {
      brand: "ASUS",
      cpu: "Intel Core 5",
      ram: "8GB DDR5",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Máy tính xách tay tối ưu cho công việc quản trị, bản lề mở phẳng 180 độ.",
    description: `
      <h3>Linh hoạt trong mọi cuộc họp</h3>
      <p>Dòng ExpertBook P1 được thiết kế với bản lề mở phẳng 180 độ, cho phép bạn gập máy nằm hoàn toàn trên mặt bàn. Thiết kế này đặc biệt hữu ích khi bạn muốn chia sẻ nội dung trên màn hình cho khách hàng hoặc đối tác ngồi đối diện một cách dễ dàng và trực quan.</p>
      
      <h3>Khả năng nâng cấp tuyệt vời</h3>
      <p>Dù có ngoại hình mỏng nhẹ, máy vẫn giữ lại khả năng nâng cấp phần cứng xuất sắc. Trang bị sẵn 1 thanh RAM 8GB DDR5 5200MHz, nhưng bạn có thể lắp thêm RAM ở khe SO-DIMM còn trống để mở rộng lên tối đa 64GB. Điều này đảm bảo chiếc laptop có thể theo sát sự phát triển doanh nghiệp của bạn trong nhiều năm tới.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core 5 Series" },
      { label: "Khả năng mở rộng", value: "Hỗ trợ nâng cấp 64GB RAM" },
      { label: "Bản lề", value: "Mở phẳng 180 độ" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core 5 (Series mới, Up to 4.8GHz, 12MB Cache)" },
      { label: "RAM", value: "8GB DDR5 5200MHz (Hỗ trợ mở rộng max 64GB)" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe SSD" },
      { label: "Màn hình", value: "14.0 inch FHD/WUXGA, Chống chói" },
      { label: "Card màn hình", value: "Intel Graphics" },
      { label: "Bảo mật", value: "Webcam Shield, Nhận diện vân tay" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.4 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P013",
    slug: "laptop-asus-expertbook-p3",
    name: "Laptop Asus ExpertBook P3 P3405CVA-NZ0027W",
    category: "laptop",
    price: 19990000,
    salePrice: 18990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_expertbook_p3/laptop_asus_expertbook_p3_p3405cva_nz0027w.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p3/laptop_asus_expertbook_p3_01.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p3/laptop_asus_expertbook_p3_02.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p3/laptop_asus_expertbook_p3_03.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p3/laptop_asus_expertbook_p3_04.jpg"
    ],
    specs: {
      brand: "ASUS",
      cpu: "Intel Core i5-13420H",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Dòng laptop cao cấp cho doanh nghiệp, chip dòng H hiệu năng cao, bảo mật TPM 2.0.",
    description: `
      <h3>Thiết kế nhôm chuyên nghiệp</h3>
      <p>ASUS ExpertBook P3 được hoàn thiện từ hợp kim nhôm sang trọng mang màu xám đen quyền lực, thể hiện tác phong chuyên nghiệp của người sử dụng. Kích thước 14 inch cùng viền màn hình siêu mỏng NanoEdge tối đa hóa không gian hiển thị, nâng cao sự tập trung trong công việc.</p>
      
      <h3>Hiệu suất dòng H ổn định</h3>
      <p>Thay vì sử dụng các con chip dòng U tiết kiệm điện, ExpertBook P3 mạnh dạn trang bị bộ vi xử lý Intel Core i5-13420H dòng hiệu năng cao. Sức mạnh này cho phép máy biên dịch dữ liệu, chạy các phần mềm đồ họa kỹ thuật hay render video nhanh hơn nhiều so với laptop văn phòng thông thường.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5-13420H" },
      { label: "RAM", value: "16GB DDR5 5200MHz" },
      { label: "Vỏ máy", value: "Hợp kim nhôm" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-13420H (8 Nhân / 12 Luồng, Up to 4.6GHz)" },
      { label: "RAM", value: "16GB DDR5 5200MHz (Có thể nâng cấp lên 64GB)" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200) 16:10, Anti-Glare" },
      { label: "Card màn hình", value: "Intel UHD Graphics" },
      { label: "Kết nối mạng", value: "Wi-Fi 6 (802.11ax), Bluetooth 5.3, RJ45 LAN" },
      { label: "Trọng lượng", value: "1.46 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P014",
    slug: "laptop-asus-expertbook-p3405cva",
    name: "Laptop ASUS ExpertBook P3405CVA NZ0077W",
    category: "laptop",
    price: 24790000,
    salePrice: 23390000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_expertbook_p3405cva/laptop_asus_expertbook_p3405cva_nz0077w.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p3405cva/laptop_asus_expertbook_p3405cva_01.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p3405cva/laptop_asus_expertbook_p3405cva_02.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p3405cva/laptop_asus_expertbook_p3405cva_03.jpg",
      "/product_image/laptops/laptop_asus_expertbook_p3405cva/laptop_asus_expertbook_p3405cva_04.jpg"
    ],
    specs: {
      brand: "ASUS",
      cpu: "Intel Core i7-13620H",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Phiên bản i7 mạnh mẽ nhất dòng P3, lý tưởng cho lập trình viên và người xử lý Data.",
    description: `
      <h3>Sức mạnh tối thượng từ Core i7</h3>
      <p>Là cấu hình cao cấp nhất trong dòng sản phẩm, chiếc ExpertBook P3405CVA này sở hữu vi xử lý Intel Core i7-13620H với 10 nhân vật lý và tốc độ Boost lên đến 4.9GHz. Thiết bị này là "vũ khí" đắc lực dành cho các lập trình viên, nhà phân tích dữ liệu lớn (Big Data) hay các cấp quản lý cần xử lý khối lượng công việc khổng lồ.</p>
      
      <h3>Trải nghiệm bàn phím gõ êm ái</h3>
      <p>Bàn phím của ASUS ExpertBook được thiết kế với hành trình phím sâu 1.5mm, cấu trúc keycap hơi võng nhẹ để ôm lấy ngón tay. Đèn nền bàn phím sáng sủa kết hợp cùng touchpad rộng rãi hỗ trợ cử chỉ đa điểm, mang lại cảm giác nhập liệu cực kỳ thoải mái và chính xác trong môi trường thiếu sáng.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i7-13620H" },
      { label: "RAM", value: "16GB DDR5 5200MHz" },
      { label: "Tiện ích", value: "Bảo mật vân tay, Tấm che Webcam" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i7-13620H (10 Nhân / 16 Luồng, Up to 4.9GHz, 24MB Cache)" },
      { label: "RAM", value: "16GB DDR5 5200MHz (2 Khe, hỗ trợ max 64GB)" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200) 16:10, 300 nits, Anti-Glare" },
      { label: "Card màn hình", value: "Intel UHD Graphics" },
      { label: "Bảo mật", value: "Màn trập Webcam, Vân tay, Khe khóa Kensington" },
      { label: "Trọng lượng", value: "1.46 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng tận nơi (On-site)" },
    ],
  },

  {
    id: "P015",
    slug: "laptop-asus-vivobook-15",
    name: "Laptop ASUS Vivobook 15 OLED A1505VA MA468W",
    category: "laptop",
    price: 20990000,
    salePrice: 16490000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_vivobook_15/laptop_asus_vivobook_15_oled_a1505va.png",
      "/product_image/laptops/laptop_asus_vivobook_15/laptop_asus_vivobook_15_01.png",
      "/product_image/laptops/laptop_asus_vivobook_15/laptop_asus_vivobook_15_02.png",
      "/product_image/laptops/laptop_asus_vivobook_15/laptop_asus_vivobook_15_03.png",
      "/product_image/laptops/laptop_asus_vivobook_15/laptop_asus_vivobook_15_04.png",
      "/product_image/laptops/laptop_asus_vivobook_15/laptop_asus_vivobook_15_05.png"
    ],
    specs: {
      brand: "ASUS",
      cpu: "Intel Core i5-13500H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      screen: "15.6 inch"
    },
    shortDesc: "Laptop màn hình OLED chuẩn rạp chiếu phim, CPU Intel Gen 13 dòng H cực khỏe.",
    description: `
      <h3>Màn hình OLED rực rỡ, bảo vệ mắt</h3>
      <p>Điểm thu hút lớn nhất của ASUS Vivobook 15 OLED là tấm nền màn hình hữu cơ cao cấp. Độ chuẩn màu 100% DCI-P3 chuẩn rạp chiếu phim, đạt chứng nhận Pantone Validated và hiển thị màu đen sâu thẳm True Black. Màn hình OLED còn phát ra ít hơn 70% ánh sáng xanh gây hại, bảo vệ đôi mắt của bạn tối đa.</p>
      
      <h3>Hiệu suất đột phá với Core i5-13500H</h3>
      <p>Không chỉ đẹp, máy còn sở hữu nội lực đáng nể với vi xử lý Intel Core i5-13500H - một con chip "quái vật" sở hữu tới 12 nhân và 16 luồng. Hệ thống tản nhiệt IceBlades tiên tiến với quạt 87 cánh khí động học giúp máy duy trì được hiệu suất cao mà luôn yên tĩnh và mát mẻ.</p>
    `,
    cardSpecs: [
      { label: "Màn hình", value: "15.6 inch FHD OLED (100% DCI-P3)" },
      { label: "CPU", value: "Intel Core i5-13500H" },
      { label: "Tính năng", value: "Bản lề mở 180 độ, Cảm biến vân tay" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-13500H (12 Nhân / 16 Luồng, Up to 4.7GHz)" },
      { label: "RAM", value: "16GB DDR4 (8GB Onboard + 8GB Khe rời)" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 3 SSD" },
      { label: "Màn hình", value: "15.6 inch FHD (1920x1080) OLED, 60Hz, 600 nits, 100% DCI-P3" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Kết nối", value: "Wi-Fi 6E, Bluetooth 5.3, USB-C (Hỗ trợ sạc PD)" },
      { label: "Trọng lượng", value: "1.7 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P016",
    slug: "laptop-asus-vivobook-s14",
    name: "Laptop ASUS Vivobook S14 S3407CA LY096WS",
    category: "laptop",
    price: 25990000,
    salePrice: 24590000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_vivobook_s14/laptop_asus_vivobook_s14_s3407ca_ly096ws.jpg",
      "/product_image/laptops/laptop_asus_vivobook_s14/laptop_asus_vivobook_s14_01.png",
      "/product_image/laptops/laptop_asus_vivobook_s14/laptop_asus_vivobook_s14_02.png",
      "/product_image/laptops/laptop_asus_vivobook_s14/laptop_asus_vivobook_s14_03.png",
      "/product_image/laptops/laptop_asus_vivobook_s14/laptop_asus_vivobook_s14_04.png",
      "/product_image/laptops/laptop_asus_vivobook_s14/laptop_asus_vivobook_s14_05.png"
    ],
    specs: {
      brand: "ASUS",
      cpu: "Intel Core Ultra 7 255H",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Vivobook S cao cấp mỏng 1.39cm, bàn phím LED RGB tùy chỉnh, vi xử lý tích hợp AI.",
    description: `
      <h3>Thiết kế siêu mỏng nhẹ, bàn phím RGB</h3>
      <p>ASUS Vivobook S14 là biểu tượng của thế hệ Z với thiết kế siêu mỏng chỉ 1.39cm và nặng 1.3kg. Điểm phá cách ấn tượng nhất nằm ở hệ thống bàn phím ErgoSense được trang bị đèn nền LED RGB tùy chỉnh một vùng (Single-zone RGB), cho phép bạn thỏa sức bộc lộ cá tính cá nhân thông qua ánh sáng rực rỡ.</p>
      
      <h3>Phím Copilot chuyên dụng & NPU thông minh</h3>
      <p>Khẳng định vị thế của một chiếc AI PC, Vivobook S14 được trang bị phím bấm Copilot vật lý, giúp bạn gọi ngay trợ lý ảo của Windows chỉ trong một cú nhấp. Vi xử lý Intel Core Ultra 7 mới nhất cung cấp khả năng xử lý AI nhanh nhẹn cho tính năng làm mờ phông nền, lọc tiếng ồn hai chiều mà cực kỳ tiết kiệm pin.</p>
    `,
    cardSpecs: [
      { label: "Màn hình", value: "14 inch 3K OLED (120Hz)" },
      { label: "Bàn phím", value: "Đèn nền LED RGB" },
      { label: "Tính năng", value: "NPU 13 TOPS, Phím Copilot" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 255H (16 Nhân / 16 Luồng, NPU 13 TOPS)" },
      { label: "RAM", value: "16GB LPDDR5X (Onboard)" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "14.0 inch 3K (2880x1800) OLED, 120Hz, 100% DCI-P3, 600 nits" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Bàn phím", value: "ErgoSense tích hợp đèn nền 1-Zone RGB" },
      { label: "Trọng lượng", value: "1.30 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home + Office Home & Student" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P017",
    slug: "laptop-asus-vivobook-s16",
    name: "Laptop ASUS Vivobook S 16 OLED M5606KA RI016WS",
    category: "laptop",
    price: 30990000,
    salePrice: 30990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_vivobook_s16/laptop_asus_vivobook_s16_m5606ka.jpg",
      "/product_image/laptops/laptop_asus_vivobook_s16/laptop_asus_vivobook_s16_01.jpg",
      "/product_image/laptops/laptop_asus_vivobook_s16/laptop_asus_vivobook_s16_02.jpg",
      "/product_image/laptops/laptop_asus_vivobook_s16/laptop_asus_vivobook_s16_03.jpg",
      "/product_image/laptops/laptop_asus_vivobook_s16/laptop_asus_vivobook_s16_04.jpg",
      "/product_image/laptops/laptop_asus_vivobook_s16/laptop_asus_vivobook_s16_05.jpg"
    ],
    specs: {
      brand: "ASUS",
      cpu: "AMD Ryzen AI 7 350",
      ram: "24GB LPDDR5X",
      storage: "512GB SSD",
      screen: "16 inch"
    },
    shortDesc: "Laptop màn hình 16 inch OLED viền siêu mỏng, sức mạnh vượt trội từ AMD Ryzen AI.",
    description: `
      <h3>Không gian hiển thị vô cực 3.2K OLED</h3>
      <p>ASUS Vivobook S 16 cung cấp một tầm nhìn choáng ngợp với màn hình Lumina OLED kích thước 16 inch, tỷ lệ 16:10. Độ phân giải khủng 3.2K cùng tần số quét 120Hz mang đến hình ảnh cực kỳ chi tiết, mượt mà và đã mắt. Tỉ lệ màn hình trên thân máy lên tới 89% tạo cảm giác không gian hiển thị như tràn ra ngoài mép viền.</p>
      
      <h3>Sức mạnh từ AMD Ryzen AI & 24GB RAM</h3>
      <p>Bộ vi xử lý kiến trúc mới AMD Ryzen AI 7 350 tự hào với hiệu năng tính toán NPU lên đến 50 TOPS, chạy các mô hình ngôn ngữ lớn và trợ lý ảo mượt mà ngay trên máy. Dung lượng RAM 24GB (LPDDR5X) hiếm thấy trên thị trường mang lại khả năng đa nhiệm không giới hạn cho các tác vụ thiết kế và làm việc chuyên sâu.</p>
    `,
    cardSpecs: [
      { label: "Màn hình", value: "16 inch 3.2K OLED 120Hz" },
      { label: "CPU", value: "AMD Ryzen AI 7 350" },
      { label: "RAM", value: "24GB LPDDR5X" },
    ],
    detailSpecs: [
      { label: "CPU", value: "AMD Ryzen AI 7 350 (Đa nhân hiệu năng cao, NPU 50 TOPS)" },
      { label: "RAM", value: "24GB LPDDR5X (Onboard)" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "16.0 inch 3.2K (3200x2000) OLED, 120Hz, 100% DCI-P3" },
      { label: "Card màn hình", value: "AMD Radeon Graphics" },
      { label: "Bàn phím", value: "ErgoSense RGB 1-Zone, Phím Copilot" },
      { label: "Trọng lượng", value: "1.50 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P018",
    slug: "laptop-asus-zenbook-14",
    name: "Laptop ASUS Zenbook 14 UX3405CA PZ204WS",
    category: "laptop",
    price: 38990000,
    salePrice: 35990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_zenbook_14/laptop_asus_zenbook_14_ux3405ca.png",
      "/product_image/laptops/laptop_asus_zenbook_14/laptop_asus_zenbook_14_01.png",
      "/product_image/laptops/laptop_asus_zenbook_14/laptop_asus_zenbook_14_02.png",
      "/product_image/laptops/laptop_asus_zenbook_14/laptop_asus_zenbook_14_03.png",
      "/product_image/laptops/laptop_asus_zenbook_14/laptop_asus_zenbook_14_04.png",
      "/product_image/laptops/laptop_asus_zenbook_14/laptop_asus_zenbook_14_05.png"
    ],
    specs: {
      brand: "ASUS",
      cpu: "Intel Core Ultra 9 285H",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      screen: "14 inch"
    },
    shortDesc: "Đẳng cấp doanh nhân Zenbook, chip vi xử lý Ultra 9 cao nhất, 32GB RAM siêu đa nhiệm.",
    description: `
      <h3>Tuyệt tác thiết kế siêu di động</h3>
      <p>ASUS Zenbook 14 OLED là biểu tượng của sự thanh lịch và tinh tế. Nắp máy được trang trí bằng các đường nét hình học chữ A cách điệu sang trọng trên nền nhôm anodized nguyên khối. Máy chỉ mỏng 1.49cm và nặng vỏn vẹn 1.2kg, sẵn sàng đồng hành cùng bạn tới bất kỳ cuộc họp quan trọng nào.</p>
      
      <h3>Hiệu năng "Đụng nóc" với Core Ultra 9</h3>
      <p>Cấu hình mạnh mẽ nhất với vi xử lý Intel Core Ultra 9 285H cực hiếm kết hợp cùng dung lượng RAM 32GB LPDDR5X. Bạn có thể xuất video, làm hình ảnh 3D, thao tác với những tập tin Excel đồ sộ một cách nhẹ nhàng. Nút Numpad ảo (NumberPad 2.0) tích hợp thẳng trên Touchpad giúp việc nhập liệu số siêu nhanh gọn.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core Ultra 9 285H" },
      { label: "RAM / ROM", value: "32GB RAM / 1TB SSD" },
      { label: "Thiết kế", value: "Nhôm nguyên khối, Dày 1.49cm" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 9 285H (16 Nhân / 16 Luồng, Up to 5.4GHz, AI NPU)" },
      { label: "RAM", value: "32GB LPDDR5X 7467MHz (Onboard)" },
      { label: "Ổ cứng", value: "1TB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "14.0 inch 3K (2880x1800) OLED, 120Hz, Cảm ứng (Tùy chọn)" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Tính năng đặc biệt", value: "ASUS NumberPad 2.0 (Phím số trên Touchpad)" },
      { label: "Trọng lượng", value: "1.20 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home + Office Home & Student" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P019",
    slug: "laptop-asus-zenbook-14ka",
    name: "Laptop ASUS Zenbook 14 UM3406KA PP555WS",
    category: "laptop",
    price: 31990000,
    salePrice: 31990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_zenbook_14ka/laptop_asus_zenbook_14ka_um3406ka.png",
      "/product_image/laptops/laptop_asus_zenbook_14ka/laptop_asus_zenbook_14ka_01.png",
      "/product_image/laptops/laptop_asus_zenbook_14ka/laptop_asus_zenbook_14ka_02.png",
      "/product_image/laptops/laptop_asus_zenbook_14ka/laptop_asus_zenbook_14ka_03.png",
      "/product_image/laptops/laptop_asus_zenbook_14ka/laptop_asus_zenbook_14ka_04.png"
    ],
    specs: {
      brand: "ASUS",
      cpu: "AMD Ryzen AI 7 350",
      ram: "32GB LPDDR5X",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Phiên bản Zenbook sử dụng nền tảng AMD Ryzen AI thông minh, tối ưu hóa thời lượng pin.",
    description: `
      <h3>Kiến trúc AMD Ryzen AI đột phá</h3>
      <p>Mang đến trải nghiệm mượt mà không tưởng, ASUS Zenbook 14 UM3406KA tích hợp con chip AMD Ryzen AI 7 350 mới nhất. Công nghệ AI nội bộ tự động phân bổ tài nguyên hợp lý, giúp tối ưu hóa hiệu suất làm việc đồng thời kéo dài thời lượng pin lên đến hơn 15 tiếng cho một lần sạc đầy, cho bạn cả ngày dài làm việc không cần mang theo cục sạc.</p>
      
      <h3>Giải trí đắm chìm cùng OLED và Harman Kardon</h3>
      <p>Ngoài màn hình 14 inch 3K OLED (120Hz) rực rỡ, máy còn được tinh chỉnh hệ thống âm thanh bởi Harman/Kardon và công nghệ Dolby Atmos. Loa phát ra chất âm lớn, trong trẻo và có chiều sâu không gian, biến chiếc laptop thành rạp phim thu nhỏ trong phòng ngủ của bạn.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "AMD Ryzen AI 7 350" },
      { label: "Màn hình", value: "14 inch 3K OLED 120Hz" },
      { label: "Âm thanh", value: "Tuning by Harman/Kardon" },
    ],
    detailSpecs: [
      { label: "CPU", value: "AMD Ryzen AI 7 350 (8 Nhân / 16 Luồng, Up to 5.0GHz, NPU 50 TOPS)" },
      { label: "RAM", value: "32GB LPDDR5X (Onboard)" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "14.0 inch 3K (2880x1800) OLED, 120Hz, 100% DCI-P3" },
      { label: "Card màn hình", value: "AMD Radeon Graphics" },
      { label: "Bảo mật & Camera", value: "FHD IR Webcam, Hỗ trợ Windows Hello" },
      { label: "Trọng lượng", value: "1.20 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P020",
    slug: "laptop-asus-zenbook-a14",
    name: "Laptop ASUS Zenbook 14 UX3407QA QD299WS",
    category: "laptop",
    price: 29990000,
    salePrice: 26890000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_asus_zenbook_a14/laptop_asus_zenbook_14_ux3407qa_qd299ws.jpg",
      "/product_image/laptops/laptop_asus_zenbook_a14/laptop_asus_zenbook_a14_01.png",
      "/product_image/laptops/laptop_asus_zenbook_a14/laptop_asus_zenbook_a14_02.png",
      "/product_image/laptops/laptop_asus_zenbook_a14/laptop_asus_zenbook_a14_03.png",
      "/product_image/laptops/laptop_asus_zenbook_a14/laptop_asus_zenbook_a14_04.png",
      "/product_image/laptops/laptop_asus_zenbook_a14/laptop_asus_zenbook_a14_05.png"
    ],
    specs: {
      brand: "ASUS",
      cpu: "Snapdragon® X Plus X1-26-100",
      ram: "16GB LPDDR5X",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Thế hệ Copilot+ PC trang bị chip Snapdragon X Plus với NPU 45 TOPS cực mạnh.",
    description: `
      <h3>Tiên phong kỷ nguyên Copilot+ PC</h3>
      <p>ASUS Zenbook 14 UX3407QA là một trong những chiếc laptop đầu tiên mang sức mạnh của nền tảng ARM lên Windows. Được trang bị vi xử lý Snapdragon X Plus X1-26-100, máy sở hữu bộ xử lý thần kinh (NPU) Qualcomm Hexagon cung cấp hiệu năng AI lên tới 45 TOPS.  Kiến trúc này không chỉ mở khóa các tính năng AI tiên tiến của Windows 11 như Recall, Live Captions, Cocreator mà còn mang lại thời lượng pin vượt trội so với chip x86 truyền thống.</p>
      
      <h3>Thiết kế siêu mỏng, kết nối hiện đại</h3>
      <p>Vẫn giữ nguyên DNA thiết kế cao cấp của dòng Zenbook với vỏ nhôm nguyên khối, máy chỉ mỏng 14.9mm và nặng vỏn vẹn 1.2kg. Màn hình 14 inch siêu sắc nét kết hợp cùng RAM LPDDR5X siêu tốc đáp ứng mượt mà các tác vụ làm việc văn phòng, lướt web đa tab và họp trực tuyến cả ngày dài mà không cần cắm sạc.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Snapdragon X Plus (NPU 45 TOPS)" },
      { label: "RAM / ROM", value: "16GB / 512GB SSD" },
      { label: "Tính năng", value: "Copilot+ PC (Windows ARM)" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Snapdragon® X Plus X1 26 100 (8 Nhân, Up to 2.97GHz, NPU 45 TOPS)" },
      { label: "RAM", value: "16GB LPDDR5X Onboard (Không hỗ trợ nâng cấp)" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA/OLED" },
      { label: "Card màn hình", value: "Qualcomm® Adreno™ GPU" },
      { label: "Kết nối", value: "Wi-Fi 7, Bluetooth 5.4, USB4" },
      { label: "Hệ điều hành", value: "Windows 11 Home (ARM)" },
      { label: "Trọng lượng", value: "1.20 kg" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  //=======================DELL=================
  {
    id: "P021",
    slug: "laptop-dell-15-dc15250",
    name: "Laptop Dell 15 DC15250 i7U161W11SLU",
    category: "laptop",
    price: 23490000,
    salePrice: 20990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_dell_15_dc15250/laptop_dell_15_dc15250_i7u161w11slu.png",
      "/product_image/laptops/laptop_dell_15_dc15250/laptop_dell_15_dc15250_01.png",
      "/product_image/laptops/laptop_dell_15_dc15250/laptop_dell_15_dc15250_02.png",
      "/product_image/laptops/laptop_dell_15_dc15250/laptop_dell_15_dc15250_03.png",
      "/product_image/laptops/laptop_dell_15_dc15250/laptop_dell_15_dc15250_04.png",
      "/product_image/laptops/laptop_dell_15_dc15250/laptop_dell_15_dc15250_05.png"
    ],
    specs: {
      brand: "Dell",
      cpu: "Intel Core i7-1355U",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      screen: "15.6 inch"
    },
    shortDesc: "Máy tính xách tay Dell 15.6 inch mạnh mẽ với chip i7 thế hệ 13, dung lượng 1TB rộng rãi.",
    description: `
      <h3>Hiệu suất ổn định cho dân văn phòng</h3>
      <p>Dell 15 DC15250 hướng tới sự bền bỉ và ổn định tối đa cho người dùng văn phòng và doanh nghiệp. Được trang bị bộ vi xử lý Intel Core i7-1355U mạnh mẽ, nó giúp bạn chạy mượt mà các ứng dụng kế toán, quản lý dữ liệu lớn hay xử lý đồ họa 2D cơ bản mà không gặp tình trạng giật lag.</p>
      
      <h3>Không gian hiển thị và lưu trữ lớn</h3>
      <p>Màn hình 15.6 inch độ phân giải FHD mang lại không gian thao tác rộng rãi, đặc biệt phù hợp khi phải chia đôi cửa sổ làm việc. Bàn phím Full-size tích hợp cụm phím số (Numpad) hỗ trợ nhập liệu nhanh chóng. Ổ cứng SSD 1TB cung cấp không gian khổng lồ để bạn lưu trữ mọi tài liệu quan trọng.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i7-1355U" },
      { label: "RAM / ROM", value: "16GB RAM / 1TB SSD" },
      { label: "Màn hình", value: "15.6 inch FHD" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i7-1355U (10 Nhân / 12 Luồng, Up to 5.0GHz)" },
      { label: "RAM", value: "16GB (2x8GB) DDR4 2666MHz (2 Khe, Max 64GB)" },
      { label: "Ổ cứng", value: "1TB M.2 PCIe NVMe SSD" },
      { label: "Màn hình", value: "15.6 inch FHD (1920x1080), Anti-Glare, 120Hz" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Cổng kết nối", value: "USB 3.2, USB-C, HDMI 1.4, SD Card Reader" },
      { label: "Hệ điều hành", value: "Windows 11 Home + Office Home & Student" },
      { label: "Trọng lượng", value: "1.65 kg" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P022",
    slug: "laptop-dell-inspirion-15",
    name: "Laptop Dell Inspirion 15 3530 N3530-i7U161W11BLU-FP",
    category: "laptop",
    price: 23490000,
    salePrice: 17990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_dell_inspirion_15/laptop_dell_inspirion_15_3530_n3530.png",
      "/product_image/laptops/laptop_dell_inspirion_15/laptop_dell_inspirion_15_01.png",
      "/product_image/laptops/laptop_dell_inspirion_15/laptop_dell_inspirion_15_02.png",
      "/product_image/laptops/laptop_dell_inspirion_15/laptop_dell_inspirion_15_03.png",
      "/product_image/laptops/laptop_dell_inspirion_15/laptop_dell_inspirion_15_04.png",
      "/product_image/laptops/laptop_dell_inspirion_15/laptop_dell_inspirion_15_05.png"
    ],
    specs: {
      brand: "Dell",
      cpu: "Intel Core i7-1355U",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      screen: "15.6 inch"
    },
    shortDesc: "Dòng Inspiron bền bỉ truyền thống, tích hợp cảm biến vân tay, vỏ nhựa cứng cáp.",
    description: `
      <h3>Thiết kế bản lề ErgoLift nâng cao trải nghiệm</h3>
      <p>Dell Inspiron 15 3530 duy trì ngôn ngữ thiết kế thực dụng quen thuộc của Dell với chất liệu nhựa cao cấp, chống bám vân tay và vô cùng cứng cáp. Bản lề ErgoLift thông minh sẽ tự động nâng bàn phím lên một góc nhỏ khi mở máy, tạo tư thế gõ phím thoải mái hơn và tăng cường luồng khí tản nhiệt cho hệ thống bên trong.</p>
      
      <h3>Bảo mật vân tay và Sạc nhanh</h3>
      <p>Máy được trang bị tính năng bảo mật vân tay (Fingerprint) tích hợp thẳng vào nút nguồn, giúp bạn mở khóa Windows cực nhanh chỉ với một chạm. Công nghệ sạc nhanh ExpressCharge cho phép sạc từ 0% lên 80% chỉ trong 60 phút, đảm bảo bạn không bị gián đoạn công việc quá lâu.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i7-1355U" },
      { label: "RAM / ROM", value: "16GB RAM / 1TB SSD" },
      { label: "Tính năng", value: "Bảo mật vân tay" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i7-1355U (10 Nhân / 12 Luồng, Up to 5.0GHz, 12MB Cache)" },
      { label: "RAM", value: "16GB (1x16GB hoặc 2x8GB) DDR4 2666MHz" },
      { label: "Ổ cứng", value: "1TB M.2 PCIe NVMe SSD" },
      { label: "Màn hình", value: "15.6 inch FHD (1920x1080), 120Hz, WVA Anti-Glare" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Bảo mật", value: "Cảm biến vân tay (Fingerprint)" },
      { label: "Trọng lượng", value: "1.66 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home + Office" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P023",
    slug: "laptop-dell-inspirion-16",
    name: "Laptop Dell Inspirion 16 5640 C7U161W11IBU",
    category: "laptop",
    price: 27690000,
    salePrice: 25790000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_dell_inspirion_16/laptop_dell_inspirion_16_5640.png",
      "/product_image/laptops/laptop_dell_inspirion_16/laptop_dell_inspirion_16_01.png",
      "/product_image/laptops/laptop_dell_inspirion_16/laptop_dell_inspirion_16_02.png",
      "/product_image/laptops/laptop_dell_inspirion_16/laptop_dell_inspirion_16_03.png",
      "/product_image/laptops/laptop_dell_inspirion_16/laptop_dell_inspirion_16_04.png",
      "/product_image/laptops/laptop_dell_inspirion_16/laptop_dell_inspirion_16_05.png"
    ],
    specs: {
      brand: "Dell",
      cpu: "Intel Core 7 150U",
      ram: "16GB LPDDR5",
      storage: "1TB SSD",
      screen: "16 inch"
    },
    shortDesc: "Màn hình 16 inch tỷ lệ 16:10 mở rộng không gian, thiết kế vỏ nhôm sang trọng.",
    description: `
      <h3>Tối ưu hóa năng suất với màn hình 16 inch</h3>
      <p>Dell Inspiron 16 5640 đánh dấu sự chuyển mình với màn hình kích thước 16 inch tỷ lệ vàng 16:10. Thiết kế này giúp diện tích hiển thị theo chiều dọc tăng lên 11% so với màn hình 15.6 inch truyền thống, cho phép bạn xem được nhiều dòng code, nhiều ô tính Excel hơn mà không cần phải cuộn trang liên tục.</p>
      
      <h3>Hiệu năng thế hệ mới từ Intel Core 7</h3>
      <p>Sử dụng vi xử lý Intel Core 7 150U mới (Raptor Lake Refresh) kết hợp bộ nhớ RAM LPDDR5 tốc độ cao 5200MHz, máy đáp ứng trơn tru các tác vụ công việc nặng. Hệ thống loa Stereo được tinh chỉnh bởi công nghệ Waves MaxxAudio Pro mang đến chất âm to, rõ, phục vụ tốt cho cả họp trực tuyến lẫn xem phim giải trí.</p>
    `,
    cardSpecs: [
      { label: "Màn hình", value: "16 inch FHD+ (16:10)" },
      { label: "CPU", value: "Intel Core 7 150U" },
      { label: "RAM / ROM", value: "16GB LPDDR5 / 1TB SSD" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core 7 150U (10 Nhân / 12 Luồng, Up to 5.4GHz, 12MB Cache)" },
      { label: "RAM", value: "16GB (2x8GB) LPDDR5 5200MHz (2 Slot, Max 32GB)" },
      { label: "Ổ cứng", value: "1TB M.2 PCIe NVMe SSD" },
      { label: "Màn hình", value: "16.0 inch FHD+ (1920x1200), 16:10, ComfortView" },
      { label: "Card màn hình", value: "Intel Graphics" },
      { label: "Chất liệu", value: "Vỏ nhôm (Mặt A, C)" },
      { label: "Trọng lượng", value: "1.87 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home + Office" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P024",
    slug: "laptop-dell-inspirion-n3530",
    name: "Laptop Dell Inspirion 15 3520 i5U165W11BLU-FP",
    category: "laptop",
    price: 16790000,
    salePrice: 15290000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_dell_inspirion_n3530/laptop_dell_inspirion_n3530_i5u165w11slu.png",
      "/product_image/laptops/laptop_dell_inspirion_n3530/laptop_dell_inspirion_n3530_01.png",
      "/product_image/laptops/laptop_dell_inspirion_n3530/laptop_dell_inspirion_n3530_02.png",
      "/product_image/laptops/laptop_dell_inspirion_n3530/laptop_dell_inspirion_n3530_03.png",
      "/product_image/laptops/laptop_dell_inspirion_n3530/laptop_dell_inspirion_n3530_04.png",
      "/product_image/laptops/laptop_dell_inspirion_n3530/laptop_dell_inspirion_n3530_05.png",
      "/product_image/laptops/laptop_dell_inspirion_n3530/laptop_dell_inspirion_n3530_06.png"
    ],
    specs: {
      brand: "Dell",
      cpu: "Intel Core i5-1235U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      screen: "15.6 inch"
    },
    shortDesc: "Sự lựa chọn kinh tế cho Học sinh, Sinh viên với cấu hình i5 ổn định, RAM 16GB đa nhiệm.",
    description: `
      <h3>Hiệu quả trong tầm giá</h3>
      <p>Dell Inspiron 15 3520 là ứng cử viên sáng giá trong phân khúc laptop dưới 16 triệu đồng. Máy sở hữu vi xử lý Intel Core i5 thế hệ 12 cùng 16GB RAM có sẵn, xử lý cực kỳ nhẹ nhàng các tác vụ văn phòng cơ bản, phần mềm học tập trực tuyến hay các trình duyệt web nặng nề.</p>
      
      <h3>Bảo vệ mắt ComfortView</h3>
      <p>Màn hình 15.6 inch FHD hiển thị hình ảnh rõ ràng và được trang bị công nghệ Dell ComfortView. Tính năng này giúp giảm thiểu lượng ánh sáng xanh độc hại phát ra từ màn hình, làm dịu mắt đáng kể khi bạn phải chạy deadline hay ôn thi vào ban đêm.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5-1235U" },
      { label: "RAM / ROM", value: "16GB RAM / 512GB SSD" },
      { label: "Tính năng", value: "Màn hình 120Hz mượt mà" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1235U (10 Nhân / 12 Luồng, Up to 4.4GHz)" },
      { label: "RAM", value: "16GB (2x8GB) DDR4 2666MHz" },
      { label: "Ổ cứng", value: "512GB M.2 PCIe NVMe SSD" },
      { label: "Màn hình", value: "15.6 inch FHD (1920x1080), 120Hz, 250 nits" },
      { label: "Card màn hình", value: "Intel UHD Graphics (Iris Xe Ready)" },
      { label: "Camera", value: "720p HD Webcam" },
      { label: "Trọng lượng", value: "1.65 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home + Office" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P025",
    slug: "laptop-dell-xps",
    name: "Laptop Dell XPS 9350 XPS9350-U5IA165W11GR-FP",
    category: "laptop",
    price: 59990000,
    salePrice: 54990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_dell_xps/laptop_dell_xps_9350_xps9350.png",
      "/product_image/laptops/laptop_dell_xps/laptop_dell_xps_01.png",
      "/product_image/laptops/laptop_dell_xps/laptop_dell_xps_02.png",
      "/product_image/laptops/laptop_dell_xps/laptop_dell_xps_03.png"
    ],
    specs: {
      brand: "Dell",
      cpu: "Intel Core Ultra 5 226V",
      ram: "16GB LPDDR5X",
      storage: "512GB SSD",
      screen: "13.4 inch"
    },
    shortDesc: "Kiệt tác công nghệ nguyên khối nhôm phay xước CNC, bàn di chuột tàng hình bằng kính.",
    description: `
      <h3>Thiết kế viễn tưởng, vẻ đẹp trường tồn</h3>
      <p>Dell XPS 13 9350 luôn là chuẩn mực cao nhất của thiết kế laptop Windows. Vỏ máy được gia công tỉ mỉ bằng nhôm CNC kết hợp với phần chiếu nghỉ tay bằng kính (Glass Palm Rest) mang lại sự sang trọng tuyệt đối. Bàn di chuột tàng hình (Seamless Touchpad) với công nghệ phản hồi xúc giác Haptic và hàng phím chức năng cảm ứng phát sáng tạo nên một diện mạo đầy tính tương lai.</p>
      
      <h3>RAM tích hợp - Sức mạnh từ Lunar Lake</h3>
      <p>Sự đột phá về thiết kế đi kèm với bộ vi xử lý Intel Core Ultra 5 226V cấu trúc Lunar Lake hoàn toàn mới.  Công nghệ tích hợp trực tiếp RAM (Memory on Package) vào CPU giúp giảm đáng kể mức tiêu thụ năng lượng và độ trễ dữ liệu, cung cấp thời lượng pin khủng để bạn thoải mái làm việc trên các chuyến bay dài.</p>
    `,
    cardSpecs: [
      { label: "Thiết kế", value: "Nhôm CNC & Bàn di chuột tàng hình kính" },
      { label: "CPU", value: "Intel Core Ultra 5 226V (Lunar Lake)" },
      { label: "Màn hình", value: "13.4 inch FHD+ InfinityEdge" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 226V (8 Nhân / 8 Luồng, Up to 4.5GHz)" },
      { label: "RAM", value: "16GB LPDDR5X 8533MHz (Tích hợp trên chip, không nâng cấp)" },
      { label: "Ổ cứng", value: "512GB M.2 PCIe NVMe SSD" },
      { label: "Màn hình", value: "13.4 inch FHD+ (1920x1200), InfinityEdge, 500 nits" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Bàn phím / Touchpad", value: "Bàn phím Zero-lattice / Haptic Touchpad kính" },
      { label: "Trọng lượng", value: "1.17 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng Premium Support" },
    ],
  },

  //============================HP==========================
  {
    id: "P026",
    slug: "laptop-hp-14s",
    name: "Laptop HP 14s-dq1065TU 9TZ44PA",
    category: "laptop",
    price: 16690000,
    salePrice: 16690000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_hp_14s/laptop_hp_14s_dq1065tu.png",
      "/product_image/laptops/laptop_hp_14s/laptop_hp_14s_01.jpg",
      "/product_image/laptops/laptop_hp_14s/laptop_hp_14s_02.png"
    ],
    specs: {
      brand: "HP",
      cpu: "Intel Core i5-1035G1",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Laptop HP màu bạc tinh tế, thiết kế bo tròn nhẹ nhàng, thích hợp học tập và làm việc cơ bản.",
    description: `
      <h3>Gọn nhẹ và thời trang</h3>
      <p>HP 14s mang thiết kế đặc trưng với màu bạc nguyên khối, các góc cạnh được bo tròn mềm mại tạo cảm giác thân thiện khi cầm nắm. Trọng lượng khoảng 1.46kg giúp các bạn học sinh, sinh viên dễ dàng mang theo trong balo mà không gây cảm giác nặng nề.</p>
      
      <h3>Hiệu năng đáp ứng đủ nhu cầu</h3>
      <p>Máy được trang bị vi xử lý Intel Core i5 thế hệ 10 kết hợp cùng 8GB RAM. Cấu hình này không sinh ra để chơi game nặng, nhưng nó xử lý cực kỳ ổn định và mát mẻ các tác vụ soạn thảo văn bản Word, làm slide PowerPoint hay xem phim trực tuyến hằng ngày.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5-1035G1" },
      { label: "RAM / ROM", value: "8GB RAM / 512GB SSD" },
      { label: "Màn hình", value: "14 inch gọn nhẹ" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1035G1 (4 Nhân / 8 Luồng, Up to 3.6GHz)" },
      { label: "RAM", value: "8GB DDR4 2666MHz" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe M.2 SSD" },
      { label: "Màn hình", value: "14.0 inch HD/FHD, Viền mỏng (Micro-Edge)" },
      { label: "Card màn hình", value: "Intel UHD Graphics" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.46 kg" },
      { label: "Hệ điều hành", value: "Windows 10 / 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P027",
    slug: "laptop-hp-240-g9",
    name: "Laptop HP 240 G9 6L1Y2PA",
    category: "laptop",
    price: 18790000,
    salePrice: 15290000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_hp_240_g9/laptop_hp_240_g9_6l1y2pa.png",
      "/product_image/laptops/laptop_hp_240_g9/laptop_hp_240_g9_01.png",
      "/product_image/laptops/laptop_hp_240_g9/laptop_hp_240_g9_02.png",
      "/product_image/laptops/laptop_hp_240_g9/laptop_hp_240_g9_03.png",
      "/product_image/laptops/laptop_hp_240_g9/laptop_hp_240_g9_04.png"
    ],
    specs: {
      brand: "HP",
      cpu: "Intel Core i5-1235U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Máy tính xách tay tối ưu cho dân văn phòng, độ bền cao, bảo mật TPM vững chắc.",
    description: `
      <h3>Thiết kế dành cho Doanh nghiệp vừa và nhỏ</h3>
      <p>HP 240 G9 thuộc dòng máy tính doanh nghiệp cơ bản của HP. Máy khoác lên mình tông màu đen nhám chống bám bẩn rất tốt, cùng bộ khung vỏ nhựa polycarbonate chịu lực, giúp thiết bị luôn sẵn sàng đối mặt với môi trường công sở bận rộn và những chuyến công tác xa.</p>
      
      <h3>Bảo vệ dữ liệu an toàn</h3>
      <p>Ngoài sức mạnh từ chip i5 thế hệ 12, chiếc máy này còn được tích hợp chip bảo mật TPM (Trusted Platform Module) ở cấp độ phần cứng. Dữ liệu, mật khẩu và email của bạn sẽ được mã hóa an toàn, ngăn chặn sự rò rỉ thông tin ngay cả khi máy tính bị mất cắp.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5-1235U" },
      { label: "Bảo mật", value: "Mã hóa dữ liệu TPM 2.0" },
      { label: "Cổng kết nối", value: "Đầy đủ USB-C, LAN, HDMI" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1235U (10 Nhân / 12 Luồng, Up to 4.4GHz)" },
      { label: "RAM", value: "8GB DDR4 3200MHz" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
      { label: "Màn hình", value: "14.0 inch FHD (1920x1080), Anti-Glare, 250 nits" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics (Khi chạy Dual RAM)" },
      { label: "Kết nối", value: "1x USB Type-C, 2x USB-A, 1x HDMI, 1x RJ-45" },
      { label: "Trọng lượng", value: "1.47 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P028",
    slug: "laptop-hp-envy-13",
    name: "Laptop HP ENVY 13 ba0046TU 171M2PA",
    category: "laptop",
    price: 21990000,
    salePrice: 21990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_hp_envy_13/laptop_hp_envy_13_ba0046tu_171m7pa.jpg",
      "/product_image/laptops/laptop_hp_envy_13/laptop_hp_envy_13_01.png",
      "/product_image/laptops/laptop_hp_envy_13/laptop_hp_envy_13_02.png",
      "/product_image/laptops/laptop_hp_envy_13/laptop_hp_envy_13_03.png",
      "/product_image/laptops/laptop_hp_envy_13/laptop_hp_envy_13_04.png"
    ],
    specs: {
      brand: "HP",
      cpu: "Intel Core i5-1035G4",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      screen: "13.3 inch"
    },
    shortDesc: "Dòng Envy cao cấp, vỏ kim loại sáng bóng, màn hình 13.3 inch viền siêu mỏng Micro-Edge.",
    description: `
      <h3>Tuyệt tác thiết kế kim loại</h3>
      <p>HP ENVY 13 là sự kết hợp hoàn mỹ giữa nghệ thuật và công nghệ. Khung máy được chế tác tinh xảo từ nhôm nguyên khối, với tông màu vàng gold hoặc bạc cực kỳ sang trọng. Máy vô cùng mỏng nhẹ, phù hợp để nằm gọn trong túi xách thời trang của các quý cô công sở hay doanh nhân.</p>
      
      <h3>Hình ảnh sống động, bảo mật tối cao</h3>
      <p>Màn hình 13.3 inch viền siêu mỏng Micro-Edge cung cấp không gian hiển thị tràn viền, độ phủ màu 72% NTSC tái hiện màu sắc chính xác, tươi tắn. Máy còn được trang bị nút che camera vật lý (Shutter) và nút tắt micro chuyên dụng, giúp bạn kiểm soát hoàn toàn sự riêng tư của mình chỉ bằng một cái chạm tay.</p>
    `,
    cardSpecs: [
      { label: "Thiết kế", value: "Nhôm nguyên khối mỏng nhẹ" },
      { label: "Màn hình", value: "13.3 inch FHD, 100% sRGB" },
      { label: "Tính năng", value: "Nút che Camera vật lý" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1035G4 (4 Nhân / 8 Luồng, Up to 3.7GHz)" },
      { label: "RAM", value: "8GB DDR4 2666MHz (Onboard)" },
      { label: "Ổ cứng", value: "256GB PCIe NVMe M.2 SSD" },
      { label: "Màn hình", value: "13.3 inch FHD (1920x1080), IPS, 72% NTSC, 300 nits" },
      { label: "Card màn hình", value: "Intel Iris Plus Graphics" },
      { label: "Bảo mật", value: "Bảo mật vân tay, Shutter che Camera" },
      { label: "Trọng lượng", value: "1.30 kg" },
      { label: "Hệ điều hành", value: "Windows 10 / 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P029",
    slug: "laptop-hp-pavilion-15",
    name: "Laptop HP Pavilion 15 eg3111TU 8U6L8PA",
    category: "laptop",
    price: 21290000,
    salePrice: 19290000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_hp_pavilion_15/laptop_hp_pavilion_15_eg3111tu_8u6l8pa.png",
      "/product_image/laptops/laptop_hp_pavilion_15/laptop_hp_pavilion_15_01.png",
      "/product_image/laptops/laptop_hp_pavilion_15/laptop_hp_pavilion_15_02.png",
      "/product_image/laptops/laptop_hp_pavilion_15/laptop_hp_pavilion_15_03.png",
      "/product_image/laptops/laptop_hp_pavilion_15/laptop_hp_pavilion_15_04.png"
    ],
    specs: {
      brand: "HP",
      cpu: "Intel Core i5-1335U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      screen: "15.6 inch"
    },
    shortDesc: "Laptop 15.6 inch đa dụng, loa B&O sống động, hiệu năng vượt trội từ i5 thế hệ 13.",
    description: `
      <h3>Thiết kế thanh lịch, làm việc thoải mái</h3>
      <p>HP Pavilion 15 khoác lên mình màu Bạc sương mù tinh tế với phần mặt A và mặt C bằng kim loại mát lạnh. Màn hình lớn 15.6 inch FHD cung cấp hình ảnh chân thực, đi kèm bàn phím Full-size (có cụm phím số) có độ nảy tốt, tạo cảm giác thoải mái tối đa khi nhập liệu số liệu văn phòng.</p>
      
      <h3>Trải nghiệm âm thanh B&O</h3>
      <p>Không chỉ đáp ứng tốt công việc nhờ chip Core i5 thế hệ 13, Pavilion 15 còn là một cỗ máy giải trí tuyệt vời. Dải loa kép được tinh chỉnh bởi các chuyên gia âm thanh từ B&O (Bang & Olufsen) mang lại dải âm trung và cao rõ nét, hoàn hảo cho những buổi xem phim hoặc nghe nhạc thư giãn tại nhà.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5-1335U" },
      { label: "RAM / ROM", value: "16GB RAM / 512GB SSD" },
      { label: "Âm thanh", value: "Audio by B&O" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1335U (10 Nhân / 12 Luồng, Up to 4.6GHz)" },
      { label: "RAM", value: "16GB (2x8GB) DDR4 3200MHz" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe M.2 SSD" },
      { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, BrightView" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Âm thanh", value: "Audio by B&O; Loa Kép (Dual Speakers)" },
      { label: "Trọng lượng", value: "1.74 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P030",
    slug: "laptop-hp-pavilion-x360",
    name: "Laptop HP Pavilion X360 14 DW0062TU",
    category: "laptop",
    price: 18690000,
    salePrice: 17990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_hp_pavilion_x360/laptop_hp_pavilion_x360_14_dw0062tu.jpg",
      "/product_image/laptops/laptop_hp_pavilion_x360/laptop_hp_pavilion_x360_01.png",
      "/product_image/laptops/laptop_hp_pavilion_x360/laptop_hp_pavilion_x360_02.png",
      "/product_image/laptops/laptop_hp_pavilion_x360/laptop_hp_pavilion_x360_03.png",
      "/product_image/laptops/laptop_hp_pavilion_x360/laptop_hp_pavilion_x360_04.png"
    ],
    specs: {
      brand: "HP",
      cpu: "Intel Core i5-1035G1",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Laptop 2-trong-1 tiện lợi, bản lề xoay gập 360 độ, hỗ trợ màn hình cảm ứng đa điểm.",
    description: `
      <h3>Biến hóa linh hoạt 4 chế độ</h3>
      <p>HP Pavilion x360 mang tới khả năng biến hình ấn tượng nhờ bản lề kép siêu bền.  Bạn có thể sử dụng máy ở dạng Laptop truyền thống để làm việc, gập ngược màn hình (Tent Mode) để xem phim, hoặc gập phẳng 360 độ để biến nó thành một chiếc Tablet (Máy tính bảng) cầm tay cực kỳ tiện dụng.</p>
      
      <h3>Chạm để sáng tạo</h3>
      <p>Màn hình 14 inch hỗ trợ cảm ứng đa điểm cho phản hồi cực kỳ nhanh nhạy. Bạn có thể thao tác vuốt lướt trực tiếp trên Windows, hoặc sử dụng bút cảm ứng (mua riêng) để viết, vẽ phác thảo ý tưởng thiết kế một cách tự nhiên như trên giấy thật.</p>
    `,
    cardSpecs: [
      { label: "Tính năng", value: "Bản lề xoay gập 360 độ" },
      { label: "Màn hình", value: "14 inch Cảm ứng (Touch)" },
      { label: "Âm thanh", value: "Audio by B&O" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1035G1 (4 Nhân / 8 Luồng, Up to 3.6GHz)" },
      { label: "RAM", value: "8GB DDR4 3200MHz" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe M.2 SSD" },
      { label: "Màn hình", value: "14.0 inch FHD (1920x1080), IPS, Cảm ứng đa điểm, Kính viền đối viền" },
      { label: "Card màn hình", value: "Intel UHD Graphics" },
      { label: "Bản lề", value: "Xoay gập 360 độ" },
      { label: "Trọng lượng", value: "1.61 kg" },
      { label: "Hệ điều hành", value: "Windows 10 / 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  //============================LENOVO========================
  {
    id: "P031",
    slug: "laptop-lenovo-ideapad-slim-3",
    name: "Laptop Lenovo IdeaPad Slim 3 15IRH10 83K1000JVN",
    category: "laptop",
    price: 19490000,
    salePrice: 17990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lenovo_ideapad_slim_3/laptop_lenovo_ideapad_slim_3_15irh10.png",
      "/product_image/laptops/laptop_lenovo_ideapad_slim_3/laptop_lenovo_ideapad_slim_3_01.png",
      "/product_image/laptops/laptop_lenovo_ideapad_slim_3/laptop_lenovo_ideapad_slim_3_02.png",
      "/product_image/laptops/laptop_lenovo_ideapad_slim_3/laptop_lenovo_ideapad_slim_3_03.png",
      "/product_image/laptops/laptop_lenovo_ideapad_slim_3/laptop_lenovo_ideapad_slim_3_04.png"
    ],
    specs: {
      brand: "Lenovo",
      cpu: "Intel Core i7-13620H",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      screen: "15.3 inch"
    },
    shortDesc: "Máy tính chuẩn quân đội mỏng nhẹ, sức mạnh khổng lồ từ chip i7 dòng H.",
    description: `
      <h3>Hiệu suất đột phá trong thân máy siêu mỏng</h3>
      <p>Lenovo IdeaPad Slim 3 phá vỡ định kiến về những chiếc laptop mỏng nhẹ yếu ớt khi trang bị vi xử lý Intel Core i7-13620H (10 nhân, 16 luồng) thường thấy trên các dòng máy Gaming. Bạn hoàn toàn có thể sử dụng máy để dựng video, viết code nặng hoặc xử lý các file AutoCAD một cách vô cùng trơn tru.</p>
      
      <h3>Bền bỉ chuẩn quân đội</h3>
      <p>Với độ dày máy chỉ khoảng 17.9mm, khung máy vẫn cực kỳ chắc chắn và đạt được chứng nhận độ bền quân đội Mỹ MIL-STD 810H. Lớp vỏ ngoài mang màu xám Arctic Grey hiện đại, chống bám bẩn vân tay, giữ cho thiết bị luôn sạch sẽ trong suốt vòng đời sử dụng.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i7-13620H" },
      { label: "Độ bền", value: "Chuẩn MIL-STD 810H" },
      { label: "Bảo mật", value: "Màn trập Webcam vật lý" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i7-13620H (10 Nhân / 16 Luồng, Up to 4.9GHz, 24MB Cache)" },
      { label: "RAM", value: "16GB DDR5 4800MHz (8GB Onboard + 8GB SO-DIMM)" },
      { label: "Ổ cứng", value: "512GB M.2 2242 PCIe 4.0x4 NVMe SSD" },
      { label: "Màn hình", value: "15.3 inch FHD, Anti-Glare" },
      { label: "Card màn hình", value: "Intel UHD Graphics" },
      { label: "Độ bền", value: "Chứng nhận chuẩn quân đội MIL-STD 810H" },
      { label: "Trọng lượng", value: "1.62 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P032",
    slug: "laptop-lenovo-thinkpad-x1",
    name: "Laptop Lenovo ThinkPad X1 Carbon Gen 13 21NX003DVN",
    category: "laptop",
    price: 49800000,
    salePrice: 48300000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lenovo_thinkpad_x1/laptop_lenovo_thinkpad_x1_carbon_gen_13.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x1/laptop_lenovo_thinkpad_x1_01.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x1/laptop_lenovo_thinkpad_x1_02.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x1/laptop_lenovo_thinkpad_x1_03.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x1/laptop_lenovo_thinkpad_x1_04.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x1/laptop_lenovo_thinkpad_x1_05.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x1/laptop_lenovo_thinkpad_x1_06.png"
    ],
    specs: {
      brand: "Lenovo",
      cpu: "Intel Core Ultra 5 225H",
      ram: "16GB LPDDR5x",
      storage: "1TB SSD",
      screen: "14 inch"
    },
    shortDesc: "Huyền thoại laptop doanh nhân, khung sợi Carbon siêu nhẹ, bàn phím gõ tốt nhất thế giới.",
    description: `
      <h3>Vật liệu Carbon viễn tưởng</h3>
      <p>ThinkPad X1 Carbon Gen 13 là biểu tượng của giới doanh nhân thành đạt.  Lớp vỏ mặt A được dệt từ sợi Carbon siêu nhẹ và hợp kim Magnesium ở khung gầm, giúp trọng lượng máy chỉ loanh quanh 1.1kg nhưng độ cứng cáp lại vượt xa các loại laptop vỏ nhôm thông thường. Bàn phím ThinkPad mang lại cảm giác gõ nảy, sâu, kết hợp cùng TrackPoint đỏ đặc trưng giữa bàn phím tạo nên trải nghiệm điều hướng độc nhất vô nhị.</p>
      
      <h3>Hiệu suất Intel Core Ultra thế hệ mới</h3>
      <p>Sự bền bỉ bên ngoài đi kèm sức mạnh bên trong với vi xử lý Intel Core Ultra 5 225H. Máy sở hữu ổ cứng 1TB PCIe 4.0 tốc độ cao (Khe cắm hỗ trợ cả chuẩn PCIe 5.0 tương lai), cung cấp khả năng xử lý mượt mà cho mọi tác vụ dữ liệu, cùng thời lượng pin kéo dài suốt một ngày làm việc cường độ cao.</p>
    `,
    cardSpecs: [
      { label: "Chất liệu", value: "Sợi Carbon & Hợp kim Magie" },
      { label: "CPU", value: "Intel Core Ultra 5 225H" },
      { label: "Bàn phím", value: "ThinkPad Keyboard chống tràn" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 225H (14 Nhân / 14 Luồng, Up to 4.9GHz, 18MB)" },
      { label: "RAM", value: "16GB LPDDR5x 8400MHz (Soldered)" },
      { label: "Ổ cứng", value: "1TB M.2 2280 PCIe 4.0x4 NVMe Opal 2.0 (Hỗ trợ SSD PCIe 5.0)" },
      { label: "Màn hình", value: "14.0 inch WUXGA/OLED, Chống chói, Low Power" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Bảo mật", value: "Vân tay trên nút nguồn, Camera IR Windows Hello, dTPM 2.0" },
      { label: "Trọng lượng", value: "1.12 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Pro" },
      { label: "Bảo hành", value: "36 Tháng (Bảo hành Premier cao cấp)" },
    ],
  },

  {
    id: "P033",
    slug: "laptop-lenovo-thinkpad-x9",
    name: "Laptop Lenovo ThinkPad X9-14 Gen 1 21QA006GVN",
    category: "laptop",
    price: 50390000,
    salePrice: 44990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lenovo_thinkpad_x9/laptop_lenovo_thinkpad_x9_14_gen1.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x9/laptop_lenovo_thinkpad_x9_01.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x9/laptop_lenovo_thinkpad_x9_02.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x9/laptop_lenovo_thinkpad_x9_03.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x9/laptop_lenovo_thinkpad_x9_04.png",
      "/product_image/laptops/laptop_lenovo_thinkpad_x9/laptop_lenovo_thinkpad_x9_05.png"
    ],
    specs: {
      brand: "Lenovo",
      cpu: "Intel Core Ultra 5 228V",
      ram: "32GB LPDDR5x",
      storage: "1TB SSD",
      screen: "14 inch"
    },
    shortDesc: "Siêu phẩm di động, cấu trúc Lunar Lake 32GB RAM, thiết kế sang trọng, NPU 40 TOPS.",
    description: `
      <h3>Bộ vi xử lý Lunar Lake tiết kiệm điện</h3>
      <p>Là một trong những thành viên ưu tú của gia đình ThinkPad thế hệ mới, máy sử dụng vi xử lý Intel Core Ultra 5 228V (Lunar Lake). Với thiết kế nhân hiệu suất (P-Core) và nhân tiết kiệm năng lượng (LPE-Core) tinh chỉnh, máy đạt được thời gian sử dụng pin ấn tượng. NPU tích hợp đạt 40 TOPS hỗ trợ các công cụ AI cục bộ cực nhanh.</p>
      
      <h3>32GB RAM tốc độ siêu khủng</h3>
      <p>Máy được trang bị sẵn 32GB RAM LPDDR5x tốc độ 8533MHz, giải quyết triệt để vấn đề tràn bộ nhớ khi phải mở hàng chục file thiết kế hay duyệt web với hàng trăm tab. Vỏ máy cứng cáp, bàn phím ThinkPad chuẩn mực cùng độ tin cậy của phần cứng Lenovo tạo nên một công cụ làm việc đắc lực và không thể thay thế.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 228V (Lunar Lake)" },
      { label: "RAM / ROM", value: "32GB LPDDR5x / 1TB SSD" },
      { label: "NPU (AI)", value: "Intel AI Boost (40 TOPS)" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 228V (8 Nhân / 8 Luồng, Up to 4.5GHz, NPU 40 TOPS)" },
      { label: "RAM", value: "32GB LPDDR5x 8533MHz (Soldered)" },
      { label: "Ổ cứng", value: "1TB M.2 2242 PCIe 4.0x4 NVMe Opal 2.0 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA, Chống chói" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Chất liệu vỏ", value: "Hợp kim Magie / Sợi Carbon" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.2 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Pro" },
      { label: "Bảo hành", value: "36 Tháng (Bảo hành Premier)" },
    ],
  },

  {
    id: "P034",
    slug: "laptop-lenovo-yoga-slim-7",
    name: "Laptop Lenovo Yoga Slim 7 14IMH9 83CV00DKVN",
    category: "laptop",
    price: 29990000,
    salePrice: 27990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lenovo_yoga_slim_7/laptop_lenovo_yoga_slim_7_14imh9.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_7/laptop_lenovo_yoga_slim_7_01.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_7/laptop_lenovo_yoga_slim_7_02.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_7/laptop_lenovo_yoga_slim_7_03.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_7/laptop_lenovo_yoga_slim_7_04.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_7/laptop_lenovo_yoga_slim_7_05.png"
    ],
    specs: {
      brand: "Lenovo",
      cpu: "Intel Core Ultra 7 155H",
      ram: "32GB LPDDR5",
      storage: "1TB SSD",
      screen: "14 inch"
    },
    shortDesc: "Vỏ nhôm nguyên khối, viền cong bo tròn tinh tế, cấu hình khủng Core Ultra 7 và RAM 32GB.",
    description: `
      <h3>Ngôn ngữ thiết kế Comfort Edge</h3>
      <p>Lenovo Yoga Slim 7 nổi bật với ngôn ngữ thiết kế Comfort Edge, các cạnh máy được bo tròn tinh tế giống như các mẫu điện thoại thông minh cao cấp, tạo cảm giác cầm nắm vô cùng thoải mái mà không bị cấn tay. Lớp vỏ nhôm nguyên khối mang lại độ cứng cáp và vẻ đẹp thanh lịch, hiện đại.</p>
      
      <h3>Hiệu suất sáng tạo không giới hạn</h3>
      <p>Sức mạnh phần cứng của máy thật sự ấn tượng với vi xử lý Intel Core Ultra 7 155H (16 nhân, 22 luồng) và bộ nhớ RAM lên tới 32GB. Việc chỉnh sửa ảnh RAW trên Lightroom hay render các đoạn clip ngắn trên Capcut PC diễn ra nhanh như chớp. NPU thông minh hỗ trợ các công cụ AI xử lý mượt mà và tối ưu hóa thời lượng pin cho một ngày dài năng động.</p>
    `,
    cardSpecs: [
      { label: "Thiết kế", value: "Vỏ nhôm bo cong Comfort Edge" },
      { label: "CPU", value: "Intel Core Ultra 7 155H" },
      { label: "RAM / ROM", value: "32GB RAM / 1TB SSD" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 155H (16 Nhân / 22 Luồng, Up to 4.8GHz, 24MB Cache)" },
      { label: "RAM", value: "32GB LPDDR5-6400 (Soldered)" },
      { label: "Ổ cứng", value: "1TB M.2 2242 PCIe 4.0x4 NVMe SSD" },
      { label: "Màn hình", value: "14.0 inch OLED, 100% DCI-P3, VESA DisplayHDR True Black" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Webcam", value: "FHD 1080p + IR (Windows Hello)" },
      { label: "Trọng lượng", value: "1.39 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home + Office Home & Student" },
      { label: "Bảo hành", value: "36 Tháng (Bảo hành Premium Care)" },
    ],
  },

  {
    id: "P035",
    slug: "laptop-lenovo-yoga-slim-9",
    name: "Laptop Lenovo Yoga Slim 9 14ILL10 83CX001AVN",
    category: "laptop",
    price: 59990000,
    salePrice: 55990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lenovo_yoga_slim_9/laptop_lenovo_yoga_slim_9_14ill10.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_9/laptop_lenovo_yoga_slim_9_01.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_9/laptop_lenovo_yoga_slim_9_02.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_9/laptop_lenovo_yoga_slim_9_03.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_9/laptop_lenovo_yoga_slim_9_04.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_9/laptop_lenovo_yoga_slim_9_05.png",
      "/product_image/laptops/laptop_lenovo_yoga_slim_9/laptop_lenovo_yoga_slim_9_06.png"
    ],
    specs: {
      brand: "Lenovo",
      cpu: "Intel Core Ultra 7 258V",
      ram: "32GB LPDDR5x",
      storage: "1TB SSD",
      screen: "14 inch"
    },
    shortDesc: "Đẳng cấp thượng lưu với mặt kính 3D cong, chip Lunar Lake mới nhất tích hợp RAM trực tiếp.",
    description: `
      <h3>Tuyệt tác kính 3D và da cao cấp</h3>
      <p>Lenovo Yoga Slim 9 là một kiệt tác thực sự trong thế giới laptop. Nắp máy được bao phủ bởi lớp kính 3D cong tràn viền, mang lại vẻ đẹp bóng bẩy tựa như mặt hồ tĩnh lặng. Phần kê tay có thể được làm từ vật liệu da cao cấp hoặc kính sang trọng, giúp mỗi lần chạm tay là một trải nghiệm thượng lưu đích thực.</p>
      
      <h3>Tối thượng cùng Intel Core Ultra Series 2</h3>
      <p>Bên trong lớp vỏ hào nhoáng là bộ vi xử lý Intel Core Ultra 7 258V (Lunar Lake).  Thiết kế MoP (Memory on Package) hàn trực tiếp 32GB RAM LPDDR5X vào chung đế chip giúp giảm thiểu độ trễ, bứt phá băng thông đồ họa và tiết kiệm pin một cách ngoạn mục. Màn hình OLED chuẩn 4K cung cấp không gian thị giác mê hoặc cho những tín đồ yêu cái đẹp.</p>
    `,
    cardSpecs: [
      { label: "Thiết kế", value: "Mặt lưng kính 3D cong tràn viền" },
      { label: "CPU", value: "Intel Core Ultra 7 258V (Lunar Lake)" },
      { label: "RAM (MoP)", value: "32GB LPDDR5x (Tích hợp trên chip)" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 258V (8 Nhân / 8 Luồng, Up to 4.8GHz, 12MB Cache)" },
      { label: "RAM", value: "32GB LPDDR5x 8533MHz (Memory on Package)" },
      { label: "Ổ cứng", value: "1TB M.2 2242 PCIe 4.0x4 NVMe SSD" },
      { label: "Màn hình", value: "14.0 inch PureSight OLED, Cảm ứng (Touch), 100% DCI-P3" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Bảo mật", value: "E-Shutter Camera, Nhận diện khuôn mặt IR" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.3 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "36 Tháng (Premium Care)" },
    ],
  },

  //============================LG gram========================
  {
    id: "P036",
    slug: "laptop-lg-gram-2022",
    name: "Laptop LG Gram 2022 17ZD90Q-G.AX52A5",
    category: "laptop",
    price: 40990000,
    salePrice: 18990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lg_gram_2022/laptop_lg_gram_2022_17zd90q.png",
      "/product_image/laptops/laptop_lg_gram_2022/laptop_lg_gram_2022_01.png",
      "/product_image/laptops/laptop_lg_gram_2022/laptop_lg_gram_2022_02.png",
      "/product_image/laptops/laptop_lg_gram_2022/laptop_lg_gram_2022_03.png",
      "/product_image/laptops/laptop_lg_gram_2022/laptop_lg_gram_2022_04.png",
      "/product_image/laptops/laptop_lg_gram_2022/laptop_lg_gram_2022_05.png"
    ],
    specs: {
      brand: "LG",
      cpu: "Intel Core i5-1240P",
      ram: "16GB LPDDR5",
      storage: "256GB SSD",
      screen: "17 inch"
    },
    shortDesc: "Laptop màn hình 17 inch khổng lồ nhưng trọng lượng siêu nhẹ chỉ 1.35kg, đạt chuẩn quân sự.",
    description: `
      <h3>Màn hình 17 inch rộng lớn, trọng lượng không tưởng</h3>
      <p>LG Gram 2022 17ZD90Q là một kỳ quan kỹ thuật khi gói gọn một chiếc màn hình 17 inch tỷ lệ 16:10 (WQXGA 2560x1600) vào trong một bộ khung chỉ nặng vỏn vẹn 1.35 kg.  Được chế tác từ hợp kim Magie - Nano Carbon thường dùng trong chế tạo máy bay, thiết bị cực kỳ nhẹ nhưng vẫn vượt qua 7 bài kiểm tra độ bền quân sự Mỹ MIL-STD-810G.</p>
      
      <h3>Hiệu suất ổn định với Intel Core i5 thế hệ 12</h3>
      <p>Máy trang bị chip Intel Core i5-1240P kết hợp RAM 16GB LPDDR5 tốc độ cao, xử lý mượt mà các file tính toán dữ liệu lớn hay các bản vẽ đồ họa 2D. Viên pin 80Wh khổng lồ cung cấp thời lượng sử dụng lên đến 15 giờ liên tục, giúp bạn tự tin làm việc cả ngày mà không cần mang theo củ sạc.</p>
    `,
    cardSpecs: [
      { label: "Màn hình", value: "17 inch WQXGA (2560x1600)" },
      { label: "Trọng lượng", value: "Siêu nhẹ 1.35 kg" },
      { label: "Pin", value: "80Wh (Lên tới 15 giờ)" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1240P (12 Nhân / 16 Luồng, Up to 4.4GHz, 12MB Cache)" },
      { label: "RAM", value: "16GB (2x8GB) LPDDR5 5200MHz (Onboard)" },
      { label: "Ổ cứng", value: "256GB PCIe NVMe M.2 SSD" },
      { label: "Màn hình", value: "17.0 inch WQXGA (2560x1600), IPS, DCI-P3 99%, Chống chói" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Độ bền", value: "Hợp kim Magie, Chuẩn quân sự MIL-STD-810G" },
      { label: "Trọng lượng", value: "1.35 kg" },
      { label: "Hệ điều hành", value: "FreeDOS / Lắp đặt Windows 11" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P037",
    slug: "laptop-lg-gram-2023",
    name: "Laptop LG Gram 2023 17ZD90R G.AX73A5",
    category: "laptop",
    price: 42990000,
    salePrice: 38990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lg_gram_2023/laptop_lg_gram_2023_17zd90r.png",
      "/product_image/laptops/laptop_lg_gram_2023/laptop_lg_gram_2023_01.png",
      "/product_image/laptops/laptop_lg_gram_2023/laptop_lg_gram_2023_02.png",
      "/product_image/laptops/laptop_lg_gram_2023/laptop_lg_gram_2023_03.png",
      "/product_image/laptops/laptop_lg_gram_2023/laptop_lg_gram_2023_04.png",
      "/product_image/laptops/laptop_lg_gram_2023/laptop_lg_gram_2023_05.png"
    ],
    specs: {
      brand: "LG",
      cpu: "Intel Core i7-1360P",
      ram: "16GB LPDDR5",
      storage: "256GB SSD",
      screen: "17 inch"
    },
    shortDesc: "Thế hệ LG Gram 17 inch nâng cấp vi xử lý i7 Gen 13 và công nghệ Dolby Atmos.",
    description: `
      <h3>Tối ưu năng suất với màn hình 17 inch</h3>
      <p>Kế thừa ngôi vương laptop siêu nhẹ màn hình lớn, LG Gram 17 inch (2023) sử dụng tấm nền chống chói Anti-Glare giúp hiển thị sắc nét ngay cả dưới ánh sáng mạnh ngoài trời. Tỷ lệ màn hình 16:10 tối ưu hóa không gian làm việc theo chiều dọc, rất phù hợp cho lập trình viên và kế toán viên.</p>
      
      <h3>Bước tiến mạnh mẽ với Intel Core i7 Gen 13</h3>
      <p>Nâng cấp lên vi xử lý Intel Core i7-1360P mạnh mẽ và RAM LPDDR5 bus 6000MHz siêu nhanh, máy đáp ứng trơn tru khối lượng công việc khổng lồ. Kết hợp cùng âm thanh vòm Dolby Atmos đa chiều, chiếc laptop không chỉ là công cụ làm việc mà còn là cỗ máy giải trí tuyệt vời sau những giờ căng thẳng.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i7-1360P" },
      { label: "Màn hình", value: "17 inch WQXGA (DCI-P3 99%)" },
      { label: "Trọng lượng", value: "1.35 kg" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i7-1360P (12 Nhân / 16 Luồng, Up to 5.0GHz, 18MB Cache)" },
      { label: "RAM", value: "16GB LPDDR5 6000MHz (Onboard)" },
      { label: "Ổ cứng", value: "256GB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "17.0 inch WQXGA (2560x1600), IPS, DCI-P3 99%, 350 nits" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Bảo mật", value: "Nhận diện khuôn mặt (FHD IR Webcam)" },
      { label: "Trọng lượng", value: "1.35 kg" },
      { label: "Hệ điều hành", value: "FreeDOS" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P038",
    slug: "laptop-lg-gram-2024",
    name: "Laptop LG Gram 2024 14T90S-G.AH55A5",
    category: "laptop",
    price: 34590000,
    salePrice: 32990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lg_gram_2024/laptop_lg_gram_2024_14t90s_g_ah55a5.jpg",
      "/product_image/laptops/laptop_lg_gram_2024/laptop_lg_gram_2024_01.jpg",
      "/product_image/laptops/laptop_lg_gram_2024/laptop_lg_gram_2024_02.jpg",
      "/product_image/laptops/laptop_lg_gram_2024/laptop_lg_gram_2024_03.jpg",
      "/product_image/laptops/laptop_lg_gram_2024/laptop_lg_gram_2024_04.jpg"
    ],
    specs: {
      brand: "LG",
      cpu: "Intel Core Ultra 5 125H",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "LG Gram 2024 tích hợp AI, màn hình 14 inch cực kỳ cơ động với trọng lượng chỉ 1.12kg.",
    description: `
      <h3>Sức mạnh AI từ Intel Core Ultra</h3>
      <p>Thế hệ LG Gram 2024 là sự chuyển mình mạnh mẽ với vi xử lý Intel Core Ultra 5 125H. Máy được tích hợp chip NPU chuyên biệt cho phép xử lý các tác vụ AI như làm mờ phông nền, khử ồn giọng nói hay tạo nội dung tự động thông qua Copilot một cách cực kỳ trơn tru và ít tốn pin.</p>
      
      <h3>Cơ động, bền bỉ và ứng dụng LG Link</h3>
      <p>Giữ nguyên DNA siêu nhẹ (chỉ 1.12kg) nhưng cực kỳ cứng cáp, LG Gram 14 inch dễ dàng mang theo mọi nơi. Đặc biệt, máy tích hợp sẵn phần mềm LG Link, cho phép bạn kết nối liền mạch với các thiết bị Android và iOS để truyền file, chia sẻ màn hình chỉ bằng vài thao tác kéo thả vô cùng tiện dụng.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 125H (AI)" },
      { label: "Trọng lượng", value: "Siêu nhẹ 1.12 kg" },
      { label: "Tính năng", value: "LG Link chia sẻ đa nền tảng" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 5 125H (14 Nhân / 18 Luồng, Up to 4.5GHz, AI NPU)" },
      { label: "RAM", value: "16GB LPDDR5x 5200MHz (Onboard)" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe M.2 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200), IPS, DCI-P3 99%, Anti-Glare" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Trọng lượng", value: "1.12 kg" },
      { label: "Chất liệu", value: "Hợp kim Magie (Chuẩn MIL-STD-810H)" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P039",
    slug: "laptop-lg-gram-book",
    name: "Laptop LG Gram Book 15U50T-G.AV56A5",
    category: "laptop",
    price: 14990000,
    salePrice: 14990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lg_gram_book/laptop_lg_gram_book_15u50t_gav56a5.png",
      "/product_image/laptops/laptop_lg_gram_book/laptop_lg_gram_book_01.png",
      "/product_image/laptops/laptop_lg_gram_book/laptop_lg_gram_book_02.png",
      "/product_image/laptops/laptop_lg_gram_book/laptop_lg_gram_book_03.png",
      "/product_image/laptops/laptop_lg_gram_book/laptop_lg_gram_book_04.png"
    ],
    specs: {
      brand: "LG",
      cpu: "Intel Core i5-1334U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      screen: "15.6 inch"
    },
    shortDesc: "Dòng LG Ultra PC tiêu chuẩn (Gram Book), thiết kế sang trọng, giá thành cực dễ tiếp cận.",
    description: `
      <h3>Lựa chọn kinh tế từ thương hiệu cao cấp</h3>
      <p>LG Gram Book (hay LG Ultra PC) là một món hời cho các bạn sinh viên và dân văn phòng mong muốn trải nghiệm chất lượng hoàn thiện của LG với mức giá bình dân. Máy có vỏ ngoài màu trắng tinh khôi, viền màn hình siêu mỏng và bàn phím Full-size đáp ứng xuất sắc nhu cầu làm việc và học tập.</p>
      
      <h3>Hiệu suất làm việc ổn định</h3>
      <p>Với vi xử lý Intel Core i5-1334U (Thế hệ 13) và bộ nhớ RAM 16GB, máy xử lý mượt mà các tác vụ văn phòng, mở hàng chục tab trình duyệt web cùng lúc mà không bị treo. Trọng lượng khoảng 1.6kg vẫn đảm bảo tính di động cao cho người dùng.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5-1334U" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Màn hình", value: "15.6 inch FHD IPS" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1334U (10 Nhân / 12 Luồng, Up to 4.6GHz)" },
      { label: "RAM", value: "16GB (2x8GB) DDR4 3200MHz" },
      { label: "Ổ cứng", value: "512GB M.2 NVMe PCIe 4.0 SSD" },
      { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, Chống chói" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Cổng kết nối", value: "Type-C, USB-A, HDMI, MicroSD, RJ45" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.6 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "P040",
    slug: "laptop-lg-gram-style",
    name: "Laptop LG Gram Style 16Z90RS GAH54A5",
    category: "laptop",
    price: 43990000,
    salePrice: 39490000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_lg_gram_style/laptop_lg_gram_style_16z90rs.png",
      "/product_image/laptops/laptop_lg_gram_style/laptop_lg_gram_style_01.jpg",
      "/product_image/laptops/laptop_lg_gram_style/laptop_lg_gram_style_02.jpg",
      "/product_image/laptops/laptop_lg_gram_style/laptop_lg_gram_style_03.jpg",
      "/product_image/laptops/laptop_lg_gram_style/laptop_lg_gram_style_04.jpg",
      "/product_image/laptops/laptop_lg_gram_style/laptop_lg_gram_style_05.jpg",
      "/product_image/laptops/laptop_lg_gram_style/laptop_lg_gram_style_06.jpg"
    ],
    specs: {
      brand: "LG",
      cpu: "Intel Core i5-1340P",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      screen: "16 inch"
    },
    shortDesc: "Đỉnh cao thời trang công nghệ với vỏ kính cực quang đổi màu, màn hình OLED rực rỡ.",
    description: `
      <h3>Vẻ đẹp lộng lẫy từ vỏ kính cực quang</h3>
      <p>LG Gram Style là một tuyệt tác nghệ thuật thực sự. Lớp vỏ máy và phần chiếu nghỉ tay được làm từ kính cường lực đặc biệt, có khả năng đổi màu óng ánh (Iridescent) tùy theo góc nhìn và ánh sáng xung quanh.  Touchpad tàng hình (Haptic Touchpad) sẽ tự động sáng lên dải đèn LED mờ ảo khi bạn chạm ngón tay vào, tạo cảm giác vô cùng ma thuật và cao cấp.</p>
      
      <h3>Trải nghiệm thị giác OLED 120Hz</h3>
      <p>Phiên bản Style được trang bị màn hình OLED 16 inch cực đẹp với độ phân giải WQXGA+ (3200x2000) sắc nét tuyệt đối. Tần số quét 120Hz và thời gian phản hồi 0.2ms kết hợp dải màu 100% DCI-P3 khiến mọi khung hình điện ảnh và thao tác lướt web trở nên mượt mà, sống động không ngờ.</p>
    `,
    cardSpecs: [
      { label: "Thiết kế", value: "Kính cực quang (Đổi màu)" },
      { label: "Màn hình", value: "16 inch 3.2K OLED (120Hz)" },
      { label: "Touchpad", value: "Haptic tàng hình có LED" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1340P (12 Nhân / 16 Luồng, Up to 4.6GHz, 12MB Cache)" },
      { label: "RAM", value: "16GB LPDDR5 6000MHz (Onboard)" },
      { label: "Ổ cứng", value: "512GB PCIe NVMe M.2 SSD" },
      { label: "Màn hình", value: "16.0 inch WQXGA+ (3200x2000), OLED, 120Hz, 100% DCI-P3" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Touchpad", value: "Cảm ứng lực Haptic tàng hình (Invisible Touchpad)" },
      { label: "Trọng lượng", value: "1.25 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  //========================MSI==========================
  {
    id: "P041",
    slug: "laptop-msi-modern-14",
    name: "Laptop MSI Modern 14 F13MG 466VN",
    category: "laptop",
    price: 14990000,
    salePrice: 14190000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_msi_modern_14/laptop_msi_modern_14_f13mg_466vn.png",
      "/product_image/laptops/laptop_msi_modern_14/laptop_msi_modern_14_01.png",
      "/product_image/laptops/laptop_msi_modern_14/laptop_msi_modern_14_02.png",
      "/product_image/laptops/laptop_msi_modern_14/laptop_msi_modern_14_03.png",
      "/product_image/laptops/laptop_msi_modern_14/laptop_msi_modern_14_04.png",
      "/product_image/laptops/laptop_msi_modern_14/laptop_msi_modern_14_05.png"
    ],
    specs: {
      brand: "MSI",
      cpu: "Intel Core i5-1334U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Laptop MSI siêu mỏng nhẹ dành cho học tập và văn phòng, thiết kế màu đen tuyền cá tính.",
    description: `
      <h3>Nhỏ gọn và năng động</h3>
      <p>MSI Modern 14 F13MG sở hữu thiết kế siêu mỏng 19.35mm và trọng lượng nhẹ chỉ 1.4kg. Khung máy nhôm cắt viền sắc sảo màu Classic Black mang lại vẻ đẹp năng động, tinh tế, cực kỳ phù hợp cho phong cách sống di động của sinh viên và nhân viên văn phòng trẻ tuổi.</p>
      
      <h3>Hiệu suất ổn định với Intel Core i5</h3>
      <p>Được trang bị bộ vi xử lý Intel Core i5 thế hệ thứ 13 và dung lượng RAM 16GB được gắn sẵn, máy vận hành trơn tru mọi tác vụ thường ngày như lướt web, làm slide thuyết trình hay thiết kế hình ảnh 2D cơ bản. Bàn phím có hành trình sâu 1.5mm kết hợp đèn nền trắng giúp gõ phím dễ dàng vào ban đêm.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core i5-1334U" },
      { label: "RAM / ROM", value: "16GB RAM / 512GB SSD" },
      { label: "Trọng lượng", value: "Siêu nhẹ 1.4 kg" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core i5-1334U (10 Nhân / 12 Luồng, Up to 4.6GHz)" },
      { label: "RAM", value: "16GB (2x8GB) DDR4 3200MHz" },
      { label: "Ổ cứng", value: "512GB NVMe PCIe Gen4x4 SSD" },
      { label: "Màn hình", value: "14.0 inch FHD (1920x1080), IPS-Level" },
      { label: "Card màn hình", value: "Intel Iris Xe Graphics" },
      { label: "Bàn phím", value: "White Backlight Keyboard (Đèn nền trắng)" },
      { label: "Trọng lượng", value: "1.4 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P042",
    slug: "laptop-msi-prestige-13",
    name: "Laptop MSI Prestige 13 AI Evo A2VMG 040VN",
    category: "laptop",
    price: 33990000,
    salePrice: 29990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_msi_prestige_13/laptop_msi_prestige_13_ai_evo_a2vmg_040vn.png",
      "/product_image/laptops/laptop_msi_prestige_13/laptop_msi_prestige_13_01.png",
      "/product_image/laptops/laptop_msi_prestige_13/laptop_msi_prestige_13_02.png",
      "/product_image/laptops/laptop_msi_prestige_13/laptop_msi_prestige_13_03.png",
      "/product_image/laptops/laptop_msi_prestige_13/laptop_msi_prestige_13_04.png"
    ],
    specs: {
      brand: "MSI",
      cpu: "Intel Core Ultra 7 155H",
      ram: "32GB LPDDR5",
      storage: "1TB SSD",
      screen: "13.3 inch"
    },
    shortDesc: "Tuyệt phẩm doanh nhân MSI trọng lượng chỉ 990 gram, màn hình OLED 2.8K và sức mạnh AI.",
    description: `
      <h3>Siêu mỏng nhẹ, vỏ hợp kim Magie</h3>
      <p>MSI Prestige 13 AI Evo tự hào là một trong những chiếc laptop nhẹ nhất thế giới khi chỉ nặng chưa tới 1 kg (990g). Vỏ máy được rèn đúc từ hợp kim Nhôm-Magiê theo quy trình Thixomolding, mang lại độ cứng cáp tuyệt vời đồng thời tản nhiệt hiệu quả, sẵn sàng tháp tùng các doanh nhân đi khắp mọi nơi.</p>
      
      <h3>Cỗ máy AI - Intel Core Ultra 7</h3>
      <p>Nhỏ bé nhưng mang sức mạnh đáng nể, máy trang bị chip Intel Core Ultra 7 155H tích hợp NPU AI thông minh và tận 32GB RAM tốc độ cao. Màn hình 13.3 inch 2.8K OLED mang đến chất lượng hình ảnh vượt trội, cùng viên pin dung lượng lớn cung cấp đủ năng lượng cho những ngày dài họp hành liên tục.</p>
    `,
    cardSpecs: [
      { label: "Trọng lượng", value: "Siêu nhẹ 990g (Magnesium Alloy)" },
      { label: "CPU", value: "Intel Core Ultra 7 155H (AI)" },
      { label: "Màn hình", value: "13.3 inch 2.8K OLED" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 155H (16 Nhân / 22 Luồng, Up to 4.8GHz, NPU AI)" },
      { label: "RAM", value: "32GB LPDDR5 6400MHz (Onboard)" },
      { label: "Ổ cứng", value: "1TB NVMe PCIe Gen4x4 SSD" },
      { label: "Màn hình", value: "13.3 inch 2.8K (2880x1800) OLED, 100% DCI-P3" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Bảo mật", value: "Vân tay, Camera IR 1080p, TPM 2.0" },
      { label: "Trọng lượng", value: "990 g" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P043",
    slug: "laptop-msi-prestige-14",
    name: "Laptop MSI Prestige 14 AI Evo C2VMG 020VN",
    category: "laptop",
    price: 39990000,
    salePrice: 34990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_msi_prestige_14/laptop_msi_prestige_14_ai_evo_c2vmg.png",
      "/product_image/laptops/laptop_msi_prestige_14/laptop_msi_prestige_14_01.png",
      "/product_image/laptops/laptop_msi_prestige_14/laptop_msi_prestige_14_02.png",
      "/product_image/laptops/laptop_msi_prestige_14/laptop_msi_prestige_14_03.png",
      "/product_image/laptops/laptop_msi_prestige_14/laptop_msi_prestige_14_04.png"
    ],
    specs: {
      brand: "MSI",
      cpu: "Intel Core Ultra 7 258V",
      ram: "32GB LPDDR5X",
      storage: "1TB SSD",
      screen: "14 inch"
    },
    shortDesc: "Thế hệ Prestige 14 inch mới nhất tích hợp chip Lunar Lake, hiệu suất pin đỉnh cao.",
    description: `
      <h3>Kiến trúc Lunar Lake đột phá năng lượng</h3>
      <p>MSI Prestige 14 AI Evo C2VMG đưa sự di động lên tầm cao mới với bộ vi xử lý Intel Core Ultra 7 258V (Lunar Lake). Sự thay đổi hoàn toàn về kiến trúc lõi và RAM 32GB tích hợp thẳng trên CPU giúp máy cải thiện đáng kể khả năng đồ họa và kéo dài thời lượng pin lên đến 20 giờ làm việc.</p>
      
      <h3>Tinh tế, chuyên nghiệp và An toàn</h3>
      <p>Máy có khung nhôm nguyên khối siêu bền. Hệ thống bảo mật Tobii Aware kết hợp Camera hồng ngoại (IR) sẽ tự động làm mờ màn hình khi bạn quay đi chỗ khác hoặc cảnh báo nếu có người nhìn trộm từ phía sau, đảm bảo an toàn tối đa cho dữ liệu doanh nghiệp nhạy cảm.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 258V (Lunar Lake)" },
      { label: "Bảo mật", value: "Tobii Aware & Nhận diện khuôn mặt" },
      { label: "RAM / ROM", value: "32GB LPDDR5X / 1TB SSD" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 7 258V (8 Nhân / 8 Luồng, Up to 4.8GHz, NPU AI)" },
      { label: "RAM", value: "32GB LPDDR5x 8533MHz (Tích hợp trên CPU)" },
      { label: "Ổ cứng", value: "1TB NVMe PCIe Gen4 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200) hoặc 2.8K OLED, 16:10" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Camera & Bảo mật", value: "IR FHD Webcam, Tobii Aware Privacy, Fingerprint" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.40 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P044",
    slug: "laptop-msi-prestige-16",
    name: "Laptop MSI Prestige 16 AI Mercedes-AMG B2VMG 088VN",
    category: "laptop",
    price: 49990000,
    salePrice: 47990000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_msi_prestige_16/laptop_msi_prestige_16ai_mercedes_amg.png",
      "/product_image/laptops/laptop_msi_prestige_16/laptop_msi_prestige_16_01.png",
      "/product_image/laptops/laptop_msi_prestige_16/laptop_msi_prestige_16_02.png",
      "/product_image/laptops/laptop_msi_prestige_16/laptop_msi_prestige_16_03.png",
      "/product_image/laptops/laptop_msi_prestige_16/laptop_msi_prestige_16_04.png"
    ],
    specs: {
      brand: "MSI",
      cpu: "Intel Core Ultra 9 288V",
      ram: "32GB LPDDR5X",
      storage: "2TB SSD",
      screen: "16 inch"
    },
    shortDesc: "Phiên bản giới hạn hợp tác cùng Mercedes-AMG, sức mạnh vô song từ vi xử lý Ultra 9.",
    description: `
      <h3>Kiệt tác kết hợp với Mercedes-AMG Motorsport</h3>
      <p>Dành riêng cho những tín đồ đam mê xe thể thao và sự hoàn hảo, MSI Prestige 16 AI được thiết kế hợp tác cùng thương hiệu xe hơi danh tiếng Mercedes-AMG.  Nắp máy làm bằng hợp kim Magie in logo của hai thương hiệu lừng danh, kèm theo bộ phụ kiện giới hạn (Chuột, lót chuột, túi chống sốc mang họa tiết sợi carbon đặc trưng) tạo nên đẳng cấp độc nhất vô nhị.</p>
      
      <h3>Động cơ Core Ultra 9 mạnh mẽ nhất</h3>
      <p>Bên trong lớp vỏ sang trọng là cỗ máy tốc độ với vi xử lý Intel Core Ultra 9 288V đầu bảng, 32GB RAM siêu tốc và ổ cứng 2TB khổng lồ. Màn hình 16 inch OLED 4K hiển thị màu sắc rực rỡ chân thực tuyệt đối, là trợ thủ hoàn hảo cho những dự án thiết kế, sáng tạo hình ảnh đẳng cấp quốc tế.</p>
    `,
    cardSpecs: [
      { label: "Phiên bản", value: "Mercedes-AMG Motorsport Limited" },
      { label: "CPU", value: "Intel Core Ultra 9 288V" },
      { label: "Màn hình", value: "16 inch 4K OLED" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Intel Core Ultra 9 288V (8 Nhân / 8 Luồng, Up to 5.1GHz)" },
      { label: "RAM", value: "32GB LPDDR5x 8533MHz (Tích hợp trên chip)" },
      { label: "Ổ cứng", value: "2TB NVMe PCIe Gen4 SSD" },
      { label: "Màn hình", value: "16.0 inch UHD+ 4K (3840x2400) OLED, 100% DCI-P3" },
      { label: "Card màn hình", value: "Intel Arc Graphics" },
      { label: "Phụ kiện đi kèm", value: "Box đặc biệt, Chuột, Lót chuột, USB và Túi AMG" },
      { label: "Trọng lượng", value: "1.50 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "P045",
    slug: "laptop-msi-venture-a14",
    name: "Laptop MSI Venture A14 AI A3HMG 004VN",
    category: "laptop",
    price: 25990000,
    salePrice: 23490000,
    stock: 10,
    images: [
      "/product_image/laptops/laptop_msi_venture_a14/laptop_msi_venture_a14_ai_a3hmg.png",
      "/product_image/laptops/laptop_msi_venture_a14/laptop_msi_venture_a14_01.png",
      "/product_image/laptops/laptop_msi_venture_a14/laptop_msi_venture_a14_02.png",
      "/product_image/laptops/laptop_msi_venture_a14/laptop_msi_venture_a14_03.png",
      "/product_image/laptops/laptop_msi_venture_a14/laptop_msi_venture_a14_04.png"
    ],
    specs: {
      brand: "MSI",
      cpu: "AMD Ryzen AI 5 340",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      screen: "14 inch"
    },
    shortDesc: "Dòng laptop di động mới từ MSI sử dụng vi xử lý AMD Ryzen AI 300 Series.",
    description: `
      <h3>Chào đón dòng sản phẩm Venture mới</h3>
      <p>Venture A14 là làn gió mới của MSI trong phân khúc laptop mỏng nhẹ đa dụng. Máy có vẻ ngoài tối giản và thanh lịch, đáp ứng hoàn hảo tiêu chí của một chiếc laptop dành cho giới sáng tạo, freelancer cần di chuyển liên tục giữa nhà và các quán cafe.</p>
      
      <h3>Hiệu suất AMD Ryzen AI mới nhất</h3>
      <p>Trái tim của máy là bộ vi xử lý AMD Ryzen AI 5 340 (thuộc thế hệ Ryzen AI 300 series cực mới). Khả năng xử lý trí tuệ nhân tạo (NPU) mạnh mẽ kết hợp cùng RAM DDR5-5600MHz giúp tăng tốc độ làm việc cho các phần mềm đòi hỏi thuật toán xử lý ảnh thông minh, song song đó quản lý cực tốt nhiệt độ và thời lượng pin.</p>
    `,
    cardSpecs: [
      { label: "CPU", value: "AMD Ryzen AI 5 340" },
      { label: "RAM / ROM", value: "16GB DDR5 / 512GB SSD" },
      { label: "Phân khúc", value: "Di động / Sáng tạo (Creator)" },
    ],
    detailSpecs: [
      { label: "CPU", value: "AMD Ryzen AI 5 340 (6 Nhân / 12 Luồng, Up to 4.8GHz, NPU tích hợp)" },
      { label: "RAM", value: "16GB (2x8GB) DDR5 5600MHz" },
      { label: "Ổ cứng", value: "512GB NVMe PCIe Gen4x4 SSD" },
      { label: "Màn hình", value: "14.0 inch WUXGA (1920x1200) 16:10, IPS-Level" },
      { label: "Card màn hình", value: "AMD Radeon Graphics" },
      { label: "Kết nối", value: "Wi-Fi 6E, Bluetooth 5.3, USB-C" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.4 kg" },
      { label: "Hệ điều hành", value: "Windows 11 Home" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  //============================MACBOOK========================
  {
    id: "P046",
    slug: "macbook-air-m2-2024",
    name: "Apple MacBook Air M2 2024",
    category: "laptop",
    price: 24990000,
    salePrice: 20190000,
    stock: 10,
    images: [
      "/product_image/laptops/macbook_ari_m2_2024/macbook_ari_m2_2024.webp",
      "/product_image/laptops/macbook_ari_m2_2024/macbook_ari_m2_2024_01.webp",
      "/product_image/laptops/macbook_ari_m2_2024/macbook_ari_m2_2024_02.webp",
      "/product_image/laptops/macbook_ari_m2_2024/macbook_ari_m2_2024_03.webp",
      "/product_image/laptops/macbook_ari_m2_2024/macbook_ari_m2_2024_04.webp",
      "/product_image/laptops/macbook_ari_m2_2024/macbook_ari_m2_2024_05.webp",
      "/product_image/laptops/macbook_ari_m2_2024/macbook_ari_m2_2024_black.webp",
      "/product_image/laptops/macbook_ari_m2_2024/macbook_ari_m2_2024_purple.webp"
    ],
    specs: {
      brand: "Apple",
      cpu: "Apple M2",
      ram: "16GB",
      storage: "256GB",
      screen: "13.6 inch"
    },
    shortDesc: "Sự lựa chọn quốc dân được nâng cấp mức RAM 16GB tiêu chuẩn, thiết kế mỏng nhẹ không quạt.",
    description: `
      <h3>Thiết kế không quạt (Fanless) tĩnh lặng</h3>
      <p>MacBook Air M2 mang thiết kế phẳng hiện đại, mỏng chỉ 1.13 cm và siêu nhẹ 1.24 kg. Không sử dụng quạt tản nhiệt nhưng nhờ khả năng tối ưu nhiệt lượng tuyệt vời của chip Apple Silicon, máy vẫn hoạt động vô cùng mát mẻ, hoàn toàn im lặng dù bạn đang chỉnh sửa hình ảnh hay xuất video.</p>
      
      <h3>RAM 16GB tiêu chuẩn - Sẵn sàng cho Apple Intelligence</h3>
      <p>Phiên bản 2024 của MacBook Air M2 đã được Apple nâng cấp mức RAM cơ bản lên thành 16GB (thay vì 8GB như trước đây). Đây là sự chuẩn bị hoàn hảo để máy chạy mượt mà các tính năng AI (Apple Intelligence) cực nặng trên hệ điều hành macOS Sequoia mới, đồng thời nâng cao khả năng đa nhiệm vượt bậc.</p>
    `,
    cardSpecs: [
      { label: "Vi xử lý", value: "Apple M2 (8 CPU / 8 GPU)" },
      { label: "Màn hình", value: "13.6 inch Liquid Retina" },
      { label: "RAM tiêu chuẩn mới", value: "16GB (Apple Intelligence Ready)" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Apple M2 (8 nhân CPU, 8 nhân GPU, 16 nhân Neural Engine)" },
      { label: "RAM", value: "16GB Unified Memory" },
      { label: "Ổ cứng", value: "256GB SSD" },
      { label: "Màn hình", value: "13.6 inch Liquid Retina (2560x1664), 500 nits, True Tone" },
      { label: "Cổng kết nối", value: "2x Thunderbolt / USB 4, 1x MagSafe 3, 1x 3.5mm" },
      { label: "Bảo mật", value: "Touch ID (Vân tay)" },
      { label: "Trọng lượng", value: "1.24 kg" },
      { label: "Hệ điều hành", value: "macOS" },
      { label: "Bảo hành", value: "12 Tháng Chính hãng Apple" },
    ],
  },

  {
    id: "P047",
    slug: "macbook-air-m4-2025",
    name: "MacBook Air M4 13 inch 2025",
    category: "laptop",
    price: 26990000,
    salePrice: 25190000,
    stock: 10,
    images: [
      "/product_image/laptops/macbook_ari_m4_2025/macbook_ari_m4_2025.webp",
      "/product_image/laptops/macbook_ari_m4_2025/macbook_ari_m4_2025_01.webp",
      "/product_image/laptops/macbook_ari_m4_2025/macbook_ari_m4_2025_02.webp",
      "/product_image/laptops/macbook_ari_m4_2025/macbook_ari_m4_2025_03.webp",
      "/product_image/laptops/macbook_ari_m4_2025/macbook_ari_m4_2025_04.webp",
      "/product_image/laptops/macbook_ari_m4_2025/macbook_ari_m4_2025_05.webp"
    ],
    specs: {
      brand: "Apple",
      cpu: "Apple M4",
      ram: "16GB",
      storage: "256GB",
      screen: "13.6 inch"
    },
    shortDesc: "Thế hệ MacBook Air mới nhất, trang bị chip M4 siêu mạnh và camera 12MP Center Stage.",
    description: `
      <h3>Sức mạnh đột phá từ chip M4</h3>
      <p>MacBook Air M4 là một bước tiến vượt bậc với vi xử lý sản xuất trên tiến trình 3nm thế hệ thứ 2. Chip M4 không chỉ cung cấp hiệu suất CPU mạnh hơn mà công cụ Neural Engine cũng được nâng cấp mạnh mẽ, biến nó thành cỗ máy tuyệt đỉnh để chạy hệ thống Apple Intelligence, trợ lý Siri mới và các tính năng sáng tạo hình ảnh.</p>
      
      <h3>Camera 12MP Center Stage</h3>
      <p>Một nâng cấp vô cùng đáng giá trên phiên bản 2025 là camera trước đã được nâng cấp lên độ phân giải 12MP hỗ trợ tính năng Center Stage (Sân khấu trung tâm) và Desk View (Góc nhìn mặt bàn). Camera sẽ tự động theo dõi và giữ bạn ở giữa khung hình ngay cả khi bạn di chuyển trong các cuộc gọi FaceTime.</p>
    `,
    cardSpecs: [
      { label: "Vi xử lý", value: "Apple M4 thế hệ mới" },
      { label: "RAM / ROM", value: "16GB RAM / 256GB SSD" },
      { label: "Camera", value: "12MP Center Stage" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Apple M4 (10 nhân CPU, 10 nhân GPU)" },
      { label: "RAM", value: "16GB Unified Memory" },
      { label: "Ổ cứng", value: "256GB SSD" },
      { label: "Màn hình", value: "13.6 inch Liquid Retina, độ sáng nâng cấp" },
      { label: "Camera", value: "12MP Center Stage" },
      { label: "Cổng kết nối", value: "2x Thunderbolt, 1x MagSafe 3, 1x 3.5mm" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.24 kg" },
      { label: "Hệ điều hành", value: "macOS Sequoia (hoặc mới hơn)" },
      { label: "Bảo hành", value: "12 Tháng Chính hãng Apple" },
    ],
  },

  {
    id: "P048",
    slug: "macbook-neo",
    name: "Apple MacBook Neo",
    category: "laptop",
    price: 16490000,
    salePrice: 16490000,
    stock: 10,
    images: [
      "/product_image/laptops/macbook_neo/macbook_neo_silver.webp",
      "/product_image/laptops/macbook_neo/macbook_neo_01.webp",
      "/product_image/laptops/macbook_neo/macbook_neo_02.webp",
      "/product_image/laptops/macbook_neo/macbook_neo_03.webp",
      "/product_image/laptops/macbook_neo/macbook_neo_04.webp",
      "/product_image/laptops/macbook_neo/macbook_neo_blue_indigo.webp",
      "/product_image/laptops/macbook_neo/macbook_neo_pink.webp",
      "/product_image/laptops/macbook_neo/macbook_neo_yellow.webp"
    ],
    specs: {
      brand: "Apple",
      cpu: "Apple A18 Pro",
      ram: "8GB",
      storage: "256GB",
      screen: "13 inch"
    },
    shortDesc: "Dòng MacBook hoàn toàn mới hướng tới giới học sinh - sinh viên, vỏ nhựa nhiều màu sắc bắt mắt.",
    description: `
      <h3>Tái định nghĩa laptop phổ thông</h3>
      <p>Apple MacBook Neo là dòng sản phẩm hoàn toàn mới được sinh ra để trở thành thiết bị học tập hoàn hảo nhất.  Rời xa vỏ nhôm quen thuộc, máy sử dụng vật liệu nhựa Polycarbonate tái chế siêu bền với các tông màu rực rỡ như Xanh dương, Hồng, Vàng... mang lại sự trẻ trung, cá tính và một mức giá vô cùng dễ tiếp cận.</p>
      
      <h3>Hiệu suất ấn tượng từ A18 Pro</h3>
      <p>Được trang bị con chip Apple A18 Pro (mang từ dòng iPhone Pro lên laptop), MacBook Neo cung cấp trải nghiệm lướt web, học online, làm bài tập cực kỳ mượt mà. Thời lượng pin cực khủng giúp thiết bị có thể trụ được qua nhiều ngày học liên tiếp mà không cần mang theo cục sạc.</p>
    `,
    cardSpecs: [
      { label: "Vi xử lý", value: "Apple A18 Pro" },
      { label: "Chất liệu", value: "Nhựa Polycarbonate tái chế" },
      { label: "Phân khúc", value: "Học sinh / Sinh viên" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Apple A18 Pro (Dòng chip di động tùy biến)" },
      { label: "RAM", value: "8GB Unified Memory" },
      { label: "Ổ cứng", value: "256GB SSD" },
      { label: "Màn hình", value: "13.0 inch Retina Display" },
      { label: "Màu sắc", value: "Đa màu sắc rực rỡ (Pastel)" },
      { label: "Kết nối", value: "2x USB Type-C, Jack 3.5mm" },
      { label: "Trọng lượng", value: "Siêu nhẹ dưới 1.1 kg" },
      { label: "Hệ điều hành", value: "macOS" },
      { label: "Bảo hành", value: "12 Tháng Chính hãng Apple" },
    ],
  },

  {
    id: "P049",
    slug: "macbook-pro-14-m5",
    name: "Apple MacBook Pro 14 M5",
    category: "laptop",
    price: 41990000,
    salePrice: 41490000,
    stock: 10,
    images: [
      "/product_image/laptops/macbook_pro_14_m5/macbook_pro_14_m5.webp",
      "/product_image/laptops/macbook_pro_14_m5/macbook_pro_14_m5_01.webp",
      "/product_image/laptops/macbook_pro_14_m5/macbook_pro_14_m5_02.webp",
      "/product_image/laptops/macbook_pro_14_m5/macbook_pro_14_m5_03.webp",
      "/product_image/laptops/macbook_pro_14_m5/macbook_pro_14_m5_04.webp",
      "/product_image/laptops/macbook_pro_14_m5/macbook_pro_14_m5_05.webp"
    ],
    specs: {
      brand: "Apple",
      cpu: "Apple M5",
      ram: "16GB",
      storage: "512GB",
      screen: "14.2 inch"
    },
    shortDesc: "Máy trạm di động tiên tiến với chip Apple M5, màn hình Liquid Retina XDR và Face ID.",
    description: `
      <h3>Sức mạnh vượt bậc từ Apple M5</h3>
      <p>MacBook Pro 14 inch tiến vào một kỷ nguyên hiệu suất mới với chip Apple M5. Được tối ưu hóa cho các công việc đồ họa chuyên nghiệp, lập trình phần mềm và xử lý AI nội bộ, con chip này mang lại sức mạnh ấn tượng mà vẫn giữ được độ mát mẻ và yên tĩnh tuyệt đối nhờ hệ thống tản nhiệt buồng hơi tiên tiến.</p>
      
      <h3>Cải tiến Face ID và Màn hình OLED/Mini-LED</h3>
      <p> Màn hình 14.2 inch Liquid Retina XDR với công nghệ ProMotion 120Hz mang đến độ tương phản hoàn hảo và màu sắc chuẩn xác nhất thế giới. Cụm tai thỏ (Notch) giờ đây đã được tích hợp công nghệ Face ID, giúp bạn mở khóa máy tính an toàn và tiện lợi ngay khi vừa mở nắp máy, thay thế hoàn toàn vân tay Touch ID trước đây.</p>
    `,
    cardSpecs: [
      { label: "Vi xử lý", value: "Apple M5 (Thế hệ mới)" },
      { label: "Màn hình", value: "14.2 inch Liquid Retina XDR" },
      { label: "Bảo mật", value: "Face ID (Nhận diện khuôn mặt)" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Apple M5 (Hiệu năng xử lý và AI vượt trội)" },
      { label: "RAM", value: "16GB Unified Memory" },
      { label: "Ổ cứng", value: "512GB SSD siêu tốc" },
      { label: "Màn hình", value: "14.2 inch Liquid Retina XDR, ProMotion 120Hz, Độ sáng Peak 1600 nits" },
      { label: "Bảo mật", value: "Cụm Face ID tích hợp trong Notch" },
      { label: "Cổng kết nối", value: "3x Thunderbolt 5, HDMI, SDXC Card, MagSafe 3" },
      { label: "Trọng lượng", value: "Xấp xỉ 1.6 kg" },
      { label: "Hệ điều hành", value: "macOS" },
      { label: "Bảo hành", value: "12 Tháng Chính hãng Apple" },
    ],
  },

  {
    id: "P050",
    slug: "macbook-pro-16-m4-max",
    name: "Apple MacBook Pro 16 M4 Max 16CPU",
    category: "laptop",
    price: 103740000,
    salePrice: 98990000,
    stock: 10,
    images: [
      "/product_image/laptops/macbook_pro_16_m4_max/macbook_pro_16_m4_max_16cpu.webp",
      "/product_image/laptops/macbook_pro_16_m4_max/macbook_pro_16_m4_max_01.webp",
      "/product_image/laptops/macbook_pro_16_m4_max/macbook_pro_16_m4_max_02.webp",
      "/product_image/laptops/macbook_pro_16_m4_max/macbook_pro_16_m4_max_03.webp",
      "/product_image/laptops/macbook_pro_16_m4_max/macbook_pro_16_m4_max_04.webp"
    ],
    specs: {
      brand: "Apple",
      cpu: "Apple M4 Max",
      ram: "48GB",
      storage: "1TB",
      screen: "16.2 inch"
    },
    shortDesc: "Quái vật render đích thực, trang bị chip M4 Max 16 lõi CPU và băng thông bộ nhớ khổng lồ.",
    description: `
      <h3>Hiệu suất không có đối thủ</h3>
      <p>Dành riêng cho các Studio làm phim Hollywood hay các chuyên gia dựng hình 3D, MacBook Pro 16 inch mang trong mình sức mạnh vô hạn của chip Apple M4 Max. Với 16 nhân CPU và lên đến 40 nhân GPU, kết hợp 48GB RAM băng thông siêu lớn, máy có thể render video 8K ProRes đa luồng hoặc thao tác các mô hình hoạt họa phức tạp trong thời gian thực mà không hề xuất hiện độ trễ.</p>
      
      <h3>Không gian sáng tạo tối thượng</h3>
      <p>Trải nghiệm hình ảnh tuyệt mỹ trên màn hình 16.2 inch Liquid Retina XDR lớn nhất của hãng. Màn hình có lớp phủ chống chói (Nano-texture) cao cấp giúp giữ nguyên độ chuẩn màu ngay cả dưới nguồn sáng gắt. Cùng với kết nối Thunderbolt 5 mới nhất mang lại tốc độ truyền dữ liệu gấp đôi, đây là cỗ máy Workstation di động hoàn hảo nhất mà Apple từng chế tạo.</p>
    `,
    cardSpecs: [
      { label: "Vi xử lý", value: "Apple M4 Max (16 CPU / 40 GPU)" },
      { label: "RAM / ROM", value: "48GB Unified / 1TB SSD" },
      { label: "Màn hình", value: "16.2 inch Nano-texture XDR" },
    ],
    detailSpecs: [
      { label: "CPU", value: "Apple M4 Max (16 nhân CPU, 40 nhân GPU, 16 nhân Neural Engine)" },
      { label: "RAM", value: "48GB Unified Memory (Băng thông cực cao)" },
      { label: "Ổ cứng", value: "1TB SSD" },
      { label: "Màn hình", value: "16.2 inch Liquid Retina XDR, Phủ Nano-texture chống chói, ProMotion 120Hz" },
      { label: "Cổng kết nối", value: "3x Thunderbolt 5, HDMI (8K), Thẻ SDXC, MagSafe 3" },
      { label: "Pin", value: "Lên đến 24 giờ phát video liên tục" },
      { label: "Trọng lượng", value: "Xấp xỉ 2.15 kg" },
      { label: "Hệ điều hành", value: "macOS Sequoia" },
      { label: "Bảo hành", value: "12 Tháng Chính hãng Apple" },
    ],
  },

];
export function getProductBySlug(slug: string) {
  return laptops.find((p) => p.slug === slug);
}