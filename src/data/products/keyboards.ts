import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const keyboards = async (): Promise<Product[]> => {
  const q = query(
    collection(db, "products"),
    where("category", "==", "keyboard") // ⚠️ phải match DB
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
};

// export const keyboards: Product[] = [
//   {
//     id: "KBD001",
//     slug: "ban-phim-akko-5075b-plus-s-black-silver",
//     name: "Bàn phím Akko 5075B Plus S Black Silver",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 2490000,
//     salePrice: 2290000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_akko_5075b_plus_s_black_silver.jpg"],
//     shortDesc: "Bàn phím cơ layout 75% đa năng, Gasket Mount êm ái, kết nối 3 chế độ.",
//     description: `
//       <h3>Thiết kế 75% tối ưu không gian</h3>
//       <p>Akko 5075B Plus S mang layout 75% (82 phím) cực kỳ nhỏ gọn nhưng vẫn giữ lại hàng phím F và cụm phím điều hướng cần thiết. Phiên bản Black Silver với phối màu đen bạc nam tính, kết hợp cùng núm xoay (Knob) kim loại góc phải tạo điểm nhấn hiện đại và tiện dụng cho việc điều chỉnh âm lượng.</p>
      
//       <h3>Trải nghiệm gõ hoàn hảo với Gasket Mount</h3>
//       <p>Được trang bị cấu trúc Gasket Mount cùng hệ thống foam tiêu âm (Foam đáy, foam PCB bằng Poron), bàn phím triệt tiêu hoàn toàn tiếng rỗng và tiếng vang, mang lại âm thanh gõ trầm ấm (thocky). Hỗ trợ Hotswap 5-pin cho phép bạn dễ dàng thay thế switch theo sở thích cá nhân.</p>
//     `,
//     brand: "Akko",
//     specs: {
//       brand: "Akko",
//     },
//     cardSpecs: [
//       { label: "Layout", value: "75% (82 phím + Núm xoay)" },
//       { label: "Kết nối", value: "3 Chế độ (Type-C / 2.4Ghz / Bluetooth)" },
//       { label: "Cấu trúc", value: "Gasket Mount" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ không dây" },
//       { label: "Layout", value: "75% (82 Phím)" },
//       { label: "Switch", value: "Akko CS Switch (Hotswap 5-pin)" },
//       { label: "Keycap", value: "PBT Double-Shot, ASA Profile" },
//       { label: "Đèn nền", value: "LED RGB (Hỗ trợ Audio Visualizer)" },
//       { label: "Kết nối", value: "USB Type-C / Wireless 2.4Ghz / Bluetooth 5.0" },
//       { label: "Pin", value: "3000 mAh" },
//       { label: "Kích thước", value: "335 x 146 x 42 mm" },
//       { label: "Tương thích", value: "Windows / MacOS / Linux" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD002",
//     slug: "ban-phim-akko-acr-pro-alice-plus-spray-painted-white",
//     name: "Bàn phím Akko ACR Pro Alice Plus Spray Painted White",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 2990000,
//     salePrice: 2790000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_akko_acr_pro_alice_plus_spray_painted_white.jpg"],
//     shortDesc: "Bàn phím cơ công thái học Alice layout, vỏ Acrylic xuyên LED RGB cực đẹp.",
//     description: `
//       <h3>Layout Alice Công Thái Học</h3>
//       <p>Khác biệt với thiết kế truyền thống, Akko ACR Pro Alice Plus áp dụng layout chia đôi (Split/Alice layout) giúp cổ tay người dùng giữ được góc độ tự nhiên nhất khi gõ phím. Điều này làm giảm đáng kể áp lực lên ống cổ tay, đặc biệt phù hợp cho những coder hay writer phải gõ phím liên tục.</p>
      
//       <h3>Vỏ Acrylic cao cấp sơn phủ (Spray Painted)</h3>
//       <p>Lớp vỏ của phím được gia công từ Acrylic CNC với bề mặt được sơn phun (Spray Painted) màu trắng mịn màng, hạn chế bám vân tay nhưng vẫn cho phép dải LED RGB viền xuyên thấu mờ ảo, tạo nên một góc setup cực kỳ thơ mộng và cá tính.</p>
//     `,
//     brand: "Akko",
//     specs: {
//       brand: "Akko",
//     },
//     cardSpecs: [
//       { label: "Layout", value: "Alice (Công thái học)" },
//       { label: "Vỏ case", value: "Acrylic CNC Sơn trắng" },
//       { label: "Đèn nền", value: "RGB + LED Viền" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ có dây" },
//       { label: "Layout", value: "Alice (68 phím)" },
//       { label: "Switch", value: "Akko CS Crystal Switch (Hotswap)" },
//       { label: "Keycap", value: "PBT Double-Shot, ASA Profile" },
//       { label: "Cấu trúc", value: "Gasket Mount (Silicone Gasket)" },
//       { label: "Kết nối", value: "Cáp USB Type-C tháo rời" },
//       { label: "Đèn nền", value: "LED RGB (Mạch xuôi)" },
//       { label: "Trọng lượng", value: "1.05 kg" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD003",
//     slug: "ban-phim-akko-cat-paw-artisan",
//     name: "Nút bàn phím cơ AKKO Cat Paw Artisan",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 190000,
//     salePrice: 190000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_akko_cat_paw_artisan.jpg"],
//     shortDesc: "Keycap Artisan hình chân mèo dễ thương, tạo điểm nhấn cho chiếc bàn phím của bạn.",
//     description: `
//       <h3>Điểm nhấn siêu cấp đáng yêu</h3>
//       <p>AKKO Cat Paw Artisan là chiếc keycap trang trí (Artisan Keycap) mang hình dáng chiếc "đệm chân mèo" cực kỳ xinh xắn. Chỉ cần thay thế vào vị trí phím Esc hoặc các phím ít sử dụng, chiếc bàn phím cứng nhắc của bạn sẽ lập tức trở nên có hồn và thu hút hơn bao giờ hết.</p>
      
//       <h3>Cảm giác chạm "Healing"</h3>
//       <p>Phần đệm thịt của chân mèo được làm từ chất liệu Silicone đàn hồi siêu mềm mịn. Mỗi khi cảm thấy căng thẳng hay bí ý tưởng, bạn có thể nhấn vào chiếc keycap này để xả stress, mang lại cảm giác thư giãn (healing) tuyệt vời ngay trên bàn làm việc.</p>
//     `,
//     brand: "Akko",
//     specs: {
//       brand: "Akko",
//     },
//     cardSpecs: [
//       { label: "Loại sản phẩm", value: "Keycap Artisan (1 Nút)" },
//       { label: "Chất liệu", value: "Hợp kim nhôm + Silicone" },
//       { label: "Tương thích", value: "Switch Cherry MX" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Phụ kiện (Keycap trang trí)" },
//       { label: "Chất liệu vỏ", value: "Hợp kim nhôm CNC" },
//       { label: "Chất liệu đệm", value: "Silicone siêu mềm" },
//       { label: "Kích thước", value: "1u (Thay thế phím thông thường)" },
//       { label: "Tương thích Switch", value: "Cherry MX / Gateron / Kailh / Akko (Chân chữ thập)" },
//       { label: "Màu sắc", value: "Trắng Hồng" },
//       { label: "Bảo hành", value: "Không bảo hành" },
//     ],
//   },

//   {
//     id: "KBD004",
//     slug: "ban-phim-akko-yu01-white-jade-v3-piano",
//     name: "Bàn phím Akko YU01 White Jade V3 Piano",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 2190000,
//     salePrice: 1990000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_akko_yu01_white_jade_v3_piano.png"],
//     shortDesc: "Siêu phẩm Resin nguyên khối cực độc lạ, Switch Piano V3 âm thanh nổ.",
//     description: `
//       <h3>Case Resin nguyên khối ngọc bích</h3>
//       <p>Akko YU01 White Jade phá vỡ mọi quy chuẩn vật liệu thông thường khi sử dụng lớp vỏ Resin đổ khuôn nguyên khối màu "Ngọc Bích Trắng" (White Jade). Độ đầm chắc, tính thẩm mỹ xuyên thấu mờ và khả năng cộng hưởng âm thanh độc lạ của Resin biến chiếc bàn phím này thành một tác phẩm nghệ thuật trên bàn làm việc.</p>
      
//       <h3>V3 Piano Switch mượt mà</h3>
//       <p>Bàn phím được trang bị sẵn dòng Switch V3 Piano (Linear) cực kỳ nổi tiếng của Akko. Hành trình phím siêu mượt, không hề có sạn kết hợp cùng chất liệu vỏ Resin mang lại âm thanh "thocky/poppy" vô cùng nịnh tai mà không cần phải mod thêm bất cứ thứ gì.</p>
//     `,
//     brand: "Akko",
//     specs: {
//       brand: "Akko",
//     },
//     cardSpecs: [
//       { label: "Vật liệu case", value: "Resin nguyên khối" },
//       { label: "Kết nối", value: "3 Chế độ (Type-C, 2.4G, Bluetooth)" },
//       { label: "Switch", value: "Akko V3 Piano Pro" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ không dây" },
//       { label: "Layout", value: "65% (68 Phím)" },
//       { label: "Chất liệu vỏ", value: "Resin nguyên khối (White Jade)" },
//       { label: "Switch", value: "Akko V3 Piano Pro (Hotswap 5-pin)" },
//       { label: "Keycap", value: "PBT Dye-sub, MDA Profile" },
//       { label: "Kết nối", value: "Type-C / Wireless 2.4Ghz / Bluetooth" },
//       { label: "Đèn nền", value: "LED RGB (Mạch xuôi)" },
//       { label: "Pin", value: "3000 mAh" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD005",
//     slug: "ban-phim-asus-rog-falcata",
//     name: "Bàn phím ASUS ROG Falcata",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 4990000,
//     salePrice: 4690000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_asus_rog_falcata.jpg"],
//     shortDesc: "Bàn phím gaming không dây cao cấp, Switch quang học siêu tốc, Touch Panel thông minh.",
//     description: `
//       <h3>Hiệu năng eSports không độ trễ</h3>
//       <p>ASUS ROG Falcata là vũ khí tối thượng cho game thủ chuyên nghiệp. Với kết nối không dây ROG SpeedNova tiên tiến, độ trễ tín hiệu gần như bằng không, giúp bạn luôn đi trước đối thủ một bước. Switch quang học ROG RX độc quyền đảm bảo tốc độ phản hồi chớp nhoáng và độ bền lên đến 100 triệu lần nhấn.</p>
      
//       <h3>Thanh cảm ứng Touch Panel sáng tạo</h3>
//       <p>Nằm bên cạnh trái của bàn phím là dải cảm ứng đa điểm Touch Panel thông minh. Người dùng có thể vuốt để tăng giảm âm lượng, chuyển đổi ứng dụng, zoom màn hình hoặc lập trình bất kỳ lệnh Macro nào để thao tác nhanh trong các tựa game MMORPG / MOBA.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Kết nối", value: "ROG SpeedNova Wireless / Bluetooth" },
//       { label: "Switch", value: "ROG RX Optical Mechanical" },
//       { label: "Tính năng", value: "Touch Panel cảm ứng" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ Gaming Không dây" },
//       { label: "Layout", value: "65% / 75% Compact" },
//       { label: "Switch", value: "ROG RX Optical (Red/Blue)" },
//       { label: "Keycap", value: "ROG PBT Doubleshot" },
//       { label: "Đèn nền", value: "Aura Sync RGB (Từng phím)" },
//       { label: "Kết nối", value: "RF 2.4GHz / Bluetooth 5.1 / Type-C" },
//       { label: "Tính năng phụ", value: "Interactive Touch Panel" },
//       { label: "Tương thích", value: "Windows / Armoury Crate" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "KBD006",
//     slug: "ban-phim-asus-tuf-gaming-k3",
//     name: "Bàn phím ASUS TUF Gaming K3",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1690000,
//     salePrice: 1490000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_asus_tuf_gaming_k3.png"],
//     shortDesc: "Bàn phím cơ Full-size bền bỉ, khung hợp kim nhôm, kèm đệm kê tay nam châm.",
//     description: `
//       <h3>Khung viền hợp kim nhôm siêu bền</h3>
//       <p>ASUS TUF Gaming K3 thể hiện đúng tinh thần "The Ultimate Force" với lớp vỏ mặt trên (top plate) làm từ hợp kim nhôm dùng trong ngành hàng không vũ trụ. Sự chắc chắn tuyệt đối này giúp bàn phím nằm im tĩnh lặng trên mặt bàn ngay cả trong những pha "combat" đập phím dữ dội nhất.</p>
      
//       <h3>Cổng USB Passthrough tiện dụng</h3>
//       <p>Phía sau bàn phím được trang bị một cổng USB 2.0 Passthrough, cực kỳ tiện lợi để bạn cắm chuột máy tính, tai nghe, USB lưu trữ hoặc thậm chí sạc điện thoại ngay trên bàn mà không cần phải cúi xuống tìm cổng cắm phía sau thùng máy tính PC.</p>
//     `,
//     brand: "ASUS",
//     specs: {
//       brand: "ASUS",
//     },
//     cardSpecs: [
//       { label: "Layout", value: "Full-Size (104 Phím)" },
//       { label: "Chất liệu", value: "Khung hợp kim nhôm" },
//       { label: "Phụ kiện", value: "Kèm đệm kê tay (Wrist rest)" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ Gaming Có dây" },
//       { label: "Layout", value: "Full-Size (100%)" },
//       { label: "Switch", value: "Kailh Mechanical (Red/Brown/Blue)" },
//       { label: "Keycap", value: "ABS xuyên LED" },
//       { label: "Đèn nền", value: "Aura Sync RGB" },
//       { label: "Kết nối", value: "Cáp USB 2.0 (Kèm cổng USB Passthrough)" },
//       { label: "Kích thước", value: "438.7 x 130.9 x 38.7 mm" },
//       { label: "Tương thích", value: "Windows 10 / 11" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "KBD007",
//     slug: "ban-phim-aula-f57",
//     name: "Bàn phím Aula F57",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 990000,
//     salePrice: 890000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_aula_f57.png"],
//     shortDesc: "Bàn phím cơ mini 60% gọn gàng, Gasket Mount, Hotswap đa điểm.",
//     description: `
//       <h3>Tối giản không gian tối đa</h3>
//       <p>Với layout 60% thu gọn, Aula F57 cắt bỏ hoàn toàn dãy phím số và phím F, để lại một không gian cực lớn cho việc vẩy chuột (Low-sens gaming) trên bàn làm việc. Nó là sự lựa chọn không thể tuyệt vời hơn cho những tín đồ của chủ nghĩa tối giản (Minimalism) và game thủ FPS.</p>
      
//       <h3>Cấu trúc Gasket Mount tiêu âm tốt</h3>
//       <p>Dù ở phân khúc giá rẻ, Aula F57 vẫn được trang bị hệ thống đệm Gasket Mount và lót sẵn các lớp foam tiêu âm. Điều này giúp loại bỏ tạp âm, mang lại cảm giác gõ mềm mại và âm thanh gọn gàng hơn hẳn so với các bàn phím Tray Mount truyền thống.</p>
//     `,
//     brand: "Aula",
//     specs: {
//       brand: "Aula",
//     },
//     cardSpecs: [
//       { label: "Layout", value: "Mini 60%" },
//       { label: "Cấu trúc", value: "Gasket Mount" },
//       { label: "Tính năng", value: "Hotswap thay switch nhanh" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ" },
//       { label: "Layout", value: "60% (61 Phím)" },
//       { label: "Switch", value: "Aula Custom Switch (Hotswap 3/5 pin)" },
//       { label: "Keycap", value: "PBT Xuyên LED" },
//       { label: "Đèn nền", value: "LED RGB nhiều hiệu ứng" },
//       { label: "Kết nối", value: "Cáp USB Type-C tháo rời" },
//       { label: "Tương thích", value: "Windows / MacOS" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD008",
//     slug: "ban-phim-aula-f68-tm",
//     name: "Bàn phím Aula F68 TM",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1290000,
//     salePrice: 1190000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_aula_f68_tm.png"],
//     shortDesc: "Bàn phím vỏ trong suốt xuyên LED cực sáng, layout 65% nhỏ gọn kết nối 3 chế độ.",
//     description: `
//       <h3>Ngoại hình trong suốt rực rỡ</h3>
//       <p>Aula F68 TM tạo ra một cơn sốt thị giác với bộ case và keycap được làm từ vật liệu nhựa PC (Polycarbonate) trong suốt chất lượng cao. Khi bật LED RGB, chiếc bàn phím tỏa sáng rực rỡ như một khối pha lê, khiến góc PC của bạn trở nên lung linh và hiện đại.</p>
      
//       <h3>Kết nối 3 chế độ linh hoạt</h3>
//       <p>Không bị gò bó bởi dây cáp, F68 TM hỗ trợ 3 chuẩn kết nối: Bluetooth 5.0 (lưu được 3 thiết bị), Wireless 2.4GHz qua USB Receiver với độ trễ thấp và kết nối dây Type-C truyền thống, đáp ứng hoàn hảo từ làm việc văn phòng cho đến chơi game giải trí.</p>
//     `,
//     brand: "Aula",
//     specs: {
//       brand: "Aula",
//     },
//     cardSpecs: [
//       { label: "Thiết kế", value: "Vỏ & Keycap Trong suốt (PC)" },
//       { label: "Kết nối", value: "3 Mode (Type-C, 2.4G, Bluetooth)" },
//       { label: "Layout", value: "65% (68 Phím)" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ không dây" },
//       { label: "Layout", value: "65% (68 Phím)" },
//       { label: "Switch", value: "Transparent Crystal Switch (Hotswap)" },
//       { label: "Keycap", value: "PC Trong suốt, In lụa" },
//       { label: "Đèn nền", value: "LED RGB rực rỡ" },
//       { label: "Kết nối", value: "Type-C / Wireless 2.4Ghz / Bluetooth" },
//       { label: "Pin", value: "2000 mAh" },
//       { label: "Tương thích", value: "Windows / MacOS / Android / iOS" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD009",
//     slug: "ban-phim-aula-s100-pro-tm",
//     name: "Bàn phím Aula S100 Pro TM",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1590000,
//     salePrice: 1490000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_aula_s100_pro_tm.jpg"],
//     shortDesc: "Bàn phím cơ Full-size đa dụng, hỗ trợ Macro và dải LED hông nổi bật.",
//     description: `
//       <h3>Đáp ứng trọn vẹn mọi nhu cầu</h3>
//       <p>Aula S100 Pro TM là phiên bản Full-size (104 phím) truyền thống, cung cấp đầy đủ cụm phím số Numpad vô cùng tiện lợi cho dân văn phòng, kế toán hoặc những game thủ chơi các tựa game cần gán nhiều phím điều khiển như GTA V hay các trình giả lập bay.</p>
      
//       <h3>LED sườn độc đáo và Hỗ trợ phần mềm</h3>
//       <p>Bên cạnh hệ thống LED phím rực rỡ, hai cạnh hông của bàn phím còn được trang bị dải LED viền chuyển màu chạy dọc mượt mà. Đi kèm với phím là phần mềm tùy chỉnh độc quyền, cho phép người dùng can thiệp sâu vào việc gán chức năng (Macro), re-map phím và thiết kế hiệu ứng ánh sáng cá nhân hóa.</p>
//     `,
//     brand: "Aula",
//     specs: {
//       brand: "Aula",
//     },
//     cardSpecs: [
//       { label: "Layout", value: "Full-size (104 phím)" },
//       { label: "Tính năng", value: "Hỗ trợ phần mềm Macro" },
//       { label: "Đèn nền", value: "RGB phím + LED viền hông" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ" },
//       { label: "Layout", value: "Full-Size 104 Phím" },
//       { label: "Switch", value: "Blue/Red/Brown Switch (Tùy chọn)" },
//       { label: "Keycap", value: "ABS Double-shot xuyên LED" },
//       { label: "Kết nối", value: "Cáp USB chống nhiễu" },
//       { label: "Đèn nền", value: "LED RGB" },
//       { label: "Tính năng", value: "Anti-ghosting toàn phím" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD010",
//     slug: "ban-phim-gaming-keychron-black-myth-wukong",
//     name: "Bàn phím Gaming Keychron Black Myth Wukong",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 3290000,
//     salePrice: 3090000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_ban_phim_gaming_keychron_black_myth_wukong.jpg"],
//     shortDesc: "Phiên bản giới hạn Black Myth Wukong, thiết kế mang đậm dấu ấn Tây Du, khung nhôm nặng tay.",
//     description: `
//       <h3>Phiên bản giới hạn Black Myth: Wukong</h3>
//       <p>Hợp tác cùng tựa game bom tấn Black Myth: Wukong, Keychron mang đến một phiên bản bàn phím với tone màu Đen - Vàng Đồng cổ kính. Các phím bấm được in họa tiết "Cân Đẩu Vân", "Gậy Như Ý" và chữ thư pháp cực kỳ tỉ mỉ bằng công nghệ in Dye-sub không bao giờ phai, thỏa mãn lòng đam mê của mọi game thủ.</p>
      
//       <h3>Khung nhôm nguyên khối đầm chắc</h3>
//       <p>Dựa trên bộ khung (Kit) cao cấp của Keychron, bàn phím sử dụng vỏ nhôm CNC nguyên khối cực kỳ nặng và đầm tay. Cấu trúc Gasket kết hợp với plate thép/PC mang lại trải nghiệm gõ phím đặc, chắc, âm thanh trầm bổng rõ rệt, đáp ứng tiêu chuẩn khắt khe của cộng đồng chơi phím cơ Custom.</p>
//     `,
//     brand: "Keychron",
//     specs: {
//       brand: "Keychron",
//     },
//     cardSpecs: [
//       { label: "Phiên bản", value: "Black Myth Wukong Limited" },
//       { label: "Chất liệu", value: "Khung Nhôm CNC" },
//       { label: "Keycap", value: "PBT Dye-sub họa tiết Tây Du" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ Custom không dây" },
//       { label: "Layout", value: "75% hoặc TKL (Tùy phiên bản)" },
//       { label: "Khung phím", value: "Hợp kim nhôm nguyên khối (CNC)" },
//       { label: "Switch", value: "Keychron K Pro / Gateron (Hotswap)" },
//       { label: "Keycap", value: "PBT Dye-sub, Cherry/OSA Profile" },
//       { label: "Kết nối", value: "Type-C / Wireless / Bluetooth" },
//       { label: "Đèn nền", value: "LED RGB mạch xuôi" },
//       { label: "Phần mềm", value: "Hỗ trợ QMK/VIA lập trình phím" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD011",
//     slug: "ban-phim-keychron-big-kitty-paw-xxl",
//     name: "Phụ kiện bàn phím Keychron Big Kitty Paw XXL",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1190000,
//     salePrice: 990000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_keychron_big_kitty_paw_xxl.png"],
//     shortDesc: "Phụ kiện lót chuột (Deskmat) cỡ lớn, in hình chân mèo dễ thương từ Keychron.",
//     description: `
//       <h3>Bề mặt XXL bao phủ toàn bàn</h3>
//       <p>Keychron Big Kitty Paw XXL không phải là bàn phím mà là một chiếc lót chuột (Deskmat) kích thước siêu lớn, đủ để đặt vừa vặn cả bàn phím, chuột và màn hình của bạn. Bề mặt vải dệt sợi siêu mịn (Micro-woven) đảm bảo mắt đọc của chuột game hoạt động với độ chính xác và tốc độ cao nhất.</p>
      
//       <h3>Đế cao su chống trượt & Bo viền bền bỉ</h3>
//       <p>Mặt dưới của lót chuột được tráng một lớp cao su tự nhiên với các vân gai nhỏ, bám chặt vào mặt bàn gỗ hay kính, không bị xê dịch khi bạn thực hiện các cú vẩy chuột mạnh (Flick shot). Các mép viền được khâu bo (Stitched Edges) tinh tế, chống hiện tượng bong tróc và tưa chỉ sau thời gian dài cọ xát.</p>
//     `,
//     brand: "Keychron",
//     specs: {
//       brand: "Keychron",
//     },
//     cardSpecs: [
//       { label: "Loại sản phẩm", value: "Lót chuột (Deskmat)" },
//       { label: "Kích thước", value: "XXL (900 x 400 mm)" },
//       { label: "Bề mặt", value: "Vải dệt siêu mịn (Speed/Control)" },
//     ],
//     detailSpecs: [
//       { label: "Loại phụ kiện", value: "Lót chuột cỡ lớn (Deskmat)" },
//       { label: "Bề mặt", value: "Vải vi sợi mịn (Micro-woven cloth)" },
//       { label: "Mặt đế", value: "Cao su thiên nhiên chống trượt" },
//       { label: "Viền lót chuột", value: "Khâu bo viền (Stitched Edges)" },
//       { label: "Kích thước", value: "900 x 400 x 3 mm" },
//       { label: "Họa tiết", value: "Chân mèo Big Kitty Paw" },
//       { label: "Bảo hành", value: "Không bảo hành" },
//     ],
//   },

//   {
//     id: "KBD012",
//     slug: "ban-phim-leobog-am65-tm",
//     name: "Bàn phím Leobog AM65 TM",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1490000,
//     salePrice: 1390000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_leobog_amg65_tm.png"],
//     shortDesc: "Bàn phím nhôm nguyên khối layout 65%, kết nối 3 mode, âm thanh cực Thock.",
//     description: `
//       <h3>Vua nhôm nguyên khối phân khúc bình dân</h3>
//       <p>Leobog AM65 TM mang lại một cú sốc cho thị trường phím cơ khi trang bị bộ case (vỏ) bằng nhôm CNC nguyên khối với mức giá vô cùng dễ tiếp cận. Sự cứng cáp của khung nhôm giúp phản hồi âm thanh gõ cực kỳ đặc (thocky) và triệt tiêu hoàn toàn sự ọp ẹp thường thấy ở phím nhựa.</p>
      
//       <h3>Đa dạng kết nối, linh hoạt sử dụng</h3>
//       <p>Mặc dù sử dụng vỏ nhôm (thường cản trở sóng), hãng vẫn tinh tế thiết kế các dải tản sóng giúp kết nối Wireless 2.4G và Bluetooth hoạt động ổn định. Bàn phím lót sẵn Full Foam (Poron, IXPE) và đi kèm switch Linear mượt mà đã được bôi trơn (pre-lubed) từ nhà máy.</p>
//     `,
//     brand: "Leobog",
//     specs: {
//       brand: "Leobog",
//     },
//     cardSpecs: [
//       { label: "Chất liệu", value: "Vỏ nhôm nguyên khối (CNC)" },
//       { label: "Kết nối", value: "3 Chế độ (Type-C, 2.4G, Bluetooth)" },
//       { label: "Layout", value: "65% (66 Phím)" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ Custom Nhôm" },
//       { label: "Layout", value: "65% gọn nhẹ" },
//       { label: "Vật liệu Case", value: "Hợp kim nhôm nguyên khối" },
//       { label: "Cấu trúc", value: "Gasket Mount, Lót Full Foam" },
//       { label: "Switch", value: "Leobog Linear Custom (Hotswap)" },
//       { label: "Keycap", value: "PBT Double-shot" },
//       { label: "Đèn nền", value: "LED RGB mạch xuôi" },
//       { label: "Kết nối", value: "Type-C / Wireless / Bluetooth" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD013",
//     slug: "ban-phim-leobog-hi86-tm",
//     name: "Bàn phím Leobog HI86 TM",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1690000,
//     salePrice: 1590000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_leobog_hi86_tm.png"],
//     shortDesc: "Bàn phím cơ nhôm layout TKL 86 phím, trang bị màn hình hiển thị hoặc núm xoay.",
//     description: `
//       <h3>Layout TKL hoàn hảo</h3>
//       <p>Tiếp nối thành công của dòng phím nhôm, Leobog HI86 TM sử dụng layout TKL (Tenkeyless) với 86 phím, giữ lại toàn bộ phím chức năng F1-F12 và cụm điều hướng, rất thân thiện cho những người dùng mới chuyển từ phím thường sang phím cơ Custom.</p>
      
//       <h3>Cấu tạo Custom hoàn chỉnh</h3>
//       <p>Sản phẩm xuất xưởng với bộ lót (Foam) xịn sò gồm Foam Poron đáy, đệm silicon, Foam PET và Plate PC cắt rãnh (Flex-cut). Thiết kế này tạo ra một độ "nhún" (flex) êm ái khi gõ phím, giảm thiểu chấn thương đầu ngón tay và mang lại âm thanh tạch tạch/bụp bụp cực kỳ gây nghiện.</p>
//     `,
//     brand: "Leobog",
//     specs: {
//       brand: "Leobog",
//     },
//     cardSpecs: [
//       { label: "Layout", value: "TKL (86 Phím)" },
//       { label: "Cấu trúc", value: "Nhôm nguyên khối, Flex-cut Plate" },
//       { label: "Tính năng", value: "Màn hình mini / Núm xoay đa năng" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ Custom Nhôm" },
//       { label: "Layout", value: "Tenkeyless (86 Phím)" },
//       { label: "Vật liệu Case", value: "Hợp kim nhôm đúc nguyên khối" },
//       { label: "Cấu trúc", value: "Gasket Mount (Flex-cut Plate PC/FR4)" },
//       { label: "Switch", value: "Leobog Custom (Hotswap 5-pin)" },
//       { label: "Kết nối", value: "3 Chế độ (Dây, 2.4Ghz, Bluetooth)" },
//       { label: "Pin", value: "4000 mAh" },
//       { label: "Đèn nền", value: "LED RGB (Mạch xuôi)" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD014",
//     slug: "ban-phim-leobog-ji75c-pro-tm",
//     name: "Bàn phím Leobog JI75C Pro TM",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1890000,
//     salePrice: 1790000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_leobog_ji75c_pro_tm.png"],
//     shortDesc: "Bàn phím cơ thiết kế hiện đại, layout 75% kèm màn hình TFT và núm xoay.",
//     description: `
//       <h3>Màn hình TFT LCD cá nhân hóa</h3>
//       <p>Điểm nhấn đáng tiền nhất trên Leobog JI75C Pro TM là góc trên cùng bên phải được trang bị một màn hình TFT LCD màu siêu nét. Màn hình này không chỉ hiển thị ngày giờ, dung lượng pin, chế độ kết nối mà còn cho phép bạn tải lên các tệp ảnh động (.GIF) để tạo dấu ấn cá nhân cực chất.</p>
      
//       <h3>Bộ Keycap PBT phối màu nghệ thuật</h3>
//       <p>Sản phẩm đi kèm bộ keycap PBT in Double-shot với profile KSA hoặc MDA tùy phiên bản. Phối màu thanh lịch và tinh tế giúp phím trông cực kỳ nổi bật trên góc làm việc. Switch đi kèm được tinh chỉnh mượt mà, gõ êm và hạn chế tối đa tiếng "ping" lò xo.</p>
//     `,
//     brand: "Leobog",
//     specs: {
//       brand: "Leobog",
//     },
//     cardSpecs: [
//       { label: "Tính năng nổi bật", value: "Màn hình TFT LCD hiển thị GIF" },
//       { label: "Kết nối", value: "3 Chế độ (Type-C, 2.4G, Bluetooth)" },
//       { label: "Cấu trúc", value: "Gasket Mount, Hotswap" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ không dây" },
//       { label: "Layout", value: "75% (81 Phím + Màn hình + Knob)" },
//       { label: "Cấu trúc", value: "Gasket Mount, 5 lớp Foam cách âm" },
//       { label: "Switch", value: "Linear Switch siêu mượt (Pre-lubed)" },
//       { label: "Keycap", value: "PBT Double-shot" },
//       { label: "Tính năng", value: "Màn hình LCD đa thông tin, GIF" },
//       { label: "Kết nối", value: "USB-C / Wireless 2.4G / Bluetooth" },
//       { label: "Pin", value: "Tích hợp pin sạc (Xấp xỉ 4000mAh)" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD015",
//     slug: "ban-phim-logitech-g512-gxrgb",
//     name: "Bàn phím Logitech G512 GXRGB",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 2490000,
//     salePrice: 2290000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_logitech_g512_gxrgb.png"],
//     shortDesc: "Bàn phím cơ gaming tinh tế, vỏ hợp kim nhôm xước và LED Lightsync RGB.",
//     description: `
//       <h3>Hoàn thiện từ hợp kim nhôm xước</h3>
//       <p>Logitech G512 là minh chứng cho sự tối giản nhưng đầy sức mạnh. Bề mặt phím được ốp một tấm hợp kim nhôm-magie 5052 chuyên dụng trong ngành hàng không (đánh xước bề mặt). Điều này không chỉ mang lại vẻ đẹp thanh lịch mà còn tăng cường độ cứng cáp chống trượt tuyệt đối.</p>
      
//       <h3>Công nghệ Switch GX thế hệ mới</h3>
//       <p>Được trang bị Switch GX cơ học tiên tiến với nhiều lựa chọn (Blue Clicky, Brown Tactile, Red Linear) tùy biến theo thói quen của game thủ. Hệ thống đèn LED Lightsync RGB 16.8 triệu màu có thể đồng bộ hóa hiệu ứng ánh sáng rực rỡ theo nội dung hiển thị trong game và màn hình.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Vật liệu", value: "Hợp kim nhôm xước 5052" },
//       { label: "Switch", value: "Logitech GX Mechanical" },
//       { label: "Đèn nền", value: "Lightsync RGB 16.8 triệu màu" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ Gaming Có dây" },
//       { label: "Layout", value: "Full-Size (104 Phím)" },
//       { label: "Switch", value: "GX Blue/Brown/Red (Tùy chọn)" },
//       { label: "Chất liệu bề mặt", value: "Hợp kim nhôm-magie 5052" },
//       { label: "Đèn nền", value: "Lightsync RGB từng phím" },
//       { label: "Kết nối", value: "Cáp USB (Có cổng USB Passthrough)" },
//       { label: "Tính năng", value: "G-Hub phần mềm quản lý" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "KBD016",
//     slug: "ban-phim-logitech-pebble-keys-2-k380s-white",
//     name: "Bàn phím Logitech Pebble Keys 2 K380S White",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1090000,
//     salePrice: 990000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_logitech_pebble_keys_2_k380s_white.jpg"],
//     shortDesc: "Bàn phím Bluetooth siêu mỏng, gõ êm ái, kết nối nhanh 3 thiết bị cùng lúc.",
//     description: `
//       <h3>Nhỏ gọn, thời trang, thân thiện môi trường</h3>
//       <p>Logitech Pebble Keys 2 (K380s) sở hữu thiết kế mỏng nhẹ như một viên sỏi, cực kỳ thích hợp để bỏ vào túi xách, ba lô mang ra quán cà phê làm việc. Đặc biệt, sản phẩm được chế tác từ tối thiểu 45% nhựa tái chế sau tiêu dùng, góp phần bảo vệ môi trường.</p>
      
//       <h3>Gõ tĩnh lặng, kết nối đa thiết bị</h3>
//       <p>Phím sử dụng cơ chế cắt kéo (Scissor switch) mang lại cảm giác gõ êm ái tương tự bàn phím laptop và gần như không phát ra tiếng ồn. Nút Easy-Switch cho phép bạn ghép nối bàn phím cùng lúc với 3 thiết bị (ví dụ: Windows, Mac, iPad) và chuyển đổi qua lại chỉ với một lần nhấn.</p>
//     `,
//     brand: "Logitech",
//     specs: {
//       brand: "Logitech",
//     },
//     cardSpecs: [
//       { label: "Thiết kế", value: "Siêu mỏng (Cơ chế cắt kéo)" },
//       { label: "Kết nối", value: "Bluetooth (Lưu 3 thiết bị)" },
//       { label: "Tương thích", value: "Đa nền tảng (Win, Mac, iOS, Android)" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím văn phòng không dây" },
//       { label: "Layout", value: "Nhỏ gọn (Không có phím số)" },
//       { label: "Công tắc phím", value: "Scissor switch (Cắt kéo) tĩnh lặng" },
//       { label: "Kết nối", value: "Bluetooth Low Energy" },
//       { label: "Chuyển đổi thiết bị", value: "3 nút Easy-Switch" },
//       { label: "Tương thích", value: "Windows, macOS, iPadOS, iOS, Android, ChromeOS" },
//       { label: "Nguồn điện", value: "2 viên pin AAA (Tuổi thọ lên đến 36 tháng)" },
//       { label: "Trọng lượng", value: "415g (Bao gồm pin)" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "KBD017",
//     slug: "ban-phim-razer-blackwidow-v4",
//     name: "Bàn phím Razer BlackWidow V4",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 4290000,
//     salePrice: 3990000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_razer_blackwidow_v4.png"],
//     shortDesc: "Bàn phím cơ Full-size bá chủ dòng BlackWidow, 6 phím Macro chuyên dụng, LED gầm rực rỡ.",
//     description: `
//       <h3>Tối ưu hóa khả năng kiểm soát</h3>
//       <p>Razer BlackWidow V4 mang trở lại cụm 6 phím Macro chuyên dụng nằm sát mép trái bàn phím, cho phép game thủ thiết lập các tổ hợp phím phức tạp trong game nhập vai hoặc gán phím tắt livestream nhanh chóng. Con lăn kim loại đa năng và 4 phím Media giúp kiểm soát âm thanh dễ dàng.</p>
      
//       <h3>Hệ thống LED Chroma và Kê tay êm ái</h3>
//       <p>Không chỉ phát sáng ở từng phím, BlackWidow V4 còn sở hữu 2 dải LED Underglow (LED gầm) phản chiếu ánh sáng tuyệt đẹp xuống mặt bàn. Phần đệm kê tay bọc da PU từ tính êm ái sẽ bảo vệ cổ tay của bạn khỏi sự mệt mỏi trong những phiên chơi game thâu đêm.</p>
//     `,
//     brand: "Razer",
//     specs: {
//       brand: "Razer",
//     },
//     cardSpecs: [
//       { label: "Switch", value: "Razer Mechanical (Green/Yellow)" },
//       { label: "Tính năng", value: "6 Phím Macro độc lập" },
//       { label: "Phụ kiện", value: "Đệm kê tay từ tính bọc da" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ Gaming Có dây" },
//       { label: "Layout", value: "Full-Size + 6 Phím Macro" },
//       { label: "Switch", value: "Razer Green (Clicky) / Yellow (Linear)" },
//       { label: "Keycap", value: "ABS Doubleshot" },
//       { label: "Đèn nền", value: "Razer Chroma RGB + 2 Dải LED gầm" },
//       { label: "Điều khiển Media", value: "Con lăn đa năng + 4 phím phụ" },
//       { label: "Kết nối", value: "Cáp USB Type-A tháo rời" },
//       { label: "Polling Rate", value: "Lên đến 8000Hz (Siêu phản hồi)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "KBD018",
//     slug: "ban-phim-razer-huntsman-v3-pro-mini",
//     name: "Bàn phím Razer Huntsman V3 Pro Mini",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 4690000,
//     salePrice: 4390000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_razer_huntsman_v3_pro_mini.png"],
//     shortDesc: "Vũ khí eSports 60% cực nhẹ, Switch quang học Analog Gen-2 hỗ trợ Rapid Trigger.",
//     description: `
//       <h3>Switch quang học Analog Gen-2 (Từ tính)</h3>
//       <p>Là cuộc cách mạng thực sự cho game thủ FPS (Valorant, CS2), Razer Huntsman V3 Pro Mini sử dụng Switch Analog thế hệ mới. Khác với phím cơ thông thường, switch này cho phép tùy chỉnh điểm kích hoạt (Actuation Point) từ 0.1mm đến 4.0mm, biến nó thành chiếc phím phản hồi nhanh nhất thế giới.</p>
      
//       <h3>Tính năng Rapid Trigger (Nhả phím siêu tốc)</h3>
//       <p>Tính năng Rapid Trigger cho phép phím thiết lập lại (reset) ngay lập tức khi bạn nhả tay ra dù chỉ 0.1mm. Điều này giúp các kỹ năng như "Strafe" hay "Counter-Strafe" (dừng lại bắn) trong game bắn súng trở nên nhạy bén và chuẩn xác đến kinh ngạc. Form 60% tối giản giúp bạn có khoảng trống khổng lồ để vẩy chuột.</p>
//     `,
//     brand: "Razer",
//     specs: {
//       brand: "Razer",
//     },
//     cardSpecs: [
//       { label: "Công nghệ Switch", value: "Analog Optical Gen-2 (Từ tính)" },
//       { label: "Tính năng eSports", value: "Rapid Trigger & Tùy chỉnh điểm kích hoạt" },
//       { label: "Layout", value: "60% Siêu gọn nhẹ" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím Quang học Gaming" },
//       { label: "Layout", value: "60% (Chỉ gồm cụm phím chính)" },
//       { label: "Switch", value: "Razer Analog Optical Switches Gen-2" },
//       { label: "Hỗ trợ Rapid Trigger", value: "Có (Chỉnh độ nhạy 0.1mm - 4.0mm)" },
//       { label: "Keycap", value: "PBT Doubleshot siêu bền" },
//       { label: "Chất liệu mặt trên", value: "Hợp kim nhôm xước 5052" },
//       { label: "Kết nối", value: "Cáp USB Type-C tháo rời" },
//       { label: "Đèn nền", value: "Razer Chroma RGB" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "KBD019",
//     slug: "ban-phim-razer-huntsman-v3-pro-tenkeyless-counter-strike-2-edition",
//     name: "Bàn phím Razer Huntsman V3 Pro Tenkeyless Counter-Strike 2 Edition",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 5290000,
//     salePrice: 4990000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_razer_huntsman_v3_pro_tenkeyless_counter_strike_2_edition.png"],
//     shortDesc: "Bàn phím TKL tối thượng cho game thủ chuyên nghiệp, phiên bản CS2 giới hạn.",
//     description: `
//       <h3>Phiên bản thiết kế giới hạn CS2</h3>
//       <p>Khoác lên mình bộ cánh đậm chất tựa game Counter-Strike 2 (CS2) với các họa tiết rằn ri và logo nổi bật, chiếc bàn phím TKL này là bộ sưu tập đáng giá nhất cho các "Tay to" cày rank. Thiết kế TKL (Lược bỏ phím số) duy trì kích thước lý tưởng cho tư thế ngồi thi đấu tiêu chuẩn.</p>
      
//       <h3>Tối ưu hóa phần cứng & Điều chỉnh trực tiếp</h3>
//       <p>Vẫn mang trong mình Switch Analog Gen-2 và Rapid Trigger đỉnh cao của dòng Huntsman V3. Tuy nhiên, phiên bản TKL trang bị thêm dải đèn LED hiển thị điểm kích hoạt ở phía trên các phím mũi tên và bộ 2 nút bấm + núm xoay chức năng, cho phép bạn điều chỉnh độ nhạy switch ngay lập tức mà không cần thoát ra phần mềm.</p>
//     `,
//     brand: "Razer",
//     specs: {
//       brand: "Razer",
//     },
//     cardSpecs: [
//       { label: "Phiên bản", value: "Counter-Strike 2 Edition" },
//       { label: "Công nghệ Switch", value: "Analog Optical Gen-2 (Rapid Trigger)" },
//       { label: "Layout", value: "Tenkeyless (TKL)" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím Quang học Gaming TKL" },
//       { label: "Switch", value: "Razer Analog Optical Switches Gen-2" },
//       { label: "Rapid Trigger", value: "Có, thiết lập độc lập từng phím" },
//       { label: "Keycap", value: "PBT Doubleshot họa tiết CS2" },
//       { label: "Khung máy", value: "Hợp kim nhôm 5052 chải xước" },
//       { label: "Tiện ích trên phím", value: "Núm xoay đa năng, Nút Macro chuyên dụng" },
//       { label: "Đèn nền", value: "Razer Chroma RGB" },
//       { label: "Phụ kiện", value: "Kê tay từ tính (CS2 Design)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "KBD020",
//     slug: "ban-phim-skyloong-gk104-pro",
//     name: "Bàn phím Skyloong GK104 Pro",
//     category: "keyboard",
//     subcategory: "keyboards",
//     price: 1990000,
//     salePrice: 1790000,
//     stock: 10,
//     images: ["/product_image/keyboards/keyboards_skyloong_gk104_pro.png"],
//     shortDesc: "Bàn phím cơ Full-size đa năng, tính năng Module màn hình/núm xoay và Split-Spacebar.",
//     description: `
//       <h3>Bậc thầy tùy biến (Customization)</h3>
//       <p>Skyloong GK104 Pro gây bất ngờ với hàng loạt tính năng module có thể hoán đổi. Điển hình là cụm màn hình LCD nhỏ góc phải có thể tháo rời để thay thế bằng các núm xoay (Knob) bổ sung. Tính năng Split-Spacebar (chia đôi phím cách) cho phép bạn gán phím Space bên trái thành Backspace hoặc Shift tùy ý.</p>
      
//       <h3>Đầy đủ công nghệ hiện đại</h3>
//       <p>Là một bàn phím Full-size đáp ứng công việc tốt, GK104 Pro vẫn đảm bảo độ "ăn chơi" với cấu trúc Gasket tiêu âm đỉnh cao, kết nối 3 mode (Type-C, 2.4Ghz, Bluetooth) ổn định và tính năng Hotswap thay switch dễ dàng. Keycap PBT chuẩn MDA gõ cực ôm tay và thoải mái.</p>
//     `,
//     brand: "Skyloong",
//     specs: {
//       brand: "Skyloong",
//     },
//     cardSpecs: [
//       { label: "Layout", value: "Full-Size 104 phím" },
//       { label: "Tính năng nổi bật", value: "Màn hình/Knob Module thay thế" },
//       { label: "Kết nối", value: "3 Chế độ (Type-C, 2.4G, Bluetooth)" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn phím", value: "Bàn phím cơ không dây đa năng" },
//       { label: "Layout", value: "Full-Size (Hỗ trợ thay Module màn hình)" },
//       { label: "Cấu trúc", value: "Gasket Mount, Lót Foam Poron" },
//       { label: "Switch", value: "Skyloong Custom Switch (Hotswap)" },
//       { label: "Keycap", value: "PBT Double-shot, MDA Profile" },
//       { label: "Tính năng Module", value: "Hỗ trợ thay Split-Spacebar / Màn hình / Núm xoay" },
//       { label: "Kết nối", value: "USB-C / Wireless 2.4Ghz / Bluetooth 5.1" },
//       { label: "Pin", value: "Tích hợp (8000 mAh kép)" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },
// ];