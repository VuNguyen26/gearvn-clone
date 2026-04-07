import HotDealsGamingPage from "@/components/home/HotDealsGamingPage";
import { laptopgamings,  } from "@/data/products/laptopgamings";

export default async function LaptopGamingPage() {
  // const laptopgaming = await laptopgamings();
  return <HotDealsGamingPage products={laptopgamings} />;
}