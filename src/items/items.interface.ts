// src/items/items.interface.ts

import { Item } from "./item.interface";

interface Items {
  [key: number]: Item;
}

export { Items };