
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const laptopgamings = async (): Promise<Product[]> => {
  const CACHE_KEY = "laptop_gaming_products_session";
  
  // Kiểm tra môi trường để tránh lỗi ReferenceError trên Server
  const isBrowser = typeof window !== "undefined";

  // 1. Kiểm tra SessionStorage trước (Chỉ chạy ở Client)
  if (isBrowser) {
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    if (cachedData) {
      console.log("🎮 [Laptop Gaming] Lấy từ Session Storage (0 Read)");
      return JSON.parse(cachedData) as Product[];
    }
  }

  // 2. Nếu chưa có hoặc đang ở Server, mới gọi Firebase
  try {
    console.warn("📡 [Laptop Gaming] Đang tải danh sách từ Firebase...");
    const q = query(
      collection(db, "products"),
      where("category", "==", "laptop-gaming") 
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
    console.error("Lỗi khi fetch dữ liệu laptopgamings:", error);
    return [];
  }
};
// export const laptopgamings: Product[] = [
//   {
//     id: "LGM001",
//     slug: "laptop-acer-aspire-7-a715-59g-53gz",
//     name: "Laptop Acer Aspire 7 A715 59G 53GZ",
//     category: "laptopgaming",
//     price: 18990000,
//     salePrice: 15490000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_53gz/laptop_acer_aspire_7_a715_59g_53gz_01.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_53gz/laptop_acer_aspire_7_a715_59g_53gz_02.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_53gz/laptop_acer_aspire_7_a715_59g_53gz_03.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_53gz/laptop_acer_aspire_7_a715_59g_53gz_04.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_53gz/laptop_acer_aspire_7_a715_59g_53gz_05.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_53gz/laptop_acer_aspire_7_a715_59g_53gz_06.jpg",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i5-12450H",
//       ram: "8GB DDR4 3200MHz",
//       storage: "512GB SSD PCIe NVMe",
//       screen: "15.6 inch FHD IPS 144Hz",
//       gpu: "NVIDIA GeForce RTX 2050 4GB"
//     },
//     shortDesc: "Laptop Gaming quốc dân, thiết kế thanh lịch, trang bị card rời RTX 2050 lý tưởng cho eSports.",
//     description: `
//       <h3>Thiết kế thanh lịch, không quá hầm hố</h3>
//       <p>Khác biệt với đa số laptop gaming trên thị trường, Acer Aspire 7 A715 mang thiết kế tối giản, tinh tế với tông màu Đen Charcoal. Máy hoàn toàn phù hợp để mang vào thư viện, lớp học hay văn phòng mà không gây sự chú ý quá mức, nhưng bên trong lại ẩn chứa sức mạnh đáng nể.</p>
      
//       <h3>Hiệu năng "Chiến" mọi game eSports</h3>
//       <p>Sự kết hợp giữa vi xử lý Intel Core i5-12450H dòng H hiệu năng cao và card đồ họa NVIDIA GeForce RTX 2050 4GB cung cấp chỉ số FPS cực tốt cho các tựa game phổ biến như Liên Minh Huyền Thoại, Valorant, CS2. Màn hình 15.6 inch tần số quét 144Hz giúp bạn bắt trọn mọi chuyển động của kẻ thù một cách mượt mà nhất.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i5-12450H" },
//       { label: "VGA", value: "GeForce RTX 2050 4GB" },
//       { label: "Màn hình", value: "15.6 inch FHD 144Hz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-12450H (8 Nhân / 12 Luồng, Up to 4.4GHz)" },
//       { label: "RAM", value: "8GB DDR4 3200MHz (Hỗ trợ nâng cấp tối đa 32GB)" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 2050 4GB GDDR6" },
//       { label: "Hệ thống tản nhiệt", value: "Hệ thống quạt kép làm mát hiệu quả" },
//       { label: "Trọng lượng", value: "2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM002",
//     slug: "laptop-acer-aspire-7-a715-59g-55md",
//     name: "Laptop Acer Aspire 7 A715 59G 55MD",
//     category: "laptopgaming",
//     price: 19990000,
//     salePrice: 16990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_55md/laptop_acer_aspire_7_a715_59g_55md_01.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_55md/laptop_acer_aspire_7_a715_59g_55md_02.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_55md/laptop_acer_aspire_7_a715_59g_55md_03.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_55md/laptop_acer_aspire_7_a715_59g_55md_04.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_55md/laptop_acer_aspire_7_a715_59g_55md_05.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_55md/laptop_acer_aspire_7_a715_59g_55md_06.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i5-12450H",
//       ram: "8GB DDR4 3200MHz",
//       storage: "512GB SSD PCIe NVMe",
//       screen: "15.6 inch FHD IPS 144Hz",
//       gpu: "NVIDIA GeForce RTX 3050 4GB",
//     },
//     shortDesc: "Bản nâng cấp đồ họa với RTX 3050, tối ưu tốt hơn cho các tác vụ thiết kế và chơi game AAA nhẹ.",
//     description: `
//       <h3>Sức mạnh từ kiến trúc Ampere (RTX 3050)</h3>
//       <p>Với mức giá nhỉnh hơn đôi chút, Acer Aspire 7 A715 55MD được nâng cấp lên card đồ họa NVIDIA GeForce RTX 3050 4GB. Việc sở hữu dòng card RTX 30 Series mang lại lợi thế lớn với công nghệ DLSS 2.0, giúp thiết bị chơi mượt các tựa game AAA ở mức cấu hình trung bình (Medium Setting) và rút ngắn thời gian render video cho các Editor tập sự.</p>
      
//       <h3>Bàn phím Full-size và Tản nhiệt tốt</h3>
//       <p>Máy sở hữu bàn phím Full-size (có khu vực phím số riêng) có đèn nền trắng, hỗ trợ nhập liệu dễ dàng trong đêm. Dù là một chiếc máy đa dụng, Acer vẫn trang bị hệ thống tản nhiệt quạt kép và các ống đồng dẫn nhiệt kích thước lớn để duy trì nhiệt độ mát mẻ ở khu vực kê tay khi bạn combat căng thẳng.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i5-12450H" },
//       { label: "VGA", value: "GeForce RTX 3050 4GB" },
//       { label: "Màn hình", value: "15.6 inch FHD 144Hz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-12450H (8 Nhân / 12 Luồng, Up to 4.4GHz)" },
//       { label: "RAM", value: "8GB DDR4 3200MHz (2 Khe, Max 32GB)" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 3050 4GB GDDR6" },
//       { label: "Bàn phím", value: "Bàn phím Fullsize, Có đèn nền trắng" },
//       { label: "Trọng lượng", value: "2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM003",
//     slug: "laptop-acer-aspire-7-a715-59g-57tu",
//     name: "Laptop Acer Aspire 7 A715 59G 57TU",
//     category: "laptopgaming",
//     price: 20990000,
//     salePrice: 17990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_57tu/laptop_acer_aspire_7_a715_59g_57tu_01.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_57tu/laptop_acer_aspire_7_a715_59g_57tu_02.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_57tu/laptop_acer_aspire_7_a715_59g_57tu_03.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_57tu/laptop_acer_aspire_7_a715_59g_57tu_04.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_57tu/laptop_acer_aspire_7_a715_59g_57tu_05.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i5-12450H",
//       ram: "16GB DDR4 3200MHz",
//       storage: "512GB SSD PCIe NVMe",
//       screen: "15.6 inch FHD IPS 144Hz",
//       gpu: "NVIDIA GeForce RTX 3050 4GB",
//     },
//     shortDesc: "Sẵn sàng đa nhiệm với dung lượng 16GB RAM, sức mạnh RTX 3050 cân mượt đồ họa.",
//     description: `
//       <h3>Tối ưu hóa đa nhiệm với 16GB RAM</h3>
//       <p>Không cần phải lo lắng về việc nâng cấp sau khi mua máy, Acer Aspire 7 A715 57TU được trang bị sẵn 16GB RAM (chạy Dual Channel). Mức dung lượng này giúp bạn thoải mái mở hàng chục tab Chrome tìm tư liệu, vừa làm Photoshop vừa mở game để xả stress mà máy không bao giờ bị đứng hình hay văng ứng dụng do thiếu RAM.</p>
      
//       <h3>Cổng kết nối đa dạng</h3>
//       <p>Đáp ứng tốt nhu cầu học tập và thuyết trình, máy cung cấp đầy đủ các cổng kết nối vật lý bao gồm 3 cổng USB Type-A, 1 cổng USB Type-C tích hợp công nghệ Thunderbolt 4, cổng xuất hình HDMI và đặc biệt là cổng mạng LAN RJ45, đảm bảo kết nối internet cáp quang luôn ổn định khi tải game nặng.</p>
//     `,
//     cardSpecs: [
//       { label: "RAM / ROM", value: "16GB RAM / 512GB SSD" },
//       { label: "VGA", value: "GeForce RTX 3050 4GB" },
//       { label: "Màn hình", value: "15.6 inch FHD 144Hz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-12450H (8 Nhân / 12 Luồng, Up to 4.4GHz)" },
//       { label: "RAM", value: "16GB DDR4 3200MHz (Đã lắp sẵn đủ cho đa nhiệm)" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 3050 4GB GDDR6" },
//       { label: "Cổng kết nối", value: "Thunderbolt 4, USB 3.2, HDMI, RJ45, Audio Jack" },
//       { label: "Trọng lượng", value: "2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM004",
//     slug: "laptop-acer-aspire-7-a715-59g-73lb",
//     name: "Laptop Acer Aspire 7 A715 59G 73LB",
//     category: "laptopgaming",
//     price: 22490000,
//     salePrice: 19490000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_73lb/laptop_acer_aspire_7_a715_59g_73lb_01.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_73lb/laptop_acer_aspire_7_a715_59g_73lb_02.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_73lb/laptop_acer_aspire_7_a715_59g_73lb_03.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_73lb/laptop_acer_aspire_7_a715_59g_73lb_04.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_73lb/laptop_acer_aspire_7_a715_59g_73lb_05.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_73lb/laptop_acer_aspire_7_a715_59g_73lb_06.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i7-12650H",
//       ram: "16GB DDR4 3200MHz",
//       storage: "512GB SSD PCIe NVMe",
//       screen: "15.6 inch FHD IPS 144Hz",
//       gpu: "NVIDIA GeForce RTX 3050 4GB",
//     },
//     shortDesc: "Nâng cấp cực lớn với CPU Intel Core i7, đáp ứng yêu cầu xử lý dữ liệu phức tạp và lập trình.",
//     description: `
//       <h3>Sức mạnh điện toán từ Intel Core i7</h3>
//       <p>Đối với những người dùng có nhu cầu xử lý thuật toán phức tạp, chạy máy ảo (Virtual Machine) hay xuất các file thiết kế nặng, vi xử lý Intel Core i7-12650H (10 Nhân / 16 Luồng) trên Aspire 7 A715 73LB sẽ là công cụ hỗ trợ hoàn hảo. Tốc độ Turbo Boost lên tới 4.7GHz rút ngắn thời gian chờ đợi của bạn một cách tối đa.</p>
      
//       <h3>Băng thông Wi-Fi 6 siêu tốc</h3>
//       <p>Ngoài cấu hình mạnh, máy còn được tích hợp chuẩn Wi-Fi 6 (802.11ax) cung cấp tốc độ kết nối internet không dây siêu nhanh và cực kỳ ổn định. Bạn có thể tải game, livestream hay tham gia các cuộc họp trực tuyến với băng thông rộng, loại bỏ hoàn toàn độ trễ do giật lag mạng.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-12650H" },
//       { label: "VGA", value: "GeForce RTX 3050 4GB" },
//       { label: "RAM / ROM", value: "16GB RAM / 512GB SSD" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-12650H (10 Nhân / 16 Luồng, Up to 4.7GHz, 24MB)" },
//       { label: "RAM", value: "16GB DDR4 3200MHz" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 3050 4GB GDDR6" },
//       { label: "Mạng không dây", value: "Wi-Fi 6 (802.11ax) + Bluetooth 5.1" },
//       { label: "Trọng lượng", value: "2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM005",
//     slug: "laptop-acer-aspire-7-a715-59g-78wg",
//     name: "Laptop Acer Aspire 7 A715 59G 78WG",
//     category: "laptopgaming",
//     price: 23990000,
//     salePrice: 20990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_78wg/laptop_acer_aspire_7_a715_59g_78wg_01.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_78wg/laptop_acer_aspire_7_a715_59g_78wg_02.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_78wg/laptop_acer_aspire_7_a715_59g_78wg_03.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_78wg/laptop_acer_aspire_7_a715_59g_78wg_04.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_78wg/laptop_acer_aspire_7_a715_59g_78wg_05.png",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_78wg/laptop_acer_aspire_7_a715_59g_78wg_06.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i7-12650H",
//       ram: "16GB DDR4 3200MHz",
//       storage: "1TB SSD PCIe NVMe",
//       screen: "15.6 inch FHD IPS 144Hz",
//       gpu: "NVIDIA GeForce RTX 3050 4GB",
//     },
//     shortDesc: "Hoàn thiện mọi nhu cầu với sự nâng cấp lưu trữ lên 1TB SSD, cài game thả ga không lo hết chỗ.",
//     description: `
//       <h3>Bộ nhớ khổng lồ 1TB</h3>
//       <p>Đối với những game thủ "cả thèm chóng chán" thường xuyên tải và cài đặt hàng loạt tựa game online/offline dung lượng hàng trăm GB (như GTA V, COD:Warzone, Genshin Impact), ổ cứng SSD 1TB trên Aspire 7 78WG là một sự nâng cấp xứng đáng. Bạn sẽ không bao giờ phải chịu cảnh đắn đo xóa game cũ để lấy chỗ cài game mới.</p>
      
//       <h3>Cấu hình vững chắc cho vài năm tới</h3>
//       <p>Sở hữu bộ khung hoàn chỉnh bao gồm Core i7, 16GB RAM, 1TB SSD và RTX 3050, chiếc laptop này đủ sức đồng hành cùng sinh viên trong suốt 4 năm Đại học với các ngành như Thiết kế đồ họa, Kiến trúc hay Công nghệ thông tin mà không lo thiết bị bị lỗi thời.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-12650H" },
//       { label: "RAM / ROM", value: "16GB RAM / 1TB SSD" },
//       { label: "VGA", value: "GeForce RTX 3050 4GB" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-12650H (10 Nhân / 16 Luồng, Up to 4.7GHz, 24MB)" },
//       { label: "RAM", value: "16GB DDR4 3200MHz" },
//       { label: "Ổ cứng", value: "1TB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 3050 4GB GDDR6" },
//       { label: "Trọng lượng", value: "2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM006",
//     slug: "laptop-acer-aspire-7-a715-59g-79xf",
//     name: "Laptop Acer Aspire 7 A715 59G 79XF",
//     category: "laptopgaming",
//     price: 24990000,
//     salePrice: 21990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_79xf/laptop_acer_aspire_7_a715_59g_79xf_01.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_79xf/laptop_acer_aspire_7_a715_59g_79xf_02.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_79xf/laptop_acer_aspire_7_a715_59g_79xf_03.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_79xf/laptop_acer_aspire_7_a715_59g_79xf_04.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_79xf/laptop_acer_aspire_7_a715_59g_79xf_05.jpg",
//       "/product_image/laptopgaming/laptop_acer_aspire_7_a715_59g_79xf/laptop_acer_aspire_7_a715_59g_79xf_06.jpg",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i7-12650H",
//       ram: "16GB DDR4 3200MHz",
//       storage: "1TB SSD PCIe NVMe",
//       screen: "15.6 inch FHD IPS 144Hz",
//       gpu: "NVIDIA GeForce RTX 3060 6GB",
//     },
//     shortDesc: "Vị vua của dòng Aspire 7 Gaming, sức mạnh hủy diệt từ Card đồ họa RTX 3060 6GB.",
//     description: `
//       <h3>Bứt phá giới hạn đồ họa với RTX 3060</h3>
//       <p>Là phiên bản có cấu hình mạnh nhất trong dòng Aspire 7, Acer trang bị cho chiếc máy này card đồ họa NVIDIA GeForce RTX 3060 với 6GB VRAM. Khả năng dựng hình 3D, chơi game AAA ở thiết lập đồ họa cao nhất (Ultra) và kích hoạt công nghệ dò tia (Ray Tracing) đều được xử lý mượt mà và chân thực gấp nhiều lần so với dòng card 3050.</p>
      
//       <h3>Ngoại hình "Suit & Tie", nội tâm "Quái thú"</h3>
//       <p>Vẫn duy trì triết lý thiết kế mỏng gọn và thanh lịch như một quý ông mặc vest, không ai có thể ngờ chiếc máy mỏng nhẹ này lại chứa đựng khả năng xử lý đồ họa khủng khiếp đến vậy. Màn hình 144Hz mượt mà cùng tản nhiệt cải tiến giúp bạn luôn tự tin chinh chiến mọi lúc mọi nơi.</p>
//     `,
//     cardSpecs: [
//       { label: "VGA", value: "GeForce RTX 3060 6GB" },
//       { label: "CPU", value: "Intel Core i7-12650H" },
//       { label: "RAM / ROM", value: "16GB RAM / 1TB SSD" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-12650H (10 Nhân / 16 Luồng, Up to 4.7GHz, 24MB)" },
//       { label: "RAM", value: "16GB DDR4 3200MHz" },
//       { label: "Ổ cứng", value: "1TB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 3060 6GB GDDR6" },
//       { label: "Trọng lượng", value: "2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM007",
//     slug: "laptop-acer-nitro-16-anv16-41",
//     name: "Laptop Acer Nitro 16 Phoenix ANV16 41 R5 7535HS",
//     category: "laptopgaming",
//     price: 29990000, 
//     salePrice: 24490000, 
//     stock: 5,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_nitro_16_anv16_41/laptop_acer_nitro_16_anv16_41_01.jpg",
//       "/product_image/laptopgaming/laptop_acer_nitro_16_anv16_41/laptop_acer_nitro_16_anv16_41_02.webp",
//       "/product_image/laptopgaming/laptop_acer_nitro_16_anv16_41/laptop_acer_nitro_16_anv16_41_03.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_16_anv16_41/laptop_acer_nitro_16_anv16_41_04.webp",
//       "/product_image/laptopgaming/laptop_acer_nitro_16_anv16_41/laptop_acer_nitro_16_anv16_41_05.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "AMD Ryzen 5 7535HS", 
//       ram: "16GB DDR5 4800MHz", 
//       storage: "512GB SSD PCIe Gen4", 
//       screen: "16 inch WUXGA IPS 165Hz", 
//       gpu: "NVIDIA GeForce RTX 4050 6GB"
//     },
//     shortDesc: "Thế hệ Nitro 16 Phoenix lột xác thiết kế, tản nhiệt kim loại lỏng cực mát, RTX 4050 chiến game đỉnh.",
//     description: `
//       <h3>Diện mạo Phoenix - Tái sinh từ đống tro tàn</h3>
//       <p>Acer Nitro 16 Phoenix đánh dấu sự lột xác về mặt thiết kế so với thế hệ trước. Logo Predator sắc lẹm ở mặt A kết hợp các đường vát góc cạnh phía sau hốc tản nhiệt tạo nên vẻ ngoài đậm chất cơ khí và cực kỳ hầm hố. Hệ thống phím LED RGB 4 vùng giúp bạn tỏa sáng trong mọi trận chiến đêm khuya.</p>
      
//       <h3>Tản nhiệt Kim loại lỏng (Liquid Metal)</h3>
//       <p>Điểm làm nên thương hiệu của dòng Nitro Phoenix là việc ứng dụng tản nhiệt kim loại lỏng trực tiếp trên bề mặt CPU. Công nghệ này giúp truyền dẫn nhiệt tốt hơn gấp nhiều lần so với keo tản nhiệt truyền thống, kết hợp cùng 2 quạt làm mát và 5 ống đồng, giúp CPU AMD Ryzen 5 và Card RTX 4050 luôn bung xõa 100% công suất mà không bị quá nhiệt.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "16 inch WUXGA 165Hz (100% sRGB)" },
//       { label: "VGA", value: "GeForce RTX 4050 6GB" },
//       { label: "Tản nhiệt", value: "Quạt kép & Keo Kim loại lỏng" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "AMD Ryzen 5 7535HS (6 Nhân / 12 Luồng, Up to 4.55GHz)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz (Có thể nâng cấp lên 32GB)" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.0 inch WUXGA (1920x1200) 16:10, IPS, 165Hz, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Bàn phím", value: "Bàn phím Fullsize, LED RGB 4 Vùng" },
//       { label: "Trọng lượng", value: "2.6 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM008",
//     slug: "laptop-acer-nitro-anv15-52-72bm",
//     name: "Laptop Acer Nitro ANV15 52 72BM",
//     category: "laptopgaming",
//     price: 23990000,
//     salePrice: 20990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_nitro_anv15_52_72bm/laptop_acer_nitro_anv15_52_72bm_01.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_anv15_52_72bm/laptop_acer_nitro_anv15_52_72bm_02.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_anv15_52_72bm/laptop_acer_nitro_anv15_52_72bm_03.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_anv15_52_72bm/laptop_acer_nitro_anv15_52_72bm_04.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i7-13620H",
//       ram: "16GB DDR5 4800MHz",
//       storage: "512GB SSD PCIe NVMe",
//       screen: "15.6 inch FHD IPS 144Hz",
//       gpu: "NVIDIA GeForce RTX 4050 6GB",
//     },
//     shortDesc: "Acer Nitro V 15 với hoạ tiết xéo mạnh mẽ mặt A, card RTX 4050 chuẩn công nghệ DLSS 3.",
//     description: `
//       <h3>Card đồ họa RTX 40-Series kiến trúc Ada Lovelace</h3>
//       <p>Acer Nitro V 15 là sự chuyển giao sức mạnh thế hệ mới. Được trang bị Card đồ họa NVIDIA GeForce RTX 4050 6GB mang trong mình kiến trúc Ada Lovelace hiệu quả cao. Công nghệ DLSS 3 tiên tiến (chèn khung hình bằng AI) giúp tăng gấp đôi lượng FPS trong các tựa game sát phần cứng, cho trải nghiệm cực kỳ mượt mà.</p>
      
//       <h3>Phần mềm NitroSense quản lý toàn diện</h3>
//       <p>Ngay trên bàn phím là phím tắt gọi phần mềm NitroSense độc quyền của Acer. Thông qua phần mềm này, bạn có thể xem tức thì tình trạng nhiệt độ, tài nguyên CPU/GPU và thay đổi các chế độ quạt (Quiet, Default, Performance, Turbo) chỉ bằng một cú click chuột đơn giản.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-13620H" },
//       { label: "VGA", value: "GeForce RTX 4050 6GB" },
//       { label: "Bàn phím", value: "Đèn nền LED Trắng + Phím NitroSense" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-13620H (10 Nhân / 16 Luồng, Up to 4.9GHz, 24MB Cache)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Âm thanh", value: "Công nghệ DTS:X Ultra" },
//       { label: "Trọng lượng", value: "2.11 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM009",
//     slug: "laptop-acer-nitro-anv16s-61-r0b8",
//     name: "Laptop Acer Nitro ANV16S 61 R0B8",
//     category: "laptopgaming",
//     price: 26990000,
//     salePrice: 23990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_nitro_anv16s_61_r0b8/laptop_acer_nitro_anv16s_61_r0b8_01.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_anv16s_61_r0b8/laptop_acer_nitro_anv16s_61_r0b8_02.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_anv16s_61_r0b8/laptop_acer_nitro_anv16s_61_r0b8_03.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_anv16s_61_r0b8/laptop_acer_nitro_anv16s_61_r0b8_04.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_anv16s_61_r0b8/laptop_acer_nitro_anv16s_61_r0b8_05.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_anv16s_61_r0b8/laptop_acer_nitro_anv16s_61_r0b8_06.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "AMD Ryzen 7 8845HS",
//       ram: "16GB DDR5 5600MHz",
//       storage: "1TB SSD PCIe NVMe",
//       screen: "16 inch WUXGA IPS 165Hz",
//       gpu: "NVIDIA GeForce RTX 4050 6GB",
//     },
//     shortDesc: "Cấu hình AMD Ryzen 8000 series tích hợp AI xuất chúng, màn hình 16 inch tần số quét 165Hz.",
//     description: `
//       <h3>Kỉ nguyên AI trên Laptop Gaming</h3>
//       <p>Mẫu Acer Nitro V 16S trang bị trái tim là bộ vi xử lý AMD Ryzen 7 8845HS hoàn toàn mới. Con chip này chứa nhân xử lý Ryzen AI (NPU) hỗ trợ cực mạnh cho tính năng PurifiedView (làm mờ phông nền webcam) và PurifiedVoice (chống ồn bằng AI), giúp quá trình gọi Discord khi chơi game hoặc live-stream mượt mà và chuyên nghiệp hơn bao giờ hết.</p>
      
//       <h3>Không gian hiển thị 16 inch 165Hz sắc nét</h3>
//       <p>Bước vào thế giới trò chơi rộng lớn với màn hình 16 inch tỷ lệ 16:10. Tần số quét được đẩy lên 165Hz kết hợp thời gian phản hồi 3ms (Overdrive) đảm bảo hình ảnh cực kỳ trơn tru. Bộ nhớ khổng lồ SSD 1TB và RAM DDR5 bus 5600MHz siêu nhanh không để bạn phải chờ đợi bất kỳ điều gì.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 8845HS (Có Ryzen AI)" },
//       { label: "Màn hình", value: "16 inch WUXGA 165Hz 100% sRGB" },
//       { label: "RAM / ROM", value: "16GB DDR5 5600 / 1TB SSD" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 8845HS (8 Nhân / 16 Luồng, Up to 5.1GHz, NPU Tích hợp)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "1TB PCIe NVMe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.0 inch WUXGA (1920x1200) 16:10, IPS, 165Hz, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Tính năng", value: "Phím Copilot, NitroSense" },
//       { label: "Trọng lượng", value: "2.5 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM010",
//     slug: "laptop-acer-nitro-lite-16-nl16-71g-56wq",
//     name: "Laptop Acer Nitro Lite 16 NL16 71G 56WQ",
//     category: "laptopgaming",
//     price: 22990000,
//     salePrice: 19990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_nitro_lite_16_nl16_71g_56wq/laptop_acer_nitro_lite_16_nl16_71g_56wq_01.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_lite_16_nl16_71g_56wq/laptop_acer_nitro_lite_16_nl16_71g_56wq_02.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_lite_16_nl16_71g_56wq/laptop_acer_nitro_lite_16_nl16_71g_56wq_03.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_lite_16_nl16_71g_56wq/laptop_acer_nitro_lite_16_nl16_71g_56wq_04.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_lite_16_nl16_71g_56wq/laptop_acer_nitro_lite_16_nl16_71g_56wq_05.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_lite_16_nl16_71g_56wq/laptop_acer_nitro_lite_16_nl16_71g_56wq_06.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i5-13420H",
//       ram: "16GB DDR5 5600MHz",
//       storage: "512GB SSD PCIe NVMe",
//       screen: "16 inch WUXGA IPS 165Hz",
//       gpu: "NVIDIA GeForce RTX 4050 6GB",
//     },
//     shortDesc: "Laptop Gaming màn hình lớn 16 inch nhưng có thiết kế tối giản, tối ưu cho phân khúc phổ thông.",
//     description: `
//       <h3>Dòng máy Lite đa năng và tiết kiệm</h3>
//       <p>Acer Nitro Lite 16 được sinh ra để cân bằng giữa cấu hình gaming mạnh mẽ và một vẻ ngoài tối giản để phù hợp môi trường học tập, công sở. Không còn những dải LED RGB hầm hố hay hốc tản nhiệt cắt xẻ sâu, máy vẫn sở hữu cấu hình i5-13420H và RTX 4050 cực mạnh nhưng trong một lớp vỏ thanh lịch, tiết kiệm chi phí.</p>
      
//       <h3>Nâng cấp màn hình 16 inch cực đẹp</h3>
//       <p>Điểm giá trị nhất trên mẫu Lite này chính là chiếc màn hình lớn 16 inch tỷ lệ 16:10 thời thượng. Màn hình hỗ trợ tần số quét 165Hz, độ phủ màu chuẩn 100% sRGB. Đây là lợi thế cực lớn so với các đối thủ cùng tầm giá chỉ có màn hình 144Hz và 65% sRGB, đem lại chất lượng hình ảnh sắc nét khi cày phim và làm thiết kế 2D.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "16 inch WUXGA 165Hz (100% sRGB)" },
//       { label: "VGA", value: "GeForce RTX 4050 6GB" },
//       { label: "Phân khúc", value: "Gaming Phổ thông / Học tập" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-13420H (8 Nhân / 12 Luồng, Up to 4.6GHz)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "16.0 inch WUXGA (1920x1200), IPS, 165Hz, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Bàn phím", value: "Đèn nền LED đơn sắc" },
//       { label: "Trọng lượng", value: "Xấp xỉ 2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM011",
//     slug: "laptop-acer-nitro-v-15-anv15-41-r0y4",
//     name: "Laptop Acer Nitro V 15 ANV15 41 R0Y4",
//     category: "laptopgaming",
//     price: 24990000, 
//     salePrice: 21990000, 
//     stock: 8,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r0y4/laptop_acer_nitro_v_15_anv15_41_r0y4_01.jpg",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r0y4/laptop_acer_nitro_v_15_anv15_41_r0y4_02.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r0y4/laptop_acer_nitro_v_15_anv15_41_r0y4_03.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r0y4/laptop_acer_nitro_v_15_anv15_41_r0y4_04.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r0y4/laptop_acer_nitro_v_15_anv15_41_r0y4_05.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r0y4/laptop_acer_nitro_v_15_anv15_41_r0y4_06.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "AMD Ryzen 7 7735HS", 
//       ram: "8GB DDR5 5200MHz", 
//       storage: "512GB SSD PCIe NVMe", 
//       screen: "15.6 inch FHD IPS 144Hz", 
//       gpu: "NVIDIA GeForce RTX 4050 6GB"
//     },
//     shortDesc: "Laptop Nitro V 15 mang sức mạnh của chip AMD Ryzen 7 7735HS cực mát mẻ và tối ưu.",
//     description: `
//       <h3>Giải pháp làm mát từ nền tảng AMD</h3>
//       <p>Acer Nitro V 15 phiên bản ANV15-41 được trang bị vi xử lý AMD Ryzen 7 7735HS. Nền tảng chip Ryzen luôn nổi tiếng với khả năng tiêu thụ điện năng cực thấp và nhiệt độ hoạt động mát mẻ. Kết hợp cùng thiết kế tản nhiệt quạt kép của dòng Nitro, máy đảm bảo không bị sụt giảm khung hình trong suốt những trận đấu kéo dài hàng giờ liền.</p>
      
//       <h3>Cấu hình dễ tiếp cận, nâng cấp mở rộng</h3>
//       <p>Với mức giá hợp lý, máy được trang bị sẵn 8GB RAM DDR5 bus 5200MHz tốc độ cao. Dĩ nhiên, Acer không quên thiết kế thêm khe cắm RAM thứ 2 giúp các game thủ dễ dàng nâng cấp lên thành 16GB hoặc 32GB Dual Channel trong tương lai, đáp ứng yêu cầu bộ nhớ ngày càng cao của các tựa game hiện đại.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 7735HS" },
//       { label: "VGA", value: "GeForce RTX 4050 6GB" },
//       { label: "Khả năng nâng cấp", value: "2 Khe RAM, 2 Khe M.2 SSD" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 7735HS (8 Nhân / 16 Luồng, Up to 4.75GHz, 16MB Cache)" },
//       { label: "RAM", value: "8GB DDR5 5200MHz (1 Khe rời, hỗ trợ max 32GB)" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe SSD (Trống 1 khe cắm M.2)" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Bàn phím", value: "Đèn nền LED Trắng" },
//       { label: "Trọng lượng", value: "2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM012",
//     slug: "laptop-acer-nitro-v-15-anv15-41-r9m1",
//     name: "Laptop Acer Nitro V 15 ANV15 41 R9M1",
//     category: "laptopgaming",
//     price: 21990000,
//     salePrice: 18990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r9m1/laptop_acer_nitro_v_15_anv15_41_r9m1_01.jpg",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r9m1/laptop_acer_nitro_v_15_anv15_41_r9m1_02.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r9m1/laptop_acer_nitro_v_15_anv15_41_r9m1_03.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r9m1/laptop_acer_nitro_v_15_anv15_41_r9m1_04.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r9m1/laptop_acer_nitro_v_15_anv15_41_r9m1_05.png",
//       "/product_image/laptopgaming/laptop_acer_nitro_v_15_anv15_41_r9m1/laptop_acer_nitro_v_15_anv15_41_r9m1_06.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "AMD Ryzen 7 8845HS",
//       ram: "16GB DDR5 5600MHz",
//       storage: "512GB SSD PCIe NVMe",
//       screen: "15.6 inch FHD IPS 144Hz",
//       gpu: "NVIDIA GeForce RTX 4050 6GB",
//     },
//     shortDesc: "Bản nâng cấp toàn diện của dòng Nitro V 15 với chip AMD Ryzen 8000 series có AI.",
//     description: `
//       <h3>Sức mạnh từ tương lai với Ryzen 8000 Series</h3>
//       <p>Là phiên bản cấu hình cực hot của năm, máy sử dụng trái tim là con chip AMD Ryzen 7 8845HS thế hệ mới nhất. So với thế hệ 7000 series, nó được tăng cường đáng kể xung nhịp và tích hợp bộ xử lý AI chuyên dụng (NPU), giúp việc chạy các thuật toán trí tuệ nhân tạo mượt mà và thông minh hơn.</p>
      
//       <h3>RAM 16GB chuẩn 5600MHz siêu nhanh</h3>
//       <p>Trang bị sẵn RAM 16GB DDR5 với mức xung nhịp cao nhất trên laptop hiện nay (5600MHz), băng thông hệ thống được mở rộng cực đại. Điều này giúp card đồ họa RTX 4050 giao tiếp dữ liệu với CPU nhanh hơn, mang đến trải nghiệm chiến game và render video không gặp bất cứ trở ngại nào.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 8845HS (Có NPU AI)" },
//       { label: "RAM / ROM", value: "16GB DDR5 5600 / 512GB SSD" },
//       { label: "VGA", value: "GeForce RTX 4050 6GB" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 8845HS (8 Nhân / 16 Luồng, Up to 5.1GHz)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Kết nối mạng", value: "Wi-Fi 6E, Gigabit Ethernet" },
//       { label: "Trọng lượng", value: "2.1 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM013",
//     slug: "laptop-acer-predator-helios-16-ai-ph16-73-93hd",
//     name: "Laptop Acer Predator Helios 16 AI PH16 73 93HD",
//     category: "laptopgaming",
//     price: 45990000,
//     salePrice: 42990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_93hd/laptop_acer_predator_helios_16_ai_ph16_73_93hd_01.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_93hd/laptop_acer_predator_helios_16_ai_ph16_73_93hd_02.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_93hd/laptop_acer_predator_helios_16_ai_ph16_73_93hd_03.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_93hd/laptop_acer_predator_helios_16_ai_ph16_73_93hd_04.jpg",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core Ultra 9 185H",
//       ram: "32GB DDR5 5600MHz",
//       storage: "1TB SSD PCIe NVMe",
//       screen: "16 inch WQXGA IPS 240Hz",
//       gpu: "NVIDIA GeForce RTX 4070 8GB",
//     },
//     shortDesc: "Quái vật phân khúc cao cấp (High-end) với RTX 4070, quạt tản nhiệt AeroBlade 3D thế hệ 5.",
//     description: `
//       <h3>Sức mạnh không thỏa hiệp từ Core Ultra 9</h3>
//       <p>Là biểu tượng quyền lực của dòng Acer Gaming, Predator Helios 16 AI sở hữu cấu hình mạnh mẽ khủng khiếp. Vi xử lý Intel Core Ultra 9 185H mới nhất kết hợp 32GB RAM cùng Card đồ họa NVIDIA GeForce RTX 4070 8GB biến cỗ máy này thành một Studio thu nhỏ, sẵn sàng càn quét mọi tựa game AAA ở độ phân giải 2K Max Settings và xử lý mượt mà đồ họa 3D kiến trúc.</p>
      
//       <h3>Tản nhiệt vô đối AeroBlade 3D</h3>
//       <p>Để giữ cho sức mạnh khủng khiếp đó luôn mát mẻ, máy được trang bị 2 quạt làm mát AeroBlade 3D thế hệ thứ 5 (độc quyền bằng kim loại) siêu mỏng, lớp keo tản nhiệt Kim Loại Lỏng (Liquid Metal) chuyên dụng và các ống đồng vector dẫn nhiệt cực nhanh. Bàn phím có đèn LED RGB từng phím (Per-key RGB) rực rỡ, cá nhân hóa đến từng chi tiết.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core Ultra 9 185H" },
//       { label: "VGA", value: "GeForce RTX 4070 8GB" },
//       { label: "Màn hình", value: "16 inch WQXGA 240Hz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core Ultra 9 185H (16 Nhân / 22 Luồng, Up to 5.1GHz, NPU Tích hợp)" },
//       { label: "RAM", value: "32GB (2x16GB) DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "1TB PCIe NVMe Gen 4 SSD (Hỗ trợ chạy RAID 0)" },
//       { label: "Màn hình", value: "16.0 inch WQXGA (2560x1600) 16:10, IPS, 240Hz, DCI-P3 100%, 500nits" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4070 8GB GDDR6 (MGP cực cao)" },
//       { label: "Bàn phím", value: "LED RGB Per-Key (Chỉnh màu từng phím) với MagKey 3.0" },
//       { label: "Trọng lượng", value: "2.65 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM014",
//     slug: "laptop-acer-predator-helios-16-ai-ph16-73-950c",
//     name: "Laptop Acer Predator Helios 16 AI PH16 73 950C",
//     category: "laptopgaming",
//     price: 49990000,
//     salePrice: 46990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_950c/laptop_acer_predator_helios_16_ai_ph16_73_950c_01.jpg",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_950c/laptop_acer_predator_helios_16_ai_ph16_73_950c_02.jpg",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_950c/laptop_acer_predator_helios_16_ai_ph16_73_950c_03.jpg",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_950c/laptop_acer_predator_helios_16_ai_ph16_73_950c_04.jpg",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_950c/laptop_acer_predator_helios_16_ai_ph16_73_950c_05.jpg",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_ai_ph16_73_950c/laptop_acer_predator_helios_16_ai_ph16_73_950c_06.jpg",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core Ultra 9 185H",
//       ram: "32GB DDR5 5600MHz",
//       storage: "1TB SSD PCIe NVMe",
//       screen: "16 inch WQXGA Mini LED 240Hz",
//       gpu: "NVIDIA GeForce RTX 4080 12GB",
//     },
//     shortDesc: "Vị vua đồ họa với RTX 4080 12GB VRAM, màn hình sử dụng tấm nền Mini LED đột phá độ sáng.",
//     description: `
//       <h3>Card màn hình cao cấp nhất RTX 4080</h3>
//       <p>Nâng cấp vượt bậc so với các phiên bản khác, Predator Helios 16 AI 950C trang bị vũ khí hạng nặng NVIDIA GeForce RTX 4080 với 12GB VRAM chuẩn GDDR6. Card màn hình này không chỉ dư sức cân mượt các tựa game độ phân giải 4K mà còn là cỗ máy kiếm tiền đích thực cho dân thiết kế 3D, dựng phim và làm trí tuệ nhân tạo (AI Machine Learning).</p>
      
//       <h3>Hiển thị điện ảnh với tấm nền Mini LED</h3>
//       <p>Bước đột phá khổng lồ về mặt hiển thị: Máy được trang bị tấm nền Mini LED vô cùng đắt đỏ. Công nghệ này sử dụng hàng ngàn bóng LED siêu nhỏ làm đèn nền, tạo ra độ sáng đỉnh lên tới 1000 nits (chuẩn HDR1000), cung cấp màu đen sâu tuyệt đối như màn hình OLED nhưng hoàn toàn loại bỏ được hiện tượng lưu ảnh (Burn-in), tần số quét cực khủng 240Hz mang lại sự mượt mà không đối thủ.</p>
//     `,
//     cardSpecs: [
//       { label: "VGA", value: "GeForce RTX 4080 12GB" },
//       { label: "Màn hình", value: "16 inch WQXGA Mini LED 240Hz" },
//       { label: "CPU", value: "Intel Core Ultra 9 185H" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core Ultra 9 185H (16 Nhân / 22 Luồng, Up to 5.1GHz)" },
//       { label: "RAM", value: "32GB (2x16GB) DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "1TB PCIe NVMe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.0 inch WQXGA (2560x1600), Mini LED, 240Hz, DCI-P3 100%, DisplayHDR 1000" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4080 12GB GDDR6" },
//       { label: "Công nghệ Tản nhiệt", value: "AeroBlade 3D Fan thế hệ 5 + Liquid Metal" },
//       { label: "Trọng lượng", value: "2.65 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM015",
//     slug: "laptop-acer-predator-helios-neo-16-phn16-71",
//     name: "Laptop Acer Predator Helios Neo 16 PHN16 71 59F1",
//     category: "laptopgaming",
//     price: 39990000, 
//     salePrice: 32990000, 
//     stock: 3,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_phn16_73/laptop_acer_predator_helios_16_phn16_73_01.webp",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_phn16_73/laptop_acer_predator_helios_16_phn16_73_02.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_phn16_73/laptop_acer_predator_helios_16_phn16_73_03.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_phn16_73/laptop_acer_predator_helios_16_phn16_73_04.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_phn16_73/laptop_acer_predator_helios_16_phn16_73_05.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_16_phn16_73/laptop_acer_predator_helios_16_phn16_73_06.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i5-13500HX", 
//       ram: "16GB DDR5 4800MHz", 
//       storage: "512GB SSD PCIe NVMe Gen4", 
//       screen: "16 inch WQXGA (2560 x 1600) IPS 165Hz 100% sRGB", 
//       gpu: "NVIDIA GeForce RTX 4050 6GB"
//     },
//     shortDesc: "Dòng Helios Neo tiếp cận mức giá tốt, bộ mã hóa bí ẩn khắc laser sau nắp máy cực ngầu.",
//     description: `
//       <h3>Thiết kế Neo - Giải mã bí ẩn Predator</h3>
//       <p>Predator Helios Neo 16 mang một diện mạo vô cùng độc đáo. Mặt A của máy được khắc laser laser tinh xảo hàng loạt các dãy số và mật mã, tạo ra một trò chơi giải mã cực kỳ thú vị dành riêng cho các "Predator-fan". Hệ thống tản nhiệt phía sau được làm lớn, nổi bật tạo nên dáng vẻ hầm hố của một cỗ máy chơi game thực thụ.</p>
      
//       <h3>Cấu hình khủng trong phân khúc</h3>
//       <p>Phiên bản Neo này đem đến hiệu năng vượt xa mong đợi với vi xử lý Intel Core i5-13500HX dòng HX (dòng CPU hiệu năng mạnh nhất của Intel trên Laptop) và Card đồ họa RTX 4050 6GB chạy ở mức công suất điện tối đa. Màn hình WQXGA (2K+) 165Hz cực kỳ sắc nét mang lại hình ảnh rực rỡ và tốc độ phản hồi nhanh nhẹn.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i5-13500HX (Dòng hiệu năng tối đa)" },
//       { label: "Màn hình", value: "16 inch WQXGA (2K+) 165Hz" },
//       { label: "Thiết kế", value: "Khắc laser mật mã Neo" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-13500HX (14 Nhân / 20 Luồng, Up to 4.7GHz, 24MB Cache)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz (2 Khe, Max 32GB)" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.0 inch WQXGA (2560x1600) 16:10, IPS, 165Hz, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Tản nhiệt", value: "Quạt kép AeroBlade 3D + Keo tản nhiệt Kim Loại Lỏng" },
//       { label: "Trọng lượng", value: "2.6 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM016",
//     slug: "laptop-acer-predator-helios-18-ph18-73-98aq",
//     name: "Laptop Acer Predator Helios 18 PH18 73 98AQ",
//     category: "laptopgaming",
//     price: 104990000,
//     salePrice: 99990000,
//     stock: 5,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_predator_helios_18_ph18_73_98aq/laptop_acer_predator_helios_18_ph18_73_98aq_01.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_18_ph18_73_98aq/laptop_acer_predator_helios_18_ph18_73_98aq_02.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_18_ph18_73_98aq/laptop_acer_predator_helios_18_ph18_73_98aq_03.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_18_ph18_73_98aq/laptop_acer_predator_helios_18_ph18_73_98aq_04.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i9-14900HX",
//       ram: "32GB DDR5",
//       storage: "2TB SSD",
//       screen: "18 inch WQXGA 250Hz Mini LED",
//     },
//     shortDesc: "Vị hoàng đế của thế giới Laptop Gaming, màn hình khổng lồ 18 inch Mini LED 250Hz.",
//     description: `
//       <h3>Rạp chiếu phim di động khổng lồ</h3>
//       <p>Acer Predator Helios 18 thay thế hoàn toàn định nghĩa về Desktop Replacement (Thay thế máy bàn). Nó sở hữu một màn hình siêu khổng lồ lên tới 18 inch, mang lại cảm giác đắm chìm chưa từng có. Tấm nền Mini LED đắt giá đẩy tần số quét lên mức 250Hz và độ sáng vượt mức 1000 nits, biến việc giải trí trên laptop trở thành một trải nghiệm thị giác ngoạn mục.</p>
      
//       <h3>Cấu hình chạm đỉnh công nghệ</h3>
//       <p>Mọi linh kiện bên trong chiếc máy này đều là những thứ mạnh mẽ và tối tân nhất hiện tại. Vi xử lý Core i9-14900HX (24 lõi) phối hợp cùng card đồ họa RTX 4080 (hoặc 4090 tùy cấu hình), RAM 32GB tốc độ cao và ổ lưu trữ lên tới 2TB. Bàn phím tích hợp các switch MagKey 3.0 độc quyền của Acer cho cảm giác nhấn cơ học vô cùng chân thực. Đây là cỗ máy mà mọi game thủ đều khao khát sở hữu.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "18 inch WQXGA Mini LED 250Hz" },
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Lõi)" },
//       { label: "Bàn phím", value: "MagKey 3.0 (Switch cơ học)" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Nhân / 32 Luồng, Up to 5.8GHz, 36MB Cache)" },
//       { label: "RAM", value: "32GB (2x16GB) DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "2TB PCIe NVMe Gen 4 SSD (Hỗ trợ RAID 0)" },
//       { label: "Màn hình", value: "18.0 inch WQXGA (2560x1600) 16:10, Mini LED, 250Hz, DCI-P3 100%, HDR 1000" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4080 12GB GDDR6 (Max TGP)" },
//       { label: "Bàn phím", value: "Per-key RGB với bộ WASD MagKey 3.0 thay thế được" },
//       { label: "Trọng lượng", value: "3.25 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   {
//     id: "LGM017",
//     slug: "laptop-acer-predator-helios-neo-16s-phn16s-71",
//     name: "Laptop Acer Predator Helios Neo 16S PHN16S 71",
//     category: "laptopgaming",
//     price: 42990000,
//     salePrice: 38490000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_acer_predator_helios_neo_16s_phn16s_71/laptop_acer_predator_helios_neo_16s_phn16s_71_01.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_neo_16s_phn16s_71/laptop_acer_predator_helios_neo_16s_phn16s_71_02.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_neo_16s_phn16s_71/laptop_acer_predator_helios_neo_16s_phn16s_71_03.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_neo_16s_phn16s_71/laptop_acer_predator_helios_neo_16s_phn16s_71_04.png",
//       "/product_image/laptopgaming/laptop_acer_predator_helios_neo_16s_phn16s_71/laptop_acer_predator_helios_neo_16s_phn16s_71_05.png",
//     ],
//     specs: {
//       brand: "Acer",
//       cpu: "Intel Core i7-13700HX",
//       ram: "16GB DDR5",
//       storage: "512GB SSD",
//       screen: "16 inch WQXGA 165Hz",
//     },
//     shortDesc: "Bản nâng cấp Neo 16S trang bị chip i7-13700HX siêu mạnh, tản nhiệt được làm mới tinh tế hơn.",
//     description: `
//       <h3>Neo 16S - Mạnh mẽ từ bên trong</h3>
//       <p>Tiếp nối tinh thần thiết kế giải mã ma trận của dòng Neo, phiên bản Helios Neo 16S đưa sức mạnh xử lý lên tầm cao mới với con chip Intel Core i7-13700HX (16 Nhân / 24 Luồng). Chiếc laptop này đủ sức để "nhai nuốt" mọi đoạn code lập trình phức tạp, các mô phỏng 3D vật lý và chạy hàng loạt máy ảo cùng lúc mà vẫn đảm bảo độ ổn định.</p>
      
