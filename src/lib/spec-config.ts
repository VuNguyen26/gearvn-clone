export type SpecConfigItem = {
  key: string;
  label: string;
};

const DEFAULT_SPEC_CONFIG: SpecConfigItem[] = [
  { key: "brand", label: "Thương hiệu" },
  { key: "model", label: "Model" },
  { key: "color", label: "Màu sắc" },
  { key: "material", label: "Chất liệu" },
  { key: "size", label: "Kích thước" },
  { key: "connection", label: "Kết nối" },
  { key: "compatibility", label: "Tương thích" },
  { key: "warranty", label: "Bảo hành" },
];

const LAPTOP_SPECS: SpecConfigItem[] = [
  { key: "cpu", label: "CPU" },
  { key: "ram", label: "RAM" },
  { key: "storage", label: "Ổ cứng" },
  { key: "gpu", label: "Card đồ họa" },
  { key: "screen", label: "Màn hình" },
  { key: "refreshRate", label: "Tần số quét" },
  { key: "resolution", label: "Độ phân giải" },
  { key: "panel", label: "Tấm nền" },
  { key: "os", label: "Hệ điều hành" },
  { key: "ports", label: "Cổng kết nối" },
  { key: "keyboard", label: "Bàn phím" },
  { key: "audio", label: "Âm thanh" },
  { key: "webcam", label: "Webcam" },
  { key: "wifi", label: "WiFi" },
  { key: "bluetooth", label: "Bluetooth" },
  { key: "battery", label: "Pin" },
  { key: "weight", label: "Khối lượng" },
  { key: "dimensions", label: "Kích thước máy" },
  { key: "color", label: "Màu sắc" },
  { key: "warranty", label: "Bảo hành" },
];

const PC_SPECS: SpecConfigItem[] = [
  { key: "cpu", label: "CPU" },
  { key: "mainboard", label: "Mainboard" },
  { key: "ram", label: "RAM" },
  { key: "storage", label: "Ổ cứng" },
  { key: "gpu", label: "Card đồ họa" },
  { key: "psu", label: "Nguồn" },
  { key: "case", label: "Case" },
  { key: "cooling", label: "Tản nhiệt" },
  { key: "os", label: "Hệ điều hành" },
  { key: "ports", label: "Cổng kết nối" },
  { key: "wifi", label: "WiFi" },
  { key: "bluetooth", label: "Bluetooth" },
  { key: "warranty", label: "Bảo hành" },
];

const CPU_SPECS: SpecConfigItem[] = [
  { key: "series", label: "Dòng CPU" },
  { key: "socket", label: "Socket" },
  { key: "cores", label: "Số nhân" },
  { key: "threads", label: "Số luồng" },
  { key: "baseClock", label: "Xung cơ bản" },
  { key: "boostClock", label: "Xung tối đa" },
  { key: "cache", label: "Bộ nhớ đệm" },
  { key: "integratedGpu", label: "Đồ họa tích hợp" },
  { key: "tdp", label: "TDP" },
  { key: "architecture", label: "Kiến trúc" },
  { key: "warranty", label: "Bảo hành" },
];

const MAINBOARD_SPECS: SpecConfigItem[] = [
  { key: "chipset", label: "Chipset" },
  { key: "socket", label: "Socket" },
  { key: "formFactor", label: "Kích thước" },
  { key: "ramSupport", label: "Hỗ trợ RAM" },
  { key: "maxRam", label: "Dung lượng RAM tối đa" },
  { key: "ramSlots", label: "Số khe RAM" },
  { key: "storageSupport", label: "Khe lưu trữ" },
  { key: "pcie", label: "Khe PCIe" },
  { key: "ports", label: "Cổng kết nối" },
  { key: "network", label: "Mạng" },
  { key: "wifi", label: "WiFi" },
  { key: "bluetooth", label: "Bluetooth" },
  { key: "audio", label: "Âm thanh" },
  { key: "warranty", label: "Bảo hành" },
];

const VGA_SPECS: SpecConfigItem[] = [
  { key: "gpuModel", label: "GPU" },
  { key: "vram", label: "Bộ nhớ đồ họa" },
  { key: "memoryType", label: "Loại bộ nhớ" },
  { key: "memoryBus", label: "Bus bộ nhớ" },
  { key: "boostClock", label: "Xung nhịp" },
  { key: "cudaCores", label: "Số nhân xử lý" },
  { key: "ports", label: "Cổng xuất hình" },
  { key: "powerConnector", label: "Nguồn phụ" },
  { key: "psuRecommend", label: "Nguồn đề nghị" },
  { key: "dimensions", label: "Kích thước" },
  { key: "cooling", label: "Tản nhiệt" },
  { key: "warranty", label: "Bảo hành" },
];

