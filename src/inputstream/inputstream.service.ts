/**
 * Data Model Interfaces
 */

import { OutputStream } from "./inputstream.interface";
import { InputStreamController } from "./inputstream.class";

/**
 * In-Memory Store
 */

let stream = "2d6+6 1d10 "

/**
 * Service Methods
 */

export const parse = async (value: string): Promise<OutputStream> => {
  return new InputStreamController(value).getRolls();
};