//       <h3>Khung hình WQXGA tuyệt đẹp</h3>
//       <p>Màn hình của máy đạt tỷ lệ chuẩn 16:10, độ phân giải 2K+ WQXGA (2560x1600) với dải màu sắc chính xác 100% sRGB. Kết hợp cùng tần số quét 165Hz và công nghệ chống xé hình G-Sync, nó mang đến không gian rộng mở và trọn vẹn cho cả dân thiết kế đồ họa lẫn game thủ hard-core.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-13700HX (16 Lõi)" },
//       { label: "VGA", value: "NVIDIA GeForce RTX 40-Series" },
//       { label: "Màn hình", value: "16 inch 2K+ 165Hz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-13700HX (16 Nhân / 24 Luồng, Up to 5.0GHz, 30MB Cache)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.0 inch WQXGA (2560x1600) 16:10, IPS, 165Hz, 100% sRGB, G-Sync" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6 (Hoặc tùy biến RTX 4050)" },
//       { label: "Bàn phím", value: "LED RGB 4 Vùng" },
//       { label: "Trọng lượng", value: "2.6 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng (Bảo hành VIP 3S1)" },
//     ],
//   },

//   //============================ASUS ROG===========================
//   {
//     id: "LGM018",
//     slug: "laptop-asus-rog-strix-g16-g615jhr-s5069w",
//     name: "Laptop ASUS ROG Strix G16 G615JHR-S5069W",
//     category: "laptopgaming",
//     price: 43990000,
//     salePrice: 39990000,
//     stock: 7,
//     images: [
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615jhr_s5069w/laptop_asus_rog_strix_g16_g615jhr_s5069w_01.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615jhr_s5069w/laptop_asus_rog_strix_g16_g615jhr_s5069w_02.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615jhr_s5069w/laptop_asus_rog_strix_g16_g615jhr_s5069w_03.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615jhr_s5069w/laptop_asus_rog_strix_g16_g615jhr_s5069w_04.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615jhr_s5069w/laptop_asus_rog_strix_g16_g615jhr_s5069w_05.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615jhr_s5069w/laptop_asus_rog_strix_g16_g615jhr_s5069w_06.png",
//     ],
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core i7-13650HX",
//       ram: "16GB DDR5",
//       storage: "512GB SSD",
//       screen: "16 inch FHD+ 165Hz",
//     },
//     shortDesc: "Vũ khí thể thao điện tử ASUS ROG Strix G16, tản nhiệt Tri-Fan với rãnh thoát nhiệt bao quanh.",
//     description: `
//       <h3>Tản nhiệt thông minh Tri-Fan (3 Quạt)</h3>
//       <p>ASUS ROG Strix G16 cách mạng hóa hệ thống làm mát bằng việc sử dụng hệ thống Tri-Fan (3 quạt tản nhiệt) kết hợp cùng thiết kế các rãnh thoát nhiệt thông minh bao quanh toàn bộ khu vực mặt sau máy (Full-width Heatsink). Đi kèm là lớp keo tản nhiệt Kim loại lỏng Conductonaut Extreme từ Thermal Grizzly, đảm bảo CPU i7 dòng HX và GPU luôn giữ được mức xung nhịp tối đa trong các giải đấu kéo dài.</p>
      
