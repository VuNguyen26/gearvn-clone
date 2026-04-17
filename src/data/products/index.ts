import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Product } from "@/types/product";
import { unstable_cache } from 'next/cache';

// Bước 1: Hàm fetch gốc - Chỉ chạy khi Cache hết hạn
const fetchAllFromFirebase = async () => {
  // Log này chỉ xuất hiện khi Vercel thực sự gọi tới Firebase
  console.log("🔥 [FIREBASE] Đang gọi Firebase... (Tốn Quota)");
  
  try {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    })) as Product[];
    
    console.log(`✅ [FIREBASE] Đã lấy thành công ${data.length} sản phẩm.`);
    return data;
  } catch (error) {
    console.error("❌ [FIREBASE] Lỗi fetch:", error);
    return [];
  }
};

// Bước 2: Cấu hình Cache
const getCachedProducts = unstable_cache(
  async () => fetchAllFromFirebase(),
  ['all-products-list'],
  { revalidate: 3600 } 
);

// Bước 3: Hàm export chính
export const products = async (): Promise<Product[]> => {
  // Vì unstable_cache không hỗ trợ log trực tiếp khi "hit cache", 
  // chúng ta log trước khi gọi nó.
  console.log("📡 [CACHE] Đang kiểm tra dữ liệu từ Server Cache...");
  
  const data = await getCachedProducts();
  return data;
};