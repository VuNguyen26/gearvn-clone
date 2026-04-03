 import { collection, getDocs, query, where } from "firebase/firestore";
 import { db } from "@/lib/firebase";
 import { Product } from "@/types/product";
 
 export const headphones = async (): Promise<Product[]> => {
   const q = query(
     collection(db, "products"),
     where("category", "==", "headphone") // ⚠️ phải match DB
   );
 
   const snapshot = await getDocs(q);
 
   return snapshot.docs.map(doc => ({
     id: doc.id,
     ...doc.data(),
   })) as Product[];
 };

// export const headphones: Product[] = [
//   {
//     id: "HP001",
//     slug: "tai-nghe-asus-rog-cetra-true-wireless",
//     name: "Tai nghe ASUS ROG Cetra True Wireless",
//     category: "headphone",
//     subcategory: "headphones",
//     price: 2490000,
//     salePrice: 2290000,
//     stock: 10,
//     images: [
//       "/product_image/headphones/headphone_asus_rog_cetra_cetra_true/headphone_asus_rog_cetra_cetra_true_wireless.jpg",
//       "/product_image/headphones/headphone_asus_rog_cetra_cetra_true/headphone_asus_rog_cetra_cetra_true_01.jpg",
//       "/product_image/headphones/headphone_asus_rog_cetra_cetra_true/headphone_asus_rog_cetra_cetra_true_02.jpg",
//       "/product_image/headphones/headphone_asus_rog_cetra_cetra_true/headphone_asus_rog_cetra_cetra_true_03.jpg",
//       "/product_image/headphones/headphone_asus_rog_cetra_cetra_true/headphone_asus_rog_cetra_cetra_true_04.jpg",
//     ],
//     shortDesc: "Tai nghe True Wireless gaming với chống ồn chủ động ANC và chế độ độ trễ thấp.",
//     description: `
//       <h3>Chống ồn chủ động (Hybrid ANC)</h3>
//       <p>ASUS ROG Cetra True Wireless mang đến không gian âm thanh tĩnh lặng tuyệt đối nhờ công nghệ chống ồn chủ động kết hợp (Hybrid ANC). Tính năng này sẽ lọc bỏ mọi tiếng ồn từ môi trường xung quanh, giúp bạn tập trung cao độ vào những trận chiến căng thẳng hay đắm chìm trong bản nhạc yêu thích.</p>
      
//       <h3>Kết nối không dây độ trễ siêu thấp</h3>
//       <p>Với chế độ Gaming Mode chuyên dụng, tai nghe tối ưu hóa độ trễ âm thanh qua kết nối Bluetooth, đảm bảo sự đồng bộ hoàn hảo giữa hình ảnh và âm thanh trong các tựa game bắn súng hoặc nhịp độ nhanh. Thời lượng pin cực khủng lên đến 27 giờ (khi dùng kèm hộp sạc) giúp trải nghiệm giải trí không bị gián đoạn.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Bluetooth (True Wireless)" },
//       { label: "Tính năng", value: "Chống ồn ANC / Gaming Mode" },
//       { label: "Thời lượng pin", value: "Lên đến 27 giờ" },
//     ],
//     detailSpecs: [
//       { label: "Loại tai nghe", value: "True Wireless (In-ear)" },
//       { label: "Màng loa (Driver)", value: "10mm Neodymium" },
//       { label: "Chống ồn", value: "Hybrid Active Noise Cancelation (ANC)" },
//       { label: "Microphone", value: "Đa hướng (Omnidirectional)" },
//       { label: "Kết nối", value: "Bluetooth" },
//       { label: "Thời lượng pin", value: "Tai nghe 5.5h + Hộp sạc 21.5h" },
//       { label: "Chuẩn kháng nước", value: "IPX4" },
//       { label: "Tương thích", value: "PC, Mac, iOS, Android, Nintendo Switch" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "HP002",
//     slug: "tai-nghe-asus-rog-cetra-ii-core",
//     name: "Tai nghe ASUS ROG Cetra II Core",
//     category: "headphone",
//     subcategory: "headphones",
//     price: 1690000,
//     salePrice: 1490000,
//     stock: 10,
//     images: [
//       "/product_image/headphones/headphone_asus_rog_cetra_ii_core/headphone_asus_rog_cetra_ii_core.jpg",
//       "/product_image/headphones/headphone_asus_rog_cetra_ii_core/headphone_asus_rog_cetra_ii_core_01.jpg",
//       "/product_image/headphones/headphone_asus_rog_cetra_ii_core/headphone_asus_rog_cetra_ii_core_02.jpg",
//       "/product_image/headphones/headphone_asus_rog_cetra_ii_core/headphone_asus_rog_cetra_ii_core_03.jpg",
//       "/product_image/headphones/headphone_asus_rog_cetra_ii_core/headphone_asus_rog_cetra_ii_core_04.jpg",
//     ],
//     shortDesc: "Tai nghe In-ear gaming vỏ nhôm cao cấp, sử dụng driver LSR siêu bền.",
//     description: `
//       <h3>Âm thanh chi tiết với màng loa LSR</h3>
//       <p>ASUS ROG Cetra II Core được trang bị driver ASUS Essence làm từ vật liệu cao su silicone lỏng (LSR) tiên tiến. Chất liệu này giúp mang lại hiệu suất âm thanh vô cùng ổn định, tái tạo dải âm trầm (bass) sâu lắng, uy lực và dải cao sắc nét, hoàn hảo cho cả chơi game lẫn nghe nhạc.</p>
      