//       <h3>Ngoại hình Cyberpunk cực chất</h3>
//       <p>Mang phong cách thiết kế Cyberpunk đường phố, mặt lưng máy được tạo điểm nhấn bằng họa tiết pixel sắc sảo và Logo ROG phát sáng. Dải LED RGB gầm máy Aura Sync bao quanh khung viền phía trước tạo nên những vệt sáng huyền ảo, biến chiếc laptop của bạn trở thành trung tâm của mọi sự chú ý.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-13650HX" },
//       { label: "Tản nhiệt", value: "Tri-Fan & Kim loại lỏng" },
//       { label: "Màn hình", value: "16 inch FHD+ 165Hz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-13650HX (14 Nhân / 20 Luồng, Up to 4.9GHz, 24MB Cache)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.0 inch FHD+ (1920x1200) 16:10, 165Hz, G-Sync, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6 (ROG Boost)" },
//       { label: "Bàn phím", value: "Bàn phím eSports 4 Vùng RGB, có dải LED gầm" },
//       { label: "Trọng lượng", value: "2.5 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM019",
//     slug: "laptop-asus-rog-strix-g16-g615lr-s5238w",
//     name: "Laptop ASUS ROG Strix G16 G615LR-S5238W",
//     category: "laptopgaming",
//     price: 36990000,
//     salePrice: 34490000,
//     stock: 5,
//     images: [
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615lr_s5238w/laptop_asus_rog_strix_g16_g615lr_s5238w_01.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615lr_s5238w/laptop_asus_rog_strix_g16_g615lr_s5238w_02.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615lr_s5238w/laptop_asus_rog_strix_g16_g615lr_s5238w_03.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615lr_s5238w/laptop_asus_rog_strix_g16_g615lr_s5238w_04.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615lr_s5238w/laptop_asus_rog_strix_g16_g615lr_s5238w_05.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_g16_g615lr_s5238w/laptop_asus_rog_strix_g16_g615lr_s5238w_06.png",
//     ],
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core i5-13450HX",
//       ram: "16GB DDR5",
//       storage: "512GB SSD",
//       screen: "16 inch 165Hz",
//     },
//     shortDesc: "Cấu hình ROG Strix tiếp cận dễ dàng, công tắc MUX Switch thông minh gia tăng hiệu năng.",
//     description: `
//       <h3>Tối ưu khung hình với MUX Switch</h3>
//       <p>Một điểm sáng giá trên dòng ROG Strix G16 là trang bị công tắc phần cứng MUX Switch kết hợp công nghệ NVIDIA Advanced Optimus. Bằng cách định tuyến trực tiếp khung hình từ card rời xuất thẳng ra màn hình (bỏ qua card onboard), máy giúp tăng FPS lên từ 10-15% trong game và giảm đáng kể độ trễ tín hiệu.</p>
      
