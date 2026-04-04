import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const webcams = async (): Promise<Product[]> => {
  const CACHE_KEY = "webcam_products_session";

  // 1. Kiểm tra SessionStorage trước (Tiết kiệm Quota)
  const cachedData = sessionStorage.getItem(CACHE_KEY);
  if (cachedData) {
    console.log("📷 Lấy dữ liệu Webcam từ Session Storage (0 Read)");
    return JSON.parse(cachedData) as Product[];
  }

  // 2. Nếu chưa có, mới gọi Firebase
  try {
    const q = query(
      collection(db, "products"),
      where("category", "==", "webcam") 
    );

    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];

    // 3. Lưu vào bộ nhớ tạm của Tab hiện tại
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(products));
    return products;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu webcams:", error);
    return [];
  }
};

// export const webcams: Product[] = [
//   {
//     id: "WBC001",
//     slug: "webcam-logitech-brio-4k",
//     name: "Webcam Logitech Brio 4K",
//     category: "webcam",
//     subcategory: "speaker_micro_webcam",
//     price: 4990000,
//     salePrice: 4590000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_4k/webcam_logitech_brio_4k.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_4k/webcam_logitech_brio_4k_01.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_4k/webcam_logitech_brio_4k_02.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_4k/webcam_logitech_brio_4k_03.png",
//     ],
//     shortDesc: "Webcam đỉnh cao với độ phân giải 4K Ultra HD, hỗ trợ HDR và Windows Hello.",
//     description: `
//       <h3>Chất lượng hình ảnh 4K Ultra HD</h3>
//       <p>Logitech Brio 4K là tiêu chuẩn vàng cho các buổi họp trực tuyến chuyên nghiệp và phát trực tiếp (Streaming). Với ống kính quang học cao cấp, thiết bị cung cấp độ phân giải lên tới 4K Ultra HD ở 30 khung hình/giây hoặc 1080p ở 60 khung hình/giây, mang lại sự rõ nét, mượt mà và chi tiết đến từng chân tơ kẽ tóc.</p>
      
//       <h3>Công nghệ RightLight 3 & Windows Hello</h3>
//       <p>Nhờ tích hợp công nghệ HDR (RightLight 3), webcam tự động điều chỉnh ánh sáng để làm nổi bật khuôn mặt bạn dù trong môi trường thiếu sáng hay bị ngược sáng mạnh. Đặc biệt, Brio 4K được trang bị cảm biến hồng ngoại (IR) hỗ trợ tính năng nhận diện khuôn mặt Windows Hello, giúp bạn mở khóa máy tính an toàn và nhanh chóng mà không cần nhập mật khẩu.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Độ phân giải", value: "4K Ultra HD (30fps)" },
//       { label: "Góc nhìn (FOV)", value: "Tùy chỉnh 65°/78°/90°" },
//       { label: "Tính năng", value: "HDR / Windows Hello" },
//     ],
//     detailSpecs: [
//       { label: "Độ phân giải tối đa", value: "4K/30fps hoặc 1080p/60fps" },
//       { label: "Góc nhìn (FOV)", value: "Chéo 65°, 78° hoặc 90°" },
//       { label: "Loại tiêu cự", value: "Lấy nét tự động (Autofocus)" },
//       { label: "Microphone", value: "Micrô kép thu hướng âm, chống ồn" },
//       { label: "Công nghệ hình ảnh", value: "RightLight 3 với HDR" },
//       { label: "Tính năng bảo mật", value: "Nhận diện khuôn mặt Windows Hello" },
//       { label: "Cổng kết nối", value: "USB-A (Kèm cáp có thể tháo rời)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "WBC002",
//     slug: "webcam-logitech-brio-100-graphite",
//     name: "Webcam Logitech Brio 100 Graphite",
//     category: "webcam",
//     subcategory: "speaker_micro_webcam",
//     price: 1090000,
//     salePrice: 990000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_100_graphite/webcam_logitech_brio_100_graphite.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_100_graphite/webcam_logitech_brio_100_graphite_01.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_100_graphite/webcam_logitech_brio_100_graphite_02.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_100_graphite/webcam_logitech_brio_100_graphite_03.png",
//     ],
//     shortDesc: "Webcam Full HD 1080p tích hợp nắp che bảo mật, cân bằng sáng tự động tốt.",
//     description: `
//       <h3>Nâng cấp sắc nét với Full HD 1080p</h3>
//       <p>Logitech Brio 100 mang đến sự cải thiện rõ rệt so với các dòng webcam máy tính xách tay tiêu chuẩn. Độ phân giải Full HD 1080p kết hợp công nghệ tự động cân bằng ánh sáng RightLight tăng độ sáng lên tới 50%, giúp hình ảnh của bạn luôn rõ ràng và chuyên nghiệp trong các buổi học online hay họp nhóm.</p>
      
