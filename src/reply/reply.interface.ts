// src/reply/reply.interface.ts

import { T_Rolls } from "../rollparser/rollparser.interface";

/**
 * Structure of Class Channel
 */
export interface I_Reply {
  get(): T_Reply;
}

/**
 * Structure of Data Channel
 */
export type T_Reply = {
  user: string,
  date: string,
  rolls: T_Rolls
}