//       <h3>Âm thanh Studio đắm chìm</h3>
//       <p>Không chỉ tập trung vào hình ảnh, ROG Strix G16 mang đến chất âm điện ảnh với hệ thống loa được hỗ trợ bởi công nghệ Dolby Atmos. Khả năng chống ồn AI hai chiều thông minh giúp khử sạch tiếng gõ phím và tiếng ồn môi trường xung quanh, giúp cuộc trò chuyện chiến thuật với đồng đội trở nên rõ ràng tuyệt đối.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i5-13450HX" },
//       { label: "Công nghệ", value: "MUX Switch + Advanced Optimus" },
//       { label: "Màn hình", value: "16 inch 165Hz G-Sync" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-13450HX (10 Nhân / 16 Luồng, Up to 4.6GHz, 20MB Cache)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.0 inch FHD+ (1920x1200) 16:10, 165Hz, G-Sync" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6 (ROG Boost)" },
//       { label: "Bàn phím", value: "LED RGB Aura Sync 4 Vùng" },
//       { label: "Trọng lượng", value: "2.5 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM020",
//     slug: "laptop-asus-rog-strix-scar-18-g835lr",
//     name: "Laptop ASUS ROG Strix SCAR 18 G835LR",
//     category: "laptopgaming",
//     price: 110000000,
//     salePrice: 105000000,
//     stock: 3,
//     images: [
//       "/product_image/laptopgaming/laptop_asus_rog_strix_scar_18_g835lr/laptop_asus_rog_strix_scar_18_g835lr_01.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_scar_18_g835lr/laptop_asus_rog_strix_scar_18_g835lr_02.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_scar_18_g835lr/laptop_asus_rog_strix_scar_18_g835lr_03.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_scar_18_g835lr/laptop_asus_rog_strix_scar_18_g835lr_04.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_scar_18_g835lr/laptop_asus_rog_strix_scar_18_g835lr_05.png",
//       "/product_image/laptopgaming/laptop_asus_rog_strix_scar_18_g835lr/laptop_asus_rog_strix_scar_18_g835lr_06.png",
//     ],
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core i9-14900HX",
//       ram: "32GB DDR5",
//       storage: "1TB SSD",
//       screen: "18 inch 2.5K 240Hz",
//     },
//     shortDesc: "Vị vua quyền lực của dòng ROG Strix (Bản SCAR), màn hình ROG Nebula 18 inch khổng lồ.",
//     description: `
//       <h3>ROG Nebula Display - Đỉnh cao hiển thị</h3>
//       <p>ASUS ROG Strix SCAR 18 trang bị một trong những màn hình tốt nhất từng xuất hiện trên Laptop Gaming: Màn hình ROG Nebula 18 inch độ phân giải 2.5K (2560x1600). Với tần số quét 240Hz, thời gian phản hồi siêu tốc 3ms và độ phủ màu 100% DCI-P3 chuẩn điện ảnh, nó mang lại một không gian đắm chìm vô cực, xóa nhòa ranh giới giữa game và đời thực.</p>
      
//       <h3>Áo giáp trong suốt, nội công hủy diệt</h3>
//       <p>Thiết kế dòng SCAR gây ấn tượng mạnh với lớp giáp nửa trong suốt ở phần kê tay, phô bày các bảng mạch công nghệ cao bên trong. "Động cơ" của máy được kích hoạt bởi vi xử lý Intel Core i9-14900HX 24 nhân vô song cùng card màn hình RTX đỉnh cao. Bộ giáp tản nhiệt Armor Cap có thể tháo rời và tùy biến bằng máy in 3D, giúp cỗ máy này phản ánh chính xác phong cách độc tôn của người sở hữu.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "18 inch 2.5K ROG Nebula 240Hz" },
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Lõi)" },
//       { label: "Thiết kế", value: "SCAR Armor Cap cá nhân hóa" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Nhân / 32 Luồng, Up to 5.8GHz, 36MB Cache)" },
//       { label: "RAM", value: "32GB (2x16GB) DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "1TB PCIe NVMe Gen 4 SSD (Hỗ trợ RAID 0)" },
//       { label: "Màn hình", value: "18.0 inch WQXGA (2560x1600) 16:10, ROG Nebula Display, 240Hz, 3ms, 100% DCI-P3" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4080 (Hoặc 4090) 12GB/16GB GDDR6" },
//       { label: "Bàn phím", value: "LED RGB Per-Key, dải LED gầm bao quanh máy" },
//       { label: "Trọng lượng", value: "3.10 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },
//   {
//     id: "LGM021",
//     slug: "laptop-asus-rog-strix-scar-18-g835lw-sa172w",
//     name: "Laptop ASUS ROG Strix SCAR 18 G835LW-SA172W",
//     category: "laptopgaming",
//     price: 125000000,
//     salePrice: 119990000,
//     stock: 2,
//     images: Array.from({ length: 8 }, (_, i) => `/product_image/laptopgaming/laptop_asus_rog_strix_scar_18_g835lw_sa172w/laptop_asus_rog_strix_scar_18_g835lw_sa172w_0${i + 1}.png`),
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core i9-14900HX",
//       ram: "64GB DDR5",
//       storage: "2TB SSD",
//       screen: "18 inch Nebula HDR 240Hz",
//     },
//     shortDesc: "Vị vua của thế giới laptop gaming, màn hình Nebula HDR Mini LED và 64GB RAM khủng khiếp.",
//     description: `
//       <h3>Đỉnh cao của tấm nền Nebula HDR</h3>
//       <p>ASUS ROG Strix SCAR 18 phiên bản đặc biệt này sở hữu màn hình Nebula HDR sử dụng tấm nền Mini LED với hơn 1100 vùng làm mờ cục bộ. Độ sáng cực đại 1100 nits mang lại trải nghiệm HDR thực thụ, biến mọi khung hình trong game trở nên sống động như ngoài đời thực. Tần số quét 240Hz cùng thời gian phản hồi 3ms đảm bảo bạn luôn làm chủ cuộc chơi.</p>
      
//       <h3>Cấu hình không giới hạn</h3>
//       <p>Máy được trang bị bộ đôi hủy diệt: vi xử lý Intel Core i9-14900HX 24 nhân và dung lượng RAM khổng lồ 64GB DDR5. Đây là mức cấu hình cao nhất hiện nay, cho phép bạn vừa chơi game 4K, vừa livestream, vừa render video đồng thời mà hệ thống vẫn vận hành mượt mà. Hệ thống tản nhiệt bao quanh 3 quạt giúp duy trì hiệu năng đỉnh cao liên tục.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "18 inch Mini LED 2.5K 240Hz" },
//       { label: "CPU", value: "Intel Core i9-14900HX" },
//       { label: "RAM / ROM", value: "64GB RAM / 2TB SSD" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Nhân / 32 Luồng, Up to 5.8GHz)" },
//       { label: "RAM", value: "64GB (2x32GB) DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "2TB (1TB+1TB) SSD PCIe 4.0 (RAID 0)" },
//       { label: "Màn hình", value: "18.0 inch QHD+ (2560x1600), Mini LED, 240Hz, Nebula HDR" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W)" },
//       { label: "Tản nhiệt", value: "Tri-Fan Technology & Liquid Metal" },
//       { label: "Trọng lượng", value: "3.1 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM022",
//     slug: "laptop-asus-rog-zephyrus-g14-ga403wr",
//     name: "Laptop ASUS ROG Zephyrus G14 GA403WR",
//     category: "laptopgaming",
//     price: 54990000,
//     salePrice: 49990000,
//     stock: 6,
//     images: Array.from({ length: 6 }, (_, i) => `/product_image/laptopgaming/laptop_asus_rog_zephyrus_g14_ga403wr/laptop_asus_rog_zephyrus_g14_ga403wr_0${i + 1}.png`),
//     specs: {
//       brand: "ASUS",
//       cpu: "AMD Ryzen 9 8945HS",
//       ram: "32GB LPDDR5X",
//       storage: "1TB SSD",
//       screen: "14 inch 3K OLED 120Hz",
//     },
//     shortDesc: "Thiết kế nhôm nguyên khối siêu mỏng, màn hình OLED 3K, dải đèn Slash Lighting độc đáo.",
//     description: `
//       <h3>Tuyệt tác thiết kế mới 2024</h3>
//       <p>ROG Zephyrus G14 GA403WR lột xác với lớp vỏ nhôm phay CNC tinh xảo, mỏng chỉ 1.59cm. Mặt lưng được tạo điểm nhấn bởi dải đèn Slash Lighting chéo, cho phép tùy chỉnh các hiệu ứng ánh sáng cá tính. Đây là sự giao thoa hoàn hảo giữa một chiếc UltraBook sang trọng và một cỗ máy Gaming mạnh mẽ.</p>
      
//       <h3>Màn hình OLED chuẩn đồ họa</h3>
//       <p>Sở hữu màn hình 14 inch OLED độ phân giải 3K rực rỡ, hỗ trợ công nghệ G-Sync giúp loại bỏ hoàn toàn hiện tượng xé hình. Với độ chuẩn màu 100% DCI-P3 và chip AMD Ryzen 9 tích hợp NPU AI, máy là công cụ đắc lực cho những người làm sáng tạo nội dung thường xuyên phải di chuyển.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "AMD Ryzen 9 8945HS (AI NPU)" },
//       { label: "Màn hình", value: "14 inch 3K OLED 120Hz" },
//       { label: "Thiết kế", value: "Vỏ nhôm CNC, Slash Lighting" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "AMD Ryzen 9 8945HS (8 Nhân / 16 Luồng, Up to 5.2GHz)" },
//       { label: "RAM", value: "32GB LPDDR5X 6400MHz (Onboard)" },
//       { label: "Ổ cứng", value: "1TB M.2 NVMe PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "14.0 inch 3K (2880x1800) OLED, 120Hz, 0.2ms, G-Sync" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4070 8GB GDDR6" },
//       { label: "Âm thanh", value: "Hệ thống 6 loa, công nghệ Dolby Atmos" },
//       { label: "Trọng lượng", value: "1.5 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM023",
//     slug: "laptop-asus-rog-zephyrus-g16-gu605cr",
//     name: "Laptop ASUS ROG Zephyrus G16 GU605CR",
//     category: "laptopgaming",
//     price: 69990000,
//     salePrice: 65990000,
//     stock: 4,
//     images: Array.from({ length: 5 }, (_, i) => `/product_image/laptopgaming/laptop_asus_rog_zephyrus_g16_gu605cr/laptop_asus_rog_zephyrus_g16_gu605cr_0${i + 1}.png`),
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core Ultra 9 185H",
//       ram: "32GB LPDDR5X",
//       storage: "1TB SSD",
//       screen: "16 inch 2.5K OLED 240Hz",
//     },
//     shortDesc: "Màn hình lớn 16 inch OLED 240Hz, chip Intel Core Ultra 9 tích hợp AI vượt trội.",
//     description: `
//       <h3>Sự trỗi dậy của AI PC</h3>
//       <p>Zephyrus G16 2024 trang bị vi xử lý Intel Core Ultra 9 185H tích hợp nhân xử lý AI chuyên dụng (NPU). Điều này không chỉ giúp máy xử lý các tác vụ thông minh nhanh hơn mà còn tối ưu thời lượng pin ấn tượng. Thiết kế mỏng nhẹ 1.85kg cho một chiếc máy 16 inch là một thành tựu về kỹ thuật cơ khí của ASUS.</p>
      
//       <h3>Trải nghiệm thị giác không giới hạn</h3>
//       <p>Màn hình OLED 2.5K với tần số quét siêu cao 240Hz mang lại độ mượt mà tuyệt đối cho các game FPS. Tấm nền OLED cung cấp độ tương phản vô cực và màu đen sâu thẳm, biến những giờ phút xem phim 4K trở thành một bữa tiệc thị giác đích thực.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core Ultra 9 185H (AI)" },
//       { label: "Màn hình", value: "16 inch 2.5K OLED 240Hz" },
//       { label: "RAM / ROM", value: "32GB RAM / 1TB SSD" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core Ultra 9 185H (16 Nhân / 22 Luồng, Up to 5.1GHz)" },
//       { label: "RAM", value: "32GB LPDDR5X 7467MHz (Onboard)" },
//       { label: "Ổ cứng", value: "1TB M.2 NVMe PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "16.0 inch 2.5K (2560x1600) OLED, 240Hz, 100% DCI-P3" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4070 8GB GDDR6" },
//       { label: "Pin", value: "90Wh (Hỗ trợ sạc nhanh Type-C)" },
//       { label: "Trọng lượng", value: "1.85 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM024",
//     slug: "laptop-asus-rog-zephyrus-g16-gu605cx",
//     name: "Laptop ASUS ROG Zephyrus G16 GU605CX",
//     category: "laptopgaming",
//     price: 84990000,
//     salePrice: 79990000,
//     stock: 5,
//     images: [
//       "/product_image/laptopgaming/laptop_asus_rog_zephyrus_g16_gu605cx/laptop_asus_rog_zephyrus_g16_gu605cx_01.png",
//       "/product_image/laptopgaming/laptop_asus_rog_zephyrus_g16_gu605cx/laptop_asus_rog_zephyrus_g16_gu605cx_02.png",
//       "/product_image/laptopgaming/laptop_asus_rog_zephyrus_g16_gu605cx/laptop_asus_rog_zephyrus_g16_gu605cx_03.png",
//       "/product_image/laptopgaming/laptop_asus_rog_zephyrus_g16_gu605cx/laptop_asus_rog_zephyrus_g16_gu605cx_04.png",
//       "/product_image/laptopgaming/laptop_asus_rog_zephyrus_g16_gu605cx/laptop_asus_rog_zephyrus_g16_gu605cx_05.png",
//       "/product_image/laptopgaming/laptop_asus_rog_zephyrus_g16_gu605cx/laptop_asus_rog_zephyrus_g16_gu605cx_06.png"
//     ],
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core Ultra 9 185H",
//       ram: "32GB LPDDR5X",
//       storage: "1TB SSD PCIe 4.0",
//       screen: "16 inch 2.5K OLED 240Hz",
//     },
//     shortDesc: "Cấu hình RTX 4080 đỉnh cao trong thân hình siêu mỏng, tản nhiệt buồng hơi Vapor Chamber.",
//     description: `
//       <h3>Sức mạnh tối thượng của dòng RTX 4080</h3>
//       <p>GU605CX là phiên bản mạnh nhất của dòng G16 khi tích hợp Card đồ họa NVIDIA GeForce RTX 4080. Để giải nhiệt cho cấu hình khủng này trong thân máy siêu mỏng, ASUS đã trang bị hệ thống tản nhiệt buồng hơi (Vapor Chamber) bao phủ toàn bộ linh kiện quan trọng, mang lại hiệu quả làm mát gấp nhiều lần ống đồng truyền thống.</p>
      