const CASE_SPECS: SpecConfigItem[] = [
  { key: "caseType", label: "Loại case" },
  { key: "motherboardSupport", label: "Hỗ trợ mainboard" },
  { key: "material", label: "Chất liệu" },
  { key: "color", label: "Màu sắc" },
  { key: "sidePanel", label: "Hông case" },
  { key: "fanSupport", label: "Hỗ trợ quạt" },
  { key: "radiatorSupport", label: "Hỗ trợ radiator" },
  { key: "gpuMaxLength", label: "Chiều dài VGA tối đa" },
  { key: "cpuCoolerMaxHeight", label: "Chiều cao tản CPU tối đa" },
  { key: "psuSupport", label: "Hỗ trợ nguồn" },
  { key: "ports", label: "Cổng mặt trước" },
  { key: "dimensions", label: "Kích thước" },
  { key: "warranty", label: "Bảo hành" },
];

const PSU_SPECS: SpecConfigItem[] = [
  { key: "power", label: "Công suất" },
  { key: "efficiency", label: "Chuẩn hiệu suất" },
  { key: "modular", label: "Chuẩn dây" },
  { key: "fanSize", label: "Kích thước quạt" },
  { key: "inputVoltage", label: "Điện áp vào" },
  { key: "connectors", label: "Đầu cấp nguồn" },
  { key: "protection", label: "Mạch bảo vệ" },
  { key: "formFactor", label: "Chuẩn nguồn" },
  { key: "warranty", label: "Bảo hành" },
];

const COOLING_SPECS: SpecConfigItem[] = [
  { key: "coolingType", label: "Loại tản nhiệt" },
  { key: "socketSupport", label: "Hỗ trợ socket" },
  { key: "fanSize", label: "Kích thước quạt" },
  { key: "radiatorSize", label: "Kích thước radiator" },
  { key: "fanSpeed", label: "Tốc độ quạt" },
  { key: "airflow", label: "Lưu lượng gió" },
  { key: "noiseLevel", label: "Độ ồn" },
  { key: "rgb", label: "Đèn RGB" },
  { key: "dimensions", label: "Kích thước" },
  { key: "warranty", label: "Bảo hành" },
];

const SSD_SPECS: SpecConfigItem[] = [
  { key: "capacity", label: "Dung lượng" },
  { key: "ssdType", label: "Loại ổ" },
  { key: "interface", label: "Giao tiếp" },
  { key: "formFactor", label: "Chuẩn kích thước" },
  { key: "readSpeed", label: "Tốc độ đọc" },
  { key: "writeSpeed", label: "Tốc độ ghi" },
  { key: "nand", label: "NAND" },
  { key: "tbw", label: "Độ bền TBW" },
  { key: "warranty", label: "Bảo hành" },
];

const HDD_SPECS: SpecConfigItem[] = [
  { key: "capacity", label: "Dung lượng" },
  { key: "interface", label: "Giao tiếp" },
  { key: "rpm", label: "Tốc độ quay" },
  { key: "cache", label: "Bộ nhớ đệm" },
  { key: "size", label: "Kích thước" },
  { key: "readSpeed", label: "Tốc độ đọc" },
  { key: "writeSpeed", label: "Tốc độ ghi" },
  { key: "warranty", label: "Bảo hành" },
];

const RAM_SPECS: SpecConfigItem[] = [
  { key: "capacity", label: "Dung lượng" },
  { key: "ramType", label: "Loại RAM" },
  { key: "bus", label: "Bus RAM" },
  { key: "latency", label: "Độ trễ" },
  { key: "voltage", label: "Điện áp" },
  { key: "module", label: "Số thanh" },
  { key: "rgb", label: "Đèn RGB" },
  { key: "heatspreader", label: "Tản nhiệt" },
  { key: "compatibility", label: "Tương thích" },
  { key: "warranty", label: "Bảo hành" },
];

const SDCARD_SPECS: SpecConfigItem[] = [
  { key: "capacity", label: "Dung lượng" },
  { key: "cardType", label: "Loại thẻ" },
  { key: "speedClass", label: "Chuẩn tốc độ" },
  { key: "readSpeed", label: "Tốc độ đọc" },
  { key: "writeSpeed", label: "Tốc độ ghi" },
  { key: "application", label: "Thiết bị phù hợp" },
  { key: "warranty", label: "Bảo hành" },
];