//       <h3>Thiết kế công thái học và bền bỉ</h3>
//       <p>Phần vỏ tai nghe được chế tác từ hợp kim nhôm chống xước, không chỉ tăng vẻ đẹp góc cạnh, mạnh mẽ mà còn giúp tai nghe tản nhiệt tốt, giảm trọng lượng tổng thể. Thiết kế vây giữ tai (ear fins) cũng bằng silicone lỏng mang lại sự vừa vặn hoàn hảo, không gây đau tai khi đeo lâu.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Jack 3.5mm" },
//       { label: "Vật liệu màng loa", value: "Cao su Silicone lỏng (LSR)" },
//       { label: "Chất liệu vỏ", value: "Hợp kim nhôm" },
//     ],
//     detailSpecs: [
//       { label: "Loại tai nghe", value: "In-ear Có dây" },
//       { label: "Màng loa (Driver)", value: "ASUS Essence (vật liệu LSR)" },
//       { label: "Tần số phản hồi", value: "20Hz - 40KHz" },
//       { label: "Microphone", value: "Tích hợp trên dây (In-line), Đa hướng" },
//       { label: "Kết nối", value: "Jack âm thanh 3.5mm" },
//       { label: "Trọng lượng", value: "18g" },
//       { label: "Tương thích", value: "PC, Mac, PS4/PS5, Xbox, Nintendo Switch, Mobile" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "HP003",
//     slug: "tai-nghe-hyperx-cloud-stinger-core-2",
//     name: "Tai nghe HyperX Cloud Stinger Core 2",
//     category: "headphone",
//     subcategory: "headphones",
//     price: 990000,
//     salePrice: 790000,
//     stock: 10,
//     images: [
//       "/product_image/headphones/headphone_hyperx_cloud/headphone_hyperx_cloud_stinger_core2.png",
//       "/product_image/headphones/headphone_hyperx_cloud/headphone_hyperx_cloud_01.jpg",
//       "/product_image/headphones/headphone_hyperx_cloud/headphone_hyperx_cloud_02.jpg",
//       "/product_image/headphones/headphone_hyperx_cloud/headphone_hyperx_cloud_03.jpg",
//       "/product_image/headphones/headphone_hyperx_cloud/headphone_hyperx_cloud_04.jpg",
//     ],
//     shortDesc: "Tai nghe Over-ear gaming siêu nhẹ, âm thanh vòm không gian DTS Headphone:X.",
//     description: `
//       <h3>Trải nghiệm âm thanh vòm DTS</h3>
//       <p>Nâng cấp khả năng định vị mục tiêu trong game nhờ công nghệ âm thanh không gian DTS Headphone:X. Tai nghe HyperX Cloud Stinger Core 2 mang đến môi trường âm thanh 3D sống động, cho phép bạn nghe rõ từng tiếng bước chân hay tiếng thay đạn của kẻ thù từ mọi hướng.</p>
      
