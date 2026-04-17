import HotDealsGamingPage from "@/components/home/HotDealsGamingPage";
import { getProductsByCategory } from "@/lib/products";

export default async function LaptopGamingPage() {
  const laptopgaming = await getProductsByCategory("laptop_gaming");
  return <HotDealsGamingPage products={laptopgaming} />;
}