const SPEAKER_SPECS: SpecConfigItem[] = [
  { key: "speakerType", label: "Loại loa" },
  { key: "power", label: "Công suất" },
  { key: "driver", label: "Driver" },
  { key: "frequencyResponse", label: "Dải tần" },
  { key: "connection", label: "Kết nối" },
  { key: "bluetooth", label: "Bluetooth" },
  { key: "rgb", label: "Đèn RGB" },
  { key: "dimensions", label: "Kích thước" },
  { key: "warranty", label: "Bảo hành" },
];

const MICROPHONE_SPECS: SpecConfigItem[] = [
  { key: "microphoneType", label: "Loại microphone" },
  { key: "polarPattern", label: "Hướng thu" },
  { key: "frequencyResponse", label: "Dải tần" },
  { key: "sensitivity", label: "Độ nhạy" },
  { key: "connection", label: "Kết nối" },
  { key: "compatibility", label: "Tương thích" },
  { key: "accessories", label: "Phụ kiện đi kèm" },
  { key: "warranty", label: "Bảo hành" },
];

const WEBCAM_SPECS: SpecConfigItem[] = [
  { key: "resolution", label: "Độ phân giải" },
  { key: "fps", label: "Khung hình" },
  { key: "sensor", label: "Cảm biến" },
  { key: "microphone", label: "Micro tích hợp" },
  { key: "focus", label: "Lấy nét" },
  { key: "connection", label: "Kết nối" },
  { key: "compatibility", label: "Tương thích" },
  { key: "privacyShutter", label: "Nắp che riêng tư" },
  { key: "warranty", label: "Bảo hành" },
];

const MONITOR_SPECS: SpecConfigItem[] = [
  { key: "size", label: "Kích thước" },
  { key: "resolution", label: "Độ phân giải" },
  { key: "panel", label: "Tấm nền" },
  { key: "hz", label: "Tần số quét" },
  { key: "responseTime", label: "Thời gian phản hồi" },
  { key: "brightness", label: "Độ sáng" },
  { key: "colorGamut", label: "Độ phủ màu" },
  { key: "aspectRatio", label: "Tỉ lệ màn hình" },
  { key: "ports", label: "Cổng kết nối" },
  { key: "vesa", label: "Chuẩn VESA" },
  { key: "adjustment", label: "Khả năng điều chỉnh" },
  { key: "warranty", label: "Bảo hành" },
];

const KEYBOARD_SPECS: SpecConfigItem[] = [
  { key: "keyboardType", label: "Loại bàn phím" },
  { key: "switch", label: "Switch" },
  { key: "layout", label: "Layout" },
  { key: "keycap", label: "Keycap" },
  { key: "led", label: "Đèn nền" },
  { key: "connection", label: "Kết nối" },
  { key: "battery", label: "Pin" },
  { key: "compatibility", label: "Tương thích" },
  { key: "size", label: "Kích thước" },
  { key: "weight", label: "Khối lượng" },
  { key: "warranty", label: "Bảo hành" },
];

const MOUSE_SPECS: SpecConfigItem[] = [
  { key: "mouseType", label: "Loại chuột" },
  { key: "sensor", label: "Cảm biến" },
  { key: "dpi", label: "DPI" },
  { key: "buttons", label: "Số nút" },
  { key: "switch", label: "Switch" },
  { key: "connection", label: "Kết nối" },
  { key: "battery", label: "Pin" },
  { key: "rgb", label: "Đèn RGB" },
  { key: "weight", label: "Khối lượng" },
  { key: "compatibility", label: "Tương thích" },
  { key: "warranty", label: "Bảo hành" },
];

const MOUSEPAD_SPECS: SpecConfigItem[] = [
  { key: "surface", label: "Bề mặt" },
  { key: "base", label: "Đế lót" },
  { key: "size", label: "Kích thước" },
  { key: "thickness", label: "Độ dày" },
  { key: "material", label: "Chất liệu" },
  { key: "rgb", label: "Đèn RGB" },
  { key: "warranty", label: "Bảo hành" },
];

