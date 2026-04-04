import { Product } from "@/types/product";
import { laptops } from "./laptops";
import { laptopgamings } from "./laptopgamings";
import { mainboards } from "./mainboards";
import { cpus } from "./cpus";
import { vgas } from "./vgas";
import { ssds } from "./ssds";
import { rams } from "./rams";
import { sdcards } from "./sdcards";
import { speakers } from "./speakers";
import { microphones } from "./microphones";
import { webcams } from "./webcams";
import { monitors } from "./monitors";
import { mouses } from "./mouses";
import { mousepads } from "./mousepads";
import { chairs } from "./chairs";
import { tables } from "./tables";
import { keyboards } from "./keyboards";
import { pcs } from "./pcs";
import { headphones } from "./headphones";
import { handheldConsoles } from "./handheld_consoles";
import { accessories } from "./accessories";

export const products = async (): Promise<Product[]> => {
  try {
    // Chạy tất cả các hàm cùng một lúc (Parallel)
    const results = await Promise.all([
      laptops(),
      laptopgamings(),
      mainboards(),
      cpus(),
      vgas(),
      ssds(),
      rams(),
      sdcards(),
      speakers(),
      microphones(),
      webcams(),
      monitors(),
      mouses(),
      mousepads(),
      chairs(),
      tables(),
      keyboards(),
      pcs(),
      headphones(),
      handheldConsoles(),
      accessories(),
    ]);

    // results là mảng các mảng [ [laptop1, laptop2], [cpu1, cpu2], ... ]
    // Dùng flat() để trải phẳng thành 1 mảng Product[] duy nhất
    return results.flat();
  } catch (error) {
    console.error("Lỗi khi gom tất cả sản phẩm:", error);
    return [];
  }
};