import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Product } from "@/types/product";

// export const accessories = async (): Promise<Product[]> => {
//   const CACHE_KEY = "accessory_products_session";
//   const isBrowser = typeof window !== "undefined";

//   // 1. Kiểm tra Cache (Chỉ chạy trên Client)
//   if (isBrowser) {
//     const cachedData = sessionStorage.getItem(CACHE_KEY);
//     if (cachedData) {
//       console.log("💻 Lấy Laptop từ Session Storage");
//       return JSON.parse(cachedData) as Product[];
//     }
//   }

//   // 2. Fetch Firebase (Chạy trên cả Server và Client)
//   try {
//     const q = query(
//       collection(db, "products"),
//       where("category", "==", "accessory")
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
//     console.error("Lỗi fetch accessories:", error);
//     return [];
//   }
// };

export const accessories: Product[] = [
  {
    id: "ACC001",
    slug: "cap-sac-belkin-type-c-60w-1m",
    name: "Cáp sạc Belkin Type C 60W 1m",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "cap-sac",
    price: 299000,
    salePrice: 249000,
    stock: 30,
    images: ["/product_image/phu_kien/cap_sac_belkin_typec_60w_1m.jpg"],
    shortDesc: "Cáp sạc Type C hỗ trợ công suất 60W, phù hợp sạc và truyền dữ liệu.",
    description: `
      <h3>Thiết kế bền bỉ, chiều dài tiêu chuẩn</h3>
      <p>Cáp sạc Belkin Type C to Type C mang thiết kế tối giản với độ hoàn thiện cao từ chất liệu nhựa dẻo chịu nhiệt tốt, hạn chế tình trạng đứt gãy gập ngầm. Chiều dài 1 mét lý tưởng cho việc sạc thiết bị trên bàn làm việc hoặc mang theo trong balo mà không lo vướng víu.</p>
      
      <h3>Công suất sạc 60W mạnh mẽ</h3>
      <p>Hỗ trợ chuẩn sạc Power Delivery (PD) với mức công suất lên đến 60W, sợi cáp này có thể sạc nhanh cho hầu hết các dòng smartphone, tablet và thậm chí là các dòng laptop siêu mỏng nhẹ sử dụng cổng Type C một cách an toàn và nhanh chóng.</p>
    `,
    brand: "Belkin",
    specs: {
      brand: "Belkin",
    },
    cardSpecs: [
      { label: "Công suất", value: "60W" },
      { label: "Kết nối", value: "Type-C to Type-C" },
      { label: "Chiều dài", value: "1 mét" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Cáp sạc / Truyền dữ liệu" },
      { label: "Đầu vào", value: "USB Type-C" },
      { label: "Đầu ra", value: "USB Type-C" },
      { label: "Công suất", value: "Tối đa 60W (3A / 20V)" },
      { label: "Chiều dài dây", value: "1m" },
      { label: "Chất liệu", value: "Nhựa PVC cao cấp" },
      { label: "Tương thích", value: "Smartphone, Tablet, Laptop Type-C" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "ACC002",
    slug: "hub-hdmi-c-tech-utd0015g",
    name: "Hub HDMI C-Tech UTD0015G",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "hub",
    price: 390000,
    salePrice: 320000,
    stock: 25,
    images: ["/product_image/phu_kien/hub_hdmi_dtech_dt_uh0015g.jpg"],
    shortDesc: "Hub chuyển đổi tiện lợi, hỗ trợ kết nối thiết bị ngoại vi nhanh chóng.",
    description: `
      <h3>Giải pháp xuất hình ảnh đơn giản</h3>
      <p>Hub C-Tech UTD0015G là giải pháp hoàn hảo để xuất hình ảnh từ các thiết bị mỏng nhẹ chỉ có cổng Type-C ra màn hình lớn, máy chiếu hay TV thông qua chuẩn kết nối HDMI với độ phân giải sắc nét.</p>
      
      <h3>Nhỏ gọn, cắm là chạy</h3>
      <p>Với thiết kế plug-and-play, bạn không cần cài đặt thêm driver phức tạp. Lớp vỏ hợp kim nhôm tản nhiệt tốt giúp thiết bị hoạt động ổn định trong thời gian dài mà không bị quá nhiệt, bảo vệ tuổi thọ linh kiện.</p>
    `,
    brand: "C-Tech",
    specs: {
      brand: "C-Tech",
    },
    cardSpecs: [
      { label: "Loại phụ kiện", value: "Hub chuyển đổi" },
      { label: "Đầu ra", value: "Cổng HDMI" },
      { label: "Chất liệu", value: "Hợp kim nhôm" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Cáp Hub chuyển đổi" },
      { label: "Đầu vào", value: "USB Type-C" },
      { label: "Đầu ra", value: "1x HDMI" },
      { label: "Chất liệu", value: "Hợp kim nhôm" },
      { label: "Tương thích", value: "MacBook, Laptop Windows, Tablet hỗ trợ DP Alt Mode" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "ACC003",
    slug: "hub-hdmi-hdtv",
    name: "Hub HDMI HDTV",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "hub",
    price: 250000,
    salePrice: 199000,
    stock: 20,
    images: ["/product_image/phu_kien/hub_hdmi_hdtv.jpg"],
    shortDesc: "Bộ chuyển đổi HDMI hỗ trợ kết nối hình ảnh ổn định cho nhiều thiết bị.",
    description: `
      <h3>Truyền tải hình ảnh rõ nét</h3>
      <p>Thiết bị chuyển đổi HDTV giúp bạn dễ dàng kết nối và phản chiếu màn hình từ điện thoại, máy tính bảng lên các thiết bị phát hình ảnh lớn như TV hay máy chiếu, đem lại trải nghiệm giải trí sống động hơn.</p>
      
      <h3>Đường truyền ổn định</h3>
      <p>Được thiết kế tối ưu hóa băng thông, Hub HDMI HDTV đảm bảo khả năng truyền tải tín hiệu video không bị giật lag, đồng bộ hóa cả âm thanh và hình ảnh một cách trơn tru nhất.</p>
    `,
    brand: "Generic",
    specs: {
      brand: "Generic",
    },
    cardSpecs: [
      { label: "Loại phụ kiện", value: "Cáp xuất hình" },
      { label: "Kết nối", value: "Đa thiết bị lên HDTV" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Bộ chuyển đổi HDMI" },
      { label: "Đầu ra", value: "HDMI" },
      { label: "Chất liệu", value: "Nhựa ABS / Cáp dù" },
      { label: "Tương thích", value: "Các thiết bị hỗ trợ xuất hình HDMI" },
      { label: "Bảo hành", value: "6 Tháng" },
    ],
  },

  {
    id: "ACC004",
    slug: "hub-ugreen-usb-2-0-to-lan-rj45",
    name: "Hub Ugreen USB 2.0 to LAN RJ45",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "hub",
    price: 350000,
    salePrice: 299000,
    stock: 28,
    images: ["/product_image/phu_kien/hub_ugreen_usb_2.0_to_lan_rj45.jpg"],
    shortDesc: "Bộ chuyển đổi USB sang LAN giúp kết nối mạng dây ổn định hơn.",
    description: `
      <h3>Giải pháp mạng có dây ổn định</h3>
      <p>Trong môi trường sóng WiFi thiếu ổn định, Ugreen USB 2.0 to LAN RJ45 là cứu cánh tuyệt vời cho chiếc máy tính không được trang bị cổng mạng dây. Thiết bị cung cấp kết nối mạng LAN với tốc độ 10/100Mbps cực kỳ ổn định.</p>
      
      <h3>Tương thích rộng rãi</h3>
      <p>Chỉ cần cắm vào cổng USB truyền thống trên máy tính, PC hay cả một số dòng Android Box, thiết bị sẽ tự động nhận diện (với các hệ điều hành mới) để truy cập mạng internet ngay lập tức mà không gặp bất kỳ khó khăn nào.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Đầu vào", value: "USB 2.0" },
      { label: "Đầu ra", value: "Cổng LAN RJ45" },
      { label: "Tốc độ", value: "10/100Mbps" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Card mạng gắn ngoài (USB to LAN)" },
      { label: "Đầu vào", value: "USB 2.0 Type-A" },
      { label: "Đầu ra", value: "1x LAN RJ45" },
      { label: "Chất liệu", value: "Nhựa ABS cao cấp" },
      { label: "Tương thích", value: "Windows, macOS, Linux" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC005",
    slug: "hub-ugreen-usb-to-usb-50533",
    name: "Hub Ugreen USB to USB 50533",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "hub",
    price: 220000,
    salePrice: 179000,
    stock: 24,
    images: ["/product_image/phu_kien/hub_ugreen_usba_to_usbc_50533.gif"],
    shortDesc: "Hub USB nhỏ gọn, hỗ trợ mở rộng cổng kết nối tiện lợi.",
    description: `
      <h3>Mở rộng cổng kết nối dễ dàng</h3>
      <p>Với xu hướng rút gọn cổng kết nối trên các laptop hiện đại, Hub Ugreen 50533 giúp bạn giải quyết triệt để vấn đề thiếu hụt cổng USB. Nó chia 1 cổng USB ban đầu thành 4 cổng USB 3.0, cho phép cắm cùng lúc chuột, bàn phím, USB lưu trữ và nhiều thiết bị khác.</p>
      
      <h3>Tốc độ truyền dữ liệu SuperSpeed</h3>
      <p>Sở hữu chuẩn kết nối USB 3.0, bộ hub mang đến tốc độ truyền tải dữ liệu siêu tốc lên đến 5Gbps, giúp bạn sao chép các tệp tin lớn, video HD hay hình ảnh nặng chỉ trong chớp mắt, tiết kiệm thời gian chờ đợi.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Đầu vào", value: "USB Type-A" },
      { label: "Đầu ra", value: "4x USB 3.0" },
      { label: "Tốc độ", value: "Lên đến 5Gbps" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Hub chia cổng USB" },
      { label: "Đầu vào", value: "1x USB 3.0" },
      { label: "Đầu ra", value: "4x USB 3.0" },
      { label: "Chiều dài dây", value: "15cm" },
      { label: "Chất liệu", value: "Nhựa ABS" },
      { label: "Tương thích", value: "Hỗ trợ chuẩn USB 3.0 / 2.0 / 1.1" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC006",
    slug: "hub-usb-c-ugreen-4-in-1-cm219",
    name: "Hub USB C Ugreen 4 in 1 CM219",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "hub",
    price: 590000,
    salePrice: 520000,
    stock: 22,
    images: ["/product_image/phu_kien/hub_usb_c_ugreen_4in1_cm219.jpg"],
    shortDesc: "Hub USB C 4 trong 1 hỗ trợ mở rộng kết nối cho laptop và thiết bị di động.",
    description: `
      <h3>Phụ kiện không thể thiếu cho MacBook / Ultrabook</h3>
      <p>Ugreen CM219 là chiếc Hub Type-C 4-in-1 cực kỳ nhỏ gọn được gia công bằng vỏ nhôm sang trọng. Sản phẩm cung cấp các cổng kết nối thiết yếu nhất bao gồm USB 3.0 để cắm thiết bị ngoại vi và cổng xuất hình ảnh sắc nét.</p>
      
      <h3>Hiệu suất ổn định, không nóng máy</h3>
      <p>Được trang bị chipset xử lý thông minh, hub hoạt động cực kỳ mượt mà, phân bổ băng thông hợp lý cho từng cổng. Chất liệu hợp kim nhôm đóng vai trò như một khối tản nhiệt tự nhiên, giúp hub luôn mát mẻ kể cả khi sử dụng tối đa công suất.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Cổng kết nối", value: "4 in 1" },
      { label: "Đầu vào", value: "USB Type-C" },
      { label: "Chất liệu", value: "Hợp kim nhôm" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Hub chuyển đổi Type-C đa năng" },
      { label: "Đầu vào", value: "USB Type-C" },
      { label: "Đầu ra", value: "USB 3.0 / Cổng hình ảnh tùy model" },
      { label: "Chất liệu", value: "Hợp kim nhôm nguyên khối" },
      { label: "Tương thích", value: "MacBook, iPad Pro, Laptop Windows có Type-C" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC007",
    slug: "hub-usb-c-ugreen-10-in-1-cm498",
    name: "Hub USB C Ugreen 10 in 1 CM498",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "hub",
    price: 1490000,
    salePrice: 1390000,
    stock: 15,
    images: ["/product_image/phu_kien/hub_usb_c_ugreen_10in1_cm498.jpg"],
    shortDesc: "Hub đa năng 10 trong 1, phù hợp cho nhu cầu làm việc và kết nối chuyên nghiệp.",
    description: `
      <h3>Trạm kết nối tất-cả-trong-một</h3>
      <p>Ugreen CM498 là một trạm kết nối di động đúng nghĩa với tận 10 cổng chức năng. Bạn sẽ có đầy đủ từ HDMI/VGA xuất hình kép, cổng mạng LAN RJ45 chuẩn Gigabit, khe đọc thẻ nhớ SD/TF, đến các cổng USB-A siêu tốc và cổng sạc ngược PD.</p>
      
      <h3>Hỗ trợ sạc Pass-through PD 100W</h3>
      <p>Không chỉ là hub chuyển đổi, CM498 còn hỗ trợ công nghệ sạc Power Delivery (PD) lên đến 100W. Bạn có thể vừa mở rộng cổng kết nối, vừa sạc nhanh cho chiếc laptop của mình thông qua cùng một cổng Type-C duy nhất mà không sợ bị sụt pin.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Cổng kết nối", value: "10 in 1" },
      { label: "Tính năng", value: "Sạc ngược PD 100W" },
      { label: "Đầu ra", value: "HDMI, LAN, USB, Card Reader..." },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Trạm kết nối Hub Type-C 10-in-1" },
      { label: "Đầu vào", value: "USB Type-C" },
      { label: "Đầu ra", value: "1x HDMI, 1x VGA, 1x LAN, 3x USB 3.0, SD/TF, 1x Type-C PD" },
      { label: "Công suất sạc hỗ trợ", value: "PD 100W" },
      { label: "Chất liệu", value: "Hợp kim nhôm Aluminum" },
      { label: "Tương thích", value: "Các thiết bị hỗ trợ Thunderbolt / USB-C DP Alt Mode" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC008",
    slug: "sac-100w-ugreen-cd226",
    name: "Sạc 100W Ugreen CD226",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "cu-sac",
    price: 990000,
    salePrice: 890000,
    stock: 18,
    images: ["/product_image/phu_kien/sac_100w_ugreen_cd226.jpg"],
    shortDesc: "Củ sạc công suất cao 100W, sạc mượt mà cho laptop, điện thoại và tablet.",
    description: `
      <h3>Sức mạnh 100W trong tầm tay</h3>
      <p>Ugreen CD226 sở hữu công suất sạc khổng lồ lên đến 100W, đủ sức cung cấp năng lượng cực nhanh cho những chiếc MacBook Pro 16 inch hoặc các dòng laptop Windows yêu cầu nguồn điện lớn. Sạc đầy thiết bị chỉ trong một thời gian ngắn.</p>
      
      <h3>Sạc 4 thiết bị cùng lúc</h3>
      <p>Được trang bị 3 cổng Type-C và 1 cổng USB-A, củ sạc này chia điện năng thông minh để bạn có thể sạc cùng lúc laptop, tablet, điện thoại và tai nghe. Chip thông minh tự động nhận diện thiết bị để đưa ra dòng điện phù hợp và an toàn nhất.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Công suất", value: "Tối đa 100W" },
      { label: "Cổng sạc", value: "3x Type-C, 1x USB-A" },
      { label: "Công nghệ", value: "Sạc nhanh thông minh" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Củ sạc nhiều cổng" },
      { label: "Đầu ra", value: "3x USB-C, 1x USB-A" },
      { label: "Công suất", value: "100W" },
      { label: "Chất liệu", value: "Nhựa PC chống cháy" },
      { label: "Tương thích", value: "Laptop, MacBook, Tablet, Smartphone" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC009",
    slug: "sac-gan-nexode-65w-ugreen-cd244",
    name: "Sạc GaN Nexode 65W Ugreen CD244",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "cu-sac",
    price: 790000,
    salePrice: 690000,
    stock: 20,
    images: ["/product_image/phu_kien/sac_gan_nexode_65w_ugreen_cd244.jpg"],
    shortDesc: "Củ sạc GaN 65W nhỏ gọn, sạc nhanh và tối ưu cho nhiều thiết bị.",
    description: `
      <h3>Công nghệ Nexode GaN thế hệ mới</h3>
      <p>Sử dụng vật liệu bán dẫn Gallium Nitride (GaN) tiên tiến, củ sạc Ugreen CD244 đạt được công suất 65W nhưng kích thước lại thu nhỏ đáng kể so với củ sạc truyền thống, giảm lượng nhiệt tỏa ra và nâng cao hiệu suất chuyển đổi điện năng.</p>
      
      <h3>Combo hoàn hảo cho dân du lịch</h3>
      <p>Với 2 cổng Type-C và 1 cổng Type-A, đây là phụ kiện lý tưởng nhất để bỏ vào balo khi đi công tác hay du lịch. Nó đủ công suất sạc nhanh cho một chiếc laptop siêu mỏng, đồng thời chia sẻ điện cho điện thoại đang cạn pin.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Công nghệ", value: "GaN Fast Charge" },
      { label: "Công suất", value: "65W" },
      { label: "Cổng sạc", value: "2x Type-C, 1x USB-A" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Củ sạc GaN" },
      { label: "Đầu ra", value: "2x USB-C, 1x USB-A" },
      { label: "Công suất", value: "65W" },
      { label: "Vật liệu lõi", value: "GaN (Gallium Nitride)" },
      { label: "Tương thích", value: "Đa thiết bị hỗ trợ sạc nhanh PD/QC" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC010",
    slug: "sac-gan-nexode-200w-ugreen-cd271",
    name: "Sạc GaN Nexode 200W Ugreen CD271",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "cu-sac",
    price: 2490000,
    salePrice: 2290000,
    stock: 10,
    images: ["/product_image/phu_kien/sac_gan_nexode_200w_ugreen_cd271.jpg"],
    shortDesc: "Trạm sạc GaN công suất lớn 200W, thay thế hoàn toàn ổ cắm truyền thống trên bàn làm việc.",
    description: `
      <h3>Quái vật năng lượng 200W</h3>
      <p>Ugreen Nexode CD271 là trạm sạc để bàn "khủng long" cung cấp tổng công suất lên tới 200W. Với sức mạnh này, bạn có thể sạc nhanh cùng lúc 2 chiếc MacBook Pro 16 inch hoặc 3 chiếc laptop khác mà vẫn đảm bảo được dòng điện ổn định.</p>
      
      <h3>Dọn dẹp bàn làm việc tối đa</h3>
      <p>Được trang bị 4 cổng Type-C và 2 cổng USB-A, trạm sạc này cho phép bạn loại bỏ hoàn toàn các củ sạc vướng víu khỏi ổ cắm điện tường. Các công nghệ an toàn bảo vệ quá nhiệt, quá áp và ngắn mạch luôn túc trực để giữ an toàn tuyệt đối cho toàn bộ thiết bị đắt tiền của bạn.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Công suất", value: "Cực đại 200W" },
      { label: "Số lượng cổng", value: "6 Cổng (4C + 2A)" },
      { label: "Tính năng", value: "Trạm sạc để bàn" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Trạm sạc GaN Desktop" },
      { label: "Đầu ra", value: "4x USB-C, 2x USB-A" },
      { label: "Công suất", value: "Tổng công suất 200W" },
      { label: "Đầu vào", value: "Dây nguồn xoay chiều AC" },
      { label: "Tương thích", value: "Tất cả các dòng Laptop, Mobile Devices, Console" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC011",
    slug: "sac-ugreen-30w-cd319",
    name: "Sạc Ugreen 30W CD319",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "cu-sac",
    price: 390000,
    salePrice: 329000,
    stock: 26,
    images: ["/product_image/phu_kien/sac_ugreen_30w_cd319.gif"],
    shortDesc: "Củ sạc 30W nhỏ gọn, sạc nhanh tối ưu cho các thế hệ iPhone, iPad mới.",
    description: `
      <h3>Thiết kế siêu gọn nhẹ</h3>
      <p>Ugreen CD319 mang trên mình thiết kế khối vuông vô cùng nhỏ gọn, có thể nằm lọt thỏm trong lòng bàn tay hoặc bỏ vào bất cứ túi xách, ngăn kéo nào mà không chiếm diện tích.</p>
      
      <h3>Sạc nhanh PD 30W chuẩn xác</h3>
      <p>Được trang bị duy nhất 1 cổng Type-C hỗ trợ chuẩn Power Delivery, củ sạc bơm ra công suất tối đa 30W. Đây là mức công suất lý tưởng, giúp đẩy tốc độ sạc nhanh tối đa cho các đời iPhone 13, 14, 15 Series và iPad mà không gây chai pin.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Công suất", value: "30W" },
      { label: "Đầu ra", value: "1x Type-C" },
      { label: "Thiết kế", value: "Siêu nhỏ gọn" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Củ sạc nhanh 1 cổng" },
      { label: "Đầu ra", value: "1x USB Type-C" },
      { label: "Công suất", value: "30W" },
      { label: "Chất liệu", value: "Nhựa chống cháy" },
      { label: "Tương thích", value: "Điện thoại, Tablet hỗ trợ chuẩn PD" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC012",
    slug: "sac-ugreen-robogan-mini-cd359",
    name: "Sạc Ugreen RoboGaN Mini CD359",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "cu-sac",
    price: 690000,
    salePrice: 620000,
    stock: 14,
    images: ["/product_image/phu_kien/sac_ugreen_robogan_mini_cd359.png"],
    shortDesc: "Củ sạc mini thiết kế robot độc đáo, tích hợp công nghệ GaN sạc nhanh an toàn.",
    description: `
      <h3>Thiết kế Robot sáng tạo, đáng yêu</h3>
      <p>Ugreen RoboGaN mang thiết kế đột phá với hình dáng một chú robot dễ thương. Chân của robot đóng vai trò là nắp đậy bảo vệ phích cắm điện, trong khi màn hình LED nhỏ trên mặt robot sẽ hiển thị biểu cảm tùy theo trạng thái đang sạc (nhanh, thường hay sạc đầy).</p>
      
      <h3>Công nghệ GaN mạnh mẽ</h3>
      <p>Bên trong lớp vỏ dễ thương là công nghệ vật liệu GaN tiên tiến. Dù kích thước rất "Mini", củ sạc vẫn cung cấp công suất sạc mạnh mẽ, đủ để sạc nhanh smartphone, máy chơi game cầm tay (như Nintendo Switch) mà mức tỏa nhiệt vẫn rất thấp.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Thiết kế", value: "Robot có màn hình LED" },
      { label: "Công nghệ", value: "GaN tiên tiến" },
      { label: "Cổng sạc", value: "Type-C sạc nhanh" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Củ sạc GaN trang trí" },
      { label: "Đầu ra", value: "USB Type-C" },
      { label: "Thiết kế đặc biệt", value: "Màn hình LED hiển thị trạng thái sạc" },
      { label: "Công nghệ", value: "GaN, Hệ thống kiểm soát nhiệt" },
      { label: "Tương thích", value: "iPhone, iPad, Android, Nintendo Switch" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },

  {
    id: "ACC013",
    slug: "sac-ugreen-type-c-pd-20w-mini",
    name: "Sạc Ugreen Type C PD 20W Mini",
    category: "accessory",
    subcategory: "phu_kien",
    accessoryType: "cu-sac",
    price: 290000,
    salePrice: 239000,
    stock: 32,
    images: ["/product_image/phu_kien/sac_ugreen_type_c_pd_20w_mini.png"],
    shortDesc: "Củ sạc PD 20W cơ bản, nhỏ gọn như củ sạc zin, tối ưu tốt cho điện thoại di động.",
    description: `
      <h3>Sự thay thế hoàn hảo cho củ sạc zin</h3>
      <p>Với mức giá cực kỳ phải chăng, củ sạc Ugreen 20W Mini là thiết bị thay thế hoặc dùng làm sạc dự phòng lý tưởng cho điện thoại. Kích thước vô cùng nhỏ gọn giúp nó không lấn chiếm không gian của các phích cắm kế bên trên cùng một ổ điện.</p>
      
      <h3>Sạc nhanh an toàn (Power Delivery)</h3>
      <p>Với công suất chuẩn 20W qua cổng Type-C, nó cung cấp tốc độ sạc nhanh đáng kể so với củ sạc 5W cũ. Hệ thống bảo vệ nhiều lớp tích hợp bên trong ngăn chặn các rủi ro sạc quá dòng, quá áp, bảo vệ an toàn cho cả pin lẫn người sử dụng.</p>
    `,
    brand: "Ugreen",
    specs: {
      brand: "Ugreen",
    },
    cardSpecs: [
      { label: "Công suất", value: "20W" },
      { label: "Kết nối", value: "1x USB Type-C" },
      { label: "Tính năng", value: "Sạc nhanh PD" },
    ],
    detailSpecs: [
      { label: "Loại phụ kiện", value: "Củ sạc điện thoại" },
      { label: "Đầu ra", value: "1x USB Type-C" },
      { label: "Công suất", value: "20W" },
      { label: "Tính năng an toàn", value: "Chống quá tải, quá nhiệt" },
      { label: "Tương thích", value: "Các dòng điện thoại thông minh cơ bản" },
      { label: "Bảo hành", value: "18 Tháng" },
    ],
  },
];