//       <h3>Kết nối Thunderbolt 4 siêu tốc</h3>
//       <p>Sản phẩm cung cấp đầy đủ các cổng ăn chơi cho người dùng chuyên nghiệp: từ Thunderbolt 4 để xuất hình 8K và truyền dữ liệu 40Gbps, cho đến khe thẻ nhớ SD Express 7.0 siêu nhanh dành cho các thợ ảnh và nhà làm phim chuyên nghiệp.</p>
//     `,
//     cardSpecs: [
//       { label: "VGA", value: "GeForce RTX 4080 12GB (Vapor Chamber)" },
//       { label: "CPU", value: "Intel Core Ultra 9 185H" },
//       { label: "Màn hình", value: "16 inch OLED 240Hz G-Sync" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core Ultra 9 185H (16 Nhân / 22 Luồng, Up to 5.1GHz)" },
//       { label: "RAM", value: "32GB LPDDR5X 7467MHz (Onboard)" },
//       { label: "Ổ cứng", value: "1TB M.2 NVMe PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "16.0 inch 2.5K (2560x1600) OLED, 240Hz, 100% DCI-P3" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4080 12GB GDDR6" },
//       { label: "Làm mát", value: "Buồng hơi Vapor Chamber & Tri-Fan" },
//       { label: "Trọng lượng", value: "1.85 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   //============================ASUS TUF===========================
//   {
//     id: "LGM025",
//     slug: "laptop-asus-tuf-f16-fx607vj",
//     name: "Laptop ASUS TUF Gaming F16 FX607VJ",
//     category: "laptopgaming",
//     price: 28990000,
//     salePrice: 25490000,
//     stock: 12,
//     images: [
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx607vj/laptop_asus_tuf_f16_fx607vj_01.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx607vj/laptop_asus_tuf_f16_fx607vj_02.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx607vj/laptop_asus_tuf_f16_fx607vj_03.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx607vj/laptop_asus_tuf_f16_fx607vj_04.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx607vj/laptop_asus_tuf_f16_fx607vj_05.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx607vj/laptop_asus_tuf_f16_fx607vj_06.png"
//     ],
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core i7-13650HX",
//       ram: "16GB DDR5 4800MHz",
//       storage: "512GB SSD PCIe 4.0",
//       screen: "16 inch FHD+ IPS 165Hz",
//     },
//     shortDesc: "Độ bền chuẩn quân đội, màn hình 16 inch tỉ lệ 16:10 mở rộng góc nhìn gaming.",
//     description: `
//       <h3>Thiết kế TUF Gaming mới - 16:10</h3>
//       <p>ASUS TUF Gaming F16 là bước cải tiến lớn với màn hình 16 inch tỉ lệ 16:10, cung cấp diện tích hiển thị lớn hơn cho cả chơi game lẫn làm việc. Máy vẫn duy trì phong cách "nồi đồng cối đá" đặc trưng với tiêu chuẩn MIL-STD-810H, chịu được các tác động va đập và môi trường khắc nghiệt.</p>
      
//       <h3>Cấu hình HX hiệu năng cao</h3>
//       <p>Vi xử lý Intel Core i7-13650HX mang lại hiệu năng tính toán mạnh mẽ tương đương các dòng máy trạm. Đi kèm card đồ họa RTX 40-series và RAM DDR5, máy đáp ứng mượt mà mọi tựa game eSports và game AAA hiện hành.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-13650HX (14 Nhân)" },
//       { label: "Màn hình", value: "16 inch FHD+ 165Hz" },
//       { label: "Độ bền", value: "Chuẩn quân đội MIL-STD-810H" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-13650HX (14 Nhân / 20 Luồng, Up to 4.9GHz)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "16.0 inch FHD+ (1920x1200) 16:10, 165Hz, IPS, G-Sync" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Pin", value: "90Wh" },
//       { label: "Trọng lượng", value: "2.27 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM026",
//     slug: "laptop-asus-tuf-f16-fx608jhr-rv037w",
//     name: "Laptop ASUS TUF Gaming F16 FX608JHR-RV037W",
//     category: "laptopgaming",
//     price: 32990000,
//     salePrice: 29990000,
//     stock: 8,
//     images: [
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx608jhr_rv037w/laptop_asus_tuf_f16_fx608jhr_rv037w_01.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx608jhr_rv037w/laptop_asus_tuf_f16_fx608jhr_rv037w_02.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx608jhr_rv037w/laptop_asus_tuf_f16_fx608jhr_rv037w_03.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx608jhr_rv037w/laptop_asus_tuf_f16_fx608jhr_rv037w_04.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx608jhr_rv037w/laptop_asus_tuf_f16_fx608jhr_rv037w_05.png",
//       "/product_image/laptopgaming/laptop_asus_tuf_f16_fx608jhr_rv037w/laptop_asus_tuf_f16_fx608jhr_rv037w_06.png"
//     ],
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core i7-14650HX",
//       ram: "16GB DDR5 5600MHz",
//       storage: "512GB SSD PCIe 4.0",
//       screen: "16 inch QHD+ 165Hz",
//     },
//     shortDesc: "Sức mạnh thế hệ 14 mới nhất, màn hình 2K+ siêu nét, chuẩn đồ họa chuyên nghiệp.",
//     description: `
//       <h3>Đón đầu công nghệ với Intel Gen 14</h3>
//       <p>FX608JHR là mẫu TUF Gaming hiếm hoi được trang bị màn hình độ phân giải QHD+ (2K+) sắc nét tuyệt đối, hỗ trợ 100% dải màu sRGB. Kết hợp cùng vi xử lý Intel Core i7-14650HX thế hệ 14 mới nhất, máy không chỉ phục vụ chơi game đỉnh cao mà còn cân tốt các công việc dựng hình, biên tập video chuyên nghiệp.</p>
      
//       <h3>Hệ thống tản nhiệt tiên tiến</h3>
//       <p>Được trang bị hệ thống quạt Arc Flow Fans 84 cánh, máy giúp tăng cường luồng khí tới 13% đồng thời giảm thiểu độ ồn. 5 ống đồng dẫn nhiệt và 4 khe thoát khí đảm bảo hệ thống luôn mát mẻ kể cả khi bạn thực hiện các tác vụ nặng nhất.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-14650HX (Gen 14)" },
//       { label: "Màn hình", value: "16 inch QHD+ (2K+) 165Hz" },
//       { label: "RAM", value: "16GB DDR5 5600MHz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-14650HX (16 Nhân / 24 Luồng, Up to 5.2GHz)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz (2 Khe, Max 32GB)" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "16.0 inch QHD+ (2560x1600) 16:10, 165Hz, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6" },
//       { label: "Pin", value: "90Wh" },
//       { label: "Trọng lượng", value: "2.3 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   //============================ASUS VIVOBOOK===========================
//   {
//     id: "LGM027",
//     slug: "laptop-asus-v16-v3607vh-rp024w",
//     name: "Laptop ASUS Vivobook 16 V3607VH-RP024W",
//     category: "laptopgaming",
//     price: 24490000,
//     salePrice: 21990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_asus_v16_v3607vh_rp024w/laptop_asus_v16_v3607vh_rp024w_01.png",
//       "/product_image/laptopgaming/laptop_asus_v16_v3607vh_rp024w/laptop_asus_v16_v3607vh_rp024w_02.png",
//       "/product_image/laptopgaming/laptop_asus_v16_v3607vh_rp024w/laptop_asus_v16_v3607vh_rp024w_03.png",
//       "/product_image/laptopgaming/laptop_asus_v16_v3607vh_rp024w/laptop_asus_v16_v3607vh_rp024w_04.png",
//       "/product_image/laptopgaming/laptop_asus_v16_v3607vh_rp024w/laptop_asus_v16_v3607vh_rp024w_05.png"
//     ],
//     specs: {
//       brand: "ASUS",
//       cpu: "Intel Core i5-13500H",
//       ram: "16GB DDR4",
//       storage: "512GB SSD",
//       screen: "16 inch FHD+ IPS",
//     },
//     shortDesc: "Màn hình 16 inch rộng lớn, mỏng nhẹ thời trang nhưng sở hữu cấu hình dòng H mạnh mẽ.",
//     description: `
//       <h3>Laptop đa năng: Văn phòng & Gaming nhẹ</h3>
//       <p>Vivobook 16 V3607VH là sự lựa chọn tuyệt vời cho những ai muốn một chiếc máy màn hình lớn 16 inch tỉ lệ 16:10 để làm việc Excel, văn phòng thoải mái, nhưng vẫn có đủ sức mạnh đồ họa rời để giải trí game eSports nhẹ nhàng sau giờ làm việc. Thiết kế trẻ trung với nắp máy kim loại và các đường cắt vát tinh tế.</p>
      
//       <h3>Hiệu năng i5 Gen 13 và Bảo mật một chạm</h3>
//       <p>Vi xử lý i5-13500H 12 nhân cung cấp sức mạnh tính toán ấn tượng. Máy được trang bị các tính năng bảo mật hiện đại như nắp che webcam vật lý và cảm biến vân tay tích hợp trên touchpad, giúp bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn một cách tối ưu.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i5-13500H (12 Nhân)" },
//       { label: "Màn hình", value: "16 inch FHD+ 16:10" },
//       { label: "Bảo mật", value: "Vân tay & Che Webcam" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-13500H (12 Nhân / 16 Luồng, Up to 4.7GHz)" },
//       { label: "RAM", value: "16GB DDR4 3200MHz" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe NVMe SSD" },
//       { label: "Màn hình", value: "16.0 inch FHD+ (1920x1200) IPS, 300 nits" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 2050 4GB GDDR6" },
//       { label: "Trọng lượng", value: "1.8 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   //============================GIGABYTE===========================
//   {
//     id: "LGM028",
//     slug: "laptop-gigabyte-a16-ga63h-3thk3vn893sh",
//     name: "Laptop Gigabyte A16 GA63H 3THK3VN893SH",
//     category: "laptopgaming",
//     price: 31990000,
//     salePrice: 27990000,
//     stock: 6,
//     images: [
//       "/product_image/laptopgaming/laptop_gigabyte_a16_ga63h_3thk3vn893sh/laptop_gigabyte_a16_ga63h_3thk3vn893sh_01.jpg",
//       "/product_image/laptopgaming/laptop_gigabyte_a16_ga63h_3thk3vn893sh/laptop_gigabyte_a16_ga63h_3thk3vn893sh_02.jpg",
//       "/product_image/laptopgaming/laptop_gigabyte_a16_ga63h_3thk3vn893sh/laptop_gigabyte_a16_ga63h_3thk3vn893sh_03.jpg",
//       "/product_image/laptopgaming/laptop_gigabyte_a16_ga63h_3thk3vn893sh/laptop_gigabyte_a16_ga63h_3thk3vn893sh_04.jpg",
//       "/product_image/laptopgaming/laptop_gigabyte_a16_ga63h_3thk3vn893sh/laptop_gigabyte_a16_ga63h_3thk3vn893sh_05.png",
//       "/product_image/laptopgaming/laptop_gigabyte_a16_ga63h_3thk3vn893sh/laptop_gigabyte_a16_ga63h_3thk3vn893sh_06.jpg",
//       "/product_image/laptopgaming/laptop_gigabyte_a16_ga63h_3thk3vn893sh/laptop_gigabyte_a16_ga63h_3thk3vn893sh_07.jpg"
//     ],
//     specs: {
//       brand: "Gigabyte",
//       cpu: "AMD Ryzen 7 7735HS",
//       ram: "16GB DDR5",
//       storage: "512GB SSD",
//       screen: "16 inch FHD+ 165Hz",
//     },
//     shortDesc: "Laptop Full AMD mạnh mẽ, tản nhiệt Windforce độc quyền, màn hình 165Hz chuẩn thi đấu.",
//     description: `
//       <h3>Hệ sinh thái Full AMD Advantage</h3>
//       <p>Gigabyte A16 tối ưu hóa hiệu năng nhờ sự kết hợp đồng bộ giữa CPU AMD Ryzen 7 và GPU AMD Radeon. Công nghệ AMD SmartShift cho phép hệ thống tự động phân bổ nguồn điện một cách thông minh giữa CPU và GPU tùy theo tác vụ, giúp tối đa hóa khung hình trong game hoặc rút ngắn thời gian render đồ họa.</p>
      
//       <h3>Tản nhiệt Windforce & Màn hình 165Hz</h3>
//       <p>Sở hữu hệ thống tản nhiệt Windforce danh tiếng với cụm quạt kép và nhiều ống đồng dẫn nhiệt, máy luôn duy trì nhiệt độ ổn định. Màn hình 16 inch FHD+ với tần số quét 165Hz và dải màu 100% sRGB đem lại hình ảnh rực rỡ, chính xác cho cả game thủ lẫn thiết kế viên.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 7735HS" },
//       { label: "VGA", value: "AMD Radeon™ RX 7600S 8GB" },
//       { label: "Màn hình", value: "16 inch 165Hz 100% sRGB" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 7735HS (8 Nhân / 16 Luồng, Up to 4.75GHz)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe SSD" },
//       { label: "Màn hình", value: "16.0 inch FHD+ (1920x1200) 16:10, 165Hz, 100% sRGB" },
//       { label: "Card màn hình", value: "AMD Radeon™ RX 7600S 8GB GDDR6" },
//       { label: "Kết nối", value: "USB-C (DP/PD), USB 3.2, HDMI 2.1, RJ45" },
//       { label: "Trọng lượng", value: "2.3 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM029",
//     slug: "laptop-gigabyte-aero-15-oled-kd-72s1623go",
//     name: "Laptop Gigabyte Aero 15 OLED KD-72S1623GO",
//     category: "laptopgaming",
//     price: 45000000,
//     salePrice: 38990000,
//     stock: 4,
//     images: [
//       "/product_image/laptopgaming/laptop_gigabyte_aero_15_oled_kd_72s1623go/laptop_gigabyte_aero_15_oled_kd_72s1623go_01.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_15_oled_kd_72s1623go/laptop_gigabyte_aero_15_oled_kd_72s1623go_02.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_15_oled_kd_72s1623go/laptop_gigabyte_aero_15_oled_kd_72s1623go_03.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_15_oled_kd_72s1623go/laptop_gigabyte_aero_15_oled_kd_72s1623go_04.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_15_oled_kd_72s1623go/laptop_gigabyte_aero_15_oled_kd_72s1623go_05.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_15_oled_kd_72s1623go/laptop_gigabyte_aero_15_oled_kd_72s1623go_06.png"
//     ],
//     specs: {
//       brand: "Gigabyte",
//       cpu: "Intel Core i7-11800H",
//       ram: "16GB DDR4",
//       storage: "512GB SSD",
//       screen: "15.6 inch 4K Samsung AMOLED",
//     },
//     shortDesc: "Máy trạm đồ họa chuyên nghiệp, màn hình 4K Samsung AMOLED chuẩn màu tuyệt đối.",
//     description: `
//       <h3>Màn hình 4K OLED đỉnh cao thế giới</h3>
//       <p>Gigabyte Aero 15 OLED KD là niềm tự hào của giới thiết kế với màn hình Samsung AMOLED 4K cực kỳ rực rỡ. Mỗi màn hình đều được hiệu chuẩn màu sắc bởi X-Rite và đạt chứng nhận Pantone Validated, đảm bảo độ sai lệch màu Delta E < 1. Đây là thiết bị không thể thiếu cho các nhiếp ảnh gia và thợ chỉnh màu video chuyên nghiệp.</p>
      
//       <h3>Thiết kế hiện đại, bền bỉ</h3>
//       <p>Lớp vỏ nhôm nguyên khối phay CNC mang lại độ cứng cáp và đẳng cấp cho người dùng. Dù là dòng Creator, máy vẫn sở hữu cấu hình dòng H mạnh mẽ và hệ thống tản nhiệt tối ưu để bạn có thể vừa làm việc cường độ cao, vừa chơi các tựa game AAA mượt mà.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "15.6 inch 4K Samsung AMOLED" },
//       { label: "Chuẩn màu", value: "Pantone Validated, Delta E < 1" },
//       { label: "VGA", value: "GeForce RTX 3060 6GB" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-11800H (8 Nhân / 16 Luồng, Up to 4.6GHz)" },
//       { label: "RAM", value: "16GB DDR4 3200MHz" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe SSD" },
//       { label: "Màn hình", value: "15.6 inch 4K UHD (3840x2160) Samsung AMOLED" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 3060 6GB GDDR6" },
//       { label: "Tính năng", value: "Bàn phím RGB từng phím, Bảo mật vân tay" },
//       { label: "Trọng lượng", value: "2.3 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM030",
//     slug: "laptop-gigabyte-aero-x16-1vh93vnc64ah",
//     name: "Laptop Gigabyte Aero 16 1VH93VNC64AH",
//     category: "laptopgaming",
//     price: 62000000,
//     salePrice: 58990000,
//     stock: 5,
//     images: [
//       "/product_image/laptopgaming/laptop_gigabyte_aero_x16_1vh93vnc64ah/laptop_gigabyte_aero_x16_1vh93vnc64ah_01.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_x16_1vh93vnc64ah/laptop_gigabyte_aero_x16_1vh93vnc64ah_02.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_x16_1vh93vnc64ah/laptop_gigabyte_aero_x16_1vh93vnc64ah_03.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_x16_1vh93vnc64ah/laptop_gigabyte_aero_x16_1vh93vnc64ah_04.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_x16_1vh93vnc64ah/laptop_gigabyte_aero_x16_1vh93vnc64ah_05.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_x16_1vh93vnc64ah/laptop_gigabyte_aero_x16_1vh93vnc64ah_06.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aero_x16_1vh93vnc64ah/laptop_gigabyte_aero_x16_1vh93vnc64ah_07.png"
//     ],
//     specs: {
//       brand: "Gigabyte",
//       cpu: "Intel Core i9-13900H",
//       ram: "32GB DDR5",
//       storage: "1TB SSD PCIe 4.0",
//       screen: "16 inch 4K+ OLED 120Hz",
//     },
//     shortDesc: "Siêu máy trạm i9 mạnh nhất dòng Aero, màn hình 4K+ OLED tỷ lệ 16:10 chuyên dụng đồ họa.",
//     description: `
//       <h3>Hiệu năng cực đỉnh với Core i9</h3>
//       <p>Gigabyte Aero 16 mang trên mình "quái vật" Intel Core i9-13900H cùng 32GB RAM DDR5 siêu tốc. Cỗ máy này sinh ra để phục vụ những yêu cầu khắt khe nhất như dựng phim 4K đa luồng, render kiến trúc 3D phức tạp hoặc chạy các ứng dụng AI mô phỏng dữ liệu lớn một cách nhẹ nhàng.</p>
      
