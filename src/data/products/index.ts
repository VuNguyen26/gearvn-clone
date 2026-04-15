import { Product } from "@/types/product";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
// import { laptops } from "./laptops";
// import { laptopgamings } from "./laptopgamings";
// import { mainboards } from "./mainboards";
// import { cpus } from "./cpus";
// import { vgas } from "./vgas";
// import { ssds } from "./ssds";
// import { rams } from "./rams";
// import { sdcards } from "./sdcards";
// import { speakers } from "./speakers";
// import { microphones } from "./microphones";
// import { webcams } from "./webcams";
// import { monitors } from "./monitors";
// import { mouses } from "./mouses";
// import { mousepads } from "./mousepads";
// import { chairs } from "./chairs";
// import { tables } from "./tables";
// import { keyboards } from "./keyboards";
// import { pcs } from "./pcs";
// import { headphones } from "./headphones";
// import { handheldConsoles } from "./handheld_consoles";
// import { accessories } from "./accessories";
// import { cases } from "./cases";
// import { psus } from "./psus";
// import { coolers } from "./coolers";

// export const products = async (): Promise<Product[]> => {
//   try {
//     // Chạy tất cả các hàm cùng một lúc (Parallel)
//     const results = await Promise.all([
//       laptops(),
//       laptopgamings(),
//       mainboards(),
//       cpus(),
//       vgas(),
//       ssds(),
//       rams(),
//       sdcards(),
//       speakers(),
//       microphones(),
//       webcams(),
//       monitors(),
//       mouses(),
//       mousepads(),
//       chairs(),
//       tables(),
//       keyboards(),
//       pcs(),
//       headphones(),
//       handheldConsoles(),
//       accessories(),
//       cases(),
//       psus(),
//       coolers(),
//     ]);

//     // results là mảng các mảng [ [laptop1, laptop2], [cpu1, cpu2], ... ]
//     // Dùng flat() để trải phẳng thành 1 mảng Product[] duy nhất
//     return results.flat();
//   } catch (error) {
//     console.error("Lỗi khi gom tất cả sản phẩm:", error);
//     return [];
//   }
// };
// export const products: Product[] = [
//   ...laptops,
//   ...laptopgamings,
//   ...mainboards,
//   ...cpus,
//   ...vgas,
//   ...ssds,
//   ...rams,
//   ...sdcards,
//   ...speakers,
//   ...microphones,
//   ...webcams,
//   ...monitors,
//   ...mouses,
//   ...mousepads,
//   ...chairs,
//   ...tables,
//   ...keyboards,
//   ...pcs,
//   ...headphones,
//   ...handheldConsoles,
//   ...accessories,
//   ...cases,
//   ...psus,
//   ...coolers,
// ];
type ProductQuery = {
  category?: string;
  brand?: string;
  q?: string;
};
let fetchCount = 0;
let reads = 0;
export const products = async (
  query?: ProductQuery
): Promise<Product[]> => {
  const CACHE_KEY = "all_products_session";
  const isBrowser = typeof window !== "undefined";
  let allProducts: Product[] = [];
  // ✅ 1. Lấy từ session (client)
  if (isBrowser) {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      console.log("💾 Lấy từ session");
      allProducts = JSON.parse(cached);
    }
  }
  // ✅ 2. Nếu chưa có thì fetch 1 lần
  if (allProducts.length === 0) {
    try {
      fetchCount++; // 👈 thêm dòng này
      console.log(`🚀 Fetch từ Firebase lần thứ: ${fetchCount}`);
      const snapshot = await getDocs(collection(db, "products"));
      console.log(`📊 Firebase đọc: ${snapshot.size} documents`);
      console.log("Reads: ",reads + snapshot.size)
      allProducts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      // lưu cache
      if (isBrowser) {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(allProducts));
      }
    } catch (error) {
      console.error("❌ Lỗi fetch:", error);
      return [];
    }
  }
  // ✅ 3. Nếu không có query → trả tất cả
  if (!query) return allProducts;
  // ✅ 4. LỌC NGAY TẠI ĐÂY
  return allProducts.filter(p => {
    // category
    if (query.category && p.category !== query.category) return false;
    // brand (trong specs)
    if (
      query.brand &&
      p.specs?.brand?.toLowerCase() !== query.brand.toLowerCase()
    ) {
      return false;
    }
    // search theo tên
    if (
      query.q &&
      !p.name.toLowerCase().includes(query.q.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
};