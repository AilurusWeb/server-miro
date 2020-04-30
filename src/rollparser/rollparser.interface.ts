// src/dice/dice.interface.ts

import { T_Dice } from "../dice/dice.interface"

/**
 * RollParser class structure
 */
export interface I_RollParser {
  get(): T_Roll;
}

export enum ROLL_TYPES {
  type_dice,
  type_monster
}

/**
 * Rolls data structure
 */
export type T_Rolls = {
  [ROLL_TYPES: string]: Array<T_Roll>;
}

/**
 * Roll data structure
 */
export type T_Roll = {
  input: string,
  dices: {
    list: Array<T_Dice>,
    sum: number
  },
  modifiers: number,
  sum: number
}