//       <h3>Trọng lượng siêu nhẹ, thoải mái tuyệt đối</h3>
//       <p>Với trọng lượng chưa đến 280g, kết hợp cùng đệm tai bằng mút hoạt tính bọc vải thoáng khí đặc trưng của HyperX, tai nghe giúp bạn cày cuốc hàng giờ đồng hồ mà không hề cảm thấy nặng đầu hay bí bách. Micro xoay để tắt tiếng (Swivel-to-mute) cực kỳ tiện dụng trong giao tiếp.</p>
//     `,
//     brand: "HyperX",
//     specs: {
//       brand: "HyperX",
//     },
//     cardSpecs: [
//       { label: "Loại tai nghe", value: "Over-ear (Chụp tai)" },
//       { label: "Công nghệ âm thanh", value: "DTS Headphone:X Spatial" },
//       { label: "Microphone", value: "Xoay để tắt tiếng (Swivel-to-mute)" },
//     ],
//     detailSpecs: [
//       { label: "Loại tai nghe", value: "Over-ear (Chụp tai) Có dây" },
//       { label: "Màng loa (Driver)", value: "40mm Dynamic từ tính Neodymium" },
//       { label: "Tần số phản hồi", value: "10Hz - 25kHz" },
//       { label: "Âm thanh vòm", value: "DTS Headphone:X (Thông qua phần mềm)" },
//       { label: "Microphone", value: "Electret condenser, chống ồn" },
//       { label: "Kết nối", value: "Jack 3.5mm (Kèm dây chia PC)" },
//       { label: "Trọng lượng", value: "Xấp xỉ 275g" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "HP004",
//     slug: "tai-nghe-hyperx-cloud-earbuds-2-red",
//     name: "Tai nghe HyperX Cloud Earbuds 2 Red",
//     category: "headphone",
//     subcategory: "headphones",
//     price: 1190000,
//     salePrice: 990000,
//     stock: 10,
//     images: [
//       "/product_image/headphones/headphone_hyperx_cloud_earbuds/headphone_hyperx_cloud_earbuds_2_red.gif",
//       "/product_image/headphones/headphone_hyperx_cloud_earbuds/headphone_hyperx_cloud_earbuds_01.gif",
//       "/product_image/headphones/headphone_hyperx_cloud_earbuds/headphone_hyperx_cloud_earbuds_02.gif",
//       "/product_image/headphones/headphone_hyperx_cloud_earbuds/headphone_hyperx_cloud_earbuds_03.gif",
//       "/product_image/headphones/headphone_hyperx_cloud_earbuds/headphone_hyperx_cloud_earbuds_04.jpg",
//     ],
//     shortDesc: "Tai nghe In-ear tối ưu cho game mobile và Switch, màng loa 14mm sống động.",
//     description: `
//       <h3>Bản nâng cấp hoàn hảo cho Mobile Gamer</h3>
//       <p>Kế thừa thành công của thế hệ đầu tiên, HyperX Cloud Earbuds 2 tiếp tục là lựa chọn tối ưu cho những ai thích chơi game trên điện thoại và Nintendo Switch. Màng loa 14mm được tinh chỉnh để tối ưu hóa âm thanh vòm ảo, giúp nổi bật các hiệu ứng âm thanh dải trung và cao.</p>
      