const HEADSET_SPECS: SpecConfigItem[] = [
  { key: "headsetType", label: "Loại tai nghe" },
  { key: "driver", label: "Driver" },
  { key: "frequencyResponse", label: "Dải tần" },
  { key: "microphone", label: "Microphone" },
  { key: "connection", label: "Kết nối" },
  { key: "wireless", label: "Không dây" },
  { key: "battery", label: "Pin" },
  { key: "compatibility", label: "Tương thích" },
  { key: "rgb", label: "Đèn RGB" },
  { key: "warranty", label: "Bảo hành" },
];

const CHAIR_SPECS: SpecConfigItem[] = [
  { key: "chairType", label: "Loại ghế" },
  { key: "material", label: "Chất liệu" },
  { key: "frame", label: "Khung ghế" },
  { key: "maxLoad", label: "Tải trọng tối đa" },
  { key: "recline", label: "Độ ngả" },
  { key: "armrest", label: "Tay vịn" },
  { key: "heightAdjust", label: "Điều chỉnh độ cao" },
  { key: "headrest", label: "Gối đầu" },
  { key: "lumbarSupport", label: "Đệm lưng" },
  { key: "dimensions", label: "Kích thước" },
  { key: "warranty", label: "Bảo hành" },
];

const DESK_SPECS: SpecConfigItem[] = [
  { key: "deskType", label: "Loại bàn" },
  { key: "material", label: "Chất liệu" },
  { key: "size", label: "Kích thước" },
  { key: "maxLoad", label: "Tải trọng tối đa" },
  { key: "adjustable", label: "Nâng hạ" },
  { key: "heightRange", label: "Khoảng chiều cao" },
  { key: "frame", label: "Khung bàn" },
  { key: "color", label: "Màu sắc" },
  { key: "warranty", label: "Bảo hành" },
];

const NETWORK_SPECS: SpecConfigItem[] = [
  { key: "deviceType", label: "Loại thiết bị" },
  { key: "standard", label: "Chuẩn mạng" },
  { key: "speed", label: "Tốc độ" },
  { key: "ports", label: "Số cổng" },
  { key: "band", label: "Băng tần" },
  { key: "coverage", label: "Phạm vi phủ sóng" },
  { key: "security", label: "Bảo mật" },
  { key: "compatibility", label: "Tương thích" },
  { key: "warranty", label: "Bảo hành" },
];

const SOFTWARE_SPECS: SpecConfigItem[] = [
  { key: "licenseType", label: "Loại giấy phép" },
  { key: "duration", label: "Thời hạn" },
  { key: "platform", label: "Nền tảng hỗ trợ" },
  { key: "version", label: "Phiên bản" },
  { key: "activation", label: "Kích hoạt" },
  { key: "region", label: "Khu vực sử dụng" },
];

const HANDHELD_SPECS: SpecConfigItem[] = [
  { key: "screen", label: "Màn hình" },
  { key: "cpu", label: "CPU" },
  { key: "gpu", label: "GPU" },
  { key: "ram", label: "RAM" },
  { key: "storage", label: "Bộ nhớ" },
  { key: "battery", label: "Pin" },
  { key: "connection", label: "Kết nối" },
  { key: "weight", label: "Khối lượng" },
  { key: "os", label: "Hệ điều hành" },
  { key: "warranty", label: "Bảo hành" },
];

const CONSOLE_SPECS: SpecConfigItem[] = [
  { key: "cpu", label: "CPU" },
  { key: "gpu", label: "GPU" },
  { key: "ram", label: "RAM" },
  { key: "storage", label: "Bộ nhớ" },
  { key: "resolution", label: "Độ phân giải hỗ trợ" },
  { key: "fps", label: "Khung hình hỗ trợ" },
  { key: "ports", label: "Cổng kết nối" },
  { key: "connection", label: "Kết nối không dây" },
  { key: "accessories", label: "Phụ kiện đi kèm" },
  { key: "warranty", label: "Bảo hành" },
];

const ACCESSORY_SPECS: SpecConfigItem[] = [
  { key: "accessoryType", label: "Loại phụ kiện" },
  { key: "connection", label: "Kết nối" },
  { key: "input", label: "Đầu vào" },
  { key: "output", label: "Đầu ra" },
  { key: "power", label: "Công suất" },
  { key: "length", label: "Chiều dài dây" },
  { key: "material", label: "Chất liệu" },
  { key: "compatibility", label: "Tương thích" },
  { key: "warranty", label: "Bảo hành" },
];

const SERVICE_SPECS: SpecConfigItem[] = [
  { key: "serviceType", label: "Loại dịch vụ" },
  { key: "scope", label: "Phạm vi" },
  { key: "duration", label: "Thời gian thực hiện" },
  { key: "support", label: "Hỗ trợ" },
  { key: "note", label: "Ghi chú" },
];

