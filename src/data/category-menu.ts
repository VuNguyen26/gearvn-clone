export type MenuSection = {
  title: string;
  items: string[];
};

export type MenuCategory = {
  id: string;
  label: string;
  sections: MenuSection[];
};

export const CATEGORY_MENU: MenuCategory[] = [
  {
    id: "laptop",
    label: "Laptop",
    sections: [
      {
        title: "Thương hiệu",
        items: ["ASUS", "ACER", "MSI", "LENOVO", "DELL", "HP - Pavilion", "LG - Gram"],
      },
      {
        title: "Giá bán",
        items: ["Dưới 15 triệu", "Từ 15 đến 20 triệu", "Trên 20 triệu"],
      },
      // {
      //   title: "CPU Intel - AMD",
      //   items: ["Intel Core i3", "Intel Core i5", "Intel Core i7", "AMD Ryzen"],
      // },
      // {
      //   title: "Nhu cầu sử dụng",
      //   items: ["Đồ họa - Studio", "Học sinh - Sinh viên", "Mỏng nhẹ cao cấp"],
      // },
      // {
      //   title: "Linh phụ kiện Laptop",
      //   items: ["Ram laptop", "SSD laptop", "Ổ cứng di động"],
      // },
      {
        title: "Laptop ASUS",
        items: ["ASUS OLED Series", "Vivobook Series", "Zenbook Series"],
      },
      {
        title: "Laptop ACER",
        items: ["Aspire Series", "Swift Series"],
      },
      {
        title: "Laptop MSI",
        items: ["Modern Series", "Prestige Series"],
      },
      {
        title: "Laptop Lenovo",
        items: ["Thinkbook Series", "Ideapad Series", "Thinkpad Series", "Yoga Series"],
      },
      {
        title: "Laptop Dell",
        items: ["Inspiron Series", "Vostro Series", "Latitude Series", "XPS Series"],
      },
    ],
  },
  {
    id: "laptop-gaming",
    label: "Laptop Gaming",
    sections: [
      {
        title: "THƯƠNG HIỆU",
        items: [
          "ACER / PREDATOR",
          "ASUS / ROG",
          "MSI",
          "LENOVO",
          "DELL",
          "GIGABYTE / AORUS",
          "HP",
        ],
      },
      {
        title: "GIÁ BÁN",
        items: [
          "Dưới 20 triệu",
          "Từ 20 đến 25 triệu",
          "Từ 25 đến 30 triệu",
          "Trên 30 triệu",
          "Gaming RTX 50 Series",
        ],
      },
      {
        title: "ACER | PREDATOR",
        items: [
          "Nitro V Series",
          "Nitro 5 Series",
          "Predator Helios",
          "Predator Triton",
          "ACER RTX 50 Series",
        ],
      },
      {
        title: "ASUS | ROG GAMING",
        items: [
          "ROG Strix",
          "ROG Zephyrus",
          "ROG Flow",
          "TUF Gaming",
          "ASUS RTX 50 Series",
        ],
      },
      {
        title: "MSI GAMING",
        items: [
          "Titan GT Series",
          "Stealth GS Series",
          "Raider GE Series",
          "Vector GP Series",
          "Sword / Katana GF66 Series",
          "Cyborg / Thin GF Series",
          "MSI RTX 50 Series",
        ],
      },
      {
        title: "LENOVO GAMING",
        items: [
          "Legion Gaming",
          "LOQ Series",
          "RTX 50 Series",
        ],
      },
      {
        title: "GIGABYTE GAMING",
        items: [
          "Gaming Gigabyte",
          "AORUS Gaming",
          "GIGABYTE RTX 50 Series",
        ],
      },
      {
        title: "HP GAMING",
        items: [
          "HP Victus",
          "HP Omen",
          "HP RTX 50 Series",
        ],
      },
      {
        title: "CẤU HÌNH",
        items: [
          "RTX 50 Series",
          "CPU Core Ultra",
          "CPU AMD",
        ],
      },
      {
        title: "LINH PHỤ KIỆN LAPTOP",
        items: [
          "Ram laptop",
          "SSD laptop",
          "Ổ cứng di động",
        ],
      },
    ],
  },
  {
    id: "pc-gvn",
    label: "PC GVN",
    sections: [
      {
        title: "PC THEO GIÁ",
        items: [
          "PC Dưới 30 triệu",
          "PC Từ 30 - 50 triệu",
          "PC Từ 50 - 70 triệu",
          "PC Từ 70 - 100 triệu",
          "PC Từ 100 - 200 triệu",
          "PC Trên 200 triệu",
        ],
      },
      // {
      //   title: "PC RTX 50 Series",
      //   items: ["PC RTX 5090", "PC RTX 5080", "PC RTX 5070Ti", "PC RTX 5070", "PC RTX 5060Ti"],
      // },
      // {
      //   title: "PC theo cấu hình VGA",
      //   items: ["PC RTX 5060", "PC RTX 5050", "PC RTX 3060", "PC RTX 3050"],
      // },
      // {
      //   title: "PC theo CPU AMD",
      //   items: ["PC AMD R3", "PC AMD R5", "PC AMD R7", "PC AMD R9"],
      // },
      // {
      //   title: "PC theo CPU Intel",
      //   items: ["PC Core i3", "PC Core i5", "PC Core i7", "PC Core i9", "PC Ultra 5", "PC Ultra 7"],
      // },
      // {
      //   title: "PC Văn phòng",
      //   items: ["Homework Athlon", "Homework R3", "Homework R5", "Homework i5"],
      // },
      // {
      //   title: "Phần mềm bản quyền",
      //   items: ["Windows bản quyền", "Office 365 bản quyền"],
      // },
    ],
  },
  {
    id: "main-cpu-vga",
    label: "Main, CPU, VGA",
    sections: [
      {
        title: "VGA RTX 50 SERIES",
        items: ["RTX 5090", "RTX 5080", "RTX 5070Ti", "RTX 5070", "RTX 5060Ti", "RTX 5060"],
      },
      {
        title: "VGA Trên 12 GB VRAM",
        items: ["RTX 4070 SUPER", "RTX 4070Ti SUPER", "RTX 4080 SUPER", "RTX 4090 SUPER"],
      },
      {
        title: "VGA Dưới 12 GB VRAM",
        items: ["RTX 4060Ti", "RTX 4060", "RTX 3060", "RTX 3050", "GTX 1650", "GT 710 / GT 1030"],
      },
      {
        title: "VGA - Card màn hình",
        items: ["NVIDIA Quadro", "AMD Radeon"],
      },
      // {
      //   title: "Bo mạch chủ Intel",
      //   items: ["Z890", "Z790", "B760", "H610", "X299X"],
      // },
      // {
      //   title: "Bo mạch chủ AMD",
      //   items: ["AMD X870", "AMD X670", "AMD X570", "AMD B650", "AMD B550", "AMD A320", "AMD TRX40"],
      // },
      {
        title: "CPU - Bộ vi xử lý Intel",
        items: ["Intel Core Ultra", "CPU Intel 9", "CPU Intel 7", "CPU Intel 5", "CPU Intel 3"],
      },
      {
        title: "CPU - Bộ vi xử lý AMD",
        items: ["CPU AMD Athlon", "CPU AMD R3", "CPU AMD R5", "CPU AMD R7", "CPU AMD R9"],
      },
    ],
  },
  {
    id: "case-nguon-tan",
    label: "Case, Nguồn, Tản",
    sections: [
      {
        title: "Case - Theo hãng",
        items: ["Case ASUS", "Case Corsair", "Case Lianli", "Case NZXT", "Case Jonsbo"],
      },
      {
        title: "Case - Theo giá",
        items: ["Dưới 1 triệu", "Từ 1 triệu đến 2 triệu", "Trên 2 triệu", "Xem tất cả"],
      },
      {
        title: "Nguồn - Theo hãng",
        items: ["Nguồn ASUS", "Nguồn DeepCool", "Nguồn Corsair", "Nguồn NZXT", "Nguồn MSI"],
      },
      {
        title: "Nguồn - Theo công suất",
        items: ["Từ 400W - 500W", "Từ 500W - 600W", "Từ 700W - 800W", "Trên 1000W"],
      },
      // {
      //   title: "Loại tản nhiệt",
      //   items: [
      //     "Tản nhiệt AIO 240mm",
      //     "Tản nhiệt AIO 280mm",
      //     "Tản nhiệt AIO 360mm",
      //     "Tản nhiệt AIO 420mm",
      //     "Tản nhiệt khí",
      //     "Fan RGB",
      //   ],
      // },
      // {
      //   title: "Phụ kiện PC",
      //   items: ["Dây LED", "Dây rise - Dựng VGA", "Giá đỡ VGA", "Keo tản nhiệt"],
      // },
    ],
  },
  {
    id: "o-cung-ram-the-nho",
    label: "Ổ cứng, RAM, Thẻ nhớ",
    sections: [
      {
        title: "Dung lượng RAM",
        items: ["8 GB", "16 GB", "32 GB", "64 GB", "Xem tất cả"],
      },
      {
        title: "Loại RAM",
        items: [ "Xem tất cả"],
      },
      {
        title: "Hãng RAM",
        items: ["Corsair", "Kingston", "G.Skill", "PNY"],
      },
      // {
      //   title: "Dung lượng HDD",
      //   items: ["HDD 1 TB", "HDD 2 TB", "HDD 4 TB - 6 TB", "HDD trên 8 TB"],
      // },
      // {
      //   title: "Hãng HDD",
      //   items: ["WesterDigital", "Seagate", "Toshiba"],
      // },
      {
        title: "Dung lượng SSD",
        items: ["120GB - 128GB", "250GB - 256GB", "480GB - 512GB", "960GB - 1TB", "2TB", "Trên 2TB"],
      },
      {
        title: "Hãng SSD",
        items: ["Samsung", "Wester Digital", "Kingston", "Corsair", "PNY"],
      },
      {
        title: "Thẻ nhớ / USB",
        items: ["Sandisk"],
      },
      {
        title: "Ổ cứng di động",
        items: ["SSD di động"],
      },
    ],
  },
  {
    id: "loa-micro-webcam",
    label: "Loa, Micro, Webcam",
    sections: [
      {
        title: "Thương hiệu loa",
        items: ["Edifier", "Razer", "Logitech", "SoundMax"],
      },
      // {
      //   title: "Kiểu loa",
      //   items: ["Loa vi tính", "Loa Bluetooth", "Loa Soundbar", "Loa mini", "Sub phụ"],
      // },
      // {
      //   title: "Webcam",
      //   items: ["Độ phân giải 4K", "Độ phân giải Full HD 1080p", "Độ phân giải 720p"],
      // },
      {
        title: "Microphone",
        items: ["Micro HyperX"],
      },
    ],
  },
  {
    id: "man-hinh",
    label: "Màn hình",
    sections: [
      {
        title: "Hãng sản xuất",
        items: ["LG", "Asus", "ViewSonic", "Dell", "Gigabyte", "AOC", "Acer", "HKC", "MSI", "Samsung", "Philips", "E-Dra", "VSP"],
      },
      {
        title: "Giá tiền",
        items: ["Dưới 5 triệu", "Từ 5 triệu đến 10 triệu", "Từ 10 triệu đến 20 triệu", "Từ 20 triệu đến 30 triệu", "Trên 30 triệu"],
      },
      {
        title: "Độ phân giải",
        items: ["Màn hình Full HD", "Màn hình 2K 1440p", "Màn hình 4K UHD", "Màn hình 6K"],
      },
      {
        title: "Tần số quét",
        items: ["60Hz", "75Hz", "100Hz", "144Hz", "240Hz"],
      },
      // {
      //   title: "Màn hình cong",
      //   items: ['24" Curved', '27" Curved', '32" Curved', 'Trên 32" Curved'],
      // },
      {
        title: "Kích thước",
        items: ['Màn hình 22"', 'Màn hình 24"', 'Màn hình 27"', 'Màn hình 29"', 'Màn hình 32"', 'Màn hình Trên 32"'],
      },
      // {
      //   title: "Màn hình đồ họa",
      //   items: ['Màn hình đồ họa 24"', 'Màn hình đồ họa 27"', 'Màn hình đồ họa 32"'],
      // },
      // {
      //   title: "Phụ kiện màn hình",
      //   items: ["Giá treo màn hình", "Cáp HDMI, DP, LAN"],
      // },
      // {
      //   title: "Màn hình di động",
      //   items: ["Full HD 1080p", "2K 1440p", "Có cảm ứng"],
      // },
    ],
  },
  {
    id: "ban-phim",
    label: "Bàn phím",
    sections: [
      {
        title: "Thương hiệu",
        items: ["AKKO", "AULA", "Dare-U", "Durgod", "Leobog", "Keychron", "FL-Esports", "Corsair", "E-Dra", "Cidoo", "Machenike", "ASUS", "Logitech", "Razer", "Leopold", "Steelseries", "Rapoo", "VGN", "MadLions", "SKYLOONG"],
      },
      {
        title: "Giá tiền",
        items: ["Dưới 1 triệu", "1 triệu - 2 triệu", "2 triệu - 3 triệu", "3 triệu - 4 triệu", "Trên 4 triệu"],
      },
      {
        title: "Kết nối",
        items: ["Bluetooth", "Wireless"],
      },
      // {
      //   title: "Phụ kiện bàn phím cơ",
      //   items: ["Keycaps", "Dwarf Factory", "Kê tay"],
      // },
      // {
      //   title: "Bàn phím Rapid Trigger",
      //   items: ["Wooting style", "Hall Effect"],
      // },
    ],
  },
  {
    id: "chuot-lot-chuot",
    label: "Chuột + Lót chuột",
    sections: [
      {
        title: "Thương hiệu chuột",
        items: ["Logitech", "Razer", "Corsair", "Microsoft", "Dare U", "ASUS", "Steelseries", "Glorious", "Rapoo", "HyperX", "ATK"],
      },
      {
        title: "Chuột theo giá tiền",
        items: ["Dưới 500 nghìn", "Từ 500 nghìn - 1 triệu", "Từ 1 triệu - 2 triệu", "Trên 2 triệu - 3 triệu", "Trên 3 triệu"],
      },
      {
        title: "Loại Chuột",
        items: ["Chuột chơi game", "Chuột văn phòng"],
      },
      // {
      //   title: "Logitech",
      //   items: ["Logitech Gaming", "Logitech Văn phòng"],
      // },
      {
        title: "Thương hiệu lót chuột",
        items: ["GEARVN", "ASUS", "Steelseries", "Dare-U", "Razer", "SKYLOONG"],
      },
      // {
      //   title: "Các loại lót chuột",
      //   items: ["Mềm", "Cứng", "Dày", "Mỏng", "Viền có led"],
      // },
      {
        title: "Lót chuột theo size",
        items: ["Nhỏ", "Vừa", "Lớn"],
      },
    ],
  },
  {
    id: "tai-nghe",
    label: "Tai Nghe",
    sections: [
      {
        title: "Thương hiệu tai nghe",
        items: ["ASUS", "HyperX", "Corsair", "Razer", "ONIKUMA", "Steelseries", "Rapoo", "Logitech", "Edifier"],
      },
      {
        title: "Tai nghe theo giá",
        items: ["Tai nghe dưới 1 triệu", "Tai nghe 1 triệu đến 2 triệu", "Tai nghe 2 đến 3 triệu", "Tai nghe 3 đến 4 triệu", "Tai nghe trên 4 triệu"],
      },
      {
        title: "Kiểu kết nối",
        items: ["Tai nghe Wireless", "Tai nghe Bluetooth"],
      },
      {
        title: "Kiểu tai nghe",
        items: ["Tai nghe Over-ear", "Tai nghe Gaming In-ear"],
      },
    ],
  },
  {
    id: "ghe-ban",
    label: "Ghế - Bàn",
    sections: [
      {
        title: "Thương hiệu ghế Gaming",
        items: ["Corsair", "Warrior", "E-DRA", "DXRacer", "Cougar", "AKRacing", "Razer"],
      },
      // {
      //   title: "Thương hiệu ghế CTH",
      //   items: ["Warrior", "Sihoo", "E-Dra"],
      // },
      {
        title: "Kiểu ghế",
        items: ["Ghế Công thái học", "Ghế Gaming"],
      },
      {
        title: "Bàn Gaming",
        items: ["Bàn Gaming DXRacer", "Bàn Gaming E-Dra", "Bàn Gaming Warrior"],
      },
      {
        title: "Bàn công thái học",
        items: ["Bàn CTH Warrior", "Phụ kiện bàn ghế"],
      },
      {
        title: "Giá tiền",
        items: ["Dưới 5 triệu", "Từ 5 đến 10 triệu", "Trên 10 triệu"],
      },
    ],
  },
    {
    id: "handheld-console",
    label: "Handheld Console",
    sections: [
      {
        title: "Thương hiệu",
        items: ["Lenovo", "MSI", "Logitech", "DareU", "Machenike", "Rapoo"],
      },
      {
        title: "Nhóm sản phẩm",
        items: ["Máy chơi game cầm tay", "Tay cầm chơi game", "Vô lăng chơi game"],
      },
      {
        title: "Giá bán",
        items: ["Dưới 1 triệu", "Từ 1 đến 5 triệu", "Từ 5 đến 15 triệu", "Trên 15 triệu"],
      },
    ],
  },
  {
    id: "phu-kien",
    label: "Phụ kiện",
    sections: [
      {
        title: "Thương hiệu",
        items: ["Ugreen", "Belkin", "C-Tech"],
      },
      {
        title: "Nhóm sản phẩm",
        items: ["Cáp sạc", "Hub chuyển đổi", "Củ sạc"],
      },
     
    ],
  },
];