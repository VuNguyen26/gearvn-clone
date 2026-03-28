import { Product } from "@/types/product";

export const speakers: Product[] = [
  {
    id: "SPK001",
    slug: "loa-edifier-mr4",
    name: "Loa Edifier MR4",
    category: "speaker",
    subcategory: "speaker_micro_webcam",
    price: 2990000,
    salePrice: 2790000,
    stock: 10,
    images: [
      "/product_image/speaker_micro_webcam/loa_edifier_mr4/loa_edifier_mr4.jpg",
      "/product_image/speaker_micro_webcam/loa_edifier_mr4/loa_edifier_mr4_02.jpg",
      "/product_image/speaker_micro_webcam/loa_edifier_mr4/loa_edifier_mr4_03.jpg",
      "/product_image/speaker_micro_webcam/loa_edifier_mr4/loa_edifier_mr4_04.jpg",
    ],
    shortDesc: "Loa kiểm âm chuẩn Studio, cân bằng hoàn hảo giữa nghe nhạc và sản xuất âm thanh.",
    description: `
      <h3>Sự lựa chọn hoàn hảo cho Creator</h3>
      <p>Edifier MR4 là dòng loa kiểm âm (Studio Monitor) được thiết kế đặc biệt cho những nhà sáng tạo nội dung, sản xuất âm nhạc hay chỉnh sửa video chuyên nghiệp. Với chế độ "Monitor Mode", loa mang lại âm thanh cực kỳ phẳng (flat), trung thực và không nịnh tai, giúp bạn nghe rõ mọi chi tiết của bản mix.</p>
      
      <h3>Thiết kế thùng gỗ MDF chống cộng hưởng</h3>
      <p>Sở hữu thiết kế thùng gỗ MDF cao cấp, MR4 triệt tiêu hoàn toàn sự cộng hưởng âm thanh bên trong loa, mang lại dải âm trầm sâu lắng, chắc gọn và dải cao tơi nhuyễn nhờ màng loa tweeter lụa 1-inch. Chế độ "Music Mode" tích hợp sẵn sẽ biến chiếc loa này thành một công cụ giải trí tuyệt vời với âm thanh sống động hơn.</p>
    `,
    brand: "Edifier",
    specs: {
      brand: "Edifier",
    },
    cardSpecs: [
      { label: "Hệ thống", value: "Loa 2.0 (Studio Monitor)" },
      { label: "Công suất", value: "42W RMS" },
      { label: "Kết nối", value: "TRS cân bằng, RCA, AUX" },
    ],
    detailSpecs: [
      { label: "Loại loa", value: "Loa kiểm âm (Studio Monitor) 2.0" },
      { label: "Công suất (RMS)", value: "21W + 21W (Tổng 42W)" },
      { label: "Dải tần số", value: "60Hz - 20kHz" },
      { label: "Màng loa", value: "Bass 4 inch + Tweeter 1 inch" },
      { label: "Chế độ âm thanh", value: "Monitor Mode / Music Mode" },
      { label: "Kết nối đầu vào", value: "1/4-inch TRS (Balanced), RCA, AUX" },
      { label: "Kết nối đầu ra", value: "Cổng cắm tai nghe 3.5mm mặt trước" },
      { label: "Chất liệu thùng loa", value: "Gỗ MDF" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "SPK002",
    slug: "loa-logitech-g560",
    name: "Loa Logitech G560",
    category: "speaker",
    subcategory: "speaker_micro_webcam",
    price: 5490000,
    salePrice: 4990000,
    stock: 10,
    images: [
      "/product_image/speaker_micro_webcam/loa_logitech_g560/loa_logitech_g560.png",
      "/product_image/speaker_micro_webcam/loa_logitech_g560/loa_logitech_g560_01.jpg",
    ],
    shortDesc: "Loa gaming 2.1 với công suất cực đại 240W, tích hợp công nghệ đồng bộ ánh sáng Lightsync RGB.",
    description: `
      <h3>Hệ thống âm thanh vòm DTS:X Ultra</h3>
      <p>Logitech G560 mang rạp hát vào căn phòng của bạn với hệ thống loa 2.1 mạnh mẽ (Công suất cực đại lên tới 240W). Nhờ công nghệ âm thanh vòm định vị DTS:X Ultra, mọi âm thanh trong game từ tiếng bước chân, đạn bay cho đến những vụ nổ kinh thiên động địa đều được tái hiện chân thực trong không gian 3D, mang lại lợi thế tuyệt đối trong các trận chiến sinh tồn.</p>
      
      <h3>Ánh sáng Lightsync RGB phản ứng theo Game</h3>
      <p>Điểm độc đáo nhất của G560 chính là hệ thống Lightsync RGB tích hợp phía sau 2 loa vệ tinh. Ánh sáng này có khả năng quét màn hình (Screen Sampler) và tự động thay đổi màu sắc, độ chớp nháy đồng bộ với diễn biến trò chơi, cảnh phim hoặc theo nhịp điệu bài hát mà bạn đang nghe.</p>
    `,
    brand: "Logitech",
    specs: {
      brand: "Logitech",
    },
    cardSpecs: [
      { label: "Hệ thống", value: "Loa 2.1 (Kèm Subwoofer)" },
      { label: "Công suất", value: "120W RMS (Max 240W)" },
      { label: "Đèn nền", value: "Lightsync RGB (Tương tác màn hình)" },
    ],
    detailSpecs: [
      { label: "Loại loa", value: "Loa Gaming Hệ thống 2.1" },
      { label: "Công suất (RMS)", value: "120W (Subwoofer 60W + 2 Vệ tinh x 30W)" },
      { label: "Công suất cực đại (Peak)", value: "240W" },
      { label: "Công nghệ âm thanh", value: "DTS:X Ultra Surround Sound" },
      { label: "Đèn nền", value: "Lightsync RGB (4 vùng chiếu sáng độc lập)" },
      { label: "Kết nối", value: "Bluetooth 4.1, USB, Jack 3.5mm" },
      { label: "Tính năng", value: "Easy-Switch (Chuyển đổi 4 thiết bị mượt mà)" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "SPK003",
    slug: "loa-razer-leviathan-v2",
    name: "Loa Razer Leviathan V2",
    category: "speaker",
    subcategory: "speaker_micro_webcam",
    price: 6290000,
    salePrice: 5890000,
    stock: 10,
    images: [
      "/product_image/speaker_micro_webcam/loa_razer_leviathan_v2/loa_razer_leviathan_v2.png",
      "/product_image/speaker_micro_webcam/loa_razer_leviathan_v2/loa_razer_leviathan_v2_01.jpg",
      "/product_image/speaker_micro_webcam/loa_razer_leviathan_v2/loa_razer_leviathan_v2_02.jpg",
      "/product_image/speaker_micro_webcam/loa_razer_leviathan_v2/loa_razer_leviathan_v2_03.jpg",
      "/product_image/speaker_micro_webcam/loa_razer_leviathan_v2/loa_razer_leviathan_v2_04.jpg",
    ],
    shortDesc: "Loa Soundbar Gaming cao cấp kèm loa siêu trầm (Subwoofer), hỗ trợ THX Spatial Audio.",
    description: `
      <h3>Thiết kế Soundbar giải phóng không gian</h3>
      <p>Razer Leviathan V2 mang ngôn ngữ thiết kế Soundbar (Loa thanh) nhỏ gọn, dễ dàng nằm lọt thỏm dưới viền màn hình máy tính của bạn mà không làm vướng víu không gian bàn làm việc. Đi kèm là một loa siêu trầm (Subwoofer) rời đánh úp (Down-firing) mang lại dải âm bass vô cùng uy lực, rung chuyển cả mặt sàn.</p>
      
      <h3>Chất lượng âm thanh chuẩn THX</h3>
      <p>Loa được trang bị 2 củ loa toàn dải, 2 loa tweeter và công nghệ giả lập âm thanh vòm THX Spatial Audio tiên tiến. Bạn sẽ chìm đắm trong không gian âm thanh điện ảnh khi xem phim hoặc xác định chính xác vị trí kẻ địch khi chơi các tựa game FPS căng thẳng. Dải LED Razer Chroma RGB viền dưới chân loa tạo điểm nhấn cho toàn bộ hệ sinh thái Razer của bạn.</p>
    `,
    brand: "Razer",
    specs: {
      brand: "Razer",
    },
    cardSpecs: [
      { label: "Hệ thống", value: "Loa Soundbar + Subwoofer (2.1)" },
      { label: "Công nghệ", value: "THX Spatial Audio" },
      { label: "Đèn nền", value: "Razer Chroma RGB (18 Vùng)" },
    ],
    detailSpecs: [
      { label: "Loại loa", value: "Soundbar Gaming 2.1" },
      { label: "Màng loa Soundbar", value: "2x Full-range, 2x Tweeter" },
      { label: "Màng loa Subwoofer", value: "1x Loa trầm đánh úp (Down-firing)" },
      { label: "Công nghệ âm thanh", value: "THX Spatial Audio" },
      { label: "Đèn nền", value: "Razer Chroma RGB 18 vùng" },
      { label: "Kết nối", value: "Bluetooth 5.2, USB Audio" },
      { label: "Tương thích", value: "PC (Razer Synapse), Smartphone (Razer Audio App)" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },

  {
    id: "SPK004",
    slug: "loa-thonet-vander-black-2-0",
    name: "Loa Thonet & Vander Black 2.0",
    category: "speaker",
    subcategory: "speaker_micro_webcam",
    price: 2390000,
    salePrice: 2190000,
    stock: 10,
    images: [
      "/product_image/speaker_micro_webcam/loa_thonet_vander_black/loa_thonet_vander_black_2.0.png",
      "/product_image/speaker_micro_webcam/loa_thonet_vander_black/loa_thonet_vander_black_01.png",
      "/product_image/speaker_micro_webcam/loa_thonet_vander_black/loa_thonet_vander_black_02.png",
      "/product_image/speaker_micro_webcam/loa_thonet_vander_black/loa_thonet_vander_black_03.png",
    ],
    shortDesc: "Loa Bluetooth 2.0 đến từ Đức, thiết kế tối giản, công nghệ kết nối hiện đại.",
    description: `
      <h3>Sự tinh tế của công nghệ Đức</h3>
      <p>Thonet & Vander (Thương hiệu đến từ Đức) mang đến một thiết kế loa Bookshelf (Loa kệ sách) 2.0 cực kỳ sang trọng với tông màu Đen (Black) nhám huyền bí. Thiết kế tối giản không chỉ phù hợp đặt bên cạnh máy tính PC mà còn tô điểm thêm sự hiện đại cho phòng khách hay kệ TV nhà bạn.</p>
      
      <h3>Củ loa cải tiến, âm thanh sắc nét</h3>
      <p>Được chế tác từ màng loa sợi Aramid và củ loa Tweeter bằng lụa tinh khiết, Thonet & Vander tái tạo âm thanh cân bằng hoàn hảo, loại bỏ hoàn toàn hiện tượng méo tiếng ở mức âm lượng cao. Màng lưới chắn bụi có thể tháo rời giúp bạn dễ dàng thay đổi diện mạo của loa tùy theo sở thích.</p>
    `,
    brand: "Thonet & Vander",
    specs: {
      brand: "Thonet & Vander",
    },
    cardSpecs: [
      { label: "Hệ thống", value: "Loa 2.0 (Bookshelf)" },
      { label: "Kết nối", value: "Bluetooth 5.0 / AUX / RCA" },
      { label: "Công suất", value: "32W RMS" },
    ],
    detailSpecs: [
      { label: "Loại loa", value: "Loa kệ sách (Bookshelf) 2.0" },
      { label: "Công suất (RMS)", value: "16W + 16W (Tổng 32W)" },
      { label: "Công suất cực đại", value: "160W (Peak Power)" },
      { label: "Dải tần số", value: "50Hz - 20kHz" },
      { label: "Kết nối", value: "Bluetooth 5.0, RCA, 3.5mm Stereo" },
      { label: "Chất liệu màng loa", value: "Aramid (Bass) / Lụa (Tweeter)" },
      { label: "Chất liệu vỏ loa", value: "HDAA Wood (Gỗ mật độ cao)" },
      { label: "Điều khiển", value: "Nút xoay chỉnh Âm lượng, Bass, Treble bên hông" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },

  {
    id: "SPK005",
    slug: "loa-thonet-vander-white-2-0",
    name: "Loa Thonet & Vander White 2.0",
    category: "speaker",
    subcategory: "speaker_micro_webcam",
    price: 2390000,
    salePrice: 2190000,
    stock: 10,
    images: [
      "/product_image/speaker_micro_webcam/loa_thonet_vander_white/loa_thonet_vander_white_2.0.png",
      "/product_image/speaker_micro_webcam/loa_thonet_vander_white/loa_thonet_vander_white_01.png",
      "/product_image/speaker_micro_webcam/loa_thonet_vander_white/loa_thonet_vander_white_02.png",
      "/product_image/speaker_micro_webcam/loa_thonet_vander_white/loa_thonet_vander_white_03.png",
      "/product_image/speaker_micro_webcam/loa_thonet_vander_white/loa_thonet_vander_white_04.png",
    ],
    shortDesc: "Loa Bookshelf màu Trắng thanh lịch, thùng gỗ HDAA mang lại chất âm vòm tự nhiên.",
    description: `
      <h3>Tông màu Trắng (White) thanh lịch</h3>
      <p>Sở hữu lớp vỏ sơn trắng ngọc trai tuyệt đẹp, phiên bản Thonet & Vander White 2.0 là mảnh ghép hoàn hảo cho những không gian setup PC, Mac hay phòng thu theo phong cách sáng màu (All-White Setup). Nó toát lên vẻ đẹp thẩm mỹ cao cấp, hòa hợp với mọi nội thất hiện đại.</p>
      
      <h3>Thùng gỗ HDAA chuyên dụng</h3>
      <p>Chất âm của loa được hưởng lợi rất lớn từ lớp vỏ thùng HDAA (High Density Acoustic Absorber). Loại gỗ mật độ cao chuyên dụng này ngăn chặn hiện tượng rò rỉ âm thanh, giúp tái tạo độ vang vòm tự nhiên, mang lại dải bass chắc chắn và có lực, cực kỳ thích hợp để nghe nhạc Acoustic hay nhạc thính phòng.</p>
    `,
    brand: "Thonet & Vander",
    specs: {
      brand: "Thonet & Vander",
    },
    cardSpecs: [
      { label: "Hệ thống", value: "Loa 2.0 (Bookshelf)" },
      { label: "Kết nối", value: "Bluetooth 5.0 / AUX / RCA" },
      { label: "Màu sắc", value: "Trắng (White)" },
    ],
    detailSpecs: [
      { label: "Loại loa", value: "Loa kệ sách (Bookshelf) 2.0" },
      { label: "Công suất (RMS)", value: "16W + 16W (Tổng 32W)" },
      { label: "Công suất cực đại", value: "160W (Peak Power)" },
      { label: "Dải tần số", value: "50Hz - 20kHz" },
      { label: "Kết nối", value: "Bluetooth 5.0, RCA, 3.5mm Stereo" },
      { label: "Chất liệu màng loa", value: "Aramid (Bass) / Lụa (Tweeter)" },
      { label: "Chất liệu vỏ loa", value: "HDAA Wood (Gỗ mật độ cao)" },
      { label: "Màu sắc", value: "Trắng Nhám (Matte White)" },
      { label: "Bảo hành", value: "12 Tháng" },
    ],
  },
];