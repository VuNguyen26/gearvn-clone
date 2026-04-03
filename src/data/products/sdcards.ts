import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const sdcards = async (): Promise<Product[]> => {
  const q = query(
    collection(db, "products"),
    where("category", "==", "sdcard") // ⚠️ phải match DB
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
};

// export const sdcards: Product[] = [
//   {
//     id: "SD001",
//     slug: "the-nho-microsdxc-sandisk-ultra-a1-256gb",
//     name: "Thẻ nhớ microSDXC SanDisk Ultra A1 256GB",
//     category: "sdcard",
//     subcategory: "ssd_ram_sd",
//     price: 690000,
//     salePrice: 590000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/sd_microsdxc_sandisk_ultra_a1_256gb.png",
//     ],
//     shortDesc: "Thẻ nhớ MicroSD dung lượng lớn 256GB, chuẩn A1 tối ưu hóa cho smartphone Android.",
//     description: `
//       <h3>Chuẩn A1 tối ưu cho ứng dụng di động</h3>
//       <p>Thẻ nhớ microSDXC SanDisk Ultra 256GB được chứng nhận chuẩn A1 (App Performance Class 1), mang lại tốc độ khởi chạy và thực thi ứng dụng trên điện thoại thông minh Android, máy tính bảng cực kỳ nhanh chóng, mang lại trải nghiệm mượt mà hơn hẳn so với thẻ nhớ thông thường.</p>
      
//       <h3>Lưu trữ thả ga, tốc độ siêu nhanh</h3>
//       <p>Với dung lượng khổng lồ lên tới 256GB, bạn có thể lưu trữ hàng chục ngàn bức ảnh chất lượng cao và nhiều giờ quay video Full HD. Tốc độ đọc lên tới 150MB/s giúp việc truyền tải dữ liệu, sao chép video dung lượng lớn sang máy tính chỉ diễn ra trong nháy mắt.</p>
//     `,
//     brand: "SanDisk",
//     specs: {
//       brand: "SanDisk",
//       storage: "256GB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn thẻ", value: "microSDXC" },
//       { label: "Dung lượng", value: "256GB" },
//       { label: "Tốc độ đọc", value: "Lên đến 150MB/s" },
//     ],
//     detailSpecs: [
//       { label: "Loại thẻ", value: "MicroSDXC (Kèm Adapter SD)" },
//       { label: "Dung lượng", value: "256GB" },
//       { label: "Tốc độ đọc", value: "Lên tới 150 MB/s" },
//       { label: "Class Video", value: "C10, U1 (Hỗ trợ quay Full HD)" },
//       { label: "Chuẩn hiệu năng ứng dụng", value: "A1" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },

//   {
//     id: "SD002",
//     slug: "the-nho-sandisk-sdxc-extreme-pro-64gb",
//     name: "Thẻ nhớ SanDisk SDXC Extreme Pro 64GB",
//     category: "sdcard",
//     subcategory: "ssd_ram_sd",
//     price: 590000,
//     salePrice: 490000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/sd_sandisk_sdxc_extreme_pro_64gb.png",
//     ],
//     shortDesc: "Thẻ nhớ SD máy ảnh chuyên nghiệp, hỗ trợ quay video 4K UHD mượt mà.",
//     description: `
//       <h3>Lựa chọn hàng đầu cho Nhiếp ảnh gia</h3>
//       <p>SanDisk SDXC Extreme Pro 64GB là dòng thẻ nhớ SD kích thước tiêu chuẩn, được thiết kế đặc biệt cho các dòng máy ảnh DSLR, máy Mirrorless và máy quay phim chuyên nghiệp. Tốc độ ghi lên tới 90MB/s giúp máy ảnh không bị nghẽn bộ đệm khi chụp liên tiếp (Burst Mode) ở định dạng RAW nặng nề.</p>
      
//       <h3>Quay video 4K không rớt khung hình</h3>
//       <p>Đáp ứng chuẩn Video Speed Class 30 (V30) và UHS Speed Class 3 (U3), chiếc thẻ nhớ này đảm bảo khả năng quay video 4K UHD mượt mà, ổn định mà không lo bị rớt khung hình (drop frame). Lớp vỏ bền bỉ chịu được nhiệt độ khắc nghiệt, chống nước, chống sốc và tia X khi đi qua cửa an ninh sân bay.</p>
//     `,
//     brand: "SanDisk",
//     specs: {
//       brand: "SanDisk",
//       storage: "64GB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn thẻ", value: "SDXC (Thẻ máy ảnh)" },
//       { label: "Tốc độ đọc/ghi", value: "200MB/s - 90MB/s" },
//       { label: "Class Video", value: "V30 / U3 (Quay 4K)" },
//     ],
//     detailSpecs: [
//       { label: "Loại thẻ", value: "SDXC (Tiêu chuẩn)" },
//       { label: "Dung lượng", value: "64GB" },
//       { label: "Tốc độ đọc", value: "Lên tới 200 MB/s" },
//       { label: "Tốc độ ghi", value: "Lên tới 90 MB/s" },
//       { label: "Class Video", value: "V30, U3, C10" },
//       { label: "Tính năng", value: "Chống nước, chống tia X, chống sốc" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },

//   {
//     id: "SD003",
//     slug: "the-nho-sandisk-sdxc-extreme-pro-128gb",
//     name: "Thẻ nhớ SanDisk SDXC Extreme Pro 128GB",
//     category: "sdcard",
//     subcategory: "ssd_ram_sd",
//     price: 890000,
//     salePrice: 790000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/sd_sandisk_sdxc_extreme_pro_128gb.png",
//     ],
//     shortDesc: "Thẻ nhớ máy ảnh SDXC tốc độ cực cao, dung lượng 128GB cho những dự án quay phim lớn.",
//     description: `
//       <h3>Băng thông khổng lồ cho video 4K/8K</h3>
//       <p>Nằm trong dòng Extreme Pro cao cấp nhất của SanDisk, phiên bản 128GB cung cấp không gian rộng rãi để các nhà quay phim lưu trữ hàng giờ đồng hồ các cảnh quay 4K UHD chất lượng cao. Với tốc độ đọc lên đến 200MB/s, thời gian chuyển các file video khổng lồ từ thẻ nhớ sang máy tính được rút ngắn tối đa, tối ưu hóa quy trình làm việc (workflow) của bạn.</p>
      
//       <h3>Bền bỉ trong mọi môi trường khắc nghiệt</h3>
//       <p>Sản phẩm được thử nghiệm nghiêm ngặt để hoạt động bình thường trong dải nhiệt độ từ -25°C đến 85°C, chống chịu va đập và chống lại các tác động từ trường. Đi kèm với thẻ nhớ là phần mềm khôi phục dữ liệu RescuePRO Deluxe, giúp cứu vãn những tập tin lỡ tay xóa nhầm.</p>
//     `,
//     brand: "SanDisk",
//     specs: {
//       brand: "SanDisk",
//       storage: "128GB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn thẻ", value: "SDXC (Thẻ máy ảnh)" },
//       { label: "Tốc độ đọc/ghi", value: "200MB/s - 90MB/s" },
//       { label: "Class Video", value: "V30 / U3 (Quay 4K)" },
//     ],
//     detailSpecs: [
//       { label: "Loại thẻ", value: "SDXC (Tiêu chuẩn)" },
//       { label: "Dung lượng", value: "128GB" },
//       { label: "Tốc độ đọc", value: "Lên tới 200 MB/s" },
//       { label: "Tốc độ ghi", value: "Lên tới 90 MB/s" },
//       { label: "Class Video", value: "V30, U3, C10" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },

//   {
//     id: "SD004",
//     slug: "the-nho-sandisk-ultra-32gb",
//     name: "Thẻ nhớ SanDisk Ultra 32GB",
//     category: "sdcard",
//     subcategory: "ssd_ram_sd",
//     price: 190000,
//     salePrice: 150000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/sd_sandisk_ultra_32gb.jpg",
//     ],
//     shortDesc: "Thẻ nhớ MicroSD 32GB phổ thông, giải pháp mở rộng dung lượng giá rẻ cho thiết bị di động.",
//     description: `
//       <h3>Mở rộng không gian lưu trữ dễ dàng</h3>
//       <p>Với mức giá cực kỳ phải chăng, SanDisk Ultra 32GB là giải pháp hoàn hảo để giải phóng bộ nhớ cho những chiếc điện thoại Android, máy tính bảng hay máy nghe nhạc. Bạn có thể lưu trữ thêm hàng ngàn bản nhạc MP3, tài liệu làm việc hay những bức ảnh kỷ niệm mà không lo đầy bộ nhớ máy.</p>
      
//       <h3>Tốc độ Class 10 ổn định</h3>
//       <p>Thẻ đạt chuẩn Class 10, đảm bảo tốc độ truyền tải dữ liệu cơ bản ổn định lên đến 120MB/s. Mức tốc độ này hoàn toàn đáp ứng được nhu cầu quay và phát video ở độ phân giải Full HD (1080p) mà không gặp hiện tượng đứng hình hay giật lag.</p>
//     `,
//     brand: "SanDisk",
//     specs: {
//       brand: "SanDisk",
//       storage: "32GB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn thẻ", value: "microSDHC" },
//       { label: "Dung lượng", value: "32GB" },
//       { label: "Tốc độ", value: "Class 10 (Lên đến 120MB/s)" },
//     ],
//     detailSpecs: [
//       { label: "Loại thẻ", value: "MicroSDHC (Kèm Adapter SD)" },
//       { label: "Dung lượng", value: "32GB" },
//       { label: "Tốc độ đọc", value: "Lên tới 120 MB/s" },
//       { label: "Class Video", value: "Class 10, U1" },
//       { label: "Chuẩn ứng dụng", value: "A1" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },

//   {
//     id: "SD005",
//     slug: "the-nho-sandisk-ultra-64gb",
//     name: "Thẻ nhớ SanDisk Ultra 64GB",
//     category: "sdcard",
//     subcategory: "ssd_ram_sd",
//     price: 290000,
//     salePrice: 240000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/sd_sandisk_ultra_64gb.jpg",
//     ],
//     shortDesc: "Thẻ nhớ MicroSDXC 64GB lý tưởng cho điện thoại, camera hành trình và flycam cơ bản.",
//     description: `
//       <h3>Dung lượng cân bằng, hiệu suất cao</h3>
//       <p>Phiên bản 64GB của dòng SanDisk Ultra mang lại sự cân bằng tuyệt vời giữa giá thành và không gian lưu trữ. Thẻ cung cấp đủ khoảng trống để sử dụng cho các camera an ninh (Camera IP) gia đình, camera hành trình trên ô tô hoặc máy chơi game cầm tay Nintendo Switch.</p>
      
//       <h3>Tương thích ứng dụng SanDisk Memory Zone</h3>
//       <p>Sử dụng kết hợp với ứng dụng SanDisk Memory Zone (có sẵn trên Google Play), bạn có thể dễ dàng quản lý, xem và tự động sao lưu các tập tin từ bộ nhớ trong của điện thoại sang thẻ nhớ, giúp duy trì hiệu suất hoạt động của điện thoại ở mức tốt nhất.</p>
//     `,
//     brand: "SanDisk",
//     specs: {
//       brand: "SanDisk",
//       storage: "64GB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn thẻ", value: "microSDXC" },
//       { label: "Dung lượng", value: "64GB" },
//       { label: "Tốc độ đọc", value: "Lên đến 140MB/s" },
//     ],
//     detailSpecs: [
//       { label: "Loại thẻ", value: "MicroSDXC (Kèm Adapter SD)" },
//       { label: "Dung lượng", value: "64GB" },
//       { label: "Tốc độ đọc", value: "Lên tới 140 MB/s" },
//       { label: "Class Video", value: "Class 10, U1" },
//       { label: "Chuẩn ứng dụng", value: "A1" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },

//   {
//     id: "SD006",
//     slug: "the-nho-sandisk-ultra-128gb",
//     name: "Thẻ nhớ SanDisk Ultra 128GB",
//     category: "sdcard",
//     subcategory: "ssd_ram_sd",
//     price: 490000,
//     salePrice: 420000,
//     stock: 10,
//     images: [
//       "/product_image/ssd_ram_sd/sd_sandisk_ultra_128gb.jpg",
//     ],
//     shortDesc: "Thẻ nhớ MicroSDXC 128GB, không gian rộng rãi cho các thiết bị di động hiện đại.",
//     description: `
//       <h3>Không gian cho mọi kỷ niệm</h3>
//       <p>Với 128GB dung lượng, SanDisk Ultra xóa bỏ nỗi lo "Hết dung lượng" trên các thiết bị di động. Khả năng đọc dữ liệu tốc độ cao (lên tới 140MB/s) giúp bạn di chuyển khoảng 1000 bức ảnh độ phân giải cao chỉ trong vòng một phút, cực kỳ tiết kiệm thời gian.</p>
      
//       <h3>Tặng kèm Adapter SD tiện dụng</h3>
//       <p>Mỗi thẻ nhớ MicroSD dòng Ultra đều đi kèm với một Adapter chuyển đổi kích thước sang chuẩn thẻ SD lớn. Nhờ đó, bạn có thể dễ dàng tái sử dụng chiếc thẻ này cho các thiết bị khác như máy ảnh kỹ thuật số, laptop hoặc khe đọc thẻ nhớ trên PC một cách linh hoạt nhất.</p>
//     `,
//     brand: "SanDisk",
//     specs: {
//       brand: "SanDisk",
//       storage: "128GB",
//     },
//     cardSpecs: [
//       { label: "Chuẩn thẻ", value: "microSDXC" },
//       { label: "Dung lượng", value: "128GB" },
//       { label: "Tốc độ đọc", value: "Lên đến 140MB/s" },
//     ],
//     detailSpecs: [
//       { label: "Loại thẻ", value: "MicroSDXC (Kèm Adapter SD)" },
//       { label: "Dung lượng", value: "128GB" },
//       { label: "Tốc độ đọc", value: "Lên tới 140 MB/s" },
//       { label: "Class Video", value: "Class 10, U1" },
//       { label: "Chuẩn ứng dụng", value: "A1" },
//       { label: "Bảo hành", value: "60 Tháng" },
//     ],
//   },
// ];