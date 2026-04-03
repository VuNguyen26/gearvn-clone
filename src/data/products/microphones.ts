import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const microphones = async (): Promise<Product[]> => {
  const q = query(
    collection(db, "products"),
    where("category", "==", "microphone") // ⚠️ phải match DB
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
};

// export const microphones: Product[] = [
//   {
//     id: "MIC001",
//     slug: "micro-elgato-pop-filter",
//     name: "Micro Elgato Pop Filter",
//     category: "microphone",
//     subcategory: "speaker_micro_webcam",
//     price: 990000,
//     salePrice: 890000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/micro_elgato_pop_filter/micro_elgato_pop_filter.jpg",
//       "/product_image/speaker_micro_webcam/micro_elgato_pop_filter/micro_elgato_pop_filter_02.png",
//     ],
//     shortDesc: "Phụ kiện màng lọc âm chuyên dụng, loại bỏ tiếng thở và âm bật hiệu quả.",
//     description: `
//       <h3>Âm thanh trong trẻo, sạch sẽ</h3>
//       <p>Elgato Pop Filter là phụ kiện không thể thiếu cho các Streamer và Podcaster chuyên nghiệp. Nó được thiết kế với màng lưới kép (Dual-layer) giúp loại bỏ triệt để các âm bật (Plosive) như chữ "P", "B" hoặc tiếng thở mạnh đập vào màng thu, mang lại dải âm thanh giọng nói mượt mà và dễ nghe nhất.</p>
      
//       <h3>Lắp đặt nam châm thông minh</h3>
//       <p>Sản phẩm được thiết kế tối ưu hóa cho hệ sinh thái Elgato Wave (Wave:1, Wave:3). Với cơ chế ngàm kết nối từ tính (Nam châm), bạn chỉ cần đưa Pop Filter lại gần micro là chúng sẽ tự động hút chặt vào nhau một cách hoàn hảo, không cần dùng ốc vít rườm rà.</p>
//     `,
//     brand: "Elgato",
//     specs: {
//       brand: "Elgato",
//     },
//     cardSpecs: [
//       { label: "Loại phụ kiện", value: "Màng lọc âm (Pop Filter)" },
//       { label: "Chất liệu", value: "Lưới thép / Nylon" },
//       { label: "Lắp đặt", value: "Ngàm từ tính (Nam châm)" },
//     ],
//     detailSpecs: [
//       { label: "Loại phụ kiện", value: "Màng lọc âm (Pop Filter)" },
//       { label: "Tính năng", value: "Lọc âm bật (Plosives), bảo vệ màng thu" },
//       { label: "Chất liệu", value: "Khung hợp kim, lưới thép không gỉ kép" },
//       { label: "Kích thước", value: "Vừa vặn với ngàm micro Elgato" },
//       { label: "Tương thích", value: "Elgato Wave:1, Elgato Wave:3" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "MIC002",
//     slug: "micro-hyperx-flipcast",
//     name: "Micro HyperX Flipcast",
//     category: "microphone",
//     subcategory: "speaker_micro_webcam",
//     price: 3290000,
//     salePrice: 2990000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/micro_hyper_x_flipcast/micro_hyper_x_flipcast.jpg",
//       "/product_image/speaker_micro_webcam/micro_hyper_x_flipcast/micro_hyper_x_flipcast_01.jpg",
//       "/product_image/speaker_micro_webcam/micro_hyper_x_flipcast/micro_hyper_x_flipcast_02.jpg",
//       "/product_image/speaker_micro_webcam/micro_hyper_x_flipcast/micro_hyper_x_flipcast_03.jpg",
//       "/product_image/speaker_micro_webcam/micro_hyper_x_flipcast/micro_hyper_x_flipcast_04.jpg",
//       "/product_image/speaker_micro_webcam/micro_hyper_x_flipcast/micro_hyper_x_flipcast_05.jpg",
//     ],
//     shortDesc: "Micro Condenser thiết kế xoay thông minh, âm thanh phòng thu chân thực.",
//     description: `
//       <h3>Thu âm chuyên nghiệp chuẩn Studio</h3>
//       <p>HyperX Flipcast là dòng micro Condenser mang đến chất lượng thu âm tuyệt hảo. Với dải tần số rộng và độ nhạy cao, nó bắt trọn từng sắc thái trong giọng nói của bạn. Cực kỳ lý tưởng cho các buổi lồng tiếng, ghi âm podcast hay những buổi livestream tương tác với khán giả.</p>
      
//       <h3>Tính năng Flip-to-Mute tiện lợi</h3>
//       <p>Điểm nhấn của chiếc micro này nằm ở khả năng thao tác vật lý trực quan. Bạn có thể dễ dàng tắt tiếng ngay lập tức (Mute) bằng cách gạt micro lên hoặc chạm nhẹ vào đỉnh mic. Đèn LED chỉ báo trạng thái sẽ giúp bạn luôn biết được micro đang thu âm hay đã tắt, tránh những sự cố "vạ miệng" không đáng có trên sóng trực tiếp.</p>
//     `,
//     brand: "HyperX",
//     specs: {
//       brand: "HyperX",
//     },
//     cardSpecs: [
//       { label: "Loại micro", value: "Condenser (Tụ điện)" },
//       { label: "Hướng thu", value: "Cardioid (Trái tim)" },
//       { label: "Tính năng", value: "Cảm biến chạm tắt tiếng (Mute)" },
//     ],
//     detailSpecs: [
//       { label: "Loại microphone", value: "Condenser (Tụ điện)" },
//       { label: "Hướng thu", value: "Cardioid / Đa hướng" },
//       { label: "Dải tần", value: "20Hz - 20kHz" },
//       { label: "Độ nhạy", value: "-36dB (1V/Pa at 1kHz)" },
//       { label: "Kết nối", value: "USB Type-C" },
//       { label: "Khử ồn", value: "Tích hợp màng lọc âm cơ bản" },
//       { label: "Tương thích", value: "PC, Mac, PS4, PS5" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MIC003",
//     slug: "micro-hyperx-quadcast-2s-rgb",
//     name: "Micro HyperX QuadCast 2S RGB",
//     category: "microphone",
//     subcategory: "speaker_micro_webcam",
//     price: 4990000,
//     salePrice: 4690000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/micro_hyperx_quadcast_2s_rgb/micro_hyperx_quadcast_2s_rgb.png",
//       "/product_image/speaker_micro_webcam/micro_hyperx_quadcast_2s_rgb/micro_hyperx_quadcast_2s_rgb_01.png",
//       "/product_image/speaker_micro_webcam/micro_hyperx_quadcast_2s_rgb/micro_hyperx_quadcast_2s_rgb_02.png",
//       "/product_image/speaker_micro_webcam/micro_hyperx_quadcast_2s_rgb/micro_hyperx_quadcast_2s_rgb_03.png",
//       "/product_image/speaker_micro_webcam/micro_hyperx_quadcast_2s_rgb/micro_hyperx_quadcast_2s_rgb_04.png",
//       "/product_image/speaker_micro_webcam/micro_hyperx_quadcast_2s_rgb/micro_hyperx_quadcast_2s_rgb_05.png",
//     ],
//     shortDesc: "Đỉnh cao micro Gaming, thu âm 32-bit/192kHz, dải LED aRGB có thể tùy chỉnh độc lập.",
//     description: `
//       <h3>Độ phân giải âm thanh 32-bit vô đối</h3>
//       <p>HyperX QuadCast 2S đánh dấu sự lột xác toàn diện khi hỗ trợ chuẩn âm thanh phòng thu cực kỳ cao: 32-bit/192kHz. Mọi chi tiết nhỏ nhất trong giọng nói hoặc tiếng nhạc cụ đều được số hóa một cách trung thực nhất. Thiết bị vẫn giữ lại nút xoay vật lý cho phép chuyển đổi nhanh chóng giữa 4 hướng thu (Stereo, Omnidirectional, Cardioid, Bidirectional).</p>
      
//       <h3>Nghệ thuật ánh sáng aRGB</h3>
//       <p>Không chỉ là màu đỏ đơn điệu, QuadCast 2S được trang bị hơn 100 đèn LED aRGB siêu sáng có khả năng tùy chỉnh độc lập qua phần mềm HyperX NGENUITY. Bạn có thể cho micro nhấp nháy theo âm nhạc, tạo hiệu ứng sóng màu hoặc đồng bộ với hệ thống PC. Giá chống sốc (Shock mount) đi kèm cũng được thiết kế lại gọn gàng và chắc chắn hơn.</p>
//     `,
//     brand: "HyperX",
//     specs: {
//       brand: "HyperX",
//     },
//     cardSpecs: [
//       { label: "Chất lượng âm thanh", value: "32-bit/192kHz" },
//       { label: "Hướng thu", value: "4 Chế độ (Cardioid, Stereo...)" },
//       { label: "Đèn nền", value: "aRGB 100+ vùng tùy chỉnh" },
//     ],
//     detailSpecs: [
//       { label: "Loại microphone", value: "Condenser (Tụ điện đa màng thu)" },
//       { label: "Hướng thu", value: "Stereo, Omnidirectional, Cardioid, Bidirectional" },
//       { label: "Dải tần", value: "20Hz - 20kHz" },
//       { label: "Độ phân giải", value: "32-bit / 192kHz" },
//       { label: "Độ nhạy", value: "-29dBV (1V/Pa at 1kHz)" },
//       { label: "Kết nối", value: "USB Type-C to Type-A" },
//       { label: "Phụ kiện đi kèm", value: "Shock mount tích hợp, ngàm chuyển đổi chân đế" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MIC004",
//     slug: "micro-nzxt-capsule-black",
//     name: "Micro NZXT Capsule Black",
//     category: "microphone",
//     subcategory: "speaker_micro_webcam",
//     price: 2990000,
//     salePrice: 2790000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/micro_nzxt_capsule_black/micro_nzxt_capsule_black.jpg",
//       "/product_image/speaker_micro_webcam/micro_nzxt_capsule_black/micro_nzxt_capsule_black_01.jpg",
//       "/product_image/speaker_micro_webcam/micro_nzxt_capsule_black/micro_nzxt_capsule_black_02.jpg",
//       "/product_image/speaker_micro_webcam/micro_nzxt_capsule_black/micro_nzxt_capsule_black_03.jpg",
//       "/product_image/speaker_micro_webcam/micro_nzxt_capsule_black/micro_nzxt_capsule_black_04.jpg",
//     ],
//     shortDesc: "Micro thu âm Cardioid tối giản, Plug & Play, thiết kế sang trọng phù hợp mọi không gian.",
//     description: `
//       <h3>Tối giản và thanh lịch</h3>
//       <p>NZXT Capsule mang ngôn ngữ thiết kế hình trụ nguyên khối đặc trưng của NZXT. Không màu mè, không nút bấm phức tạp, chiếc micro này là mảnh ghép hoàn hảo cho một góc setup làm việc và chơi game tinh tế (Minimalism). Lưới tản âm kim loại tích hợp sẵn màng lọc Pop Filter bên trong giúp thiết kế luôn giữ được sự liền mạch.</p>
      
//       <h3>Cắm là chạy (Plug and Play)</h3>
//       <p>Không cần bất cứ phần mềm rườm rà nào, bạn chỉ cần cắm cáp USB vào máy tính là Capsule đã sẵn sàng hoạt động. Hướng thu Cardioid (Trái tim) được tinh chỉnh để chỉ tập trung bắt giọng nói của bạn từ phía trước, đồng thời loại bỏ tối đa tiếng quạt tản nhiệt PC hay tiếng gõ bàn phím cơ ở phía sau.</p>
//     `,
//     brand: "NZXT",
//     specs: {
//       brand: "NZXT",
//     },
//     cardSpecs: [
//       { label: "Loại micro", value: "Condenser (Tụ điện)" },
//       { label: "Hướng thu", value: "Cardioid (Trái tim)" },
//       { label: "Độ phân giải", value: "24-bit/96kHz" },
//     ],
//     detailSpecs: [
//       { label: "Loại microphone", value: "Condenser (Tụ điện)" },
//       { label: "Hướng thu", value: "Cardioid (Đơn hướng)" },
//       { label: "Dải tần", value: "20Hz - 20kHz" },
//       { label: "Độ phân giải", value: "24-bit / 96kHz" },
//       { label: "Chống ồn", value: "Lưới lọc Pop Filter tích hợp bên trong" },
//       { label: "Kết nối", value: "USB Type-C" },
//       { label: "Phụ kiện đi kèm", value: "Chân đế kim loại rời, Cáp USB-C" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MIC005",
//     slug: "micro-razer-seiren-v2-pro",
//     name: "Micro Razer Seiren V2 Pro",
//     category: "microphone",
//     subcategory: "speaker_micro_webcam",
//     price: 3990000,
//     salePrice: 3690000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/micro_razer_seiren_v2_pro/micro_razer_seiren_v2_pro.png",
//       "/product_image/speaker_micro_webcam/micro_razer_seiren_v2_pro/micro_razer_seiren_v2_pro_01.jpg",
//       "/product_image/speaker_micro_webcam/micro_razer_seiren_v2_pro/micro_razer_seiren_v2_pro_02.jpg",
//       "/product_image/speaker_micro_webcam/micro_razer_seiren_v2_pro/micro_razer_seiren_v2_pro_03.jpg",
//     ],
//     shortDesc: "Micro Dynamic đẳng cấp, mang lại chất giọng Radio trầm ấm, loại bỏ tạp âm xuất sắc.",
//     description: `
//       <h3>Chất giọng Radio trầm ấm (Dynamic Mic)</h3>
//       <p>Khác biệt với đa số mic thu âm dùng tụ điện (Condenser), Razer Seiren V2 Pro là một chiếc micro Dynamic (Cơ động). Đặc tính này giúp nó tái tạo giọng nói vô cùng trầm ấm, dày dặn giống như các phát thanh viên Radio chuyên nghiệp, đồng thời có khả năng "làm ngơ" với hầu hết các tạp âm từ môi trường xung quanh.</p>
      
//       <h3>Bộ lọc High-Pass và Analog Gain Limiter</h3>
//       <p>Sản phẩm được tích hợp bộ lọc thông cao (High-Pass Filter) có thể bật/tắt qua Razer Synapse, giúp cắt bỏ ngay lập tức tiếng ồn ở dải tần thấp như tiếng điều hòa hay tiếng rung của PC. Công nghệ Analog Gain Limiter tự động điều chỉnh mức thu khi bạn lỡ hét lớn (ví dụ khi chơi game kinh dị), đảm bảo âm thanh truyền đi không bị rè hay méo tiếng.</p>
//     `,
//     brand: "Razer",
//     specs: {
//       brand: "Razer",
//     },
//     cardSpecs: [
//       { label: "Loại micro", value: "Dynamic (Cơ động)" },
//       { label: "Hướng thu", value: "Cardioid" },
//       { label: "Tính năng", value: "Analog Gain Limiter (Chống vỡ tiếng)" },
//     ],
//     detailSpecs: [
//       { label: "Loại microphone", value: "Dynamic (Micro điện động)" },
//       { label: "Hướng thu", value: "Cardioid (Trái tim)" },
//       { label: "Dải tần", value: "20Hz - 20kHz" },
//       { label: "Độ nhạy", value: "-34dB (1V/Pa at 1kHz)" },
//       { label: "Tính năng nổi bật", value: "High Pass Filter, Analog Gain Limiter" },
//       { label: "Kết nối", value: "USB Type-C" },
//       { label: "Phụ kiện đi kèm", value: "Mút lọc gió, Cáp USB bọc dù" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "MIC006",
//     slug: "micro-razer-seiren-v3-chroma-white",
//     name: "Micro Razer Seiren V3 Chroma White",
//     category: "microphone",
//     subcategory: "speaker_micro_webcam",
//     price: 4290000,
//     salePrice: 3990000,
//     stock: 10,
//     images: [
//       "/product_image/speaker_micro_webcam/micro_razer_seiren_v3_chroma_white/micro_razer_seiren_v3_chroma_white.png",
//       "/product_image/speaker_micro_webcam/micro_razer_seiren_v3_chroma_white/micro_razer_seiren_v3_chroma_white_01.png",
//       "/product_image/speaker_micro_webcam/micro_razer_seiren_v3_chroma_white/micro_razer_seiren_v3_chroma_white_02.png",
//       "/product_image/speaker_micro_webcam/micro_razer_seiren_v3_chroma_white/micro_razer_seiren_v3_chroma_white_03.png",
//     ],
//     shortDesc: "Micro Condenser Supercardioid, thân phát sáng Chroma RGB 360 độ cực rực rỡ.",
//     description: `
//       <h3>Thắp sáng không gian Streaming</h3>
//       <p>Razer Seiren V3 Chroma khoác lên mình lớp vỏ phát sáng 360 độ hoàn toàn mới. Hàng triệu màu sắc và hiệu ứng Chroma RGB sẽ phản ứng trực tiếp với các tương tác trên Stream (như khi có người Donate hoặc Follow), biến chiếc micro thành một thiết bị giải trí thực thụ chứ không chỉ để thu âm.</p>
      
//       <h3>Cảm biến chạm thông minh (Tap-to-Mute)</h3>
//       <p>Đỉnh của micro được tích hợp cảm biến chạm đa chức năng. Bạn có thể gõ nhẹ 1 lần để tắt/bật mic, gõ 2 lần hoặc 3 lần để điều chỉnh chu kỳ đèn LED hoặc mức Gain (độ nhạy) mà không cần phải dùng phím tắt trên phần mềm. Thiết kế hướng thu Supercardioid (Siêu định hướng) ở mặt trước giúp giọng nói của bạn luôn sắc nét, gạt bỏ hoàn toàn tiếng gõ chuột và bàn phím ở xung quanh.</p>
//     `,
//     brand: "Razer",
//     specs: {
//       brand: "Razer",
//     },
//     cardSpecs: [
//       { label: "Hướng thu", value: "Supercardioid (Siêu định hướng)" },
//       { label: "Đèn nền", value: "Razer Chroma RGB 360 độ" },
//       { label: "Điều khiển", value: "Cảm biến chạm đa chức năng" },
//     ],
//     detailSpecs: [
//       { label: "Loại microphone", value: "Condenser (Tụ điện) củ mic 16mm" },
//       { label: "Hướng thu", value: "Supercardioid (Siêu định hướng)" },
//       { label: "Dải tần", value: "20Hz - 20kHz" },
//       { label: "Độ nhạy", value: "-34dB" },
//       { label: "Đèn nền", value: "Chroma RGB tương tác với luồng Stream" },
//       { label: "Kết nối", value: "USB Type-C to Type-A" },
//       { label: "Tương thích", value: "Windows PC, Razer Synapse" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },
// ];