//       <h3>Cắm góc 90 độ, chống rối dây</h3>
//       <p>Cáp kết nối được thiết kế dạng bẹt chống rối siêu bền, kết hợp với jack cắm 3.5mm hình chữ L góc 90 độ. Thiết kế này giúp đầu cắm không bị cấn vào tay khi bạn cầm điện thoại theo chiều ngang, mang lại tư thế chơi game thoải mái nhất.</p>
//     `,
//     brand: "HyperX",
//     specs: {
//       brand: "HyperX",
//     },
//     cardSpecs: [
//       { label: "Thiết kế", value: "In-ear (Nhét tai)" },
//       { label: "Màng loa", value: "14mm Dynamic" },
//       { label: "Phụ kiện", value: "Tặng kèm hộp đựng cứng" },
//     ],
//     detailSpecs: [
//       { label: "Loại tai nghe", value: "In-ear Có dây" },
//       { label: "Màng loa (Driver)", value: "14mm Dynamic Neodymium" },
//       { label: "Tần số phản hồi", value: "20Hz - 20kHz" },
//       { label: "Nút tai (Ear tips)", value: "Silicone công thái học (4 kích cỡ)" },
//       { label: "Microphone", value: "Tích hợp trên dây (In-line)" },
//       { label: "Kết nối", value: "Jack 3.5mm (Góc 90 độ chữ L)" },
//       { label: "Tương thích", value: "Mobile, Nintendo Switch, PC (Cần jack gộp)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "HP005",
//     slug: "tai-nghe-onikuma-in-ear-t20-tws",
//     name: "Tai nghe Onikuma In Ear T20 TWS",
//     category: "headphone",
//     subcategory: "headphones",
//     price: 690000,
//     salePrice: 590000,
//     stock: 10,
//     images: [
//       "/product_image/headphones/headphone_onikuma_in_ear_t20/headphone_onikuma_in_ear_t20_tws.jpg",
//       "/product_image/headphones/headphone_onikuma_in_ear_t20/headphone_onikuma_in_ear_t20_01.jpg",
//     ],
//     shortDesc: "Tai nghe True Wireless phong cách Cyberpunk, đèn LED RGB nổi bật.",
//     description: `
//       <h3>Thiết kế Mecha Cyberpunk cực ngầu</h3>
//       <p>Onikuma T20 TWS gây ấn tượng mạnh với hộp sạc mang thiết kế đậm chất tương lai, vỏ máy trong suốt kết hợp với dải đèn LED RGB nhấp nháy chuyển màu liên tục. Đây không chỉ là một chiếc tai nghe mà còn là một món phụ kiện công nghệ thể hiện cá tính mạnh mẽ.</p>
      
//       <h3>Công nghệ Bluetooth 5.3 mượt mà</h3>
//       <p>Được trang bị chuẩn kết nối Bluetooth 5.3 mới nhất, tai nghe đảm bảo đường truyền ổn định, giảm thiểu tình trạng giật lag và tiêu hao ít điện năng hơn. Chế độ Gaming Mode chuyên dụng giúp giảm độ trễ tín hiệu xuống mức thấp, đáp ứng tốt cho các tựa game MOBA, FPS trên di động.</p>
//     `,
//     brand: "Onikuma",
//     specs: {
//       brand: "Onikuma",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Bluetooth 5.3" },
//       { label: "Thiết kế", value: "Trong suốt (Cyberpunk) có LED" },
//       { label: "Độ trễ", value: "Chế độ Gaming Mode" },
//     ],
//     detailSpecs: [
//       { label: "Loại tai nghe", value: "True Wireless (In-ear)" },
//       { label: "Kết nối", value: "Bluetooth 5.3" },
//       { label: "Phạm vi hoạt động", value: "Lên đến 10m" },
//       { label: "Thời gian sử dụng", value: "Khoảng 4-5 giờ / 1 lần sạc" },
//       { label: "Microphone", value: "Tích hợp hỗ trợ đàm thoại" },
//       { label: "Đèn nền", value: "LED RGB trên hộp sạc" },
//       { label: "Dung lượng pin hộp", value: "300 mAh" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "HP006",
//     slug: "tai-nghe-onikuma-in-ear-t301-tws",
//     name: "Tai nghe Onikuma In Ear T301 TWS",
//     category: "headphone",
//     subcategory: "headphones",
//     price: 790000,
//     salePrice: 690000,
//     stock: 10,
//     images: [
//       "/product_image/headphones/headphone_onikuma_in_ear_t301/headphone_onikuma_in_ear_t301_tws.jpg",
//       "/product_image/headphones/headphone_onikuma_in_ear_t301/headphone_onikuma_in_ear_t301_01.jpg",
//       "/product_image/headphones/headphone_onikuma_in_ear_t301/headphone_onikuma_in_ear_t301_02.jpg",
//       "/product_image/headphones/headphone_onikuma_in_ear_t301/headphone_onikuma_in_ear_t301_03.jpg",
//       "/product_image/headphones/headphone_onikuma_in_ear_t301/headphone_onikuma_in_ear_t301_04.jpg",
//     ],
//     shortDesc: "Tai nghe TWS kiểu dáng Half-in-ear êm ái, âm thanh rõ ràng cho đàm thoại và giải trí.",
//     description: `
//       <h3>Thoải mái cả ngày dài (Half-in-ear)</h3>
//       <p>Không sử dụng đệm cao su gây bí bách, Onikuma T301 áp dụng thiết kế Half-in-ear (nửa tai) vô cùng thân thiện với cấu trúc tai người dùng. Bạn có thể đeo tai nghe nhiều giờ liền để học tập trực tuyến, nghe nhạc hay đàm thoại mà vẫn cảm thấy cực kỳ thoải mái.</p>
      
