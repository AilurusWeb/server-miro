/**
 * Data Model Interfaces
 */
import { T_Rolls } from "../rollparser/rollparser.interface";
import { C_Dispenser } from "./dispenser.class";

/**
 * Service Methods
 */

export const all = async (value: string): Promise<T_Rolls> => {
  return new C_Dispenser(value).get();
};