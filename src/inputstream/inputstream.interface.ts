// src/inputstream/inputstream.interface.ts


interface OutputStream {
  [type: string]: DicesParser | MonstersParser;
}

export { OutputStream };