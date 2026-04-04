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

export  const products: Product[] = [
  ...(await laptops()),
  ...(await laptopgamings()),
  ...await mainboards(),
  ...await cpus(),
  ...await vgas(),
  ...await ssds(),
  ...await rams(),
  ...await sdcards(),
  ...await speakers(),
  ...await microphones(),
  ...await webcams(),
  ...await monitors(),
  ...await mouses(),
  ...await mousepads(),
  ...await chairs(),
  ...await tables(),
  ...await keyboards(),
  ...await pcs(),
  ...await headphones(),
  ...await handheldConsoles(),
  ...await accessories(),
];