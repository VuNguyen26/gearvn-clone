import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

export const tables = async (): Promise<Product[]> => {
  const q = query(
    collection(db, "products"),
    where("category", "==", "table") // ⚠️ phải match DB
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
};

// export const tables: Product[] = [
//   {
//     id: "TBL001",
//     slug: "ban-cooler-master-gd160-argb-e1",
//     name: "Bàn Cooler Master GD160 ARGB E1",
//     category: "table",
//     subcategory: "tables_chairs",
//     price: 3990000,
//     salePrice: 3690000,
//     stock: 10,
//     images: [
//       "/product_image/tables_chairs/table_cooler_master_gd160_argb_e1/table_cooler_master_gd160_argb_e1.png",
//       "/product_image/tables_chairs/table_cooler_master_gd160_argb_e1/table_cooler_master_gd160_argb_e1_01.png",
//       "/product_image/tables_chairs/table_cooler_master_gd160_argb_e1/table_cooler_master_gd160_argb_e1_02.png",
//       "/product_image/tables_chairs/table_cooler_master_gd160_argb_e1/table_cooler_master_gd160_argb_e1_03.png",
//     ],
//     shortDesc: "Bàn gaming nâng hạ chiều cao thông minh bằng động cơ kép, dải LED ARGB viền đồng bộ.",
//     description: `
//       <h3>Nâng hạ thông minh, bảo vệ sức khỏe</h3>
//       <p>Cooler Master GD160 ARGB là mẫu bàn công thái học sở hữu hệ thống động cơ kép (Dual Motor) siêu êm ái, cho phép bạn dễ dàng thay đổi chiều cao bàn (từ 65cm đến 130cm) để luân phiên giữa tư thế ngồi và đứng. Việc thay đổi tư thế này giúp giảm bớt áp lực lên cột sống sau những giờ làm việc hoặc chơi game kéo dài.</p>
      
//       <h3>Không gian rộng lớn, LED ARGB đỉnh cao</h3>
//       <p>Với chiều dài mặt bàn lên đến 160cm, bạn có dư sức để thiết lập hệ thống 2-3 màn hình cùng thùng máy PC siêu to. Sản phẩm được trang bị 2 dải LED ARGB mặt trước và mặt sau, có thể tùy chỉnh ánh sáng dễ dàng qua phần mềm MasterPlus+. Đi kèm là một tấm lót chuột khổng lồ chống nước bao phủ toàn bộ bề mặt, mang lại sự êm ái khi thao tác.</p>
//     `,
//     brand: "Cooler Master",
//     specs: {
//       brand: "Cooler Master",
//     },
//     cardSpecs: [
//       { label: "Kích thước", value: "160 x 75 cm" },
//       { label: "Tính năng", value: "Nâng hạ điện (Dual Motor)" },
//       { label: "Tải trọng", value: "Lên đến 100 kg" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn", value: "Bàn Gaming Công Thái Học (Nâng hạ điện)" },
//       { label: "Kích thước", value: "160 x 75 x (65 - 130) cm" },
//       { label: "Mặt bàn", value: "Gỗ ván dăm + Pad chuột chống nước toàn bàn" },
//       { label: "Khung bàn", value: "Hợp kim nhôm + Thép (Động cơ kép)" },
//       { label: "Đèn nền", value: "LED ARGB Dual Zone (Hỗ trợ MasterPlus+)" },
//       { label: "Tải trọng tối đa", value: "100 kg" },
//       { label: "Tiện ích", value: "Nhớ vị trí chiều cao, Khay giấu dây thông minh" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "TBL002",
//     slug: "ban-cooler-master-gd120-argb",
//     name: "Bàn Cooler Master GD120 ARGB",
//     category: "table",
//     subcategory: "tables_chairs",
//     price: 3490000,
//     salePrice: 3190000,
//     stock: 10,
//     images: [
//       "/product_image/tables_chairs/table_coolermaster_gd120_argb/table_coolermaster_gd120_argb.png",
//       "/product_image/tables_chairs/table_coolermaster_gd120_argb/table_coolermaster_gd120_argb_01.png",
//       "/product_image/tables_chairs/table_coolermaster_gd120_argb/table_coolermaster_gd120_argb_02.png",
//       "/product_image/tables_chairs/table_coolermaster_gd120_argb/table_coolermaster_gd120_argb_03.png",
//     ],
//     shortDesc: "Bàn gaming cố định kích thước 120cm gọn gàng, hệ thống chiếu sáng ARGB thông minh.",
//     description: `
//       <h3>Kích thước 120cm tối ưu không gian</h3>
//       <p>Cooler Master GD120 ARGB được thiết kế dành cho những góc máy không có quá nhiều diện tích. Với chiều dài 120cm và sâu 75cm, chiếc bàn cung cấp một khoảng không gian vừa vặn, gọn gàng, phù hợp cho setup một màn hình máy tính cùng hệ sinh thái gaming gear của bạn.</p>
      
//       <h3>Ánh sáng ARGB và Quản lý cáp ẩn</h3>
//       <p>Nổi bật ở mặt trước là dải LED ARGB chiếu sáng hắt xuống sắc nét, tương thích với MasterPlus+ giúp bạn đồng bộ đèn cùng dàn máy tính. Mặt sau của bàn được thiết kế thêm khay nhôm giấu cáp chắc chắn, giữ cho toàn bộ dây nguồn, dây kết nối luôn nằm khuất tầm nhìn, tạo sự gọn gàng tuyệt đối.</p>
//     `,
//     brand: "Cooler Master",
//     specs: {
//       brand: "Cooler Master",
//     },
//     cardSpecs: [
//       { label: "Kích thước", value: "120 x 75 cm" },
//       { label: "Đèn nền", value: "LED ARGB hắt sáng" },
//       { label: "Tiện ích", value: "Khay giấu cáp bằng thép" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn", value: "Bàn Gaming Cố định" },
//       { label: "Kích thước", value: "120 x 75 x 74 cm" },
//       { label: "Mặt bàn", value: "Gỗ công nghiệp xử lý chống trầy, chống nước" },
//       { label: "Khung bàn", value: "Thép carbon chống rỉ" },
//       { label: "Đèn nền", value: "LED ARGB (Tương thích phần mềm hệ thống)" },
//       { label: "Tải trọng tối đa", value: "100 kg" },
//       { label: "Phụ kiện đi kèm", value: "Pad chuột size lớn (900x300mm)" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "TBL003",
//     slug: "ban-dxracer-next-tg-gdn001-ns",
//     name: "Bàn DXRacer Next TG GDN001 NS",
//     category: "table",
//     subcategory: "tables_chairs",
//     price: 5990000,
//     salePrice: 5690000,
//     stock: 10,
//     images: [
//       "/product_image/tables_chairs/table_dxracer_nex_tg_gdn001_ns/table_dxracer_nex_tg_gdn001_ns.png",
//       "/product_image/tables_chairs/table_dxracer_nex_tg_gdn001_ns/table_dxracer_nex_tg_gdn001_ns_01.png",
//       "/product_image/tables_chairs/table_dxracer_nex_tg_gdn001_ns/table_dxracer_nex_tg_gdn001_ns_02.png",
//       "/product_image/tables_chairs/table_dxracer_nex_tg_gdn001_ns/table_dxracer_nex_tg_gdn001_ns_03.png",
//     ],
//     shortDesc: "Bàn thể thao điện tử cao cấp, khung chữ Z siêu cứng cáp, thiết kế vát viền bảo vệ cổ tay.",
//     description: `
//       <h3>Tiêu chuẩn phòng thi đấu eSports</h3>
//       <p>Là sản phẩm đến từ ông lớn DXRacer, bàn Next TG GDN001 NS đem lại một sự chắc chắn vô song nhờ bộ khung gầm chữ Z kép làm từ thép ống dày dặn. Cấu trúc này phân tán lực cực tốt, triệt tiêu mọi rung lắc kể cả khi bạn thực hiện các thao tác vẩy chuột mạnh hay lỡ tay đập bàn khi thua game.</p>
      
//       <h3>Mặt vân carbon, vát viền tinh tế</h3>
//       <p>Bề mặt bàn được làm từ gỗ chống ẩm 100%, phủ bên ngoài lớp vân sợi Carbon P2 mang đậm chất viễn tưởng và dễ dàng lau chùi. Viền mép bàn được vát góc công thái học với lớp viền nhựa ABS ốp dọc cạnh, mang lại sự êm ái cho cẳng tay và cổ tay khi phải tì đè thời gian dài.</p>
//     `,
//     brand: "DXRacer",
//     specs: {
//       brand: "DXRacer",
//     },
//     cardSpecs: [
//       { label: "Kích thước", value: "120 x 60 cm" },
//       { label: "Khung bàn", value: "Thép chữ Z siêu chịu lực" },
//       { label: "Bề mặt", value: "Phủ vân sợi Carbon" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn", value: "Bàn Gaming / Thể thao điện tử" },
//       { label: "Kích thước", value: "120 x 60 x 75 cm" },
//       { label: "Mặt bàn", value: "Gỗ MDF phủ vân Carbon P2, Viền nhựa ABS" },
//       { label: "Chân bàn", value: "Khung thép hợp kim chữ Z sơn tĩnh điện" },
//       { label: "Tải trọng tối đa", value: "Khuyên dùng dưới 80 kg" },
//       { label: "Tiện ích", value: "Khay đi dây lớn phía sau, 2 lỗ luồn dây mặt bàn" },
//       { label: "Bảo hành", value: "24 Tháng" },
//     ],
//   },

//   {
//     id: "TBL004",
//     slug: "ban-e-dra-egt1460a",
//     name: "Bàn E-Dra EGT1460A",
//     category: "table",
//     subcategory: "tables_chairs",
//     price: 2790000,
//     salePrice: 2490000,
//     stock: 10,
//     images: [
//       "/product_image/tables_chairs/table_e_dra_egt1460a/table_e_dra_egt1460a.jpg",
//       "/product_image/tables_chairs/table_e_dra_egt1460a/table_e_dra_egt1460a_01.jpg",
//       "/product_image/tables_chairs/table_e_dra_egt1460a/table_e_dra_egt1460a_02.jpg",
//       "/product_image/tables_chairs/table_e_dra_egt1460a/table_e_dra_egt1460a_03.jpg",
//     ],
//     shortDesc: "Bàn gaming quốc dân kích thước 140cm, chân chữ A vững chãi, mức giá cực kỳ dễ tiếp cận.",
//     description: `
//       <h3>Không gian thao tác thoải mái</h3>
//       <p>Với chiều dài mặt bàn lên đến 140cm, E-Dra EGT1460A cung cấp cho bạn một không gian cực lớn để thỏa sức sáng tạo. Bạn có thể dễ dàng lắp đặt 2 màn hình 27 inch hoặc đặt thùng máy tính PC (Full Tower) lên hẳn mặt bàn để khoe toàn bộ linh kiện RGB bên trong mà không sợ chật chội.</p>
      
//       <h3>Khung chữ A thiết kế khoa học</h3>
//       <p>Sử dụng bộ khung thép tạo hình chữ A độc đáo, bàn đảm bảo khả năng chịu tải cao đồng thời giữ được khoảng trống rộng rãi dưới gầm để chân người dùng di chuyển thoải mái. Mặt bàn vát khuyết công thái học ở cạnh ngồi giúp bạn tiến sát vào màn hình hơn mà không bị cấn bụng.</p>
//     `,
//     brand: "E-Dra",
//     specs: {
//       brand: "E-Dra",
//     },
//     cardSpecs: [
//       { label: "Kích thước", value: "140 x 60 cm" },
//       { label: "Khung bàn", value: "Thép chữ A" },
//       { label: "Mặt bàn", value: "Vân Carbon chống nước" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn", value: "Bàn Gaming / Bàn Làm Việc" },
//       { label: "Kích thước", value: "140 x 60 x 75 cm" },
//       { label: "Mặt bàn", value: "Gỗ MDF cao cấp phủ vân Carbon" },
//       { label: "Chân bàn", value: "Thép không gỉ thiết kế chữ A, sơn tĩnh điện" },
//       { label: "Tải trọng tối đa", value: "100 kg" },
//       { label: "Tiện ích", value: "Bao gồm khay giấu dây gọn gàng" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "TBL005",
//     slug: "ban-warrior-paladin",
//     name: "Bàn Warrior Paladin",
//     category: "table",
//     subcategory: "tables_chairs",
//     price: 3290000,
//     salePrice: 2990000,
//     stock: 10,
//     images: [
//       "/product_image/tables_chairs/table_warrior_paladin/table_warrior_paladin.png",
//       "/product_image/tables_chairs/table_warrior_paladin/table_warrior_paladin_01.png",
//       "/product_image/tables_chairs/table_warrior_paladin/table_warrior_paladin_02.png",
//       "/product_image/tables_chairs/table_warrior_paladin/table_warrior_paladin_03.png",
//       "/product_image/tables_chairs/table_warrior_paladin/table_warrior_paladin_04.png",
//     ],
//     shortDesc: "Bàn gaming tặng kèm lót chuột phủ toàn mặt bàn, đầy đủ phụ kiện cho Game thủ.",
//     description: `
//       <h3>Thiết kế Paladin hiện đại, thực dụng</h3>
//       <p>Warrior Paladin (Dòng 120cm) hướng tới sự tiện dụng tối đa cho người chơi. Mặt bàn làm từ sợi carbon với hai lỗ đi dây ở hai góc, giúp đi cáp gọn gàng cho cả chuột, bàn phím lẫn màn hình. Khung hợp kim nhôm hình chữ K gia tăng sự ổn định cho tổng thể.</p>
      
//       <h3>Đầy đủ đồ chơi đi kèm</h3>
//       <p>Khi mua bàn Warrior Paladin, bạn sẽ được tặng kèm một tấm lót chuột (Mousepad) siêu dày che phủ kín 100% diện tích mặt bàn, mang lại sự êm ái tối đa. Các phụ kiện như Khay giữ cốc nước (chống đổ ra bàn) và Giá treo tai nghe được tích hợp gọn gàng ở 2 cạnh bên, giúp bàn làm việc của bạn sạch sẽ và chuyên nghiệp hơn.</p>
//     `,
//     brand: "Warrior",
//     specs: {
//       brand: "Warrior",
//     },
//     cardSpecs: [
//       { label: "Kích thước", value: "120 x 60 cm" },
//       { label: "Quà tặng", value: "Lót chuột Full mặt bàn" },
//       { label: "Phụ kiện", value: "Giá để cốc, Treo tai nghe" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn", value: "Bàn Gaming Setup" },
//       { label: "Kích thước", value: "120 x 60 x 75 cm" },
//       { label: "Mặt bàn", value: "Gỗ P2 bọc vân Carbon nhám" },
//       { label: "Chân bàn", value: "Hợp kim thép chữ K siêu bền" },
//       { label: "Phụ kiện đi kèm", value: "Mousepad Full bàn, Khay đựng cốc, Giá treo tai nghe" },
//       { label: "Tải trọng tối đa", value: "80 kg" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },

//   {
//     id: "TBL006",
//     slug: "ban-warrior-wgt606-pro",
//     name: "Bàn Warrior WGT606 Pro",
//     category: "table",
//     subcategory: "tables_chairs",
//     price: 3590000,
//     salePrice: 3290000,
//     stock: 10,
//     images: [
//       "/product_image/tables_chairs/table_warrior_wgt606_pro/table_warrior_wgt606_pro.jpg",
//       "/product_image/tables_chairs/table_warrior_wgt606_pro/table_warrior_wgt606_pro_01.jpg",
//       "/product_image/tables_chairs/table_warrior_wgt606_pro/table_warrior_wgt606_pro_02.jpg",
//       "/product_image/tables_chairs/table_warrior_wgt606_pro/table_warrior_wgt606_pro_03.jpg",
//       "/product_image/tables_chairs/table_warrior_wgt606_pro/table_warrior_wgt606_pro_04.jpg",
//     ],
//     shortDesc: "Bàn góc máy 140cm phiên bản Pro, trang bị võng lưới giữ dây cáp cực xịn.",
//     description: `
//       <h3>Phiên bản Pro mở rộng 140cm</h3>
//       <p>Warrior WGT606 Pro nâng cấp diện tích sử dụng lên 140cm x 60cm, tạo điều kiện thuận lợi để anh em game thủ hay Editor khoe những dàn máy tính Custom rực rỡ LED. Độ dày ván gỗ được tinh chỉnh cứng cáp, chống cong vênh hiệu quả dù phải gánh màn hình cỡ lớn hoặc Arm kẹp màn hình.</p>
      
//       <h3>Giải pháp quản lý cáp tuyệt đỉnh</h3>
//       <p>Điểm làm nên giá trị của bản Pro là hệ thống lưới võng quản lý cáp được lắp sẵn bên dưới gầm bàn. Nó có thể giữ lại toàn bộ củ sạc, dây nối, ổ cắm điện mà không để lộ bất cứ sợi dây rườm rà nào xuống chân người dùng, tạo nên một bức tranh hoàn mỹ cho góc setup máy tính không dây.</p>
//     `,
//     brand: "Warrior",
//     specs: {
//       brand: "Warrior",
//     },
//     cardSpecs: [
//       { label: "Kích thước", value: "140 x 60 cm" },
//       { label: "Quản lý cáp", value: "Lưới võng đi dây gầm bàn" },
//       { label: "Phụ kiện", value: "Giá để cốc, Treo tai nghe" },
//     ],
//     detailSpecs: [
//       { label: "Loại bàn", value: "Bàn Gaming (Size Lớn)" },
//       { label: "Kích thước", value: "140 x 60 x 75 cm" },
//       { label: "Mặt bàn", value: "Gỗ P2 bọc vân Carbon cao cấp" },
//       { label: "Chân bàn", value: "Thép hợp kim chịu lực (Sơn tĩnh điện đỏ/đen)" },
//       { label: "Quản lý cáp", value: "Hệ thống võng lưới dưới gầm bàn" },
//       { label: "Tải trọng tối đa", value: "Lên đến 100 kg" },
//       { label: "Phụ kiện đi kèm", value: "Khay đựng cốc, Móc treo tai nghe đôi" },
//       { label: "Bảo hành", value: "12 Tháng" },
//     ],
//   },
// ];