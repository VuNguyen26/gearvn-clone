import { Product } from "@/types/product";
import { laptops } from "./laptops";
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

export const products: Product[] = [
  ...laptops,
  ...mainboards,
  ...cpus,
  ...vgas,
  ...ssds,
  ...rams,
  ...sdcards,
  ...speakers,
  ...microphones,
  ...webcams,
  ...monitors,
  ...mouses,
  ...mousepads,
  ...chairs,
  ...tables,
  ...keyboards,
  ...pcs,
  ...headphones,
];

export default products;