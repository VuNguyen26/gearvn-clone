import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

// export const rams = async (): Promise<Product[]> => {
//   const CACHE_KEY = "ram_products_session";
  
//   // Kiểm tra môi trường để tránh lỗi "sessionStorage is not defined" trên Server
//   const isBrowser = typeof window !== "undefined";

//   // 1. Kiểm tra SessionStorage trước (Chỉ thực hiện ở Client)
//   if (isBrowser) {
//     const cachedData = sessionStorage.getItem(CACHE_KEY);
//     if (cachedData) {
//       console.log("💾 [RAM] Lấy từ Session Storage (0 Read)");
//       return JSON.parse(cachedData) as Product[];
//     }
//   }

//   // 2. Nếu chưa có hoặc đang ở Server, mới gọi Firebase
//   try {
//     const q = query(
//       collection(db, "products"),
//       where("category", "==", "ram") 
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
//     console.error("Lỗi khi fetch dữ liệu rams:", error);
//     return [];
//   }
// };

export const rams: Product[] = [
  {
    id: "RAM001",
    slug: "ram-corsair-dominator-titanium-black-96gb",
    name: "RAM Corsair Dominator Titanium Black 96GB",
    category: "ram",
    subcategory: "ssd_ram_sd",
    price: 10990000,
    salePrice: 10490000,
    stock: 10,
    images: [
      "/product_image/ssd_ram_sd/ram_corsair_dominator_titanium_black_96gb.png",
    ],
    shortDesc: "RAM DDR5 cao cấp đỉnh cao công nghệ, dung lượng khủng 96GB (2x48GB) cho Workstation.",
    description: `
      <h3>Đỉnh cao của chế tác và hiệu năng</h3>
      <p>Corsair Dominator Titanium đại diện cho tầng lớp linh kiện xa xỉ nhất. Với dung lượng lên tới 96GB (2 thanh 48GB) chuẩn DDR5 mới nhất, bộ RAM này không chỉ xử lý mượt mà các tác vụ render 3D, mô phỏng AI cực nặng mà còn cung cấp băng thông khổng lồ để đẩy mức FPS lên tối đa trong các tựa game AAA.  Công nghệ tản nhiệt DHX độc quyền làm mát cả vi mạch (IC) lẫn bản mạch in (PCB) giúp RAM luôn duy trì mức nhiệt lý tưởng khi ép xung (Overclocking).</p>
      
      <h3>Thanh Top Bar có thể tùy biến</h3>
      <p>Điểm độc đáo của dòng Titanium là phần viền tản nhiệt phía trên (Top Bar) có thể tháo rời và thay thế. Bạn có thể sử dụng dải LED RGB 11 vùng sắc nét có sẵn, hoặc mua thêm các thanh Top Bar cổ điển (không LED) để thay đổi phong cách setup một cách linh hoạt nhất.</p>
    `,
    brand: "Corsair",
    specs: {
      brand: "Corsair",
      ram: "96GB",
    },
    cardSpecs: [
      { label: "Chuẩn RAM", value: "DDR5" },
      { label: "Dung lượng", value: "96GB (2x48GB)" },
      { label: "Tốc độ (Bus)", value: "6600MHz" },
    ],
    detailSpecs: [
      { label: "Loại RAM", value: "DDR5 Desktop Memory" },
      { label: "Dung lượng", value: "96GB (Cơ bản 2x48GB)" },
      { label: "Tốc độ (Bus)", value: "6600 MHz" },
      { label: "Độ trễ (CAS)", value: "CL32" },
      { label: "Điện áp", value: "1.40V" },
      { label: "Tản nhiệt", value: "Nhôm nguyên khối (Công nghệ DHX)" },
      { label: "Đèn nền", value: "LED RGB (Tương thích iCUE)" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "RAM002",
    slug: "ram-corsair-vengeance-lpx-8gb",
    name: "RAM Corsair Vengeance LPX 8GB",
    category: "ram",
    subcategory: "ssd_ram_sd",
    price: 690000,
    salePrice: 590000,
    stock: 10,
    images: [
      "/product_image/ssd_ram_sd/ram_corsair_vengeance_lpx_8gb.png",
    ],
    shortDesc: "RAM DDR4 tản nhiệt nhôm cấu hình thấp, hiệu năng ổn định cho hệ thống PC cơ bản.",
    description: `
      <h3>Thiết kế Low-Profile nhỏ gọn</h3>
      <p>Dòng Corsair Vengeance LPX được thiết kế tối giản với chiều cao tản nhiệt cực thấp (Low-Profile). Điều này khiến nó trở thành sự lựa chọn hoàn hảo cho các hệ thống máy tính Mini-ITX nhỏ gọn, hoặc những cấu hình sử dụng tản nhiệt CPU tháp đôi cỡ lớn mà không sợ bị cấn cấn RAM.</p>
      
      <h3>Tản nhiệt nhôm tinh khiết, ép xung tốt</h3>
      <p>Bên dưới lớp vỏ nhôm tinh khiết tản nhiệt nhanh chóng là bo mạch chủ 8 lớp (8-layer PCB) chất lượng cao.  Dù không trang bị đèn LED RGB hào nhoáng, Vengeance LPX vẫn mang lại khả năng quản lý nhiệt độ tuyệt vời, cho phép bạn tự tin bật chế độ XMP để đạt tốc độ Bus 3200MHz cực kỳ ổn định.</p>
    `,
    brand: "Corsair",
    specs: {
      brand: "Corsair",
      ram: "8GB",
    },
    cardSpecs: [
      { label: "Chuẩn RAM", value: "DDR4" },
      { label: "Dung lượng", value: "8GB (1x8GB)" },
      { label: "Tốc độ (Bus)", value: "3200MHz" },
    ],
    detailSpecs: [
      { label: "Loại RAM", value: "DDR4 Desktop Memory" },
      { label: "Dung lượng", value: "8GB (1x8GB)" },
      { label: "Tốc độ (Bus)", value: "3200 MHz" },
      { label: "Độ trễ (CAS)", value: "CL16" },
      { label: "Điện áp", value: "1.35V" },
      { label: "Tản nhiệt", value: "Nhôm Low-Profile" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "RAM003",
    slug: "ram-corsair-vengeance-rgb-96gb",
    name: "RAM Corsair Vengeance RGB 96GB",
    category: "ram",
    subcategory: "ssd_ram_sd",
    price: 11990000,
    salePrice: 11490000,
    stock: 10,
    images: [
      "/product_image/ssd_ram_sd/ram_corsair_vengeance_rgb_96gb.png",
    ],
    shortDesc: "RAM DDR5 thiết kế hiện đại, đèn LED RGB rực rỡ, dung lượng khổng lồ 96GB.",
    description: `
      <h3>Bộ nhớ siêu tốc cho kỷ nguyên mới</h3>
      <p>Nắm bắt giới hạn phần cứng mới nhất, Corsair Vengeance RGB DDR5 phá vỡ rào cản tốc độ với băng thông dữ liệu lớn hơn nhiều lần so với DDR4. Dung lượng 96GB (2x48GB) dư sức gánh vác các dự án sáng tạo nội dung khổng lồ, giả lập máy ảo hay render kỹ xảo điện ảnh phức tạp.</p>
      
      <h3>Ánh sáng RGB 10 vùng năng động</h3>
      <p>Mỗi thanh RAM được thắp sáng bởi 10 bóng LED RGB siêu sáng, có thể tùy chỉnh độc lập. Thông qua phần mềm Corsair iCUE, bạn không chỉ kiểm soát được hiệu ứng ánh sáng đồng bộ với toàn hệ thống mà còn theo dõi được nhiệt độ và tự động tùy chỉnh xung nhịp XMP 3.0 trực tiếp từ Windows.</p>
    `,
    brand: "Corsair",
    specs: {
      brand: "Corsair",
      ram: "96GB",
    },
    cardSpecs: [
      { label: "Chuẩn RAM", value: "DDR5" },
      { label: "Dung lượng", value: "96GB (2x48GB)" },
      { label: "Tốc độ (Bus)", value: "6000MHz" },
    ],
    detailSpecs: [
      { label: "Loại RAM", value: "DDR5 Desktop Memory" },
      { label: "Dung lượng", value: "96GB (2x48GB)" },
      { label: "Tốc độ (Bus)", value: "6000 MHz" },
      { label: "Độ trễ (CAS)", value: "CL30" },
      { label: "Điện áp", value: "1.40V" },
      { label: "Tản nhiệt", value: "Nhôm tản nhiệt nguyên khối" },
      { label: "Đèn nền", value: "LED RGB Đa vùng (iCUE)" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "RAM004",
    slug: "ram-kingmax-blade-x-16gb",
    name: "RAM Kingmax Blade X 16GB",
    category: "ram",
    subcategory: "ssd_ram_sd",
    price: 1290000,
    salePrice: 1090000,
    stock: 10,
    images: [
      "/product_image/ssd_ram_sd/ram_kingmax_blade_x_16gb.png",
    ],
    shortDesc: "RAM DDR4 Gaming tản nhiệt răng cưa mạnh mẽ, tối ưu hóa cho cấu hình chơi game tầm trung.",
    description: `
      <h3>Thiết kế Blade X sắc sảo</h3>
      <p>RAM Kingmax Blade X đúng như tên gọi của mình, mang một lớp áo giáp tản nhiệt bằng hợp kim nhôm với những đường cắt xẻ góc cạnh như lưỡi kiếm. Không chỉ làm tăng vẻ đẹp hầm hố cho bo mạch chủ, lớp giáp này còn tối ưu hóa luồng khí đi qua, giúp thanh RAM hạ nhiệt nhanh chóng khi phải hoạt động ở cường độ cao.</p>
      
      <h3>Hiệu năng tin cậy, tương thích cao</h3>
      <p>Là dòng RAM được kiểm định chất lượng nghiêm ngặt (100% Factory Tested), Kingmax Blade X có độ tương thích xuất sắc với hầu hết các thế hệ bo mạch chủ Intel và AMD. Mức dung lượng 16GB kết hợp cùng Bus 3200MHz đủ để mang lại trải nghiệm mượt mà cho phần lớn các tựa game AAA hiện hành.</p>
    `,
    brand: "Kingmax",
    specs: {
      brand: "Kingmax",
      ram: "16GB",
    },
    cardSpecs: [
      { label: "Chuẩn RAM", value: "DDR4" },
      { label: "Dung lượng", value: "16GB (1x16GB)" },
      { label: "Tốc độ (Bus)", value: "3200MHz" },
    ],
    detailSpecs: [
      { label: "Loại RAM", value: "DDR4 Desktop Memory" },
      { label: "Dung lượng", value: "16GB (1x16GB)" },
      { label: "Tốc độ (Bus)", value: "3200 MHz" },
      { label: "Độ trễ (CAS)", value: "CL16" },
      { label: "Điện áp", value: "1.35V" },
      { label: "Tản nhiệt", value: "Hợp kim nhôm kiểu dáng Blade" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "RAM005",
    slug: "ram-kingmax-horizon-16gb",
    name: "RAM Kingmax Horizon 16GB",
    category: "ram",
    subcategory: "ssd_ram_sd",
    price: 1190000,
    salePrice: 990000,
    stock: 10,
    images: [
      "/product_image/ssd_ram_sd/ram_kingmax_horizon_16gb.png",
    ],
    shortDesc: "RAM DDR4 thiết kế không tản nhiệt, lựa chọn P/P hàng đầu cho nâng cấp văn phòng.",
    description: `
      <h3>Sự lựa chọn thực dụng và kinh tế</h3>
      <p>Hướng đến người dùng phổ thông cần nâng cấp dung lượng máy tính mà không cần phải chi trả thêm cho lớp vỏ tản nhiệt nhôm hay đèn LED RGB, Kingmax Horizon cung cấp nguyên bản sự bền bỉ của tấm nền PCB đen truyền thống. Đây là một món hời (Best P/P) cho các cỗ máy tính văn phòng, học tập hoặc máy trạm render không quan trọng ngoại hình.</p>
      
      <h3>Ổn định vượt thời gian</h3>
      <p>Sử dụng các chip nhớ (Memory IC) được tuyển chọn kỹ lưỡng, Kingmax Horizon đảm bảo khả năng chạy ổn định 24/7. Hỗ trợ chuẩn JEDEC cắm là chạy, hệ thống sẽ tự động nhận diện và thiết lập mức xung nhịp tối ưu mà không cần người dùng phải vào BIOS để tinh chỉnh thêm.</p>
    `,
    brand: "Kingmax",
    specs: {
      brand: "Kingmax",
      ram: "16GB",
    },
    cardSpecs: [
      { label: "Chuẩn RAM", value: "DDR4" },
      { label: "Dung lượng", value: "16GB (1x16GB)" },
      { label: "Đèn nền", value: "Không (Bản tiêu chuẩn)" },
    ],
    detailSpecs: [
      { label: "Loại RAM", value: "DDR4 Desktop Memory" },
      { label: "Dung lượng", value: "16GB (1x16GB)" },
      { label: "Tốc độ (Bus)", value: "3200 MHz" },
      { label: "Độ trễ (CAS)", value: "CL22 (Chuẩn JEDEC)" },
      { label: "Điện áp", value: "1.20V" },
      { label: "Tản nhiệt", value: "Không (Bare PCB)" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },

  {
    id: "RAM006",
    slug: "ram-t-group-t-force-delta-8gb",
    name: "RAM T-Group T-Force Delta 8GB",
    category: "ram",
    subcategory: "ssd_ram_sd",
    price: 890000,
    salePrice: 790000,
    stock: 10,
    images: [
      "/product_image/ssd_ram_sd/ram_t_group_t_force_delta_8gb.jpg",
    ],
    shortDesc: "RAM DDR4 thiết kế dải LED RGB góc rộng 120 độ rực rỡ, tản nhiệt nhôm tản nhiệt vượt trội.",
    description: `
      <h3>Tỏa sáng rực rỡ với góc nhìn 120 độ</h3>
      <p>T-Force Delta RGB luôn nằm trong top những thanh RAM được yêu thích nhất nhờ vào thiết kế khung viền (Light bar) cực kỳ hào nhoáng.  Dải LED RGB siêu rộng phủ kín góc 120 độ dọc theo thân RAM, giúp ánh sáng lan tỏa mượt mà, tạo nên hiệu ứng thị giác tuyệt đẹp khi lắp vào trong case máy tính trong suốt.</p>
      
      <h3>Hiệu suất ổn định nhờ nhôm tản nhiệt</h3>
      <p>Lớp vỏ tản nhiệt nhôm bao bọc quanh bo mạch được gia công cách điệu hình cánh chim (Delta), làm mát hiệu quả các IC nhớ bên trong. Nó được tối ưu hóa hoàn toàn để tương thích với các phần mềm quản lý LED của Asus, Gigabyte, MSI, ASRock, cho phép bạn điều khiển ánh sáng hòa quyện cùng toàn bộ linh kiện khác.</p>
    `,
    brand: "T-Group",
    specs: {
      brand: "T-Group",
      ram: "8GB",
    },
    cardSpecs: [
      { label: "Chuẩn RAM", value: "DDR4" },
      { label: "Dung lượng", value: "8GB (1x8GB)" },
      { label: "Đèn nền", value: "LED RGB Góc siêu rộng 120°" },
    ],
    detailSpecs: [
      { label: "Loại RAM", value: "DDR4 Desktop Memory" },
      { label: "Dung lượng", value: "8GB (1x8GB)" },
      { label: "Tốc độ (Bus)", value: "3200 MHz" },
      { label: "Độ trễ (CAS)", value: "CL16" },
      { label: "Điện áp", value: "1.35V" },
      { label: "Tản nhiệt", value: "Nhôm hợp kim nguyên khối" },
      { label: "Đèn nền", value: "LED RGB Ultra-Wide 120 độ" },
      { label: "Bảo hành", value: "36 Tháng" },
    ],
  },
];