//       <h3>Bảo mật riêng tư tuyệt đối</h3>
//       <p>Thiết bị được thiết kế với một nắp che ống kính (Privacy Shutter) tích hợp trượt ngang vô cùng tiện lợi. Sau khi kết thúc cuộc gọi, bạn chỉ cần gạt nhẹ nắp che để chặn hoàn toàn tầm nhìn của ống kính, đảm bảo sự riêng tư tuyệt đối cho không gian cá nhân của bạn.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Độ phân giải", value: "Full HD 1080p (30fps)" },
//       { label: "Bảo mật", value: "Nắp che ống kính trượt" },
//       { label: "Cân bằng sáng", value: "RightLight tự động" },
//     ],
//     detailSpecs: [
//       { label: "Độ phân giải tối đa", value: "1080p/30fps hoặc 720p/30fps" },
//       { label: "Góc nhìn (FOV)", value: "Chéo 58°" },
//       { label: "Loại tiêu cự", value: "Cố định (Fixed focus)" },
//       { label: "Microphone", value: "Micrô đa hướng tích hợp" },
//       { label: "Bảo vệ riêng tư", value: "Màn chập vật lý (Privacy Shutter)" },
//       { label: "Kết nối", value: "Cáp USB-A gắn liền" },
//       { label: "Tương thích", value: "Windows, macOS, ChromeOS" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "WBC003",
//     slug: "webcam-logitech-brio-500-pink",
//     name: "Webcam Logitech Brio 500 Pink",
//     category: "webcam",
//     subcategory: "speaker_micro_webcam",
//     price: 2990000,
//     salePrice: 2790000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_500_pink/webcam_logitech_brio_500_pink.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_500_pink/webcam_logitech_brio_500_pink_01.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_500_pink/webcam_logitech_brio_500_pink_02.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_500_pink/webcam_logitech_brio_500_pink_03.png",
//       "/product_image/speaker_micro_webcam/webcam_logitech_brio_500_pink/webcam_logitech_brio_500_pink_04.png",
//     ],
//     shortDesc: "Webcam 1080p màu Hồng thời trang, tự động lấy khung hình và chế độ Hiển thị (Show Mode).",
//     description: `
//       <h3>Tự động căn chỉnh khung hình (Auto-Framing)</h3>
//       <p>Logitech Brio 500 sở hữu công nghệ RightSight tự động lấy nét và theo dõi khuôn mặt bạn (Auto-Framing). Ngay cả khi bạn đứng lên hay di chuyển xung quanh bàn làm việc, ống kính vẫn linh hoạt bắt theo chuyển động để đảm bảo bạn luôn là tâm điểm của khung hình.</p>
      
//       <h3>Chế độ Show Mode độc đáo</h3>
//       <p>Với ngàm kẹp từ tính linh hoạt, bạn có thể dễ dàng nghiêng webcam chúi thẳng xuống mặt bàn để kích hoạt "Show Mode". Chế độ này tự động lật lại hình ảnh cho đúng chiều, cực kỳ hữu ích nếu bạn cần trình bày bản phác thảo trên giấy, hoặc hướng dẫn thủ công (crafting) cho đồng nghiệp, học sinh đang xem qua màn hình.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Độ phân giải", value: "Full HD 1080p (60fps)" },
//       { label: "Góc nhìn (FOV)", value: "Tùy chỉnh 90°/78°/65°" },
//       { label: "Tính năng", value: "Auto-Framing / Show Mode" },
//     ],
//     detailSpecs: [
//       { label: "Độ phân giải tối đa", value: "1080p/60fps" },
//       { label: "Góc nhìn (FOV)", value: "Chéo 90° / 78° / 65°" },
//       { label: "Loại tiêu cự", value: "Lấy nét tự động (Autofocus)" },
//       { label: "Microphone", value: "Micrô kép khử tiếng ồn" },
//       { label: "Công nghệ thông minh", value: "RightLight 4, RightSight Auto-Framing" },
//       { label: "Bảo vệ riêng tư", value: "Nắp che xoay xoắn ốc" },
//       { label: "Kết nối", value: "Cáp USB Type-C gắn liền" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "WBC004",
//     slug: "webcam-logitech-c930e",
//     name: "Webcam Logitech C930e",
//     category: "webcam",
//     subcategory: "speaker_micro_webcam",
//     price: 2490000,
//     salePrice: 2290000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/webcam_logitech_c930e/webcam_logitech_c930e.png",
//     ],
//     shortDesc: "Webcam dành cho doanh nghiệp, góc nhìn siêu rộng 90 độ, chuẩn mã hóa H.264.",
//     description: `
//       <h3>Trường ngắm siêu rộng 90 độ</h3>
//       <p>Logitech C930e là giải pháp hoàn hảo cho các phòng họp nhỏ hoặc buổi thuyết trình cá nhân nhờ ống kính có góc nhìn cực rộng lên đến 90 độ. Với trường ngắm này, webcam dễ dàng thu trọn toàn bộ bảng trắng (Whiteboard) hoặc nhiều người ngồi cạnh nhau mà không gây hiệu ứng méo hình ở góc (fisheye).</p>
      
