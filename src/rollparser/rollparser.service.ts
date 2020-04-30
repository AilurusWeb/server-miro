/**
 * Data Model Interfaces
 */

import { T_Rolls, T_Roll } from "./rollparser.interface";
import { C_RollParser } from "./rollparser.class";

/**
 * Service Methods
 */

export const parse = async (value: string): Promise<T_Roll> => {
  return new C_RollParser(value).get();
};