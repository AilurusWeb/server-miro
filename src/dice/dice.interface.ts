// src/dice/dice.interface.ts

/**
 * Dice class structure
 */
export interface I_Dice {
  get(side: number): T_Dice
}


/**
 * Dice data structure
 */
export type T_Dice = {
  side: number,
  value: number
}

/**
 * Dices data structure
 */
export type T_Dices = {
  list: Array<T_Dice>,
  sum: number
}