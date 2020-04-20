// src/inputstream/inputstream.interface.ts


interface OuputStream {
  [type: string]: DicesParser | MonstersParser;
}

export { OuputStream };