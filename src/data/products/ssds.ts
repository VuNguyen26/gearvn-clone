import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const ssds = async (): Promise<Product[]> => {
  const CACHE_KEY = "ssd_products_session";
  // Kiểm tra môi trường để không bị lỗi ReferenceError trên Server
  const isBrowser = typeof window !== "undefined";
  // 1. Kiểm tra bộ nhớ tạm (Chỉ chạy ở Client)
  if (isBrowser) {
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    if (cachedData) {
      console.log("⚡ [SSD] Lấy từ Session Storage (0 Read)");
      return JSON.parse(cachedData) as Product[];
    }
  }
  // 2. Nếu chưa có hoặc đang ở Server, mới gọi Firebase
  try {
    const q = query(
      collection(db, "products"),
      where("category", "==", "ssd") 
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
    console.error("Lỗi khi fetch dữ liệu ssds:", error);
    return [];
  }
};

// export const ssds: Product[] = [
//   {
//     id: "SSD001",
//     slug: "ssd-kingston-nv3-2tb",
//     name: "SSD Kingston NV3 2TB",
//     category: "ssd",
//     subcategory: "ssd_ram_sd",
//     price: 3490000,
//     salePrice: 3290000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/ssd_kingston_nv3/ssd_kingston_nv3_2tb.png",
//       "/product_image/ssd_ram_sd/ssd_kingston_nv3/ssd_kingston_nv3_01.png",
//       "/product_image/ssd_ram_sd/ssd_kingston_nv3/ssd_kingston_nv3_02.png",
//     ],
//     shortDesc: "SSD Gen 4x4 thế hệ mới, dung lượng khổng lồ 2TB, tốc độ tối ưu cho hệ thống tầm trung.",
//     description: `
//       <h3>Tốc độ PCIe Gen 4x4 ấn tượng</h3>
//       <p>Kingston NV3 là thế hệ ổ cứng SSD NVMe mới nhất sử dụng giao thức PCIe Gen 4x4. Nó cung cấp tốc độ đọc lên đến 6000MB/s và tốc độ ghi 5000MB/s (nhanh hơn đáng kể so với dòng NV2 tiền nhiệm). Việc khởi động Windows, tải màn chơi trong game hay mở các file dự án lớn giờ đây chỉ diễn ra trong chớp mắt.</p>
      
//       <h3>Không gian 2TB lý tưởng</h3>
//       <p>Với mức dung lượng khổng lồ 2TB, bạn có thể thoải mái cài đặt hàng chục tựa game AAA nặng hàng trăm Gigabyte, lưu trữ thư viện video 4K cá nhân mà không phải đắn đo suy nghĩ việc xóa bớt dữ liệu cũ. Thiết kế M.2 2280 nhỏ gọn giúp dễ dàng lắp đặt vào PC hoặc các dòng Laptop hiện đại.</p>
//     `,
//     brand: "Kingston",
//     specs: {
//       brand: "Kingston",
//       storage: "2TB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 4.0 x4" },
//       { label: "Dung lượng", value: "2TB" },
//       { label: "Tốc độ Đọc/Ghi", value: "6000MB/s - 5000MB/s" },
//     ],
//     detailSpecs: [
//       { label: "Loại ổ cứng", value: "SSD M.2 NVMe (Kích thước 2280)" },
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 4.0 x4" },
//       { label: "Dung lượng", value: "2TB" },
//       { label: "Tốc độ đọc", value: "Lên đến 6,000 MB/s" },
//       { label: "Tốc độ ghi", value: "Lên đến 5,000 MB/s" },
//       { label: "NAND Flash", value: "3D NAND" },
//       { label: "Độ bền (TBW)", value: "640 TBW" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "SSD002",
//     slug: "ssd-msi-spatium-m480-pro",
//     name: "SSD MSI Spatium M480 Pro 1TB",
//     category: "ssd",
//     subcategory: "ssd_ram_sd",
//     price: 2990000,
//     salePrice: 2790000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/ssd_msi_spatium/ssd_msi_statium_m480_pro.jpg",
//     ],
//     shortDesc: "Vũ khí tốc độ cao cho Game thủ chuyên nghiệp và nhà sáng tạo nội dung.",
//     description: `
//       <h3>Hiệu năng Pro, Tốc độ chớp nhoáng</h3>
//       <p>MSI Spatium M480 Pro là một trong những ổ cứng SSD PCIe Gen 4 nhanh nhất trên thị trường. Với tốc độ đọc tuần tự lên đến 7400MB/s và ghi 6000MB/s, nó giúp loại bỏ hoàn toàn độ trễ trong quá trình tải tài nguyên game, mang đến lợi thế lớn trong các tựa game eSports cạnh tranh khốc liệt.</p>
      
//       <h3>Bảo mật dữ liệu đa lớp</h3>
//       <p>Không chỉ nhanh, ổ cứng còn được tích hợp các tính năng bảo mật dữ liệu tiên tiến và sửa lỗi (Error Correction Code - ECC), kéo dài tuổi thọ của chip nhớ NAND Flash 3D mật độ cao. MSI Center đi kèm giúp bạn dễ dàng theo dõi tình trạng "sức khỏe" của ổ đĩa và sao lưu dữ liệu an toàn.</p>
//     `,
//     brand: "MSI",
//     specs: {
//       brand: "MSI",
//       storage: "1TB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 4.0 x4" },
//       { label: "Dung lượng", value: "1TB" },
//       { label: "Tốc độ Đọc/Ghi", value: "7400MB/s - 6000MB/s" },
//     ],
//     detailSpecs: [
//       { label: "Loại ổ cứng", value: "SSD M.2 NVMe (Kích thước 2280)" },
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 4.0 x4, NVMe 1.4" },
//       { label: "Dung lượng", value: "1TB" },
//       { label: "Tốc độ đọc", value: "Lên đến 7,400 MB/s" },
//       { label: "Tốc độ ghi", value: "Lên đến 6,000 MB/s" },
//       { label: "Bộ đệm (Cache)", value: "DRAM Cache tích hợp" },
//       { label: "NAND Flash", value: "3D NAND" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },

//   {
//     id: "SSD003",
//     slug: "ssd-samsung-990-pro-4tb",
//     name: "SSD Samsung 990 Pro 4TB",
//     category: "ssd",
//     subcategory: "ssd_ram_sd",
//     price: 8990000,
//     salePrice: 8490000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/ssd_samsung_990_pro/ssd_samsung_990_pro_4tb.png",
//       "/product_image/ssd_ram_sd/ssd_samsung_990_pro/ssd_samsung_990_pro_01.png",
//       "/product_image/ssd_ram_sd/ssd_samsung_990_pro/ssd_samsung_990_pro_02.png",
//     ],
//     shortDesc: "Vị vua lưu trữ không thể thách thức, tốc độ kịch kim PCIe Gen 4, dung lượng 4TB siêu khủng.",
//     description: `
//       <h3>Tối đa hóa chuẩn PCIe 4.0</h3>
//       <p>Samsung 990 Pro chạm đến ranh giới hiệu năng lý thuyết của giao thức PCIe 4.0. Đạt tốc độ đọc siêu tốc 7450MB/s và ghi 6900MB/s, đi kèm tốc độ đọc ngẫu nhiên (Random Read) cực cao, đây là ổ đĩa hoàn hảo dành cho PS5 và hệ thống PC High-End để xử lý các tệp video độ phân giải 8K cực nặng.</p>
      
//       <h3>Công nghệ kiểm soát nhiệt thông minh</h3>
//       <p>Sử dụng bộ điều khiển mạ niken nội bộ cùng thuật toán kiểm soát nhiệt độ độc quyền của Samsung (Dynamic Thermal Guard), ổ cứng quản lý nhiệt lượng cực kỳ thông minh. Dù phải truyền tải hàng trăm Gigabyte dữ liệu liên tục, hiệu suất ổ đĩa vẫn không hề bị sụt giảm (Throttling).</p>
//     `,
//     brand: "Samsung",
//     specs: {
//       brand: "Samsung",
//       storage: "4TB",
//     },
//     cardSpecs: [
//       { label: "Dung lượng", value: "4TB" },
//       { label: "Tốc độ Đọc/Ghi", value: "7450MB/s - 6900MB/s" },
//       { label: "Tương thích", value: "PC & PlayStation 5" },
//     ],
//     detailSpecs: [
//       { label: "Loại ổ cứng", value: "SSD M.2 NVMe (Kích thước 2280)" },
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 4.0 x4, NVMe 2.0" },
//       { label: "Dung lượng", value: "4TB" },
//       { label: "Tốc độ đọc", value: "Lên đến 7,450 MB/s" },
//       { label: "Tốc độ ghi", value: "Lên đến 6,900 MB/s" },
//       { label: "Controller", value: "Samsung In-house Controller" },
//       { label: "Bộ đệm", value: "4GB LPDDR4" },
//       { label: "Độ bền (TBW)", value: "2400 TBW" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },

//   {
//     id: "SSD004",
//     slug: "ssd-addlink-s68-gen3-256gb",
//     name: "SSD Addlink S68 Gen3 256GB",
//     category: "ssd",
//     subcategory: "ssd_ram_sd",
//     price: 690000,
//     salePrice: 590000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/ssd_addlink_s68_gen3_256gb.png",
//     ],
//     shortDesc: "Giải pháp nâng cấp máy tính cũ hoàn hảo, tốc độ vượt xa ổ cứng SATA truyền thống.",
//     description: `
//       <h3>Hồi sinh sức mạnh hệ thống</h3>
//       <p>Addlink S68 là chiếc ổ cứng chuẩn M.2 PCIe Gen 3 lý tưởng để "hồi sinh" những chiếc laptop cũ hoặc lắp ráp máy tính văn phòng giá rẻ. Nó mang lại tốc độ truy xuất dữ liệu nhanh gấp 4 đến 5 lần so với các dòng ổ cứng thể rắn SSD chuẩn SATA III thông thường.</p>
      
//       <h3>Hoạt động êm ái, tiết kiệm pin</h3>
//       <p>Sử dụng công nghệ chip nhớ 3D NAND tiên tiến, ổ cứng không có bộ phận chuyển động cơ học nên hoạt động hoàn toàn tĩnh lặng. Mức tiêu thụ điện năng cực thấp của nó cũng giúp tăng đáng kể thời lượng sử dụng pin nếu bạn lắp đặt trên các thiết bị di động như Laptop.</p>
//     `,
//     brand: "Addlink",
//     specs: {
//       brand: "Addlink",
//       storage: "256GB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 3.0 x4" },
//       { label: "Dung lượng", value: "256GB" },
//       { label: "Ứng dụng", value: "Cài Win, Nâng cấp Laptop" },
//     ],
//     detailSpecs: [
//       { label: "Loại ổ cứng", value: "SSD M.2 NVMe (Kích thước 2280)" },
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 3.0 x4" },
//       { label: "Dung lượng", value: "256GB" },
//       { label: "Tốc độ đọc", value: "Lên đến 2,000 MB/s" },
//       { label: "Tốc độ ghi", value: "Lên đến 1,200 MB/s" },
//       { label: "NAND Flash", value: "3D NAND" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "SSD005",
//     slug: "ssd-corsair-mp600-core-1tb",
//     name: "SSD Corsair MP600 Core 1TB",
//     category: "ssd",
//     subcategory: "ssd_ram_sd",
//     price: 1990000,
//     salePrice: 1790000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/ssd_corsair_mp600_core_1tb.png",
//     ],
//     shortDesc: "SSD Gen 4 hiệu suất cao kèm khối tản nhiệt nhôm hầm hố, giữ vững phong độ dài lâu.",
//     description: `
//       <h3>Thiết kế hầm hố kèm Tản nhiệt nhôm</h3>
//       <p>Corsair MP600 Core nổi bật so với các đối thủ cùng phân khúc khi được trang bị sẵn một khối tản nhiệt (Heatsink) bằng hợp kim nhôm siêu dày. Điều này không chỉ mang lại vẻ ngoài cứng cáp mà còn giúp tản nhiệt cực nhanh, đảm bảo ổ đĩa hoạt động tối đa công suất mà không lo bị nóng.</p>
      
//       <h3>Chip nhớ QLC 3D mật độ cao</h3>
//       <p>Được trang bị công nghệ QLC 3D NAND, ổ cứng mang lại dung lượng lưu trữ lớn (1TB) với mức giá cực kỳ phải chăng nhưng vẫn đảm bảo được tốc độ truyền dẫn dữ liệu chuẩn PCIe Gen 4x4 (đọc gần 5000MB/s), đáp ứng tốt nhu cầu lưu trữ game và các phần mềm làm việc nặng.</p>
//     `,
//     brand: "Corsair",
//     specs: {
//       brand: "Corsair",
//       storage: "1TB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 4.0 x4" },
//       { label: "Tản nhiệt", value: "Kèm Heatsink Nhôm khối" },
//       { label: "Dung lượng", value: "1TB" },
//     ],
//     detailSpecs: [
//       { label: "Loại ổ cứng", value: "SSD M.2 NVMe" },
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 4.0 x4" },
//       { label: "Dung lượng", value: "1TB" },
//       { label: "Tốc độ đọc", value: "Lên đến 4,700 MB/s" },
//       { label: "Tốc độ ghi", value: "Lên đến 1,950 MB/s" },
//       { label: "Tản nhiệt", value: "Tích hợp sẵn Heatsink Nhôm (Tháo rời được)" },
//       { label: "NAND Flash", value: "QLC 3D NAND" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "SSD006",
//     slug: "ssd-pny-cs1031m-500gb",
//     name: "SSD PNY CS1031M 500GB",
//     category: "ssd",
//     subcategory: "ssd_ram_sd",
//     price: 1090000,
//     salePrice: 990000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/ssd_pny_cs1031m_500gb.png",
//     ],
//     shortDesc: "Ổ cứng quốc dân cho học sinh sinh viên, khởi động siêu tốc, đa nhiệm mượt mà.",
//     description: `
//       <h3>Tối ưu chi phí, tối đa hiệu quả</h3>
//       <p>PNY CS1031M 500GB là dòng ổ cứng PCIe Gen 3x4 sinh ra để phục vụ nhu cầu lưu trữ cơ bản nhất của người dùng với một mức giá "hạt dẻ". Dung lượng 500GB là đủ thoải mái để cài đặt hệ điều hành Windows, bộ phần mềm Office và lưu trữ vài tựa game eSports yêu thích.</p>
      
//       <h3>Tuổi thọ bền bỉ</h3>
//       <p>Sản phẩm đã trải qua hàng loạt bài kiểm tra nghiêm ngặt từ hãng PNY, hỗ trợ công nghệ S.M.A.R.T tự động theo dõi tình trạng ổ cứng và công nghệ TRIM tối ưu hóa việc ghi/xóa dữ liệu. Tuổi thọ trung bình lên tới 2 triệu giờ sử dụng (MTBF) mang lại sự an tâm tuyệt đối cho người tiêu dùng.</p>
//     `,
//     brand: "PNY",
//     specs: {
//       brand: "PNY",
//       storage: "500GB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 3.0 x4" },
//       { label: "Dung lượng", value: "500GB" },
//       { label: "Phân khúc", value: "Văn phòng / Phổ thông" },
//     ],
//     detailSpecs: [
//       { label: "Loại ổ cứng", value: "SSD M.2 NVMe (Kích thước 2280)" },
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 3.0 x4, NVMe 1.3" },
//       { label: "Dung lượng", value: "500GB" },
//       { label: "Tốc độ đọc", value: "Lên đến 2,200 MB/s" },
//       { label: "Tốc độ ghi", value: "Lên đến 1,200 MB/s" },
//       { label: "Tuổi thọ trung bình (MTBF)", value: "2,000,000 Giờ" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "SSD007",
//     slug: "ssd-samsung-9100-pro-1tb",
//     name: "SSD Samsung 9100 Pro 1TB",
//     category: "ssd",
//     subcategory: "ssd_ram_sd",
//     price: 2790000,
//     salePrice: 2590000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/ssd_samsung_9100_pro_1tb.png",
//     ],
//     shortDesc: "Thế hệ SSD PCIe 5.0 tiên phong của Samsung, mở ra chân trời tốc độ mới.",
//     description: `
//       <h3>Sức mạnh tương lai PCIe Gen 5.0</h3>
//       <p>Samsung 9100 Pro đánh dấu bước chuyển mình sang thế hệ giao tiếp PCIe Gen 5.0 mới nhất. Cung cấp tốc độ đọc tuần tự gấp đôi so với thế hệ Gen 4.0 tốt nhất, ổ đĩa này được thiết kế để xử lý dữ liệu phức tạp trong ngành Trí tuệ nhân tạo (AI), học máy (Machine Learning) và các máy chủ trung tâm dữ liệu.</p>
      
//       <h3>Tối ưu hóa bởi Samsung Magician</h3>
//       <p>Khai thác hết tiềm năng của Samsung 9100 Pro thông qua phần mềm quản lý Magician. Nó cung cấp cho bạn một giao diện thân thiện để theo dõi sức khỏe ổ cứng, tùy chỉnh hiệu suất (Performance Optimization), thiết lập đèn LED (nếu có) và bảo vệ an toàn mọi dữ liệu nhạy cảm thông qua mã hóa chuẩn AES 256-bit.</p>
//     `,
//     brand: "Samsung",
//     specs: {
//       brand: "Samsung",
//       storage: "1TB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 5.0 x4 (Siêu tốc)" },
//       { label: "Dung lượng", value: "1TB" },
//       { label: "Công nghệ", value: "Quản lý bằng Samsung Magician" },
//     ],
//     detailSpecs: [
//       { label: "Loại ổ cứng", value: "SSD M.2 NVMe" },
//       { label: "Chuẩn giao tiếp", value: "PCIe Gen 5.0 x4" },
//       { label: "Dung lượng", value: "1TB" },
//       { label: "Tốc độ đọc", value: "Lên đến 14,000 MB/s (Lý thuyết)" },
//       { label: "NAND Flash", value: "Samsung V-NAND thế hệ mới" },
//       { label: "Tính năng bảo mật", value: "Mã hóa phần cứng AES 256-bit" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },
// ];