//       <h3>Âm thanh chi tiết, đàm thoại rõ ràng</h3>
//       <p>Sở hữu màng loa kích thước lớn 13mm, tai nghe tái tạo âm thanh cân bằng, giọng hát vocal chi tiết và âm bass vừa đủ lực. Hệ thống micro tích hợp thuật toán lọc tiếng ồn môi trường giúp giọng nói của bạn được truyền đi rõ ràng hơn khi gọi điện.</p>
//     `,
//     brand: "Onikuma",
//     specs: {
//       brand: "Onikuma",
//     },
//     cardSpecs: [
//       { label: "Thiết kế", value: "Half-in-ear (Nửa tai)" },
//       { label: "Màng loa", value: "13mm Dynamic" },
//       { label: "Kết nối", value: "Bluetooth 5.3" },
//     ],
//     detailSpecs: [
//       { label: "Loại tai nghe", value: "True Wireless (Half-in-ear)" },
//       { label: "Màng loa (Driver)", value: "13mm Dynamic" },
//       { label: "Kết nối", value: "Bluetooth 5.3" },
//       { label: "Phạm vi hoạt động", value: "10m" },
//       { label: "Thời gian sử dụng", value: "Khoảng 5 giờ / 1 lần sạc" },
//       { label: "Microphone", value: "Có tích hợp lọc ồn cơ bản" },
//       { label: "Cổng sạc", value: "Type-C" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "HP007",
//     slug: "tai-nghe-razer-blackshark-v3-pro-counter-strike-2",
//     name: "Tai nghe Razer BlackShark V3 Pro Counter-Strike 2",
//     category: "headphone",
//     subcategory: "headphones",
//     price: 4990000,
//     salePrice: 4690000,
//     stock: 10,
//     images: [
//       "/product_image/headphones/headphone_razer_blackshark_v3/headphone_razer_blackshark_v3_pro_counter_strike_2.png",
//       "/product_image/headphones/headphone_razer_blackshark_v3/headphone_razer_blackshark_v3_01.png",
//       "/product_image/headphones/headphone_razer_blackshark_v3/headphone_razer_blackshark_v3_02.png",
//       "/product_image/headphones/headphone_razer_blackshark_v3/headphone_razer_blackshark_v3_03.png",
//       "/product_image/headphones/headphone_razer_blackshark_v3/headphone_razer_blackshark_v3_04.png",
//     ],
//     shortDesc: "Tai nghe Esports không dây cao cấp, phiên bản đặc quyền Counter-Strike 2, mic thu âm chuẩn studio.",
//     description: `
//       <h3>Dành cho nhà vô địch Esports</h3>
//       <p>Mang trên mình lớp áo thiết kế độc quyền từ tựa game Counter-Strike 2, Razer BlackShark V3 Pro (CS2 Edition) là vũ khí tối thượng của các game thủ chuyên nghiệp. Màng loa Razer TriForce Titanium 50mm chia tách rõ ràng 3 dải âm thanh, giúp bạn nghe tiếng bước chân mờ nhạt nhất xuyên qua những bức tường tại bản đồ Dust II.</p>
      