//       <h3>Màn hình 4K+ OLED 16:10 mê hoặc</h3>
//       <p>Kích thước 16 inch tỷ lệ 16:10 cung cấp diện tích hiển thị tối đa cho các thanh công cụ thiết kế. Độ phân giải 4K+ sắc nét kết hợp tấm nền OLED 120Hz mang đến màu sắc sâu, rực rỡ và chuyển động mượt mà vượt xa mọi màn hình laptop thông thường. Vỏ nhôm màu bạc ánh kim tinh tế khẳng định đẳng cấp của người sở hữu.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i9-13900H (14 Nhân)" },
//       { label: "Màn hình", value: "16 inch 4K+ OLED 120Hz" },
//       { label: "RAM / ROM", value: "32GB DDR5 / 1TB SSD" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i9-13900H (14 Nhân / 20 Luồng, Up to 5.4GHz)" },
//       { label: "RAM", value: "32GB DDR5 5200MHz (2 Khe rời)" },
//       { label: "Ổ cứng", value: "1TB M.2 PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "16.0 inch 4K+ (3840x2400) OLED, 120Hz, 100% DCI-P3" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4070 8GB GDDR6" },
//       { label: "Vỏ máy", value: "Hợp kim nhôm CNC cao cấp" },
//       { label: "Trọng lượng", value: "1.9 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM031",
//     slug: "laptop-gigabyte-aorus-15p-yd-73s1224gh",
//     name: "Laptop Gigabyte Aorus 15P YD-73S1224GH",
//     category: "laptopgaming",
//     price: 48000000,
//     salePrice: 42990000,
//     stock: 3,
//     images: [
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_01.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_02.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_03.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_04.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_05.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_06.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_07.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_08.png",
//       "/product_image/laptopgaming/laptop_gigabyte_aorus_15p_yd_73s1224gh/laptop_gigabyte_aorus_15p_yd_73s1224gh_09.png"
//     ],
//     specs: {
//       brand: "Gigabyte",
//       cpu: "Intel Core i7-11800H",
//       ram: "16GB DDR4",
//       storage: "1TB SSD",
//       screen: "15.6 inch FHD 240Hz",
//     },
//     shortDesc: "Vũ khí thi đấu chuyên nghiệp với màn hình 240Hz, hệ thống tản nhiệt Windforce Infinity khổng lồ.",
//     description: `
//       <h3>Thiết kế bởi các tuyển thủ eSports</h3>
//       <p>Dòng Aorus 15P được thiết kế dựa trên sự phản hồi từ các tuyển thủ chuyên nghiệp G2 Esports. Màn hình tần số quét 240Hz cực cao giúp loại bỏ hoàn toàn hiện tượng bóng mờ, mang lại lợi thế quyết định trong các tình huống đấu súng căng thẳng. Bàn phím hỗ trợ macro từng phím và đèn nền RGB Fusion 2.0 tạo không gian gaming rực rỡ.</p>
      
//       <h3>Hiệu suất ổn định nhờ Windforce Infinity</h3>
//       <p>Sử dụng hệ thống làm mát độc quyền Windforce Infinity với 2 quạt 12V công suất lớn và 5 ống dẫn nhiệt bằng đồng nguyên chất, máy duy trì được mức xung nhịp CPU và GPU ổn định ngay cả trong những trận đấu kéo dài hàng giờ đồng hồ mà không bị tụt FPS.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "15.6 inch FHD 240Hz" },
//       { label: "VGA", value: "GeForce RTX 3080 8GB" },
//       { label: "CPU", value: "Intel Core i7-11800H" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-11800H (8 Nhân / 16 Luồng, Up to 4.6GHz)" },
//       { label: "RAM", value: "16GB DDR4 3200MHz" },
//       { label: "Ổ cứng", value: "1TB M.2 PCIe SSD" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080) IPS, 240Hz, 72% NTSC" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 3080 8GB GDDR6" },
//       { label: "Tản nhiệt", value: "Windforce Infinity Cooling System" },
//       { label: "Bàn phím", value: "Island-style RGB Fusion Keyboard" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   //============================HP===========================
//   {
//     id: "LGM032",
//     slug: "laptop-hp-omen-14-fb0135tx-ay8v1pa",
//     name: "Laptop HP Omen Transcend 14 fb0135TX ay8v1pa",
//     category: "laptopgaming",
//     price: 49990000,
//     salePrice: 45990000,
//     stock: 6,
//     images: [
//       "/product_image/laptopgaming/laptop_hp_omen_14_fb0135tx_ay8v1pa/laptop_hp_omen_14_fb0135tx_ay8v1pa_01.png",
//       "/product_image/laptopgaming/laptop_hp_omen_14_fb0135tx_ay8v1pa/laptop_hp_omen_14_fb0135tx_ay8v1pa_02.png",
//       "/product_image/laptopgaming/laptop_hp_omen_14_fb0135tx_ay8v1pa/laptop_hp_omen_14_fb0135tx_ay8v1pa_03.png",
//       "/product_image/laptopgaming/laptop_hp_omen_14_fb0135tx_ay8v1pa/laptop_hp_omen_14_fb0135tx_ay8v1pa_04.png",
//       "/product_image/laptopgaming/laptop_hp_omen_14_fb0135tx_ay8v1pa/laptop_hp_omen_14_fb0135tx_ay8v1pa_05.png",
//       "/product_image/laptopgaming/laptop_hp_omen_14_fb0135tx_ay8v1pa/laptop_hp_omen_14_fb0135tx_ay8v1pa_06.png"
//     ],
//     specs: {
//       brand: "HP",
//       cpu: "Intel Core Ultra 7 155H",
//       ram: "16GB LPDDR5X",
//       storage: "1TB SSD PCIe 4.0",
//       screen: "14 inch 2.8K OLED 120Hz",
//     },
//     shortDesc: "Định nghĩa lại laptop gaming mỏng nhẹ, màn hình OLED 2.8K đẹp mê hồn, chip Ultra 7 AI.",
//     description: `
//       <h3>Omen Transcend - Laptop Gaming 14 inch mỏng nhẹ nhất</h3>
//       <p>HP Omen Transcend 14 mang đến trải nghiệm chơi game di động chưa từng có với trọng lượng chỉ 1.6kg. Vỏ nhôm nguyên khối siêu mỏng tích hợp hệ thống tản nhiệt tiên tiến nhất giúp CPU Core Ultra 7 và card RTX 40-series vận hành mát mẻ. Đây là chiếc laptop gaming hiếm hoi có thể nằm gọn trong túi xách và theo bạn đi khắp mọi nơi.</p>
      
//       <h3>Trải nghiệm thị giác đỉnh cao</h3>
//       <p>Màn hình OLED độ phân giải 2.8K với tần số quét 120Hz mang đến chất lượng hình ảnh rực rỡ, độ sâu màu đen tuyệt đối. Bàn phím với các phím bấm được thiết kế trong suốt viền (Skyline keycaps) không chỉ tăng cường ánh sáng RGB mà còn tạo vẻ đẹp độc đáo, hiện đại cho máy.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "14 inch 2.8K OLED 120Hz" },
//       { label: "CPU", value: "Intel Core Ultra 7 155H" },
//       { label: "Trọng lượng", value: "Siêu nhẹ 1.6 kg" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core Ultra 7 155H (16 Nhân / 22 Luồng, Up to 4.8GHz)" },
//       { label: "RAM", value: "16GB LPDDR5X 7467MHz (Onboard)" },
//       { label: "Ổ cứng", value: "1TB M.2 PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "14.0 inch 2.8K (2880x1800) OLED, 120Hz, 0.2ms, 500 nits" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6" },
//       { label: "Bàn phím", value: "4-Zone RGB Backlit, Skyline Keycaps" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM033",
//     slug: "laptop-hp-omen-16-am0178tx-bx8y4pa",
//     name: "Laptop HP Omen 16 am0178TX bx8y4pa",
//     category: "laptopgaming",
//     price: 42000000,
//     salePrice: 38490000,
//     stock: 8,
//     images: [
//       "/product_image/laptopgaming/laptop_hp_omen_16_am0178tx_bx8y4pa/laptop_hp_omen_16_am0178tx_bx8y4pa_01.png",
//       "/product_image/laptopgaming/laptop_hp_omen_16_am0178tx_bx8y4pa/laptop_hp_omen_16_am0178tx_bx8y4pa_02.png",
//       "/product_image/laptopgaming/laptop_hp_omen_16_am0178tx_bx8y4pa/laptop_hp_omen_16_am0178tx_bx8y4pa_03.png",
//       "/product_image/laptopgaming/laptop_hp_omen_16_am0178tx_bx8y4pa/laptop_hp_omen_16_am0178tx_bx8y4pa_04.png",
//       "/product_image/laptopgaming/laptop_hp_omen_16_am0178tx_bx8y4pa/laptop_hp_omen_16_am0178tx_bx8y4pa_05.png"
//     ],
//     specs: {
//       brand: "HP",
//       cpu: "Intel Core i7-14700HX",
//       ram: "16GB DDR5 5600MHz",
//       storage: "512GB SSD",
//       screen: "16.1 inch QHD 240Hz",
//     },
//     shortDesc: "Sức mạnh tuyệt đối từ Intel Gen 14 HX, màn hình 240Hz siêu mượt cho game thủ pro.",
//     description: `
//       <h3>Hiệu năng dẫn đầu với Intel Gen 14</h3>
//       <p>HP Omen 16 phiên bản 2024 mang trong mình vi xử lý Intel Core i7-14700HX mạnh mẽ với 20 nhân xử lý. Đây là lựa chọn hàng đầu cho các game thủ muốn trải nghiệm sức mạnh của thế hệ chip mới nhất, kết hợp cùng card đồ họa RTX 40-series mạnh mẽ giúp bạn thống trị mọi chiến trường ảo.</p>
      
//       <h3>Tần số quét 240Hz mượt mà</h3>
//       <p>Màn hình 16.1 inch độ phân giải QHD (2K) với tần số quét cực cao 240Hz giúp loại bỏ hoàn toàn hiện tượng nhòe ảnh và giật khung hình. Công nghệ tản nhiệt Omen Tempest Cooling độc quyền đảm bảo hệ thống luôn duy trì được mức nhiệt độ lý tưởng ngay cả khi bạn ép xung phần cứng.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-14700HX (Gen 14)" },
//       { label: "Màn hình", value: "16.1 inch QHD 240Hz" },
//       { label: "VGA", value: "NVIDIA GeForce RTX 4060 8GB" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-14700HX (20 Nhân / 28 Luồng, Up to 5.5GHz)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz (2 Khe rời)" },
//       { label: "Ổ cứng", value: "512GB PCIe NVMe SSD" },
//       { label: "Màn hình", value: "16.1 inch QHD (2560x1440), 240Hz, IPS, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6" },
//       { label: "Công nghệ tản nhiệt", value: "Omen Tempest Cooling" },
//       { label: "Trọng lượng", value: "2.35 kg" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM034",
//     slug: "laptop-hp-victus-16-r0127tx-8csn2pa",
//     name: "Laptop HP Victus 16 r0127TX 8csn2pa",
//     category: "laptopgaming",
//     price: 28990000,
//     salePrice: 25990000,
//     stock: 15,
//     images: [
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0127tx_8csn2pa/laptop_hp_victus_16_r0127tx_8csn2pa_01.png",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0127tx_8csn2pa/laptop_hp_victus_16_r0127tx_8csn2pa_02.png",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0127tx_8csn2pa/laptop_hp_victus_16_r0127tx_8csn2pa_03.png",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0127tx_8csn2pa/laptop_hp_victus_16_r0127tx_8csn2pa_04.png",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0127tx_8csn2pa/laptop_hp_victus_16_r0127tx_8csn2pa_05.jpg",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0127tx_8csn2pa/laptop_hp_victus_16_r0127tx_8csn2pa_06.jpg",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0127tx_8csn2pa/laptop_hp_victus_16_r0127tx_8csn2pa_07.jpg",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0127tx_8csn2pa/laptop_hp_victus_16_r0127tx_8csn2pa_08.jpg"
//     ],
//     specs: {
//       brand: "HP",
//       cpu: "Intel Core i7-13700H",
//       ram: "16GB DDR5",
//       storage: "512GB SSD",
//       screen: "16.1 inch FHD 144Hz",
//     },
//     shortDesc: "Cấu hình i7 Gen 13 cực mạnh, thiết kế tối giản, màn hình lớn 16.1 inch rộng rãi.",
//     description: `
//       <h3>Laptop Gaming với phong cách thanh lịch</h3>
//       <p>Dòng HP Victus 16 nổi tiếng với thiết kế tối giản, không đèn LED lập lòe, phù hợp cho cả nhu cầu chơi game và làm việc chuyên nghiệp. Màn hình 16.1 inch với viền siêu mỏng cung cấp không gian hiển thị rộng rãi hơn 7% so với màn hình 15.6 inch truyền thống, mang lại trải nghiệm đắm chìm hơn.</p>
      
//       <h3>Hiệu năng mạnh mẽ với i7-13700H</h3>
//       <p>Sở hữu vi xử lý Core i7-13700H và RAM DDR5, máy xử lý mượt mà mọi tác vụ đa nhiệm nặng. Hệ thống tản nhiệt được cải tiến với luồng khí lưu thông lớn giúp duy trì hiệu năng ổn định cho GPU RTX 40-series khi chiến các tựa game bom tấn hiện nay.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-13700H" },
//       { label: "Màn hình", value: "16.1 inch 144Hz" },
//       { label: "VGA", value: "NVIDIA GeForce RTX 4050 6GB" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-13700H (14 Nhân / 20 Luồng, Up to 5.0GHz)" },
//       { label: "RAM", value: "16GB DDR5 5200MHz" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.1 inch FHD (1920x1080), 144Hz, IPS, 250 nits" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Âm thanh", value: "Audio by B&O" },
//       { label: "Trọng lượng", value: "2.31 kg" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "LGM035",
//     slug: "laptop-hp-victus-16-r0215tx-9q9b8pa",
//     name: "Laptop HP Victus 16 r0215TX 9Q9B8PA",
//     category: "laptopgaming",
//     price: 27490000,
//     salePrice: 24990000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0215tx_9q9b8pa/laptop_hp_victus_16_r0215tx_9q9b8pa_01.png",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0215tx_9q9b8pa/laptop_hp_victus_16_r0215tx_9q9b8pa_02.png",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0215tx_9q9b8pa/laptop_hp_victus_16_r0215tx_9q9b8pa_03.png",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0215tx_9q9b8pa/laptop_hp_victus_16_r0215tx_9q9b8pa_04.png",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0215tx_9q9b8pa/laptop_hp_victus_16_r0215tx_9q9b8pa_05.jpg",
//       "/product_image/laptopgaming/laptop_hp_victus_16_r0215tx_9q9b8pa/laptop_hp_victus_16_r0215tx_9q9b8pa_06.jpg"
//     ],
//     specs: {
//       brand: "HP",
//       cpu: "Intel Core i5-13500H",
//       ram: "16GB DDR5",
//       storage: "512GB SSD",
//       screen: "16.1 inch FHD 144Hz",
//     },
//     shortDesc: "Cấu hình i5-13500H và RTX 4060 cực mạnh, lựa chọn hàng đầu trong phân khúc tầm trung.",
//     description: `
//       <h3>Sức mạnh RTX 4060 đột phá</h3>
//       <p>Dù sử dụng CPU Core i5 nhưng model Victus 16 này lại được ưu ái trang bị card đồ họa NVIDIA GeForce RTX 4060 8GB mạnh mẽ. Đây là cấu hình tối ưu nhất cho việc chơi game, cung cấp hiệu năng vượt trội so với dòng 4050, giúp bạn chiến mượt các game AAA ở mức thiết lập High/Ultra dễ dàng.</p>
      
//       <h3>Bàn phím Gaming LED RGB</h3>
//       <p>Máy sở hữu bàn phím Full-size với đèn nền RGB 1 vùng rực rỡ, cho phép tùy chỉnh màu sắc qua Omen Gaming Hub. Hành trình phím tốt mang lại cảm giác phản hồi nhanh nhạy cho các thao tác combo trong game.</p>
//     `,
//     cardSpecs: [
//       { label: "VGA", value: "GeForce RTX 4060 8GB" },
//       { label: "CPU", value: "Intel Core i5-13500H" },
//       { label: "Màn hình", value: "16.1 inch 144Hz IPS" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-13500H (12 Nhân / 16 Luồng, Up to 4.7GHz)" },
//       { label: "RAM", value: "16GB DDR5 5200MHz" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.1 inch FHD (1920x1080), 144Hz, IPS, 250 nits" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6" },
//       { label: "Trọng lượng", value: "2.31 kg" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   //============================LENOVO===========================
//   {
//     id: "LGM036",
//     slug: "laptop-lenovo-legion-5-15ahp10-83m0002yvn",
//     name: "Laptop Lenovo Legion 5 15AHP10 83M0002YVN",
//     category: "laptopgaming",
//     price: 35990000,
//     salePrice: 32490000,
//     stock: 8,
//     images: [
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15ahp10_83m0002yvn/laptop_lenovo_legion_5_15ahp10_83m0002yvn_01.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15ahp10_83m0002yvn/laptop_lenovo_legion_5_15ahp10_83m0002yvn_02.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15ahp10_83m0002yvn/laptop_lenovo_legion_5_15ahp10_83m0002yvn_03.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15ahp10_83m0002yvn/laptop_lenovo_legion_5_15ahp10_83m0002yvn_04.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15ahp10_83m0002yvn/laptop_lenovo_legion_5_15ahp10_83m0002yvn_05.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15ahp10_83m0002yvn/laptop_lenovo_legion_5_15ahp10_83m0002yvn_06.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15ahp10_83m0002yvn/laptop_lenovo_legion_5_15ahp10_83m0002yvn_07.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15ahp10_83m0002yvn/laptop_lenovo_legion_5_15ahp10_83m0002yvn_08.png"
//     ],
//     specs: {
//       brand: "Lenovo",
//       cpu: "AMD Ryzen 7 8845HS",
//       ram: "16GB DDR5 5600MHz",
//       storage: "512GB SSD PCIe Gen4",
//       screen: "15.6 inch WQHD (2560x1440) IPS 165Hz",
//     },
//     shortDesc: "Vua gaming tầm trung 2024, chip Ryzen 8000 Series có AI, màn hình 2K tuyệt đẹp.",
//     description: `
//       <h3>Hệ thống AI thông minh Lenovo AI Engine+</h3>
//       <p>Lenovo Legion 5 2024 trang bị chip AI LA1 độc quyền kết hợp công nghệ AI Engine+, tự động tối ưu hóa hiệu năng phần cứng trong thời gian thực. Hệ thống sẽ nhận diện tựa game bạn đang chơi để điều phối nguồn điện hợp lý giữa CPU và GPU, giúp bạn đạt mức FPS cao nhất có thể mà không cần cài đặt thủ công.</p>
      
