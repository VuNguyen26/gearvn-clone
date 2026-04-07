import { Product } from "@/types/product";

export const cases: Product[] = [
  {
    id: "CASE001",
    slug: "vo-case-asus-rog-strix-helios-ii-hatsune-miku-edition",
    name: "Vỏ Case ASUS ROG Strix Helios II Hatsune Miku Edition",
    category: "case",
    subcategory: "case_psu_cooler",
    price: 12990000,
    salePrice: 11040000,
    stock: 5,
    images: [
      "/product_image/case_psu_cooler/case_asus_rog_strix_helios_2_hatsune_miku/case_asus_rog_strix_helios_2_hatsune_miku.png",
      "/product_image/case_psu_cooler/case_asus_rog_strix_helios_2_hatsune_miku/case_asus_rog_strix_helios_2_hatsune_miku_01.png",
      "/product_image/case_psu_cooler/case_asus_rog_strix_helios_2_hatsune_miku/case_asus_rog_strix_helios_2_hatsune_miku_02.png",
      "/product_image/case_psu_cooler/case_asus_rog_strix_helios_2_hatsune_miku/case_asus_rog_strix_helios_2_hatsune_miku_03.png",
      "/product_image/case_psu_cooler/case_asus_rog_strix_helios_2_hatsune_miku/case_asus_rog_strix_helios_2_hatsune_miku_04.png",
      "/product_image/case_psu_cooler/case_asus_rog_strix_helios_2_hatsune_miku/case_asus_rog_strix_helios_2_hatsune_miku_05.png",
    ],
    shortDesc:
      "Phiên bản giới hạn Hatsune Miku với thiết kế Mid-Tower cao cấp, hỗ trợ EATX và hệ thống đèn Aura Sync ARGB rực rỡ.",
    description: `
      <h3>Thiết kế độc bản Hatsune Miku</h3>
      <p>ASUS ROG Strix Helios II Hatsune Miku Edition sở hữu tông màu xanh lam-xanh lục và hồng đặc trưng của "nàng thơ" ảo Hatsune Miku. Mặt trước bằng nhôm phay xước kết hợp với kính cường lực 4mm ở hai bên hông giúp phô diễn toàn bộ linh kiện bên trong một cách đẳng cấp.</p>
      
      <h3>Hiệu suất tản nhiệt vượt trội</h3>
      <p>Case được trang bị sẵn 4 quạt 140mm hiệu suất cao (3 quạt trước, 1 quạt sau) đảm bảo luồng khí lưu thông tối ưu. Hỗ trợ lắp đặt radiator lên đến 420mm ở phía trước và 360mm ở phía trên, sẵn sàng cho những hệ thống tản nhiệt nước custom phức tạp nhất.</p>
      
      <h3>Khả năng mở rộng và quản lý cáp thông minh</h3>
      <p>Với không gian rộng rãi, Helios II hỗ trợ card đồ họa dài tới 450mm và tản nhiệt CPU cao 190mm. Hệ thống quản lý cáp với nắp đậy đa năng giúp che giấu dây nhợ gọn gàng, đi kèm dây đeo vải dệt hình chữ X chắc chắn giúp bạn dễ dàng di chuyển bộ máy đến các buổi party LAN.</p>
    `,
    brand: "ASUS",
    specs: {
      brand: "ASUS",
      type: "Mid Tower",
    },
    cardSpecs: [
      { label: "Loại case", value: "Mid Tower" },
      { label: "Hỗ trợ Main", value: "EATX, ATX, Micro-ATX" },
      { label: "Màu sắc", value: "Hatsune Miku Edition" },
    ],
    detailSpecs: [
      { label: "Kích thước", value: "250 x 565 x 591 mm" },
      { label: "Trọng lượng", value: "18 kg" },
      { label: "Chất liệu", value: "Nhôm, Thép, Kính cường lực" },
      { label: "Hỗ trợ Mainboard", value: "EATX (12\"x10.9\"), ATX, Micro-ATX, Mini-ITX" },
      { label: "Khay ổ đĩa", value: "4 x 2.5\" Bay, 2 x 2.5\"/3.5\" Combo Bay" },
      { label: "Khe mở rộng", value: "8 + 2 (dọc)" },
      { label: "Cổng I/O trước", value: "1 x Headphone/Mic, 2 x USB 3.2 Gen 2x2 Type-C, 4 x USB 3.2 Gen 1" },
      { label: "Hỗ trợ Radiator", value: "Trước: 420mm, Trên: 360mm, Sau: 140mm" },
      { label: "Chiều dài GPU tối đa", value: "450 mm" },
      { label: "Chiều cao tản CPU tối đa", value: "190 mm" },
      { label: "Hệ thống quạt đi kèm", value: "Trước: 3 x 140mm PWM, Sau: 1 x 140mm PWM" },
      { label: "Bảo hành", value: "24 Tháng" },
    ],
  },
];