//       <h3>Băng thông tối ưu với chuẩn H.264</h3>
//       <p>Sản phẩm được tích hợp công nghệ nén video H.264 tiên tiến ngay trên phần cứng của webcam. Tính năng này giúp xử lý quá trình giải mã trực tiếp, giải phóng băng thông mạng và tài nguyên máy tính, mang đến luồng video Full HD 1080p mượt mà liên tục kể cả trong điều kiện mạng yếu.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Độ phân giải", value: "Full HD 1080p (30fps)" },
//       { label: "Góc nhìn (FOV)", value: "90° (Siêu rộng)" },
//       { label: "Mã hóa video", value: "H.264 UVC 1.5" },
//     ],
//     detailSpecs: [
//       { label: "Độ phân giải tối đa", value: "1080p/30fps" },
//       { label: "Góc nhìn (FOV)", value: "Chéo 90° (Rộng)" },
//       { label: "Thu phóng (Zoom)", value: "Digital Zoom 4X (ở 1080p)" },
//       { label: "Công nghệ hình ảnh", value: "RightLight 2 tự động lấy sáng" },
//       { label: "Microphone", value: "2 mic đa hướng chống ồn" },
//       { label: "Nén video", value: "H.264 UVC 1.5 với công nghệ SVC" },
//       { label: "Kết nối", value: "Cáp USB-A 1.5m" },
//       { label: "Bảo hành", value: "36 Tháng" },
//     ],
//   },

//   {
//     id: "WBC005",
//     slug: "webcam-rapoo-c200-hd-720p",
//     name: "Webcam Rapoo C200 HD 720P",
//     category: "webcam",
//     subcategory: "speaker_micro_webcam",
//     price: 590000,
//     salePrice: 490000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/webcam_rapoo_c200_hd_720p/webcam_rapoo_c200_hd_720.jpg",
//       "/product_image/speaker_micro_webcam/webcam_rapoo_c200_hd_720p/webcam_rapoo_c200_hd_720_01.jpg",
//       "/product_image/speaker_micro_webcam/webcam_rapoo_c200_hd_720p/webcam_rapoo_c200_hd_720_02.jpg",
//     ],
//     shortDesc: "Webcam cơ bản, xoay 360 độ linh hoạt, giải pháp tiết kiệm cho học sinh sinh viên.",
//     description: `
//       <h3>Giao tiếp hình ảnh mượt mà</h3>
//       <p>Rapoo C200 cung cấp khả năng đàm thoại video chuẩn HD 720p sắc nét, tốc độ khung hình ổn định. Đây là lựa chọn tối ưu về mặt chi phí dành cho học sinh, sinh viên cần một thiết bị đáng tin cậy phục vụ cho việc học tập trực tuyến (Zoom, Google Meet, MS Teams) thay thế cho camera mờ nhòe của laptop.</p>
      
//       <h3>Xoay 360 độ đa hướng</h3>
//       <p>Chân đế kẹp đa năng của webcam không chỉ cho phép gắn chắc chắn trên viền mọi loại màn hình mà còn sở hữu khớp xoay 360 độ theo chiều ngang. Bạn có thể dễ dàng xoay ống kính hướng về bất cứ góc nào trong phòng mà không cần phải tháo dỡ và lắp lại toàn bộ kẹp.</p>
//     `,
//     brand: "Rapoo",
//     specs: {
//       brand: "Rapoo",
//     },
//     cardSpecs: [
//       { label: "Độ phân giải", value: "HD 720p" },
//       { label: "Khớp xoay", value: "Xoay ngang 360 độ" },
//       { label: "Microphone", value: "Tích hợp đa hướng" },
//     ],
//     detailSpecs: [
//       { label: "Độ phân giải tối đa", value: "720p/30fps" },
//       { label: "Góc nhìn (FOV)", value: "Chéo 68°" },
//       { label: "Loại tiêu cự", value: "Cố định (Fixed focus)" },
//       { label: "Khả năng xoay", value: "360° theo chiều ngang" },
//       { label: "Microphone", value: "Micrô đơn hướng tích hợp" },
//       { label: "Kết nối", value: "Cáp USB-A (Cắm là chạy)" },
//       { label: "Tương thích", value: "Windows 7 trở lên, macOS, ChromeOS" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },
// ];