//       <h3>Mic HyperClear Super Wideband</h3>
//       <p>Chất lượng đàm thoại được nâng lên một tầm cao mới với chiếc micro Super Wideband có thể tháo rời. Khả năng thu thập và dải tần số rộng hơn rất nhiều so với micro thông thường giúp giọng nói của bạn truyền đến đồng đội chi tiết, ấm áp và tự nhiên như đang ngồi trong phòng thu.</p>
//     `,
//     brand: "Razer",
//     specs: {
//       brand: "Razer",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "Razer HyperSpeed Wireless / Bluetooth" },
//       { label: "Microphone", value: "Super Wideband (Tháo rời)" },
//       { label: "Thời lượng pin", value: "Lên đến 70 giờ" },
//     ],
//     detailSpecs: [
//       { label: "Loại tai nghe", value: "Over-ear Không dây" },
//       { label: "Màng loa (Driver)", value: "Razer TriForce Titanium 50mm" },
//       { label: "Kết nối", value: "HyperSpeed 2.4GHz / Bluetooth 5.2" },
//       { label: "Microphone", value: "Razer HyperClear Super Wideband (Có thể tháo rời)" },
//       { label: "Âm thanh vòm", value: "THX Spatial Audio" },
//       { label: "Thời lượng pin", value: "Lên đến 70 giờ liên tục" },
//       { label: "Thiết kế đặc biệt", value: "Phiên bản Counter-Strike 2 Edition" },
//       { label: "Đệm tai", value: "Mút hoạt tính siêu thoáng khí" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "HP008",
//     slug: "tai-nghe-razer-hammerhead-v3-wired-earbuds-white",
//     name: "Tai nghe Razer Hammerhead V3 Wired Earbuds White",
//     category: "headphone",
//     subcategory: "headphones",
//     price: 1490000,
//     salePrice: 1290000,
//     stock: 10,
//     images: [
//       "/product_image/headphones/headphone_razer_hammerhead_v3_wired/headphone_razer_hammerhead_v3_wired_earbuds_white.jpg",
//       "/product_image/headphones/headphone_razer_hammerhead_v3_wired/headphone_razer_hammerhead_v3_wired_01.jpg",
//       "/product_image/headphones/headphone_razer_hammerhead_v3_wired/headphone_razer_hammerhead_v3_wired_02.jpg",
//       "/product_image/headphones/headphone_razer_hammerhead_v3_wired/headphone_razer_hammerhead_v3_wired_03.jpg",
//       "/product_image/headphones/headphone_razer_hammerhead_v3_wired/headphone_razer_hammerhead_v3_wired_04.jpg",
//     ],
//     shortDesc: "Tai nghe in-ear có dây vỏ nhôm sang trọng, âm bass uy lực mạnh mẽ.",
//     description: `
//       <h3>Thiết kế nhôm nguyên khối sắc sảo</h3>
//       <p>Sở hữu tông màu trắng (White) thanh lịch kết hợp phần thân củ tai được phay CNC từ nhôm nguyên khối, Razer Hammerhead toát lên vẻ đẹp sang trọng và độ bền vượt trội. Cáp kết nối dạng dẹt giúp chống rối hiệu quả, bạn có thể tự tin vứt vào balo mà không sợ đứt cáp ngầm.</p>
      
//       <h3>Âm Bass mang thương hiệu Razer</h3>
//       <p>Bên trong lớp vỏ nhỏ gọn là hệ thống củ loa (driver) Dynamic 10mm được tinh chỉnh đặc biệt. Nó cung cấp âm trầm (bass) cực kỳ mạnh mẽ và đập sâu, làm thỏa mãn các tín đồ nhạc EDM hay mang lại sự rung động thực sự trong những pha cháy nổ của các bộ phim bom tấn.</p>
//     `,
//     brand: "Razer",
//     specs: {
//       brand: "Razer",
//     },
//     cardSpecs: [
//       { label: "Chất liệu", value: "Vỏ nhôm nguyên khối" },
//       { label: "Màng loa", value: "10mm Custom-tuned" },
//       { label: "Dây cáp", value: "Dạng dẹt chống rối" },
//     ],
//     detailSpecs: [
//       { label: "Loại tai nghe", value: "In-ear Có dây" },
//       { label: "Màng loa (Driver)", value: "10mm Dynamic (Custom-tuned)" },
//       { label: "Tần số phản hồi", value: "20Hz - 20kHz" },
//       { label: "Chất liệu vỏ", value: "Hợp kim nhôm" },
//       { label: "Chiều dài cáp", value: "1.2m dạng dẹt" },
//       { label: "Microphone", value: "Tích hợp trên dây kèm nút điều khiển" },
//       { label: "Kết nối", value: "Jack âm thanh 3.5mm" },
//       { label: "Tương thích", value: "Mọi thiết bị hỗ trợ cổng 3.5mm" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },
// ];