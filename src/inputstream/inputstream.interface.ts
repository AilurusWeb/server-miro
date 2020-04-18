// src/inputstream/inputstream.interface.ts


import { RollsParser as Rolls } from "./rollsparser.interface";

interface InputStream {
  [id: number]: Rolls
}

export { InputStream };