//       <h3>Màn hình WQHD sắc nét từng chi tiết</h3>
//       <p>Sở hữu màn hình 15.6 inch độ phân giải WQHD (2K), độ phủ màu 100% sRGB và tần số quét 165Hz. Tấm nền này cung cấp hình ảnh sắc nét và chính xác tuyệt đối cho cả việc chiến game lẫn làm đồ họa chuyên nghiệp. Hệ thống tản nhiệt Legion Coldfront 5.0 với quạt kép và ống đồng lớn giúp máy luôn mát mẻ và tĩnh lặng.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 8845HS (Có AI)" },
//       { label: "Màn hình", value: "15.6 inch WQHD (2K) 165Hz" },
//       { label: "VGA", value: "NVIDIA GeForce RTX 4060 8GB" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 8845HS (8 Nhân / 16 Luồng, Up to 5.1GHz, NPU 16TOPS)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz (2 Khe, Max 64GB)" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe 4.0 SSD (Trống 1 khe nâng cấp)" },
//       { label: "Màn hình", value: "15.6 inch WQHD (2560x1440), IPS, 165Hz, 100% sRGB, G-Sync" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6 (140W)" },
//       { label: "Tản nhiệt", value: "Legion Coldfront 5.0" },
//       { label: "Trọng lượng", value: "2.3 kg" },
//       { label: "Bảo hành", value: "36 Tháng (Premium Care)" },
//     ],
//   },

//   {
//     id: "LGM037",
//     slug: "laptop-lenovo-legion-5-15irx10-83ly00hrvn",
//     name: "Laptop Lenovo Legion 5 15IRX10 83LY00HRVN",
//     category: "laptopgaming",
//     price: 38990000,
//     salePrice: 35490000,
//     stock: 5,
//     images: [
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15irx10_83ly00hrvn/laptop_lenovo_legion_5_15irx10_83ly00hrvn_01.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15irx10_83ly00hrvn/laptop_lenovo_legion_5_15irx10_83ly00hrvn_02.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15irx10_83ly00hrvn/laptop_lenovo_legion_5_15irx10_83ly00hrvn_03.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15irx10_83ly00hrvn/laptop_lenovo_legion_5_15irx10_83ly00hrvn_04.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15irx10_83ly00hrvn/laptop_lenovo_legion_5_15irx10_83ly00hrvn_05.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15irx10_83ly00hrvn/laptop_lenovo_legion_5_15irx10_83ly00hrvn_06.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_5_15irx10_83ly00hrvn/laptop_lenovo_legion_5_15irx10_83ly00hrvn_07.png"
//     ],
//     specs: {
//       brand: "Lenovo",
//       cpu: "Intel Core i7-13650HX",
//       ram: "16GB DDR5",
//       storage: "512GB SSD",
//       screen: "15.6 inch WQHD 165Hz",
//     },
//     shortDesc: "Hiệu năng HX mạnh mẽ, bàn phím Legion TrueStrike gõ cực sướng, thiết kế tối giản sang trọng.",
//     description: `
//       <h3>CPU dòng HX hiệu năng vô đối</h3>
//       <p>Legion 5 15IRX10 trang bị bộ vi xử lý Intel Core i7-13650HX với 14 nhân xử lý, đem lại sức mạnh ngang ngửa các máy tính để bàn cao cấp. Card rời RTX 4060 140W (Full Power) đảm bảo máy có thể "nhai" gọn mọi tựa game AAA nặng nhất hiện nay với thiết lập đồ họa cao.</p>
      
//       <h3>Bàn phím Legion TrueStrike huyền thoại</h3>
//       <p>Được coi là bàn phím laptop gaming tốt nhất thế giới, Legion TrueStrike mang lại hành trình phím 1.5mm, độ nảy tốt và tính năng 100% anti-ghosting. Công nghệ tản nhiệt buồng hơi kết hợp với các khe hút gió trực tiếp trên bề mặt phím giúp ngón tay bạn luôn mát mẻ khi chơi game.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-13650HX (14 Nhân)" },
//       { label: "VGA", value: "GeForce RTX 4060 8GB (140W)" },
//       { label: "Bàn phím", value: "Legion TrueStrike RGB 4 vùng" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-13650HX (14 Nhân / 20 Luồng, Up to 4.9GHz)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "15.6 inch WQHD (2560x1440) IPS, 165Hz, 100% sRGB, G-Sync" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6 (TGP 140W)" },
//       { label: "Kết nối", value: "Wi-Fi 6E, Bluetooth 5.1, RJ45, HDMI 2.1" },
//       { label: "Trọng lượng", value: "2.4 kg" },
//       { label: "Bảo hành", value: "36 Tháng (Premium Care)" },
//     ],
//   },

//   {
//     id: "LGM038",
//     slug: "laptop-lenovo-legion-pro-5-16iax10-83f3002gvn",
//     name: "Laptop Lenovo Legion Pro 5 16IAX10 83F3002GVN",
//     category: "laptopgaming",
//     price: 46990000,
//     salePrice: 42990000,
//     stock: 6,
//     images: [
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn_01.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn_02.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn_03.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn_04.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn_05.png",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn/laptop_lenovo_legion_pro_5_16iax10_83f3002gvn_06.png"
//     ],
//     specs: {
//       brand: "Lenovo",
//       cpu: "Intel Core i7-14700HX",
//       ram: "16GB DDR5 5600MHz",
//       storage: "512GB SSD PCIe Gen4",
//       screen: "16 inch WQXGA (2560x1600) 165Hz 100% sRGB",
//     },
//     shortDesc: "Dòng Pro với màn hình 16:10 rộng lớn, CPU Gen 14 HX mạnh nhất phân khúc cận cao cấp.",
//     description: `
//       <h3>Màn hình 16 inch 16:10 chuyên nghiệp</h3>
//       <p>Dòng Legion Pro 5 mang đến màn hình 16 inch tỉ lệ 16:10 (WQXGA) cực rộng, cung cấp thêm không gian hiển thị cho các công cụ thiết kế và lập trình. Với tần số quét 165Hz và độ chuẩn màu tuyệt đối, đây là chiếc máy mơ ước cho các Creator cần cấu hình mạnh để render và game thủ chuyên nghiệp.</p>
      
//       <h3>Hiệu năng i7-14700HX cực khủng</h3>
//       <p>Sở hữu vi xử lý Intel Core i7-14700HX 20 nhân thế hệ 14 mới nhất, máy cung cấp sức mạnh vượt trội cho mọi tác vụ nặng. Chip AI LA1 tích hợp bên trong sẽ điều phối điện năng linh hoạt cho RTX 4060, giúp bạn luôn duy trì phong độ đỉnh cao trong mọi trận chiến.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-14700HX (Gen 14)" },
//       { label: "Màn hình", value: "16 inch WQXGA (16:10) 165Hz" },
//       { label: "Chip AI", value: "Lenovo LA1 AI Chip" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-14700HX (20 Nhân / 28 Luồng, Up to 5.5GHz)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "512GB M.2 PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "16.0 inch WQXGA (2560x1600) 16:10, 165Hz, IPS, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6 (140W)" },
//       { label: "Tản nhiệt", value: "Legion Coldfront 5.0 with Hybrid Thermals" },
//       { label: "Trọng lượng", value: "2.5 kg" },
//       { label: "Bảo hành", value: "36 Tháng (Premium Care)" },
//     ],
//   },

//   {
//     id: "LGM039",
//     slug: "laptop-lenovo-legion-pro-7-16iax10h",
//     name: "Laptop Lenovo Legion Pro 7 16IAX10H",
//     category: "laptopgaming",
//     price: 89990000,
//     salePrice: 84990000,
//     stock: 3,
//     images: [
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_7_16iax10h/laptop_lenovo_legion_pro_7_16iax10h_01.jpg",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_7_16iax10h/laptop_lenovo_legion_pro_7_16iax10h_02.jpg",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_7_16iax10h/laptop_lenovo_legion_pro_7_16iax10h_03.jpg",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_7_16iax10h/laptop_lenovo_legion_pro_7_16iax10h_04.jpg",
//       "/product_image/laptopgaming/laptop_lenovo_legion_pro_7_16iax10h/laptop_lenovo_legion_pro_7_16iax10h_05.jpg"
//     ],
//     specs: {
//       brand: "Lenovo",
//       cpu: "Intel Core i9-14900HX",
//       ram: "32GB DDR5",
//       storage: "1TB SSD PCIe Gen4",
//       screen: "16 inch WQXGA 240Hz 500 nits",
//     },
//     shortDesc: "Cỗ máy gaming hoàn hảo nhất của Lenovo, chip i9 đầu bảng và card RTX 4080/4090 hủy diệt.",
//     description: `
//       <h3>Flagship cao cấp nhất thế giới Legion</h3>
//       <p>Legion Pro 7 đại diện cho đỉnh cao công nghệ của Lenovo. Máy sử dụng chip Intel Core i9-14900HX 24 nhân cùng card đồ họa RTX 40-series cao cấp nhất với công suất TGP tối đa. Hệ thống tản nhiệt buồng hơi (Vapor Chamber) khổng lồ bao phủ toàn bộ bảng mạch, đảm bảo máy hoạt động mát mẻ bất chấp mọi giới hạn phần cứng.</p>
      
//       <h3>Màn hình gaming đỉnh nhất phân khúc</h3>
//       <p>Màn hình 16 inch WQXGA với tần số quét 240Hz và độ sáng 500 nits đạt chứng nhận DisplayHDR 400. Dải màu sắc rực rỡ và độ phản hồi tức thì biến đây thành màn hình lý tưởng cho các game thủ chuyên nghiệp thi đấu đỉnh cao. Hệ thống LED RGB gầm máy Aura Sync và dải đèn mặt trước mang lại vẻ đẹp lộng lẫy không thể cưỡng lại.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Nhân)" },
//       { label: "Màn hình", value: "16 inch WQXGA 240Hz 500 nits" },
//       { label: "VGA", value: "NVIDIA GeForce RTX 4080 12GB (Max TGP)" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Nhân / 32 Luồng, Up to 5.8GHz)" },
//       { label: "RAM", value: "32GB DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "1TB M.2 PCIe 4.0 SSD" },
//       { label: "Màn hình", value: "16.0 inch WQXGA (2560x1600) 16:10, 240Hz, 500 nits, DCI-P3 100%" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4080 12GB GDDR6" },
//       { label: "Tản nhiệt", value: "Vapor Chamber & Liquid Metal" },
//       { label: "Bàn phím", value: "Per-Key RGB Backlit (Legion Spectrum)" },
//       { label: "Bảo hành", value: "36 Tháng (Premium Care)" },
//     ],
//   },
//   {
//     id: "LGM040",
//     slug: "laptop-lenovo-loq-15ahp10-83jjg0047vn",
//     name: "Laptop Lenovo LOQ 15AHP10 83JJG0047VN",
//     category: "laptopgaming",
//     price: 28990000,
//     salePrice: 26490000,
//     stock: 12,
//     images: [
//       "/product_image/laptopgaming/laptop_lenovo_loq_15ahp10_83jjg0047vn/laptop_lenovo_loq_15ahp10_83jjg0047vn_01.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15ahp10_83jjg0047vn/laptop_lenovo_loq_15ahp10_83jjg0047vn_02.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15ahp10_83jjg0047vn/laptop_lenovo_loq_15ahp10_83jjg0047vn_03.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15ahp10_83jjg0047vn/laptop_lenovo_loq_15ahp10_83jjg0047vn_04.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15ahp10_83jjg0047vn/laptop_lenovo_loq_15ahp10_83jjg0047vn_05.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15ahp10_83jjg0047vn/laptop_lenovo_loq_15ahp10_83jjg0047vn_06.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15ahp10_83jjg0047vn/laptop_lenovo_loq_15ahp10_83jjg0047vn_07.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15ahp10_83jjg0047vn/laptop_lenovo_loq_15ahp10_83jjg0047vn_08.png"
//     ],
//     specs: {
//       brand: "Lenovo",
//       cpu: "AMD Ryzen 7 8845HS",
//       ram: "16GB DDR5 5600MHz",
//       storage: "512GB SSD PCIe Gen4",
//       screen: "15.6 inch FHD IPS 144Hz 100% sRGB",
//     },
//     shortDesc: "Laptop Gaming LOQ 2024 mang DNA của dòng Legion, chip Ryzen 8000 Series AI cực mạnh.",
//     description: `
//       <h3>Thiết kế bền bỉ, DNA từ Legion</h3>
//       <p>Lenovo LOQ 15AHP10 kế thừa hốc tản nhiệt phía sau đặc trưng của dòng Legion cao cấp, giúp đẩy luồng khí nóng ra xa tay người dùng. Khung máy đạt độ bền chuẩn quân đội MIL-STD-810H, sẵn sàng đồng hành cùng bạn trong mọi điều kiện di chuyển khắc nghiệt.</p>
      
//       <h3>Hiệu năng AI vượt trội</h3>
//       <p>Sức mạnh từ vi xử lý AMD Ryzen 7 8845HS tích hợp nhân NPU Ryzen AI giúp máy xử lý mượt mà các tính năng thông minh. Kết hợp cùng Card đồ họa RTX 40-series và chip AI Lenovo LA1, hệ thống sẽ tự động tối ưu hóa hiệu năng để bạn có trải nghiệm gaming mượt mà nhất mà không cần cài đặt phức tạp.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 8845HS (AI)" },
//       { label: "Màn hình", value: "15.6 inch 144Hz 100% sRGB" },
//       { label: "VGA", value: "NVIDIA GeForce RTX 40-Series" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "AMD Ryzen 7 8845HS (8 Nhân / 16 Luồng, Up to 5.1GHz)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz (2 Khe rời)" },
//       { label: "Ổ cứng", value: "512GB SSD M.2 PCIe Gen 4" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080) IPS, 144Hz, 100% sRGB, G-Sync" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Tản nhiệt", value: "Hệ thống quạt kép, 4 ống đồng" },
//       { label: "Hệ điều hành", value: "Windows 11 Home" },
//       { label: "Bảo hành", value: "24 Tháng (Premium Care)" },
//     ],
//   },

//   {
//     id: "LGM041",
//     slug: "laptop-lenovo-loq-15irx9-83dv013pvn",
//     name: "Laptop Lenovo LOQ 15IRX9 83DV013PVN",
//     category: "laptopgaming",
//     price: 25990000,
//     salePrice: 23490000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_lenovo_loq_15irx9_83dv013pvn/laptop_lenovo_loq_15irx9_83dv013pvn_01.jpg",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15irx9_83dv013pvn/laptop_lenovo_loq_15irx9_83dv013pvn_02.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15irx9_83dv013pvn/laptop_lenovo_loq_15irx9_83dv013pvn_03.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15irx9_83dv013pvn/laptop_lenovo_loq_15irx9_83dv013pvn_04.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15irx9_83dv013pvn/laptop_lenovo_loq_15irx9_83dv013pvn_05.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15irx9_83dv013pvn/laptop_lenovo_loq_15irx9_83dv013pvn_06.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15irx9_83dv013pvn/laptop_lenovo_loq_15irx9_83dv013pvn_07.png",
//       "/product_image/laptopgaming/laptop_lenovo_loq_15irx9_83dv013pvn/laptop_lenovo_loq_15irx9_83dv013pvn_08.png"
//     ],
//     specs: {
//       brand: "Lenovo",
//       cpu: "Intel Core i5-13450HX",
//       ram: "16GB DDR5",
//       storage: "512GB SSD",
//       screen: "15.6 inch FHD 144Hz",
//     },
//     shortDesc: "Sự cân bằng hoàn hảo giữa học tập và chơi game với chip Intel dòng HX mạnh mẽ.",
//     description: `
//       <h3>Hiệu năng i5-13450HX ấn tượng</h3>
//       <p>Lenovo LOQ 15IRX9 sử dụng vi xử lý Intel Core i5-13450HX thuộc dòng HX hiệu năng cao, thường chỉ thấy trên các mẫu laptop gaming cao cấp. Với số nhân và luồng vượt trội, máy xử lý mượt mà các phần mềm đồ họa kỹ thuật, lập trình và dĩ nhiên là cả những tựa game AAA nặng ký.</p>
      
//       <h3>Bàn phím Gaming tối ưu</h3>
//       <p>Máy trang bị bàn phím với hành trình phím 1.5mm, độ nảy tốt và tính năng 100% Anti-ghosting. Cụm phím mũi tên được thiết kế lớn và tách biệt giúp game thủ thao tác chính xác trong những pha giao tranh quan trọng.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i5-13450HX" },
//       { label: "VGA", value: "NVIDIA GeForce RTX 4050 6GB" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i5-13450HX (10 Nhân / 16 Luồng, Up to 4.6GHz)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz (Hỗ trợ 2 khe)" },
//       { label: "Ổ cứng", value: "512GB SSD M.2 PCIe NVMe" },
//       { label: "Màn hình", value: "15.6 inch FHD (1920x1080), IPS, 144Hz, G-Sync" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Cổng kết nối", value: "USB-C, USB 3.2, HDMI 2.1, RJ45" },
//       { label: "Trọng lượng", value: "2.38 kg" },
//       { label: "Bảo hành", value: "24 Tháng (Premium Care)" },
//     ],
//   },

