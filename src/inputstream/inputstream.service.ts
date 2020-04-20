/**
 * Data Model Interfaces
 */

import { InputStream } from "./inputstream.interface";
import { InputStreamController } from "./inputstream.class";

/**
 * In-Memory Store
 */

let stream = "2d6+6 1d10 "

/**
 * Service Methods
 */

export const parse = async (value: string): Promise<InputStream> => {
  return new InputStreamController(value).getRolls();
};