export const SPEC_CONFIG: Record<string, SpecConfigItem[]> = {
  laptop: LAPTOP_SPECS,
  "laptop-gaming": LAPTOP_SPECS,

  pc: PC_SPECS,
  "pc-gaming": PC_SPECS,
  "pc-gvn": PC_SPECS,

  cpu: CPU_SPECS,
  mainboard: MAINBOARD_SPECS,
  vga: VGA_SPECS,

  case: CASE_SPECS,
  psu: PSU_SPECS,
  cooling: COOLING_SPECS,

  ssd: SSD_SPECS,
  hdd: HDD_SPECS,
  ram: RAM_SPECS,
  sdcard: SDCARD_SPECS,

  speaker: SPEAKER_SPECS,
  microphone: MICROPHONE_SPECS,
  webcam: WEBCAM_SPECS,

  monitor: MONITOR_SPECS,
  keyboard: KEYBOARD_SPECS,
  mouse: MOUSE_SPECS,
  mousepad: MOUSEPAD_SPECS,
  headset: HEADSET_SPECS,
  headphone: HEADSET_SPECS,

  chair: CHAIR_SPECS,
  desk: DESK_SPECS,
  table: DESK_SPECS,

  network: NETWORK_SPECS,
  software: SOFTWARE_SPECS,

  handheld: HANDHELD_SPECS,
  console: CONSOLE_SPECS,

  accessory: ACCESSORY_SPECS,
  service: SERVICE_SPECS,
};

export const CATEGORY_SPEC_ALIASES: Record<string, string> = {
  "laptop": "laptop",
  "laptop-gaming": "laptop-gaming",
  "laptopgaming": "laptop-gaming",

  "pc": "pc",
  "pc-gaming": "pc-gaming",
  "pcgaming": "pc-gaming",
  "pc-gvn": "pc-gvn",
  "pcgvn": "pc-gvn",

  "main": "mainboard",
  "mainboard": "mainboard",
  "motherboard": "mainboard",

  "cpu": "cpu",

  "vga": "vga",
  "gpu": "vga",
  "cardmanhinh": "vga",

  "case": "case",
  "vo-case": "case",

  "psu": "psu",
  "nguon": "psu",
  "power": "psu",

  "cooling": "cooling",
  "tan": "cooling",
  "tannhiet": "cooling",
  "tan-nhiet": "cooling",

  "ssd": "ssd",
  "hdd": "hdd",
  "storage": "ssd",
  "o-cung": "ssd",

  "ram": "ram",

  "sdcard": "sdcard",
  "the-nho": "sdcard",
  "thenho": "sdcard",
  "memorycard": "sdcard",

  "speaker": "speaker",
  "loa": "speaker",

  "microphone": "microphone",
  "micro": "microphone",
  "mic": "microphone",

  "webcam": "webcam",

  "monitor": "monitor",
  "man-hinh": "monitor",
  "manhinh": "monitor",
  "screen": "monitor",

  "keyboard": "keyboard",
  "ban-phim": "keyboard",
  "banphim": "keyboard",

  "mouse": "mouse",
  "chuot": "mouse",

  "mousepad": "mousepad",
  "lot-chuot": "mousepad",
  "lotchuot": "mousepad",
  "pad": "mousepad",

  "headset": "headset",
  "headphone": "headset",
  "tai-nghe": "headset",
  "tainghe": "headset",

  "chair": "chair",
  "ghe": "chair",

  "desk": "desk",
  "table": "desk",
  "ban": "desk",

  "network": "network",
  "mang": "network",
  "router": "network",

  "software": "software",
  "phan-mem": "software",
  "phanmem": "software",

  "handheld": "handheld",
  "console": "console",

  "accessory": "accessory",
  "phu-kien": "accessory",
  "phukien": "accessory",

  "service": "service",
  "dich-vu": "service",
  "dichvu": "service",
};

export function normalizeSpecCategory(category?: string): string {
  if (!category) return "";

  const normalized = category
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return CATEGORY_SPEC_ALIASES[normalized] || normalized;
}

export function getSpecConfigByCategory(category?: string): SpecConfigItem[] {
  const normalizedCategory = normalizeSpecCategory(category);
  return SPEC_CONFIG[normalizedCategory] || DEFAULT_SPEC_CONFIG;
}