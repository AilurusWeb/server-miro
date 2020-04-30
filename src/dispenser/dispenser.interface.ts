// src/dispenser/dispenser.interface.ts

import { T_Rolls } from "../rollparser/rollparser.interface";

interface I_Dispenser {
  get(): T_Rolls
}

export { I_Dispenser };