//   //============================MSI===========================
//   {
//     id: "LGM042",
//     slug: "laptop-msi-crosshair-16-hx-ai-d2xwfkget-036vn",
//     name: "Laptop MSI Crosshair 16 HX AI D2XWFKG 036VN",
//     category: "laptopgaming",
//     price: 36990000,
//     salePrice: 33990000,
//     stock: 5,
//     images: [
//       "/product_image/laptopgaming/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn_01.png",
//       "/product_image/laptopgaming/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn_02.png",
//       "/product_image/laptopgaming/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn_03.png",
//       "/product_image/laptopgaming/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn_04.png",
//       "/product_image/laptopgaming/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn/laptop_msi_crosshair_16_hx_ai_d2xwfkg_036vn_05.png"
//     ],
//     specs: {
//       brand: "MSI",
//       cpu: "Intel Core i7-14700HX",
//       ram: "16GB DDR5 5600MHz",
//       storage: "1TB SSD PCIe Gen4",
//       screen: "16 inch QHD+ (2560x1600) IPS 240Hz",
//     },
//     shortDesc: "Vũ khí Gaming AI thế hệ mới với màn hình 240Hz siêu mượt và chip i7 Gen 14 cực khủng.",
//     description: `
//       <h3>Thiết kế Crosshair tương lai</h3>
//       <p>MSI Crosshair 16 HX mang phong cách khoa học viễn tưởng với các đường cắt sắc lẹm và Logo rực rỡ. Hệ thống tản nhiệt Cooler Boost 5 với 2 quạt và 6 ống dẫn nhiệt đảm bảo cấu hình Intel Gen 14 luôn duy trì được sức mạnh tối đa trong các trận chiến kéo dài.</p>
      
//       <h3>Màn hình QHD+ 240Hz đỉnh cao</h3>
//       <p>Trải nghiệm khung hình mượt mà không đối thủ với tần số quét 240Hz trên độ phân giải QHD+ sắc nét. Độ phủ màu 100% DCI-P3 chuẩn điện ảnh biến chiếc laptop này thành công cụ hoàn hảo cho cả game thủ eSports lẫn nhà sáng tạo nội dung chuyên nghiệp.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i7-14700HX (Gen 14)" },
//       { label: "Màn hình", value: "16 inch QHD+ 240Hz" },
//       { label: "VGA", value: "NVIDIA GeForce RTX 40-Series" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-14700HX (20 Nhân / 28 Luồng, Up to 5.5GHz)" },
//       { label: "RAM", value: "16GB DDR5 5600MHz (2 Khe rời)" },
//       { label: "Ổ cứng", value: "1TB M.2 PCIe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.0 inch QHD+ (2560x1600), 240Hz, 100% DCI-P3, IPS" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4060 8GB GDDR6" },
//       { label: "Bàn phím", value: "24-Zone RGB Gaming Keyboard" },
//       { label: "Trọng lượng", value: "2.3 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM044",
//     slug: "laptop-msi-cyborg-14-a13ve-090vn",
//     name: "Laptop MSI Cyborg 14 A13VE 090VN",
//     category: "laptopgaming",
//     price: 24990000,
//     salePrice: 21490000,
//     stock: 10,
//     images: [
//       "/product_image/laptopgaming/laptop_msi_cyborg_14_a13ve_090vn/laptop_msi_cyborg_14_a13ve_090vn_01.png",
//       "/product_image/laptopgaming/laptop_msi_cyborg_14_a13ve_090vn/laptop_msi_cyborg_14_a13ve_090vn_02.png",
//       "/product_image/laptopgaming/laptop_msi_cyborg_14_a13ve_090vn/laptop_msi_cyborg_14_a13ve_090vn_03.jpg",
//       "/product_image/laptopgaming/laptop_msi_cyborg_14_a13ve_090vn/laptop_msi_cyborg_14_a13ve_090vn_04.jpg",
//       "/product_image/laptopgaming/laptop_msi_cyborg_14_a13ve_090vn/laptop_msi_cyborg_14_a13ve_090vn_05.png",
//       "/product_image/laptopgaming/laptop_msi_cyborg_14_a13ve_090vn/laptop_msi_cyborg_14_a13ve_090vn_06.png"
//     ],
//     specs: {
//       brand: "MSI",
//       cpu: "Intel Core i7-13620H",
//       ram: "16GB DDR5",
//       storage: "512GB SSD PCIe Gen4",
//       screen: "14 inch FHD+ (1920x1200) IPS 144Hz",
//     },
//     shortDesc: "Laptop Gaming 14 inch mỏng nhẹ, thiết kế xuyên thấu độc bản, tính di động cực cao.",
//     description: `
//       <h3>Thiết kế Cyborg xuyên thấu</h3>
//       <p>Cyborg 14 gây ấn tượng mạnh với lớp vỏ nhựa trong suốt lộ bảng mạch độc đáo ở các cạnh và mặt đáy. Thiết kế này không chỉ mang đậm chất Cyberpunk mà còn giúp máy nhẹ hơn đáng kể so với laptop gaming truyền thống, chỉ nặng 1.6kg.</p>
      
//       <h3>Hiệu suất mạnh mẽ trong thân hình nhỏ bé</h3>
//       <p>Dù có kích thước nhỏ gọn 14 inch, máy vẫn sở hữu cấu hình Core i7 Gen 13 và RAM DDR5. Đây là lựa chọn tuyệt vời cho các game thủ thường xuyên di chuyển nhưng vẫn muốn trải nghiệm sức mạnh đồ họa RTX mượt mà.</p>
//     `,
//     cardSpecs: [
//       { label: "Trọng lượng", value: "Siêu nhẹ 1.6 kg" },
//       { label: "Thiết kế", value: "Translucent (Xuyên thấu)" },
//       { label: "Màn hình", value: "14 inch FHD+ 144Hz" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i7-13620H (10 Nhân / 16 Luồng, Up to 4.9GHz)" },
//       { label: "RAM", value: "16GB DDR5 4800MHz" },
//       { label: "Ổ cứng", value: "512GB SSD PCIe NVMe Gen 4" },
//       { label: "Màn hình", value: "14.0 inch FHD+ (1920x1200), IPS, 144Hz, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4050 6GB GDDR6" },
//       { label: "Cổng kết nối", value: "USB-C (DP), USB 3.2, HDMI 2.1, RJ45" },
//       { label: "Trọng lượng", value: "1.6 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM049",
//     slug: "laptop-msi-raider-18-hx-ai-a2xwig-033vn",
//     name: "Laptop MSI Raider 18 HX AI A2XWIG 033VN",
//     category: "laptopgaming",
//     price: 135000000,
//     salePrice: 125990000,
//     stock: 2,
//     images: [
//       "/product_image/laptopgaming/laptop_msi_raider_18_hx_ai_a2xwig_033vn/laptop_msi_raider_18_hx_ai_a2xwig_033vn_01.png",
//       "/product_image/laptopgaming/laptop_msi_raider_18_hx_ai_a2xwig_033vn/laptop_msi_raider_18_hx_ai_a2xwig_033vn_02.png",
//       "/product_image/laptopgaming/laptop_msi_raider_18_hx_ai_a2xwig_033vn/laptop_msi_raider_18_hx_ai_a2xwig_033vn_03.png",
//       "/product_image/laptopgaming/laptop_msi_raider_18_hx_ai_a2xwig_033vn/laptop_msi_raider_18_hx_ai_a2xwig_033vn_04.png",
//       "/product_image/laptopgaming/laptop_msi_raider_18_hx_ai_a2xwig_033vn/laptop_msi_raider_18_hx_ai_a2xwig_033vn_05.png"
//     ],
//     specs: {
//       brand: "MSI",
//       cpu: "Intel Core i9-14900HX",
//       ram: "64GB DDR5",
//       storage: "2TB SSD PCIe Gen4",
//       screen: "18 inch UHD+ (3840x2400) Mini LED 120Hz",
//       gpu: "NVIDIA GeForce RTX 4090 16GB"
//     },
//     shortDesc: "Quái vật hiệu năng với màn hình 18 inch 4K Mini LED và dải đèn Matrix Light Bar rực rỡ.",
//     description: `
//       <h3>Ánh sáng Matrix rực rỡ</h3>
//       <p>MSI Raider 18 HX thu hút mọi ánh nhìn với dải đèn Matrix Light Bar bao phủ toàn bộ mặt trước của máy. Hệ thống LED RGB hàng triệu màu sắc có thể tùy chỉnh độc lập, tạo nên một bữa tiệc ánh sáng cá tính đồng bộ với mọi hành động trong game của bạn.</p>
      
//       <h3>Hiển thị 4K Mini LED đỉnh cấp</h3>
//       <p>Màn hình 18 inch độ phân giải 4K sử dụng công nghệ Mini LED mang lại độ sáng lên tới 1000 nits. Với 64GB RAM và Card đồ họa RTX 4090 175W mạnh nhất thế giới laptop, đây không chỉ là một chiếc máy chơi game mà còn là một siêu máy trạm cho các chuyên gia đồ họa, mô phỏng 3D và AI.</p>
//     `,
//     cardSpecs: [
//       { label: "Màn hình", value: "18 inch 4K Mini LED 120Hz" },
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Lõi)" },
//       { label: "VGA", value: "RTX 4090 16GB (Max TGP)" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Nhân / 32 Luồng, Up to 5.8GHz)" },
//       { label: "RAM", value: "64GB (2x32GB) DDR5 5600MHz (4 Khe, Max 128GB)" },
//       { label: "Ổ cứng", value: "2TB SSD PCIe Gen 4x4" },
//       { label: "Màn hình", value: "18.0 inch UHD+ (3840x2400), Mini LED, 120Hz, HDR1000" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W)" },
//       { label: "Tính năng đặc biệt", value: "Bàn phím SteelSeries RGB Per-key, Matrix Light Bar" },
//       { label: "Trọng lượng", value: "3.6 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "LGM054",
//     slug: "laptop-msi-titan-18-hx-ai-a2xwig-090vn",
//     name: "Laptop MSI Titan 18 HX AI A2XWIG 090VN",
//     category: "laptopgaming",
//     price: 149990000,
//     salePrice: 139990000,
//     stock: 1,
//     images: [
//       "/product_image/laptopgaming/laptop_msi_titan_18_hx_ai_a2xwig_090vn/laptop_msi_titan_18_hx_ai_a2xwig_090vn_01.png",
//       "/product_image/laptopgaming/laptop_msi_titan_18_hx_ai_a2xwig_090vn/laptop_msi_titan_18_hx_ai_a2xwig_090vn_02.png",
//       "/product_image/laptopgaming/laptop_msi_titan_18_hx_ai_a2xwig_090vn/laptop_msi_titan_18_hx_ai_a2xwig_090vn_03.png",
//       "/product_image/laptopgaming/laptop_msi_titan_18_hx_ai_a2xwig_090vn/laptop_msi_titan_18_hx_ai_a2xwig_090vn_04.png",
//       "/product_image/laptopgaming/laptop_msi_titan_18_hx_ai_a2xwig_090vn/laptop_msi_titan_18_hx_ai_a2xwig_090vn_05.png",
//       "/product_image/laptopgaming/laptop_msi_titan_18_hx_ai_a2xwig_090vn/laptop_msi_titan_18_hx_ai_a2xwig_090vn_06.png"
//     ],
//     specs: {
//       brand: "MSI",
//       cpu: "Intel Core i9-14900HX",
//       ram: "128GB DDR5 (4 slots)",
//       storage: "4TB SSD (RAID 0)",
//       screen: "18 inch UHD+ Mini LED 120Hz",
//       gpu: "NVIDIA GeForce RTX 4090 16GB"
//     },
//     shortDesc: "Vị vua của Laptop Gaming, bàn phím cơ Cherry MX, cấu hình tối thượng 128GB RAM.",
//     description: `
//       <h3>Titan 18 HX - Đỉnh cao không giới hạn</h3>
//       <p>Titan 18 HX không chỉ là một chiếc laptop, nó là một cỗ máy thay thế máy tính để bàn mạnh nhất thế giới. Sở hữu bộ nhớ RAM khổng lồ 128GB và ổ lưu trữ 4TB SSD chạy RAID 0, mọi giới hạn về tốc độ và không gian đều bị xóa bỏ.</p>
      
//       <h3>Bàn phím cơ Cherry MX & Touchpad haptic rực rỡ</h3>
//       <p>Máy trang bị bàn phím cơ sử dụng Switch Cherry MX Ultra Low Profile cho cảm giác gõ phím chân thực nhất. Điểm đột phá là bàn di chuột (Touchpad) haptic liền mạch đầu tiên trên thế giới tích hợp ánh sáng RGB rực rỡ, biến toàn bộ khu vực kê tay thành một kiệt tác công nghệ.</p>
//     `,
//     cardSpecs: [
//       { label: "Bàn phím", value: "Cơ học Cherry MX Ultra Low Profile" },
//       { label: "RAM / ROM", value: "128GB DDR5 / 4TB SSD RAID 0" },
//       { label: "Màn hình", value: "18 inch 4K Mini LED HDR1000" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Nhân / 32 Luồng, Up to 5.8GHz)" },
//       { label: "RAM", value: "128GB (4x32GB) DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "4TB (2x2TB) M.2 PCIe Gen 4 SSD (RAID 0)" },
//       { label: "Màn hình", value: "18.0 inch UHD+ (3840x2400) Mini LED, 120Hz, 100% DCI-P3" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4090 16GB GDDR6 (175W)" },
//       { label: "Hệ thống loa", value: "Hệ thống 6 loa Dynaudio cao cấp" },
//       { label: "Trọng lượng", value: "3.6 kg" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   //============================HP OMEN MAX===========================
//   {
//     id: "LGM058",
//     slug: "laptop-omen-max-16-ah0213tx-c1wr2pa",
//     name: "Laptop HP Omen Max 16 ah0213TX c1wr2pa",
//     category: "laptopgaming",
//     price: 48990000,
//     salePrice: 44990000,
//     stock: 4,
//     images: [
//       "/product_image/laptopgaming/laptop_omen_max_16_ah0213tx_c1wr2pa/laptop_omen_max_16_ah0213tx_c1wr2pa_01.png",
//       "/product_image/laptopgaming/laptop_omen_max_16_ah0213tx_c1wr2pa/laptop_omen_max_16_ah0213tx_c1wr2pa_02.png",
//       "/product_image/laptopgaming/laptop_omen_max_16_ah0213tx_c1wr2pa/laptop_omen_max_16_ah0213tx_c1wr2pa_03.png",
//       "/product_image/laptopgaming/laptop_omen_max_16_ah0213tx_c1wr2pa/laptop_omen_max_16_ah0213tx_c1wr2pa_04.png",
//       "/product_image/laptopgaming/laptop_omen_max_16_ah0213tx_c1wr2pa/laptop_omen_max_16_ah0213tx_c1wr2pa_05.png",
//       "/product_image/laptopgaming/laptop_omen_max_16_ah0213tx_c1wr2pa/laptop_omen_max_16_ah0213tx_c1wr2pa_06.png"
//     ],
//     specs: {
//       brand: "HP",
//       cpu: "Intel Core i9-14900HX",
//       ram: "32GB DDR5",
//       storage: "1TB SSD",
//       screen: "16.1 inch QHD+ 240Hz 100% sRGB",
//     },
//     shortDesc: "Cấu hình Omen Max đỉnh cao với Intel Core i9 Gen 14, tản nhiệt nâng cấp toàn diện.",
//     description: `
//       <h3>Omen Max - Sức mạnh tối đa</h3>
//       <p>HP Omen Max 16 đại diện cho dòng sản phẩm cao cấp nhất của HP, tập trung vào việc đẩy hiệu năng phần cứng lên mức giới hạn. Vi xử lý Intel Core i9-14900HX 24 nhân cho khả năng xử lý đa luồng cực mạnh, đáp ứng hoàn hảo cho các streamer chuyên nghiệp và người dùng render 3D chuyên sâu.</p>
      
//       <h3>Công nghệ tản nhiệt Omen Tempest</h3>
//       <p>Để duy trì sức mạnh của chip i9, máy sử dụng hệ thống làm mát Omen Tempest Cooling với các khe thoát khí cực rộng ở ba cạnh và luồng khí lưu thông năm chiều. Màn hình 240Hz sắc nét cùng âm thanh B&O chân thực mang lại không gian giải trí đỉnh cao cho người dùng.</p>
//     `,
//     cardSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (Gen 14)" },
//       { label: "Màn hình", value: "16.1 inch QHD+ 240Hz" },
//       { label: "Âm thanh", value: "Audio by Bang & Olufsen" },
//     ],
//     detailSpecs: [
//       { label: "CPU", value: "Intel Core i9-14900HX (24 Nhân / 32 Luồng, Up to 5.8GHz)" },
//       { label: "RAM", value: "32GB DDR5 5600MHz" },
//       { label: "Ổ cứng", value: "1TB M.2 PCIe Gen 4 SSD" },
//       { label: "Màn hình", value: "16.1 inch QHD+ (2560x1440), 240Hz, IPS, 100% sRGB" },
//       { label: "Card màn hình", value: "NVIDIA GeForce RTX 4070 8GB GDDR6" },
//       { label: "Pin", value: "6-cell, 83 Wh" },
//       { label: "Trọng lượng", value: "2.39 kg" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },
// ];